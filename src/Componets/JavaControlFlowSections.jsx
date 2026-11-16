import React from "react";
import { GitBranch, Repeat, Terminal, Code, Cpu, ShieldCheck, CheckCircle2, Award } from "lucide-react";

export default function JavaControlFlowSections() {
  return (
    <div className="space-y-10">
      {/* SECTION 0: Module 2: Complete Curriculum Specification */}
      <section id="overview" className="bg-slate-900/80 rounded-2xl border border-slate-800 p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-500/15 text-orange-300 text-xs font-bold uppercase tracking-wider font-mono">
            Course Roadmap · Overview
          </span>
          <span className="text-xs font-mono text-slate-400">Section 0</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          Module 2: Complete Curriculum Specification
        </h2>
        <div className="space-y-4 text-slate-300 leading-relaxed text-sm sm:text-base">
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>Module Overview</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            In the previous module, students learned how to write basic Java programs, declare variables, use data types, perform calculations, and accept user input.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            However, real-world applications require more than executing instructions from top to bottom.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Programs must make decisions, repeat operations, respond to different inputs, and divide complex tasks into smaller reusable components.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            This module introduces control flow, algorithm design, methods, recursion, mathematical problem-solving, and pattern programming.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Students will learn how to construct logical solutions before implementing them in Java.
          </p>
          <h4 className="text-base sm:text-lg font-bold text-white mt-4 mb-2 flex items-center gap-2">
            <span>Prerequisites</span>
          </h4>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Students should understand:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-slate-300 text-sm sm:text-base my-3 leading-relaxed">
            <li>Java program structure and the <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">main()</code> method.</li>
            <li>Variables and primitive data types.</li>
            <li>Type conversion and type casting.</li>
            <li>Arithmetic, relational, and logical operators.</li>
            <li>Input and output using <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">Scanner</code>.</li>
            <li>Compilation and execution of Java programs.</li>
          </ul>
          <h4 className="text-base sm:text-lg font-bold text-white mt-4 mb-2 flex items-center gap-2">
            <span>Learning Objectives</span>
          </h4>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            By the end of this module, students should be able to:
          </p>
          <ol className="list-decimal pl-5 space-y-2 text-slate-300 text-sm sm:text-base my-3 leading-relaxed">
            <li>Understand and apply algorithmic thinking.</li>
            <li>Decompose complex problems into smaller subproblems.</li>
            <li>Write algorithms using pseudocode.</li>
            <li>Represent algorithms using flowcharts.</li>
            <li>Understand program execution flow.</li>
            <li>Implement conditional statements using <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">if</code>, <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">if-else</code>, and <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">else-if</code>.</li>
            <li>Design and implement nested conditional statements.</li>
            <li>Use traditional switch statements and modern switch expressions.</li>
            <li>Apply <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">for</code>, <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">while</code>, and <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">do-while</code> loops.</li>
            <li>Understand nested loops and their execution.</li>
            <li>Use <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">break</code> and <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">continue</code> appropriately.</li>
            <li>Design reusable methods.</li>
            <li>Work with method parameters and arguments.</li>
            <li>Understand return types and <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">void</code> methods.</li>
            <li>Implement method overloading.</li>
            <li>Understand variable scope and lifetime.</li>
            <li>Understand recursion, base cases, and recursive calls.</li>
            <li>Solve problems using mathematical algorithms.</li>
            <li>Generate number and star patterns using nested loops.</li>
            <li>Trace, test, debug, and optimize basic Java programs.</li>
          </ol>
        </div>
      </section>

      {/* SECTION 1: 1. Algorithmic Thinking */}
      <section id="section-1" className="bg-slate-900/80 rounded-2xl border border-slate-800 p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-500/15 text-orange-300 text-xs font-bold uppercase tracking-wider font-mono">
            Part 1 · Algorithmic Foundations
          </span>
          <span className="text-xs font-mono text-slate-400">Section 1</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          1. Algorithmic Thinking
        </h2>
        <div className="space-y-4 text-slate-300 leading-relaxed text-sm sm:text-base">
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>1.1 What is algorithmic thinking?</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Algorithmic thinking is the ability to approach a problem logically, identify the steps required to solve it, and organize those steps into a clear, finite sequence of instructions.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            It is one of the most important foundations of computer science.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            A programmer should not immediately start writing Java code whenever a problem is presented.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            The programmer should first understand:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-slate-300 text-sm sm:text-base my-3 leading-relaxed">
            <li>What exactly is the problem?</li>
            <li>What information is available?</li>
            <li>What result is expected?</li>
            <li>What operations are required?</li>
            <li>What constraints must be considered?</li>
            <li>What happens with unusual or invalid inputs?</li>
          </ul>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Only after understanding these questions should the implementation begin.
          </p>
          <h4 className="text-base sm:text-lg font-bold text-white mt-4 mb-2 flex items-center gap-2">
            <span>Example: Calculate the average of three numbers</span>
          </h4>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Suppose the problem is:
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Write a program that accepts three numbers and calculates their average.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            A beginner might immediately write:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`double average = (a + b + c) / 3.0;`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            However, an experienced programmer first thinks through the complete problem.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-white">Problem understanding</strong>
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            We have three input numbers and need to calculate their average.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-white">Inputs</strong>
          </p>
          <ul className="list-disc pl-5 space-y-2 text-slate-300 text-sm sm:text-base my-3 leading-relaxed">
            <li>First number</li>
            <li>Second number</li>
            <li>Third number</li>
          </ul>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-white">Processing</strong>
          </p>
          <ul className="list-disc pl-5 space-y-2 text-slate-300 text-sm sm:text-base my-3 leading-relaxed">
            <li>Add the three numbers.</li>
            <li>Divide the total by three.</li>
          </ul>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-white">Output</strong>
          </p>
          <ul className="list-disc pl-5 space-y-2 text-slate-300 text-sm sm:text-base my-3 leading-relaxed">
            <li>Average value.</li>
          </ul>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-white">Algorithm</strong>
          </p>
          <ol className="list-decimal pl-5 space-y-2 text-slate-300 text-sm sm:text-base my-3 leading-relaxed">
            <li>Start the program.</li>
            <li>Read the first number.</li>
            <li>Read the second number.</li>
            <li>Read the third number.</li>
            <li>Calculate their sum.</li>
            <li>Divide the sum by three.</li>
            <li>Display the average.</li>
            <li>Stop.</li>
          </ol>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Java implementation:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`import java.util.Scanner;

public class AverageCalculator {

    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter first number: ");
        double a = scanner.nextDouble();

        System.out.print("Enter second number: ");
        double b = scanner.nextDouble();

        System.out.print("Enter third number: ");
        double c = scanner.nextDouble();

        double total = a + b + c;

        double average = total / 3.0;

        System.out.println("Average: " + average);

        scanner.close();
    }
}`}</code>
            </pre>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>1.2 The problem-solving lifecycle</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            A structured programming problem-solving process generally includes these stages:
          </p>
          <div className="mt-4 mb-2 p-3 rounded-lg bg-orange-500/15/70 border border-orange-500/30/80 font-semibold text-white text-sm sm:text-base">
            <strong className="font-semibold text-white">Stage 1 — Problem definition</strong>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Understand what needs to be solved.
          </p>
          <div className="mt-4 mb-2 p-3 rounded-lg bg-orange-500/15/70 border border-orange-500/30/80 font-semibold text-white text-sm sm:text-base">
            <strong className="font-semibold text-white">Stage 2 — Requirements analysis</strong>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Identify inputs, expected outputs, limitations, and special cases.
          </p>
          <div className="mt-4 mb-2 p-3 rounded-lg bg-orange-500/15/70 border border-orange-500/30/80 font-semibold text-white text-sm sm:text-base">
            <strong className="font-semibold text-white">Stage 3 — Decomposition</strong>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Divide the problem into smaller tasks.
          </p>
          <div className="mt-4 mb-2 p-3 rounded-lg bg-orange-500/15/70 border border-orange-500/30/80 font-semibold text-white text-sm sm:text-base">
            <strong className="font-semibold text-white">Stage 4 — Algorithm design</strong>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Determine the logical sequence of operations.
          </p>
          <div className="mt-4 mb-2 p-3 rounded-lg bg-orange-500/15/70 border border-orange-500/30/80 font-semibold text-white text-sm sm:text-base">
            <strong className="font-semibold text-white">Stage 5 — Representation</strong>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Represent the algorithm using pseudocode or a flowchart.
          </p>
          <div className="mt-4 mb-2 p-3 rounded-lg bg-orange-500/15/70 border border-orange-500/30/80 font-semibold text-white text-sm sm:text-base">
            <strong className="font-semibold text-white">Stage 6 — Implementation</strong>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Translate the algorithm into Java code.
          </p>
          <div className="mt-4 mb-2 p-3 rounded-lg bg-orange-500/15/70 border border-orange-500/30/80 font-semibold text-white text-sm sm:text-base">
            <strong className="font-semibold text-white">Stage 7 — Testing</strong>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Check the solution against normal, boundary, and unusual inputs.
          </p>
          <div className="mt-4 mb-2 p-3 rounded-lg bg-orange-500/15/70 border border-orange-500/30/80 font-semibold text-white text-sm sm:text-base">
            <strong className="font-semibold text-white">Stage 8 — Debugging</strong>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Identify and correct defects.
          </p>
          <div className="mt-4 mb-2 p-3 rounded-lg bg-orange-500/15/70 border border-orange-500/30/80 font-semibold text-white text-sm sm:text-base">
            <strong className="font-semibold text-white">Stage 9 — Improvement</strong>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Improve readability, reusability, and efficiency.
          </p>
          <h4 className="text-base sm:text-lg font-bold text-white mt-4 mb-2 flex items-center gap-2">
            <span>Visual representation of the problem-solving lifecycle</span>
          </h4>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`       Problem Definition
               |
               v
       Requirements Analysis
               |
               v
          Decomposition
               |
               v
          Algorithm Design
               |
               v
        Pseudocode / Flowchart
               |
               v
          Java Coding
               |
               v
             Testing
               |
               v
            Debugging
               |
               v
           Improvement`}</code>
            </pre>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>1.3 Input-Process-Output model</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            The Input-Process-Output (IPO) model is a simple method of understanding computational problems.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Every basic computational task can be analyzed in terms of:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-slate-300 text-sm sm:text-base my-3 leading-relaxed">
            <li>Input: Information supplied to the program.</li>
            <li>Process: Operations performed on that information.</li>
            <li>Output: Result produced by the program.</li>
          </ul>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Example: Electricity bill calculation.
          </p>
          <div className="overflow-x-auto my-4 rounded-xl border border-slate-800 shadow-2xs">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-white border-b border-slate-800 font-semibold">
                <tr>
                  <th className="px-4 py-3">Component</th>
                  <th className="px-4 py-3">Description</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">Input</td>
                  <td className="px-4 py-2.5 text-slate-300">Units consumed and rate per unit</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">Process</td>
                  <td className="px-4 py-2.5 text-slate-300">Multiply consumed units by the rate</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">Output</td>
                  <td className="px-4 py-2.5 text-slate-300">Electricity charge</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            For example:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Units consumed = 150
Rate per unit = 6

Bill = 150 × 6

Final bill = 900`}</code>
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
              <code>{`public class ElectricityBill {

    public static void main(String[] args) {

        int units = 150;
        double rate = 6.0;

        double bill = units * rate;

        System.out.println("Electricity Bill: " + bill);
    }
}`}</code>
            </pre>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>1.4 Correctness and edge cases</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            A correct algorithm should produce the expected result for every input within its defined requirements.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Testing only one normal input is insufficient.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Consider a program that determines whether someone can apply for a particular service requiring an age of at least 18.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            The conditions should be considered carefully:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-slate-300 text-sm sm:text-base my-3 leading-relaxed">
            <li>Age = 25</li>
            <li>Age = 18</li>
            <li>Age = 17</li>
            <li>Age = 0</li>
            <li>Age = -5</li>
          </ul>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            The boundary value of 18 is especially important.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            A condition such as:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`age > 18`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            does not satisfy a requirement of 18 or older.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            The correct condition is:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`age >= 18`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            This illustrates why programmers must understand requirements and test boundary cases.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>1.5 Introduction to algorithm efficiency</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Two algorithms may solve the same problem but perform different amounts of work.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            For example, consider calculating the sum of numbers from 1 to 100.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-white">Approach A — Repeated addition</strong>
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`int sum = 0;

for (int i = 1; i <= 100; i++) {
    sum += i;
}`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-white">Approach B — Mathematical formula</strong>
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            For consecutive integers from 1 to n:
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            \[
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            S = \frac&#123;n(n+1)&#125;&#123;2&#125;
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            \]
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`int n = 100;

int sum = n * (n + 1) / 2;`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Both produce the same result, but their computational work differs.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            This leads to the idea of algorithmic complexity.
          </p>
          <h4 className="text-base sm:text-lg font-bold text-white mt-4 mb-2 flex items-center gap-2">
            <span>Basic introduction to time complexity</span>
          </h4>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Time complexity describes how the amount of computational work grows as the input size increases.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Common complexity categories:
          </p>
          <div className="overflow-x-auto my-4 rounded-xl border border-slate-800 shadow-2xs">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-white border-b border-slate-800 font-semibold">
                <tr>
                  <th className="px-4 py-3">Complexity</th>
                  <th className="px-4 py-3">Description</th>
                  <th className="px-4 py-3">Example</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">O(1)</td>
                  <td className="px-4 py-2.5 text-slate-300">Constant work</td>
                  <td className="px-4 py-2.5 text-slate-300">Accessing a known array index</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">O(log n)</td>
                  <td className="px-4 py-2.5 text-slate-300">Logarithmic growth</td>
                  <td className="px-4 py-2.5 text-slate-300">Binary search</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">O(n)</td>
                  <td className="px-4 py-2.5 text-slate-300">Linear growth</td>
                  <td className="px-4 py-2.5 text-slate-300">Traversing every element</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">O(n²)</td>
                  <td className="px-4 py-2.5 text-slate-300">Quadratic growth</td>
                  <td className="px-4 py-2.5 text-slate-300">Comparing every pair using nested loops</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Students will study complexity analysis in depth in the DSA modules. For now, the important principle is that good programmers consider both correctness and efficiency.
          </p>
        </div>
      </section>

      {/* SECTION 2: 2. Problem Decomposition */}
      <section id="section-2" className="bg-slate-900/80 rounded-2xl border border-slate-800 p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-500/15 text-orange-300 text-xs font-bold uppercase tracking-wider font-mono">
            Part 1 · Decomposition & Architecture
          </span>
          <span className="text-xs font-mono text-slate-400">Section 2</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          2. Problem Decomposition
        </h2>
        <div className="space-y-4 text-slate-300 leading-relaxed text-sm sm:text-base">
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>2.1 What is problem decomposition?</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Problem decomposition is the process of dividing a complex problem into smaller, logically independent subproblems.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Each subproblem can be designed, implemented, and tested separately.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            It is an important software engineering technique because large applications are difficult to develop as a single block of code.
          </p>
          <h4 className="text-base sm:text-lg font-bold text-white mt-4 mb-2 flex items-center gap-2">
            <span>Example: Online banking application</span>
          </h4>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Suppose we need to build a banking application.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Its main requirements include:
          </p>
          <ol className="list-decimal pl-5 space-y-2 text-slate-300 text-sm sm:text-base my-3 leading-relaxed">
            <li>User authentication.</li>
            <li>Account balance display.</li>
            <li>Money deposits.</li>
            <li>Money withdrawals.</li>
            <li>Transaction history.</li>
            <li>Account information management.</li>
          </ol>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Instead of implementing everything inside one method, we divide the application into components.
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Banking Application
|
+-- Authentication
|   +-- Login
|   +-- Logout
|
+-- Account Management
|   +-- Create Account
|   +-- View Account
|
+-- Transactions
|   +-- Deposit
|   +-- Withdraw
|   +-- Transfer
|
+-- Reporting
    +-- Balance Report
    +-- Transaction History`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Each component has a specific responsibility.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>2.2 Functional decomposition</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Functional decomposition divides a program according to the tasks it performs.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Consider a student result management system.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            We can create separate functions for:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-slate-300 text-sm sm:text-base my-3 leading-relaxed">
            <li>Reading student information.</li>
            <li>Accepting marks.</li>
            <li>Calculating total.</li>
            <li>Calculating average.</li>
            <li>Determining grade.</li>
            <li>Printing the result.</li>
          </ul>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Conceptual representation:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Student Result System
        |
        +-- getStudentDetails()
        |
        +-- getMarks()
        |
        +-- calculateTotal()
        |
        +-- calculateAverage()
        |
        +-- calculateGrade()
        |
        +-- displayResult()`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            We will implement this type of decomposition using methods later in this module.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>2.3 Top-down problem-solving approach</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Top-down design starts with the overall problem and gradually breaks it into smaller tasks.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Example:
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-white">Main problem:</strong> Create a calculator.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Break it into:
          </p>
          <ol className="list-decimal pl-5 space-y-2 text-slate-300 text-sm sm:text-base my-3 leading-relaxed">
            <li>Accept two operands.</li>
            <li>Accept an operation.</li>
            <li>Perform the selected calculation.</li>
            <li>Display the result.</li>
          </ol>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Break the calculation further:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-slate-300 text-sm sm:text-base my-3 leading-relaxed">
            <li>Addition.</li>
            <li>Subtraction.</li>
            <li>Multiplication.</li>
            <li>Division.</li>
          </ul>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Each operation can eventually become its own method.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            This technique improves code organization and makes complex programs easier to maintain.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>2.4 Step-by-step decomposition exercise</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Problem:
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Create a system to calculate an employee's monthly salary.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Requirements:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-slate-300 text-sm sm:text-base my-3 leading-relaxed">
            <li>Accept employee name.</li>
            <li>Accept basic salary.</li>
            <li>Calculate allowance.</li>
            <li>Calculate deductions.</li>
            <li>Calculate net salary.</li>
            <li>Display the salary report.</li>
          </ul>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Decomposition:
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-white">Task 1:</strong> Read employee details.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-white">Task 2:</strong> Calculate allowance.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-white">Task 3:</strong> Calculate gross salary.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-white">Task 4:</strong> Calculate deductions.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-white">Task 5:</strong> Calculate net salary.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-white">Task 6:</strong> Display the report.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            This design can be translated into separate Java methods.
          </p>
        </div>
      </section>

      {/* SECTION 3: 3. Pseudocode and Flowcharts */}
      <section id="section-3" className="bg-slate-900/80 rounded-2xl border border-slate-800 p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-500/15 text-orange-300 text-xs font-bold uppercase tracking-wider font-mono">
            Part 1 · Pseudocode & Flowcharts
          </span>
          <span className="text-xs font-mono text-slate-400">Section 3</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          3. Pseudocode and Flowcharts
        </h2>
        <div className="space-y-4 text-slate-300 leading-relaxed text-sm sm:text-base">
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>3.1 What is pseudocode?</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Pseudocode is a human-readable way of describing an algorithm using structured statements that resemble programming logic without following the exact syntax of a programming language.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            It allows programmers to focus on problem-solving rather than language-specific syntax.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Pseudocode is particularly useful when designing complex algorithms before implementation.
          </p>
          <h4 className="text-base sm:text-lg font-bold text-white mt-4 mb-2 flex items-center gap-2">
            <span>Characteristics of good pseudocode</span>
          </h4>
          <ol className="list-decimal pl-5 space-y-2 text-slate-300 text-sm sm:text-base my-3 leading-relaxed">
            <li>It should be easy to understand.</li>
            <li>It should describe the logical steps clearly.</li>
            <li>It should not depend on a particular programming language.</li>
            <li>It should have a clear beginning and ending.</li>
            <li>It should use meaningful variable names.</li>
            <li>It should represent decisions and repetition clearly.</li>
          </ol>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>3.2 Common pseudocode keywords</span>
          </h3>
          <div className="overflow-x-auto my-4 rounded-xl border border-slate-800 shadow-2xs">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-white border-b border-slate-800 font-semibold">
                <tr>
                  <th className="px-4 py-3">Keyword</th>
                  <th className="px-4 py-3">Purpose</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">START</td>
                  <td className="px-4 py-2.5 text-slate-300">Begin an algorithm</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">STOP</td>
                  <td className="px-4 py-2.5 text-slate-300">End an algorithm</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">INPUT</td>
                  <td className="px-4 py-2.5 text-slate-300">Accept information</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">OUTPUT</td>
                  <td className="px-4 py-2.5 text-slate-300">Display information</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">SET</td>
                  <td className="px-4 py-2.5 text-slate-300">Assign a value</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">IF</td>
                  <td className="px-4 py-2.5 text-slate-300">Check a condition</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">ELSE</td>
                  <td className="px-4 py-2.5 text-slate-300">Provide an alternative</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">ELSE IF</td>
                  <td className="px-4 py-2.5 text-slate-300">Check another condition</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">WHILE</td>
                  <td className="px-4 py-2.5 text-slate-300">Repeat while a condition is true</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">FOR</td>
                  <td className="px-4 py-2.5 text-slate-300">Repeat using a controlled counter</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">RETURN</td>
                  <td className="px-4 py-2.5 text-slate-300">Provide a result</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            These are commonly used conventions, not reserved Java keywords.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>3.3 Example: Positive, negative, or zero</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Problem:
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Determine whether an entered number is positive, negative, or zero.
          </p>
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

INPUT number

IF number > 0
    OUTPUT "Positive"

ELSE IF number < 0
    OUTPUT "Negative"

ELSE
    OUTPUT "Zero"

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
              <code>{`import java.util.Scanner;

public class NumberChecker {

    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter a number: ");
        int number = scanner.nextInt();

        if (number > 0) {
            System.out.println("Positive");
        } else if (number < 0) {
            System.out.println("Negative");
        } else {
            System.out.println("Zero");
        }

        scanner.close();
    }
}`}</code>
            </pre>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>3.4 What is a flowchart?</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            A flowchart is a graphical representation of an algorithm using standardized symbols connected by arrows.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            It illustrates the order in which operations are performed.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Flowcharts are useful for understanding decision-making, repetition, and the overall structure of a program.
          </p>
          <h4 className="text-base sm:text-lg font-bold text-white mt-4 mb-2 flex items-center gap-2">
            <span>Important flowchart symbols</span>
          </h4>
          <div className="overflow-x-auto my-4 rounded-xl border border-slate-800 shadow-2xs">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-white border-b border-slate-800 font-semibold">
                <tr>
                  <th className="px-4 py-3">Symbol</th>
                  <th className="px-4 py-3">Name</th>
                  <th className="px-4 py-3">Purpose</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">Oval</td>
                  <td className="px-4 py-2.5 text-slate-300">Terminator</td>
                  <td className="px-4 py-2.5 text-slate-300">Start or end</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">Rectangle</td>
                  <td className="px-4 py-2.5 text-slate-300">Process</td>
                  <td className="px-4 py-2.5 text-slate-300">Calculation or operation</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">Parallelogram</td>
                  <td className="px-4 py-2.5 text-slate-300">Input/Output</td>
                  <td className="px-4 py-2.5 text-slate-300">Accept or display data</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">Diamond</td>
                  <td className="px-4 py-2.5 text-slate-300">Decision</td>
                  <td className="px-4 py-2.5 text-slate-300">Test a condition</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">Arrow</td>
                  <td className="px-4 py-2.5 text-slate-300">Flow line</td>
                  <td className="px-4 py-2.5 text-slate-300">Indicate execution direction</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">Circle</td>
                  <td className="px-4 py-2.5 text-slate-300">Connector</td>
                  <td className="px-4 py-2.5 text-slate-300">Connect parts of a flowchart</td>
                </tr>
              </tbody>
            </table>
          </div>
          <h4 className="text-base sm:text-lg font-bold text-white mt-4 mb-2 flex items-center gap-2">
            <span>Example: Find the larger of two numbers</span>
          </h4>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Logic:
          </p>
          <ol className="list-decimal pl-5 space-y-2 text-slate-300 text-sm sm:text-base my-3 leading-relaxed">
            <li>Accept two numbers.</li>
            <li>Compare them.</li>
            <li>Display the larger number.</li>
            <li>If they are equal, display an equality message.</li>
          </ol>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Flowchart representation:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`             START
                |
                v
          INPUT A, B
                |
                v
            A > B ?
             /   \\
           Yes    No
            |      |
            v      v
       DISPLAY A  B > A ?
                    /  \\
                  Yes   No
                   |     |
                   v     v
              DISPLAY B  DISPLAY
                         EQUAL
                   \\     /
                    \\   /
                      v
                     END`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Equivalent Java implementation:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public class LargerNumber {

    public static void main(String[] args) {

        int a = 25;
        int b = 40;

        if (a > b) {
            System.out.println("A is larger");
        } else if (b > a) {
            System.out.println("B is larger");
        } else {
            System.out.println("Both are equal");
        }
    }
}`}</code>
            </pre>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>3.5 Pseudocode versus flowcharts</span>
          </h3>
          <div className="overflow-x-auto my-4 rounded-xl border border-slate-800 shadow-2xs">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-white border-b border-slate-800 font-semibold">
                <tr>
                  <th className="px-4 py-3">Pseudocode</th>
                  <th className="px-4 py-3">Flowchart</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">Text-based representation</td>
                  <td className="px-4 py-2.5 text-slate-300">Graphical representation</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">Written using structured statements</td>
                  <td className="px-4 py-2.5 text-slate-300">Uses standardized symbols</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">Easy to write and modify</td>
                  <td className="px-4 py-2.5 text-slate-300">Useful for visualizing execution</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">Suitable for describing detailed logic</td>
                  <td className="px-4 py-2.5 text-slate-300">Useful for understanding program flow</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">Less dependent on drawing tools</td>
                  <td className="px-4 py-2.5 text-slate-300">Requires a diagram or drawing tool</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Both are algorithm-design techniques. Neither replaces the need for a correct implementation and testing process.
          </p>
        </div>
      </section>

      {/* SECTION 4: 4. Conditional Statements */}
      <section id="section-4" className="bg-slate-900/80 rounded-2xl border border-slate-800 p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-500/15 text-orange-300 text-xs font-bold uppercase tracking-wider font-mono">
            Part 2 · Conditional Execution
          </span>
          <span className="text-xs font-mono text-slate-400">Section 4</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          4. Conditional Statements
        </h2>
        <div className="space-y-4 text-slate-300 leading-relaxed text-sm sm:text-base">
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>4.1 What is control flow?</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Control flow describes the order in which a program's statements are executed.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            A basic Java program executes statements sequentially.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            However, real applications frequently need to choose between alternative actions.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            For example:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-slate-300 text-sm sm:text-base my-3 leading-relaxed">
            <li>Is a user's password valid?</li>
            <li>Is an account balance sufficient?</li>
            <li>Has a student passed an examination?</li>
            <li>Is an item available in inventory?</li>
          </ul>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Conditional statements allow the program to execute different blocks depending on whether a condition is true or false.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Java provides several decision-making structures.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>4.2 The if statement</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            The <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">if</code> statement executes a block only when a specified boolean condition evaluates to <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">true</code>.
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
              <code>{`if (condition) {
    // Execute when condition is true
}`}</code>
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
              <code>{`public class IfExample {

    public static void main(String[] args) {

        int age = 20;

        if (age >= 18) {
            System.out.println("You are an adult.");
        }
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
              <code>{`You are an adult.`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            When <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">age</code> is less than 18, the statement inside the block is skipped.
          </p>
          <h4 className="text-base sm:text-lg font-bold text-white mt-4 mb-2 flex items-center gap-2">
            <span>Execution process</span>
          </h4>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`        Check condition
               |
               v
          Is it true?
           /      \\
         Yes       No
          |         |
          v         |
      Execute       |
       block        |
          |         |
          +----+----+
               |
               v
          Continue`}</code>
            </pre>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>4.3 The if-else statement</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            The <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">if-else</code> statement provides two alternative execution paths.
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
              <code>{`if (condition) {
    // True condition
} else {
    // False condition
}`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Example: Determine whether a number is even or odd.
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public class EvenOdd {

    public static void main(String[] args) {

        int number = 17;

        if (number % 2 == 0) {
            System.out.println("Even");
        } else {
            System.out.println("Odd");
        }
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
              <code>{`Odd`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Explanation:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-slate-300 text-sm sm:text-base my-3 leading-relaxed">
            <li>Even numbers have a remainder of zero when divided by two.</li>
            <li>Odd numbers have a remainder of one when divided by two.</li>
          </ul>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>4.4 The if-else-if ladder</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            An <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">if-else-if</code> ladder evaluates multiple conditions in sequence.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Example: Calculate a student's grade.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Assumptions:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-slate-300 text-sm sm:text-base my-3 leading-relaxed">
            <li>90 or above: A</li>
            <li>80–89: B</li>
            <li>70–79: C</li>
            <li>60–69: D</li>
            <li>Below 60: F</li>
          </ul>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public class GradeCalculator {

    public static void main(String[] args) {

        int marks = 85;

        if (marks >= 90) {
            System.out.println("Grade A");
        } else if (marks >= 80) {
            System.out.println("Grade B");
        } else if (marks >= 70) {
            System.out.println("Grade C");
        } else if (marks >= 60) {
            System.out.println("Grade D");
        } else {
            System.out.println("Grade F");
        }
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
              <code>{`Grade B`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Important: Java checks conditions from top to bottom. Once a condition is true, its block executes and the remaining conditions in that chain are skipped.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            The order of conditions therefore matters.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>4.5 Combining conditions</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Conditional statements can combine multiple boolean expressions using logical operators.
          </p>
          <h4 className="text-base sm:text-lg font-bold text-white mt-4 mb-2 flex items-center gap-2">
            <span>AND operator</span>
          </h4>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`int age = 22;
boolean hasIdentityCard = true;

if (age >= 18 && hasIdentityCard) {
    System.out.println("Entry allowed");
}`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Both conditions must be true.
          </p>
          <h4 className="text-base sm:text-lg font-bold text-white mt-4 mb-2 flex items-center gap-2">
            <span>OR operator</span>
          </h4>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`boolean hasEmail = true;
boolean hasPhone = false;

if (hasEmail || hasPhone) {
    System.out.println("Contact information available");
}`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            At least one condition must be true.
          </p>
          <h4 className="text-base sm:text-lg font-bold text-white mt-4 mb-2 flex items-center gap-2">
            <span>NOT operator</span>
          </h4>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`boolean isBlocked = false;

if (!isBlocked) {
    System.out.println("Account is active");
}`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            The <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">!</code> operator reverses a boolean value.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>4.6 Input validation using conditions</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Real applications must validate user input before using it.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Example: Check whether examination marks are within the permitted range.
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`import java.util.Scanner;

public class MarksValidation {

    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter marks: ");
        int marks = scanner.nextInt();

        if (marks >= 0 && marks <= 100) {
            System.out.println("Valid marks");
        } else {
            System.out.println("Invalid marks");
        }

        scanner.close();
    }
}`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            This program checks both the minimum and maximum boundaries.
          </p>
        </div>
      </section>

      {/* SECTION 5: 5. Nested Conditional Statements */}
      <section id="section-5" className="bg-slate-900/80 rounded-2xl border border-slate-800 p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-500/15 text-orange-300 text-xs font-bold uppercase tracking-wider font-mono">
            Part 2 · Nested Decision Making
          </span>
          <span className="text-xs font-mono text-slate-400">Section 5</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          5. Nested Conditional Statements
        </h2>
        <div className="space-y-4 text-slate-300 leading-relaxed text-sm sm:text-base">
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>5.1 What are nested conditions?</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            A nested conditional statement is a conditional statement placed inside another conditional block.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Nested conditions are useful when a decision depends on the outcome of another decision.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Example:
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            A banking system must determine whether a withdrawal can be processed.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Conditions:
          </p>
          <ol className="list-decimal pl-5 space-y-2 text-slate-300 text-sm sm:text-base my-3 leading-relaxed">
            <li>Check whether the account is active.</li>
            <li>If active, check whether sufficient balance exists.</li>
            <li>If sufficient balance exists, process the transaction.</li>
            <li>Otherwise, reject the transaction.</li>
          </ol>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Java implementation:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public class BankWithdrawal {

    public static void main(String[] args) {

        boolean accountActive = true;

        double balance = 5000;
        double withdrawal = 2000;

        if (accountActive) {

            if (balance >= withdrawal) {

                balance = balance - withdrawal;

                System.out.println("Withdrawal successful");
                System.out.println("Remaining balance: " + balance);

            } else {

                System.out.println("Insufficient balance");
            }

        } else {

            System.out.println("Account is inactive");
        }
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
              <code>{`Withdrawal successful
Remaining balance: 3000.0`}</code>
            </pre>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>5.2 Nested conditions versus combined conditions</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Some problems can be implemented using either nested conditions or combined boolean expressions.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Nested:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`if (age >= 18) {

    if (hasID) {
        System.out.println("Allowed");
    }
}`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Combined:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`if (age >= 18 && hasID) {
    System.out.println("Allowed");
}`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Both express the same basic requirement in this example.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Use the approach that makes the intended logic clearest.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Nested conditions become especially useful when subsequent decisions depend on earlier outcomes or require different actions.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>5.3 Common nested-condition mistake: dangling else</span>
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
              <code>{`if (number >= 0)
    if (number == 0)
        System.out.println("Zero");
    else
        System.out.println("Non-zero");`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            The <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">else</code> belongs to the nearest unmatched <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">if</code>, not necessarily the outer one.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            This behavior is called the dangling-else rule.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            To avoid confusion, always use braces:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`if (number >= 0) {

    if (number == 0) {
        System.out.println("Zero");
    } else {
        System.out.println("Positive");
    }

} else {
    System.out.println("Negative");
}`}</code>
            </pre>
          </div>
        </div>
      </section>

      {/* SECTION 6: 6. Switch Statements and Switch Expressions */}
      <section id="section-6" className="bg-slate-900/80 rounded-2xl border border-slate-800 p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-500/15 text-orange-300 text-xs font-bold uppercase tracking-wider font-mono">
            Part 2 · Switch Statements & Expressions
          </span>
          <span className="text-xs font-mono text-slate-400">Section 6</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          6. Switch Statements and Switch Expressions
        </h2>
        <div className="space-y-4 text-slate-300 leading-relaxed text-sm sm:text-base">
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            The <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">switch</code> construct is useful when a program needs to choose among several discrete alternatives.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            It can make certain decision structures easier to read than long <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">if-else-if</code> chains.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>6.1 Traditional switch statement</span>
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
              <code>{`switch (expression) {

    case value1:
        // Statements
        break;

    case value2:
        // Statements
        break;

    default:
        // Default statements
}`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            The selector expression is evaluated, and control is transferred to the matching case.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Example: Day selection.
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public class DayChecker {

    public static void main(String[] args) {

        int day = 3;

        switch (day) {

            case 1:
                System.out.println("Monday");
                break;

            case 2:
                System.out.println("Tuesday");
                break;

            case 3:
                System.out.println("Wednesday");
                break;

            case 4:
                System.out.println("Thursday");
                break;

            case 5:
                System.out.println("Friday");
                break;

            default:
                System.out.println("Invalid day");
        }
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
              <code>{`Wednesday`}</code>
            </pre>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>6.2 Understanding break</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            In a traditional colon-style switch statement, <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">break</code> transfers control out of the switch statement.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Without a <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">break</code>, execution can continue into subsequent case bodies. This behavior is known as fall-through.
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
              <code>{`public class SwitchFallThrough {

    public static void main(String[] args) {

        int number = 1;

        switch (number) {

            case 1:
                System.out.println("One");

            case 2:
                System.out.println("Two");

            case 3:
                System.out.println("Three");
        }
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
              <code>{`One
Two
Three`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            The program starts at case 1 and continues executing subsequent statements because there are no breaks.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            This can be intentional, but accidental fall-through is a common source of bugs.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Corrected version:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`switch (number) {

    case 1:
        System.out.println("One");
        break;

    case 2:
        System.out.println("Two");
        break;

    case 3:
        System.out.println("Three");
        break;
}`}</code>
            </pre>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>6.3 Multiple case labels</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Several cases can perform the same action.
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public class WeekdayChecker {

    public static void main(String[] args) {

        int day = 6;

        switch (day) {

            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                System.out.println("Weekday");
                break;

            case 6:
            case 7:
                System.out.println("Weekend");
                break;

            default:
                System.out.println("Invalid day");
        }
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
              <code>{`Weekend`}</code>
            </pre>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>6.4 Switch with String</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Java also allows a <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">String</code> selector.
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public class RoleChecker {

    public static void main(String[] args) {

        String role = "ADMIN";

        switch (role) {

            case "ADMIN":
                System.out.println("Full access");
                break;

            case "STUDENT":
                System.out.println("Student access");
                break;

            case "GUEST":
                System.out.println("Limited access");
                break;

            default:
                System.out.println("Unknown role");
        }
    }
}`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            The comparison is case-sensitive for String labels.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>6.5 Modern switch expressions</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Modern Java supports switch expressions, which allow a switch construct to produce a value.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Switch expressions became a standard language feature in Java 14.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            They are particularly useful for assigning a result based on multiple alternatives.
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
              <code>{`public class SwitchExpression {

    public static void main(String[] args) {

        int day = 3;

        String dayName = switch (day) {

            case 1 -> "Monday";
            case 2 -> "Tuesday";
            case 3 -> "Wednesday";
            case 4 -> "Thursday";
            case 5 -> "Friday";
            case 6 -> "Saturday";
            case 7 -> "Sunday";

            default -> "Invalid day";
        };

        System.out.println(dayName);
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
              <code>{`Wednesday`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Notice the differences:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-slate-300 text-sm sm:text-base my-3 leading-relaxed">
            <li>The switch is used to calculate a value.</li>
            <li>Arrow labels use <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">-&gt;</code>.</li>
            <li>There is no need for <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">break</code> between these arrow rules.</li>
            <li>The result is assigned directly to <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">dayName</code>.</li>
          </ul>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>6.6 Switch expression with yield</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            When an arrow case contains a block with multiple statements, <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">yield</code> can return the result of that switch rule.
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public class YieldExample {

    public static void main(String[] args) {

        int marks = 85;

        String grade = switch (marks / 10) {

            case 10, 9 -> "A";

            case 8 -> {
                System.out.println("Excellent performance");
                yield "B";
            }

            case 7 -> "C";

            case 6 -> "D";

            default -> "F";
        };

        System.out.println("Grade: " + grade);
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
              <code>{`Excellent performance
Grade: B`}</code>
            </pre>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>6.7 Traditional switch versus switch expression</span>
          </h3>
          <div className="overflow-x-auto my-4 rounded-xl border border-slate-800 shadow-2xs">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-white border-b border-slate-800 font-semibold">
                <tr>
                  <th className="px-4 py-3">Feature</th>
                  <th className="px-4 py-3">Traditional switch</th>
                  <th className="px-4 py-3">Switch expression</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">Primary purpose</td>
                  <td className="px-4 py-2.5 text-slate-300">Execute selected statements</td>
                  <td className="px-4 py-2.5 text-slate-300">Produce a result or execute selected rules</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">Syntax</td>
                  <td className="px-4 py-2.5 text-slate-300"><code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">case value:</code></td>
                  <td className="px-4 py-2.5 text-slate-300"><code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">case value -&gt;</code></td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">Fall-through</td>
                  <td className="px-4 py-2.5 text-slate-300">Possible with colon labels</td>
                  <td className="px-4 py-2.5 text-slate-300">No fall-through between arrow rules</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300"><code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">break</code></td>
                  <td className="px-4 py-2.5 text-slate-300">Commonly used</td>
                  <td className="px-4 py-2.5 text-slate-300">Not required between arrow rules</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300"><code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">yield</code></td>
                  <td className="px-4 py-2.5 text-slate-300">Not used for ordinary switch statements</td>
                  <td className="px-4 py-2.5 text-slate-300">Can return a result from a block</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">Assignment</td>
                  <td className="px-4 py-2.5 text-slate-300">Usually performed inside cases</td>
                  <td className="px-4 py-2.5 text-slate-300">Can assign the resulting value directly</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-white">Important version requirement:</strong> Traditional switch statements are available in older Java versions. Modern switch expressions require Java 14 or later. This course uses a JDK 17 or later baseline so students can practice both forms.
          </p>
        </div>
      </section>

      {/* SECTION 7: 7. Looping Statements */}
      <section id="section-7" className="bg-slate-900/80 rounded-2xl border border-slate-800 p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-500/15 text-orange-300 text-xs font-bold uppercase tracking-wider font-mono">
            Part 3 · Iteration Fundamentals
          </span>
          <span className="text-xs font-mono text-slate-400">Section 7</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          7. Looping Statements
        </h2>
        <div className="space-y-4 text-slate-300 leading-relaxed text-sm sm:text-base">
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>7.1 What is a loop?</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            A loop is a control-flow structure that repeatedly executes a block of statements.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Loops are useful whenever a task needs to be performed multiple times.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Examples:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-slate-300 text-sm sm:text-base my-3 leading-relaxed">
            <li>Printing numbers from 1 to 100.</li>
            <li>Calculating the sum of several values.</li>
            <li>Processing student records.</li>
            <li>Searching through data.</li>
            <li>Generating mathematical patterns.</li>
            <li>Repeating a menu until the user exits.</li>
          </ul>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Without loops, programmers would need to write the same statements repeatedly.
          </p>
          <h4 className="text-base sm:text-lg font-bold text-white mt-4 mb-2 flex items-center gap-2">
            <span>Repetition without loops</span>
          </h4>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`System.out.println(1);
System.out.println(2);
System.out.println(3);
System.out.println(4);
System.out.println(5);`}</code>
            </pre>
          </div>
          <h4 className="text-base sm:text-lg font-bold text-white mt-4 mb-2 flex items-center gap-2">
            <span>Repetition with a loop</span>
          </h4>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`for (int i = 1; i <= 5; i++) {
    System.out.println(i);
}`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            The loop produces the same sequence with much less code.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Java provides three fundamental looping statements:
          </p>
          <ol className="list-decimal pl-5 space-y-2 text-slate-300 text-sm sm:text-base my-3 leading-relaxed">
            <li><code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">for</code></li>
            <li><code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">while</code></li>
            <li><code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">do-while</code></li>
          </ol>
        </div>
      </section>

      {/* SECTION 8: 8. The for Loop */}
      <section id="section-8" className="bg-slate-900/80 rounded-2xl border border-slate-800 p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-500/15 text-orange-300 text-xs font-bold uppercase tracking-wider font-mono">
            Part 3 · Counted Loops (for)
          </span>
          <span className="text-xs font-mono text-slate-400">Section 8</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          8. The for Loop
        </h2>
        <div className="space-y-4 text-slate-300 leading-relaxed text-sm sm:text-base">
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>8.1 What is a for loop?</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            The <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">for</code> loop is commonly used when the number of iterations is known or controlled by a counter.
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
              <code>{`for (initialization; condition; update) {

    // Statements
}`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            The three components are:
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-white">Initialization</strong>
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Executes once before the loop begins.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-white">Condition</strong>
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Checked before each iteration.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-white">Update</strong>
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Executes after each iteration.
          </p>
          <h4 className="text-base sm:text-lg font-bold text-white mt-4 mb-2 flex items-center gap-2">
            <span>Execution flow</span>
          </h4>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`       Initialization
              |
              v
         Check condition
              |
         +----+----+
         |         |
        True      False
         |         |
         v         |
      Execute      |
       body        |
         |         |
         v         |
        Update     |
         |         |
         +---------+
                   |
                   v
                  End`}</code>
            </pre>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>8.2 Example: Print numbers from 1 to 10</span>
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public class ForLoopExample {

    public static void main(String[] args) {

        for (int i = 1; i <= 10; i++) {

            System.out.println(i);
        }
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
              <code>{`1
2
3
4
5
6
7
8
9
10`}</code>
            </pre>
          </div>
          <h4 className="text-base sm:text-lg font-bold text-white mt-4 mb-2 flex items-center gap-2">
            <span>Dry run</span>
          </h4>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            A dry run means tracing the program manually to understand how variables change during execution.
          </p>
          <div className="overflow-x-auto my-4 rounded-xl border border-slate-800 shadow-2xs">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-white border-b border-slate-800 font-semibold">
                <tr>
                  <th className="px-4 py-3">Iteration</th>
                  <th className="px-4 py-3">i</th>
                  <th className="px-4 py-3">Condition <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">i &lt;= 5</code></th>
                  <th className="px-4 py-3">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">1</td>
                  <td className="px-4 py-2.5 text-slate-300">1</td>
                  <td className="px-4 py-2.5 text-slate-300">True</td>
                  <td className="px-4 py-2.5 text-slate-300">Print 1</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">2</td>
                  <td className="px-4 py-2.5 text-slate-300">2</td>
                  <td className="px-4 py-2.5 text-slate-300">True</td>
                  <td className="px-4 py-2.5 text-slate-300">Print 2</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">3</td>
                  <td className="px-4 py-2.5 text-slate-300">3</td>
                  <td className="px-4 py-2.5 text-slate-300">True</td>
                  <td className="px-4 py-2.5 text-slate-300">Print 3</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">4</td>
                  <td className="px-4 py-2.5 text-slate-300">4</td>
                  <td className="px-4 py-2.5 text-slate-300">True</td>
                  <td className="px-4 py-2.5 text-slate-300">Print 4</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">5</td>
                  <td className="px-4 py-2.5 text-slate-300">5</td>
                  <td className="px-4 py-2.5 text-slate-300">True</td>
                  <td className="px-4 py-2.5 text-slate-300">Print 5</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">6</td>
                  <td className="px-4 py-2.5 text-slate-300">6</td>
                  <td className="px-4 py-2.5 text-slate-300">False</td>
                  <td className="px-4 py-2.5 text-slate-300">Stop</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            This trace illustrates how a loop executes and terminates.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>8.3 Counting backwards</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            A loop can count in descending order.
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public class Countdown {

    public static void main(String[] args) {

        for (int i = 10; i >= 1; i--) {

            System.out.println(i);
        }
    }
}`}</code>
            </pre>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>8.4 Incrementing by a fixed amount</span>
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public class StepLoop {

    public static void main(String[] args) {

        for (int i = 0; i <= 20; i += 2) {

            System.out.println(i);
        }
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
2
4
6
8
10
12
14
16
18
20`}</code>
            </pre>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>8.5 Calculating a sum using a loop</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Problem:
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Calculate the sum of numbers from 1 to 100.
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public class SumCalculator {

    public static void main(String[] args) {

        int sum = 0;

        for (int i = 1; i <= 100; i++) {

            sum = sum + i;
        }

        System.out.println("Sum: " + sum);
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
              <code>{`Sum: 5050`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Explanation:
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            The variable <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">sum</code> begins at zero.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Each iteration adds the current value of <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">i</code> to the running total.
          </p>
        </div>
      </section>

      {/* SECTION 9: 9. The while Loop */}
      <section id="section-9" className="bg-slate-900/80 rounded-2xl border border-slate-800 p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-500/15 text-orange-300 text-xs font-bold uppercase tracking-wider font-mono">
            Part 3 · Condition-Controlled Loops (while)
          </span>
          <span className="text-xs font-mono text-slate-400">Section 9</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          9. The while Loop
        </h2>
        <div className="space-y-4 text-slate-300 leading-relaxed text-sm sm:text-base">
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>9.1 What is a while loop?</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            A <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">while</code> loop repeatedly executes a block while its condition remains true.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            It is especially useful when the number of repetitions is not known in advance.
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
              <code>{`while (condition) {

    // Statements
}`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            The condition is checked before executing the body.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Therefore, a while loop may execute zero times.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>9.2 Example: Print numbers from 1 to 5</span>
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public class WhileExample {

    public static void main(String[] args) {

        int i = 1;

        while (i <= 5) {

            System.out.println(i);

            i++;
        }
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
              <code>{`1
2
3
4
5`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            The counter <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">i</code> must be updated.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Without the update, the condition may remain true indefinitely, producing an infinite loop.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>9.3 Example: Sum digits of a number</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Suppose the input is:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`1234`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            We need to calculate:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`1 + 2 + 3 + 4 = 10`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Algorithm:
          </p>
          <ol className="list-decimal pl-5 space-y-2 text-slate-300 text-sm sm:text-base my-3 leading-relaxed">
            <li>Take the remainder when dividing by 10.</li>
            <li>Add the remainder to the sum.</li>
            <li>Remove the final digit using integer division by 10.</li>
            <li>Repeat until the number becomes zero.</li>
          </ol>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Java implementation:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public class DigitSum {

    public static void main(String[] args) {

        int number = 1234;

        int sum = 0;

        while (number > 0) {

            int digit = number % 10;

            sum += digit;

            number = number / 10;
        }

        System.out.println("Digit Sum: " + sum);
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
              <code>{`Digit Sum: 10`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            This example demonstrates how mathematical operations and loops work together.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            For this beginner implementation, the input is assumed to be a non-negative integer. A more complete implementation must account for zero and negative values.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>9.4 Sentinel-controlled loops</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            A sentinel value is a special value used to indicate that input processing should stop.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Example:
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            A program accepts numbers until the user enters <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">-1</code>.
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`import java.util.Scanner;

public class SentinelExample {

    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);

        int number;
        int sum = 0;

        System.out.println("Enter numbers (-1 to stop):");

        while (true) {

            number = scanner.nextInt();

            if (number == -1) {
                break;
            }

            sum += number;
        }

        System.out.println("Total: " + sum);

        scanner.close();
    }
}`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            The sentinel value is not added to the total.
          </p>
        </div>
      </section>

      {/* SECTION 10: 10. The do-while Loop */}
      <section id="section-10" className="bg-slate-900/80 rounded-2xl border border-slate-800 p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-500/15 text-orange-300 text-xs font-bold uppercase tracking-wider font-mono">
            Part 3 · Post-Test Loops (do-while)
          </span>
          <span className="text-xs font-mono text-slate-400">Section 10</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          10. The do-while Loop
        </h2>
        <div className="space-y-4 text-slate-300 leading-relaxed text-sm sm:text-base">
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>10.1 What is a do-while loop?</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            A <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">do-while</code> loop executes its body first and checks the condition afterward.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Therefore, the body executes at least once, even if the condition is initially false.
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
              <code>{`do {

    // Statements

} while (condition);`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Notice the semicolon after the while condition.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>10.2 Example</span>
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public class DoWhileExample {

    public static void main(String[] args) {

        int i = 1;

        do {

            System.out.println(i);

            i++;

        } while (i <= 5);
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
              <code>{`1
2
3
4
5`}</code>
            </pre>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>10.3 Difference between while and do-while</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Consider both programs with an initial value of 10.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            While:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`int number = 10;

while (number < 5) {

    System.out.println(number);
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
              <code>{`No output`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            The condition is false before the loop begins.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Do-while:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`int number = 10;

do {

    System.out.println(number);

} while (number < 5);`}</code>
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
              <code>{`10`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            The body executes once before the condition is checked.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>10.4 Practical use: Menu-driven program</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            A menu-driven program allows a user to select operations repeatedly until choosing an exit option.
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`import java.util.Scanner;

public class MenuExample {

    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);

        int choice;

        do {

            System.out.println("\\nMENU");
            System.out.println("1. Say Hello");
            System.out.println("2. Display Java");
            System.out.println("3. Exit");

            System.out.print("Enter choice: ");

            choice = scanner.nextInt();

            switch (choice) {

                case 1:
                    System.out.println("Hello!");
                    break;

                case 2:
                    System.out.println("Java Programming");
                    break;

                case 3:
                    System.out.println("Exiting...");
                    break;

                default:
                    System.out.println("Invalid choice");
            }

        } while (choice != 3);

        scanner.close();
    }
}`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            This example combines:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-slate-300 text-sm sm:text-base my-3 leading-relaxed">
            <li><code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">do-while</code></li>
            <li><code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">switch</code></li>
            <li><code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">break</code></li>
            <li>User input</li>
            <li>Repeated execution</li>
          </ul>
        </div>
      </section>

      {/* SECTION 11: 11. Comparison of for, while, and do-while */}
      <section id="section-11" className="bg-slate-900/80 rounded-2xl border border-slate-800 p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-500/15 text-orange-300 text-xs font-bold uppercase tracking-wider font-mono">
            Part 3 · Loop Comparison & Selection
          </span>
          <span className="text-xs font-mono text-slate-400">Section 11</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          11. Comparison of for, while, and do-while
        </h2>
        <div className="space-y-4 text-slate-300 leading-relaxed text-sm sm:text-base">
          <div className="overflow-x-auto my-4 rounded-xl border border-slate-800 shadow-2xs">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-white border-b border-slate-800 font-semibold">
                <tr>
                  <th className="px-4 py-3">Feature</th>
                  <th className="px-4 py-3">for</th>
                  <th className="px-4 py-3">while</th>
                  <th className="px-4 py-3">do-while</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">Condition checking</td>
                  <td className="px-4 py-2.5 text-slate-300">Before execution</td>
                  <td className="px-4 py-2.5 text-slate-300">Before execution</td>
                  <td className="px-4 py-2.5 text-slate-300">After execution</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">Minimum iterations</td>
                  <td className="px-4 py-2.5 text-slate-300">0</td>
                  <td className="px-4 py-2.5 text-slate-300">0</td>
                  <td className="px-4 py-2.5 text-slate-300">1</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">Typical use</td>
                  <td className="px-4 py-2.5 text-slate-300">Counter-controlled repetition</td>
                  <td className="px-4 py-2.5 text-slate-300">Condition-controlled repetition</td>
                  <td className="px-4 py-2.5 text-slate-300">At least one execution required</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">Initialization location</td>
                  <td className="px-4 py-2.5 text-slate-300">Usually in loop header</td>
                  <td className="px-4 py-2.5 text-slate-300">Usually before loop</td>
                  <td className="px-4 py-2.5 text-slate-300">Usually before loop</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">Update location</td>
                  <td className="px-4 py-2.5 text-slate-300">Usually in loop header</td>
                  <td className="px-4 py-2.5 text-slate-300">Inside the loop body</td>
                  <td className="px-4 py-2.5 text-slate-300">Inside the loop body</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            General guideline:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-slate-300 text-sm sm:text-base my-3 leading-relaxed">
            <li>Use <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">for</code> when the iteration count or counter progression is clear.</li>
            <li>Use <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">while</code> when repetition depends on a condition.</li>
            <li>Use <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">do-while</code> when the operation must execute at least once.</li>
          </ul>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            All three can solve many of the same problems. Readability and correctness should guide the choice.
          </p>
        </div>
      </section>

      {/* SECTION 12: 12. Nested Loops */}
      <section id="section-12" className="bg-slate-900/80 rounded-2xl border border-slate-800 p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-500/15 text-orange-300 text-xs font-bold uppercase tracking-wider font-mono">
            Part 4 · Nested Loops & 2D Logic
          </span>
          <span className="text-xs font-mono text-slate-400">Section 12</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          12. Nested Loops
        </h2>
        <div className="space-y-4 text-slate-300 leading-relaxed text-sm sm:text-base">
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>12.1 What are nested loops?</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            A nested loop is a loop placed inside another loop.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Nested loops are useful for processing two-dimensional data, generating patterns, and comparing combinations of values.
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
              <code>{`for (int i = 1; i <= 3; i++) {

    for (int j = 1; j <= 3; j++) {

        System.out.println(i + " " + j);
    }
}`}</code>
            </pre>
          </div>
          <h4 className="text-base sm:text-lg font-bold text-white mt-4 mb-2 flex items-center gap-2">
            <span>Execution process</span>
          </h4>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            For every iteration of the outer loop, the inner loop executes completely.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Trace:
          </p>
          <div className="overflow-x-auto my-4 rounded-xl border border-slate-800 shadow-2xs">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-white border-b border-slate-800 font-semibold">
                <tr>
                  <th className="px-4 py-3">Outer <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">i</code></th>
                  <th className="px-4 py-3">Inner <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">j</code></th>
                  <th className="px-4 py-3">Output</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">1</td>
                  <td className="px-4 py-2.5 text-slate-300">1</td>
                  <td className="px-4 py-2.5 text-slate-300">1 1</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">1</td>
                  <td className="px-4 py-2.5 text-slate-300">2</td>
                  <td className="px-4 py-2.5 text-slate-300">1 2</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">1</td>
                  <td className="px-4 py-2.5 text-slate-300">3</td>
                  <td className="px-4 py-2.5 text-slate-300">1 3</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">2</td>
                  <td className="px-4 py-2.5 text-slate-300">1</td>
                  <td className="px-4 py-2.5 text-slate-300">2 1</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">2</td>
                  <td className="px-4 py-2.5 text-slate-300">2</td>
                  <td className="px-4 py-2.5 text-slate-300">2 2</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">2</td>
                  <td className="px-4 py-2.5 text-slate-300">3</td>
                  <td className="px-4 py-2.5 text-slate-300">2 3</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">3</td>
                  <td className="px-4 py-2.5 text-slate-300">1</td>
                  <td className="px-4 py-2.5 text-slate-300">3 1</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">3</td>
                  <td className="px-4 py-2.5 text-slate-300">2</td>
                  <td className="px-4 py-2.5 text-slate-300">3 2</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">3</td>
                  <td className="px-4 py-2.5 text-slate-300">3</td>
                  <td className="px-4 py-2.5 text-slate-300">3 3</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            There are nine total executions of the inner statement.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>12.2 Multiplication table</span>
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public class MultiplicationTable {

    public static void main(String[] args) {

        for (int i = 1; i <= 10; i++) {

            for (int j = 1; j <= 10; j++) {

                System.out.print(i * j + "\\t");
            }

            System.out.println();
        }
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
              <code>{`1    2    3    4    5    6    7    8    9    10
2    4    6    8    10   12   14   16   18   20
3    6    9    12   15   18   21   24   27   30
...`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Each outer iteration generates one row.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Each inner iteration generates a value within that row.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>12.3 Understanding nested-loop complexity</span>
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
              <code>{`for (int i = 0; i < n; i++) {

    for (int j = 0; j < n; j++) {

        System.out.println(i + " " + j);
    }
}`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            The outer loop runs n times.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            For every outer iteration, the inner loop also runs n times.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Total executions:
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            \[
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            n \times n = n^2
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            \]
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Therefore, the basic time complexity is O(n²).
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            This is an important early connection between Java loops and DSA.
          </p>
        </div>
      </section>

      {/* SECTION 13: 13. Break and Continue */}
      <section id="section-13" className="bg-slate-900/80 rounded-2xl border border-slate-800 p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-500/15 text-orange-300 text-xs font-bold uppercase tracking-wider font-mono">
            Part 4 · Jump Statements & Labels
          </span>
          <span className="text-xs font-mono text-slate-400">Section 13</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          13. Break and Continue
        </h2>
        <div className="space-y-4 text-slate-300 leading-relaxed text-sm sm:text-base">
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>13.1 What is break?</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            The <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">break</code> statement terminates the nearest enclosing loop or switch statement.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            It is useful when the program has found what it needs or must stop processing.
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
              <code>{`public class BreakExample {

    public static void main(String[] args) {

        for (int i = 1; i <= 10; i++) {

            if (i == 5) {
                break;
            }

            System.out.println(i);
        }
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
              <code>{`1
2
3
4`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            When <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">i</code> reaches 5, the loop terminates.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>13.2 Practical use: Search for a number</span>
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public class SearchExample {

    public static void main(String[] args) {

        int target = 7;

        for (int i = 1; i <= 10; i++) {

            if (i == target) {

                System.out.println("Number found");

                break;
            }
        }
    }
}`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            The loop stops when the target is found.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>13.3 What is continue?</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            The <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">continue</code> statement skips the remaining statements in the current loop iteration and proceeds to the next iteration.
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
              <code>{`public class ContinueExample {

    public static void main(String[] args) {

        for (int i = 1; i <= 10; i++) {

            if (i == 5) {
                continue;
            }

            System.out.println(i);
        }
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
              <code>{`1
2
3
4
6
7
8
9
10`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            The value 5 is skipped, but the loop continues.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>13.4 Break versus continue</span>
          </h3>
          <div className="overflow-x-auto my-4 rounded-xl border border-slate-800 shadow-2xs">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-white border-b border-slate-800 font-semibold">
                <tr>
                  <th className="px-4 py-3">break</th>
                  <th className="px-4 py-3">continue</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">Terminates the nearest enclosing loop or switch</td>
                  <td className="px-4 py-2.5 text-slate-300">Skips the current loop iteration</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">Stops further iterations of that loop</td>
                  <td className="px-4 py-2.5 text-slate-300">Continues with the next iteration</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">Used to exit early</td>
                  <td className="px-4 py-2.5 text-slate-300">Used to ignore selected iterations</td>
                </tr>
              </tbody>
            </table>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>13.5 Labeled break: An advanced introduction</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Java also provides labeled break and continue statements.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            They can transfer control from nested loops to an enclosing labeled statement.
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
              <code>{`public class LabeledBreakExample {

    public static void main(String[] args) {

        outerLoop:

        for (int i = 1; i <= 3; i++) {

            for (int j = 1; j <= 3; j++) {

                if (i == 2 && j == 2) {
                    break outerLoop;
                }

                System.out.println(i + " " + j);
            }
        }
    }
}`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            The labeled break exits the outer loop, not just the inner one.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Labeled control statements should be used sparingly because excessive use can make program flow difficult to understand.
          </p>
        </div>
      </section>

      {/* SECTION 14: 14. Methods in Java */}
      <section id="section-14" className="bg-slate-900/80 rounded-2xl border border-slate-800 p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-500/15 text-orange-300 text-xs font-bold uppercase tracking-wider font-mono">
            Part 5 · Method Anatomy & Modularity
          </span>
          <span className="text-xs font-mono text-slate-400">Section 14</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          14. Methods in Java
        </h2>
        <div className="space-y-4 text-slate-300 leading-relaxed text-sm sm:text-base">
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>14.1 What is a method?</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            A method is a named block of code that performs a specific operation and can be invoked whenever that operation is required.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Methods are fundamental to modular programming.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            They help developers:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-slate-300 text-sm sm:text-base my-3 leading-relaxed">
            <li>Reduce code duplication.</li>
            <li>Organize program logic.</li>
            <li>Improve readability.</li>
            <li>Reuse functionality.</li>
            <li>Test individual operations.</li>
            <li>Maintain complex applications.</li>
          </ul>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Consider a program that calculates the square of a number several times.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Without methods:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`int a = 5 * 5;

int b = 8 * 8;

int c = 10 * 10;`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            With a reusable method:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public class SquareExample {

    static int square(int number) {

        return number * number;
    }

    public static void main(String[] args) {

        System.out.println(square(5));
        System.out.println(square(8));
        System.out.println(square(10));
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
              <code>{`25
64
100`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            The calculation is written once and reused.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>14.2 Basic method syntax</span>
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`accessModifier static returnType methodName(parameters) {

    // Method body

    return value;
}`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Not every method must be static or return a value. The structure depends on its purpose and whether it belongs to a class or an object.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            For the introductory examples in this module, methods are static so they can be called directly from the traditional <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">main()</code> method.
          </p>
          <h4 className="text-base sm:text-lg font-bold text-white mt-4 mb-2 flex items-center gap-2">
            <span>Components of a method</span>
          </h4>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-white">Access modifier</strong>
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Controls accessibility, such as <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">public</code> or <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">private</code>.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-white">static</strong>
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Indicates that the method belongs to the class rather than a particular object.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-white">Return type</strong>
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Specifies what type of value the method returns.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-white">Method name</strong>
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            A meaningful identifier used to invoke the method.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-white">Parameters</strong>
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Inputs accepted by the method.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-white">Method body</strong>
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Contains the statements executed when the method is called.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>14.3 Defining and calling a method</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Example:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public class MethodExample {

    static void greet() {

        System.out.println("Welcome to Java!");
    }

    public static void main(String[] args) {

        greet();
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
              <code>{`Welcome to Java!`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Explanation:
          </p>
          <ol className="list-decimal pl-5 space-y-2 text-slate-300 text-sm sm:text-base my-3 leading-relaxed">
            <li><code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">greet()</code> is defined.</li>
            <li><code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">main()</code> calls the method.</li>
            <li>Java transfers execution to <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">greet()</code>.</li>
            <li>The message is displayed.</li>
            <li>Execution returns to the statement following the method call.</li>
          </ol>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>14.4 Method execution flow</span>
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`             main()
                |
                v
          greet() called
                |
                v
          Execute greet()
                |
                v
          Display message
                |
                v
          Return to main()
                |
                v
         Continue execution`}</code>
            </pre>
          </div>
        </div>
      </section>

      {/* SECTION 15: 15. Method Parameters and Arguments */}
      <section id="section-15" className="bg-slate-900/80 rounded-2xl border border-slate-800 p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-500/15 text-orange-300 text-xs font-bold uppercase tracking-wider font-mono">
            Part 5 · Parameters & Pass-by-Value
          </span>
          <span className="text-xs font-mono text-slate-400">Section 15</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          15. Method Parameters and Arguments
        </h2>
        <div className="space-y-4 text-slate-300 leading-relaxed text-sm sm:text-base">
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>15.1 What are parameters?</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Parameters are variables declared in a method definition to receive input values.
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
              <code>{`static void displayAge(int age) {

    System.out.println(age);
}`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Here, <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">age</code> is a parameter.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>15.2 What are arguments?</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Arguments are the actual values supplied when a method is called.
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`displayAge(21);`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Here, <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">21</code> is an argument.
          </p>
          <h4 className="text-base sm:text-lg font-bold text-white mt-4 mb-2 flex items-center gap-2">
            <span>Difference between parameters and arguments</span>
          </h4>
          <div className="overflow-x-auto my-4 rounded-xl border border-slate-800 shadow-2xs">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-white border-b border-slate-800 font-semibold">
                <tr>
                  <th className="px-4 py-3">Parameters</th>
                  <th className="px-4 py-3">Arguments</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">Declared in a method definition</td>
                  <td className="px-4 py-2.5 text-slate-300">Supplied during a method call</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">Define what input a method accepts</td>
                  <td className="px-4 py-2.5 text-slate-300">Provide actual input values</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">Example: <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">int number</code></td>
                  <td className="px-4 py-2.5 text-slate-300">Example: <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">10</code></td>
                </tr>
              </tbody>
            </table>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>15.3 Method with one parameter</span>
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public class ParameterExample {

    static void greetUser(String name) {

        System.out.println("Hello, " + name);
    }

    public static void main(String[] args) {

        greetUser("Alex");

        greetUser("Sam");
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
              <code>{`Hello, Alex
Hello, Sam`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            The same method works with different arguments.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>15.4 Method with multiple parameters</span>
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public class AdditionMethod {

    static void addNumbers(int a, int b) {

        int sum = a + b;

        System.out.println("Sum: " + sum);
    }

    public static void main(String[] args) {

        addNumbers(10, 20);

        addNumbers(50, 70);
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
              <code>{`Sum: 30
Sum: 120`}</code>
            </pre>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>15.5 Java uses pass-by-value</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Java always passes arguments by value.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            For primitive types, the method receives a copy of the primitive value.
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
              <code>{`public class PassByValueExample {

    static void changeNumber(int number) {

        number = 100;
    }

    public static void main(String[] args) {

        int value = 10;

        changeNumber(value);

        System.out.println(value);
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
              <code>{`10`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            The method changed its local parameter, not the original local variable in <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">main()</code>.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            For reference types, the value being copied is the reference.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            This means a method can modify the object through its copied reference, but reassigning that local reference does not change the caller's variable.
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
              <code>{`public class ReferenceExample {

    static void modifyArray(int[] numbers) {

        numbers[0] = 100;
    }

    public static void main(String[] args) {

        int[] values = {10, 20, 30};

        modifyArray(values);

        System.out.println(values[0]);
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
              <code>{`100`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            The method receives a copy of the reference, but both references point to the same array object.
          </p>
        </div>
      </section>

      {/* SECTION 16: 16. Return Types */}
      <section id="section-16" className="bg-slate-900/80 rounded-2xl border border-slate-800 p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-500/15 text-orange-300 text-xs font-bold uppercase tracking-wider font-mono">
            Part 5 · Return Types & Early Returns
          </span>
          <span className="text-xs font-mono text-slate-400">Section 16</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          16. Return Types
        </h2>
        <div className="space-y-4 text-slate-300 leading-relaxed text-sm sm:text-base">
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>16.1 What is a return type?</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            The return type specifies the type of value a method produces for its caller.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            A method can return:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-slate-300 text-sm sm:text-base my-3 leading-relaxed">
            <li>An integer.</li>
            <li>A decimal value.</li>
            <li>A boolean.</li>
            <li>A String.</li>
            <li>An object.</li>
            <li>Other valid Java reference or primitive types.</li>
          </ul>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            A method that does not return a value uses the <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">void</code> return type.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>16.2 Method returning an integer</span>
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public class ReturnExample {

    static int add(int a, int b) {

        return a + b;
    }

    public static void main(String[] args) {

        int result = add(10, 20);

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
            The <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">return</code> statement sends the calculated value back to the caller.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>16.3 Method returning a boolean</span>
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public class EvenChecker {

    static boolean isEven(int number) {

        return number % 2 == 0;
    }

    public static void main(String[] args) {

        System.out.println(isEven(10));

        System.out.println(isEven(15));
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
false`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            The method returns a boolean rather than printing the answer directly.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            This separation is generally more reusable because the calling program can decide what to do with the result.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>16.4 Difference between void and return methods</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-white">Void method</strong>
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`static void greet() {

    System.out.println("Hello");
}`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            This method performs an action without returning a value.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-white">Return method</strong>
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`static int getNumber() {

    return 100;
}`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            This method returns an integer to the caller.
          </p>
          <div className="overflow-x-auto my-4 rounded-xl border border-slate-800 shadow-2xs">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-white border-b border-slate-800 font-semibold">
                <tr>
                  <th className="px-4 py-3">Void method</th>
                  <th className="px-4 py-3">Return method</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">Does not return a value</td>
                  <td className="px-4 py-2.5 text-slate-300">Returns a value</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">Uses <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">void</code></td>
                  <td className="px-4 py-2.5 text-slate-300">Uses a specific return type</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">Useful for performing an action</td>
                  <td className="px-4 py-2.5 text-slate-300">Useful for producing a reusable result</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">Does not require a value-returning statement</td>
                  <td className="px-4 py-2.5 text-slate-300">Must satisfy Java's return requirements</td>
                </tr>
              </tbody>
            </table>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>16.5 Multiple return paths</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            A method can have different return statements depending on its conditions.
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public class MaximumFinder {

    static int findMaximum(int a, int b) {

        if (a > b) {
            return a;
        }

        return b;
    }

    public static void main(String[] args) {

        System.out.println(findMaximum(20, 35));
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
              <code>{`35`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Every possible path through a method declared with a non-void return type must return an appropriate value or otherwise complete according to Java's method rules.
          </p>
        </div>
      </section>

      {/* SECTION 17: 17. Method Overloading */}
      <section id="section-17" className="bg-slate-900/80 rounded-2xl border border-slate-800 p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-500/15 text-orange-300 text-xs font-bold uppercase tracking-wider font-mono">
            Part 5 · Compile-Time Polymorphism
          </span>
          <span className="text-xs font-mono text-slate-400">Section 17</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          17. Method Overloading
        </h2>
        <div className="space-y-4 text-slate-300 leading-relaxed text-sm sm:text-base">
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>17.1 What is method overloading?</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Method overloading means defining multiple methods with the same name but different parameter lists within the same class, subject to Java's overloading rules.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            It allows related operations to use a common method name.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            The compiler determines which overloaded method to invoke based on the supplied arguments and their types.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>17.2 Overloading with different numbers of parameters</span>
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public class OverloadingExample {

    static int add(int a, int b) {

        return a + b;
    }

    static int add(int a, int b, int c) {

        return a + b + c;
    }

    public static void main(String[] args) {

        System.out.println(add(10, 20));

        System.out.println(add(10, 20, 30));
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
              <code>{`30
60`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Both methods are named <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">add</code>, but accept different numbers of parameters.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>17.3 Overloading with different parameter types</span>
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public class TypeOverloading {

    static int add(int a, int b) {

        return a + b;
    }

    static double add(double a, double b) {

        return a + b;
    }

    public static void main(String[] args) {

        System.out.println(add(10, 20));

        System.out.println(add(10.5, 20.5));
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
              <code>{`30
31.0`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            The compiler selects the appropriate method based on the argument types.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>17.4 Overloading with different parameter orders</span>
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public class ParameterOrder {

    static void display(String name, int age) {

        System.out.println(name + " " + age);
    }

    static void display(int age, String name) {

        System.out.println(name + " " + age);
    }

    public static void main(String[] args) {

        display("Alex", 21);

        display(22, "Sam");
    }
}`}</code>
            </pre>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>17.5 Important rules of method overloading</span>
          </h3>
          <ol className="list-decimal pl-5 space-y-2 text-slate-300 text-sm sm:text-base my-3 leading-relaxed">
            <li>Methods must have different parameter lists.</li>
            <li>The number of parameters can differ.</li>
            <li>Parameter types can differ.</li>
            <li>Parameter order can differ.</li>
            <li>Changing only the return type is not sufficient.</li>
            <li>Changing only parameter names is not sufficient.</li>
          </ol>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Invalid overloading:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`static int calculate(int a, int b) {
    return a + b;
}

static double calculate(int a, int b) {
    return a + b;
}`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            These declarations have the same method name and parameter signature. Java cannot distinguish them based only on return type.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>17.6 Method overloading and compile-time polymorphism</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Method overloading is commonly described as compile-time polymorphism.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            The compiler resolves which method is applicable during compilation.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            This is an early introduction to polymorphism, a central object-oriented programming concept explored in later modules.
          </p>
        </div>
      </section>

      {/* SECTION 18: 18. Scope of Variables */}
      <section id="section-18" className="bg-slate-900/80 rounded-2xl border border-slate-800 p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-500/15 text-orange-300 text-xs font-bold uppercase tracking-wider font-mono">
            Part 6 · Scope, Lifetime & Shadowing
          </span>
          <span className="text-xs font-mono text-slate-400">Section 18</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          18. Scope of Variables
        </h2>
        <div className="space-y-4 text-slate-300 leading-relaxed text-sm sm:text-base">
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>18.1 What is variable scope?</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Variable scope defines the region of a program in which a variable can be accessed by its name.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Java uses blocks, methods, classes, and other declarations to determine the visibility and accessibility of variables.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Understanding scope helps prevent naming conflicts and accidental misuse of data.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>18.2 Local variable scope</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            A local variable is declared inside a method or another local block.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            It is accessible only within its permitted scope.
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
              <code>{`public class LocalScope {

    public static void main(String[] args) {

        int age = 21;

        System.out.println(age);
    }
}`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            The variable <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">age</code> is local to <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">main()</code>.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>18.3 Block scope</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            A variable declared inside a block cannot be accessed outside that block.
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public class BlockScope {

    public static void main(String[] args) {

        if (true) {

            int number = 100;

            System.out.println(number);
        }

        // number cannot be accessed here
    }
}`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            The variable exists only within the block where it is declared.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>18.4 Method parameter scope</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Parameters are accessible within their method body.
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public class ParameterScope {

    static void display(int number) {

        System.out.println(number);
    }

    public static void main(String[] args) {

        display(50);
    }
}`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            The parameter <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">number</code> belongs to <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">display()</code>.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>18.5 Instance variable scope</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Instance variables are declared inside a class but outside its methods and without the <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">static</code> keyword.
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public class Employee {

    String name;

    int age;

    void display() {

        System.out.println(name);

        System.out.println(age);
    }
}`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Each object of the class has its own instance variables.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>18.6 Static variable scope</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            A static variable belongs to the class rather than an individual instance.
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public class Counter {

    static int count = 0;

    public static void main(String[] args) {

        count++;

        count++;

        System.out.println(count);
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
              <code>{`2`}</code>
            </pre>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>18.7 Variable shadowing</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Variable shadowing occurs when a local variable or parameter has the same name as a variable declared in an enclosing scope.
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
              <code>{`public class ShadowingExample {

    static int number = 100;

    public static void main(String[] args) {

        int number = 50;

        System.out.println(number);

        System.out.println(ShadowingExample.number);
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
              <code>{`50
100`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            The local variable shadows the class's static field when the simple name <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">number</code> is used inside the method.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>18.8 Scope versus lifetime</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Scope and lifetime are related but different concepts.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-white">Scope</strong> describes where a variable can be accessed by name.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-white">Lifetime</strong> describes how long its storage or associated state exists during program execution.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            A local variable is available within its scope while its method or block is executing.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            An instance field belongs to an object and remains part of that object's state while the object exists.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            A static field belongs to a loaded class and is associated with that class's runtime lifecycle.
          </p>
        </div>
      </section>

      {/* SECTION 19: 19. Recursion — Introduction */}
      <section id="section-19" className="bg-slate-900/80 rounded-2xl border border-slate-800 p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-500/15 text-orange-300 text-xs font-bold uppercase tracking-wider font-mono">
            Part 7 · Recursion & Call Stacks
          </span>
          <span className="text-xs font-mono text-slate-400">Section 19</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          19. Recursion — Introduction
        </h2>
        <div className="space-y-4 text-slate-300 leading-relaxed text-sm sm:text-base">
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>19.1 What is recursion?</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Recursion is a programming technique in which a method calls itself to solve a problem.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            A recursive method reduces a problem into smaller instances of the same problem until a terminating condition is reached.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Recursion is useful for problems that naturally have recursive structures.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Examples:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-slate-300 text-sm sm:text-base my-3 leading-relaxed">
            <li>Factorial calculation.</li>
            <li>Tree traversal.</li>
            <li>Searching and sorting algorithms.</li>
            <li>Divide-and-conquer algorithms.</li>
            <li>Mathematical sequences.</li>
            <li>Backtracking problems.</li>
          </ul>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>19.2 Two essential components of recursion</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Every correctly designed recursive algorithm needs two important components.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-white">1. Base case</strong>
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            The base case defines when recursion stops.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Without a base case, recursive calls may continue until the program exhausts available stack space.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-white">2. Recursive case</strong>
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            The recursive case reduces the problem and calls the method again with a smaller or simpler input.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            General structure:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`returnType method(parameters) {

    if (baseCondition) {
        return baseResult;
    }

    return method(smallerProblem);
}`}</code>
            </pre>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>19.3 Example: Countdown using recursion</span>
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public class Countdown {

    static void countDown(int number) {

        if (number == 0) {
            System.out.println("Finished");
            return;
        }

        System.out.println(number);

        countDown(number - 1);
    }

    public static void main(String[] args) {

        countDown(5);
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
              <code>{`5
4
3
2
1
Finished`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Each call reduces the number by one.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Eventually, the base case becomes true.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>19.4 Example: Factorial using recursion</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Factorial of a non-negative integer n is the product of all positive integers from 1 to n.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Mathematical definition:
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            \[
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            n! = n \times (n-1) \times (n-2) \times \cdots \times 1
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            \]
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Base cases:
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            \[
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            0! = 1,\qquad 1! = 1
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            \]
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Recursive relationship:
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            \[
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            n! = n \times (n-1)!
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            \]
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Java implementation:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public class FactorialRecursion {

    static long factorial(int n) {

        if (n == 0 || n == 1) {
            return 1;
        }

        return n * factorial(n - 1);
    }

    public static void main(String[] args) {

        System.out.println(factorial(5));
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
              <code>{`120`}</code>
            </pre>
          </div>
          <h4 className="text-base sm:text-lg font-bold text-white mt-4 mb-2 flex items-center gap-2">
            <span>How recursion executes</span>
          </h4>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            For <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">factorial(5)</code>:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`factorial(5)
    |
    v
5 * factorial(4)
       |
       v
    4 * factorial(3)
           |
           v
        3 * factorial(2)
               |
               v
            2 * factorial(1)
                   |
                   v
                   1`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            The recursive calls then return their values:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`factorial(1) = 1
factorial(2) = 2 * 1 = 2
factorial(3) = 3 * 2 = 6
factorial(4) = 4 * 6 = 24
factorial(5) = 5 * 24 = 120`}</code>
            </pre>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>19.5 Understanding the call stack</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Every method call creates a stack frame that stores information required for that invocation.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Recursive calls create multiple method invocations.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            For factorial:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Stack frames

factorial(5)
factorial(4)
factorial(3)
factorial(2)
factorial(1)`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            The last invocation reaches the base case.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            After that, each method returns to the previous invocation.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            This process is commonly called stack unwinding.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>19.6 Fibonacci sequence using recursion</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            The Fibonacci sequence begins with:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`0, 1, 1, 2, 3, 5, 8, 13, 21, ...`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Each new value is the sum of the previous two values.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Recursive definition:
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            \[
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            F(n) =
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            \begin&#123;cases&#125;
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            0 &amp; n=0\\
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            1 &amp; n=1\\
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            F(n-1)+F(n-2) &amp; n\geq 2
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            \end&#123;cases&#125;
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            \]
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Java implementation:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public class FibonacciRecursion {

    static int fibonacci(int n) {

        if (n == 0) {
            return 0;
        }

        if (n == 1) {
            return 1;
        }

        return fibonacci(n - 1) + fibonacci(n - 2);
    }

    public static void main(String[] args) {

        for (int i = 0; i < 10; i++) {

            System.out.print(fibonacci(i) + " ");
        }
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
              <code>{`0 1 1 2 3 5 8 13 21 34`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            This implementation demonstrates recursion but is inefficient for large values because it recomputes many results.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Students will later learn how iteration, memoization, and dynamic programming can improve such algorithms.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>19.7 Recursion versus iteration</span>
          </h3>
          <div className="overflow-x-auto my-4 rounded-xl border border-slate-800 shadow-2xs">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-white border-b border-slate-800 font-semibold">
                <tr>
                  <th className="px-4 py-3">Recursion</th>
                  <th className="px-4 py-3">Iteration</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">A method calls itself</td>
                  <td className="px-4 py-2.5 text-slate-300">Uses loops</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">Requires a base case</td>
                  <td className="px-4 py-2.5 text-slate-300">Requires a loop termination condition</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">Uses method-call stack frames</td>
                  <td className="px-4 py-2.5 text-slate-300">Typically uses a loop's control variables</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">Can express naturally recursive problems clearly</td>
                  <td className="px-4 py-2.5 text-slate-300">Often more memory-efficient for simple repetition</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">Excessive recursion can cause stack overflow</td>
                  <td className="px-4 py-2.5 text-slate-300">Incorrect termination can cause infinite loops</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Recursion is not automatically better than iteration. The choice depends on problem structure, performance, readability, and memory usage.
          </p>
        </div>
      </section>

      {/* SECTION 20: 20. Pattern Programming */}
      <section id="section-20" className="bg-slate-900/80 rounded-2xl border border-slate-800 p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-500/15 text-orange-300 text-xs font-bold uppercase tracking-wider font-mono">
            Part 8 · Pattern Programming
          </span>
          <span className="text-xs font-mono text-slate-400">Section 20</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          20. Pattern Programming
        </h2>
        <div className="space-y-4 text-slate-300 leading-relaxed text-sm sm:text-base">
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>20.1 What is pattern programming?</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Pattern programming involves generating structured visual arrangements of symbols, numbers, or characters using loops.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            It is an important beginner exercise because it develops an understanding of:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-slate-300 text-sm sm:text-base my-3 leading-relaxed">
            <li>Nested loops.</li>
            <li>Row and column relationships.</li>
            <li>Loop counters.</li>
            <li>Conditional printing.</li>
            <li>Spacing and alignment.</li>
            <li>Mathematical relationships between positions.</li>
          </ul>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Pattern problems are also useful for improving logical reasoning before studying more advanced DSA problems.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>20.2 Basic square star pattern</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Required output:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`* * * * *
* * * * *
* * * * *
* * * * *
* * * * *`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Logic:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-slate-300 text-sm sm:text-base my-3 leading-relaxed">
            <li>The outer loop controls rows.</li>
            <li>The inner loop controls columns.</li>
            <li>Every row contains five stars.</li>
          </ul>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Java:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public class SquarePattern {

    public static void main(String[] args) {

        for (int i = 1; i <= 5; i++) {

            for (int j = 1; j <= 5; j++) {

                System.out.print("* ");

            }

            System.out.println();
        }
    }
}`}</code>
            </pre>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>20.3 Right-angled triangle</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Required output:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`*
* *
* * *
* * * *
* * * * *`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Observation:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-slate-300 text-sm sm:text-base my-3 leading-relaxed">
            <li>Row 1 contains one star.</li>
            <li>Row 2 contains two stars.</li>
            <li>Row 3 contains three stars.</li>
            <li>Row 4 contains four stars.</li>
            <li>Row 5 contains five stars.</li>
          </ul>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            The number of columns printed is equal to the row number.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Java:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public class TrianglePattern {

    public static void main(String[] args) {

        for (int i = 1; i <= 5; i++) {

            for (int j = 1; j <= i; j++) {

                System.out.print("* ");

            }

            System.out.println();
        }
    }
}`}</code>
            </pre>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>20.4 Inverted right-angled triangle</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Required output:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`* * * * *
* * * *
* * *
* *
*`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Logic:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-slate-300 text-sm sm:text-base my-3 leading-relaxed">
            <li>Start with five stars.</li>
            <li>Reduce the number of stars by one each row.</li>
          </ul>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Java:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public class InvertedTriangle {

    public static void main(String[] args) {

        for (int i = 5; i >= 1; i--) {

            for (int j = 1; j <= i; j++) {

                System.out.print("* ");

            }

            System.out.println();
        }
    }
}`}</code>
            </pre>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>20.5 Increasing number triangle</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Required output:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`1
1 2
1 2 3
1 2 3 4
1 2 3 4 5`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Java:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public class NumberTriangle {

    public static void main(String[] args) {

        for (int i = 1; i <= 5; i++) {

            for (int j = 1; j <= i; j++) {

                System.out.print(j + " ");

            }

            System.out.println();
        }
    }
}`}</code>
            </pre>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>20.6 Repeated row number pattern</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Required output:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`1
2 2
3 3 3
4 4 4 4
5 5 5 5 5`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Java:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public class RepeatedNumberPattern {

    public static void main(String[] args) {

        for (int i = 1; i <= 5; i++) {

            for (int j = 1; j <= i; j++) {

                System.out.print(i + " ");

            }

            System.out.println();
        }
    }
}`}</code>
            </pre>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>20.7 Pyramid star pattern</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Required output:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`    *
   ***
  *****
 *******
*********`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            The pyramid requires two inner operations for each row:
          </p>
          <ol className="list-decimal pl-5 space-y-2 text-slate-300 text-sm sm:text-base my-3 leading-relaxed">
            <li>Print leading spaces.</li>
            <li>Print the required stars.</li>
          </ol>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            The number of spaces decreases as the row number increases.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            The number of stars follows the sequence 1, 3, 5, 7, 9.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Java:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public class PyramidPattern {

    public static void main(String[] args) {

        int rows = 5;

        for (int i = 1; i <= rows; i++) {

            for (int j = 1; j <= rows - i; j++) {

                System.out.print(" ");

            }

            for (int j = 1; j <= 2 * i - 1; j++) {

                System.out.print("*");

            }

            System.out.println();
        }
    }
}`}</code>
            </pre>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>20.8 Diamond pattern</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Required output:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`    *
   ***
  *****
 *******
*********
 *******
  *****
   ***
    *`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            A diamond can be divided into two pyramids:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-slate-300 text-sm sm:text-base my-3 leading-relaxed">
            <li>An increasing upper pyramid.</li>
            <li>A decreasing lower pyramid.</li>
          </ul>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Java:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public class DiamondPattern {

    public static void main(String[] args) {

        int rows = 5;

        // Upper part

        for (int i = 1; i <= rows; i++) {

            for (int j = 1; j <= rows - i; j++) {
                System.out.print(" ");
            }

            for (int j = 1; j <= 2 * i - 1; j++) {
                System.out.print("*");
            }

            System.out.println();
        }

        // Lower part

        for (int i = rows - 1; i >= 1; i--) {

            for (int j = 1; j <= rows - i; j++) {
                System.out.print(" ");
            }

            for (int j = 1; j <= 2 * i - 1; j++) {
                System.out.print("*");
            }

            System.out.println();
        }
    }
}`}</code>
            </pre>
          </div>
          <h4 className="text-base sm:text-lg font-bold text-white mt-4 mb-2 flex items-center gap-2">
            <span>How to solve pattern problems systematically</span>
          </h4>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Always identify:
          </p>
          <ol className="list-decimal pl-5 space-y-2 text-slate-300 text-sm sm:text-base my-3 leading-relaxed">
            <li>Total number of rows.</li>
            <li>Number of spaces in each row.</li>
            <li>Number of symbols in each row.</li>
            <li>Whether the values increase or decrease.</li>
            <li>The relationship between the outer and inner loop counters.</li>
          </ol>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Do not memorize pattern programs without understanding the row-column relationship.
          </p>
        </div>
      </section>

      {/* SECTION 21: 21. Mathematical Problem-Solving Using Java */}
      <section id="section-21" className="bg-slate-900/80 rounded-2xl border border-slate-800 p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-500/15 text-orange-300 text-xs font-bold uppercase tracking-wider font-mono">
            Part 9 · Mathematical Algorithms
          </span>
          <span className="text-xs font-mono text-slate-400">Section 21</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          21. Mathematical Problem-Solving Using Java
        </h2>
        <div className="space-y-4 text-slate-300 leading-relaxed text-sm sm:text-base">
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Mathematical programming exercises are useful for learning loops, conditions, methods, recursion, and algorithm design.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            This section introduces common mathematical problems used in beginner programming and DSA preparation.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>21.1 Even and odd numbers</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            A number is even if it is divisible by two without a remainder.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Algorithm:
          </p>
          <ol className="list-decimal pl-5 space-y-2 text-slate-300 text-sm sm:text-base my-3 leading-relaxed">
            <li>Read a number.</li>
            <li>Calculate its remainder when divided by two.</li>
            <li>If the remainder is zero, display even.</li>
            <li>Otherwise, display odd.</li>
          </ol>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Java:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public class EvenOddChecker {

    static boolean isEven(int number) {

        return number % 2 == 0;
    }

    public static void main(String[] args) {

        int number = 24;

        if (isEven(number)) {

            System.out.println("Even");

        } else {

            System.out.println("Odd");
        }
    }
}`}</code>
            </pre>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>21.2 Factorial using iteration</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            For a positive integer n, factorial is the product of all integers from 1 through n.
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
              <code>{`5! = 5 × 4 × 3 × 2 × 1
   = 120`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Java:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public class Factorial {

    static long calculateFactorial(int n) {

        if (n < 0) {
            throw new IllegalArgumentException(
                    "Factorial is not defined for negative integers."
            );
        }

        long result = 1;

        for (int i = 2; i <= n; i++) {

            result *= i;
        }

        return result;
    }

    public static void main(String[] args) {

        System.out.println(calculateFactorial(5));
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
              <code>{`120`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            This implementation returns a <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">long</code>, so sufficiently large inputs will overflow. A later lesson can introduce arbitrary-precision calculations using <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">BigInteger</code>.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>21.3 Prime number checking</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            A prime number is an integer greater than 1 whose only positive divisors are 1 and itself.
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
              <code>{`2, 3, 5, 7, 11, 13, 17`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            The number 1 is not prime.
          </p>
          <h4 className="text-base sm:text-lg font-bold text-white mt-4 mb-2 flex items-center gap-2">
            <span>Algorithm</span>
          </h4>
          <ol className="list-decimal pl-5 space-y-2 text-slate-300 text-sm sm:text-base my-3 leading-relaxed">
            <li>Accept an integer.</li>
            <li>If it is less than or equal to 1, it is not prime.</li>
            <li>Check whether any integer from 2 through the square root of the number divides it.</li>
            <li>If a divisor is found, it is not prime.</li>
            <li>Otherwise, it is prime.</li>
          </ol>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Why check only up to the square root?
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            If n has a factor larger than its square root, its corresponding factor must be smaller than its square root. Therefore, checking both sides is unnecessary.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Java:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public class PrimeChecker {

    static boolean isPrime(int number) {

        if (number <= 1) {
            return false;
        }

        for (int i = 2; i <= number / i; i++) {

            if (number % i == 0) {
                return false;
            }
        }

        return true;
    }

    public static void main(String[] args) {

        int number = 29;

        if (isPrime(number)) {

            System.out.println("Prime number");

        } else {

            System.out.println("Not a prime number");
        }
    }
}`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            This version uses integer division in the loop condition to avoid unnecessary floating-point square-root calculations and avoid multiplying <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">i * i</code>.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>21.4 Reverse a number</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Given:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Input: 12345
Output: 54321`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            The algorithm uses:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-slate-300 text-sm sm:text-base my-3 leading-relaxed">
            <li><code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">% 10</code> to extract the last digit.</li>
            <li><code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">/ 10</code> to remove the last digit.</li>
            <li>Multiplication by 10 to build the reversed value.</li>
          </ul>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Java:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public class ReverseNumber {

    public static void main(String[] args) {

        int number = 12345;

        int reversed = 0;

        while (number != 0) {

            int digit = number % 10;

            reversed = reversed * 10 + digit;

            number = number / 10;
        }

        System.out.println("Reversed: " + reversed);
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
              <code>{`Reversed: 54321`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            For production-quality handling, overflow and negative inputs must also be considered.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>21.5 Palindrome number</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            A palindrome number reads the same forward and backward.
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
              <code>{`121
1331
12321`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            A non-palindrome example:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`1234`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Algorithm:
          </p>
          <ol className="list-decimal pl-5 space-y-2 text-slate-300 text-sm sm:text-base my-3 leading-relaxed">
            <li>Store the original number.</li>
            <li>Reverse the number.</li>
            <li>Compare the reversed result with the original.</li>
            <li>If equal, it is a palindrome.</li>
          </ol>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Java:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public class PalindromeNumber {

    public static void main(String[] args) {

        int number = 121;

        int original = number;

        int reversed = 0;

        while (number > 0) {

            int digit = number % 10;

            reversed = reversed * 10 + digit;

            number = number / 10;
        }

        if (original == reversed) {

            System.out.println("Palindrome");

        } else {

            System.out.println("Not a palindrome");
        }
    }
}`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            This introductory implementation assumes a non-negative integer input.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>21.6 Sum of digits</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Example:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Input: 456
Output: 15`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Java:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public class SumOfDigits {

    static int digitSum(int number) {

        int sum = 0;

        while (number > 0) {

            sum += number % 10;

            number /= 10;
        }

        return sum;
    }

    public static void main(String[] args) {

        System.out.println(digitSum(456));
    }
}`}</code>
            </pre>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>21.7 Greatest Common Divisor (GCD)</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            The greatest common divisor of two integers is the largest positive integer that divides both without leaving a remainder.
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
              <code>{`GCD(12, 18) = 6`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            The Euclidean algorithm repeatedly replaces a pair of numbers with the smaller number and their remainder.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Mathematical rule:
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            \[
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            \gcd(a,b)=\gcd(b,a\bmod b)
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            \]
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            The process ends when the second value becomes zero.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Java:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public class GCDCalculator {

    static int gcd(int a, int b) {

        a = Math.abs(a);
        b = Math.abs(b);

        while (b != 0) {

            int remainder = a % b;

            a = b;

            b = remainder;
        }

        return a;
    }

    public static void main(String[] args) {

        System.out.println(gcd(12, 18));
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
              <code>{`6`}</code>
            </pre>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>21.8 Least Common Multiple (LCM)</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            The least common multiple of two positive integers is the smallest positive integer divisible by both.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            A useful relationship is:
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            \[
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            LCM(a,b)=\frac&#123;|a\times b|&#125;&#123;GCD(a,b)&#125;
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            \]
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Java:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public class LCMCalculator {

    static int gcd(int a, int b) {

        a = Math.abs(a);
        b = Math.abs(b);

        while (b != 0) {

            int temp = b;

            b = a % b;

            a = temp;
        }

        return a;
    }

    static long lcm(int a, int b) {

        if (a == 0 || b == 0) {
            return 0;
        }

        return Math.abs((long) a / gcd(a, b) * b);
    }

    public static void main(String[] args) {

        System.out.println(lcm(12, 18));
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
              <code>{`36`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            This implementation uses <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">long</code> for the multiplication intermediate to reduce overflow risk, although <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">long</code> itself still has a finite range.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>21.9 Armstrong number</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            An Armstrong number is a non-negative integer equal to the sum of its digits, each raised to the power of the number of digits.
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
              <code>{`153`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            It contains three digits.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            \[
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            1^3+5^3+3^3=153
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            \]
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Java:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public class ArmstrongNumber {

    static int countDigits(int number) {

        if (number == 0) {
            return 1;
        }

        int count = 0;

        while (number > 0) {

            count++;

            number /= 10;
        }

        return count;
    }

    static int power(int base, int exponent) {

        int result = 1;

        for (int i = 1; i <= exponent; i++) {

            result *= base;
        }

        return result;
    }

    static boolean isArmstrong(int number) {

        if (number < 0) {
            return false;
        }

        int original = number;

        int digits = countDigits(number);

        int sum = 0;

        do {

            int digit = number % 10;

            sum += power(digit, digits);

            number /= 10;

        } while (number > 0);

        return sum == original;
    }

    public static void main(String[] args) {

        System.out.println(isArmstrong(153));
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
              <code>{`true`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            This program introduces decomposition through the <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">countDigits()</code>, <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">power()</code>, and <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">isArmstrong()</code> methods.
          </p>
        </div>
      </section>

      {/* SECTION 22: 22. Practical Programming Examples (7 Programs) */}
      <section id="section-22" className="bg-slate-900/80 rounded-2xl border border-slate-800 p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-500/15 text-orange-300 text-xs font-bold uppercase tracking-wider font-mono">
            Part 10 · Worked Code Examples
          </span>
          <span className="text-xs font-mono text-slate-400">Section 22</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          22. Practical Programming Examples (7 Programs)
        </h2>
        <div className="space-y-4 text-slate-300 leading-relaxed text-sm sm:text-base">
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            This section combines the major concepts into independent Java programs.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>Program 1 — Largest of three numbers</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Concepts:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-slate-300 text-sm sm:text-base my-3 leading-relaxed">
            <li>Conditional statements.</li>
            <li>Logical operators.</li>
            <li>Variables.</li>
          </ul>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public class LargestNumber {

    public static void main(String[] args) {

        int a = 10;
        int b = 25;
        int c = 15;

        if (a >= b && a >= c) {

            System.out.println("Largest: " + a);

        } else if (b >= a && b >= c) {

            System.out.println("Largest: " + b);

        } else {

            System.out.println("Largest: " + c);
        }
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
              <code>{`Largest: 25`}</code>
            </pre>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>Program 2 — Leap year checker</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Concepts:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-slate-300 text-sm sm:text-base my-3 leading-relaxed">
            <li>Conditional statements.</li>
            <li>Logical operators.</li>
            <li>Mathematical rules.</li>
          </ul>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            A year is a leap year if:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-slate-300 text-sm sm:text-base my-3 leading-relaxed">
            <li>It is divisible by 400, or</li>
            <li>It is divisible by 4 but not divisible by 100.</li>
          </ul>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public class LeapYear {

    public static void main(String[] args) {

        int year = 2024;

        if (year % 400 == 0 ||
           (year % 4 == 0 && year % 100 != 0)) {

            System.out.println("Leap year");

        } else {

            System.out.println("Not a leap year");
        }
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
              <code>{`Leap year`}</code>
            </pre>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>Program 3 — Simple calculator using switch</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Concepts:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-slate-300 text-sm sm:text-base my-3 leading-relaxed">
            <li>Switch statement.</li>
            <li>Arithmetic operators.</li>
            <li>Break.</li>
          </ul>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`import java.util.Scanner;

public class Calculator {

    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter first number: ");
        double a = scanner.nextDouble();

        System.out.print("Enter second number: ");
        double b = scanner.nextDouble();

        System.out.print("Enter operator (+, -, *, /): ");
        char operator = scanner.next().charAt(0);

        switch (operator) {

            case '+':
                System.out.println(a + b);
                break;

            case '-':
                System.out.println(a - b);
                break;

            case '*':
                System.out.println(a * b);
                break;

            case '/':
                if (b != 0) {
                    System.out.println(a / b);
                } else {
                    System.out.println("Cannot divide by zero");
                }
                break;

            default:
                System.out.println("Invalid operator");
        }

        scanner.close();
    }
}`}</code>
            </pre>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>Program 4 — Multiplication table</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Concepts:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-slate-300 text-sm sm:text-base my-3 leading-relaxed">
            <li>For loops.</li>
            <li>Arithmetic operators.</li>
          </ul>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`import java.util.Scanner;

public class TableGenerator {

    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter a number: ");

        int number = scanner.nextInt();

        for (int i = 1; i <= 10; i++) {

            System.out.println(
                    number + " x " + i + " = " + (number * i)
            );
        }

        scanner.close();
    }
}`}</code>
            </pre>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>Program 5 — Count digits</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Concepts:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-slate-300 text-sm sm:text-base my-3 leading-relaxed">
            <li>While loop.</li>
            <li>Mathematical operations.</li>
          </ul>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public class DigitCounter {

    static int countDigits(int number) {

        number = Math.abs(number);

        if (number == 0) {
            return 1;
        }

        int count = 0;

        while (number > 0) {

            count++;

            number /= 10;
        }

        return count;
    }

    public static void main(String[] args) {

        System.out.println(countDigits(12345));
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
              <code>{`5`}</code>
            </pre>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>Program 6 — Sum of even numbers</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Concepts:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-slate-300 text-sm sm:text-base my-3 leading-relaxed">
            <li>For loop.</li>
            <li>Conditional statements.</li>
            <li>Accumulation.</li>
          </ul>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public class EvenNumberSum {

    public static void main(String[] args) {

        int sum = 0;

        for (int i = 1; i <= 100; i++) {

            if (i % 2 == 0) {

                sum += i;
            }
        }

        System.out.println("Sum: " + sum);
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
              <code>{`Sum: 2550`}</code>
            </pre>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>Program 7 — Method-based calculator</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Concepts:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-slate-300 text-sm sm:text-base my-3 leading-relaxed">
            <li>Method definitions.</li>
            <li>Parameters.</li>
            <li>Return types.</li>
            <li>Method calls.</li>
          </ul>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public class MethodCalculator {

    static double add(double a, double b) {
        return a + b;
    }

    static double subtract(double a, double b) {
        return a - b;
    }

    static double multiply(double a, double b) {
        return a * b;
    }

    static double divide(double a, double b) {

        if (b == 0) {
            throw new ArithmeticException(
                    "Division by zero"
            );
        }

        return a / b;
    }

    public static void main(String[] args) {

        System.out.println(add(20, 10));

        System.out.println(subtract(20, 10));

        System.out.println(multiply(20, 10));

        System.out.println(divide(20, 10));
    }
}`}</code>
            </pre>
          </div>
        </div>
      </section>

      {/* SECTION 23: 23. Practical Laboratory Exercises (7 Labs) */}
      <section id="section-23" className="bg-slate-900/80 rounded-2xl border border-slate-800 p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-500/15 text-orange-300 text-xs font-bold uppercase tracking-wider font-mono">
            Part 11 · Hands-on Laboratory Exercises
          </span>
          <span className="text-xs font-mono text-slate-400">Section 23</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          23. Practical Laboratory Exercises (7 Labs)
        </h2>
        <div className="space-y-4 text-slate-300 leading-relaxed text-sm sm:text-base">
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Students should complete these labs independently in a Java IDE or terminal.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>Lab 1 — Decision-making system</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-white">Objective:</strong> Practice conditional statements.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Requirements:
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Build a program that accepts a student's marks.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            The program should:
          </p>
          <ol className="list-decimal pl-5 space-y-2 text-slate-300 text-sm sm:text-base my-3 leading-relaxed">
            <li>Validate that marks are between 0 and 100.</li>
            <li>Determine whether the student has passed.</li>
            <li>Assign a grade based on the specified grading scheme.</li>
            <li>Display the result.</li>
          </ol>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Suggested grading:
          </p>
          <div className="overflow-x-auto my-4 rounded-xl border border-slate-800 shadow-2xs">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-white border-b border-slate-800 font-semibold">
                <tr>
                  <th className="px-4 py-3">Marks</th>
                  <th className="px-4 py-3">Grade</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">90–100</td>
                  <td className="px-4 py-2.5 text-slate-300">A</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">80–89</td>
                  <td className="px-4 py-2.5 text-slate-300">B</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">70–79</td>
                  <td className="px-4 py-2.5 text-slate-300">C</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">60–69</td>
                  <td className="px-4 py-2.5 text-slate-300">D</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">0–59</td>
                  <td className="px-4 py-2.5 text-slate-300">F</td>
                </tr>
              </tbody>
            </table>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>Lab 2 — Menu-driven calculator</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-white">Objective:</strong> Practice switch statements and loops.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Requirements:
          </p>
          <ol className="list-decimal pl-5 space-y-2 text-slate-300 text-sm sm:text-base my-3 leading-relaxed">
            <li>Display a calculator menu.</li>
            <li>Accept the user's operation.</li>
            <li>Accept two numbers.</li>
            <li>Perform the selected operation.</li>
            <li>Display the result.</li>
            <li>Repeat until the user chooses Exit.</li>
            <li>Handle division by zero.</li>
          </ol>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>Lab 3 — Number analysis</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-white">Objective:</strong> Practice mathematical problem-solving.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Accept an integer and calculate:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-slate-300 text-sm sm:text-base my-3 leading-relaxed">
            <li>Digit count.</li>
            <li>Sum of digits.</li>
            <li>Reversed number.</li>
            <li>Whether the number is a palindrome.</li>
            <li>Whether the number is even or odd.</li>
          </ul>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            For this initial lab, students may assume non-negative input when implementing reverse and palindrome calculations.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>Lab 4 — Multiplication tables</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-white">Objective:</strong> Practice nested loops.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Create a program that prints multiplication tables from 1 through 10.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Expected structure:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`1 x 1 = 1
1 x 2 = 2
...

2 x 1 = 2
2 x 2 = 4
...`}</code>
            </pre>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>Lab 5 — Pattern generator</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-white">Objective:</strong> Practice nested loops and row-column relationships.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Generate:
          </p>
          <ol className="list-decimal pl-5 space-y-2 text-slate-300 text-sm sm:text-base my-3 leading-relaxed">
            <li>Square pattern.</li>
            <li>Right triangle.</li>
            <li>Inverted triangle.</li>
            <li>Number triangle.</li>
            <li>Pyramid.</li>
            <li>Diamond.</li>
          </ol>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            The number of rows should be accepted from the user.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>Lab 6 — Method-based mathematical toolkit</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-white">Objective:</strong> Understand functional decomposition.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Create separate methods for:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-slate-300 text-sm sm:text-base my-3 leading-relaxed">
            <li><code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">isPrime()</code></li>
            <li><code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">factorial()</code></li>
            <li><code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">gcd()</code></li>
            <li><code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">lcm()</code></li>
            <li><code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">reverseNumber()</code></li>
            <li><code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">digitSum()</code></li>
          </ul>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            The <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">main()</code> method should demonstrate the use of every method.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>Lab 7 — Recursion practice</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-white">Objective:</strong> Understand base cases and recursive calls.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Implement:
          </p>
          <ol className="list-decimal pl-5 space-y-2 text-slate-300 text-sm sm:text-base my-3 leading-relaxed">
            <li>Factorial using recursion.</li>
            <li>Fibonacci using recursion.</li>
            <li>Sum of natural numbers using recursion.</li>
            <li>Power calculation using recursion.</li>
            <li>Countdown using recursion.</li>
          </ol>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            For every implementation, identify the base case and recursive case.
          </p>
        </div>
      </section>

      {/* SECTION 24: 24. Independent Programming Assignments (7 Tasks) */}
      <section id="section-24" className="bg-slate-900/80 rounded-2xl border border-slate-800 p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-500/15 text-orange-300 text-xs font-bold uppercase tracking-wider font-mono">
            Part 12 · Independent Assignments
          </span>
          <span className="text-xs font-mono text-slate-400">Section 24</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          24. Independent Programming Assignments (7 Tasks)
        </h2>
        <div className="space-y-4 text-slate-300 leading-relaxed text-sm sm:text-base">
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            These assignments assess the student's ability to design solutions without copying the worked examples.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>Assignment 1 — Electricity billing system</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Create a program that accepts electricity consumption in units and calculates the bill using tiered rates.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Example pricing assumptions:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-slate-300 text-sm sm:text-base my-3 leading-relaxed">
            <li>First 100 units: ₹2 per unit.</li>
            <li>Next 100 units: ₹3 per unit.</li>
            <li>Remaining units: ₹5 per unit.</li>
          </ul>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Requirements:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-slate-300 text-sm sm:text-base my-3 leading-relaxed">
            <li>Accept units.</li>
            <li>Validate the input.</li>
            <li>Calculate charges for each applicable slab.</li>
            <li>Display the final amount.</li>
          </ul>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Example:
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            For 250 units:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-slate-300 text-sm sm:text-base my-3 leading-relaxed">
            <li>First 100 units = ₹200.</li>
            <li>Next 100 units = ₹300.</li>
            <li>Remaining 50 units = ₹250.</li>
          </ul>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Total = ₹750.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Use conditional statements or suitable structured logic.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>Assignment 2 — ATM transaction simulation</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Develop a simple ATM simulation.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Requirements:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-slate-300 text-sm sm:text-base my-3 leading-relaxed">
            <li>Accept an initial balance.</li>
            <li>Display a transaction menu.</li>
            <li>Allow balance inquiry.</li>
            <li>Allow deposits.</li>
            <li>Allow withdrawals.</li>
            <li>Reject withdrawals exceeding the balance.</li>
            <li>Repeat until the user selects Exit.</li>
          </ul>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Use:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-slate-300 text-sm sm:text-base my-3 leading-relaxed">
            <li><code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">do-while</code></li>
            <li><code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">switch</code></li>
            <li>Methods</li>
            <li>Conditions</li>
            <li>User input</li>
          </ul>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>Assignment 3 — Prime numbers in a range</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Create a program that accepts a starting and ending number.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Display all prime numbers within that range.
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
              <code>{`Input:
Start = 10
End = 30

Output:
11 13 17 19 23 29`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Do not write the entire solution inside <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">main()</code>. Create a separate <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">isPrime()</code> method.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>Assignment 4 — Number properties analyzer</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Create a program that accepts an integer and reports:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-slate-300 text-sm sm:text-base my-3 leading-relaxed">
            <li>Whether it is even or odd.</li>
            <li>Whether it is prime.</li>
            <li>Whether it is a palindrome.</li>
            <li>The sum of its digits.</li>
            <li>The reverse of the number.</li>
            <li>Its digit count.</li>
          </ul>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Use separate methods for each calculation.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>Assignment 5 — Pattern collection</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Create a Java application that allows the user to choose among different patterns.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Menu:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`1. Square
2. Triangle
3. Inverted Triangle
4. Pyramid
5. Diamond
6. Exit`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Use a switch statement and separate methods to generate patterns.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>Assignment 6 — Mathematical sequence generator</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Build a program that generates the following:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-slate-300 text-sm sm:text-base my-3 leading-relaxed">
            <li>Natural number sequence.</li>
            <li>Even number sequence.</li>
            <li>Odd number sequence.</li>
            <li>Fibonacci sequence.</li>
            <li>Multiples of a given number.</li>
          </ul>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Allow users to choose the sequence and the number of terms.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>Assignment 7 — Recursion challenge</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Implement these algorithms recursively:
          </p>
          <ol className="list-decimal pl-5 space-y-2 text-slate-300 text-sm sm:text-base my-3 leading-relaxed">
            <li>Factorial of n.</li>
            <li>Sum of first n natural numbers.</li>
            <li>Power of a number.</li>
            <li>Fibonacci number at position n.</li>
            <li>Reverse a string.</li>
          </ol>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            For each solution, document:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-slate-300 text-sm sm:text-base my-3 leading-relaxed">
            <li>Base case.</li>
            <li>Recursive case.</li>
            <li>Input conditions.</li>
            <li>Expected output.</li>
          </ul>
        </div>
      </section>

      {/* SECTION 25: 25. Assessment and Review Questions */}
      <section id="section-25" className="bg-slate-900/80 rounded-2xl border border-slate-800 p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-500/15 text-orange-300 text-xs font-bold uppercase tracking-wider font-mono">
            Part 13 · Review & Practice Questions
          </span>
          <span className="text-xs font-mono text-slate-400">Section 25</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          25. Assessment and Review Questions
        </h2>
        <div className="space-y-4 text-slate-300 leading-relaxed text-sm sm:text-base">
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>Part A — Multiple-choice questions</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-white">1. What is an algorithm?</strong>
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            A. A programming language
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            B. A finite sequence of well-defined steps to solve a problem
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            C. A computer hardware component
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            D. A Java library
          </p>
          <div className="mt-4 mb-2 p-3 rounded-lg bg-orange-500/15/70 border border-orange-500/30/80 font-semibold text-white text-sm sm:text-base">
            <strong className="font-semibold text-white">Correct answer:</strong> B
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-white">2. Which technique divides a large problem into smaller problems?</strong>
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            A. Compilation
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            B. Decomposition
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            C. Casting
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            D. Inheritance
          </p>
          <div className="mt-4 mb-2 p-3 rounded-lg bg-orange-500/15/70 border border-orange-500/30/80 font-semibold text-white text-sm sm:text-base">
            <strong className="font-semibold text-white">Correct answer:</strong> B
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-white">3. Which flowchart symbol is used for a decision?</strong>
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            A. Rectangle
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            B. Oval
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            C. Diamond
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            D. Parallelogram
          </p>
          <div className="mt-4 mb-2 p-3 rounded-lg bg-orange-500/15/70 border border-orange-500/30/80 font-semibold text-white text-sm sm:text-base">
            <strong className="font-semibold text-white">Correct answer:</strong> C
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-white">4. Which statement executes a block only if a condition is true?</strong>
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            A. <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">for</code>
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            B. <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">if</code>
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            C. <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">break</code>
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            D. <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">return</code>
          </p>
          <div className="mt-4 mb-2 p-3 rounded-lg bg-orange-500/15/70 border border-orange-500/30/80 font-semibold text-white text-sm sm:text-base">
            <strong className="font-semibold text-white">Correct answer:</strong> B
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-white">5. Which loop executes its body at least once?</strong>
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            A. <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">for</code>
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            B. <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">while</code>
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            C. <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">do-while</code>
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            D. Enhanced for
          </p>
          <div className="mt-4 mb-2 p-3 rounded-lg bg-orange-500/15/70 border border-orange-500/30/80 font-semibold text-white text-sm sm:text-base">
            <strong className="font-semibold text-white">Correct answer:</strong> C
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-white">6. Which statement terminates the nearest enclosing loop?</strong>
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            A. <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">continue</code>
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            B. <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">break</code>
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            C. <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">return</code> only
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            D. <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">skip</code>
          </p>
          <div className="mt-4 mb-2 p-3 rounded-lg bg-orange-500/15/70 border border-orange-500/30/80 font-semibold text-white text-sm sm:text-base">
            <strong className="font-semibold text-white">Correct answer:</strong> B
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-white">7. What does continue do?</strong>
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            A. Terminates the application
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            B. Terminates every loop
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            C. Skips the current iteration and proceeds to the next
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            D. Restarts the program
          </p>
          <div className="mt-4 mb-2 p-3 rounded-lg bg-orange-500/15/70 border border-orange-500/30/80 font-semibold text-white text-sm sm:text-base">
            <strong className="font-semibold text-white">Correct answer:</strong> C
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-white">8. Which keyword specifies that a method does not return a value?</strong>
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            A. <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">null</code>
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            B. <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">static</code>
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            C. <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">void</code>
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            D. <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">final</code>
          </p>
          <div className="mt-4 mb-2 p-3 rounded-lg bg-orange-500/15/70 border border-orange-500/30/80 font-semibold text-white text-sm sm:text-base">
            <strong className="font-semibold text-white">Correct answer:</strong> C
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-white">9. What is method overloading?</strong>
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            A. Defining methods with identical names and different parameter lists
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            B. Defining methods only inside loops
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            C. Calling a method repeatedly
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            D. Returning multiple unrelated values
          </p>
          <div className="mt-4 mb-2 p-3 rounded-lg bg-orange-500/15/70 border border-orange-500/30/80 font-semibold text-white text-sm sm:text-base">
            <strong className="font-semibold text-white">Correct answer:</strong> A
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-white">10. What is the base case in recursion?</strong>
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            A. The first variable declaration
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            B. The condition that terminates recursive calls
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            C. The method name
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            D. The return type
          </p>
          <div className="mt-4 mb-2 p-3 rounded-lg bg-orange-500/15/70 border border-orange-500/30/80 font-semibold text-white text-sm sm:text-base">
            <strong className="font-semibold text-white">Correct answer:</strong> B
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-white">11. What happens if a recursive method has no reachable terminating condition?</strong>
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            A. It always returns zero
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            B. It may continue until a stack overflow occurs
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            C. It automatically becomes a loop
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            D. The compiler always optimizes it away
          </p>
          <div className="mt-4 mb-2 p-3 rounded-lg bg-orange-500/15/70 border border-orange-500/30/80 font-semibold text-white text-sm sm:text-base">
            <strong className="font-semibold text-white">Correct answer:</strong> B
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-white">12. What is the result of <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">7 % 2</code>?</strong>
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            A. 0
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            B. 1
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            C. 2
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            D. 3
          </p>
          <div className="mt-4 mb-2 p-3 rounded-lg bg-orange-500/15/70 border border-orange-500/30/80 font-semibold text-white text-sm sm:text-base">
            <strong className="font-semibold text-white">Correct answer:</strong> B
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-white">13. Which statement is most suitable for a menu that must appear at least once?</strong>
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            A. <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">do-while</code>
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            B. <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">if</code>
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            C. <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">return</code>
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            D. <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">continue</code>
          </p>
          <div className="mt-4 mb-2 p-3 rounded-lg bg-orange-500/15/70 border border-orange-500/30/80 font-semibold text-white text-sm sm:text-base">
            <strong className="font-semibold text-white">Correct answer:</strong> A
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-white">14. What is the time complexity of two independent nested loops, each iterating n times?</strong>
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            A. O(1)
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            B. O(log n)
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            C. O(n)
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            D. O(n²)
          </p>
          <div className="mt-4 mb-2 p-3 rounded-lg bg-orange-500/15/70 border border-orange-500/30/80 font-semibold text-white text-sm sm:text-base">
            <strong className="font-semibold text-white">Correct answer:</strong> D
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-white">15. Which construct can directly produce a value in modern Java?</strong>
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            A. Traditional <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">if</code> statement only
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            B. Switch expression
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            C. <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">break</code> statement
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            D. <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">continue</code> statement
          </p>
          <div className="mt-4 mb-2 p-3 rounded-lg bg-orange-500/15/70 border border-orange-500/30/80 font-semibold text-white text-sm sm:text-base">
            <strong className="font-semibold text-white">Correct answer:</strong> B
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>Part B — Short-answer questions</span>
          </h3>
          <ol className="list-decimal pl-5 space-y-2 text-slate-300 text-sm sm:text-base my-3 leading-relaxed">
            <li>Define algorithmic thinking.</li>
            <li>Explain the stages of the programming problem-solving lifecycle.</li>
            <li>What is problem decomposition?</li>
            <li>Explain top-down design.</li>
            <li>Define pseudocode.</li>
            <li>What is a flowchart?</li>
            <li>Explain the commonly used flowchart symbols.</li>
            <li>Differentiate between <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">if</code>, <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">if-else</code>, and <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">else-if</code>.</li>
            <li>What are nested conditions?</li>
            <li>Explain the dangling-else problem.</li>
            <li>Differentiate between switch statements and switch expressions.</li>
            <li>Explain switch fall-through.</li>
            <li>Why is <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">break</code> used in a traditional switch?</li>
            <li>Differentiate between <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">for</code>, <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">while</code>, and <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">do-while</code>.</li>
            <li>What is an infinite loop?</li>
            <li>Explain nested loops.</li>
            <li>Differentiate between <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">break</code> and <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">continue</code>.</li>
            <li>Define a Java method.</li>
            <li>Differentiate between parameters and arguments.</li>
            <li>Explain the purpose of a return type.</li>
            <li>Differentiate between void and return methods.</li>
            <li>What is method overloading?</li>
            <li>Can Java methods be overloaded using only different return types?</li>
            <li>Explain local and class-level variables.</li>
            <li>Differentiate between variable scope and lifetime.</li>
            <li>Define recursion.</li>
            <li>Explain the base case and recursive case.</li>
            <li>Explain the role of the call stack.</li>
            <li>Differentiate between recursion and iteration.</li>
            <li>How do nested loops generate programming patterns?</li>
            <li>Define a prime number.</li>
            <li>Explain the Euclidean algorithm.</li>
            <li>What is a palindrome number?</li>
            <li>Explain the Armstrong number concept.</li>
            <li>Why is algorithm efficiency important?</li>
          </ol>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>Part C — Predict the output</span>
          </h3>
          <h4 className="text-base sm:text-lg font-bold text-white mt-4 mb-2 flex items-center gap-2">
            <span>Question 1</span>
          </h4>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public class QuestionOne {

    public static void main(String[] args) {

        int number = 10;

        if (number > 5) {
            System.out.println("A");
        } else {
            System.out.println("B");
        }
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
              <code>{`A`}</code>
            </pre>
          </div>
          <h4 className="text-base sm:text-lg font-bold text-white mt-4 mb-2 flex items-center gap-2">
            <span>Question 2</span>
          </h4>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public class QuestionTwo {

    public static void main(String[] args) {

        for (int i = 1; i <= 5; i++) {

            if (i == 3) {
                continue;
            }

            System.out.print(i + " ");
        }
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
              <code>{`1 2 4 5`}</code>
            </pre>
          </div>
          <h4 className="text-base sm:text-lg font-bold text-white mt-4 mb-2 flex items-center gap-2">
            <span>Question 3</span>
          </h4>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public class QuestionThree {

    public static void main(String[] args) {

        int i = 1;

        while (i <= 3) {

            System.out.println(i);

            i++;
        }
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
              <code>{`1
2
3`}</code>
            </pre>
          </div>
          <h4 className="text-base sm:text-lg font-bold text-white mt-4 mb-2 flex items-center gap-2">
            <span>Question 4</span>
          </h4>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public class QuestionFour {

    public static void main(String[] args) {

        int number = 5;

        do {

            System.out.println(number);

            number++;

        } while (number < 5);
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
              <code>{`5`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Explanation:
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            The body executes before the condition is evaluated.
          </p>
          <h4 className="text-base sm:text-lg font-bold text-white mt-4 mb-2 flex items-center gap-2">
            <span>Question 5</span>
          </h4>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public class QuestionFive {

    static int calculate(int number) {

        return number * number;
    }

    public static void main(String[] args) {

        System.out.println(calculate(6));
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
              <code>{`36`}</code>
            </pre>
          </div>
          <h4 className="text-base sm:text-lg font-bold text-white mt-4 mb-2 flex items-center gap-2">
            <span>Question 6</span>
          </h4>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public class QuestionSix {

    static int add(int a, int b) {

        return a + b;
    }

    public static void main(String[] args) {

        int result = add(10, 20);

        System.out.println(result + 5);
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
              <code>{`35`}</code>
            </pre>
          </div>
          <h4 className="text-base sm:text-lg font-bold text-white mt-4 mb-2 flex items-center gap-2">
            <span>Question 7</span>
          </h4>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public class QuestionSeven {

    static int factorial(int n) {

        if (n == 1) {
            return 1;
        }

        return n * factorial(n - 1);
    }

    public static void main(String[] args) {

        System.out.println(factorial(4));
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
              <code>{`24`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Assumption: Input is a positive integer.
          </p>
          <h4 className="text-base sm:text-lg font-bold text-white mt-4 mb-2 flex items-center gap-2">
            <span>Question 8</span>
          </h4>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public class QuestionEight {

    public static void main(String[] args) {

        for (int i = 1; i <= 3; i++) {

            for (int j = 1; j <= 2; j++) {

                System.out.print("* ");
            }

            System.out.println();
        }
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
              <code>{`* *
* *
* *`}</code>
            </pre>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>Part D — Find the error</span>
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
              <code>{`int number = 10;

if (number > 5)
    System.out.println("Greater");
else
    System.out.println("Smaller");
    System.out.println("Finished");`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Task: Explain which statements belong to the conditional structure and which execute independently.
          </p>
          <div className="mt-4 mb-2 p-3 rounded-lg bg-orange-500/15/70 border border-orange-500/30/80 font-semibold text-white text-sm sm:text-base">
            <strong className="font-semibold text-white">Question 2</strong>
          </div>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`for (int i = 1; i <= 10; i--) {

    System.out.println(i);
}`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Task: Explain why this loop does not terminate normally and correct the update operation.
          </p>
          <div className="mt-4 mb-2 p-3 rounded-lg bg-orange-500/15/70 border border-orange-500/30/80 font-semibold text-white text-sm sm:text-base">
            <strong className="font-semibold text-white">Question 3</strong>
          </div>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`static int calculate(int a, int b) {

    System.out.println(a + b);
}`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Task: Identify the return-type problem and correct the method.
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
              <code>{`static int factorial(int n) {

    return n * factorial(n - 1);
}`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Task: Identify the missing recursive condition and explain what happens if it is not added.
          </p>
          <div className="mt-4 mb-2 p-3 rounded-lg bg-orange-500/15/70 border border-orange-500/30/80 font-semibold text-white text-sm sm:text-base">
            <strong className="font-semibold text-white">Question 5</strong>
          </div>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`switch (choice) {

    case 1:
        System.out.println("One");

    case 2:
        System.out.println("Two");
}`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Task: Explain the fall-through behavior and correct it when only one case should execute.
          </p>
        </div>
      </section>

      {/* SECTION 26: 26. Mini Project — Student Performance & Result System */}
      <section id="section-26" className="bg-slate-900/80 rounded-2xl border border-slate-800 p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-500/15 text-orange-300 text-xs font-bold uppercase tracking-wider font-mono">
            Part 14 · Capstone Mini Project
          </span>
          <span className="text-xs font-mono text-slate-400">Section 26</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          26. Mini Project — Student Performance & Result System
        </h2>
        <div className="space-y-4 text-slate-300 leading-relaxed text-sm sm:text-base">
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>Project Overview</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Develop a console-based Student Performance and Result Management System using Java.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            This project combines conditional statements, loops, switch statements, methods, mathematical calculations, and input/output.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            The goal is to develop a small application using modular programming rather than writing every operation inside one large <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">main()</code> method.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>Functional requirements</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            The application must support:
          </p>
          <ol className="list-decimal pl-5 space-y-2 text-slate-300 text-sm sm:text-base my-3 leading-relaxed">
            <li>Entering student information.</li>
            <li>Entering marks for multiple subjects.</li>
            <li>Calculating total marks.</li>
            <li>Calculating average marks.</li>
            <li>Calculating percentage.</li>
            <li>Determining the result.</li>
            <li>Determining the grade.</li>
            <li>Displaying a report.</li>
            <li>Repeating operations through a menu.</li>
            <li>Exiting the application.</li>
          </ol>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>Business rules</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            For this educational project:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-slate-300 text-sm sm:text-base my-3 leading-relaxed">
            <li>Each subject has a maximum of 100 marks.</li>
            <li>Marks must be between 0 and 100.</li>
            <li>A student must score at least 35 in every subject to pass.</li>
            <li>The overall grade is determined using the average.</li>
          </ul>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Suggested grading:
          </p>
          <div className="overflow-x-auto my-4 rounded-xl border border-slate-800 shadow-2xs">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-white border-b border-slate-800 font-semibold">
                <tr>
                  <th className="px-4 py-3">Average</th>
                  <th className="px-4 py-3">Grade</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">90–100</td>
                  <td className="px-4 py-2.5 text-slate-300">A</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">80–89.99</td>
                  <td className="px-4 py-2.5 text-slate-300">B</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">70–79.99</td>
                  <td className="px-4 py-2.5 text-slate-300">C</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">60–69.99</td>
                  <td className="px-4 py-2.5 text-slate-300">D</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">35–59.99</td>
                  <td className="px-4 py-2.5 text-slate-300">E</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">Below 35 or failed subject</td>
                  <td className="px-4 py-2.5 text-slate-300">F</td>
                </tr>
              </tbody>
            </table>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>Technical requirements</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            The application should use:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-slate-300 text-sm sm:text-base my-3 leading-relaxed">
            <li>Classes and the traditional <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">main()</code> method.</li>
            <li>Variables and constants.</li>
            <li>Methods and parameters.</li>
            <li>Return types.</li>
            <li>Conditional statements.</li>
            <li>Switch statements.</li>
            <li>Loops.</li>
            <li>Input validation.</li>
            <li>Mathematical operations.</li>
            <li>Meaningful naming conventions.</li>
          </ul>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>Suggested method architecture</span>
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`StudentResultSystem
|
+-- main()
|
+-- displayMenu()
|
+-- readStudentDetails()
|
+-- calculateTotal()
|
+-- calculateAverage()
|
+-- calculateGrade()
|
+-- determineResult()
|
+-- displayReport()`}</code>
            </pre>
          </div>
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

    static final int SUBJECT_COUNT = 5;

    static final int MAX_MARKS = 100;

    static final int PASS_MARKS = 35;

    static Scanner scanner = new Scanner(System.in);

    static double[] marks = new double[SUBJECT_COUNT];

    static String studentName;

    static String course;

    static int studentAge;

    static void readStudentDetails() {

        scanner.nextLine();

        System.out.print("Enter student name: ");
        studentName = scanner.nextLine();

        System.out.print("Enter age: ");
        studentAge = scanner.nextInt();

        scanner.nextLine();

        System.out.print("Enter course: ");
        course = scanner.nextLine();

        for (int i = 0; i < SUBJECT_COUNT; i++) {

            while (true) {

                System.out.print(
                        "Enter marks for subject " + (i + 1) + ": "
                );

                double mark = scanner.nextDouble();

                if (mark >= 0 && mark <= MAX_MARKS) {

                    marks[i] = mark;

                    break;

                } else {

                    System.out.println(
                            "Marks must be between 0 and 100."
                    );
                }
            }
        }
    }

    static double calculateTotal() {

        double total = 0;

        for (double mark : marks) {

            total += mark;
        }

        return total;
    }

    static double calculateAverage() {

        return calculateTotal() / SUBJECT_COUNT;
    }

    static boolean determineResult() {

        for (double mark : marks) {

            if (mark < PASS_MARKS) {
                return false;
            }
        }

        return true;
    }

    static String calculateGrade() {

        if (!determineResult()) {
            return "F";
        }

        double average = calculateAverage();

        if (average >= 90) {
            return "A";
        } else if (average >= 80) {
            return "B";
        } else if (average >= 70) {
            return "C";
        } else if (average >= 60) {
            return "D";
        } else {
            return "E";
        }
    }

    static void displayReport() {

        System.out.println("\\n========== STUDENT REPORT ==========");

        System.out.println("Name: " + studentName);

        System.out.println("Age: " + studentAge);

        System.out.println("Course: " + course);

        for (int i = 0; i < SUBJECT_COUNT; i++) {

            System.out.println(
                    "Subject " + (i + 1) + ": " + marks[i]
            );
        }

        System.out.println("Total: " + calculateTotal());

        System.out.println("Average: " + calculateAverage());

        System.out.println(
                "Percentage: " + calculateAverage() + "%"
        );

        System.out.println(
                "Result: " +
                (determineResult() ? "PASS" : "FAIL")
        );

        System.out.println("Grade: " + calculateGrade());

        System.out.println("====================================");
    }

    public static void main(String[] args) {

        int choice;

        do {

            System.out.println("\\nSTUDENT RESULT MANAGEMENT");

            System.out.println("1. Enter Student Details");

            System.out.println("2. Display Student Report");

            System.out.println("3. Exit");

            System.out.print("Enter choice: ");

            choice = scanner.nextInt();

            switch (choice) {

                case 1:

                    readStudentDetails();

                    System.out.println(
                            "Student information saved."
                    );

                    break;

                case 2:

                    displayReport();

                    break;

                case 3:

                    System.out.println("Exiting application.");

                    break;

                default:

                    System.out.println("Invalid choice.");
            }

        } while (choice != 3);

        scanner.close();
    }
}`}</code>
            </pre>
          </div>
          <h4 className="text-base sm:text-lg font-bold text-white mt-4 mb-2 flex items-center gap-2">
            <span>Important project implementation note</span>
          </h4>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            This example demonstrates the topics in this module. It uses static fields for simplicity and assumes that student information has been entered before requesting a report.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            A production-quality system should use separate student objects, stronger input validation, persistent storage, and better separation of application responsibilities. Those improvements belong to later modules.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>Project extension tasks</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            After completing the core application, students should implement:
          </p>
          <ol className="list-decimal pl-5 space-y-2 text-slate-300 text-sm sm:text-base my-3 leading-relaxed">
            <li>Support for multiple students.</li>
            <li>Search students by name or ID.</li>
            <li>Rank students based on average marks.</li>
            <li>Display the highest and lowest marks.</li>
            <li>Calculate subject-wise averages.</li>
            <li>Separate Student and Result classes.</li>
            <li>Store records in arrays or collections.</li>
            <li>Save and retrieve records from files.</li>
            <li>Add appropriate exception handling.</li>
            <li>Write unit tests for calculation methods.</li>
          </ol>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            These extensions provide a transition toward object-oriented programming and data structures.
          </p>
        </div>
      </section>

      {/* SECTION 27: 27. Debugging and Common Programming Mistakes */}
      <section id="section-27" className="bg-slate-900/80 rounded-2xl border border-slate-800 p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-500/15 text-orange-300 text-xs font-bold uppercase tracking-wider font-mono">
            Part 15 · Debugging & Antipatterns
          </span>
          <span className="text-xs font-mono text-slate-400">Section 27</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          27. Debugging and Common Programming Mistakes
        </h2>
        <div className="space-y-4 text-slate-300 leading-relaxed text-sm sm:text-base">
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Students should learn to recognize the following common problems.
          </p>
          <div className="overflow-x-auto my-4 rounded-xl border border-slate-800 shadow-2xs">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-white border-b border-slate-800 font-semibold">
                <tr>
                  <th className="px-4 py-3">Mistake</th>
                  <th className="px-4 py-3">Cause</th>
                  <th className="px-4 py-3">Correct approach</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">Incorrect condition boundary</td>
                  <td className="px-4 py-2.5 text-slate-300">Using <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">&gt;</code> instead of <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">&gt;=</code></td>
                  <td className="px-4 py-2.5 text-slate-300">Check requirement boundaries</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">Infinite loops</td>
                  <td className="px-4 py-2.5 text-slate-300">Incorrect or missing counter update</td>
                  <td className="px-4 py-2.5 text-slate-300">Verify the loop's termination condition</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">Off-by-one errors</td>
                  <td className="px-4 py-2.5 text-slate-300">Incorrect loop start or end</td>
                  <td className="px-4 py-2.5 text-slate-300">Trace the first and last iterations</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">Missing break</td>
                  <td className="px-4 py-2.5 text-slate-300">Unintended switch fall-through</td>
                  <td className="px-4 py-2.5 text-slate-300">Use break where appropriate</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">Incorrect nesting</td>
                  <td className="px-4 py-2.5 text-slate-300">Misplaced braces</td>
                  <td className="px-4 py-2.5 text-slate-300">Keep each block clearly structured</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">Incorrect return</td>
                  <td className="px-4 py-2.5 text-slate-300">Missing or incompatible returned value</td>
                  <td className="px-4 py-2.5 text-slate-300">Match the declared return type</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">Duplicate method signatures</td>
                  <td className="px-4 py-2.5 text-slate-300">Invalid overloading attempt</td>
                  <td className="px-4 py-2.5 text-slate-300">Change the parameter list</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">Missing recursion base case</td>
                  <td className="px-4 py-2.5 text-slate-300">Recursion never reaches termination</td>
                  <td className="px-4 py-2.5 text-slate-300">Define a valid base case</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">Incorrect recursion progression</td>
                  <td className="px-4 py-2.5 text-slate-300">Recursive input does not get simpler</td>
                  <td className="px-4 py-2.5 text-slate-300">Ensure progress toward the base case</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">Variable scope error</td>
                  <td className="px-4 py-2.5 text-slate-300">Accessing a variable outside its scope</td>
                  <td className="px-4 py-2.5 text-slate-300">Declare variables in appropriate blocks</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">Incorrect pattern spacing</td>
                  <td className="px-4 py-2.5 text-slate-300">Poor row-column logic</td>
                  <td className="px-4 py-2.5 text-slate-300">Derive spaces and symbols mathematically</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">Integer overflow</td>
                  <td className="px-4 py-2.5 text-slate-300">Result exceeds the numeric type's range</td>
                  <td className="px-4 py-2.5 text-slate-300">Select an appropriate type and validate limits</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">Incorrect prime checking</td>
                  <td className="px-4 py-2.5 text-slate-300">Testing unnecessary divisors or accepting 1</td>
                  <td className="px-4 py-2.5 text-slate-300">Handle boundary cases and check divisors correctly</td>
                </tr>
              </tbody>
            </table>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>A systematic debugging procedure</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            When a program does not behave as expected:
          </p>
          <ol className="list-decimal pl-5 space-y-2 text-slate-300 text-sm sm:text-base my-3 leading-relaxed">
            <li>Reproduce the problem.</li>
            <li>Read the compiler message or exception.</li>
            <li>Identify the incorrect execution path.</li>
            <li>Check the values of variables.</li>
            <li>Perform a manual dry run.</li>
            <li>Identify the root cause.</li>
            <li>Make the smallest appropriate correction.</li>
            <li>Execute the test cases again.</li>
            <li>Test boundary conditions.</li>
            <li>Confirm that the correction did not introduce another defect.</li>
          </ol>
        </div>
      </section>

      {/* SECTION 28: 28. Recommended Learning Resources */}
      <section id="section-28" className="bg-slate-900/80 rounded-2xl border border-slate-800 p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-500/15 text-orange-300 text-xs font-bold uppercase tracking-wider font-mono">
            References · Curated Resources
          </span>
          <span className="text-xs font-mono text-slate-400">Section 28</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          28. Recommended Learning Resources
        </h2>
        <div className="space-y-4 text-slate-300 leading-relaxed text-sm sm:text-base">
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Students should use official documentation to supplement the explanations and practical exercises.
          </p>
          <ol className="list-decimal pl-5 space-y-2 text-slate-300 text-sm sm:text-base my-3 leading-relaxed">
            <li><strong className="font-semibold text-white">Dev.java — Java Language Basics</strong></li>
          </ol>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            <a href="https://dev.java/learn/language-basics/" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-300 font-medium underline inline-flex items-center gap-0.5">https://dev.java/learn/language-basics/</a>
          </p>
          <ol className="list-decimal pl-5 space-y-2 text-slate-300 text-sm sm:text-base my-3 leading-relaxed">
            <li><strong className="font-semibold text-white">Dev.java — Control Flow Statements</strong></li>
          </ol>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            <a href="https://dev.java/learn/language-basics/" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-300 font-medium underline inline-flex items-center gap-0.5">https://dev.java/learn/language-basics/</a>
          </p>
          <ol className="list-decimal pl-5 space-y-2 text-slate-300 text-sm sm:text-base my-3 leading-relaxed">
            <li><strong className="font-semibold text-white">Dev.java — Switch Statements and Expressions</strong></li>
          </ol>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            <a href="https://dev.java/learn/language-basics/" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-300 font-medium underline inline-flex items-center gap-0.5">https://dev.java/learn/language-basics/</a>
          </p>
          <ol className="list-decimal pl-5 space-y-2 text-slate-300 text-sm sm:text-base my-3 leading-relaxed">
            <li><strong className="font-semibold text-white">The Java Language Specification</strong></li>
          </ol>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            <a href="https://docs.oracle.com/javase/specs/" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-300 font-medium underline inline-flex items-center gap-0.5">https://docs.oracle.com/javase/specs/</a>
          </p>
          <ol className="list-decimal pl-5 space-y-2 text-slate-300 text-sm sm:text-base my-3 leading-relaxed">
            <li><strong className="font-semibold text-white">OpenJDK</strong></li>
          </ol>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            <a href="https://openjdk.org/" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-300 font-medium underline inline-flex items-center gap-0.5">https://openjdk.org/</a>
          </p>
          <ol className="list-decimal pl-5 space-y-2 text-slate-300 text-sm sm:text-base my-3 leading-relaxed">
            <li><strong className="font-semibold text-white">Java API Documentation</strong></li>
          </ol>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            <a href="https://docs.oracle.com/en/java/" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-300 font-medium underline inline-flex items-center gap-0.5">https://docs.oracle.com/en/java/</a>
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Students should prioritize writing, compiling, tracing, and modifying code instead of relying exclusively on reading or watching tutorials.
          </p>
        </div>
      </section>

      {/* SECTION 29: 29. Module Revision Sheet */}
      <section id="section-29" className="bg-slate-900/80 rounded-2xl border border-slate-800 p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-500/15 text-orange-300 text-xs font-bold uppercase tracking-wider font-mono">
            Review · Module Revision Sheet
          </span>
          <span className="text-xs font-mono text-slate-400">Section 29</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          29. Module Revision Sheet
        </h2>
        <div className="space-y-4 text-slate-300 leading-relaxed text-sm sm:text-base">
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>Important definitions</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-white">Algorithmic thinking:</strong> A structured approach to designing logical solutions to computational problems.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-white">Problem decomposition:</strong> Dividing a complex problem into smaller and manageable tasks.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-white">Pseudocode:</strong> A human-readable representation of an algorithm using structured instructions.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-white">Flowchart:</strong> A diagram that visually represents an algorithm using standard symbols.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-white">Control flow:</strong> The order in which program statements are executed.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-white">Conditional statement:</strong> A programming structure that selects execution paths based on conditions.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-white">Nested condition:</strong> A conditional statement placed inside another conditional statement.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-white">Switch statement:</strong> A selection structure that chooses among multiple execution paths.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-white">Switch expression:</strong> A switch construct that produces a value.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-white">Loop:</strong> A programming structure that repeatedly executes statements.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-white">Nested loop:</strong> A loop inside another loop.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-white">Break:</strong> A statement that exits the nearest enclosing loop or switch.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-white">Continue:</strong> A statement that skips the current loop iteration.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-white">Method:</strong> A named block of reusable code that performs an operation.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-white">Parameter:</strong> A variable declared in a method definition to receive a value.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-white">Argument:</strong> An actual value passed to a method.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-white">Return type:</strong> The type of value a method returns.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-white">Method overloading:</strong> Defining multiple methods with the same name but different parameter lists.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-white">Variable scope:</strong> The region in which a variable can be accessed by its name.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-white">Recursion:</strong> A technique in which a method calls itself.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-white">Base case:</strong> A condition that stops recursive calls.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-white">Pattern programming:</strong> Generating structured arrangements of symbols or numbers through programming logic.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>Essential Java syntax</span>
          </h3>
          <h4 className="text-base sm:text-lg font-bold text-white mt-4 mb-2 flex items-center gap-2">
            <span>Conditional statements</span>
          </h4>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`if (condition) {

} else {

}`}</code>
            </pre>
          </div>
          <h4 className="text-base sm:text-lg font-bold text-white mt-4 mb-2 flex items-center gap-2">
            <span>Switch statement</span>
          </h4>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`switch (choice) {

    case 1:
        break;

    default:
        break;
}`}</code>
            </pre>
          </div>
          <h4 className="text-base sm:text-lg font-bold text-white mt-4 mb-2 flex items-center gap-2">
            <span>Switch expression</span>
          </h4>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`String result = switch (choice) {

    case 1 -> "First";

    case 2 -> "Second";

    default -> "Unknown";
};`}</code>
            </pre>
          </div>
          <h4 className="text-base sm:text-lg font-bold text-white mt-4 mb-2 flex items-center gap-2">
            <span>For loop</span>
          </h4>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`for (int i = 1; i <= 10; i++) {

}`}</code>
            </pre>
          </div>
          <h4 className="text-base sm:text-lg font-bold text-white mt-4 mb-2 flex items-center gap-2">
            <span>While loop</span>
          </h4>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`while (condition) {

}`}</code>
            </pre>
          </div>
          <h4 className="text-base sm:text-lg font-bold text-white mt-4 mb-2 flex items-center gap-2">
            <span>Do-while loop</span>
          </h4>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`do {

} while (condition);`}</code>
            </pre>
          </div>
          <h4 className="text-base sm:text-lg font-bold text-white mt-4 mb-2 flex items-center gap-2">
            <span>Method</span>
          </h4>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`static int add(int a, int b) {

    return a + b;
}`}</code>
            </pre>
          </div>
          <h4 className="text-base sm:text-lg font-bold text-white mt-4 mb-2 flex items-center gap-2">
            <span>Method overloading</span>
          </h4>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`static int calculate(int a, int b) {

    return a + b;
}

static double calculate(double a, double b) {

    return a + b;
}`}</code>
            </pre>
          </div>
          <h4 className="text-base sm:text-lg font-bold text-white mt-4 mb-2 flex items-center gap-2">
            <span>Recursion</span>
          </h4>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java SE Standard</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`static int factorial(int n) {

    if (n <= 1) {
        return 1;
    }

    return n * factorial(n - 1);
}`}</code>
            </pre>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>Essential mathematical operations</span>
          </h3>
          <div className="overflow-x-auto my-4 rounded-xl border border-slate-800 shadow-2xs">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-white border-b border-slate-800 font-semibold">
                <tr>
                  <th className="px-4 py-3">Operation</th>
                  <th className="px-4 py-3">Java expression</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">Extract last digit</td>
                  <td className="px-4 py-2.5 text-slate-300"><code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">number % 10</code></td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">Remove last digit</td>
                  <td className="px-4 py-2.5 text-slate-300"><code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">number / 10</code></td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">Check even</td>
                  <td className="px-4 py-2.5 text-slate-300"><code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">number % 2 == 0</code></td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">Check divisibility</td>
                  <td className="px-4 py-2.5 text-slate-300"><code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">number % divisor == 0</code></td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">Increase counter</td>
                  <td className="px-4 py-2.5 text-slate-300"><code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">i++</code></td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">Decrease counter</td>
                  <td className="px-4 py-2.5 text-slate-300"><code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">i--</code></td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">Add to running total</td>
                  <td className="px-4 py-2.5 text-slate-300"><code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">sum += value</code></td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">Multiply running total</td>
                  <td className="px-4 py-2.5 text-slate-300"><code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">result *= value</code></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* SECTION 30: 30. Module Completion Criteria */}
      <section id="section-30" className="bg-slate-900/80 rounded-2xl border border-slate-800 p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-500/15 text-orange-300 text-xs font-bold uppercase tracking-wider font-mono">
            Milestone · Completion Criteria
          </span>
          <span className="text-xs font-mono text-slate-400">Section 30</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          30. Module Completion Criteria
        </h2>
        <div className="space-y-4 text-slate-300 leading-relaxed text-sm sm:text-base">
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Students should complete the following checklist before progressing.
          </p>
          <h4 className="text-base sm:text-lg font-bold text-white mt-4 mb-2 flex items-center gap-2">
            <span>Algorithmic problem-solving</span>
          </h4>
          <ul className="list-disc pl-5 space-y-2 text-slate-300 text-sm sm:text-base my-3 leading-relaxed">
            <li>[ ] Understand how to analyze a programming problem.</li>
            <li>[ ] Identify inputs, processing, and outputs.</li>
            <li>[ ] Break a complex problem into smaller tasks.</li>
            <li>[ ] Write clear pseudocode.</li>
            <li>[ ] Construct basic flowcharts.</li>
            <li>[ ] Perform a manual dry run.</li>
            <li>[ ] Understand basic time complexity.</li>
          </ul>
          <h4 className="text-base sm:text-lg font-bold text-white mt-4 mb-2 flex items-center gap-2">
            <span>Decision-making</span>
          </h4>
          <ul className="list-disc pl-5 space-y-2 text-slate-300 text-sm sm:text-base my-3 leading-relaxed">
            <li>[ ] Implement <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">if</code> and <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">if-else</code>.</li>
            <li>[ ] Implement an <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">else-if</code> ladder.</li>
            <li>[ ] Write nested conditional statements.</li>
            <li>[ ] Combine conditions using logical operators.</li>
            <li>[ ] Implement traditional switch statements.</li>
            <li>[ ] Understand fall-through and break.</li>
            <li>[ ] Implement modern switch expressions.</li>
          </ul>
          <h4 className="text-base sm:text-lg font-bold text-white mt-4 mb-2 flex items-center gap-2">
            <span>Loops</span>
          </h4>
          <ul className="list-disc pl-5 space-y-2 text-slate-300 text-sm sm:text-base my-3 leading-relaxed">
            <li>[ ] Use for loops.</li>
            <li>[ ] Use while loops.</li>
            <li>[ ] Use do-while loops.</li>
            <li>[ ] Construct nested loops.</li>
            <li>[ ] Generate star and number patterns.</li>
            <li>[ ] Apply break and continue.</li>
            <li>[ ] Identify infinite loops and off-by-one errors.</li>
          </ul>
          <h4 className="text-base sm:text-lg font-bold text-white mt-4 mb-2 flex items-center gap-2">
            <span>Methods</span>
          </h4>
          <ul className="list-disc pl-5 space-y-2 text-slate-300 text-sm sm:text-base my-3 leading-relaxed">
            <li>[ ] Define and call methods.</li>
            <li>[ ] Pass parameters and arguments.</li>
            <li>[ ] Use void and return methods.</li>
            <li>[ ] Implement method overloading.</li>
            <li>[ ] Understand Java's pass-by-value behavior.</li>
            <li>[ ] Explain local and class-level variable scope.</li>
            <li>[ ] Organize a program into reusable methods.</li>
          </ul>
          <h4 className="text-base sm:text-lg font-bold text-white mt-4 mb-2 flex items-center gap-2">
            <span>Recursion and mathematical problem-solving</span>
          </h4>
          <ul className="list-disc pl-5 space-y-2 text-slate-300 text-sm sm:text-base my-3 leading-relaxed">
            <li>[ ] Explain recursion and the call stack.</li>
            <li>[ ] Identify base and recursive cases.</li>
            <li>[ ] Implement factorial recursively.</li>
            <li>[ ] Implement Fibonacci recursively.</li>
            <li>[ ] Check prime numbers.</li>
            <li>[ ] Reverse a number.</li>
            <li>[ ] Check palindrome numbers.</li>
            <li>[ ] Calculate GCD and LCM.</li>
            <li>[ ] Generate Armstrong numbers.</li>
            <li>[ ] Solve basic programming problems independently.</li>
          </ul>
          <h4 className="text-base sm:text-lg font-bold text-white mt-4 mb-2 flex items-center gap-2">
            <span>Practical assessment</span>
          </h4>
          <ul className="list-disc pl-5 space-y-2 text-slate-300 text-sm sm:text-base my-3 leading-relaxed">
            <li>[ ] Complete all seven laboratory exercises.</li>
            <li>[ ] Attempt the independent programming assignments.</li>
            <li>[ ] Complete the assessment questions.</li>
            <li>[ ] Build the Student Performance and Result Management System.</li>
            <li>[ ] Test programs with normal and boundary inputs.</li>
            <li>[ ] Correct common programming errors independently.</li>
          </ul>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>Expected Learning Outcome</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            By the end of Module 2, students should move beyond writing only sequential Java programs.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            They should be capable of analyzing a problem, designing an algorithm, making decisions through conditional statements, repeating operations using loops, dividing logic into reusable methods, and solving elementary mathematical problems using both iteration and recursion.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-white">The essential outcome is independent problem-solving ability.</strong> A student should be able to receive an unfamiliar beginner-level programming problem, develop its logic, translate that logic into Java, test the implementation, and explain how the solution works.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>Next Module</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-white">Module 3 — Arrays, Strings &amp; Basic Data Handling</strong>
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            The next stage will introduce collections of values, array traversal, searching, basic sorting, multidimensional arrays, String operations, and practical data-processing problems.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            This builds directly on the loops, methods, and algorithmic thinking developed in Module 2.
          </p>
        </div>
      </section>

    </div>
  );
}
