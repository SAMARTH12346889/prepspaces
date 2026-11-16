import React from "react";
import { Coffee, Layers, CheckCircle2, ArrowRight, ExternalLink, Terminal, Code, Cpu, ShieldCheck } from "lucide-react";

export default function JavaIntroSections() {
  return (
    <div className="space-y-10">
      {/* SECTION 0: Module 1: Complete Curriculum Specification */}
      <section id="overview" className="bg-slate-900/80 rounded-2xl border border-slate-800 p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-500/15 text-orange-300 text-xs font-bold uppercase tracking-wider font-mono">
            Course Roadmap · Overview
          </span>
          <span className="text-xs font-mono text-slate-400">Section 0</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          Module 1: Complete Curriculum Specification
        </h2>
        <div className="space-y-4 text-slate-300 leading-relaxed text-sm sm:text-base">
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>Module overview</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Programming is the process of designing instructions that enable a computer to solve problems and perform tasks. Java is a widely used, general-purpose programming language that provides a structured approach to developing applications.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            In this module, students begin with computational thinking and programming fundamentals before exploring Java's architecture, development environment, syntax, data types, operators, input/output, and debugging.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            The goal is to understand the foundations of Java deeply enough to write, compile, execute, test, and troubleshoot simple programs independently.
          </p>
          <h4 className="text-base sm:text-lg font-bold text-white mt-4 mb-2 flex items-center gap-2">
            <span>Learning objectives</span>
          </h4>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            By the end of this module, students should be able to:
          </p>
          <ol className="list-decimal pl-5 space-y-2 text-slate-300 text-sm sm:text-base my-3 leading-relaxed">
            <li>Explain what computer science and programming are.</li>
            <li>Apply computational thinking to break problems into manageable steps.</li>
            <li>Distinguish between machine language, assembly language, and high-level programming languages.</li>
            <li>Explain Java's characteristics and its role in software development.</li>
            <li>Understand the relationship between the JDK, JRE, and JVM.</li>
            <li>Install and configure a Java development environment.</li>
            <li>Understand the structure of a Java source file.</li>
            <li>Explain how Java code is compiled and executed.</li>
            <li>Write and understand the <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">main()</code> method.</li>
            <li>Declare variables and constants using appropriate data types.</li>
            <li>Work with Java's eight primitive data types.</li>
            <li>Apply type conversion and type casting correctly.</li>
            <li>Use arithmetic, relational, logical, assignment, and other operators.</li>
            <li>Accept user input using the <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">Scanner</code> class.</li>
            <li>Produce formatted output using Java's output methods.</li>
            <li>Follow basic Java coding conventions.</li>
            <li>Identify syntax, compile-time, runtime, and logical errors.</li>
            <li>Debug simple programs systematically.</li>
          </ol>
        </div>
      </section>

      {/* SECTION 1: 1. Introduction to Computer Science and Computational Thinking */}
      <section id="section-1" className="bg-slate-900/80 rounded-2xl border border-slate-800 p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-500/15 text-orange-300 text-xs font-bold uppercase tracking-wider font-mono">
            Part 1 · Computer Science Foundations
          </span>
          <span className="text-xs font-mono text-slate-400">Section 1</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          1. Introduction to Computer Science and Computational Thinking
        </h2>
        <div className="space-y-4 text-slate-300 leading-relaxed text-sm sm:text-base">
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>1.1 What is computer science?</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Computer science is the study of computation, algorithms, data, programming languages, computer systems, and the principles that enable computers to solve problems.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            It is much broader than simply learning how to write code.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Computer science explores questions such as:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-slate-300 text-sm sm:text-base my-3 leading-relaxed">
            <li>How does a computer represent information?</li>
            <li>How can a problem be solved efficiently?</li>
            <li>How do programming languages communicate instructions to a computer?</li>
            <li>How is information stored, retrieved, and processed?</li>
            <li>How do operating systems manage computer resources?</li>
            <li>How do networks enable computers to communicate?</li>
            <li>How can software be designed to handle millions of users?</li>
          </ul>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Computer science combines mathematical reasoning, problem-solving, engineering principles, and programming.
          </p>
          <h4 className="text-base sm:text-lg font-bold text-white mt-4 mb-2 flex items-center gap-2">
            <span>Major areas of computer science</span>
          </h4>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-white">1. Programming and software engineering</strong>
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            The design, development, testing, maintenance, and improvement of software applications.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Examples:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-slate-300 text-sm sm:text-base my-3 leading-relaxed">
            <li>Web applications</li>
            <li>Mobile applications</li>
            <li>Banking software</li>
            <li>Enterprise systems</li>
            <li>Desktop applications</li>
          </ul>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-white">2. Algorithms and data structures</strong>
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            The study of methods for solving computational problems and organizing data efficiently.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Examples:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-slate-300 text-sm sm:text-base my-3 leading-relaxed">
            <li>Sorting algorithms</li>
            <li>Searching algorithms</li>
            <li>Trees and graphs</li>
            <li>Hash tables</li>
            <li>Stacks and queues</li>
          </ul>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-white">3. Computer architecture</strong>
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            The study of how computer hardware components work together.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Examples:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-slate-300 text-sm sm:text-base my-3 leading-relaxed">
            <li>CPU</li>
            <li>Memory</li>
            <li>Registers</li>
            <li>Storage</li>
            <li>Input/output devices</li>
          </ul>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-white">4. Operating systems</strong>
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            The software responsible for managing hardware resources and providing services to applications.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Examples:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-slate-300 text-sm sm:text-base my-3 leading-relaxed">
            <li>Windows</li>
            <li>Linux</li>
            <li>macOS</li>
            <li>Android</li>
          </ul>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-white">5. Database systems</strong>
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            The study of storing, organizing, retrieving, and managing data.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Examples:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-slate-300 text-sm sm:text-base my-3 leading-relaxed">
            <li>Relational databases</li>
            <li>SQL</li>
            <li>Database transactions</li>
            <li>Indexing</li>
          </ul>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-white">6. Artificial intelligence and machine learning</strong>
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            The study of systems that perform tasks involving prediction, reasoning, learning, or decision-making.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Examples:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-slate-300 text-sm sm:text-base my-3 leading-relaxed">
            <li>Recommendation systems</li>
            <li>Language models</li>
            <li>Image recognition</li>
            <li>Intelligent assistants</li>
          </ul>
          <h4 className="text-base sm:text-lg font-bold text-white mt-4 mb-2 flex items-center gap-2">
            <span>Why is programming important?</span>
          </h4>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Computers cannot independently understand human intentions. They need instructions expressed in a language and structure they can process.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Programming allows humans to translate a problem into instructions that a computer can execute.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            For example, consider an online shopping application.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            The application must:
          </p>
          <ol className="list-decimal pl-5 space-y-2 text-slate-300 text-sm sm:text-base my-3 leading-relaxed">
            <li>Accept product selections.</li>
            <li>Calculate the total price.</li>
            <li>Apply discounts.</li>
            <li>Calculate taxes.</li>
            <li>Process payment.</li>
            <li>Update the order status.</li>
            <li>Display confirmation.</li>
          </ol>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            A programmer converts each requirement into an organized set of instructions.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Java is one language that can be used to implement these instructions.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>1.2 What is programming?</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Programming is the process of designing, writing, testing, debugging, and maintaining instructions that tell a computer how to perform a task.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            A program is a sequence of instructions written in a programming language.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Consider the following everyday problem:
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            A student wants to calculate the average of three examination marks.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            The mathematical solution is:
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Average = (Mark 1 + Mark 2 + Mark 3) / 3
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            The programming solution translates this mathematical operation into executable instructions.
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public class Average {
    public static void main(String[] args) {

        int mark1 = 80;
        int mark2 = 90;
        int mark3 = 85;

        double average = (mark1 + mark2 + mark3) / 3.0;

        System.out.println("Average: " + average);
    }
}`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Output:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Average: 85.0`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            The program performs four essential activities:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-slate-300 text-sm sm:text-base my-3 leading-relaxed">
            <li>Stores three marks.</li>
            <li>Adds the marks.</li>
            <li>Divides their sum by three.</li>
            <li>Displays the result.</li>
          </ul>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            This is a simple example of converting a human problem into a computer program.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>1.3 What is computational thinking?</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Computational thinking is a problem-solving approach in which a complex problem is expressed in a form that can be systematically solved using logical steps.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            It is useful even when the final solution is not implemented on a computer.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Computational thinking generally involves four major concepts:
          </p>
          <h4 className="text-base sm:text-lg font-bold text-white mt-4 mb-2 flex items-center gap-2">
            <span>A. Decomposition</span>
          </h4>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Decomposition means breaking a complex problem into smaller, manageable problems.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Suppose we want to develop a student examination management system.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            The complete system may appear complicated. We can divide it into smaller components:
          </p>
          <ol className="list-decimal pl-5 space-y-2 text-slate-300 text-sm sm:text-base my-3 leading-relaxed">
            <li>Student registration</li>
            <li>Subject management</li>
            <li>Marks entry</li>
            <li>Grade calculation</li>
            <li>Result generation</li>
            <li>Report printing</li>
          </ol>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Each component can be designed and developed independently.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-white">Why is decomposition useful?</strong>
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            It reduces complexity, improves organization, and makes testing easier.
          </p>
          <h4 className="text-base sm:text-lg font-bold text-white mt-4 mb-2 flex items-center gap-2">
            <span>B. Pattern recognition</span>
          </h4>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Pattern recognition means identifying similarities or repeated structures within problems.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Consider calculating the average marks of different students.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            The same mathematical operation is repeated:
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Average = Total Marks / Number of Subjects
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Instead of designing a separate calculation method for each student, we recognize the common pattern and implement reusable logic.
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public class PatternExample {

    public static void main(String[] args) {

        int student1Total = 420;
        int student2Total = 450;
        int student3Total = 390;

        int subjects = 5;

        double average1 = student1Total / 5.0;
        double average2 = student2Total / 5.0;
        double average3 = student3Total / 5.0;

        System.out.println(average1);
        System.out.println(average2);
        System.out.println(average3);
    }
}`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Later, we can improve this solution using methods, loops, and arrays.
          </p>
          <h4 className="text-base sm:text-lg font-bold text-white mt-4 mb-2 flex items-center gap-2">
            <span>C. Abstraction</span>
          </h4>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Abstraction means focusing on the essential information while ignoring unnecessary details.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Imagine using an ATM.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            The user sees options such as:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-slate-300 text-sm sm:text-base my-3 leading-relaxed">
            <li>Withdraw money</li>
            <li>Check balance</li>
            <li>Deposit money</li>
          </ul>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            The user does not need to understand every internal banking operation, database query, or network communication that takes place.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            The interface hides unnecessary implementation details.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            In programming, abstraction helps us concentrate on what a component should do rather than every internal detail of how it works.
          </p>
          <h4 className="text-base sm:text-lg font-bold text-white mt-4 mb-2 flex items-center gap-2">
            <span>D. Algorithm design</span>
          </h4>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            An algorithm is a finite sequence of well-defined steps designed to solve a specific problem.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Consider an algorithm for calculating the area of a rectangle.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-white">Input:</strong>
          </p>
          <ul className="list-disc pl-5 space-y-2 text-slate-300 text-sm sm:text-base my-3 leading-relaxed">
            <li>Length</li>
            <li>Width</li>
          </ul>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-white">Processing:</strong>
          </p>
          <ul className="list-disc pl-5 space-y-2 text-slate-300 text-sm sm:text-base my-3 leading-relaxed">
            <li>Multiply length by width.</li>
          </ul>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-white">Output:</strong>
          </p>
          <ul className="list-disc pl-5 space-y-2 text-slate-300 text-sm sm:text-base my-3 leading-relaxed">
            <li>Display the area.</li>
          </ul>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Pseudocode:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`START

READ length
READ width

area = length * width

DISPLAY area

STOP`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Java implementation:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public class RectangleArea {

    public static void main(String[] args) {

        double length = 10;
        double width = 5;

        double area = length * width;

        System.out.println("Area: " + area);
    }
}`}</code>
            </pre>
          </div>
          <h4 className="text-base sm:text-lg font-bold text-white mt-4 mb-2 flex items-center gap-2">
            <span>Algorithm characteristics</span>
          </h4>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            A well-designed algorithm should generally have:
          </p>
          <ol className="list-decimal pl-5 space-y-2 text-slate-300 text-sm sm:text-base my-3 leading-relaxed">
            <li><strong className="font-semibold text-white">Input:</strong> Accepts zero or more inputs.</li>
            <li><strong className="font-semibold text-white">Output:</strong> Produces at least one result.</li>
            <li><strong className="font-semibold text-white">Definiteness:</strong> Each instruction must be clear and unambiguous.</li>
            <li><strong className="font-semibold text-white">Finiteness:</strong> It must terminate after a finite number of steps.</li>
            <li><strong className="font-semibold text-white">Effectiveness:</strong> Its operations must be sufficiently basic to be carried out.</li>
          </ol>
          <h4 className="text-base sm:text-lg font-bold text-white mt-4 mb-2 flex items-center gap-2">
            <span>Worked problem: Find the largest of two numbers</span>
          </h4>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Problem:
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Given two integers, determine which one is larger.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-white">Step 1 — Understand the problem</strong>
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            We need two inputs and one comparison.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-white">Step 2 — Identify the inputs</strong>
          </p>
          <ul className="list-disc pl-5 space-y-2 text-slate-300 text-sm sm:text-base my-3 leading-relaxed">
            <li>First number: <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">a</code></li>
            <li>Second number: <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">b</code></li>
          </ul>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-white">Step 3 — Identify the logic</strong>
          </p>
          <ul className="list-disc pl-5 space-y-2 text-slate-300 text-sm sm:text-base my-3 leading-relaxed">
            <li>If <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">a</code> is greater than <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">b</code>, <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">a</code> is larger.</li>
            <li>If <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">b</code> is greater than <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">a</code>, <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">b</code> is larger.</li>
            <li>Otherwise, both numbers are equal.</li>
          </ul>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-white">Step 4 — Write pseudocode</strong>
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`START

READ a
READ b

IF a > b
    DISPLAY a is larger
ELSE IF b > a
    DISPLAY b is larger
ELSE
    DISPLAY both are equal

STOP`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            We will learn how to implement these conditions using Java's <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">if</code>, <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">else if</code>, and <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">else</code> statements in a later module.
          </p>
        </div>
      </section>

      {/* SECTION 2: 2. Programming Languages and Java's Role in Software Development */}
      <section id="section-2" className="bg-slate-900/80 rounded-2xl border border-slate-800 p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-500/15 text-orange-300 text-xs font-bold uppercase tracking-wider font-mono">
            Part 1 · Programming Languages & Java
          </span>
          <span className="text-xs font-mono text-slate-400">Section 2</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          2. Programming Languages and Java's Role in Software Development
        </h2>
        <div className="space-y-4 text-slate-300 leading-relaxed text-sm sm:text-base">
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>2.1 What is a programming language?</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            A programming language is a formal language that allows developers to express instructions, calculations, decisions, and operations in a structured way.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Different programming languages are designed for different purposes.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            For example:
          </p>
          <div className="overflow-x-auto my-4 rounded-xl border border-slate-800 shadow-2xs">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-white border-b border-slate-800 font-semibold">
                <tr>
                  <th className="px-4 py-3">Programming language</th>
                  <th className="px-4 py-3">Common applications</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">Java</td>
                  <td className="px-4 py-2.5 text-slate-300">Enterprise systems, backend services, Android development</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">Python</td>
                  <td className="px-4 py-2.5 text-slate-300">Data science, automation, AI, backend development</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">C</td>
                  <td className="px-4 py-2.5 text-slate-300">Operating systems, embedded programming</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">C++</td>
                  <td className="px-4 py-2.5 text-slate-300">Game engines, performance-intensive applications</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">JavaScript</td>
                  <td className="px-4 py-2.5 text-slate-300">Web development and server-side applications</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">C#</td>
                  <td className="px-4 py-2.5 text-slate-300">Enterprise applications, desktop software, game development</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">Go</td>
                  <td className="px-4 py-2.5 text-slate-300">Backend services, cloud infrastructure</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">Rust</td>
                  <td className="px-4 py-2.5 text-slate-300">Systems programming and memory-safe applications</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            No single programming language is best for every task.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            The choice depends on performance, ecosystem, developer experience, application requirements, and deployment environment.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>2.2 Types of programming languages</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Programming languages are commonly discussed at three broad levels.
          </p>
          <h4 className="text-base sm:text-lg font-bold text-white mt-4 mb-2 flex items-center gap-2">
            <span>A. Machine language</span>
          </h4>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Machine language consists of binary instructions represented using 0s and 1s.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            It is the instruction representation that a processor executes.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Example:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`10110000 01100001`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            The meaning of a machine instruction depends on the processor's instruction set architecture.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Characteristics:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-slate-300 text-sm sm:text-base my-3 leading-relaxed">
            <li>Directly executed by the processor.</li>
            <li>Closely tied to a specific processor architecture.</li>
            <li>Difficult for humans to write and understand.</li>
            <li>Requires very detailed hardware-specific instructions.</li>
          </ul>
          <h4 className="text-base sm:text-lg font-bold text-white mt-4 mb-2 flex items-center gap-2">
            <span>B. Assembly language</span>
          </h4>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Assembly language uses symbolic instructions to represent machine-level operations.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Example:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">ASM</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`MOV AX, 10
ADD AX, 5`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Here:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-slate-300 text-sm sm:text-base my-3 leading-relaxed">
            <li><code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">MOV</code> represents a data movement operation.</li>
            <li><code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">ADD</code> represents an addition operation.</li>
          </ul>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Assembly is more readable than raw binary, but it still requires knowledge of processor architecture.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            An assembler translates assembly instructions into machine code.
          </p>
          <h4 className="text-base sm:text-lg font-bold text-white mt-4 mb-2 flex items-center gap-2">
            <span>C. High-level programming languages</span>
          </h4>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            High-level programming languages provide abstractions that make programming easier for humans.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Java, Python, C++, and JavaScript are examples.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Consider:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`int total = 10 + 20;`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            This expresses the intended calculation without requiring the programmer to manually manage individual processor instructions.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            High-level languages offer:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-slate-300 text-sm sm:text-base my-3 leading-relaxed">
            <li>Readable syntax</li>
            <li>Data abstractions</li>
            <li>Reusable components</li>
            <li>Libraries</li>
            <li>Control structures</li>
            <li>Easier maintenance</li>
          </ul>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            A compiler or interpreter, depending on the language and execution model, translates or executes the program through the appropriate runtime environment.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>2.3 Compiled, interpreted, and hybrid execution models</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Programming languages can use different execution approaches.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-white">Compiled approach</strong>
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            A compiler translates source code into another representation, often machine code, before execution.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-white">Interpreted approach</strong>
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            An interpreter executes program instructions through an interpreter or runtime.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-white">Hybrid approach</strong>
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Some languages first compile source code into an intermediate representation and then execute that representation using a virtual machine or runtime.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Java primarily follows this hybrid approach.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Java source code is compiled into bytecode. The Java Virtual Machine executes that bytecode, using interpretation and Just-In-Time compilation where appropriate.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            This architecture is one of the major reasons Java can run across different operating systems and processor architectures that provide compatible Java runtime environments.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>2.4 Introduction to Java</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Java is a general-purpose, class-based, object-oriented programming language originally developed at Sun Microsystems and now maintained through the Java ecosystem under Oracle and the broader Java community.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Java is designed to support reliable, maintainable, portable, and scalable software development.
          </p>
          <h4 className="text-base sm:text-lg font-bold text-white mt-4 mb-2 flex items-center gap-2">
            <span>Important characteristics of Java</span>
          </h4>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-white">1. Platform independence</strong>
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Java source code is compiled into bytecode rather than directly into a separate native executable for every operating system.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            A compatible JVM can execute the bytecode on the target platform.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            This is commonly summarized as:
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-white">Write Once, Run Anywhere (WORA).</strong>
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            It does not mean that every Java application works identically in every environment. Applications may still depend on operating-system features, native libraries, file paths, or external services.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-white">2. Object-oriented programming</strong>
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Java organizes much of its application logic around classes and objects.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            For example, a banking application might contain:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-slate-300 text-sm sm:text-base my-3 leading-relaxed">
            <li><code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">Account</code></li>
            <li><code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">Customer</code></li>
            <li><code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">Transaction</code></li>
            <li><code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">Bank</code></li>
          </ul>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Each class can represent a particular concept and its associated behavior.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            We will study classes and objects in detail in later modules.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-white">3. Strong static typing</strong>
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Java requires variables to have declared types.
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`int age = 21;
double salary = 45000.50;
String name = "Alex";`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            The compiler checks many type-related problems before the program executes.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            For example:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`int age = "twenty";`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            This is invalid because a <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">String</code> value cannot be assigned directly to an <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">int</code> variable.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-white">4. Automatic memory management</strong>
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Java provides automatic memory management through garbage collection.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Developers do not generally need to manually free ordinary Java objects.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Objects that are no longer reachable can eventually become eligible for garbage collection.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-white">5. Multithreading support</strong>
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Java supports concurrent execution through threads and related concurrency APIs.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            This makes it possible to develop applications that perform multiple operations concurrently.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-white">6. Security-oriented design</strong>
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Java provides features such as bytecode verification, access controls, type checking, and runtime safety mechanisms.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Security still depends on correct application design and safe use of libraries and APIs.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-white">7. Extensive ecosystem</strong>
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Java has a large ecosystem of frameworks, tools, libraries, and development environments.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Examples include:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-slate-300 text-sm sm:text-base my-3 leading-relaxed">
            <li>Spring Boot for backend application development.</li>
            <li>Hibernate for object-relational mapping.</li>
            <li>Maven and Gradle for build automation.</li>
            <li>JUnit for testing.</li>
            <li>JavaFX for desktop application interfaces.</li>
          </ul>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>2.5 Where is Java used?</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Java is used across many software development domains.
          </p>
          <h4 className="text-base sm:text-lg font-bold text-white mt-4 mb-2 flex items-center gap-2">
            <span>Enterprise application development</span>
          </h4>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Organizations use Java to develop business systems involving:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-slate-300 text-sm sm:text-base my-3 leading-relaxed">
            <li>Employee management</li>
            <li>Inventory management</li>
            <li>Banking operations</li>
            <li>Payment processing</li>
            <li>Customer relationship management</li>
            <li>Enterprise resource planning</li>
          </ul>
          <h4 className="text-base sm:text-lg font-bold text-white mt-4 mb-2 flex items-center gap-2">
            <span>Backend development</span>
          </h4>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Java is commonly used to develop server-side applications and REST APIs.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            For example, an e-commerce backend may provide:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`GET    /products
GET    /products/{id}
POST   /orders
PUT    /orders/{id}
DELETE /orders/{id}`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            The Java application processes requests, interacts with databases, applies business rules, and returns responses.
          </p>
          <h4 className="text-base sm:text-lg font-bold text-white mt-4 mb-2 flex items-center gap-2">
            <span>Banking and financial systems</span>
          </h4>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Java is used in financial software requiring structured business logic, transaction processing, and integration with databases and external services.
          </p>
          <h4 className="text-base sm:text-lg font-bold text-white mt-4 mb-2 flex items-center gap-2">
            <span>Android development</span>
          </h4>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Java has historically played a major role in Android development and remains part of the Android development ecosystem, alongside Kotlin.
          </p>
          <h4 className="text-base sm:text-lg font-bold text-white mt-4 mb-2 flex items-center gap-2">
            <span>Cloud and distributed systems</span>
          </h4>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Java can power microservices, background processing, message consumers, and distributed applications.
          </p>
          <h4 className="text-base sm:text-lg font-bold text-white mt-4 mb-2 flex items-center gap-2">
            <span>Big data ecosystems</span>
          </h4>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Java is relevant to several data-processing technologies, including Apache Hadoop and parts of the broader JVM ecosystem.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>2.6 Java editions and platforms</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Java technology has historically been organized into several platform editions.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-white">Java SE — Standard Edition</strong>
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Provides the core Java language and standard APIs.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Topics include:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-slate-300 text-sm sm:text-base my-3 leading-relaxed">
            <li>Variables</li>
            <li>Classes</li>
            <li>Objects</li>
            <li>Collections</li>
            <li>Exceptions</li>
            <li>Input/output</li>
            <li>Concurrency</li>
            <li>Networking</li>
          </ul>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            This course begins with Java SE.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-white">Jakarta EE — Enterprise Edition ecosystem</strong>
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Provides enterprise specifications and APIs for building large-scale server-side applications.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-white">Java ME — Micro Edition</strong>
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Designed for certain constrained devices and embedded environments. It is a specialized platform rather than the normal starting point for modern general-purpose Java development.
          </p>
        </div>
      </section>

      {/* SECTION 3: 3. Java Architecture: JDK, JRE, and JVM */}
      <section id="section-3" className="bg-slate-900/80 rounded-2xl border border-slate-800 p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-500/15 text-orange-300 text-xs font-bold uppercase tracking-wider font-mono">
            Part 2 · Architecture: JDK, JRE & JVM
          </span>
          <span className="text-xs font-mono text-slate-400">Section 3</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          3. Java Architecture: JDK, JRE, and JVM
        </h2>
        <div className="space-y-4 text-slate-300 leading-relaxed text-sm sm:text-base">
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Understanding Java architecture is essential because Java programs do not execute in exactly the same way as native programs compiled directly for a particular processor.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Java uses a combination of compilation and runtime execution.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>3.1 What is JVM?</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            JVM stands for Java Virtual Machine.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            The JVM is the runtime environment responsible for loading, verifying, and executing Java bytecode.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            It provides an abstract execution environment that is implemented for different operating systems and processor architectures.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            A JVM implementation is responsible for several important activities:
          </p>
          <ol className="list-decimal pl-5 space-y-2 text-slate-300 text-sm sm:text-base my-3 leading-relaxed">
            <li>Loading classes.</li>
            <li>Verifying bytecode.</li>
            <li>Preparing runtime structures.</li>
            <li>Executing bytecode.</li>
            <li>Managing memory.</li>
            <li>Supporting garbage collection.</li>
            <li>Handling runtime exceptions and other execution behavior.</li>
          </ol>
          <h4 className="text-base sm:text-lg font-bold text-white mt-4 mb-2 flex items-center gap-2">
            <span>How does the JVM work?</span>
          </h4>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Suppose we write:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public class Hello {
    public static void main(String[] args) {
        System.out.println("Hello Java");
    }
}`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            The Java compiler converts the source code into bytecode.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            The JVM then loads and executes that bytecode.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Conceptually:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Java Source Code
       |
       v
    javac
       |
       v
  Java Bytecode
       |
       v
      JVM
       |
       v
   Execution
       |
       v
  Hello Java`}</code>
            </pre>
          </div>
          <h4 className="text-base sm:text-lg font-bold text-white mt-4 mb-2 flex items-center gap-2">
            <span>Important JVM components</span>
          </h4>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-white">1. Class Loader</strong>
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            The class-loading subsystem loads compiled classes into the JVM when they are required.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            It participates in class loading, linking, and initialization.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-white">2. Bytecode Verifier</strong>
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            The verifier checks bytecode for structural and safety-related properties before execution.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            It helps prevent certain invalid operations from being executed through malformed bytecode.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-white">3. Runtime Memory Areas</strong>
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            The JVM uses several runtime memory areas.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Important examples include:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-slate-300 text-sm sm:text-base my-3 leading-relaxed">
            <li>Heap</li>
            <li>Java Virtual Machine stacks</li>
            <li>Method area or its implementation-specific representation</li>
            <li>Program counter registers</li>
            <li>Native method stacks</li>
          </ul>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-white">Heap:</strong> Stores objects and arrays.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-white">JVM stack:</strong> Each thread has its own stack, which contains frames for method calls and local variables.
          </p>
          <div className="mt-4 mb-2 p-3 rounded-lg bg-orange-500/15/70 border border-orange-500/30/80 font-semibold text-white text-sm sm:text-base">
            <strong className="font-semibold text-white">Program counter:</strong> Each Java thread has a program counter used to track its current execution position.
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            These concepts become especially important when studying objects, memory management, and recursion.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-white">4. Execution Engine</strong>
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            The execution engine executes Java bytecode.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            It can use an interpreter and Just-In-Time compilation.
          </p>
          <h4 className="text-base sm:text-lg font-bold text-white mt-4 mb-2 flex items-center gap-2">
            <span>Interpreter</span>
          </h4>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            An interpreter executes bytecode instructions through the JVM's interpretation mechanism.
          </p>
          <h4 className="text-base sm:text-lg font-bold text-white mt-4 mb-2 flex items-center gap-2">
            <span>Just-In-Time compiler</span>
          </h4>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            A Just-In-Time compiler, or JIT compiler, can compile frequently executed portions of bytecode into native machine code during execution.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            This allows the JVM to optimize performance based on runtime behavior.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-white">5. Garbage Collector</strong>
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            The garbage collector automatically reclaims heap memory occupied by objects that are no longer reachable.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Example:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public class GarbageExample {

    public static void main(String[] args) {

        String message = new String("Hello");

        message = null;

    }
}`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            After <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">message</code> is assigned <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">null</code>, the newly created string object may become eligible for garbage collection if no other references point to it.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Important distinction:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-slate-300 text-sm sm:text-base my-3 leading-relaxed">
            <li>An object becoming eligible for garbage collection does not mean it is immediately deleted.</li>
            <li>The JVM decides when and how garbage collection occurs.</li>
            <li>Developers should not assume a particular collection time.</li>
          </ul>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>3.2 What is JRE?</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            JRE stands for Java Runtime Environment.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Conceptually, the JRE provides the runtime components needed to execute Java applications.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            It includes a JVM and the necessary runtime libraries and supporting components.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Its main purpose is execution rather than Java application development.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            A runtime environment is useful when a system needs to run Java software but does not need the complete development toolchain.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>3.3 What is JDK?</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            JDK stands for Java Development Kit.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            The JDK provides the tools needed to develop Java software.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            It includes:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-slate-300 text-sm sm:text-base my-3 leading-relaxed">
            <li>Java compiler (<code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">javac</code>)</li>
            <li>Java launcher (<code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">java</code>)</li>
            <li>Runtime components</li>
            <li>Standard Java libraries</li>
            <li>Additional development utilities</li>
          </ul>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Some useful JDK tools include:
          </p>
          <div className="overflow-x-auto my-4 rounded-xl border border-slate-800 shadow-2xs">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-white border-b border-slate-800 font-semibold">
                <tr>
                  <th className="px-4 py-3">Tool</th>
                  <th className="px-4 py-3">Purpose</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300"><code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">java</code></td>
                  <td className="px-4 py-2.5 text-slate-300">Launches Java applications</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300"><code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">javac</code></td>
                  <td className="px-4 py-2.5 text-slate-300">Compiles Java source files</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300"><code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">jshell</code></td>
                  <td className="px-4 py-2.5 text-slate-300">Interactive Java shell</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300"><code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">jar</code></td>
                  <td className="px-4 py-2.5 text-slate-300">Creates and manages JAR files</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300"><code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">javadoc</code></td>
                  <td className="px-4 py-2.5 text-slate-300">Generates API documentation</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300"><code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">jdb</code></td>
                  <td className="px-4 py-2.5 text-slate-300">Java debugger</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300"><code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">javap</code></td>
                  <td className="px-4 py-2.5 text-slate-300">Examines class files</td>
                </tr>
              </tbody>
            </table>
          </div>
          <h4 className="text-base sm:text-lg font-bold text-white mt-4 mb-2 flex items-center gap-2">
            <span>Relationship between JDK, JRE, and JVM</span>
          </h4>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            A useful conceptual relationship is:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`JDK
|
+-- Development Tools
|   +-- javac
|   +-- java
|   +-- jar
|   +-- javadoc
|
+-- Runtime Components
    |
    +-- JVM
    |
    +-- Java Runtime Libraries`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            The JRE is traditionally described as the runtime environment containing the JVM and runtime libraries.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Modern Java distributions do not necessarily provide a separate product named JRE. A developer commonly installs a JDK, while production runtimes may use a complete JDK or a custom runtime image.
          </p>
          <h4 className="text-base sm:text-lg font-bold text-white mt-4 mb-2 flex items-center gap-2">
            <span>Comparison</span>
          </h4>
          <div className="overflow-x-auto my-4 rounded-xl border border-slate-800 shadow-2xs">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-white border-b border-slate-800 font-semibold">
                <tr>
                  <th className="px-4 py-3">Feature</th>
                  <th className="px-4 py-3">JDK</th>
                  <th className="px-4 py-3">JRE</th>
                  <th className="px-4 py-3">JVM</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">Full form</td>
                  <td className="px-4 py-2.5 text-slate-300">Java Development Kit</td>
                  <td className="px-4 py-2.5 text-slate-300">Java Runtime Environment</td>
                  <td className="px-4 py-2.5 text-slate-300">Java Virtual Machine</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">Main purpose</td>
                  <td className="px-4 py-2.5 text-slate-300">Development and execution</td>
                  <td className="px-4 py-2.5 text-slate-300">Runtime support</td>
                  <td className="px-4 py-2.5 text-slate-300">Bytecode execution</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">Compiler</td>
                  <td className="px-4 py-2.5 text-slate-300">Yes</td>
                  <td className="px-4 py-2.5 text-slate-300">Not normally</td>
                  <td className="px-4 py-2.5 text-slate-300">No</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">Runtime libraries</td>
                  <td className="px-4 py-2.5 text-slate-300">Yes</td>
                  <td className="px-4 py-2.5 text-slate-300">Yes</td>
                  <td className="px-4 py-2.5 text-slate-300">Uses runtime support</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">Executes bytecode</td>
                  <td className="px-4 py-2.5 text-slate-300">Through its runtime</td>
                  <td className="px-4 py-2.5 text-slate-300">Through its JVM</td>
                  <td className="px-4 py-2.5 text-slate-300">Yes</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">Development tools</td>
                  <td className="px-4 py-2.5 text-slate-300">Yes</td>
                  <td className="px-4 py-2.5 text-slate-300">Limited or absent</td>
                  <td className="px-4 py-2.5 text-slate-300">No general development toolkit</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-white">Remember:</strong>
          </p>
          <ul className="list-disc pl-5 space-y-2 text-slate-300 text-sm sm:text-base my-3 leading-relaxed">
            <li>JDK = Development toolkit.</li>
            <li>JRE = Runtime environment.</li>
            <li>JVM = Bytecode execution engine.</li>
          </ul>
        </div>
      </section>

      {/* SECTION 4: 4. Java Installation and Development Environment */}
      <section id="section-4" className="bg-slate-900/80 rounded-2xl border border-slate-800 p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-500/15 text-orange-300 text-xs font-bold uppercase tracking-wider font-mono">
            Part 2 · Environment & Toolchain
          </span>
          <span className="text-xs font-mono text-slate-400">Section 4</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          4. Java Installation and Development Environment
        </h2>
        <div className="space-y-4 text-slate-300 leading-relaxed text-sm sm:text-base">
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>4.1 What is a development environment?</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            A development environment is the collection of tools and configurations used to write, compile, execute, test, and debug software.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            For Java, the essential requirement is an installed JDK.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Developers can write Java programs using a simple text editor and terminal, or use an Integrated Development Environment.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>4.2 What is an IDE?</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            IDE stands for Integrated Development Environment.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            An IDE combines several programming tools into one application.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Common features include:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-slate-300 text-sm sm:text-base my-3 leading-relaxed">
            <li>Source-code editing</li>
            <li>Syntax highlighting</li>
            <li>Automatic code completion</li>
            <li>Error highlighting</li>
            <li>Compilation and execution</li>
            <li>Debugging</li>
            <li>Project management</li>
            <li>Dependency management</li>
            <li>Refactoring support</li>
          </ul>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Examples:
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-white">IntelliJ IDEA</strong>
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            A widely used IDE for Java development.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-white">Eclipse</strong>
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            An established open-source IDE with extensive Java support.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-white">Visual Studio Code</strong>
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            A lightweight, extensible code editor that can support Java development through appropriate extensions.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            For this course, any suitable Java IDE can be used. The examples will remain standard Java SE programs.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>4.3 Installing Java</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            The installation procedure depends on the operating system and chosen JDK distribution.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            General procedure:
          </p>
          <ol className="list-decimal pl-5 space-y-2 text-slate-300 text-sm sm:text-base my-3 leading-relaxed">
            <li>Download a JDK distribution.</li>
            <li>Select an appropriate operating-system installer.</li>
            <li>Install the JDK.</li>
            <li>Configure the environment if required.</li>
            <li>Open a terminal or command prompt.</li>
            <li>Verify the Java installation.</li>
          </ol>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Open the terminal and run:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">BASH</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`java -version`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            This checks the Java runtime launcher.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Then run:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">BASH</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`javac -version`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            This checks the Java compiler.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Both commands should report a version rather than an error saying the command cannot be found.
          </p>
          <h4 className="text-base sm:text-lg font-bold text-white mt-4 mb-2 flex items-center gap-2">
            <span>What is PATH?</span>
          </h4>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">PATH</code> is an operating-system environment variable that contains directories searched when a user runs a command.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            If the JDK's <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">bin</code> directory is correctly available through <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">PATH</code>, commands such as <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">java</code> and <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">javac</code> can usually be executed from any terminal directory.
          </p>
          <h4 className="text-base sm:text-lg font-bold text-white mt-4 mb-2 flex items-center gap-2">
            <span>What is JAVA_HOME?</span>
          </h4>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">JAVA_HOME</code> is a commonly used environment variable pointing to the JDK installation directory.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Build tools and development applications may use it to identify the installed Java environment.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            For example, its value might resemble:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`C:\\Program Files\\Java\\jdk`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            The actual directory depends on the distribution and installation location.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Do not set <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">JAVA_HOME</code> to the <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">bin</code> directory. It should point to the JDK's main installation directory.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>4.4 Your first Java development workflow</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            A basic workflow looks like this:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Create a project
      |
      v
Write Java code
      |
      v
Save .java file
      |
      v
Compile the source file
      |
      v
Generate .class file
      |
      v
Execute the program
      |
      v
Inspect the output
      |
      v
Test and debug`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            A developer repeats this cycle while building an application.
          </p>
        </div>
      </section>

      {/* SECTION 5: 5. Java Program Structure */}
      <section id="section-5" className="bg-slate-900/80 rounded-2xl border border-slate-800 p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-500/15 text-orange-300 text-xs font-bold uppercase tracking-wider font-mono">
            Part 3 · Java Program Anatomy
          </span>
          <span className="text-xs font-mono text-slate-400">Section 5</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          5. Java Program Structure
        </h2>
        <div className="space-y-4 text-slate-300 leading-relaxed text-sm sm:text-base">
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Before writing complex applications, students must understand the basic structure of a Java program.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Consider this program:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public class HelloWorld {

    public static void main(String[] args) {

        System.out.println("Hello, World!");

    }
}`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Output:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Hello, World!`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Let's examine each part.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>5.1 Class declaration</span>
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public class HelloWorld`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            A class is a blueprint or organizational unit used to define members such as fields, methods, constructors, and nested types.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            The declaration contains:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-slate-300 text-sm sm:text-base my-3 leading-relaxed">
            <li><code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">public</code>: An access modifier.</li>
            <li><code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">class</code>: A keyword used to declare a class.</li>
            <li><code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">HelloWorld</code>: The class name.</li>
          </ul>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            For a public top-level class, the source filename must match the class name, including capitalization.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Therefore:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`HelloWorld.java`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            is the correct filename for this example.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Java is case-sensitive. <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">HelloWorld</code>, <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">helloworld</code>, and <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">HELLOWORLD</code> are different identifiers.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>5.2 Curly braces</span>
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`{
    // Program content
}`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Curly braces define a block of code.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            The class body is enclosed in one pair of braces, and the method body is enclosed in another pair.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Incorrect brace placement can cause compilation errors or change the program's structure.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>5.3 The main() method</span>
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public static void main(String[] args)`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            This is the traditional Java application entry-point method.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Breakdown:
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-white">public</strong>
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            The method is accessible to the launcher.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-white">static</strong>
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            The method belongs to the class rather than requiring an instance of the class.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-white">void</strong>
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            The method does not return a value.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-white">main</strong>
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            The method name recognized by the traditional Java application launcher.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-white">String[] args</strong>
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            An array of strings containing command-line arguments supplied to the program.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            We will learn arrays and methods in depth in later modules.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>5.4 Output statement</span>
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`System.out.println("Hello, World!");`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            This statement displays text followed by a line break.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Its parts are:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-slate-300 text-sm sm:text-base my-3 leading-relaxed">
            <li><code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">System</code>: A class from the Java standard library.</li>
            <li><code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">out</code>: A standard output stream.</li>
            <li><code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">println()</code>: A method that writes output and then terminates the line.</li>
            <li><code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">"Hello, World!"</code>: The string being displayed.</li>
          </ul>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Other output methods:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`System.out.print("Hello");
System.out.println(" Java");
System.out.printf("Age: %d%n", 21);`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Output:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Hello Java
Age: 21`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">print()</code> does not automatically move to the next line.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">println()</code> writes a line separator after its content.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">printf()</code> supports formatted output.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>5.5 Statements and semicolons</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Most Java statements end with a semicolon.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Example:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`int age = 21;
System.out.println(age);`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            A missing semicolon commonly causes a compile-time syntax error.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>5.6 Java keywords and identifiers</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Keywords are reserved words with special meaning in Java.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Examples:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`class
public
static
void
int
double
if
else
while
return
new`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Identifiers are programmer-defined names used for classes, methods, variables, and other program elements.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Examples:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`int studentAge = 20;

double accountBalance = 1500.50;

public class StudentRecord {
}`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">studentAge</code>, <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">accountBalance</code>, and <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">StudentRecord</code> are identifiers.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Identifiers cannot be reserved keywords and must follow Java's naming rules.
          </p>
        </div>
      </section>

      {/* SECTION 6: 6. Compilation and Execution Process */}
      <section id="section-6" className="bg-slate-900/80 rounded-2xl border border-slate-800 p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-500/15 text-orange-300 text-xs font-bold uppercase tracking-wider font-mono">
            Part 3 · Compilation & Bytecode Execution
          </span>
          <span className="text-xs font-mono text-slate-400">Section 6</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          6. Compilation and Execution Process
        </h2>
        <div className="space-y-4 text-slate-300 leading-relaxed text-sm sm:text-base">
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            One of Java's most important characteristics is its bytecode-based execution model.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>6.1 Java source code</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Programmers write Java instructions inside a source file.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            For example:
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-white">File: HelloWorld.java</strong>
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public class HelloWorld {

    public static void main(String[] args) {

        System.out.println("Welcome to Java");

    }
}`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            The <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">.java</code> extension identifies a Java source file.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>6.2 Compilation</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            The Java compiler is named <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">javac</code>.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Execute this command:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">BASH</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`javac HelloWorld.java`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            The compiler checks the source code and, when compilation succeeds, generates a class file.
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`HelloWorld.class`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            The <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">.class</code> file contains Java bytecode.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Bytecode is an intermediate representation designed for execution by a compatible JVM.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>6.3 Execution</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            To launch the program, execute:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">BASH</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`java HelloWorld`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Notice that the command uses the class name rather than the <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">.class</code> filename.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            The JVM loads and executes the program's bytecode.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Output:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Welcome to Java`}</code>
            </pre>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>6.4 Complete compilation and execution pipeline</span>
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`        HelloWorld.java
       (Source Code)
              |
              v
          javac
       (Compiler)
              |
              v
       HelloWorld.class
          (Bytecode)
              |
              v
       Class Loading
              |
              v
      Bytecode Verification
              |
              v
       JVM Execution Engine
        /             \\
       v               v
 Interpreter          JIT
        \\             /
         v           v
         Program Execution
                  |
                  v
             Final Output`}</code>
            </pre>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>6.5 Why does Java use bytecode?</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Suppose the same Java source code needs to run on Windows, Linux, and macOS.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            With a compatible Java toolchain and runtime, developers can compile their source into bytecode and run that bytecode on each platform.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Conceptually:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`                 Java Source
                      |
                      v
                 Java Compiler
                      |
                      v
                Java Bytecode
                 /     |     \\
                /      |      \\
               v       v       v
          Windows    Linux   macOS
             JVM      JVM      JVM
                \\      |      /
                 \\     |     /
                Program Execution`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Each platform needs a compatible JVM implementation.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            This separation reduces dependence on a single operating-system machine-code format.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>6.6 Compilation errors versus runtime errors</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Consider:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public class ErrorExample {

    public static void main(String[] args) {

        System.out.println("Hello Java")

    }
}`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            There is a missing semicolon.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            The program will fail during compilation.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Now consider:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public class RuntimeExample {

    public static void main(String[] args) {

        int result = 10 / 0;

        System.out.println(result);
    }
}`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            This code can compile, but executing it causes an <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">ArithmeticException</code> because integer division by zero is not permitted.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            These are two different stages of failure:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-slate-300 text-sm sm:text-base my-3 leading-relaxed">
            <li>Compilation errors occur when source code cannot successfully be compiled.</li>
            <li>Runtime errors occur during program execution.</li>
          </ul>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Logical errors are different again. A program may compile and execute successfully while producing an incorrect result.
          </p>
        </div>
      </section>

      {/* SECTION 7: 7. Understanding the main() Method in Detail */}
      <section id="section-7" className="bg-slate-900/80 rounded-2xl border border-slate-800 p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-500/15 text-orange-300 text-xs font-bold uppercase tracking-wider font-mono">
            Part 3 · The main() Entry Point
          </span>
          <span className="text-xs font-mono text-slate-400">Section 7</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          7. Understanding the main() Method in Detail
        </h2>
        <div className="space-y-4 text-slate-300 leading-relaxed text-sm sm:text-base">
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            The traditional Java application entry-point declaration is:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public static void main(String[] args)`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Students should understand why each component exists.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>7.1 Why is main() public?</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            The launcher needs to access the entry-point method.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            The traditional form declares it as <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">public</code>.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>7.2 Why is main() static?</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            The JVM launcher can invoke this method without first creating an object of the class.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            A static method belongs to the class itself.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            We will study static and instance members in the object-oriented programming section.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>7.3 Why is the return type void?</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            The method does not return a Java value through its method return type.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            The execution process is controlled by the runtime and the program's termination behavior.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>7.4 Why does main() accept String[] args?</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            It allows programs to receive arguments from the command line.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Example:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public class CommandLineExample {

    public static void main(String[] args) {

        System.out.println("First argument: " + args[0]);

    }
}`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Compile:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">BASH</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`javac CommandLineExample.java`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Execute:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">BASH</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`java CommandLineExample Java`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Output:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`First argument: Java`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Here, <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">Java</code> is passed as a command-line argument.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Important: This example assumes at least one argument is supplied. If no argument is provided, accessing <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">args[0]</code> causes an <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">ArrayIndexOutOfBoundsException</code>.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            A safer version is:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public class CommandLineExample {

    public static void main(String[] args) {

        if (args.length > 0) {
            System.out.println("First argument: " + args[0]);
        } else {
            System.out.println("No argument provided.");
        }
    }
}`}</code>
            </pre>
          </div>
        </div>
      </section>

      {/* SECTION 8: 8. Variables and Constants */}
      <section id="section-8" className="bg-slate-900/80 rounded-2xl border border-slate-800 p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-500/15 text-orange-300 text-xs font-bold uppercase tracking-wider font-mono">
            Part 4 · Variables, Constants & Scope
          </span>
          <span className="text-xs font-mono text-slate-400">Section 8</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          8. Variables and Constants
        </h2>
        <div className="space-y-4 text-slate-300 leading-relaxed text-sm sm:text-base">
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Variables are fundamental to almost every programming language.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            They allow programs to store information and use it during execution.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>8.1 What is a variable?</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            A variable is a named storage location whose value can be read and, when permitted, changed during program execution.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Example:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`int age = 21;`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Here:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-slate-300 text-sm sm:text-base my-3 leading-relaxed">
            <li><code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">int</code> is the data type.</li>
            <li><code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">age</code> is the variable name.</li>
            <li><code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">21</code> is the initial value.</li>
            <li><code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">=</code> is the assignment operator.</li>
          </ul>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Another example:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`double temperature = 32.5;`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            A variable declaration tells Java what type of value the variable can hold.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>8.2 Variable declaration and initialization</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-white">Declaration</strong>
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Creating a variable with a declared type:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`int age;`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-white">Initialization</strong>
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Assigning its first value:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`age = 21;`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-white">Declaration and initialization together</strong>
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`int age = 21;`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            After initialization, the value can be changed:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`age = 22;`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            A variable declared as <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">int</code> cannot directly hold a <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">String</code>.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>8.3 Variable naming rules</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Java identifiers follow rules that include:
          </p>
          <ol className="list-decimal pl-5 space-y-2 text-slate-300 text-sm sm:text-base my-3 leading-relaxed">
            <li>An identifier cannot begin with a digit.</li>
            <li>It can contain letters, digits, underscores, and dollar signs.</li>
            <li>It cannot contain spaces.</li>
            <li>It cannot be a Java reserved keyword.</li>
            <li>Java identifiers are case-sensitive.</li>
          </ol>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Valid:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`int age;
int studentAge;
int student_age;
int age2;
int _count;`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Invalid:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`int 2age;
int student age;
int class;`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Although some names are technically valid, professional code should follow standard naming conventions.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>8.4 Types of variables in Java</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Java variables can be grouped based on where and how they are declared.
          </p>
          <h4 className="text-base sm:text-lg font-bold text-white mt-4 mb-2 flex items-center gap-2">
            <span>Local variables</span>
          </h4>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Declared inside methods, constructors, or blocks.
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public class LocalExample {

    public static void main(String[] args) {

        int marks = 90;

        System.out.println(marks);
    }
}`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Local variables must be initialized before they are read.
          </p>
          <h4 className="text-base sm:text-lg font-bold text-white mt-4 mb-2 flex items-center gap-2">
            <span>Instance variables</span>
          </h4>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Declared inside a class but outside methods, constructors, and blocks, without being declared static.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            They belong to individual objects.
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public class Student {

    String name;
    int age;

}`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Each <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">Student</code> object can have its own <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">name</code> and <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">age</code>.
          </p>
          <h4 className="text-base sm:text-lg font-bold text-white mt-4 mb-2 flex items-center gap-2">
            <span>Static variables</span>
          </h4>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Declared using the <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">static</code> keyword.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            They belong to the class rather than individual instances.
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public class University {

    static String universityName = "Global University";

    public static void main(String[] args) {

        System.out.println(universityName);
    }
}`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Instance and static variables receive default values when they are not explicitly initialized. Local variables do not receive automatic default initialization.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            These variable categories will become particularly important in object-oriented programming.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>8.5 What are constants?</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            A constant is a value intended not to be reassigned after initialization.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Java uses the <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">final</code> keyword to prevent reassignment of a variable.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Example:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public class ConstantExample {

    public static void main(String[] args) {

        final double PI = 3.14159;

        System.out.println(PI);

    }
}`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            This is invalid after initialization:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`PI = 3.14;`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            The compiler reports an error because the <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">final</code> variable cannot be reassigned.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            For a reference variable, <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">final</code> prevents assigning a different reference, but it does not automatically make the referenced object immutable.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Example:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`final int[] numbers = {1, 2, 3};

numbers[0] = 10; // Allowed

// numbers = new int[]{4, 5, 6}; // Not allowed`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            The array's contents can change even though the reference cannot be reassigned.
          </p>
          <h4 className="text-base sm:text-lg font-bold text-white mt-4 mb-2 flex items-center gap-2">
            <span>Naming conventions for constants</span>
          </h4>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Constant names are commonly written in uppercase, with underscores separating words.
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`final int MAX_ATTEMPTS = 3;

final double TAX_RATE = 0.18;

final String APPLICATION_NAME = "Student Portal";`}</code>
            </pre>
          </div>
        </div>
      </section>

      {/* SECTION 9: 9. Primitive Data Types */}
      <section id="section-9" className="bg-slate-900/80 rounded-2xl border border-slate-800 p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-500/15 text-orange-300 text-xs font-bold uppercase tracking-wider font-mono">
            Part 4 · Primitive Data Types & Memory
          </span>
          <span className="text-xs font-mono text-slate-400">Section 9</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          9. Primitive Data Types
        </h2>
        <div className="space-y-4 text-slate-300 leading-relaxed text-sm sm:text-base">
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            A data type defines the kind of value a variable can store and the operations that can be performed on it.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Java is a statically typed language.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            The type of a variable is known at compile time.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Java has eight primitive data types.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>9.1 Integer types</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Integer types store whole-number values.
          </p>
          <h4 className="text-base sm:text-lg font-bold text-white mt-4 mb-2 flex items-center gap-2">
            <span>byte</span>
          </h4>
          <ul className="list-disc pl-5 space-y-2 text-slate-300 text-sm sm:text-base my-3 leading-relaxed">
            <li>Size: 8 bits</li>
            <li>Signed range: -128 to 127</li>
          </ul>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`byte temperature = 25;`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            A <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">byte</code> is useful when its small numeric range is appropriate.
          </p>
          <h4 className="text-base sm:text-lg font-bold text-white mt-4 mb-2 flex items-center gap-2">
            <span>short</span>
          </h4>
          <ul className="list-disc pl-5 space-y-2 text-slate-300 text-sm sm:text-base my-3 leading-relaxed">
            <li>Size: 16 bits</li>
            <li>Signed range: -32,768 to 32,767</li>
          </ul>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`short populationChange = 1200;`}</code>
            </pre>
          </div>
          <h4 className="text-base sm:text-lg font-bold text-white mt-4 mb-2 flex items-center gap-2">
            <span>int</span>
          </h4>
          <ul className="list-disc pl-5 space-y-2 text-slate-300 text-sm sm:text-base my-3 leading-relaxed">
            <li>Size: 32 bits</li>
            <li>Signed range: -2,147,483,648 to 2,147,483,647</li>
          </ul>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`int salary = 50000;`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">int</code> is the normal starting choice for many whole-number calculations.
          </p>
          <h4 className="text-base sm:text-lg font-bold text-white mt-4 mb-2 flex items-center gap-2">
            <span>long</span>
          </h4>
          <ul className="list-disc pl-5 space-y-2 text-slate-300 text-sm sm:text-base my-3 leading-relaxed">
            <li>Size: 64 bits</li>
            <li>Signed range: -2^63 to 2^63 - 1</li>
          </ul>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`long nationalPopulation = 14000000000L;`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            The <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">L</code> suffix explicitly identifies a long literal.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>9.2 Floating-point types</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Floating-point types store numbers that can represent fractional values.
          </p>
          <h4 className="text-base sm:text-lg font-bold text-white mt-4 mb-2 flex items-center gap-2">
            <span>float</span>
          </h4>
          <ul className="list-disc pl-5 space-y-2 text-slate-300 text-sm sm:text-base my-3 leading-relaxed">
            <li>Size: 32 bits</li>
            <li>Approximate precision: 6–7 decimal digits</li>
          </ul>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`float price = 99.50f;`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            The <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">f</code> suffix indicates a float literal.
          </p>
          <h4 className="text-base sm:text-lg font-bold text-white mt-4 mb-2 flex items-center gap-2">
            <span>double</span>
          </h4>
          <ul className="list-disc pl-5 space-y-2 text-slate-300 text-sm sm:text-base my-3 leading-relaxed">
            <li>Size: 64 bits</li>
            <li>Approximate precision: 15–16 decimal digits</li>
          </ul>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`double distance = 123.456789;`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">double</code> is the normal choice for many general floating-point calculations.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Floating-point numbers use binary representations, so some decimal fractions cannot be represented exactly.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            For example:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public class PrecisionExample {

    public static void main(String[] args) {

        double value = 0.1 + 0.2;

        System.out.println(value);
    }
}`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            The result may display as:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`0.30000000000000004`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            This is a floating-point representation issue, not necessarily a Java bug.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            For financial calculations that require decimal arithmetic, <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">BigDecimal</code> is often preferable. We will encounter it in later programming topics.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>9.3 Character type</span>
          </h3>
          <h4 className="text-base sm:text-lg font-bold text-white mt-4 mb-2 flex items-center gap-2">
            <span>char</span>
          </h4>
          <ul className="list-disc pl-5 space-y-2 text-slate-300 text-sm sm:text-base my-3 leading-relaxed">
            <li>Size: 16 bits</li>
            <li>Represents a UTF-16 code unit.</li>
          </ul>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`char grade = 'A';
char symbol = '\$';`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Character literals use single quotation marks.
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`char letter = 'J';`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            String literals use double quotation marks:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`String language = "Java";`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            A <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">char</code> can represent a UTF-16 code unit, so certain Unicode characters require a pair of <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">char</code> values.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>9.4 Boolean type</span>
          </h3>
          <h4 className="text-base sm:text-lg font-bold text-white mt-4 mb-2 flex items-center gap-2">
            <span>boolean</span>
          </h4>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            A boolean represents one of two logical values:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-slate-300 text-sm sm:text-base my-3 leading-relaxed">
            <li><code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">true</code></li>
            <li><code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">false</code></li>
          </ul>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`boolean isLoggedIn = true;
boolean hasPermission = false;`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Boolean values are particularly useful for decision-making and condition checking.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>9.5 Summary of all primitive data types</span>
          </h3>
          <div className="overflow-x-auto my-4 rounded-xl border border-slate-800 shadow-2xs">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-white border-b border-slate-800 font-semibold">
                <tr>
                  <th className="px-4 py-3">Primitive type</th>
                  <th className="px-4 py-3">Size</th>
                  <th className="px-4 py-3">General purpose</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">byte</td>
                  <td className="px-4 py-2.5 text-slate-300">8 bits</td>
                  <td className="px-4 py-2.5 text-slate-300">Small integer values</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">short</td>
                  <td className="px-4 py-2.5 text-slate-300">16 bits</td>
                  <td className="px-4 py-2.5 text-slate-300">Smaller integer values</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">int</td>
                  <td className="px-4 py-2.5 text-slate-300">32 bits</td>
                  <td className="px-4 py-2.5 text-slate-300">General whole-number calculations</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">long</td>
                  <td className="px-4 py-2.5 text-slate-300">64 bits</td>
                  <td className="px-4 py-2.5 text-slate-300">Larger integer values</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">float</td>
                  <td className="px-4 py-2.5 text-slate-300">32 bits</td>
                  <td className="px-4 py-2.5 text-slate-300">Floating-point values</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">double</td>
                  <td className="px-4 py-2.5 text-slate-300">64 bits</td>
                  <td className="px-4 py-2.5 text-slate-300">General floating-point calculations</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">char</td>
                  <td className="px-4 py-2.5 text-slate-300">16 bits</td>
                  <td className="px-4 py-2.5 text-slate-300">UTF-16 code units</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">boolean</td>
                  <td className="px-4 py-2.5 text-slate-300">JVM-dependent representation</td>
                  <td className="px-4 py-2.5 text-slate-300">Logical true/false values</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            The boolean type has no Java-language-defined storage size. JVM implementations are free to use different internal representations depending on context.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>9.6 Primitive versus reference types</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Java types are divided into primitive types and reference types.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-white">Primitive types</strong>
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Examples:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`int age = 20;
double price = 99.50;
char grade = 'A';
boolean active = true;`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Primitive variables hold primitive values directly.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-white">Reference types</strong>
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Examples:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`String name = "Alex";
int[] marks = {80, 90, 85};`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Reference variables hold references to objects or arrays.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            String is not a primitive data type.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            This distinction will become important when learning classes, objects, arrays, and memory management.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>9.7 Default values</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Fields receive default values when not explicitly initialized.
          </p>
          <div className="overflow-x-auto my-4 rounded-xl border border-slate-800 shadow-2xs">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-white border-b border-slate-800 font-semibold">
                <tr>
                  <th className="px-4 py-3">Type</th>
                  <th className="px-4 py-3">Default value</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">byte</td>
                  <td className="px-4 py-2.5 text-slate-300">0</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">short</td>
                  <td className="px-4 py-2.5 text-slate-300">0</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">int</td>
                  <td className="px-4 py-2.5 text-slate-300">0</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">long</td>
                  <td className="px-4 py-2.5 text-slate-300">0L</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">float</td>
                  <td className="px-4 py-2.5 text-slate-300">0.0f</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">double</td>
                  <td className="px-4 py-2.5 text-slate-300">0.0d</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">char</td>
                  <td className="px-4 py-2.5 text-slate-300">'\u0000'</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">boolean</td>
                  <td className="px-4 py-2.5 text-slate-300">false</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">Reference type</td>
                  <td className="px-4 py-2.5 text-slate-300">null</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            These default values apply to fields, including instance and static variables.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Local variables must be assigned a value before they are used.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Example:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public class DefaultValueExample {

    int number;
    boolean active;
    String name;

    public static void main(String[] args) {

        DefaultValueExample example = new DefaultValueExample();

        System.out.println(example.number);
        System.out.println(example.active);
        System.out.println(example.name);
    }
}`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Output:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`0
false
null`}</code>
            </pre>
          </div>
        </div>
      </section>

      {/* SECTION 10: 10. Type Conversion and Type Casting */}
      <section id="section-10" className="bg-slate-900/80 rounded-2xl border border-slate-800 p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-500/15 text-orange-300 text-xs font-bold uppercase tracking-wider font-mono">
            Part 4 · Type Conversion & Casting
          </span>
          <span className="text-xs font-mono text-slate-400">Section 10</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          10. Type Conversion and Type Casting
        </h2>
        <div className="space-y-4 text-slate-300 leading-relaxed text-sm sm:text-base">
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Type conversion is the process of converting a value from one data type to another.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Java allows certain conversions automatically and requires explicit instructions for others.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>10.1 Widening conversion</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Widening conversion moves a value from a type with a smaller range or precision category to a compatible type with a broader range or representation.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Example:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public class WideningExample {

    public static void main(String[] args) {

        int number = 100;

        double result = number;

        System.out.println(result);
    }
}`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Output:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`100.0`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            The conversion from <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">int</code> to <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">double</code> happens automatically.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Another example:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`byte smallNumber = 25;

int largerNumber = smallNumber;`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Common widening primitive conversions include:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-slate-300 text-sm sm:text-base my-3 leading-relaxed">
            <li>byte to short, int, long, float, or double</li>
            <li>short to int, long, float, or double</li>
            <li>char to int, long, float, or double</li>
            <li>int to long, float, or double</li>
            <li>long to float or double</li>
            <li>float to double</li>
          </ul>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Widening does not guarantee exact mathematical representation in every case. For example, a large <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">long</code> converted to <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">float</code> can lose precision.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>10.2 Narrowing conversion</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Narrowing conversion moves a value to a type with a smaller range or less precision.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            It generally requires explicit casting.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Example:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public class NarrowingExample {

    public static void main(String[] args) {

        double price = 99.99;

        int wholePrice = (int) price;

        System.out.println(wholePrice);
    }
}`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Output:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`99`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            The fractional part is discarded.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            The cast does not round the number to the nearest integer.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>10.3 Explicit type casting</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Syntax:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`targetType variable = (targetType) value;`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Example:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`double number = 45.87;

int result = (int) number;`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Here, the value is explicitly converted from <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">double</code> to <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">int</code>.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>10.4 Numeric promotion in expressions</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Java automatically promotes certain numeric values when arithmetic operations are performed.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Example:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public class PromotionExample {

    public static void main(String[] args) {

        byte a = 10;
        byte b = 20;

        int result = a + b;

        System.out.println(result);
    }
}`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Output:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`30`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Even though both operands are <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">byte</code>, the arithmetic expression is evaluated as an <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">int</code>.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            This is why the result is stored in an <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">int</code>.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Another example:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`int a = 10;
double b = 5.5;

double result = a + b;`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            The integer value is promoted to <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">double</code> for the arithmetic operation.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>10.5 Type casting and data loss</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Casting can result in information loss.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Consider:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`int number = 130;

byte result = (byte) number;

System.out.println(result);`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Because <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">130</code> is outside the range of <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">byte</code>, the narrowing conversion does not preserve the original numeric value.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            For Java's integer narrowing conversions, the low-order bits are retained, which in this example produces:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`-126`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            A cast should not be used blindly. Always consider the target type's range and precision.
          </p>
        </div>
      </section>

      {/* SECTION 11: 11. Operators and Expressions */}
      <section id="section-11" className="bg-slate-900/80 rounded-2xl border border-slate-800 p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-500/15 text-orange-300 text-xs font-bold uppercase tracking-wider font-mono">
            Part 5 · Operators, Precedence & Evaluation
          </span>
          <span className="text-xs font-mono text-slate-400">Section 11</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          11. Operators and Expressions
        </h2>
        <div className="space-y-4 text-slate-300 leading-relaxed text-sm sm:text-base">
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Operators are symbols that perform operations on values and variables.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            An expression is a combination of operands and operators that produces a result.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            For example:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`int result = 10 + 20;`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Here:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-slate-300 text-sm sm:text-base my-3 leading-relaxed">
            <li><code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">10</code> and <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">20</code> are operands.</li>
            <li><code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">+</code> is an operator.</li>
            <li><code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">10 + 20</code> is an expression.</li>
            <li><code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">result</code> stores the calculated value.</li>
          </ul>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>11.1 Arithmetic operators</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Arithmetic operators perform mathematical calculations.
          </p>
          <div className="overflow-x-auto my-4 rounded-xl border border-slate-800 shadow-2xs">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-white border-b border-slate-800 font-semibold">
                <tr>
                  <th className="px-4 py-3">Operator</th>
                  <th className="px-4 py-3">Meaning</th>
                  <th className="px-4 py-3">Example</th>
                  <th className="px-4 py-3">Result</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">+</td>
                  <td className="px-4 py-2.5 text-slate-300">Addition</td>
                  <td className="px-4 py-2.5 text-slate-300">10 + 5</td>
                  <td className="px-4 py-2.5 text-slate-300">15</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">-</td>
                  <td className="px-4 py-2.5 text-slate-300">Subtraction</td>
                  <td className="px-4 py-2.5 text-slate-300">10 - 5</td>
                  <td className="px-4 py-2.5 text-slate-300">5</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">*</td>
                  <td className="px-4 py-2.5 text-slate-300">Multiplication</td>
                  <td className="px-4 py-2.5 text-slate-300">10 * 5</td>
                  <td className="px-4 py-2.5 text-slate-300">50</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">/</td>
                  <td className="px-4 py-2.5 text-slate-300">Division</td>
                  <td className="px-4 py-2.5 text-slate-300">10 / 5</td>
                  <td className="px-4 py-2.5 text-slate-300">2</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">%</td>
                  <td className="px-4 py-2.5 text-slate-300">Remainder</td>
                  <td className="px-4 py-2.5 text-slate-300">10 % 3</td>
                  <td className="px-4 py-2.5 text-slate-300">1</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Example:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public class ArithmeticExample {

    public static void main(String[] args) {

        int a = 20;
        int b = 6;

        System.out.println("Addition: " + (a + b));
        System.out.println("Subtraction: " + (a - b));
        System.out.println("Multiplication: " + (a * b));
        System.out.println("Division: " + (a / b));
        System.out.println("Remainder: " + (a % b));
    }
}`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Output:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Addition: 26
Subtraction: 14
Multiplication: 120
Division: 3
Remainder: 2`}</code>
            </pre>
          </div>
          <h4 className="text-base sm:text-lg font-bold text-white mt-4 mb-2 flex items-center gap-2">
            <span>Important: Integer division</span>
          </h4>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            When both operands are integers, Java performs integer division.
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`int result = 10 / 3;

System.out.println(result);`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Output:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`3`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            The fractional part is discarded.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            To obtain a floating-point result:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`double result = 10.0 / 3;

System.out.println(result);`}</code>
            </pre>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>11.2 Assignment operators</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Assignment operators assign values to variables.
          </p>
          <div className="overflow-x-auto my-4 rounded-xl border border-slate-800 shadow-2xs">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-white border-b border-slate-800 font-semibold">
                <tr>
                  <th className="px-4 py-3">Operator</th>
                  <th className="px-4 py-3">Example</th>
                  <th className="px-4 py-3">Equivalent operation</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">=</td>
                  <td className="px-4 py-2.5 text-slate-300">a = 10</td>
                  <td className="px-4 py-2.5 text-slate-300">Assign 10</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">+=</td>
                  <td className="px-4 py-2.5 text-slate-300">a += 5</td>
                  <td className="px-4 py-2.5 text-slate-300">a = a + 5</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">-=</td>
                  <td className="px-4 py-2.5 text-slate-300">a -= 5</td>
                  <td className="px-4 py-2.5 text-slate-300">a = a - 5</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">*=</td>
                  <td className="px-4 py-2.5 text-slate-300">a *= 2</td>
                  <td className="px-4 py-2.5 text-slate-300">a = a * 2</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">/=</td>
                  <td className="px-4 py-2.5 text-slate-300">a /= 2</td>
                  <td className="px-4 py-2.5 text-slate-300">a = a / 2</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">%=</td>
                  <td className="px-4 py-2.5 text-slate-300">a %= 3</td>
                  <td className="px-4 py-2.5 text-slate-300">a = a % 3</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Example:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public class AssignmentExample {

    public static void main(String[] args) {

        int balance = 1000;

        balance += 500;

        System.out.println(balance);

        balance -= 200;

        System.out.println(balance);
    }
}`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Output:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`1500
1300`}</code>
            </pre>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>11.3 Relational operators</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Relational operators compare two values.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            They produce a boolean result.
          </p>
          <div className="overflow-x-auto my-4 rounded-xl border border-slate-800 shadow-2xs">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-white border-b border-slate-800 font-semibold">
                <tr>
                  <th className="px-4 py-3">Operator</th>
                  <th className="px-4 py-3">Meaning</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">==</td>
                  <td className="px-4 py-2.5 text-slate-300">Equal to</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">!=</td>
                  <td className="px-4 py-2.5 text-slate-300">Not equal to</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">&gt;</td>
                  <td className="px-4 py-2.5 text-slate-300">Greater than</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">&lt;</td>
                  <td className="px-4 py-2.5 text-slate-300">Less than</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">&gt;=</td>
                  <td className="px-4 py-2.5 text-slate-300">Greater than or equal to</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">&lt;=</td>
                  <td className="px-4 py-2.5 text-slate-300">Less than or equal to</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Example:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public class ComparisonExample {

    public static void main(String[] args) {

        int age = 21;

        System.out.println(age > 18);
        System.out.println(age == 21);
        System.out.println(age < 18);
    }
}`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Output:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`true
true
false`}</code>
            </pre>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>11.4 Logical operators</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Logical operators combine or reverse boolean expressions.
          </p>
          <div className="overflow-x-auto my-4 rounded-xl border border-slate-800 shadow-2xs">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-white border-b border-slate-800 font-semibold">
                <tr>
                  <th className="px-4 py-3">Operator</th>
                  <th className="px-4 py-3">Meaning</th>
                  <th className="px-4 py-3">Example</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">&amp;&amp;</td>
                  <td className="px-4 py-2.5 text-slate-300">Logical AND</td>
                  <td className="px-4 py-2.5 text-slate-300">a &amp;&amp; b</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">\</td>
                  <td className="px-4 py-2.5 text-slate-300">\</td>
                  <td className="px-4 py-2.5 text-slate-300"></td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">!</td>
                  <td className="px-4 py-2.5 text-slate-300">Logical NOT</td>
                  <td className="px-4 py-2.5 text-slate-300">!a</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-white">Logical AND</strong>
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Returns true only when both conditions are true.
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`int age = 22;
boolean hasID = true;

boolean canEnter = age >= 18 && hasID;

System.out.println(canEnter);`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Output:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`true`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-white">Logical OR</strong>
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Returns true when at least one condition is true.
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`boolean hasEmail = true;
boolean hasPhone = false;

boolean canContact = hasEmail || hasPhone;

System.out.println(canContact);`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Output:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`true`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-white">Logical NOT</strong>
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Reverses a boolean value.
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`boolean isLoggedIn = false;

System.out.println(!isLoggedIn);`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Output:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`true`}</code>
            </pre>
          </div>
          <h4 className="text-base sm:text-lg font-bold text-white mt-4 mb-2 flex items-center gap-2">
            <span>Short-circuit evaluation</span>
          </h4>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Java's <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">&amp;&amp;</code> and <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">||</code> operators use short-circuit evaluation.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            For <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">&amp;&amp;</code>, when the left condition is false, the right condition does not need to be evaluated.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            For <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">||</code>, when the left condition is true, the right condition does not need to be evaluated.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Example:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`int number = 0;

if (number != 0 && 10 / number > 1) {
    System.out.println("Condition satisfied");
}`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Because <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">number != 0</code> is false, Java does not evaluate the division expression. This avoids division by zero.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>11.5 Increment and decrement operators</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            The increment operator increases a numeric variable by one.
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`int count = 5;

count++;`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            The decrement operator decreases a numeric variable by one.
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`count--;`}</code>
            </pre>
          </div>
          <h4 className="text-base sm:text-lg font-bold text-white mt-4 mb-2 flex items-center gap-2">
            <span>Pre-increment</span>
          </h4>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`int a = 5;

int result = ++a;

System.out.println(a);
System.out.println(result);`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Output:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`6
6`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            The variable is incremented before its updated value is used.
          </p>
          <h4 className="text-base sm:text-lg font-bold text-white mt-4 mb-2 flex items-center gap-2">
            <span>Post-increment</span>
          </h4>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`int a = 5;

int result = a++;

System.out.println(a);
System.out.println(result);`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Output:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`6
5`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            The current value is used before the variable is incremented.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            These operators are especially important when they are part of larger expressions.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>11.6 Conditional operator</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            The conditional operator is a compact expression that chooses between two values based on a boolean condition.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Syntax:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`condition ? valueIfTrue : valueIfFalse;`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Example:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`int age = 20;

String status = age >= 18 ? "Adult" : "Minor";

System.out.println(status);`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Output:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Adult`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            We will study control-flow statements in greater depth in a later module.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>11.7 Bitwise operators</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Bitwise operators operate on individual bits of integral values.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Important operators:
          </p>
          <div className="overflow-x-auto my-4 rounded-xl border border-slate-800 shadow-2xs">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-white border-b border-slate-800 font-semibold">
                <tr>
                  <th className="px-4 py-3">Operator</th>
                  <th className="px-4 py-3">Meaning</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">&amp;</td>
                  <td className="px-4 py-2.5 text-slate-300">Bitwise AND</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">\</td>
                  <td className="px-4 py-2.5 text-slate-300"></td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">^</td>
                  <td className="px-4 py-2.5 text-slate-300">Bitwise XOR</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">~</td>
                  <td className="px-4 py-2.5 text-slate-300">Bitwise complement</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">&lt;&lt;</td>
                  <td className="px-4 py-2.5 text-slate-300">Left shift</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">&gt;&gt;</td>
                  <td className="px-4 py-2.5 text-slate-300">Signed right shift</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">&gt;&gt;&gt;</td>
                  <td className="px-4 py-2.5 text-slate-300">Unsigned right shift</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Example:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public class BitwiseExample {

    public static void main(String[] args) {

        int a = 5;
        int b = 3;

        System.out.println(a & b);
        System.out.println(a | b);
        System.out.println(a ^ b);
    }
}`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Binary representation:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`5 = 0101
3 = 0011`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Results:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`AND = 0001 = 1
OR  = 0111 = 7
XOR = 0110 = 6`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Bitwise operations are useful in low-level processing, masks, flags, and performance-oriented tasks.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>11.8 Operator precedence</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Operator precedence determines how expressions are grouped when parentheses are not used.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Example:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`int result = 10 + 5 * 2;`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Multiplication has higher precedence than addition.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Therefore:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`10 + (5 * 2)
= 10 + 10
= 20`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Using parentheses makes the intended logic clear.
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`int result = (10 + 5) * 2;`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Result:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`30`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Important operator precedence order, from higher to lower, includes:
          </p>
          <ol className="list-decimal pl-5 space-y-2 text-slate-300 text-sm sm:text-base my-3 leading-relaxed">
            <li>Postfix operators: <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">x++</code>, <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">x--</code></li>
            <li>Unary operators: <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">++x</code>, <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">--x</code>, <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">!</code>, <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">~</code>, unary <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">+</code>, unary <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">-</code></li>
            <li>Multiplicative: <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">*</code>, <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">/</code>, <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">%</code></li>
            <li>Additive: <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">+</code>, <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">-</code></li>
            <li>Relational and type comparison: <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">&lt;</code>, <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">&gt;</code>, <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">&lt;=</code>, <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">&gt;=</code>, <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">instanceof</code></li>
            <li>Equality: <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">==</code>, <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">!=</code></li>
            <li>Bitwise AND, XOR, OR</li>
            <li>Logical AND: <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">&amp;&amp;</code></li>
            <li>Logical OR: <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">||</code></li>
            <li>Conditional: <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">?:</code></li>
            <li>Assignment operators: <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">=</code>, <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">+=</code>, <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">-=</code>, etc.</li>
          </ol>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            The complete precedence rules are defined by Java's language specification. In normal application code, use parentheses when an expression could be difficult to read.
          </p>
        </div>
      </section>

      {/* SECTION 12: 12. Input and Output Using Scanner */}
      <section id="section-12" className="bg-slate-900/80 rounded-2xl border border-slate-800 p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-500/15 text-orange-300 text-xs font-bold uppercase tracking-wider font-mono">
            Part 6 · Scanner & Console I/O
          </span>
          <span className="text-xs font-mono text-slate-400">Section 12</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          12. Input and Output Using Scanner
        </h2>
        <div className="space-y-4 text-slate-300 leading-relaxed text-sm sm:text-base">
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Programs often need to accept information from users.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            For example, a student-management system may request:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-slate-300 text-sm sm:text-base my-3 leading-relaxed">
            <li>Student name</li>
            <li>Age</li>
            <li>Registration number</li>
            <li>Marks</li>
          </ul>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Java provides several ways to accept input. One beginner-friendly approach is the <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">Scanner</code> class.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>12.1 What is Scanner?</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">Scanner</code> is a class from the <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">java.util</code> package.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            It can read values from sources such as keyboard input, files, and strings.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            To use it, import the class.
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`import java.util.Scanner;`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            A basic program:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`import java.util.Scanner;

public class UserInputExample {

    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter your name: ");

        String name = scanner.nextLine();

        System.out.println("Welcome, " + name);

        scanner.close();
    }
}`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Example interaction:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Enter your name: Alex
Welcome, Alex`}</code>
            </pre>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>12.2 Understanding Scanner components</span>
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Scanner scanner = new Scanner(System.in);`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-white">Scanner</strong>
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            The class used to read input.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-white">scanner</strong>
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            The variable holding the Scanner object reference.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-white">new</strong>
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Creates a new object.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-white">System.in</strong>
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            The standard input stream, typically connected to keyboard input in a terminal.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>12.3 Common Scanner methods</span>
          </h3>
          <div className="overflow-x-auto my-4 rounded-xl border border-slate-800 shadow-2xs">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-white border-b border-slate-800 font-semibold">
                <tr>
                  <th className="px-4 py-3">Method</th>
                  <th className="px-4 py-3">Purpose</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300"><code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">next()</code></td>
                  <td className="px-4 py-2.5 text-slate-300">Reads the next token</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300"><code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">nextLine()</code></td>
                  <td className="px-4 py-2.5 text-slate-300">Reads a complete line</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300"><code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">nextInt()</code></td>
                  <td className="px-4 py-2.5 text-slate-300">Reads an integer</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300"><code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">nextLong()</code></td>
                  <td className="px-4 py-2.5 text-slate-300">Reads a long integer</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300"><code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">nextFloat()</code></td>
                  <td className="px-4 py-2.5 text-slate-300">Reads a float</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300"><code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">nextDouble()</code></td>
                  <td className="px-4 py-2.5 text-slate-300">Reads a double</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300"><code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">nextBoolean()</code></td>
                  <td className="px-4 py-2.5 text-slate-300">Reads a boolean</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300"><code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">hasNext()</code></td>
                  <td className="px-4 py-2.5 text-slate-300">Checks whether another token is available</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300"><code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">hasNextInt()</code></td>
                  <td className="px-4 py-2.5 text-slate-300">Checks whether the next token can be read as an integer</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Example:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`import java.util.Scanner;

public class StudentDetails {

    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter name: ");
        String name = scanner.nextLine();

        System.out.print("Enter age: ");
        int age = scanner.nextInt();

        System.out.print("Enter marks: ");
        double marks = scanner.nextDouble();

        System.out.println("\\nStudent Information");

        System.out.println("Name: " + name);
        System.out.println("Age: " + age);
        System.out.println("Marks: " + marks);

        scanner.close();
    }
}`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Possible output:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Enter name: Alex Johnson
Enter age: 21
Enter marks: 88.5

Student Information
Name: Alex Johnson
Age: 21
Marks: 88.5`}</code>
            </pre>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>12.4 Difference between next() and nextLine()</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">next()</code> reads a token up to whitespace.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">nextLine()</code> reads the remainder of a line, including spaces.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Example:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Scanner scanner = new Scanner(System.in);

String firstName = scanner.next();
String fullName = scanner.nextLine();`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Suppose the user enters:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Alex Johnson`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            The first call reads <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">Alex</code>. The next call reads the remaining part of the current line, which may be only the separator and line ending depending on how the input is structured.
          </p>
          <h4 className="text-base sm:text-lg font-bold text-white mt-4 mb-2 flex items-center gap-2">
            <span>The common Scanner newline problem</span>
          </h4>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Consider:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`System.out.print("Enter age: ");
int age = scanner.nextInt();

System.out.print("Enter full name: ");
String name = scanner.nextLine();`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            After <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">nextInt()</code>, the newline that ends the entered number remains in the input. Therefore, <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">nextLine()</code> may immediately consume that remaining newline and return an empty string.
          </p>
          <h4 className="text-base sm:text-lg font-bold text-white mt-4 mb-2 flex items-center gap-2">
            <span>Correct approach</span>
          </h4>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Consume the remaining line after reading the integer:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`System.out.print("Enter age: ");
int age = scanner.nextInt();

scanner.nextLine();

System.out.print("Enter full name: ");
String name = scanner.nextLine();`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Now the second prompt reads the full name.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>12.5 Input validation</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Input validation checks whether user input is acceptable before the application uses it.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Example:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`import java.util.Scanner;

public class InputValidation {

    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter your age: ");

        if (scanner.hasNextInt()) {

            int age = scanner.nextInt();

            if (age >= 0) {
                System.out.println("Your age is: " + age);
            } else {
                System.out.println("Age cannot be negative.");
            }

        } else {

            System.out.println("Please enter a valid integer.");
        }

        scanner.close();
    }
}`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            This example checks the input type and then checks whether the entered age is non-negative.
          </p>
        </div>
      </section>

      {/* SECTION 13: 13. Comments and Coding Conventions */}
      <section id="section-13" className="bg-slate-900/80 rounded-2xl border border-slate-800 p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-500/15 text-orange-300 text-xs font-bold uppercase tracking-wider font-mono">
            Part 7 · Conventions & Documentation
          </span>
          <span className="text-xs font-mono text-slate-400">Section 13</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          13. Comments and Coding Conventions
        </h2>
        <div className="space-y-4 text-slate-300 leading-relaxed text-sm sm:text-base">
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Comments are explanatory notes written in source code.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            The Java compiler generally ignores comments as instructions to execute, although documentation tools can process documentation comments.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Comments help developers understand the purpose and organization of code.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>13.1 Single-line comments</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Use <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">//</code> for a single-line comment.
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`// Calculate the total marks

int total = 80 + 90;`}</code>
            </pre>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>13.2 Multi-line comments</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Use <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">/*</code> and <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">*/</code> for a block comment.
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`/*
This program calculates
the average of three marks.
*/

int average = (80 + 90 + 85) / 3;`}</code>
            </pre>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>13.3 Documentation comments</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Documentation comments use <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">/**</code> and <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">*/</code>.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            They can be processed by the <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">javadoc</code> tool.
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`/**
 * Calculates the area of a rectangle.
 *
 * @param length rectangle length
 * @param width rectangle width
 * @return calculated area
 */
public static double calculateArea(double length, double width) {
    return length * width;
}`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            We will study methods and method documentation in later modules.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>13.4 Java coding conventions</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Coding conventions are shared guidelines that make code more readable and consistent.
          </p>
          <h4 className="text-base sm:text-lg font-bold text-white mt-4 mb-2 flex items-center gap-2">
            <span>Class names</span>
          </h4>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Use PascalCase.
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public class StudentManagement {
}`}</code>
            </pre>
          </div>
          <h4 className="text-base sm:text-lg font-bold text-white mt-4 mb-2 flex items-center gap-2">
            <span>Variable names</span>
          </h4>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Use camelCase.
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`int studentAge;
double accountBalance;
String firstName;`}</code>
            </pre>
          </div>
          <h4 className="text-base sm:text-lg font-bold text-white mt-4 mb-2 flex items-center gap-2">
            <span>Method names</span>
          </h4>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Use camelCase and usually start with a verb.
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`calculateTotal();
displayResult();
getStudentName();`}</code>
            </pre>
          </div>
          <h4 className="text-base sm:text-lg font-bold text-white mt-4 mb-2 flex items-center gap-2">
            <span>Constants</span>
          </h4>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Use uppercase words separated by underscores.
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`final int MAX_USERS = 100;
final double INTEREST_RATE = 0.05;`}</code>
            </pre>
          </div>
          <h4 className="text-base sm:text-lg font-bold text-white mt-4 mb-2 flex items-center gap-2">
            <span>Indentation</span>
          </h4>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Use consistent indentation to make blocks easy to identify.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Preferred:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public class Example {

    public static void main(String[] args) {

        int number = 10;

        if (number > 5) {
            System.out.println("Greater than five");
        }
    }
}`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Avoid:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public class Example {
public static void main(String[] args) {
int number=10;if(number>5){System.out.println("Greater");}
}
}`}</code>
            </pre>
          </div>
          <h4 className="text-base sm:text-lg font-bold text-white mt-4 mb-2 flex items-center gap-2">
            <span>Meaningful names</span>
          </h4>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Prefer:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`double monthlySalary;`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Instead of:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`double x;`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Descriptive variable names make code easier to understand, debug, and maintain.
          </p>
          <h4 className="text-base sm:text-lg font-bold text-white mt-4 mb-2 flex items-center gap-2">
            <span>Avoid unnecessary comments</span>
          </h4>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Comments should explain important intent, assumptions, or complex decisions.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            A comment that simply repeats the code is often unnecessary.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Less helpful:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`// Add 10 to number
number = number + 10;`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            More useful:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`// Apply the fixed bonus to the employee's base salary.
salary = salary + 1000;`}</code>
            </pre>
          </div>
        </div>
      </section>

      {/* SECTION 14: 14. Debugging Fundamentals */}
      <section id="section-14" className="bg-slate-900/80 rounded-2xl border border-slate-800 p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-500/15 text-orange-300 text-xs font-bold uppercase tracking-wider font-mono">
            Part 8 · Debugging & Error Classification
          </span>
          <span className="text-xs font-mono text-slate-400">Section 14</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          14. Debugging Fundamentals
        </h2>
        <div className="space-y-4 text-slate-300 leading-relaxed text-sm sm:text-base">
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Debugging is the systematic process of identifying, understanding, and correcting defects in software.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Writing a program does not guarantee that it will work correctly.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            A program may contain errors even when its code appears reasonable.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>14.1 What is a bug?</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            A bug is a defect or mistake that causes a program to behave incorrectly or unexpectedly.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Examples:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-slate-300 text-sm sm:text-base my-3 leading-relaxed">
            <li>The program crashes.</li>
            <li>The program produces an incorrect result.</li>
            <li>Data is lost.</li>
            <li>A calculation gives the wrong value.</li>
            <li>An application becomes unresponsive.</li>
            <li>A feature behaves differently from its requirements.</li>
          </ul>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>14.2 Types of programming errors</span>
          </h3>
          <h4 className="text-base sm:text-lg font-bold text-white mt-4 mb-2 flex items-center gap-2">
            <span>A. Syntax errors</span>
          </h4>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Syntax errors occur when code violates Java's grammar rules.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Example:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public class SyntaxError {

    public static void main(String[] args) {

        System.out.println("Hello Java")

    }
}`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Problem: The statement is missing a semicolon.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Correction:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`System.out.println("Hello Java");`}</code>
            </pre>
          </div>
          <h4 className="text-base sm:text-lg font-bold text-white mt-4 mb-2 flex items-center gap-2">
            <span>B. Compile-time errors</span>
          </h4>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Compile-time errors are errors reported by the compiler.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Some are syntax errors, while others result from invalid types, inaccessible members, or other language-rule violations.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Example:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public class CompileError {

    public static void main(String[] args) {

        int age = "Twenty";
    }
}`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Problem: A string cannot be assigned directly to an integer variable.
          </p>
          <h4 className="text-base sm:text-lg font-bold text-white mt-4 mb-2 flex items-center gap-2">
            <span>C. Runtime errors</span>
          </h4>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Runtime errors occur while a program is executing.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Example:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public class RuntimeError {

    public static void main(String[] args) {

        int result = 10 / 0;

        System.out.println(result);
    }
}`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Problem: Integer division by zero causes an <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">ArithmeticException</code>.
          </p>
          <h4 className="text-base sm:text-lg font-bold text-white mt-4 mb-2 flex items-center gap-2">
            <span>D. Logical errors</span>
          </h4>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Logical errors occur when the program executes but produces an incorrect result.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Example:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public class LogicalError {

    public static void main(String[] args) {

        int length = 10;
        int width = 5;

        int area = length + width;

        System.out.println(area);
    }
}`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Problem: The program adds length and width instead of multiplying them.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Correct implementation:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`int area = length * width;`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            The code may compile and execute without an error, but the result is incorrect.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>14.3 What is a debugger?</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            A debugger is a tool that allows developers to inspect program execution.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Common debugging features include:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-slate-300 text-sm sm:text-base my-3 leading-relaxed">
            <li>Breakpoints</li>
            <li>Step into</li>
            <li>Step over</li>
            <li>Step out</li>
            <li>Variable inspection</li>
            <li>Call stack inspection</li>
            <li>Execution control</li>
          </ul>
          <h4 className="text-base sm:text-lg font-bold text-white mt-4 mb-2 flex items-center gap-2">
            <span>Breakpoint</span>
          </h4>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            A breakpoint pauses program execution at a selected statement.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Example:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`int a = 10;

int b = 20;

int result = a + b;

System.out.println(result);`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            If a breakpoint is placed at the result calculation, the debugger can pause before that operation.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            The developer can inspect <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">a</code> and <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">b</code>, execute the statement, and examine the result.
          </p>
          <h4 className="text-base sm:text-lg font-bold text-white mt-4 mb-2 flex items-center gap-2">
            <span>Step Over</span>
          </h4>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Executes the current line and moves to the next line without entering the called method's implementation.
          </p>
          <h4 className="text-base sm:text-lg font-bold text-white mt-4 mb-2 flex items-center gap-2">
            <span>Step Into</span>
          </h4>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Moves into the method being called, allowing its internal statements to be inspected.
          </p>
          <h4 className="text-base sm:text-lg font-bold text-white mt-4 mb-2 flex items-center gap-2">
            <span>Step Out</span>
          </h4>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Continues execution until the current method returns.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>14.4 A systematic debugging process</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            When a program produces an unexpected result:
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-white">Step 1 — Reproduce the problem</strong>
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Run the program again with the same input.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-white">Step 2 — Read the error message</strong>
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Compiler messages and stack traces often identify the class, file, line, or operation related to the problem.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-white">Step 3 — Identify the failing stage</strong>
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Determine whether the problem occurs during compilation or execution, or whether it is a logical defect.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-white">Step 4 — Inspect relevant values</strong>
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Check the inputs, intermediate calculations, and program state.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-white">Step 5 — Locate the root cause</strong>
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Find the actual reason the behavior is incorrect.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-white">Step 6 — Make a correction</strong>
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Change the logic or code responsible for the defect.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-white">Step 7 — Test again</strong>
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Verify that the correction works and that existing behavior has not been unintentionally broken.
          </p>
          <h4 className="text-base sm:text-lg font-bold text-white mt-4 mb-2 flex items-center gap-2">
            <span>Worked debugging example</span>
          </h4>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Original code:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public class AverageBug {

    public static void main(String[] args) {

        int mark1 = 80;
        int mark2 = 90;
        int mark3 = 70;

        int average = mark1 + mark2 + mark3 / 3;

        System.out.println("Average: " + average);
    }
}`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Expected result:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Average: 80`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Actual result:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Average: 193`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Why?
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Multiplication and division have higher precedence than addition.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Java evaluates:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`80 + 90 + (70 / 3)`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Because <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">70 / 3</code> is integer division, the result is:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`80 + 90 + 23
= 193`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Corrected code:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public class AverageBug {

    public static void main(String[] args) {

        int mark1 = 80;
        int mark2 = 90;
        int mark3 = 70;

        int average = (mark1 + mark2 + mark3) / 3;

        System.out.println("Average: " + average);
    }
}`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Output:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Average: 80`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            The correction uses parentheses to ensure that all three marks are added before division.
          </p>
        </div>
      </section>

      {/* SECTION 15: 15. First Java Programs (8 Worked Examples) */}
      <section id="section-15" className="bg-slate-900/80 rounded-2xl border border-slate-800 p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-500/15 text-orange-300 text-xs font-bold uppercase tracking-wider font-mono">
            Part 9 · Worked Java Programs
          </span>
          <span className="text-xs font-mono text-slate-400">Section 15</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          15. First Java Programs (8 Worked Examples)
        </h2>
        <div className="space-y-4 text-slate-300 leading-relaxed text-sm sm:text-base">
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            In this section, students apply the concepts introduced throughout the module.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            The examples should be written, compiled, executed, and modified independently.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>Program 1 — Hello World</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Objective: Understand the structure of a Java program and display output.
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public class HelloWorld {

    public static void main(String[] args) {

        System.out.println("Hello, World!");
        System.out.println("Welcome to Java Programming");

    }
}`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Output:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Hello, World!
Welcome to Java Programming`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Concepts covered:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-slate-300 text-sm sm:text-base my-3 leading-relaxed">
            <li>Class declaration</li>
            <li>Main method</li>
            <li>Output statements</li>
            <li>Strings</li>
            <li>Java source-file structure</li>
          </ul>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>Program 2 — Display student information</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Objective: Work with variables and different data types.
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public class StudentInformation {

    public static void main(String[] args) {

        String name = "Alex";
        int age = 21;
        char grade = 'A';
        double percentage = 89.5;
        boolean isPassed = true;

        System.out.println("Student Information");

        System.out.println("Name: " + name);
        System.out.println("Age: " + age);
        System.out.println("Grade: " + grade);
        System.out.println("Percentage: " + percentage);
        System.out.println("Passed: " + isPassed);

    }
}`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Output:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Student Information
Name: Alex
Age: 21
Grade: A
Percentage: 89.5
Passed: true`}</code>
            </pre>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>Program 3 — Arithmetic calculator</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Objective: Apply arithmetic operators.
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public class ArithmeticCalculator {

    public static void main(String[] args) {

        int a = 20;
        int b = 5;

        System.out.println("Addition: " + (a + b));
        System.out.println("Subtraction: " + (a - b));
        System.out.println("Multiplication: " + (a * b));
        System.out.println("Division: " + (a / b));
        System.out.println("Remainder: " + (a % b));

    }
}`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Output:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Addition: 25
Subtraction: 15
Multiplication: 100
Division: 4
Remainder: 0`}</code>
            </pre>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>Program 4 — Area of a circle</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Objective: Use variables, constants, multiplication, and floating-point calculations.
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public class CircleArea {

    public static void main(String[] args) {

        final double PI = 3.14159;

        double radius = 7;

        double area = PI * radius * radius;

        System.out.println("Radius: " + radius);
        System.out.println("Area of circle: " + area);

    }
}`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Output:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Radius: 7.0
Area of circle: 153.93791`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Formula:
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Area = π × radius × radius
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>Program 5 — Type conversion</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Objective: Understand automatic widening conversion and explicit narrowing conversion.
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public class TypeConversion {

    public static void main(String[] args) {

        int number = 100;

        double decimalNumber = number;

        double price = 99.75;

        int wholePrice = (int) price;

        System.out.println("Integer: " + number);
        System.out.println("Widened value: " + decimalNumber);
        System.out.println("Original price: " + price);
        System.out.println("Narrowed value: " + wholePrice);

    }
}`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Output:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Integer: 100
Widened value: 100.0
Original price: 99.75
Narrowed value: 99`}</code>
            </pre>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>Program 6 — User input</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Objective: Accept information from the keyboard using Scanner.
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`import java.util.Scanner;

public class UserInput {

    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter your name: ");
        String name = scanner.nextLine();

        System.out.print("Enter your age: ");
        int age = scanner.nextInt();

        System.out.print("Enter your height in meters: ");
        double height = scanner.nextDouble();

        System.out.println("\\nYour Profile");

        System.out.println("Name: " + name);
        System.out.println("Age: " + age);
        System.out.println("Height: " + height);

        scanner.close();
    }
}`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Example interaction:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Enter your name: Alex Johnson
Enter your age: 21
Enter your height in meters: 1.75

Your Profile
Name: Alex Johnson
Age: 21
Height: 1.75`}</code>
            </pre>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>Program 7 — Student marks and average</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Objective: Combine variables, input, arithmetic operations, and output.
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`import java.util.Scanner;

public class StudentAverage {

    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter marks for subject 1: ");
        double mark1 = scanner.nextDouble();

        System.out.print("Enter marks for subject 2: ");
        double mark2 = scanner.nextDouble();

        System.out.print("Enter marks for subject 3: ");
        double mark3 = scanner.nextDouble();

        double total = mark1 + mark2 + mark3;

        double average = total / 3;

        System.out.println("\\nResult");

        System.out.println("Total Marks: " + total);
        System.out.println("Average: " + average);

        scanner.close();
    }
}`}</code>
            </pre>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>Program 8 — Simple bill calculator</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Objective: Apply arithmetic operators and constants in a real-world calculation.
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public class BillCalculator {

    public static void main(String[] args) {

        final double TAX_RATE = 0.18;

        double productPrice = 1000;
        int quantity = 2;

        double subtotal = productPrice * quantity;

        double tax = subtotal * TAX_RATE;

        double finalAmount = subtotal + tax;

        System.out.println("Product Price: " + productPrice);
        System.out.println("Quantity: " + quantity);
        System.out.println("Subtotal: " + subtotal);
        System.out.println("Tax: " + tax);
        System.out.println("Final Amount: " + finalAmount);

    }
}`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Output:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Product Price: 1000.0
Quantity: 2
Subtotal: 2000.0
Tax: 360.0
Final Amount: 2360.0`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            This is a simplified educational calculation. Real commercial billing systems must also consider rounding rules, currency precision, discounts, and applicable tax rules.
          </p>
        </div>
      </section>

      {/* SECTION 16: 16. Practical Laboratory Exercises (5 Labs) */}
      <section id="section-16" className="bg-slate-900/80 rounded-2xl border border-slate-800 p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-500/15 text-orange-300 text-xs font-bold uppercase tracking-wider font-mono">
            Part 10 · Hands-on Laboratory Exercises
          </span>
          <span className="text-xs font-mono text-slate-400">Section 16</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          16. Practical Laboratory Exercises (5 Labs)
        </h2>
        <div className="space-y-4 text-slate-300 leading-relaxed text-sm sm:text-base">
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Students should complete these exercises using an IDE or terminal.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>Lab 1 — Java environment setup</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-white">Objective:</strong> Install the JDK and verify the development environment.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Tasks:
          </p>
          <ol className="list-decimal pl-5 space-y-2 text-slate-300 text-sm sm:text-base my-3 leading-relaxed">
            <li>Install a supported JDK distribution.</li>
            <li>Open the terminal.</li>
            <li>Run <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">java -version</code>.</li>
            <li>Run <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">javac -version</code>.</li>
            <li>Create a directory called <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">JavaFoundations</code>.</li>
            <li>Create a Java source file.</li>
            <li>Compile and execute the file.</li>
          </ol>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Expected outcome:
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            The student can compile and execute a Java program from the command line.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>Lab 2 — Personal information program</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-white">Objective:</strong> Understand variables and data types.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Requirements:
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Create a program that stores and displays:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-slate-300 text-sm sm:text-base my-3 leading-relaxed">
            <li>Full name</li>
            <li>Age</li>
            <li>College name</li>
            <li>Course name</li>
            <li>Percentage</li>
            <li>Grade</li>
            <li>Whether the student is currently enrolled</li>
          </ul>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Use appropriate Java data types.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>Lab 3 — Marks calculator</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-white">Objective:</strong> Understand arithmetic operations and floating-point calculations.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Requirements:
          </p>
          <ol className="list-decimal pl-5 space-y-2 text-slate-300 text-sm sm:text-base my-3 leading-relaxed">
            <li>Store marks for five subjects.</li>
            <li>Calculate total marks.</li>
            <li>Calculate average marks.</li>
            <li>Display the result with meaningful labels.</li>
            <li>Use an appropriate data type.</li>
          </ol>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Example:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Subject 1: 80
Subject 2: 85
Subject 3: 90
Subject 4: 75
Subject 5: 95

Total: 425
Average: 85.0`}</code>
            </pre>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>Lab 4 — Unit conversion program</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-white">Objective:</strong> Understand mathematical expressions and type handling.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Requirements:
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Create a program that converts temperature from Celsius to Fahrenheit.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Formula:
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Fahrenheit = (Celsius × 9 / 5) + 32
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Example:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Celsius: 25
Fahrenheit: 77.0`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Use <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">double</code> for the calculation.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>Lab 5 — Simple banking calculation</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-white">Objective:</strong> Combine variables, constants, arithmetic, and formatted output.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Requirements:
          </p>
          <ol className="list-decimal pl-5 space-y-2 text-slate-300 text-sm sm:text-base my-3 leading-relaxed">
            <li>Store an initial account balance.</li>
            <li>Store a deposit amount.</li>
            <li>Store a withdrawal amount.</li>
            <li>Calculate the final balance.</li>
            <li>Display the transaction details.</li>
          </ol>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            For this introductory exercise, assume the withdrawal is valid and does not exceed the balance. Later modules will introduce conditions for validating banking operations.
          </p>
        </div>
      </section>

      {/* SECTION 17: 17. Independent Programming Assignments (6 Tasks) */}
      <section id="section-17" className="bg-slate-900/80 rounded-2xl border border-slate-800 p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-500/15 text-orange-300 text-xs font-bold uppercase tracking-wider font-mono">
            Part 11 · Independent Assignments
          </span>
          <span className="text-xs font-mono text-slate-400">Section 17</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          17. Independent Programming Assignments (6 Tasks)
        </h2>
        <div className="space-y-4 text-slate-300 leading-relaxed text-sm sm:text-base">
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            These assignments are designed to test whether students can apply the concepts without copying the worked examples.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>Assignment 1 — Personal profile generator</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Create a Java program that accepts the following details:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-slate-300 text-sm sm:text-base my-3 leading-relaxed">
            <li>Student name</li>
            <li>Age</li>
            <li>City</li>
            <li>College</li>
            <li>Course</li>
            <li>Percentage</li>
          </ul>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Display a well-formatted student profile.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Requirements:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-slate-300 text-sm sm:text-base my-3 leading-relaxed">
            <li>Use appropriate variables.</li>
            <li>Accept input through <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">Scanner</code>.</li>
            <li>Use meaningful names.</li>
            <li>Produce readable output.</li>
          </ul>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>Assignment 2 — Shopping total calculator</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Create a program that accepts:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-slate-300 text-sm sm:text-base my-3 leading-relaxed">
            <li>Product name</li>
            <li>Product price</li>
            <li>Quantity</li>
          </ul>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Calculate and display:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-slate-300 text-sm sm:text-base my-3 leading-relaxed">
            <li>Total price</li>
            <li>Tax amount</li>
            <li>Final amount</li>
          </ul>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Use a constant to represent the tax rate.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>Assignment 3 — Time conversion</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Create a program that accepts a total number of seconds and calculates:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-slate-300 text-sm sm:text-base my-3 leading-relaxed">
            <li>Hours</li>
            <li>Remaining minutes</li>
            <li>Remaining seconds</li>
          </ul>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Hint:
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Use integer division and the remainder operator.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            For example:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Input: 3675 seconds

Output:
Hours: 1
Minutes: 1
Seconds: 15`}</code>
            </pre>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>Assignment 4 — Distance converter</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Create a program to convert kilometers into:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-slate-300 text-sm sm:text-base my-3 leading-relaxed">
            <li>Meters</li>
            <li>Centimeters</li>
            <li>Miles</li>
          </ul>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Use appropriate mathematical formulas and data types.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>Assignment 5 — Salary calculator</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Create a program that accepts an employee's basic monthly salary and calculates:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-slate-300 text-sm sm:text-base my-3 leading-relaxed">
            <li>Annual basic salary</li>
            <li>Monthly allowance</li>
            <li>Monthly gross salary</li>
            <li>Annual gross salary</li>
          </ul>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Define the allowance percentage as a constant.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Document the assumptions used in your calculation.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>Assignment 6 — Debugging challenge</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            The following program is supposed to calculate the average of three values.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Identify and correct every issue.
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public class DebugChallenge {

    public static void main(String[] args) {

        int a = 10
        int b = 20;
        int c = 30;

        double average = a + b + c / 3;

        System.out.println("Average: " + Average);

    }
}`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Your task:
          </p>
          <ol className="list-decimal pl-5 space-y-2 text-slate-300 text-sm sm:text-base my-3 leading-relaxed">
            <li>Find the syntax error.</li>
            <li>Find the logical error.</li>
            <li>Find the identifier or naming error.</li>
            <li>Produce the correct output.</li>
          </ol>
        </div>
      </section>

      {/* SECTION 18: 18. Assessment and Review Questions */}
      <section id="section-18" className="bg-slate-900/80 rounded-2xl border border-slate-800 p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-500/15 text-orange-300 text-xs font-bold uppercase tracking-wider font-mono">
            Part 12 · Assessment & Review
          </span>
          <span className="text-xs font-mono text-slate-400">Section 18</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          18. Assessment and Review Questions
        </h2>
        <div className="space-y-4 text-slate-300 leading-relaxed text-sm sm:text-base">
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>Part A — Multiple-choice questions</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-white">1. What is the primary purpose of a programming language?</strong>
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            A. To manufacture computer hardware
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            B. To express instructions that a computer can process
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            C. To replace the operating system
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            D. To increase physical memory
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-white">Correct answer:</strong> B
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-white">2. Which of the following is responsible for executing Java bytecode?</strong>
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            A. JDK
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            B. JVM
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            C. Javadoc
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            D. Scanner
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-white">Correct answer:</strong> B
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-white">3. Which command compiles a Java source file?</strong>
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            A. <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">java</code>
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            B. <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">javac</code>
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            C. <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">compile</code>
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            D. <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">run</code>
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-white">Correct answer:</strong> B
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-white">4. Which file is generated by normal Java source compilation?</strong>
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            A. <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">.java</code>
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            B. <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">.exe</code>
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            C. <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">.class</code>
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            D. <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">.html</code>
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-white">Correct answer:</strong> C
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-white">5. Which data type is suitable for storing a whole-number value within the normal 32-bit signed integer range?</strong>
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            A. boolean
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            B. int
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            C. char
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            D. float
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-white">Correct answer:</strong> B
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-white">6. Which keyword is commonly used to declare a variable that cannot be reassigned after initialization?</strong>
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            A. static
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            B. public
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            C. final
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            D. void
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-white">Correct answer:</strong> C
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-white">7. What is the result of <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">10 / 3</code> when both operands are integers?</strong>
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            A. 3.33
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            B. 3
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            C. 4
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            D. 0
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-white">Correct answer:</strong> B
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-white">8. Which Scanner method reads a complete line of text?</strong>
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            A. <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">nextInt()</code>
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            B. <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">nextDouble()</code>
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            C. <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">nextLine()</code>
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            D. <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">nextBoolean()</code>
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-white">Correct answer:</strong> C
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-white">9. Which error can allow a program to compile and execute but still produce an incorrect result?</strong>
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            A. Syntax error
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            B. Logical error
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            C. Installation error
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            D. Import error
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-white">Correct answer:</strong> B
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-white">10. What does JDK stand for?</strong>
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            A. Java Development Kit
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            B. Java Data Kernel
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            C. Java Dynamic Key
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            D. Java Development Kernel
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-white">Correct answer:</strong> A
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>Part B — Short-answer questions</span>
          </h3>
          <ol className="list-decimal pl-5 space-y-2 text-slate-300 text-sm sm:text-base my-3 leading-relaxed">
            <li>Define computer science.</li>
            <li>Explain computational thinking.</li>
            <li>What is decomposition?</li>
            <li>Differentiate between machine language and high-level languages.</li>
            <li>Explain the major characteristics of Java.</li>
            <li>What is bytecode?</li>
            <li>Explain the relationship between JDK, JRE, and JVM.</li>
            <li>What is the purpose of the Java compiler?</li>
            <li>Explain the structure of a basic Java program.</li>
            <li>Why is the traditional <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">main()</code> method static?</li>
            <li>Differentiate between local, instance, and static variables.</li>
            <li>Explain the eight primitive data types.</li>
            <li>What is the difference between primitive and reference types?</li>
            <li>Explain widening and narrowing conversion.</li>
            <li>Differentiate between <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">print()</code> and <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">println()</code>.</li>
            <li>Explain arithmetic, relational, and logical operators.</li>
            <li>What is short-circuit evaluation?</li>
            <li>What is the difference between <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">next()</code> and <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">nextLine()</code>?</li>
            <li>Explain syntax, runtime, and logical errors.</li>
            <li>Describe a systematic debugging process.</li>
          </ol>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>Part C — Predict the output</span>
          </h3>
          <div className="mt-4 mb-2 p-3 rounded-lg bg-orange-500/15/70 border border-orange-500/30/80 font-semibold text-white text-sm sm:text-base">
            <strong className="font-semibold text-white">Question 1</strong>
          </div>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public class OutputOne {

    public static void main(String[] args) {

        int a = 10;
        int b = 3;

        System.out.println(a / b);
        System.out.println(a % b);
    }
}`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Answer:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`3
1`}</code>
            </pre>
          </div>
          <div className="mt-4 mb-2 p-3 rounded-lg bg-orange-500/15/70 border border-orange-500/30/80 font-semibold text-white text-sm sm:text-base">
            <strong className="font-semibold text-white">Question 2</strong>
          </div>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public class OutputTwo {

    public static void main(String[] args) {

        int a = 5;

        System.out.println(a++);
        System.out.println(++a);
    }
}`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Answer:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`5
7`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Explanation:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-slate-300 text-sm sm:text-base my-3 leading-relaxed">
            <li><code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">a++</code> first uses 5 and then increments it to 6.</li>
            <li><code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">++a</code> increments it to 7 before using it.</li>
          </ul>
          <div className="mt-4 mb-2 p-3 rounded-lg bg-orange-500/15/70 border border-orange-500/30/80 font-semibold text-white text-sm sm:text-base">
            <strong className="font-semibold text-white">Question 3</strong>
          </div>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public class OutputThree {

    public static void main(String[] args) {

        int a = 10;
        int b = 20;

        System.out.println(a + b * 2);
    }
}`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Answer:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`50`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Explanation:
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Multiplication is performed before addition.
          </p>
          <div className="mt-4 mb-2 p-3 rounded-lg bg-orange-500/15/70 border border-orange-500/30/80 font-semibold text-white text-sm sm:text-base">
            <strong className="font-semibold text-white">Question 4</strong>
          </div>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public class OutputFour {

    public static void main(String[] args) {

        double number = 25.75;

        int result = (int) number;

        System.out.println(result);
    }
}`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Answer:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`25`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Explanation:
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Explicit narrowing conversion discards the fractional part.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>Part D — Programming questions</span>
          </h3>
          <ol className="list-decimal pl-5 space-y-2 text-slate-300 text-sm sm:text-base my-3 leading-relaxed">
            <li>Write a program to add two integers.</li>
            <li>Write a program to calculate the area of a rectangle.</li>
            <li>Write a program to swap two variables using a temporary variable.</li>
            <li>Write a program to convert Celsius into Fahrenheit.</li>
            <li>Write a program to calculate the average of five numbers.</li>
            <li>Write a program to accept user details using Scanner.</li>
            <li>Write a program to calculate simple interest.</li>
            <li>Write a program to convert seconds into hours, minutes, and seconds.</li>
            <li>Write a program demonstrating all five arithmetic operators.</li>
            <li>Write a program demonstrating widening and narrowing conversions.</li>
          </ol>
        </div>
      </section>

      {/* SECTION 19: 19. Mini Project — Student Result and Profile System */}
      <section id="section-19" className="bg-slate-900/80 rounded-2xl border border-slate-800 p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-500/15 text-orange-300 text-xs font-bold uppercase tracking-wider font-mono">
            Part 13 · End-of-Module Mini Project
          </span>
          <span className="text-xs font-mono text-slate-400">Section 19</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          19. Mini Project — Student Result and Profile System
        </h2>
        <div className="space-y-4 text-slate-300 leading-relaxed text-sm sm:text-base">
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>Project objective</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Develop a small console-based Java application that collects student information, calculates examination results, and displays a formatted report.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            This project combines the primary concepts taught in Module 1.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>Functional requirements</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            The application should:
          </p>
          <ol className="list-decimal pl-5 space-y-2 text-slate-300 text-sm sm:text-base my-3 leading-relaxed">
            <li>Accept the student's full name.</li>
            <li>Accept the student's age.</li>
            <li>Accept the course name.</li>
            <li>Accept marks for five subjects.</li>
            <li>Calculate the total marks.</li>
            <li>Calculate the average marks.</li>
            <li>Calculate the percentage based on a maximum of 100 marks per subject.</li>
            <li>Display the complete student report.</li>
          </ol>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>Technical requirements</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Students must use:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-slate-300 text-sm sm:text-base my-3 leading-relaxed">
            <li>Java class structure</li>
            <li><code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">main()</code> method</li>
            <li><code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">String</code></li>
            <li><code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">int</code></li>
            <li><code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">double</code></li>
            <li>Variables and constants</li>
            <li><code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">Scanner</code></li>
            <li>Arithmetic operators</li>
            <li>Output statements</li>
            <li>Meaningful variable names</li>
            <li>Appropriate comments</li>
          </ul>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>Sample implementation</span>
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`import java.util.Scanner;

public class StudentResultSystem {

    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);

        final int NUMBER_OF_SUBJECTS = 5;
        final int MAX_MARKS_PER_SUBJECT = 100;

        System.out.print("Enter student name: ");
        String name = scanner.nextLine();

        System.out.print("Enter age: ");
        int age = scanner.nextInt();

        scanner.nextLine();

        System.out.print("Enter course name: ");
        String course = scanner.nextLine();

        System.out.print("Enter marks for subject 1: ");
        double mark1 = scanner.nextDouble();

        System.out.print("Enter marks for subject 2: ");
        double mark2 = scanner.nextDouble();

        System.out.print("Enter marks for subject 3: ");
        double mark3 = scanner.nextDouble();

        System.out.print("Enter marks for subject 4: ");
        double mark4 = scanner.nextDouble();

        System.out.print("Enter marks for subject 5: ");
        double mark5 = scanner.nextDouble();

        double total = mark1 + mark2 + mark3 + mark4 + mark5;

        double maximumMarks =
                NUMBER_OF_SUBJECTS * MAX_MARKS_PER_SUBJECT;

        double percentage = (total / maximumMarks) * 100;

        double average = total / NUMBER_OF_SUBJECTS;

        System.out.println("\\n========== STUDENT REPORT ==========");

        System.out.println("Name: " + name);
        System.out.println("Age: " + age);
        System.out.println("Course: " + course);

        System.out.println("Total Marks: " + total);
        System.out.println("Average Marks: " + average);
        System.out.println("Percentage: " + percentage + "%");

        System.out.println("====================================");

        scanner.close();
    }
}`}</code>
            </pre>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>Sample output</span>
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Enter student name: Alex Johnson
Enter age: 21
Enter course name: Computer Science

Enter marks for subject 1: 85
Enter marks for subject 2: 90
Enter marks for subject 3: 78
Enter marks for subject 4: 88
Enter marks for subject 5: 92

========== STUDENT REPORT ==========
Name: Alex Johnson
Age: 21
Course: Computer Science
Total Marks: 433.0
Average Marks: 86.6
Percentage: 86.6%
====================================`}</code>
            </pre>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>Project extension tasks</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            After completing the basic program, students should attempt the following improvements:
          </p>
          <ol className="list-decimal pl-5 space-y-2 text-slate-300 text-sm sm:text-base my-3 leading-relaxed">
            <li>Add input validation so marks cannot be negative or exceed the maximum.</li>
            <li>Add grade calculation using conditional statements.</li>
            <li>Allow multiple students to be entered.</li>
            <li>Calculate the class average.</li>
            <li>Add a simple menu for different operations.</li>
            <li>Store student records in arrays or collections.</li>
            <li>Separate calculations into reusable methods.</li>
          </ol>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            The extension tasks intentionally introduce concepts that will be taught in later modules. Students should complete them as those concepts become available.
          </p>
        </div>
      </section>

      {/* SECTION 20: 20. Common Beginner Mistakes in Java */}
      <section id="section-20" className="bg-slate-900/80 rounded-2xl border border-slate-800 p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-500/15 text-orange-300 text-xs font-bold uppercase tracking-wider font-mono">
            Part 14 · Beginner Traps & Antipatterns
          </span>
          <span className="text-xs font-mono text-slate-400">Section 20</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          20. Common Beginner Mistakes in Java
        </h2>
        <div className="space-y-4 text-slate-300 leading-relaxed text-sm sm:text-base">
          <div className="overflow-x-auto my-4 rounded-xl border border-slate-800 shadow-2xs">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-white border-b border-slate-800 font-semibold">
                <tr>
                  <th className="px-4 py-3">Mistake</th>
                  <th className="px-4 py-3">Why it happens</th>
                  <th className="px-4 py-3">Correct approach</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">Missing semicolon</td>
                  <td className="px-4 py-2.5 text-slate-300">Forgetting Java statement syntax</td>
                  <td className="px-4 py-2.5 text-slate-300">End applicable statements with <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">;</code></td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">Incorrect filename</td>
                  <td className="px-4 py-2.5 text-slate-300">Public class and filename do not match</td>
                  <td className="px-4 py-2.5 text-slate-300">Match the public class name and filename</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">Incorrect capitalization</td>
                  <td className="px-4 py-2.5 text-slate-300">Java is case-sensitive</td>
                  <td className="px-4 py-2.5 text-slate-300">Use exact identifier spelling</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">Using <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">=</code> instead of <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">==</code></td>
                  <td className="px-4 py-2.5 text-slate-300">Confusing assignment with equality comparison</td>
                  <td className="px-4 py-2.5 text-slate-300">Understand each operator's purpose</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">Wrong data type</td>
                  <td className="px-4 py-2.5 text-slate-300">Choosing an unsuitable type</td>
                  <td className="px-4 py-2.5 text-slate-300">Select types according to range and precision</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">Integer division</td>
                  <td className="px-4 py-2.5 text-slate-300">Expecting a decimal from integer operands</td>
                  <td className="px-4 py-2.5 text-slate-300">Use floating-point arithmetic where needed</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">Ignoring overflow</td>
                  <td className="px-4 py-2.5 text-slate-300">Assuming a numeric type can store unlimited values</td>
                  <td className="px-4 py-2.5 text-slate-300">Check the target type's range</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">Incorrect Scanner usage</td>
                  <td className="px-4 py-2.5 text-slate-300">Mixing token and line input</td>
                  <td className="px-4 py-2.5 text-slate-300">Understand <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">next()</code> and <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">nextLine()</code></td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">Missing import</td>
                  <td className="px-4 py-2.5 text-slate-300">Using a class without importing or qualifying it</td>
                  <td className="px-4 py-2.5 text-slate-300">Import the appropriate class</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">Poor variable names</td>
                  <td className="px-4 py-2.5 text-slate-300">Using meaningless identifiers</td>
                  <td className="px-4 py-2.5 text-slate-300">Apply descriptive camelCase names</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">Incorrect operator precedence</td>
                  <td className="px-4 py-2.5 text-slate-300">Misunderstanding expression evaluation</td>
                  <td className="px-4 py-2.5 text-slate-300">Use parentheses to make intent clear</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">Ignoring compiler errors</td>
                  <td className="px-4 py-2.5 text-slate-300">Trying to execute invalid source</td>
                  <td className="px-4 py-2.5 text-slate-300">Read and address the reported errors</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* SECTION 21: 21. Module Revision Sheet */}
      <section id="section-21" className="bg-slate-900/80 rounded-2xl border border-slate-800 p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-500/15 text-orange-300 text-xs font-bold uppercase tracking-wider font-mono">
            Review · Module Revision Sheet
          </span>
          <span className="text-xs font-mono text-slate-400">Section 21</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          21. Module Revision Sheet
        </h2>
        <div className="space-y-4 text-slate-300 leading-relaxed text-sm sm:text-base">
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>Important definitions</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-white">Computer science:</strong> The study of computation, algorithms, information, and computer systems.
          </p>
          <div className="mt-4 mb-2 p-3 rounded-lg bg-orange-500/15/70 border border-orange-500/30/80 font-semibold text-white text-sm sm:text-base">
            <strong className="font-semibold text-white">Programming:</strong> The process of writing and maintaining instructions that computers can execute.
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-white">Algorithm:</strong> A finite sequence of well-defined instructions for solving a problem.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-white">Computational thinking:</strong> A systematic problem-solving approach involving decomposition, pattern recognition, abstraction, and algorithm design.
          </p>
          <div className="mt-4 mb-2 p-3 rounded-lg bg-orange-500/15/70 border border-orange-500/30/80 font-semibold text-white text-sm sm:text-base">
            <strong className="font-semibold text-white">Programming language:</strong> A formal language used to express computational instructions.
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-white">Java:</strong> A general-purpose, class-based programming language that uses a JVM-based execution model.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-white">JVM:</strong> The runtime virtual machine responsible for executing Java bytecode.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-white">JRE:</strong> The conceptual runtime environment containing the JVM and supporting runtime components.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-white">JDK:</strong> The development kit containing the Java compiler and other development tools, along with runtime components.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-white">Bytecode:</strong> The intermediate instruction representation generated by the Java compiler.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-white">Variable:</strong> A named location used to store a value.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-white">Constant:</strong> A value intended not to be reassigned, commonly represented with a <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">final</code> variable.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-white">Primitive data type:</strong> One of Java's eight built-in value types.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-white">Type casting:</strong> Explicit conversion of a value to another compatible type.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-white">Operator:</strong> A symbol that performs an operation on one or more operands.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-white">Expression:</strong> A combination of values and operators that produces a result.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-white">Debugging:</strong> The process of identifying and correcting software defects.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>Essential commands</span>
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">BASH</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`java -version
javac -version

javac HelloWorld.java
java HelloWorld`}</code>
            </pre>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>Essential Java syntax</span>
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`// Variable
int age = 21;

// Constant
final double PI = 3.14159;

// Output
System.out.println("Hello Java");

// Input
Scanner scanner = new Scanner(System.in);
int number = scanner.nextInt();

// Arithmetic
int total = 10 + 20;

// Type casting
double price = 99.99;
int wholePrice = (int) price;`}</code>
            </pre>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>Key concepts to remember</span>
          </h3>
          <ol className="list-decimal pl-5 space-y-2 text-slate-300 text-sm sm:text-base my-3 leading-relaxed">
            <li>Java source files generally use the <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">.java</code> extension.</li>
            <li>The Java compiler is <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">javac</code>.</li>
            <li>Compilation normally produces <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">.class</code> files containing bytecode.</li>
            <li>The Java launcher is <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">java</code>.</li>
            <li>A compatible JVM executes Java bytecode.</li>
            <li>Java has eight primitive data types.</li>
            <li><code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">String</code> is a reference type, not a primitive type.</li>
            <li>Local variables must be initialized before use.</li>
            <li><code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">final</code> prevents reassignment of a variable.</li>
            <li>Integer division discards the fractional part.</li>
            <li><code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">Scanner</code> can be used to accept keyboard input.</li>
            <li>Syntax, runtime, and logical errors are different.</li>
            <li>Debugging is an essential part of software development.</li>
            <li>Good naming and formatting make programs easier to maintain.</li>
          </ol>
        </div>
      </section>

      {/* SECTION 22: 22. Recommended Learning Resources */}
      <section id="section-22" className="bg-slate-900/80 rounded-2xl border border-slate-800 p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-500/15 text-orange-300 text-xs font-bold uppercase tracking-wider font-mono">
            References · Official Learning Resources
          </span>
          <span className="text-xs font-mono text-slate-400">Section 22</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          22. Recommended Learning Resources
        </h2>
        <div className="space-y-4 text-slate-300 leading-relaxed text-sm sm:text-base">
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Students should use official documentation and practical exercises alongside the lessons.
          </p>
          <ol className="list-decimal pl-5 space-y-2 text-slate-300 text-sm sm:text-base my-3 leading-relaxed">
            <li><strong className="font-semibold text-white">Java Language and Platform Documentation:</strong> <a href="https://docs.oracle.com/en/java/" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-300 font-medium underline inline-flex items-center gap-0.5">https://docs.oracle.com/en/java/</a></li>
            <li><strong className="font-semibold text-white">Java Language Specification:</strong> <a href="https://docs.oracle.com/javase/specs/" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-300 font-medium underline inline-flex items-center gap-0.5">https://docs.oracle.com/javase/specs/</a></li>
            <li><strong className="font-semibold text-white">dev.java — Learn Java:</strong> <a href="https://dev.java/learn/" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-300 font-medium underline inline-flex items-center gap-0.5">https://dev.java/learn/</a></li>
            <li><strong className="font-semibold text-white">Dev.java Documentation:</strong> <a href="https://dev.java/" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-300 font-medium underline inline-flex items-center gap-0.5">https://dev.java/</a></li>
            <li><strong className="font-semibold text-white">OpenJDK:</strong> <a href="https://openjdk.org/" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-300 font-medium underline inline-flex items-center gap-0.5">https://openjdk.org/</a></li>
          </ol>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            The official documentation should be treated as the primary reference for Java language rules, platform behavior, and API details.
          </p>
        </div>
      </section>

      {/* SECTION 23: 23. Module Completion Criteria */}
      <section id="section-23" className="bg-slate-900/80 rounded-2xl border border-slate-800 p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-500/15 text-orange-300 text-xs font-bold uppercase tracking-wider font-mono">
            Milestone · Completion Criteria & Next Steps
          </span>
          <span className="text-xs font-mono text-slate-400">Section 23</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          23. Module Completion Criteria
        </h2>
        <div className="space-y-4 text-slate-300 leading-relaxed text-sm sm:text-base">
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            A student should consider this module complete when they can independently:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-slate-300 text-sm sm:text-base my-3 leading-relaxed">
            <li>Explain computer science and computational thinking.</li>
            <li>Describe the differences between major programming language levels.</li>
            <li>Explain Java's role in software development.</li>
            <li>Describe JDK, JRE, JVM, and bytecode.</li>
            <li>Install and verify a JDK.</li>
            <li>Create and execute Java programs using an IDE or terminal.</li>
            <li>Explain the structure of a Java program.</li>
            <li>Use the traditional <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">main()</code> entry point.</li>
            <li>Declare and initialize variables.</li>
            <li>Select appropriate primitive data types.</li>
            <li>Explain widening and narrowing conversions.</li>
            <li>Apply arithmetic, assignment, relational, logical, and other operators.</li>
            <li>Accept input using <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">Scanner</code>.</li>
            <li>Follow Java coding conventions.</li>
            <li>Identify and correct common programming errors.</li>
            <li>Complete the Student Result and Profile System mini project.</li>
          </ul>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-white">Final expected capability:</strong> The student should be able to take a small problem, understand its requirements, design basic steps, implement the solution in Java, compile and run it, inspect the output, and correct common errors independently.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-white">Next module:</strong> Module 2 — Java Control Flow and Decision Making.
          </p>
        </div>
      </section>

    </div>
  );
}
