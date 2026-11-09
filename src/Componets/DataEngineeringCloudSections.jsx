// projectx/src/Componets/DataEngineeringCloudSections.jsx
import React, { memo } from 'react';
import { ExternalLink, ArrowRight, CheckCircle2, ChevronRight, Layers, Database, Shield, Zap, Cloud, Cpu, DollarSign, Activity } from 'lucide-react';

export const cloudSectionsMeta = [
  { id: 0, title: "Module 18: Cloud Data Engineering and Cloud Platforms Overview & Roadmap", category: "Course Roadmap" },
  { id: 1, title: "1. Introduction to Cloud Computing", category: "Part 1 · Cloud Fundamentals & Security" },
  { id: 2, title: "2. Cloud Computing Service Models", category: "Part 1 · Cloud Fundamentals & Security" },
  { id: 3, title: "3. Cloud Infrastructure Architecture", category: "Part 1 · Cloud Fundamentals & Security" },
  { id: 4, title: "4. Identity and Access Management (IAM)", category: "Part 1 · Cloud Fundamentals & Security" },
  { id: 5, title: "5. Cloud Security Fundamentals", category: "Part 1 · Cloud Fundamentals & Security" },
  { id: 6, title: "6. AWS Data Engineering Ecosystem", category: "Part 2 · Storage & Managed ETL" },
  { id: 7, title: "7. Amazon S3 — Simple Storage Service", category: "Part 2 · Storage & Managed ETL" },
  { id: 8, title: "8. AWS Glue — Cloud ETL and Data Integration", category: "Part 2 · Storage & Managed ETL" },
  { id: 9, title: "9. Amazon Athena — Serverless SQL Analytics", category: "Part 3 · Analytics, Warehousing & Big Data" },
  { id: 10, title: "10. Amazon Redshift — Cloud Data Warehouse", category: "Part 3 · Analytics, Warehousing & Big Data" },
  { id: 11, title: "11. Amazon EMR — Big Data Processing", category: "Part 3 · Analytics, Warehousing & Big Data" },
  { id: 12, title: "12. Amazon Kinesis — Real-Time Data Ingestion", category: "Part 4 · Real-Time Streaming & Databases" },
  { id: 13, title: "13. Managed Database Services", category: "Part 4 · Real-Time Streaming & Databases" },
  { id: 14, title: "14. Cloud ETL Architecture", category: "Part 5 · Cloud Architectures & Serverless" },
  { id: 15, title: "15. Serverless Data Processing", category: "Part 5 · Cloud Architectures & Serverless" },
  { id: 16, title: "16. Cloud Data Warehouses", category: "Part 5 · Cloud Architectures & Serverless" },
  { id: 17, title: "17. Cost-Aware Cloud Architectures", category: "Part 5 · Cloud Architectures & Serverless" },
  { id: 18, title: "18. Mapping Equivalent Architectures to Azure and Google Cloud", category: "Part 6 · Multi-Cloud & Practical Project" },
  { id: 19, title: "19. Practical Project — Build an AWS E-Commerce Data Platform", category: "Part 6 · Multi-Cloud & Practical Project" },
  { id: 20, title: "20. Advanced Concepts You Should Understand", category: "Part 6 · Multi-Cloud & Practical Project" },
  { id: 21, title: "21. Module 18 — Important Interview Questions", category: "Part 7 · Interview Preparation & Assignments" },
  { id: 22, title: "22. Practical Assignments", category: "Part 7 · Interview Preparation & Assignments" },
  { id: 23, title: "23. Recommended Learning Resources", category: "Part 7 · Interview Preparation & Assignments" },
  { id: 24, title: "24. Final Module Summary", category: "Part 7 · Interview Preparation & Assignments" }
];

export const CloudSection = memo(function CloudSection({ sectionId }) {
  switch (sectionId) {
    case 0:
      return (
        <div className="space-y-4">
          <div className="border-b border-stone-200 pb-3 mb-4">
            <span className="text-[11px] font-mono uppercase tracking-wider text-orange-600 font-semibold bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200">
              Course Roadmap
            </span>
            <h2 className="text-lg sm:text-2xl font-bold text-stone-900 mt-2 tracking-tight">
              Module 18: Cloud Data Engineering and Cloud Platforms Overview &amp; Roadmap
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Module 18 — Cloud Data Engineering and Cloud Platforms
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Advanced
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            AWS Primary Focus
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Practical + Architectural
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            This module teaches you how modern data engineering systems are designed, deployed, secured, and operated on cloud platforms.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            In previous modules, we studied how to collect, store, process, transform, model, and analyze data. Now we will learn how to build those systems using cloud infrastructure.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            For example, imagine an e-commerce company that receives:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            5 million customer interactions every day.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            500,000 transactions daily.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Product information from multiple databases.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Millions of application logs.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Real-time delivery and payment events.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A traditional server might struggle to store and process this information reliably. The company needs scalable storage, distributed processing, secure access, automated pipelines, and analytical databases.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Cloud platforms provide these capabilities without requiring the company to purchase and maintain its own physical infrastructure.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            We will primarily use Amazon Web Services (AWS) and compare its architecture with Microsoft Azure and Google Cloud Platform (GCP).
          </p>
        </div>
      );
    case 1:
      return (
        <div className="space-y-4">
          <div className="border-b border-stone-200 pb-3 mb-4">
            <span className="text-[11px] font-mono uppercase tracking-wider text-orange-600 font-semibold bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200">
              Part 1 · Cloud Fundamentals &amp; Security
            </span>
            <h2 className="text-lg sm:text-2xl font-bold text-stone-900 mt-2 tracking-tight">
              1. Introduction to Cloud Computing
            </h2>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>1.1 What is Cloud Computing?</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Cloud computing is the delivery of computing resources over the internet.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Instead of purchasing physical servers, storage devices, networking equipment, and data center infrastructure, organizations rent computing resources from cloud providers.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            These resources include:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Virtual machines.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Storage systems.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Databases.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Networking infrastructure.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Data processing engines.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Analytics platforms.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Artificial intelligence services.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Security and monitoring systems.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Cloud providers operate large data centers around the world and allow organizations to use their infrastructure remotely.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Traditional infrastructure example
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Suppose a company wants to build a data engineering platform.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            It needs:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Physical servers to process data.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Storage devices to store terabytes of information.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Networking equipment to connect systems.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Database servers for analytical queries.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Backup infrastructure.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            IT employees to maintain the hardware.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            The company purchases this infrastructure before it can start processing data.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            This introduces several problems:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            High initial investment.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Hardware maintenance.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Limited scalability.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Long infrastructure setup time.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Hardware failures.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Difficulty predicting future capacity.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Cloud infrastructure example
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            The same company can use AWS.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            It creates virtual computing resources, storage buckets, managed databases, and processing pipelines through the AWS console or APIs.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            When data volume increases, the infrastructure can scale according to workload requirements.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            When a processing workload finishes, temporary computing resources can be stopped or removed.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            The company pays according to its resource consumption and pricing model.
          </p>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs shadow-sm hover:border-orange-300 transition-colors">
            <span className="font-semibold text-stone-800 truncate">Cloud vs Dedicated Server: Choosing the Right Setup for Performance, Security &amp; Scale - Insight Blog</span>
            <a href="https://images.openai.com/static-rsc-4/N3EO4TMY9GKvAsBs9ljYZcCeCwWN5CLNrSflcjfm4LJxUYlPGGRLXnyxPVC2n9e3UZtqqqYygbb52E18U6tQXOoZK5mWr-oHV0SJkqevcnBw0SA_xUBuwmZHHKN0BvV6HyVgG5gUbAIljWMk2dS-SxkqWXk0PPpoRgFdK5F_lq8?purpose=inline" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Documentation</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs shadow-sm hover:border-orange-300 transition-colors">
            <span className="font-semibold text-stone-800 truncate">agilityportal.io</span>
            <a href="https://agilityportal.io/blog/cloud-vs-dedicated-server?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Documentation</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>1.2 Important Characteristics of Cloud Computing</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A. On-demand self-service
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Users can provision computing resources without manually contacting the cloud provider.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            For example:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A data engineer needs a server for Apache Spark processing.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            They can create an AWS EMR cluster or submit a job to EMR Serverless instead of purchasing a physical machine.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Resources can be provisioned programmatically.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            B. Broad network access
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Cloud resources are accessible through standard network connections.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A data engineer in India can access an AWS storage bucket hosted in an AWS region in the United States, subject to permissions and network configuration.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Data processing applications, databases, and analytics services can communicate over secure network connections.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            C. Resource pooling
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Cloud providers operate shared physical infrastructure that serves multiple customers.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Customers receive logically isolated resources without needing to own the underlying hardware.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            For example, multiple organizations may use AWS EC2 instances on the same physical infrastructure while their workloads and data remain logically isolated.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            D. Rapid elasticity
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Cloud infrastructure can scale up or down based on workload requirements.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Suppose an organization usually processes 100 GB of data daily but processes 10 TB during monthly financial reporting.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            It can temporarily increase its processing capacity and reduce it after the workload finishes.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            This prevents the company from permanently maintaining infrastructure designed for peak demand.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            E. Measured service
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Cloud platforms measure resource consumption.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Depending on the service and pricing model, costs can depend on:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Storage consumed.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Compute time.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Number of requests.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Data transferred.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Database capacity.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Queries executed.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Processing resources consumed.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            This makes resource monitoring an important part of data engineering.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>1.3 Scalability vs Elasticity</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            These terms are related but represent different concepts.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Scalability is the ability of a system to handle increasing workloads by increasing its resources.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Elasticity is the ability of a system to automatically or dynamically adjust its resources as demand changes.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            For example:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A company increases its Spark cluster from four workers to twenty workers to process a larger dataset. This is scaling.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A cloud processing platform automatically adds and removes workers as processing demand changes. This is elasticity.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Types of scaling
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Vertical scaling (Scale Up)
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Increasing the capacity of an existing machine.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            For example:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            4 CPU cores → 16 CPU cores.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            16 GB RAM → 64 GB RAM.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            500 GB storage → 2 TB storage.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            This makes an individual machine more powerful.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Horizontal scaling (Scale Out)
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Adding more machines to distribute the workload.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            For example:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            1 processing node → 5 processing nodes.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            5 Spark workers → 20 Spark workers.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Distributed data processing frameworks such as Apache Spark benefit from horizontal scaling.
          </p>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs shadow-sm hover:border-orange-300 transition-colors">
            <span className="font-semibold text-stone-800 truncate">Horizontal vs. Vertical Scaling: Key Differences</span>
            <a href="https://images.openai.com/static-rsc-4/8a_xrLF-jhv1IJcRUyEx2eTGQ8ZsVoFEpdwlKvMMN_ERo0Y9zCPgQdnaDNtJoixM_brUA2N_oZOHj-YW9femZujbp4eQaN4W5RBZ29LUW7cLNzfeaMUpn1MK-xRFOW71PM85h63r-xLTlnFq-b08svfb_9wlJsh6JAe-nmQdaEY?purpose=inline" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Documentation</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs shadow-sm hover:border-orange-300 transition-colors">
            <span className="font-semibold text-stone-800 truncate">cloudavocado.com</span>
            <a href="https://cloudavocado.com/blog/horizontal-vs-vertical-scaling-key-differences-and-the-right-path-for-your-business/?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Documentation</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            For data engineering, horizontal scaling is particularly important because large datasets can be divided into partitions and processed by multiple machines.
          </p>
        </div>
      );
    case 2:
      return (
        <div className="space-y-4">
          <div className="border-b border-stone-200 pb-3 mb-4">
            <span className="text-[11px] font-mono uppercase tracking-wider text-orange-600 font-semibold bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200">
              Part 1 · Cloud Fundamentals &amp; Security
            </span>
            <h2 className="text-lg sm:text-2xl font-bold text-stone-900 mt-2 tracking-tight">
              2. Cloud Computing Service Models
            </h2>
          </div>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Cloud computing is commonly categorized into three service models:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Infrastructure as a Service (IaaS).
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Platform as a Service (PaaS).
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Software as a Service (SaaS).
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Each model provides a different level of infrastructure management.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>2.1 Infrastructure as a Service (IaaS)</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            IaaS provides fundamental computing infrastructure through the cloud.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            The customer can rent virtual machines, networking infrastructure, and storage.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            The cloud provider manages the physical infrastructure, while the customer manages much of the operating environment.
          </p>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>Example: Amazon EC2</span>
          </h4>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Suppose you want to run Apache Spark on a virtual machine.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            You create an EC2 instance with:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Linux operating system.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            8 virtual CPUs.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            32 GB RAM.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            500 GB attached storage.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Required networking configuration.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            You install Python, Java, Apache Spark, and other dependencies.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            You are responsible for configuring and maintaining the software environment.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Other examples:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            AWS EC2.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Azure Virtual Machines.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Google Compute Engine.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            When to use IaaS:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Custom server configurations.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Specific software dependencies.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Full operating system control.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Custom distributed processing environments.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Applications requiring infrastructure-level control.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>2.2 Platform as a Service (PaaS)</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            PaaS provides a managed platform for developing, deploying, and running applications.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            The cloud provider manages much of the underlying infrastructure.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Developers focus primarily on application code and configuration.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            For example, AWS provides managed services such as AWS Glue for data integration and Amazon RDS for relational databases.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Suppose you need to transform 500 GB of customer data every night.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            With a self-managed solution, you might create an EC2 server, install Spark, configure dependencies, manage execution, monitor failures, and maintain the processing environment.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            With AWS Glue, you can develop an ETL job and let the managed service handle much of the underlying execution infrastructure.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            When to use PaaS:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Managed data processing.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Database applications.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Application deployment.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            ETL pipelines.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Reduced infrastructure administration.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>2.3 Software as a Service (SaaS)</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            SaaS provides complete software applications over the internet.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Users consume the software without managing its infrastructure.
          </p>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>Examples:</span>
          </h4>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Google Workspace.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Microsoft 365.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Salesforce.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Snowflake as a managed cloud data platform.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Tableau Cloud.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            For example, a business analyst uses a SaaS-based analytics platform to create dashboards without managing the underlying servers.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>2.4 IaaS vs PaaS vs SaaS</span>
          </h3>
          <div className="my-4 overflow-x-auto rounded-xl border border-stone-200 bg-white shadow-sm [scrollbar-width:thin]">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-stone-100/90 text-stone-700 font-semibold border-b border-stone-200">
                  <th className="py-2.5 px-3.5 font-mono uppercase tracking-wider text-[11px] text-stone-800">Responsibility</th>
                  <th className="py-2.5 px-3.5 font-mono uppercase tracking-wider text-[11px] text-stone-800">IaaS</th>
                  <th className="py-2.5 px-3.5 font-mono uppercase tracking-wider text-[11px] text-stone-800">PaaS</th>
                  <th className="py-2.5 px-3.5 font-mono uppercase tracking-wider text-[11px] text-stone-800">SaaS</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100 text-stone-700">
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Physical hardware</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Provider</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Provider</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Provider</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Virtualization</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Provider</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Provider</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Provider</td>
                </tr>
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Operating system</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Customer</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Provider</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Provider</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Runtime</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Customer</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Provider</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Provider</td>
                </tr>
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Application configuration</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Customer</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Customer</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Provider</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Application usage</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Customer</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Customer</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Customer</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            This is a simplified comparison. The exact responsibility boundary depends on the service.
          </p>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>Data engineering example:</span>
          </h4>
          <div className="my-4 overflow-x-auto rounded-xl border border-stone-200 bg-white shadow-sm [scrollbar-width:thin]">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-stone-100/90 text-stone-700 font-semibold border-b border-stone-200">
                  <th className="py-2.5 px-3.5 font-mono uppercase tracking-wider text-[11px] text-stone-800">Requirement</th>
                  <th className="py-2.5 px-3.5 font-mono uppercase tracking-wider text-[11px] text-stone-800">Service model</th>
                  <th className="py-2.5 px-3.5 font-mono uppercase tracking-wider text-[11px] text-stone-800">Example</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100 text-stone-700">
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Configure a custom Spark server</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">IaaS</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">EC2</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Run managed ETL pipelines</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">PaaS</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">AWS Glue</td>
                </tr>
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Use an online BI application</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">SaaS</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Tableau Cloud</td>
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
              Part 1 · Cloud Fundamentals &amp; Security
            </span>
            <h2 className="text-lg sm:text-2xl font-bold text-stone-900 mt-2 tracking-tight">
              3. Cloud Infrastructure Architecture
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Before working with AWS data engineering services, you must understand the underlying cloud infrastructure.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>3.1 Regions</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A cloud region is a geographical area where a cloud provider operates infrastructure.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            For example, AWS has regions in:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Mumbai.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Singapore.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Tokyo.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Frankfurt.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Northern Virginia.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Oregon.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Each region is geographically separate from other regions.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            An organization can choose a region based on:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Customer location.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Data residency requirements.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Regulatory requirements.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Network latency.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Service availability.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Cost.
          </p>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>Example:</span>
          </h4>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            An Indian e-commerce company wants to store customer information and process its operational transactions.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            It may choose the AWS Mumbai region to serve Indian users with lower network latency, subject to its architecture and compliance requirements.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A region is not a single data center.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>3.2 Availability Zones (AZs)</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            An Availability Zone is an isolated location within an AWS region.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A region usually contains multiple Availability Zones.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Each AZ has independent infrastructure designed to reduce the impact of certain failures.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Consider an application deployed in one Availability Zone.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            If that location experiences an infrastructure failure, the application may become unavailable.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A highly available architecture can distribute application and processing components across multiple AZs.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            For example:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Application server in AZ-A.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Application server in AZ-B.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Database configured for Multi-AZ deployment.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            If one AZ becomes unavailable, the system can continue using healthy infrastructure, depending on the configured failover architecture.
          </p>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs shadow-sm hover:border-orange-300 transition-colors">
            <span className="font-semibold text-stone-800 truncate">Key Strategies for Resilient Cloud Infrastructure on AWS Cloud | by Mathan Raj | Medium</span>
            <a href="https://images.openai.com/static-rsc-4/Fn-q7JY9cE91obZBH0dhV8ucjjkte64SJzNDGkds3u98k2yCDi9iw3YXNM-_2iNJuKiaoexiwNT98xt_aWufs7e5M2r3eo2D7BprRrEtuskpyrjtAZSU5pz_stm8ldCvwKN5p7JaW1vl9CjD1dfsP32OXvLUFBUG93QpbMbYMZk?purpose=inline" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Documentation</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs shadow-sm hover:border-orange-300 transition-colors">
            <span className="font-semibold text-stone-800 truncate">mathanrajka.medium.com</span>
            <a href="https://mathanrajka.medium.com/key-strategies-for-resilient-cloud-infrastructure-on-aws-cloud-dd35e70833d7?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Documentation</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>Important distinction:</span>
          </h4>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Region: geographical cloud infrastructure area.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Availability Zone: isolated infrastructure location within a region.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>3.3 Compute Services</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Compute resources provide the processing power required to execute applications and data engineering workloads.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            The main AWS compute services include:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Amazon EC2
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Provides virtual machines.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Use cases:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Running Python applications.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Hosting Apache Spark.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Running self-managed Kafka.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Operating custom data processing systems.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            AWS Lambda
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Runs code in response to events without requiring users to manage servers.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Use cases:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Processing uploaded file notifications.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Validating incoming events.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Triggering data pipelines.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Lightweight transformations.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Amazon ECS and EKS
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            These services support containerized applications.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            ECS: Amazon Elastic Container Service.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            EKS: Amazon Elastic Kubernetes Service.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            They are useful when data engineering applications are packaged into Docker containers and deployed as container workloads.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>3.4 Storage Services</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Cloud platforms offer several storage types.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Storage type
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Purpose
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            AWS example
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Object storage
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Files, logs, datasets
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Amazon S3
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Block storage
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Disk storage for virtual machines
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Amazon EBS
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            File storage
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Shared file systems
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Amazon EFS
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Relational database
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Structured transactional data
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Amazon RDS
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            NoSQL database
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Flexible, scalable key-value data
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            DynamoDB
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Data warehouse
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Analytical queries
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Redshift
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A data engineer must understand that different storage technologies solve different problems.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            For example, S3 is suitable for a data lake, while Amazon RDS is suitable for operational relational database workloads.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>3.5 Cloud Networking Fundamentals</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Cloud networking allows services to communicate securely.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            In AWS, one of the most important networking components is the Virtual Private Cloud (VPC).
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            What is a VPC?
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A VPC is a logically isolated network in AWS where you launch resources.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            For example, you create a VPC with:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            EC2 instances.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Private subnets.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Public subnets.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Route tables.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Security groups.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Network access controls.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            A typical architecture might look like this:
          </p>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs shadow-sm hover:border-orange-300 transition-colors">
            <span className="font-semibold text-stone-800 truncate">Your first project on AWS — the basics | by Pratik Pednekar | Medium</span>
            <a href="https://images.openai.com/static-rsc-4/eJ_F4UNs637E-mtYXWc-Ceu7VtF6ec1VGGHBZoIMdvGm4wsutbDLeDHpghyz6CTRQ33ZsO4D6PMhPdAHD927RYN2owvw_laCZaXuXtaI8zqwtJ7tVhym9Pa4K9IoUgJu1-aSnCWn0NwrYYAg-jTpO0nhZ_3pkG4bI1ClHUBD5Ss?purpose=inline" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Documentation</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs shadow-sm hover:border-orange-300 transition-colors">
            <span className="font-semibold text-stone-800 truncate">epratik.medium.com</span>
            <a href="https://epratik.medium.com/your-first-project-on-aws-the-basics-bfb9303664dd?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Documentation</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Public subnet
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A public subnet has a route to an Internet Gateway.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            It can host resources that need direct internet connectivity, provided their security configuration also permits the required traffic.
          </p>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>Example:</span>
          </h4>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A public-facing application load balancer.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Private subnet
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A private subnet does not have a direct route to an Internet Gateway.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            It is commonly used for internal application servers, databases, and data processing resources.
          </p>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>Example:</span>
          </h4>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A private Spark processing cluster accessing data stored in S3 through an appropriate network endpoint.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Internet Gateway
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            An Internet Gateway enables communication between resources in a VPC and the internet when routes and security rules permit it.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            NAT Gateway
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A NAT Gateway allows resources in private subnets to initiate outbound IPv4 internet connections without allowing unsolicited inbound internet connections through that gateway.
          </p>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>Example:</span>
          </h4>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A private EC2 instance needs to download software updates.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            It can use a NAT Gateway for outbound internet access.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            NAT Gateway usage can increase infrastructure costs, so private connectivity alternatives should also be considered.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Security Groups
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Security groups act as virtual firewalls associated with resources such as EC2 instances.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            They control inbound and outbound traffic.
          </p>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>Example:</span>
          </h4>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Allow:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            SSH from an authorized administration IP.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            HTTPS traffic on port 443.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Database traffic only from approved application security groups.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Network ACLs
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Network Access Control Lists operate at the subnet level.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            They provide another layer of network traffic control.
          </p>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>Security Group vs Network ACL</span>
          </h4>
          <div className="my-4 overflow-x-auto rounded-xl border border-stone-200 bg-white shadow-sm [scrollbar-width:thin]">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-stone-100/90 text-stone-700 font-semibold border-b border-stone-200">
                  <th className="py-2.5 px-3.5 font-mono uppercase tracking-wider text-[11px] text-stone-800">Feature</th>
                  <th className="py-2.5 px-3.5 font-mono uppercase tracking-wider text-[11px] text-stone-800">Security Group</th>
                  <th className="py-2.5 px-3.5 font-mono uppercase tracking-wider text-[11px] text-stone-800">Network ACL</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100 text-stone-700">
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Scope</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Resource/network interface</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Subnet</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Stateful</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Yes</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">No</td>
                </tr>
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Rules</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Allow rules</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Allow and deny rules</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Traffic filtering</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Inbound/outbound</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Inbound/outbound</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      );
    case 4:
      return (
        <div className="space-y-4">
          <div className="border-b border-stone-200 pb-3 mb-4">
            <span className="text-[11px] font-mono uppercase tracking-wider text-orange-600 font-semibold bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200">
              Part 1 · Cloud Fundamentals &amp; Security
            </span>
            <h2 className="text-lg sm:text-2xl font-bold text-stone-900 mt-2 tracking-tight">
              4. Identity and Access Management (IAM)
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Identity and Access Management controls who can access cloud resources and what actions they are allowed to perform.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            This is extremely important in data engineering because data lakes frequently contain sensitive information.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Imagine an organization has:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Customer personal information.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Payment records.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Employee details.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Financial transactions.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Application logs.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Not every employee or application should have unrestricted access to all this data.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            IAM provides a way to enforce access permissions.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>4.1 IAM Users</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            An IAM user represents an identity that can authenticate to AWS.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            For example:
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            An organization creates individual accounts for:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Data Engineer.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Data Analyst.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Database Administrator.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Security Administrator.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Each identity can receive different permissions.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            In modern AWS environments, federated access and IAM Identity Center are often preferable to creating long-lived credentials for every employee.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>4.2 IAM Groups</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            An IAM group allows administrators to manage permissions for multiple IAM users together.
          </p>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>Example:</span>
          </h4>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A group called DataAnalysts might receive permissions to execute queries using Athena and access approved datasets.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A DataEngineers group might receive additional permissions to run Glue jobs and manage approved data pipelines.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>4.3 IAM Roles</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            An IAM role is an identity that provides temporary permissions to an AWS principal.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Roles are especially important for data engineering applications.
          </p>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>Example:</span>
          </h4>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            An AWS Glue job needs permission to:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Read files from an S3 raw-data bucket.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Transform data.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Write the results to an S3 curated-data bucket.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Instead of storing AWS credentials inside the Python script, the job assumes an IAM role with the required permissions.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            This improves security and credential management.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>4.4 IAM Policies</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            An IAM policy defines permissions.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Policies are typically written in JSON.
          </p>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>Example:</span>
          </h4>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3 shadow-inner">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "s3:GetObject"
      ],
      "Resource": "arn:aws:s3:::company-raw-data/*"
    }
  ]
}`}</code>
            </pre>
          </div>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Understanding this policy:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Version: Policy language version.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Statement: Contains permission rules.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Effect: Defines whether the action is allowed or denied.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Action: Specifies the permitted operation.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Resource: Specifies the resource on which the action applies.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            The policy allows reading objects from the specified bucket, but does not grant permission to upload or delete objects.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>4.5 Principle of Least Privilege</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            The principle of least privilege means granting only the minimum permissions necessary to complete a task.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            For example:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            An analyst who only needs to query curated sales data should not have unrestricted permission to delete the entire production data lake.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A Spark processing job that reads raw data and writes curated data should not automatically receive administrator permissions.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            AWS recommends least-privilege access as a core IAM security practice.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            AWS Identity and Access Management+1
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Key IAM concepts to understand:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Authentication: Who are you?
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Authorization: What are you allowed to do?
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            IAM users and groups.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            IAM roles.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Identity-based policies.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Resource-based policies.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Permission boundaries.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Temporary credentials.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Least privilege.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Cross-account access.
          </p>
        </div>
      );
    case 5:
      return (
        <div className="space-y-4">
          <div className="border-b border-stone-200 pb-3 mb-4">
            <span className="text-[11px] font-mono uppercase tracking-wider text-orange-600 font-semibold bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200">
              Part 1 · Cloud Fundamentals &amp; Security
            </span>
            <h2 className="text-lg sm:text-2xl font-bold text-stone-900 mt-2 tracking-tight">
              5. Cloud Security Fundamentals
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Data engineers must understand that moving a data platform to the cloud does not automatically make the data secure.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Cloud security requires correct architecture and configuration.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>5.1 Shared Responsibility Model</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Cloud providers and customers share responsibility for security.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            For example, AWS manages the security of its physical data centers, hardware, and underlying cloud infrastructure.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Customers remain responsible for correctly configuring access permissions, protecting their data, and securing their applications.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            The responsibility boundary depends on the cloud service.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            AWS responsibilities:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Physical infrastructure security.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Data center protection.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Underlying hardware.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Infrastructure maintenance.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Cloud service infrastructure.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Customer responsibilities:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            IAM configuration.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Data classification.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Encryption configuration.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Network access configuration.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Application security.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Data protection.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Backup and recovery configuration.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>5.2 Encryption at Rest</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Encryption at rest protects stored data.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Suppose an organization stores customer transactions in S3.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            If encryption is enabled, the stored objects are encrypted.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            AWS offers encryption options including server-side encryption with S3-managed keys and AWS KMS-managed keys.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Encryption does not replace access control. An unauthorized identity should still be denied access.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>5.3 Encryption in Transit</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Encryption in transit protects data when it moves between systems.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            For example:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Application → AWS API.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Glue → S3.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Athena → S3.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Data ingestion system → Kinesis.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            HTTPS and TLS are commonly used to protect communication.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>5.4 Key Management</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            AWS Key Management Service (AWS KMS) manages cryptographic keys.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            It can be used with services such as S3, Redshift, and other AWS services.
          </p>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>Important concepts:</span>
          </h4>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Encryption keys.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Customer-managed keys.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Key policies.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Automatic key rotation options.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Key access permissions.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Encryption auditing.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>5.5 Data Governance</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Data governance defines how an organization manages its data.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            It includes:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Data ownership.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Data classification.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Data access policies.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Data retention.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Data lineage.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Data quality.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Data privacy.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Compliance requirements.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            For example, an organization may classify its datasets as:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Dataset
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Classification
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Access
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Public product catalog
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Public
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Broad
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Sales transactions
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Internal
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Approved employees
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Customer email addresses
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Confidential
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Restricted
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Payment information
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Highly restricted
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Authorized systems
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            For AWS architectures, AWS Lake Formation and Glue Data Catalog can support centralized data cataloging and governance patterns.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            AWS Documentation+1
          </p>
        </div>
      );
    case 6:
      return (
        <div className="space-y-4">
          <div className="border-b border-stone-200 pb-3 mb-4">
            <span className="text-[11px] font-mono uppercase tracking-wider text-orange-600 font-semibold bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200">
              Part 2 · Storage &amp; Managed ETL
            </span>
            <h2 className="text-lg sm:text-2xl font-bold text-stone-900 mt-2 tracking-tight">
              6. AWS Data Engineering Ecosystem
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            This is the central part of the module.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            AWS provides multiple services for building end-to-end data engineering architectures.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Instead of using one product for everything, engineers combine specialized services.
          </p>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs shadow-sm hover:border-orange-300 transition-colors">
            <span className="font-semibold text-stone-800 truncate">Modern Data Analytics Reference Architecture on AWS Diagram - Modern Data Analytics Reference Architecture on AWS</span>
            <a href="https://images.openai.com/static-rsc-4/ap34sBD8Kp2AMdbsir8DerV0LuVJOupztoXBb9lovmcl_R70cCPeLK4H-vQyGJjUNlrcOM8D1Lt-n-hI6M687eFHZ7Iwg_sDGcOE9mpQsSdt5xKJLC98xIPJ8deDJI4flhg-omSl31WaWOvHH2Ds8Jfk_qCFmsXLRA6jTASUmZI?purpose=inline" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Documentation</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs shadow-sm hover:border-orange-300 transition-colors">
            <span className="font-semibold text-stone-800 truncate">docs.aws.amazon.com</span>
            <a href="https://docs.aws.amazon.com/architecture-diagrams/latest/modern-data-analytics-on-aws/modern-data-analytics-on-aws.html?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Documentation</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            A typical AWS data engineering platform may contain:
          </p>
          <div className="my-4 overflow-x-auto rounded-xl border border-stone-200 bg-white shadow-sm [scrollbar-width:thin]">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-stone-100/90 text-stone-700 font-semibold border-b border-stone-200">
                  <th className="py-2.5 px-3.5 font-mono uppercase tracking-wider text-[11px] text-stone-800">Layer</th>
                  <th className="py-2.5 px-3.5 font-mono uppercase tracking-wider text-[11px] text-stone-800">AWS service</th>
                  <th className="py-2.5 px-3.5 font-mono uppercase tracking-wider text-[11px] text-stone-800">Responsibility</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100 text-stone-700">
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Data ingestion</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Kinesis</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Real-time ingestion</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Data storage</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">S3</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Data lake storage</td>
                </tr>
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">ETL</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">AWS Glue</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Data transformation</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Metadata</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Glue Data Catalog</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Schema and metadata</td>
                </tr>
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">SQL analytics</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Athena</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Query S3 data</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Distributed processing</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">EMR</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Spark and Hadoop workloads</td>
                </tr>
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Data warehouse</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Redshift</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Analytical database</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Governance</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Lake Formation</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Data access governance</td>
                </tr>
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Compute</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">EC2, Lambda</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Application processing</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Security</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">IAM, KMS</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Access and encryption</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            AWS provides architectural guidance for combining these specialized services into a modern data platform.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            AWS Prescriptive Guidance+1
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Let's understand each important service.
          </p>
        </div>
      );
    case 7:
      return (
        <div className="space-y-4">
          <div className="border-b border-stone-200 pb-3 mb-4">
            <span className="text-[11px] font-mono uppercase tracking-wider text-orange-600 font-semibold bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200">
              Part 2 · Storage &amp; Managed ETL
            </span>
            <h2 className="text-lg sm:text-2xl font-bold text-stone-900 mt-2 tracking-tight">
              7. Amazon S3 — Simple Storage Service
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Core AWS Data Engineering Service
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>7.1 What is Amazon S3?</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Amazon S3 is an object storage service.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            It allows organizations to store files and datasets in the cloud.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            These objects can include:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            CSV files.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            JSON files.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Parquet files.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            ORC files.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Images.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Videos.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Application logs.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Backup files.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Machine learning datasets.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Amazon S3 is widely used as the foundation of AWS data lakes.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            It stores objects inside containers called buckets. Each object has a key that identifies it within its bucket.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Amazon Simple Storage Service
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>7.2 Understanding Buckets</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A bucket is a logical container for storing objects.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            For example:
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            An organization creates a bucket:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            company-data-lake
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Inside it, the organization stores multiple datasets.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            company-data-lake/ │ ├── raw/ │ ├── customers/ │ ├── orders/ │ └── payments/ │ ├── processed/ │ ├── customers/ │ ├── orders/ │ └── payments/ │ └── curated/ ├── customer_analytics/ ├── sales_analytics/ └── payment_analytics/
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            This is a logical prefix-based organization. S3 does not require actual filesystem directories.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>7.3 Understanding Objects and Object Keys</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            An object represents stored data.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            For example:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            orders_2026_11_09.csv
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            An object contains:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Object data.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Object key.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Metadata.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Optional version information.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            The object's key identifies its location within the bucket namespace.
          </p>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>Example:</span>
          </h4>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            raw/orders/year=2026/month=11/day=09/orders.csv
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            The key is:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            raw/orders/year=2026/month=11/day=09/orders.csv
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>7.4 Object Storage vs File Storage</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Traditional file storage organizes files into directories.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Object storage uses objects identified by keys.
          </p>
          <div className="my-4 overflow-x-auto rounded-xl border border-stone-200 bg-white shadow-sm [scrollbar-width:thin]">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-stone-100/90 text-stone-700 font-semibold border-b border-stone-200">
                  <th className="py-2.5 px-3.5 font-mono uppercase tracking-wider text-[11px] text-stone-800">Feature</th>
                  <th className="py-2.5 px-3.5 font-mono uppercase tracking-wider text-[11px] text-stone-800">File storage</th>
                  <th className="py-2.5 px-3.5 font-mono uppercase tracking-wider text-[11px] text-stone-800">Object storage</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100 text-stone-700">
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Organization</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Directory hierarchy</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Bucket and object keys</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Access</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">File operations</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Object APIs</td>
                </tr>
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Metadata</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Filesystem metadata</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Object metadata</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Scaling</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Depends on filesystem</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Designed for massive object storage</td>
                </tr>
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Common use</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Shared file systems</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Data lakes, backups, logs</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            S3 is particularly useful when large quantities of data need to be stored independently of the processing infrastructure.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>7.5 S3 Storage Classes</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Not every dataset needs to be accessed frequently.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            For example:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Current sales data: queried daily.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Previous year's sales data: queried occasionally.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Historical backups: rarely accessed.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            S3 provides different storage classes for different access patterns.
          </p>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>Important examples include:</span>
          </h4>
          <div className="my-4 overflow-x-auto rounded-xl border border-stone-200 bg-white shadow-sm [scrollbar-width:thin]">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-stone-100/90 text-stone-700 font-semibold border-b border-stone-200">
                  <th className="py-2.5 px-3.5 font-mono uppercase tracking-wider text-[11px] text-stone-800">Storage class</th>
                  <th className="py-2.5 px-3.5 font-mono uppercase tracking-wider text-[11px] text-stone-800">Typical purpose</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100 text-stone-700">
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">S3 Standard</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Frequently accessed data</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">S3 Intelligent-Tiering</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Data with changing or unknown access patterns</td>
                </tr>
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">S3 Standard-IA</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Infrequently accessed data</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">S3 One Zone-IA</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Infrequently accessed data stored in one AZ</td>
                </tr>
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">S3 Glacier Instant Retrieval</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Archive data requiring fast retrieval</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">S3 Glacier Flexible Retrieval</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Archive data with retrieval delay</td>
                </tr>
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">S3 Glacier Deep Archive</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Long-term archival</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Storage class selection affects storage cost, retrieval charges, minimum storage durations, and availability characteristics.
          </p>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>Example</span>
          </h4>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            An organization keeps:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Current month transactions in S3 Standard.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Older analytical records in an archival class.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Regulatory backups in S3 Glacier Deep Archive.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Lifecycle policies can automate transitions between eligible storage classes.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>7.6 S3 Versioning</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Versioning maintains multiple versions of an object.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Suppose an engineer uploads:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            orders.csv
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Later, they upload a corrected file using the same key.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Without versioning, the previous object may be overwritten.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            With versioning, S3 can preserve multiple object versions.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            This helps recover from accidental modifications or deletions.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>7.7 S3 Lifecycle Management</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Lifecycle policies automate storage management.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            For example:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Keep recent data in Standard storage.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Transition older data to an archival storage class.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Expire temporary files after a defined period.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            This is useful when data volumes grow continuously.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>7.8 S3 in a Data Lake Architecture</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A data lake stores large amounts of data in different formats.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            A common layout uses four zones:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Landing Zone
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            The initial location where incoming files arrive.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Raw Zone
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Stores original source data with minimal modification.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Trusted Zone
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Contains validated, cleaned, standardized data.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Curated Zone
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Contains data that has been transformed and prepared for reporting and analytics.
          </p>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>Example:</span>
          </h4>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            s3://company-lake/ landing/ orders/ raw/ orders/ trusted/ orders/ curated/ daily_sales/ customer_metrics/
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            This allows the organization to preserve original data and create progressively more useful datasets.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>7.9 File Formats in S3</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Data engineers must understand that storage format affects performance and cost.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Format
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Characteristics
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Common application
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            CSV
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Text-based rows and columns
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Interchange
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            JSON
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Semi-structured data
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            API and event data
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Parquet
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Columnar storage
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Analytical workloads
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            ORC
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Columnar storage
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Large-scale analytics
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Avro
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Row-oriented, schema-based
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Data interchange and streaming
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Why Parquet is important
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Imagine a dataset containing 100 columns.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            An analyst needs only:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Customer ID.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Order amount.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Order date.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            With a columnar format such as Parquet, an analytical query engine can read the relevant columns rather than scanning the entire dataset in the same way as a row-oriented format.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Parquet also supports compression and column statistics.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            This can reduce the amount of data read during analytical queries.
          </p>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>Important practical recommendation: For analytical datasets stored in S3, Parquet is often preferable to raw CSV after the initial ingestion and transformation stages.</span>
          </h4>
        </div>
      );
    case 8:
      return (
        <div className="space-y-4">
          <div className="border-b border-stone-200 pb-3 mb-4">
            <span className="text-[11px] font-mono uppercase tracking-wider text-orange-600 font-semibold bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200">
              Part 2 · Storage &amp; Managed ETL
            </span>
            <h2 className="text-lg sm:text-2xl font-bold text-stone-900 mt-2 tracking-tight">
              8. AWS Glue — Cloud ETL and Data Integration
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Essential Data Engineering Service
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>8.1 What is AWS Glue?</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            AWS Glue is a managed, serverless data integration service.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            It helps discover, prepare, transform, and move data across different sources and destinations.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            It supports ETL workloads and integrates with services such as S3, Athena, EMR, and Redshift.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            AWS Glue
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Think of Glue as a managed data integration and ETL platform.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Suppose an organization stores customer information in:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            S3.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Amazon RDS.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            DynamoDB.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            External databases.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            The company wants to combine this data, clean it, and produce an analytical dataset.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            AWS Glue can help coordinate this transformation.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>8.2 AWS Glue Architecture</span>
          </h3>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>Important Glue components include:</span>
          </h4>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Data Catalog.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Crawlers.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            ETL Jobs.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Connections.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Triggers and workflows.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Job monitoring.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Let's understand each.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>8.3 AWS Glue Data Catalog</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            The Glue Data Catalog is a centralized metadata repository.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Remember, S3 stores the actual files.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            The Data Catalog stores information describing the data.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            For example:
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            An S3 dataset contains:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            orders.parquet
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            The Data Catalog can store information such as:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Database name.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Table name.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Column names.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Column data types.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Data location.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Partition information.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Table properties.
          </p>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>Example:</span>
          </h4>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Database: ecommerce Table: orders Columns: order_id string customer_id string order_amount double order_date date Location: s3://company-lake/curated/orders/
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            The Data Catalog enables services such as Athena to understand the structure and location of datasets.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Difference between S3 and Data Catalog:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            S3 stores the actual data.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Glue Data Catalog stores metadata describing the data.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>8.4 AWS Glue Crawlers</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A crawler discovers data and extracts metadata.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Suppose you upload the following files into S3:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            s3://company-lake/raw/orders/ orders_01.csv orders_02.csv orders_03.csv
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            You may not want to manually define all the schema information.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            You create an AWS Glue crawler and configure its data source.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            The crawler examines the files and attempts to infer their schema.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            It can then create or update corresponding tables in the Glue Data Catalog.
          </p>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>Important: Schema inference is not guaranteed to be correct. Engineers should validate data types, schema evolution, and partition behavior, particularly for production datasets.</span>
          </h4>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>8.5 AWS Glue ETL Jobs</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            An ETL job performs transformations.
          </p>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>Example:</span>
          </h4>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Raw orders contain:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            order_id
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            customer_id
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            amount
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            status
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            101
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            C1
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            500
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            completed
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            102
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            C2
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            700
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            cancelled
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            103
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            C3
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            900
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            completed
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            The business wants only completed orders.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            A Glue job can:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Read the raw dataset.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Remove invalid records.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Filter cancelled orders.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Calculate additional columns.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Convert data into Parquet.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Write the transformed output into the curated zone.
          </p>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>Example transformation logic</span>
          </h4>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3 shadow-inner">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`from pyspark.sql import SparkSession
from pyspark.sql.functions import col

spark = SparkSession.builder \\
    .appName("OrdersETL") \\
    .getOrCreate()

# Read raw order data from S3 landing/raw bucket
orders = spark.read.csv(
    "s3://company-lake/raw/orders/",
    header=True,
    inferSchema=True
)

# Keep completed orders only
clean_orders = orders.filter(
    col("status") == "completed"
)

# Remove invalid null records
clean_orders = clean_orders.filter(
    col("amount").isNotNull()
)

# Write curated partitioned Parquet output
clean_orders.write \\
    .mode("overwrite") \\
    .parquet("s3://company-lake/curated/orders/")

spark.stop()`}</code>
            </pre>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            This is a simplified Spark ETL example illustrating the transformation logic. A production AWS Glue job would also use Glue-specific job configuration, an appropriate IAM role, monitoring, and a carefully designed write strategy.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>8.6 Glue Workflows</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            An actual data pipeline may contain many jobs.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            For example:
          </p>
          <div className="my-4 p-4 rounded-xl bg-stone-900 text-stone-100 border border-stone-800 shadow-md">
            <div className="text-[11px] font-mono tracking-wider text-orange-400 uppercase mb-3 flex items-center gap-1.5 font-semibold">
              <ArrowRight size={13} className="text-orange-400" /> Architectural Data Pipeline Flow
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Start
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Extract Customer Data
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Extract Order Data
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Clean Customer Data
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Clean Order Data
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Join Datasets
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Create Sales Analytics
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Finish
              </div>
            </div>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Glue workflows help organize and orchestrate related Glue jobs and crawlers.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>8.7 When Should You Use AWS Glue?</span>
          </h3>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Use Glue when:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            You need managed ETL pipelines.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            You need integration with S3.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            You want centralized metadata.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            You want managed Spark-based processing.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            You need automated data discovery.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            You want to reduce infrastructure maintenance.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Avoid treating Glue as the automatic solution for every processing requirement. If you need particular cluster-level controls, specialized open-source software, or custom infrastructure, EMR or another compute platform may be more appropriate.
          </p>
        </div>
      );
    case 9:
      return (
        <div className="space-y-4">
          <div className="border-b border-stone-200 pb-3 mb-4">
            <span className="text-[11px] font-mono uppercase tracking-wider text-orange-600 font-semibold bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200">
              Part 3 · Analytics, Warehousing &amp; Big Data
            </span>
            <h2 className="text-lg sm:text-2xl font-bold text-stone-900 mt-2 tracking-tight">
              9. Amazon Athena — Serverless SQL Analytics
            </h2>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>9.1 What is Amazon Athena?</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Amazon Athena is a serverless interactive query service.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            It allows data engineers and analysts to run SQL queries directly against data stored in S3.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            You do not need to create a traditional database server before querying these files.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Athena uses the Glue Data Catalog or other supported metadata sources to understand dataset schemas.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Amazon Athena+1
          </p>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs shadow-sm hover:border-orange-300 transition-colors">
            <span className="font-semibold text-stone-800 truncate">Enhance query performance using AWS Glue Data Catalog column-level statistics | AWS Big Data Blog</span>
            <a href="https://images.openai.com/static-rsc-4/Ei-82KQZmNV39UOz17wb4Elfs1pG0FsCD_2P5Mm5PgDF4DAXQiFGyyZSw3cmq2YtxnC5Ni2uHOPATvRq-j5fINgt2zZT9alPi4INdOTDb3QD7XDSE8B5cVmo5Pj8bx8OmJFhTIZqITJnYGLu_zJ-WaeaCuekp_uQomHLczToWXk?purpose=inline" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Documentation</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs shadow-sm hover:border-orange-300 transition-colors">
            <span className="font-semibold text-stone-800 truncate">aws.amazon.com</span>
            <a href="https://aws.amazon.com/blogs/big-data/enhance-query-performance-using-aws-glue-data-catalog-column-level-statistics/?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Documentation</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>9.2 Why Is Athena Useful?</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Imagine an organization stores 10 TB of sales data in S3.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            The data analyst wants to calculate total sales for November.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Without Athena, the company might need to develop a dedicated application or provision analytical infrastructure.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            With Athena, the analyst can execute SQL.
          </p>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>Example:</span>
          </h4>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3 shadow-inner">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`SELECT customer_id, SUM(order_amount) AS total_sales FROM ecommerce.orders WHERE order_status = 'completed' GROUP BY customer_id ORDER BY total_sales DESC;`}</code>
            </pre>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Athena executes the query against the S3 dataset.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            It does not require the entire dataset to be imported into a traditional database first.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>9.3 Creating an Athena Table</span>
          </h3>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Suppose your S3 directory is:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            s3://company-lake/curated/orders/
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            You can register the Parquet data using a catalog table.
          </p>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>Example DDL:</span>
          </h4>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3 shadow-inner">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`CREATE EXTERNAL TABLE orders ( order_id STRING, customer_id STRING, order_amount DOUBLE, order_status STRING ) STORED AS PARQUET LOCATION 's3://company-lake/curated/orders/';`}</code>
            </pre>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            The table describes the data stored in S3.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            It does not mean that Athena has copied the files into a new database.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>9.4 Athena Partitioning</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Partitioning divides data into logical groups.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Suppose an organization stores sales records for several years.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Instead of using one large directory:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            orders/ all_orders.parquet
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            It uses:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            orders/ year=2025/ month=01/ month=02/ month=03/ year=2026/ month=01/ month=02/ month=03/
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Now, an analyst can query only the required period.
          </p>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>Example:</span>
          </h4>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3 shadow-inner">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`SELECT SUM(order_amount) FROM orders WHERE year = '2026' AND month = '11';`}</code>
            </pre>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            This is partition pruning.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            The query engine can avoid reading unrelated partitions when the partition information and query predicates allow it.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Why partitioning matters
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Imagine a dataset contains 2 TB of data.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A query needs only one month's information.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            If the dataset is partitioned effectively, Athena can reduce unnecessary data scanning.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            This can improve performance and reduce query costs.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>9.5 Athena Pricing Concept</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Athena's SQL query pricing is generally based on the amount of data scanned, with other pricing and service details depending on the selected features and region.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Therefore:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Use Parquet instead of unnecessarily querying raw CSV.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Compress files appropriately.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Partition datasets.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Avoid SELECT * when unnecessary.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Filter on partition columns.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Avoid repeatedly scanning the entire lake.
          </p>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>Example</span>
          </h4>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Query A:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3 shadow-inner">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`SELECT * FROM orders;`}</code>
            </pre>
          </div>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Query B:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3 shadow-inner">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`SELECT customer_id, SUM(order_amount) FROM orders WHERE year = '2026' AND month = '11' GROUP BY customer_id;`}</code>
            </pre>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Query B is often more efficient because it selects fewer columns and filters the relevant partitions.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>9.6 When Should You Use Athena?</span>
          </h3>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Use Athena when:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            You want SQL access to S3 data.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            You want to perform ad-hoc analysis.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            You need to investigate data quality.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            You want lightweight analytical queries.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            You want to query data without managing database infrastructure.
          </p>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>Athena vs Glue:</span>
          </h4>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Glue transforms and integrates datasets.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Athena queries and analyzes datasets using SQL.
          </p>
        </div>
      );
    case 10:
      return (
        <div className="space-y-4">
          <div className="border-b border-stone-200 pb-3 mb-4">
            <span className="text-[11px] font-mono uppercase tracking-wider text-orange-600 font-semibold bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200">
              Part 3 · Analytics, Warehousing &amp; Big Data
            </span>
            <h2 className="text-lg sm:text-2xl font-bold text-stone-900 mt-2 tracking-tight">
              10. Amazon Redshift — Cloud Data Warehouse
            </h2>
          </div>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>Important Analytics Platform</span>
          </h4>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>10.1 What is Amazon Redshift?</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Amazon Redshift is a managed cloud data warehouse.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            It is designed for analytical workloads involving large datasets.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            It supports SQL-based analytics, reporting, aggregations, and complex queries.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Redshift provides managed and serverless warehouse options.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Amazon Redshift
          </p>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs shadow-sm hover:border-orange-300 transition-colors">
            <span className="font-semibold text-stone-800 truncate">Arquitetura de sistema do data warehouse - Amazon Redshift</span>
            <a href="https://images.openai.com/static-rsc-4/jAvXZqye2bbVEMee36vk71qEUxLTs4M-Qm7vRBlpZRnHSdzXNFKC0R041NKUc4Rd3rIzp7jTG_10y8wPJiLiJLFlHWH3ezdkZ_8C47NFrwodnqHeh3a9AokxdlT8HO-Bw6fpPX6aFg8x5ts5F-AzwPjj__P_DpzJE881E-_DCgI?purpose=inline" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Documentation</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs shadow-sm hover:border-orange-300 transition-colors">
            <span className="font-semibold text-stone-800 truncate">docs.aws.amazon.com</span>
            <a href="https://docs.aws.amazon.com/pt_br/redshift/latest/dg/c_high_level_system_architecture.html?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Documentation</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>10.2 Data Lake vs Data Warehouse</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            These two concepts are fundamental to cloud data engineering.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Data Lake
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A data lake stores data in its original or transformed form.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            It can contain:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            CSV.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            JSON.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Parquet.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Logs.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Images.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Semi-structured information.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            AWS S3 is commonly used for data lakes.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Data Warehouse
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A data warehouse stores structured, analytical data designed for reporting and analytical queries.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Amazon Redshift is a cloud data warehouse.
          </p>
          <div className="my-4 overflow-x-auto rounded-xl border border-stone-200 bg-white shadow-sm [scrollbar-width:thin]">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-stone-100/90 text-stone-700 font-semibold border-b border-stone-200">
                  <th className="py-2.5 px-3.5 font-mono uppercase tracking-wider text-[11px] text-stone-800">Feature</th>
                  <th className="py-2.5 px-3.5 font-mono uppercase tracking-wider text-[11px] text-stone-800">Data Lake</th>
                  <th className="py-2.5 px-3.5 font-mono uppercase tracking-wider text-[11px] text-stone-800">Data Warehouse</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100 text-stone-700">
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">AWS example</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">S3</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Redshift</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Data types</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Structured and unstructured</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Primarily structured analytical data</td>
                </tr>
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Schema approach</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Often applied during reading</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Commonly defined as data is loaded or modeled</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Primary purpose</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Flexible storage</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Analytics and reporting</td>
                </tr>
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Users</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Data engineers, scientists, analysts</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Analysts, BI teams, decision-makers</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Modern architectures often use both.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>10.3 Redshift Architecture</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Redshift is built to support distributed analytical processing.
          </p>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>Important concepts include:</span>
          </h4>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Compute resources.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Storage.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Distributed execution.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Columnar storage.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Query optimization.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Parallel processing.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A query can be distributed across processing resources to improve analytical performance.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Columnar Storage
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Traditional row-oriented databases store data one record after another.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Columnar systems organize data by columns.
          </p>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>Example table:</span>
          </h4>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Customer
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            City
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Revenue
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Mumbai
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            5000
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            B
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Pune
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            7000
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            C
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Delhi
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            9000
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A reporting query only needs revenue.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A columnar storage architecture can read the required column rather than reading every field of every record.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            This is beneficial for analytical workloads that frequently scan selected columns across many rows.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Massively Parallel Processing (MPP)
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            MPP divides processing work across multiple compute resources.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Suppose a company has 5 billion sales records.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Instead of relying on one processor to perform all the work, distributed execution can divide the workload among multiple processing units.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            The system coordinates the work and combines intermediate results.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            This makes distributed processing valuable for large analytical workloads.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>10.4 Distribution Keys</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Distribution determines how data is distributed across processing resources.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A poorly chosen distribution strategy may cause excessive data movement during joins.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            For example, two large tables need to be joined on customer_id.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            If their distribution is designed appropriately around that join key, the system may reduce unnecessary data redistribution.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            The best choice depends on query patterns, data volume, skew, and the current Redshift table optimization capabilities.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>10.5 Sort Keys</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Sort keys determine how data is physically organized for query optimization.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Suppose a sales table is frequently queried by date.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A date-based sort strategy may help the query engine skip blocks that cannot satisfy a time-range filter.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Redshift also provides automatic table optimization capabilities, so engineers do not always need to manually select every physical layout property.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Amazon Redshift
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>10.6 Redshift Serverless</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Redshift Serverless allows organizations to execute analytical queries without manually provisioning and managing a traditional warehouse cluster.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            The platform manages the underlying resources according to its serverless operating model.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            It can be useful for:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Unpredictable analytical workloads.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Variable demand.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Development environments.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Teams that want to reduce cluster administration.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>10.7 Redshift and S3</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Redshift can work with data stored in S3.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            A common architecture is:
          </p>
          <div className="my-4 p-4 rounded-xl bg-stone-900 text-stone-100 border border-stone-800 shadow-md">
            <div className="text-[11px] font-mono tracking-wider text-orange-400 uppercase mb-3 flex items-center gap-1.5 font-semibold">
              <ArrowRight size={13} className="text-orange-400" /> Architectural Data Pipeline Flow
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Source Systems
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                S3
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                AWS Glue ETL
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Curated Data
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Amazon Redshift
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                BI Dashboards
              </div>
            </div>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Organizations can also use lake-querying capabilities, such as Redshift Spectrum, to work with eligible data stored externally in S3.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>10.8 When Should You Use Redshift?</span>
          </h3>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Use Redshift when:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            You need a cloud data warehouse.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            You have large analytical workloads.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            You need complex SQL queries.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            You need high-performance reporting.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            You want to integrate analytical data with BI tools.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            You need centralized analytical models.
          </p>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>Athena vs Redshift</span>
          </h4>
          <div className="my-4 overflow-x-auto rounded-xl border border-stone-200 bg-white shadow-sm [scrollbar-width:thin]">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-stone-100/90 text-stone-700 font-semibold border-b border-stone-200">
                  <th className="py-2.5 px-3.5 font-mono uppercase tracking-wider text-[11px] text-stone-800">Feature</th>
                  <th className="py-2.5 px-3.5 font-mono uppercase tracking-wider text-[11px] text-stone-800">Athena</th>
                  <th className="py-2.5 px-3.5 font-mono uppercase tracking-wider text-[11px] text-stone-800">Redshift</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100 text-stone-700">
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Main purpose</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Query S3 data</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Data warehouse</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Infrastructure</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Serverless SQL service</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Managed provisioned or serverless warehouse</td>
                </tr>
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Data location</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Directly queries supported data sources</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Managed warehouse storage and supported external sources</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Workload</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Ad-hoc SQL analysis</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Repeated, complex analytical queries</td>
                </tr>
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Data modeling</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Catalog-based datasets</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Warehouse schemas and tables</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Best for</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Data lake exploration</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Enterprise analytical workloads</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      );
    case 11:
      return (
        <div className="space-y-4">
          <div className="border-b border-stone-200 pb-3 mb-4">
            <span className="text-[11px] font-mono uppercase tracking-wider text-orange-600 font-semibold bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200">
              Part 3 · Analytics, Warehousing &amp; Big Data
            </span>
            <h2 className="text-lg sm:text-2xl font-bold text-stone-900 mt-2 tracking-tight">
              11. Amazon EMR — Big Data Processing
            </h2>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>11.1 What is Amazon EMR?</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Amazon EMR is a managed cloud big data platform.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            It allows organizations to run frameworks such as:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Apache Spark.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Apache Hadoop.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Apache Hive.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Apache HBase.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Other supported open-source big data tools.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            EMR helps process and analyze very large datasets using distributed computing.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Amazon EMR+1
          </p>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs shadow-sm hover:border-orange-300 transition-colors">
            <span className="font-semibold text-stone-800 truncate">AWS EMR Big Data Processing with Spark and Hadoop | by prasanna kumar | Medium</span>
            <a href="https://images.openai.com/static-rsc-4/18cd7NLI9e4YSTsbwtFBdjM8uoTKyYD5nNVNEKr3pUENFrbEC76ocg1swIu96gwOB_53A8V-WpEAgVgnp2indr99SLjQlq5Jl2X4BGftoFMlhIEpAyitTt5wg3XDxNLhg8TqKOtt1hfmMi4KiUrwGOFWpn36EvJD8HE5dUa_HdU?purpose=inline" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Documentation</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs shadow-sm hover:border-orange-300 transition-colors">
            <span className="font-semibold text-stone-800 truncate">medium.com</span>
            <a href="https://medium.com/%40prasku/aws-emr-big-data-processing-with-spark-and-hadoop-649509bddd56?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Documentation</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>11.2 Why Do We Need EMR?</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Imagine an organization processes 20 TB of customer activity data.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A single machine may not have enough memory, CPU capacity, or practical processing time to complete the job efficiently.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Apache Spark divides the dataset into partitions and distributes processing across multiple workers.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            EMR provides managed infrastructure for running these big data frameworks in AWS.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>11.3 EMR Architecture</span>
          </h3>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            A traditional EMR on EC2 cluster contains:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Primary Node
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Coordinates cluster operations.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Core Nodes
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Provide computation and can participate in distributed storage.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Task Nodes
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Provide additional processing capacity.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            The exact architecture depends on the selected EMR deployment model.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>11.4 EMR and Apache Spark</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Suppose an e-commerce company processes customer activity logs.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            It wants to:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Remove duplicate events.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Calculate customer activity.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Aggregate product views.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Identify popular categories.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Create daily analytical datasets.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Apache Spark can process this information in a distributed environment.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Simplified PySpark example:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3 shadow-inner">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`from pyspark.sql import SparkSession
from pyspark.sql.functions import count, col

spark = SparkSession.builder \\
    .appName("CustomerActivity") \\
    .getOrCreate()

# Read raw customer events from S3
events = spark.read.parquet("s3://company-lake/raw/events/")

# Remove duplicate events
clean_events = events.dropDuplicates()

# Calculate aggregated product views
product_views = clean_events \\
    .groupBy("product_id") \\
    .agg(count("*").alias("total_views"))

# Write aggregated results back to S3 curated layer
product_views.write \\
    .mode("overwrite") \\
    .parquet("s3://company-lake/curated/product_views/")

spark.stop()`}</code>
            </pre>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            This code can run on a properly configured Spark environment hosted on EMR.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>11.5 EMR Deployment Options</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            AWS provides different ways to run EMR workloads.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            EMR on EC2
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Allows users to run managed big data clusters on EC2.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Useful when you need greater control over cluster configuration.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            EMR Serverless
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Allows users to run supported big data applications without managing the underlying clusters.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Useful for intermittent Spark workloads.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            EMR on EKS
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Runs supported big data workloads using Amazon EKS infrastructure.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Useful when organizations already operate Kubernetes-based environments.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>11.6 EMR vs AWS Glue</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Both can support distributed data processing.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            However, they address somewhat different requirements.
          </p>
          <div className="my-4 overflow-x-auto rounded-xl border border-stone-200 bg-white shadow-sm [scrollbar-width:thin]">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-stone-100/90 text-stone-700 font-semibold border-b border-stone-200">
                  <th className="py-2.5 px-3.5 font-mono uppercase tracking-wider text-[11px] text-stone-800">Feature</th>
                  <th className="py-2.5 px-3.5 font-mono uppercase tracking-wider text-[11px] text-stone-800">AWS Glue</th>
                  <th className="py-2.5 px-3.5 font-mono uppercase tracking-wider text-[11px] text-stone-800">Amazon EMR</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100 text-stone-700">
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Primary purpose</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Managed data integration</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Managed big data platforms</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Spark support</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Yes</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Yes</td>
                </tr>
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Infrastructure control</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">More abstracted</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">More deployment choices</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Data Catalog integration</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Native</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Integrates with Glue Catalog</td>
                </tr>
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">ETL automation</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Strong integration</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Requires additional orchestration</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Custom framework control</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">More constrained</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Greater flexibility</td>
                </tr>
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Typical user</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Data engineers building managed ETL</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Engineers building custom big data workloads</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Remember:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Glue is not simply a smaller version of EMR. Choose based on the required processing engine, infrastructure control, supported runtime, operational burden, and pricing.
          </p>
        </div>
      );
    case 12:
      return (
        <div className="space-y-4">
          <div className="border-b border-stone-200 pb-3 mb-4">
            <span className="text-[11px] font-mono uppercase tracking-wider text-orange-600 font-semibold bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200">
              Part 4 · Real-Time Streaming &amp; Databases
            </span>
            <h2 className="text-lg sm:text-2xl font-bold text-stone-900 mt-2 tracking-tight">
              12. Amazon Kinesis — Real-Time Data Ingestion
            </h2>
          </div>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>Important for Streaming Systems</span>
          </h4>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>12.1 What is Amazon Kinesis?</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Amazon Kinesis is an AWS family of streaming data services.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            It helps ingest and process continuous streams of data.
          </p>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>Examples of streaming sources:</span>
          </h4>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Website click events.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Online payment transactions.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            IoT sensor information.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Application logs.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Real-time user activities.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            GPS location events.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Imagine an e-commerce platform receiving thousands of customer interactions every second.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            It needs to collect and process these events continuously.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Kinesis services support this type of architecture.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>12.2 Streaming vs Batch Processing</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Batch processing
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Processes accumulated data at scheduled intervals.
          </p>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>Example:</span>
          </h4>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A company processes all orders at midnight.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Stream processing
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Processes incoming events continuously or near real time.
          </p>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>Example:</span>
          </h4>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A company detects suspicious payments immediately after transactions occur.
          </p>
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
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Scheduled groups</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Continuous events</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Latency</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Minutes or hours</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Milliseconds to seconds depending on design</td>
                </tr>
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Data</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Bounded batches</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Unbounded event streams</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Example</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Daily sales reports</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Fraud alerts</td>
                </tr>
              </tbody>
            </table>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>12.3 Kinesis Data Streams</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Kinesis Data Streams allows producers to publish records into a stream and consumers to process them.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A data stream contains records organized into shards.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A shard provides a unit of throughput and ordering for records sharing its ordering scope.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            The partition key determines how records are distributed across shards.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            For example:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3 shadow-inner">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`{
  "event_id": "EVT1001",
  "customer_id": "C101",
  "event_type": "product_view",
  "product_id": "P501",
  "timestamp": "2026-11-09T18:30:00"
}`}</code>
            </pre>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            An application can publish this event into a Kinesis data stream.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Consumers can read the records and process them.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>12.4 Kinesis Architecture</span>
          </h3>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs shadow-sm hover:border-orange-300 transition-colors">
            <span className="font-semibold text-stone-800 truncate">Kinesis Data Streams - KodeKloud</span>
            <a href="https://images.openai.com/static-rsc-4/8tnCSSDHQiG090KZQ4OlZjSFOS8pm_GpFCPWDNrwvgxijIGDDypJJvWxiDhspR2N0UUuKL0vAPDgA6CWPN15tc_aeyqEAeu2CkjqMM5U8It2FRymZLoWA3myP_Bj3kWK0RITGaQsRO9RsypqLLht9xklMbYCs3renP3bMp6elnc?purpose=inline" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Documentation</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs shadow-sm hover:border-orange-300 transition-colors">
            <span className="font-semibold text-stone-800 truncate">notes.kodekloud.com</span>
            <a href="https://notes.kodekloud.com/docs/AWS-Certified-Developer-Associate/Data-Analytics/Kinesis-Data-Streams/page?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Documentation</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            The main components are:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Producer
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Generates and publishes events.
          </p>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>Example: An e-commerce application.</span>
          </h4>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Stream
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Receives and temporarily stores records.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Shard
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Provides the stream's capacity and record organization unit.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Consumer
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Reads and processes stream records.
          </p>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>Examples:</span>
          </h4>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            AWS Lambda.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Amazon Managed Service for Apache Flink.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Custom consumer applications.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Kinesis Data Streams retains records temporarily, with a default retention period of 24 hours and configurable longer retention up to 365 days.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Amazon Kinesis Data Streams+1
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>12.5 Amazon Data Firehose</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Amazon Data Firehose is used to deliver streaming data to supported destinations.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            For example:
          </p>
          <div className="my-4 p-4 rounded-xl bg-stone-900 text-stone-100 border border-stone-800 shadow-md">
            <div className="text-[11px] font-mono tracking-wider text-orange-400 uppercase mb-3 flex items-center gap-1.5 font-semibold">
              <ArrowRight size={13} className="text-orange-400" /> Architectural Data Pipeline Flow
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Website Events
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Kinesis Data Streams
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Amazon Data Firehose
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                S3 Data Lake
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Athena Analytics
              </div>
            </div>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            This is useful when you want streaming ingestion with managed data delivery.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>12.6 Real-Time Processing Example</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Imagine an online payment application.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Every transaction generates an event.
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3 shadow-inner">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`{
  "transaction_id": "TX1001",
  "customer_id": "C501",
  "amount": 50000,
  "location": "Mumbai",
  "status": "completed"
}`}</code>
            </pre>
          </div>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            The architecture:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            The application generates a transaction event.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Kinesis receives the event.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A streaming consumer processes it.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            The system checks for suspicious transaction patterns.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Suspicious events can trigger alerts.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Events are also delivered to S3 for historical analysis.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            This architecture allows organizations to build near-real-time analytics systems.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>12.7 When Should You Use Kinesis?</span>
          </h3>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Use Kinesis when:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            You need real-time event ingestion.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            You process continuously arriving data.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            You need streaming analytics.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            You want to capture application events.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            You need multiple consumers for streaming data.
          </p>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>Important: Kinesis Data Streams is not the same thing as Amazon Data Firehose. The first provides a stream with consumer-oriented processing capabilities; the second focuses on managed delivery of streaming data to destinations.</span>
          </h4>
        </div>
      );
    case 13:
      return (
        <div className="space-y-4">
          <div className="border-b border-stone-200 pb-3 mb-4">
            <span className="text-[11px] font-mono uppercase tracking-wider text-orange-600 font-semibold bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200">
              Part 4 · Real-Time Streaming &amp; Databases
            </span>
            <h2 className="text-lg sm:text-2xl font-bold text-stone-900 mt-2 tracking-tight">
              13. Managed Database Services
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Cloud platforms provide managed databases so organizations do not need to operate all database infrastructure themselves.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            AWS has multiple database services with different data models and workloads.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>13.1 Amazon RDS</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Amazon Relational Database Service is a managed relational database service.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            It supports database engines such as:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            PostgreSQL.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            MySQL.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            MariaDB.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Oracle.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Microsoft SQL Server.
          </p>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>Example:</span>
          </h4>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            An e-commerce application needs to store:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Customers.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Product information.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Orders.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Payments.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            RDS can provide the relational database infrastructure.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            The service handles many operational tasks, although database configuration, schema design, query optimization, and access policies remain important responsibilities.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>13.2 Amazon Aurora</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Amazon Aurora is a relational database engine compatible with PostgreSQL and MySQL.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            It provides managed relational database capabilities and is designed for cloud workloads.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            It is suitable for applications requiring relational consistency, transactions, and scalable database architecture.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>13.3 Amazon DynamoDB</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            DynamoDB is a managed NoSQL database.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            It supports key-value and document data models.
          </p>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>Example:</span>
          </h4>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A real-time application stores customer session details.
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3 shadow-inner">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`{
  "customer_id": "C101",
  "session_id": "S501",
  "device": "mobile",
  "last_activity": "2026-11-09T18:00:00"
}`}</code>
            </pre>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            DynamoDB can support applications requiring low-latency access patterns at scale.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            It is not intended to replace a relational database in every situation.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>13.4 Other AWS Data Services</span>
          </h3>
          <div className="my-4 overflow-x-auto rounded-xl border border-stone-200 bg-white shadow-sm [scrollbar-width:thin]">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-stone-100/90 text-stone-700 font-semibold border-b border-stone-200">
                  <th className="py-2.5 px-3.5 font-mono uppercase tracking-wider text-[11px] text-stone-800">Service</th>
                  <th className="py-2.5 px-3.5 font-mono uppercase tracking-wider text-[11px] text-stone-800">Primary purpose</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100 text-stone-700">
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Amazon RDS</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Managed relational databases</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Amazon Aurora</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Cloud relational database</td>
                </tr>
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">DynamoDB</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Managed NoSQL database</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Amazon ElastiCache</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">In-memory caching</td>
                </tr>
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Amazon OpenSearch Service</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Search and operational analytics</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Amazon Redshift</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Analytical data warehouse</td>
                </tr>
              </tbody>
            </table>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>13.5 OLTP vs OLAP in Cloud Databases</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            This distinction is especially important.
          </p>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>OLTP (Online Transaction Processing) handles day-to-day business operations.</span>
          </h4>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>Examples:</span>
          </h4>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Creating an order.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Updating customer details.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Processing a payment.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            RDS, Aurora, and DynamoDB can support transactional application workloads.
          </p>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>OLAP (Online Analytical Processing) supports business analysis.</span>
          </h4>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>Examples:</span>
          </h4>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Total revenue for the year.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Product sales by region.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Customer retention trends.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Monthly performance reports.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Redshift is designed for analytical data warehouse workloads.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            An organization frequently uses both OLTP and OLAP systems.
          </p>
        </div>
      );
    case 14:
      return (
        <div className="space-y-4">
          <div className="border-b border-stone-200 pb-3 mb-4">
            <span className="text-[11px] font-mono uppercase tracking-wider text-orange-600 font-semibold bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200">
              Part 5 · Cloud Architectures &amp; Serverless
            </span>
            <h2 className="text-lg sm:text-2xl font-bold text-stone-900 mt-2 tracking-tight">
              14. Cloud ETL Architecture
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Now let's combine the AWS services to build a complete ETL architecture.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>14.1 What Is Cloud ETL?</span>
          </h3>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            ETL stands for:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Extract.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Transform.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Load.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Cloud ETL uses cloud storage, processing, and integration services to move data between systems.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Suppose an e-commerce organization has data in:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            PostgreSQL.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Customer applications.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Website logs.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Third-party payment systems.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            The company wants to create a central analytical platform.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>14.2 AWS ETL Architecture</span>
          </h3>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs shadow-sm hover:border-orange-300 transition-colors">
            <span className="font-semibold text-stone-800 truncate">Data Modeling and ETL Design Using AWS Services</span>
            <a href="https://images.openai.com/static-rsc-4/GRjzWMGNGKiSy4xUEFyMqFcpykxmP8JPKK9oelRlCzoZCX5s0nMH9KT4vkfYkw5ZPF0t9_e01OeZN9K_Rg33AX15XSVl_U5u7t0I56B4u6qG9NS1tkwQnMcWwZc0MAb4BCpOLMVMDoIiQEn5T88rRtsV5LzVxRgG7TiyhncFgTs?purpose=inline" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Documentation</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs shadow-sm hover:border-orange-300 transition-colors">
            <span className="font-semibold text-stone-800 truncate">dzone.com</span>
            <a href="https://dzone.com/articles/etl-data-modeling-for-sample-crypto-data?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Documentation</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            A typical architecture:
          </p>
          <div className="my-4 p-4 rounded-xl bg-stone-900 text-stone-100 border border-stone-800 shadow-md">
            <div className="text-[11px] font-mono tracking-wider text-orange-400 uppercase mb-3 flex items-center gap-1.5 font-semibold">
              <ArrowRight size={13} className="text-orange-400" /> Architectural Data Pipeline Flow
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                DATA SOURCES
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                ----------------------
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                RDS APIs Logs
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                ----------------------
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                DATA INGESTION
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                AMAZON S3 RAW ZONE
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                AWS GLUE ETL PROCESSING
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                AMAZON S3 TRUSTED ZONE
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                DATA QUALITY AND VALIDATION
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                AMAZON S3 CURATED ZONE
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                --------------
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                v ATHENA REDSHIFT
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                --------------
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                BI DASHBOARDS
              </div>
            </div>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>14.3 Understanding the Pipeline</span>
          </h3>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>Step 1: Data extraction</span>
          </h4>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Collect data from multiple systems.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Possible mechanisms:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Database extraction.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            API integrations.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Batch file uploads.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Database replication.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Streaming ingestion.
          </p>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>Step 2: Ingestion</span>
          </h4>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Transfer the data to AWS.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            For example:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            AWS Database Migration Service for database migration and replication scenarios.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            AWS Glue connectors and integrations.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            APIs and application-based ingestion.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Kinesis for streaming ingestion.
          </p>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>Step 3: Raw storage</span>
          </h4>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Store original data in S3.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Preserve the original source information so that it can be reprocessed if transformation logic changes.
          </p>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>Step 4: Transformation</span>
          </h4>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Use AWS Glue or EMR to:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Clean records.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Remove duplicates.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Standardize formats.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Apply business rules.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Join datasets.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Aggregate values.
          </p>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>Step 5: Data validation</span>
          </h4>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Check whether the transformed data meets expected quality standards.
          </p>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>Examples:</span>
          </h4>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Customer IDs must not be null.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Order amounts must be valid.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Transaction IDs must be unique.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Dates must be valid.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Required columns must exist.
          </p>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>Step 6: Curated storage</span>
          </h4>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Write the output into an S3 curated zone.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Store analytical datasets in efficient formats, often Parquet.
          </p>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>Step 7: Analytics</span>
          </h4>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Use:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Athena for SQL queries on S3.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Redshift for warehouse analytics.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            EMR for additional large-scale processing where necessary.
          </p>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>Step 8: Reporting</span>
          </h4>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Connect BI tools to the analytical environment and create dashboards.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>14.4 ETL vs ELT in Cloud Architecture</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Cloud systems also commonly use ELT.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            ETL:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Extract → Transform → Load.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Data is transformed before loading into the analytical destination.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            ELT:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Extract → Load → Transform.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Raw or lightly processed data is loaded into the target storage or warehouse before transformation.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Cloud data lakes commonly support ELT patterns because scalable object storage allows organizations to retain large volumes of source data.
          </p>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>Example:</span>
          </h4>
          <div className="my-4 p-4 rounded-xl bg-stone-900 text-stone-100 border border-stone-800 shadow-md">
            <div className="text-[11px] font-mono tracking-wider text-orange-400 uppercase mb-3 flex items-center gap-1.5 font-semibold">
              <ArrowRight size={13} className="text-orange-400" /> Architectural Data Pipeline Flow
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                ETL: PostgreSQL
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Glue
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Cleaned Data
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                S3
              </div>
            </div>
          </div>
          <div className="my-4 p-4 rounded-xl bg-stone-900 text-stone-100 border border-stone-800 shadow-md">
            <div className="text-[11px] font-mono tracking-wider text-orange-400 uppercase mb-3 flex items-center gap-1.5 font-semibold">
              <ArrowRight size={13} className="text-orange-400" /> Architectural Data Pipeline Flow
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                ELT: PostgreSQL
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                S3 Raw
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Glue / SQL Transformations
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                S3 Curated
              </div>
            </div>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Neither pattern is universally superior. Choose based on processing requirements, data quality, latency, storage architecture, and destination system.
          </p>
        </div>
      );
    case 15:
      return (
        <div className="space-y-4">
          <div className="border-b border-stone-200 pb-3 mb-4">
            <span className="text-[11px] font-mono uppercase tracking-wider text-orange-600 font-semibold bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200">
              Part 5 · Cloud Architectures &amp; Serverless
            </span>
            <h2 className="text-lg sm:text-2xl font-bold text-stone-900 mt-2 tracking-tight">
              15. Serverless Data Processing
            </h2>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>15.1 What Is Serverless Computing?</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Serverless computing allows developers to use compute services without directly managing the underlying servers.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            This does not mean servers do not exist.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Servers are still used by the cloud provider, but their provisioning and much of their management are abstracted from users.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>15.2 Serverless AWS Services</span>
          </h3>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>Important examples include:</span>
          </h4>
          <div className="my-4 overflow-x-auto rounded-xl border border-stone-200 bg-white shadow-sm [scrollbar-width:thin]">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-stone-100/90 text-stone-700 font-semibold border-b border-stone-200">
                  <th className="py-2.5 px-3.5 font-mono uppercase tracking-wider text-[11px] text-stone-800">Service</th>
                  <th className="py-2.5 px-3.5 font-mono uppercase tracking-wider text-[11px] text-stone-800">Serverless capability</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100 text-stone-700">
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">AWS Lambda</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Event-driven code execution</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">AWS Glue</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Managed ETL</td>
                </tr>
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Amazon Athena</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">SQL queries</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Amazon Redshift Serverless</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Managed warehouse capacity</td>
                </tr>
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Amazon EMR Serverless</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Managed big data application execution</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Amazon Data Firehose</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Managed streaming delivery</td>
                </tr>
              </tbody>
            </table>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>15.3 Serverless vs Server-Based Architecture</span>
          </h3>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>Traditional server-based architecture</span>
          </h4>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Suppose you want to execute a daily Python job.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            You create:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            EC2 instance.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Operating system.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Python environment.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Dependencies.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Scheduling service.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Monitoring.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Maintenance process.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            You must also consider idle server capacity.
          </p>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>Serverless architecture</span>
          </h4>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            You configure a service to execute the task.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            For example:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            An S3 object upload triggers Lambda, which validates the uploaded file and starts a Glue workflow.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            You focus primarily on application logic and configuration.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>15.4 Event-Driven Architecture</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A key concept in modern cloud systems is event-driven execution.
          </p>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>Example:</span>
          </h4>
          <div className="my-4 p-4 rounded-xl bg-stone-900 text-stone-100 border border-stone-800 shadow-md">
            <div className="text-[11px] font-mono tracking-wider text-orange-400 uppercase mb-3 flex items-center gap-1.5 font-semibold">
              <ArrowRight size={13} className="text-orange-400" /> Architectural Data Pipeline Flow
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                New CSV File Uploaded
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Amazon S3
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                S3 Event Trigger
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                AWS Lambda
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Start Glue Job
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Transform Dataset
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Curated S3
              </div>
            </div>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Instead of running every job according to a fixed schedule, the system responds to new events.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            This is useful for file ingestion, automated processing, and event-based workflows.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>15.5 Limitations of Serverless Computing</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Serverless is not automatically the best choice.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Consider:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Execution limits.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Cold-start behavior where relevant.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Memory limits.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Runtime compatibility.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Network requirements.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Workload duration.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Data volume.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Cost at sustained high utilization.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            For example, a lightweight file validation job is a good candidate for Lambda.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A large distributed Spark workload might require AWS Glue or EMR instead.
          </p>
        </div>
      );
    case 16:
      return (
        <div className="space-y-4">
          <div className="border-b border-stone-200 pb-3 mb-4">
            <span className="text-[11px] font-mono uppercase tracking-wider text-orange-600 font-semibold bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200">
              Part 5 · Cloud Architectures &amp; Serverless
            </span>
            <h2 className="text-lg sm:text-2xl font-bold text-stone-900 mt-2 tracking-tight">
              16. Cloud Data Warehouses
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A cloud data warehouse provides analytical storage and processing capabilities as a cloud service.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Traditional data warehouses often required organizations to purchase and maintain database servers.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Cloud data warehouses provide managed infrastructure and flexible deployment options.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>16.1 Major Cloud Data Warehouse Platforms</span>
          </h3>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs shadow-sm hover:border-orange-300 transition-colors">
            <span className="font-semibold text-stone-800 truncate">novixa.ai | AI-Powered Retention Intelligence for Customer Revenue Teams</span>
            <a href="https://images.openai.com/static-rsc-4/XhTA_nlmycFXsBSNMJ8icsnPxEr8QIjUTH6omZ44_CvX_NSQLUniMEaobLTnBkE8y0oCgFWrhN67Gpdy-4PQbI7oly_8EBmSs0u0ms1dDI6XPPKFpVTmhBLfqkZWm2IiZPrpS4CzoYBMXlG_f0RYmZNYiYVuoQd-1uwpvpJgjuo?purpose=inline" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Documentation</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Amazon Redshift
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            AWS cloud data warehouse, integrating with S3, Glue, and other AWS analytics services.
          </p>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs shadow-sm hover:border-orange-300 transition-colors">
            <span className="font-semibold text-stone-800 truncate">Google BigQuery Logo PNG Vector (SVG) Free Download</span>
            <a href="https://images.openai.com/static-rsc-4/J_ke5IF18E_otFdl4ob_wx-9zqbgbr0uIoB6NoC8ze-o4VWfbTnGmPgaxCUgsV7iPmXD1mwX_Cem6IJpGXnv8o0yI3VsZtKBhVlBy-YvQD8qdF-67umLy3lHOUKxQ6JglFloYz4P4srAsaPcm2kOAyePd9a5lyiE73yZyJkzLOM?purpose=inline" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Documentation</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Google BigQuery
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Google Cloud's managed analytical data warehouse, designed for SQL-based large-scale analysis.
          </p>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs shadow-sm hover:border-orange-300 transition-colors">
            <span className="font-semibold text-stone-800 truncate">Get Started with Azure Synapse Analytics in 60 Minutes</span>
            <a href="https://images.openai.com/static-rsc-4/x4jET5QmQvGypaMcRGOcU2QG1Z9lg3yMYvc9KPSHxCyPC-e-YtBuxEzrmyviEikS5b4tIU1aK5qAFJxtnYPPSp1r6AegS3vXnxpBscbdS2fz7p6CduzAE11vWlPxPKE7iLR1E03gYPou07V_vgd2q5S8dSbqZkiBXas99xICbqw?purpose=inline" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Documentation</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Azure Synapse Analytics
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Microsoft's analytical platform for integrating data warehousing and analytics capabilities.
          </p>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs shadow-sm hover:border-orange-300 transition-colors">
            <span className="font-semibold text-stone-800 truncate">Semi-Structured Data Loading and Analyzing in Snowflake | by Debi Prasad Mishra | Medium</span>
            <a href="https://images.openai.com/static-rsc-4/LvlNcrDnRDe7nXK-6i9WSwgd2zd6Gi3UrguEpOxzqej6D_6mtYc5bJMjUofQXrm2xf1YXK66kNt4GFiUuzVQCKr5xULbN_T-niukJAunWEvgWvqOAdf357EqAml1owKopOS1-GNpIojHILzhve_-wvziOKwdS1XrXdWnYPswHsk?purpose=inline" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Documentation</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Snowflake
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Cloud data platform with separate storage and compute architecture.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>16.2 Cloud Data Warehouse Architecture</span>
          </h3>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            A typical warehouse architecture includes:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Data ingestion.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Storage.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Data transformation.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Analytical models.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Query execution.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            BI and reporting.
          </p>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>Example:</span>
          </h4>
          <div className="my-4 p-4 rounded-xl bg-stone-900 text-stone-100 border border-stone-800 shadow-md">
            <div className="text-[11px] font-mono tracking-wider text-orange-400 uppercase mb-3 flex items-center gap-1.5 font-semibold">
              <ArrowRight size={13} className="text-orange-400" /> Architectural Data Pipeline Flow
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Operational Databases
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Data Ingestion
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Cloud Data Lake
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Data Transformation
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Cloud Data Warehouse
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                SQL Analytics
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                BI Dashboards
              </div>
            </div>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>16.3 Data Lakehouse Architecture</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A lakehouse combines characteristics of data lakes and data warehouses.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A traditional data lake provides flexible storage.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A traditional data warehouse provides structured analytical management.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A lakehouse architecture attempts to combine these capabilities.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Technologies such as Apache Iceberg provide table formats with capabilities including schema evolution and ACID-style table operations on supported data platforms.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            For example:
          </p>
          <div className="my-4 p-4 rounded-xl bg-stone-900 text-stone-100 border border-stone-800 shadow-md">
            <div className="text-[11px] font-mono tracking-wider text-orange-400 uppercase mb-3 flex items-center gap-1.5 font-semibold">
              <ArrowRight size={13} className="text-orange-400" /> Architectural Data Pipeline Flow
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                AMAZON S3
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                APACHE ICEBERG
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                --------------
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                v SQL SPARK ANALYTICS PROCESSING
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                --------------
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                REPORTING
              </div>
            </div>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            This is particularly useful when an organization wants multiple engines to work with shared analytical datasets.
          </p>
        </div>
      );
    case 17:
      return (
        <div className="space-y-4">
          <div className="border-b border-stone-200 pb-3 mb-4">
            <span className="text-[11px] font-mono uppercase tracking-wider text-orange-600 font-semibold bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200">
              Part 5 · Cloud Architectures &amp; Serverless
            </span>
            <h2 className="text-lg sm:text-2xl font-bold text-stone-900 mt-2 tracking-tight">
              17. Cost-Aware Cloud Architectures
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Critical Production Skill
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A technically correct cloud architecture can still be a bad architecture if it costs too much.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Data engineers must understand how service design affects cloud bills.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>17.1 Understanding Cloud Costs</span>
          </h3>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Cloud costs can include:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Compute charges.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Storage charges.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Data transfer charges.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Request charges.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Database capacity charges.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Query processing charges.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Logging and monitoring charges.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Backup and replication charges.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Different services have different pricing models.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>17.2 Storage Cost Optimization</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Suppose an organization stores 100 TB of historical data in S3.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            The company frequently queries only the most recent six months.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Keeping all historical data in the same storage class may be unnecessary.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Possible optimizations:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Apply lifecycle policies.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Archive infrequently accessed data.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Compress files.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Use Parquet instead of inefficient analytical formats.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Remove unnecessary duplicate datasets.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Expire eligible temporary files.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>17.3 Compute Cost Optimization</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Suppose a Spark cluster runs for 24 hours every day, although the actual processing requires only two hours.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            The organization may be wasting money.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Possible improvements:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Use jobs instead of permanently running clusters.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Choose an appropriate instance family.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Right-size memory and CPU.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Use automatic scaling where appropriate.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Terminate unused resources.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Consider EMR Serverless or Glue for suitable workloads.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>17.4 Athena Query Cost Optimization</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Athena costs can increase when queries scan unnecessarily large amounts of data.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Use:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Parquet or ORC.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Partitioning.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Column selection.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Appropriate compression.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Query result reuse when appropriate.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Efficient SQL filters.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>17.5 Data Transfer Cost Optimization</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Moving data between regions, cloud providers, and external networks can incur transfer charges.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Design consideration:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            If a processing job and its main S3 data are in different regions, network transfer costs and latency may become significant.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Keep frequently communicating components close to their data when possible.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>17.6 Monitoring Cloud Expenses</span>
          </h3>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            AWS provides cost-management capabilities, including:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            AWS Cost Explorer.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            AWS Budgets.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Cost and Usage Reports.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Billing alerts.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Resource tagging.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Use these to identify expensive services and track resource consumption.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            AWS's Well-Architected Cost Optimization guidance emphasizes usage awareness, suitable resource selection, workload-level cost analysis, and continuous optimization.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Cost Optimization Pillar+1
          </p>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>Example: Expensive Architecture</span>
          </h4>
          <div className="my-4 p-4 rounded-xl bg-stone-900 text-stone-100 border border-stone-800 shadow-md">
            <div className="text-[11px] font-mono tracking-wider text-orange-400 uppercase mb-3 flex items-center gap-1.5 font-semibold">
              <ArrowRight size={13} className="text-orange-400" /> Architectural Data Pipeline Flow
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Always Running EC2 Cluster
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Permanently Running Spark Jobs
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                S3 Storage
              </div>
            </div>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            If the cluster is not continuously needed, it wastes compute capacity.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Improved Architecture
          </p>
          <div className="my-4 p-4 rounded-xl bg-stone-900 text-stone-100 border border-stone-800 shadow-md">
            <div className="text-[11px] font-mono tracking-wider text-orange-400 uppercase mb-3 flex items-center gap-1.5 font-semibold">
              <ArrowRight size={13} className="text-orange-400" /> Architectural Data Pipeline Flow
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                New Data Arrives
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                S3 Storage
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Event Trigger
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Glue / EMR Job
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Curated Dataset
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Athena Query
              </div>
            </div>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            This can reduce idle compute expenditure, although the exact financial benefit depends on workload frequency, execution duration, service pricing, and data volumes.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>17.7 Important Cloud Cost Design Principles</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Avoid unnecessary always-on infrastructure.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Select the appropriate storage class.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Use efficient columnar formats.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Partition analytical datasets correctly.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Monitor query scanning volume.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Apply automatic lifecycle policies.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Monitor data transfer.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Use resource tagging.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Set budgets and alerts.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Review infrastructure utilization regularly.
          </p>
        </div>
      );
    case 18:
      return (
        <div className="space-y-4">
          <div className="border-b border-stone-200 pb-3 mb-4">
            <span className="text-[11px] font-mono uppercase tracking-wider text-orange-600 font-semibold bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200">
              Part 6 · Multi-Cloud &amp; Practical Project
            </span>
            <h2 className="text-lg sm:text-2xl font-bold text-stone-900 mt-2 tracking-tight">
              18. Mapping Equivalent Architectures to Azure and Google Cloud
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Understanding AWS alone is not sufficient for a cloud data engineer.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Companies use different cloud providers, and many architectural principles remain similar.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            The goal is to understand the underlying capability, not memorize product names.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>18.1 AWS vs Azure vs GCP — Core Services</span>
          </h3>
          <div className="my-4 overflow-x-auto rounded-xl border border-stone-200 bg-white shadow-sm [scrollbar-width:thin]">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-stone-100/90 text-stone-700 font-semibold border-b border-stone-200">
                  <th className="py-2.5 px-3.5 font-mono uppercase tracking-wider text-[11px] text-stone-800">Capability</th>
                  <th className="py-2.5 px-3.5 font-mono uppercase tracking-wider text-[11px] text-stone-800">AWS</th>
                  <th className="py-2.5 px-3.5 font-mono uppercase tracking-wider text-[11px] text-stone-800">Microsoft Azure</th>
                  <th className="py-2.5 px-3.5 font-mono uppercase tracking-wider text-[11px] text-stone-800">Google Cloud</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100 text-stone-700">
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Object storage</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Amazon S3</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Azure Blob Storage / ADLS Gen2</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Cloud Storage</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Virtual machines</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">EC2</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Azure Virtual Machines</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Compute Engine</td>
                </tr>
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Serverless functions</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">AWS Lambda</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Azure Functions</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Cloud Run functions</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">IAM</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">AWS IAM</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Microsoft Entra ID / Azure RBAC</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Cloud IAM</td>
                </tr>
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Data integration</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">AWS Glue</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Azure Data Factory / Fabric Data Factory</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Cloud Data Fusion / Dataflow and other integration services</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Spark processing</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Amazon EMR</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Azure Databricks / other managed Spark options</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Dataproc</td>
                </tr>
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">SQL lake queries</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Amazon Athena</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Microsoft Fabric / Synapse serverless SQL options</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">BigQuery external tables</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Data warehouse</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Amazon Redshift</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Microsoft Fabric Warehouse / Azure Synapse</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">BigQuery</td>
                </tr>
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Stream ingestion</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Kinesis</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Azure Event Hubs</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Pub/Sub</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Stream processing</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Managed Service for Apache Flink</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Azure Stream Analytics</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Dataflow</td>
                </tr>
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Managed relational database</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Amazon RDS / Aurora</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Azure SQL Database</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Cloud SQL</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">NoSQL database</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">DynamoDB</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Azure Cosmos DB</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Firestore / Bigtable</td>
                </tr>
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">These are functional comparisons, not exact one-to-one replacements. Microsoft and Google offer several ways to implement the same architecture.</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Microsoft's comparison guidance, for example, compares AWS Glue with Azure Data Factory and Fabric Data Factory, and EMR with managed Spark offerings such as Azure Databricks.</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Microsoft Learn+1</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">18.2 AWS S3 vs Azure Data Lake Storage vs Google Cloud Storage</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs shadow-sm hover:border-orange-300 transition-colors">
            <span className="font-semibold text-stone-800 truncate">Amazon S3 Logo Vector File Free Download | Logowik</span>
            <a href="https://images.openai.com/static-rsc-4/yERg_TIo2qz3Q-fYJkaK75TyrFas1Wq5iH4apMy2in3HtFdmikR1_0sUTI1PQHYDyT13mf_pa1HMxxbc90VpfW7dq1cqZ65uJSf3akmxsjZimToNWQ5CZMKu5r4Xl50Sl7caKmWfINqlfofCS4YAE0NS56Oh5Zl7-hMW8vKHb58?purpose=inline" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Documentation</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            AWS S3
          </p>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs shadow-sm hover:border-orange-300 transition-colors">
            <span className="font-semibold text-stone-800 truncate">How to write to Azure Storage Gen2 via Rest API | by Viktor Chuhra | Medium</span>
            <a href="https://images.openai.com/static-rsc-4/_99QJZLMXt5Bu0TZb4y3r0F4TsUHQSTISud6vurog9EnWTZdNFLYRhYGEHpuWeZmmelWUnSx6mWq0TAYMFtfsNQiIR2pywJWF6k7-Qe_eBDovXItd882-CpfawGQdODacsm0A2mXF0cUE94On-X75mo3zE5REOJhqhjmDpo9woU?purpose=inline" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Documentation</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Azure ADLS
          </p>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs shadow-sm hover:border-orange-300 transition-colors">
            <span className="font-semibold text-stone-800 truncate">Streamlit &amp; Google Cloud Storage: Your Easy File Upload Guide | by Allan Alfonso | Google Cloud - Community | Medium</span>
            <a href="https://images.openai.com/static-rsc-4/FSPzkW2V-AqZ4NmdElX4WTVh_FbnfLOXxL2g5GQQSX40WdKZ2JztOh9A7z4tbveTwmi6k0Q3aI8HudA6E_8Zk2aCY96rXASTgQNGe05jQOJJ8HM20pAQ_FW7xzjtXpaAe1blMUey2JFv4PfdszN7xf7qHqFE4WsizLrmdEKaGpo?purpose=inline" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Documentation</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            GCS
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            All three provide cloud object-storage capabilities and can be used as foundations for data lake architectures.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            The major differences are in:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            APIs.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Access controls.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Storage management.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Integration with compute services.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Pricing.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Networking.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Governance features.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            The data engineering principle is the same: separate scalable data storage from the processing engine where appropriate.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>18.3 AWS Glue vs Azure Data Factory vs Google Cloud Dataflow</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            AWS Glue
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Managed data integration and ETL, including serverless Spark-based processing.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Azure Data Factory
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Data integration and orchestration service. Microsoft also offers Data Factory in Fabric as part of its integrated analytics platform.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Google Cloud Dataflow
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Managed batch and stream data processing based on Apache Beam.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            An important distinction: Dataflow is primarily a processing service, whereas Glue and Data Factory cover broader data integration and workflow scenarios.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Google's architecture documentation illustrates Pub/Sub ingestion, Dataflow transformation, BigQuery storage, and Looker reporting as a common analytics pattern.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Google Cloud Documentation+1
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>18.4 AWS Redshift vs Azure/Fabric Warehouse vs BigQuery</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            These services support analytical data warehouse workloads.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            However, their architectures and operational models are different.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Amazon Redshift
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Strong integration with AWS storage and analytics services.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Microsoft Fabric Warehouse
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Integrated with the Fabric ecosystem and OneLake.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Google BigQuery
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Managed analytical warehouse with a serverless-oriented operating model.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            The correct choice depends on:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Existing cloud infrastructure.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Query workload.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Data volume.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Pricing.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Governance.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Integration requirements.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Team expertise.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>18.5 Real-World Cloud Architecture Comparison</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Suppose we want to build an e-commerce analytics platform.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            The architecture in each cloud may look like this:
          </p>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>AWS implementation</span>
          </h4>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Data sources
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Applications · Databases · Website events
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Kinesis / Glue ingestion
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Amazon S3 data lake
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Glue / EMR processing
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Athena / Redshift analytics
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            BI dashboards
          </p>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>Microsoft Azure implementation</span>
          </h4>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Data sources
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Event Hubs / Data Factory
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            ADLS Gen2 / OneLake
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Azure Databricks / Fabric Engineering
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Fabric Warehouse / Synapse
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Power BI
          </p>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>Google Cloud implementation</span>
          </h4>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Data sources
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Pub/Sub
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Cloud Storage
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Dataflow / Dataproc
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            BigQuery
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Looker
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            The implementation changes, but the architectural responsibilities remain remarkably similar:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Ingest data.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Store data.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Process data.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Transform and validate data.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Make data available for analytics.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Secure and monitor everything.
          </p>
        </div>
      );
    case 19:
      return (
        <div className="space-y-4">
          <div className="border-b border-stone-200 pb-3 mb-4">
            <span className="text-[11px] font-mono uppercase tracking-wider text-orange-600 font-semibold bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200">
              Part 6 · Multi-Cloud &amp; Practical Project
            </span>
            <h2 className="text-lg sm:text-2xl font-bold text-stone-900 mt-2 tracking-tight">
              19. Practical Project — Build an AWS E-Commerce Data Platform
            </h2>
          </div>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>Major Hands-on Project</span>
          </h4>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Now we will bring together everything in this module.
          </p>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>Project Objective</span>
          </h4>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Build a cloud-based e-commerce data engineering platform using AWS.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            The system should collect customer, product, and order data, process it, store it in a data lake, and make it available for analytics.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Business requirements
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            An e-commerce company wants to:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Collect customer information.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Collect product information.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Collect order transactions.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Store raw data in S3.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Clean and transform the data.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Maintain a centralized data catalog.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Query the data using SQL.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Generate business analytics.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Support future real-time event processing.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Secure access to all datasets.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>19.1 Final Architecture</span>
          </h3>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs shadow-sm hover:border-orange-300 transition-colors">
            <span className="font-semibold text-stone-800 truncate">Building End-to-End Data Engineering Pipelines with AWS Ecosystem Tools | by Xiaotian Cheng | Medium</span>
            <a href="https://images.openai.com/static-rsc-4/-bkuICllEtZvlwfRZlMXe2etTYlFAqnA8t_deyI76Ug8ERxNgSTMdH4QpIGXrBs5C7TtRwmvrgiW1JqgU83p63aA4HkDfOTppJjhDIttjTnH9RrUlFEArIqo9vMio_W_B5juL-W_idNLlkuNxgc4t40tTd9IMcX6XuAixZzrK8Y?purpose=inline" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Documentation</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs shadow-sm hover:border-orange-300 transition-colors">
            <span className="font-semibold text-stone-800 truncate">medium.com</span>
            <a href="https://medium.com/%40xiaotiancheng.orange/building-end-to-end-data-engineering-pipelines-with-aws-ecosystem-tools-a9c4c2c84ff6?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Documentation</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <div className="my-4 p-4 rounded-xl bg-stone-900 text-stone-100 border border-stone-800 shadow-md">
            <div className="text-[11px] font-mono tracking-wider text-orange-400 uppercase mb-3 flex items-center gap-1.5 font-semibold">
              <ArrowRight size={13} className="text-orange-400" /> Architectural Data Pipeline Flow
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                DATA SOURCES
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                ---------------------------
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Customers Products Orders
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                ---------------------------
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                INGESTION LAYER
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                AMAZON S3 RAW ZONE
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                AWS GLUE CRAWLER
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                GLUE DATA CATALOG
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                AWS GLUE ETL
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                DATA QUALITY
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                AMAZON S3 CURATED ZONE
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                -------------------
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                v ATHENA REDSHIFT
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                -------------------
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                BI DASHBOARDS REAL-TIME EXTENSION: Applications → Kinesis → S3
              </div>
            </div>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>19.2 Step 1 — Create an S3 Data Lake</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Create an S3 bucket for the project.
          </p>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>Example:</span>
          </h4>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            prepspaces-ecommerce-data-lake
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Organize the bucket into folders:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            prepspaces-ecommerce-data-lake/ raw/ customers/ products/ orders/ trusted/ customers/ products/ orders/ curated/ daily_sales/ customer_summary/ product_performance/
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Upload sample CSV datasets into the raw zone.
          </p>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>Example orders.csv:</span>
          </h4>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            order_id,customer_id,product_id,amount,status 101,C001,P001,500,completed 102,C002,P002,700,cancelled 103,C003,P001,900,completed 104,C001,P003,300,completed
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>19.3 Step 2 — Create AWS Glue Crawler</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Configure a crawler to discover your raw dataset.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            The crawler should:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Read the S3 location.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Inspect the dataset.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Infer schema.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Register the table in the Glue Data Catalog.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            After completion, inspect the generated table schema.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>19.4 Step 3 — Create an AWS Glue ETL Job</span>
          </h3>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Develop an ETL job that:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Reads order information.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Removes duplicate records.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Removes null order IDs.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Filters out cancelled orders.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Converts data to Parquet.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Stores output in the trusted or curated zone.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            You should now have a transformed dataset.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>19.5 Step 4 — Query the Data with Athena</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Use Athena to inspect the data.
          </p>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>Example:</span>
          </h4>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3 shadow-inner">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`SELECT * FROM ecommerce.orders LIMIT 10;`}</code>
            </pre>
          </div>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Calculate total sales:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3 shadow-inner">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`SELECT SUM(amount) AS total_revenue FROM ecommerce.orders WHERE status = 'completed';`}</code>
            </pre>
          </div>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Calculate customer-wise revenue:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3 shadow-inner">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`SELECT customer_id, SUM(amount) AS revenue FROM ecommerce.orders WHERE status = 'completed' GROUP BY customer_id ORDER BY revenue DESC;`}</code>
            </pre>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>19.6 Step 5 — Improve the Dataset</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Partition the output by year, month, or another suitable dimension.
          </p>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>Example:</span>
          </h4>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            curated/orders/ year=2026/ month=11/ part-0001.parquet part-0002.parquet
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Update the catalog so analytical queries can use the partition metadata.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>19.7 Step 6 — Extend to Redshift</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Create an analytical warehouse and load the curated sales dataset.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Build analytical tables and execute queries such as:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Monthly revenue.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Customer lifetime value.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Top-selling products.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Regional sales.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Sales growth.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>19.8 Step 7 — Add Real-Time Data with Kinesis</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Generate sample customer events.
          </p>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>Example:</span>
          </h4>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3 shadow-inner">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`{
  "customer_id": "C001",
  "event_type": "product_view",
  "product_id": "P001",
  "timestamp": "2026-11-09T18:00:00"
}`}</code>
            </pre>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Publish events to Kinesis Data Streams.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Set up an appropriate consumer to process the incoming events and deliver them to S3.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Now the project supports batch and streaming data ingestion.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>19.9 Step 8 — Implement Security</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Create IAM roles with permissions specific to each component.
          </p>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>Examples:</span>
          </h4>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Glue role: read raw data and write curated data.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Athena analyst role: query approved datasets and read required S3 objects.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Kinesis producer role: publish records to the designated stream.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Enable appropriate S3 encryption, monitor access, and avoid unrestricted permissions.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>19.10 Step 9 — Monitor Costs</span>
          </h3>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Monitor:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            S3 storage.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Glue job execution.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Athena data scanned.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Redshift capacity.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Kinesis throughput.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Data transfer.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Delete experimental resources when they are no longer needed.
          </p>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>Important practical note: AWS usage can generate charges even during learning. Set a budget and billing alerts before starting. Do not assume that every service or experiment is covered by a free tier.</span>
          </h4>
        </div>
      );
    case 20:
      return (
        <div className="space-y-4">
          <div className="border-b border-stone-200 pb-3 mb-4">
            <span className="text-[11px] font-mono uppercase tracking-wider text-orange-600 font-semibold bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200">
              Part 6 · Multi-Cloud &amp; Practical Project
            </span>
            <h2 className="text-lg sm:text-2xl font-bold text-stone-900 mt-2 tracking-tight">
              20. Advanced Concepts You Should Understand
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            After completing the core AWS services, you should understand these architectural concepts.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>20.1 Data Lake Architecture</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A data lake stores information from multiple sources in a scalable storage environment.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Understand:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Landing zones.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Raw zones.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Trusted zones.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Curated zones.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Schema-on-read.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            File formats.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Data partitioning.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Metadata catalogs.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Data governance.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>20.2 Data Lakehouse</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Understand how data lakes and warehouses can work together.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Study:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Apache Iceberg.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Apache Hudi.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Delta Lake.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            ACID transactions.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Schema evolution.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Time travel.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Metadata management.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Multiple processing engines.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>20.3 Multi-Cloud Data Engineering</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Some organizations use more than one cloud platform.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Understand:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Cross-cloud data movement.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Data transfer costs.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Identity federation.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Data residency.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Networking between cloud providers.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Cloud portability.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Vendor lock-in.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>20.4 High Availability and Disaster Recovery</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A production data platform must survive failures.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Study:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Multi-AZ deployment.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Cross-region replication.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            S3 versioning.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Database backups.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Recovery Point Objective (RPO).
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Recovery Time Objective (RTO).
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Backup retention.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Failover architecture.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            RPO: How much data loss can the organization tolerate, measured in time.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            RTO: How long the organization can tolerate a system being unavailable.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>20.5 Infrastructure as Code (IaC)</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Infrastructure as Code means creating and managing cloud infrastructure through code rather than configuring everything manually.
          </p>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>Important AWS technologies:</span>
          </h4>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            AWS CloudFormation.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            AWS CDK.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Terraform.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            For example, instead of manually creating ten AWS services, an engineer can define the required architecture in Terraform and deploy it consistently across environments.
          </p>
        </div>
      );
    case 21:
      return (
        <div className="space-y-4">
          <div className="border-b border-stone-200 pb-3 mb-4">
            <span className="text-[11px] font-mono uppercase tracking-wider text-orange-600 font-semibold bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200">
              Part 7 · Interview Preparation &amp; Assignments
            </span>
            <h2 className="text-lg sm:text-2xl font-bold text-stone-900 mt-2 tracking-tight">
              21. Module 18 — Important Interview Questions
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            You should be able to answer these questions after completing the module.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Cloud Computing Fundamentals
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            What is cloud computing?
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            What are the advantages of cloud infrastructure?
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Explain IaaS, PaaS, and SaaS.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            What is the difference between scalability and elasticity?
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Explain vertical and horizontal scaling.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            What is an AWS region?
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            What is an Availability Zone?
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            What is a VPC?
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Explain public and private subnets.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Explain the shared responsibility model.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            AWS Security
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            What is AWS IAM?
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Explain IAM users, groups, and roles.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            What is an IAM policy?
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Explain least-privilege access.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            What is encryption at rest?
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            What is encryption in transit?
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            What is AWS KMS?
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            How would you secure an S3 data lake?
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            What is the difference between a security group and a Network ACL?
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            AWS Data Services
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            What is Amazon S3?
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            What is the difference between object and file storage?
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            What is S3 versioning?
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Explain S3 lifecycle policies.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            What is the advantage of Parquet?
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            What is AWS Glue?
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            What is the AWS Glue Data Catalog?
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            What is an AWS Glue crawler?
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            What is an AWS Glue ETL job?
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            What is Amazon Athena?
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            How does Athena query files stored in S3?
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            What is partition pruning?
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            What is Amazon Redshift?
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            What is the difference between Redshift and Athena?
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Explain MPP architecture.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            What are distribution keys and sort keys?
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            What is Amazon EMR?
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Explain the difference between EMR and Glue.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            What is Apache Spark's role in EMR?
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            What is Amazon Kinesis?
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Explain Kinesis Data Streams.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            What are producers, shards, and consumers?
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            What is the difference between Kinesis Data Streams and Data Firehose?
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Architecture and Production
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Design an AWS data lake architecture.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Design a cloud-based ETL pipeline.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            How would you process 10 TB of data in AWS?
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            How would you reduce Athena query costs?
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            How would you secure a production data pipeline?
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            What is serverless computing?
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Explain event-driven data processing.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            How would you select between Redshift and Athena?
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            How do you implement disaster recovery for cloud data?
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            What is Infrastructure as Code?
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Explain the difference between AWS, Azure, and GCP data engineering architectures.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            How do you optimize costs in a cloud data platform?
          </p>
        </div>
      );
    case 22:
      return (
        <div className="space-y-4">
          <div className="border-b border-stone-200 pb-3 mb-4">
            <span className="text-[11px] font-mono uppercase tracking-wider text-orange-600 font-semibold bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200">
              Part 7 · Interview Preparation &amp; Assignments
            </span>
            <h2 className="text-lg sm:text-2xl font-bold text-stone-900 mt-2 tracking-tight">
              22. Practical Assignments
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Complete the following assignments to test your understanding.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Assignment
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Task
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            1
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Create an S3 bucket and organize raw, trusted, and curated zones.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            2
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Upload customer and transaction CSV datasets.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            3
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Create a Glue crawler and register datasets in the Data Catalog.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            4
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Develop a Glue ETL job to clean and convert CSV data into Parquet.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            5
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Query datasets using Athena.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            6
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Partition a dataset and compare query behavior.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            7
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Build an analytical warehouse using Redshift.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            8
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Run a Spark transformation using EMR or Glue.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            9
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Create a Kinesis streaming ingestion pipeline.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            10
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Implement IAM roles and least-privilege policies.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            11
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Configure lifecycle policies and monitor storage usage.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            12
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Document an equivalent Azure or GCP architecture.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Suggested Capstone
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Build a Production-Style Cloud Data Engineering Platform for E-Commerce
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Your final platform should support:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Batch ingestion.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Streaming ingestion.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            S3-based data lake.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Glue-based ETL.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Data quality validation.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Athena SQL analytics.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Redshift warehouse.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            IAM security.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Monitoring.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Cost optimization.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Documentation and architecture diagrams.
          </p>
        </div>
      );
    case 23:
      return (
        <div className="space-y-4">
          <div className="border-b border-stone-200 pb-3 mb-4">
            <span className="text-[11px] font-mono uppercase tracking-wider text-orange-600 font-semibold bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200">
              Part 7 · Interview Preparation &amp; Assignments
            </span>
            <h2 className="text-lg sm:text-2xl font-bold text-stone-900 mt-2 tracking-tight">
              23. Recommended Learning Resources
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            These are official documentation resources for learning and further practical implementation.
          </p>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs shadow-sm hover:border-orange-300 transition-colors">
            <span className="font-semibold text-stone-800 truncate">AWS Week in Review – AWS Documentation Updates, Amazon EventBridge is Faster, and More – May 22, 2023 | AWS News Blog</span>
            <a href="https://images.openai.com/static-rsc-4/9pwLeoRsZS5tRGMgJlog9KV4_Ks8yJndbqMRRkeOwWOLgWbDASC-Rwewg28SFIKKx-eSgkqQROCqIViTjf8LZHdXpNlem3EgbfCvfkdqjBRETOa9qyT4y5s1r-Owv18fzVwT9jWIz7g2hmCRtIJorrDfnOMNULMxaAfHv-2x5a8?purpose=inline" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Documentation</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            AWS Documentation
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Official documentation for S3, Glue, Athena, Redshift, EMR, Kinesis, IAM, and cloud architecture.
          </p>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs shadow-sm hover:border-orange-300 transition-colors">
            <span className="font-semibold text-stone-800 truncate">Explore AWS documentation</span>
            <a href="https://docs.aws.amazon.com/?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Documentation</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs shadow-sm hover:border-orange-300 transition-colors">
            <span className="font-semibold text-stone-800 truncate">AWS Educate badges you can earn for free with knowledge | by Shashini Peiris | Medium</span>
            <a href="https://images.openai.com/static-rsc-4/es-Sby7viuSlJwE4TDoeaR4LwVTPGExbNGikOlsP9KYRTpg3Ik-9coyE4kUzSUsfbPCww6gVo9cJ-wFi-DfYDDt3Z1WY5rfdcjkJ8UQSQWQWPCzGrSTl64Ih_5WjvoRwa6h1-SY5dV03l89lzME2JHkiZN-UFkhxg6WTSTGq3PQ?purpose=inline" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Documentation</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            AWS Skill Builder
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Cloud learning paths, digital training, and hands-on learning resources.
          </p>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs shadow-sm hover:border-orange-300 transition-colors">
            <span className="font-semibold text-stone-800 truncate">Explore AWS Skill Builder</span>
            <a href="https://skillbuilder.aws/?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Documentation</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs shadow-sm hover:border-orange-300 transition-colors">
            <span className="font-semibold text-stone-800 truncate">Employee Learning and Training Platform | Microsoft Viva</span>
            <a href="https://images.openai.com/static-rsc-4/omd_grkq51-e8sDDi26yQs59TqgqgVgpQzPbLHScT6Isu9nzVQlp0lR0zotwbmRtQduYe_UIDDFjTkO3TqTmwX77i61RTklA2bwvp2prXmElQtJ3h41k3Aw5Cg5yU7_bIRw2N0CCYfiTFbYlQN38xhOrcI_RM4Mr854PS3uSKyw?purpose=inline" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Documentation</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Microsoft Learn
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Azure data engineering, Data Factory, Azure storage, and cloud architecture.
          </p>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs shadow-sm hover:border-orange-300 transition-colors">
            <span className="font-semibold text-stone-800 truncate">Explore Microsoft Learn</span>
            <a href="https://learn.microsoft.com/en-us/training/azure/?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Documentation</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs shadow-sm hover:border-orange-300 transition-colors">
            <span className="font-semibold text-stone-800 truncate">Google Cloud Platform Technology Nuggets — September 16–30, 2024 Edition | by Romin Irani | Google Cloud - Community | Medium</span>
            <a href="https://images.openai.com/static-rsc-4/2GdtEJQ2MTFEHG3QBjAUQk2oUmwgs3yDgcT8UY637TjiXLSH4cWbHxpaLISvZ50MJLJ2GC-9S6cdJN76xv6I4wQWxMjfn7pDX92KGB5YiiBVHq63m4fniH0uuzoAVle_wKpFuse2fuqd0k-A6eWGuHhlUmN0W-NtfuWpkOvlnTY?purpose=inline" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Documentation</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Google Cloud Skills Boost
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Google Cloud data engineering, BigQuery, Dataflow, and practical labs.
          </p>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs shadow-sm hover:border-orange-300 transition-colors">
            <span className="font-semibold text-stone-800 truncate">Explore Google Cloud learning</span>
            <a href="https://www.cloudskillsboost.google/?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Documentation</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Additional architectural reading:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            [AWS Modern Data Architecture](https://docs.aws.amazon.com/prescriptive-guidance/latest/strategy-aws-data/aws-architecture.html?utm_source=chatgpt.com) — architectural design principles.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            [Microsoft: Analytics Services on Azure and AWS](https://learn.microsoft.com/en-us/azure/architecture/aws-professional/analytics?utm_source=chatgpt.com) — cross-cloud comparison.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            [AWS Data Analytics Cost Optimization](https://docs.aws.amazon.com/wellarchitected/latest/analytics-lens/cost-optimization.html?utm_source=chatgpt.com) — production cost design.
          </p>
        </div>
      );
    case 24:
      return (
        <div className="space-y-4">
          <div className="border-b border-stone-200 pb-3 mb-4">
            <span className="text-[11px] font-mono uppercase tracking-wider text-orange-600 font-semibold bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200">
              Part 7 · Interview Preparation &amp; Assignments
            </span>
            <h2 className="text-lg sm:text-2xl font-bold text-stone-900 mt-2 tracking-tight">
              24. Final Module Summary
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            By completing Module 18, you should understand how to move from traditional data engineering systems to modern cloud-based data platforms.
          </p>
          <div className="my-4 overflow-x-auto rounded-xl border border-stone-200 bg-white shadow-sm [scrollbar-width:thin]">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-stone-100/90 text-stone-700 font-semibold border-b border-stone-200">
                  <th className="py-2.5 px-3.5 font-mono uppercase tracking-wider text-[11px] text-stone-800">Area</th>
                  <th className="py-2.5 px-3.5 font-mono uppercase tracking-wider text-[11px] text-stone-800">What you should be able to do</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100 text-stone-700">
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Cloud fundamentals</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Understand cloud infrastructure and service models</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Cloud architecture</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Understand regions, AZs, VPCs, compute, and storage</td>
                </tr>
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">IAM</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Design secure cloud access permissions</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Cloud security</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Apply encryption and security practices</td>
                </tr>
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Amazon S3</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Build and organize data lakes</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">AWS Glue</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Build managed ETL pipelines</td>
                </tr>
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Amazon Athena</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Execute SQL analytics on S3</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Amazon Redshift</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Design analytical warehouse systems</td>
                </tr>
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Amazon EMR</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Run distributed Spark workloads</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Amazon Kinesis</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Ingest and process streaming events</td>
                </tr>
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Managed databases</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Select the correct cloud database</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Serverless</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Design event-driven processing systems</td>
                </tr>
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Cost optimization</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Reduce unnecessary cloud expenditure</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Multi-cloud</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Translate architecture across AWS, Azure, and GCP</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            The most important architectural understanding
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Modern Cloud Data Engineering
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Data Sources
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Applications · Databases · APIs · IoT · Logs
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Cloud Ingestion
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Kinesis · Glue · Database Migration Service
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Cloud Storage
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Amazon S3 · Data Lake · Raw / Trusted / Curated
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Cloud Processing
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            AWS Glue · Amazon EMR · Lambda
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Cloud Analytics
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Amazon Athena · Amazon Redshift
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Business Intelligence
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Dashboards · Reporting · Decision-making
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Cross-cutting capabilities throughout every layer
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            IAM &amp; Security
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Governance
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Monitoring
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Cost Optimization
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Reliability
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            The central idea: A cloud data engineer does not simply upload data to AWS. They design a complete system that can ingest, store, process, protect, govern, and analyze data reliably and cost-effectively.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            That is the difference between knowing individual cloud services and understanding cloud data engineering architecture.
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

export default CloudSection;
