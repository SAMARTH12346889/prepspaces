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
  RotateCcw
} from "lucide-react";

export default function DataEngineeringDistributedSections() {
  return (
    <div className="space-y-10">
      {/* SECTION 0: Module 15: Distributed Systems for Data Engineers Overview & Roadmap */}
      <section id="overview" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Roadmap
          </span>
          <span className="text-xs font-mono text-stone-500">Course Roadmap</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          Module 15: Distributed Systems for Data Engineers Overview &amp; Roadmap
        </h2>
        <div className="space-y-3">
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Module 15 — Distributed Systems for Data Engineers</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">DATA ENGINEERING • ADVANCED LEVEL</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Module Overview</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Distributed systems are the foundation of modern large-scale data engineering platforms. Technologies such as Apache Spark, Apache Kafka, Hadoop, Cassandra, distributed databases, cloud data warehouses, and data lakes rely on distributed computing principles.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">When an organization processes millions or billions of records, a single computer may not have enough processing power, memory, storage, or network capacity.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Instead of relying on one machine, a distributed system uses multiple computers that communicate and coordinate to perform a larger task.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">For example, imagine an e-commerce company processing 100 million customer transactions every day.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A single machine might struggle with:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Processing the entire dataset within the required time.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Storing all historical transactions.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Handling thousands of simultaneous requests.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Recovering from hardware failures.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Maintaining reliable access when a component becomes unavailable.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A distributed architecture solves these challenges by spreading data and workloads across multiple machines.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">However, distributing a system introduces new challenges:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Machines can fail independently.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Network communication can become unreliable.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Different machines may see different versions of data.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Messages can be delayed, duplicated, or lost.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Multiple processes may update the same information simultaneously.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Maintaining consistency becomes more complicated.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">This module explains how distributed systems work and why these principles are essential for building dependable data platforms.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Learning objectives</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">By completing this module, you should be able to:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Understand distributed computing architectures.</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Explain how independent processes communicate.`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Understand RPC, serialization, and network communication.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Design data partitioning and replication strategies.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Understand leader-follower architecture.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Differentiate consistency models.</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Explain the CAP theorem and quorum-based systems.`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Understand fault tolerance and consensus.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Implement retry mechanisms and idempotent operations.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Understand backpressure and message delivery guarantees.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Design reliable distributed data pipelines.</p>
        </div>
      </section>

      {/* SECTION 1: 1. Introduction to Distributed Systems */}
      <section id="section-1" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 1
          </span>
          <span className="text-xs font-mono text-stone-500">Part 1 · Foundations &amp; Architecture</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          1. Introduction to Distributed Systems
        </h2>
        <div className="space-y-3">
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A distributed system is a collection of independent computers that communicate over a network and coordinate their activities to provide a unified service.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Each computer in the system is commonly called a node.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A node can be:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A physical server.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A virtual machine.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A cloud instance.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A containerized application.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A worker process running on a machine.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Although nodes operate independently, they work together to accomplish a shared objective.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>1.1 Understanding a single-machine system</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Consider a traditional application running on one machine.</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Single Computer`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">CPU • RAM • Disk • Network</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Application</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Business logic and processing</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Database</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Data stored on the same machine or attached storage</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The application executes its operations using the available resources of the machine.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">For a small application, this architecture can be perfectly sufficient.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">However, as the application grows, limitations appear.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Limited processing capacity: The CPU has a finite number of cores and available processing resources.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Limited memory: Large workloads may exceed the machine's available RAM.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Limited storage: The disk eventually becomes insufficient for the growing dataset.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Single-machine failure: If the machine goes down, the entire service may become unavailable unless redundancy exists elsewhere.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Limited scalability: Increasing capacity eventually requires upgrading the machine or changing the architecture.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>1.2 Understanding a distributed system</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Now imagine dividing the workload across multiple computers.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Client / Application</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Sends requests and receives results</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Network communication</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Node 1</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Worker A</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Node 2</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Worker B</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Node 3</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Worker C</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Coordination and data exchange</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Combined Processing and Storage</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Multiple nodes operate as one logical platform</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Each worker handles part of the workload.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">For example, suppose a company needs to process 90 million records.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">It can divide the dataset into three partitions:</p>
          <div className="my-4 overflow-x-auto rounded-xl border border-[#e7e3da] bg-white shadow-sm">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-stone-900 border-b border-[#e7e3da] font-semibold">
                <tr>
                  <th className="px-4 py-3">Node</th>                  <th className="px-4 py-3">Assigned records</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Node 1</td>                  <td className="px-4 py-2.5 text-stone-700">30 million</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Node 2</td>                  <td className="px-4 py-2.5 text-stone-700">30 million</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Node 3</td>                  <td className="px-4 py-2.5 text-stone-700">30 million</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Total</td>                  <td className="px-4 py-2.5 text-stone-700">90 million</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The workers can process their assigned records concurrently.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">After processing, the system combines the necessary results.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">This is the basic idea behind distributed data processing.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>1.3 Important characteristics of distributed systems</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Multiple independent nodes</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A distributed system contains multiple computing nodes. Each node has its own CPU, memory, operating system, and execution environment.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Network communication</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Nodes exchange information through network protocols rather than sharing the same physical memory.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Concurrency</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Multiple operations can execute simultaneously on different nodes.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Partial failure</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">One machine can fail while other machines continue working.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">This is one of the defining challenges of distributed systems.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">In a single-machine application, a complete machine failure may stop everything. In a distributed application, a component can fail without necessarily bringing down the entire platform.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Scalability</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Capacity can be increased by adding more computing or storage nodes, provided the architecture supports it.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Coordination</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Nodes must coordinate work, share information, and resolve conflicts when necessary.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>1.4 Why data engineers need distributed systems</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Data engineering systems frequently process much more data than one machine can efficiently handle.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Consider different data engineering workloads:</p>
          <div className="my-4 overflow-x-auto rounded-xl border border-[#e7e3da] bg-white shadow-sm">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-stone-900 border-b border-[#e7e3da] font-semibold">
                <tr>
                  <th className="px-4 py-3">Workload</th>                  <th className="px-4 py-3">Distributed system requirement</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Batch processing</td>                  <td className="px-4 py-2.5 text-stone-700">Process large datasets in parallel</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Stream processing</td>                  <td className="px-4 py-2.5 text-stone-700">Process continuous event streams</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Data storage</td>                  <td className="px-4 py-2.5 text-stone-700">Store large datasets across machines</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Data warehousing</td>                  <td className="px-4 py-2.5 text-stone-700">Execute analytical queries across distributed resources</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Message processing</td>                  <td className="px-4 py-2.5 text-stone-700">Deliver events between independent services</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Replication</td>                  <td className="px-4 py-2.5 text-stone-700">Maintain multiple copies of important data</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Fault recovery</td>                  <td className="px-4 py-2.5 text-stone-700">Continue processing after node failures</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">For example, Apache Spark distributes computation across worker nodes. Apache Kafka distributes topic partitions across brokers. Cassandra distributes data across nodes in a cluster.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Understanding distributed systems makes it easier to understand how these technologies actually work.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>1.5 Important limitations and trade-offs</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Distributed systems are not automatically faster or better than single-machine systems.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">They introduce additional overhead:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Network latency.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Serialization and deserialization.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Coordination between nodes.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Data shuffling.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Replication overhead.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">More complicated debugging.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Distributed failure handling.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">For a dataset of only a few thousand records, a single machine might be much more efficient.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Distributed architecture becomes valuable when its scalability, availability, storage, or processing requirements justify the additional complexity.</p>
        </div>
      </section>

      {/* SECTION 2: 2. Distributed Computing Architecture */}
      <section id="section-2" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 2
          </span>
          <span className="text-xs font-mono text-stone-500">Part 1 · Client-Server, Multi-Tier &amp; Microservices</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          2. Distributed Computing Architecture
        </h2>
        <div className="space-y-3">
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Distributed computing architecture describes how multiple machines are organized to perform computation, store information, and communicate with each other.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Different architectures are suitable for different workloads.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>2.1 Client-server architecture</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Client-server architecture is one of the fundamental distributed computing models.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A client sends a request to a server. The server processes the request and returns a response.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Examples:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A browser requesting data from a web server.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">An application requesting customer details from an API.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A data pipeline requesting records from a database.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A dashboard requesting an analytical query from a warehouse.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Client</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Sends request</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Server</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Processes request</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Request / Response</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Communication occurs over a network.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Example:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A React application needs customer data.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">const response = await fetch( "https://api.example.com/customers/101" ); const customer = await response.json(); console.log(customer);</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The frontend acts as a client. The backend API acts as a server.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The client does not need to know how the server stores or retrieves the customer information. It only needs to understand the API contract.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>2.2 Multi-tier architecture</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Real-world systems commonly separate responsibilities into multiple layers.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A three-tier architecture contains:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Presentation layer: Provides the user interface.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Application layer: Handles business logic and processes requests.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Data layer: Stores and retrieves information.</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Presentation Layer`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Web applications • Mobile applications • Dashboards</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Application Layer`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">APIs • Authentication • Business logic • Services</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Data Layer`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Databases • Data lakes • Data warehouses</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">This separation improves maintainability and allows each layer to scale independently.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">For example, the application layer might need ten servers to handle traffic, while the database layer might use a separate cluster optimized for storage and queries.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>2.3 Master-worker architecture</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Master-worker architecture divides work between a coordinating process and several worker processes.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The master assigns tasks, coordinates execution, and collects results.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Workers execute the assigned tasks.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Example:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A company wants to calculate total sales for an entire year using 12 monthly datasets.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The master assigns:</p>
          <div className="my-4 overflow-x-auto rounded-xl border border-[#e7e3da] bg-white shadow-sm">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-stone-900 border-b border-[#e7e3da] font-semibold">
                <tr>
                  <th className="px-4 py-3">Worker</th>                  <th className="px-4 py-3">Assigned workload</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Worker 1</td>                  <td className="px-4 py-2.5 text-stone-700">January–March</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Worker 2</td>                  <td className="px-4 py-2.5 text-stone-700">April–June</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Worker 3</td>                  <td className="px-4 py-2.5 text-stone-700">July–September</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Worker 4</td>                  <td className="px-4 py-2.5 text-stone-700">October–December</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Each worker calculates its subtotal.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The master combines the results:</p>
          <div className="p-4 my-3 rounded-xl bg-orange-50/60 border border-orange-200/80 text-stone-900 font-mono text-xs sm:text-sm text-center overflow-x-auto shadow-sm">
            <span className="font-semibold text-orange-900 tracking-wide">Annual\ Revenue = R_1+R_2+R_3+R_4</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">This is a useful conceptual model for understanding distributed task scheduling.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The term master is also being replaced by alternatives such as coordinator, controller, or primary in many modern systems. Architectures differ in how much work the coordinator performs and whether it can become a bottleneck.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>2.4 Peer-to-peer architecture</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">In a peer-to-peer system, nodes can communicate and provide services to one another without requiring every operation to pass through a central server.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Each peer can participate in distributing data, handling requests, or coordinating activities.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Examples include:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">BitTorrent file sharing.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Certain blockchain networks.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Peer-to-peer communication protocols.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Advantages include decentralization and the ability to distribute workloads.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Challenges include peer discovery, security, coordination, trust, and handling nodes that join or leave frequently.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>2.5 Microservices architecture</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Microservices architecture divides an application into smaller, independently deployable services.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">For example, an e-commerce system may contain:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">E-commerce Platform │ ├── User Service ├── Product Service ├── Order Service ├── Payment Service ├── Inventory Service └── Notification Service</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Each service is responsible for a specific business capability.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Services communicate through APIs, RPC, or messaging systems.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A data engineer should understand microservices because data is often produced by different services, each having its own database and event streams.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">For example, the payment service publishes payment events, while the order service publishes order events. A data platform consumes both to build unified analytical datasets.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Microservices also introduce data integration challenges:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Different schemas.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Different data ownership.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Independent service failures.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Event ordering.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Duplicate message delivery.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Cross-service consistency.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>2.6 Scaling a distributed architecture</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">There are two primary approaches to increasing computing capacity.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Vertical scaling (scale up)</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Increase the capacity of one machine.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">For example:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">8 GB RAM to 32 GB RAM.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">4 CPU cores to 16 CPU cores.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Faster storage.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Horizontal scaling (scale out)</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Add more machines to share the workload.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">For example:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">One worker to four workers.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Four Kafka brokers to eight brokers.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Three database nodes to six nodes.</p>
          <div className="my-4 overflow-x-auto rounded-xl border border-[#e7e3da] bg-white shadow-sm">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-stone-900 border-b border-[#e7e3da] font-semibold">
                <tr>
                  <th className="px-4 py-3">Vertical scaling</th>                  <th className="px-4 py-3">Horizontal scaling</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Upgrade existing machine</td>                  <td className="px-4 py-2.5 text-stone-700">Add more machines</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Often easier initially</td>                  <td className="px-4 py-2.5 text-stone-700">Requires distributed coordination</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Has hardware limits</td>                  <td className="px-4 py-2.5 text-stone-700">Can support larger capacity</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">May require machine downtime</td>                  <td className="px-4 py-2.5 text-stone-700">Can support rolling expansion</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Limited failure isolation</td>                  <td className="px-4 py-2.5 text-stone-700">Can provide redundancy with proper design</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Horizontal scaling is fundamental to large-scale data engineering.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">However, adding machines does not guarantee linear performance improvement. Network overhead, data skew, coordination, and bottlenecks can limit scaling efficiency.</p>
        </div>
      </section>

      {/* SECTION 3: 3. Distributed Processes and Communication */}
      <section id="section-3" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 3
          </span>
          <span className="text-xs font-mono text-stone-500">Part 2 · IPC, Sync vs Async, Latency &amp; Throughput</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          3. Distributed Processes and Communication
        </h2>
        <div className="space-y-3">
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A distributed application usually consists of several independent processes executing on different machines.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A process is an executing instance of a program with its own memory space and resources.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Unlike threads in the same process, independent distributed processes cannot normally access each other's memory directly.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">They need mechanisms to communicate.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>3.1 What is a distributed process?</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Suppose a data platform contains three services:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Ingestion service.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Transformation service.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Storage service.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">They may execute on different machines.</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Machine 1 Machine 2 Machine 3 ----------- ----------- ----------- Ingestion Transformation Storage Process Process Process | | | +----------- Network ------+-----------------------+`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Each process performs its own operations.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The ingestion service receives data. The transformation service processes it. The storage service persists the output.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">They coordinate by sending messages or requests across the network.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>3.2 Inter-process communication (IPC)</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Inter-process communication refers to mechanisms used by processes to exchange information.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">On a single operating system, common IPC mechanisms include:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Pipes.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Shared memory.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Message queues.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Unix domain sockets.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Local sockets.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">In distributed systems, processes commonly communicate using network-based mechanisms:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">HTTP.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">TCP sockets.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Remote Procedure Calls.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Message brokers.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Streaming protocols.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The major difference is that network communication introduces unpredictable delays and possible communication failures.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>3.3 Synchronous communication</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">In synchronous communication, a caller sends a request and waits for a response before continuing with the dependent operation.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Example:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">const response = await fetch( "https://api.example.com/orders" ); const orders = await response.json(); console.log(orders);</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The application awaits the response before proceeding to use the orders.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Advantages:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Straightforward request-response flow.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Immediate result or error handling.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Easy to understand for simple operations.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Disadvantages:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The caller can remain blocked while waiting.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A slow dependency can increase overall response time.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Failure of the remote service can affect the caller.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Long dependency chains can make systems fragile.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>3.4 Asynchronous communication</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">In asynchronous communication, a sender can publish a message without waiting for the receiver to finish processing it.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Example:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Order Service | v Message Broker | v Payment Service`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The order service publishes an event such as:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`{ "event_type": "order_created", "order_id": 5001, "customer_id": 101, "amount": 1500 }`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The payment service processes the message independently.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The producer and consumer do not need to be active at exactly the same moment, provided the messaging infrastructure retains the event appropriately.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Advantages:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Reduced direct dependency between services.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Better buffering during traffic spikes.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Independent processing.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Improved ability to absorb temporary consumer failures.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Disadvantages:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Results may arrive later.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Messages may be delivered more than once.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Processing order needs consideration.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Debugging can become more complicated.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The system must handle eventual consistency where applicable.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>3.5 Synchronous versus asynchronous communication</span>
          </h3>
          <div className="my-4 overflow-x-auto rounded-xl border border-[#e7e3da] bg-white shadow-sm">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-stone-900 border-b border-[#e7e3da] font-semibold">
                <tr>
                  <th className="px-4 py-3">Synchronous</th>                  <th className="px-4 py-3">Asynchronous</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Caller waits for response</td>                  <td className="px-4 py-2.5 text-stone-700">Caller can continue after sending</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Usually request-response</td>                  <td className="px-4 py-2.5 text-stone-700">Often event or message based</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Direct dependency</td>                  <td className="px-4 py-2.5 text-stone-700">Greater decoupling</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Simple immediate result handling</td>                  <td className="px-4 py-2.5 text-stone-700">Requires message and state management</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Suitable for quick operations</td>                  <td className="px-4 py-2.5 text-stone-700">Suitable for background and stream processing</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">3.6 Network communication in distributed processes</td>                  <td className="px-4 py-2.5 text-stone-700">Distributed processes rely on network protocols to communicate.</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">For example, consider a request sent from an application to a database server.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The communication path may involve:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Application creates a request.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Data is encoded into a network representation.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Data is transmitted through the network.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Destination receives the message.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The destination decodes the message.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The destination performs the requested operation.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A response is sent back.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The client processes the response.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Each step introduces potential failure points.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">For example:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Network congestion.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Connection timeout.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Connection reset.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Invalid messages.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Server unavailable.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Serialization failure.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Response lost after the operation succeeded.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">That last situation is particularly important.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Imagine a client sends a payment request. The server processes the payment, but the response is lost due to a network failure.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The client does not know whether the payment happened.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">This is one reason distributed systems need request identifiers, retries, idempotency, and clear delivery semantics.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>3.7 Latency versus throughput</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Two important performance concepts are latency and throughput.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Latency is the time required to complete an operation or response.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Throughput is the amount of work completed over a period of time.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Suppose a system processes 10,000 events per second, but each individual event takes 500 milliseconds to complete.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">That system has high throughput but relatively high per-event latency.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A different system might respond to each request in 5 milliseconds but handle only 100 requests per second.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">That system has low latency but much lower throughput.</p>
          <div className="my-4 overflow-x-auto rounded-xl border border-[#e7e3da] bg-white shadow-sm">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-stone-900 border-b border-[#e7e3da] font-semibold">
                <tr>
                  <th className="px-4 py-3">Metric</th>                  <th className="px-4 py-3">Meaning</th>                  <th className="px-4 py-3">Example</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Latency</td>                  <td className="px-4 py-2.5 text-stone-700">Time per operation</td>                  <td className="px-4 py-2.5 text-stone-700">50 ms</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Throughput</td>                  <td className="px-4 py-2.5 text-stone-700">Operations per second</td>                  <td className="px-4 py-2.5 text-stone-700">10,000 events/sec</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Bandwidth</td>                  <td className="px-4 py-2.5 text-stone-700">Data transmission capacity</td>                  <td className="px-4 py-2.5 text-stone-700">1 Gbps</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Availability</td>                  <td className="px-4 py-2.5 text-stone-700">Proportion of time service is usable</td>                  <td className="px-4 py-2.5 text-stone-700">99.9%</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Data engineers often optimize both latency and throughput depending on the workload.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">For a real-time fraud detection pipeline, latency may be particularly important.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">For a nightly historical transformation, throughput may be more important than responding to each record immediately.</p>
        </div>
      </section>

      {/* SECTION 4: 4. Client-Server Architecture and Remote Procedure Calls (RPC) */}
      <section id="section-4" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 4
          </span>
          <span className="text-xs font-mono text-stone-500">Part 2 · gRPC, Protobuf &amp; REST Differences</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          4. Client-Server Architecture and Remote Procedure Calls (RPC)
        </h2>
        <div className="space-y-3">
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">We have already introduced client-server architecture. Now let's understand how distributed services actually communicate with one another.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">One important communication mechanism is Remote Procedure Call (RPC).</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>4.1 What is RPC?</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Remote Procedure Call is a communication mechanism that allows one program to invoke a procedure or function running in another process, potentially on another machine.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">In ordinary programming, a function call looks like this:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`def calculate_total(price, quantity): return price * quantity result = calculate_total(100, 5) print(result)`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The function executes inside the same program.</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`With RPC, the function executes on a remote server.`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">For example:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Application Server | | Calls calculate_total() | v Network Communication | v Remote Service | | Executes calculate_total() | v Returns Result | v Application Server`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">From the client's perspective, the operation can look similar to calling a local function, but communication happens over a network.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>4.2 How RPC works internally</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A typical RPC operation follows these steps:</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Step 1 — Client initiates a call</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The client requests a remote operation.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">result = remote_service.calculate_total(100, 5)</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Step 2 — Client stub</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A client stub is a local proxy that represents the remote procedure.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">It receives the function arguments and prepares a network request.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Step 3 — Serialization</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The arguments are converted into a transferable format.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">For example:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`{ "price": 100, "quantity": 5 }`}</code>
            </pre>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Step 4 — Network transmission</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The request is transmitted to the remote server.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Step 5 — Server stub</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The server receives the request, decodes the arguments, and invokes the actual function.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Step 6 — Execution</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The remote service performs the operation.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Step 7 — Response</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The result is encoded and sent back to the client.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Step 8 — Client receives result</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The client decodes the response and returns the result to the calling application.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>4.3 RPC architecture</span>
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Client Application`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Calls remote procedure</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Client Stub`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Encodes arguments and creates request</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Network request and response</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Server Stub`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Decodes request and invokes procedure</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Remote Service`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Executes actual business logic</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>4.4 Types of RPC</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Different RPC technologies use different communication protocols and serialization formats.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>A. gRPC</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">TECHNOLOGY: GOOGLE-ORIGINATED OPEN-SOURCE RPC FRAMEWORK</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">gRPC is an RPC framework commonly used for high-performance service-to-service communication.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">It supports:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Protocol Buffers.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">HTTP/2-based transport.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Strongly defined service interfaces.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Unary calls.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Server streaming.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Client streaming.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Bidirectional streaming.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Example .proto definition:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`syntax = "proto3"; service OrderService { rpc GetOrder (OrderRequest) returns (OrderResponse); } message OrderRequest { int64 order_id = 1; } message OrderResponse { int64 order_id = 1; string status = 2; double amount = 3; }`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">This describes a remote operation called GetOrder.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A client can call the service using generated code based on this interface.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>B. JSON-RPC</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">JSON-RPC is a lightweight remote procedure call protocol that uses JSON messages.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Example request:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`{ "jsonrpc": "2.0", "method": "get_order", "params": { "order_id": 5001 }, "id": 1 }`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Possible response:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`{ "jsonrpc": "2.0", "result": { "order_id": 5001, "status": "completed" }, "id": 1 }`}</code>
            </pre>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>C. XML-RPC</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">XML-RPC uses XML to encode requests and responses. It is an older RPC approach, but understanding it helps explain the evolution of remote communication protocols.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>4.5 RPC versus REST API</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Both RPC and REST can facilitate communication between distributed services, but they have different design philosophies.</p>
          <div className="my-4 overflow-x-auto rounded-xl border border-[#e7e3da] bg-white shadow-sm">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-stone-900 border-b border-[#e7e3da] font-semibold">
                <tr>
                  <th className="px-4 py-3">RPC</th>                  <th className="px-4 py-3">REST</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Focuses on invoking operations</td>                  <td className="px-4 py-2.5 text-stone-700">Focuses on manipulating resources</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Calls methods or procedures</td>                  <td className="px-4 py-2.5 text-stone-700">Uses resource-oriented endpoints</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Often uses Protocol Buffers or other serialization</td>                  <td className="px-4 py-2.5 text-stone-700">Commonly uses JSON</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">gRPC commonly uses HTTP/2</td>                  <td className="px-4 py-2.5 text-stone-700">REST commonly uses HTTP semantics</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Suitable for service-to-service communication</td>                  <td className="px-4 py-2.5 text-stone-700">Commonly used for public and application APIs</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Example RPC-style operation:</td>                  <td className="px-4 py-2.5 text-stone-700">GetOrder(5001)</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Example REST-style operation:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">GET /orders/5001</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Neither approach is universally superior. The decision depends on performance requirements, service interfaces, ecosystem, compatibility, and application needs.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>4.6 Why RPC is important in data engineering</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Consider a distributed processing platform.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A coordinator needs to instruct workers to execute tasks.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">It might send requests to:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Start a processing task.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Retrieve partition information.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Report task completion.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Request worker status.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Cancel execution.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">RPC provides a way for distributed components to invoke operations on one another.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">This is particularly relevant to distributed compute engines, storage services, and data infrastructure management.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>4.7 Challenges of RPC</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">RPC calls can fail even when the underlying business operation succeeded.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">For example:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The client sends a request.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The server processes it successfully.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The response is lost.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The client times out.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The client retries.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The server might execute the operation twice unless the operation is protected.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Other challenges include:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Network latency.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Timeouts.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Authentication and authorization.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Version compatibility.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Service discovery.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Load balancing.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Serialization overhead.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Cascading failures.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">One critical distributed-systems principle is that a remote call should never be assumed to behave exactly like a local function call.</p>
        </div>
      </section>

      {/* SECTION 5: 5. Network Communication and Serialization */}
      <section id="section-5" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 5
          </span>
          <span className="text-xs font-mono text-stone-500">Part 3 · JSON, Avro, Protobuf, Parquet &amp; TCP/UDP</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          5. Network Communication and Serialization
        </h2>
        <div className="space-y-3">
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Distributed systems depend on networks to exchange data between processes.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">However, programs represent information internally using objects, memory structures, and data types. Those structures cannot simply be transmitted as arbitrary memory across machines.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">They must be converted into a standardized transferable representation.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">This process is called serialization.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>5.1 What is serialization?</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Serialization is the process of converting an object or data structure into a format that can be stored or transmitted.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Deserialization reverses the process.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Example:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A Python program contains:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">order = &#123; "order_id": 5001, "customer_id": 101, "amount": 1500.50, "status": "completed" &#125;</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The object can be serialized into JSON:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`{ "order_id": 5001, "customer_id": 101, "amount": 1500.5, "status": "completed" }`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The receiver can deserialize the JSON and recreate an equivalent data structure.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>5.2 Serialization and deserialization workflow</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Application Object</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Python dictionary / Java object / Structured data</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Serialization</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Convert into a transferable format</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Network Transmission</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Transmit encoded data</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Deserialization</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Decode the received representation</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Receiver Object</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Equivalent data available to receiving application</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>5.3 Common serialization formats</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>A. JSON</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">JSON is a human-readable text format widely used in APIs and applications.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Example:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`{ "event_id": 1001, "event_type": "payment_completed", "amount": 2500 }`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Advantages:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Easy to read.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Widely supported.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Easy to debug.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Supports nested objects and arrays.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Disadvantages:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">More verbose than many binary formats.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Uses more bandwidth for large datasets.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Requires text parsing.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Does not natively provide a strict, universally enforced schema.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">JSON is commonly used in REST APIs and event integration.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>B. XML</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">XML is a markup-based serialization format.</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`<order> <order_id>5001</order_id> <customer_id>101</customer_id> <amount>1500</amount> <status>completed</status> </order>`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">XML is useful in systems that rely on document-oriented schemas, enterprise integration, and older service protocols.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">However, it is generally more verbose than compact binary formats.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>C. Apache Avro</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Apache Avro is a schema-based data serialization system.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">It is particularly useful in data engineering and Kafka-based systems.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">An illustrative Avro schema:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`{ "type": "record", "name": "Order", "fields": [ { "name": "order_id", "type": "long" }, { "name": "customer_id", "type": "long" }, { "name": "amount", "type": "double" }, { "name": "status", "type": "string" } ] }`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Avro stores serialized data in a compact binary representation, with schema information managed according to the configured encoding and storage workflow.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">It supports schema evolution and is commonly used in distributed data pipelines.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>D. Protocol Buffers (Protobuf)</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Protocol Buffers is a language-neutral, structured serialization format.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Example:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`syntax = "proto3"; message Order { int64 order_id = 1; int64 customer_id = 2; double amount = 3; string status = 4; }`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Protobuf generates code for different programming languages and uses a compact binary representation.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">It is commonly used with gRPC.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>E. Apache Parquet</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Apache Parquet is a column-oriented file format designed for efficient analytical storage and processing.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Unlike JSON, Avro, or Protobuf, Parquet is primarily a columnar analytical storage format rather than a general-purpose RPC message format.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Example conceptual structure:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`orders.parquet │ ├── order_id │ ├── 5001 │ ├── 5002 │ └── 5003 │ ├── customer_id │ ├── 101 │ ├── 102 │ └── 103 │ └── amount ├── 1500 ├── 2500 └── 800`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Its columnar layout allows analytical queries to read only the columns they need, reducing unnecessary data scanning.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>5.4 Comparing serialization formats</span>
          </h3>
          <div className="my-4 overflow-x-auto rounded-xl border border-[#e7e3da] bg-white shadow-sm">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-stone-900 border-b border-[#e7e3da] font-semibold">
                <tr>
                  <th className="px-4 py-3">Format</th>                  <th className="px-4 py-3">Representation</th>                  <th className="px-4 py-3">Common use</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">JSON</td>                  <td className="px-4 py-2.5 text-stone-700">Text</td>                  <td className="px-4 py-2.5 text-stone-700">APIs and web applications</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">XML</td>                  <td className="px-4 py-2.5 text-stone-700">Text</td>                  <td className="px-4 py-2.5 text-stone-700">Enterprise integrations</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Avro</td>                  <td className="px-4 py-2.5 text-stone-700">Binary with schema</td>                  <td className="px-4 py-2.5 text-stone-700">Kafka and data pipelines</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Protobuf</td>                  <td className="px-4 py-2.5 text-stone-700">Binary with schema</td>                  <td className="px-4 py-2.5 text-stone-700">gRPC and service communication</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Parquet</td>                  <td className="px-4 py-2.5 text-stone-700">Columnar file</td>                  <td className="px-4 py-2.5 text-stone-700">Data lakes and analytics</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Do not choose a format only because it is popular. Consider data size, schema evolution, language compatibility, query patterns, tooling, and debugging needs.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>5.5 Network protocols</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Distributed services commonly use TCP or UDP at the transport layer.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">TCP — Transmission Control Protocol</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">TCP provides a reliable, ordered byte stream between communicating endpoints.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Important characteristics:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Connection-oriented communication.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Reliable delivery mechanisms.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Ordered byte stream.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Retransmission when needed.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Flow control.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Congestion control.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Applications such as HTTP/1.1, HTTP/2, and many database protocols commonly operate over TCP.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">UDP — User Datagram Protocol</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">UDP is connectionless and does not guarantee that packets arrive, arrive in order, or arrive exactly once.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">It has lower protocol overhead and is useful for certain latency-sensitive communication patterns.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Examples include:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">DNS queries.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Certain monitoring and telemetry systems.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Real-time communication protocols.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Some streaming and discovery mechanisms.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The application may need additional mechanisms to detect loss or restore order when required.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>5.6 TCP versus UDP</span>
          </h3>
          <div className="my-4 overflow-x-auto rounded-xl border border-[#e7e3da] bg-white shadow-sm">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-stone-900 border-b border-[#e7e3da] font-semibold">
                <tr>
                  <th className="px-4 py-3">TCP</th>                  <th className="px-4 py-3">UDP</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Connection-oriented</td>                  <td className="px-4 py-2.5 text-stone-700">Connectionless</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Reliable ordered byte stream</td>                  <td className="px-4 py-2.5 text-stone-700">No delivery or ordering guarantee</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Retransmission mechanisms</td>                  <td className="px-4 py-2.5 text-stone-700">No built-in retransmission</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Higher protocol overhead</td>                  <td className="px-4 py-2.5 text-stone-700">Lower protocol overhead</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Suitable for reliable data transfer</td>                  <td className="px-4 py-2.5 text-stone-700">Suitable for selected latency-sensitive workloads</td>
                </tr>
              </tbody>
            </table>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>5.7 Serialization overhead in distributed computing</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Suppose a worker must send 10 million records to another worker.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">If each record occupies 1 KB in JSON, the uncompressed payload is approximately:</p>
          <div className="p-4 my-3 rounded-xl bg-orange-50/60 border border-orange-200/80 text-stone-900 font-mono text-xs sm:text-sm text-center overflow-x-auto shadow-sm">
            <span className="font-semibold text-orange-900 tracking-wide">10,000,000 \times 1\text&#123; KB&#125; \approx 10\text&#123; GB&#125;</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">If a more compact binary representation reduces average record size to 200 bytes, the payload becomes approximately:</p>
          <div className="p-4 my-3 rounded-xl bg-orange-50/60 border border-orange-200/80 text-stone-900 font-mono text-xs sm:text-sm text-center overflow-x-auto shadow-sm">
            <span className="font-semibold text-orange-900 tracking-wide">10,000,000 \times 200\text&#123; bytes&#125; \approx 2\text&#123; GB&#125;</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">This is a fivefold reduction in approximate payload size, before considering compression, framing, and protocol overhead.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Smaller serialized data can reduce network transfer time and resource usage.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">However, binary serialization can make debugging harder, and actual performance also depends on encoding and decoding costs.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">For large-scale data engineering systems, serialization and network efficiency can significantly influence overall performance.</p>
        </div>
      </section>

      {/* SECTION 6: 6. Distributed Storage Systems */}
      <section id="section-6" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 6
          </span>
          <span className="text-xs font-mono text-stone-500">Part 3 · HDFS, S3 Object Storage &amp; Distributed DBs</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          6. Distributed Storage Systems
        </h2>
        <div className="space-y-3">
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Distributed storage systems store data across multiple machines instead of depending on one physical server or disk.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">They are essential when datasets become too large for a single machine or when organizations require redundancy and high availability.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>6.1 Why distributed storage is needed</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Suppose a company generates 500 TB of transaction data.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Storing all the data on one machine creates several limitations:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Storage capacity.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Disk throughput.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Hardware failure risk.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Backup complexity.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Limited scaling.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A distributed storage system spreads the data across multiple storage nodes.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">For example:</p>
          <div className="my-4 overflow-x-auto rounded-xl border border-[#e7e3da] bg-white shadow-sm">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-stone-900 border-b border-[#e7e3da] font-semibold">
                <tr>
                  <th className="px-4 py-3">Storage node</th>                  <th className="px-4 py-3">Assigned data</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Node 1</td>                  <td className="px-4 py-2.5 text-stone-700">100 TB</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Node 2</td>                  <td className="px-4 py-2.5 text-stone-700">100 TB</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Node 3</td>                  <td className="px-4 py-2.5 text-stone-700">100 TB</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Node 4</td>                  <td className="px-4 py-2.5 text-stone-700">100 TB</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Node 5</td>                  <td className="px-4 py-2.5 text-stone-700">100 TB</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Total</td>                  <td className="px-4 py-2.5 text-stone-700">500 TB</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The storage system manages how data is distributed, accessed, and recovered.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>6.2 Distributed file systems</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A distributed file system allows clients to access files distributed across several machines through a common interface.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">One example is Hadoop Distributed File System (HDFS).</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">HDFS is designed for storing large files across a cluster.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Its main components traditionally include:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`NameNode`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The NameNode manages filesystem metadata.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">It maintains information such as:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">File names.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Directory structure.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Block locations.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Namespace metadata.</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`DataNodes
DataNodes store the actual data blocks.`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">They serve read and write requests and participate in block replication.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>6.3 HDFS architecture</span>
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`NameNode`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Manages namespace and block metadata</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Metadata coordination</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`DataNode 1`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Block A</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`DataNode 2`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Block B</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`DataNode 3`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Block C</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The NameNode coordinates metadata; DataNodes hold data blocks.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>6.4 Understanding data blocks</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A large file is divided into smaller blocks.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">For example, consider a 600 MB file divided into three conceptual blocks of 200 MB each:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`large_file.csv | v +------------------+ | Block 1: 200 MB | +------------------+ | Block 2: 200 MB | +------------------+ | Block 3: 200 MB | +------------------+`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Different blocks can be stored on different DataNodes.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The advantage is that different machines can read different parts of the file in parallel.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">HDFS commonly uses a configurable block size and replication factor. The 200 MB blocks here are illustrative, not a universal HDFS setting.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>6.5 Distributed object storage</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Object storage is another major form of distributed storage.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Examples include:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Amazon S3.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Google Cloud Storage.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Azure Blob Storage.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Object storage stores data as objects inside buckets or containers.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">An object typically consists of:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Object data.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Object key or identifier.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Metadata.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Storage-related attributes.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Example:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">ecommerce-data/ │ ├── customers/ │ └── customers.parquet │ ├── orders/ │ ├── year=2026/ │ │ └── month=11/ │ │ └── orders.parquet │ └── payments/ └── payments.parquet</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Object storage is heavily used for data lakes because it can store large amounts of structured, semi-structured, and unstructured data.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>6.6 Distributed databases</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Distributed databases distribute data across multiple storage nodes.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Examples include:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Apache Cassandra.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Google Spanner.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">CockroachDB.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">MongoDB.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Different systems use different replication, consistency, partitioning, and transaction strategies.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">For example, Cassandra is designed around distributed, partitioned, replicated storage, while distributed SQL systems such as Spanner and CockroachDB provide relational interfaces and distributed transaction capabilities.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>6.7 Distributed storage versus distributed computing</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">These concepts are related but different.</p>
          <div className="my-4 overflow-x-auto rounded-xl border border-[#e7e3da] bg-white shadow-sm">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-stone-900 border-b border-[#e7e3da] font-semibold">
                <tr>
                  <th className="px-4 py-3">Distributed storage</th>                  <th className="px-4 py-3">Distributed computing</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Distributes data across machines</td>                  <td className="px-4 py-2.5 text-stone-700">Distributes processing across machines</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Focuses on storing and retrieving data</td>                  <td className="px-4 py-2.5 text-stone-700">Focuses on executing computations</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Example: HDFS, Cassandra</td>                  <td className="px-4 py-2.5 text-stone-700">Example: Apache Spark</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Manages storage and replication</td>                  <td className="px-4 py-2.5 text-stone-700">Manages task execution and coordination</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">In modern data platforms, distributed storage and distributed computing often work together.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">For example, Spark can read Parquet data from object storage, distribute transformations across workers, and write the results back to the data lake.</p>
        </div>
      </section>

      {/* SECTION 7: 7. Data Partitioning */}
      <section id="section-7" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 7
          </span>
          <span className="text-xs font-mono text-stone-500">Part 4 · Range, Hash, List, Sharding &amp; Skew Management</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          7. Data Partitioning
        </h2>
        <div className="space-y-3">
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Data partitioning is the process of dividing a large dataset into smaller logical or physical sections that can be stored and processed independently.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Partitioning is fundamental to distributed databases, data warehouses, and big-data processing engines.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>7.1 Why partitioning is important</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Imagine an organization storing 1 billion order records.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A query requests all orders from November 2026.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">If the system scans the entire dataset, it may need to examine an enormous amount of data.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Instead, the system can partition the data by year and month.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">orders/ │ ├── year=2025/ │ ├── month=01/ │ ├── month=02/ │ └── ... │ └── year=2026/ ├── month=01/ ├── month=02/ └── ...</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A query filtering on November 2026 may then scan only the relevant partitions.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">This is called partition pruning when the query engine can eliminate unnecessary partitions.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>7.2 Types of partitioning</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>A. Horizontal partitioning</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Horizontal partitioning divides rows into multiple subsets.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Example:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Customers Table ---------------- 101 Rahul 102 Priya 103 Arjun 104 Neha 105 Amit 106 Kiran`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Partition it into three groups:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Partition 1 101 Rahul 102 Priya Partition 2 103 Arjun 104 Neha Partition 3 105 Amit 106 Kiran`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Each partition contains a subset of records.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>B. Vertical partitioning</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Vertical partitioning divides columns into separate groups.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Original table:</p>
          <div className="my-4 overflow-x-auto rounded-xl border border-[#e7e3da] bg-white shadow-sm">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-stone-900 border-b border-[#e7e3da] font-semibold">
                <tr>
                  <th className="px-4 py-3">customer_id</th>                  <th className="px-4 py-3">name</th>                  <th className="px-4 py-3">email</th>                  <th className="px-4 py-3">address</th>                  <th className="px-4 py-3">purchase_history</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">101</td>                  <td className="px-4 py-2.5 text-stone-700">Rahul</td>                  <td className="px-4 py-2.5 text-stone-700">rahul@example.com</td>                  <td className="px-4 py-2.5 text-stone-700">Pune</td>                  <td className="px-4 py-2.5 text-stone-700">...</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">102</td>                  <td className="px-4 py-2.5 text-stone-700">Priya</td>                  <td className="px-4 py-2.5 text-stone-700">priya@example.com</td>                  <td className="px-4 py-2.5 text-stone-700">Mumbai</td>                  <td className="px-4 py-2.5 text-stone-700">...</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Partition A:</p>
          <div className="my-4 overflow-x-auto rounded-xl border border-[#e7e3da] bg-white shadow-sm">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-stone-900 border-b border-[#e7e3da] font-semibold">
                <tr>
                  <th className="px-4 py-3">customer_id</th>                  <th className="px-4 py-3">name</th>                  <th className="px-4 py-3">email</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">101</td>                  <td className="px-4 py-2.5 text-stone-700">Rahul</td>                  <td className="px-4 py-2.5 text-stone-700">rahul@example.com</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">102</td>                  <td className="px-4 py-2.5 text-stone-700">Priya</td>                  <td className="px-4 py-2.5 text-stone-700">priya@example.com</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Partition B:</p>
          <div className="my-4 overflow-x-auto rounded-xl border border-[#e7e3da] bg-white shadow-sm">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-stone-900 border-b border-[#e7e3da] font-semibold">
                <tr>
                  <th className="px-4 py-3">customer_id</th>                  <th className="px-4 py-3">address</th>                  <th className="px-4 py-3">purchase_history</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">101</td>                  <td className="px-4 py-2.5 text-stone-700">Pune</td>                  <td className="px-4 py-2.5 text-stone-700">...</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">102</td>                  <td className="px-4 py-2.5 text-stone-700">Mumbai</td>                  <td className="px-4 py-2.5 text-stone-700">...</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The shared key allows the original logical record to be reconstructed using a join.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Vertical partitioning is useful when different applications frequently access different groups of columns.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>7.3 Range partitioning</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Range partitioning divides records based on ranges of values.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Example:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Orders Table | +---- order_date < 2025 | +---- order_date >= 2025 AND order_date < 2026 | +---- order_date >= 2026`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A PostgreSQL example:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`CREATE TABLE orders ( order_id BIGINT, customer_id BIGINT, order_date DATE NOT NULL, amount NUMERIC(12, 2) ) PARTITION BY RANGE (order_date);
Create monthly partitions:
CREATE TABLE orders_2026_11 PARTITION OF orders FOR VALUES FROM ('2026-11-01') TO ('2026-12-01');`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A November query can benefit from partition pruning when the query planner can establish the relevant date range.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Range partitioning is particularly useful for:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Time-series data.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Transaction history.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Event data.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Historical analytics.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>7.4 Hash partitioning</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Hash partitioning uses a hash function to distribute records across partitions.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Conceptually:</p>
          <div className="p-4 my-3 rounded-xl bg-orange-50/60 border border-orange-200/80 text-stone-900 font-mono text-xs sm:text-sm text-center overflow-x-auto shadow-sm">
            <span className="font-semibold text-orange-900 tracking-wide">Partition = Hash(Key) \bmod N</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Where:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Key is a partitioning key.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">N is the number of partitions.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Example:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">customer_id = 101 Hash(101) % 4 = Partition 2</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Another customer ID might map to Partition 0.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Hash partitioning helps distribute records more evenly when the selected key has a suitable distribution.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">It is useful when data needs to be spread across nodes rather than grouped by a natural range.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>7.5 List partitioning</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">List partitioning assigns records based on predefined categories.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Example:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">India → Partition 1 USA → Partition 2 UK → Partition 3 Germany → Partition 4</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A PostgreSQL example:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`CREATE TABLE sales ( sale_id BIGINT, region TEXT, amount NUMERIC(12, 2) ) PARTITION BY LIST (region);`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">List partitioning is useful when categories are known and query patterns frequently filter on them.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>7.6 Round-robin partitioning</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Round-robin partitioning distributes records sequentially across available partitions.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">For three partitions:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Record 1 → Partition 1 Record 2 → Partition 2 Record 3 → Partition 3 Record 4 → Partition 1 Record 5 → Partition 2 Record 6 → Partition 3</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">It provides a simple distribution strategy when there is no useful partition key.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">However, because records are distributed without considering the values queried, it may not help with filtering or partition pruning.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>7.7 Partitioning versus sharding</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">These concepts are related.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Partitioning means dividing a dataset into multiple parts.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Sharding generally refers to distributing partitions across multiple database servers or nodes.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Example:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Customers Database | v Shard Router | +---+---+ | | | v v v Shard 1 Shard 2 Shard 3`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Each shard stores only a portion of the overall dataset.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Sharding allows a database system to distribute storage and workloads across machines.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>7.8 Partitioning challenges</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Data skew: Some partitions may contain significantly more data than others.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Hot partitions: Certain partitions may receive disproportionately high traffic.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Small files: Excessive partitioning in data lakes can create thousands or millions of tiny files.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Partition management: Creating and maintaining partitions adds operational complexity.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Cross-partition queries: Queries requiring data from many partitions may be expensive.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Key selection: A poor partition key can create imbalance or reduce query efficiency.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A good partition strategy should consider data volume, access patterns, expected query filters, and future growth.</p>
        </div>
      </section>

      {/* SECTION 8: 8. Data Replication */}
      <section id="section-8" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 8
          </span>
          <span className="text-xs font-mono text-stone-500">Part 4 · Sync vs Async, Replication Factor &amp; Backups</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          8. Data Replication
        </h2>
        <div className="space-y-3">
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Data replication is the process of maintaining multiple copies of the same data across different storage nodes.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Replication is used to improve:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Availability.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Fault tolerance.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Read scalability.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Disaster recovery.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Data durability.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>8.1 Why replication is necessary</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Imagine a database storing customer transactions on a single machine.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">If that machine fails because of hardware damage, the entire database might become unavailable.</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`With replication, multiple nodes hold copies of the data.
Database Write | v Primary Node | +-------+-------+ | | v v Replica 1 Replica 2`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">If one replica becomes unavailable, another copy may remain accessible.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Replication does not eliminate every failure risk. It must also consider correlated failures, acknowledgement rules, storage durability, and recovery.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>8.2 Replication factor</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The replication factor indicates how many copies of each data item are maintained.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">For example:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">RF = 1: One copy.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">RF = 2: Two copies.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">RF = 3: Three copies.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">If a system stores 100 GB of logical data with three full replicas, it may require approximately 300 GB of storage, before additional overhead.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Higher replication improves redundancy but increases storage and network costs.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>8.3 Synchronous replication</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">In synchronous replication, a write is acknowledged only after the required replica or replicas have confirmed the write according to the system's configured rules.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Example:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Client | v Primary Node | +----> Replica 1 | +----> Replica 2 | v Required confirmations | v Client response`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Advantages:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Stronger guarantees that acknowledged writes exist on required replicas.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Reduced risk of losing acknowledged changes during certain failures.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Disadvantages:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Write latency increases.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A slow replica can affect performance.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Availability may be reduced if required acknowledgements cannot be obtained.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The exact guarantee depends on what is synchronously acknowledged and whether a write must reach one replica, several replicas, or all configured replicas.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>8.4 Asynchronous replication</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">In asynchronous replication, the primary may acknowledge the write before all replicas have received it.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Example:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Client | v Primary Node | +----> Write acknowledged | +----> Replica 1 receives later | +----> Replica 2 receives later`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Advantages:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Lower write latency.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Less dependency on replica response times.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Useful for geographically distributed replication.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Disadvantages:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Replicas can temporarily contain stale data.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A primary failure may cause recently acknowledged data to be missing from replicas that had not received it.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Read-after-write behavior requires careful design.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>8.5 Synchronous versus asynchronous replication</span>
          </h3>
          <div className="my-4 overflow-x-auto rounded-xl border border-[#e7e3da] bg-white shadow-sm">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-stone-900 border-b border-[#e7e3da] font-semibold">
                <tr>
                  <th className="px-4 py-3">Synchronous</th>                  <th className="px-4 py-3">Asynchronous</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Waits for required replica confirmation</td>                  <td className="px-4 py-2.5 text-stone-700">Does not wait for every replica</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Stronger acknowledgement guarantees</td>                  <td className="px-4 py-2.5 text-stone-700">Lower write latency</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Can reduce write availability during failures</td>                  <td className="px-4 py-2.5 text-stone-700">Can continue accepting writes under more conditions</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Lower replication lag after acknowledged writes</td>                  <td className="px-4 py-2.5 text-stone-700">Replicas may temporarily lag</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Often useful for strict consistency requirements</td>                  <td className="px-4 py-2.5 text-stone-700">Often useful for geographically distributed systems</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">8.6 Replication in data engineering</td>                  <td className="px-4 py-2.5 text-stone-700">Replication appears in many technologies.</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Kafka: Replicates topic partitions across brokers.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Cassandra: Maintains multiple copies of data across nodes.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">PostgreSQL: Supports streaming replication and other replication mechanisms.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">HDFS: Replicates blocks across DataNodes in its traditional replicated-storage model.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Cloud databases: Use replication for availability, failover, and regional redundancy.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>8.7 Replication versus backup</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">These are not interchangeable.</p>
          <div className="my-4 overflow-x-auto rounded-xl border border-[#e7e3da] bg-white shadow-sm">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-stone-900 border-b border-[#e7e3da] font-semibold">
                <tr>
                  <th className="px-4 py-3">Replication</th>                  <th className="px-4 py-3">Backup</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Maintains multiple active or standby copies</td>                  <td className="px-4 py-2.5 text-stone-700">Preserves recoverable historical copies</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Helps availability and failover</td>                  <td className="px-4 py-2.5 text-stone-700">Helps recover from deletion, corruption and historical mistakes</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Changes may propagate to replicas</td>                  <td className="px-4 py-2.5 text-stone-700">Backups can preserve earlier versions</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Often continuous</td>                  <td className="px-4 py-2.5 text-stone-700">Commonly scheduled or point-in-time</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">If someone accidentally deletes important data, that deletion may also propagate to every replica.</td>                  <td className="px-4 py-2.5 text-stone-700">That is why replication must be complemented by backup and recovery strategies.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* SECTION 9: 9. Leader and Follower Architecture */}
      <section id="section-9" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 9
          </span>
          <span className="text-xs font-mono text-stone-500">Part 5 · Primary-Replica, Failover &amp; Split-Brain</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          9. Leader and Follower Architecture
        </h2>
        <div className="space-y-3">
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Leader-follower architecture is a coordination pattern in which one node acts as the leader or primary, while other nodes act as followers or replicas.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The leader is generally responsible for coordinating a particular class of operations, and followers maintain or consume replicated state.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">This design is common in distributed databases, metadata services, and coordination systems.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>9.1 Understanding leader-follower architecture</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Consider a database cluster with three nodes.</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Client | v Leader Node | +------+------+ | | v v Follower 1 Follower 2`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The leader receives writes and coordinates their replication to followers.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Depending on the database, reads may also be served by the leader or by followers.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>9.2 Write operation</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Suppose the application updates a customer's city.</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`UPDATE customers SET city = 'Pune' WHERE customer_id = 101;`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A typical leader-follower write flow is:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Client sends the write request to the leader.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Leader validates and applies the update.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Leader sends the change to followers.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Followers apply the update.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The client receives an acknowledgement according to the replication policy.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The precise acknowledgement sequence depends on the replication mode and database implementation.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>9.3 Read operation</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A read request can be served in two ways.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Read from leader</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The client reads from the primary node.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">This can provide a more up-to-date view of committed data, subject to the database's transaction and consistency guarantees.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Read from follower</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The client reads from a replica.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">This can distribute read traffic and reduce pressure on the leader, but an asynchronous follower might return stale data.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Example:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The leader records a payment at 10:00:00.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A follower receives it at 10:00:02.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A read sent to that follower at 10:00:01 might not show the payment.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>9.4 Leader failure and failover</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">What happens if the leader becomes unavailable?</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A distributed system may need to:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Detect that the leader is unhealthy or unreachable.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Determine whether the leader has actually failed or merely become isolated.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Elect or promote another eligible node.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Establish the new leader.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Redirect client writes.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Recover or synchronize the former leader when it returns.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">This is called failover.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>9.5 Split-brain problem</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Split brain occurs when two nodes or groups of nodes both believe they are the legitimate leader.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Example:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Network Partition | +---+---+ | | v v Node A Node B Leader Leader`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Both nodes accept writes.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">When connectivity returns, their histories may conflict.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Preventing split brain requires coordination mechanisms such as consensus, leader leases, fencing tokens, or quorum-based election rules, depending on the system.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>9.6 Leader-follower advantages and disadvantages</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Advantages:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Clear write coordination.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Simpler consistency management for many operations.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Followers can support read scaling.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Replication can improve availability.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Disadvantages:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The leader can become a bottleneck.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Leader failure requires failover.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Replication lag can produce stale reads.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Split-brain prevention adds complexity.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>9.7 Leader-follower versus multi-leader</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">In a multi-leader architecture, multiple nodes can accept writes.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Example:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Region A Leader <----> Region B Leader | | v v Local Local Replicas Replicas`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Multi-leader replication can improve write availability and regional autonomy.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">However, concurrent updates may conflict.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">For example:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Region A updates a customer's address to Pune.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Region B updates the same customer's address to Mumbai.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Both updates occur before replication finishes.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The system must resolve which value becomes authoritative or use an application-specific conflict-resolution strategy.</p>
        </div>
      </section>

      {/* SECTION 10: 10. Consistency Models */}
      <section id="section-10" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 10
          </span>
          <span className="text-xs font-mono text-stone-500">Part 5 · Strong, Eventual, Read-Your-Writes &amp; Monotonic</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          10. Consistency Models
        </h2>
        <div className="space-y-3">
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Consistency describes the guarantees a distributed system provides about the visibility and ordering of updates across nodes.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">This is one of the most important concepts in distributed systems.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Consider a database with three replicas:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Node A Node B Node C | | | +-----------+-----------+ Replicated Data`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">When a write occurs on Node A, how quickly should Nodes B and C reflect that change?</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The answer depends on the consistency model.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>10.1 Why consistency is challenging</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Suppose an application updates a customer's account balance from ₹5,000 to ₹3,000.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The primary node commits the update.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">However, the replicas have not received the change yet.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A user reads from another replica and sees ₹5,000.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The database has temporarily returned stale information.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Different consistency models define what users are allowed to observe during such situations.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>10.2 Strong consistency</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Strong consistency is a term commonly used for systems that provide a guarantee that reads observe the latest committed write according to the system's specified ordering and consistency rules.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">For instance:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A balance is updated to ₹3,000.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The write is acknowledged.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A subsequent appropriately ordered read must return ₹3,000 or a later value, not the old ₹5,000.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Strong consistency is useful for:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Financial transactions.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Inventory reservations.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Account balances.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Critical order status.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Systems requiring coordinated updates.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Strong consistency can come at a performance or availability cost under certain failure conditions.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The exact implementation matters: linearizability, serializability, and strong transactional consistency are related ideas, but they are not interchangeable guarantees.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>10.3 Eventual consistency</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Eventual consistency allows replicas to temporarily contain different values.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">However, if no new updates occur and replication proceeds successfully, the replicas eventually converge to the same state.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Example:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Time 1: Node A = ₹3,000 Node B = ₹5,000 Node C = ₹5,000 Time 2: Node A = ₹3,000 Node B = ₹3,000 Node C = ₹5,000 Time 3: Node A = ₹3,000 Node B = ₹3,000 Node C = ₹3,000</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Eventually, the replicas converge.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Eventual consistency is useful for:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Social media feeds.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Product recommendations.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Distributed caches.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Some globally distributed databases.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Analytical replicas.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Temporary stale reads are acceptable in these scenarios if the application can tolerate them.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>10.4 Read-your-writes consistency</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Read-your-writes consistency ensures that after a client successfully performs an update, that client can observe its own update in subsequent reads.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Example:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A user changes their profile name from Rahul to Sam.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">When the same user reloads their profile, they should see Sam rather than the old name.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Other users might not immediately see the updated name if the system uses weaker replication guarantees.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>10.5 Monotonic reads</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Monotonic reads ensure that a client does not observe older values after it has already observed newer values.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Suppose a client first reads version 5 of a record.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A later read should not unexpectedly return version 3.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>10.6 Monotonic writes</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Monotonic writes ensure that writes from the same client are applied in the order required by the consistency model.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">For example, an update changing an order from pending to confirmed should not be applied after a later update changing it to cancelled if the intended order of those operations is the reverse.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>10.7 Consistency levels comparison</span>
          </h3>
          <div className="my-4 overflow-x-auto rounded-xl border border-[#e7e3da] bg-white shadow-sm">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-stone-900 border-b border-[#e7e3da] font-semibold">
                <tr>
                  <th className="px-4 py-3">Consistency model</th>                  <th className="px-4 py-3">Main guarantee</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Strong consistency</td>                  <td className="px-4 py-2.5 text-stone-700">Reads obey a latest-write ordering guarantee</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Eventual consistency</td>                  <td className="px-4 py-2.5 text-stone-700">Replicas eventually converge if updates stop</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Read-your-writes</td>                  <td className="px-4 py-2.5 text-stone-700">Client sees its own acknowledged updates</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Monotonic reads</td>                  <td className="px-4 py-2.5 text-stone-700">Client does not move backward to older observed versions</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Monotonic writes</td>                  <td className="px-4 py-2.5 text-stone-700">Client's writes preserve the required order</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Different distributed databases offer different consistency levels and configurations.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Data engineers need to know what guarantee a system actually provides before building pipelines that depend on it.</p>
        </div>
      </section>

      {/* SECTION 11: 11. Strong Consistency and Eventual Consistency in Practice */}
      <section id="section-11" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 11
          </span>
          <span className="text-xs font-mono text-stone-500">Part 5 · Practical Business Trade-offs</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          11. Strong Consistency and Eventual Consistency in Practice
        </h2>
        <div className="space-y-3">
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Let's examine a practical e-commerce example.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A customer places an order for the last available laptop.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The inventory system has five units available.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Two customers attempt to buy the final unit at nearly the same time.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>11.1 Strong consistency requirement</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The system must prevent both customers from purchasing the same final laptop.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">An appropriately designed transactional inventory system can coordinate the updates so that only one customer successfully reserves the unit.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Conceptually:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Initial Stock = 1 Customer A attempts purchase Customer B attempts purchase | v Transaction / Concurrency Control | +----+----+ | | v v Customer A Customer B Success Rejected`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">This requires appropriate transaction isolation, atomic conditional updates, and concurrency control. Merely writing to a leader node does not automatically solve every race condition.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>11.2 Eventual consistency requirement</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Now consider the product recommendation count.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A product page displays how many users have viewed the laptop.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">That number does not necessarily need to update instantly.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Different regional servers might temporarily show different counts.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Eventually, the counts can be reconciled.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">This is a suitable example of a workload where eventual consistency can be acceptable.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>11.3 Choosing the correct consistency model</span>
          </h3>
          <div className="my-4 overflow-x-auto rounded-xl border border-[#e7e3da] bg-white shadow-sm">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-stone-900 border-b border-[#e7e3da] font-semibold">
                <tr>
                  <th className="px-4 py-3">Business operation</th>                  <th className="px-4 py-3">Typical consistency preference</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Bank account balance</td>                  <td className="px-4 py-2.5 text-stone-700">Strong, transactionally safe behavior</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Inventory reservation</td>                  <td className="px-4 py-2.5 text-stone-700">Strong coordination for critical stock updates</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Product view count</td>                  <td className="px-4 py-2.5 text-stone-700">Eventual consistency often acceptable</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Social media likes</td>                  <td className="px-4 py-2.5 text-stone-700">Eventual consistency often acceptable</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Order payment status</td>                  <td className="px-4 py-2.5 text-stone-700">Strong correctness around transaction state</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Analytical dashboard</td>                  <td className="px-4 py-2.5 text-stone-700">Some ingestion delay often acceptable</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The correct choice is based on the consequences of stale or conflicting information, not just performance.</p>
        </div>
      </section>

      {/* SECTION 12: 12. CAP Theorem */}
      <section id="section-12" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 12
          </span>
          <span className="text-xs font-mono text-stone-500">Part 6 · Consistency, Availability, Partition Tolerance &amp; PACELC</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          12. CAP Theorem
        </h2>
        <div className="space-y-3">
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The CAP theorem is one of the most important theoretical concepts in distributed systems.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">It describes a fundamental trade-off that distributed systems face when network partitions occur.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">CAP refers to:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Consistency (C)</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Availability (A)</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Partition Tolerance (P)</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>12.1 Consistency</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">In the traditional CAP formulation, consistency refers to linearizability: operations appear to occur atomically in a single global order that respects real-time ordering.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A read after a successfully completed write should not return an older value.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>12.2 Availability</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Availability means that every request received by a non-failing node gets a response.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The response may not always contain the latest data under weaker consistency choices.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Availability in CAP is a specific theoretical property, not simply whether a website is operational most of the time.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>12.3 Partition tolerance</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A network partition happens when nodes cannot communicate reliably with one another.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Example:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Cluster | +------ Node A | +------ Node B | +------ Node C Network Partition Group 1 Group 2 ------- ------- Node A Node B Node C`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The cluster is divided into groups that cannot reliably exchange messages.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The system must decide how to respond to requests during the partition.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>12.4 Understanding the CAP trade-off</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">When a network partition occurs, a distributed system cannot guarantee both strict linearizable consistency and availability for every request across the partition.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">It must make a choice for affected operations:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">CP behavior — Consistency and Partition Tolerance</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The system may reject, delay, or block operations when it cannot safely maintain consistency.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">This protects against returning conflicting or stale results, but some requests may fail or receive no timely response.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">AP behavior — Availability and Partition Tolerance</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The system continues responding to requests in separated parts of the cluster, accepting that different nodes may temporarily return different values.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The system must reconcile changes later.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>12.5 CAP visual explanation</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">CAP theorem</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Conceptual illustration of the three CAP properties, not a claim that systems choose any two permanently.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The key point is that partition tolerance is generally essential in distributed systems because networks can fail.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The practical trade-off is between consistency and availability during a partition.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>12.6 CP versus AP example</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Imagine a distributed bank account database.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Two nodes cannot communicate.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">If both accept withdrawals independently, they may allow the same money to be spent twice.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A CP-oriented design may reject or delay operations in the isolated group until safe coordination is possible.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Now consider a distributed social media system.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">If a network partition separates two regions, an AP-oriented design might allow both regions to accept likes and synchronize counts later.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A temporary count difference is generally less serious than allowing duplicate withdrawals.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>12.7 Important clarification: CAP is not PACELC</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">CAP explains the trade-off during network partitions.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Another concept, PACELC, extends the discussion:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">During a Partition, choose between Availability and Consistency.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Else, when there is no partition, choose between Latency and Consistency.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">This helps explain why distributed systems may still make consistency-versus-latency trade-offs during normal operation.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>12.8 Common CAP misunderstanding</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A common interview mistake is saying:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">"Every distributed database permanently chooses any two of consistency, availability, and partition tolerance."</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">That is an oversimplification.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A more accurate explanation is:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">During a network partition, a distributed system cannot guarantee both availability and linearizable consistency for all affected operations. Partition tolerance is the ability to continue operating correctly under such communication failures.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Different databases can also provide different consistency levels for different operations or configurations.</p>
        </div>
      </section>

      {/* SECTION 13: 13. Quorum-Based Systems */}
      <section id="section-13" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 13
          </span>
          <span className="text-xs font-mono text-stone-500">Part 6 · Quorum Formula (R+W&gt;N), Majority Voting &amp; Cassandra</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          13. Quorum-Based Systems
        </h2>
        <div className="space-y-3">
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Quorum-based systems use a minimum number of node confirmations to determine whether a read, write, or coordination operation can proceed.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">They are commonly used in distributed databases and replication systems.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>13.1 Understanding quorum</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Suppose a database maintains three replicas of a record.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Replica 1 Replica 2 Replica 3</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A write request is sent to all three replicas.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The system may require confirmation from at least two replicas before considering the write successful.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">This is a write quorum.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Similarly, a read might consult two replicas to obtain sufficiently consistent information.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">This is a read quorum.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>13.2 Number of replicas and quorum</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Let:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">\(N\) = Total replicas.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">\(W\) = Number of replicas that must acknowledge a write.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">\(R\) = Number of replicas consulted for a read.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A common quorum design aims to satisfy:</p>
          <div className="p-4 my-3 rounded-xl bg-orange-50/60 border border-orange-200/80 text-stone-900 font-mono text-xs sm:text-sm text-center overflow-x-auto shadow-sm">
            <span className="font-semibold text-orange-900 tracking-wide">R+W&gt;N</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">This ensures that the read and write replica sets overlap, assuming the replicas are part of the same relevant replication set and the system maintains suitable version and ordering information.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">For example:</p>
          <div className="p-4 my-3 rounded-xl bg-orange-50/60 border border-orange-200/80 text-stone-900 font-mono text-xs sm:text-sm text-center overflow-x-auto shadow-sm">
            <span className="font-semibold text-orange-900 tracking-wide">N=3,\quad W=2,\quad R=2</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Then:</p>
          <div className="p-4 my-3 rounded-xl bg-orange-50/60 border border-orange-200/80 text-stone-900 font-mono text-xs sm:text-sm text-center overflow-x-auto shadow-sm">
            <span className="font-semibold text-orange-900 tracking-wide">R+W=2+2=4</span>
          </div>
          <div className="p-4 my-3 rounded-xl bg-orange-50/60 border border-orange-200/80 text-stone-900 font-mono text-xs sm:text-sm text-center overflow-x-auto shadow-sm">
            <span className="font-semibold text-orange-900 tracking-wide">4&gt;3</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The read and write sets must overlap.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>13.3 Quorum example</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Imagine three replicas:</p>
          <div className="my-4 overflow-x-auto rounded-xl border border-[#e7e3da] bg-white shadow-sm">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-stone-900 border-b border-[#e7e3da] font-semibold">
                <tr>
                  <th className="px-4 py-3">Replica</th>                  <th className="px-4 py-3">Stored value</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Node A</td>                  <td className="px-4 py-2.5 text-stone-700">₹3,000</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Node B</td>                  <td className="px-4 py-2.5 text-stone-700">₹3,000</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Node C</td>                  <td className="px-4 py-2.5 text-stone-700">₹5,000</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Two nodes contain the latest version.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A read that consults two replicas can determine the appropriate latest version when the system uses correct version metadata and conflict-resolution rules.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Just counting the majority of returned values is not universally sufficient. Systems often use timestamps, versions, logical clocks, transactional protocols, or other conflict-resolution mechanisms.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>13.4 Majority quorum</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">For an odd number of nodes, a majority quorum is:</p>
          <div className="p-4 my-3 rounded-xl bg-orange-50/60 border border-orange-200/80 text-stone-900 font-mono text-xs sm:text-sm text-center overflow-x-auto shadow-sm">
            <span className="font-semibold text-orange-900 tracking-wide">Q=\left\lfloor\frac&#123;N&#125;&#123;2&#125;\right\rfloor+1</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">For five nodes:</p>
          <div className="p-4 my-3 rounded-xl bg-orange-50/60 border border-orange-200/80 text-stone-900 font-mono text-xs sm:text-sm text-center overflow-x-auto shadow-sm">
            <span className="font-semibold text-orange-900 tracking-wide">Q=\lfloor5/2\rfloor+1=3</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">At least three nodes are required for a majority.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>13.5 Quorum and fault tolerance</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Consider five voting nodes.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">If three nodes are available, a majority can still be obtained.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">If two nodes fail:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Three nodes remain available.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The system can still reach a majority quorum.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">If three nodes fail:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Only two nodes remain.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A majority cannot be obtained.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A five-node majority-based cluster can tolerate two unavailable voting nodes, provided its protocol and deployment assumptions hold.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>13.6 Quorum trade-offs</span>
          </h3>
          <div className="my-4 overflow-x-auto rounded-xl border border-[#e7e3da] bg-white shadow-sm">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-stone-900 border-b border-[#e7e3da] font-semibold">
                <tr>
                  <th className="px-4 py-3">Configuration</th>                  <th className="px-4 py-3">Typical effect</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Higher write quorum</td>                  <td className="px-4 py-2.5 text-stone-700">Stronger write confirmation, potentially higher write latency</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Higher read quorum</td>                  <td className="px-4 py-2.5 text-stone-700">More replica coordination, potentially higher read latency</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Lower quorum</td>                  <td className="px-4 py-2.5 text-stone-700">Better availability under certain failures, potentially weaker guarantees</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Majority quorum</td>                  <td className="px-4 py-2.5 text-stone-700">Prevents multiple disjoint majorities under standard voting assumptions</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The exact consistency guarantees depend on the replication protocol, versioning, conflict resolution, and whether reads use a mechanism that can identify the latest committed update.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>13.7 Quorum in Cassandra</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Apache Cassandra uses tunable consistency levels.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Depending on the configuration, clients can select how many replicas must acknowledge read and write operations.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">For example, a consistency level of QUORUM requires a quorum of replicas for the relevant operation.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">This allows engineers to tune consistency, latency, and availability according to application requirements.</p>
        </div>
      </section>

      {/* SECTION 14: 14. Fault Tolerance */}
      <section id="section-14" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 14
          </span>
          <span className="text-xs font-mono text-stone-500">Part 7 · Checkpointing, Redundancy &amp; High Availability</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          14. Fault Tolerance
        </h2>
        <div className="space-y-3">
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Fault tolerance is the ability of a system to continue providing its intended service despite failures in some components.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Failures are unavoidable in distributed environments.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A server might crash, a disk might fail, a network link might become unavailable, or a process might terminate unexpectedly.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A reliable architecture expects failures and incorporates recovery mechanisms.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>14.1 Why fault tolerance matters</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Consider a data pipeline that processes 10 million records daily.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A worker fails after processing 7 million records.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Without fault tolerance, the entire pipeline may need to restart.</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`With appropriate fault tolerance, the system may resume from a checkpoint and process only the unfinished work.`}</code>
            </pre>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>14.2 Types of failures</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Hardware failure</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">CPU failure.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Memory failure.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Disk failure.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Server shutdown.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Software failure</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Application crash.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Memory exhaustion.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Unhandled exceptions.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Operating system errors.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Network failure</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Connection timeout.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Packet loss.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Network partition.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">DNS resolution failure.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Data failure</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Corrupted files.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Missing records.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Invalid schemas.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Duplicate processing.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Human or operational failure</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Accidental deletion.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Incorrect deployment.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Misconfiguration.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Permission changes.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>14.3 Fault tolerance techniques</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Replication</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Maintain additional copies of important data or service state.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Redundancy</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Provide alternative machines, network routes, or service instances.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Checkpointing</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Save progress so processing can resume after failure.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Automatic failover</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Promote a healthy replica or replacement worker when the primary fails.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Retry mechanisms</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Retry operations that fail because of temporary problems.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Dead-letter queues</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Store messages that cannot be processed successfully after the configured retry policy.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Monitoring and alerting</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Detect failures and notify responsible systems or engineers.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>14.4 Checkpointing in distributed data processing</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Suppose Spark is processing a large dataset.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A job may maintain recoverable progress or intermediate state according to the execution model.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Conceptually:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Start Processing | v Process Partition 1 | v Save Checkpoint | v Process Partition 2 | v Save Checkpoint | v Worker Failure | v Recover from Available State`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Checkpointing can reduce repeated computation, especially for iterative processing and streaming state recovery.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Important distinction: In Apache Spark, ordinary DataFrame jobs often recover lost partitions by recomputing them using lineage. Checkpointing is especially relevant when persistent recovery points or streaming state recovery are needed.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>14.5 Fault tolerance versus high availability</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">These concepts are related but different.</p>
          <div className="my-4 overflow-x-auto rounded-xl border border-[#e7e3da] bg-white shadow-sm">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-stone-900 border-b border-[#e7e3da] font-semibold">
                <tr>
                  <th className="px-4 py-3">Fault tolerance</th>                  <th className="px-4 py-3">High availability</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Ability to handle component failures</td>                  <td className="px-4 py-2.5 text-stone-700">Goal of keeping a service accessible</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Focuses on recovery and resilience</td>                  <td className="px-4 py-2.5 text-stone-700">Focuses on availability and downtime</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Uses redundancy and failure handling</td>                  <td className="px-4 py-2.5 text-stone-700">Uses failover, load balancing and monitoring</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">A system can be fault-tolerant without providing instant failover. High availability is often achieved by combining fault tolerance with fast detection and recovery mechanisms.</td>                  <td className="px-4 py-2.5 text-stone-700"></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* SECTION 15: 15. Failure Detection */}
      <section id="section-15" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 15
          </span>
          <span className="text-xs font-mono text-stone-500">Part 7 · Heartbeats, Adaptive Timeouts &amp; Liveness Checks</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          15. Failure Detection
        </h2>
        <div className="space-y-3">
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Failure detection is the process of determining whether a node, process, or service is functioning correctly.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">In a distributed system, detecting failures is difficult because a slow node can appear identical to a failed node.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>15.1 Why failure detection is difficult</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Imagine a distributed cluster with two nodes.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Node A sends a request to Node B.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Node B does not respond.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">What happened?</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Possible explanations:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Node B crashed.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Node B is overloaded.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The network is slow.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A firewall blocked communication.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The response was lost.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Node B is still processing the request.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Node A cannot automatically know which explanation is correct.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">This is a fundamental distributed-systems challenge.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>15.2 Heartbeats</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A heartbeat is a periodic signal sent by a node to indicate that it is alive.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Example:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Node A Node B | | |--- Ping ---&gt;| |&lt;-- Pong ----| | | |--- Ping ---&gt;| |&lt;-- Pong ----| | |</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">If heartbeats stop arriving for a configured period, the monitoring system may suspect a failure.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>15.3 Heartbeat timeout example</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Suppose nodes send heartbeats every 5 seconds.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The failure detector expects at least one heartbeat within a 15-second window.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">If no heartbeat arrives, the node may be marked as suspected or unhealthy.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">This does not prove the node has crashed.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A temporary network delay could have caused the missed heartbeat.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Production systems often use adaptive timeouts, health probes, multiple observations, or failure-detector algorithms to reduce false suspicions.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>15.4 Health checks</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Health checks are requests or signals used to determine whether a service is operating properly.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Common types include:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Liveness check: Determines whether a process is alive and should continue running.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Readiness check: Determines whether a service is ready to accept traffic.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Dependency check: Checks whether required external services are available.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">For example, a service might be alive but not ready because it has not completed initialization.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>15.5 Failure detection versus recovery</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">These are different steps.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Failure detection identifies a suspected problem.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Recovery attempts to restore normal operation.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Example:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Worker Failure | v Heartbeat Timeout | v Mark Worker Unhealthy | v Reschedule Failed Task | v Another Worker Executes It`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">An effective distributed architecture needs both detection and recovery.</p>
        </div>
      </section>

      {/* SECTION 16: 16. Consensus Fundamentals */}
      <section id="section-16" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 16
          </span>
          <span className="text-xs font-mono text-stone-500">Part 8 · Agreement, Raft Protocol &amp; Paxos Comparison</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          16. Consensus Fundamentals
        </h2>
        <div className="space-y-3">
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Consensus is the process by which distributed nodes agree on a value, decision, or ordered sequence of operations despite failures.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Consensus is essential when multiple machines must coordinate decisions that cannot safely be made independently.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>16.1 Why consensus is necessary</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Imagine a cluster with five nodes responsible for maintaining configuration information.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">All nodes need to agree about the current leader.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">If two nodes independently declare themselves leaders, the cluster may accept conflicting operations.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A consensus protocol helps participating nodes agree on an authoritative decision.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Applications include:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Leader election.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Distributed locks.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Replicated logs.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Configuration management.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Cluster coordination.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Metadata management.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>16.2 Basic consensus problem</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Suppose five nodes need to agree on a configuration value.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Node A: Value X Node B: Value X Node C: Value X Node D: Value Y Node E: Value X</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The nodes must determine which value is accepted.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A consensus protocol establishes rules for how proposals are made, accepted, and committed.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">It must account for:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Messages being delayed.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Nodes failing.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Nodes restarting.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Network partitions.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Competing proposals.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>16.3 Consensus properties</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Consensus protocols are commonly evaluated using properties such as:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Agreement: Nodes must not commit conflicting decisions for the same consensus position.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Validity: An accepted decision must satisfy the protocol's validity rules.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Termination or liveness: Under the protocol's stated operating assumptions, a decision should eventually be reached.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Fault tolerance: The protocol should handle a defined class and number of failures.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Safety is about preventing incorrect decisions. Liveness is about making progress.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A system may preserve safety by refusing to progress when it cannot communicate with enough participants.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>16.4 Raft consensus algorithm</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Raft is a consensus algorithm designed to be understandable while supporting replicated logs and leader election.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Raft commonly organizes nodes into three states:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Follower.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Candidate.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Leader.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>16.5 Raft leader election</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Initially, nodes operate as followers.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">If a follower does not hear from the leader within its election timeout, it may become a candidate.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The candidate requests votes from other nodes.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">If it obtains a majority, it becomes the leader.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Follower</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Receives leader communication</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Election timeout</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Candidate</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Requests votes from peers</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Obtains majority vote</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Leader</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Coordinates log replication</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>16.6 Raft log replication</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">After election, the leader receives client operations.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">It appends the operations to its replicated log and sends entries to followers.</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Client Request | v Leader | +---------+---------+ | | v v Follower A Follower B | | +---------+---------+ | Majority reached | v Commit the Entry`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The leader advances the commit index once the protocol's commitment conditions are met.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Replicated logs help machines maintain the same ordered sequence of operations.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Raft is used in various distributed coordination and storage systems.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>16.7 Paxos consensus</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Paxos is another foundational family of consensus algorithms.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Paxos addresses how distributed participants agree on a chosen value despite certain failures and message delays.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Classic Paxos introduces roles and concepts such as proposers, acceptors, and learners.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">It is theoretically important and has influenced distributed storage and coordination systems.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>16.8 Raft versus Paxos</span>
          </h3>
          <div className="my-4 overflow-x-auto rounded-xl border border-[#e7e3da] bg-white shadow-sm">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-stone-900 border-b border-[#e7e3da] font-semibold">
                <tr>
                  <th className="px-4 py-3">Raft</th>                  <th className="px-4 py-3">Paxos</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Designed for understandable replicated-log consensus</td>                  <td className="px-4 py-2.5 text-stone-700">Foundational family of consensus protocols</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Uses explicit leader election</td>                  <td className="px-4 py-2.5 text-stone-700">Uses proposal and acceptance phases</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Commonly explained with follower, candidate and leader states</td>                  <td className="px-4 py-2.5 text-stone-700">Commonly explained with proposer, acceptor and learner roles</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Used in several practical distributed systems</td>                  <td className="px-4 py-2.5 text-stone-700">Has influenced many distributed coordination designs</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Both require assumptions about communication, timing, and node failures. Consensus does not mean that a network partition magically disappears; it provides safe decision-making under specified failure models.</p>
        </div>
      </section>

      {/* SECTION 17: 17. Distributed Coordination */}
      <section id="section-17" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 17
          </span>
          <span className="text-xs font-mono text-stone-500">Part 8 · Distributed Locks, Leases, Fencing Tokens &amp; etcd</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          17. Distributed Coordination
        </h2>
        <div className="space-y-3">
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Distributed coordination refers to mechanisms that allow independent nodes to organize shared activities and avoid conflicting operations.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Without coordination, multiple workers might execute the same task, update the same record, or make conflicting leadership decisions.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>17.1 Why coordination is necessary</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Imagine a data pipeline with five workers.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A single batch must be processed exactly once by the intended logical owner.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Without coordination:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">All five workers might process the same batch.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Two workers might attempt to update the same partition.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A worker might start before the required dependency finishes.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Multiple nodes might try to become leaders.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Distributed coordination mechanisms prevent or manage these situations.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>17.2 Distributed locks</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A distributed lock ensures that only an authorized holder can perform a particular critical operation during the lock's valid ownership period.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Example:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Suppose a nightly pipeline should run only once.</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Worker A ── Requests Lock | v Lock Service | v Lock Granted | v Execute Nightly Job`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">If Worker B also requests the lock, it should not be granted ownership simultaneously under the lock system's guarantees.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>17.3 Lease-based locks</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A lease is a lock that remains valid for a limited period.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">For example:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Worker A acquires a 30-second lease.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Worker A performs a task.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Worker A renews the lease if it needs more time.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">If it fails, the lease eventually expires.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Another worker may acquire the lease.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Leases help prevent abandoned locks from remaining indefinitely.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>17.4 Fencing tokens</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Lease expiration alone is not always enough.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Imagine Worker A pauses for a long time, loses its lease, and then resumes.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Worker B has already acquired the resource.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Worker A might still attempt to write to the database.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Fencing tokens solve this class of problem by assigning monotonically increasing ownership numbers.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Example:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Worker A → Token 41 Worker B → Token 42</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The protected resource rejects writes carrying an older token after a newer token has been accepted.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">This is a stronger protection than simply assuming that an expired lock holder has stopped executing.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>17.5 Coordination services</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Distributed coordination may be implemented using systems such as:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Apache ZooKeeper.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">etcd.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Consul.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">These systems can support coordination primitives such as metadata storage, leader election, leases, and locks.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Their guarantees and APIs differ, so applications must use them according to their documented consistency and failure semantics.</p>
        </div>
      </section>

      {/* SECTION 18: 18. Retry Mechanisms and Idempotency */}
      <section id="section-18" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 18
          </span>
          <span className="text-xs font-mono text-stone-500">Part 9 · Exponential Backoff, Jitter &amp; Upserts</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          18. Retry Mechanisms and Idempotency
        </h2>
        <div className="space-y-3">
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Distributed systems frequently encounter temporary failures.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A service might be unavailable for a few seconds, a network request might time out, or a database might temporarily reject connections.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Retry mechanisms allow applications to attempt failed operations again.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">However, retries introduce another important problem: duplicate execution.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">This is where idempotency becomes essential.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>18.1 What are retry mechanisms?</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A retry mechanism automatically repeats an operation when it fails due to a potentially temporary problem.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Example:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A data pipeline tries to connect to a database.</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Attempt 1 | v Connection Failed | v Attempt 2 | v Connection Failed | v Attempt 3 | v Connection Successful`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Retries are useful for:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Temporary network failures.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Service unavailability.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Database connection failures.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Rate limiting.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Temporary resource exhaustion.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Transient infrastructure problems.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Not all errors should be retried.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">For example, an invalid API key or malformed request generally requires correction rather than repeated execution.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>18.2 Fixed-delay retry</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A fixed-delay retry waits for the same amount of time between attempts.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Example:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`import time def connect_to_service(): for attempt in range(3): try: return call_remote_service() except ConnectionError: if attempt == 2: raise time.sleep(2)`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The application attempts the operation three times and waits two seconds after each retryable failure.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">This is easy to implement but may cause many clients to retry simultaneously.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>18.3 Exponential backoff</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Exponential backoff increases the delay between retry attempts.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A common formula is:</p>
          <div className="p-4 my-3 rounded-xl bg-orange-50/60 border border-orange-200/80 text-stone-900 font-mono text-xs sm:text-sm text-center overflow-x-auto shadow-sm">
            <span className="font-semibold text-orange-900 tracking-wide">Delay = InitialDelay \times 2^&#123;Attempt&#125;</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Example:</p>
          <div className="my-4 overflow-x-auto rounded-xl border border-[#e7e3da] bg-white shadow-sm">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-stone-900 border-b border-[#e7e3da] font-semibold">
                <tr>
                  <th className="px-4 py-3">Attempt</th>                  <th className="px-4 py-3">Delay</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">1</td>                  <td className="px-4 py-2.5 text-stone-700">1 second</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">2</td>                  <td className="px-4 py-2.5 text-stone-700">2 seconds</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">3</td>                  <td className="px-4 py-2.5 text-stone-700">4 seconds</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">4</td>                  <td className="px-4 py-2.5 text-stone-700">8 seconds</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">5</td>                  <td className="px-4 py-2.5 text-stone-700">16 seconds</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The actual policy usually includes a maximum delay.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Exponential backoff reduces unnecessary pressure on an unhealthy service.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>18.4 Exponential backoff with jitter</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">If thousands of applications retry at exactly the same intervals, they may create repeated spikes in traffic.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">This is sometimes called a thundering herd problem.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Jitter introduces randomness into retry delays.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">For example:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`import random base_delay = 2 maximum_delay = 30 for attempt in range(5): delay = min( maximum_delay, base_delay * (2 ** attempt) ) delay += random.uniform(0, 1) print("Next retry delay:", delay)`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">In production systems, the retry policy should also handle:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Retryable error classification.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Maximum attempts.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Overall deadline.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Cancellation.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Server-specified retry guidance.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Monitoring and logging.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>18.5 What is idempotency?</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Idempotency means that repeating the same operation produces the same intended final effect as performing it once.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Mathematically:</p>
          <div className="p-4 my-3 rounded-xl bg-orange-50/60 border border-orange-200/80 text-stone-900 font-mono text-xs sm:text-sm text-center overflow-x-auto shadow-sm">
            <span className="font-semibold text-orange-900 tracking-wide">f(f(x))=f(x)</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">For example, setting a customer's account status to active is naturally idempotent when repeated.</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`UPDATE customers SET status = 'active' WHERE customer_id = 101;`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Executing this operation multiple times leaves the customer with the same status.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">However, consider:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`UPDATE accounts SET balance = balance - 1000 WHERE account_id = 101;`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Executing this twice deducts ₹2,000 instead of ₹1,000.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">This operation is not idempotent by itself.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>18.6 Idempotency keys</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">An idempotency key is a unique identifier associated with a logical request.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Suppose a customer submits a payment request.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The application creates:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`{ "idempotency_key": "PAY-REQ-10001", "customer_id": 101, "amount": 1500, "currency": "INR" }`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The payment service records the request key.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">When the same request is retried, the service checks the key.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">If it has already processed the request, it returns the previously recorded result instead of creating a second payment.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Conceptually:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Request PAY-REQ-10001 | v Check Idempotency Key | +----+----+ | | v v New Key Existing Key | | v v Process Return Previous Payment Result`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A practical implementation also stores the operation's result and handles concurrent requests using database constraints or transactions.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>18.7 Idempotency in data pipelines</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Idempotency is critical in ETL and ELT pipelines.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Imagine a pipeline processes a daily sales file.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The first run loads 10,000 records.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A failure occurs before the job reports success.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The scheduler retries the job.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Without idempotency, the same 10,000 records may be inserted again.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A better strategy uses:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Primary keys.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Unique constraints.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Upserts.</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Merge operations.`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Batch identifiers.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Processed-event tracking.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Transactional commits.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Example:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`INSERT INTO warehouse_orders ( order_id, customer_id, amount ) VALUES ( 5001, 101, 1500 ) ON CONFLICT (order_id) DO UPDATE SET customer_id = EXCLUDED.customer_id, amount = EXCLUDED.amount;`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The same logical order can be processed repeatedly without inserting a new duplicate row.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>18.8 Idempotency versus exactly-once processing</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">These concepts are related but different.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Idempotency makes repeated execution safe.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Exactly-once processing aims to ensure a logical event affects the final result only once within a defined processing system or scope.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A distributed system cannot simply guarantee exactly-once effects across arbitrary external services by retrying messages.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">In practice, exactly-once guarantees usually require carefully coordinated transaction boundaries, deduplication, transactional message processing, or idempotent destinations.</p>
        </div>
      </section>

      {/* SECTION 19: 19. Backpressure */}
      <section id="section-19" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 19
          </span>
          <span className="text-xs font-mono text-stone-500">Part 9 · Flow Control, Buffering &amp; Kafka Consumer Lag</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          19. Backpressure
        </h2>
        <div className="space-y-3">
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Backpressure is a mechanism that controls the flow of data when a downstream component cannot process incoming data as quickly as it arrives.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">It is particularly important in distributed streaming systems.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>19.1 Understanding the problem</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Imagine a system with two components:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Producer generates 100,000 events per second.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Consumer processes 20,000 events per second.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The producer is five times faster than the consumer.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">What happens?</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The unprocessed events begin accumulating.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Producer</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">100,000 events/sec</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Message Queue</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Backlog continuously increasing</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Overloaded</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Consumer</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">20,000 events/sec</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">If the system does nothing, the queue grows continuously.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Eventually:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Memory may become exhausted.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Storage costs may increase.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Processing latency may become unacceptable.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Messages may expire or be lost depending on the broker.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The service may crash.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Backpressure helps control this situation.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>19.2 How backpressure works</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Backpressure allows slower downstream components to influence how quickly upstream components send data.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Common strategies include:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Flow control: The consumer indicates how much data it can accept.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Rate limiting: Restrict the number of records or requests sent per second.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Buffering: Temporarily store incoming data until consumers can process it.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Demand-based processing: Consumers request additional batches only when ready.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Load shedding: Drop or reject lower-priority work when system capacity is exceeded, if permitted by the business requirements.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>19.3 Backpressure example</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Suppose the producer generates:</p>
          <div className="p-4 my-3 rounded-xl bg-orange-50/60 border border-orange-200/80 text-stone-900 font-mono text-xs sm:text-sm text-center overflow-x-auto shadow-sm">
            <span className="font-semibold text-orange-900 tracking-wide">100,000\ events/sec</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The consumer processes:</p>
          <div className="p-4 my-3 rounded-xl bg-orange-50/60 border border-orange-200/80 text-stone-900 font-mono text-xs sm:text-sm text-center overflow-x-auto shadow-sm">
            <span className="font-semibold text-orange-900 tracking-wide">20,000\ events/sec</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The producer must be controlled, more processing capacity must be added, or the backlog must be managed safely.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">One strategy reduces the producer's output.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Another adds more consumer instances, provided the messaging system can distribute work effectively.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">For example:</p>
          <div className="my-4 overflow-x-auto rounded-xl border border-[#e7e3da] bg-white shadow-sm">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-stone-900 border-b border-[#e7e3da] font-semibold">
                <tr>
                  <th className="px-4 py-3">Consumer workers</th>                  <th className="px-4 py-3">Capacity per worker</th>                  <th className="px-4 py-3">Combined capacity</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">1</td>                  <td className="px-4 py-2.5 text-stone-700">20,000/sec</td>                  <td className="px-4 py-2.5 text-stone-700">20,000/sec</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">2</td>                  <td className="px-4 py-2.5 text-stone-700">20,000/sec</td>                  <td className="px-4 py-2.5 text-stone-700">40,000/sec</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">4</td>                  <td className="px-4 py-2.5 text-stone-700">20,000/sec</td>                  <td className="px-4 py-2.5 text-stone-700">80,000/sec</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">5</td>                  <td className="px-4 py-2.5 text-stone-700">20,000/sec</td>                  <td className="px-4 py-2.5 text-stone-700">100,000/sec</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">This assumes independent work distribution and enough resources to achieve the stated capacity.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>19.4 Backpressure in Apache Kafka</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Kafka producers publish messages to topic partitions.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Consumers read from those partitions.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">If consumers cannot keep up, consumer lag increases.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Consumer lag is the difference between the latest available offset and the consumer's current processing position, subject to how lag is measured.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Example:</p>
          <div className="my-4 overflow-x-auto rounded-xl border border-[#e7e3da] bg-white shadow-sm">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-stone-900 border-b border-[#e7e3da] font-semibold">
                <tr>
                  <th className="px-4 py-3">Metric</th>                  <th className="px-4 py-3">Value</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Latest offset</td>                  <td className="px-4 py-2.5 text-stone-700">100,000</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Consumer offset</td>                  <td className="px-4 py-2.5 text-stone-700">80,000</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Consumer lag</td>                  <td className="px-4 py-2.5 text-stone-700">20,000</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">This means the consumer is behind by 20,000 offsets for that partition.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Consumer lag is an important monitoring metric.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Kafka does not automatically solve every consumer overload problem. Engineers may need to:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Add consumer instances, within partition and group limits.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Optimize processing logic.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Increase partition count where appropriate.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Tune polling and batch sizes.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Control upstream production rates.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Manage external dependencies.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>19.5 Backpressure in Apache Spark Streaming</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Structured Streaming processes data in micro-batches or supported continuous-processing configurations, depending on the engine and source.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">If incoming data exceeds available processing capacity, backlog and processing delays can increase.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Engineers can manage this through:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Source rate limits.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Adequate executor resources.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Efficient transformations.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Appropriate partitioning.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Monitoring input and processing rates.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Controlling downstream output performance.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>19.6 Backpressure versus buffering</span>
          </h3>
          <div className="my-4 overflow-x-auto rounded-xl border border-[#e7e3da] bg-white shadow-sm">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-stone-900 border-b border-[#e7e3da] font-semibold">
                <tr>
                  <th className="px-4 py-3">Backpressure</th>                  <th className="px-4 py-3">Buffering</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Controls the amount of incoming work</td>                  <td className="px-4 py-2.5 text-stone-700">Stores temporary incoming work</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Influences upstream production or demand</td>                  <td className="px-4 py-2.5 text-stone-700">Absorbs temporary processing differences</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Helps prevent uncontrolled overload</td>                  <td className="px-4 py-2.5 text-stone-700">Helps smooth bursts</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">May reduce incoming throughput</td>                  <td className="px-4 py-2.5 text-stone-700">Uses memory or storage</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">They are complementary techniques.</td>                  <td className="px-4 py-2.5 text-stone-700">Buffering without limits can simply postpone overload rather than solve it.</td>
                </tr>
              </tbody>
            </table>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>19.7 Why backpressure matters</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Backpressure helps maintain system stability.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A distributed system should not accept unlimited incoming work when its resources are already exhausted.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">It is better to slow down, reject, or defer work deliberately than to allow uncontrolled resource exhaustion.</p>
        </div>
      </section>

      {/* SECTION 20: 20. Message Delivery Guarantees */}
      <section id="section-20" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 20
          </span>
          <span className="text-xs font-mono text-stone-500">Part 10 · At-Most-Once, At-Least-Once &amp; Exactly-Once</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          20. Message Delivery Guarantees
        </h2>
        <div className="space-y-3">
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Message delivery guarantees describe how messaging systems handle delivery, retries, duplicates, and processing failures.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">They are important in Kafka, RabbitMQ, streaming platforms, and asynchronous data pipelines.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Three major delivery models are commonly discussed:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">At-most-once delivery.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">At-least-once delivery.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Exactly-once processing or effects within a defined system boundary.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>20.1 At-most-once delivery</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">At-most-once means a message is delivered zero or one time.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The message is not retried after certain failures.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Example:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Message Producer | v Message Queue | v Consumer | v Processing Fails | v No Retry / Message Lost`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Advantages:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">No duplicate delivery due to retries.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Lower processing overhead in some configurations.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Disadvantages:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Messages may be lost.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Unsuitable where every business event must be processed.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Potential use cases include some telemetry or non-critical monitoring events where occasional loss is acceptable.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>20.2 At-least-once delivery</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">At-least-once means that the system retries delivery until the message is acknowledged or another defined stopping condition occurs.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The message should be delivered one or more times.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Example:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Message Producer | v Message Queue | v Consumer | v Processing Failure | v Retry | v Process Again`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Advantages:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Reduces message loss under supported failure assumptions.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Useful for important business events.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Disadvantages:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The same message may be delivered multiple times.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Consumers must handle duplicates.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Retries can increase workload.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">For example, a payment event may be processed twice unless the payment service uses an idempotency mechanism.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>20.3 Exactly-once processing</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Exactly-once processing aims to make each logical event affect the final result only once within a defined transactional or application boundary.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">It may require:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Transactional producers and consumers.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Idempotent writes.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Deduplication.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Atomic state updates.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Consistent checkpointing.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Coordinated offsets and destination commits.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Example:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">An event is read from a Kafka topic and its corresponding output is committed transactionally, together with the relevant consumed offsets where supported.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">This avoids certain duplicate-output scenarios during retries.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">However, exactly-once behavior within Kafka does not automatically guarantee exactly-once effects in an external payment API or unrelated database.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The complete system boundary and transaction support matter.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>20.4 Comparing delivery guarantees</span>
          </h3>
          <div className="my-4 overflow-x-auto rounded-xl border border-[#e7e3da] bg-white shadow-sm">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-stone-900 border-b border-[#e7e3da] font-semibold">
                <tr>
                  <th className="px-4 py-3">Guarantee</th>                  <th className="px-4 py-3">Delivery behavior</th>                  <th className="px-4 py-3">Duplicate risk</th>                  <th className="px-4 py-3">Message loss risk</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">At-most-once</td>                  <td className="px-4 py-2.5 text-stone-700">Zero or one delivery</td>                  <td className="px-4 py-2.5 text-stone-700">Lower</td>                  <td className="px-4 py-2.5 text-stone-700">Possible</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">At-least-once</td>                  <td className="px-4 py-2.5 text-stone-700">One or more deliveries</td>                  <td className="px-4 py-2.5 text-stone-700">Possible</td>                  <td className="px-4 py-2.5 text-stone-700">Reduced under the configured retry and durability assumptions</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Exactly-once</td>                  <td className="px-4 py-2.5 text-stone-700">One logical effect within a defined scope</td>                  <td className="px-4 py-2.5 text-stone-700">Controlled by transactional or deduplication mechanisms</td>                  <td className="px-4 py-2.5 text-stone-700">Depends on the system's guarantees</td>
                </tr>
              </tbody>
            </table>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>20.5 Delivery guarantees in Apache Kafka</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Kafka supports different producer, consumer, and transaction configurations.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Important concepts include:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Producer acknowledgements (acks)</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Control when the producer considers a record acknowledged.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Idempotent producer</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Helps prevent duplicate log entries caused by certain producer retry scenarios.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Transactions</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Allow multiple Kafka operations to be committed atomically within Kafka's transactional boundary.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Consumer offsets</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Track how far a consumer has progressed through a topic partition.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Isolation levels</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Control which transactional records a consumer can read, including whether it sees only committed transactions.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>20.6 Consumer offset management</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Imagine a consumer reads 100 messages.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">It processes 70 messages and then crashes.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">What happens after restart?</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">If the offset was committed only after processing all 70 messages, the consumer may restart from the last committed position.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">If offsets were committed before successful processing, some records could be skipped.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">This is why offset management matters.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A common at-least-once strategy is:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Read messages.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Process messages.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Ensure output is safely stored.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Commit the corresponding offsets.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A crash between steps 3 and 4 may cause the same messages to be processed again. The destination should therefore support idempotent writes or deduplication.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>20.7 Message delivery in a data engineering pipeline</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Consider a real-time order processing system:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Order Application | v Kafka Topic | v Stream Consumer | v Transformation | v Data Warehouse`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">If the consumer crashes after inserting data into the warehouse but before committing offsets, it may reprocess the same messages after recovery.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The destination should be designed to handle that replay safely.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">This connects message delivery guarantees directly to idempotency and distributed fault tolerance.</p>
        </div>
      </section>

      {/* SECTION 21: 21. Distributed System Reliability */}
      <section id="section-21" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 21
          </span>
          <span className="text-xs font-mono text-stone-500">Part 10 · 99.999% Nines, Circuit Breakers, RPO/RTO &amp; SLAs</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          21. Distributed System Reliability
        </h2>
        <div className="space-y-3">
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Distributed system reliability describes how consistently a system performs its intended functions over time despite component failures, network problems, and unexpected workloads.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A distributed system is not reliable merely because it has multiple servers.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Reliability requires deliberate architectural design, monitoring, testing, recovery, and operational controls.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>21.1 Reliability versus availability</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Reliability and availability are closely related but have different meanings.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Reliability: The probability that a system performs its required functions without failure during a specified period.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Availability: The proportion of time a system is operational and accessible.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A system may experience frequent short failures but recover quickly, resulting in relatively high availability.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Another system may fail less frequently but take hours to recover.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>21.2 Availability calculation</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A simplified availability formula is:</p>
          <div className="p-4 my-3 rounded-xl bg-orange-50/60 border border-orange-200/80 text-stone-900 font-mono text-xs sm:text-sm text-center overflow-x-auto shadow-sm">
            <span className="font-semibold text-orange-900 tracking-wide">Availability = \frac&#123;Uptime&#125;&#123;Uptime+Downtime&#125;\times100</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Consider a service operating for 30 days.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">It experiences 30 minutes of downtime.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Total time:</p>
          <div className="p-4 my-3 rounded-xl bg-orange-50/60 border border-orange-200/80 text-stone-900 font-mono text-xs sm:text-sm text-center overflow-x-auto shadow-sm">
            <span className="font-semibold text-orange-900 tracking-wide">30\times24\times60 = 43,200\text&#123; minutes&#125;</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Availability:</p>
          <div className="p-4 my-3 rounded-xl bg-orange-50/60 border border-orange-200/80 text-stone-900 font-mono text-xs sm:text-sm text-center overflow-x-auto shadow-sm">
            <span className="font-semibold text-orange-900 tracking-wide">\frac&#123;43,200-30&#125;&#123;43,200&#125;\times100 \approx99.93\%</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>21.3 Understanding availability targets</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Organizations often describe availability targets using nines.</p>
          <div className="my-4 overflow-x-auto rounded-xl border border-[#e7e3da] bg-white shadow-sm">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-stone-900 border-b border-[#e7e3da] font-semibold">
                <tr>
                  <th className="px-4 py-3">Availability</th>                  <th className="px-4 py-3">Approximate downtime per 30 days</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">99%</td>                  <td className="px-4 py-2.5 text-stone-700">7 hours 12 minutes</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">99.9%</td>                  <td className="px-4 py-2.5 text-stone-700">43 minutes 12 seconds</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">99.95%</td>                  <td className="px-4 py-2.5 text-stone-700">21 minutes 36 seconds</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">99.99%</td>                  <td className="px-4 py-2.5 text-stone-700">4 minutes 19 seconds</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">99.999%</td>                  <td className="px-4 py-2.5 text-stone-700">26 seconds</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Higher availability targets are generally more expensive and difficult to achieve.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">They require stronger redundancy, faster failure detection, better recovery, and carefully tested deployments.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>21.4 Single point of failure</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A single point of failure is a component whose failure can cause the entire service or a critical part of it to become unavailable.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Example:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Application | v Single Database | v Data Storage`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">If the database fails and there is no effective failover, the entire application may be affected.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A more resilient design could include multiple database nodes, redundant storage, and automated recovery.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>21.5 High availability architecture</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Load Balancer</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Routes requests to healthy application nodes</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Application A</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Healthy</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Application B</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Healthy</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Database Cluster</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Primary • Replicas • Failover</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Replicated and Backed-up Storage</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Redundancy • Recovery • Data protection</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">If Application A fails, the load balancer can route traffic to Application B.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Similarly, if the database primary fails, the database cluster may promote an eligible replica.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The architecture must also ensure that the load balancer and other infrastructure components are not themselves single points of failure.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>21.6 Fault isolation and bulkheads</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Bulkheads are architectural mechanisms that isolate failures so that problems in one component do not overwhelm the entire system.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Imagine an e-commerce platform with:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Payment processing.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Email notifications.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Product recommendations.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">If the email service becomes unavailable, it should not necessarily prevent customers from making purchases.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The system can isolate notification processing into its own queue and worker pool.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">This allows other services to continue working.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>21.7 Circuit breaker pattern</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A circuit breaker prevents repeated requests to a failing service from creating additional damage.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">It has three common states:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Closed: Requests are allowed normally.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Open: Requests are blocked because failures exceeded a threshold.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Half-open: A limited number of trial requests are allowed to determine whether the service has recovered.</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`CLOSED`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Normal requests allowed</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Failure threshold exceeded</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`OPEN`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Requests temporarily rejected</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Recovery timeout expires</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`HALF-OPEN`}</code>
            </pre>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Test requests allowed</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Success → Closed</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Failure → Open</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The circuit breaker reduces repeated calls to an unhealthy dependency.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">It is different from a retry mechanism:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Retry attempts to repeat an operation.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Circuit breaker temporarily prevents requests from reaching a failing service.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Both are often used together.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>21.8 Disaster recovery</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Disaster recovery is the process of restoring systems and data after a major failure.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Examples:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Entire availability zone failure.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Regional cloud outage.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Data center disruption.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Severe data corruption.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Accidental deletion.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Security incidents.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Two important measurements are:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">RPO — Recovery Point Objective</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The maximum acceptable amount of data loss, measured in time.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Example: An RPO of 15 minutes means the organization aims to restore data to a point no more than 15 minutes before the incident.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">RTO — Recovery Time Objective</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The maximum acceptable time to restore the service.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Example: An RTO of one hour means the service should be restored within one hour.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">RPO and RTO are business requirements that guide backup, replication, and recovery architecture.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>21.9 Monitoring reliability</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A distributed platform should monitor:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Node health.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">CPU and memory utilization.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Disk capacity.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Network latency.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Request error rates.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Database availability.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Consumer lag.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Replication lag.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Pipeline failures.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Recovery duration.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Retry frequency.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The objective is to detect problems before they cause a major service disruption.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>21.10 SLI, SLO and SLA</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Three important reliability terms are:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">SLI — Service Level Indicator</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A quantitative measurement of a service.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Example: Percentage of successful API requests.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">SLO — Service Level Objective</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A target for that measurement.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Example: 99.9% of eligible API requests should succeed over a 30-day window.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">SLA — Service Level Agreement</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">An agreement defining a service commitment, often including consequences when the commitment is not met.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">These are useful when designing and operating production data platforms.</p>
        </div>
      </section>

      {/* SECTION 22: 22. Putting Everything Together: Real-World Distributed Data Engineering Architecture */}
      <section id="section-22" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 22
          </span>
          <span className="text-xs font-mono text-stone-500">Part 11 · Complete Enterprise Kafka &amp; Stream Pipeline</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          22. Putting Everything Together: Real-World Distributed Data Engineering Architecture
        </h2>
        <div className="space-y-3">
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Now let's connect the concepts from this module into a real system.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>22.1 Scenario: Real-time e-commerce data platform</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Imagine a large e-commerce company processing:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">10 million customer events daily.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Millions of order updates.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Thousands of payment transactions per hour.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Continuous inventory updates.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Real-time delivery events.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The company needs a scalable data platform that can accept incoming events, process them, store them reliably, and make them available to analytics systems.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>22.2 Proposed architecture</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Event Producers</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Customer App • Orders • Payments • Inventory • Delivery</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Message Broker — Apache Kafka</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Topics • Partitions • Replication • Consumer groups</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Worker A</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Partition 1`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Worker B</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Partition 2</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Worker C</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Partition 3</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Distributed Stream Processing</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Validation • Deduplication • Enrichment • Aggregation</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Distributed Data Storage</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Data Lake • Object Storage • Analytical Warehouse</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Analytics and Data Consumers</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Dashboards • Reports • Machine Learning • Business Applications</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Cross-cutting distributed infrastructure</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Replication and failover</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Monitoring and alerting</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Retry and idempotency</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Backpressure and flow control</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Leader election and consensus</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Schema and message management</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>22.3 How the system works</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Step 1 — Event production</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Applications generate order, payment, and customer events.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Step 2 — Message publishing</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Events are sent to Kafka topics.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Each topic can contain multiple partitions for parallel processing.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Step 3 — Distributed consumption</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Multiple consumers read and process different partitions.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Step 4 — Data processing</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The workers validate, transform, deduplicate, and enrich incoming records.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Step 5 — Distributed storage</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Processed records are saved to distributed storage or a warehouse.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Step 6 — Replication</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Important data is replicated to provide resilience.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Step 7 — Monitoring</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The system monitors node health, processing delays, queue backlogs, and failures.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Step 8 — Recovery</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">When a worker fails, the system resumes work according to its checkpointing, offset, replication, and retry mechanisms.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>22.4 Mapping this architecture to Module 15</span>
          </h3>
          <div className="my-4 overflow-x-auto rounded-xl border border-[#e7e3da] bg-white shadow-sm">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-stone-900 border-b border-[#e7e3da] font-semibold">
                <tr>
                  <th className="px-4 py-3">Concept</th>                  <th className="px-4 py-3">Application in the architecture</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Distributed computing</td>                  <td className="px-4 py-2.5 text-stone-700">Multiple workers process events</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Client-server</td>                  <td className="px-4 py-2.5 text-stone-700">Producers communicate with broker and services</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">RPC</td>                  <td className="px-4 py-2.5 text-stone-700">Components invoke remote operations</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Serialization</td>                  <td className="px-4 py-2.5 text-stone-700">Events encoded using Avro, Protobuf or JSON</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Distributed storage</td>                  <td className="px-4 py-2.5 text-stone-700">Records stored across storage nodes</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Partitioning</td>                  <td className="px-4 py-2.5 text-stone-700">Topics and data divided into partitions</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Replication</td>                  <td className="px-4 py-2.5 text-stone-700">Copies distributed across brokers or storage nodes</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Leader-follower</td>                  <td className="px-4 py-2.5 text-stone-700">Coordinating primary and follower processes</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Consistency</td>                  <td className="px-4 py-2.5 text-stone-700">Determines how updates become visible</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">CAP theorem</td>                  <td className="px-4 py-2.5 text-stone-700">Explains partition-related trade-offs</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Quorum</td>                  <td className="px-4 py-2.5 text-stone-700">Determines required replica confirmations</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Fault tolerance</td>                  <td className="px-4 py-2.5 text-stone-700">Continues after component failures</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Failure detection</td>                  <td className="px-4 py-2.5 text-stone-700">Detects unhealthy nodes</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Consensus</td>                  <td className="px-4 py-2.5 text-stone-700">Coordinates leadership and replicated decisions</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Distributed coordination</td>                  <td className="px-4 py-2.5 text-stone-700">Manages ownership and task execution</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Retry and idempotency</td>                  <td className="px-4 py-2.5 text-stone-700">Handles failed operations safely</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Backpressure</td>                  <td className="px-4 py-2.5 text-stone-700">Controls overload</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Message delivery</td>                  <td className="px-4 py-2.5 text-stone-700">Defines event processing guarantees</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Reliability</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Maintains dependable service operation</p>
        </div>
      </section>

      {/* SECTION 23: 23. Practical Laboratory — Distributed Systems */}
      <section id="section-23" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 23
          </span>
          <span className="text-xs font-mono text-stone-500">Labs · 4 Hands-On Distributed Systems Laboratories</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          23. Practical Laboratory — Distributed Systems
        </h2>
        <div className="space-y-3">
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Hands-on learning</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Lab 1 — Build a Distributed Processing System Using Python</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Objective: Understand how multiple independent worker processes can divide and execute a common workload.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Step 1: Create the project</span>
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`distributed-lab/ │ ├── coordinator.py ├── worker.py ├── data/ │ └── transactions.csv └── results/`}</code>
            </pre>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Step 2: Create sample transaction data</span>
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`import csv import random with open("data/transactions.csv", "w", newline="") as file: writer = csv.writer(file) writer.writerow([ "transaction_id", "amount" ]) for i in range(1, 100001): writer.writerow([ i, random.randint(100, 10000) ])`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">This creates 100,000 transactions.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Step 3: Create a worker</span>
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`import csv import sys def process_partition(file_path): total = 0 count = 0 with open(file_path, "r") as file: reader = csv.DictReader(file) for row in reader: total += float(row["amount"]) count += 1 return { "count": count, "total": total } if __name__ == "__main__": result = process_partition(sys.argv[1]) print(result)`}</code>
            </pre>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Step 4: Understand the coordinator</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The coordinator should:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Divide the transaction dataset into smaller partitions.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Start multiple independent worker processes.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Assign a different partition to each worker.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Receive processing results.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Combine the results.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Verify that all expected transactions were processed.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Use Python's multiprocessing or concurrent.futures to coordinate workers on your local machine.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">For this first lab, multiple worker processes on one computer simulate distributed task execution. They do not yet simulate separate networked machines.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Expected output</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Total Transactions: 100000 Worker 1: 25000 records Worker 2: 25000 records Worker 3: 25000 records Worker 4: 25000 records Total Records Processed: 100000 Total Transaction Amount: [calculated total] Status: SUCCESS</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Learning outcome: Understanding workload partitioning, parallel processing, workers, coordination, and result aggregation.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Lab 2 — Build a Kafka-Based Distributed Messaging System</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Objective: Understand how producers and consumers exchange messages through a distributed broker.</p>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs">
            <span className="font-semibold text-stone-800 truncate">All things Kafka - DEV Community</span>
            <a href="https://images.openai.com/static-rsc-4/DqEEx-xDjrg5xHA14DxSX52W9GJHkrUypD-yPUoFpY9KkD5eA8pCHjWW8I54BlPfiagvxaX8lEElYTxs50EEeem53qqfevYzhlpkp6boL7E9CPD5rkGHcNHDkgfd-AKMLzUnihPTo3CSJ-X1XPWUaQAlBORYa1hIhbB9zzW5SZY?purpose=inline" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Link</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs">
            <span className="font-semibold text-stone-800 truncate">dev.to</span>
            <a href="https://dev.to/alamfatima1999/all-things-kafka-3cdb?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Link</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Required technologies</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Python.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Apache Kafka.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Docker.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Kafka Python client.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Architecture</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Order Producer | v Kafka Topic: orders | +---+---+ | | | v v v Consumer A Consumer B Consumer C | v Processed Orders`}</code>
            </pre>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Step 1: Create an event producer</span>
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`import json from kafka import KafkaProducer producer = KafkaProducer( bootstrap_servers="localhost:9092", value_serializer=lambda value: json.dumps(value).encode("utf-8") ) event = { "order_id": 5001, "customer_id": 101, "amount": 1500, "status": "completed" } producer.send("orders", value=event) producer.flush() print("Order event published")`}</code>
            </pre>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Step 2: Create a consumer</span>
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`import json from kafka import KafkaConsumer consumer = KafkaConsumer( "orders", bootstrap_servers="localhost:9092", auto_offset_reset="earliest", enable_auto_commit=False, value_deserializer=lambda value: json.loads(value.decode("utf-8")) ) for message in consumer: event = message.value print("Received:", event) # Process and persist the event successfully. # Commit only after successful processing. consumer.commit()`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">For production, offset commits should account for partition ordering and all successfully processed records in the committed batch. Also implement exception handling and safe destination writes.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Step 3: Experiment with distributed behavior</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Perform these exercises:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Create a Kafka topic with three partitions.`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Publish 10,000 order events.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Run three consumers within one consumer group.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Observe how partitions are assigned.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Stop one consumer.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Observe partition reassignment.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Restart the consumer.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Observe recovery and offset behavior.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Introduce duplicate events and implement deduplication.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Monitor consumer lag.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Learning outcome: Producers, consumers, topics, partitions, replication, message delivery, consumer groups, offsets, and fault recovery.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Lab 3 — Build a Leader-Follower Replication Simulation</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Objective: Understand primary-replica architecture, replication lag, failover, and consistency.</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Create a simple simulation containing:`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">One leader.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Two followers.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A shared record.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Replication events.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A simulated node failure.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Initial state</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Leader: Balance = 5000 Follower1: Balance = 5000 Follower2: Balance = 5000</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Write operation</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The leader processes:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">balance = 5000 balance -= 1000</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">New state:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Leader: Balance = 4000 Follower1: Balance = 5000 Follower2: Balance = 5000</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">This represents asynchronous replication before the followers have received the update.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">After replication:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Leader: Balance = 4000 Follower1: Balance = 4000 Follower2: Balance = 4000</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Experiments</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Stop one follower.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Continue writing to the leader.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Restart the follower.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Synchronize its state.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Simulate leader failure.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Implement a simple leader election.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Demonstrate why two nodes must not independently accept conflicting leadership decisions.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Learning outcome: Replication, eventual consistency, primary-replica architecture, failure detection, and coordination.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Lab 4 — Build a Reliable Distributed Data Pipeline</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Advanced mini-project</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Combine the concepts from the module into a single project.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Project: Distributed E-commerce Event Processing Platform</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Objective: Build a miniature architecture capable of processing order events across multiple workers while handling failures and duplicate messages.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Required components</p>
          <div className="my-4 overflow-x-auto rounded-xl border border-[#e7e3da] bg-white shadow-sm">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-stone-900 border-b border-[#e7e3da] font-semibold">
                <tr>
                  <th className="px-4 py-3">Component</th>                  <th className="px-4 py-3">Technology</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Event producer</td>                  <td className="px-4 py-2.5 text-stone-700">Python</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Message broker</td>                  <td className="px-4 py-2.5 text-stone-700">Apache Kafka</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Message encoding</td>                  <td className="px-4 py-2.5 text-stone-700">JSON or Avro</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Stream processing</td>                  <td className="px-4 py-2.5 text-stone-700">Python workers</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Storage</td>                  <td className="px-4 py-2.5 text-stone-700">PostgreSQL</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Coordination</td>                  <td className="px-4 py-2.5 text-stone-700">Kafka consumer groups</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Monitoring</td>                  <td className="px-4 py-2.5 text-stone-700">Prometheus and Grafana</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Containerization</td>                  <td className="px-4 py-2.5 text-stone-700">Docker</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Functional requirements</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Your system should:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Generate at least 100,000 order events.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Publish events to a Kafka topic.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Divide events across multiple partitions.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Process events using multiple consumers.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Validate incoming records.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Detect duplicate transaction IDs.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Implement idempotent database insertion.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Retry temporary failures using exponential backoff.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Prevent unlimited retry loops.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Handle consumer restarts.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Track consumer lag.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Store permanently failed messages in a dead-letter topic.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Monitor processing throughput.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Compare processing performance with one and multiple workers.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Document the delivery guarantees of the complete pipeline.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Expected architecture</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Python Event Generator | v Kafka Cluster | +----+----+ | | v v Consumer 1 Consumer 2 | | v v Validation and Processing | v PostgreSQL | v Processing Metrics Failures ---> Retry ---> Dead Letter Topic`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Performance experiments</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Run the same workload using different numbers of consumers.</p>
          <div className="my-4 overflow-x-auto rounded-xl border border-[#e7e3da] bg-white shadow-sm">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-stone-900 border-b border-[#e7e3da] font-semibold">
                <tr>
                  <th className="px-4 py-3">Experiment</th>                  <th className="px-4 py-3">Consumers</th>                  <th className="px-4 py-3">Events</th>
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
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Measure:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Total execution time.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Events per second.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Average processing latency.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Maximum consumer lag.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Number of retries.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Duplicate records.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Failed records.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Recovery time after a worker crash.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Your objective is to understand how throughput, latency, reliability, and resource utilization change as the number of workers increases.</p>
        </div>
      </section>

      {/* SECTION 24: 24. Common Mistakes in Distributed Systems */}
      <section id="section-24" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 24
          </span>
          <span className="text-xs font-mono text-stone-500">Architecture · 15 Production Fallacies &amp; Pitfalls</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          24. Common Mistakes in Distributed Systems
        </h2>
        <div className="space-y-3">
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-6 h-6 rounded-full bg-orange-100 text-orange-700 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">1</span>
            <span className="font-medium">Assuming that a distributed system is automatically faster.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Communication, coordination, and network overhead can make small workloads slower.</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-6 h-6 rounded-full bg-orange-100 text-orange-700 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">2</span>
            <span className="font-medium">Assuming network communication never fails.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Every remote operation must account for timeouts, connection failures, and delayed responses.</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-6 h-6 rounded-full bg-orange-100 text-orange-700 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">3</span>
            <span className="font-medium">Assuming that replication guarantees consistency.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Replicas can temporarily contain different data, depending on the replication policy.</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-6 h-6 rounded-full bg-orange-100 text-orange-700 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">4</span>
            <span className="font-medium">Treating retries as harmless.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Retried operations can create duplicates, duplicate payments, and incorrect financial records.</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-6 h-6 rounded-full bg-orange-100 text-orange-700 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">5</span>
            <span className="font-medium">Ignoring idempotency.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Pipelines must be able to recover safely after failures and retries.</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-6 h-6 rounded-full bg-orange-100 text-orange-700 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">6</span>
            <span className="font-medium">Assuming a timeout proves a server has failed.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">It may simply be slow or temporarily unreachable.</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-6 h-6 rounded-full bg-orange-100 text-orange-700 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">7</span>
            <span className="font-medium">Treating CAP as a permanent choice of any two properties.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The fundamental consistency-availability trade-off applies during network partitions.</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-6 h-6 rounded-full bg-orange-100 text-orange-700 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">8</span>
            <span className="font-medium">Using too many partitions without considering overhead.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Excessive partitions can increase metadata, scheduling, and operational costs.</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-6 h-6 rounded-full bg-orange-100 text-orange-700 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">9</span>
            <span className="font-medium">Ignoring data skew.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Uneven partition sizes can cause one worker to become a bottleneck.</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-6 h-6 rounded-full bg-orange-100 text-orange-700 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">10</span>
            <span className="font-medium">Increasing consumers without considering partition limits.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">For a Kafka consumer group, no more consumers can actively consume distinct partitions concurrently than the number of partitions assigned to that group.</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-6 h-6 rounded-full bg-orange-100 text-orange-700 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">11</span>
            <span className="font-medium">Assuming exactly-once delivery across every external system.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Exactly-once guarantees have boundaries. External database operations and APIs require their own transactional or idempotency mechanisms.</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-6 h-6 rounded-full bg-orange-100 text-orange-700 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">12</span>
            <span className="font-medium">Ignoring backpressure.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">An overloaded consumer can accumulate an unbounded processing backlog.</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-6 h-6 rounded-full bg-orange-100 text-orange-700 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">13</span>
            <span className="font-medium">Confusing replication with backup.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Replication protects against certain node failures, but it does not necessarily protect against accidental deletion or corrupted writes.</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-6 h-6 rounded-full bg-orange-100 text-orange-700 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">14</span>
            <span className="font-medium">Implementing distributed locks without fencing.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">An expired lock holder might resume and write after another worker has acquired ownership.</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-6 h-6 rounded-full bg-orange-100 text-orange-700 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">15</span>
            <span className="font-medium">Ignoring observability.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Distributed systems are difficult to troubleshoot without centralized logs, metrics, traces, and correlation identifiers.</p>
        </div>
      </section>

      {/* SECTION 25: 25. Important Interview Questions and Answers */}
      <section id="section-25" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 25
          </span>
          <span className="text-xs font-mono text-stone-500">Interview · 30 Core Questions &amp; System Design Scenarios</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          25. Important Interview Questions and Answers
        </h2>
        <div className="space-y-3">
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">These concepts are particularly important for data engineering, big-data, backend, and distributed systems interviews.</p>
          <div className="mt-4 p-3.5 rounded-xl bg-stone-100/90 border border-stone-300 font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2">
            <span className="px-2 py-0.5 rounded bg-orange-500 text-white text-xs font-black">Q</span>
            <span>Q1. What is a distributed system?</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A distributed system is a collection of independent computers that communicate through a network and coordinate their activities to provide a unified service.</p>
          <div className="mt-4 p-3.5 rounded-xl bg-stone-100/90 border border-stone-300 font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2">
            <span className="px-2 py-0.5 rounded bg-orange-500 text-white text-xs font-black">Q</span>
            <span>Q2. Why do we use distributed computing in data engineering?</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Distributed computing allows large datasets and workloads to be divided across multiple machines, providing greater processing capacity, storage scalability, and fault tolerance.</p>
          <div className="mt-4 p-3.5 rounded-xl bg-stone-100/90 border border-stone-300 font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2">
            <span className="px-2 py-0.5 rounded bg-orange-500 text-white text-xs font-black">Q</span>
            <span>Q3. What is horizontal scaling?</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Horizontal scaling means increasing system capacity by adding more machines or computing nodes instead of increasing the resources of one machine.</p>
          <div className="mt-4 p-3.5 rounded-xl bg-stone-100/90 border border-stone-300 font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2">
            <span className="px-2 py-0.5 rounded bg-orange-500 text-white text-xs font-black">Q</span>
            <span>Q4. What is RPC?</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">RPC is a communication mechanism that allows a program to invoke an operation running in another process or machine through a network.</p>
          <div className="mt-4 p-3.5 rounded-xl bg-stone-100/90 border border-stone-300 font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2">
            <span className="px-2 py-0.5 rounded bg-orange-500 text-white text-xs font-black">Q</span>
            <span>Q5. What is serialization?</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Serialization converts data structures or objects into a format suitable for transmission or storage. Deserialization converts them back into usable data structures.</p>
          <div className="mt-4 p-3.5 rounded-xl bg-stone-100/90 border border-stone-300 font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2">
            <span className="px-2 py-0.5 rounded bg-orange-500 text-white text-xs font-black">Q</span>
            <span>Q6. What is the difference between JSON, Avro, and Protobuf?</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">JSON is a human-readable text format. Avro is a schema-based binary serialization system commonly used in data pipelines. Protobuf is a schema-based binary format commonly used with gRPC and inter-service communication.</p>
          <div className="mt-4 p-3.5 rounded-xl bg-stone-100/90 border border-stone-300 font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2">
            <span className="px-2 py-0.5 rounded bg-orange-500 text-white text-xs font-black">Q</span>
            <span>Q7. What is distributed storage?</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Distributed storage stores data across multiple machines, allowing systems to handle large datasets and maintain redundant copies.</p>
          <div className="mt-4 p-3.5 rounded-xl bg-stone-100/90 border border-stone-300 font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2">
            <span className="px-2 py-0.5 rounded bg-orange-500 text-white text-xs font-black">Q</span>
            <span>Q8. What is partitioning?</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Partitioning divides a dataset into smaller parts that can be stored or processed independently.</p>
          <div className="mt-4 p-3.5 rounded-xl bg-stone-100/90 border border-stone-300 font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2">
            <span className="px-2 py-0.5 rounded bg-orange-500 text-white text-xs font-black">Q</span>
            <span>Q9. What is sharding?</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Sharding is distributing database partitions across multiple database servers or nodes.</p>
          <div className="mt-4 p-3.5 rounded-xl bg-stone-100/90 border border-stone-300 font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2">
            <span className="px-2 py-0.5 rounded bg-orange-500 text-white text-xs font-black">Q</span>
            <span>Q10. What is replication?</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Replication maintains multiple copies of data across different nodes to improve redundancy, availability, and read scalability.</p>
          <div className="mt-4 p-3.5 rounded-xl bg-stone-100/90 border border-stone-300 font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2">
            <span className="px-2 py-0.5 rounded bg-orange-500 text-white text-xs font-black">Q</span>
            <span>Q11. What is the difference between synchronous and asynchronous replication?</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Synchronous replication waits for required replica confirmations before acknowledging a write. Asynchronous replication acknowledges writes without waiting for all replicas, meaning temporary replication lag can occur.</p>
          <div className="mt-4 p-3.5 rounded-xl bg-stone-100/90 border border-stone-300 font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2">
            <span className="px-2 py-0.5 rounded bg-orange-500 text-white text-xs font-black">Q</span>
            <span>Q12. What is leader-follower architecture?</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Leader-follower architecture uses a primary coordinating node and one or more followers that maintain replicated state.</p>
          <div className="mt-4 p-3.5 rounded-xl bg-stone-100/90 border border-stone-300 font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2">
            <span className="px-2 py-0.5 rounded bg-orange-500 text-white text-xs font-black">Q</span>
            <span>Q13. What is replication lag?</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Replication lag is the delay between an update being applied on the primary node and becoming available on a replica.</p>
          <div className="mt-4 p-3.5 rounded-xl bg-stone-100/90 border border-stone-300 font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2">
            <span className="px-2 py-0.5 rounded bg-orange-500 text-white text-xs font-black">Q</span>
            <span>Q14. What is eventual consistency?</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Eventual consistency allows replicas to temporarily contain different values but expects them to converge when no new updates occur and replication succeeds.</p>
          <div className="mt-4 p-3.5 rounded-xl bg-stone-100/90 border border-stone-300 font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2">
            <span className="px-2 py-0.5 rounded bg-orange-500 text-white text-xs font-black">Q</span>
            <span>Q15. What is the CAP theorem?</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The CAP theorem states that during a network partition, a distributed system cannot guarantee both linearizable consistency and availability for every request.</p>
          <div className="mt-4 p-3.5 rounded-xl bg-stone-100/90 border border-stone-300 font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2">
            <span className="px-2 py-0.5 rounded bg-orange-500 text-white text-xs font-black">Q</span>
            <span>Q16. What is quorum?</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A quorum is a required number of node confirmations for a distributed operation. It is commonly used for replica reads, writes, and leader election.</p>
          <div className="mt-4 p-3.5 rounded-xl bg-stone-100/90 border border-stone-300 font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2">
            <span className="px-2 py-0.5 rounded bg-orange-500 text-white text-xs font-black">Q</span>
            <span>Q17. What is fault tolerance?</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Fault tolerance is the ability of a system to continue functioning despite failures in individual components.</p>
          <div className="mt-4 p-3.5 rounded-xl bg-stone-100/90 border border-stone-300 font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2">
            <span className="px-2 py-0.5 rounded bg-orange-500 text-white text-xs font-black">Q</span>
            <span>Q18. What are heartbeats?</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Heartbeats are periodic signals used by distributed nodes to indicate that they are functioning and communicating.</p>
          <div className="mt-4 p-3.5 rounded-xl bg-stone-100/90 border border-stone-300 font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2">
            <span className="px-2 py-0.5 rounded bg-orange-500 text-white text-xs font-black">Q</span>
            <span>Q19. What is consensus?</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Consensus is the process through which distributed nodes agree on a decision or ordered sequence of operations.</p>
          <div className="mt-4 p-3.5 rounded-xl bg-stone-100/90 border border-stone-300 font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2">
            <span className="px-2 py-0.5 rounded bg-orange-500 text-white text-xs font-black">Q</span>
            <span>Q20. What is the Raft algorithm?</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Raft is a distributed consensus algorithm that uses leader election and replicated logs to coordinate agreement among nodes.</p>
          <div className="mt-4 p-3.5 rounded-xl bg-stone-100/90 border border-stone-300 font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2">
            <span className="px-2 py-0.5 rounded bg-orange-500 text-white text-xs font-black">Q</span>
            <span>Q21. What is distributed coordination?</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Distributed coordination manages activities between independent nodes, such as leader election, lock ownership, and task assignment.</p>
          <div className="mt-4 p-3.5 rounded-xl bg-stone-100/90 border border-stone-300 font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2">
            <span className="px-2 py-0.5 rounded bg-orange-500 text-white text-xs font-black">Q</span>
            <span>Q22. What is idempotency?</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Idempotency means repeating an operation produces the same intended final effect as executing it once.</p>
          <div className="mt-4 p-3.5 rounded-xl bg-stone-100/90 border border-stone-300 font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2">
            <span className="px-2 py-0.5 rounded bg-orange-500 text-white text-xs font-black">Q</span>
            <span>Q23. What is exponential backoff?</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Exponential backoff is a retry strategy where the waiting time increases exponentially between successive failed attempts.</p>
          <div className="mt-4 p-3.5 rounded-xl bg-stone-100/90 border border-stone-300 font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2">
            <span className="px-2 py-0.5 rounded bg-orange-500 text-white text-xs font-black">Q</span>
            <span>Q24. What is backpressure?</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Backpressure controls incoming data flow when downstream consumers cannot process data at the incoming rate.</p>
          <div className="mt-4 p-3.5 rounded-xl bg-stone-100/90 border border-stone-300 font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2">
            <span className="px-2 py-0.5 rounded bg-orange-500 text-white text-xs font-black">Q</span>
            <span>Q25. What is the difference between at-most-once and at-least-once delivery?</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">At-most-once delivery allows a message to be delivered zero or one times. At-least-once delivery retries until acknowledgement or another defined stopping condition, so duplicates may occur.</p>
          <div className="mt-4 p-3.5 rounded-xl bg-stone-100/90 border border-stone-300 font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2">
            <span className="px-2 py-0.5 rounded bg-orange-500 text-white text-xs font-black">Q</span>
            <span>Q26. How does Kafka handle fault tolerance?</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Kafka uses partition replication, broker coordination, leader and replica roles, and configurable acknowledgement and recovery mechanisms to handle failures.</p>
          <div className="mt-4 p-3.5 rounded-xl bg-stone-100/90 border border-stone-300 font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2">
            <span className="px-2 py-0.5 rounded bg-orange-500 text-white text-xs font-black">Q</span>
            <span>Q27. What is the difference between replication and sharding?</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Replication creates additional copies of the same data. Sharding distributes different portions of a dataset across multiple nodes.</p>
          <div className="mt-4 p-3.5 rounded-xl bg-stone-100/90 border border-stone-300 font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2">
            <span className="px-2 py-0.5 rounded bg-orange-500 text-white text-xs font-black">Q</span>
            <span>Q28. What is the difference between a circuit breaker and retry?</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Retry attempts a failed operation again. A circuit breaker temporarily blocks calls to a failing dependency to prevent additional overload.</p>
          <div className="mt-4 p-3.5 rounded-xl bg-stone-100/90 border border-stone-300 font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2">
            <span className="px-2 py-0.5 rounded bg-orange-500 text-white text-xs font-black">Q</span>
            <span>Q29. What are RPO and RTO?</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">RPO specifies the maximum acceptable data-loss interval. RTO specifies the maximum acceptable service-recovery time.</p>
          <div className="mt-4 p-3.5 rounded-xl bg-stone-100/90 border border-stone-300 font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2">
            <span className="px-2 py-0.5 rounded bg-orange-500 text-white text-xs font-black">Q</span>
            <span>Q30. How would you design a reliable data pipeline?</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">I would use partitioned workloads, durable message storage, replication, validation, idempotent writes, controlled retries, checkpointing, backpressure, monitoring, and a recovery strategy. The final design would depend on the required consistency and delivery guarantees.</p>
        </div>
      </section>

      {/* SECTION 26: 26. Recommended Learning Resources */}
      <section id="section-26" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 26
          </span>
          <span className="text-xs font-mono text-stone-500">Reference · Documentation, Standards &amp; Formal Papers</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          26. Recommended Learning Resources
        </h2>
        <div className="space-y-3">
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">These official resources will help you move from conceptual understanding to practical implementation.</p>
          <div className="my-4 overflow-x-auto rounded-xl border border-[#e7e3da] bg-white shadow-sm">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-stone-900 border-b border-[#e7e3da] font-semibold">
                <tr>
                  <th className="px-4 py-3">Technology / Resource</th>                  <th className="px-4 py-3">What to study</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Apache Kafka — [Official documentation](https://kafka.apache.org/documentation/?utm_source=chatgpt.com)</td>                  <td className="px-4 py-2.5 text-stone-700">Distributed messaging, partitions, replication, consumers and delivery</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Apache Spark — [Official documentation](https://spark.apache.org/docs/latest/?utm_source=chatgpt.com)</td>                  <td className="px-4 py-2.5 text-stone-700">Distributed processing, execution and recovery</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Hadoop — [Official documentation](https://hadoop.apache.org/docs/?utm_source=chatgpt.com)</td>                  <td className="px-4 py-2.5 text-stone-700">HDFS, distributed storage and cluster architecture</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">gRPC — [Official documentation](https://grpc.io/docs/?utm_source=chatgpt.com)</td>                  <td className="px-4 py-2.5 text-stone-700">RPC, service definitions and communication</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Apache Cassandra — [Official documentation](https://cassandra.apache.org/doc/latest/?utm_source=chatgpt.com)</td>                  <td className="px-4 py-2.5 text-stone-700">Partitioning, replication and consistency</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Raft — [Interactive explanation and paper](https://raft.github.io/?utm_source=chatgpt.com)</td>                  <td className="px-4 py-2.5 text-stone-700">Consensus and leader election</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">PostgreSQL — [Official documentation](https://www.postgresql.org/docs/?utm_source=chatgpt.com)</td>                  <td className="px-4 py-2.5 text-stone-700">Transactions, replication, locking and partitioning</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">etcd — [Official documentation](https://etcd.io/docs/?utm_source=chatgpt.com)</td>                  <td className="px-4 py-2.5 text-stone-700">Consensus-backed coordination and distributed metadata</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Kubernetes — [Official documentation](https://kubernetes.io/docs/concepts/?utm_source=chatgpt.com)</td>                  <td className="px-4 py-2.5 text-stone-700">Distributed workloads, health checks and orchestration</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* SECTION 27: 27. Final Revision — Module 15 */}
      <section id="section-27" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 27
          </span>
          <span className="text-xs font-mono text-stone-500">Revision · Comprehensive Distributed Systems Matrix</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          27. Final Revision — Module 15
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
                  <td className="px-4 py-2.5 text-stone-700">Distributed Systems</td>                  <td className="px-4 py-2.5 text-stone-700">Multiple independent computers working together</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Distributed Computing</td>                  <td className="px-4 py-2.5 text-stone-700">Workload division across machines</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Client-Server Architecture</td>                  <td className="px-4 py-2.5 text-stone-700">Request-response communication</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">RPC</td>                  <td className="px-4 py-2.5 text-stone-700">Remote procedure invocation</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Network Communication</td>                  <td className="px-4 py-2.5 text-stone-700">TCP, UDP, latency and throughput</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Serialization</td>                  <td className="px-4 py-2.5 text-stone-700">JSON, Avro, Protobuf and Parquet</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Distributed Storage</td>                  <td className="px-4 py-2.5 text-stone-700">HDFS, object storage and distributed databases</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Data Partitioning</td>                  <td className="px-4 py-2.5 text-stone-700">Range, hash, list, horizontal and vertical</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Data Replication</td>                  <td className="px-4 py-2.5 text-stone-700">Multiple copies and replication strategies</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Leader-Follower</td>                  <td className="px-4 py-2.5 text-stone-700">Primary-replica coordination</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Consistency Models</td>                  <td className="px-4 py-2.5 text-stone-700">Strong, eventual, read-your-writes and monotonic</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">CAP Theorem</td>                  <td className="px-4 py-2.5 text-stone-700">Consistency and availability trade-off during partition</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Quorum</td>                  <td className="px-4 py-2.5 text-stone-700">Replica confirmation requirements</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Fault Tolerance</td>                  <td className="px-4 py-2.5 text-stone-700">Handling individual component failures</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Failure Detection</td>                  <td className="px-4 py-2.5 text-stone-700">Heartbeats, timeouts and health checks</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Consensus</td>                  <td className="px-4 py-2.5 text-stone-700">Agreement among distributed nodes</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Distributed Coordination</td>                  <td className="px-4 py-2.5 text-stone-700">Locks, leases and leader election</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Retry Mechanisms</td>                  <td className="px-4 py-2.5 text-stone-700">Fixed delay, exponential backoff and jitter</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Idempotency</td>                  <td className="px-4 py-2.5 text-stone-700">Safe repeated execution</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Backpressure</td>                  <td className="px-4 py-2.5 text-stone-700">Managing producer-consumer imbalance</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Message Delivery</td>                  <td className="px-4 py-2.5 text-stone-700">At-most-once, at-least-once and exactly-once effects</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Distributed Reliability</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Availability, recovery and observability</p>
        </div>
      </section>

      {/* SECTION 28: 28. How Module 15 Connects to Other Data Engineering Modules */}
      <section id="section-28" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 28
          </span>
          <span className="text-xs font-mono text-stone-500">Synthesis · Progression to Kafka, Spark &amp; Data Lakehouses</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          28. How Module 15 Connects to Other Data Engineering Modules
        </h2>
        <div className="space-y-3">
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Understanding this module will make the next areas of data engineering much easier.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Module 15 — Distributed Systems</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Core distributed computing foundations</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Apache Kafka</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Messaging and partitioning</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Apache Spark</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Parallel processing</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Distributed Databases</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Replication and consistency</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Cloud Computing</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Distributed infrastructure</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Large-Scale Production Data Platforms</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Scalable • Reliable • Fault-tolerant • Distributed</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The most important takeaway: A distributed system is not simply a collection of computers. It is a coordinated system that must deal with independent failures, network delays, replication, consistency, concurrency, and recovery.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A good data engineer must understand not only how data is processed across multiple machines, but also what happens when one of those machines, networks, or services stops working.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Module 15 complete</p>
        </div>
      </section>

    </div>
  );
}
