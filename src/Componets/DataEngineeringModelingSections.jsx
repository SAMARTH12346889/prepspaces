import React from "react";
import { Database, Table, Layers, CheckCircle2, ArrowRight, ExternalLink, Workflow, GitBranch, GitMerge } from "lucide-react";

export default function DataEngineeringModelingSections() {
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
          Module 4: Complete Data Modeling and Database Design Specification
        </h2>
        <div className="space-y-3 text-stone-700 leading-relaxed text-sm sm:text-base">
          <p>Data modeling is the process of deciding how data should be structured, connected, stored, and maintained in a database. It is one of the most important foundations of data engineering because the quality of a data pipeline, data warehouse, analytics dashboard, and reporting system depends heavily on how the underlying data is designed.</p>
          <p>For example, imagine an e-commerce platform such as Amazon. It stores information about millions of customers, products, orders, payments, deliveries, and customer interactions. A poorly designed database can create duplicate records, inconsistent information, slow queries, and incorrect business reports. A well-designed data model makes the data reliable, organized, scalable, and easier to analyze.</p>
          <p>This module covers two major areas:</p>
          <p>Relational database design: How to organize operational data using tables, keys, relationships, normalization, and constraints.</p>
          <p>Analytical data modeling: How to organize large volumes of historical data for data warehouses, business intelligence, and analytics using fact tables, dimension tables, star schemas, snowflake schemas, and slowly changing dimensions.</p>
          <p>By the end of this module, you should be able to design a relational database, understand the trade-offs between normalization and denormalization, create analytical data models, and handle changes to data and schemas over time.</p>
        </div>
      </section>
      {"/* SECTION 1: Introduction to Data Modeling */"}
      <section id="section-1" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 1
          </span>
          <span className="text-xs font-mono text-stone-500">Foundations</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          1. Introduction to Data Modeling
        </h2>
        <div className="space-y-4 text-stone-700 leading-relaxed text-sm sm:text-base">
          <p>Data modeling is the process of representing real-world information in a structured format that a database can store and manage.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">A data model defines:</h4>
          <p>What information needs to be stored.</p>
          <p>How information is divided into entities or tables.</p>
          <p>What attributes belong to each entity.</p>
          <p>How different entities are related.</p>
          <p>Which fields uniquely identify records.</p>
          <p>What rules maintain data accuracy and consistency.</p>
          <p>Example: E-commerce platform</p>
          <p>Suppose we are building a database for an online shopping platform.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">The platform needs to store:</h4>
          <p>Customer information.</p>
          <p>Product information.</p>
          <p>Orders placed by customers.</p>
          <p>Products included in each order.</p>
          <p>Payments made for orders.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">We can represent this information using separate tables:</h4>
          <p>Customers</p>
          <p>customer_id</p>
          <p>name</p>
          <p>email</p>
          <p>101</p>
          <p>Rahul</p>
          <p>rahul@example.com</p>
          <p>102</p>
          <p>Priya</p>
          <p>priya@example.com</p>
          <p>Products</p>
          <p>product_id</p>
          <p>product_name</p>
          <p>price</p>
          <p>501</p>
          <p>Laptop</p>
          <p>65000</p>
          <p>502</p>
          <p>Keyboard</p>
          <p>2000</p>
          <p>Orders</p>
          <p>order_id</p>
          <p>customer_id</p>
          <p>order_date</p>
          <p>1001</p>
          <p>101</p>
          <p>2026-10-20</p>
          <p>1002</p>
          <p>102</p>
          <p>2026-10-21</p>
          <p>Order Items</p>
          <p>order_item_id</p>
          <p>order_id</p>
          <p>product_id</p>
          <p>quantity</p>
          <p>1</p>
          <p>1001</p>
          <p>501</p>
          <p>1</p>
          <p>2</p>
          <p>1001</p>
          <p>502</p>
          <p>2</p>
          <p>Notice that customer information is stored separately from order information. Instead of repeating the customer's name and email for every order, we connect the tables using identifiers.</p>
          <p>This is the basic idea behind data modeling.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Why data modeling matters in data engineering</h4>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Good data modeling helps with:</h4>
          <p>Data consistency and accuracy.</p>
          <p>Avoiding unnecessary duplication.</p>
          <p>Faster data retrieval and analytical queries.</p>
          <p>Maintaining reliable relationships between records.</p>
          <p>Building scalable data warehouses.</p>
          <p>Supporting business intelligence and reporting.</p>
          <p>Managing historical changes in business data.</p>
        </div>
      </section>
      {"/* SECTION 2: Conceptual, Logical, and Physical Data Models */"}
      <section id="section-2" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 2
          </span>
          <span className="text-xs font-mono text-stone-500">Modeling Layers</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          2. Conceptual, Logical, and Physical Data Models
        </h2>
        <div className="space-y-4 text-stone-700 leading-relaxed text-sm sm:text-base">
          <p>Data modeling is generally performed at three levels: conceptual, logical, and physical.</p>
          <div className="my-3 p-3 rounded-xl bg-orange-50/60 border border-orange-200/80 flex items-center justify-between gap-3 text-xs">
            <div className="font-semibold text-stone-800 flex items-center gap-2"><span>&#128279;</span> <span>A Guide to dbt Dry Runs: Safe Simulation for Data Engineers | by Sendoa Moronta | Towards Data Engineering | Medium</span></div>
            <a href="https://images.openai.com/static-rsc-4/5I2hauqxoBu3yh4qSgoJq4ZZAYtustRgW--4IDaWiDHZ5100IXAC_8QhcDbEqJ3-WwaLvih_uiy04MwIdE7eOtsIpNKOykn5sHmmEN7uLw-QoQcIasHPnVBu2oIfwuBEmV3ZkCJX2tHOGfLlvQ3PpIglM-PIyOIJ_DQGYdJjDEQ?purpose=inline" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 font-bold inline-flex items-center gap-1 cursor-pointer">View Resource &rarr;</a>
          </div>
          <div className="my-3 p-3 rounded-xl bg-orange-50/60 border border-orange-200/80 flex items-center justify-between gap-3 text-xs">
            <div className="font-semibold text-stone-800 flex items-center gap-2"><span>&#128279;</span> <span>medium.com</span></div>
            <a href="https://medium.com/towards-data-engineering/a-guide-to-dbt-dry-runs-safe-simulation-for-data-engineers-7e480ce5dcf7?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 font-bold inline-flex items-center gap-1 cursor-pointer">View Resource &rarr;</a>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">A. Conceptual Data Model</h3>
          <p>A conceptual model provides a high-level view of the data required by a business.</p>
          <p>It identifies the main entities and their relationships without specifying technical database details.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">For an e-commerce platform, the conceptual model might contain:</h4>
          <p>Customer</p>
          <p>Product</p>
          <p>Order</p>
          <p>Payment</p>
          <p>Shipment</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">It may describe that:</h4>
          <p>A customer places orders.</p>
          <p>An order contains products.</p>
          <p>An order has payments.</p>
          <p>An order can have a shipment.</p>
          <p>At this stage, we are concerned with understanding the business, not choosing data types or writing SQL.</p>
          <p>Purpose: To communicate data requirements between business stakeholders, analysts, architects, and developers.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">B. Logical Data Model</h3>
          <p>A logical model provides more detail about the structure of the data.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">It defines:</h4>
          <p>Entities.</p>
          <p>Attributes.</p>
          <p>Primary keys.</p>
          <p>Foreign keys.</p>
          <p>Relationships.</p>
          <p>Cardinality.</p>
          <p>Business rules.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Example:</h4>
          <p>Customer</p>
          <p>Customer ID</p>
          <p>Customer Name</p>
          <p>Email</p>
          <p>Phone Number</p>
          <p>Order</p>
          <p>Order ID</p>
          <p>Customer ID</p>
          <p>Order Date</p>
          <p>Order Status</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">The relationship is:</h4>
          <p>Customer (1) → (Many) Orders</p>
          <p>This means one customer can place multiple orders, but each order belongs to one customer.</p>
          <p>The logical model focuses on the data structure rather than a specific database technology.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">C. Physical Data Model</h3>
          <p>A physical model explains exactly how the data will be implemented in a database such as PostgreSQL, MySQL, SQL Server, or Oracle.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">It defines:</h4>
          <p>Actual table names.</p>
          <p>Column names.</p>
          <p>Data types.</p>
          <p>Primary and foreign key constraints.</p>
          <p>Indexes.</p>
          <p>Partitioning.</p>
          <p>Storage-related decisions.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Example:</h4>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`CREATE TABLE customers ( customer_id BIGINT PRIMARY KEY, customer_name VARCHAR(100) NOT NULL, email VARCHAR(255) UNIQUE, phone VARCHAR(20) ); CREATE TABLE orders ( order_id BIGINT PRIMARY KEY, customer_id BIGINT NOT NULL, order_date TIMESTAMP NOT NULL, order_status VARCHAR(30), CONSTRAINT fk_customer FOREIGN KEY (customer_id) REFERENCES customers(customer_id) );`}</code>
            </pre>
          </div>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Comparison</h4>
          <p>Feature</p>
          <p>Conceptual</p>
          <p>Logical</p>
          <p>Physical</p>
          <p>Main focus</p>
          <p>Business entities</p>
          <p>Data structure</p>
          <p>Database implementation</p>
          <p>Entities</p>
          <p>Yes</p>
          <p>Yes</p>
          <p>Tables</p>
          <p>Attributes</p>
          <p>Usually high-level</p>
          <p>Detailed</p>
          <p>Columns</p>
          <p>Keys</p>
          <p>Generally omitted</p>
          <p>Defined</p>
          <p>Implemented</p>
          <p>Data types</p>
          <p>No</p>
          <p>Usually independent of DB</p>
          <p>Specified</p>
          <p>Database-specific</p>
          <p>No</p>
          <p>No</p>
          <p>Yes</p>
          <div className="rounded-xl border border-orange-200 bg-orange-50/70 p-4 text-xs sm:text-sm text-orange-950 leading-relaxed my-4">
            Remember: Conceptual means what data is needed, logical means how the data is organized, and physical means how the design is implemented.
          </div>
        </div>
      </section>
      {"/* SECTION 3: Entity Relationship Diagrams (ERDs) */"}
      <section id="section-3" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 3
          </span>
          <span className="text-xs font-mono text-stone-500">ERD Design</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          3. Entity Relationship Diagrams (ERDs)
        </h2>
        <div className="space-y-4 text-stone-700 leading-relaxed text-sm sm:text-base">
          <p>An Entity Relationship Diagram (ERD) is a visual representation of entities, their attributes, and the relationships between them.</p>
          <p>It helps database designers understand how information is connected before implementing tables.</p>
          <div className="my-3 p-3 rounded-xl bg-orange-50/60 border border-orange-200/80 flex items-center justify-between gap-3 text-xs">
            <div className="font-semibold text-stone-800 flex items-center gap-2"><span>&#128279;</span> <span>mysql - Is this ER diagram correct? - Database Administrators Stack Exchange</span></div>
            <a href="https://images.openai.com/static-rsc-4/sIB2EnSTFqWKFPJ7k1W7QCYAqaIn8OZ8b9s7X9QDRhzJrinGp10WGMkcRPlEGgzI0cx3uN_NwJ1B99gmx5UyimDtZuFYyuwjarOdWelN6iaQdCiA415kIcfdWampTJrGj803El4vlB201kAWQltjFRR5uoxadiCFRK6kZVqNisA?purpose=inline" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 font-bold inline-flex items-center gap-1 cursor-pointer">View Resource &rarr;</a>
          </div>
          <div className="my-3 p-3 rounded-xl bg-orange-50/60 border border-orange-200/80 flex items-center justify-between gap-3 text-xs">
            <div className="font-semibold text-stone-800 flex items-center gap-2"><span>&#128279;</span> <span>dba.stackexchange.com</span></div>
            <a href="https://dba.stackexchange.com/questions/311026/is-this-er-diagram-correct?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 font-bold inline-flex items-center gap-1 cursor-pointer">View Resource &rarr;</a>
          </div>
          <p>Main components of an ERD</p>
          <p>Entity: A real-world object or concept about which information is stored.</p>
          <p>Examples: Customer, Product, Order, Employee.</p>
          <p>Attribute: A property describing an entity.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">For a Customer entity:</h4>
          <p>Customer ID</p>
          <p>Name</p>
          <p>Email</p>
          <p>Phone</p>
          <p>Relationship: Describes how entities are connected.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Examples:</h4>
          <p>Customer places Order.</p>
          <p>Order contains Product.</p>
          <p>Employee belongs to Department.</p>
          <p>Relationship cardinality</p>
          <p>Cardinality describes how many records from one entity can be associated with records from another entity.</p>
          <p>One-to-One (1:1)</p>
          <p>One person has one passport, and one passport belongs to one person.</p>
          <p>One-to-Many (1:N)</p>
          <p>One customer can place many orders, but each order belongs to one customer.</p>
          <p>Many-to-Many (M:N)</p>
          <p>One order can contain many products, and one product can appear in many orders.</p>
          <p>Many-to-many relationships are usually implemented using an intermediate or junction table.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">For example:</h4>
          <p>Orders → Order_Items ← Products</p>
          <p>The Order_Items table connects orders and products.</p>
          <p>ERD notation</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Common ERD notations include:</h4>
          <p>Crow's Foot notation.</p>
          <p>Chen notation.</p>
          <p>UML-style notation.</p>
          <p>Crow's Foot is widely used in practical relational database design. It visually represents optionality and relationship cardinality.</p>
        </div>
      </section>
      {"/* SECTION 4: Entities, Attributes, and Relationships */"}
      <section id="section-4" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 4
          </span>
          <span className="text-xs font-mono text-stone-500">Entities & Attributes</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          4. Entities, Attributes, and Relationships
        </h2>
        <div className="space-y-4 text-stone-700 leading-relaxed text-sm sm:text-base">
          <p>These are the fundamental building blocks of a relational data model.</p>
          <p>Entities</p>
          <p>An entity represents something that the system needs to store information about.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Examples:</h4>
          <p>Domain</p>
          <p>Entities</p>
          <p>E-commerce</p>
          <p>Customer, Product, Order</p>
          <p>Banking</p>
          <p>Customer, Account, Transaction</p>
          <p>Education</p>
          <p>Student, Course, Instructor</p>
          <p>Healthcare</p>
          <p>Patient, Doctor, Appointment</p>
          <p>Entities generally become tables in relational database implementations.</p>
          <p>Attributes</p>
          <p>Attributes describe the properties of an entity.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">For example, a Student entity may have:</h4>
          <p>Student ID</p>
          <p>Student Name</p>
          <p>Date of Birth</p>
          <p>Email</p>
          <p>Department</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Attributes can be classified as:</h4>
          <p>Simple attributes: Cannot be meaningfully divided into smaller components, such as age.</p>
          <p>Composite attributes: Can be divided into smaller components, such as address into city, state, and postal code.</p>
          <p>Single-valued attributes: Have one value for a particular entity, such as a date of birth.</p>
          <p>Multi-valued attributes: Can contain multiple values, such as a student's phone numbers. These are often represented through a separate related table.</p>
          <p>Derived attributes: Can be calculated from other attributes, such as age from date of birth.</p>
          <p>Relationships</p>
          <p>Relationships describe connections between entities.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">For example:</h4>
          <p>A student enrolls in a course.</p>
          <p>A course has multiple students.</p>
          <p>An instructor teaches courses.</p>
          <p>A good relational design represents these relationships clearly instead of storing unrelated information together in a single table.</p>
        </div>
      </section>
      {"/* SECTION 5: Primary Keys and Foreign Keys */"}
      <section id="section-5" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 5
          </span>
          <span className="text-xs font-mono text-stone-500">Keys & Uniqueness</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          5. Primary Keys and Foreign Keys
        </h2>
        <div className="space-y-4 text-stone-700 leading-relaxed text-sm sm:text-base">
          <p>Keys are essential for identifying records and establishing relationships between tables.</p>
          <p>Primary Key</p>
          <p>A primary key uniquely identifies each record in a table.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Example:</h4>
          <p>student_id</p>
          <p>name</p>
          <p>email</p>
          <p>101</p>
          <p>Rahul</p>
          <p>rahul@example.com</p>
          <p>102</p>
          <p>Priya</p>
          <p>priya@example.com</p>
          <p>103</p>
          <p>Aman</p>
          <p>aman@example.com</p>
          <p>Here, student_id is the primary key.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Primary key requirements:</h4>
          <p>Must uniquely identify a record.</p>
          <p>Cannot contain NULL values.</p>
          <p>Should remain stable.</p>
          <p>A table has one primary key constraint, which can consist of one or multiple columns.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Example:</h4>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`CREATE TABLE students ( student_id INT PRIMARY KEY, name VARCHAR(100), email VARCHAR(255) );`}</code>
            </pre>
          </div>
          <p>Foreign Key</p>
          <p>A foreign key is a column or group of columns that references a candidate key, usually the primary key, in another table.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Example:</h4>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`CREATE TABLE orders ( order_id INT PRIMARY KEY, customer_id INT, order_date DATE, FOREIGN KEY (customer_id) REFERENCES customers(customer_id) );`}</code>
            </pre>
          </div>
          <p>Here, customer_id connects the Orders table to the Customers table.</p>
          <p>A foreign key helps prevent an order from referencing a customer that does not exist, subject to the database's configured constraints.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Primary Key vs Foreign Key</h4>
          <p>Primary Key</p>
          <p>Foreign Key</p>
          <p>Uniquely identifies records in its table</p>
          <p>References a key in another or the same table</p>
          <p>Cannot be NULL</p>
          <p>Can be NULL unless restricted</p>
          <p>Unique within its table</p>
          <p>May contain repeated values</p>
          <p>One primary key constraint per table</p>
          <p>Multiple foreign key constraints are possible</p>
        </div>
      </section>
      {"/* SECTION 6: Composite and Surrogate Keys */"}
      <section id="section-6" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 6
          </span>
          <span className="text-xs font-mono text-stone-500">Key Architectures</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          6. Composite and Surrogate Keys
        </h2>
        <div className="space-y-4 text-stone-700 leading-relaxed text-sm sm:text-base">
          <p>Database designers use different types of keys depending on the requirements.</p>
          <p>Composite Key</p>
          <p>A composite key consists of two or more columns that together uniquely identify a record.</p>
          <p>Example: A student can enroll in multiple courses, and each course can have multiple students.</p>
          <p>student_id</p>
          <p>course_id</p>
          <p>enrollment_date</p>
          <p>101</p>
          <p>501</p>
          <p>2026-01-10</p>
          <p>101</p>
          <p>502</p>
          <p>2026-01-11</p>
          <p>102</p>
          <p>501</p>
          <p>2026-01-12</p>
          <p>Neither student_id nor course_id alone uniquely identifies an enrollment.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Together, they can form a composite primary key:</h4>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`CREATE TABLE enrollments ( student_id INT, course_id INT, enrollment_date DATE, PRIMARY KEY (student_id, course_id) );`}</code>
            </pre>
          </div>
          <p>Surrogate Key</p>
          <p>A surrogate key is an artificially generated identifier that has no direct business meaning.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Example:</h4>
          <p>enrollment_id</p>
          <p>student_id</p>
          <p>course_id</p>
          <p>1</p>
          <p>101</p>
          <p>501</p>
          <p>2</p>
          <p>101</p>
          <p>502</p>
          <p>3</p>
          <p>102</p>
          <p>501</p>
          <p>Here, enrollment_id is a surrogate key.</p>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`CREATE TABLE enrollments ( enrollment_id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY, student_id INT NOT NULL, course_id INT NOT NULL, enrollment_date DATE );`}</code>
            </pre>
          </div>
          <p>Natural Key</p>
          <p>A natural key is derived from real-world business information.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">For example:</h4>
          <p>Passport number.</p>
          <p>Government-issued identifier.</p>
          <p>Product SKU.</p>
          <p>A business-defined account number.</p>
          <p>Composite vs Surrogate vs Natural Keys</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Key type</h4>
          <p>Meaning</p>
          <p>Example</p>
          <p>Composite</p>
          <p>Multiple columns identify a record</p>
          <p>student_id + course_id</p>
          <p>Surrogate</p>
          <p>Generated identifier</p>
          <p>enrollment_id = 1001</p>
          <p>Natural</p>
          <p>Real-world business identifier</p>
          <p>Product SKU</p>
          <p>In data warehouses, surrogate keys are especially useful for dimension tables because they help manage historical records and changes in business identifiers.</p>
        </div>
      </section>
      {"/* SECTION 7: Database Normalization */"}
      <section id="section-7" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 7
          </span>
          <span className="text-xs font-mono text-stone-500">Normalization Principles</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          7. Database Normalization
        </h2>
        <div className="space-y-4 text-stone-700 leading-relaxed text-sm sm:text-base">
          <p>Database normalization is the process of organizing data into well-structured tables to minimize unnecessary duplication and prevent data anomalies.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Imagine storing all e-commerce information in one table:</h4>
          <p>order_id</p>
          <p>customer_name</p>
          <p>customer_email</p>
          <p>product_name</p>
          <p>product_price</p>
          <p>1001</p>
          <p>Rahul</p>
          <p>rahul@example.com</p>
          <p>Laptop</p>
          <p>65000</p>
          <p>1001</p>
          <p>Rahul</p>
          <p>rahul@example.com</p>
          <p>Mouse</p>
          <p>800</p>
          <p>1002</p>
          <p>Priya</p>
          <p>priya@example.com</p>
          <p>Keyboard</p>
          <p>2000</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">There are several problems:</h4>
          <p>Rahul's information is duplicated.</p>
          <p>If Rahul changes his email, multiple records may need updating.</p>
          <p>If a product is removed from an order, its information might be lost.</p>
          <p>Adding a customer without an order becomes difficult.</p>
          <p>Normalization solves these problems by separating logically different entities into appropriate tables.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Types of database anomalies</h4>
          <ol className="list-decimal list-inside space-y-1.5 text-stone-700 text-sm sm:text-base my-3 pl-2">
            <li value="1"><strong className="text-stone-900">Insertion anomaly</strong></li>
          </ol>
          <p>You cannot insert certain information without inserting unrelated information.</p>
          <p>Example: You want to add a new product, but the database requires an order ID.</p>
          <ol className="list-decimal list-inside space-y-1.5 text-stone-700 text-sm sm:text-base my-3 pl-2">
            <li value="2"><strong className="text-stone-900">Update anomaly</strong></li>
          </ol>
          <p>The same information exists in multiple records, so changing it in only some records creates inconsistent data.</p>
          <p>Example: A customer changes their email, but some order records still contain the old email.</p>
          <ol className="list-decimal list-inside space-y-1.5 text-stone-700 text-sm sm:text-base my-3 pl-2">
            <li value="3"><strong className="text-stone-900">Deletion anomaly</strong></li>
          </ol>
          <p>Deleting one record unintentionally removes other valuable information.</p>
          <p>Example: Deleting the only order containing a particular product also removes the only stored information about that product.</p>
          <p>Normalization helps prevent these problems.</p>
        </div>
      </section>
      {"/* SECTION 8: First, Second, and Third Normal Forms */"}
      <section id="section-8" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 8
          </span>
          <span className="text-xs font-mono text-stone-500">Normal Forms (1NF–3NF)</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          8. First, Second, and Third Normal Forms
        </h2>
        <div className="space-y-4 text-stone-700 leading-relaxed text-sm sm:text-base">
          <p>Normalization is divided into different stages called normal forms.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">First Normal Form (1NF)</h4>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">A table is in First Normal Form when:</h4>
          <p>Every column contains atomic values.</p>
          <p>Each cell contains a single value rather than a list of values.</p>
          <p>Records can be uniquely identified.</p>
          <p>Repeating groups are removed.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Incorrect design:</h4>
          <p>student_id</p>
          <p>student_name</p>
          <p>courses</p>
          <p>101</p>
          <p>Rahul</p>
          <p>Java, Python, SQL</p>
          <p>102</p>
          <p>Priya</p>
          <p>Java, C++, SQL</p>
          <p>The courses column contains multiple values.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Correct design:</h4>
          <p>student_id</p>
          <p>student_name</p>
          <p>course</p>
          <p>101</p>
          <p>Rahul</p>
          <p>Java</p>
          <p>101</p>
          <p>Rahul</p>
          <p>Python</p>
          <p>101</p>
          <p>Rahul</p>
          <p>SQL</p>
          <p>102</p>
          <p>Priya</p>
          <p>Java</p>
          <p>102</p>
          <p>Priya</p>
          <p>C++</p>
          <p>102</p>
          <p>Priya</p>
          <p>SQL</p>
          <p>Now every cell contains a single course value.</p>
          <p>For more complete database design, student and course information would normally be separated into their own tables and connected through an enrollment table.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Second Normal Form (2NF)</h4>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">A table is in Second Normal Form when:</h4>
          <p>It satisfies 1NF.</p>
          <p>Every non-key attribute depends on the entire candidate key, not just part of a composite candidate key.</p>
          <p>This is particularly important when using composite keys.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Consider:</h4>
          <p>student_id</p>
          <p>course_id</p>
          <p>student_name</p>
          <p>course_name</p>
          <p>grade</p>
          <p>101</p>
          <p>501</p>
          <p>Rahul</p>
          <p>Java</p>
          <p>A</p>
          <p>101</p>
          <p>502</p>
          <p>Rahul</p>
          <p>Python</p>
          <p>B</p>
          <p>102</p>
          <p>501</p>
          <p>Priya</p>
          <p>Java</p>
          <p>A</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Suppose the composite primary key is:</h4>
          <p>(student_id, course_id)</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">However:</h4>
          <p>student_name depends only on student_id.</p>
          <p>course_name depends only on course_id.</p>
          <p>grade depends on the combination of both.</p>
          <p>This creates partial dependencies.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Correct 2NF design:</h4>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Students:</h4>
          <p>student_id</p>
          <p>student_name</p>
          <p>101</p>
          <p>Rahul</p>
          <p>102</p>
          <p>Priya</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Courses:</h4>
          <p>course_id</p>
          <p>course_name</p>
          <p>501</p>
          <p>Java</p>
          <p>502</p>
          <p>Python</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Enrollments:</h4>
          <p>student_id</p>
          <p>course_id</p>
          <p>grade</p>
          <p>101</p>
          <p>501</p>
          <p>A</p>
          <p>101</p>
          <p>502</p>
          <p>B</p>
          <p>102</p>
          <p>501</p>
          <p>A</p>
          <p>Now each non-key attribute depends on the entire key of its table.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Third Normal Form (3NF)</h4>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">A table is in Third Normal Form when:</h4>
          <p>It satisfies 2NF.</p>
          <p>Non-key attributes do not depend transitively on candidate keys.</p>
          <p>A transitive dependency occurs when one non-key attribute depends on another non-key attribute rather than directly on the key.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Incorrect design:</h4>
          <p>employee_id</p>
          <p>employee_name</p>
          <p>department_id</p>
          <p>department_name</p>
          <p>101</p>
          <p>Rahul</p>
          <p>10</p>
          <p>Engineering</p>
          <p>102</p>
          <p>Priya</p>
          <p>20</p>
          <p>Marketing</p>
          <p>103</p>
          <p>Aman</p>
          <p>10</p>
          <p>Engineering</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Dependencies:</h4>
          <p>employee_id → employee_name</p>
          <p>employee_id → department_id</p>
          <p>department_id → department_name</p>
          <p>The department name depends on department_id, not directly on the employee identifier.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Correct 3NF design:</h4>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Employees:</h4>
          <p>employee_id</p>
          <p>employee_name</p>
          <p>department_id</p>
          <p>101</p>
          <p>Rahul</p>
          <p>10</p>
          <p>102</p>
          <p>Priya</p>
          <p>20</p>
          <p>103</p>
          <p>Aman</p>
          <p>10</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Departments:</h4>
          <p>department_id</p>
          <p>department_name</p>
          <p>10</p>
          <p>Engineering</p>
          <p>20</p>
          <p>Marketing</p>
          <p>Now department information is maintained independently.</p>
          <p>Normal forms comparison</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Normal Form</h4>
          <p>Main requirement</p>
          <p>1NF</p>
          <p>Atomic values and no repeating groups</p>
          <p>2NF</p>
          <p>1NF + no partial dependency on a candidate key</p>
          <p>3NF</p>
          <p>2NF + no inappropriate transitive dependency</p>
          <div className="rounded-xl border border-orange-200 bg-orange-50/70 p-4 text-xs sm:text-sm text-orange-950 leading-relaxed my-4">
            Important: 2NF and 3NF are defined in relation to candidate keys and functional dependencies, not merely whether a table has a composite or single-column primary key.
          </div>
        </div>
      </section>
      {"/* SECTION 9: Boyce-Codd Normal Form (BCNF) */"}
      <section id="section-9" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 9
          </span>
          <span className="text-xs font-mono text-stone-500">BCNF Decomposition</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          9. Boyce-Codd Normal Form (BCNF)
        </h2>
        <div className="space-y-4 text-stone-700 leading-relaxed text-sm sm:text-base">
          <p>Boyce-Codd Normal Form is a stronger version of Third Normal Form.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">A relation is in BCNF when:</h4>
          <p>For every non-trivial functional dependency X → Y, X must be a superkey.</p>
          <p>Let's understand this using an example.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Suppose a university maintains the following table:</h4>
          <p>student</p>
          <p>course</p>
          <p>instructor</p>
          <p>Rahul</p>
          <p>Java</p>
          <p>Amit</p>
          <p>Priya</p>
          <p>Python</p>
          <p>Neha</p>
          <p>Rahul</p>
          <p>Python</p>
          <p>Neha</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Assume the business rules are:</h4>
          <p>A student can enroll in multiple courses.</p>
          <p>Each course is taught by one instructor.</p>
          <p>Each instructor teaches only one course.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">This gives us the functional dependency:</h4>
          <p>instructor → course</p>
          <p>The instructor determines the course, but instructor is not a superkey because multiple students can have the same instructor.</p>
          <p>This violates BCNF.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">We can decompose the table:</h4>
          <p>Instructor Courses</p>
          <p>instructor</p>
          <p>course</p>
          <p>Amit</p>
          <p>Java</p>
          <p>Neha</p>
          <p>Python</p>
          <p>Student Instructors</p>
          <p>student</p>
          <p>instructor</p>
          <p>Rahul</p>
          <p>Amit</p>
          <p>Priya</p>
          <p>Neha</p>
          <p>Rahul</p>
          <p>Neha</p>
          <p>The resulting design separates the instructor-course relationship from the student enrollment relationship.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Why BCNF matters</h4>
          <p>BCNF is useful when complex relationships and overlapping candidate keys create redundancy that 3NF does not eliminate.</p>
          <p>However, BCNF decomposition does not always preserve every functional dependency. Database designers must consider dependency preservation and lossless joins.</p>
        </div>
      </section>
      {"/* SECTION 10: Database Denormalization */"}
      <section id="section-10" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 10
          </span>
          <span className="text-xs font-mono text-stone-500">Denormalization & Performance</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          10. Database Denormalization
        </h2>
        <div className="space-y-4 text-stone-700 leading-relaxed text-sm sm:text-base">
          <p>Denormalization is the process of intentionally introducing redundancy into a database to improve query performance or simplify data retrieval.</p>
          <p>Normalization reduces redundancy, whereas denormalization sometimes accepts redundancy to improve read performance.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Consider normalized tables:</h4>
          <p>Customers</p>
          <p>customer_id</p>
          <p>name</p>
          <p>101</p>
          <p>Rahul</p>
          <p>Orders</p>
          <p>order_id</p>
          <p>customer_id</p>
          <p>total</p>
          <p>1001</p>
          <p>101</p>
          <p>65800</p>
          <p>To retrieve order information along with customer names, a database needs to perform a JOIN.</p>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`SELECT o.order_id, c.name, o.total FROM orders o JOIN customers c ON o.customer_id = c.customer_id;`}</code>
            </pre>
          </div>
          <p>For analytical workloads involving billions of records and many joins, query performance can become a concern.</p>
          <p>One possible denormalized design stores some customer attributes alongside order records:</p>
          <p>order_id</p>
          <p>customer_id</p>
          <p>customer_name</p>
          <p>total</p>
          <p>1001</p>
          <p>101</p>
          <p>Rahul</p>
          <p>65800</p>
          <p>Now some reporting queries can retrieve the required information without joining the Customers table.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Advantages</h4>
          <p>Fewer joins for common queries.</p>
          <p>Faster analytical reads in suitable workloads.</p>
          <p>Simpler reporting queries.</p>
          <p>Convenient access to frequently used data.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Disadvantages</h4>
          <p>Duplicate information.</p>
          <p>Increased storage requirements.</p>
          <p>More complicated updates.</p>
          <p>Risk of inconsistent records.</p>
          <p>Additional data maintenance.</p>
          <p>Normalization vs Denormalization</p>
          <p>Normalization</p>
          <p>Denormalization</p>
          <p>Reduces redundancy</p>
          <p>May introduce redundancy</p>
          <p>Improves data consistency</p>
          <p>Can simplify reads</p>
          <p>Often used in OLTP databases</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Common in analytical models</h4>
          <p>Uses more separate tables</p>
          <p>Can combine related data</p>
          <p>May require more JOINs</p>
          <p>May reduce JOIN requirements</p>
          <p>Real-world application: Operational databases commonly favor normalization, while analytical data warehouses frequently use denormalized dimensional models.</p>
        </div>
      </section>
      {"/* SECTION 11: Referential Integrity and Constraints */"}
      <section id="section-11" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 11
          </span>
          <span className="text-xs font-mono text-stone-500">Integrity & Constraints</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          11. Referential Integrity and Constraints
        </h2>
        <div className="space-y-4 text-stone-700 leading-relaxed text-sm sm:text-base">
          <p>Referential integrity ensures that relationships between tables remain valid.</p>
          <p>Constraints are rules enforced by the database to prevent invalid or inconsistent data.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">A. NOT NULL</h3>
          <p>Ensures a column cannot contain NULL values.</p>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`CREATE TABLE students ( student_id INT PRIMARY KEY, student_name VARCHAR(100) NOT NULL );`}</code>
            </pre>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">B. UNIQUE</h3>
          <p>Ensures that a column or combination of columns contains unique values.</p>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`CREATE TABLE users ( user_id INT PRIMARY KEY, email VARCHAR(255) UNIQUE );`}</code>
            </pre>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">C. CHECK</h3>
          <p>Enforces a condition on column values.</p>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`CREATE TABLE products ( product_id INT PRIMARY KEY, product_name VARCHAR(100), price DECIMAL(10,2) CHECK (price >= 0) );`}</code>
            </pre>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">D. DEFAULT</h3>
          <p>Provides a default value when an insert does not specify a value for a column.</p>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`CREATE TABLE orders ( order_id INT PRIMARY KEY, order_status VARCHAR(30) DEFAULT 'PENDING' );`}</code>
            </pre>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">E. PRIMARY KEY</h3>
          <p>Uniquely identifies each record and does not permit NULL values.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">F. FOREIGN KEY</h3>
          <p>Enforces a valid reference to another table's key.</p>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`CREATE TABLE orders ( order_id INT PRIMARY KEY, customer_id INT NOT NULL, FOREIGN KEY (customer_id) REFERENCES customers(customer_id) );`}</code>
            </pre>
          </div>
          <p>Referential integrity actions</p>
          <p>When a referenced record is updated or deleted, databases can support different actions:</p>
          <p>ON DELETE CASCADE: Deletes dependent records.</p>
          <p>ON DELETE SET NULL: Sets the referencing foreign key to NULL, provided the column allows it.</p>
          <p>ON DELETE RESTRICT: Prevents deletion while dependent records exist.</p>
          <p>ON DELETE SET DEFAULT: Sets the foreign key to its default value where supported.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Example:</h4>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`FOREIGN KEY (customer_id) REFERENCES customers(customer_id) ON DELETE CASCADE`}</code>
            </pre>
          </div>
          <p>Use cascading deletion carefully. In a business system, deleting a customer should not automatically erase financial or regulatory records that must be retained.</p>
        </div>
      </section>
      {"/* SECTION 12: Relational Schema Design */"}
      <section id="section-12" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 12
          </span>
          <span className="text-xs font-mono text-stone-500">Relational Blueprints</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          12. Relational Schema Design
        </h2>
        <div className="space-y-4 text-stone-700 leading-relaxed text-sm sm:text-base">
          <p>A relational schema defines how database tables, columns, keys, and relationships are organized.</p>
          <p>It provides the blueprint for implementing a relational database.</p>
          <p>Consider an e-commerce application.</p>
          <p>Customer table</p>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`CREATE TABLE customers ( customer_id BIGINT PRIMARY KEY, customer_name VARCHAR(100) NOT NULL, email VARCHAR(255) UNIQUE, city VARCHAR(100) );`}</code>
            </pre>
          </div>
          <p>Product table</p>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`CREATE TABLE products ( product_id BIGINT PRIMARY KEY, product_name VARCHAR(150) NOT NULL, category VARCHAR(100), price DECIMAL(12,2) NOT NULL );`}</code>
            </pre>
          </div>
          <p>Orders table</p>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`CREATE TABLE orders ( order_id BIGINT PRIMARY KEY, customer_id BIGINT NOT NULL, order_date TIMESTAMP NOT NULL, status VARCHAR(30), FOREIGN KEY (customer_id) REFERENCES customers(customer_id) );`}</code>
            </pre>
          </div>
          <p>Order Items table</p>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`CREATE TABLE order_items ( order_item_id BIGINT PRIMARY KEY, order_id BIGINT NOT NULL, product_id BIGINT NOT NULL, quantity INT NOT NULL CHECK (quantity > 0), unit_price DECIMAL(12,2) NOT NULL, FOREIGN KEY (order_id) REFERENCES orders(order_id), FOREIGN KEY (product_id) REFERENCES products(product_id) );`}</code>
            </pre>
          </div>
          <p>Relationships</p>
          <p>One customer can have multiple orders.</p>
          <p>One order can contain multiple order items.</p>
          <p>One product can appear in multiple order items.</p>
          <p>Each order item belongs to one order and one product.</p>
          <div className="my-3 p-3 rounded-xl bg-orange-50/60 border border-orange-200/80 flex items-center justify-between gap-3 text-xs">
            <div className="font-semibold text-stone-800 flex items-center gap-2"><span>&#128279;</span> <span>Building a Business Analytics Pipeline: SQL Analysis to Power BI Insights | by Athish | Feb, 2026 | Medium</span></div>
            <a href="https://images.openai.com/static-rsc-4/hIx3STpqI5YL9vdHOMJ8MC04mloCmG_PbdCMnDCYEFrrZ9dnnmBxOQaRU-n5d9EMwFNSjOsHlKHUlTxBn3xhGTJSJFAUH8ZK6hnnXF7rwnc83nXOstRqZpXAAMQrYierompHEoa59wYCb1FGM-vIaYOcDcTKhrNYwAQF2yQTVJQ?purpose=inline" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 font-bold inline-flex items-center gap-1 cursor-pointer">View Resource &rarr;</a>
          </div>
          <div className="my-3 p-3 rounded-xl bg-orange-50/60 border border-orange-200/80 flex items-center justify-between gap-3 text-xs">
            <div className="font-semibold text-stone-800 flex items-center gap-2"><span>&#128279;</span> <span>medium.com</span></div>
            <a href="https://medium.com/%40athishhlelesh/building-a-business-analytics-pipeline-sql-analysis-to-power-bi-insights-22b7868cc135?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 font-bold inline-flex items-center gap-1 cursor-pointer">View Resource &rarr;</a>
          </div>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Good relational schema design principles</h4>
          <p>Give every table a clear business purpose.</p>
          <p>Use appropriate primary and foreign keys.</p>
          <p>Choose suitable data types.</p>
          <p>Enforce constraints where business rules require them.</p>
          <p>Normalize operational data appropriately.</p>
          <p>Avoid unnecessary duplication.</p>
          <p>Create indexes based on actual query patterns.</p>
          <p>Document relationships and business rules.</p>
          <p>A data engineer should also consider how this schema will feed downstream analytical systems.</p>
          <p>Part 2 — Dimensional Data Modeling</p>
          <p>Relational schema design is important for storing operational data. However, analytical workloads have different requirements.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">A business may want to answer questions such as:</h4>
          <p>What was our total revenue last year?</p>
          <p>Which product category generated the most revenue?</p>
          <p>Which city has the highest number of orders?</p>
          <p>How did customer purchasing behavior change?</p>
          <p>What are the monthly sales trends?</p>
          <p>Running complicated analytical queries directly against operational databases can affect application performance.</p>
          <p>Data warehouses solve this problem by storing data in structures optimized for analysis.</p>
          <p>Dimensional modeling is one of the most widely used approaches for organizing data in analytical systems.</p>
        </div>
      </section>
      {"/* SECTION 13: Dimensional Data Modeling */"}
      <section id="section-13" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 13
          </span>
          <span className="text-xs font-mono text-stone-500">Dimensional Analytics</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          13. Dimensional Data Modeling
        </h2>
        <div className="space-y-4 text-stone-700 leading-relaxed text-sm sm:text-base">
          <p>Dimensional data modeling is a data warehouse design technique that organizes information into two major types of tables:</p>
          <p>Fact tables.</p>
          <p>Dimension tables.</p>
          <p>The purpose is to make analytical queries easier to understand and perform.</p>
          <p>A typical dimensional model answers business questions by combining measurable business events with descriptive information.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Example:</h4>
          <p>A retail company wants to analyze sales.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Measures:</h4>
          <p>Sales revenue.</p>
          <p>Quantity sold.</p>
          <p>Discount amount.</p>
          <p>Profit.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Descriptive dimensions:</h4>
          <p>Product.</p>
          <p>Customer.</p>
          <p>Store.</p>
          <p>Date.</p>
          <p>Location.</p>
          <p>The model connects sales transactions to these descriptive dimensions.</p>
          <div className="my-3 p-3 rounded-xl bg-orange-50/60 border border-orange-200/80 flex items-center justify-between gap-3 text-xs">
            <div className="font-semibold text-stone-800 flex items-center gap-2"><span>&#128279;</span> <span>Star Schema vs Snowflake Schema and the 7 Critical Differences — Blog | Keboola</span></div>
            <a href="https://images.openai.com/static-rsc-4/525ffGx--FvgdafMuwBCzxWRljz6jSy7VCWkW5RJR5m0fAzjRCcHCb0iAsyhL-tdl9j8Ts26c5Wba-tN0KMEIYM2HbseWtHhiwGz5qW5QWTX5_-LenLyWAwo966vXiYJcgDxg-KcagGRL8fUCN3CVaUr2f4avqs1Een7UfqXXsA?purpose=inline" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 font-bold inline-flex items-center gap-1 cursor-pointer">View Resource &rarr;</a>
          </div>
          <div className="my-3 p-3 rounded-xl bg-orange-50/60 border border-orange-200/80 flex items-center justify-between gap-3 text-xs">
            <div className="font-semibold text-stone-800 flex items-center gap-2"><span>&#128279;</span> <span>keboola.com</span></div>
            <a href="https://www.keboola.com/blog/star-schema-vs-snowflake-schema?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 font-bold inline-flex items-center gap-1 cursor-pointer">View Resource &rarr;</a>
          </div>
          <p>Operational database vs dimensional model</p>
          <p>Operational database</p>
          <p>Dimensional model</p>
          <p>Supports daily business transactions</p>
          <p>Supports business analytics</p>
          <p>Usually normalized</p>
          <p>Frequently denormalized</p>
          <p>Insert and update workloads</p>
          <p>Read-heavy analytical workloads</p>
          <p>Stores current operational information</p>
          <p>Commonly stores historical information</p>
          <p>Example: Order management</p>
          <p>Example: Sales warehouse</p>
          <p>Where dimensional modeling is used</p>
          <p>Retail analytics.</p>
          <p>Financial reporting.</p>
          <p>Customer analytics.</p>
          <p>Sales dashboards.</p>
          <p>Marketing analytics.</p>
          <p>Business intelligence.</p>
          <p>Data warehouses.</p>
        </div>
      </section>
      {"/* SECTION 14: Fact Tables and Dimension Tables */"}
      <section id="section-14" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 14
          </span>
          <span className="text-xs font-mono text-stone-500">Facts, Dimensions & Grain</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          14. Fact Tables and Dimension Tables
        </h2>
        <div className="space-y-4 text-stone-700 leading-relaxed text-sm sm:text-base">
          <p>Fact tables and dimension tables are the foundation of dimensional modeling.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">A. Fact Tables</h3>
          <p>A fact table stores measurable business events or transactions.</p>
          <p>For example, every time a customer purchases a product, a sales record can be stored in a sales fact table.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Example:</h4>
          <p>Fact_Sales</p>
          <p>sales_id</p>
          <p>date_key</p>
          <p>product_key</p>
          <p>customer_key</p>
          <p>quantity</p>
          <p>revenue</p>
          <p>1</p>
          <p>20261020</p>
          <p>501</p>
          <p>101</p>
          <p>1</p>
          <p>65000</p>
          <p>2</p>
          <p>20261020</p>
          <p>502</p>
          <p>102</p>
          <p>2</p>
          <p>4000</p>
          <p>3</p>
          <p>20261021</p>
          <p>503</p>
          <p>101</p>
          <p>1</p>
          <p>3000</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">A fact table generally contains:</h4>
          <p>Foreign keys connecting to dimensions.</p>
          <p>Measures representing business quantities.</p>
          <p>Optional identifiers for individual transactions.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Examples of measures:</h4>
          <p>Revenue.</p>
          <p>Quantity.</p>
          <p>Cost.</p>
          <p>Profit.</p>
          <p>Discount.</p>
          <p>Transaction count.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Types of facts</h4>
          <p>Additive facts: Can be summed across all relevant dimensions.</p>
          <p>Example: Total sales revenue.</p>
          <p>Semi-additive facts: Can be summed across some dimensions but not all.</p>
          <p>Example: Account balance can be summed across accounts at a point in time, but blindly summing balances across multiple dates is usually incorrect.</p>
          <p>Non-additive facts: Cannot meaningfully be summed.</p>
          <p>Example: Percentage, ratio, and average unit price.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">B. Dimension Tables</h3>
          <p>Dimension tables contain descriptive attributes that help explain facts.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Example:</h4>
          <p>Dim_Product</p>
          <p>product_key</p>
          <p>product_id</p>
          <p>product_name</p>
          <p>category</p>
          <p>1</p>
          <p>501</p>
          <p>Laptop</p>
          <p>Electronics</p>
          <p>2</p>
          <p>502</p>
          <p>Keyboard</p>
          <p>Accessories</p>
          <p>3</p>
          <p>503</p>
          <p>Monitor</p>
          <p>Electronics</p>
          <p>Dim_Customer</p>
          <p>customer_key</p>
          <p>customer_id</p>
          <p>name</p>
          <p>city</p>
          <p>1</p>
          <p>101</p>
          <p>Rahul</p>
          <p>Pune</p>
          <p>2</p>
          <p>102</p>
          <p>Priya</p>
          <p>Mumbai</p>
          <p>Dim_Date</p>
          <p>date_key</p>
          <p>full_date</p>
          <p>month</p>
          <p>year</p>
          <p>20261020</p>
          <p>2026-10-20</p>
          <p>October</p>
          <p>2026</p>
          <p>20261021</p>
          <p>2026-10-21</p>
          <p>October</p>
          <p>2026</p>
          <p>Dimensions provide the context needed to analyze facts.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Fact table vs dimension table</h4>
          <p>Fact Table</p>
          <p>Dimension Table</p>
          <p>Contains measurable events</p>
          <p>Contains descriptive information</p>
          <p>Usually many rows</p>
          <p>Often fewer rows</p>
          <p>Contains foreign keys</p>
          <p>Contains dimension keys</p>
          <p>Stores revenue, quantity, cost</p>
          <p>Stores customer, product, time</p>
          <p>Answers how much or how many</p>
          <p>Explains who, what, where, when</p>
          <p>Important concept: Grain of a fact table</p>
          <p>Grain defines exactly what one row in a fact table represents.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">For example:</h4>
          <p>One row per order.</p>
          <p>One row per order item.</p>
          <p>One row per daily account balance.</p>
          <p>One row per product sold at a store per hour.</p>
          <p>The grain must be established before designing the fact table.</p>
          <p>Example: If a single order contains three products, an order-level fact table has one row, whereas an order-item-level fact table has three rows.</p>
          <p>Mixing these grains in the same fact table can result in incorrect totals and misleading analytics.</p>
        </div>
      </section>
      {"/* SECTION 15: Star Schema Architecture */"}
      <section id="section-15" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 15
          </span>
          <span className="text-xs font-mono text-stone-500">Star Schema Pattern</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          15. Star Schema Architecture
        </h2>
        <div className="space-y-4 text-stone-700 leading-relaxed text-sm sm:text-base">
          <p>A star schema is a dimensional modeling structure where a central fact table connects directly to multiple dimension tables.</p>
          <p>It is called a star schema because the resulting design resembles a star.</p>
          <div className="my-3 p-3 rounded-xl bg-orange-50/60 border border-orange-200/80 flex items-center justify-between gap-3 text-xs">
            <div className="font-semibold text-stone-800 flex items-center gap-2"><span>&#128279;</span> <span>Understanding Star Schema in Data Warehouse Modelling</span></div>
            <a href="https://images.openai.com/static-rsc-4/Z6YjKFE74ki0pa6EHttOXzIC_FU12GjH8Y5_mqa4u1pB-umu6fnVBQYCFkZf0PtORhpz7tGkwKk1IjlwXulFvq7FU0sH07dEcnCbzItipspN6tvJBxAkBlwPhIX4aE2dLDKHuMLevAbxoWV8W59FNBzz3ZYieBej0wSAbTPxc58?purpose=inline" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 font-bold inline-flex items-center gap-1 cursor-pointer">View Resource &rarr;</a>
          </div>
          <div className="my-3 p-3 rounded-xl bg-orange-50/60 border border-orange-200/80 flex items-center justify-between gap-3 text-xs">
            <div className="font-semibold text-stone-800 flex items-center gap-2"><span>&#128279;</span> <span>hevodata.com</span></div>
            <a href="https://hevodata.com/learn/star-schema-data-modelling/?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 font-bold inline-flex items-center gap-1 cursor-pointer">View Resource &rarr;</a>
          </div>
          <p>Example</p>
          <p>A retail business maintains a Sales fact table.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Central fact table:</h4>
          <p>Fact_Sales</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Connected dimension tables:</h4>
          <p>Dim_Customer</p>
          <p>Dim_Product</p>
          <p>Dim_Date</p>
          <p>Dim_Store</p>
          <p>Dim_Promotion</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Conceptual structure:</h4>
          <div className="my-4 p-4 rounded-xl bg-stone-50 border border-stone-200">
            <div className="text-xs font-bold uppercase tracking-wider text-stone-500 mb-2 font-mono">Architecture Flow</div>
            <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
              <span className="px-3 py-1.5 rounded-lg bg-white border border-stone-300 font-semibold text-stone-800 shadow-2xs">Dim_Customer</span>
              <span className="text-orange-500 font-bold">&rarr;</span>
              <span className="px-3 py-1.5 rounded-lg bg-white border border-stone-300 font-semibold text-stone-800 shadow-2xs">Dim_Product ---- Fact_Sales ---- Dim_Date</span>
              <span className="text-orange-500 font-bold">&rarr;</span>
              <span className="px-3 py-1.5 rounded-lg bg-white border border-stone-300 font-semibold text-stone-800 shadow-2xs">Dim_Store</span>
              <span className="text-orange-500 font-bold">&rarr;</span>
              <span className="px-3 py-1.5 rounded-lg bg-white border border-stone-300 font-semibold text-stone-800 shadow-2xs">Dim_Promotion</span>
            </div>
          </div>
          <p>Star schema SQL example</p>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`CREATE TABLE dim_product ( product_key BIGINT PRIMARY KEY, product_id BIGINT, product_name VARCHAR(150), category VARCHAR(100) ); CREATE TABLE dim_customer ( customer_key BIGINT PRIMARY KEY, customer_id BIGINT, customer_name VARCHAR(100), city VARCHAR(100) ); CREATE TABLE fact_sales ( sales_id BIGINT PRIMARY KEY, product_key BIGINT, customer_key BIGINT, quantity INT, revenue DECIMAL(12,2), FOREIGN KEY (product_key) REFERENCES dim_product(product_key), FOREIGN KEY (customer_key) REFERENCES dim_customer(customer_key) );`}</code>
            </pre>
          </div>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Advantages</h4>
          <p>Simple structure.</p>
          <p>Easy-to-understand relationships.</p>
          <p>Convenient for analytical queries.</p>
          <p>Typically requires fewer joins than a highly normalized dimensional design.</p>
          <p>Works well with many BI tools.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Disadvantages</h4>
          <p>Some descriptive information is duplicated.</p>
          <p>Dimension tables can become large.</p>
          <p>Maintaining historical changes requires proper design.</p>
          <p>Example analytical query</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Calculate total sales revenue by product category:</h4>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`SELECT p.category, SUM(f.revenue) AS total_revenue FROM fact_sales f JOIN dim_product p ON f.product_key = p.product_key GROUP BY p.category ORDER BY total_revenue DESC;`}</code>
            </pre>
          </div>
          <p>This is a common type of analytical query in a data warehouse.</p>
        </div>
      </section>
      {"/* SECTION 16: Snowflake Schema Architecture */"}
      <section id="section-16" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 16
          </span>
          <span className="text-xs font-mono text-stone-500">Snowflake Hierarchy</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          16. Snowflake Schema Architecture
        </h2>
        <div className="space-y-4 text-stone-700 leading-relaxed text-sm sm:text-base">
          <p>A snowflake schema is another dimensional modeling approach.</p>
          <p>Unlike the star schema, dimension tables are further normalized into multiple related tables.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">For example, in a star schema, product information might contain:</h4>
          <p>Product Name.</p>
          <p>Category Name.</p>
          <p>Subcategory Name.</p>
          <p>Department Name.</p>
          <p>In a snowflake schema, these attributes may be separated into different tables.</p>
          <div className="my-3 p-3 rounded-xl bg-orange-50/60 border border-orange-200/80 flex items-center justify-between gap-3 text-xs">
            <div className="font-semibold text-stone-800 flex items-center gap-2"><span>&#128279;</span> <span>The Backbone of Power BI: A Deep Dive into Data Modeling &amp; Schemas - DEV Community</span></div>
            <a href="https://images.openai.com/static-rsc-4/wVp0bCzvPmnDKabD173m4uFJ8VtCQO1v5lNS8KsSHmVADrvIJ_mWs5mHblhVxeX37PpTdVVPrAKGac1xhjW-rgHvvZ8C1Dq42wt6OIJ6gIPrMXuOIP5DSz2htigwoAie5XUFPHtIqhg74VCV5IMZGQx1VJrpxSKyg9QtF81KTDE?purpose=inline" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 font-bold inline-flex items-center gap-1 cursor-pointer">View Resource &rarr;</a>
          </div>
          <div className="my-3 p-3 rounded-xl bg-orange-50/60 border border-orange-200/80 flex items-center justify-between gap-3 text-xs">
            <div className="font-semibold text-stone-800 flex items-center gap-2"><span>&#128279;</span> <span>dev.to</span></div>
            <a href="https://dev.to/charles_ndungu/the-backbone-of-power-bi-a-deep-dive-into-data-modeling-schemas-1o1l?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 font-bold inline-flex items-center gap-1 cursor-pointer">View Resource &rarr;</a>
          </div>
          <p>Example</p>
          <p>Fact_Sales</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Connected to:</h4>
          <p>Dim_Product</p>
          <p>Dim_Customer</p>
          <p>Dim_Date</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">The product dimension is further divided into:</h4>
          <p>Dim_Product</p>
          <p>Dim_Subcategory</p>
          <p>Dim_Category</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Conceptual structure:</h4>
          <div className="my-4 p-4 rounded-xl bg-stone-50 border border-stone-200">
            <div className="text-xs font-bold uppercase tracking-wider text-stone-500 mb-2 font-mono">Architecture Flow</div>
            <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
              <span className="px-3 py-1.5 rounded-lg bg-white border border-stone-300 font-semibold text-stone-800 shadow-2xs">Dim_Category</span>
              <span className="text-orange-500 font-bold">&rarr;</span>
              <span className="px-3 py-1.5 rounded-lg bg-white border border-stone-300 font-semibold text-stone-800 shadow-2xs">Dim_Subcategory</span>
              <span className="text-orange-500 font-bold">&rarr;</span>
              <span className="px-3 py-1.5 rounded-lg bg-white border border-stone-300 font-semibold text-stone-800 shadow-2xs">Dim_Customer ---- Fact_Sales ---- Dim_Product</span>
              <span className="text-orange-500 font-bold">&rarr;</span>
              <span className="px-3 py-1.5 rounded-lg bg-white border border-stone-300 font-semibold text-stone-800 shadow-2xs">Dim_Date</span>
            </div>
          </div>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Star schema vs snowflake schema</h4>
          <p>Feature</p>
          <p>Star Schema</p>
          <p>Snowflake Schema</p>
          <p>Dimension design</p>
          <p>Denormalized</p>
          <p>More normalized</p>
          <p>Number of tables</p>
          <p>Usually fewer</p>
          <p>Usually more</p>
          <p>Query complexity</p>
          <p>Often simpler</p>
          <p>Can be more complex</p>
          <p>Redundancy</p>
          <p>More</p>
          <p>Less</p>
          <p>JOIN operations</p>
          <p>Often fewer</p>
          <p>Often more</p>
          <p>Maintenance</p>
          <p>Simple for common use cases</p>
          <p>Can help with complex shared hierarchies</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">When to use each</h4>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Use a star schema when:</h4>
          <p>The primary requirement is straightforward reporting.</p>
          <p>Users need simple analytical queries.</p>
          <p>Query performance and ease of use are priorities.</p>
          <p>Dimensions have manageable complexity.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Use a snowflake schema when:</h4>
          <p>Dimensions contain complex hierarchies.</p>
          <p>Reusable hierarchical information matters.</p>
          <p>Reducing repeated descriptive data is beneficial.</p>
          <p>The additional joins are acceptable.</p>
          <p>Neither design is universally better. The correct choice depends on query patterns, storage technology, data size, and maintenance requirements.</p>
        </div>
      </section>
      {"/* SECTION 17: Slowly Changing Dimensions (SCD) */"}
      <section id="section-17" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 17
          </span>
          <span className="text-xs font-mono text-stone-500">Slowly Changing Dimensions</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          17. Slowly Changing Dimensions (SCD)
        </h2>
        <div className="space-y-4 text-stone-700 leading-relaxed text-sm sm:text-base">
          <p>Slowly Changing Dimensions are techniques used in data warehouses to manage changes in dimension attributes over time.</p>
          <p>Consider a customer who changes their city.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Initially:</h4>
          <p>customer_id</p>
          <p>name</p>
          <p>city</p>
          <p>101</p>
          <p>Rahul</p>
          <p>Pune</p>
          <p>Later, Rahul moves to Mumbai.</p>
          <p>If we simply replace Pune with Mumbai, the historical information is lost.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">But a business may need to answer:</h4>
          <p>How many sales came from Pune last year?</p>
          <p>How many sales currently come from Mumbai?</p>
          <p>Where did this customer live when a particular order was placed?</p>
          <p>SCD techniques help preserve the required historical information.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">SCD Type 0 — Retain Original Value</h4>
          <p>The original attribute is preserved and never updated.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Example:</h4>
          <p>If a customer originally registered in Pune, the original registration city remains unchanged, even after the customer moves.</p>
          <p>Useful when historical information should never change.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">SCD Type 1 — Overwrite</h4>
          <p>The old value is replaced with the new value.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Before:</h4>
          <p>customer_id</p>
          <p>name</p>
          <p>city</p>
          <p>101</p>
          <p>Rahul</p>
          <p>Pune</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">After:</h4>
          <p>customer_id</p>
          <p>name</p>
          <p>city</p>
          <p>101</p>
          <p>Rahul</p>
          <p>Mumbai</p>
          <p>The old value is not preserved.</p>
          <p>Useful when corrections are required or historical tracking is unnecessary.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">SCD Type 2 — Create a New Historical Record</h4>
          <p>A new dimension row is inserted whenever a tracked attribute changes.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Example:</h4>
          <p>customer_key</p>
          <p>customer_id</p>
          <p>city</p>
          <p>effective_from</p>
          <p>effective_to</p>
          <p>is_current</p>
          <p>1</p>
          <p>101</p>
          <p>Pune</p>
          <p>2025-01-01</p>
          <p>2026-05-31</p>
          <p>FALSE</p>
          <p>2</p>
          <p>101</p>
          <p>Mumbai</p>
          <p>2026-06-01</p>
          <p>NULL</p>
          <p>TRUE</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Here:</h4>
          <p>customer_id identifies the original customer.</p>
          <p>customer_key is the warehouse surrogate key.</p>
          <p>effective_from identifies when the version became valid.</p>
          <p>effective_to identifies when the version stopped being valid.</p>
          <p>is_current identifies the active version.</p>
          <p>This approach preserves historical changes.</p>
          <p>Example SQL</p>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`CREATE TABLE dim_customer ( customer_key BIGINT PRIMARY KEY, customer_id BIGINT, customer_name VARCHAR(100), city VARCHAR(100), effective_from DATE, effective_to DATE, is_current BOOLEAN );`}</code>
            </pre>
          </div>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">When the customer moves from Pune to Mumbai:</h4>
          <p>Update the previous row's effective end date.</p>
          <p>Set its current flag to FALSE.</p>
          <p>Insert another row using a new surrogate key.</p>
          <p>Set the new location and current flag to TRUE.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">SCD Type 3 — Maintain Limited Previous Values</h4>
          <p>Type 3 stores the current value along with a previous value.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Example:</h4>
          <p>customer_id</p>
          <p>current_city</p>
          <p>previous_city</p>
          <p>101</p>
          <p>Mumbai</p>
          <p>Pune</p>
          <p>Unlike Type 2, it usually preserves only a limited amount of historical information.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">SCD Type 4 — Separate Historical Table</h4>
          <p>Type 4 keeps current information in the main dimension and stores historical changes in a separate history table.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">SCD Type 6 — Hybrid Approach</h4>
          <p>Type 6 combines aspects of Types 1, 2, and 3 to support current, historical, and previous-value reporting.</p>
          <p>SCD comparison</p>
          <p>Type</p>
          <p>Approach</p>
          <p>History preserved?</p>
          <p>Type 0</p>
          <p>Retain original value</p>
          <p>Original only</p>
          <p>Type 1</p>
          <p>Overwrite</p>
          <p>No</p>
          <p>Type 2</p>
          <p>Add a new row</p>
          <p>Full tracked history</p>
          <p>Type 3</p>
          <p>Keep previous value in another column</p>
          <p>Limited</p>
          <p>Type 4</p>
          <p>Separate history table</p>
          <p>Yes, in history table</p>
          <p>Type 6</p>
          <p>Hybrid technique</p>
          <p>Yes, depending on implementation</p>
          <p>Important for data engineers: SCD Type 2 is particularly important because it enables historical reporting using the dimension version that was valid when the business event occurred.</p>
        </div>
      </section>
      {"/* SECTION 18: Historical Data Modeling */"}
      <section id="section-18" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 18
          </span>
          <span className="text-xs font-mono text-stone-500">Historical Tracking</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          18. Historical Data Modeling
        </h2>
        <div className="space-y-4 text-stone-700 leading-relaxed text-sm sm:text-base">
          <p>Historical data modeling focuses on preserving and organizing information about how business data changes over time.</p>
          <p>Many operational systems store only the current state of an entity.</p>
          <p>But data warehouses often need historical states.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Example:</h4>
          <p>A customer profile changes over time.</p>
          <p>Date</p>
          <p>Customer City</p>
          <p>January 2025</p>
          <p>Pune</p>
          <p>June 2025</p>
          <p>Mumbai</p>
          <p>March 2026</p>
          <p>Bengaluru</p>
          <p>A system that stores only the latest city loses the earlier history.</p>
          <p>Historical data modeling helps preserve this information.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Common historical modeling approaches</h4>
          <ol className="list-decimal list-inside space-y-1.5 text-stone-700 text-sm sm:text-base my-3 pl-2">
            <li value="1"><strong className="text-stone-900">Snapshot tables</strong></li>
          </ol>
          <p>Store the state of records at a particular point in time.</p>
          <p>Example: A daily account balance snapshot.</p>
          <p>snapshot_date</p>
          <p>account_id</p>
          <p>balance</p>
          <p>2026-11-01</p>
          <p>101</p>
          <p>50000</p>
          <p>2026-11-02</p>
          <p>101</p>
          <p>52000</p>
          <p>2026-11-03</p>
          <p>101</p>
          <p>48000</p>
          <p>Useful for financial reporting, inventory analysis, and periodic metrics.</p>
          <ol className="list-decimal list-inside space-y-1.5 text-stone-700 text-sm sm:text-base my-3 pl-2">
            <li value="2"><strong className="text-stone-900">Effective dating</strong></li>
          </ol>
          <p>Maintain the period during which a record is valid.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Example:</h4>
          <p>employee_id</p>
          <p>department</p>
          <p>valid_from</p>
          <p>valid_to</p>
          <p>101</p>
          <p>Engineering</p>
          <p>2025-01-01</p>
          <p>2026-06-30</p>
          <p>101</p>
          <p>Data Engineering</p>
          <p>2026-07-01</p>
          <p>NULL</p>
          <p>This approach is commonly used with SCD Type 2.</p>
          <ol className="list-decimal list-inside space-y-1.5 text-stone-700 text-sm sm:text-base my-3 pl-2">
            <li value="3"><strong className="text-stone-900">Audit history</strong></li>
          </ol>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Records the changes made to data, including details such as:</h4>
          <p>Previous value.</p>
          <p>New value.</p>
          <p>Modification timestamp.</p>
          <p>User or system responsible.</p>
          <p>Change type.</p>
          <ol className="list-decimal list-inside space-y-1.5 text-stone-700 text-sm sm:text-base my-3 pl-2">
            <li value="4"><strong className="text-stone-900">Event sourcing</strong></li>
          </ol>
          <p>Stores state changes as a sequence of events rather than storing only the latest state.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">For example:</h4>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`CustomerRegistered CustomerAddressChanged CustomerEmailUpdated CustomerAccountDeactivated`}</code>
            </pre>
          </div>
          <p>The current state can be reconstructed by processing the event history, subject to event ordering and consistency rules.</p>
          <p>Valid time vs transaction time</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Two important concepts in historical modeling are:</h4>
          <p>Valid time: When information is true in the real world.</p>
          <p>Transaction time: When the database recorded that information.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Example:</h4>
          <p>A customer moved to Mumbai on June 1, but the system was updated on June 5.</p>
          <p>Valid time starts June 1.</p>
          <p>Transaction time begins June 5.</p>
          <p>A bitemporal model can preserve both timelines.</p>
          <p>This is useful in banking, insurance, healthcare, compliance, and auditing.</p>
        </div>
      </section>
      {"/* SECTION 19: Event-Based Data Modeling */"}
      <section id="section-19" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 19
          </span>
          <span className="text-xs font-mono text-stone-500">Event-Driven Modeling</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          19. Event-Based Data Modeling
        </h2>
        <div className="space-y-4 text-stone-700 leading-relaxed text-sm sm:text-base">
          <p>Event-based data modeling represents business activities as individual events.</p>
          <p>Instead of storing only the current state of a system, we store records describing what happened and when it happened.</p>
          <p>Example: An e-commerce order lifecycle.</p>
          <div className="my-4 p-4 rounded-xl bg-stone-50 border border-stone-200">
            <div className="text-xs font-bold uppercase tracking-wider text-stone-500 mb-2 font-mono">Architecture Flow</div>
            <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
              <span className="px-3 py-1.5 rounded-lg bg-white border border-stone-300 font-semibold text-stone-800 shadow-2xs">Order Created</span>
              <span className="text-orange-500 font-bold">&rarr;</span>
              <span className="px-3 py-1.5 rounded-lg bg-white border border-stone-300 font-semibold text-stone-800 shadow-2xs">Payment Completed</span>
              <span className="text-orange-500 font-bold">&rarr;</span>
              <span className="px-3 py-1.5 rounded-lg bg-white border border-stone-300 font-semibold text-stone-800 shadow-2xs">Order Confirmed</span>
              <span className="text-orange-500 font-bold">&rarr;</span>
              <span className="px-3 py-1.5 rounded-lg bg-white border border-stone-300 font-semibold text-stone-800 shadow-2xs">Order Shipped</span>
              <span className="text-orange-500 font-bold">&rarr;</span>
              <span className="px-3 py-1.5 rounded-lg bg-white border border-stone-300 font-semibold text-stone-800 shadow-2xs">Order Delivered</span>
            </div>
          </div>
          <p>Each step generates an event.</p>
          <p>Example event structure</p>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`{ "event_id": "evt_1001", "event_type": "OrderPlaced", "customer_id": 101, "order_id": 5001, "event_timestamp": "2026-11-09T10:30:00Z", "source": "web_app", "payload": { "total_amount": 2500, "currency": "INR" } }`}</code>
            </pre>
          </div>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">An event typically contains:</h4>
          <p>Event identifier.</p>
          <p>Event type.</p>
          <p>Entity or aggregate identifier.</p>
          <p>Timestamp.</p>
          <p>Event source.</p>
          <p>Event payload.</p>
          <p>Optional metadata and schema version.</p>
          <p>Event-based modeling vs traditional state-based modeling</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">State-based modeling</h4>
          <p>Event-based modeling</p>
          <p>Stores the current state</p>
          <p>Stores what happened</p>
          <p>Updates existing records</p>
          <p>Usually appends new events</p>
          <p>Earlier states may be overwritten</p>
          <p>Earlier events can be preserved</p>
          <p>Simple for current-state queries</p>
          <p>Useful for history and event analysis</p>
          <p>Example: Current order status</p>
          <p>Example: Every order status transition</p>
          <p>Event-based architecture in data engineering</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Events can be published to streaming platforms such as:</h4>
          <p>Apache Kafka.</p>
          <p>Apache Pulsar.</p>
          <p>Amazon Kinesis.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">A data pipeline may process these events and send them to:</h4>
          <p>Real-time analytics systems.</p>
          <p>Data warehouses.</p>
          <p>Data lakes.</p>
          <p>Operational databases.</p>
          <p>Monitoring systems.</p>
          <div className="my-3 p-3 rounded-xl bg-orange-50/60 border border-orange-200/80 flex items-center justify-between gap-3 text-xs">
            <div className="font-semibold text-stone-800 flex items-center gap-2"><span>&#128279;</span> <span>Free Software Architecture Diagram Generator | Create System Diagrams Online - ConceptViz</span></div>
            <a href="https://images.openai.com/static-rsc-4/TFOrK0144zTdSWkUi7RT-BSZCZosz7xs-Af7j4pt5Bz8SHTKPj1Di4VM8EXjVRmEsccF7GpsM8jYuvpXpZuxrRtHZttzwZZ0Q9ZBesxWwCPLvvAJNcpR51Va3RzRbbZvgyYiXiSFnP3W3ZRKA90H5vFlSEJ8EfYqujEpZgG3tgM?purpose=inline" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 font-bold inline-flex items-center gap-1 cursor-pointer">View Resource &rarr;</a>
          </div>
          <div className="my-3 p-3 rounded-xl bg-orange-50/60 border border-orange-200/80 flex items-center justify-between gap-3 text-xs">
            <div className="font-semibold text-stone-800 flex items-center gap-2"><span>&#128279;</span> <span>conceptviz.app</span></div>
            <a href="https://conceptviz.app/tools/software-architecture-diagram-generator?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 font-bold inline-flex items-center gap-1 cursor-pointer">View Resource &rarr;</a>
          </div>
          <p>Important concepts</p>
          <p>Event time: When the event actually happened.</p>
          <p>Processing time: When the data processing system processed the event.</p>
          <p>Late-arriving events: Events that reach the system after their expected processing window.</p>
          <p>Out-of-order events: Events that arrive in a different order from when they occurred.</p>
          <p>Idempotency: Ensuring that processing the same event more than once does not create unintended duplicate effects.</p>
          <p>Schema registry: A system for managing and validating event schemas, particularly in distributed streaming architectures.</p>
          <p>Event-based modeling is particularly valuable for fraud detection, financial transactions, logistics tracking, user activity analytics, and real-time dashboards.</p>
        </div>
      </section>
      {"/* SECTION 20: Schema Evolution and Design Trade-offs */"}
      <section id="section-20" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 20
          </span>
          <span className="text-xs font-mono text-stone-500">Schema Evolution</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          20. Schema Evolution and Design Trade-offs
        </h2>
        <div className="space-y-4 text-stone-700 leading-relaxed text-sm sm:text-base">
          <p>Schema evolution is the process of modifying a database or data structure as business requirements change.</p>
          <p>A business rarely uses the same data structure forever.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">For example, an e-commerce platform initially stores:</h4>
          <p>&#123; "customer_id": 101, "name": "Rahul", "email": "rahul@example.com" &#125;</p>
          <p>Later, the business wants to add customer preferences.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">The schema evolves:</h4>
          <p>&#123; "customer_id": 101, "name": "Rahul", "email": "rahul@example.com", "preferred_language": "English" &#125;</p>
          <p>The data model must support these changes without unnecessarily breaking existing systems.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Common schema changes</h4>
          <ol className="list-decimal list-inside space-y-1.5 text-stone-700 text-sm sm:text-base my-3 pl-2">
            <li value="1"><strong className="text-stone-900">Adding a column</strong></li>
          </ol>
          <p>Example: Adding preferred_language to a customer table.</p>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`ALTER TABLE customers ADD COLUMN preferred_language VARCHAR(50);`}</code>
            </pre>
          </div>
          <ol className="list-decimal list-inside space-y-1.5 text-stone-700 text-sm sm:text-base my-3 pl-2">
            <li value="2"><strong className="text-stone-900">Removing a column</strong></li>
          </ol>
          <p>Example: Removing an obsolete field.</p>
          <p>This requires checking whether applications, ETL pipelines, reports, or other consumers still depend on that column.</p>
          <ol className="list-decimal list-inside space-y-1.5 text-stone-700 text-sm sm:text-base my-3 pl-2">
            <li value="3"><strong className="text-stone-900">Changing a data type</strong></li>
          </ol>
          <p>Example: Changing a numeric identifier from INTEGER to BIGINT.</p>
          <p>Such changes can affect storage, application code, indexes, and downstream systems.</p>
          <ol className="list-decimal list-inside space-y-1.5 text-stone-700 text-sm sm:text-base my-3 pl-2">
            <li value="4"><strong className="text-stone-900">Renaming a column</strong></li>
          </ol>
          <p>Example: Renaming customer_name to full_name.</p>
          <p>This can break existing queries if downstream consumers are not updated.</p>
          <ol className="list-decimal list-inside space-y-1.5 text-stone-700 text-sm sm:text-base my-3 pl-2">
            <li value="5"><strong className="text-stone-900">Adding new nested fields</strong></li>
          </ol>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Common in JSON, Avro, and other semi-structured data formats.</h4>
          <p>Backward compatibility</p>
          <p>A new schema version is backward-compatible when older consumers can continue working with data produced using the newer schema.</p>
          <p>Example: Adding an optional field with a suitable default.</p>
          <p>Forward compatibility</p>
          <p>A new consumer can work with older versions of a schema.</p>
          <p>Example: A newly developed data consumer can handle records that do not contain a recently introduced optional field.</p>
          <p>Schema evolution in streaming systems</p>
          <p>In event-driven systems, producers and consumers may not be updated at the same time.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">For example:</h4>
          <p>A producer begins publishing a new field.</p>
          <p>A Kafka topic receives records with both old and new schema versions.</p>
          <p>Consumers must process records safely.</p>
          <p>A schema registry validates schema compatibility.</p>
          <p>Downstream analytical tables are updated when appropriate.</p>
          <p>This is important in systems where hundreds of services and pipelines share data.</p>
          <p>Important design trade-offs</p>
          <p>Design decision</p>
          <p>Trade-off</p>
          <p>Normalization vs denormalization</p>
          <p>Consistency vs simpler/faster reads</p>
          <p>Star vs snowflake schema</p>
          <p>Simplicity vs reduced dimension redundancy</p>
          <p>Natural vs surrogate keys</p>
          <p>Business meaning vs stable warehouse identity</p>
          <p>Full historical tracking vs current state</p>
          <p>Historical detail vs storage and processing cost</p>
          <p>Batch vs event-based ingestion</p>
          <p>Simplicity vs lower-latency updates</p>
          <p>Strict schema vs flexible schema</p>
          <p>Strong validation vs adaptability</p>
          <p>More tables vs fewer tables</p>
          <p>Separation of concerns vs query complexity</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Tools and technologies worth understanding</h4>
          <div className="my-3 p-3 rounded-xl bg-orange-50/60 border border-orange-200/80 flex items-center justify-between gap-3 text-xs">
            <div className="font-semibold text-stone-800 flex items-center gap-2"><span>&#128279;</span> <span>Postgresql Logo PNG Transparent With Clear Background ID 473068 | TOPpng</span></div>
            <a href="https://images.openai.com/static-rsc-4/x6sDZ8oKI9URixQ5E82vqCQV1aR38qK7E8n0HKggx6_cD8G7QtlPuHlyO99GalHPJOycjs41bPgfrRTqdHFqayPWJl57hxNttQynREzHXSUSsui_zVAB_ssyc1xdm_msJ5GiDzf23C9Z2RuuoyVCc6J0AbuAqX5Aul_x1J78q2I?purpose=inline" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 font-bold inline-flex items-center gap-1 cursor-pointer">View Resource &rarr;</a>
          </div>
          <p>PostgreSQL</p>
          <p>Relational database design, keys, constraints, SQL, and schema implementation.</p>
          <p>dbt</p>
          <p>Building analytical models, transforming warehouse data, and testing data quality.</p>
          <div className="my-3 p-3 rounded-xl bg-orange-50/60 border border-orange-200/80 flex items-center justify-between gap-3 text-xs">
            <div className="font-semibold text-stone-800 flex items-center gap-2"><span>&#128279;</span> <span>Running Kafka on Production. Apache Kafka is an open-source… | by Pradyumna Khawas | WorkIndia.in | Medium</span></div>
            <a href="https://images.openai.com/static-rsc-4/IdgpctULbez35q_RTbMO09b-y6gGSwj0M361O82eRjmf4iacIuOlU2NJe7tJ5nG3ML_-Ramx8HPhw_f2BkJ4-7fTax9B_pG2F5mYYn7fI3Wkxu6lEMjmv6TQdRCI7p2vkYr-RROSNxhp8BCekHH4j-k8olCh620FHns5GrtDyDM?purpose=inline" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 font-bold inline-flex items-center gap-1 cursor-pointer">View Resource &rarr;</a>
          </div>
          <p>Apache Kafka</p>
          <p>Event-driven data pipelines and streaming data architectures.</p>
          <div className="my-3 p-3 rounded-xl bg-orange-50/60 border border-orange-200/80 flex items-center justify-between gap-3 text-xs">
            <div className="font-semibold text-stone-800 flex items-center gap-2"><span>&#128279;</span> <span>Snowflake World Tour Jakarta - Snowflake Indonesia</span></div>
            <a href="https://images.openai.com/static-rsc-4/hOGbz6FzvspllA7cHJ9PI5za51zE_pnpWusbLPRMl1qCynSt_W8BaFGNbs_QJbF_k_3qLfh4sjej87wO5L15Kj-mqfPYqAdX8CZUsfMtZxxSOiFd8mo6jSpWr8n66nHq8sntcg56eJ9_caapyJh6JXI6LvXe43gNQPxGiNClpzE?purpose=inline" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 font-bold inline-flex items-center gap-1 cursor-pointer">View Resource &rarr;</a>
          </div>
          <p>Snowflake</p>
          <p>Implementing analytical data models and dimensional warehouse structures.</p>
          <div className="my-3 p-3 rounded-xl bg-orange-50/60 border border-orange-200/80 flex items-center justify-between gap-3 text-xs">
            <div className="font-semibold text-stone-800 flex items-center gap-2"><span>&#128279;</span> <span>Microsoft SQL Server 2016 Standard</span></div>
            <a href="https://images.openai.com/static-rsc-4/F5lNkGBnLvdOwTN2IaD6-9CZe7OidElUzJQ5tmwHCNAQR0aKOTLZnEcyBXI5d2RSOgXq9jq1AnkCMTowSyfZMf3Mjjw_GL23d5ml_EWamUYegZ-C5ncLZGUNDeOZ0xdGBmiDApk7hOosDqtshUxwnV8tYMIaTaliYiNs0On01LE?purpose=inline" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 font-bold inline-flex items-center gap-1 cursor-pointer">View Resource &rarr;</a>
          </div>
          <p>Microsoft SQL Server</p>
          <p>Relational database development, constraints, indexes, and schema design.</p>
        </div>
      </section>
      {"/* SECTION 21: Practical Lab — Design an E-commerce Data Warehouse */"}
      <section id="section-21" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 21
          </span>
          <span className="text-xs font-mono text-stone-500">Capstone Project Lab</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          21. Practical Lab — Design an E-commerce Data Warehouse
        </h2>
        <div className="space-y-4 text-stone-700 leading-relaxed text-sm sm:text-base">
          <p>Now let's connect the entire module through one realistic data engineering project.</p>
          <div className="my-3 p-3 rounded-xl bg-orange-50/60 border border-orange-200/80 flex items-center justify-between gap-3 text-xs">
            <div className="font-semibold text-stone-800 flex items-center gap-2"><span>&#128279;</span> <span>24. Building a Star Schema Using dbt | by LAXMINARAYANA LIKKI | Mar, 2026 | Medium</span></div>
            <a href="https://images.openai.com/static-rsc-4/MSivxhz-JJd8nTENRhPaCIL7MBKAMdkwNhaHQOiIYN25-f7Uz4NRQT9TVAeShhaGyqrubowMncQ-6C7MDphN84muySQ6-ad5gvgROKRfPOe9LsavoVMIq6fbCEC89TuGNV4y9Gi0Ge5t4hiKdU5gG-90ZoPzNZSwdWAf5MukwLY?purpose=inline" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 font-bold inline-flex items-center gap-1 cursor-pointer">View Resource &rarr;</a>
          </div>
          <div className="my-3 p-3 rounded-xl bg-orange-50/60 border border-orange-200/80 flex items-center justify-between gap-3 text-xs">
            <div className="font-semibold text-stone-800 flex items-center gap-2"><span>&#128279;</span> <span>medium.com</span></div>
            <a href="https://medium.com/%40likkilaxminarayana/24-building-a-star-schema-using-dbt-5332405c8f23?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 font-bold inline-flex items-center gap-1 cursor-pointer">View Resource &rarr;</a>
          </div>
          <p>Project objective</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Design a data model for an e-commerce platform that can analyze:</h4>
          <p>Total sales revenue.</p>
          <p>Monthly sales.</p>
          <p>Best-selling products.</p>
          <p>Customer purchasing behavior.</p>
          <p>Sales by city.</p>
          <p>Sales by product category.</p>
          <p>Historical changes in customer locations.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Step 1 — Design the operational database</h4>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Create these tables:</h4>
          <p>Customers.</p>
          <p>Products.</p>
          <p>Categories.</p>
          <p>Orders.</p>
          <p>Order Items.</p>
          <p>Payments.</p>
          <p>Establish primary keys, foreign keys, and constraints.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Step 2 — Create the dimensional model</h4>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Create these analytical tables:</h4>
          <p>Fact tables</p>
          <ul className="list-disc list-inside space-y-1.5 text-stone-700 text-sm sm:text-base my-3 pl-2">
            <li>Fact_Sales.</li>
          </ul>
          <p>Dimension tables</p>
          <p>Dim_Customer.</p>
          <p>Dim_Product.</p>
          <p>Dim_Date.</p>
          <p>Dim_Location.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Define the grain of Fact_Sales as:</h4>
          <p>"One row per product line within an order."</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Step 3 — Implement a star schema</h4>
          <p>Connect Fact_Sales to the four dimensions.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Add measures:</h4>
          <p>Quantity.</p>
          <p>Gross sales.</p>
          <p>Discount.</p>
          <p>Net sales.</p>
          <p>Cost.</p>
          <p>Profit.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Step 4 — Implement SCD Type 2</h4>
          <p>Simulate a customer moving from Pune to Mumbai.</p>
          <p>Create a new historical dimension row without deleting the previous record.</p>
          <p>Ensure historical sales continue referencing the correct customer dimension version.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Step 5 — Perform analytical queries</h4>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Calculate revenue by month:</h4>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`SELECT d.year, d.month, SUM(f.net_sales) AS monthly_revenue FROM fact_sales f JOIN dim_date d ON f.date_key = d.date_key GROUP BY d.year, d.month ORDER BY d.year, d.month;`}</code>
            </pre>
          </div>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Find the best-selling products:</h4>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`SELECT p.product_name, SUM(f.quantity) AS units_sold, SUM(f.net_sales) AS revenue FROM fact_sales f JOIN dim_product p ON f.product_key = p.product_key GROUP BY p.product_name ORDER BY units_sold DESC LIMIT 10;`}</code>
            </pre>
          </div>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Step 6 — Validate the model</h4>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Test:</h4>
          <p>Primary key uniqueness.</p>
          <p>Foreign key validity.</p>
          <p>NULL values in required columns.</p>
          <p>Duplicate transaction records.</p>
          <p>Correct fact table grain.</p>
          <p>Historical dimension accuracy.</p>
          <p>Revenue calculations.</p>
          <p>Schema compatibility.</p>
          <p>Final outcome: A working e-commerce data warehouse model that supports reliable business reporting and historical analysis.</p>
        </div>
      </section>
      {"/* SECTION 22: Module 4 — Learning Outcomes and Assessment */"}
      <section id="section-22" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 22
          </span>
          <span className="text-xs font-mono text-stone-500">Outcomes & Self-Check</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          22. Module 4 — Learning Outcomes and Assessment
        </h2>
        <div className="space-y-4 text-stone-700 leading-relaxed text-sm sm:text-base">
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">After completing this module, a learner should be able to:</h4>
          <p>Explain conceptual, logical, and physical data models.</p>
          <p>Create ER diagrams and understand relationship cardinality.</p>
          <p>Design relational schemas using primary keys, foreign keys, composite keys, and surrogate keys.</p>
          <p>Apply 1NF, 2NF, 3NF, and BCNF.</p>
          <p>Understand when normalization and denormalization are appropriate.</p>
          <p>Implement database constraints and referential integrity.</p>
          <p>Design fact tables and dimension tables.</p>
          <p>Build star and snowflake schemas.</p>
          <p>Implement slowly changing dimensions, particularly SCD Type 1 and Type 2.</p>
          <p>Understand snapshot-based, effective-dated, and event-based historical modeling.</p>
          <p>Manage schema evolution in databases and streaming pipelines.</p>
          <p>Make informed data modeling decisions based on analytical and operational requirements.</p>
        </div>
      </section>
      {"/* SECTION 23: Recommended assignments */"}
      <section id="section-23" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 23
          </span>
          <span className="text-xs font-mono text-stone-500">Practical Assignments</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          23. Recommended assignments
        </h2>
        <div className="space-y-4 text-stone-700 leading-relaxed text-sm sm:text-base">
          <p>Assignment</p>
          <p>Practical task</p>
          <ol className="list-decimal list-inside space-y-1.5 text-stone-700 text-sm sm:text-base my-3 pl-2">
            <li value="1"><strong className="text-stone-900">ER Modeling</strong></li>
          </ol>
          <p>Create an ERD for a university management system.</p>
          <ol className="list-decimal list-inside space-y-1.5 text-stone-700 text-sm sm:text-base my-3 pl-2">
            <li value="2"><strong className="text-stone-900">Normalization</strong></li>
          </ol>
          <p>Convert an unnormalized student enrollment table into 3NF.</p>
          <ol className="list-decimal list-inside space-y-1.5 text-stone-700 text-sm sm:text-base my-3 pl-2">
            <li value="3"><strong className="text-stone-900">Relational Design</strong></li>
          </ol>
          <p>Design a banking database with accounts and transactions.</p>
          <ol className="list-decimal list-inside space-y-1.5 text-stone-700 text-sm sm:text-base my-3 pl-2">
            <li value="4"><strong className="text-stone-900">Dimensional Modeling</strong></li>
          </ol>
          <p>Build a retail sales star schema.</p>
          <ol className="list-decimal list-inside space-y-1.5 text-stone-700 text-sm sm:text-base my-3 pl-2">
            <li value="5"><strong className="text-stone-900">Snowflake Schema</strong></li>
          </ol>
          <p>Convert selected star-schema dimensions into normalized hierarchies.</p>
          <ol className="list-decimal list-inside space-y-1.5 text-stone-700 text-sm sm:text-base my-3 pl-2">
            <li value="6"><strong className="text-stone-900">SCD Implementation</strong></li>
          </ol>
          <p>Implement customer history using SCD Type 2.</p>
          <ol className="list-decimal list-inside space-y-1.5 text-stone-700 text-sm sm:text-base my-3 pl-2">
            <li value="7"><strong className="text-stone-900">Event Modeling</strong></li>
          </ol>
          <p>Design an order lifecycle event structure.</p>
          <ol className="list-decimal list-inside space-y-1.5 text-stone-700 text-sm sm:text-base my-3 pl-2">
            <li value="8"><strong className="text-stone-900">Capstone</strong></li>
          </ol>
          <p>Build an end-to-end analytical data model for an e-commerce business.</p>
        </div>
      </section>
      {"/* SECTION 24: Recommended learning resources */"}
      <section id="section-24" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 24
          </span>
          <span className="text-xs font-mono text-stone-500">Curated Literature & Roadmap</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          24. Recommended learning resources
        </h2>
        <div className="space-y-4 text-stone-700 leading-relaxed text-sm sm:text-base">
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">For university-level study and practical implementation:</h4>
          <p>Database System Concepts — Abraham Silberschatz, Henry F. Korth, and S. Sudarshan.</p>
          <p>Fundamentals of Database Systems.</p>
          <p>The Data Warehouse Toolkit.</p>
          <p>Designing Data-Intensive Applications.</p>
          <p>PostgreSQL Documentation — Practical SQL and relational database implementation.</p>
          <p>dbt Documentation — Analytical data transformations and modeling.</p>
          <p>The most important concepts to master</p>
          <p>The complete learning progression</p>
          <p>Data modeling foundations</p>
          <p>Conceptual, logical, physical models, entities, attributes, relationships, and ERDs.</p>
          <p>Relational database design</p>
          <p>Keys, normalization, functional dependencies, constraints, and referential integrity.</p>
          <p>Analytical data modeling</p>
          <p>Fact tables, dimension tables, grain, star schemas, and snowflake schemas.</p>
          <p>Historical data management</p>
          <p>SCD, snapshots, effective dating, and event-based modeling.</p>
          <p>Production data architecture</p>
          <p>Schema evolution, compatibility, data quality, and design trade-offs.</p>
          <div className="rounded-xl border border-orange-200 bg-orange-50/70 p-4 text-xs sm:text-sm text-orange-950 leading-relaxed my-4">
            My recommendation for PrepSpaces: Keep this module as a core part of the Data Engineering course. It bridges SQL and relational databases with data warehousing and modern analytical engineering. In particular, give practical importance to dimensional modeling, fact-table grain, SCD Type 2, and schema evolution because these concepts are central to building production-grade data platforms.
          </div>
          <p>and dont delete any information</p>
        </div>
      </section>
    </div>
  );
}