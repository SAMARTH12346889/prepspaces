import React from "react";
import { Terminal, Code, Layers, CheckCircle2, ArrowRight, ExternalLink, Workflow } from "lucide-react";

export default function DataEngineeringPythonSections() {
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
          Module 2: Complete Python for Data Engineering Specification
        </h2>
        <div className="space-y-3 text-stone-700 leading-relaxed text-sm sm:text-base">
          <div className="my-2 p-2.5 rounded-lg bg-orange-50/60 border border-orange-200/80 flex items-center justify-between text-xs">
            <span className="font-semibold text-stone-800">&#128279; Five years of internships with Theta | Industry Alliance Programme | Te Herenga Waka—Victoria University of Wellington</span>
            <a href="https://images.openai.com/static-rsc-4/oaGjrrYe-BXB72ysEctumrRIVbltj-6LaOmLtr6Gzm9hCEyD0vXOwAOv7dBFJRsq7Pewh6mBlp9V2hJu_GxMrh4TwpQwAnEAPhY6f4BlWFZV7Rs0EZY5Mj--5CVNmv8adbjrO9pm9qQnAJcDiXnk1lrlP4zcGFnhdPRt9lRrBu0?purpose=inline" target="_blank" rel="noopener noreferrer" className="text-orange-600 font-bold hover:underline">Reference Link &rarr;</a>
          </div>
          <div className="my-2 p-2.5 rounded-lg bg-orange-50/60 border border-orange-200/80 flex items-center justify-between text-xs">
            <span className="font-semibold text-stone-800">&#128279; Prompts para Análisis de Datos: Python, SQL y Excel con IA | Aprender21</span>
            <a href="https://images.openai.com/static-rsc-4/W3F81RsYUByfd4QlLtN1mV_8qCqMRPGHKt3YIM-iGsAwpk3MrfFH6srYM9aaD1vSk1uTbj1vVkKAbH3oGusmXO90It0LjRdxVszrFGdY8CMDgYDbnH7PJhnsbKga3IjxNaz60cDddY6GcWLFIA3EUfQ9ZuvxyxtnMrGnI1oFF5c?purpose=inline" target="_blank" rel="noopener noreferrer" className="text-orange-600 font-bold hover:underline">Reference Link &rarr;</a>
          </div>
          <div className="my-2 p-2.5 rounded-lg bg-orange-50/60 border border-orange-200/80 flex items-center justify-between text-xs">
            <span className="font-semibold text-stone-800">&#128279; Extract Transform Load Python: Production Pipelines Guide</span>
            <a href="https://images.openai.com/static-rsc-4/LeGQEt-WcqCSUyf4rsJU9dmbwYMzfV7pKjA9OTZi43h_hUSsL7iGYUlLEfdFoblVm_APNYicEuYdlq9Om-2yaaA-Gsfgbr5WUTKR0TyQN63aZyn1dAXTmgYxoVwwPsiKJYz5J8vfNjjom78X0jJZuUcSZRreb0aSpjS9TgXbG60?purpose=inline" target="_blank" rel="noopener noreferrer" className="text-orange-600 font-bold hover:underline">Reference Link &rarr;</a>
          </div>
          <h3 className="text-lg font-bold text-stone-900 mt-4 mb-2">Module overview</h3>
          <p>Python is one of the most important programming languages in modern Data Engineering. It is used to extract data from APIs, connect to databases, process files, clean datasets, automate workflows, build data pipelines, and integrate different technologies.</p>
          <p>In the previous module, we studied the architecture of data engineering systems. We learned how data moves from sources through ingestion and processing systems into storage platforms and analytical applications.</p>
          <p>Now we will learn how to implement those systems using Python.</p>
          <p>Consider an e-commerce company receiving thousands of orders every hour. These orders arrive from different sources in CSV, JSON, XML, and database formats.</p>
          <p>The company needs a Python-based system that can:</p>
          <p>Read incoming files.</p>
          <p>Extract information from external APIs.</p>
          <p>Connect to databases.</p>
          <p>Validate incoming records.</p>
          <p>Remove duplicate data.</p>
          <p>Transform raw information.</p>
          <p>Process large datasets without exhausting memory.</p>
          <p>Store processed information.</p>
          <p>Log errors and monitor execution.</p>
          <p>Automatically test the pipeline.</p>
          <p>Python provides the programming capabilities required to build this system.</p>
          <p>This module starts with Python fundamentals and progresses toward production-quality data engineering applications.</p>
          <h3 className="text-lg font-bold text-stone-900 mt-4 mb-2">Learning objectives</h3>
          <p>By completing this module, you should be able to:</p>
          <p>Write Python programs using variables, data types, operators, conditions, and loops.</p>
          <p>Create reusable functions and organize code into modules.</p>
          <p>Work confidently with lists, dictionaries, tuples, and sets.</p>
          <p>Use comprehensions, iterators, and generators efficiently.</p>
          <p>Apply object-oriented programming to data applications.</p>
          <p>Handle exceptions and build custom error handling.</p>
          <p>Read, write, and process CSV, JSON, and XML files.</p>
          <p>Process large datasets using memory-efficient techniques.</p>
          <p>Use regular expressions for extracting and validating text.</p>
          <p>Manage Python environments and external packages.</p>
          <p>Implement logging and configuration management.</p>
          <p>Extract information from external APIs.</p>
          <p>Connect Python applications to databases.</p>
          <p>Manipulate datasets using Pandas and Polars.</p>
          <p>Write automated tests using Pytest.</p>
          <p>Develop maintainable, reliable, production-quality Python pipelines.</p>
        </div>
      </section>
      {"/* SECTION 1: Python Fundamentals and Syntax */"}
      <section id="section-1" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 1
          </span>
          <span className="text-xs font-mono text-stone-500">Language Fundamentals</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          1. Python Fundamentals and Syntax
        </h2>
        <div className="space-y-4 text-stone-700 leading-relaxed text-sm sm:text-base">
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">1.1 What is Python?</h3>
          <p>Python is a high-level, general-purpose programming language known for its readable syntax, extensive libraries, and versatility.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">It is widely used in:</h4>
          <p>Data Engineering.</p>
          <p>Data Science.</p>
          <p>Machine Learning.</p>
          <p>Artificial Intelligence.</p>
          <p>Backend development.</p>
          <p>Automation.</p>
          <p>Scientific computing.</p>
          <p>API development.</p>
          <p>Python is particularly useful in Data Engineering because it can connect different systems and provide a common programming interface for processing information.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">For example, one Python application can:</h4>
          <p>Retrieve information from a REST API.</p>
          <p>Read historical data from a CSV file.</p>
          <p>Query a PostgreSQL database.</p>
          <p>Process millions of records using appropriate processing tools.</p>
          <p>Save the results in Parquet format.</p>
          <p>Upload the output to cloud object storage.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Why do Data Engineers use Python?</h4>
          <p>Readable syntax: Python code is generally easier to understand and maintain than many lower-level alternatives.</p>
          <p>Large ecosystem: Libraries such as Pandas, Polars, PyArrow, Requests, SQLAlchemy, and Pytest provide ready-made functionality.</p>
          <p>Integration: Python works with databases, APIs, cloud services, and distributed processing platforms.</p>
          <p>Automation: Engineers can automate repetitive data extraction, transformation, validation, and reporting operations.</p>
          <p>Scalability through ecosystem: Python can work with large-scale processing engines such as Apache Spark, although Python itself does not automatically make a workload distributed.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">1.2 How does Python execute code?</h3>
          <p>Python source code is executed by a Python implementation.</p>
          <p>A commonly used implementation is CPython.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">A simplified view of the process is:</h4>
          <div className="my-3 p-3 rounded-xl bg-orange-50/60 border border-orange-200/80 flex items-center justify-between gap-3 text-xs">
            <div className="font-semibold text-stone-800 flex items-center gap-2"><span>&#128279;</span> <span>Inside the Python Virtual Machine</span></div>
            <a href="https://images.openai.com/static-rsc-4/kwqpefPIMOSgSblmRritxtKgqXhghpn6C_ZqJ-F79xiMmcRBcs6Cdw5BTTPSMCf4_v_nY-j3mmy6w8mieOxNlUhtwe0ELivzuxZcFhxjf26c77zPsylR6Y8b5QkKb9342StVhEMn7MrxS2mlAlKdo4QjEqntFDi9MJOi9KmSIbU?purpose=inline" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 font-bold inline-flex items-center gap-1 cursor-pointer">View Resource &rarr;</a>
          </div>
          <div className="my-3 p-3 rounded-xl bg-orange-50/60 border border-orange-200/80 flex items-center justify-between gap-3 text-xs">
            <div className="font-semibold text-stone-800 flex items-center gap-2"><span>&#128279;</span> <span>linkedin.com</span></div>
            <a href="https://www.linkedin.com/pulse/inside-python-virtual-machine-kuldeep-pal-wkx4c?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 font-bold inline-flex items-center gap-1 cursor-pointer">View Resource &rarr;</a>
          </div>
          <div className="my-4 p-4 rounded-xl bg-stone-50 border border-stone-200">
            <div className="text-xs font-bold uppercase tracking-wider text-stone-500 mb-2 font-mono">Architecture Flow</div>
            <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
              <span className="px-3 py-1.5 rounded-lg bg-white border border-stone-300 font-semibold text-stone-800 shadow-2xs">Python Source Code</span>
              <span className="text-orange-500 font-bold">&rarr;</span>
              <span className="px-3 py-1.5 rounded-lg bg-white border border-stone-300 font-semibold text-stone-800 shadow-2xs">Lexing and Parsing</span>
              <span className="text-orange-500 font-bold">&rarr;</span>
              <span className="px-3 py-1.5 rounded-lg bg-white border border-stone-300 font-semibold text-stone-800 shadow-2xs">Python Code Objects</span>
              <span className="text-orange-500 font-bold">&rarr;</span>
              <span className="px-3 py-1.5 rounded-lg bg-white border border-stone-300 font-semibold text-stone-800 shadow-2xs">Python Virtual Machine</span>
              <span className="text-orange-500 font-bold">&rarr;</span>
              <span className="px-3 py-1.5 rounded-lg bg-white border border-stone-300 font-semibold text-stone-800 shadow-2xs">Program Execution</span>
              <span className="text-orange-500 font-bold">&rarr;</span>
              <span className="px-3 py-1.5 rounded-lg bg-white border border-stone-300 font-semibold text-stone-800 shadow-2xs">Output</span>
            </div>
          </div>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Consider:</h4>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`print("Hello, Data Engineering!")`}</code>
            </pre>
          </div>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Output:</h4>
          <p>Hello, Data Engineering!</p>
          <p>The print() function displays information in the console.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Important Python characteristics</h4>
          <p>Interpreted execution model: Python implementations execute program instructions through a runtime. CPython commonly compiles source code into bytecode before execution.</p>
          <p>Dynamic typing: You generally do not need to declare a variable's type explicitly.</p>
          <p>Strong typing: Python does not automatically treat unrelated data types as interchangeable.</p>
          <p>Object-oriented: Python supports classes, objects, inheritance, and encapsulation.</p>
          <p>Multi-paradigm: Python supports procedural, object-oriented, and functional programming styles.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">1.3 Your first Python program</h3>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Create a file called:</h4>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`first_program.py
print("Welcome to Data Engineering") name = "Rahul" course = "Python Programming" print("Student:", name) print("Course:", course)`}</code>
            </pre>
          </div>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Run it:</h4>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`python first_program.py`}</code>
            </pre>
          </div>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Output:</h4>
          <p>Welcome to Data Engineering Student: Rahul Course: Python Programming</p>
          <p>Understanding Python syntax</p>
          <p>Python uses indentation to define code blocks.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Example:</h4>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`age = 22 if age >= 18: print("Eligible") else: print("Not eligible")`}</code>
            </pre>
          </div>
          <p>The indented statements belong to their respective conditions.</p>
          <p>Unlike languages that use curly braces for every block, Python uses indentation as part of its syntax.</p>
          <p>A consistent indentation style, commonly four spaces, is recommended.</p>
          <p>Comments</p>
          <p>Comments explain code and are ignored during normal execution.</p>
          <p># Calculate the total order amount price = 500 quantity = 3 total = price * quantity print(total)</p>
          <p>For longer functions and modules, documentation strings (docstrings) describe their purpose.</p>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`def calculate_total(price, quantity): """Calculate the total value of an order.""" return price * quantity`}</code>
            </pre>
          </div>
        </div>
      </section>
      {"/* SECTION 2: Variables, Data Types, and Operators */"}
      <section id="section-2" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 2
          </span>
          <span className="text-xs font-mono text-stone-500">Data Types & Memory</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          2. Variables, Data Types, and Operators
        </h2>
        <div className="space-y-4 text-stone-700 leading-relaxed text-sm sm:text-base">
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">2.1 Variables</h3>
          <p>A variable is a name that refers to an object in Python.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Example:</h4>
          <p>customer_name = "Rahul" customer_age = 22 order_amount = 2500.50 payment_successful = True</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Here:</h4>
          <p>customer_name refers to a string.</p>
          <p>customer_age refers to an integer.</p>
          <p>order_amount refers to a floating-point number.</p>
          <p>payment_successful refers to a Boolean value.</p>
          <p>Python determines the object's type at runtime.</p>
          <p>price = 1500 print(type(price))</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Output:</h4>
          <p>&lt;class 'int'&gt;</p>
          <p>Rules for naming variables</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Valid examples:</h4>
          <p>customer_name = "Rahul" order_id = 101 total_amount = 2500</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Invalid examples:</h4>
          <p># 2customer = "Rahul" # Cannot start with a number # customer-name = "Rahul" # Hyphen is not valid # class = "Python" # Reserved keyword</p>
          <p>Use descriptive variable names rather than abbreviations that make code difficult to understand.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">For example:</h4>
          <p>total_revenue = 50000</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">is preferable to:</h4>
          <p>tr = 50000</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">2.2 Python data types</h3>
          <p>Python provides several built-in data types.</p>
          <p>A. Numeric types</p>
          <p>Integer (int)</p>
          <p>Stores whole numbers.</p>
          <p>customers = 1500 employees = 25</p>
          <p>Floating-point (float)</p>
          <p>Stores decimal numbers.</p>
          <p>product_price = 1999.99 temperature = 36.5</p>
          <p>Complex (complex)</p>
          <p>Represents complex numbers.</p>
          <p>number = 3 + 4j</p>
          <p>Complex numbers are less commonly used in ordinary data pipelines.</p>
          <p>B. String (str)</p>
          <p>Stores text.</p>
          <p>customer_name = "Rahul" city = "Pune"</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">String operations:</h4>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`name = "data engineering" print(name.upper()) print(name.title()) print(name.replace("data", "cloud")) print(len(name))`}</code>
            </pre>
          </div>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Output:</h4>
          <p>DATA ENGINEERING Data Engineering cloud engineering 16</p>
          <p>String formatting</p>
          <p>Use f-strings to create readable output.</p>
          <p>customer = "Rahul" amount = 2500 message = f"&#123;customer&#125; purchased products worth ₹&#123;amount&#125;" print(message)</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Output:</h4>
          <p>Rahul purchased products worth ₹2500</p>
          <p>This is useful for application logs, reports, and messages.</p>
          <p>C. Boolean (bool)</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Represents either:</h4>
          <p>True False</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Example:</h4>
          <p>payment_status = True if payment_status: print("Payment successful")</p>
          <p>D. None type</p>
          <p>None represents the absence of a value.</p>
          <p>middle_name = None</p>
          <p>It is frequently used when data is missing or an optional value has not been assigned.</p>
          <p>Remember that None, zero, and an empty string are different values.</p>
          <p>E. Collection types</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Python also provides:</h4>
          <p>Lists.</p>
          <p>Tuples.</p>
          <p>Sets.</p>
          <p>Dictionaries.</p>
          <p>These are explained in detail in Section 5.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">2.3 Type conversion</h3>
          <p>Sometimes data arrives in a different type than required.</p>
          <p>For example, a CSV file may contain an order amount as text.</p>
          <p>amount = "2500" print(type(amount))</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Output:</h4>
          <p>&lt;class 'str'&gt;</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Convert it:</h4>
          <p>amount = int(amount) print(type(amount))</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Output:</h4>
          <p>&lt;class 'int'&gt;</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Common conversion functions:</h4>
          <p>Function</p>
          <p>Conversion</p>
          <p>int()</p>
          <p>Converts to integer where possible</p>
          <p>float()</p>
          <p>Converts to floating-point</p>
          <p>str()</p>
          <p>Converts to string representation</p>
          <p>bool()</p>
          <p>Converts to Boolean</p>
          <p>list()</p>
          <p>Creates a list</p>
          <p>tuple()</p>
          <p>Creates a tuple</p>
          <p>set()</p>
          <p>Creates a set</p>
          <p>dict()</p>
          <p>Creates a dictionary when given suitable input</p>
          <div className="rounded-xl border border-orange-200 bg-orange-50/70 p-4 text-xs sm:text-sm text-orange-950 leading-relaxed my-4">
            Important: type conversion can fail.
          </div>
          <p>amount = int("twenty")</p>
          <p>This raises a ValueError.</p>
          <p>Production data pipelines should validate values before conversion and handle conversion failures appropriately.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">2.4 Operators</h3>
          <p>Operators perform calculations, comparisons, and logical operations.</p>
          <p>Arithmetic operators</p>
          <p>Operator</p>
          <p>Meaning</p>
          <p>Example</p>
          <p>+</p>
          <p>Addition</p>
          <p>10 + 5</p>
          <p>-</p>
          <p>Subtraction</p>
          <p>10 - 5</p>
          <p>*</p>
          <p>Multiplication</p>
          <p>10 * 5</p>
          <p>/</p>
          <p>Division</p>
          <p>10 / 5</p>
          <p>//</p>
          <p>Floor division</p>
          <p>11 // 5</p>
          <p>%</p>
          <p>Modulus</p>
          <p>11 % 5</p>
          <p>**</p>
          <p>Exponent</p>
          <p>2 ** 3</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Example:</h4>
          <p>price = 500 quantity = 3 total = price * quantity print(total)</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Output:</h4>
          <p>1500</p>
          <p>Comparison operators</p>
          <p>Operator</p>
          <p>Meaning</p>
          <p>==</p>
          <p>Equal</p>
          <p>!=</p>
          <p>Not equal</p>
          <p>&gt;</p>
          <p>Greater than</p>
          <p>&lt;</p>
          <p>Less than</p>
          <p>&gt;=</p>
          <p>Greater than or equal</p>
          <p>&lt;=</p>
          <p>Less than or equal</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Example:</h4>
          <p>amount = 5000 print(amount &gt; 1000)</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Output:</h4>
          <p>True</p>
          <p>Logical operators</p>
          <p>and, or, and not combine Boolean expressions.</p>
          <p>amount = 5000 payment_status = "SUCCESS" if amount &gt; 1000 and payment_status == "SUCCESS": print("Include in premium sales report")</p>
          <p>Membership operators</p>
          <p>in and not in check whether an item exists in a collection.</p>
          <p>valid_statuses = ["SUCCESS", "FAILED", "PENDING"] status = "SUCCESS" if status in valid_statuses: print("Valid payment status")</p>
          <p>Identity operators</p>
          <p>is and is not test whether two references point to the same object.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">For checking missing values, prefer:</h4>
          <p>value = None if value is None: print("Value is missing")</p>
          <p>Do not confuse identity (is) with equality (==).</p>
        </div>
      </section>
      {"/* SECTION 3: Conditional Statements and Loops */"}
      <section id="section-3" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 3
          </span>
          <span className="text-xs font-mono text-stone-500">Control Flow</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          3. Conditional Statements and Loops
        </h2>
        <div className="space-y-4 text-stone-700 leading-relaxed text-sm sm:text-base">
          <p>Data pipelines often need to make decisions based on data values.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">For example:</h4>
          <p>Process only successful payments.</p>
          <p>Reject negative transaction amounts.</p>
          <p>Skip incomplete records.</p>
          <p>Retry certain operations.</p>
          <p>Execute different processing logic based on file type.</p>
          <p>Python provides conditional statements and loops to implement these operations.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">3.1 The if statement</h3>
          <p>The if statement runs a block when a condition is true.</p>
          <p>amount = 5000 if amount &gt; 1000: print("High-value order")</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Output:</h4>
          <p>High-value order</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">3.2 if-else</h3>
          <p>payment_status = "SUCCESS" if payment_status == "SUCCESS": print("Process order") else: print("Do not process order")</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">3.3 if-elif-else</h3>
          <p>Use multiple conditions when there are several possible outcomes.</p>
          <p>amount = 7500 if amount &gt;= 10000: category = "Premium" elif amount &gt;= 5000: category = "High" elif amount &gt;= 1000: category = "Medium" else: category = "Low" print(category)</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Output:</h4>
          <p>High</p>
          <p>Real-world data engineering example</p>
          <p>Imagine processing incoming payment records.</p>
          <p>payment = &#123; "order_id": 101, "amount": 5000, "status": "SUCCESS" &#125; if payment["amount"] &lt;= 0: print("Invalid amount") elif payment["status"] != "SUCCESS": print("Payment is not completed") else: print("Payment is ready for processing")</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">3.4 for loops</h3>
          <p>A for loop iterates over elements in a sequence or other iterable.</p>
          <p>orders = [1000, 2000, 3000, 4000] for amount in orders: print(amount)</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Output:</h4>
          <p>1000 2000 3000 4000</p>
          <p>Calculating total revenue</p>
          <p>orders = [1000, 2000, 3000, 4000] total_revenue = 0 for amount in orders: total_revenue += amount print("Total:", total_revenue)</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Output:</h4>
          <p>Total: 10000</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">3.5 while loops</h3>
          <p>A while loop continues running as long as its condition is true.</p>
          <p>attempt = 1 max_attempts = 3 while attempt &lt;= max_attempts: print(f"Attempt: &#123;attempt&#125;") attempt += 1</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Output:</h4>
          <p>Attempt: 1 Attempt: 2 Attempt: 3</p>
          <p>This concept is useful for retry logic, polling, and controlled processing loops.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">3.6 break and continue</h3>
          <p>break exits a loop.</p>
          <p>for number in range(1, 10): if number == 5: break print(number)</p>
          <p>continue skips the current iteration.</p>
          <p>orders = [100, -50, 500, -20, 1000] for amount in orders: if amount &lt; 0: continue print(amount)</p>
          <p>This example skips negative values.</p>
          <p>However, in a production pipeline, invalid data should generally be counted and logged rather than silently discarded.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">3.7 range()</h3>
          <p>range() generates a sequence of integers.</p>
          <p>for number in range(5): print(number)</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Output:</h4>
          <p>0 1 2 3 4</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Another example:</h4>
          <p>for number in range(1, 11, 2): print(number)</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Output:</h4>
          <p>1 3 5 7 9</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">3.8 enumerate() and zip()</h3>
          <p>These built-in functions are especially useful for processing datasets.</p>
          <p>enumerate()</p>
          <p>Returns an index along with each item.</p>
          <p>customers = ["Rahul", "Priya", "Amit"] for index, customer in enumerate(customers, start=1): print(index, customer)</p>
          <p>zip()</p>
          <p>Combines corresponding elements from multiple iterables.</p>
          <p>names = ["Rahul", "Priya", "Amit"] cities = ["Pune", "Mumbai", "Delhi"] for name, city in zip(names, cities): print(name, city)</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Output:</h4>
          <p>Rahul Pune Priya Mumbai Amit Delhi</p>
          <p>zip() normally stops at the shortest input iterable. Keep this in mind when combining records from different datasets.</p>
        </div>
      </section>
      {"/* SECTION 4: Functions and Modular Programming */"}
      <section id="section-4" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 4
          </span>
          <span className="text-xs font-mono text-stone-500">Modular Architecture</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          4. Functions and Modular Programming
        </h2>
        <div className="space-y-4 text-stone-700 leading-relaxed text-sm sm:text-base">
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">4.1 What is a function?</h3>
          <p>A function is a reusable block of code that performs a particular task.</p>
          <p>Instead of rewriting the same logic repeatedly, define the logic once and call it whenever required.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Example without a function:</h4>
          <p>price1 = 500 quantity1 = 2 total1 = price1 * quantity1 price2 = 1000 quantity2 = 3 total2 = price2 * quantity2</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">A better approach:</h4>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`def calculate_total(price, quantity): return price * quantity total1 = calculate_total(500, 2) total2 = calculate_total(1000, 3) print(total1) print(total2)`}</code>
            </pre>
          </div>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Output:</h4>
          <p>1000 3000</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">4.2 Function structure</h3>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`def function_name(parameters): # Function body return result`}</code>
            </pre>
          </div>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">A function can contain:</h4>
          <p>A name.</p>
          <p>Parameters.</p>
          <p>Input validation.</p>
          <p>Processing logic.</p>
          <p>A return statement.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">4.3 Parameters and arguments</h3>
          <p>Parameters are the names defined in the function.</p>
          <p>Arguments are the actual values supplied during a function call.</p>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`def calculate_revenue(price, quantity): return price * quantity revenue = calculate_revenue(500, 4)`}</code>
            </pre>
          </div>
          <p>Here price and quantity are parameters. 500 and 4 are arguments.</p>
          <p>Positional arguments</p>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`def introduce(name, age): print(name, age) introduce("Rahul", 22)`}</code>
            </pre>
          </div>
          <p>Keyword arguments</p>
          <p>introduce(age=22, name="Rahul")</p>
          <p>Default arguments</p>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`def calculate_tax(amount, tax_rate=0.18): return amount * tax_rate print(calculate_tax(1000))`}</code>
            </pre>
          </div>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Output:</h4>
          <p>180.0</p>
          <p>Variable-length arguments</p>
          <p>*args accepts multiple positional arguments.</p>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`def calculate_total(*amounts): return sum(amounts) print(calculate_total(100, 200, 300))`}</code>
            </pre>
          </div>
          <p>**kwargs accepts multiple keyword arguments.</p>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`def display_customer(**details): for key, value in details.items(): print(key, value) display_customer( name="Rahul", city="Pune", age=22 )`}</code>
            </pre>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">4.4 Return values</h3>
          <p>A function can return data to its caller.</p>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`def validate_amount(amount): if amount <= 0: return False return True result = validate_amount(500) print(result)`}</code>
            </pre>
          </div>
          <p>A function without an explicit return statement returns None.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">4.5 Type hints</h3>
          <p>Type hints describe the expected types of function inputs and outputs.</p>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`def calculate_total( price: float, quantity: int ) -> float: return price * quantity`}</code>
            </pre>
          </div>
          <p>Type hints improve readability, documentation, and compatibility with static analysis tools.</p>
          <p>Python does not normally enforce type hints automatically at runtime.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">4.6 Modular programming</h3>
          <p>Modular programming means dividing a large application into smaller files and components that have clear responsibilities.</p>
          <p>Instead of writing every pipeline operation inside one enormous Python file, organize the application into modules.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Example project structure:</h4>
          <p>data_pipeline/ │ ├── main.py │ ├── extraction/ │ ├── __init__.py │ ├── api.py │ └── files.py │ ├── transformation/ │ ├── __init__.py │ └── cleaning.py │ ├── validation/ │ ├── __init__.py │ └── checks.py │ └── storage/ ├── __init__.py └── database.py</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">A cleaning module might contain:</h4>
          <p># transformation/cleaning.py def remove_empty_records(records): return [ record for record in records if record is not None ]</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">The main application imports and uses it:</h4>
          <p># main.py from transformation.cleaning import remove_empty_records records = [100, None, 200, None, 300] cleaned = remove_empty_records(records) print(cleaned)</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Output:</h4>
          <p>[100, 200, 300]</p>
          <p>Why modular programming matters in Data Engineering</p>
          <p>Production pipelines involve extraction, transformations, storage, logging, and validation.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Separating these responsibilities makes code:</h4>
          <p>Easier to understand.</p>
          <p>Easier to test.</p>
          <p>Easier to reuse.</p>
          <p>Easier to debug.</p>
          <p>Easier to extend.</p>
          <p>A good module should have a clear responsibility instead of becoming a collection of unrelated functions.</p>
        </div>
      </section>
      {"/* SECTION 5: Lists, Dictionaries, Sets, and Tuples */"}
      <section id="section-5" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 5
          </span>
          <span className="text-xs font-mono text-stone-500">Collections & Hashing</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          5. Lists, Dictionaries, Sets, and Tuples
        </h2>
        <div className="space-y-4 text-stone-700 leading-relaxed text-sm sm:text-base">
          <p>Python collection types are essential for working with records and datasets.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">5.1 Lists</h3>
          <p>A list is an ordered, mutable collection.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Example:</h4>
          <p>orders = [1000, 2000, 3000] print(orders[0])</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Output:</h4>
          <p>1000</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">List operations:</h4>
          <p>orders.append(4000) orders.insert(0, 500) orders.remove(2000) print(orders)</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Important methods:</h4>
          <p>Method</p>
          <p>Purpose</p>
          <p>append()</p>
          <p>Add an item at the end</p>
          <p>extend()</p>
          <p>Add multiple items</p>
          <p>insert()</p>
          <p>Insert at a position</p>
          <p>remove()</p>
          <p>Remove a matching value</p>
          <p>pop()</p>
          <p>Remove and return an item</p>
          <p>sort()</p>
          <p>Sort the list</p>
          <p>reverse()</p>
          <p>Reverse the list</p>
          <p>copy()</p>
          <p>Create a shallow copy</p>
          <p>clear()</p>
          <p>Remove all items</p>
          <p>List slicing</p>
          <p>orders = [100, 200, 300, 400, 500] print(orders[1:4])</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Output:</h4>
          <p>[200, 300, 400]</p>
          <p>Slicing is useful for working with subsets of records.</p>
          <p>List of dictionaries</p>
          <p>This is a common way to represent records in Python.</p>
          <p>orders = [ &#123; "order_id": 101, "customer": "Rahul", "amount": 2000 &#125;, &#123; "order_id": 102, "customer": "Priya", "amount": 3000 &#125; ] for order in orders: print(order["order_id"], order["amount"])</p>
          <p>Each dictionary represents one order.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">5.2 Tuples</h3>
          <p>A tuple is an ordered collection that cannot be modified after creation.</p>
          <p>coordinates = (18.5204, 73.8567) print(coordinates[0])</p>
          <p>Tuples are useful for storing fixed collections of values.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Example:</h4>
          <p>database_config = ( "localhost", 5432, "sales_db" )</p>
          <p>You cannot assign a different item to an existing tuple position.</p>
          <p># coordinates[0] = 20.0 # Raises TypeError</p>
          <p>An important distinction: a tuple containing a mutable object can still reference an object whose contents change. Tuples are immutable as containers, not necessarily recursively immutable.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">5.3 Sets</h3>
          <p>A set stores unique elements and supports mathematical set operations.</p>
          <p>customer_ids = &#123;101, 102, 103, 101&#125; print(customer_ids)</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Output:</h4>
          <p>&#123;101, 102, 103&#125;</p>
          <p>The duplicate 101 is represented only once.</p>
          <p>Sets are particularly useful for duplicate detection and membership checks.</p>
          <p>Set operations</p>
          <p>source_a = &#123;101, 102, 103&#125; source_b = &#123;103, 104, 105&#125; print(source_a.union(source_b)) print(source_a.intersection(source_b)) print(source_a.difference(source_b))</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Results:</h4>
          <p>&#123;101, 102, 103, 104, 105&#125; &#123;103&#125; &#123;101, 102&#125;</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Data engineering example:</h4>
          <p>Suppose two systems have customer IDs.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">A set can help identify:</h4>
          <p>IDs existing in both systems.</p>
          <p>IDs missing from one source.</p>
          <p>Distinct customer identifiers.</p>
          <p>Sets do not provide positional indexing like lists and do not guarantee a meaningful business ordering.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">5.4 Dictionaries</h3>
          <p>A dictionary stores key-value pairs.</p>
          <p>customer = &#123; "customer_id": 101, "name": "Rahul", "city": "Pune", "age": 22 &#125;</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Access values:</h4>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`print(customer["name"])`}</code>
            </pre>
          </div>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Output:</h4>
          <p>Rahul</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Modify values:</h4>
          <p>customer["city"] = "Mumbai"</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Add a new key:</h4>
          <p>customer["email"] = "rahul@example.com"</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Important dictionary methods</h4>
          <p>customer.keys() customer.values() customer.items() customer.get("name") customer.update(&#123;"age": 23&#125;) customer.pop("email")</p>
          <p>Why dictionaries are important in Data Engineering</p>
          <p>JSON records naturally map to Python dictionaries.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">For example:</h4>
          <p>&#123; "order_id": 101, "customer_id": 25, "amount": 2500 &#125;</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">can be represented as:</h4>
          <p>order = &#123; "order_id": 101, "customer_id": 25, "amount": 2500 &#125;</p>
          <p>This makes dictionaries an essential structure for API integrations and file processing.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">5.5 Choosing the right collection</h3>
          <p>Collection</p>
          <p>Ordered</p>
          <p>Mutable</p>
          <p>Unique elements</p>
          <p>Typical use</p>
          <p>List</p>
          <p>Yes</p>
          <p>Yes</p>
          <p>No</p>
          <p>Records in sequence</p>
          <p>Tuple</p>
          <p>Yes</p>
          <p>No</p>
          <p>No</p>
          <p>Fixed group of values</p>
          <p>Set</p>
          <p>No meaningful positional order</p>
          <p>Yes</p>
          <p>Yes</p>
          <p>Unique IDs</p>
          <p>Dictionary</p>
          <p>Insertion-ordered</p>
          <p>Yes</p>
          <p>Unique keys</p>
          <p>Structured records</p>
        </div>
      </section>
      {"/* SECTION 6: List Comprehensions and Generators */"}
      <section id="section-6" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 6
          </span>
          <span className="text-xs font-mono text-stone-500">Memory Efficient Sequences</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          6. List Comprehensions and Generators
        </h2>
        <div className="space-y-4 text-stone-700 leading-relaxed text-sm sm:text-base">
          <p>These features let you create and process collections more efficiently and expressively.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">6.1 List comprehensions</h3>
          <p>A list comprehension creates a new list using a concise expression.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Normal approach:</h4>
          <p>numbers = [1, 2, 3, 4, 5] squares = [] for number in numbers: squares.append(number ** 2) print(squares)</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Using a list comprehension:</h4>
          <p>numbers = [1, 2, 3, 4, 5] squares = [ number ** 2 for number in numbers ] print(squares)</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Output:</h4>
          <p>[1, 4, 9, 16, 25]</p>
          <p>With conditions</p>
          <p>amounts = [100, 500, -50, 1000, -20] valid_amounts = [ amount for amount in amounts if amount &gt;= 0 ]</p>
          <p>Transforming records</p>
          <p>orders = [ &#123;"order_id": 1, "amount": 1000&#125;, &#123;"order_id": 2, "amount": 2000&#125;, &#123;"order_id": 3, "amount": 3000&#125; ] amounts = [ order["amount"] for order in orders ] print(amounts)</p>
          <p>When should you use comprehensions?</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Use them when:</h4>
          <p>The transformation is simple.</p>
          <p>The expression is readable.</p>
          <p>You need a new collection.</p>
          <p>The input fits comfortably in memory.</p>
          <p>Do not use extremely complicated comprehensions that make pipeline logic difficult to maintain.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">6.2 Generators</h3>
          <p>A generator produces values one at a time instead of building an entire result collection in memory.</p>
          <p>This is particularly useful when processing large datasets.</p>
          <p>Consider a dataset containing 10 million records.</p>
          <p>Creating a second complete list of all transformed records may require substantial additional memory.</p>
          <p>A generator lets the application consume records incrementally.</p>
          <p>Generator using yield</p>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`def generate_orders(): for order_id in range(1, 6): yield { "order_id": order_id, "amount": order_id * 100 } for order in generate_orders(): print(order)`}</code>
            </pre>
          </div>
          <p>The yield statement produces a value and suspends the generator's execution state.</p>
          <p>When the next value is requested, execution resumes.</p>
          <p>Difference between return and yield</p>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`return ends the function and supplies a result.`}</code>
            </pre>
          </div>
          <p>yield produces a value while allowing the generator to continue later.</p>
          <p>Generator expression</p>
          <p>numbers = range(1, 1000000) squares = ( number ** 2 for number in numbers )</p>
          <p>This does not create a million-element list immediately.</p>
          <p>Values are calculated as they are consumed.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">6.3 Processing large files with generators</h3>
          <p>Suppose we have a large CSV file containing millions of rows.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">A generator can process each record:</h4>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`import csv def read_orders(file_path): with open( file_path, "r", encoding="utf-8", newline="" ) as file: reader = csv.DictReader(file) for row in reader: yield row for order in read_orders("orders.csv"): print(order["order_id"])`}</code>
            </pre>
          </div>
          <p>The records are read as they are iterated over, rather than being accumulated into one complete list.</p>
          <p>However, a generator alone does not make every pipeline memory-efficient. Downstream processing must also avoid accumulating all the yielded values unnecessarily.</p>
        </div>
      </section>
      {"/* SECTION 7: Object-Oriented Programming (OOP) */"}
      <section id="section-7" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 7
          </span>
          <span className="text-xs font-mono text-stone-500">OOP Pipeline Patterns</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          7. Object-Oriented Programming (OOP)
        </h2>
        <div className="space-y-4 text-stone-700 leading-relaxed text-sm sm:text-base">
          <p>Object-Oriented Programming is a programming approach in which code is organized around objects that contain data and behavior.</p>
          <p>In Data Engineering, OOP helps structure complex applications into reusable components.</p>
          <p>Imagine building an enterprise data platform. You may need separate components for:</p>
          <p>Reading files.</p>
          <p>Connecting to databases.</p>
          <p>Extracting API information.</p>
          <p>Validating datasets.</p>
          <p>Cleaning records.</p>
          <p>Loading data.</p>
          <p>Monitoring pipelines.</p>
          <p>Instead of placing everything in one script, you can create classes that represent these components.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">7.1 Understanding classes and objects</h3>
          <p>A class is a blueprint that defines the attributes and methods an object can have.</p>
          <p>An object is an instance created from a class.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Example:</h4>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`class Customer: def __init__(self, name, city): self.name = name self.city = city def display_details(self): print(self.name, self.city) customer1 = Customer("Rahul", "Pune") customer2 = Customer("Priya", "Mumbai") customer1.display_details() customer2.display_details()`}</code>
            </pre>
          </div>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Output:</h4>
          <p>Rahul Pune Priya Mumbai</p>
          <p>Understanding each component</p>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`class Customer`}</code>
            </pre>
          </div>
          <p>Defines a class named Customer.</p>
          <p>init()</p>
          <p>A special method called when a new instance is initialized.</p>
          <p>self</p>
          <p>Refers to the current instance.</p>
          <p>self.name</p>
          <p>An instance attribute storing the customer's name.</p>
          <p>display_details()</p>
          <p>An instance method that defines behavior.</p>
          <p>customer1 and customer2</p>
          <p>Two separate objects created from the same class.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">7.2 Attributes and methods</h3>
          <p>Attributes represent an object's data.</p>
          <p>Methods represent its behavior.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Consider a data extraction component:</h4>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`class DataExtractor: def __init__(self, source_name): self.source_name = source_name def extract(self): print(f"Extracting from {self.source_name}") extractor = DataExtractor("PostgreSQL") extractor.extract()`}</code>
            </pre>
          </div>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Output:</h4>
          <p>Extracting from PostgreSQL</p>
          <p>This class can later be extended to implement different extraction methods.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">7.3 Instance attributes and class attributes</h3>
          <p>Instance attributes belong to individual objects.</p>
          <p>Class attributes are shared through the class unless an instance overrides them.</p>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`class Pipeline: platform = "Python Data Platform" def __init__(self, name): self.name = name pipeline1 = Pipeline("Sales Pipeline") pipeline2 = Pipeline("Customer Pipeline") print(pipeline1.platform) print(pipeline2.platform) print(pipeline1.name) print(pipeline2.name)`}</code>
            </pre>
          </div>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Output:</h4>
          <p>Python Data Platform Python Data Platform Sales Pipeline Customer Pipeline</p>
          <p>This distinction helps when designing configuration and shared behavior.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">7.4 Object initialization and lifecycle</h3>
          <p>A class may define different special methods.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Examples:</h4>
          <p>Method</p>
          <p>Purpose</p>
          <p>__init__()</p>
          <p>Initialize an object</p>
          <p>__repr__()</p>
          <p>Provide a developer-oriented representation</p>
          <p>__str__()</p>
          <p>Provide a readable string representation</p>
          <p>__len__()</p>
          <p>Define the object's length behavior</p>
          <p>__iter__()</p>
          <p>Make an object iterable</p>
          <p>__next__()</p>
          <p>Define how the next item is retrieved</p>
          <p>__enter__()</p>
          <p>Support context manager entry</p>
          <p>__exit__()</p>
          <p>Support context manager cleanup</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">For example:</h4>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`class Dataset: def __init__(self, name, row_count): self.name = name self.row_count = row_count def __repr__(self): return ( f"Dataset(name={self.name!r}, " f"row_count={self.row_count})" ) dataset = Dataset("orders", 10000) print(dataset)`}</code>
            </pre>
          </div>
          <p>This makes debugging easier.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">7.5 Four important OOP concepts</h3>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">OOP is commonly explained through four core concepts:</h4>
          <p>Encapsulation.</p>
          <p>Inheritance.</p>
          <p>Polymorphism.</p>
          <p>Abstraction.</p>
          <p>A. Encapsulation</p>
          <p>Encapsulation means organizing data and related behavior together and controlling how internal state is accessed or modified.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Example:</h4>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`class BankAccount: def __init__(self, balance): self.__balance = balance def deposit(self, amount): if amount <= 0: raise ValueError("Amount must be positive") self.__balance += amount def get_balance(self): return self.__balance account = BankAccount(10000) account.deposit(5000) print(account.get_balance())`}</code>
            </pre>
          </div>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Output:</h4>
          <p>15000</p>
          <p>The double underscore name __balance triggers Python's name-mangling mechanism.</p>
          <p>Python does not provide strict private-field access control like some languages. Name mangling helps avoid accidental access and subclass naming conflicts, but it is not a security boundary.</p>
          <p>B. Inheritance</p>
          <p>Inheritance allows one class to derive behavior from another class.</p>
          <p>Consider a general data source and two specialized sources.</p>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`class DataSource: def __init__(self, source_name): self.source_name = source_name def connect(self): print(f"Connecting to {self.source_name}") class DatabaseSource(DataSource): def extract(self): print("Extracting database records") class APIDataSource(DataSource): def extract(self): print("Extracting API records") database = DatabaseSource("PostgreSQL") api = APIDataSource("Payment API") database.connect() database.extract() api.connect() api.extract()`}</code>
            </pre>
          </div>
          <p>Both child classes reuse the parent class's connection behavior but implement their own extraction behavior.</p>
          <p>C. Polymorphism</p>
          <p>Polymorphism allows different objects to respond to the same method interface in their own ways.</p>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`class CSVExtractor: def extract(self): print("Reading CSV data") class JSONExtractor: def extract(self): print("Reading JSON data") class XMLExtractor: def extract(self): print("Reading XML data") extractors = [ CSVExtractor(), JSONExtractor(), XMLExtractor() ] for extractor in extractors: extractor.extract()`}</code>
            </pre>
          </div>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Output:</h4>
          <p>Reading CSV data Reading JSON data Reading XML data</p>
          <p>The pipeline does not need a different loop for each file type.</p>
          <p>D. Abstraction</p>
          <p>Abstraction exposes essential functionality while hiding implementation details.</p>
          <p>Python supports abstraction through the abc module.</p>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`from abc import ABC, abstractmethod class Extractor(ABC): @abstractmethod def extract(self): pass class CSVExtractor(Extractor): def extract(self): print("Extracting CSV data") extractor = CSVExtractor() extractor.extract()`}</code>
            </pre>
          </div>
          <p>The abstract base class defines the required interface. Concrete classes provide the actual implementation.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">7.6 OOP in a data engineering pipeline</h3>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">A simplified architecture might contain:</h4>
          <p>DataPipeline | +--- Extractor | | | +--- CSVExtractor | +--- APIExtractor | +--- DatabaseExtractor | +--- Transformer | +--- Validator | +--- Loader | +--- PipelineMonitor</p>
          <p>This design makes components independently testable and replaceable.</p>
          <p>Engineering principle: Use OOP when objects and their responsibilities make the system easier to understand. Do not create unnecessary classes for simple operations that are better represented by functions.</p>
        </div>
      </section>
      {"/* SECTION 8: Exception Handling and Custom Exceptions */"}
      <section id="section-8" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 8
          </span>
          <span className="text-xs font-mono text-stone-500">Defensive Engineering</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          8. Exception Handling and Custom Exceptions
        </h2>
        <div className="space-y-4 text-stone-700 leading-relaxed text-sm sm:text-base">
          <p>Real-world data pipelines frequently encounter failures.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Examples:</h4>
          <p>A file does not exist.</p>
          <p>An API becomes unavailable.</p>
          <p>A database connection fails.</p>
          <p>A file contains invalid JSON.</p>
          <p>A field contains an unexpected value.</p>
          <p>A transformation encounters missing data.</p>
          <p>A pipeline runs out of available memory.</p>
          <p>If errors are not handled properly, an entire workflow may stop unexpectedly.</p>
          <p>Python provides exception handling to deal with these situations.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">8.1 What is an exception?</h3>
          <p>An exception is an event that interrupts the normal execution of a program.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Example:</h4>
          <p>number = 10 result = number / 0</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Output:</h4>
          <p>ZeroDivisionError</p>
          <p>The program encounters an invalid mathematical operation.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Other common exceptions:</h4>
          <p>Exception</p>
          <p>Typical cause</p>
          <p>ValueError</p>
          <p>Invalid value</p>
          <p>TypeError</p>
          <p>Incorrect data type operation</p>
          <p>KeyError</p>
          <p>Missing dictionary key</p>
          <p>IndexError</p>
          <p>Invalid sequence index</p>
          <p>FileNotFoundError</p>
          <p>File does not exist</p>
          <p>PermissionError</p>
          <p>Insufficient file permissions</p>
          <p>ImportError</p>
          <p>Import failure</p>
          <p>ConnectionError</p>
          <p>Network or connection failure</p>
          <p>TimeoutError</p>
          <p>Operation exceeds timeout</p>
          <p>JSONDecodeError</p>
          <p>Invalid JSON content</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">8.2 try and except</h3>
          <p>The try block contains code that may raise an exception.</p>
          <p>The except block handles matching exceptions.</p>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`try: amount = int("invalid") except ValueError: print("Invalid amount received")`}</code>
            </pre>
          </div>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Output:</h4>
          <p>Invalid amount received</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">8.3 Handling multiple exceptions</h3>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`try: amount = float("invalid") result = 1000 / amount except ValueError: print("Amount conversion failed") except ZeroDivisionError: print("Division by zero is not allowed")`}</code>
            </pre>
          </div>
          <p>Each exception can have its own handling logic.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">8.4 else and finally</h3>
          <p>The else block runs when the try block completes without an exception.</p>
          <p>The finally block runs when control leaves the try statement, whether or not an exception occurred.</p>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`try: amount = float("5000") except ValueError: print("Invalid data") else: print("Successfully processed:", amount) finally: print("Processing operation finished")`}</code>
            </pre>
          </div>
          <p>finally is useful for cleanup operations, although context managers are often better for file and connection resource management.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">8.5 Raising exceptions</h3>
          <p>Use raise when your application identifies an invalid condition.</p>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`def validate_amount(amount): if amount <= 0: raise ValueError( "Transaction amount must be positive" ) return amount`}</code>
            </pre>
          </div>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Example:</h4>
          <p>validate_amount(-500)</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Raises:</h4>
          <p>ValueError: Transaction amount must be positive</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">8.6 Custom exceptions</h3>
          <p>Sometimes standard exceptions are not descriptive enough for your application.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">For example, a data pipeline may need to distinguish between:</h4>
          <p>Invalid source records.</p>
          <p>Failed extraction.</p>
          <p>Failed transformation.</p>
          <p>Failed loading.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Create custom exceptions:</h4>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`class PipelineError(Exception): """Base exception for pipeline errors.""" class ExtractionError(PipelineError): """Raised when data extraction fails.""" class ValidationError(PipelineError): """Raised when incoming data is invalid.""" class LoadingError(PipelineError): """Raised when data loading fails."""`}</code>
            </pre>
          </div>
          <p>Now the application can raise meaningful exceptions.</p>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`def extract_data(source): if source is None: raise ExtractionError( "Data source is not configured" ) return "Data extracted successfully" try: result = extract_data(None) except ExtractionError as error: print(f"Extraction failed: {error}")`}</code>
            </pre>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">8.7 Exception handling in production pipelines</h3>
          <p>A good pipeline should distinguish between failures that can be retried and failures that require correction.</p>
          <p>Error</p>
          <p>Typical response</p>
          <p>Temporary API timeout</p>
          <p>Retry with backoff</p>
          <p>Invalid JSON</p>
          <p>Reject or quarantine the record</p>
          <p>Missing required column</p>
          <p>Fail validation</p>
          <p>Database unavailable</p>
          <p>Retry or alert</p>
          <p>Insufficient permissions</p>
          <p>Stop and investigate</p>
          <p>Invalid business value</p>
          <p>Record failure and investigate</p>
          <p>Never use a broad exception handler that silently hides every problem.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Bad example:</h4>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`try: process_data() except: pass`}</code>
            </pre>
          </div>
          <p>This makes failures invisible.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">A better approach:</h4>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`try: process_data() except ValueError: logger.exception("Invalid input data") raise except ConnectionError: logger.exception("Source connection failed") raise`}</code>
            </pre>
          </div>
          <p>For temporary network errors, a separate retry mechanism can be implemented.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">8.8 Retry with exponential backoff</h3>
          <p>Many external services temporarily fail.</p>
          <p>Instead of retrying immediately in a tight loop, introduce increasing delays.</p>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`import time def retry_operation(operation, max_attempts=3): for attempt in range(max_attempts): try: return operation() except ConnectionError: if attempt == max_attempts - 1: raise delay = 2 ** attempt print(f"Retrying after {delay} seconds") time.sleep(delay)`}</code>
            </pre>
          </div>
          <p>This implements simple exponential backoff.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">For production systems, consider:</h4>
          <p>Maximum retry duration.</p>
          <p>Jitter to prevent simultaneous retries.</p>
          <p>Which errors are actually retryable.</p>
          <p>Whether the operation is safe to repeat.</p>
          <p>A final failure notification.</p>
        </div>
      </section>
      {"/* SECTION 9: File Handling and File Processing */"}
      <section id="section-9" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 9
          </span>
          <span className="text-xs font-mono text-stone-500">File I/O & Buffering</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          9. File Handling and File Processing
        </h2>
        <div className="space-y-4 text-stone-700 leading-relaxed text-sm sm:text-base">
          <p>Data Engineers frequently receive information through files.</p>
          <p>Python provides built-in functionality to create, read, update, and process files.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">9.1 Opening files</h3>
          <p>Python uses the open() function.</p>
          <p>file = open("sample.txt", "r", encoding="utf-8") content = file.read() print(content) file.close()</p>
          <p>However, manually closing files is error-prone.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Use a context manager:</h4>
          <p>with open( "sample.txt", "r", encoding="utf-8" ) as file: content = file.read() print(content)</p>
          <p>The file is automatically closed when execution leaves the with block.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">9.2 File opening modes</h3>
          <p>Mode</p>
          <p>Purpose</p>
          <p>r</p>
          <p>Read</p>
          <p>w</p>
          <p>Write, replacing existing content</p>
          <p>a</p>
          <p>Append</p>
          <p>x</p>
          <p>Create a new file, failing if it exists</p>
          <p>rb</p>
          <p>Read binary</p>
          <p>wb</p>
          <p>Write binary</p>
          <p>r+</p>
          <p>Read and write</p>
          <p>Be careful with w: it truncates an existing file.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">9.3 Reading files</h3>
          <p>read()</p>
          <p>Reads the full content.</p>
          <p>with open("sample.txt", "r", encoding="utf-8") as file: content = file.read()</p>
          <p>readline()</p>
          <p>Reads one line.</p>
          <p>with open("sample.txt", "r", encoding="utf-8") as file: first_line = file.readline()</p>
          <p>readlines()</p>
          <p>Reads all lines and returns a list.</p>
          <p>with open("sample.txt", "r", encoding="utf-8") as file: lines = file.readlines()</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">For large files, iterating over the file is often preferable:</h4>
          <p>with open("sample.txt", "r", encoding="utf-8") as file: for line in file: process_line = line.strip() print(process_line)</p>
          <p>This avoids loading the entire text file into memory.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">9.4 Writing files</h3>
          <p>with open("output.txt", "w", encoding="utf-8") as file: file.write("Data Engineering\n") file.write("Python File Processing\n")</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Append information:</h4>
          <p>with open("output.txt", "a", encoding="utf-8") as file: file.write("Additional records\n")</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">9.5 Working with file paths</h3>
          <p>Use pathlib rather than manually constructing operating-system-specific paths.</p>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`from pathlib import Path data_directory = Path("data") input_file = data_directory / "orders.csv" if input_file.exists(): print("File found:", input_file) else: print("File missing")`}</code>
            </pre>
          </div>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Useful methods:</h4>
          <p>path.exists() path.is_file() path.is_dir() path.name path.suffix path.parent path.mkdir() path.glob("*.csv")</p>
          <p>pathlib makes file-processing applications easier to maintain across different operating systems.</p>
        </div>
      </section>
      {"/* SECTION 10: Working with CSV, JSON, and XML */"}
      <section id="section-10" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 10
          </span>
          <span className="text-xs font-mono text-stone-500">Data Serialization</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          10. Working with CSV, JSON, and XML
        </h2>
        <div className="space-y-4 text-stone-700 leading-relaxed text-sm sm:text-base">
          <p>These three formats are commonly used when transferring information between systems.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">10.1 CSV — Comma-Separated Values</h3>
          <p>CSV stores tabular information as text.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Example orders.csv:</h4>
          <p>order_id,customer_id,amount,status 101,1,2000,SUCCESS 102,2,3000,PENDING 103,3,1500,SUCCESS</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">CSV is often used for:</h4>
          <p>Database exports.</p>
          <p>Financial reports.</p>
          <p>Historical data transfers.</p>
          <p>Bulk uploads.</p>
          <p>Analytics datasets.</p>
          <p>Reading CSV using Python</p>
          <p>Python provides the built-in csv module.</p>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`import csv with open( "orders.csv", "r", encoding="utf-8", newline="" ) as file: reader = csv.DictReader(file) for row in reader: print(row)`}</code>
            </pre>
          </div>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Output:</h4>
          <p>&#123; "order_id": "101", "customer_id": "1", "amount": "2000", "status": "SUCCESS" &#125;</p>
          <p>Notice that the values are initially strings.</p>
          <p>You must convert them into the required data types.</p>
          <p>Writing CSV</p>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`import csv orders = [ { "order_id": 101, "customer": "Rahul", "amount": 2000 }, { "order_id": 102, "customer": "Priya", "amount": 3000 } ] with open( "output.csv", "w", encoding="utf-8", newline="" ) as file: writer = csv.DictWriter( file, fieldnames=[ "order_id", "customer", "amount" ] ) writer.writeheader() writer.writerows(orders)`}</code>
            </pre>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">10.2 JSON — JavaScript Object Notation</h3>
          <p>JSON is a text-based data-interchange format.</p>
          <p>It is particularly popular in REST APIs and application communication.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Example:</h4>
          <p>&#123; "order_id": 101, "customer": &#123; "name": "Rahul", "city": "Pune" &#125;, "items": [ &#123; "product": "Laptop", "price": 50000 &#125;, &#123; "product": "Mouse", "price": 500 &#125; ], "payment_status": "SUCCESS" &#125;</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">JSON supports:</h4>
          <p>Objects.</p>
          <p>Arrays.</p>
          <p>Strings.</p>
          <p>Numbers.</p>
          <p>Booleans.</p>
          <p>Null values.</p>
          <p>Reading JSON</p>
          <p>Python has a built-in json module.</p>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`import json with open( "orders.json", "r", encoding="utf-8" ) as file: data = json.load(file) print(data["order_id"]) print(data["customer"]["name"])`}</code>
            </pre>
          </div>
          <p>Converting JSON text into Python objects</p>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`import json json_data = '{"order_id":101,"amount":2500}' data = json.loads(json_data) print(data["amount"])`}</code>
            </pre>
          </div>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Important distinction:</h4>
          <p>Function</p>
          <p>Purpose</p>
          <p>json.load()</p>
          <p>Reads JSON from a file</p>
          <p>json.loads()</p>
          <p>Reads JSON from a string</p>
          <p>json.dump()</p>
          <p>Writes JSON to a file</p>
          <p>json.dumps()</p>
          <p>Converts Python objects to JSON text</p>
          <p>Writing JSON</p>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`import json order = { "order_id": 101, "amount": 2500, "status": "SUCCESS" } with open( "output.json", "w", encoding="utf-8" ) as file: json.dump( order, file, indent=4 )`}</code>
            </pre>
          </div>
          <p>JSON and Python data types</p>
          <p>JSON</p>
          <p>Python</p>
          <p>Object</p>
          <p>dict</p>
          <p>Array</p>
          <p>list</p>
          <p>String</p>
          <p>str</p>
          <p>Number</p>
          <p>int or float</p>
          <p>true/false</p>
          <p>True / False</p>
          <p>null</p>
          <p>None</p>
          <p>JSON is especially important because APIs commonly return JSON responses.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">10.3 XML — Extensible Markup Language</h3>
          <p>XML represents information using nested tags.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Example:</h4>
          <p>&lt;?xml version="1.0" encoding="UTF-8"?&gt; &lt;orders&gt; &lt;order&gt; &lt;order_id&gt;101&lt;/order_id&gt; &lt;customer&gt;Rahul&lt;/customer&gt; &lt;amount&gt;2500&lt;/amount&gt; &lt;status&gt;SUCCESS&lt;/status&gt; &lt;/order&gt; &lt;order&gt; &lt;order_id&gt;102&lt;/order_id&gt; &lt;customer&gt;Priya&lt;/customer&gt; &lt;amount&gt;3000&lt;/amount&gt; &lt;status&gt;PENDING&lt;/status&gt; &lt;/order&gt; &lt;/orders&gt;</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">XML is still used in:</h4>
          <p>Enterprise integrations.</p>
          <p>Financial services.</p>
          <p>Legacy applications.</p>
          <p>Document formats.</p>
          <p>SOAP-based web services.</p>
          <p>Reading XML using ElementTree</p>
          <p>Python provides the xml.etree.ElementTree module.</p>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`import xml.etree.ElementTree as ET tree = ET.parse("orders.xml") root = tree.getroot() for order in root.findall("order"): order_id = order.findtext("order_id") customer = order.findtext("customer") amount = order.findtext("amount") print(order_id, customer, amount)`}</code>
            </pre>
          </div>
          <p>Creating XML</p>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`import xml.etree.ElementTree as ET root = ET.Element("orders") order = ET.SubElement(root, "order") ET.SubElement(order, "order_id").text = "101" ET.SubElement(order, "customer").text = "Rahul" ET.SubElement(order, "amount").text = "2500" tree = ET.ElementTree(root) tree.write( "output.xml", encoding="utf-8", xml_declaration=True )`}</code>
            </pre>
          </div>
          <p>CSV vs JSON vs XML</p>
          <p>Feature</p>
          <p>CSV</p>
          <p>JSON</p>
          <p>XML</p>
          <p>Main structure</p>
          <p>Rows and columns</p>
          <p>Objects and arrays</p>
          <p>Nested tags</p>
          <p>Nested data</p>
          <p>Not natural</p>
          <p>Yes</p>
          <p>Yes</p>
          <p>Human readability</p>
          <p>High for simple tables</p>
          <p>High</p>
          <p>High, but verbose</p>
          <p>Common use</p>
          <p>Tabular exchange</p>
          <p>APIs</p>
          <p>Enterprise integration</p>
          <p>Built-in Python support</p>
          <p>csv</p>
          <p>json</p>
          <p>xml.etree</p>
          <p>Data Engineering principle: Always understand the source format and schema before processing incoming files. Do not assume every CSV field is numeric or that every JSON record has exactly the same structure.</p>
        </div>
      </section>
      {"/* SECTION 11: Python Iterators and Generators for Large Datasets */"}
      <section id="section-11" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 11
          </span>
          <span className="text-xs font-mono text-stone-500">Streaming Iterators</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          11. Python Iterators and Generators for Large Datasets
        </h2>
        <div className="space-y-4 text-stone-700 leading-relaxed text-sm sm:text-base">
          <p>This topic deserves special attention because data engineers frequently process datasets that are larger than available memory.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">11.1 What is an iterable?</h3>
          <p>An iterable is an object that can return an iterator.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Examples include:</h4>
          <p>Lists.</p>
          <p>Tuples.</p>
          <p>Strings.</p>
          <p>Dictionaries.</p>
          <p>Sets.</p>
          <p>Files.</p>
          <p>Generators.</p>
          <p>orders = [1000, 2000, 3000] for amount in orders: print(amount)</p>
          <p>The list is iterable.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">11.2 What is an iterator?</h3>
          <p>An iterator is an object that produces values one at a time.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">It implements:</h4>
          <p>__iter__()</p>
          <p>__next__()</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Example:</h4>
          <p>orders = [1000, 2000, 3000] iterator = iter(orders) print(next(iterator)) print(next(iterator)) print(next(iterator))</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Output:</h4>
          <p>1000 2000 3000</p>
          <p>Calling next() again after the values are exhausted raises StopIteration.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">11.3 Creating a custom iterator</h3>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`class OrderIterator: def __init__(self, orders): self.orders = orders self.index = 0 def __iter__(self): return self def __next__(self): if self.index >= len(self.orders): raise StopIteration order = self.orders[self.index] self.index += 1 return order orders = [101, 102, 103] iterator = OrderIterator(orders) for order in iterator: print(order)`}</code>
            </pre>
          </div>
          <p>This demonstrates how Python's iteration protocol works.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">11.4 Memory-efficient file reading</h3>
          <p>Consider two approaches.</p>
          <p>Approach A: Read the entire file</p>
          <p>with open("large_file.txt", encoding="utf-8") as file: lines = file.readlines() for line in lines: process(line)</p>
          <p>The entire file's lines are held in memory.</p>
          <p>Approach B: Iterate over the file</p>
          <p>with open("large_file.txt", encoding="utf-8") as file: for line in file: process(line)</p>
          <p>The second approach generally uses less memory because it processes the file incrementally.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">11.5 Chunk processing</h3>
          <p>Sometimes pipelines need to process a fixed number of records at a time.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Example:</h4>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`import csv def read_csv_in_batches(file_path, batch_size=1000): with open( file_path, "r", encoding="utf-8", newline="" ) as file: reader = csv.DictReader(file) batch = [] for row in reader: batch.append(row) if len(batch) == batch_size: yield batch batch = [] if batch: yield batch`}</code>
            </pre>
          </div>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Usage:</h4>
          <p>for batch in read_csv_in_batches( "orders.csv", batch_size=1000 ): print("Processing records:", len(batch))</p>
          <p>This processes the file in batches of up to 1,000 records.</p>
          <p>Why chunking matters</p>
          <p>Imagine a file contains 10 million records.</p>
          <p>Instead of trying to process all 10 million records simultaneously, an application can process 10,000 records at a time.</p>
          <p>This provides better control over memory usage.</p>
          <p>However, the ideal batch size depends on record size, processing complexity, storage throughput, and memory availability.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">11.6 Memory usage comparison</h3>
          <p>Two processing approaches</p>
          <p>Loading everything</p>
          <p>Higher memory pressure</p>
          <p>Entire dataset is loaded into a collection before processing.</p>
          <p>Streaming or chunking</p>
          <p>Controlled memory</p>
          <p>Only the current processing batch is retained, assuming downstream code does not accumulate all results.</p>
          <p>Illustrative comparison, not measured memory benchmarks.</p>
          <p>When to use each method</p>
          <p>Technique</p>
          <p>Best use</p>
          <p>Lists</p>
          <p>Small or moderate in-memory collections</p>
          <p>Iterators</p>
          <p>Sequential access</p>
          <p>Generators</p>
          <p>Lazy production of values</p>
          <p>File iteration</p>
          <p>Large text files</p>
          <p>Chunk processing</p>
          <p>Large tabular datasets</p>
          <p>Pandas chunksize</p>
          <p>CSV processing in chunks</p>
          <p>Distributed processing</p>
          <p>Workloads that require multiple processing machines</p>
        </div>
      </section>
      {"/* SECTION 12: Regular Expressions (Regex) */"}
      <section id="section-12" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 12
          </span>
          <span className="text-xs font-mono text-stone-500">Pattern Matching</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          12. Regular Expressions (Regex)
        </h2>
        <div className="space-y-4 text-stone-700 leading-relaxed text-sm sm:text-base">
          <p>Regular expressions are patterns used to search, extract, validate, and replace text.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Data Engineers encounter irregular text in:</h4>
          <p>Application logs.</p>
          <p>User-generated content.</p>
          <p>Email addresses.</p>
          <p>Phone numbers.</p>
          <p>Transaction descriptions.</p>
          <p>File names.</p>
          <p>Structured text fields.</p>
          <p>Python provides the re module.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">12.1 Basic matching</h3>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`import re text = "Order ID: 10245" match = re.search(r"\d+", text) if match: print(match.group())`}</code>
            </pre>
          </div>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Output:</h4>
          <p>10245</p>
          <p>Here \d+ means one or more digits.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">12.2 Important regex symbols</h3>
          <p>Pattern</p>
          <p>Meaning</p>
          <p>\d</p>
          <p>Digit</p>
          <p>\D</p>
          <p>Non-digit</p>
          <p>\w</p>
          <p>Word character</p>
          <p>\W</p>
          <p>Non-word character</p>
          <p>\s</p>
          <p>Whitespace</p>
          <p>\S</p>
          <p>Non-whitespace</p>
          <p>.</p>
          <p>Any character except newline by default</p>
          <p>*</p>
          <p>Zero or more</p>
          <p>+</p>
          <p>One or more</p>
          <p>?</p>
          <p>Zero or one</p>
          <p>^</p>
          <p>Beginning of string</p>
          <p>$</p>
          <p>End of string</p>
          <p>&#123;n&#125;</p>
          <p>Exactly n repetitions</p>
          <p>[abc]</p>
          <p>One character from the set</p>
          <p>(...)</p>
          <p>Capturing group</p>
          <p>Use raw strings, such as r"\d+", to make backslash patterns easier to read.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">12.3 Extracting email addresses</h3>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`import re text = """ Contact: rahul@example.com Support: support@company.in Invalid: rahul@ """ pattern = r"[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}" emails = re.findall(pattern, text) print(emails)`}</code>
            </pre>
          </div>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Output:</h4>
          <p>['rahul@example.com', 'support@company.in']</p>
          <p>This is useful for basic extraction, but regex alone does not prove that an email address is deliverable or belongs to a real user.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">12.4 Extracting transaction IDs from logs</h3>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`import re log = """ Payment completed. Transaction ID: TXN-2026-1001 Transaction ID: TXN-2026-1002 """ pattern = r"TXN-\d{4}-\d+" transaction_ids = re.findall(pattern, log) print(transaction_ids)`}</code>
            </pre>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">12.5 Replacing text</h3>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`import re phone = "987-654-3210" cleaned_phone = re.sub( r"\D", "", phone ) print(cleaned_phone)`}</code>
            </pre>
          </div>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Output:</h4>
          <p>9876543210</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">12.6 Regex in data pipelines</h3>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Common applications:</h4>
          <p>Extracting timestamps from logs.</p>
          <p>Identifying transaction IDs.</p>
          <p>Removing unwanted characters.</p>
          <p>Validating file naming conventions.</p>
          <p>Extracting numeric values from text.</p>
          <p>Standardizing free-form fields.</p>
          <p>For complex or security-sensitive validation, prefer dedicated parsers and domain-specific validation libraries where appropriate.</p>
        </div>
      </section>
      {"/* SECTION 13: Virtual Environments and Package Management */"}
      <section id="section-13" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 13
          </span>
          <span className="text-xs font-mono text-stone-500">Packaging & Environments</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          13. Virtual Environments and Package Management
        </h2>
        <div className="space-y-4 text-stone-700 leading-relaxed text-sm sm:text-base">
          <p>A Python project often depends on external packages.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">For example:</h4>
          <p>Pandas for data manipulation.</p>
          <p>Requests for API communication.</p>
          <p>SQLAlchemy for database connectivity.</p>
          <p>Pytest for testing.</p>
          <p>Different projects may require different package versions.</p>
          <p>Installing everything globally can lead to dependency conflicts.</p>
          <p>Virtual environments solve this problem.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">13.1 What is a virtual environment?</h3>
          <p>A virtual environment is an isolated Python environment associated with a project.</p>
          <p>It helps keep the project's packages separate from other projects and the system's Python installation.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Imagine two applications:</h4>
          <p>Project A: pandas requests Project B: different pandas version sqlalchemy</p>
          <p>Each can use its own virtual environment.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">13.2 Creating a virtual environment</h3>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Create a project:</h4>
          <p>mkdir data-engineering cd data-engineering</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Create the environment:</h4>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`python -m venv .venv`}</code>
            </pre>
          </div>
          <p>Activate on Windows</p>
          <p>.venv\Scripts\activate</p>
          <p>Activate on Linux or macOS</p>
          <p>source .venv/bin/activate</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">To deactivate:</h4>
          <p>deactivate</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">13.3 Installing packages</h3>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Use pip:</h4>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`python -m pip install pandas requests sqlalchemy pytest`}</code>
            </pre>
          </div>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Check installed packages:</h4>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`python -m pip list`}</code>
            </pre>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">13.4 requirements.txt</h3>
          <p>A requirements file records dependencies for a project.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Generate one:</h4>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`python -m pip freeze > requirements.txt`}</code>
            </pre>
          </div>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">The file might contain:</h4>
          <p>pandas==... requests==... SQLAlchemy==... pytest==...</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Install dependencies on another machine:</h4>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`python -m pip install -r requirements.txt`}</code>
            </pre>
          </div>
          <p>For more reproducible production environments, pin and review versions, use appropriate lock-file tooling, and manage transitive dependencies.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">13.5 Project structure</h3>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">A maintainable Python data project might look like:</h4>
          <p>sales_pipeline/ │ ├── .venv/ │ ├── config/ │ └── settings.py │ ├── data/ │ ├── src/ │ ├── __init__.py │ ├── extraction.py │ ├── transformation.py │ ├── validation.py │ └── loading.py │ ├── tests/ │ ├── test_extraction.py │ └── test_transformation.py │ ├── logs/ │ ├── .env ├── .gitignore ├── requirements.txt └── main.py</p>
          <p>Do not commit .venv, sensitive .env values, or large data files to a public repository.</p>
        </div>
      </section>
      {"/* SECTION 14: Python Logging and Configuration Management */"}
      <section id="section-14" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 14
          </span>
          <span className="text-xs font-mono text-stone-500">Telemetry & Observability</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          14. Python Logging and Configuration Management
        </h2>
        <div className="space-y-4 text-stone-700 leading-relaxed text-sm sm:text-base">
          <p>A production data pipeline needs more than print() statements.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Engineers must be able to determine:</h4>
          <p>When a pipeline started.</p>
          <p>Which source was processed.</p>
          <p>How many records were extracted.</p>
          <p>Which records failed validation.</p>
          <p>How long processing took.</p>
          <p>Why an operation failed.</p>
          <p>Python's built-in logging library provides structured application logging.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">14.1 What is logging?</h3>
          <p>Logging records information about an application's execution.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Example:</h4>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`import logging logging.basicConfig( level=logging.INFO, format="%(asctime)s | %(levelname)s | %(message)s" ) logging.info("Pipeline started") logging.warning("Missing records detected") logging.error("Database connection failed")`}</code>
            </pre>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">14.2 Logging levels</h3>
          <p>Level</p>
          <p>Purpose</p>
          <p>DEBUG</p>
          <p>Detailed diagnostic information</p>
          <p>INFO</p>
          <p>Normal application activity</p>
          <p>WARNING</p>
          <p>Unexpected but recoverable condition</p>
          <p>ERROR</p>
          <p>An operation failed</p>
          <p>CRITICAL</p>
          <p>Severe failure affecting the application</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Example:</h4>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`import logging logger = logging.getLogger(__name__) logger.debug("Debugging information") logger.info("Records extracted successfully") logger.warning("Some rows were rejected") logger.error("Database insert failed") logger.critical("Pipeline cannot continue")`}</code>
            </pre>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">14.3 Logging to a file</h3>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`import logging logging.basicConfig( filename="pipeline.log", level=logging.INFO, format="%(asctime)s %(levelname)s %(message)s" ) logging.info("Data extraction started") logging.info("Data extraction completed")`}</code>
            </pre>
          </div>
          <p>A pipeline can maintain historical execution logs for debugging and auditing.</p>
          <p>For larger production applications, configure handlers explicitly, including console and rotating file handlers where appropriate.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">14.4 Why use logging instead of print?</h3>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`print()`}</code>
            </pre>
          </div>
          <p>Logging</p>
          <p>Displays output</p>
          <p>Records application events</p>
          <p>Basic formatting</p>
          <p>Configurable formatting</p>
          <p>No standard severity levels</p>
          <p>DEBUG through CRITICAL</p>
          <p>Limited routing</p>
          <p>Console, files, and external systems</p>
          <p>Not ideal for operational monitoring</p>
          <p>Suitable for application monitoring</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">14.5 Configuration management</h3>
          <p>Configuration management means separating application settings from business logic.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">For example, a pipeline may require:</h4>
          <p>API URL DATABASE HOST DATABASE PORT DATABASE NAME LOG LEVEL BATCH SIZE</p>
          <p>Avoid hardcoding these settings inside multiple Python files.</p>
          <p>Instead, load them from configuration files or environment variables.</p>
          <p>Example using environment variables</p>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`import os API_URL = os.getenv("API_URL") DATABASE_HOST = os.getenv("DATABASE_HOST") BATCH_SIZE = int(os.getenv("BATCH_SIZE", "1000")) if not API_URL: raise ValueError("API_URL is not configured")`}</code>
            </pre>
          </div>
          <p>Using a .env file</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Example:</h4>
          <p>API_URL=https://api.example.com/orders DATABASE_HOST=localhost BATCH_SIZE=1000</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Install:</h4>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`python -m pip install python-dotenv`}</code>
            </pre>
          </div>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Read it:</h4>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`from dotenv import load_dotenv import os load_dotenv() api_url = os.getenv("API_URL")`}</code>
            </pre>
          </div>
          <p>Security rule: Never place actual API keys, passwords, or production database credentials in source code or public repositories. Use environment-specific secret management and restrict access to credentials.</p>
        </div>
      </section>
      {"/* SECTION 15: API Integration Using Python */"}
      <section id="section-15" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 15
          </span>
          <span className="text-xs font-mono text-stone-500">Network Ingestion</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          15. API Integration Using Python
        </h2>
        <div className="space-y-4 text-stone-700 leading-relaxed text-sm sm:text-base">
          <p>Modern data systems frequently collect information from external applications through APIs.</p>
          <p>An API allows one application to request or exchange data with another.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">For example, an e-commerce company might retrieve:</h4>
          <p>Payment information.</p>
          <p>Shipment status.</p>
          <p>Exchange rates.</p>
          <p>Customer information.</p>
          <p>Inventory updates.</p>
          <p>Third-party product details.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">15.1 What is a REST API?</h3>
          <p>A REST API is an HTTP-based interface that commonly exposes resources through endpoints.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Example endpoint:</h4>
          <p>https://api.example.com/orders</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">A request may return:</h4>
          <p>&#123; "orders": [ &#123; "order_id": 101, "amount": 2500 &#125;, &#123; "order_id": 102, "amount": 3000 &#125; ] &#125;</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">15.2 HTTP methods</h3>
          <p>Method</p>
          <p>Purpose</p>
          <p>GET</p>
          <p>Retrieve information</p>
          <p>POST</p>
          <p>Submit or create information</p>
          <p>PUT</p>
          <p>Replace a resource</p>
          <p>PATCH</p>
          <p>Partially update a resource</p>
          <p>DELETE</p>
          <p>Delete a resource</p>
          <p>For extracting data into a pipeline, GET requests are common.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">15.3 HTTP status codes</h3>
          <p>Code</p>
          <p>Meaning</p>
          <p>200</p>
          <p>Successful request</p>
          <p>201</p>
          <p>Resource created</p>
          <p>204</p>
          <p>Successful request with no response body</p>
          <p>400</p>
          <p>Bad request</p>
          <p>401</p>
          <p>Authentication required or failed</p>
          <p>403</p>
          <p>Access forbidden</p>
          <p>404</p>
          <p>Resource not found</p>
          <p>429</p>
          <p>Rate limit exceeded</p>
          <p>500</p>
          <p>Internal server error</p>
          <p>502</p>
          <p>Bad gateway</p>
          <p>503</p>
          <p>Service unavailable</p>
          <p>504</p>
          <p>Gateway timeout</p>
          <p>Data Engineers should distinguish temporary failures from permanent request errors.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">15.4 Install Requests</h3>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`python -m pip install requests`}</code>
            </pre>
          </div>
          <p>Requests is a popular Python library for HTTP communication.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">15.5 Sending a GET request</h3>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`import requests url = "https://api.example.com/orders" response = requests.get( url, timeout=15 ) response.raise_for_status() data = response.json() print(data)`}</code>
            </pre>
          </div>
          <p>The example uses a placeholder endpoint; substitute a real API that you are authorized to access.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Important steps:</h4>
          <p>Create the HTTP request.</p>
          <p>Set a timeout.</p>
          <p>Check for HTTP errors.</p>
          <p>Parse the JSON response.</p>
          <p>Validate the returned data.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">15.6 Sending query parameters</h3>
          <p>Many APIs support pagination and filtering through query parameters.</p>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`import requests url = "https://api.example.com/orders" params = { "page": 1, "limit": 100, "status": "SUCCESS" } response = requests.get( url, params=params, timeout=15 ) response.raise_for_status() data = response.json()`}</code>
            </pre>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">15.7 Authentication</h3>
          <p>Some APIs require authentication.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">A token may be passed through an HTTP header:</h4>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`import os import requests token = os.getenv("API_TOKEN") if not token: raise ValueError("API_TOKEN is missing") headers = { "Authorization": f"Bearer {token}" } response = requests.get( "https://api.example.com/orders", headers=headers, timeout=15 ) response.raise_for_status()`}</code>
            </pre>
          </div>
          <p>Do not hardcode the token.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">15.8 Pagination</h3>
          <p>Large APIs rarely return every record in a single response.</p>
          <p>They commonly return paginated results.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Example:</h4>
          <p>Page 1: Orders 1–100 Page 2: Orders 101–200 Page 3: Orders 201–300</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">A simplified page-based implementation:</h4>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`import requests def fetch_all_orders(base_url): page = 1 all_orders = [] while True: response = requests.get( base_url, params={ "page": page, "limit": 100 }, timeout=15 ) response.raise_for_status() payload = response.json() orders = payload.get("orders", []) if not orders: break all_orders.extend(orders) page += 1 return all_orders`}</code>
            </pre>
          </div>
          <p>This is illustrative. Some APIs use cursor-based pagination or continuation URLs instead of page numbers. Always follow the API's documented pagination mechanism.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">15.9 API rate limiting</h3>
          <p>Many APIs restrict the number of requests a client can make over a period.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">For example:</h4>
          <p>Maximum: 100 requests per minute</p>
          <p>If the limit is exceeded, the server may return HTTP 429.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">A reliable ingestion application should:</h4>
          <p>Respect documented limits.</p>
          <p>Inspect Retry-After when provided.</p>
          <p>Use bounded retries.</p>
          <p>Avoid sending uncontrolled requests.</p>
          <p>Preserve ingestion progress.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">15.10 Building an API ingestion component</h3>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`import requests class APIExtractor: def __init__(self, base_url, token=None): self.base_url = base_url self.session = requests.Session() if token: self.session.headers.update({ "Authorization": f"Bearer {token}" }) def extract(self, params=None): response = self.session.get( self.base_url, params=params, timeout=15 ) response.raise_for_status() return response.json()`}</code>
            </pre>
          </div>
          <p>This example introduces reusable HTTP session management.</p>
          <p>For production use, also add documented pagination, error classification, bounded retries, schema validation, secure logging, and connection cleanup.</p>
        </div>
      </section>
      {"/* SECTION 16: Database Connectivity Using Python */"}
      <section id="section-16" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 16
          </span>
          <span className="text-xs font-mono text-stone-500">RDBMS & ORM</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          16. Database Connectivity Using Python
        </h2>
        <div className="space-y-4 text-stone-700 leading-relaxed text-sm sm:text-base">
          <p>Data Engineers need to communicate with different databases.</p>
          <p>Python provides database drivers and abstraction libraries for this.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Common databases include:</h4>
          <p>PostgreSQL.</p>
          <p>MySQL.</p>
          <p>SQLite.</p>
          <p>Microsoft SQL Server.</p>
          <p>Oracle Database.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">16.1 What is database connectivity?</h3>
          <p>Database connectivity means establishing a connection from Python to a database so that the application can:</p>
          <p>Execute queries.</p>
          <p>Retrieve records.</p>
          <p>Insert new information.</p>
          <p>Update existing records.</p>
          <p>Delete records.</p>
          <p>Manage transactions.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">16.2 Connecting to SQLite</h3>
          <p>SQLite is useful for learning because it can store a database in a local file.</p>
          <p>It is included in Python's standard library.</p>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`import sqlite3 connection = sqlite3.connect("sales.db") cursor = connection.cursor() cursor.execute(""" CREATE TABLE IF NOT EXISTS orders ( order_id INTEGER PRIMARY KEY, customer TEXT, amount REAL ) """) connection.commit() connection.close()`}</code>
            </pre>
          </div>
          <p>This creates a local database file and an orders table.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">16.3 Inserting records</h3>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`import sqlite3 connection = sqlite3.connect("sales.db") cursor = connection.cursor() orders = [ (101, "Rahul", 2000), (102, "Priya", 3000), (103, "Amit", 1500) ] cursor.executemany( """ INSERT OR IGNORE INTO orders (order_id, customer, amount) VALUES (?, ?, ?) """, orders ) connection.commit() connection.close()`}</code>
            </pre>
          </div>
          <p>Using parameterized SQL keeps values separate from the SQL statement.</p>
          <p>This is important for preventing SQL injection.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">16.4 Reading records</h3>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`import sqlite3 connection = sqlite3.connect("sales.db") cursor = connection.cursor() cursor.execute(""" SELECT order_id, customer, amount FROM orders """) records = cursor.fetchall() for record in records: print(record) connection.close()`}</code>
            </pre>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">16.5 Updating records</h3>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`import sqlite3 connection = sqlite3.connect("sales.db") cursor = connection.cursor() cursor.execute( """ UPDATE orders SET amount = ? WHERE order_id = ? """, (2500, 101) ) connection.commit() connection.close()`}</code>
            </pre>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">16.6 Using transactions</h3>
          <p>A transaction groups related database operations into a unit of work.</p>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`import sqlite3 connection = sqlite3.connect("sales.db") try: cursor = connection.cursor() cursor.execute( """ UPDATE orders SET amount = ? WHERE order_id = ? """, (4000, 102) ) connection.commit() except sqlite3.DatabaseError: connection.rollback() raise finally: connection.close()`}</code>
            </pre>
          </div>
          <p>The transaction is committed only when the operation succeeds.</p>
          <p>If an error occurs, the application rolls back the transaction.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">16.7 SQLAlchemy</h3>
          <p>SQLAlchemy is a popular Python SQL toolkit and Object Relational Mapper (ORM).</p>
          <p>It provides a higher-level interface for database connections and SQL execution.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Install:</h4>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`python -m pip install sqlalchemy`}</code>
            </pre>
          </div>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Example using SQLite:</h4>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`from sqlalchemy import create_engine, text engine = create_engine("sqlite:///sales.db") with engine.connect() as connection: result = connection.execute( text("SELECT * FROM orders") ) for row in result: print(row)`}</code>
            </pre>
          </div>
          <p>The same general approach can be used with PostgreSQL by installing a suitable PostgreSQL driver and using a configured database URL.</p>
          <p>For example, a PostgreSQL connection URL follows this general pattern:</p>
          <p>postgresql+psycopg://USER:PASSWORD@HOST:5432/DATABASE</p>
          <p>Keep credentials outside your source code.</p>
          <p>Why use SQLAlchemy?</p>
          <p>Connection pooling.</p>
          <p>Database abstraction.</p>
          <p>Parameterized execution.</p>
          <p>Transaction management.</p>
          <p>ORM support.</p>
          <p>Integration with Python applications.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">16.8 Data loading architecture</h3>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">A typical database-loading pipeline looks like:</h4>
          <div className="my-4 p-4 rounded-xl bg-stone-50 border border-stone-200">
            <div className="text-xs font-bold uppercase tracking-wider text-stone-500 mb-2 font-mono">Architecture Flow</div>
            <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
              <span className="px-3 py-1.5 rounded-lg bg-white border border-stone-300 font-semibold text-stone-800 shadow-2xs">External API</span>
              <span className="text-orange-500 font-bold">&rarr;</span>
              <span className="px-3 py-1.5 rounded-lg bg-white border border-stone-300 font-semibold text-stone-800 shadow-2xs">Python Extraction</span>
              <span className="text-orange-500 font-bold">&rarr;</span>
              <span className="px-3 py-1.5 rounded-lg bg-white border border-stone-300 font-semibold text-stone-800 shadow-2xs">Data Validation</span>
              <span className="text-orange-500 font-bold">&rarr;</span>
              <span className="px-3 py-1.5 rounded-lg bg-white border border-stone-300 font-semibold text-stone-800 shadow-2xs">Transformation</span>
              <span className="text-orange-500 font-bold">&rarr;</span>
              <span className="px-3 py-1.5 rounded-lg bg-white border border-stone-300 font-semibold text-stone-800 shadow-2xs">SQLAlchemy</span>
              <span className="text-orange-500 font-bold">&rarr;</span>
              <span className="px-3 py-1.5 rounded-lg bg-white border border-stone-300 font-semibold text-stone-800 shadow-2xs">PostgreSQL</span>
            </div>
          </div>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Important database engineering practices</h4>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">When connecting to databases, understand:</h4>
          <p>Connection pooling.</p>
          <p>Transactions.</p>
          <p>Prepared statements.</p>
          <p>Parameterized queries.</p>
          <p>Bulk inserts.</p>
          <p>Batch sizes.</p>
          <p>Commit and rollback.</p>
          <p>Database connection timeouts.</p>
          <p>Credentials and secret management.</p>
          <p>For large datasets, avoid executing one database insert operation per record when an appropriate bulk or batch method is available.</p>
        </div>
      </section>
      {"/* SECTION 17: Data Manipulation Using Pandas and Polars */"}
      <section id="section-17" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 17
          </span>
          <span className="text-xs font-mono text-stone-500">Vectorized Engines</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          17. Data Manipulation Using Pandas and Polars
        </h2>
        <div className="space-y-4 text-stone-700 leading-relaxed text-sm sm:text-base">
          <p>Pandas and Polars are important Python tools for manipulating structured datasets.</p>
          <p>They provide DataFrame abstractions, allowing engineers to work with tabular data without manually processing every record.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">17.1 What is a DataFrame?</h3>
          <p>A DataFrame is a two-dimensional tabular data structure containing rows and columns.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Example:</h4>
          <p>order_id</p>
          <p>customer</p>
          <p>amount</p>
          <p>101</p>
          <p>Rahul</p>
          <p>2000</p>
          <p>102</p>
          <p>Priya</p>
          <p>3000</p>
          <p>103</p>
          <p>Amit</p>
          <p>1500</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">You can perform transformations such as:</h4>
          <p>Filtering.</p>
          <p>Sorting.</p>
          <p>Aggregation.</p>
          <p>Joining.</p>
          <p>Missing value handling.</p>
          <p>Type conversion.</p>
          <p>Grouping.</p>
          <p>File reading and writing.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">17.2 Pandas introduction</h3>
          <p>Pandas is a widely used Python library for data manipulation and analysis.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Install:</h4>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`python -m pip install pandas`}</code>
            </pre>
          </div>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Import:</h4>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`import pandas as pd`}</code>
            </pre>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">17.3 Creating a DataFrame</h3>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`import pandas as pd data = { "order_id": [101, 102, 103], "customer": ["Rahul", "Priya", "Amit"], "amount": [2000, 3000, 1500] } df = pd.DataFrame(data) print(df)`}</code>
            </pre>
          </div>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Output:</h4>
          <p>order_id customer amount 0 101 Rahul 2000 1 102 Priya 3000 2 103 Amit 1500</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">17.4 Reading CSV files</h3>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`import pandas as pd df = pd.read_csv("orders.csv") print(df.head())`}</code>
            </pre>
          </div>
          <p>head() displays the first five rows by default.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Other useful commands:</h4>
          <p>df.tail() df.shape df.columns df.dtypes df.info() df.describe()</p>
          <p>These help inspect incoming data before transformation.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">17.5 Selecting columns</h3>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`df["customer"]`}</code>
            </pre>
          </div>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Select multiple columns:</h4>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`df[["order_id", "amount"]]`}</code>
            </pre>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">17.6 Filtering records</h3>
          <p>high_value_orders = df[ df["amount"] &gt; 2000 ] print(high_value_orders)</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">17.7 Adding new columns</h3>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`df["tax"] = df["amount"] * 0.18 df["total_amount"] = ( df["amount"] + df["tax"] )`}</code>
            </pre>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">17.8 Handling missing values</h3>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Check missing data:</h4>
          <p>df.isnull().sum()</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Remove rows with missing values:</h4>
          <p>df.dropna()</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Fill missing values:</h4>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`df["amount"] = df["amount"].fillna(0)`}</code>
            </pre>
          </div>
          <div className="rounded-xl border border-orange-200 bg-orange-50/70 p-4 text-xs sm:text-sm text-orange-950 leading-relaxed my-4">
            Important: filling a missing value with zero is a business decision, not a universal cleaning rule.
          </div>
          <p>For example, a missing order amount should not automatically be treated as a zero-value order.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">17.9 Removing duplicates</h3>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`df = df.drop_duplicates( subset=["order_id"] )`}</code>
            </pre>
          </div>
          <p>This removes duplicate order identifiers.</p>
          <p>Before removing duplicates in a real pipeline, define what counts as a duplicate and what should happen when duplicate records contain conflicting values.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">17.10 Grouping and aggregation</h3>
          <p>revenue_by_customer = ( df.groupby("customer")["amount"] .sum() ) print(revenue_by_customer)</p>
          <p>This calculates total revenue for each customer.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">17.11 Joining datasets</h3>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Customer dataset:</h4>
          <p>customers = pd.DataFrame(&#123; "customer_id": [1, 2], "name": ["Rahul", "Priya"] &#125;)</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Order dataset:</h4>
          <p>orders = pd.DataFrame(&#123; "order_id": [101, 102], "customer_id": [1, 2], "amount": [2000, 3000] &#125;)</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Join:</h4>
          <p>result = pd.merge( orders, customers, on="customer_id", how="inner" ) print(result)</p>
          <p>This combines customer and order information using the shared identifier.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">17.12 Reading large files in chunks</h3>
          <p>Pandas supports chunked CSV processing.</p>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`import pandas as pd for chunk in pd.read_csv( "large_orders.csv", chunksize=10000 ): processed = chunk[ chunk["amount"] > 0 ] print(len(processed))`}</code>
            </pre>
          </div>
          <p>This avoids loading the entire file into one DataFrame.</p>
          <p>For aggregation across chunks, accumulate partial summaries rather than every complete chunk when possible.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">17.13 Polars introduction</h3>
          <p>Polars is a DataFrame library designed for efficient data processing.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">It offers:</h4>
          <p>Columnar data processing.</p>
          <p>Expression-based transformations.</p>
          <p>Parallel execution.</p>
          <p>Lazy query execution.</p>
          <p>CSV, Parquet, and other file integrations.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Install:</h4>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`python -m pip install polars`}</code>
            </pre>
          </div>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Import:</h4>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`import polars as pl`}</code>
            </pre>
          </div>
          <p>Creating a DataFrame</p>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`import polars as pl df = pl.DataFrame({ "order_id": [101, 102, 103], "customer": ["Rahul", "Priya", "Amit"], "amount": [2000, 3000, 1500] }) print(df)`}</code>
            </pre>
          </div>
          <p>Reading CSV</p>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`df = pl.read_csv("orders.csv") print(df.head())`}</code>
            </pre>
          </div>
          <p>Filtering</p>
          <p>result = df.filter( pl.col("amount") &gt; 2000 )</p>
          <p>Selecting columns</p>
          <p>result = df.select( ["order_id", "amount"] )</p>
          <p>Creating a new column</p>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`df = df.with_columns( ( pl.col("amount") * 0.18 ).alias("tax") )`}</code>
            </pre>
          </div>
          <p>Grouping and aggregation</p>
          <p>result = ( df.group_by("customer") .agg( pl.col("amount").sum().alias("total_revenue") ) )</p>
          <p>Lazy execution</p>
          <p>An important Polars capability is lazy execution.</p>
          <p>Instead of executing every operation immediately, the engine can construct a query plan and optimize it before collecting the results.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Example:</h4>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`import polars as pl result = ( pl.scan_csv("large_orders.csv") .filter(pl.col("amount") > 1000) .group_by("customer") .agg( pl.col("amount").sum().alias("revenue") ) .collect() )`}</code>
            </pre>
          </div>
          <p>scan_csv() creates a lazy scan.</p>
          <p>collect() triggers execution.</p>
          <p>This can enable optimizations such as projection and predicate pushdown, depending on the query and execution plan.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">17.14 Pandas vs Polars</h3>
          <p>Feature</p>
          <p>Pandas</p>
          <p>Polars</p>
          <p>Main abstraction</p>
          <p>DataFrame</p>
          <p>DataFrame and LazyFrame</p>
          <p>Language implementation</p>
          <p>Python API with compiled components</p>
          <p>Rust-based engine with Python API</p>
          <p>Execution model</p>
          <p>Primarily eager</p>
          <p>Eager and lazy</p>
          <p>Parallel processing</p>
          <p>Some operations use native implementations; behavior varies</p>
          <p>Parallel execution supported by engine</p>
          <p>Large CSV processing</p>
          <p>Supports chunks</p>
          <p>Supports lazy scans</p>
          <p>Ecosystem</p>
          <p>Very mature</p>
          <p>Growing ecosystem</p>
          <p>Best use</p>
          <p>Broad data analysis ecosystem</p>
          <p>Efficient expression-based transformations</p>
          <p>Neither library is automatically the correct choice for every dataset.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Choose based on:</h4>
          <p>Workload size.</p>
          <p>Memory constraints.</p>
          <p>Existing dependencies.</p>
          <p>Required features.</p>
          <p>Performance testing.</p>
          <p>Team familiarity.</p>
          <p>When should you use Spark instead?</p>
          <p>Pandas and Polars primarily process data within an individual machine's resources.</p>
          <p>When processing workloads require distributed execution across multiple machines, a distributed engine such as Apache Spark may be more appropriate.</p>
        </div>
      </section>
      {"/* SECTION 18: Unit Testing Using Pytest */"}
      <section id="section-18" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 18
          </span>
          <span className="text-xs font-mono text-stone-500">Automated QA</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          18. Unit Testing Using Pytest
        </h2>
        <div className="space-y-4 text-stone-700 leading-relaxed text-sm sm:text-base">
          <p>Writing Python code is only one part of Data Engineering.</p>
          <p>You must also verify that the code produces correct results.</p>
          <p>Imagine you have written a function that calculates total revenue. It works for one input, but produces incorrect results when it receives zero values, negative values, or missing records.</p>
          <p>Without testing, these problems may enter a production pipeline and affect business reports.</p>
          <p>This is why automated testing is essential.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">18.1 What is software testing?</h3>
          <p>Software testing is the process of verifying whether a program behaves as expected.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">In Data Engineering, testing can validate:</h4>
          <p>Data transformation logic.</p>
          <p>Record validation.</p>
          <p>API integrations.</p>
          <p>Database operations.</p>
          <p>File processing.</p>
          <p>Pipeline execution.</p>
          <p>Data quality rules.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">18.2 What is unit testing?</h3>
          <p>Unit testing verifies a small individual component, such as a function or method, independently.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Example:</h4>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`def calculate_total(price, quantity): return price * quantity`}</code>
            </pre>
          </div>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Expected results:</h4>
          <p>calculate_total(100, 2) == 200 calculate_total(500, 3) == 1500</p>
          <p>A unit test checks whether the function behaves correctly for expected and unexpected inputs.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">18.3 What is Pytest?</h3>
          <p>Pytest is a Python testing framework used to write and execute automated tests.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Install:</h4>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`python -m pip install pytest`}</code>
            </pre>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">18.4 Writing your first Pytest test</h3>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Project structure:</h4>
          <p>python_project/ │ ├── calculation.py │ └── tests/ └── test_calculation.py</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">calculation.py:</h4>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`def calculate_total(price, quantity): return price * quantity`}</code>
            </pre>
          </div>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">tests/test_calculation.py:</h4>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`from calculation import calculate_total def test_calculate_total(): result = calculate_total(100, 2) assert result == 200`}</code>
            </pre>
          </div>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Run:</h4>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`python -m pytest`}</code>
            </pre>
          </div>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Expected result:</h4>
          <p>1 passed</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">18.5 Understanding assert</h3>
          <p>The assert statement verifies whether a condition is true.</p>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`assert calculate_total(100, 2) == 200`}</code>
            </pre>
          </div>
          <p>If the expression is false, the test fails.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">18.6 Testing different inputs</h3>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`from calculation import calculate_total def test_small_order(): assert calculate_total(100, 2) == 200 def test_large_order(): assert calculate_total(1000, 5) == 5000 def test_zero_quantity(): assert calculate_total(500, 0) == 0`}</code>
            </pre>
          </div>
          <p>A good test suite covers more than just normal input.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">18.7 Testing exceptions</h3>
          <p>Suppose you want to reject negative prices.</p>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`def calculate_total(price, quantity): if price < 0: raise ValueError("Price cannot be negative") if quantity < 0: raise ValueError("Quantity cannot be negative") return price * quantity`}</code>
            </pre>
          </div>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Test:</h4>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`import pytest from calculation import calculate_total def test_negative_price(): with pytest.raises(ValueError): calculate_total(-100, 2) def test_negative_quantity(): with pytest.raises(ValueError): calculate_total(100, -2)`}</code>
            </pre>
          </div>
          <p>Pytest verifies that the expected exception is raised.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">18.8 Parameterized testing</h3>
          <p>When the same test needs to run with multiple inputs, use pytest.mark.parametrize.</p>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`import pytest from calculation import calculate_total @pytest.mark.parametrize( "price, quantity, expected", [ (100, 2, 200), (500, 3, 1500), (1000, 1, 1000), (0, 5, 0) ] ) def test_calculate_total( price, quantity, expected ): assert calculate_total( price, quantity ) == expected`}</code>
            </pre>
          </div>
          <p>This avoids repeating nearly identical test functions.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">18.9 Testing data transformations</h3>
          <p>Suppose a pipeline removes invalid records.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">transformation.py:</h4>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`def clean_orders(orders): return [ order for order in orders if ( order.get("order_id") is not None and order.get("amount", 0) > 0 ) ]`}</code>
            </pre>
          </div>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Test:</h4>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`from transformation import clean_orders def test_clean_orders(): orders = [ {"order_id": 1, "amount": 1000}, {"order_id": 2, "amount": -500}, {"order_id": None, "amount": 2000}, {"order_id": 3, "amount": 500} ] result = clean_orders(orders) assert len(result) == 2 assert result == [ {"order_id": 1, "amount": 1000}, {"order_id": 3, "amount": 500} ]`}</code>
            </pre>
          </div>
          <p>This tests a simple data-cleaning rule.</p>
          <p>For production systems, define how missing amounts, nonnumeric values, and invalid record structures should be handled before implementing the transformation.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">18.10 Testing categories in Data Engineering</h3>
          <p>Testing type</p>
          <p>What it verifies</p>
          <p>Unit testing</p>
          <p>Individual functions</p>
          <p>Integration testing</p>
          <p>Interactions between components</p>
          <p>Data quality testing</p>
          <p>Validity and correctness of datasets</p>
          <p>End-to-end testing</p>
          <p>Entire pipeline execution</p>
          <p>Regression testing</p>
          <p>Existing behavior after code changes</p>
          <p>Performance testing</p>
          <p>Processing time and resource usage</p>
          <p>Contract testing</p>
          <p>Compatibility between data producers and consumers</p>
          <p>Example: Pipeline testing strategy</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Consider this pipeline:</h4>
          <div className="my-4 p-4 rounded-xl bg-stone-50 border border-stone-200">
            <div className="text-xs font-bold uppercase tracking-wider text-stone-500 mb-2 font-mono">Architecture Flow</div>
            <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
              <span className="px-3 py-1.5 rounded-lg bg-white border border-stone-300 font-semibold text-stone-800 shadow-2xs">API</span>
              <span className="text-orange-500 font-bold">&rarr;</span>
              <span className="px-3 py-1.5 rounded-lg bg-white border border-stone-300 font-semibold text-stone-800 shadow-2xs">Extraction</span>
              <span className="text-orange-500 font-bold">&rarr;</span>
              <span className="px-3 py-1.5 rounded-lg bg-white border border-stone-300 font-semibold text-stone-800 shadow-2xs">Validation</span>
              <span className="text-orange-500 font-bold">&rarr;</span>
              <span className="px-3 py-1.5 rounded-lg bg-white border border-stone-300 font-semibold text-stone-800 shadow-2xs">Transformation</span>
              <span className="text-orange-500 font-bold">&rarr;</span>
              <span className="px-3 py-1.5 rounded-lg bg-white border border-stone-300 font-semibold text-stone-800 shadow-2xs">Database</span>
            </div>
          </div>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">You should test:</h4>
          <p>Whether the extraction function handles API responses.</p>
          <p>Whether missing fields are rejected.</p>
          <p>Whether transformation calculations are correct.</p>
          <p>Whether the database receives the expected records.</p>
          <p>Whether the complete pipeline works correctly.</p>
          <p>A pipeline is not production-ready simply because its individual functions work.</p>
        </div>
      </section>
      {"/* SECTION 19: Writing Production-Quality Python Code */"}
      <section id="section-19" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 19
          </span>
          <span className="text-xs font-mono text-stone-500">Production Standards</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          19. Writing Production-Quality Python Code
        </h2>
        <div className="space-y-4 text-stone-700 leading-relaxed text-sm sm:text-base">
          <p>Writing a script that works on your computer is different from building a reliable application that runs continuously in a business environment.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Production-quality Python code should be:</h4>
          <p>Readable.</p>
          <p>Maintainable.</p>
          <p>Testable.</p>
          <p>Reliable.</p>
          <p>Secure.</p>
          <p>Efficient.</p>
          <p>Observable.</p>
          <p>Reusable.</p>
          <p>Let's understand the engineering practices required to achieve this.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">19.1 Follow PEP 8</h3>
          <p>PEP 8 is the Python style guide.</p>
          <p>It provides recommendations for writing consistent Python code.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Example of poorly structured code:</h4>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`def calc(a,b): x=a*b return x`}</code>
            </pre>
          </div>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Improved code:</h4>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`def calculate_total(price, quantity): """Calculate the total order amount.""" total = price * quantity return total`}</code>
            </pre>
          </div>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Use:</h4>
          <p>Descriptive variable names.</p>
          <p>Consistent indentation.</p>
          <p>Meaningful function names.</p>
          <p>Appropriate line lengths.</p>
          <p>Clear comments.</p>
          <p>Docstrings for important functions.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">19.2 Type hints</h3>
          <p>Type hints make expected data structures and function behavior clearer.</p>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`def calculate_revenue( price: float, quantity: int ) -> float: return price * quantity`}</code>
            </pre>
          </div>
          <p>For more complex applications, Python's typing module offers types such as:</p>
          <p>Optional</p>
          <p>Union</p>
          <p>Any</p>
          <p>TypedDict</p>
          <p>Callable</p>
          <p>Iterator</p>
          <p>Iterable</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Example:</h4>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`from typing import Iterator def generate_orders() -> Iterator[dict]: for order_id in range(1, 4): yield { "order_id": order_id, "amount": order_id * 100 }`}</code>
            </pre>
          </div>
          <p>Type hints can be checked with tools such as mypy or Pyright.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">19.3 Separation of concerns</h3>
          <p>Each component should have a clear responsibility.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Bad architecture:</h4>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`def process_everything(): # Read files # Connect database # Call API # Clean records # Calculate revenue # Insert into database # Generate logs # Send alerts pass`}</code>
            </pre>
          </div>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Better architecture:</h4>
          <p>DataPipeline | +-- Extractor | +-- Validator | +-- Transformer | +-- Loader | +-- Logger</p>
          <p>Each component can be tested independently.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">19.4 Avoid hardcoded values</h3>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Bad example:</h4>
          <p>database_host = "production-db.company.com" password = "mypassword123"</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Better:</h4>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`import os database_host = os.getenv("DATABASE_HOST") database_password = os.getenv("DATABASE_PASSWORD")`}</code>
            </pre>
          </div>
          <p>Credentials should be handled using secure secret-management mechanisms.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">19.5 Idempotent operations</h3>
          <p>A reliable ingestion process should consider what happens when the same job runs more than once.</p>
          <p>Suppose the pipeline inserts 1,000 records into a database.</p>
          <p>It fails after inserting 700 records.</p>
          <p>The pipeline restarts.</p>
          <p>If the same records are inserted again without a duplicate-prevention strategy, the database may contain incorrect results.</p>
          <p>Idempotent designs make repeated processing safe.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Common strategies include:</h4>
          <p>Unique business keys.</p>
          <p>Database constraints.</p>
          <p>Upserts.</p>
          <p>Deterministic record identifiers.</p>
          <p>Transaction management.</p>
          <p>Processing checkpoints.</p>
          <p>Deduplication.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Example using SQLite:</h4>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`INSERT INTO orders ( order_id, customer, amount ) VALUES ( 101, 'Rahul', 2500 ) ON CONFLICT(order_id) DO UPDATE SET customer = excluded.customer, amount = excluded.amount;`}</code>
            </pre>
          </div>
          <p>This updates an existing record when the same order ID appears.</p>
          <p>The correct upsert behavior must follow the source system's update semantics. A retry should not accidentally overwrite newer information with stale information.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">19.6 Use transactions</h3>
          <p>Suppose your pipeline must update two related database tables.</p>
          <p>If the first update succeeds but the second fails, the database could become inconsistent.</p>
          <p>Transactions help maintain consistency.</p>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`try: connection.execute(update_customer) connection.execute(update_order) connection.commit() except Exception: connection.rollback() raise`}</code>
            </pre>
          </div>
          <p>In SQLAlchemy, transaction context managers can manage this pattern.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">19.7 Memory optimization</h3>
          <p>Avoid loading large datasets into memory unnecessarily.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Use:</h4>
          <p>Generators.</p>
          <p>Iterators.</p>
          <p>Chunked CSV processing.</p>
          <p>Streaming.</p>
          <p>Column selection.</p>
          <p>Suitable data types.</p>
          <p>Parquet.</p>
          <p>Efficient DataFrame operations.</p>
          <p>For very large distributed workloads, use an appropriate distributed processing framework instead of trying to solve every scale problem through Python memory optimization alone.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">19.8 Performance optimization</h3>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Important techniques include:</h4>
          <p>Avoid unnecessary loops: Use vectorized DataFrame operations when appropriate.</p>
          <p>Batch operations: Prefer bulk database writes over thousands of individual operations.</p>
          <p>Select required columns: Avoid reading unnecessary fields.</p>
          <p>Partition datasets: Organize large datasets around useful query dimensions.</p>
          <p>Profile code: Identify actual bottlenecks before optimizing.</p>
          <p>Reuse connections: Use connection pooling for suitable database workloads.</p>
          <p>Reduce data movement: Avoid repeatedly copying enormous datasets between memory structures.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">19.9 Security</h3>
          <p>Data Engineers frequently work with business-critical and sensitive information.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Important security practices include:</h4>
          <p>Protect database credentials.</p>
          <p>Use HTTPS for external API communication.</p>
          <p>Avoid logging secrets.</p>
          <p>Validate untrusted input.</p>
          <p>Use parameterized SQL.</p>
          <p>Follow least-privilege access.</p>
          <p>Encrypt sensitive data where appropriate.</p>
          <p>Protect personal information.</p>
          <p>Keep dependencies maintained.</p>
          <p>Store sensitive configuration outside source code.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">19.10 Code review and version control</h3>
          <p>Production code should be managed using version control.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Git allows engineers to:</h4>
          <p>Track changes.</p>
          <p>Collaborate.</p>
          <p>Review code.</p>
          <p>Maintain different branches.</p>
          <p>Revert problematic changes.</p>
          <p>Manage releases.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">A typical development workflow:</h4>
          <div className="my-4 p-4 rounded-xl bg-stone-50 border border-stone-200">
            <div className="text-xs font-bold uppercase tracking-wider text-stone-500 mb-2 font-mono">Architecture Flow</div>
            <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
              <span className="px-3 py-1.5 rounded-lg bg-white border border-stone-300 font-semibold text-stone-800 shadow-2xs">Create feature branch</span>
              <span className="text-orange-500 font-bold">&rarr;</span>
              <span className="px-3 py-1.5 rounded-lg bg-white border border-stone-300 font-semibold text-stone-800 shadow-2xs">Write Python code</span>
              <span className="text-orange-500 font-bold">&rarr;</span>
              <span className="px-3 py-1.5 rounded-lg bg-white border border-stone-300 font-semibold text-stone-800 shadow-2xs">Add automated tests</span>
              <span className="text-orange-500 font-bold">&rarr;</span>
              <span className="px-3 py-1.5 rounded-lg bg-white border border-stone-300 font-semibold text-stone-800 shadow-2xs">Run linting and type checks</span>
              <span className="text-orange-500 font-bold">&rarr;</span>
              <span className="px-3 py-1.5 rounded-lg bg-white border border-stone-300 font-semibold text-stone-800 shadow-2xs">Create pull request</span>
              <span className="text-orange-500 font-bold">&rarr;</span>
              <span className="px-3 py-1.5 rounded-lg bg-white border border-stone-300 font-semibold text-stone-800 shadow-2xs">Code review</span>
              <span className="text-orange-500 font-bold">&rarr;</span>
              <span className="px-3 py-1.5 rounded-lg bg-white border border-stone-300 font-semibold text-stone-800 shadow-2xs">Merge and deploy</span>
            </div>
          </div>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Useful development tools include:</h4>
          <p>Tool</p>
          <p>Purpose</p>
          <p>Git</p>
          <p>Version control</p>
          <p>Ruff</p>
          <p>Linting and code formatting</p>
          <p>Black</p>
          <p>Code formatting</p>
          <p>Pytest</p>
          <p>Testing</p>
          <p>mypy</p>
          <p>Static type checking</p>
          <p>pre-commit</p>
          <p>Automated checks before commits</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">19.11 Production readiness checklist</h3>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Before releasing a data pipeline, review:</h4>
          <p>Inputs are validated.</p>
          <p>Exceptions are handled appropriately.</p>
          <p>Logging is implemented.</p>
          <p>Configuration is separated from code.</p>
          <p>Credentials are protected.</p>
          <p>Database queries are parameterized.</p>
          <p>Operations are safe to retry.</p>
          <p>Large data is processed efficiently.</p>
          <p>Automated tests are passing.</p>
          <p>Pipeline failures can be detected.</p>
          <p>Data quality checks are implemented.</p>
          <p>Documentation is available.</p>
          <p>Code is version controlled.</p>
        </div>
      </section>
      {"/* SECTION 20: Complete Practical Project — Build a Python Data Engineering Pipeline */"}
      <section id="section-20" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 20
          </span>
          <span className="text-xs font-mono text-stone-500">Capstone Project</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          20. Complete Practical Project — Build a Python Data Engineering Pipeline
        </h2>
        <div className="space-y-4 text-stone-700 leading-relaxed text-sm sm:text-base">
          <p>Major hands-on project</p>
          <p>Intermediate</p>
          <p>Now combine the concepts from this module.</p>
          <p>We will build a small e-commerce data processing application using Python.</p>
          <p>The objective is to simulate a real-world batch ingestion pipeline.</p>
          <p>Project scenario</p>
          <p>Imagine an e-commerce company receives order information through CSV files.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">The company wants an automated Python system that:</h4>
          <p>Reads incoming orders.</p>
          <p>Validates the records.</p>
          <p>Rejects invalid transactions.</p>
          <p>Removes duplicate order IDs.</p>
          <p>Calculates total order values.</p>
          <p>Generates revenue reports.</p>
          <p>Saves clean records.</p>
          <p>Stores the final output in SQLite.</p>
          <p>Logs execution details.</p>
          <p>Runs automated tests.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">20.1 Project architecture</h3>
          <div className="my-3 p-3 rounded-xl bg-orange-50/60 border border-orange-200/80 flex items-center justify-between gap-3 text-xs">
            <div className="font-semibold text-stone-800 flex items-center gap-2"><span>&#128279;</span> <span>A Production-Ready ETL Pipeline Pattern (Using Car Inventory as an Example) | by Nigadepriyanka | Feb, 2026 | Medium</span></div>
            <a href="https://images.openai.com/static-rsc-4/Qxs-vv28LXvXxdJwgS6bUdemilLnBbNlmu6akDA3BQsNDUthvHEfQgaqX7FtErDH0AQhuAKtTpYeUc7DOUIOSi114f02PyXYENMt2qM3nEhTXcxq3aTT9mMokxwpHOXyCafxKOMIwsx4-MSnw9wlc32yxeHze7KXAYQIj2zKwP4?purpose=inline" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 font-bold inline-flex items-center gap-1 cursor-pointer">View Resource &rarr;</a>
          </div>
          <div className="my-3 p-3 rounded-xl bg-orange-50/60 border border-orange-200/80 flex items-center justify-between gap-3 text-xs">
            <div className="font-semibold text-stone-800 flex items-center gap-2"><span>&#128279;</span> <span>medium.com</span></div>
            <a href="https://medium.com/%40nigadepriyanka/a-production-ready-etl-pipeline-pattern-using-car-inventory-as-an-example-76e910b824ee?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 font-bold inline-flex items-center gap-1 cursor-pointer">View Resource &rarr;</a>
          </div>
          <div className="my-4 p-4 rounded-xl bg-stone-50 border border-stone-200">
            <div className="text-xs font-bold uppercase tracking-wider text-stone-500 mb-2 font-mono">Architecture Flow</div>
            <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
              <span className="px-3 py-1.5 rounded-lg bg-white border border-stone-300 font-semibold text-stone-800 shadow-2xs">orders.csv</span>
              <span className="text-orange-500 font-bold">&rarr;</span>
              <span className="px-3 py-1.5 rounded-lg bg-white border border-stone-300 font-semibold text-stone-800 shadow-2xs">Python Extractor</span>
              <span className="text-orange-500 font-bold">&rarr;</span>
              <span className="px-3 py-1.5 rounded-lg bg-white border border-stone-300 font-semibold text-stone-800 shadow-2xs">Data Validation | +-----+-----+ |</span>
              <span className="text-orange-500 font-bold">&rarr;</span>
              <span className="px-3 py-1.5 rounded-lg bg-white border border-stone-300 font-semibold text-stone-800 shadow-2xs">v Valid Data Rejected Data |</span>
              <span className="text-orange-500 font-bold">&rarr;</span>
              <span className="px-3 py-1.5 rounded-lg bg-white border border-stone-300 font-semibold text-stone-800 shadow-2xs">v Transformation Error Report</span>
              <span className="text-orange-500 font-bold">&rarr;</span>
              <span className="px-3 py-1.5 rounded-lg bg-white border border-stone-300 font-semibold text-stone-800 shadow-2xs">Revenue Calculation</span>
              <span className="text-orange-500 font-bold">&rarr;</span>
              <span className="px-3 py-1.5 rounded-lg bg-white border border-stone-300 font-semibold text-stone-800 shadow-2xs">SQLite DB</span>
              <span className="text-orange-500 font-bold">&rarr;</span>
              <span className="px-3 py-1.5 rounded-lg bg-white border border-stone-300 font-semibold text-stone-800 shadow-2xs">Revenue Report</span>
            </div>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">20.2 Project directory structure</h3>
          <p>python-data-pipeline/ │ ├── data/ │ └── orders.csv │ ├── output/ │ ├── logs/ │ ├── src/ │ ├── __init__.py │ ├── extractor.py │ ├── validator.py │ ├── transformer.py │ ├── loader.py │ └── pipeline.py │ ├── tests/ │ ├── test_validator.py │ └── test_transformer.py │ ├── config.py ├── main.py └── requirements.txt</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">20.3 Create the sample dataset</h3>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Create data/orders.csv:</h4>
          <p>order_id,customer_id,product,quantity,price,status 101,1,Laptop,1,50000,SUCCESS 102,2,Mobile,2,20000,SUCCESS 103,3,Keyboard,3,1000,SUCCESS 104,1,Mouse,2,500,FAILED 105,2,Monitor,1,12000,SUCCESS 106,3,Headphones,2,1500,SUCCESS</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">20.4 Configure the project</h3>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Create config.py:</h4>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`from pathlib import Path BASE_DIR = Path(__file__).resolve().parent INPUT_FILE = BASE_DIR / "data" / "orders.csv" OUTPUT_DIR = BASE_DIR / "output" LOG_DIR = BASE_DIR / "logs" DATABASE_FILE = BASE_DIR / "sales.db"`}</code>
            </pre>
          </div>
          <p>Centralized configuration makes file locations easier to manage.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">20.5 Build the extractor</h3>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Create src/extractor.py:</h4>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`import csv import logging logger = logging.getLogger(__name__) def extract_orders(file_path): logger.info("Starting order extraction") records = [] try: with open( file_path, "r", encoding="utf-8", newline="" ) as file: reader = csv.DictReader(file) required_columns = { "order_id", "customer_id", "product", "quantity", "price", "status" } if reader.fieldnames is None: raise ValueError("CSV header is missing") missing = required_columns - set( reader.fieldnames ) if missing: raise ValueError( f"Missing columns: {sorted(missing)}" ) for row in reader: records.append(row) except OSError: logger.exception("Failed to read input file") raise logger.info( "Extracted %s rows", len(records) ) return records`}</code>
            </pre>
          </div>
          <p>This component is responsible only for extracting records.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">20.6 Build the validator</h3>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Create src/validator.py:</h4>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`import logging logger = logging.getLogger(__name__) def validate_orders(records): valid_records = [] rejected_records = [] seen_order_ids = set() allowed_statuses = { "SUCCESS", "FAILED", "PENDING" } for row_number, record in enumerate( records, start=2 ): try: order_id = int(record["order_id"]) customer_id = int(record["customer_id"]) quantity = int(record["quantity"]) price = float(record["price"]) product = record["product"].strip() status = record["status"].strip().upper() if order_id <= 0: raise ValueError("Invalid order ID") if customer_id <= 0: raise ValueError("Invalid customer ID") if quantity <= 0: raise ValueError("Invalid quantity") if price < 0: raise ValueError("Negative price") if not product: raise ValueError("Product is missing") if status not in allowed_statuses: raise ValueError("Invalid status") if order_id in seen_order_ids: raise ValueError("Duplicate order ID") seen_order_ids.add(order_id) valid_records.append({ "order_id": order_id, "customer_id": customer_id, "product": product, "quantity": quantity, "price": price, "status": status }) except (KeyError, TypeError, ValueError) as error: rejected_records.append({ "row_number": row_number, "record": record, "reason": str(error) }) logger.info( "Valid records: %s | Rejected records: %s", len(valid_records), len(rejected_records) ) return valid_records, rejected_records`}</code>
            </pre>
          </div>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Notice how the validation component:</h4>
          <p>Converts values to suitable types.</p>
          <p>Checks business rules.</p>
          <p>Rejects duplicates.</p>
          <p>Keeps a record of rejected rows.</p>
          <p>For a production implementation, duplicate detection may need to happen across previously processed files as well, not just within the current batch.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">20.7 Build the transformer</h3>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Create src/transformer.py:</h4>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`import logging logger = logging.getLogger(__name__) def transform_orders(records): transformed_records = [] for record in records: if record["status"] != "SUCCESS": continue total_amount = ( record["quantity"] * record["price"] ) transformed_records.append({ **record, "total_amount": total_amount }) logger.info( "Transformed %s successful orders", len(transformed_records) ) return transformed_records`}</code>
            </pre>
          </div>
          <p>This component calculates the total value and excludes unsuccessful payments from the successful sales dataset.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">20.8 Build the database loader</h3>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Create src/loader.py:</h4>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`import sqlite3 import logging logger = logging.getLogger(__name__) def load_orders(records, database_file): logger.info("Starting database loading") with sqlite3.connect(database_file) as connection: connection.execute(""" CREATE TABLE IF NOT EXISTS orders ( order_id INTEGER PRIMARY KEY, customer_id INTEGER NOT NULL, product TEXT NOT NULL, quantity INTEGER NOT NULL, price REAL NOT NULL, status TEXT NOT NULL, total_amount REAL NOT NULL ) """) connection.executemany( """ INSERT INTO orders ( order_id, customer_id, product, quantity, price, status, total_amount ) VALUES (?, ?, ?, ?, ?, ?, ?) ON CONFLICT(order_id) DO UPDATE SET customer_id = excluded.customer_id, product = excluded.product, quantity = excluded.quantity, price = excluded.price, status = excluded.status, total_amount = excluded.total_amount """, [ ( record["order_id"], record["customer_id"], record["product"], record["quantity"], record["price"], record["status"], record["total_amount"] ) for record in records ] ) logger.info( "Loaded %s records", len(records) )`}</code>
            </pre>
          </div>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">The loader uses:</h4>
          <p>A database connection.</p>
          <p>Table creation.</p>
          <p>Parameterized SQL.</p>
          <p>Batch insertion.</p>
          <p>Upsert behavior for repeated order IDs.</p>
          <p>In this demonstration, each batch is loaded into one SQLite transaction through the connection context manager.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">20.9 Build the pipeline orchestrator</h3>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Create src/pipeline.py:</h4>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`import csv import logging from src.extractor import extract_orders from src.validator import validate_orders from src.transformer import transform_orders from src.loader import load_orders logger = logging.getLogger(__name__) def save_rejected_records(records, output_file): with open( output_file, "w", encoding="utf-8", newline="" ) as file: writer = csv.DictWriter( file, fieldnames=[ "row_number", "reason", "record" ] ) writer.writeheader() for item in records: writer.writerow({ "row_number": item["row_number"], "reason": item["reason"], "record": str(item["record"]) }) def run_pipeline( input_file, database_file, output_directory ): logger.info("Pipeline execution started") raw_records = extract_orders(input_file) valid_records, rejected_records = ( validate_orders(raw_records) ) transformed_records = transform_orders( valid_records ) load_orders( transformed_records, database_file ) output_directory.mkdir( parents=True, exist_ok=True ) rejected_file = ( output_directory / "rejected_orders.csv" ) save_rejected_records( rejected_records, rejected_file ) logger.info("Pipeline execution completed") return { "extracted": len(raw_records), "valid": len(valid_records), "rejected": len(rejected_records), "loaded": len(transformed_records) }`}</code>
            </pre>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">20.10 Create the application entry point</h3>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Create main.py:</h4>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`import logging from config import ( INPUT_FILE, OUTPUT_DIR, DATABASE_FILE, LOG_DIR ) from src.pipeline import run_pipeline def main(): LOG_DIR.mkdir( parents=True, exist_ok=True ) logging.basicConfig( filename=LOG_DIR / "pipeline.log", level=logging.INFO, format=( "%(asctime)s | " "%(levelname)s | " "%(name)s | " "%(message)s" ) ) logger = logging.getLogger(__name__) try: result = run_pipeline( INPUT_FILE, DATABASE_FILE, OUTPUT_DIR ) print("Pipeline completed") print(result) except Exception: logger.exception("Pipeline failed") raise if __name__ == "__main__": main()`}</code>
            </pre>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">20.11 Execute the project</h3>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Activate your virtual environment and run:</h4>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`python main.py`}</code>
            </pre>
          </div>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Expected processing summary:</h4>
          <p>Pipeline completed &#123; 'extracted': 6, 'valid': 6, 'rejected': 0, 'loaded': 5 &#125;</p>
          <p>Why are there six extracted records but only five loaded records?</p>
          <p>Because one valid record has payment status FAILED, and the transformation stage retains only successful orders.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">The resulting successful orders are:</h4>
          <p>Order ID</p>
          <p>Product</p>
          <p>Total amount</p>
          <p>101</p>
          <p>Laptop</p>
          <p>₹50,000</p>
          <p>102</p>
          <p>Mobile</p>
          <p>₹40,000</p>
          <p>103</p>
          <p>Keyboard</p>
          <p>₹3,000</p>
          <p>105</p>
          <p>Monitor</p>
          <p>₹12,000</p>
          <p>106</p>
          <p>Headphones</p>
          <p>₹3,000</p>
          <p>Total</p>
          <p>₹1,08,000</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">The project creates:</h4>
          <p>python-data-pipeline/ │ ├── sales.db │ ├── output/ │ └── rejected_orders.csv │ └── logs/ └── pipeline.log</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Important production considerations</h4>
          <p>This is a learning implementation, not a complete enterprise pipeline. A production version should additionally consider cross-run deduplication, source versioning, transactional error recovery, concurrent ingestion, stronger schema validation, secure database configuration, and monitoring.</p>
        </div>
      </section>
      {"/* SECTION 21: Advanced Engineering Practices to Explore */"}
      <section id="section-21" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 21
          </span>
          <span className="text-xs font-mono text-stone-500">Advanced Patterns</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          21. Advanced Engineering Practices to Explore
        </h2>
        <div className="space-y-4 text-stone-700 leading-relaxed text-sm sm:text-base">
          <p>Once you understand the foundations, there are additional Python concepts that become important in larger data engineering projects.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">21.1 Context managers</h3>
          <p>Context managers manage resources such as files, connections, and locks.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Example:</h4>
          <p>with open("orders.txt", "r", encoding="utf-8") as file: content = file.read()</p>
          <p>The with statement manages the resource lifecycle.</p>
          <p>Custom context managers can be implemented using __enter__() and __exit__() or the contextlib module.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">21.2 Decorators</h3>
          <p>A decorator modifies or extends a function's behavior without changing its main implementation.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">For example, decorators can be used for:</h4>
          <p>Logging execution.</p>
          <p>Measuring processing time.</p>
          <p>Authentication.</p>
          <p>Retry behavior.</p>
          <p>Caching.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Example:</h4>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`import time def measure_time(function): def wrapper(*args, **kwargs): start = time.perf_counter() result = function(*args, **kwargs) elapsed = time.perf_counter() - start print( f"Execution time: {elapsed:.4f} seconds" ) return result return wrapper @measure_time def process_data(): total = sum(range(1_000_000)) return total process_data()`}</code>
            </pre>
          </div>
          <p>This measures the execution time of the decorated function.</p>
          <p>In reusable production decorators, also preserve function metadata with functools.wraps and ensure timing information is recorded through logging where appropriate.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">21.3 Functional programming</h3>
          <p>Python supports functional programming techniques.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Important concepts:</h4>
          <p>map()</p>
          <p>filter()</p>
          <p>lambda</p>
          <p>reduce()</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Example:</h4>
          <p>amounts = [100, 200, 300, 400] taxed_amounts = list( map( lambda amount: amount * 1.18, amounts ) ) print(taxed_amounts)</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Filtering:</h4>
          <p>amounts = [100, 500, -20, 700, 0] valid = list( filter( lambda amount: amount &gt; 0, amounts ) ) print(valid)</p>
          <p>These methods can express transformations concisely, although readable comprehensions are often preferable.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">21.4 Dataclasses</h3>
          <p>Dataclasses help define classes intended primarily to store structured information.</p>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`from dataclasses import dataclass @dataclass class Order: order_id: int customer_id: int amount: float order = Order( order_id=101, customer_id=25, amount=2500 ) print(order)`}</code>
            </pre>
          </div>
          <p>Dataclasses automatically generate useful methods such as initialization and representation.</p>
          <p>They are useful for configuration objects and typed records.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">21.5 Working with timestamps</h3>
          <p>Data pipelines often process information from different time zones and sources.</p>
          <p>Python's datetime module is essential.</p>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`from datetime import datetime, timezone current_time = datetime.now(timezone.utc) print(current_time)`}</code>
            </pre>
          </div>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Parse a timestamp:</h4>
          <p>timestamp = "2026-11-09T10:30:00" parsed = datetime.fromisoformat(timestamp) print(parsed)</p>
          <p>For production pipelines, use timezone-aware timestamps consistently and distinguish event time from ingestion time.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">21.6 Performance measurement</h3>
          <p>Do not optimize code based only on assumptions.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Python provides tools such as:</h4>
          <p>timeit</p>
          <p>cProfile</p>
          <p>tracemalloc</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Example:</h4>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`import time start = time.perf_counter() total = sum(range(1_000_000)) end = time.perf_counter() print(f"Elapsed: {end - start:.4f} seconds")`}</code>
            </pre>
          </div>
          <p>Measure performance before and after applying optimizations.</p>
        </div>
      </section>
      {"/* SECTION 22: Practical Assignments and Independent Exercises */"}
      <section id="section-22" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 22
          </span>
          <span className="text-xs font-mono text-stone-500">Hands-on Assignments</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          22. Practical Assignments and Independent Exercises
        </h2>
        <div className="space-y-4 text-stone-700 leading-relaxed text-sm sm:text-base">
          <p>These assignments are designed to move you from understanding Python syntax to building actual data engineering applications.</p>
          <p>Hands-on practice</p>
          <p>Assignment 1 — Build a CSV Data Cleaner</p>
          <p>Scenario: A company receives customer records from different departments.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Your input file contains:</h4>
          <p>customer_id,name,email,city,age 101,Rahul,rahul@gmail.com,Pune,22 102,Priya,priya@gmail.com,Mumbai,25 103,Amit,,Delhi,24 104,Neha,neha@gmail.com,pune,23 101,Rahul,rahul@gmail.com,Pune,22</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Your tasks:</h4>
          <p>Read the CSV file.</p>
          <p>Identify missing email addresses.</p>
          <p>Identify duplicate customer IDs.</p>
          <p>Standardize city names.</p>
          <p>Validate age values.</p>
          <p>Separate valid and rejected records.</p>
          <p>Generate two output CSV files.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Expected output:</h4>
          <p>clean_customers.csv rejected_customers.csv</p>
          <p>Assignment 2 — Build an API Data Extractor</p>
          <p>Scenario: You need to retrieve information from a public API.</p>
          <p>Use JSONPlaceholder, a public API for learning and testing.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Endpoint:</h4>
          <p>https://jsonplaceholder.typicode.com/users</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Your tasks:</h4>
          <p>Send an HTTP GET request using Requests.</p>
          <p>Extract user information.</p>
          <p>Handle HTTP errors.</p>
          <p>Validate required fields.</p>
          <p>Save user data as JSON.</p>
          <p>Convert the JSON data into CSV.</p>
          <p>Add logging.</p>
          <p>Handle missing or invalid fields.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Expected output:</h4>
          <p>users.json users.csv api_extraction.log</p>
          <p>Assignment 3 — Database Ingestion System</p>
          <p>Build a Python application that reads order information from CSV and loads it into PostgreSQL.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Requirements:</h4>
          <p>Create a database.</p>
          <p>Create an orders table.</p>
          <p>Connect using Python.</p>
          <p>Insert records in batches.</p>
          <p>Validate data before insertion.</p>
          <p>Use parameterized queries.</p>
          <p>Implement transactions.</p>
          <p>Prevent duplicate orders.</p>
          <p>Generate a revenue summary using SQL.</p>
          <p>SQLite is acceptable as a starting point, but implement PostgreSQL as the advanced version.</p>
          <p>Assignment 4 — Large Dataset Processing</p>
          <p>Create a synthetic dataset containing one million order records.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Compare three methods:</h4>
          <p>Loading the complete CSV into memory.</p>
          <p>Reading the CSV in chunks using Pandas.</p>
          <p>Processing records using Python generators.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Measure:</h4>
          <p>Execution time.</p>
          <p>Peak memory consumption.</p>
          <p>Total records processed.</p>
          <p>Total revenue calculated.</p>
          <p>Explain which approach is suitable for different workloads.</p>
          <p>Assignment 5 — OOP Data Pipeline</p>
          <p>Create a reusable pipeline using classes.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Required components:</h4>
          <p>DataExtractor CSVExtractor JSONExtractor DataValidator DataTransformer DatabaseLoader DataPipeline</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Requirements:</h4>
          <p>Use inheritance where appropriate.</p>
          <p>Use abstraction for common interfaces.</p>
          <p>Implement meaningful exceptions.</p>
          <p>Add logging.</p>
          <p>Include type hints.</p>
          <p>Write Pytest tests.</p>
          <p>Assignment 6 — Automated Testing</p>
          <p>Create a test suite for a customer data pipeline.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Write tests for:</h4>
          <p>Valid customer records.</p>
          <p>Missing customer IDs.</p>
          <p>Invalid email formats.</p>
          <p>Duplicate customer records.</p>
          <p>Invalid data types.</p>
          <p>Empty input files.</p>
          <p>Database insertion.</p>
          <p>Failed extraction.</p>
          <p>Include both successful and unsuccessful test cases.</p>
          <p>Assignment 7 — Mini Production Project</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Build a complete data ingestion system with the following structure:</h4>
          <div className="my-4 p-4 rounded-xl bg-stone-50 border border-stone-200">
            <div className="text-xs font-bold uppercase tracking-wider text-stone-500 mb-2 font-mono">Architecture Flow</div>
            <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
              <span className="px-3 py-1.5 rounded-lg bg-white border border-stone-300 font-semibold text-stone-800 shadow-2xs">External API</span>
              <span className="text-orange-500 font-bold">&rarr;</span>
              <span className="px-3 py-1.5 rounded-lg bg-white border border-stone-300 font-semibold text-stone-800 shadow-2xs">Python Requests</span>
              <span className="text-orange-500 font-bold">&rarr;</span>
              <span className="px-3 py-1.5 rounded-lg bg-white border border-stone-300 font-semibold text-stone-800 shadow-2xs">Raw JSON Data</span>
              <span className="text-orange-500 font-bold">&rarr;</span>
              <span className="px-3 py-1.5 rounded-lg bg-white border border-stone-300 font-semibold text-stone-800 shadow-2xs">Validation</span>
              <span className="text-orange-500 font-bold">&rarr;</span>
              <span className="px-3 py-1.5 rounded-lg bg-white border border-stone-300 font-semibold text-stone-800 shadow-2xs">Transformation</span>
              <span className="text-orange-500 font-bold">&rarr;</span>
              <span className="px-3 py-1.5 rounded-lg bg-white border border-stone-300 font-semibold text-stone-800 shadow-2xs">Pandas/Polars</span>
              <span className="text-orange-500 font-bold">&rarr;</span>
              <span className="px-3 py-1.5 rounded-lg bg-white border border-stone-300 font-semibold text-stone-800 shadow-2xs">PostgreSQL</span>
              <span className="text-orange-500 font-bold">&rarr;</span>
              <span className="px-3 py-1.5 rounded-lg bg-white border border-stone-300 font-semibold text-stone-800 shadow-2xs">Revenue Reports</span>
            </div>
          </div>
          <p>Your project must include logging, environment configuration, tests, error handling, and documentation.</p>
        </div>
      </section>
      {"/* SECTION 23: Module Assessment — Test Your Python Knowledge */"}
      <section id="section-23" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 23
          </span>
          <span className="text-xs font-mono text-stone-500">Knowledge Assessment</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          23. Module Assessment — Test Your Python Knowledge
        </h2>
        <div className="space-y-4 text-stone-700 leading-relaxed text-sm sm:text-base">
          <p>The following questions test your understanding of the programming concepts introduced in this module.</p>
          <p>Module 2 knowledge check</p>
          <p>0/15 answered</p>
          <p>1. Which Python data structure stores unique elements?</p>
          <p>List</p>
          <p>Tuple</p>
          <p>Set</p>
          <p>String</p>
          <p>2. What does yield do inside a Python function?</p>
          <p>Ends the program</p>
          <p>Produces a value and suspends generator execution</p>
          <p>Creates a database connection</p>
          <p>Deletes an object</p>
          <p>3. Which method is called when a new class instance is initialized?</p>
          <p>__start__()</p>
          <p>__main__()</p>
          <p>__init__()</p>
          <p>__create__()</p>
          <p>4. What is the primary purpose of exception handling?</p>
          <p>Increase file size</p>
          <p>Handle runtime errors and exceptional conditions</p>
          <p>Automatically clean every dataset</p>
          <p>Create variables</p>
          <p>5. Which built-in module is used to read and write JSON?</p>
          <p>csv</p>
          <p>json</p>
          <p>re</p>
          <p>math</p>
          <p>6. Which technique is suitable for processing a very large CSV without loading everything into memory?</p>
          <p>Using readlines() for the entire file</p>
          <p>Converting the entire file to a list</p>
          <p>Reading the file in chunks</p>
          <p>Printing every record</p>
          <p>7. Which library is commonly used for HTTP requests in Python?</p>
          <p>Requests</p>
          <p>Pytest</p>
          <p>SQLite</p>
          <p>Regex</p>
          <p>8. What does a virtual environment provide?</p>
          <p>A new physical computer</p>
          <p>Isolation of project dependencies</p>
          <p>Automatic cloud deployment</p>
          <p>A database backup</p>
          <p>9. What is the correct tool for automated Python unit testing in this module?</p>
          <p>Airflow</p>
          <p>Kafka</p>
          <p>Pytest</p>
          <p>Parquet</p>
          <p>10. What does df.groupby() commonly do in Pandas?</p>
          <p>Deletes a DataFrame</p>
          <p>Groups rows to support aggregation</p>
          <p>Creates a virtual environment</p>
          <p>Connects to an API</p>
          <p>11. Which feature of Polars allows a query to be planned before execution?</p>
          <p>Lazy execution</p>
          <p>Inheritance</p>
          <p>Exception chaining</p>
          <p>File locking</p>
          <p>12. Why should SQL queries use parameters for external values?</p>
          <p>To change Python syntax</p>
          <p>To reduce SQL injection risk and separate values from query code</p>
          <p>To disable transactions</p>
          <p>To increase CSV file size</p>
          <p>13. Which Python feature is used to record application events at different severity levels?</p>
          <p>print only</p>
          <p>logging</p>
          <p>range</p>
          <p>enumerate</p>
          <p>14. What does idempotency mean in data pipeline design?</p>
          <p>Every job must run exactly once</p>
          <p>Repeated execution should not create unintended additional effects</p>
          <p>All records must be deleted</p>
          <p>Every dataset must be a list</p>
          <p>15. Which module provides Python's built-in CSV reader and writer?</p>
          <p>xml</p>
          <p>csv</p>
          <p>typing</p>
          <p>datetime</p>
          <p>Submit assessment</p>
        </div>
      </section>
      {"/* SECTION 24: Data Engineering Interview Questions */"}
      <section id="section-24" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 24
          </span>
          <span className="text-xs font-mono text-stone-500">Interview Mastery</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          24. Data Engineering Interview Questions
        </h2>
        <div className="space-y-4 text-stone-700 leading-relaxed text-sm sm:text-base">
          <p>These questions are useful for internships, entry-level Data Engineering positions, and technical interviews.</p>
          <p>Python fundamentals</p>
          <p>What is Python, and why is it used in Data Engineering?</p>
          <p>Explain dynamic typing and strong typing.</p>
          <p>What is the difference between mutable and immutable objects?</p>
          <p>Explain lists, tuples, sets, and dictionaries.</p>
          <p>What is the difference between == and is?</p>
          <p>What is the difference between append() and extend()?</p>
          <p>What is the difference between break and continue?</p>
          <p>What is the difference between positional and keyword arguments?</p>
          <p>What is the purpose of *args and **kwargs?</p>
          <p>What are Python decorators?</p>
          <p>Advanced Python</p>
          <p>What are iterators and generators?</p>
          <p>What is the difference between yield and return?</p>
          <p>Explain list comprehensions.</p>
          <p>How do generators help process large datasets?</p>
          <p>What is the difference between shallow copy and deep copy?</p>
          <p>Explain object-oriented programming.</p>
          <p>What are inheritance, encapsulation, polymorphism, and abstraction?</p>
          <p>How does Python handle exceptions?</p>
          <p>What is the purpose of a context manager?</p>
          <p>What is the Global Interpreter Lock (GIL)?</p>
          <p>File and data processing</p>
          <p>How do you read a large CSV file efficiently?</p>
          <p>Compare CSV, JSON, and XML.</p>
          <p>How do you handle missing values in Python?</p>
          <p>What is regular expression pattern matching?</p>
          <p>How do you process a large file without loading it completely into memory?</p>
          <p>How can you identify duplicate records?</p>
          <p>How would you validate a JSON dataset against an expected schema?</p>
          <p>What is the difference between an iterator and an iterable?</p>
          <p>APIs and databases</p>
          <p>What is a REST API?</p>
          <p>How do you send an HTTP GET request using Python?</p>
          <p>What is API pagination?</p>
          <p>How do you handle HTTP 429 responses?</p>
          <p>What is the difference between GET and POST?</p>
          <p>How do you connect Python with PostgreSQL?</p>
          <p>What is SQLAlchemy?</p>
          <p>Why are parameterized database queries important?</p>
          <p>What is connection pooling?</p>
          <p>How do you make database ingestion idempotent?</p>
          <p>Pandas, Polars, and testing</p>
          <p>What is a DataFrame?</p>
          <p>What is the difference between Pandas and Polars?</p>
          <p>What is groupby() in Pandas?</p>
          <p>How do you merge two DataFrames?</p>
          <p>What is lazy execution in Polars?</p>
          <p>How do you process large CSV files in Pandas?</p>
          <p>What is Pytest?</p>
          <p>What is the difference between unit and integration testing?</p>
          <p>What is parameterized testing?</p>
          <p>How do you test a function that should raise an exception?</p>
          <p>Production and architecture</p>
          <p>Why is logging important in production data pipelines?</p>
          <p>What is a virtual environment?</p>
          <p>How do you manage Python dependencies?</p>
          <p>How do you protect API keys and database credentials?</p>
          <p>What is retry logic?</p>
          <p>Explain exponential backoff.</p>
          <p>What is idempotency?</p>
          <p>How do you optimize Python data processing?</p>
          <p>How do you debug a pipeline that has suddenly become slow?</p>
          <p>What happens when a pipeline fails halfway through?</p>
          <p>How would you design a reusable Python ETL framework?</p>
          <p>How would you process 100 million records using Python-based data engineering tools?</p>
        </div>
      </section>
      {"/* SECTION 25: Recommended Learning Resources */"}
      <section id="section-25" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 25
          </span>
          <span className="text-xs font-mono text-stone-500">Curated Resources</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          25. Recommended Learning Resources
        </h2>
        <div className="space-y-4 text-stone-700 leading-relaxed text-sm sm:text-base">
          <p>Study these resources alongside the practical assignments.</p>
          <div className="my-3 p-3 rounded-xl bg-orange-50/60 border border-orange-200/80 flex items-center justify-between gap-3 text-xs">
            <div className="font-semibold text-stone-800 flex items-center gap-2"><span>&#128279;</span> <span>Download the Python logo in PNG y SVG | LogosDown</span></div>
            <a href="https://images.openai.com/static-rsc-4/4O4w2AQWGAsmr1aTaF29dtT0ouX4IofywzcxWPAaHmB-sJFcjFHpKN3UVkOgR8QmZJcRGOoqVMn_K9yHZe-3llTbgEPKS04-tDtpAIMDhev0ruPj-hhopw50hVHPX7sFESCz_jt_z0gSHIuwbjgMEJI10NNAmcjl3kn7U9_txQY?purpose=inline" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 font-bold inline-flex items-center gap-1 cursor-pointer">View Resource &rarr;</a>
          </div>
          <p>Python Official Documentation</p>
          <p>Core Python syntax, standard library, iterators, generators, and exceptions.[Python documentation](https://docs.python.org/3/?utm_source=chatgpt.com)</p>
          <div className="my-3 p-3 rounded-xl bg-orange-50/60 border border-orange-200/80 flex items-center justify-between gap-3 text-xs">
            <div className="font-semibold text-stone-800 flex items-center gap-2"><span>&#128279;</span> <span>Search: Pandas logo Logo PNG Vectors Free Download</span></div>
            <a href="https://images.openai.com/static-rsc-4/rnSVXh3C-BnarYB0uY5Pxw04dtD7FMou5CtDQgIVRXEjcBxjmV5MSvxXU6C09GHYb3FGH1pdQoCoSfmNbkC0dnsDsxIRkfG9Rx9_yGStUFhIDNkMVZSREqMAFqonuvKHyP6kzmxvExycX4_6bMjailJzO0m3KZr7usO2QHlxuUQ?purpose=inline" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 font-bold inline-flex items-center gap-1 cursor-pointer">View Resource &rarr;</a>
          </div>
          <p>Pandas Documentation</p>
          <p>DataFrame manipulation, cleaning, joining, grouping, and file processing.[Pandas documentation](https://pandas.pydata.org/docs/?utm_source=chatgpt.com)</p>
          <div className="my-3 p-3 rounded-xl bg-orange-50/60 border border-orange-200/80 flex items-center justify-between gap-3 text-xs">
            <div className="font-semibold text-stone-800 flex items-center gap-2"><span>&#128279;</span> <span>Polars — DataFrames for the new era</span></div>
            <a href="https://images.openai.com/static-rsc-4/SkxQnncsR-HV9E9aYoSqfy086Y7naO7HjUU2-1jk5RJlgG17yP3KWDDcXrTU1uXA5uJd0e2FWurnY6CyMgDnk7tuiKFCf-bqAEyxzLPI5oCHn0j5zi6h0CEyqUdZLbs5i527tnhjNVnzrqndN83mKME3l3hfDXXeYN2EVHJxGzc?purpose=inline" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 font-bold inline-flex items-center gap-1 cursor-pointer">View Resource &rarr;</a>
          </div>
          <p>Polars Documentation</p>
          <p>Expressions, lazy execution, DataFrames, and efficient file processing.[Polars documentation](https://docs.pola.rs/?utm_source=chatgpt.com)</p>
          <div className="my-3 p-3 rounded-xl bg-orange-50/60 border border-orange-200/80 flex items-center justify-between gap-3 text-xs">
            <div className="font-semibold text-stone-800 flex items-center gap-2"><span>&#128279;</span> <span>pytest | Automation Panda</span></div>
            <a href="https://images.openai.com/static-rsc-4/oUWieunGcLN-p0nTRjVD0Z76Y3GJLsv14IDOXH7NMeL4k7XIT7eDWWghnMG4e193f8xfH6_tkWYUAlm1aSJjhFPVb8jyv4yh9mNcWTv_8XGTR-yr-FYBVuIHJFhRa6w8RgZSQBXfP3iSygDOc0hXYwALpyFgUc6rz0F7SzNME-g?purpose=inline" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 font-bold inline-flex items-center gap-1 cursor-pointer">View Resource &rarr;</a>
          </div>
          <p>Pytest Documentation</p>
          <p>Unit testing, fixtures, parameterized tests, and test organization.[Pytest documentation](https://docs.pytest.org/?utm_source=chatgpt.com)</p>
          <div className="my-3 p-3 rounded-xl bg-orange-50/60 border border-orange-200/80 flex items-center justify-between gap-3 text-xs">
            <div className="font-semibold text-stone-800 flex items-center gap-2"><span>&#128279;</span> <span>Пишем обёртку над SQLAlchemy Сore / Хабр</span></div>
            <a href="https://images.openai.com/static-rsc-4/hLrpLa-52gHNOcnRQ4SyAS4DH-pZK3OxK7YU_5JKUL5bibb6rf_T8Lz4-SoQxXileWVaaif0gPAY0qE7q4nmpVcpuMnNYLXCbeGqA_V5kGOFXO8UFQDl65WMMs2v_prhMwBDUhm2Qe0N2XoXlsJLa8eXpJA_VSOXyriSd-vqiw4?purpose=inline" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 font-bold inline-flex items-center gap-1 cursor-pointer">View Resource &rarr;</a>
          </div>
          <p>SQLAlchemy Documentation</p>
          <p>Database connections, transactions, SQL execution, and ORM concepts.[SQLAlchemy documentation](https://docs.sqlalchemy.org/?utm_source=chatgpt.com)</p>
          <div className="my-3 p-3 rounded-xl bg-orange-50/60 border border-orange-200/80 flex items-center justify-between gap-3 text-xs">
            <div className="font-semibold text-stone-800 flex items-center gap-2"><span>&#128279;</span> <span>Home - learn-pip-trends</span></div>
            <a href="https://images.openai.com/static-rsc-4/oAkDCiWwxVUBTf-58HNuoly1f3vICHTu2xZJy03J23ak-P8f6wwLTyhgc-JoU1pUe_SuaJOg6nWOGQrnDDQZFXsfeFywME_qKCPow1R7mk8jBtKMLxnpw2e1dqtFLGrTqpFfbhmqKbstvgs4O31ZWnHCGSEw5_gRmiLhQfTCbYw?purpose=inline" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 font-bold inline-flex items-center gap-1 cursor-pointer">View Resource &rarr;</a>
          </div>
          <p>Requests Documentation</p>
          <p>HTTP requests, authentication, response handling, and API integrations.[Requests documentation](https://requests.readthedocs.io/?utm_source=chatgpt.com)</p>
          <p>Recommended books</p>
          <p>Python Crash Course — Eric Matthes. Good for building programming foundations.</p>
          <p>Effective Python — Brett Slatkin. Useful for writing more maintainable Python applications.</p>
          <p>Fluent Python — Luciano Ramalho. Deeper study of Python's data model, iterators, generators, and language features.</p>
          <p>Python for Data Analysis — Wes McKinney. Practical data manipulation using Pandas.</p>
        </div>
      </section>
      {"/* SECTION 26: Module 2 — Final Revision and Key Takeaways */"}
      <section id="section-26" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 26
          </span>
          <span className="text-xs font-mono text-stone-500">Module Revision</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          26. Module 2 — Final Revision and Key Takeaways
        </h2>
        <div className="space-y-4 text-stone-700 leading-relaxed text-sm sm:text-base">
          <p>Complete module revision</p>
          <ol className="list-decimal list-inside space-y-1.5 text-stone-700 text-sm sm:text-base my-3 pl-2">
            <li value="1"><strong className="text-stone-900">Python fundamentals</strong></li>
          </ol>
          <p>Syntax, variables, data types, operators, conditional statements, and loops.</p>
          <ol className="list-decimal list-inside space-y-1.5 text-stone-700 text-sm sm:text-base my-3 pl-2">
            <li value="2"><strong className="text-stone-900">Functions and modular programming</strong></li>
          </ol>
          <p>Reusable functions, parameters, return values, type hints, and project organization.</p>
          <ol className="list-decimal list-inside space-y-1.5 text-stone-700 text-sm sm:text-base my-3 pl-2">
            <li value="3"><strong className="text-stone-900">Python collections</strong></li>
          </ol>
          <p>Lists, dictionaries, tuples, and sets for managing different data structures.</p>
          <ol className="list-decimal list-inside space-y-1.5 text-stone-700 text-sm sm:text-base my-3 pl-2">
            <li value="4"><strong className="text-stone-900">Comprehensions and generators</strong></li>
          </ol>
          <p>Efficient transformations, lazy execution, and memory-aware processing.</p>
          <ol className="list-decimal list-inside space-y-1.5 text-stone-700 text-sm sm:text-base my-3 pl-2">
            <li value="5"><strong className="text-stone-900">Object-oriented programming</strong></li>
          </ol>
          <p>Classes, objects, inheritance, encapsulation, polymorphism, and abstraction.</p>
          <ol className="list-decimal list-inside space-y-1.5 text-stone-700 text-sm sm:text-base my-3 pl-2">
            <li value="6"><strong className="text-stone-900">Exception handling</strong></li>
          </ol>
          <p>try-except-finally, custom exceptions, retry logic, and failure management.</p>
          <ol className="list-decimal list-inside space-y-1.5 text-stone-700 text-sm sm:text-base my-3 pl-2">
            <li value="7"><strong className="text-stone-900">File processing</strong></li>
          </ol>
          <p>File handling, CSV, JSON, XML, and file path management.</p>
          <ol className="list-decimal list-inside space-y-1.5 text-stone-700 text-sm sm:text-base my-3 pl-2">
            <li value="8"><strong className="text-stone-900">Iterators and large datasets</strong></li>
          </ol>
          <p>Iteration protocols, streaming, generators, and chunk processing.</p>
          <ol className="list-decimal list-inside space-y-1.5 text-stone-700 text-sm sm:text-base my-3 pl-2">
            <li value="9"><strong className="text-stone-900">Regular expressions</strong></li>
          </ol>
          <p>Pattern matching, text extraction, and data validation.</p>
          <ol className="list-decimal list-inside space-y-1.5 text-stone-700 text-sm sm:text-base my-3 pl-2">
            <li value="10"><strong className="text-stone-900">Environment management</strong></li>
          </ol>
          <p>Virtual environments, pip, dependencies, and project configuration.</p>
          <ol className="list-decimal list-inside space-y-1.5 text-stone-700 text-sm sm:text-base my-3 pl-2">
            <li value="11"><strong className="text-stone-900">Logging and configuration</strong></li>
          </ol>
          <p>Application monitoring, logging levels, environment variables, and secret management.</p>
          <ol className="list-decimal list-inside space-y-1.5 text-stone-700 text-sm sm:text-base my-3 pl-2">
            <li value="12"><strong className="text-stone-900">API integration</strong></li>
          </ol>
          <p>HTTP methods, authentication, pagination, status codes, and rate limiting.</p>
          <ol className="list-decimal list-inside space-y-1.5 text-stone-700 text-sm sm:text-base my-3 pl-2">
            <li value="13"><strong className="text-stone-900">Database connectivity</strong></li>
          </ol>
          <p>SQLite, PostgreSQL concepts, SQLAlchemy, parameterized queries, and transactions.</p>
          <ol className="list-decimal list-inside space-y-1.5 text-stone-700 text-sm sm:text-base my-3 pl-2">
            <li value="14"><strong className="text-stone-900">Data manipulation</strong></li>
          </ol>
          <p>Pandas, Polars, DataFrames, aggregations, filtering, and joins.</p>
          <ol className="list-decimal list-inside space-y-1.5 text-stone-700 text-sm sm:text-base my-3 pl-2">
            <li value="15"><strong className="text-stone-900">Automated testing</strong></li>
          </ol>
          <p>Pytest, unit testing, integration testing, and parameterized testing.</p>
          <ol className="list-decimal list-inside space-y-1.5 text-stone-700 text-sm sm:text-base my-3 pl-2">
            <li value="16"><strong className="text-stone-900">Production engineering</strong></li>
          </ol>
          <p>Code quality, security, idempotency, performance, maintainability, and reliability.</p>
          <p>Your practical completion targets</p>
          <p>Before considering this module complete, aim to achieve these milestones:</p>
          <p>Write Python programs without relying on copied code.</p>
          <p>Build reusable functions and classes.</p>
          <p>Read and process CSV, JSON, and XML files.</p>
          <p>Process large files using generators and chunks.</p>
          <p>Extract information from a REST API.</p>
          <p>Connect Python to a database.</p>
          <p>Perform transformations using Pandas and Polars.</p>
          <p>Create automated tests using Pytest.</p>
          <p>Build the complete e-commerce data pipeline.</p>
          <p>Document and upload your project to GitHub.</p>
          <p>What you should be able to build after Module 2</p>
          <div className="my-3 p-3 rounded-xl bg-orange-50/60 border border-orange-200/80 flex items-center justify-between gap-3 text-xs">
            <div className="font-semibold text-stone-800 flex items-center gap-2"><span>&#128279;</span> <span>Data Analytics for Business: KPI Dashboards &amp; BI | Groenewold IT</span></div>
            <a href="https://images.openai.com/static-rsc-4/1Ewyp0Gkocd5AYar-Ud6jXzKeOolMCLoIL05kunqxfof2DdboirBunAQuD8B7lM01SyjPJ1A3Qx-F3LRoejDDI4bJpQCWQwkcgUQFoHg657vpMJhcKUSU3sEzMtczLP5xF-21-PyinWSZiOLnshwpXQpvOByQFtr5DoQ6GgdfBw?purpose=inline" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 font-bold inline-flex items-center gap-1 cursor-pointer">View Resource &rarr;</a>
          </div>
          <p>Python ETL applications</p>
          <p>Automated extraction, processing, and loading.</p>
          <div className="my-3 p-3 rounded-xl bg-orange-50/60 border border-orange-200/80 flex items-center justify-between gap-3 text-xs">
            <div className="font-semibold text-stone-800 flex items-center gap-2"><span>&#128279;</span> <span>APIs | BU Spark Tech Resources</span></div>
            <a href="https://images.openai.com/static-rsc-4/RX0Sa6ka9CU5MeLtfGu8wgk0fldRJomBjetj6EKNTv3y5-09XvW1-J2RFayowwsVe5SoXzrtgpKU-xa0I4WevONpaSifrpim3BEECe5vUFA_nxOAqMfvHYtLmCyOfcN7H4NeEbgVDUToRuWIc_OpLMiAe069WKlP8oo2XoW-KAQ?purpose=inline" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 font-bold inline-flex items-center gap-1 cursor-pointer">View Resource &rarr;</a>
          </div>
          <p>API data extractors</p>
          <p>Collect information from external systems.</p>
          <div className="my-3 p-3 rounded-xl bg-orange-50/60 border border-orange-200/80 flex items-center justify-between gap-3 text-xs">
            <div className="font-semibold text-stone-800 flex items-center gap-2"><span>&#128279;</span> <span>7 Easy Steps To Switch From Pandas to Lightning Fast Polars And Never Return | by Bex T. | TDS Archive | Medium</span></div>
            <a href="https://images.openai.com/static-rsc-4/FzvDXvSGkbeUsoXpIgEIWTfEUULC1bs5MpLWW6-dZQ12YJw26su3KkeYN0PK8-QPAdW_NXL52fU1kH2QNiwI3HPscseueFgOVvxYRpn01N7hvs5rvPWwT_dk-zMlIhfhDQGt0h2Wx4eGlcz5hI_5H-wI7qyDLtDwztMfrF-9YmM?purpose=inline" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 font-bold inline-flex items-center gap-1 cursor-pointer">View Resource &rarr;</a>
          </div>
          <p>Data processing systems</p>
          <p>Clean, validate, and transform datasets.</p>
          <div className="my-3 p-3 rounded-xl bg-orange-50/60 border border-orange-200/80 flex items-center justify-between gap-3 text-xs">
            <div className="font-semibold text-stone-800 flex items-center gap-2"><span>&#128279;</span> <span>Prompts para Análisis de Datos: Python, SQL y Excel con IA | Aprender21</span></div>
            <a href="https://images.openai.com/static-rsc-4/Rp4QkyQsT1MPy5vtfUeKF7Zk3JMV1vTqo5g8jaMrAOOKm7UT_G80YU66iuZSVictz0hh6LyOx7x_eNyJ8u7sk8oilI52xLAPoZua9iBIkQGt5S5SvsACQIqS0a3IIAdKsop45FxwdBuBk4GKSeJJwx61bTvOrTYNWLap9D7nndA?purpose=inline" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 font-bold inline-flex items-center gap-1 cursor-pointer">View Resource &rarr;</a>
          </div>
          <p>Database applications</p>
          <p>Load records and automate database operations.</p>
          <p>One important engineering lesson: Python is a foundation, not the entire Data Engineering ecosystem. You will eventually combine Python with SQL, distributed processing, workflow orchestration, cloud storage, streaming systems, and data warehouse technologies.</p>
          <p>The next natural module is SQL and Database Engineering for Data Engineers, where we will study database internals, advanced SQL, query optimization, indexing, transactions, and analytical data modeling.</p>
          <p>That will connect the Python programming knowledge from this module with the database systems introduced in Module 1.</p>
          <p>&lt;/USER_REQUEST&gt;</p>
          <p>&lt;ADDITIONAL_METADATA&gt;</p>
          <p>The current local time is: 2026-11-09T13:25:58+05:30.</p>
          <p>&lt;/ADDITIONAL_METADATA&gt;</p>
        </div>
      </section>
    </div>
  );
}