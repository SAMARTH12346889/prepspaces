import React from "react";
import { Database, Server, Layers, CheckCircle2, ArrowRight, ExternalLink, Workflow } from "lucide-react";

export default function DataEngineeringSqlSections() {
  return (
    <div className="space-y-10">
      {/* MODULE OVERVIEW & LEARNING OBJECTIVES */}
      <section className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-4">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Course Roadmap
          </span>
          <span className="text-xs font-mono text-stone-500">Executive Summary</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          Module 3: Complete Advanced SQL & Relational Database Systems Specification
        </h2>
        <div className="space-y-3 text-stone-700 leading-relaxed text-sm sm:text-base">
          <div className="my-2 p-2.5 rounded-lg bg-orange-50/60 border border-orange-200/80 flex items-center justify-between text-xs">
            <span className="font-semibold text-stone-800">&#128279; pgconsole - self-hosted Postgres editor for the team</span>
            <a href="https://images.openai.com/static-rsc-4/b50Y5Rw56O7BfyIb64FyC7NLBE2WDbpUv72-kqCOzKBcC-ZYaDNinYfDOsprwiOFVjpCGsVXT-o9X4C9mG7AbQgGXUirmQvL_hZzBKKHQBY7TeNTaaqHm8jly7QCWuzPpEIx9BvWV0QD_jTbaFDKDTjzV_p48Upacbic-IaN-jQ?purpose=inline" target="_blank" rel="noopener noreferrer" className="text-orange-600 font-bold hover:underline">Reference Link &rarr;</a>
          </div>
          <div className="my-2 p-2.5 rounded-lg bg-orange-50/60 border border-orange-200/80 flex items-center justify-between text-xs">
            <span className="font-semibold text-stone-800">&#128279; Different Types of Databases in 2026: A Comprehensive Guide | Astera Blog</span>
            <a href="https://images.openai.com/static-rsc-4/PB4oha9HbfsJlOGPQOmxwf_qhdp--RvFQmV9kjTTF1kHUxLv8pM6xEzZe-KI4VhHvZBn-pIhb0sGvYU_QesVb5N8E3UsTHNxkqYz2f2u_tWg43iAEIU2Rei-nOxY5DeWu3JS6rBb4ATz1nzggBcKVcZJwG4M-DVIkE1EkxV-9Gg?purpose=inline" target="_blank" rel="noopener noreferrer" className="text-orange-600 font-bold hover:underline">Reference Link &rarr;</a>
          </div>
          <div className="my-2 p-2.5 rounded-lg bg-orange-50/60 border border-orange-200/80 flex items-center justify-between text-xs">
            <span className="font-semibold text-stone-800">&#128279; Understanding PostgreSQL Explain</span>
            <a href="https://images.openai.com/static-rsc-4/F4gve-agjASMQyyKd-VkBYHXM4NJCqb-5Ez6zkzCKfeZWLzotpEfSKrJnu_rkX7EUOP5lpxTtIjD5cJpiHHlq87LhSPgmExEiBmHw-f4f-K1bEeQzJa5SuUCkDgs1oA6vl60wkgGjjt1_vLHlFmLsk-szQE5QCI2nI_zfQm_pKg?purpose=inline" target="_blank" rel="noopener noreferrer" className="text-orange-600 font-bold hover:underline">Reference Link &rarr;</a>
          </div>
          <h3 className="text-lg font-bold text-stone-900 mt-4 mb-2">Module overview</h3>
          <p>SQL (Structured Query Language) is one of the most important skills for a Data Engineer.</p>
          <p>In Module 1, we studied how data engineering systems collect, process, store, and deliver information. In Module 2, we learned how Python can automate data extraction, transformation, validation, and loading.</p>
          <p>Now we will study the database systems that store this information and the SQL techniques used to manage and analyze it.</p>
          <p>A Data Engineer does not simply write SELECT queries. They must understand how relational databases organize information, how tables relate to each other, how transactions work, how databases execute queries, and how to optimize performance when datasets contain millions or billions of records.</p>
          <p>Consider a large e-commerce platform.</p>
          <p>The platform stores:</p>
          <p>Millions of customer records.</p>
          <p>Product catalogs.</p>
          <p>Orders and order items.</p>
          <p>Payment transactions.</p>
          <p>Inventory information.</p>
          <p>Customer addresses.</p>
          <p>Shipment details.</p>
          <p>Management wants to know:</p>
          <p>What is the total revenue for each month?</p>
          <p>Which products generate the highest revenue?</p>
          <p>Which customers have not placed an order in the last six months?</p>
          <p>Which products are selling faster than expected?</p>
          <p>What is the average order value for each customer?</p>
          <p>Which customers rank among the top 10% by spending?</p>
          <p>Why does a query take 30 seconds when it should take much less?</p>
          <p>These problems require advanced SQL, relational database knowledge, and database performance engineering.</p>
          <p>In this module, we will use PostgreSQL as our primary implementation database. Most concepts apply to other relational databases, but certain syntax and behavior differ between PostgreSQL, MySQL, SQL Server, Oracle, and other systems.</p>
          <h3 className="text-lg font-bold text-stone-900 mt-4 mb-2">Learning objectives</h3>
          <h3 className="text-lg font-bold text-stone-900 mt-4 mb-2">By the end of this module, you should be able to:</h3>
          <p>Understand relational database architecture and relational data models.</p>
          <p>Design database schemas, tables, relationships, and constraints.</p>
          <p>Work with DDL, DML, DQL, and DCL.</p>
          <p>Write advanced SELECT, INSERT, UPDATE, and DELETE queries.</p>
          <p>Perform filtering, sorting, grouping, and aggregation.</p>
          <p>Master different types of SQL joins.</p>
          <p>Write nested and correlated subqueries.</p>
          <p>Use ordinary and recursive CTEs.</p>
          <p>Apply window functions and analytical ranking.</p>
          <p>Understand set operations.</p>
          <p>Create views and materialized views.</p>
          <p>Develop stored functions, procedures, and triggers.</p>
          <p>Understand transactions and ACID properties.</p>
          <p>Work with isolation levels, concurrency, and locking.</p>
          <p>Design efficient database indexes.</p>
          <p>Interpret database execution plans.</p>
          <p>Optimize complex SQL queries.</p>
          <p>Design and maintain analytical database structures.</p>
          <p>Technology used throughout this module</p>
          <div className="my-2 p-2.5 rounded-lg bg-orange-50/60 border border-orange-200/80 flex items-center justify-between text-xs">
            <span className="font-semibold text-stone-800">&#128279; Postgresql Logo PNG Transparent With Clear Background ID 473068 | TOPpng</span>
            <a href="https://images.openai.com/static-rsc-4/x6sDZ8oKI9URixQ5E82vqCQV1aR38qK7E8n0HKggx6_cD8G7QtlPuHlyO99GalHPJOycjs41bPgfrRTqdHFqayPWJl57hxNttQynREzHXSUSsui_zVAB_ssyc1xdm_msJ5GiDzf23C9Z2RuuoyVCc6J0AbuAqX5Aul_x1J78q2I?purpose=inline" target="_blank" rel="noopener noreferrer" className="text-orange-600 font-bold hover:underline">Reference Link &rarr;</a>
          </div>
          <p>PostgreSQL</p>
          <p>Primary relational database for practical implementation, SQL queries, indexing, transactions, and performance optimization.[Official PostgreSQL documentation](https://www.postgresql.org/docs/?utm_source=chatgpt.com)</p>
          <p>You can run PostgreSQL locally using its community edition, without purchasing a database license.</p>
          <p>For the practical sections, use PostgreSQL alongside a SQL editor such as pgAdmin, DBeaver, or the psql command-line client.</p>
        </div>
      </section>
      {"/* SECTION 1: Introduction to Relational Database Systems */"}
      <section id="section-1" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 1
          </span>
          <span className="text-xs font-mono text-stone-500">RDBMS Architecture</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          1. Introduction to Relational Database Systems
        </h2>
        <div className="space-y-4 text-stone-700 leading-relaxed text-sm sm:text-base">
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">1.1 What is a relational database?</h3>
          <p>A Relational Database Management System (RDBMS) is software that stores and manages information using related tables.</p>
          <p>A table consists of rows and columns.</p>
          <p>A row represents one record.</p>
          <p>A column represents one attribute.</p>
          <p>A table represents a collection of related records.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">For example, an e-commerce company may have a customer table:</h4>
          <p>customers</p>
          <p>customer_id</p>
          <p>customer_name</p>
          <p>email</p>
          <p>city</p>
          <p>101</p>
          <p>Rahul</p>
          <p>rahul@example.com</p>
          <p>Pune</p>
          <p>102</p>
          <p>Priya</p>
          <p>priya@example.com</p>
          <p>Mumbai</p>
          <p>103</p>
          <p>Amit</p>
          <p>amit@example.com</p>
          <p>Delhi</p>
          <p>104</p>
          <p>Neha</p>
          <p>neha@example.com</p>
          <p>Hyderabad</p>
          <p>Another table stores orders.</p>
          <p>orders</p>
          <p>order_id</p>
          <p>customer_id</p>
          <p>order_date</p>
          <p>amount</p>
          <p>501</p>
          <p>101</p>
          <p>2026-11-01</p>
          <p>2500</p>
          <p>502</p>
          <p>102</p>
          <p>2026-11-02</p>
          <p>5000</p>
          <p>503</p>
          <p>101</p>
          <p>2026-11-03</p>
          <p>1500</p>
          <p>504</p>
          <p>103</p>
          <p>2026-11-04</p>
          <p>3000</p>
          <p>Notice that both tables contain customer_id.</p>
          <p>This identifier creates a relationship between the tables.</p>
          <p>The customer with ID 101 has placed two orders.</p>
          <p>Instead of repeating customer details in every order record, the system stores the customer information once and references it through an identifier.</p>
          <p>This is an important advantage of relational database design.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">1.2 What is an RDBMS?</h3>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">An RDBMS provides the software infrastructure to:</h4>
          <p>Create databases.</p>
          <p>Define schemas and tables.</p>
          <p>Store records.</p>
          <p>Retrieve information.</p>
          <p>Update and delete data.</p>
          <p>Manage relationships.</p>
          <p>Enforce data constraints.</p>
          <p>Control concurrent access.</p>
          <p>Execute transactions.</p>
          <p>Provide security and access permissions.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Popular relational database systems include:</h4>
          <div className="my-3 p-3 rounded-xl bg-orange-50/60 border border-orange-200/80 flex items-center justify-between gap-3 text-xs">
            <div className="font-semibold text-stone-800 flex items-center gap-2"><span>&#128279;</span> <span>postgres - Official Image | Docker Hub</span></div>
            <a href="https://images.openai.com/static-rsc-4/Pole4xk5FkyhFJxxWDBh3yHjF1pQlxteoZyEQA0ykJQSPxLpLcdTrKWhkIQ2-SeCQp9ObINiyVMBFzoUkAM9P9RUAWW761nUuSEzxGOPsF9Keb0OX7HGw8IiQD84tSEoRfxnWrmYPSxGM1Bq9IBWZrT-EGb7Ta0uoZ1t6-qsVoY?purpose=inline" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 font-bold inline-flex items-center gap-1 cursor-pointer">View Resource &rarr;</a>
          </div>
          <p>PostgreSQL</p>
          <p>Advanced open-source relational database known for SQL capabilities, extensibility, and strong transactional features.[Website](https://www.postgresql.org/?utm_source=chatgpt.com)</p>
          <div className="my-3 p-3 rounded-xl bg-orange-50/60 border border-orange-200/80 flex items-center justify-between gap-3 text-xs">
            <div className="font-semibold text-stone-800 flex items-center gap-2"><span>&#128279;</span> <span>MySQL Connector | Convertigo Low-Code Platform Integration</span></div>
            <a href="https://images.openai.com/static-rsc-4/qpwWUxTpxUQ1GSTavwy6cJ2jDXEx_5k-i2uDQ5U7n_nrpE5BJ1VvNbBOUaKjs7uqzdCg_FDhu_GhQOVTcVfVHwnMOhoGA7YbWI1JPYBYqCnkIGFmWAEmEEmKYdpXwskM2urbEPZXdVAPDn4l9OugC6_q7fsH_dU3Zvi8Y0a_QNg?purpose=inline" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 font-bold inline-flex items-center gap-1 cursor-pointer">View Resource &rarr;</a>
          </div>
          <p>MySQL</p>
          <p>Widely used relational database, particularly for web applications and transactional workloads.[Website](https://www.mysql.com/?utm_source=chatgpt.com)</p>
          <div className="my-3 p-3 rounded-xl bg-orange-50/60 border border-orange-200/80 flex items-center justify-between gap-3 text-xs">
            <div className="font-semibold text-stone-800 flex items-center gap-2"><span>&#128279;</span> <span>MS SQL Server Integration - HubSpot 커넥터 및 ETL 앱 | Datawarehouse.io</span></div>
            <a href="https://images.openai.com/static-rsc-4/3S-UawyujieriSTwULWdYy3usnZ_D30DQjWYX5k1YLCbOZ1Sdb8vRmjIMNnv2jURZKwSvdr7SRLzYUf1hiSQICGQ1gHcMq92ZWUPXDhvrFPsiWdpsJi8J867NEpf0c-7gC50Lizg0kF5RNKjdK0wdZsUfjAq6_U-JAB_wmd8wUs?purpose=inline" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 font-bold inline-flex items-center gap-1 cursor-pointer">View Resource &rarr;</a>
          </div>
          <p>Microsoft SQL Server</p>
          <p>Enterprise relational database platform with integration across Microsoft's data ecosystem.[Website](https://www.microsoft.com/en-us/sql-server?utm_source=chatgpt.com)</p>
          <div className="my-3 p-3 rounded-xl bg-orange-50/60 border border-orange-200/80 flex items-center justify-between gap-3 text-xs">
            <div className="font-semibold text-stone-800 flex items-center gap-2"><span>&#128279;</span> <span>Oracle DataBase Enterprise Edition</span></div>
            <a href="https://images.openai.com/static-rsc-4/MAD_OixjnJKShdjBwH7Cp_XBcVd2j47Gw0_EtlJryqE9bcUaqDrYAwrjv2SgvHvJilu_FKsRQ-ZXFFoSFMRsNM4uReG09EtoHSCv82PlDCPtncI-SrNxjM3b6prqaYdYM5FzKVfMryf88wZit5yU137XTlGEN8Wvl2hEDVDpCY0?purpose=inline" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 font-bold inline-flex items-center gap-1 cursor-pointer">View Resource &rarr;</a>
          </div>
          <p>Oracle Database</p>
          <p>Enterprise database platform used in large-scale business and transactional systems.[Website](https://www.oracle.com/database/?utm_source=chatgpt.com)</p>
          <div className="my-3 p-3 rounded-xl bg-orange-50/60 border border-orange-200/80 flex items-center justify-between gap-3 text-xs">
            <div className="font-semibold text-stone-800 flex items-center gap-2"><span>&#128279;</span> <span>▷ Best SQLite Course Online</span></div>
            <a href="https://images.openai.com/static-rsc-4/JskisXVPtbHvr9eyITeToJGKT2k8O37y_IhEKqM8XMxlIw2iSIp8W_ZaDOsNwpabAdTQCQrsv0d-fqRBSrB4KhB_FU-4h-NuSg4ooJW4EaL4MJMgARdpIXF4XA3hoJQNUJcmbU_ZnF80mwXV7O0WbYNNnaA7tnNvtIKRzgeTEiY?purpose=inline" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 font-bold inline-flex items-center gap-1 cursor-pointer">View Resource &rarr;</a>
          </div>
          <p>SQLite</p>
          <p>Lightweight embedded relational database that does not require a separate database server process.[Website](https://sqlite.org/?utm_source=chatgpt.com)</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">1.3 How does a relational database work?</h3>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">A simplified relational database architecture looks like this:</h4>
          <div className="my-3 p-3 rounded-xl bg-orange-50/60 border border-orange-200/80 flex items-center justify-between gap-3 text-xs">
            <div className="font-semibold text-stone-800 flex items-center gap-2"><span>&#128279;</span> <span>Архитектура обработки SQL запросов в Microsoft SQL Server | Info-Comp.ru - IT-блог для начинающих</span></div>
            <a href="https://images.openai.com/static-rsc-4/NKwoLaG4uYF1KmJoqTGY34RERS157lODXjLi7dtN633EnBeCWP5Ih7Is5LupNGhJPKYc1bgHPQ7eZ5kxGD8GMeN_8Y9oLQBq4kCkENNc4NM6wcq5sSPU-SDeWWBGPa2pJfj1xos9qlHRt2QJYILrqvDtiXbXFUnfBT5I6nM8WrM?purpose=inline" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 font-bold inline-flex items-center gap-1 cursor-pointer">View Resource &rarr;</a>
          </div>
          <div className="my-3 p-3 rounded-xl bg-orange-50/60 border border-orange-200/80 flex items-center justify-between gap-3 text-xs">
            <div className="font-semibold text-stone-800 flex items-center gap-2"><span>&#128279;</span> <span>info-comp.ru</span></div>
            <a href="https://info-comp.ru/architecture-of-sql-query-processing?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 font-bold inline-flex items-center gap-1 cursor-pointer">View Resource &rarr;</a>
          </div>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">The main components are:</h4>
          <ol className="list-decimal list-inside space-y-1.5 text-stone-700 text-sm sm:text-base my-3 pl-2">
            <li value="1"><strong className="text-stone-900">Client application</strong></li>
          </ol>
          <p>An application connects to the database and submits SQL commands.</p>
          <p>Examples include a Python application, BI tool, backend service, or SQL editor.</p>
          <ol className="list-decimal list-inside space-y-1.5 text-stone-700 text-sm sm:text-base my-3 pl-2">
            <li value="2"><strong className="text-stone-900">Query parser</strong></li>
          </ol>
          <p>The parser checks whether the SQL statement follows the database's syntax and converts it into an internal representation.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Example:</h4>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`SELECT * FROM customers WHERE city = 'Pune';`}</code>
            </pre>
          </div>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">The database checks whether:</h4>
          <p>The SQL syntax is valid.</p>
          <p>The referenced table exists.</p>
          <p>The referenced column exists.</p>
          <p>The user has appropriate permissions.</p>
          <ol className="list-decimal list-inside space-y-1.5 text-stone-700 text-sm sm:text-base my-3 pl-2">
            <li value="3"><strong className="text-stone-900">Query optimizer</strong></li>
          </ol>
          <p>The optimizer considers alternative ways to execute a query.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">For example, should the database:</h4>
          <p>Scan the entire table?</p>
          <p>Use an index?</p>
          <p>Change the join order?</p>
          <p>Use a different join algorithm?</p>
          <p>The optimizer chooses an execution plan based on available statistics, estimated costs, and database-specific rules.</p>
          <ol className="list-decimal list-inside space-y-1.5 text-stone-700 text-sm sm:text-base my-3 pl-2">
            <li value="4"><strong className="text-stone-900">Execution engine</strong></li>
          </ol>
          <p>The execution engine runs the chosen plan.</p>
          <ol className="list-decimal list-inside space-y-1.5 text-stone-700 text-sm sm:text-base my-3 pl-2">
            <li value="5"><strong className="text-stone-900">Storage and buffer management</strong></li>
          </ol>
          <p>Database systems manage how data is stored, retrieved, cached, and written to persistent storage.</p>
          <p>PostgreSQL, for example, uses shared buffers, a buffer cache, write-ahead logging, and its own storage management mechanisms.</p>
          <ol className="list-decimal list-inside space-y-1.5 text-stone-700 text-sm sm:text-base my-3 pl-2">
            <li value="6"><strong className="text-stone-900">Transaction management and concurrency control</strong></li>
          </ol>
          <p>The database ensures that concurrent operations are managed according to its transaction and isolation rules.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">1.4 Database, schema, table, row, and column</h3>
          <p>These terms describe different levels of database organization.</p>
          <p>Concept</p>
          <p>Meaning</p>
          <p>Example</p>
          <p>Database</p>
          <p>Organized collection of database objects</p>
          <p>ecommerce_db</p>
          <p>Schema</p>
          <p>Namespace for organizing database objects</p>
          <p>sales</p>
          <p>Table</p>
          <p>Collection of records</p>
          <p>orders</p>
          <p>Row</p>
          <p>One record</p>
          <p>Order 501</p>
          <p>Column</p>
          <p>One attribute</p>
          <p>order_date</p>
          <p>Constraint</p>
          <p>Rule applied to data</p>
          <p>PRIMARY KEY</p>
          <p>Index</p>
          <p>Structure for improving data access</p>
          <p>idx_orders_customer</p>
          <p>In PostgreSQL, a database can contain multiple schemas, and a schema can contain tables, views, functions, and other database objects.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Example:</h4>
          <p>ecommerce_db │ ├── sales │ ├── customers │ ├── orders │ └── order_items │ ├── inventory │ ├── products │ └── stock │ └── finance ├── payments └── refunds</p>
          <p>This structure separates logically different business areas.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">1.5 Relational database vs NoSQL database</h3>
          <p>Relational databases are not the only way to store data.</p>
          <p>NoSQL databases provide alternative data models, such as documents, key-value pairs, graphs, and wide-column records.</p>
          <p>Feature</p>
          <p>Relational database</p>
          <p>NoSQL database</p>
          <p>Data model</p>
          <p>Relational tables</p>
          <p>Multiple data models</p>
          <p>Schema</p>
          <p>Usually explicitly defined</p>
          <p>Often flexible or application-defined</p>
          <p>Relationships</p>
          <p>Foreign keys and joins</p>
          <p>Embedding, references, or application logic</p>
          <p>Querying</p>
          <p>SQL or SQL-like</p>
          <p>Depends on the database</p>
          <p>Transactions</p>
          <p>Widely supported</p>
          <p>Varies by system</p>
          <p>Typical use</p>
          <p>Transactions and structured data</p>
          <p>Flexible or specialized access patterns</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">For example:</h4>
          <p>A banking platform may use PostgreSQL to manage financial transactions.</p>
          <p>A content platform may use MongoDB to store flexible content documents.</p>
          <p>Both can exist in the same broader data architecture.</p>
        </div>
      </section>
      {"/* SECTION 2: Relational Data Models */"}
      <section id="section-2" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 2
          </span>
          <span className="text-xs font-mono text-stone-500">Data Modeling & Normalization</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          2. Relational Data Models
        </h2>
        <div className="space-y-4 text-stone-700 leading-relaxed text-sm sm:text-base">
          <p>Understanding relational data modeling is essential before writing advanced SQL.</p>
          <p>A database should not simply contain tables. It should contain logically designed relationships that accurately represent the business.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">2.1 What is a relational data model?</h3>
          <p>A relational data model represents information as relations, commonly implemented as database tables.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Each relation has:</h4>
          <p>Attributes (columns).</p>
          <p>Tuples (rows).</p>
          <p>A defined structure.</p>
          <p>Constraints.</p>
          <p>Relationships with other tables.</p>
          <p>Consider a college management system.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">You might have:</h4>
          <p>students</p>
          <p>student_id</p>
          <p>student_name</p>
          <p>department_id</p>
          <p>1</p>
          <p>Rahul</p>
          <p>10</p>
          <p>2</p>
          <p>Priya</p>
          <p>20</p>
          <p>3</p>
          <p>Amit</p>
          <p>10</p>
          <p>departments</p>
          <p>department_id</p>
          <p>department_name</p>
          <p>10</p>
          <p>Computer Science</p>
          <p>20</p>
          <p>Mechanical Engineering</p>
          <p>The department_id column connects students to departments.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">2.2 Primary key</h3>
          <p>A primary key uniquely identifies every row in a table.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Example:</h4>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`CREATE TABLE customers ( customer_id INTEGER PRIMARY KEY, customer_name VARCHAR(100), email VARCHAR(150) );`}</code>
            </pre>
          </div>
          <p>Here, customer_id is the primary key.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Primary key properties:</h4>
          <p>Must be unique.</p>
          <p>Cannot contain NULL.</p>
          <p>Identifies one record.</p>
          <p>A table can have only one primary key constraint, although it can contain multiple columns as a composite key.</p>
          <p>Why is this important?</p>
          <p>Suppose two customers have the same name.</p>
          <p>Rahul Rahul</p>
          <p>A name is not a reliable unique identifier.</p>
          <p>A customer ID solves this problem.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">2.3 Foreign key</h3>
          <p>A foreign key establishes a relationship between tables.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Example:</h4>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`CREATE TABLE orders ( order_id INTEGER PRIMARY KEY, customer_id INTEGER, amount NUMERIC(12, 2), FOREIGN KEY (customer_id) REFERENCES customers(customer_id) );`}</code>
            </pre>
          </div>
          <p>The customer_id column references the primary key of the customers table.</p>
          <p>This protects referential integrity.</p>
          <p>For example, PostgreSQL can reject an order that references a nonexistent customer, unless the relationship is configured to allow NULL or another permitted behavior.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">2.4 Candidate keys and alternate keys</h3>
          <p>A candidate key is a minimal set of attributes that uniquely identifies a row.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Suppose a user table contains:</h4>
          <p>user_id email phone_number</p>
          <p>Assume all three are required to be unique under the system's rules.</p>
          <p>Each can potentially be a candidate key.</p>
          <p>One is chosen as the primary key.</p>
          <p>Other candidate keys are alternate keys, often enforced using UNIQUE constraints.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Example:</h4>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`CREATE TABLE users ( user_id INTEGER PRIMARY KEY, email VARCHAR(150) UNIQUE, phone_number VARCHAR(20) UNIQUE );`}</code>
            </pre>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">2.5 Composite keys</h3>
          <p>A composite key contains multiple columns that together uniquely identify a record.</p>
          <p>Consider an order-items table.</p>
          <p>order_items</p>
          <p>order_id</p>
          <p>product_id</p>
          <p>quantity</p>
          <p>501</p>
          <p>101</p>
          <p>2</p>
          <p>501</p>
          <p>102</p>
          <p>1</p>
          <p>502</p>
          <p>101</p>
          <p>3</p>
          <p>The combination of order_id and product_id might uniquely identify a product line within an order.</p>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`CREATE TABLE order_items ( order_id INTEGER, product_id INTEGER, quantity INTEGER, PRIMARY KEY (order_id, product_id) );`}</code>
            </pre>
          </div>
          <p>However, if the business permits the same product to appear in multiple separate lines in an order, a separate order_item_id may be more appropriate.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">2.6 Relationships in relational databases</h3>
          <p>There are three common relationship types.</p>
          <p>A. One-to-one relationship</p>
          <p>One record in one table is associated with at most one record in another table.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Example:</h4>
          <p>users | | 1:1 | user_profiles</p>
          <p>A user may have one separate profile record.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">A unique foreign key can enforce the relationship:</h4>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`CREATE TABLE user_profiles ( profile_id INTEGER PRIMARY KEY, user_id INTEGER UNIQUE REFERENCES users(user_id), biography TEXT );`}</code>
            </pre>
          </div>
          <p>B. One-to-many relationship</p>
          <p>One record in the parent table can be associated with many records in the child table.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Example:</h4>
          <p>Customer | | 1 | |------ Many Orders</p>
          <p>One customer may place multiple orders.</p>
          <p>This is a very common relational database relationship.</p>
          <p>C. Many-to-many relationship</p>
          <p>Many records from one table can be associated with many records from another table.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Example:</h4>
          <p>Students | | student_courses | | Courses</p>
          <p>One student may enroll in many courses, and one course may have many students.</p>
          <p>A junction table stores the relationship.</p>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`CREATE TABLE student_courses ( student_id INTEGER REFERENCES students(student_id), course_id INTEGER REFERENCES courses(course_id), enrollment_date DATE, PRIMARY KEY (student_id, course_id) );`}</code>
            </pre>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">2.7 Entity Relationship Diagrams (ERDs)</h3>
          <p>An Entity Relationship Diagram represents entities, attributes, and their relationships.</p>
          <div className="my-3 p-3 rounded-xl bg-orange-50/60 border border-orange-200/80 flex items-center justify-between gap-3 text-xs">
            <div className="font-semibold text-stone-800 flex items-center gap-2"><span>&#128279;</span> <span>Lenda Dashboard - The Ultimate SQL Practice Platform</span></div>
            <a href="https://images.openai.com/static-rsc-4/FL6d7ttmzyHMbm5-tVzdoP9zf-Mi57UJpk1DyFrE-S2nqGGeWV4cFudUITCdeJFbvglckFYHcbIo0_dg00RclNvFRAwyDIVDPSFocp85lfbWBv0Cl4UFf-NJLfd28lq8_jxOWE-b2Np1lT-Cq4D4uMCVeFJsouJlpeMQ_WLt3k4?purpose=inline" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 font-bold inline-flex items-center gap-1 cursor-pointer">View Resource &rarr;</a>
          </div>
          <div className="my-3 p-3 rounded-xl bg-orange-50/60 border border-orange-200/80 flex items-center justify-between gap-3 text-xs">
            <div className="font-semibold text-stone-800 flex items-center gap-2"><span>&#128279;</span> <span>top-sql.com</span></div>
            <a href="https://top-sql.com/?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 font-bold inline-flex items-center gap-1 cursor-pointer">View Resource &rarr;</a>
          </div>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">For an e-commerce database:</h4>
          <p>CUSTOMERS ----------- customer_id PK name email city 1 | | places | N ORDERS ----------- order_id PK customer_id FK order_date status 1 | | contains | N ORDER_ITEMS ----------- order_item_id PK order_id FK product_id FK quantity unit_price N | | references | 1 PRODUCTS ----------- product_id PK product_name category_id FK price</p>
          <p>A customer can place many orders. An order can contain many order items. Each order item references a product.</p>
          <p>This ERD helps engineers understand the database before writing queries.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">2.8 Database normalization</h3>
          <p>Normalization is the process of organizing relational data to reduce unnecessary duplication and avoid data modification problems.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Consider a poorly designed table:</h4>
          <p>order_id</p>
          <p>customer_name</p>
          <p>customer_city</p>
          <p>product</p>
          <p>amount</p>
          <p>501</p>
          <p>Rahul</p>
          <p>Pune</p>
          <p>Laptop</p>
          <p>50000</p>
          <p>502</p>
          <p>Rahul</p>
          <p>Pune</p>
          <p>Mouse</p>
          <p>500</p>
          <p>503</p>
          <p>Priya</p>
          <p>Mumbai</p>
          <p>Mobile</p>
          <p>20000</p>
          <p>Customer information is repeated across multiple orders.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">This creates possible problems:</h4>
          <p>Updating Rahul's city may require changing several rows.</p>
          <p>Deleting one order could accidentally remove the only copy of information about a customer.</p>
          <p>Adding a customer without an order may be difficult.</p>
          <p>These are examples of data anomalies.</p>
          <p>First Normal Form (1NF)</p>
          <p>A table should have atomic attribute values under the chosen relational model, with no repeating groups represented within an individual field.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Bad design:</h4>
          <p>order_id</p>
          <p>products</p>
          <p>501</p>
          <p>Laptop, Mouse, Keyboard</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Better design:</h4>
          <p>order_id</p>
          <p>product</p>
          <p>501</p>
          <p>Laptop</p>
          <p>501</p>
          <p>Mouse</p>
          <p>501</p>
          <p>Keyboard</p>
          <p>Each product is represented separately.</p>
          <p>Second Normal Form (2NF)</p>
          <p>A table must satisfy 1NF and every non-key attribute must depend on the whole candidate key, not merely part of a composite candidate key.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Example:</h4>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Suppose a table has a composite key:</h4>
          <p>(order_id, product_id)</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">But it also stores:</h4>
          <p>product_name quantity</p>
          <p>product_name depends only on product_id, not on the entire composite key.</p>
          <p>That is a partial dependency.</p>
          <p>Move product information to a separate products table.</p>
          <p>Third Normal Form (3NF)</p>
          <p>A table must satisfy 2NF and non-key attributes should not depend transitively on a candidate key.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Example:</h4>
          <p>employee_id employee_name department_id department_name</p>
          <p>If department_name depends on department_id rather than directly on employee_id, the data has a transitive dependency.</p>
          <p>Move department information into a separate department table.</p>
          <p>Normalization summary</p>
          <p>Normal form</p>
          <p>Main goal</p>
          <p>1NF</p>
          <p>Atomic values and no repeating groups</p>
          <p>2NF</p>
          <p>Remove partial dependencies</p>
          <p>3NF</p>
          <p>Remove transitive dependencies</p>
          <p>Higher normal forms, including BCNF, 4NF, and 5NF, address more specialized dependency and decomposition requirements.</p>
          <p>Normalization vs denormalization</p>
          <p>Normalization reduces redundancy and helps maintain consistency.</p>
          <p>Denormalization deliberately introduces some redundancy to simplify queries or improve analytical performance.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">For example:</h4>
          <p>An OLTP database might separate customers, orders, and products.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">A reporting system might create an integrated sales table containing:</h4>
          <p>order_id customer_name product_name quantity revenue order_date</p>
          <p>This makes analytical queries simpler, although the derived data must be maintained correctly.</p>
          <p>A Data Engineer needs to understand when normalized operational models and denormalized analytical models are appropriate.</p>
        </div>
      </section>
      {"/* SECTION 3: Database Schemas and Table Structures */"}
      <section id="section-3" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 3
          </span>
          <span className="text-xs font-mono text-stone-500">Schema Engineering & Keys</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          3. Database Schemas and Table Structures
        </h2>
        <div className="space-y-4 text-stone-700 leading-relaxed text-sm sm:text-base">
          <p>A database schema defines how objects are organized and how tables are structured.</p>
          <p>Good schema design is essential because it affects query performance, consistency, and maintainability.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">3.1 Creating a database</h3>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">PostgreSQL example:</h4>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`CREATE DATABASE ecommerce_db;`}</code>
            </pre>
          </div>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Connect to the database through psql:</h4>
          <p>\c ecommerce_db</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Create a schema:</h4>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`CREATE SCHEMA sales;`}</code>
            </pre>
          </div>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Create a table inside the schema:</h4>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`CREATE TABLE sales.customers ( customer_id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY, customer_name VARCHAR(100) NOT NULL, email VARCHAR(150) UNIQUE NOT NULL, city VARCHAR(80), created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP );`}</code>
            </pre>
          </div>
          <p>Notice the different data types.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">3.2 Important SQL data types</h3>
          <p>Data type</p>
          <p>Usage</p>
          <p>Example</p>
          <p>SMALLINT</p>
          <p>Small integers</p>
          <p>100</p>
          <p>INTEGER</p>
          <p>Whole numbers</p>
          <p>2500</p>
          <p>BIGINT</p>
          <p>Large integers</p>
          <p>Large transaction IDs</p>
          <p>NUMERIC(p,s)</p>
          <p>Exact decimal values</p>
          <p>NUMERIC(12,2)</p>
          <p>REAL</p>
          <p>Approximate floating-point</p>
          <p>Sensor readings</p>
          <p>DOUBLE PRECISION</p>
          <p>Higher-precision floating-point</p>
          <p>Scientific measurements</p>
          <p>VARCHAR(n)</p>
          <p>Variable-length text with limit</p>
          <p>Name</p>
          <p>TEXT</p>
          <p>Text without a declared length limit</p>
          <p>Description</p>
          <p>BOOLEAN</p>
          <p>True or false</p>
          <p>Payment flag</p>
          <p>DATE</p>
          <p>Calendar date</p>
          <p>2026-11-09</p>
          <p>TIMESTAMP</p>
          <p>Date and time without time zone</p>
          <p>Event timestamp</p>
          <p>TIMESTAMPTZ</p>
          <p>Timestamp with time-zone handling</p>
          <p>Transaction time</p>
          <p>JSON</p>
          <p>JSON data</p>
          <p>API response</p>
          <p>JSONB</p>
          <p>Binary-processed JSON representation</p>
          <p>Flexible metadata</p>
          <p>UUID</p>
          <p>Universally unique identifier</p>
          <p>Record ID</p>
          <p>For financial amounts, PostgreSQL NUMERIC is generally preferable to floating-point types because it provides exact decimal arithmetic within its declared precision and scale.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">3.3 Constraints</h3>
          <p>Constraints enforce business and data integrity rules at the database level.</p>
          <p>PRIMARY KEY</p>
          <p>customer_id INTEGER PRIMARY KEY</p>
          <p>Uniquely identifies each row and disallows NULL.</p>
          <p>FOREIGN KEY</p>
          <p>customer_id INTEGER REFERENCES sales.customers(customer_id)</p>
          <p>Maintains referential integrity.</p>
          <p>NOT NULL</p>
          <p>customer_name VARCHAR(100) NOT NULL</p>
          <p>Prevents NULL values.</p>
          <p>UNIQUE</p>
          <p>email VARCHAR(150) UNIQUE</p>
          <p>Prevents duplicate non-NULL values under PostgreSQL's default unique constraint behavior.</p>
          <p>CHECK</p>
          <p>price NUMERIC(12,2) CHECK (price &gt;= 0)</p>
          <p>Validates that the price is nonnegative.</p>
          <p>DEFAULT</p>
          <p>status VARCHAR(20) DEFAULT 'PENDING'</p>
          <p>Provides a default when no value is supplied.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">3.4 Creating an e-commerce schema</h3>
          <p>We will use a common dataset throughout the remaining module.</p>
          <p>Execute the following PostgreSQL SQL in a new practice database.</p>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`CREATE SCHEMA IF NOT EXISTS ecommerce; CREATE TABLE ecommerce.customers ( customer_id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY, customer_name VARCHAR(100) NOT NULL, email VARCHAR(150) UNIQUE NOT NULL, city VARCHAR(80), registration_date DATE NOT NULL DEFAULT CURRENT_DATE ); CREATE TABLE ecommerce.categories ( category_id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY, category_name VARCHAR(100) NOT NULL UNIQUE ); CREATE TABLE ecommerce.products ( product_id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY, product_name VARCHAR(150) NOT NULL, category_id BIGINT REFERENCES ecommerce.categories(category_id), price NUMERIC(12,2) NOT NULL CHECK (price >= 0), stock_quantity INTEGER NOT NULL DEFAULT 0 CHECK (stock_quantity >= 0) ); CREATE TABLE ecommerce.orders ( order_id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY, customer_id BIGINT NOT NULL REFERENCES ecommerce.customers(customer_id), order_date TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP, status VARCHAR(30) NOT NULL DEFAULT 'PENDING', total_amount NUMERIC(12,2) NOT NULL DEFAULT 0 CHECK (total_amount >= 0) ); CREATE TABLE ecommerce.order_items ( order_item_id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY, order_id BIGINT NOT NULL REFERENCES ecommerce.orders(order_id), product_id BIGINT NOT NULL REFERENCES ecommerce.products(product_id), quantity INTEGER NOT NULL CHECK (quantity > 0), unit_price NUMERIC(12,2) NOT NULL CHECK (unit_price >= 0) ); CREATE TABLE ecommerce.payments ( payment_id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY, order_id BIGINT NOT NULL REFERENCES ecommerce.orders(order_id), payment_date TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP, payment_method VARCHAR(30), payment_status VARCHAR(30) NOT NULL, amount NUMERIC(12,2) NOT NULL CHECK (amount >= 0) );`}</code>
            </pre>
          </div>
          <p>This database represents six related business entities.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">A few important observations:</h4>
          <p>Customers and orders have a one-to-many relationship.</p>
          <p>Orders and order items have a one-to-many relationship.</p>
          <p>Products and order items have a one-to-many relationship.</p>
          <p>Orders and products therefore have a many-to-many relationship through order_items.</p>
          <p>Payments reference orders, allowing a separate payment history.</p>
          <p>For a more advanced real-world payment model, multiple payment attempts, partial payments, refunds, and payment-provider transaction IDs should also be modeled.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">3.5 Insert sample data</h3>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`INSERT INTO ecommerce.customers (customer_name, email, city) VALUES ('Rahul', 'rahul@example.com', 'Pune'), ('Priya', 'priya@example.com', 'Mumbai'), ('Amit', 'amit@example.com', 'Delhi'), ('Neha', 'neha@example.com', 'Hyderabad'), ('Ananya', 'ananya@example.com', 'Pune'); INSERT INTO ecommerce.categories (category_name) VALUES ('Electronics'), ('Accessories'), ('Computers'); INSERT INTO ecommerce.products (product_name, category_id, price, stock_quantity) VALUES ('Laptop', 3, 50000, 25), ('Mobile', 1, 20000, 50), ('Keyboard', 2, 1500, 100), ('Mouse', 2, 700, 150), ('Monitor', 1, 12000, 30), ('Headphones', 1, 2500, 80); INSERT INTO ecommerce.orders (customer_id, order_date, status, total_amount) VALUES (1, '2026-11-01 10:00:00+05:30', 'COMPLETED', 51500), (2, '2026-11-02 11:30:00+05:30', 'COMPLETED', 20000), (1, '2026-11-03 15:00:00+05:30', 'COMPLETED', 2200), (3, '2026-11-04 12:00:00+05:30', 'PENDING', 2500), (4, '2026-11-05 16:00:00+05:30', 'COMPLETED', 12000), (5, '2026-11-06 09:00:00+05:30', 'CANCELLED', 2500); INSERT INTO ecommerce.order_items (order_id, product_id, quantity, unit_price) VALUES (1, 1, 1, 50000), (1, 3, 1, 1500), (2, 2, 1, 20000), (3, 4, 1, 700), (3, 3, 1, 1500), (4, 6, 1, 2500), (5, 5, 1, 12000), (6, 6, 1, 2500); INSERT INTO ecommerce.payments (order_id, payment_method, payment_status, amount) VALUES (1, 'CARD', 'SUCCESS', 51500), (2, 'UPI', 'SUCCESS', 20000), (3, 'CARD', 'SUCCESS', 2200), (4, 'UPI', 'PENDING', 2500), (5, 'NETBANKING', 'SUCCESS', 12000), (6, 'UPI', 'REFUNDED', 2500);`}</code>
            </pre>
          </div>
          <p>The records are illustrative and intended for learning SQL.</p>
          <p>You now have a reusable database for the practical examples in this module.</p>
        </div>
      </section>
      {"/* SECTION 4: DDL, DML, DQL, and DCL */"}
      <section id="section-4" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 4
          </span>
          <span className="text-xs font-mono text-stone-500">SQL Language Categories</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          4. DDL, DML, DQL, and DCL
        </h2>
        <div className="space-y-4 text-stone-700 leading-relaxed text-sm sm:text-base">
          <p>SQL commands are classified according to the operations they perform.</p>
          <p>Understanding these categories helps organize database administration, application development, and data engineering work.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">There are four main categories in this section:</h4>
          <p>Data Definition Language (DDL).</p>
          <p>Data Manipulation Language (DML).</p>
          <p>Data Query Language (DQL).</p>
          <p>Data Control Language (DCL).</p>
          <p>Transaction Control Language (TCL) is also important and will be covered with transaction management.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">4.1 Data Definition Language (DDL)</h3>
          <p>DDL commands define or modify database structures.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Common commands:</h4>
          <p>CREATE.</p>
          <p>ALTER.</p>
          <p>DROP.</p>
          <p>TRUNCATE.</p>
          <p>CREATE</p>
          <p>Creates database objects such as schemas, tables, views, and indexes.</p>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`CREATE TABLE ecommerce.suppliers ( supplier_id BIGINT PRIMARY KEY, supplier_name VARCHAR(100) NOT NULL, contact_email VARCHAR(150) );`}</code>
            </pre>
          </div>
          <p>ALTER</p>
          <p>Changes an existing database object's structure.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Add a column:</h4>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`ALTER TABLE ecommerce.products ADD COLUMN description TEXT;`}</code>
            </pre>
          </div>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Change a column's data type:</h4>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`ALTER TABLE ecommerce.products ALTER COLUMN product_name TYPE VARCHAR(200);`}</code>
            </pre>
          </div>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Rename a column:</h4>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`ALTER TABLE ecommerce.products RENAME COLUMN description TO product_description;`}</code>
            </pre>
          </div>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Add a constraint:</h4>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`ALTER TABLE ecommerce.products ADD CONSTRAINT positive_price CHECK (price >= 0);`}</code>
            </pre>
          </div>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Remove a column:</h4>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`ALTER TABLE ecommerce.products DROP COLUMN product_description;`}</code>
            </pre>
          </div>
          <p>Schema changes in production should be planned carefully because they can affect applications, locks, and downstream pipelines.</p>
          <p>DROP</p>
          <p>Removes a database object.</p>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`DROP TABLE ecommerce.suppliers;`}</code>
            </pre>
          </div>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">To avoid an error when the table does not exist:</h4>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`DROP TABLE IF EXISTS ecommerce.suppliers;
DROP removes the object itself, including its stored data.`}</code>
            </pre>
          </div>
          <p>TRUNCATE</p>
          <p>Removes all rows from a table while retaining its table structure.</p>
          <p>TRUNCATE TABLE ecommerce.order_items;</p>
          <p>In PostgreSQL, TRUNCATE can also be used with RESTART IDENTITY and CASCADE, but these options must be used carefully.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Example:</h4>
          <p>TRUNCATE TABLE ecommerce.order_items RESTART IDENTITY;</p>
          <p>This empties the table and resets owned identity sequences.</p>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`DROP vs TRUNCATE vs DELETE`}</code>
            </pre>
          </div>
          <p>Feature</p>
          <p>DELETE</p>
          <p>TRUNCATE</p>
          <p>DROP</p>
          <p>Removes rows</p>
          <p>Yes</p>
          <p>All rows</p>
          <p>Entire table</p>
          <p>Supports WHERE</p>
          <p>Yes</p>
          <p>No</p>
          <p>No</p>
          <p>Keeps table structure</p>
          <p>Yes</p>
          <p>Yes</p>
          <p>No</p>
          <p>Can reset identity</p>
          <p>Not automatically</p>
          <p>Optional in PostgreSQL</p>
          <p>Object removed</p>
          <p>SQL logging behavior</p>
          <p>Row-level changes</p>
          <p>Specialized operation</p>
          <p>DDL operation</p>
          <p>PostgreSQL supports transactional execution of these operations under its normal transaction model, subject to constraints and dependencies.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">4.2 Data Manipulation Language (DML)</h3>
          <p>DML commands modify records stored in database tables.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Common commands:</h4>
          <p>INSERT.</p>
          <p>UPDATE.</p>
          <p>DELETE.</p>
          <p>MERGE (supported with dialect-specific capabilities).</p>
          <p>INSERT</p>
          <p>Adds new records.</p>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`INSERT INTO ecommerce.customers ( customer_name, email, city ) VALUES ( 'Karan', 'karan@example.com', 'Bengaluru' );`}</code>
            </pre>
          </div>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Insert multiple records:</h4>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`INSERT INTO ecommerce.customers (customer_name, email, city) VALUES ('Riya', 'riya@example.com', 'Chennai'), ('Arjun', 'arjun@example.com', 'Jaipur'), ('Meera', 'meera@example.com', 'Kochi');`}</code>
            </pre>
          </div>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Insert records from another query:</h4>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`INSERT INTO ecommerce.customers (customer_name, email, city) SELECT name, email, city FROM staging_customers WHERE email IS NOT NULL;`}</code>
            </pre>
          </div>
          <p>This pattern is frequently used in data ingestion.</p>
          <p>UPDATE</p>
          <p>Modifies existing records.</p>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`UPDATE ecommerce.products SET price = 55000 WHERE product_id = 1;`}</code>
            </pre>
          </div>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Update multiple columns:</h4>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`UPDATE ecommerce.products SET price = 52000, stock_quantity = 30 WHERE product_id = 1;`}</code>
            </pre>
          </div>
          <div className="rounded-xl border border-orange-200 bg-orange-50/70 p-4 text-xs sm:text-sm text-orange-950 leading-relaxed my-4">
            Important: Without a WHERE condition, an UPDATE can modify every row.
          </div>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Example:</h4>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`UPDATE ecommerce.products SET price = price * 1.10;`}</code>
            </pre>
          </div>
          <p>This increases all product prices by 10%.</p>
          <p>Always check the target records before executing large updates.</p>
          <p>DELETE</p>
          <p>Deletes records.</p>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`DELETE FROM ecommerce.customers WHERE customer_id = 5;`}</code>
            </pre>
          </div>
          <p>However, this may fail if the customer is referenced by another table through a foreign key.</p>
          <p>Referential integrity rules determine whether related records can be deleted.</p>
          <p>MERGE</p>
          <p>MERGE combines conditional insertion, updating, and deletion behavior.</p>
          <p>It is useful for synchronization and upsert workflows.</p>
          <p>PostgreSQL supports MERGE in current versions.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Example:</h4>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`MERGE INTO ecommerce.products AS target USING ( VALUES (1, 'Laptop', 53000::NUMERIC, 28) ) AS source ( product_id, product_name, price, stock_quantity ) ON target.product_id = source.product_id WHEN MATCHED THEN UPDATE SET product_name = source.product_name, price = source.price, stock_quantity = source.stock_quantity WHEN NOT MATCHED THEN INSERT ( product_id, product_name, price, stock_quantity ) VALUES ( source.product_id, source.product_name, source.price, source.stock_quantity );`}</code>
            </pre>
          </div>
          <p>This example is for understanding the concept. In production, identity handling and the precise business key need to be designed correctly.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">4.3 Data Query Language (DQL)</h3>
          <p>DQL focuses on retrieving information.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">The primary command is:</h4>
          <p>SELECT</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Example:</h4>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`SELECT * FROM ecommerce.customers;`}</code>
            </pre>
          </div>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Select specific fields:</h4>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`SELECT customer_id, customer_name, city FROM ecommerce.customers;`}</code>
            </pre>
          </div>
          <p>Avoid using SELECT * in production pipeline transformations when only a few columns are needed.</p>
          <p>Selecting only required columns reduces unnecessary data reading and makes the query's dependencies clearer.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">4.4 Data Control Language (DCL)</h3>
          <p>DCL manages access permissions.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Common commands:</h4>
          <p>GRANT.</p>
          <p>REVOKE.</p>
          <p>GRANT</p>
          <p>Provides permissions to a database user or role.</p>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`GRANT SELECT ON ecommerce.customers TO analyst_role;`}</code>
            </pre>
          </div>
          <p>This gives the role permission to read customer records.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Grant permissions on multiple objects:</h4>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`GRANT SELECT, INSERT ON ecommerce.orders TO pipeline_role;`}</code>
            </pre>
          </div>
          <p>REVOKE</p>
          <p>Removes previously granted permissions.</p>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`REVOKE INSERT ON ecommerce.orders FROM pipeline_role;`}</code>
            </pre>
          </div>
          <p>Why DCL matters in Data Engineering</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">A data platform frequently has multiple users:</h4>
          <p>Role</p>
          <p>Typical permissions</p>
          <p>Data Engineer</p>
          <p>Read, write, and manage approved pipeline objects</p>
          <p>Data Analyst</p>
          <p>Read analytical datasets</p>
          <p>Application Service</p>
          <p>Perform necessary transactional operations</p>
          <p>Database Administrator</p>
          <p>Manage the database and its security</p>
          <p>Reporting Service</p>
          <p>Read approved reporting views</p>
          <p>Do not provide every user with unrestricted database access.</p>
          <p>Use role-based access control and the principle of least privilege.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">4.5 Transaction Control Language (TCL)</h3>
          <p>Transaction commands control how database changes are committed or rolled back.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Common commands:</h4>
          <p>BEGIN.</p>
          <p>COMMIT.</p>
          <p>ROLLBACK.</p>
          <p>SAVEPOINT.</p>
          <p>These become particularly important in Section 17.</p>
          <p>Overall command classification</p>
          <p>Category</p>
          <p>Commands</p>
          <p>Main purpose</p>
          <p>DDL</p>
          <p>CREATE, ALTER, DROP, TRUNCATE</p>
          <p>Database structure</p>
          <p>DML</p>
          <p>INSERT, UPDATE, DELETE, MERGE</p>
          <p>Modify records</p>
          <p>DQL</p>
          <p>SELECT</p>
          <p>Retrieve information</p>
          <p>DCL</p>
          <p>GRANT, REVOKE</p>
          <p>Manage permissions</p>
          <p>TCL</p>
          <p>BEGIN, COMMIT, ROLLBACK, SAVEPOINT</p>
          <p>Manage transactions</p>
        </div>
      </section>
      {"/* SECTION 5: SELECT, INSERT, UPDATE, and DELETE */"}
      <section id="section-5" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 5
          </span>
          <span className="text-xs font-mono text-stone-500">CRUD Data Manipulation</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          5. SELECT, INSERT, UPDATE, and DELETE
        </h2>
        <div className="space-y-4 text-stone-700 leading-relaxed text-sm sm:text-base">
          <p>These are among the most frequently used SQL commands.</p>
          <p>A Data Engineer must understand not just their syntax but also how to execute them safely and efficiently.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">5.1 SELECT — Retrieving data</h3>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Basic syntax:</h4>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`SELECT column1, column2 FROM table_name;`}</code>
            </pre>
          </div>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Example:</h4>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`SELECT product_id, product_name, price FROM ecommerce.products;`}</code>
            </pre>
          </div>
          <p>Selecting all columns</p>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`SELECT * FROM ecommerce.products;`}</code>
            </pre>
          </div>
          <p>This is useful during initial exploration but should be avoided in performance-sensitive queries when not all columns are required.</p>
          <p>DISTINCT</p>
          <p>Returns distinct combinations of selected columns.</p>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`SELECT DISTINCT city FROM ecommerce.customers;`}</code>
            </pre>
          </div>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Find distinct order statuses:</h4>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`SELECT DISTINCT status FROM ecommerce.orders;`}</code>
            </pre>
          </div>
          <p>LIMIT</p>
          <p>Restricts how many records are returned.</p>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`SELECT * FROM ecommerce.orders LIMIT 5;`}</code>
            </pre>
          </div>
          <p>For large tables, pagination often requires a stable ordering.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Example:</h4>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`SELECT * FROM ecommerce.orders ORDER BY order_id LIMIT 10 OFFSET 20;`}</code>
            </pre>
          </div>
          <p>This skips the first 20 records and returns the next 10.</p>
          <p>For deep pagination over large datasets, keyset pagination using indexed columns can perform better than increasingly large OFFSET values.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Example:</h4>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`SELECT * FROM ecommerce.orders WHERE order_id > 5000 ORDER BY order_id LIMIT 100;`}</code>
            </pre>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">5.2 INSERT — Adding data</h3>
          <p>You have already seen individual and multi-row inserts.</p>
          <p>Another important pattern is INSERT ... RETURNING.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">PostgreSQL example:</h4>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`INSERT INTO ecommerce.customers (customer_name, email, city) VALUES ('Sahil', 'sahil@example.com', 'Pune') RETURNING customer_id, customer_name;`}</code>
            </pre>
          </div>
          <p>This returns information about the newly inserted row.</p>
          <p>It is useful when a Python application needs the generated database identifier.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">5.3 UPDATE — Modifying data</h3>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Example:</h4>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`UPDATE ecommerce.orders SET status = 'COMPLETED' WHERE order_id = 4;`}</code>
            </pre>
          </div>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Update values using another table:</h4>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`UPDATE ecommerce.products AS p SET stock_quantity = stock_quantity - oi.quantity FROM ecommerce.order_items AS oi WHERE p.product_id = oi.product_id AND oi.order_id = 1;`}</code>
            </pre>
          </div>
          <p>This illustrates updating product inventory based on an order.</p>
          <div className="rounded-xl border border-orange-200 bg-orange-50/70 p-4 text-xs sm:text-sm text-orange-950 leading-relaxed my-4">
            Important: This example is appropriate only when the order-processing workflow is designed to handle inventory deductions exactly once. Repeating the statement may deduct stock repeatedly.
          </div>
          <p>Production inventory logic needs transaction boundaries and an idempotent order-fulfillment design.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">5.4 DELETE — Removing data</h3>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`DELETE FROM ecommerce.orders WHERE order_id = 6;`}</code>
            </pre>
          </div>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Use RETURNING to inspect deleted records:</h4>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`DELETE FROM ecommerce.orders WHERE status = 'CANCELLED' RETURNING order_id, status;`}</code>
            </pre>
          </div>
          <p>This returns the records removed by the statement.</p>
          <p>Soft deletes vs hard deletes</p>
          <p>Hard delete: Removes the database record.</p>
          <p>Soft delete: Marks a record as inactive or deleted without physically removing it.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Example:</h4>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`ALTER TABLE ecommerce.customers ADD COLUMN deleted_at TIMESTAMPTZ;`}</code>
            </pre>
          </div>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Soft-delete a customer:</h4>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`UPDATE ecommerce.customers SET deleted_at = CURRENT_TIMESTAMP WHERE customer_id = 4;`}</code>
            </pre>
          </div>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Query active customers:</h4>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`SELECT * FROM ecommerce.customers WHERE deleted_at IS NULL;`}</code>
            </pre>
          </div>
          <p>Soft deletes are useful when organizations need retention, recovery, auditability, or historical analysis.</p>
        </div>
      </section>
      {"/* SECTION 6: Filtering, Sorting, and Aggregation */"}
      <section id="section-6" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 6
          </span>
          <span className="text-xs font-mono text-stone-500">Aggregation & Slicing</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          6. Filtering, Sorting, and Aggregation
        </h2>
        <div className="space-y-4 text-stone-700 leading-relaxed text-sm sm:text-base">
          <p>SQL becomes particularly powerful when retrieving only relevant information and summarizing it.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">6.1 WHERE clause</h3>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`WHERE filters records according to a condition.`}</code>
            </pre>
          </div>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Example:</h4>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`SELECT * FROM ecommerce.products WHERE price > 10000;`}</code>
            </pre>
          </div>
          <p>This returns products costing more than ₹10,000.</p>
          <p>Multiple conditions</p>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`SELECT * FROM ecommerce.products WHERE price > 1000 AND stock_quantity > 20;
OR
SELECT * FROM ecommerce.customers WHERE city = 'Pune' OR city = 'Mumbai';`}</code>
            </pre>
          </div>
          <p>BETWEEN</p>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`SELECT * FROM ecommerce.products WHERE price BETWEEN 1000 AND 20000;`}</code>
            </pre>
          </div>
          <p>BETWEEN includes both boundary values.</p>
          <p>IN</p>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`SELECT * FROM ecommerce.orders WHERE status IN ('COMPLETED', 'PENDING');`}</code>
            </pre>
          </div>
          <p>LIKE</p>
          <p>Search using patterns.</p>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`SELECT * FROM ecommerce.customers WHERE customer_name LIKE 'R%';`}</code>
            </pre>
          </div>
          <p>This retrieves customer names beginning with R.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Important patterns:</h4>
          <p>Pattern</p>
          <p>Meaning</p>
          <p>'R%'</p>
          <p>Starts with R</p>
          <p>'%a'</p>
          <p>Ends with a</p>
          <p>'%ah%'</p>
          <p>Contains ah</p>
          <p>'_a%'</p>
          <p>Second character is a</p>
          <p>PostgreSQL also supports ILIKE for case-insensitive pattern matching.</p>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`SELECT * FROM ecommerce.customers WHERE customer_name ILIKE 'r%';`}</code>
            </pre>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">6.2 NULL values</h3>
          <p>NULL represents missing or unknown information.</p>
          <p>It does not mean zero or an empty string.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">A common mistake is:</h4>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`SELECT * FROM ecommerce.customers WHERE city = NULL;`}</code>
            </pre>
          </div>
          <p>This is incorrect for NULL testing.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Use:</h4>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`SELECT * FROM ecommerce.customers WHERE city IS NULL;`}</code>
            </pre>
          </div>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">To find non-NULL values:</h4>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`SELECT * FROM ecommerce.customers WHERE city IS NOT NULL;`}</code>
            </pre>
          </div>
          <p>COALESCE</p>
          <p>COALESCE returns the first non-NULL value.</p>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`SELECT customer_name, COALESCE(city, 'Unknown') AS city FROM ecommerce.customers;`}</code>
            </pre>
          </div>
          <p>NULLIF</p>
          <p>NULLIF(a, b) returns NULL when both arguments are equal.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Example:</h4>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`SELECT revenue / NULLIF(order_count, 0) AS average_order_value FROM sales_summary;`}</code>
            </pre>
          </div>
          <p>This avoids division by zero by returning NULL when the denominator is zero.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">6.3 ORDER BY</h3>
          <p>Sort records.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Ascending:</h4>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`SELECT * FROM ecommerce.products ORDER BY price ASC;`}</code>
            </pre>
          </div>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Descending:</h4>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`SELECT * FROM ecommerce.products ORDER BY price DESC;`}</code>
            </pre>
          </div>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Sort by multiple columns:</h4>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`SELECT * FROM ecommerce.products ORDER BY category_id ASC, price DESC;`}</code>
            </pre>
          </div>
          <p>This sorts by category first, then by price within each category.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">6.4 GROUP BY</h3>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`GROUP BY combines records into groups according to one or more attributes.`}</code>
            </pre>
          </div>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Example:</h4>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`SELECT customer_id, COUNT(*) AS total_orders FROM ecommerce.orders GROUP BY customer_id;`}</code>
            </pre>
          </div>
          <p>This calculates how many orders each customer has placed.</p>
          <p>Aggregation functions</p>
          <p>Function</p>
          <p>Purpose</p>
          <p>COUNT()</p>
          <p>Count records or non-NULL values</p>
          <p>SUM()</p>
          <p>Calculate total</p>
          <p>AVG()</p>
          <p>Calculate average</p>
          <p>MIN()</p>
          <p>Find minimum</p>
          <p>MAX()</p>
          <p>Find maximum</p>
          <p>COUNT(DISTINCT ...)</p>
          <p>Count unique non-NULL values</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Example:</h4>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`SELECT COUNT(*) AS total_orders, SUM(total_amount) AS total_revenue, AVG(total_amount) AS average_order_value, MIN(total_amount) AS minimum_order, MAX(total_amount) AS maximum_order FROM ecommerce.orders;`}</code>
            </pre>
          </div>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">One important distinction:</h4>
          <p>COUNT(*)</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">counts rows, whereas:</h4>
          <p>COUNT(column_name)</p>
          <p>counts non-NULL values in that column.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">6.5 HAVING</h3>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`HAVING filters groups after aggregation.`}</code>
            </pre>
          </div>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Example:</h4>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`SELECT customer_id, COUNT(*) AS total_orders FROM ecommerce.orders GROUP BY customer_id HAVING COUNT(*) >= 2;`}</code>
            </pre>
          </div>
          <p>This returns customers who have at least two orders.</p>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`WHERE vs HAVING
WHERE`}</code>
            </pre>
          </div>
          <p>HAVING</p>
          <p>Filters individual rows</p>
          <p>Filters aggregated groups</p>
          <p>Applied before grouping</p>
          <p>Applied after grouping</p>
          <p>Commonly used with ordinary conditions</p>
          <p>Commonly used with aggregate conditions</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Example combining both:</h4>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`SELECT customer_id, SUM(total_amount) AS spending FROM ecommerce.orders WHERE status = 'COMPLETED' GROUP BY customer_id HAVING SUM(total_amount) > 5000;`}</code>
            </pre>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">6.6 SQL execution order</h3>
          <p>The order in which SQL is written is not the logical order in which its query clauses are processed.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">A simplified logical processing order for a SELECT query is:</h4>
          <p>Logical SQL query processing</p>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`FROM / JOIN`}</code>
            </pre>
          </div>
          <p>Identify the source tables and combine records.</p>
          <p>WHERE</p>
          <p>Filter individual rows.</p>
          <p>GROUP BY</p>
          <p>Form groups.</p>
          <p>HAVING</p>
          <p>Filter groups.</p>
          <p>SELECT</p>
          <p>Calculate selected expressions.</p>
          <p>DISTINCT</p>
          <p>Remove duplicate result rows.</p>
          <p>ORDER BY</p>
          <p>Sort output.</p>
          <p>LIMIT / OFFSET</p>
          <p>Restrict the final result.</p>
          <p>Logical explanation; actual physical execution depends on the database optimizer.</p>
          <p>This is especially useful when understanding why a SELECT alias can be used in ORDER BY but generally cannot be referenced in WHERE at the same query level.</p>
        </div>
      </section>
      {"/* SECTION 7: SQL Joins — Inner, Outer, Cross, and Self Joins */"}
      <section id="section-7" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 7
          </span>
          <span className="text-xs font-mono text-stone-500">Relational Joins & Fanout</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          7. SQL Joins — Inner, Outer, Cross, and Self Joins
        </h2>
        <div className="space-y-4 text-stone-700 leading-relaxed text-sm sm:text-base">
          <p>Joins are fundamental to relational databases because business data is distributed across multiple related tables.</p>
          <p>A Data Engineer must be comfortable combining datasets accurately.</p>
          <p>Let's use these two tables.</p>
          <p>customers</p>
          <p>customer_id</p>
          <p>customer_name</p>
          <p>city</p>
          <p>1</p>
          <p>Rahul</p>
          <p>Pune</p>
          <p>2</p>
          <p>Priya</p>
          <p>Mumbai</p>
          <p>3</p>
          <p>Amit</p>
          <p>Delhi</p>
          <p>4</p>
          <p>Neha</p>
          <p>Hyderabad</p>
          <p>orders</p>
          <p>order_id</p>
          <p>customer_id</p>
          <p>amount</p>
          <p>101</p>
          <p>1</p>
          <p>2000</p>
          <p>102</p>
          <p>1</p>
          <p>3000</p>
          <p>103</p>
          <p>2</p>
          <p>1500</p>
          <p>104</p>
          <p>3</p>
          <p>5000</p>
          <p>Neha has not placed an order.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">7.1 INNER JOIN</h3>
          <p>Returns records with matching values in both tables.</p>
          <div className="my-3 p-3 rounded-xl bg-orange-50/60 border border-orange-200/80 flex items-center justify-between gap-3 text-xs">
            <div className="font-semibold text-stone-800 flex items-center gap-2"><span>&#128279;</span> <span>🛡️ Master SQL in 30 Days: Day 11 — The Concept of Joins 🔗 Inner vs. Outer Joins (Visual Guide) | by SkillStack_Official | Jan, 2026 | Medium</span></div>
            <a href="https://images.openai.com/static-rsc-4/abFlEQ_hDit9YhAVNqG07H0WXcHc-bMJra8_zy2M5-NCyhwdya5LBCLyvUlrKulaot66OrKvGEdwwEcLLcTz0qVHLWNQ1LpDZUxvQY2Rqp2nFqpiMEoFQHt9YEm_e-K1moyygJTSb7HeWfKRKD9mo7Um0B_XHEdnXUGv3hfgwLM?purpose=inline" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 font-bold inline-flex items-center gap-1 cursor-pointer">View Resource &rarr;</a>
          </div>
          <div className="my-3 p-3 rounded-xl bg-orange-50/60 border border-orange-200/80 flex items-center justify-between gap-3 text-xs">
            <div className="font-semibold text-stone-800 flex items-center gap-2"><span>&#128279;</span> <span>medium.com</span></div>
            <a href="https://medium.com/%40skillstack2025/%EF%B8%8F-master-sql-in-30-days-day-11-the-concept-of-joins-inner-vs-outer-joins-visual-guide-a261fd68b49a?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 font-bold inline-flex items-center gap-1 cursor-pointer">View Resource &rarr;</a>
          </div>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Example:</h4>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`SELECT c.customer_id, c.customer_name, o.order_id, o.amount FROM ecommerce.customers AS c INNER JOIN ecommerce.orders AS o ON c.customer_id = o.customer_id;`}</code>
            </pre>
          </div>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Output:</h4>
          <p>customer_name</p>
          <p>order_id</p>
          <p>amount</p>
          <p>Rahul</p>
          <p>101</p>
          <p>2000</p>
          <p>Rahul</p>
          <p>102</p>
          <p>3000</p>
          <p>Priya</p>
          <p>103</p>
          <p>1500</p>
          <p>Amit</p>
          <p>104</p>
          <p>5000</p>
          <p>Neha is excluded because she has no matching order.</p>
          <p>When to use INNER JOIN</p>
          <p>Combining customers and existing orders.</p>
          <p>Joining products and categories.</p>
          <p>Combining transactions and customer information.</p>
          <p>Building integrated analytical tables.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">7.2 LEFT JOIN</h3>
          <p>Returns all records from the left table and matching records from the right table.</p>
          <div className="my-3 p-3 rounded-xl bg-orange-50/60 border border-orange-200/80 flex items-center justify-between gap-3 text-xs">
            <div className="font-semibold text-stone-800 flex items-center gap-2"><span>&#128279;</span> <span>A beginner’s guide to 7 types of SQL JOINs | TablePlus</span></div>
            <a href="https://images.openai.com/static-rsc-4/HJP5AkJGreOJ7C7QidOqvMEwC5uwMVKtBdS-XC4Xe_pNZyLgAV9EC5x4RXzWZEhmFkp6fn2JKfShbmcmOMEG7LM9S9-OaslRP-A6aTgYebb2wnef6KyXaxOmAbeHcu51Uq7Z3HxpmR-kY0QMDOlN-PiJEgcsHxKRJB-P_ol3aFA?purpose=inline" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 font-bold inline-flex items-center gap-1 cursor-pointer">View Resource &rarr;</a>
          </div>
          <div className="my-3 p-3 rounded-xl bg-orange-50/60 border border-orange-200/80 flex items-center justify-between gap-3 text-xs">
            <div className="font-semibold text-stone-800 flex items-center gap-2"><span>&#128279;</span> <span>tableplus.com</span></div>
            <a href="https://tableplus.com/blog/2018/09/a-beginners-guide-to-seven-types-of-sql-joins.html?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 font-bold inline-flex items-center gap-1 cursor-pointer">View Resource &rarr;</a>
          </div>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Example:</h4>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`SELECT c.customer_name, o.order_id, o.amount FROM ecommerce.customers AS c LEFT JOIN ecommerce.orders AS o ON c.customer_id = o.customer_id;`}</code>
            </pre>
          </div>
          <p>Neha appears even though she has no order.</p>
          <p>Her order columns contain NULL.</p>
          <p>Find customers without orders</p>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`SELECT c.customer_id, c.customer_name FROM ecommerce.customers AS c LEFT JOIN ecommerce.orders AS o ON c.customer_id = o.customer_id WHERE o.order_id IS NULL;`}</code>
            </pre>
          </div>
          <p>This is a very common analytical pattern.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">7.3 RIGHT JOIN</h3>
          <p>Returns all rows from the right table and matching rows from the left table.</p>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`SELECT c.customer_name, o.order_id, o.amount FROM ecommerce.customers AS c RIGHT JOIN ecommerce.orders AS o ON c.customer_id = o.customer_id;`}</code>
            </pre>
          </div>
          <p>Every order is retained, even if a matching customer record does not exist. With an enforced non-NULL foreign key, such an unmatched order cannot exist in our example schema.</p>
          <p>RIGHT JOIN can generally be rewritten as LEFT JOIN by reversing the table order.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">7.4 FULL OUTER JOIN</h3>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Returns:</h4>
          <p>Matching rows.</p>
          <p>Unmatched rows from the left table.</p>
          <p>Unmatched rows from the right table.</p>
          <div className="my-3 p-3 rounded-xl bg-orange-50/60 border border-orange-200/80 flex items-center justify-between gap-3 text-xs">
            <div className="font-semibold text-stone-800 flex items-center gap-2"><span>&#128279;</span> <span>Different Types of SQL JOINs that You Must Know - StrataScratch</span></div>
            <a href="https://images.openai.com/static-rsc-4/ewpr4QPLJnWTEUg0JRINX0-w3dqimF-mEHXJCImtA5Q3bca4hyBvbXi1M1E7bc7CGWplGAcEz-DfP-Xl9heX604MVML3jJ7_Ns7JrMTLCxZQlfqoY25MtURuivAwJoPzNvJwjqn22Y5vnwyEFdfXz4q89pKlP0Z0S9RGhA9MNXU?purpose=inline" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 font-bold inline-flex items-center gap-1 cursor-pointer">View Resource &rarr;</a>
          </div>
          <div className="my-3 p-3 rounded-xl bg-orange-50/60 border border-orange-200/80 flex items-center justify-between gap-3 text-xs">
            <div className="font-semibold text-stone-800 flex items-center gap-2"><span>&#128279;</span> <span>stratascratch.com</span></div>
            <a href="https://www.stratascratch.com/blog/different-types-of-sql-joins-that-you-must-know?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 font-bold inline-flex items-center gap-1 cursor-pointer">View Resource &rarr;</a>
          </div>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Example:</h4>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`SELECT c.customer_name, o.order_id FROM ecommerce.customers AS c FULL OUTER JOIN ecommerce.orders AS o ON c.customer_id = o.customer_id;`}</code>
            </pre>
          </div>
          <p>This is useful when reconciling two datasets.</p>
          <p>For example, if one system contains customer records and another system contains customer activity, a full outer join helps identify records that exist in only one dataset.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">7.5 CROSS JOIN</h3>
          <p>Combines every row from the first table with every row from the second table.</p>
          <p>This creates a Cartesian product.</p>
          <p>Suppose table A contains 3 rows and table B contains 4 rows.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">The result contains:</h4>
          <p>\[ 3 \times 4 = 12 \text&#123; rows&#125; \]</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Example:</h4>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`SELECT c.customer_name, p.product_name FROM ecommerce.customers AS c CROSS JOIN ecommerce.products AS p;`}</code>
            </pre>
          </div>
          <p>This creates every possible customer-product combination.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Applications include:</h4>
          <p>Generating scenario combinations.</p>
          <p>Building date-product matrices.</p>
          <p>Creating test datasets.</p>
          <p>Calculating combinations of business dimensions.</p>
          <p>Be careful with large CROSS JOINs because they can create enormous result sets.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">7.6 SELF JOIN</h3>
          <p>A self join joins a table to itself.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Consider an employee hierarchy:</h4>
          <p>employees</p>
          <p>employee_id</p>
          <p>employee_name</p>
          <p>manager_id</p>
          <p>1</p>
          <p>CEO</p>
          <p>NULL</p>
          <p>2</p>
          <p>Rahul</p>
          <p>1</p>
          <p>3</p>
          <p>Priya</p>
          <p>1</p>
          <p>4</p>
          <p>Amit</p>
          <p>2</p>
          <p>Here, manager_id points to another employee in the same table.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Query:</h4>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`SELECT employee.employee_name AS employee, manager.employee_name AS manager FROM employees AS employee LEFT JOIN employees AS manager ON employee.manager_id = manager.employee_id;`}</code>
            </pre>
          </div>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Output:</h4>
          <p>employee</p>
          <p>manager</p>
          <p>CEO</p>
          <p>NULL</p>
          <p>Rahul</p>
          <p>CEO</p>
          <p>Priya</p>
          <p>CEO</p>
          <p>Amit</p>
          <p>Rahul</p>
          <p>SELF JOIN is frequently used for hierarchical and comparative data relationships.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">7.7 Multiple-table joins</h3>
          <p>Real data engineering queries often combine more than two tables.</p>
          <p>Example: Show customer names, order IDs, product names, quantities, and item revenue.</p>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`SELECT c.customer_name, o.order_id, p.product_name, oi.quantity, oi.quantity * oi.unit_price AS item_revenue FROM ecommerce.customers AS c INNER JOIN ecommerce.orders AS o ON c.customer_id = o.customer_id INNER JOIN ecommerce.order_items AS oi ON o.order_id = oi.order_id INNER JOIN ecommerce.products AS p ON oi.product_id = p.product_id ORDER BY o.order_id;`}</code>
            </pre>
          </div>
          <p>This query combines four tables.</p>
          <p>An important join problem: Fanout</p>
          <p>Suppose you join orders, order items, and payments.</p>
          <p>An order may contain multiple order items and multiple payment records.</p>
          <p>Joining both child tables directly can multiply the number of rows.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">For example:</h4>
          <p>An order has 3 items.</p>
          <p>An order has 2 payment attempts.</p>
          <p>A direct join may produce 6 rows for that order.</p>
          <p>This can incorrectly multiply revenue if you aggregate after the join.</p>
          <p>A common solution is to aggregate each child table to the required grain before joining.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Example:</h4>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`WITH item_totals AS ( SELECT order_id, SUM(quantity * unit_price) AS item_revenue FROM ecommerce.order_items GROUP BY order_id ), payment_totals AS ( SELECT order_id, SUM(amount) AS payment_amount FROM ecommerce.payments WHERE payment_status = 'SUCCESS' GROUP BY order_id ) SELECT o.order_id, it.item_revenue, pt.payment_amount FROM ecommerce.orders AS o LEFT JOIN item_totals AS it ON o.order_id = it.order_id LEFT JOIN payment_totals AS pt ON o.order_id = pt.order_id;`}</code>
            </pre>
          </div>
          <p>This avoids multiplying item rows by payment rows.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">7.8 Join comparison</h3>
          <p>Join</p>
          <p>Result</p>
          <p>INNER JOIN</p>
          <p>Only matching rows</p>
          <p>LEFT JOIN</p>
          <p>All left rows plus matches</p>
          <p>RIGHT JOIN</p>
          <p>All right rows plus matches</p>
          <p>FULL OUTER JOIN</p>
          <p>All rows from both sides</p>
          <p>CROSS JOIN</p>
          <p>Every possible combination</p>
          <p>SELF JOIN</p>
          <p>A table joined to itself</p>
          <p>SQL join interview exercise</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Write queries to:</h4>
          <p>Find all customers who have purchased products.</p>
          <p>Find customers who have never purchased.</p>
          <p>Find products that have never appeared in an order.</p>
          <p>Find every order along with its customer and payment information.</p>
          <p>Calculate revenue by customer and product category.</p>
          <p>These exercises test whether you understand the relationships, not just the syntax.</p>
        </div>
      </section>
      {"/* SECTION 8: Subqueries and Correlated Subqueries */"}
      <section id="section-8" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 8
          </span>
          <span className="text-xs font-mono text-stone-500">Nested Subqueries</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          8. Subqueries and Correlated Subqueries
        </h2>
        <div className="space-y-4 text-stone-700 leading-relaxed text-sm sm:text-base">
          <p>A subquery is a query nested inside another SQL statement.</p>
          <p>Subqueries allow one query to use results produced by another query.</p>
          <p>They are useful for filtering, comparisons, validation, and analytical calculations.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">8.1 What is a subquery?</h3>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Example:</h4>
          <p>Find products that cost more than the average product price.</p>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`SELECT product_id, product_name, price FROM ecommerce.products WHERE price > ( SELECT AVG(price) FROM ecommerce.products );`}</code>
            </pre>
          </div>
          <p>The inner query calculates the average price.</p>
          <p>The outer query selects products above that average.</p>
          <p>The inner query produces a single value.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">8.2 Scalar subquery</h3>
          <p>A scalar subquery returns one value.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Example:</h4>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`SELECT product_name, price, ( SELECT AVG(price) FROM ecommerce.products ) AS average_price FROM ecommerce.products;`}</code>
            </pre>
          </div>
          <p>The average product price is displayed alongside each product.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">8.3 Subquery with IN</h3>
          <p>Find customers who have placed at least one order.</p>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`SELECT customer_id, customer_name FROM ecommerce.customers WHERE customer_id IN ( SELECT customer_id FROM ecommerce.orders );`}</code>
            </pre>
          </div>
          <p>The inner query returns customer IDs from the orders table.</p>
          <p>The outer query selects customers whose IDs appear in that result.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">8.4 Subquery with NOT IN</h3>
          <p>Find customers who have not placed an order.</p>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`SELECT customer_id, customer_name FROM ecommerce.customers WHERE customer_id NOT IN ( SELECT customer_id FROM ecommerce.orders );`}</code>
            </pre>
          </div>
          <div className="rounded-xl border border-orange-200 bg-orange-50/70 p-4 text-xs sm:text-sm text-orange-950 leading-relaxed my-4">
            Important: NOT IN can produce surprising results if the subquery contains NULL.
          </div>
          <p>For anti-join logic, NOT EXISTS is often safer.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">8.5 Subquery with EXISTS</h3>
          <p>EXISTS checks whether a subquery returns at least one row.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Example:</h4>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`SELECT c.customer_id, c.customer_name FROM ecommerce.customers AS c WHERE EXISTS ( SELECT 1 FROM ecommerce.orders AS o WHERE o.customer_id = c.customer_id );`}</code>
            </pre>
          </div>
          <p>This returns customers who have at least one order.</p>
          <p>The database can stop looking for a match when it establishes that one exists, although the actual execution strategy depends on the optimizer.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">8.6 Correlated subqueries</h3>
          <p>A correlated subquery references a column from the outer query.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Example:</h4>
          <p>Find products that cost more than the average price of their own category.</p>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`SELECT p.product_name, p.category_id, p.price FROM ecommerce.products AS p WHERE p.price > ( SELECT AVG(p2.price) FROM ecommerce.products AS p2 WHERE p2.category_id = p.category_id );`}</code>
            </pre>
          </div>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Notice:</h4>
          <p>p2.category_id = p.category_id</p>
          <p>The inner query depends on the category of the current product in the outer query.</p>
          <p>This makes it correlated.</p>
          <p>Conceptually, the database evaluates the relationship for each outer row, although the optimizer may transform the query into a more efficient plan.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">8.7 Subquery in FROM</h3>
          <p>A subquery can act as a derived table.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Example:</h4>
          <p>Calculate total spending for each customer, then filter customers who spent more than ₹10,000.</p>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`SELECT * FROM ( SELECT customer_id, SUM(total_amount) AS spending FROM ecommerce.orders WHERE status = 'COMPLETED' GROUP BY customer_id ) AS customer_summary WHERE spending > 10000;`}</code>
            </pre>
          </div>
          <p>The inner query generates customer summaries.</p>
          <p>The outer query filters the summaries.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">8.8 Subquery vs JOIN</h3>
          <p>Subquery</p>
          <p>JOIN</p>
          <p>Nests one query inside another</p>
          <p>Combines table sources</p>
          <p>Useful for filtering and scalar calculations</p>
          <p>Useful for bringing columns together</p>
          <p>Can express EXISTS and comparisons clearly</p>
          <p>Useful for multi-table result sets</p>
          <p>May be optimized into joins or other plans</p>
          <p>Often used for relational analysis</p>
          <p>Neither approach is universally faster.</p>
          <p>The right choice depends on query structure, data distribution, indexes, and optimizer behavior.</p>
        </div>
      </section>
      {"/* SECTION 9: Common Table Expressions (CTEs) */"}
      <section id="section-9" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 9
          </span>
          <span className="text-xs font-mono text-stone-500">CTE Pipeline Patterns</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          9. Common Table Expressions (CTEs)
        </h2>
        <div className="space-y-4 text-stone-700 leading-relaxed text-sm sm:text-base">
          <p>CTEs make complex SQL queries easier to understand by giving intermediate query results meaningful names.</p>
          <p>CTEs are commonly used in analytical queries, data transformations, and pipeline development.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">9.1 What is a CTE?</h3>
          <p>CTE stands for Common Table Expression.</p>
          <p>It is defined using the WITH clause.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Example:</h4>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`WITH customer_revenue AS ( SELECT customer_id, SUM(total_amount) AS total_spending FROM ecommerce.orders WHERE status = 'COMPLETED' GROUP BY customer_id ) SELECT * FROM customer_revenue WHERE total_spending > 10000;`}</code>
            </pre>
          </div>
          <p>The CTE creates a temporary named result for the duration of the statement.</p>
          <p>customer_revenue is not automatically a permanent table.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">9.2 Why use CTEs?</h3>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Consider a query containing:</h4>
          <p>Multiple joins.</p>
          <p>Several aggregations.</p>
          <p>Filtering logic.</p>
          <p>Customer ranking.</p>
          <p>Revenue calculation.</p>
          <p>Without CTEs, the query can become difficult to maintain.</p>
          <p>CTEs allow the query to be divided into logical steps.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">9.3 Multiple CTEs</h3>
          <p>You can define multiple CTEs in one query.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Example:</h4>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`WITH completed_orders AS ( SELECT * FROM ecommerce.orders WHERE status = 'COMPLETED' ), customer_revenue AS ( SELECT customer_id, SUM(total_amount) AS revenue FROM completed_orders GROUP BY customer_id ), high_value_customers AS ( SELECT * FROM customer_revenue WHERE revenue >= 10000 ) SELECT c.customer_name, h.revenue FROM high_value_customers AS h INNER JOIN ecommerce.customers AS c ON h.customer_id = c.customer_id ORDER BY h.revenue DESC;`}</code>
            </pre>
          </div>
          <p>Each CTE performs a separate logical transformation.</p>
          <p>This pattern is particularly useful for complex SQL models and dbt transformations.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">9.4 CTE vs subquery</h3>
          <p>Feature</p>
          <p>CTE</p>
          <p>Subquery</p>
          <p>Definition</p>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`WITH clause`}</code>
            </pre>
          </div>
          <p>Nested SELECT</p>
          <p>Readability</p>
          <p>Often better for complex logic</p>
          <p>Often compact</p>
          <p>Reuse within query</p>
          <p>Can reference an earlier CTE multiple times</p>
          <p>Usually requires repeating logic</p>
          <p>Recursive operations</p>
          <p>Supported with recursive CTE</p>
          <p>Not naturally expressed in the same way</p>
          <p>Materialization</p>
          <p>Database-dependent</p>
          <p>Database-dependent</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Important PostgreSQL detail:</h4>
          <p>Modern PostgreSQL may inline suitable non-recursive CTEs into their parent query. Materialization behavior can be controlled with MATERIALIZED or NOT MATERIALIZED where supported and appropriate.</p>
          <p>A CTE is not automatically faster than a subquery.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">9.5 CTE with aggregation</h3>
          <p>Calculate monthly revenue.</p>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`WITH monthly_sales AS ( SELECT DATE_TRUNC('month', order_date) AS sales_month, SUM(total_amount) AS revenue FROM ecommerce.orders WHERE status = 'COMPLETED' GROUP BY DATE_TRUNC('month', order_date) ) SELECT sales_month, revenue FROM monthly_sales ORDER BY sales_month;`}</code>
            </pre>
          </div>
          <p>This is useful for analytical reporting.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">9.6 CTE with JOIN</h3>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`WITH product_sales AS ( SELECT product_id, SUM(quantity) AS total_quantity FROM ecommerce.order_items GROUP BY product_id ) SELECT p.product_name, COALESCE(ps.total_quantity, 0) AS units_sold FROM ecommerce.products AS p LEFT JOIN product_sales AS ps ON p.product_id = ps.product_id ORDER BY units_sold DESC;`}</code>
            </pre>
          </div>
          <p>This calculates units sold for each product, including products with no sales.</p>
        </div>
      </section>
      {"/* SECTION 10: Recursive CTEs */"}
      <section id="section-10" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 10
          </span>
          <span className="text-xs font-mono text-stone-500">Hierarchical Graph Trees</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          10. Recursive CTEs
        </h2>
        <div className="space-y-4 text-stone-700 leading-relaxed text-sm sm:text-base">
          <p>A recursive CTE is used when the data contains hierarchical or repeatedly related records.</p>
          <p>Unlike an ordinary CTE, a recursive CTE can refer to its own output.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Typical use cases:</h4>
          <p>Employee-manager hierarchies.</p>
          <p>Organizational structures.</p>
          <p>Category trees.</p>
          <p>Folder structures.</p>
          <p>Bill of materials.</p>
          <p>Graph-like traversal.</p>
          <p>Parent-child relationships.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">10.1 Understanding recursion</h3>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Consider this employee table:</h4>
          <p>employee_id</p>
          <p>employee_name</p>
          <p>manager_id</p>
          <p>1</p>
          <p>CEO</p>
          <p>NULL</p>
          <p>2</p>
          <p>Rahul</p>
          <p>1</p>
          <p>3</p>
          <p>Priya</p>
          <p>1</p>
          <p>4</p>
          <p>Amit</p>
          <p>2</p>
          <p>5</p>
          <p>Neha</p>
          <p>2</p>
          <p>6</p>
          <p>Arjun</p>
          <p>4</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">The hierarchy is:</h4>
          <p>CEO │ ├── Rahul │ │ │ ├── Amit │ │ │ │ │ └── Arjun │ │ │ └── Neha │ └── Priya</p>
          <p>A normal self join can show one level of management.</p>
          <p>A recursive CTE can traverse multiple levels.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">10.2 Recursive CTE structure</h3>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">A recursive CTE has three main components:</h4>
          <p>Anchor member.</p>
          <p>Recursive member.</p>
          <p>Termination condition.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">General structure:</h4>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`WITH RECURSIVE hierarchy AS ( -- Anchor member SELECT ... UNION ALL -- Recursive member SELECT ... FROM source_table JOIN hierarchy ON ... ) SELECT * FROM hierarchy;`}</code>
            </pre>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">10.3 Build an employee hierarchy</h3>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Create the example table:</h4>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`CREATE TABLE employees ( employee_id INTEGER PRIMARY KEY, employee_name VARCHAR(100), manager_id INTEGER REFERENCES employees(employee_id) );`}</code>
            </pre>
          </div>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Insert employees in order:</h4>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`INSERT INTO employees VALUES (1, 'CEO', NULL), (2, 'Rahul', 1), (3, 'Priya', 1), (4, 'Amit', 2), (5, 'Neha', 2), (6, 'Arjun', 4);`}</code>
            </pre>
          </div>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Recursive query:</h4>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`WITH RECURSIVE employee_hierarchy AS ( -- Anchor: start with the CEO SELECT employee_id, employee_name, manager_id, 1 AS hierarchy_level FROM employees WHERE manager_id IS NULL UNION ALL -- Recursive member SELECT e.employee_id, e.employee_name, e.manager_id, h.hierarchy_level + 1 FROM employees AS e INNER JOIN employee_hierarchy AS h ON e.manager_id = h.employee_id ) SELECT * FROM employee_hierarchy ORDER BY hierarchy_level, employee_id;`}</code>
            </pre>
          </div>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Expected result:</h4>
          <p>employee_name</p>
          <p>hierarchy_level</p>
          <p>CEO</p>
          <p>1</p>
          <p>Rahul</p>
          <p>2</p>
          <p>Priya</p>
          <p>2</p>
          <p>Amit</p>
          <p>3</p>
          <p>Neha</p>
          <p>3</p>
          <p>Arjun</p>
          <p>4</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">The recursion works as follows:</h4>
          <p>First iteration: Select the CEO.</p>
          <p>Second iteration: Find employees managed by the CEO.</p>
          <p>Third iteration: Find employees managed by those employees.</p>
          <p>Fourth iteration: Continue deeper into the hierarchy.</p>
          <p>The process stops when the recursive member produces no additional records.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">10.4 Tracking hierarchical paths</h3>
          <p>We can also build a textual path showing the employee's reporting hierarchy.</p>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`WITH RECURSIVE employee_hierarchy AS ( SELECT employee_id, employee_name, manager_id, employee_name::TEXT AS hierarchy_path FROM employees WHERE manager_id IS NULL UNION ALL SELECT e.employee_id, e.employee_name, e.manager_id, h.hierarchy_path || ' -> ' || e.employee_name FROM employees AS e JOIN employee_hierarchy AS h ON e.manager_id = h.employee_id ) SELECT * FROM employee_hierarchy;`}</code>
            </pre>
          </div>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Example path:</h4>
          <p>CEO -&gt; Rahul -&gt; Amit -&gt; Arjun</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">10.5 Recursive CTE safeguards</h3>
          <p>Recursive queries can cause problems if the underlying relationship contains cycles.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">For example:</h4>
          <p>Employee A reports to B Employee B reports to C Employee C reports to A</p>
          <p>A recursive traversal could continue indefinitely unless a safeguard is used.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Production queries should consider:</h4>
          <p>Maximum recursion depth.</p>
          <p>Cycle detection.</p>
          <p>Correct parent-child relationships.</p>
          <p>Duplicate paths.</p>
          <p>Expected termination.</p>
          <p>PostgreSQL supports recursive CTE cycle detection using the CYCLE clause in supported versions.</p>
        </div>
      </section>
      {"/* SECTION 11: Window Functions */"}
      <section id="section-11" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 11
          </span>
          <span className="text-xs font-mono text-stone-500">Window Partitions & Frames</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          11. Window Functions
        </h2>
        <div className="space-y-4 text-stone-700 leading-relaxed text-sm sm:text-base">
          <p>Window functions are among the most important advanced SQL concepts for Data Engineers.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">They are widely used in:</h4>
          <p>Business intelligence.</p>
          <p>Financial reporting.</p>
          <p>Customer analytics.</p>
          <p>Ranking systems.</p>
          <p>Trend analysis.</p>
          <p>Running totals.</p>
          <p>Moving averages.</p>
          <p>Time-series analysis.</p>
          <p>Data warehouse transformations.</p>
          <p>A window function calculates a result across a group of related rows while retaining the individual rows in the result.</p>
          <p>This is different from ordinary aggregation, where GROUP BY generally produces one result per group.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">11.1 Understanding window functions</h3>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Suppose we have the following sales records:</h4>
          <p>Employee</p>
          <p>Department</p>
          <p>Sales</p>
          <p>Rahul</p>
          <p>IT</p>
          <p>5000</p>
          <p>Priya</p>
          <p>IT</p>
          <p>7000</p>
          <p>Amit</p>
          <p>IT</p>
          <p>6000</p>
          <p>Neha</p>
          <p>HR</p>
          <p>4000</p>
          <p>Arjun</p>
          <p>HR</p>
          <p>8000</p>
          <p>We want to calculate department-wise average sales.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Using GROUP BY:</h4>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`SELECT department, AVG(sales) AS average_sales FROM employee_sales GROUP BY department;`}</code>
            </pre>
          </div>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Output:</h4>
          <p>Department</p>
          <p>Average sales</p>
          <p>IT</p>
          <p>6000</p>
          <p>HR</p>
          <p>6000</p>
          <p>This produces one row per department.</p>
          <p>But what if we want to display each employee's sales alongside their department's average?</p>
          <p>Use a window function.</p>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`SELECT employee, department, sales, AVG(sales) OVER ( PARTITION BY department ) AS department_average FROM employee_sales;`}</code>
            </pre>
          </div>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Output:</h4>
          <p>Employee</p>
          <p>Department</p>
          <p>Sales</p>
          <p>Department average</p>
          <p>Rahul</p>
          <p>IT</p>
          <p>5000</p>
          <p>6000</p>
          <p>Priya</p>
          <p>IT</p>
          <p>7000</p>
          <p>6000</p>
          <p>Amit</p>
          <p>IT</p>
          <p>6000</p>
          <p>6000</p>
          <p>Neha</p>
          <p>HR</p>
          <p>4000</p>
          <p>6000</p>
          <p>Arjun</p>
          <p>HR</p>
          <p>8000</p>
          <p>6000</p>
          <p>The result preserves all individual records while adding the department average.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">11.2 Window function syntax</h3>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">General syntax:</h4>
          <p>function_name(expression) OVER ( PARTITION BY column ORDER BY column ROWS BETWEEN ... )</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">The major components are:</h4>
          <p>Function: The calculation performed.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Examples: SUM(), AVG(), COUNT(), ROW_NUMBER().</h4>
          <p>OVER: Defines the window over which the function operates.</p>
          <p>PARTITION BY: Divides rows into independent groups.</p>
          <p>ORDER BY: Determines the order of rows inside each window.</p>
          <p>Window frame: Specifies the exact subset of rows considered relative to the current row.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">11.3 PARTITION BY</h3>
          <p>PARTITION BY divides records into groups.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Example:</h4>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`SELECT customer_id, order_id, total_amount, SUM(total_amount) OVER ( PARTITION BY customer_id ) AS customer_total FROM ecommerce.orders;`}</code>
            </pre>
          </div>
          <p>This calculates total order value for each customer while retaining every order.</p>
          <p>Notice that PARTITION BY does not physically divide the database table. It defines logical windows for the calculation.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">11.4 ORDER BY inside a window</h3>
          <p>The ordering determines the sequence used by the window calculation.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Example:</h4>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`SELECT order_id, customer_id, order_date, total_amount, SUM(total_amount) OVER ( PARTITION BY customer_id ORDER BY order_date, order_id ) AS running_spending FROM ecommerce.orders;`}</code>
            </pre>
          </div>
          <p>This calculates cumulative spending for each customer in order.</p>
          <p>The additional order_id creates a deterministic tie-breaker when multiple orders share a timestamp.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">11.5 Window frames</h3>
          <p>Window frames determine which rows around the current row are included in a calculation.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">For example:</h4>
          <p>SUM(amount) OVER ( ORDER BY order_date ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW )</p>
          <p>This calculates a running total from the first row through the current row.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Important frame boundaries:</h4>
          <p>Frame keyword</p>
          <p>Meaning</p>
          <p>UNBOUNDED PRECEDING</p>
          <p>Beginning of the partition</p>
          <p>CURRENT ROW</p>
          <p>Current row</p>
          <p>UNBOUNDED FOLLOWING</p>
          <p>End of the partition</p>
          <p>n PRECEDING</p>
          <p>n rows before the current row</p>
          <p>n FOLLOWING</p>
          <p>n rows after the current row</p>
          <p>Rows vs Range</p>
          <p>ROWS defines the frame by physical row positions.</p>
          <p>RANGE defines the frame using ordering values and peer groups.</p>
          <p>This distinction matters when multiple records have the same order value.</p>
          <p>In PostgreSQL, the default frame for many ordered aggregate windows is a RANGE frame from the partition start through the current row and its peers.</p>
          <p>For predictable row-by-row running totals, explicitly specify ROWS.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Example:</h4>
          <p>SUM(total_amount) OVER ( PARTITION BY customer_id ORDER BY order_date, order_id ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW )</p>
        </div>
      </section>
      {"/* SECTION 12: Ranking and Analytical Functions */"}
      <section id="section-12" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 12
          </span>
          <span className="text-xs font-mono text-stone-500">Analytical Ranking</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          12. Ranking and Analytical Functions
        </h2>
        <div className="space-y-4 text-stone-700 leading-relaxed text-sm sm:text-base">
          <p>Ranking functions are particularly important for analytics.</p>
          <p>They allow you to rank rows based on values within a dataset or partition.</p>
          <p>PostgreSQL provides several ranking functions.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">12.1 ROW_NUMBER()</h3>
          <p>Assigns a unique sequential number to each row inside a window.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Example:</h4>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`SELECT customer_id, order_id, total_amount, ROW_NUMBER() OVER ( PARTITION BY customer_id ORDER BY total_amount DESC, order_id ) AS row_num FROM ecommerce.orders;`}</code>
            </pre>
          </div>
          <p>Each customer gets an independent row numbering sequence.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Use cases:</h4>
          <p>Finding the latest record per customer.</p>
          <p>Removing duplicate records.</p>
          <p>Selecting the highest-value transaction.</p>
          <p>Choosing the most recent status record.</p>
          <p>Finding the latest order per customer</p>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`WITH ranked_orders AS ( SELECT customer_id, order_id, order_date, total_amount, ROW_NUMBER() OVER ( PARTITION BY customer_id ORDER BY order_date DESC, order_id DESC ) AS row_num FROM ecommerce.orders ) SELECT * FROM ranked_orders WHERE row_num = 1;`}</code>
            </pre>
          </div>
          <p>This returns one latest order per customer.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">12.2 RANK()</h3>
          <p>RANK() assigns ranks based on the ordering values.</p>
          <p>Tied rows receive the same rank, and the next rank contains a gap.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Example:</h4>
          <p>Employee</p>
          <p>Sales</p>
          <p>Rank</p>
          <p>Rahul</p>
          <p>10000</p>
          <p>1</p>
          <p>Priya</p>
          <p>9000</p>
          <p>2</p>
          <p>Amit</p>
          <p>9000</p>
          <p>2</p>
          <p>Neha</p>
          <p>8000</p>
          <p>4</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Query:</h4>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`SELECT employee, sales, RANK() OVER ( ORDER BY sales DESC ) AS sales_rank FROM employee_sales;`}</code>
            </pre>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">12.3 DENSE_RANK()</h3>
          <p>DENSE_RANK() also assigns equal ranks to tied values, but does not leave gaps.</p>
          <p>Employee</p>
          <p>Sales</p>
          <p>Dense rank</p>
          <p>Rahul</p>
          <p>10000</p>
          <p>1</p>
          <p>Priya</p>
          <p>9000</p>
          <p>2</p>
          <p>Amit</p>
          <p>9000</p>
          <p>2</p>
          <p>Neha</p>
          <p>8000</p>
          <p>3</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Example:</h4>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`SELECT employee, sales, DENSE_RANK() OVER ( ORDER BY sales DESC ) AS sales_rank FROM employee_sales;`}</code>
            </pre>
          </div>
          <p>Comparing ranking functions</p>
          <p>Function</p>
          <p>Behavior for tied values</p>
          <p>ROW_NUMBER</p>
          <p>Always unique row numbers</p>
          <p>RANK</p>
          <p>Same rank, with gaps</p>
          <p>DENSE_RANK</p>
          <p>Same rank, without gaps</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">12.4 NTILE()</h3>
          <p>Divides records into a specified number of approximately equal-sized groups.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Example:</h4>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`SELECT customer_id, total_amount, NTILE(4) OVER ( ORDER BY total_amount DESC ) AS spending_quartile FROM ecommerce.orders;`}</code>
            </pre>
          </div>
          <p>This divides the ordered records into four groups.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Use cases:</h4>
          <p>Customer segmentation.</p>
          <p>Performance quartiles.</p>
          <p>Sales distribution analysis.</p>
          <p>Grouping customers by purchasing behavior.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">12.5 LAG()</h3>
          <p>LAG() retrieves a value from a previous row in the ordered window.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Example:</h4>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`SELECT order_id, order_date, total_amount, LAG(total_amount) OVER ( ORDER BY order_date, order_id ) AS previous_order_amount FROM ecommerce.orders;`}</code>
            </pre>
          </div>
          <p>This helps compare each order with the previous order.</p>
          <p>Calculating changes</p>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`WITH order_comparison AS ( SELECT order_id, total_amount, LAG(total_amount) OVER ( ORDER BY order_date, order_id ) AS previous_amount FROM ecommerce.orders ) SELECT order_id, total_amount, previous_amount, total_amount - previous_amount AS amount_difference FROM order_comparison;`}</code>
            </pre>
          </div>
          <p>This is useful for time-series and transaction comparisons.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">12.6 LEAD()</h3>
          <p>LEAD() retrieves a value from a following row.</p>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`SELECT order_id, order_date, total_amount, LEAD(total_amount) OVER ( ORDER BY order_date, order_id ) AS next_order_amount FROM ecommerce.orders;`}</code>
            </pre>
          </div>
          <p>This can help compare an event with the next event in a sequence.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">12.7 FIRST_VALUE() and LAST_VALUE()</h3>
          <p>These functions retrieve the first or last value within a window frame.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Example:</h4>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`SELECT customer_id, order_id, order_date, total_amount, FIRST_VALUE(total_amount) OVER ( PARTITION BY customer_id ORDER BY order_date, order_id ) AS first_order_amount FROM ecommerce.orders;`}</code>
            </pre>
          </div>
          <p>To get the actual last row's value in the entire partition with LAST_VALUE(), specify the window frame explicitly:</p>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`SELECT customer_id, order_id, order_date, total_amount, LAST_VALUE(total_amount) OVER ( PARTITION BY customer_id ORDER BY order_date, order_id ROWS BETWEEN UNBOUNDED PRECEDING AND UNBOUNDED FOLLOWING ) AS last_order_amount FROM ecommerce.orders;`}</code>
            </pre>
          </div>
          <p>Without the full frame, LAST_VALUE() often returns the current row's value or the last value in the current frame rather than the final value in the partition.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">12.8 CUME_DIST() and PERCENT_RANK()</h3>
          <p>These functions help understand relative positions within a distribution.</p>
          <p>CUME_DIST()</p>
          <p>Calculates the cumulative distribution of a row's position.</p>
          <p>PERCENT_RANK()</p>
          <p>Calculates relative rank using a formula based on rank and partition size.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Example:</h4>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`SELECT product_name, price, CUME_DIST() OVER ( ORDER BY price ) AS cumulative_distribution, PERCENT_RANK() OVER ( ORDER BY price ) AS relative_rank FROM ecommerce.products;`}</code>
            </pre>
          </div>
          <p>These are useful for statistical summaries and customer or product segmentation.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">12.9 Analytical function comparison</h3>
          <p>Function</p>
          <p>Purpose</p>
          <p>ROW_NUMBER()</p>
          <p>Unique sequential numbering</p>
          <p>RANK()</p>
          <p>Ranking with gaps</p>
          <p>DENSE_RANK()</p>
          <p>Ranking without gaps</p>
          <p>NTILE()</p>
          <p>Divide rows into groups</p>
          <p>LAG()</p>
          <p>Previous row's value</p>
          <p>LEAD()</p>
          <p>Next row's value</p>
          <p>FIRST_VALUE()</p>
          <p>First value in a frame</p>
          <p>LAST_VALUE()</p>
          <p>Last value in a frame</p>
          <p>CUME_DIST()</p>
          <p>Cumulative distribution</p>
          <p>PERCENT_RANK()</p>
          <p>Relative ranking</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">12.10 Important Data Engineering applications</h3>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Window functions are commonly used for:</h4>
          <p>Deduplication: Keep only the newest record for each business key.</p>
          <p>Running totals: Calculate cumulative revenue.</p>
          <p>Moving averages: Calculate recent sales trends.</p>
          <p>Customer analytics: Identify each customer's latest transaction.</p>
          <p>Ranking: Identify top products or customers.</p>
          <p>Change detection: Compare current values with previous values.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Example of deduplication:</h4>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Suppose your ingestion pipeline receives:</h4>
          <p>customer_id</p>
          <p>email</p>
          <p>updated_at</p>
          <p>101</p>
          <p>old@example.com</p>
          <p>Nov 1</p>
          <p>101</p>
          <p>newer@example.com</p>
          <p>Nov 7</p>
          <p>102</p>
          <p>user2@example.com</p>
          <p>Nov 5</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Query:</h4>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`WITH ranked_customers AS ( SELECT *, ROW_NUMBER() OVER ( PARTITION BY customer_id ORDER BY updated_at DESC ) AS row_num FROM staging_customers ) SELECT * FROM ranked_customers WHERE row_num = 1;`}</code>
            </pre>
          </div>
          <p>This keeps the latest customer record.</p>
        </div>
      </section>
      {"/* SECTION 13: Set Operations */"}
      <section id="section-13" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 13
          </span>
          <span className="text-xs font-mono text-stone-500">Set Algebra</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          13. Set Operations
        </h2>
        <div className="space-y-4 text-stone-700 leading-relaxed text-sm sm:text-base">
          <p>Set operations combine the results of multiple SELECT statements.</p>
          <p>They are useful when integrating data from different systems.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">PostgreSQL supports:</h4>
          <p>UNION.</p>
          <p>UNION ALL.</p>
          <p>INTERSECT.</p>
          <p>EXCEPT.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">13.1 UNION</h3>
          <p>Combines results and removes duplicate rows.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Example:</h4>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`SELECT city FROM customer_addresses UNION SELECT city FROM supplier_addresses;`}</code>
            </pre>
          </div>
          <p>This produces a list of distinct cities appearing in either table.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">13.2 UNION ALL</h3>
          <p>Combines results without removing duplicates.</p>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`SELECT city FROM customer_addresses UNION ALL SELECT city FROM supplier_addresses;`}</code>
            </pre>
          </div>
          <p>This preserves duplicate values.</p>
          <p>UNION ALL generally performs less work when duplicate elimination is unnecessary.</p>
          <p>It is commonly used when combining historical or partitioned datasets.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">13.3 INTERSECT</h3>
          <p>Returns rows that appear in both query results.</p>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`SELECT customer_id FROM website_customers INTERSECT SELECT customer_id FROM mobile_app_customers;`}</code>
            </pre>
          </div>
          <p>This identifies customers present in both systems.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">13.4 EXCEPT</h3>
          <p>Returns rows from the first query that do not appear in the second query.</p>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`SELECT customer_id FROM website_customers EXCEPT SELECT customer_id FROM mobile_app_customers;`}</code>
            </pre>
          </div>
          <p>This identifies customers present in the website dataset but not in the mobile app dataset.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">13.5 UNION vs UNION ALL</h3>
          <p>Feature</p>
          <p>UNION</p>
          <p>UNION ALL</p>
          <p>Combines records</p>
          <p>Yes</p>
          <p>Yes</p>
          <p>Removes duplicate result rows</p>
          <p>Yes</p>
          <p>No</p>
          <p>Additional duplicate elimination</p>
          <p>Yes</p>
          <p>No</p>
          <p>Typical performance</p>
          <p>More work</p>
          <p>Often faster</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">13.6 Requirements for set operations</h3>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">The SELECT statements being combined must have:</h4>
          <p>The same number of output columns.</p>
          <p>Corresponding compatible data types.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Example:</h4>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`SELECT customer_id, customer_name FROM ecommerce.customers UNION ALL SELECT customer_id, supplier_name FROM ecommerce.suppliers;`}</code>
            </pre>
          </div>
          <p>The output columns must be compatible by position.</p>
          <p>Column names are generally derived from the first SELECT, so meaningful aliases are useful.</p>
          <p>Real-world data integration example</p>
          <p>Suppose a company maintains customer records in two different applications.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">The data engineering team wants to identify:</h4>
          <p>Customers appearing in both systems.</p>
          <p>Customers appearing only in the first system.</p>
          <p>Customers from either system.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Use:</h4>
          <p>INTERSECT for common records.</p>
          <p>EXCEPT for records missing from the other result.</p>
          <p>UNION for a distinct combined set.</p>
          <p>UNION ALL for a full combined dataset that retains all occurrences.</p>
          <p>Be careful: set operations generally compare complete output rows. If the goal is to reconcile records using customer IDs only, select the IDs explicitly.</p>
        </div>
      </section>
      {"/* SECTION 14: Views and Materialized Views */"}
      <section id="section-14" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 14
          </span>
          <span className="text-xs font-mono text-stone-500">Virtual & Materialized Views</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          14. Views and Materialized Views
        </h2>
        <div className="space-y-4 text-stone-700 leading-relaxed text-sm sm:text-base">
          <p>Views and materialized views help organize reusable analytical logic.</p>
          <p>They are especially useful in data warehouses and reporting systems.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">14.1 What is a view?</h3>
          <p>A view is a named SQL query that behaves like a virtual table.</p>
          <p>It normally does not store a separate copy of its query results.</p>
          <p>Instead, PostgreSQL executes the underlying query when the view is queried.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Example:</h4>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`CREATE VIEW ecommerce.completed_orders AS SELECT order_id, customer_id, order_date, total_amount FROM ecommerce.orders WHERE status = 'COMPLETED';`}</code>
            </pre>
          </div>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Query:</h4>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`SELECT * FROM ecommerce.completed_orders;`}</code>
            </pre>
          </div>
          <p>The application does not need to repeat the filtering logic every time.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">14.2 Why use views?</h3>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Views provide:</h4>
          <p>Simplification: Complex queries can be hidden behind a simple table-like interface.</p>
          <p>Reusability: Multiple applications can use the same query logic.</p>
          <p>Security: A view can expose only approved columns or rows, when combined with appropriate permissions.</p>
          <p>Consistency: Reporting teams can use a standardized definition of a dataset.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">14.3 Joining multiple tables inside a view</h3>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`CREATE VIEW ecommerce.order_details AS SELECT o.order_id, c.customer_name, o.order_date, p.product_name, oi.quantity, oi.unit_price, oi.quantity * oi.unit_price AS item_revenue FROM ecommerce.orders AS o JOIN ecommerce.customers AS c ON o.customer_id = c.customer_id JOIN ecommerce.order_items AS oi ON o.order_id = oi.order_id JOIN ecommerce.products AS p ON oi.product_id = p.product_id;`}</code>
            </pre>
          </div>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Now:</h4>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`SELECT * FROM ecommerce.order_details;`}</code>
            </pre>
          </div>
          <p>provides an integrated result.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">14.4 Updating a view</h3>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">In PostgreSQL:</h4>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`CREATE OR REPLACE VIEW ecommerce.completed_orders AS SELECT order_id, customer_id, order_date, total_amount FROM ecommerce.orders WHERE status = 'COMPLETED';`}</code>
            </pre>
          </div>
          <p>Some simple views can be updated through SQL, while more complex views may not be automatically updatable.</p>
          <p>Views also do not automatically guarantee security isolation in every configuration. PostgreSQL's security options and permissions need to be designed carefully.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">14.5 What is a materialized view?</h3>
          <p>A materialized view stores the result of a query physically.</p>
          <p>Instead of recalculating an expensive query every time it is requested, a materialized view can serve previously computed data.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Example:</h4>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`CREATE MATERIALIZED VIEW ecommerce.monthly_revenue AS SELECT DATE_TRUNC('month', order_date) AS sales_month, SUM(total_amount) AS revenue FROM ecommerce.orders WHERE status = 'COMPLETED' GROUP BY DATE_TRUNC('month', order_date);`}</code>
            </pre>
          </div>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Query:</h4>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`SELECT * FROM ecommerce.monthly_revenue;`}</code>
            </pre>
          </div>
          <p>This reads the stored result.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">14.6 Refreshing materialized views</h3>
          <p>Materialized views do not automatically reflect changes in their source tables.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Refresh the result:</h4>
          <p>REFRESH MATERIALIZED VIEW ecommerce.monthly_revenue;</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">To allow concurrent readers during refresh, PostgreSQL supports:</h4>
          <p>REFRESH MATERIALIZED VIEW CONCURRENTLY ecommerce.monthly_revenue;</p>
          <p>However, concurrent refresh requires an appropriate qualifying unique index on the materialized view.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">For our example, one could create:</h4>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`CREATE UNIQUE INDEX idx_monthly_revenue_month ON ecommerce.monthly_revenue(sales_month);`}</code>
            </pre>
          </div>
          <p>Then concurrent refresh becomes possible.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">14.7 View vs materialized view</h3>
          <p>Feature</p>
          <p>View</p>
          <p>Materialized view</p>
          <p>Stores query results</p>
          <p>Generally no</p>
          <p>Yes</p>
          <p>Executes underlying query when queried</p>
          <p>Yes</p>
          <p>No, until refresh</p>
          <p>Data freshness</p>
          <p>Reflects current underlying data subject to transaction visibility</p>
          <p>Reflects last refresh</p>
          <p>Storage required for result</p>
          <p>No separate result storage</p>
          <p>Yes</p>
          <p>Expensive analytical queries</p>
          <p>May repeat computation</p>
          <p>Can reuse stored results</p>
          <p>Refresh required</p>
          <p>No</p>
          <p>Yes</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">14.8 When should a Data Engineer use them?</h3>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Use views when:</h4>
          <p>Providing reusable query logic.</p>
          <p>Simplifying complex joins.</p>
          <p>Exposing approved fields.</p>
          <p>Defining standardized reporting interfaces.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Use materialized views when:</h4>
          <p>The underlying query is expensive.</p>
          <p>A slightly stale result is acceptable.</p>
          <p>Queries are performed frequently.</p>
          <p>Refresh cost is manageable.</p>
          <p>Results can be maintained on an appropriate schedule.</p>
        </div>
      </section>
      {"/* SECTION 15: Stored Procedures and Functions */"}
      <section id="section-15" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 15
          </span>
          <span className="text-xs font-mono text-stone-500">Procedural Logic</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          15. Stored Procedures and Functions
        </h2>
        <div className="space-y-4 text-stone-700 leading-relaxed text-sm sm:text-base">
          <p>Stored procedures and functions allow database logic to be stored and executed within the database.</p>
          <p>They can encapsulate business rules, calculations, and database operations.</p>
          <p>PostgreSQL supports stored functions written in SQL or procedural languages such as PL/pgSQL.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">15.1 What is a stored function?</h3>
          <p>A function accepts inputs, performs operations, and returns a result or a set of results.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Example:</h4>
          <p>Create a function to calculate customer spending.</p>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`CREATE OR REPLACE FUNCTION ecommerce.customer_total_spending( p_customer_id BIGINT ) RETURNS NUMERIC LANGUAGE SQL AS $$ SELECT COALESCE( SUM(total_amount), 0 ) FROM ecommerce.orders WHERE customer_id = p_customer_id AND status = 'COMPLETED'; $$;`}</code>
            </pre>
          </div>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Call the function:</h4>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`SELECT ecommerce.customer_total_spending(1);`}</code>
            </pre>
          </div>
          <p>This returns the total completed order value for customer 1.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">15.2 PL/pgSQL functions</h3>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">PL/pgSQL provides procedural capabilities, including:</h4>
          <p>Variables.</p>
          <p>Conditions.</p>
          <p>Loops.</p>
          <p>Exception handling.</p>
          <p>SQL statements.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Example:</h4>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`CREATE OR REPLACE FUNCTION ecommerce.calculate_discount( p_amount NUMERIC ) RETURNS NUMERIC LANGUAGE plpgsql AS $$ DECLARE discount NUMERIC; BEGIN IF p_amount >= 10000 THEN discount := p_amount * 0.10; ELSIF p_amount >= 5000 THEN discount := p_amount * 0.05; ELSE discount := 0; END IF; RETURN discount; END; $$;`}</code>
            </pre>
          </div>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Execute:</h4>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`SELECT ecommerce.calculate_discount(12000);`}</code>
            </pre>
          </div>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Expected result:</h4>
          <p>1200.00</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">15.3 What is a stored procedure?</h3>
          <p>A procedure is a database routine designed to perform an operation.</p>
          <p>Unlike a function, a procedure is invoked using CALL.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Example:</h4>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`CREATE OR REPLACE PROCEDURE ecommerce.update_product_price( p_product_id BIGINT, p_new_price NUMERIC ) LANGUAGE plpgsql AS $$ BEGIN IF p_new_price < 0 THEN RAISE EXCEPTION 'Price cannot be negative'; END IF; UPDATE ecommerce.products SET price = p_new_price WHERE product_id = p_product_id; END; $$;`}</code>
            </pre>
          </div>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Execute:</h4>
          <p>CALL ecommerce.update_product_price(1, 53000);</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">15.4 Function vs procedure</h3>
          <p>Feature</p>
          <p>Function</p>
          <p>Procedure</p>
          <p>Invocation</p>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`SELECT or other permitted expression contexts`}</code>
            </pre>
          </div>
          <p>CALL</p>
          <p>Main purpose</p>
          <p>Return a computed value or result</p>
          <p>Perform database operations</p>
          <p>Return value</p>
          <p>Has a declared return type</p>
          <p>Can return output parameters, but does not behave like a normal scalar function</p>
          <p>Use in SELECT</p>
          <p>Yes, when appropriate</p>
          <p>No</p>
          <p>Transaction control</p>
          <p>Restricted in normal function execution</p>
          <p>Can manage transactions in eligible call contexts</p>
          <p>PostgreSQL procedures can perform transaction control under specific invocation conditions, but not in every context. For example, transaction control is restricted in a CALL nested inside an explicit transaction block.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">15.5 When should Data Engineers use stored routines?</h3>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Potential applications include:</h4>
          <p>Reusable calculations.</p>
          <p>Database-side validation.</p>
          <p>Controlled data updates.</p>
          <p>Batch database maintenance.</p>
          <p>Complex transaction workflows.</p>
          <p>Standardized business rules.</p>
          <p>However, avoid moving every piece of application logic into the database.</p>
          <p>A sensible architecture decides which processing belongs in SQL, which belongs in Python, and which belongs in dedicated processing services.</p>
        </div>
      </section>
      {"/* SECTION 16: Triggers */"}
      <section id="section-16" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 16
          </span>
          <span className="text-xs font-mono text-stone-500">Database Triggers</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          16. Triggers
        </h2>
        <div className="space-y-4 text-stone-700 leading-relaxed text-sm sm:text-base">
          <p>A trigger is a database mechanism that automatically executes a specified function when a particular database event occurs.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Triggers are commonly used for:</h4>
          <p>Audit logging.</p>
          <p>Change tracking.</p>
          <p>Validation.</p>
          <p>Maintaining derived values.</p>
          <p>Recording modifications.</p>
          <p>Enforcing certain business rules.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">16.1 What is a trigger?</h3>
          <p>Imagine an organization wants to maintain an audit history whenever a product's price changes.</p>
          <p>Instead of depending on every application to create an audit entry manually, a database trigger can automatically call a trigger function when an update happens.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">16.2 Trigger events</h3>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">PostgreSQL supports triggers associated with events such as:</h4>
          <p>INSERT.</p>
          <p>UPDATE.</p>
          <p>DELETE.</p>
          <p>TRUNCATE (statement-level triggers).</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Triggers can be defined to run:</h4>
          <p>BEFORE the event.</p>
          <p>AFTER the event.</p>
          <p>INSTEAD OF the event, for eligible view operations.</p>
          <p>They can operate at row level or statement level.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">16.3 Create an audit table</h3>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`CREATE TABLE ecommerce.product_price_audit ( audit_id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY, product_id BIGINT, old_price NUMERIC(12,2), new_price NUMERIC(12,2), changed_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP );`}</code>
            </pre>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">16.4 Create a trigger function</h3>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`CREATE OR REPLACE FUNCTION ecommerce.log_product_price_change() RETURNS TRIGGER LANGUAGE plpgsql AS $$ BEGIN IF OLD.price IS DISTINCT FROM NEW.price THEN INSERT INTO ecommerce.product_price_audit ( product_id, old_price, new_price, changed_at ) VALUES ( OLD.product_id, OLD.price, NEW.price, CURRENT_TIMESTAMP ); END IF; RETURN NEW; END; $$;`}</code>
            </pre>
          </div>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Here:</h4>
          <p>OLD represents the previous row.</p>
          <p>NEW represents the new row.</p>
          <p>IS DISTINCT FROM compares values safely even when NULL is involved.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">16.5 Create the trigger</h3>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`CREATE TRIGGER product_price_update_trigger AFTER UPDATE ON ecommerce.products FOR EACH ROW EXECUTE FUNCTION ecommerce.log_product_price_change();`}</code>
            </pre>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">16.6 Test the trigger</h3>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Update a product price:</h4>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`UPDATE ecommerce.products SET price = 54000 WHERE product_id = 1;`}</code>
            </pre>
          </div>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Check the audit table:</h4>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`SELECT * FROM ecommerce.product_price_audit;`}</code>
            </pre>
          </div>
          <p>The trigger function automatically creates an audit record for the changed price.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">16.7 BEFORE vs AFTER triggers</h3>
          <p>BEFORE trigger</p>
          <p>AFTER trigger</p>
          <p>Executes before the relevant database operation completes</p>
          <p>Executes after the operation</p>
          <p>Can modify the proposed NEW row in eligible row-level triggers</p>
          <p>Commonly used for audit and follow-up actions</p>
          <p>Can reject a row by raising an exception</p>
          <p>Can perform operations based on completed changes</p>
          <p>A BEFORE INSERT trigger might standardize a value before the record is written.</p>
          <p>An AFTER UPDATE trigger might record a change in an audit table.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">16.8 Trigger risks in Data Engineering</h3>
          <p>Triggers are powerful, but excessive use may create hidden dependencies.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Problems can include:</h4>
          <p>Unexpected write overhead.</p>
          <p>Difficult debugging.</p>
          <p>Recursive trigger behavior.</p>
          <p>Hidden data modifications.</p>
          <p>Complicated bulk loading.</p>
          <p>Application logic becoming difficult to locate.</p>
          <p>Use triggers only when the automatic database-level behavior is justified.</p>
          <p>For large data engineering pipelines, explicit transformation and loading logic can sometimes be easier to test and monitor.</p>
        </div>
      </section>
      {"/* SECTION 17: Transactions and ACID Properties */"}
      <section id="section-17" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 17
          </span>
          <span className="text-xs font-mono text-stone-500">ACID Integrity</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          17. Transactions and ACID Properties
        </h2>
        <div className="space-y-4 text-stone-700 leading-relaxed text-sm sm:text-base">
          <p>Transactions are among the most important concepts in relational database engineering.</p>
          <p>A transaction is a group of database operations that should be treated as one logical unit of work.</p>
          <p>Imagine a customer transfers ₹5,000 from Bank Account A to Bank Account B.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">The system must:</h4>
          <p>Deduct ₹5,000 from Account A.</p>
          <p>Add ₹5,000 to Account B.</p>
          <p>Record the transaction.</p>
          <p>What happens if the first operation succeeds but the second operation fails?</p>
          <p>The database must not leave the accounts in an inconsistent state.</p>
          <p>Transactions help solve this problem.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">17.1 What is a transaction?</h3>
          <p>A transaction groups one or more SQL operations into a logical unit.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Example:</h4>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`BEGIN; UPDATE bank_accounts SET balance = balance - 5000 WHERE account_id = 101; UPDATE bank_accounts SET balance = balance + 5000 WHERE account_id = 102; COMMIT;`}</code>
            </pre>
          </div>
          <p>The transaction starts with BEGIN and completes with COMMIT.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">If an error occurs before committing, the application can execute:</h4>
          <p>ROLLBACK;</p>
          <p>This cancels the uncommitted changes.</p>
          <p>In production, the system must also check that the source account has enough balance, verify that both accounts exist, and ensure that the transfer is safe against concurrent modifications.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">17.2 ACID properties</h3>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">ACID represents four important transaction properties:</h4>
          <p>Atomicity.</p>
          <p>Consistency.</p>
          <p>Isolation.</p>
          <p>Durability.</p>
          <div className="my-3 p-3 rounded-xl bg-orange-50/60 border border-orange-200/80 flex items-center justify-between gap-3 text-xs">
            <div className="font-semibold text-stone-800 flex items-center gap-2"><span>&#128279;</span> <span>The Distributed Transaction Guide: Navigating Consistency in Microservices</span></div>
            <a href="https://images.openai.com/static-rsc-4/amF1_c6sVFxbD5BtP4LkbCkttDOf-8nniHCqufqUwY1v2tiE8-gNEEls-oUJccLmEF3t7-mIapeFBKiR-9BP5Lv62DDxznMd18uXt2czt9jBMSbWC3mQG6JVhq8PLiddPCJneCK8hgKQuoZ2TVkQKzDo7is3ZbhdvQPsC0q46zQ?purpose=inline" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 font-bold inline-flex items-center gap-1 cursor-pointer">View Resource &rarr;</a>
          </div>
          <div className="my-3 p-3 rounded-xl bg-orange-50/60 border border-orange-200/80 flex items-center justify-between gap-3 text-xs">
            <div className="font-semibold text-stone-800 flex items-center gap-2"><span>&#128279;</span> <span>designgurus.substack.com</span></div>
            <a href="https://designgurus.substack.com/p/the-distributed-transaction-guide?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 font-bold inline-flex items-center gap-1 cursor-pointer">View Resource &rarr;</a>
          </div>
          <p>A. Atomicity</p>
          <p>Atomicity means that a transaction behaves as one indivisible unit.</p>
          <p>Either all required operations succeed, or none of the uncommitted changes are applied.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Example:</h4>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">A transfer requires:</h4>
          <div className="my-4 p-4 rounded-xl bg-stone-50 border border-stone-200">
            <div className="text-xs font-bold uppercase tracking-wider text-stone-500 mb-2 font-mono">Architecture Flow</div>
            <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
              <span className="px-3 py-1.5 rounded-lg bg-white border border-stone-300 font-semibold text-stone-800 shadow-2xs">Deduct ₹5,000 from Account A</span>
              <span className="text-orange-500 font-bold">&rarr;</span>
              <span className="px-3 py-1.5 rounded-lg bg-white border border-stone-300 font-semibold text-stone-800 shadow-2xs">Add ₹5,000 to Account B</span>
            </div>
          </div>
          <p>If the second operation fails, the first operation must not remain as a completed transfer.</p>
          <p>This prevents money from disappearing between accounts.</p>
          <p>B. Consistency</p>
          <p>Consistency means that a valid transaction preserves the database's defined integrity rules.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">For example:</h4>
          <p>Account balances must follow the application's rules.</p>
          <p>Primary keys must remain unique.</p>
          <p>Foreign keys must remain valid.</p>
          <p>CHECK constraints must be satisfied.</p>
          <p>Suppose an account cannot have a negative balance.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">A constraint could enforce:</h4>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`CREATE TABLE bank_accounts ( account_id INTEGER PRIMARY KEY, balance NUMERIC(12,2) NOT NULL CHECK (balance >= 0) );`}</code>
            </pre>
          </div>
          <p>A transaction that attempts to create a negative balance will fail.</p>
          <p>Consistency depends on correctly defined constraints and application logic.</p>
          <p>C. Isolation</p>
          <p>Isolation controls how concurrent transactions interact.</p>
          <p>Imagine two customers purchasing the last available product at exactly the same time.</p>
          <p>Both transactions might attempt to decrease the stock quantity.</p>
          <p>Without appropriate concurrency control, both operations could incorrectly behave as though stock were available.</p>
          <p>Database isolation mechanisms help manage such situations.</p>
          <p>We will study isolation levels and locking in the next section.</p>
          <p>D. Durability</p>
          <p>Durability means that once a transaction is successfully committed, its changes are expected to survive subsequent failures within the database's durability guarantees.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Databases use mechanisms such as:</h4>
          <p>Write-ahead logging.</p>
          <p>Persistent storage.</p>
          <p>Recovery procedures.</p>
          <p>Database backups.</p>
          <p>Replication.</p>
          <p>In PostgreSQL, write-ahead logging (WAL) records changes in a log before the corresponding data pages need to be written to their final locations.</p>
          <p>WAL supports crash recovery and other database features.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">17.3 Practical transaction example</h3>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Create a bank account table:</h4>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`CREATE TABLE bank_accounts ( account_id INTEGER PRIMARY KEY, customer_name VARCHAR(100), balance NUMERIC(12,2) CHECK (balance >= 0) );`}</code>
            </pre>
          </div>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Insert accounts:</h4>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`INSERT INTO bank_accounts VALUES (101, 'Rahul', 20000), (102, 'Priya', 10000);`}</code>
            </pre>
          </div>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Execute a transfer:</h4>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`BEGIN; UPDATE bank_accounts SET balance = balance - 5000 WHERE account_id = 101 AND balance >= 5000; UPDATE bank_accounts SET balance = balance + 5000 WHERE account_id = 102; COMMIT;`}</code>
            </pre>
          </div>
          <p>This simple demonstration illustrates a transaction, but it is not yet a safe production transfer implementation.</p>
          <p>For a production-quality operation, the application or stored routine must verify that exactly one source account was debited and exactly one destination account was credited. Both accounts should be validated under an appropriate locking or concurrency strategy. Otherwise, a missing destination account could result in a debit without a corresponding credit.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">17.4 SAVEPOINT</h3>
          <p>A savepoint creates a point within a transaction to which you can roll back without cancelling the entire transaction.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Example:</h4>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`BEGIN; INSERT INTO ecommerce.customers (customer_name, email, city) VALUES ('Customer A', 'a@example.com', 'Pune'); SAVEPOINT customer_saved; INSERT INTO ecommerce.customers (customer_name, email, city) VALUES ('Customer B', 'b@example.com', 'Mumbai'); ROLLBACK TO SAVEPOINT customer_saved; COMMIT;`}</code>
            </pre>
          </div>
          <p>In this example, the first customer insertion remains, while the second is rolled back.</p>
          <p>Savepoints are helpful when a transaction contains multiple stages and certain failures should not cancel every earlier operation.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">17.5 COMMIT vs ROLLBACK</h3>
          <p>Command</p>
          <p>Purpose</p>
          <p>BEGIN</p>
          <p>Start an explicit transaction</p>
          <p>COMMIT</p>
          <p>Make the transaction's changes permanent</p>
          <p>ROLLBACK</p>
          <p>Cancel uncommitted changes</p>
          <p>SAVEPOINT</p>
          <p>Establish a rollback point</p>
          <p>ROLLBACK TO</p>
          <p>Roll back to a savepoint</p>
        </div>
      </section>
      {"/* SECTION 18: Isolation Levels and Concurrency */"}
      <section id="section-18" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 18
          </span>
          <span className="text-xs font-mono text-stone-500">Concurrency & MVCC</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          18. Isolation Levels and Concurrency
        </h2>
        <div className="space-y-4 text-stone-700 leading-relaxed text-sm sm:text-base">
          <p>Modern databases serve many users simultaneously.</p>
          <p>A large e-commerce company may have thousands of transactions occurring at the same time.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">For example:</h4>
          <p>Customers place orders.</p>
          <p>Payments are processed.</p>
          <p>Inventory changes.</p>
          <p>Reports run.</p>
          <p>Data pipelines extract records.</p>
          <p>The database needs a mechanism to coordinate all these activities.</p>
          <p>This is called concurrency control.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">18.1 What is concurrency?</h3>
          <p>Concurrency means multiple transactions or database operations are active at overlapping times.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Consider:</h4>
          <p>Transaction A: Reads product inventory.</p>
          <p>Transaction B: Updates product inventory.</p>
          <p>If both operate simultaneously, the database must determine how their results are observed.</p>
          <p>Poorly controlled concurrency can produce inconsistent results.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">18.2 Common concurrency problems</h3>
          <p>A. Dirty read</p>
          <p>A dirty read occurs when a transaction reads data written by another transaction that has not committed.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Example:</h4>
          <p>Transaction A: Update account balance to ₹5,000 (Not committed) Transaction B: Reads ₹5,000 Transaction A: ROLLBACK</p>
          <p>Transaction B has observed a value that never became committed data.</p>
          <p>B. Non-repeatable read</p>
          <p>A transaction reads the same row twice and obtains different committed values because another transaction modified it between the reads.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Example:</h4>
          <p>Transaction A: Reads balance = ₹10,000 Transaction B: Updates balance = ₹8,000 COMMIT Transaction A: Reads balance again = ₹8,000</p>
          <p>C. Phantom read</p>
          <p>A transaction repeats a query and receives a different set of matching rows because another transaction has inserted, deleted, or modified rows that change the query result.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Example:</h4>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Transaction A executes:</h4>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`SELECT * FROM ecommerce.orders WHERE total_amount > 10000;`}</code>
            </pre>
          </div>
          <p>Another transaction inserts an order worth ₹15,000 and commits.</p>
          <p>Transaction A repeats the query and sees an additional matching row under an isolation mode that allows that behavior.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">18.3 SQL isolation levels</h3>
          <p>The SQL standard defines four major isolation levels.</p>
          <p>Read Uncommitted.</p>
          <p>Read Committed.</p>
          <p>Repeatable Read.</p>
          <p>Serializable.</p>
          <p>Read Uncommitted</p>
          <p>The weakest standard isolation level.</p>
          <p>It permits dirty reads in database systems that implement them.</p>
          <p>PostgreSQL treats READ UNCOMMITTED as READ COMMITTED, so dirty reads are not permitted in PostgreSQL.</p>
          <p>Read Committed</p>
          <p>A transaction sees committed data according to the database's statement-level snapshot behavior.</p>
          <p>In PostgreSQL, each statement receives a new snapshot.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Example:</h4>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`BEGIN TRANSACTION ISOLATION LEVEL READ COMMITTED; SELECT * FROM bank_accounts WHERE account_id = 101; -- Other transaction changes and commits SELECT * FROM bank_accounts WHERE account_id = 101; COMMIT;`}</code>
            </pre>
          </div>
          <p>The second query may see the committed change made by another transaction.</p>
          <p>This is PostgreSQL's default isolation level.</p>
          <p>Repeatable Read</p>
          <p>Provides a stable transaction snapshot in PostgreSQL.</p>
          <p>A transaction generally continues to see the committed database state from when its snapshot was established, rather than seeing later committed changes from other transactions.</p>
          <p>PostgreSQL's implementation uses snapshot isolation and can prevent phantom reads that the SQL standard permits at Repeatable Read.</p>
          <p>However, Repeatable Read does not prevent every possible application-level concurrency anomaly. Some write conflicts result in serialization failures.</p>
          <p>Serializable</p>
          <p>Provides the strongest standard isolation guarantee.</p>
          <p>The database ensures that successfully committed transactions behave as though they had executed in some serial order.</p>
          <p>In PostgreSQL, the Serializable implementation uses Serializable Snapshot Isolation and may abort transactions when it detects dangerous concurrent patterns.</p>
          <p>Applications must be prepared to retry transactions that fail with serialization errors.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">18.4 Isolation level comparison</h3>
          <p>Isolation level</p>
          <p>Dirty reads</p>
          <p>Non-repeatable reads</p>
          <p>Phantom reads</p>
          <p>Read Uncommitted</p>
          <p>Possible in systems implementing it</p>
          <p>Possible</p>
          <p>Possible</p>
          <p>Read Committed</p>
          <p>Prevented in PostgreSQL</p>
          <p>Possible</p>
          <p>Possible</p>
          <p>Repeatable Read</p>
          <p>Prevented</p>
          <p>Prevented in PostgreSQL</p>
          <p>Prevented in PostgreSQL</p>
          <p>Serializable</p>
          <p>Prevented</p>
          <p>Prevented</p>
          <p>Prevented</p>
          <p>These are the SQL-standard distinctions with PostgreSQL behavior noted. Database implementations can differ.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">18.5 Setting an isolation level in PostgreSQL</h3>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`BEGIN TRANSACTION ISOLATION LEVEL REPEATABLE READ; SELECT * FROM ecommerce.orders; COMMIT;`}</code>
            </pre>
          </div>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">For Serializable:</h4>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`BEGIN TRANSACTION ISOLATION LEVEL SERIALIZABLE; SELECT customer_id, SUM(total_amount) FROM ecommerce.orders GROUP BY customer_id; COMMIT;`}</code>
            </pre>
          </div>
          <p>In real systems, Serializable transactions need appropriate retry handling.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">18.6 What is MVCC?</h3>
          <p>MVCC stands for Multi-Version Concurrency Control.</p>
          <p>It allows database transactions to work with different versions of records, depending on their visibility rules.</p>
          <p>PostgreSQL uses MVCC.</p>
          <div className="my-3 p-3 rounded-xl bg-orange-50/60 border border-orange-200/80 flex items-center justify-between gap-3 text-xs">
            <div className="font-semibold text-stone-800 flex items-center gap-2"><span>&#128279;</span> <span>Complete Database Mastery Part 5: Transactions, Concurrency &amp; ACID | Wasil Zafar</span></div>
            <a href="https://images.openai.com/static-rsc-4/8eZcRsqjueG8Qt2SPJkttSVLZtBYrYLZ2cM1wDi_8IGHImgBA0TJQJyGmm1rpJTUAgj7QAxjqAEYSpTC9J1e_z4WJsRu8prCxR3C3MLt6LyWiZrPu1cFpISsOL1tqYfmk-AViDCfWGXanT9-Y_MgjirfgWHPykVnqGv5_1-9bIU?purpose=inline" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 font-bold inline-flex items-center gap-1 cursor-pointer">View Resource &rarr;</a>
          </div>
          <div className="my-3 p-3 rounded-xl bg-orange-50/60 border border-orange-200/80 flex items-center justify-between gap-3 text-xs">
            <div className="font-semibold text-stone-800 flex items-center gap-2"><span>&#128279;</span> <span>wasilzafar.com</span></div>
            <a href="https://www.wasilzafar.com/pages/series/database-mastery/database-mastery-transactions-concurrency.html?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 font-bold inline-flex items-center gap-1 cursor-pointer">View Resource &rarr;</a>
          </div>
          <p>Consider a customer record.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Original state:</h4>
          <p>customer_id = 101 city = Pune</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">A transaction updates it:</h4>
          <p>customer_id = 101 city = Mumbai</p>
          <p>Rather than overwriting data in a simplistic manner, PostgreSQL maintains row versions and uses transaction visibility information to determine which version a transaction can observe.</p>
          <p>This helps readers and writers operate concurrently without every read requiring a blocking lock on the row.</p>
          <p>Old row versions eventually become eligible for cleanup through PostgreSQL's vacuum processes, once they are no longer needed by active transactions.</p>
          <p>Why MVCC matters</p>
          <p>Supports concurrent read and write operations.</p>
          <p>Provides snapshot-based visibility.</p>
          <p>Helps reduce read/write blocking.</p>
          <p>Supports transaction isolation.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">18.7 Database locking</h3>
          <p>Locks coordinate operations that need controlled access to database objects.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Common categories include:</h4>
          <p>Row-level locks: Protect specific rows against conflicting operations.</p>
          <p>Table-level locks: Protect a table against certain conflicting operations.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Example:</h4>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`BEGIN; SELECT * FROM ecommerce.products WHERE product_id = 1 FOR UPDATE; UPDATE ecommerce.products SET stock_quantity = stock_quantity - 1 WHERE product_id = 1; COMMIT;`}</code>
            </pre>
          </div>
          <p>FOR UPDATE locks the selected rows against conflicting modifications until the transaction finishes.</p>
          <p>This is useful for inventory reservation workflows, when combined with correct availability checks.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">18.8 Deadlocks</h3>
          <p>A deadlock occurs when two or more transactions wait for resources held by each other.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Example:</h4>
          <p>Transaction A: Locks Row 1 Requests Row 2 Transaction B: Locks Row 2 Requests Row 1</p>
          <p>Neither transaction can proceed.</p>
          <div className="my-3 p-3 rounded-xl bg-orange-50/60 border border-orange-200/80 flex items-center justify-between gap-3 text-xs">
            <div className="font-semibold text-stone-800 flex items-center gap-2"><span>&#128279;</span> <span>Deadlocks while Bulk Updating in PostgreSQL | by Harshil Jani | Medium</span></div>
            <a href="https://images.openai.com/static-rsc-4/tARtEAkhH7l6TqgbLtoSZlpkUT2tsPgXxek3JZFEGJXyQBWg8GOtAmEfsEysd8A3UogRNc2AIsIfQZFDNgaz9Q5LnVbW9WZq-Uj7CF6YLlAAZELQ-SM4F0EgPuBHz8ZhltBiVPyZijVkETu6lgxqi5iIheFQZwRkBKG0-tGi_o4?purpose=inline" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 font-bold inline-flex items-center gap-1 cursor-pointer">View Resource &rarr;</a>
          </div>
          <div className="my-3 p-3 rounded-xl bg-orange-50/60 border border-orange-200/80 flex items-center justify-between gap-3 text-xs">
            <div className="font-semibold text-stone-800 flex items-center gap-2"><span>&#128279;</span> <span>medium.com</span></div>
            <a href="https://medium.com/%40harshiljani2002/deadlocks-while-bulk-updating-in-postgresql-4af4161b7ff8?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 font-bold inline-flex items-center gap-1 cursor-pointer">View Resource &rarr;</a>
          </div>
          <p>Databases such as PostgreSQL detect deadlocks and abort one transaction to break the cycle.</p>
          <p>How to reduce deadlocks</p>
          <p>Access shared resources in a consistent order.</p>
          <p>Keep transactions short.</p>
          <p>Avoid unnecessary locks.</p>
          <p>Index predicates used in updates and deletes appropriately.</p>
          <p>Retry transactions when a deadlock is detected.</p>
          <p>Avoid user interaction during open transactions.</p>
          <p>Data Engineering example</p>
          <p>Suppose two ingestion pipelines simultaneously update product inventory and sales data.</p>
          <p>If they lock shared tables in different orders, they may introduce deadlocks.</p>
          <p>Understanding locking behavior helps engineers design safer concurrent loading operations.</p>
        </div>
      </section>
      {"/* SECTION 19: Indexing Fundamentals */"}
      <section id="section-19" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 19
          </span>
          <span className="text-xs font-mono text-stone-500">Index Internals (B-Tree/GIN/BRIN)</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          19. Indexing Fundamentals
        </h2>
        <div className="space-y-4 text-stone-700 leading-relaxed text-sm sm:text-base">
          <p>Indexes are one of the most important tools for SQL performance optimization.</p>
          <p>As tables grow, searching every row for a particular value can become expensive.</p>
          <p>Indexes help the database locate matching records more efficiently.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">19.1 What is an index?</h3>
          <p>A database index is an additional data structure that helps identify rows without always scanning the entire table.</p>
          <p>Think of a book.</p>
          <p>Without an index, finding a particular topic requires checking pages one by one.</p>
          <p>With an index, you can look up the topic and jump to the relevant page.</p>
          <p>A database index serves a similar purpose.</p>
          <div className="my-3 p-3 rounded-xl bg-orange-50/60 border border-orange-200/80 flex items-center justify-between gap-3 text-xs">
            <div className="font-semibold text-stone-800 flex items-center gap-2"><span>&#128279;</span> <span>A Busy Developer’s Guide to Database Storage Engines — The Basics</span></div>
            <a href="https://images.openai.com/static-rsc-4/1GlnGh34wT-ZGZf8Cn9KPRN9FHUkt_2lTvt69rMo71xV9YdPTPDSLVoaJ8qDeHYQbCFTWEfe0JbK7xrGj9DjTactpNK80HMoClIpo-TlSJm5ERPTVJJ8BNLTrEtV4ySHIhx4MosLM5tUNGmhI45VFHmVOGlmOivHkubd7jngTXI?purpose=inline" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 font-bold inline-flex items-center gap-1 cursor-pointer">View Resource &rarr;</a>
          </div>
          <div className="my-3 p-3 rounded-xl bg-orange-50/60 border border-orange-200/80 flex items-center justify-between gap-3 text-xs">
            <div className="font-semibold text-stone-800 flex items-center gap-2"><span>&#128279;</span> <span>yugabyte.com</span></div>
            <a href="https://www.yugabyte.com/blog/a-busy-developers-guide-to-database-storage-engines-the-basics/?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 font-bold inline-flex items-center gap-1 cursor-pointer">View Resource &rarr;</a>
          </div>
          <p>Suppose a customer table contains 10 million rows.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Query:</h4>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`SELECT * FROM ecommerce.customers WHERE email = 'rahul@example.com';`}</code>
            </pre>
          </div>
          <p>Without a suitable index, the database may need to inspect many rows.</p>
          <p>With an appropriate index, the database can potentially locate the matching record much faster.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">19.2 Creating an index</h3>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`CREATE INDEX idx_customers_email ON ecommerce.customers(email);`}</code>
            </pre>
          </div>
          <p>The index is created on the email column.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Query:</h4>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`SELECT * FROM ecommerce.customers WHERE email = 'rahul@example.com';`}</code>
            </pre>
          </div>
          <p>The optimizer can consider using the index.</p>
          <p>An index does not force the database to use it. The planner chooses between available execution strategies.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">19.3 Why do indexes improve performance?</h3>
          <p>A suitable index can reduce the amount of data the database needs to inspect.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Index structures also support:</h4>
          <p>Equality searches.</p>
          <p>Range searches.</p>
          <p>Ordered retrieval.</p>
          <p>Join lookups.</p>
          <p>Uniqueness enforcement.</p>
          <p>Efficient filtering.</p>
          <p>However, indexes consume storage and create additional work during inserts, updates, and deletes.</p>
          <p>Adding more indexes is not automatically a good optimization.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">19.4 B-tree indexes</h3>
          <p>B-tree is PostgreSQL's default index type.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">It supports:</h4>
          <p>Equality comparisons.</p>
          <p>Range queries.</p>
          <p>Sorting.</p>
          <p>Ordered access.</p>
          <p>MIN and MAX operations in appropriate plans.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Example:</h4>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`CREATE INDEX idx_orders_order_date ON ecommerce.orders(order_date);`}</code>
            </pre>
          </div>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Queries that may benefit:</h4>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`SELECT * FROM ecommerce.orders WHERE order_date >= '2026-11-01' AND order_date < '2026-12-01';`}</code>
            </pre>
          </div>
          <p>The range-based timestamp filtering can make use of the index when appropriate.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">19.5 Hash indexes</h3>
          <p>Hash indexes are designed primarily for equality comparisons.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Example:</h4>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`CREATE INDEX idx_customers_city_hash ON ecommerce.customers USING HASH(city);`}</code>
            </pre>
          </div>
          <p>Hash indexes do not provide the same range and ordering capabilities as B-tree indexes.</p>
          <p>B-tree is usually the more general-purpose choice.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">19.6 Composite indexes</h3>
          <p>A composite index uses multiple columns.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Example:</h4>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`CREATE INDEX idx_orders_customer_date ON ecommerce.orders(customer_id, order_date);`}</code>
            </pre>
          </div>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">This index may help queries such as:</h4>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`SELECT * FROM ecommerce.orders WHERE customer_id = 101 ORDER BY order_date DESC;`}</code>
            </pre>
          </div>
          <p>Column ordering matters</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">In a B-tree index on:</h4>
          <p>(customer_id, order_date)</p>
          <p>The leading customer ID is especially important.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">The index is generally most useful for predicates involving:</h4>
          <p>customer_id.</p>
          <p>customer_id and order_date.</p>
          <p>It is not generally as effective for queries filtering only by order_date.</p>
          <p>If a different query workload frequently searches by date alone, a separate date index may be appropriate.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">19.7 Unique indexes</h3>
          <p>A unique index prevents duplicate indexed key values, subject to NULL semantics and index definition.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Example:</h4>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`CREATE UNIQUE INDEX idx_unique_customer_email ON ecommerce.customers(email);`}</code>
            </pre>
          </div>
          <p>This enforces email uniqueness.</p>
          <p>A UNIQUE constraint also creates an appropriate unique index in PostgreSQL.</p>
          <p>Prefer a unique constraint when expressing a business integrity rule.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">19.8 Partial indexes</h3>
          <p>A partial index indexes only rows matching a condition.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Example:</h4>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`CREATE INDEX idx_pending_orders ON ecommerce.orders(order_date) WHERE status = 'PENDING';`}</code>
            </pre>
          </div>
          <p>This index only includes pending orders.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">A query such as:</h4>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`SELECT * FROM ecommerce.orders WHERE status = 'PENDING' AND order_date >= '2026-11-01';`}</code>
            </pre>
          </div>
          <p>may benefit from the partial index.</p>
          <p>Partial indexes are useful when a small subset of a large table is queried frequently.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">19.9 Expression indexes</h3>
          <p>An expression index indexes the result of an expression rather than just a raw column.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Example:</h4>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`CREATE INDEX idx_customers_lower_email ON ecommerce.customers(LOWER(email));`}</code>
            </pre>
          </div>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Then:</h4>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`SELECT * FROM ecommerce.customers WHERE LOWER(email) = 'rahul@example.com';`}</code>
            </pre>
          </div>
          <p>can use the expression index.</p>
          <p>This is useful when queries repeatedly apply a transformation to the indexed field.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">19.10 Covering indexes</h3>
          <p>A covering index contains all the columns needed by a particular query.</p>
          <p>PostgreSQL supports INCLUDE columns in B-tree indexes.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Example:</h4>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`CREATE INDEX idx_orders_customer_covering ON ecommerce.orders(customer_id) INCLUDE (order_date, total_amount);`}</code>
            </pre>
          </div>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">This may permit an index-only scan for a query such as:</h4>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`SELECT order_date, total_amount FROM ecommerce.orders WHERE customer_id = 101;`}</code>
            </pre>
          </div>
          <p>However, PostgreSQL may still need heap visibility checks depending on the visibility map and current database state.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">19.11 GIN and GiST indexes</h3>
          <p>B-tree is not suitable for every data type or query pattern.</p>
          <p>PostgreSQL supports several specialized index types.</p>
          <p>Index type</p>
          <p>Common use</p>
          <p>B-tree</p>
          <p>Equality, ranges, ordered queries</p>
          <p>Hash</p>
          <p>Equality comparisons</p>
          <p>GIN</p>
          <p>JSONB, arrays, full-text search</p>
          <p>GiST</p>
          <p>Geometric and specialized search</p>
          <p>BRIN</p>
          <p>Very large physically correlated tables</p>
          <p>SP-GiST</p>
          <p>Certain partitioned search structures</p>
          <p>GIN example with JSONB</p>
          <p>Suppose a products table contains JSONB metadata.</p>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`ALTER TABLE ecommerce.products ADD COLUMN metadata JSONB;`}</code>
            </pre>
          </div>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Example data:</h4>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`UPDATE ecommerce.products SET metadata = '{"brand":"Example","color":"Black"}' WHERE product_id = 1;`}</code>
            </pre>
          </div>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Create an index:</h4>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`CREATE INDEX idx_products_metadata ON ecommerce.products USING GIN(metadata);`}</code>
            </pre>
          </div>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Query:</h4>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`SELECT * FROM ecommerce.products WHERE metadata @> '{"brand":"Example"}';`}</code>
            </pre>
          </div>
          <p>A GIN index can help with supported JSONB containment queries.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">19.12 BRIN indexes</h3>
          <p>BRIN stands for Block Range Index.</p>
          <p>It summarizes values over ranges of physical table pages.</p>
          <p>It is useful for very large tables where values correlate with physical storage order.</p>
          <p>For example, a massive event table where records are mostly inserted chronologically.</p>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`CREATE INDEX idx_events_timestamp_brin ON events USING BRIN(event_timestamp);`}</code>
            </pre>
          </div>
          <p>BRIN indexes are often much smaller than comparable B-tree indexes, but they are not equally selective for every data distribution.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">19.13 Index disadvantages</h3>
          <p>Indexes also create costs.</p>
          <p>Storage: Each index consumes database storage.</p>
          <p>Write overhead: Inserts, updates, and deletes may require index maintenance.</p>
          <p>Maintenance: Indexes may require vacuuming, rebuilding, or monitoring.</p>
          <p>Planner complexity: Unnecessary indexes can create maintenance overhead without helping queries.</p>
          <p>The objective is not to index every column.</p>
          <p>The objective is to create the indexes that support important access patterns.</p>
        </div>
      </section>
      {"/* SECTION 20: Query Execution Plans */"}
      <section id="section-20" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 20
          </span>
          <span className="text-xs font-mono text-stone-500">EXPLAIN ANALYZE Plans</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          20. Query Execution Plans
        </h2>
        <div className="space-y-4 text-stone-700 leading-relaxed text-sm sm:text-base">
          <p>Writing correct SQL is only the first step.</p>
          <p>A Data Engineer must understand how the database executes a query.</p>
          <p>A query that performs well on 1,000 records may perform badly on 100 million records.</p>
          <p>Query execution plans show how the database expects to retrieve and process information.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">20.1 What is a query execution plan?</h3>
          <p>A query execution plan is a description of the operations the database uses to execute a query.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">For example, a plan may include:</h4>
          <p>Sequential scans.</p>
          <p>Index scans.</p>
          <p>Index-only scans.</p>
          <p>Nested loop joins.</p>
          <p>Hash joins.</p>
          <p>Merge joins.</p>
          <p>Sorting.</p>
          <p>Aggregation.</p>
          <p>Filtering.</p>
          <div className="my-3 p-3 rounded-xl bg-orange-50/60 border border-orange-200/80 flex items-center justify-between gap-3 text-xs">
            <div className="font-semibold text-stone-800 flex items-center gap-2"><span>&#128279;</span> <span>7 Postgres Plan Reads Every AI Engineer Should Master | by Velorum | Medium</span></div>
            <a href="https://images.openai.com/static-rsc-4/FksFD1ySjhI6OzUURrilqj0s6Sm0g8EqCVXpsbrQvsfllh3Jf1ojO2_ykPIbu6B6VHuSAyc81MQd_KL3QINgkk_MNp46bS0shpvjfMn7bqSU6AD7FzjzNJgP0zuWE1GlyOzVuVrx1Av19WxZ5wBF_XJc0ILBJCbx_Ka9wuwWRCM?purpose=inline" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 font-bold inline-flex items-center gap-1 cursor-pointer">View Resource &rarr;</a>
          </div>
          <div className="my-3 p-3 rounded-xl bg-orange-50/60 border border-orange-200/80 flex items-center justify-between gap-3 text-xs">
            <div className="font-semibold text-stone-800 flex items-center gap-2"><span>&#128279;</span> <span>medium.com</span></div>
            <a href="https://medium.com/%401nick1patel1/7-postgres-plan-reads-every-ai-engineer-should-master-d4d81b58e3bc?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 font-bold inline-flex items-center gap-1 cursor-pointer">View Resource &rarr;</a>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">20.2 EXPLAIN</h3>
          <p>PostgreSQL uses EXPLAIN to display the estimated execution plan.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Example:</h4>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`EXPLAIN SELECT * FROM ecommerce.orders WHERE customer_id = 1;`}</code>
            </pre>
          </div>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">An illustrative plan might look like:</h4>
          <p>Index Scan using orders_customer_idx on orders Index Cond: (customer_id = 1)</p>
          <p>This shows the database planning to use an index scan.</p>
          <p>However, your actual output depends on the schema, available indexes, database statistics, data volume, and PostgreSQL version.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">20.3 EXPLAIN ANALYZE</h3>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`EXPLAIN ANALYZE executes the query and reports actual execution information in addition to the plan.
EXPLAIN ANALYZE SELECT * FROM ecommerce.orders WHERE customer_id = 1;`}</code>
            </pre>
          </div>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">It can show:</h4>
          <p>Estimated rows.</p>
          <p>Actual rows.</p>
          <p>Actual execution time.</p>
          <p>Planning time.</p>
          <p>Number of loops.</p>
          <p>Node-level timing.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Example of the structure:</h4>
          <p>Index Scan using orders_customer_idx (cost=0.15..8.20 rows=3 width=...) (actual time=0.020..0.030 rows=2 loops=1)</p>
          <p>The numbers above are illustrative.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Important warning</h4>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`EXPLAIN ANALYZE actually executes the SQL statement.`}</code>
            </pre>
          </div>
          <p>It is safe to test ordinary SELECT queries in a controlled database, but executing it against a modifying statement such as DELETE, UPDATE, or INSERT can cause real changes.</p>
          <p>For write statements, carefully use transactions and rollback when appropriate, remembering that some external side effects may not be reversible.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">20.4 Sequential scan</h3>
          <p>A sequential scan reads the table's pages to examine rows.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Example:</h4>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`SELECT * FROM ecommerce.orders;`}</code>
            </pre>
          </div>
          <p>If the query needs most of the table, a sequential scan may be the most efficient strategy.</p>
          <p>A sequential scan is not necessarily bad.</p>
          <p>The database may prefer it even when an index exists.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">20.5 Index scan</h3>
          <p>An index scan uses an index to identify matching rows and then accesses the corresponding table rows.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Example:</h4>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`SELECT * FROM ecommerce.orders WHERE customer_id = 1;`}</code>
            </pre>
          </div>
          <p>A selective indexed condition may make an index scan efficient.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">20.6 Index-only scan</h3>
          <p>An index-only scan retrieves the required data from the index without needing to read the table for every matching row, provided the index contains the required columns and PostgreSQL's visibility information permits it.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Example:</h4>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`CREATE INDEX idx_orders_customer_amount ON ecommerce.orders(customer_id) INCLUDE (total_amount);`}</code>
            </pre>
          </div>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Query:</h4>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`EXPLAIN ANALYZE SELECT total_amount FROM ecommerce.orders WHERE customer_id = 1;`}</code>
            </pre>
          </div>
          <p>PostgreSQL may use an index-only scan when appropriate.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">20.7 Join algorithms</h3>
          <p>PostgreSQL uses different join algorithms based on estimated costs and query conditions.</p>
          <p>A. Nested loop join</p>
          <p>For each matching row from one input, the database searches the other input.</p>
          <p>It is often effective when one side is small and the other side can be accessed efficiently through an index.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Illustration:</h4>
          <div className="my-4 p-4 rounded-xl bg-stone-50 border border-stone-200">
            <div className="text-xs font-bold uppercase tracking-wider text-stone-500 mb-2 font-mono">Architecture Flow</div>
            <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
              <span className="px-3 py-1.5 rounded-lg bg-white border border-stone-300 font-semibold text-stone-800 shadow-2xs">Outer table</span>
              <span className="text-orange-500 font-bold">&rarr;</span>
              <span className="px-3 py-1.5 rounded-lg bg-white border border-stone-300 font-semibold text-stone-800 shadow-2xs">For each row</span>
              <span className="text-orange-500 font-bold">&rarr;</span>
              <span className="px-3 py-1.5 rounded-lg bg-white border border-stone-300 font-semibold text-stone-800 shadow-2xs">Search inner table using index</span>
            </div>
          </div>
          <p>B. Hash join</p>
          <p>The database builds a hash table from one input and probes it using rows from the other input.</p>
          <p>It is particularly useful for large equijoins when suitable conditions and memory are available.</p>
          <p>C. Merge join</p>
          <p>Both input datasets are processed in sorted order and matching values are combined.</p>
          <p>It can be efficient for suitably sorted or indexed inputs.</p>
          <p>Join algorithm comparison</p>
          <p>Join algorithm</p>
          <p>Common use</p>
          <p>Nested loop</p>
          <p>Small outer input or efficient indexed lookup</p>
          <p>Hash join</p>
          <p>Large equality joins</p>
          <p>Merge join</p>
          <p>Inputs available in compatible sorted order</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">20.8 Sorting and aggregation nodes</h3>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Execution plans may also contain:</h4>
          <p>Sort: Orders rows.</p>
          <p>HashAggregate: Groups rows using a hash structure.</p>
          <p>GroupAggregate: Processes ordered groups.</p>
          <p>Hash: Builds a hash structure used by operations such as hash joins.</p>
          <p>Large sorts or hash operations can exceed available memory and spill to temporary disk storage.</p>
          <p>This can significantly affect performance.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">20.9 Understanding plan costs</h3>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">PostgreSQL commonly displays:</h4>
          <p>cost=STARTUP_COST..TOTAL_COST rows=ESTIMATED_ROWS width=ESTIMATED_ROW_WIDTH</p>
          <p>These are optimizer cost estimates, not direct measurements of milliseconds.</p>
          <p>With EXPLAIN ANALYZE, you can compare estimated and actual execution characteristics.</p>
          <p>If estimated rows differ significantly from actual rows, table statistics or data distribution assumptions may be inaccurate.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">20.10 EXPLAIN with buffers</h3>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Use:</h4>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`EXPLAIN (ANALYZE, BUFFERS) SELECT * FROM ecommerce.orders WHERE customer_id = 1;`}</code>
            </pre>
          </div>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">This provides useful information about:</h4>
          <p>Shared buffer hits.</p>
          <p>Shared buffer reads.</p>
          <p>Temporary blocks.</p>
          <p>Buffer usage for plan nodes.</p>
          <p>For real performance investigations, look at actual rows, execution time, loops, buffer activity, and whether expensive operations are occurring repeatedly.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">20.11 Query plan investigation workflow</h3>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">When a SQL query is slow:</h4>
          <p>Capture the exact query.</p>
          <p>Run EXPLAIN.</p>
          <p>Examine the chosen scan and join methods.</p>
          <p>Check estimated versus actual rows.</p>
          <p>Look for unnecessary sequential scans.</p>
          <p>Check repeated nested loop operations.</p>
          <p>Examine sorting and temporary disk activity.</p>
          <p>Review existing indexes.</p>
          <p>Inspect statistics.</p>
          <p>Test one optimization at a time.</p>
          <p>This is more reliable than adding indexes without understanding the real bottleneck.</p>
        </div>
      </section>
      {"/* SECTION 21: Advanced SQL Optimization */"}
      <section id="section-21" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 21
          </span>
          <span className="text-xs font-mono text-stone-500">Query Optimization & SARGability</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          21. Advanced SQL Optimization
        </h2>
        <div className="space-y-4 text-stone-700 leading-relaxed text-sm sm:text-base">
          <p>SQL optimization is the process of improving query execution efficiency while preserving the intended results.</p>
          <p>For Data Engineers, query optimization is essential because data pipelines may process millions or billions of records.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">A poorly designed query can:</h4>
          <p>Consume excessive CPU.</p>
          <p>Read unnecessary data.</p>
          <p>Use too much memory.</p>
          <p>Create expensive temporary files.</p>
          <p>Increase cloud compute costs.</p>
          <p>Delay downstream reports.</p>
          <p>Affect application workloads.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">21.1 Avoid SELECT *</h3>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Less efficient for a narrow workload:</h4>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`SELECT * FROM ecommerce.orders;`}</code>
            </pre>
          </div>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Better:</h4>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`SELECT order_id, customer_id, total_amount FROM ecommerce.orders;`}</code>
            </pre>
          </div>
          <p>Why?</p>
          <p>The second query retrieves only necessary columns.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">This reduces:</h4>
          <p>Data returned.</p>
          <p>Network transfer.</p>
          <p>Memory consumption in consumers.</p>
          <p>Unnecessary column processing.</p>
          <p>In PostgreSQL, this does not necessarily avoid a table scan, but it can still reduce data movement and allow index-only access in appropriate circumstances.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">21.2 Filter as early as practical</h3>
          <p>Suppose you need to calculate revenue from completed orders.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Potentially unnecessary approach:</h4>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`SELECT * FROM ecommerce.orders;`}</code>
            </pre>
          </div>
          <p>Then filter the records in Python.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Better:</h4>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`SELECT customer_id, SUM(total_amount) AS revenue FROM ecommerce.orders WHERE status = 'COMPLETED' GROUP BY customer_id;`}</code>
            </pre>
          </div>
          <p>The database filters and aggregates the data before returning the results.</p>
          <p>This reduces unnecessary movement into the application.</p>
          <p>The optimizer can also push eligible predicates toward the data source in complex queries.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">21.3 Use appropriate indexes</h3>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Consider:</h4>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`SELECT * FROM ecommerce.orders WHERE customer_id = 101;`}</code>
            </pre>
          </div>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">An index could be useful:</h4>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`CREATE INDEX idx_orders_customer ON ecommerce.orders(customer_id);`}</code>
            </pre>
          </div>
          <p>However, index effectiveness depends on selectivity and the amount of data returned.</p>
          <p>If a query returns most of a table, a sequential scan can be cheaper than using an index to retrieve many individual rows.</p>
          <p>Always verify with EXPLAIN ANALYZE.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">21.4 Avoid functions on indexed columns when a range predicate can be used</h3>
          <p>Suppose we want orders placed on November 9.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Potentially less efficient:</h4>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`SELECT * FROM ecommerce.orders WHERE DATE(order_date) = DATE '2026-11-09';`}</code>
            </pre>
          </div>
          <p>The expression transforms the indexed column.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">A better range-based query is:</h4>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`SELECT * FROM ecommerce.orders WHERE order_date >= TIMESTAMPTZ '2026-11-09 00:00:00+05:30' AND order_date < TIMESTAMPTZ '2026-11-10 00:00:00+05:30';`}</code>
            </pre>
          </div>
          <p>This is more directly compatible with an ordinary B-tree index on order_date.</p>
          <p>The time zone and date boundaries should reflect the application's business time zone.</p>
          <p>This is an example of writing a predicate that preserves the useful ordering of an indexed column.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">21.5 Understand SARGability</h3>
          <p>SARGability refers to whether a search condition can be used effectively with an index.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Consider a numeric column:</h4>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`WHERE salary = 50000`}</code>
            </pre>
          </div>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">This is typically more index-friendly than:</h4>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`WHERE salary + 1000 = 51000`}</code>
            </pre>
          </div>
          <p>The second condition applies an expression to the column.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">It can be rewritten as:</h4>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`WHERE salary = 50000`}</code>
            </pre>
          </div>
          <p>Not every expression prevents index usage. PostgreSQL supports expression indexes, but the indexed expression must be compatible with the query.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">21.6 Avoid unnecessary DISTINCT</h3>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Example:</h4>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`SELECT DISTINCT customer_id FROM ecommerce.orders;`}</code>
            </pre>
          </div>
          <p>The database must remove duplicates.</p>
          <p>Sometimes this is required. Other times, it hides an incorrect join.</p>
          <p>Before applying DISTINCT, investigate why duplicate records exist.</p>
          <p>For example, joining orders to order items naturally produces multiple rows for an order with multiple items.</p>
          <p>Those aren't necessarily duplicates.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">21.7 Use EXISTS for existence checks</h3>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Example:</h4>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`SELECT c.customer_id, c.customer_name FROM ecommerce.customers AS c WHERE EXISTS ( SELECT 1 FROM ecommerce.orders AS o WHERE o.customer_id = c.customer_id );`}</code>
            </pre>
          </div>
          <p>This directly expresses the business question: does at least one matching order exist?</p>
          <p>PostgreSQL may transform this into a semi-join.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">21.8 Prefer appropriate bulk database operations</h3>
          <p>A Python program inserting records one at a time can generate substantial overhead.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Potentially expensive pattern:</h4>
          <p>for record in records: cursor.execute( "INSERT INTO orders VALUES (...)" )</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">For bulk ingestion, use appropriate batch methods such as:</h4>
          <p>executemany().</p>
          <p>SQLAlchemy bulk operations.</p>
          <p>PostgreSQL COPY.</p>
          <p>Database-specific bulk loading utilities.</p>
          <p>PostgreSQL's COPY command is particularly useful for high-volume data ingestion.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Example:</h4>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`COPY ecommerce.orders ( customer_id, order_date, status, total_amount ) FROM '/path/to/orders.csv' WITH (FORMAT CSV, HEADER TRUE);`}</code>
            </pre>
          </div>
          <p>This example requires the server process to access the specified file path and have appropriate permissions.</p>
          <p>From a client application, PostgreSQL client-side COPY facilities may be more appropriate.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">21.9 Optimize JOIN operations</h3>
          <p>A query joining large tables can become expensive.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Useful practices:</h4>
          <p>Join using correct keys.</p>
          <p>Ensure appropriate indexes exist where useful.</p>
          <p>Avoid unnecessary columns.</p>
          <p>Filter irrelevant rows.</p>
          <p>Aggregate before joining when doing so preserves the intended result.</p>
          <p>Avoid accidental many-to-many multiplication.</p>
          <p>Inspect the join algorithm chosen by the optimizer.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Example:</h4>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Potentially problematic query:</h4>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`SELECT * FROM ecommerce.customers AS c JOIN ecommerce.orders AS o ON c.customer_id = o.customer_id JOIN ecommerce.order_items AS oi ON o.order_id = oi.order_id JOIN ecommerce.products AS p ON oi.product_id = p.product_id;`}</code>
            </pre>
          </div>
          <p>If you only need the customer's total spending, joining the product table is unnecessary.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Better:</h4>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`SELECT c.customer_id, c.customer_name, SUM(o.total_amount) AS total_spending FROM ecommerce.customers AS c JOIN ecommerce.orders AS o ON c.customer_id = o.customer_id WHERE o.status = 'COMPLETED' GROUP BY c.customer_id, c.customer_name;`}</code>
            </pre>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">21.10 Optimize GROUP BY and aggregations</h3>
          <p>Aggregation can consume significant memory and processing time.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Consider:</h4>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`SELECT customer_id, SUM(total_amount) FROM ecommerce.orders GROUP BY customer_id;`}</code>
            </pre>
          </div>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">When processing a large dataset:</h4>
          <p>Filter rows early where appropriate.</p>
          <p>Avoid unnecessary grouping dimensions.</p>
          <p>Use appropriate data types.</p>
          <p>Review indexes and execution plans.</p>
          <p>Check for large hash aggregation or sorting operations.</p>
          <p>Ensure statistics are up to date.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">21.11 Use LIMIT for exploration</h3>
          <p>When exploring a large table, avoid retrieving everything unnecessarily.</p>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`SELECT * FROM ecommerce.orders LIMIT 20;`}</code>
            </pre>
          </div>
          <p>However, LIMIT does not guarantee that only 20 rows will be scanned.</p>
          <p>For predictable output, combine it with an ORDER BY clause.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">21.12 Table statistics and ANALYZE</h3>
          <p>PostgreSQL collects statistics about tables and column values.</p>
          <p>The optimizer uses these statistics to estimate query costs.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Update statistics manually:</h4>
          <p>ANALYZE ecommerce.orders;</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Or:</h4>
          <p>ANALYZE;</p>
          <p>ANALYZE examines table samples to update planner statistics.</p>
          <p>PostgreSQL's autovacuum system also performs automatic analysis under applicable conditions.</p>
          <p>Inaccurate statistics can lead to poor execution plans.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">21.13 VACUUM</h3>
          <p>PostgreSQL uses MVCC, which means updates and deletes can leave old row versions behind.</p>
          <p>VACUUM helps reclaim storage space for reuse and maintain database health.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Example:</h4>
          <p>VACUUM ANALYZE ecommerce.orders;</p>
          <p>This performs vacuuming and updates statistics.</p>
          <p>Routine maintenance is normally handled through autovacuum. Manual VACUUM operations are used when specific maintenance needs require them.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">21.14 Partitioning</h3>
          <p>Partitioning divides a large logical table into smaller physical pieces.</p>
          <p>This can improve data management and query performance when queries can eliminate irrelevant partitions.</p>
          <p>Example: A massive orders table partitioned by month.</p>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`CREATE TABLE monthly_orders ( order_id BIGINT, customer_id BIGINT, order_date DATE NOT NULL, total_amount NUMERIC(12,2) ) PARTITION BY RANGE (order_date);`}</code>
            </pre>
          </div>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Create a November partition:</h4>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`CREATE TABLE monthly_orders_november PARTITION OF monthly_orders FOR VALUES FROM ('2026-11-01') TO ('2026-12-01');`}</code>
            </pre>
          </div>
          <p>A query for November may only need to scan the relevant partition.</p>
          <p>This is called partition pruning.</p>
          <p>Common partitioning types</p>
          <p>Type</p>
          <p>How it works</p>
          <p>Example</p>
          <p>RANGE</p>
          <p>Divides values into ranges</p>
          <p>Orders by month</p>
          <p>LIST</p>
          <p>Divides values by specified values</p>
          <p>Regions</p>
          <p>HASH</p>
          <p>Distributes data using a hash function</p>
          <p>Customer ID</p>
          <p>Partitioning is not a replacement for indexing.</p>
          <p>It is a data organization strategy that should be used when table size and access patterns justify it.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">21.15 Database connection pooling</h3>
          <p>Creating a new database connection for every query can be expensive.</p>
          <p>Connection pooling maintains reusable database connections.</p>
          <p>For example, SQLAlchemy provides connection pooling through its engine.</p>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`from sqlalchemy import create_engine engine = create_engine( "postgresql+psycopg://user:password@localhost:5432/ecommerce_db", pool_size=10, max_overflow=5, pool_pre_ping=True )`}</code>
            </pre>
          </div>
          <p>This is an illustrative configuration; use environment variables for credentials and tune the pool based on the database's connection capacity and application workload.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Connection pooling is important in:</h4>
          <p>Backend services.</p>
          <p>Python data applications.</p>
          <p>Concurrent ingestion jobs.</p>
          <p>Long-running applications.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">21.16 Query optimization checklist</h3>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Before releasing a complex query, examine:</h4>
          <p>Are only necessary columns selected?</p>
          <p>Are irrelevant records filtered early?</p>
          <p>Are join conditions correct?</p>
          <p>Are aggregates affected by join fanout?</p>
          <p>Are appropriate indexes available?</p>
          <p>Are indexed predicates written efficiently?</p>
          <p>Are statistics up to date?</p>
          <p>Does the plan show excessive sorting or disk spilling?</p>
          <p>Is partition pruning working when expected?</p>
          <p>Are database connections reused appropriately?</p>
          <p>Can large data be processed in batches?</p>
          <p>Does the optimized query produce exactly the same results?</p>
          <p>The last point is crucial: performance improvements must not change the business meaning of the query.</p>
        </div>
      </section>
      {"/* SECTION 22: Complete Real-World Case Study — E-commerce Database Engineering */"}
      <section id="section-22" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 22
          </span>
          <span className="text-xs font-mono text-stone-500">Production Case Study</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          22. Complete Real-World Case Study — E-commerce Database Engineering
        </h2>
        <div className="space-y-4 text-stone-700 leading-relaxed text-sm sm:text-base">
          <p>We have covered the individual SQL concepts. Now let's combine them into an actual business scenario.</p>
          <p>Imagine an e-commerce organization called ShopSmart.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">The organization has:</h4>
          <p>5 million registered customers.</p>
          <p>500,000 products.</p>
          <p>Millions of historical orders.</p>
          <p>Multiple payment providers.</p>
          <p>Inventory distributed across warehouses.</p>
          <p>Customers purchasing products from multiple categories.</p>
          <p>The engineering team needs to build reliable SQL-based data processing and analytics.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">22.1 Business requirements</h3>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Management wants answers to the following questions:</h4>
          <p>What is total monthly revenue?</p>
          <p>Which customers generate the highest revenue?</p>
          <p>Which products are selling the most?</p>
          <p>Which categories generate the highest profit or revenue?</p>
          <p>Which customers have not purchased in six months?</p>
          <p>What are the latest orders for each customer?</p>
          <p>Which products have decreasing sales?</p>
          <p>Which payment transactions have failed?</p>
          <p>What percentage of customers purchase repeatedly?</p>
          <p>Why are analytical queries taking too long?</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">22.2 Database architecture</h3>
          <div className="my-3 p-3 rounded-xl bg-orange-50/60 border border-orange-200/80 flex items-center justify-between gap-3 text-xs">
            <div className="font-semibold text-stone-800 flex items-center gap-2"><span>&#128279;</span> <span>Ecommerce Entity Relationship Diagram</span></div>
            <a href="https://images.openai.com/static-rsc-4/MDlVu1pe299WakkzdOl_9Q2dXyr3tKLTMAidItw3jKtX6NzptEQzaTEzX67_YnwKS2u_B19FF_zwr9SSoDlZrgl_GBYKI_gvXy1gWJFMlrKNM9aaSBptvsg2Gvf0YxBDSw--4P55piJiqSdZniG39r0kxfrwz6eOaiQ2N9_-Y1Y?purpose=inline" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 font-bold inline-flex items-center gap-1 cursor-pointer">View Resource &rarr;</a>
          </div>
          <div className="my-3 p-3 rounded-xl bg-orange-50/60 border border-orange-200/80 flex items-center justify-between gap-3 text-xs">
            <div className="font-semibold text-stone-800 flex items-center gap-2"><span>&#128279;</span> <span>inettutor.com</span></div>
            <a href="https://www.inettutor.com/diagrams/ecommerce-entity-relationship-diagram/?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 font-bold inline-flex items-center gap-1 cursor-pointer">View Resource &rarr;</a>
          </div>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">The operational database consists of:</h4>
          <p>ecommerce_db │ ├── customers │ ├── products │ ├── categories │ ├── orders │ ├── order_items │ └── payments</p>
          <p>The SQL analytical layer combines these tables to create useful business information.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">22.3 Problem 1 — Calculate total revenue</h3>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Requirement:</h4>
          <p>Calculate total revenue from completed orders.</p>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`SELECT SUM(total_amount) AS total_revenue FROM ecommerce.orders WHERE status = 'COMPLETED';`}</code>
            </pre>
          </div>
          <p>This query calculates the total completed-order value.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">22.4 Problem 2 — Calculate customer-wise revenue</h3>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`SELECT c.customer_id, c.customer_name, SUM(o.total_amount) AS total_spending, COUNT(o.order_id) AS total_orders FROM ecommerce.customers AS c INNER JOIN ecommerce.orders AS o ON c.customer_id = o.customer_id WHERE o.status = 'COMPLETED' GROUP BY c.customer_id, c.customer_name ORDER BY total_spending DESC;`}</code>
            </pre>
          </div>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">This query answers:</h4>
          <p>Who are the highest-spending customers?</p>
          <p>How many completed orders did they place?</p>
          <p>How much revenue did each customer generate?</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">22.5 Problem 3 — Find the top five products</h3>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`SELECT p.product_id, p.product_name, SUM(oi.quantity) AS units_sold, SUM( oi.quantity * oi.unit_price ) AS total_revenue FROM ecommerce.products AS p JOIN ecommerce.order_items AS oi ON p.product_id = oi.product_id JOIN ecommerce.orders AS o ON oi.order_id = o.order_id WHERE o.status = 'COMPLETED' GROUP BY p.product_id, p.product_name ORDER BY total_revenue DESC LIMIT 5;`}</code>
            </pre>
          </div>
          <p>The output identifies the five products generating the highest sales revenue.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">22.6 Problem 4 — Calculate category-wise revenue</h3>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`SELECT cat.category_name, SUM( oi.quantity * oi.unit_price ) AS category_revenue FROM ecommerce.categories AS cat JOIN ecommerce.products AS p ON cat.category_id = p.category_id JOIN ecommerce.order_items AS oi ON p.product_id = oi.product_id JOIN ecommerce.orders AS o ON oi.order_id = o.order_id WHERE o.status = 'COMPLETED' GROUP BY cat.category_id, cat.category_name ORDER BY category_revenue DESC;`}</code>
            </pre>
          </div>
          <p>This helps management understand which product categories generate more sales.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">22.7 Problem 5 — Find customers who have never purchased</h3>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`SELECT c.customer_id, c.customer_name, c.city FROM ecommerce.customers AS c WHERE NOT EXISTS ( SELECT 1 FROM ecommerce.orders AS o WHERE o.customer_id = c.customer_id );`}</code>
            </pre>
          </div>
          <p>This is useful for marketing campaigns targeting registered customers who have never ordered.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">22.8 Problem 6 — Identify each customer's latest order</h3>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`WITH latest_orders AS ( SELECT order_id, customer_id, order_date, total_amount, ROW_NUMBER() OVER ( PARTITION BY customer_id ORDER BY order_date DESC, order_id DESC ) AS row_num FROM ecommerce.orders ) SELECT * FROM latest_orders WHERE row_num = 1;`}</code>
            </pre>
          </div>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">This query uses:</h4>
          <p>A CTE.</p>
          <p>A window function.</p>
          <p>Partitioning.</p>
          <p>Ranking.</p>
          <p>Filtering.</p>
          <p>This combination is particularly common in real-world Data Engineering.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">22.9 Problem 7 — Monthly revenue trends</h3>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`SELECT DATE_TRUNC('month', order_date) AS month, SUM(total_amount) AS monthly_revenue, COUNT(*) AS total_orders, AVG(total_amount) AS average_order_value FROM ecommerce.orders WHERE status = 'COMPLETED' GROUP BY DATE_TRUNC('month', order_date) ORDER BY month;`}</code>
            </pre>
          </div>
          <p>This produces the monthly revenue dataset that can power a business intelligence dashboard.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">22.10 Problem 8 — Calculate revenue growth</h3>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`WITH monthly_revenue AS ( SELECT DATE_TRUNC('month', order_date) AS month, SUM(total_amount) AS revenue FROM ecommerce.orders WHERE status = 'COMPLETED' GROUP BY DATE_TRUNC('month', order_date) ), revenue_comparison AS ( SELECT month, revenue, LAG(revenue) OVER ( ORDER BY month ) AS previous_month_revenue FROM monthly_revenue ) SELECT month, revenue, previous_month_revenue, ROUND( ( (revenue - previous_month_revenue) / NULLIF(previous_month_revenue, 0) ) * 100, 2 ) AS growth_percentage FROM revenue_comparison ORDER BY month;`}</code>
            </pre>
          </div>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">This is a practical example of using:</h4>
          <p>Aggregation.</p>
          <p>CTEs.</p>
          <p>LAG().</p>
          <p>NULLIF().</p>
          <p>Arithmetic expressions.</p>
          <div className="rounded-xl border border-orange-200 bg-orange-50/70 p-4 text-xs sm:text-sm text-orange-950 leading-relaxed my-4">
            Important: Growth should be interpreted only when a valid previous-period value exists. A missing previous month should not be treated as zero growth.
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">22.11 Problem 9 — Identify payment failures</h3>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`SELECT p.payment_id, p.order_id, c.customer_name, p.payment_method, p.payment_status, p.amount FROM ecommerce.payments AS p JOIN ecommerce.orders AS o ON p.order_id = o.order_id JOIN ecommerce.customers AS c ON o.customer_id = c.customer_id WHERE p.payment_status = 'FAILED';`}</code>
            </pre>
          </div>
          <p>The business can use this dataset to investigate unsuccessful payment activity.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">22.12 Problem 10 — Create an analytical reporting view</h3>
          <p>Instead of maintaining the same query repeatedly, create a reusable view.</p>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`CREATE OR REPLACE VIEW ecommerce.customer_sales_summary AS SELECT c.customer_id, c.customer_name, c.city, COUNT(o.order_id) AS total_orders, COALESCE( SUM(o.total_amount), 0 ) AS total_revenue FROM ecommerce.customers AS c LEFT JOIN ecommerce.orders AS o ON c.customer_id = o.customer_id AND o.status = 'COMPLETED' GROUP BY c.customer_id, c.customer_name, c.city;`}</code>
            </pre>
          </div>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Now the reporting application can query:</h4>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`SELECT * FROM ecommerce.customer_sales_summary ORDER BY total_revenue DESC;`}</code>
            </pre>
          </div>
          <p>This provides a reusable analytical interface.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">22.13 Problem 11 — Optimize the customer sales query</h3>
          <p>Suppose the customer reporting query becomes slow as the orders table grows.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">First inspect the execution plan:</h4>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`EXPLAIN (ANALYZE, BUFFERS) SELECT customer_id, SUM(total_amount) FROM ecommerce.orders WHERE status = 'COMPLETED' GROUP BY customer_id;`}</code>
            </pre>
          </div>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Consider a partial index:</h4>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`CREATE INDEX idx_completed_customer_orders ON ecommerce.orders(customer_id) INCLUDE (total_amount) WHERE status = 'COMPLETED';`}</code>
            </pre>
          </div>
          <p>This can help queries that frequently filter completed orders and group them by customer.</p>
          <p>Whether the index improves performance depends on the distribution of statuses, the number of records, and the optimizer's chosen plan.</p>
          <p>Always compare performance before and after the index is created.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">22.14 What this case study teaches</h3>
          <p>You have now used multiple advanced SQL concepts in one business problem.</p>
          <p>Requirement</p>
          <p>SQL concepts</p>
          <p>Total revenue</p>
          <p>SUM</p>
          <p>Customer revenue</p>
          <p>JOIN, GROUP BY</p>
          <p>Top products</p>
          <p>JOIN, aggregation, LIMIT</p>
          <p>Category analysis</p>
          <p>Multi-table joins</p>
          <p>Customers without orders</p>
          <p>NOT EXISTS</p>
          <p>Latest orders</p>
          <p>CTE, ROW_NUMBER</p>
          <p>Monthly analysis</p>
          <p>DATE_TRUNC, GROUP BY</p>
          <p>Revenue growth</p>
          <p>LAG, CTE</p>
          <p>Payment failures</p>
          <p>Multi-table joins</p>
          <p>Reusable reports</p>
          <p>Views</p>
          <p>Faster queries</p>
          <p>Indexes, EXPLAIN ANALYZE</p>
          <p>This is the practical connection between SQL programming and real-world Data Engineering.</p>
        </div>
      </section>
      {"/* SECTION 23: Practical Lab — Advanced SQL Engineering */"}
      <section id="section-23" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 23
          </span>
          <span className="text-xs font-mono text-stone-500">Advanced Engineering Labs</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          23. Practical Lab — Advanced SQL Engineering
        </h2>
        <div className="space-y-4 text-stone-700 leading-relaxed text-sm sm:text-base">
          <p>Hands-on implementation</p>
          <p>Intermediate–Advanced</p>
          <p>Now implement the concepts independently using PostgreSQL.</p>
          <p>Lab environment</p>
          <p>Install PostgreSQL locally.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Recommended tools:</h4>
          <p>PostgreSQL database server.</p>
          <p>pgAdmin or DBeaver.</p>
          <p>psql command line.</p>
          <p>A SQL editor for executing and explaining queries.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Official resources:</h4>
          <div className="my-3 p-3 rounded-xl bg-orange-50/60 border border-orange-200/80 flex items-center justify-between gap-3 text-xs">
            <div className="font-semibold text-stone-800 flex items-center gap-2"><span>&#128279;</span> <span>Download PostgreSQL</span></div>
            <a href="https://www.postgresql.org/download/?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 font-bold inline-flex items-center gap-1 cursor-pointer">View Resource &rarr;</a>
          </div>
          <div className="my-3 p-3 rounded-xl bg-orange-50/60 border border-orange-200/80 flex items-center justify-between gap-3 text-xs">
            <div className="font-semibold text-stone-800 flex items-center gap-2"><span>&#128279;</span> <span>Download pgAdmin</span></div>
            <a href="https://www.pgadmin.org/download/?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 font-bold inline-flex items-center gap-1 cursor-pointer">View Resource &rarr;</a>
          </div>
          <div className="my-3 p-3 rounded-xl bg-orange-50/60 border border-orange-200/80 flex items-center justify-between gap-3 text-xs">
            <div className="font-semibold text-stone-800 flex items-center gap-2"><span>&#128279;</span> <span>Download DBeaver</span></div>
            <a href="https://dbeaver.io/download/?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 font-bold inline-flex items-center gap-1 cursor-pointer">View Resource &rarr;</a>
          </div>
          <p>Lab 1 — Database creation</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Create a database:</h4>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`CREATE DATABASE student_management;`}</code>
            </pre>
          </div>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Create these tables:</h4>
          <p>students</p>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`CREATE TABLE students ( student_id INTEGER PRIMARY KEY, student_name VARCHAR(100) NOT NULL, email VARCHAR(150) UNIQUE, department_id INTEGER, age INTEGER CHECK (age >= 16) );`}</code>
            </pre>
          </div>
          <p>departments</p>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`CREATE TABLE departments ( department_id INTEGER PRIMARY KEY, department_name VARCHAR(100) NOT NULL );`}</code>
            </pre>
          </div>
          <p>courses</p>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`CREATE TABLE courses ( course_id INTEGER PRIMARY KEY, course_name VARCHAR(100), credits INTEGER CHECK (credits > 0) );`}</code>
            </pre>
          </div>
          <p>enrollments</p>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`CREATE TABLE enrollments ( enrollment_id INTEGER PRIMARY KEY, student_id INTEGER REFERENCES students(student_id), course_id INTEGER REFERENCES courses(course_id), enrollment_date DATE DEFAULT CURRENT_DATE, marks NUMERIC(5,2) CHECK (marks BETWEEN 0 AND 100) );`}</code>
            </pre>
          </div>
          <p>Lab 2 — Insert data</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Insert at least:</h4>
          <p>20 students.</p>
          <p>5 departments.</p>
          <p>10 courses.</p>
          <p>50 enrollment records.</p>
          <p>Include records from different departments, different course categories, and different performance levels.</p>
          <p>Lab 3 — Basic SQL operations</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Write queries to:</h4>
          <p>Retrieve every student.</p>
          <p>Find students older than 21.</p>
          <p>Find students from the Computer Science department.</p>
          <p>Sort students by age.</p>
          <p>Count students in every department.</p>
          <p>Calculate average marks for every course.</p>
          <p>Find courses with an average score above 75.</p>
          <p>Update a student's department.</p>
          <p>Delete an enrollment.</p>
          <p>Find the highest marks.</p>
          <p>Lab 4 — Advanced joins</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Write queries to:</h4>
          <p>Display students with department names.</p>
          <p>Display students and their enrolled courses.</p>
          <p>Find students who have not enrolled in any course.</p>
          <p>Find courses with no enrollments.</p>
          <p>Display department-wise student counts.</p>
          <p>Display each student's total course credits.</p>
          <p>Find students enrolled in more than three courses.</p>
          <p>Lab 5 — CTE and window functions</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Write queries to:</h4>
          <p>Find each student's average marks.</p>
          <p>Rank students within each department.</p>
          <p>Find the top three students in each department.</p>
          <p>Calculate course-wise cumulative enrollment.</p>
          <p>Find the previous enrollment date for each student.</p>
          <p>Identify students whose marks are above their department's average.</p>
          <p>Assign students into four performance groups using NTILE(4).</p>
          <p>Lab 6 — Transactions</p>
          <p>Implement a fee-payment system.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Requirements:</h4>
          <p>Create a fee payment table.</p>
          <p>Record student payments.</p>
          <p>Prevent invalid negative payments.</p>
          <p>Use transaction control.</p>
          <p>Demonstrate rollback.</p>
          <p>Use a savepoint.</p>
          <p>Handle duplicate payment references.</p>
          <p>Lab 7 — Database optimization</p>
          <p>Create a test table containing at least 100,000 records.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Then:</h4>
          <p>Run a query without an index.</p>
          <p>Examine the execution plan.</p>
          <p>Create a suitable index.</p>
          <p>Run the same query again.</p>
          <p>Compare plan details and execution time.</p>
          <p>Test a composite index.</p>
          <p>Test a partial index.</p>
          <p>Compare sequential and index scans.</p>
          <p>Update database statistics.</p>
          <p>Document the results.</p>
          <p>Do not expect an index to improve every query. The objective is to understand how query plans change with different data distributions and access patterns.</p>
        </div>
      </section>
      {"/* SECTION 24: Major Project — Build a SQL-Based E-commerce Analytics System */"}
      <section id="section-24" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 24
          </span>
          <span className="text-xs font-mono text-stone-500">Capstone Analytics System</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          24. Major Project — Build a SQL-Based E-commerce Analytics System
        </h2>
        <div className="space-y-4 text-stone-700 leading-relaxed text-sm sm:text-base">
          <p>Capstone project</p>
          <p>Advanced</p>
          <p>This project combines the database engineering concepts covered throughout Module 3.</p>
          <p>Project objective</p>
          <p>Build a relational database and analytical SQL layer for a complete e-commerce platform.</p>
          <p>Required components</p>
          <p>Project architecture</p>
          <p>Data ingestion</p>
          <p>Python · CSV · API · PostgreSQL loading</p>
          <p>Relational database</p>
          <p>Customers · Products · Categories · Orders · Order Items · Payments</p>
          <p>SQL transformation layer</p>
          <p>Joins · CTEs · Window Functions · Aggregations · Views</p>
          <p>Optimization layer</p>
          <p>Indexes · Execution Plans · Statistics · Partitioning</p>
          <p>Analytics and reporting</p>
          <p>Customer analytics · Revenue reports · Product analytics · Management dashboards</p>
          <p>Phase 1 — Database modeling</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Design an ERD for:</h4>
          <p>Customers.</p>
          <p>Products.</p>
          <p>Categories.</p>
          <p>Orders.</p>
          <p>Order items.</p>
          <p>Payments.</p>
          <p>Inventory.</p>
          <p>Refunds.</p>
          <p>Define primary keys, foreign keys, unique constraints, and check constraints.</p>
          <p>Decide which information belongs in each table and justify your decisions.</p>
          <p>Phase 2 — SQL implementation</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Implement:</h4>
          <p>Database creation.</p>
          <p>Schema creation.</p>
          <p>Table creation.</p>
          <p>Data insertion.</p>
          <p>Data updating.</p>
          <p>Data deletion.</p>
          <p>Constraints.</p>
          <p>Relationships.</p>
          <p>Views.</p>
          <p>Phase 3 — Analytical SQL</p>
          <p>Write at least 20 analytical queries.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Examples:</h4>
          <p>Total company revenue.</p>
          <p>Monthly revenue.</p>
          <p>Highest-spending customers.</p>
          <p>Top-selling products.</p>
          <p>Category-wise sales.</p>
          <p>Average order value.</p>
          <p>Repeat customers.</p>
          <p>Customers with no purchases.</p>
          <p>Product sales by city.</p>
          <p>Latest order for every customer.</p>
          <p>Monthly growth percentages.</p>
          <p>Payment failure analysis.</p>
          <p>Inventory shortage analysis.</p>
          <p>Phase 4 — Advanced SQL implementation</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">You must demonstrate:</h4>
          <p>Five or more joins.</p>
          <p>Five or more CTE-based queries.</p>
          <p>Three recursive CTE exercises.</p>
          <p>Five window function queries.</p>
          <p>Three correlated subqueries.</p>
          <p>Two materialized views.</p>
          <p>One stored function.</p>
          <p>One stored procedure.</p>
          <p>One audit trigger.</p>
          <p>The recursive exercises can use an employee hierarchy, product category hierarchy, and multi-level organizational hierarchy.</p>
          <p>Phase 5 — Performance optimization</p>
          <p>Create a large synthetic dataset.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Test:</h4>
          <p>Sequential scans.</p>
          <p>Index scans.</p>
          <p>Composite indexes.</p>
          <p>Partial indexes.</p>
          <p>Query plan estimates.</p>
          <p>Actual query execution.</p>
          <p>Table statistics.</p>
          <p>Partitioning.</p>
          <p>Document your findings.</p>
          <p>Phase 6 — Python integration</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Use your Module 2 skills to build a Python application that:</h4>
          <p>Extracts information from CSV files.</p>
          <p>Validates records.</p>
          <p>Connects to PostgreSQL.</p>
          <p>Loads data in batches.</p>
          <p>Executes approved SQL transformations.</p>
          <p>Logs pipeline execution.</p>
          <p>Handles errors.</p>
          <p>Runs automated tests.</p>
          <p>Phase 7 — Final dashboard</p>
          <p>Connect an analytical tool such as Power BI or Metabase to your SQL reporting layer.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Create a dashboard with:</h4>
          <p>Revenue analytics</p>
          <p>Revenue by month and category</p>
          <p>Customer analytics</p>
          <p>Top customers and repeat purchases</p>
          <p>Product analytics</p>
          <p>Best-selling and low-selling products</p>
          <p>Payment analytics</p>
          <p>Successful, pending, and failed payments</p>
          <p>Final deliverables</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Your GitHub repository should contain:</h4>
          <p>ecommerce-sql-analytics/ │ ├── database/ │ ├── create_database.sql │ ├── create_tables.sql │ ├── insert_data.sql │ └── indexes.sql │ ├── queries/ │ ├── basic_queries.sql │ ├── joins.sql │ ├── subqueries.sql │ ├── ctes.sql │ ├── window_functions.sql │ ├── views.sql │ └── optimization.sql │ ├── procedures/ │ ├── functions.sql │ ├── procedures.sql │ └── triggers.sql │ ├── python/ │ ├── extractor.py │ ├── loader.py │ └── pipeline.py │ ├── tests/ │ └── test_pipeline.py │ ├── reports/ │ └── execution_plan_analysis.md │ ├── dashboard/ │ └── README.md</p>
          <p>This becomes a practical portfolio project demonstrating SQL and database engineering skills.</p>
        </div>
      </section>
      {"/* SECTION 25: Module Assessment — Test Your SQL Knowledge */"}
      <section id="section-25" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 25
          </span>
          <span className="text-xs font-mono text-stone-500">Knowledge Assessment</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          25. Module Assessment — Test Your SQL Knowledge
        </h2>
        <div className="space-y-4 text-stone-700 leading-relaxed text-sm sm:text-base">
          <p>This assessment covers relational databases, SQL querying, analytical functions, transactions, and optimization.</p>
          <p>Module 3 knowledge check</p>
          <p>0/15 answered</p>
          <p>1. What is the primary purpose of a primary key?</p>
          <p>To sort records</p>
          <p>To uniquely identify each row</p>
          <p>To encrypt a table</p>
          <p>To group records</p>
          <p>2. Which constraint maintains a relationship between two tables?</p>
          <p>CHECK</p>
          <p>DEFAULT</p>
          <p>FOREIGN KEY</p>
          <p>INDEX</p>
          <p>3. Which SQL command changes the structure of an existing table?</p>
          <p>UPDATE</p>
          <p>ALTER</p>
          <p>SELECT</p>
          <p>INSERT</p>
          <p>4. Which join returns all rows from the left table and matching rows from the right?</p>
          <p>INNER JOIN</p>
          <p>CROSS JOIN</p>
          <p>LEFT JOIN</p>
          <p>RIGHT JOIN</p>
          <p>5. Which clause filters aggregated groups?</p>
          <p>WHERE</p>
          <p>ORDER BY</p>
          <p>HAVING</p>
          <p>FROM</p>
          <p>6. What is the main difference between UNION and UNION ALL?</p>
          <p>UNION ALL removes duplicates</p>
          <p>UNION removes duplicate result rows</p>
          <p>UNION works only on integers</p>
          <p>There is no difference</p>
          <p>7. What is a correlated subquery?</p>
          <p>A query that uses a value from its outer query</p>
          <p>A query that never uses WHERE</p>
          <p>A query that only inserts data</p>
          <p>A query that creates an index</p>
          <p>8. Which SQL feature is used to create a named intermediate query result?</p>
          <p>TRIGGER</p>
          <p>INDEX</p>
          <p>CTE</p>
          <p>GRANT</p>
          <p>9. Which function assigns a unique sequential number to every row in a window?</p>
          <p>RANK</p>
          <p>DENSE_RANK</p>
          <p>ROW_NUMBER</p>
          <p>NTILE</p>
          <p>10. Which ACID property ensures committed changes survive a crash within the database's durability guarantees?</p>
          <p>Atomicity</p>
          <p>Consistency</p>
          <p>Isolation</p>
          <p>Durability</p>
          <p>11. Which isolation level is PostgreSQL's default?</p>
          <p>READ UNCOMMITTED</p>
          <p>READ COMMITTED</p>
          <p>REPEATABLE READ</p>
          <p>SERIALIZABLE</p>
          <p>12. Which index is PostgreSQL's default general-purpose index type?</p>
          <p>GIN</p>
          <p>BRIN</p>
          <p>B-tree</p>
          <p>Hash</p>
          <p>13. What does EXPLAIN ANALYZE do?</p>
          <p>Only checks SQL syntax</p>
          <p>Executes the query and reports actual execution information</p>
          <p>Creates an index</p>
          <p>Automatically rewrites the database schema</p>
          <p>14. What is the primary purpose of a materialized view?</p>
          <p>Store a query's results for reuse</p>
          <p>Delete old transactions</p>
          <p>Create a database user</p>
          <p>Replace all database indexes</p>
          <p>15. Which operation helps PostgreSQL update planner statistics?</p>
          <p>GRANT</p>
          <p>ANALYZE</p>
          <p>DROP</p>
          <p>TRUNCATE</p>
          <p>Submit assessment</p>
        </div>
      </section>
      {"/* SECTION 26: SQL and Database Engineering Interview Questions */"}
      <section id="section-26" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 26
          </span>
          <span className="text-xs font-mono text-stone-500">Interview Mastery (50+ Qs)</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          26. SQL and Database Engineering Interview Questions
        </h2>
        <div className="space-y-4 text-stone-700 leading-relaxed text-sm sm:text-base">
          <p>These questions are designed for Data Engineering placements, technical interviews, and advanced database engineering roles.</p>
          <p>A. Relational database fundamentals</p>
          <p>What is an RDBMS?</p>
          <p>Explain the relational data model.</p>
          <p>What is the difference between a database and a schema?</p>
          <p>What is a primary key?</p>
          <p>What is a foreign key?</p>
          <p>Explain candidate keys and alternate keys.</p>
          <p>What are composite keys?</p>
          <p>Explain one-to-one, one-to-many, and many-to-many relationships.</p>
          <p>What is an ER diagram?</p>
          <p>Explain database normalization.</p>
          <p>What is the difference between 1NF, 2NF, and 3NF?</p>
          <p>What is denormalization?</p>
          <p>What are database constraints?</p>
          <p>Explain the difference between NULL, zero, and an empty string.</p>
          <p>B. SQL fundamentals</p>
          <p>What is the difference between DDL, DML, DQL, and DCL?</p>
          <p>Explain the difference between DELETE, TRUNCATE, and DROP.</p>
          <p>What is the difference between WHERE and HAVING?</p>
          <p>What is GROUP BY?</p>
          <p>Explain DISTINCT.</p>
          <p>What is the difference between COUNT(*) and COUNT(column)?</p>
          <p>How does SQL handle NULL values?</p>
          <p>What is COALESCE?</p>
          <p>What is the difference between BETWEEN and IN?</p>
          <p>What is the logical execution order of SQL clauses?</p>
          <p>C. Joins and subqueries</p>
          <p>Explain INNER JOIN and LEFT JOIN.</p>
          <p>What is a FULL OUTER JOIN?</p>
          <p>What is a CROSS JOIN?</p>
          <p>What is a SELF JOIN?</p>
          <p>What is join fanout?</p>
          <p>What is a correlated subquery?</p>
          <p>Explain EXISTS and NOT EXISTS.</p>
          <p>Compare subqueries and joins.</p>
          <p>How would you find customers who have never purchased?</p>
          <p>How would you find products that have never been sold?</p>
          <p>D. Advanced SQL</p>
          <p>What is a CTE?</p>
          <p>Explain recursive CTEs.</p>
          <p>What is the difference between a CTE and a subquery?</p>
          <p>Explain window functions.</p>
          <p>What is PARTITION BY?</p>
          <p>What is the difference between ROW_NUMBER, RANK, and DENSE_RANK?</p>
          <p>What is the difference between LAG and LEAD?</p>
          <p>Explain window frames.</p>
          <p>How would you find the latest order for each customer?</p>
          <p>How would you calculate a running total?</p>
          <p>Explain UNION vs UNION ALL.</p>
          <p>What is the difference between INTERSECT and EXCEPT?</p>
          <p>E. Database programming</p>
          <p>What is a database view?</p>
          <p>What is a materialized view?</p>
          <p>Compare stored functions and procedures.</p>
          <p>What are database triggers?</p>
          <p>What are OLD and NEW in PostgreSQL trigger functions?</p>
          <p>What is the difference between BEFORE and AFTER triggers?</p>
          <p>F. Transactions and concurrency</p>
          <p>What is a transaction?</p>
          <p>Explain ACID properties.</p>
          <p>What is transaction isolation?</p>
          <p>Explain dirty reads, non-repeatable reads, and phantom reads.</p>
          <p>What is MVCC?</p>
          <p>What is the difference between Read Committed and Repeatable Read in PostgreSQL?</p>
          <p>What is Serializable isolation?</p>
          <p>What is a database lock?</p>
          <p>What causes a deadlock?</p>
          <p>How would you implement a safe money transfer using transactions?</p>
          <p>G. Indexing and query optimization</p>
          <p>What is a database index?</p>
          <p>How does a B-tree index work conceptually?</p>
          <p>What is a composite index?</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Why does column order matter in composite indexes?</h4>
          <p>What is a partial index?</p>
          <p>What is an expression index?</p>
          <p>What is a GIN index?</p>
          <p>What is a BRIN index?</p>
          <p>What are the disadvantages of indexing?</p>
          <p>What is a sequential scan?</p>
          <p>What is an index-only scan?</p>
          <p>What is EXPLAIN ANALYZE?</p>
          <p>What is a nested loop join?</p>
          <p>Explain hash joins and merge joins.</p>
          <p>What is SARGability?</p>
          <p>What is table partitioning?</p>
          <p>What is partition pruning?</p>
          <p>How would you optimize a query running against 100 million records?</p>
        </div>
      </section>
      {"/* SECTION 27: Recommended Learning Resources */"}
      <section id="section-27" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 27
          </span>
          <span className="text-xs font-mono text-stone-500">Curated Resources</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          27. Recommended Learning Resources
        </h2>
        <div className="space-y-4 text-stone-700 leading-relaxed text-sm sm:text-base">
          <p>These resources provide official documentation, university-level database lectures, and practical SQL training.</p>
          <p>University-level learning</p>
          <div className="my-3 p-3 rounded-xl bg-orange-50/60 border border-orange-200/80 flex items-center justify-between gap-3 text-xs">
            <div className="font-semibold text-stone-800 flex items-center gap-2"><span>&#128279;</span> <span>Massachusetts Institute of Technology - Sustainable Campus - ISCN</span></div>
            <a href="https://images.openai.com/static-rsc-4/uPfuQXwN1mhifQJ1M6gbQtiprRpBUDX63sxK2tatgwiECQNJoijAm1y_abaXidnzu1mdTCAlG8aCCBwJFUeeZR7lUG74PVqxVt6qv1HJXU3njKkmBWGoMmU5VpE7Ngr8Uzxz1zcN8kb2OkP2tv2Vsfjij_7vze44An8jeYCdpgs?purpose=inline" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 font-bold inline-flex items-center gap-1 cursor-pointer">View Resource &rarr;</a>
          </div>
          <p>MIT OpenCourseWare</p>
          <p>Database systems, relational models, query processing, and database architecture.[Explore MIT OpenCourseWare](https://ocw.mit.edu/?utm_source=chatgpt.com)</p>
          <div className="my-3 p-3 rounded-xl bg-orange-50/60 border border-orange-200/80 flex items-center justify-between gap-3 text-xs">
            <div className="font-semibold text-stone-800 flex items-center gap-2"><span>&#128279;</span> <span>Chong Zeng</span></div>
            <a href="https://images.openai.com/static-rsc-4/dcqUNEnqOS-i7KYaIpFx6Wc9yOHJ4CxiJKo8kcd9EDWw7KC7OYRVjaoHYxFVnelYm8VEKlVO4xlQ8eToRp9nYhPim5PPyGv_aTvU8J30O_02SsLV-Z9dZ0uAnB832OjFgrCR2AOszIeZagG0W2tS3xmoJnfXE758aKN2hJWVMgs?purpose=inline" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 font-bold inline-flex items-center gap-1 cursor-pointer">View Resource &rarr;</a>
          </div>
          <p>Stanford University</p>
          <p>Database management, SQL, relational algebra, and database foundations.[Stanford Online](https://online.stanford.edu/?utm_source=chatgpt.com)</p>
          <div className="my-3 p-3 rounded-xl bg-orange-50/60 border border-orange-200/80 flex items-center justify-between gap-3 text-xs">
            <div className="font-semibold text-stone-800 flex items-center gap-2"><span>&#128279;</span> <span>Carnegie Mellon Establishes Four-Person Leadership Team For School of Drama</span></div>
            <a href="https://images.openai.com/static-rsc-4/9HSplgTAj8pDwtxxMaGQSGf8KRwr3-msXwY3UXDf4uo3a7ppjlB8cENmeVZVKaeGVAdB4ieEi0zXtxgVseFTne3aFEuCVGuW8Kwh1fS786AfZRg0G_IU75AbYwDba83qx1an0k9VWa5Q01HO_-8QeV0_K4RhZKXY2xtqK15Y7wo?purpose=inline" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 font-bold inline-flex items-center gap-1 cursor-pointer">View Resource &rarr;</a>
          </div>
          <p>Carnegie Mellon University</p>
          <p>Database systems, query execution, indexing, transactions, and storage internals.[CMU Database Systems course](https://15445.courses.cs.cmu.edu/?utm_source=chatgpt.com)</p>
          <div className="my-3 p-3 rounded-xl bg-orange-50/60 border border-orange-200/80 flex items-center justify-between gap-3 text-xs">
            <div className="font-semibold text-stone-800 flex items-center gap-2"><span>&#128279;</span> <span>加州大学伯克利分校_院校简介-启德教育</span></div>
            <a href="https://images.openai.com/static-rsc-4/Kz0PMvNpfWT_8rWDXc9oezJ6DavBzRzKW4nvm-8RwIKTRiDeb3CZ9gkRQ15kanOQRHdO6pXZxJRKcoxYVUgPcSBo38RuXh2kgYbak2efNE0AtIa3LxBxTXXrRVVgh_rEy-OWAX8K28DY9wvJkcDOxp-G7_2Dr90dBCQf1q65FhQ?purpose=inline" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 font-bold inline-flex items-center gap-1 cursor-pointer">View Resource &rarr;</a>
          </div>
          <p>University of California Berkeley</p>
          <p>Database architecture and data management.[University website](https://www.berkeley.edu/?utm_source=chatgpt.com)</p>
          <p>Official technical documentation</p>
          <p>Resource</p>
          <p>What to study</p>
          <div className="my-3 p-3 rounded-xl bg-orange-50/60 border border-orange-200/80 flex items-center justify-between gap-3 text-xs">
            <div className="font-semibold text-stone-800 flex items-center gap-2"><span>&#128279;</span> <span>PostgreSQL</span></div>
            <a href="https://www.postgresql.org/docs/?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 font-bold inline-flex items-center gap-1 cursor-pointer">View Resource &rarr;</a>
          </div>
          <p>SQL, transactions, indexes, execution plans</p>
          <div className="my-3 p-3 rounded-xl bg-orange-50/60 border border-orange-200/80 flex items-center justify-between gap-3 text-xs">
            <div className="font-semibold text-stone-800 flex items-center gap-2"><span>&#128279;</span> <span>PostgreSQL EXPLAIN</span></div>
            <a href="https://www.postgresql.org/docs/current/using-explain.html?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 font-bold inline-flex items-center gap-1 cursor-pointer">View Resource &rarr;</a>
          </div>
          <p>Query plan interpretation</p>
          <div className="my-3 p-3 rounded-xl bg-orange-50/60 border border-orange-200/80 flex items-center justify-between gap-3 text-xs">
            <div className="font-semibold text-stone-800 flex items-center gap-2"><span>&#128279;</span> <span>PostgreSQL Indexes</span></div>
            <a href="https://www.postgresql.org/docs/current/indexes.html?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 font-bold inline-flex items-center gap-1 cursor-pointer">View Resource &rarr;</a>
          </div>
          <p>Index types and design</p>
          <div className="my-3 p-3 rounded-xl bg-orange-50/60 border border-orange-200/80 flex items-center justify-between gap-3 text-xs">
            <div className="font-semibold text-stone-800 flex items-center gap-2"><span>&#128279;</span> <span>PostgreSQL Transactions</span></div>
            <a href="https://www.postgresql.org/docs/current/transaction-iso.html?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 font-bold inline-flex items-center gap-1 cursor-pointer">View Resource &rarr;</a>
          </div>
          <p>Isolation and concurrency</p>
          <div className="my-3 p-3 rounded-xl bg-orange-50/60 border border-orange-200/80 flex items-center justify-between gap-3 text-xs">
            <div className="font-semibold text-stone-800 flex items-center gap-2"><span>&#128279;</span> <span>PostgreSQL CTEs</span></div>
            <a href="https://www.postgresql.org/docs/current/queries-with.html?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 font-bold inline-flex items-center gap-1 cursor-pointer">View Resource &rarr;</a>
          </div>
          <p>Ordinary and recursive CTEs</p>
          <div className="my-3 p-3 rounded-xl bg-orange-50/60 border border-orange-200/80 flex items-center justify-between gap-3 text-xs">
            <div className="font-semibold text-stone-800 flex items-center gap-2"><span>&#128279;</span> <span>SQLBolt</span></div>
            <a href="https://sqlbolt.com/?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 font-bold inline-flex items-center gap-1 cursor-pointer">View Resource &rarr;</a>
          </div>
          <p>Interactive SQL exercises</p>
          <div className="my-3 p-3 rounded-xl bg-orange-50/60 border border-orange-200/80 flex items-center justify-between gap-3 text-xs">
            <div className="font-semibold text-stone-800 flex items-center gap-2"><span>&#128279;</span> <span>PostgreSQL Exercises</span></div>
            <a href="https://pgexercises.com/?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 font-bold inline-flex items-center gap-1 cursor-pointer">View Resource &rarr;</a>
          </div>
          <p>Practical PostgreSQL queries</p>
          <p>Recommended books</p>
          <p>Database System Concepts — Abraham Silberschatz, Henry F. Korth, and S. Sudarshan.</p>
          <p>Database Management Systems — Raghu Ramakrishnan and Johannes Gehrke.</p>
          <p>SQL Performance Explained — Markus Winand.</p>
          <p>The Art of PostgreSQL — Dimitri Fontaine.</p>
          <p>Designing Data-Intensive Applications — Martin Kleppmann.</p>
        </div>
      </section>
      {"/* SECTION 28: Module 3 — Final Revision */"}
      <section id="section-28" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 28
          </span>
          <span className="text-xs font-mono text-stone-500">Module Revision</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          28. Module 3 — Final Revision
        </h2>
        <div className="space-y-4 text-stone-700 leading-relaxed text-sm sm:text-base">
          <p>What you should remember</p>
          <ol className="list-decimal list-inside space-y-1.5 text-stone-700 text-sm sm:text-base my-3 pl-2">
            <li value="1"><strong className="text-stone-900">Relational database systems</strong></li>
          </ol>
          <p>Tables, rows, columns, keys, relationships, database architecture, and normalization.</p>
          <ol className="list-decimal list-inside space-y-1.5 text-stone-700 text-sm sm:text-base my-3 pl-2">
            <li value="2"><strong className="text-stone-900">Database schema design</strong></li>
          </ol>
          <p>Primary keys, foreign keys, candidate keys, composite keys, constraints, and ER diagrams.</p>
          <ol className="list-decimal list-inside space-y-1.5 text-stone-700 text-sm sm:text-base my-3 pl-2">
            <li value="3"><strong className="text-stone-900">SQL command categories</strong></li>
          </ol>
          <p>DDL, DML, DQL, DCL, and TCL.</p>
          <ol className="list-decimal list-inside space-y-1.5 text-stone-700 text-sm sm:text-base my-3 pl-2">
            <li value="4"><strong className="text-stone-900">SQL fundamentals</strong></li>
          </ol>
          <p>SELECT, INSERT, UPDATE, DELETE, WHERE, ORDER BY, GROUP BY, and HAVING.</p>
          <ol className="list-decimal list-inside space-y-1.5 text-stone-700 text-sm sm:text-base my-3 pl-2">
            <li value="5"><strong className="text-stone-900">SQL joins</strong></li>
          </ol>
          <p>INNER, LEFT, RIGHT, FULL OUTER, CROSS, and SELF JOIN.</p>
          <ol className="list-decimal list-inside space-y-1.5 text-stone-700 text-sm sm:text-base my-3 pl-2">
            <li value="6"><strong className="text-stone-900">Advanced querying</strong></li>
          </ol>
          <p>Subqueries, correlated subqueries, EXISTS, CTEs, and recursive CTEs.</p>
          <ol className="list-decimal list-inside space-y-1.5 text-stone-700 text-sm sm:text-base my-3 pl-2">
            <li value="7"><strong className="text-stone-900">Analytical SQL</strong></li>
          </ol>
          <p>Window functions, ranking, running totals, moving averages, LAG, and LEAD.</p>
          <ol className="list-decimal list-inside space-y-1.5 text-stone-700 text-sm sm:text-base my-3 pl-2">
            <li value="8"><strong className="text-stone-900">Database programming</strong></li>
          </ol>
          <p>Views, materialized views, stored procedures, functions, and triggers.</p>
          <ol className="list-decimal list-inside space-y-1.5 text-stone-700 text-sm sm:text-base my-3 pl-2">
            <li value="9"><strong className="text-stone-900">Transaction management</strong></li>
          </ol>
          <p>ACID properties, isolation levels, MVCC, locking, and deadlocks.</p>
          <ol className="list-decimal list-inside space-y-1.5 text-stone-700 text-sm sm:text-base my-3 pl-2">
            <li value="10"><strong className="text-stone-900">Database indexing</strong></li>
          </ol>
          <p>B-tree, hash, composite, partial, expression, GIN, GiST, and BRIN indexes.</p>
          <ol className="list-decimal list-inside space-y-1.5 text-stone-700 text-sm sm:text-base my-3 pl-2">
            <li value="11"><strong className="text-stone-900">Query execution</strong></li>
          </ol>
          <p>EXPLAIN, EXPLAIN ANALYZE, sequential scans, index scans, and join algorithms.</p>
          <ol className="list-decimal list-inside space-y-1.5 text-stone-700 text-sm sm:text-base my-3 pl-2">
            <li value="12"><strong className="text-stone-900">Advanced optimization</strong></li>
          </ol>
          <p>Query tuning, partitioning, statistics, bulk loading, and connection pooling.</p>
          <p>Module completion targets</p>
          <p>Before moving to the next module, complete these practical milestones:</p>
          <p>Design a relational database using an ER diagram.</p>
          <p>Create tables with appropriate constraints and relationships.</p>
          <p>Write at least 50 SQL queries.</p>
          <p>Demonstrate all major join types.</p>
          <p>Solve 10 subquery and CTE problems.</p>
          <p>Solve 10 window-function problems.</p>
          <p>Implement recursive CTEs.</p>
          <p>Create views and materialized views.</p>
          <p>Implement a stored function, procedure, and trigger.</p>
          <p>Demonstrate ACID transactions.</p>
          <p>Understand isolation levels and deadlocks.</p>
          <p>Create and compare different indexes.</p>
          <p>Analyze query execution plans.</p>
          <p>Optimize queries using a large synthetic dataset.</p>
          <p>Complete the e-commerce SQL analytics project.</p>
          <p>How Module 3 connects to your Data Engineering roadmap</p>
          <p>Module 1</p>
          <p>Foundation</p>
          <p>Introduction to Data Engineering and Data Systems.</p>
          <p>Module 2</p>
          <p>Programming</p>
          <p>Python Programming for Data Engineering.</p>
          <p>Module 3</p>
          <p>Database Engineering</p>
          <p>Advanced SQL and Relational Database Systems.</p>
          <p>Module 4</p>
          <p>Next</p>
          <p>Data Modeling, Data Warehousing and Dimensional Modeling.</p>
          <p>Next module — Module 4: Data Modeling, Data Warehousing and Dimensional Modeling</p>
          <p>The next module should progress from managing relational databases to designing analytical data models used by enterprise data warehouses.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Recommended topics:</h4>
          <p>Introduction to Data Modeling.</p>
          <p>Conceptual, Logical, and Physical Data Models.</p>
          <p>OLTP vs OLAP Data Modeling.</p>
          <p>Normalization vs Denormalization.</p>
          <p>Dimensional Modeling Fundamentals.</p>
          <p>Fact Tables and Dimension Tables.</p>
          <p>Star Schema Architecture.</p>
          <p>Snowflake Schema Architecture.</p>
          <p>Fact Table Types.</p>
          <p>Transaction, Periodic Snapshot, and Accumulating Snapshot Facts.</p>
          <p>Dimension Types and Attributes.</p>
          <p>Slowly Changing Dimensions (SCD Types 0, 1, 2, 3, 4, and 6).</p>
          <p>Surrogate Keys and Natural Keys.</p>
          <p>Degenerate and Junk Dimensions.</p>
          <p>Role-Playing Dimensions.</p>
          <p>Conformed Dimensions.</p>
          <p>Grain Definition and Modeling Decisions.</p>
          <p>Data Marts and Enterprise Data Warehouses.</p>
          <p>Data Warehouse Layering and Architecture.</p>
          <p>Data Modeling with PostgreSQL and dbt.</p>
          <p>Incremental Models and Historical Data Management.</p>
          <p>Data Warehouse Design Case Study.</p>
          <p>The overall goal: By the end of Module 4, you should be able to design the database structures that support enterprise analytics, business intelligence, historical reporting, and modern data warehouse pipelines.</p>
          <p>&lt;/USER_REQUEST&gt;</p>
          <p>&lt;ADDITIONAL_METADATA&gt;</p>
          <p>The current local time is: 2026-11-09T13:50:26+05:30.</p>
          <p>&lt;/ADDITIONAL_METADATA&gt;</p>
        </div>
      </section>
    </div>
  );
}