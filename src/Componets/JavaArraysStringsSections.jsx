import React from "react";
import { Grid, Hash, AlignLeft, Calculator, Compass, Layers, CheckCircle2, Award } from "lucide-react";

export default function JavaArraysStringsSections() {
  return (
    <div className="space-y-10">
      {/* SECTION 0: Module 3: Complete Curriculum Specification */}
      <section id="overview" className="bg-slate-900/80 rounded-2xl border border-slate-800 p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-500/15 text-orange-300 text-xs font-bold uppercase tracking-wider font-mono">
            Course Roadmap · Overview
          </span>
          <span className="text-xs font-mono text-slate-400">Section 0</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          Module 3: Complete Curriculum Specification
        </h2>
        <div className="space-y-4 text-slate-300 leading-relaxed text-sm sm:text-base">
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>Module Overview</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Programs frequently need to process more than one value at a time. For example, a student management application must store marks for multiple subjects, an e-commerce application must manage product information, and a data-processing application must analyze thousands of records.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Arrays provide a fundamental mechanism for storing collections of values. Strings enable applications to represent and manipulate textual information. Mathematical algorithms provide the logical foundation for many computational problems.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            This module introduces arrays, multidimensional arrays, memory references, String processing, mutable character sequences, frequency counting, mathematical algorithms, and matrix operations.
          </p>
          <h4 className="text-base sm:text-lg font-bold text-white mt-4 mb-2 flex items-center gap-2">
            <span>Prerequisites</span>
          </h4>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Students should understand:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-slate-300 text-sm sm:text-base my-3 leading-relaxed">
            <li>Java program structure.</li>
            <li>Variables and primitive data types.</li>
            <li>Conditional statements and loops.</li>
            <li>Methods, parameters, and return types.</li>
            <li>Basic recursion.</li>
            <li>Arithmetic and relational operators.</li>
            <li>Problem decomposition and algorithm design.</li>
          </ul>
          <h4 className="text-base sm:text-lg font-bold text-white mt-4 mb-2 flex items-center gap-2">
            <span>Learning Objectives</span>
          </h4>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            By the end of this module, students should be able to:
          </p>
          <ol className="list-decimal pl-5 space-y-2 text-slate-300 text-sm sm:text-base my-3 leading-relaxed">
            <li>Explain the purpose and structure of arrays.</li>
            <li>Declare, create, initialize, and access one-dimensional arrays.</li>
            <li>Traverse arrays using loops.</li>
            <li>Perform insertion, deletion, searching, and updating operations.</li>
            <li>Understand array references and their memory behavior.</li>
            <li>Explain how Java multidimensional arrays work.</li>
            <li>Perform operations on two-dimensional matrices.</li>
            <li>Understand String objects and their immutability.</li>
            <li>Explain Java's String pool and string interning.</li>
            <li>Compare String, StringBuilder, and StringBuffer.</li>
            <li>Manipulate strings using standard Java methods.</li>
            <li>Process individual characters and Unicode code points.</li>
            <li>Implement character and element frequency counting.</li>
            <li>Develop efficient searching and basic data-processing algorithms.</li>
            <li>Understand prime numbers and prime factorization.</li>
            <li>Implement GCD and LCM algorithms.</li>
            <li>Apply modular arithmetic.</li>
            <li>Solve number reversal and palindrome problems.</li>
            <li>Understand time and space complexity for basic array and string operations.</li>
            <li>Build a practical application combining arrays, strings, mathematics, and matrices.</li>
          </ol>
        </div>
      </section>

      {/* SECTION 1: 1. Introduction to Arrays */}
      <section id="section-1" className="bg-slate-900/80 rounded-2xl border border-slate-800 p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-500/15 text-orange-300 text-xs font-bold uppercase tracking-wider font-mono">
            Part 1 · Array Fundamentals
          </span>
          <span className="text-xs font-mono text-slate-400">Section 1</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          1. Introduction to Arrays
        </h2>
        <div className="space-y-4 text-slate-300 leading-relaxed text-sm sm:text-base">
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>1.1 What is an array?</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            An array is a data structure that stores a fixed number of values of the same component type.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Instead of declaring many separate variables, an array allows multiple related values to be stored and accessed through a single reference using indexes.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Consider a student who has five subject marks.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Without an array:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`int mark1 = 80;
int mark2 = 85;
int mark3 = 90;
int mark4 = 75;
int mark5 = 95;`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            This works for five values, but it becomes inconvenient when the number of values increases.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            For 1,000 students, each having multiple subjects, managing every value through separate variables would be difficult.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Using an array:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`int[] marks = {80, 85, 90, 75, 95};`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Now all five marks can be accessed using a single array variable.
          </p>
          <h4 className="text-base sm:text-lg font-bold text-white mt-4 mb-2 flex items-center gap-2">
            <span>Visual representation</span>
          </h4>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Consider:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`int[] numbers = {10, 20, 30, 40, 50};`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            The array can be represented as:
          </p>
          <div className="overflow-x-auto my-4 rounded-xl border border-slate-800 shadow-2xs">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-white border-b border-slate-800 font-semibold">
                <tr>
                  <th className="px-4 py-3">Index</th>
                  <th className="px-4 py-3">0</th>
                  <th className="px-4 py-3">1</th>
                  <th className="px-4 py-3">2</th>
                  <th className="px-4 py-3">3</th>
                  <th className="px-4 py-3">4</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">Value</td>
                  <td className="px-4 py-2.5 text-slate-300">10</td>
                  <td className="px-4 py-2.5 text-slate-300">20</td>
                  <td className="px-4 py-2.5 text-slate-300">30</td>
                  <td className="px-4 py-2.5 text-slate-300">40</td>
                  <td className="px-4 py-2.5 text-slate-300">50</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Each element has an index that identifies its position.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Java arrays use zero-based indexing.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Therefore:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-slate-300 text-sm sm:text-base my-3 leading-relaxed">
            <li>First element: index 0.</li>
            <li>Second element: index 1.</li>
            <li>Third element: index 2.</li>
            <li>Last element: index <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">length - 1</code>.</li>
          </ul>
          <div className="mt-4 mb-2 p-3 rounded-lg bg-orange-500/15/70 border border-orange-500/30/80 font-semibold text-white text-sm sm:text-base">
            IMPORTANT
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            An array's index and its position are not the same numerical value. The first position is 1, but its index is 0.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>1.2 Why do we need arrays?</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Arrays are useful because they:
          </p>
          <ol className="list-decimal pl-5 space-y-2 text-slate-300 text-sm sm:text-base my-3 leading-relaxed">
            <li>Store multiple values under one variable name.</li>
            <li>Support efficient indexed access.</li>
            <li>Simplify repeated data processing.</li>
            <li>Work naturally with loops.</li>
            <li>Form the foundation of many algorithms.</li>
            <li>Help implement other data structures.</li>
          </ol>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Real-world examples:
          </p>
          <div className="overflow-x-auto my-4 rounded-xl border border-slate-800 shadow-2xs">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-white border-b border-slate-800 font-semibold">
                <tr>
                  <th className="px-4 py-3">Application</th>
                  <th className="px-4 py-3">Array usage</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">Student management</td>
                  <td className="px-4 py-2.5 text-slate-300">Examination marks</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">E-commerce</td>
                  <td className="px-4 py-2.5 text-slate-300">Product prices</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">Banking</td>
                  <td className="px-4 py-2.5 text-slate-300">Transaction amounts</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">Gaming</td>
                  <td className="px-4 py-2.5 text-slate-300">Player scores</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">Data science</td>
                  <td className="px-4 py-2.5 text-slate-300">Numerical datasets</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">Image processing</td>
                  <td className="px-4 py-2.5 text-slate-300">Pixel values</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">Scheduling</td>
                  <td className="px-4 py-2.5 text-slate-300">Daily time slots</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">Inventory</td>
                  <td className="px-4 py-2.5 text-slate-300">Product quantities</td>
                </tr>
              </tbody>
            </table>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>1.3 Important properties of Java arrays</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            A Java array has several important characteristics.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-white">Fixed length:</strong> Its length is determined when the array is created and cannot subsequently be changed.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-white">Homogeneous component type:</strong> Its components have the same declared component type.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-white">Zero-based indexing:</strong> Indexes range from zero to <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">length - 1</code>.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-white">Object behavior:</strong> Arrays are objects in Java, including arrays of primitive values.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-white">Reference semantics:</strong> Array variables hold references to array objects.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-white">Bounds checking:</strong> Invalid indexes produce an <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">ArrayIndexOutOfBoundsException</code> at runtime.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            An array with length 5 has valid indexes:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`0, 1, 2, 3, 4`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Index 5 is invalid.
          </p>
        </div>
      </section>

      {/* SECTION 2: 2. One-Dimensional Arrays */}
      <section id="section-2" className="bg-slate-900/80 rounded-2xl border border-slate-800 p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-500/15 text-orange-300 text-xs font-bold uppercase tracking-wider font-mono">
            Part 1 · 1D Array Mechanics
          </span>
          <span className="text-xs font-mono text-slate-400">Section 2</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          2. One-Dimensional Arrays
        </h2>
        <div className="space-y-4 text-slate-300 leading-relaxed text-sm sm:text-base">
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>2.1 What is a one-dimensional array?</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            A one-dimensional array stores values in a single indexed sequence.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Example:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`int[] numbers = {10, 20, 30, 40, 50};`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            The values are arranged in one dimension.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            A one-dimensional array is useful for storing:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-slate-300 text-sm sm:text-base my-3 leading-relaxed">
            <li>Marks.</li>
            <li>Salaries.</li>
            <li>Product prices.</li>
            <li>Temperatures.</li>
            <li>User IDs.</li>
            <li>Numerical datasets.</li>
          </ul>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>2.2 Array declaration</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Java provides two common declaration styles.
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`int[] numbers;`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            And:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`int numbers[];`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Both are legal, but the first style is generally preferred because it clearly associates the array type with the variable declaration.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Another example:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`double[] prices;

String[] names;

char[] letters;`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            At this point, the variables have been declared but no array objects have been created.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>2.3 Array creation</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            An array can be created using the <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">new</code> keyword.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Syntax:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`dataType[] arrayName = new dataType[size];`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Example:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`int[] numbers = new int[5];`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            This creates an integer array containing five components.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Before assigning values, Java initializes its components with their default values.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            For an integer array:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`[0, 0, 0, 0, 0]`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            For a boolean array:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`[false, false, false]`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            For a String reference array:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`[null, null, null]`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Example:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public class ArrayCreation {

    public static void main(String[] args) {

        int[] numbers = new int[5];

        System.out.println(numbers[0]);
        System.out.println(numbers[1]);
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
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`0
0`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Remember that local array variables must themselves be initialized before use. The default initialization applies to array components, not to uninitialized local variables that are intended to reference an array.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>2.4 Array initialization</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            There are several ways to initialize an array.
          </p>
          <h4 className="text-base sm:text-lg font-bold text-white mt-4 mb-2 flex items-center gap-2">
            <span>Method 1 — Direct initialization</span>
          </h4>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`int[] marks = {80, 90, 85, 75, 95};`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            The compiler determines the array length from the supplied values.
          </p>
          <h4 className="text-base sm:text-lg font-bold text-white mt-4 mb-2 flex items-center gap-2">
            <span>Method 2 — Create first, then assign values</span>
          </h4>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`int[] marks = new int[5];

marks[0] = 80;
marks[1] = 90;
marks[2] = 85;
marks[3] = 75;
marks[4] = 95;`}</code>
            </pre>
          </div>
          <h4 className="text-base sm:text-lg font-bold text-white mt-4 mb-2 flex items-center gap-2">
            <span>Method 3 — Array initializer with new</span>
          </h4>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`int[] numbers = new int[]{10, 20, 30, 40};`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            This form is useful in assignments and other expressions where an array initializer is needed.
          </p>
          <h4 className="text-base sm:text-lg font-bold text-white mt-4 mb-2 flex items-center gap-2">
            <span>Method 4 — Initialize using a loop</span>
          </h4>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public class ArrayInitialization {

    public static void main(String[] args) {

        int[] numbers = new int[5];

        for (int i = 0; i < numbers.length; i++) {

            numbers[i] = (i + 1) * 10;
        }

        for (int i = 0; i < numbers.length; i++) {

            System.out.println(numbers[i]);
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
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`10
20
30
40
50`}</code>
            </pre>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>2.5 Accessing array elements</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Array elements are accessed using their indexes.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Syntax:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`arrayName[index]`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Example:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public class ArrayAccess {

    public static void main(String[] args) {

        int[] numbers = {10, 20, 30, 40, 50};

        System.out.println(numbers[0]);

        System.out.println(numbers[2]);

        System.out.println(numbers[4]);
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
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`10
30
50`}</code>
            </pre>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>2.6 Modifying array elements</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Array elements can be updated after the array is created.
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public class ArrayUpdate {

    public static void main(String[] args) {

        int[] numbers = {10, 20, 30, 40};

        numbers[1] = 100;

        System.out.println(numbers[1]);
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
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`100`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            The original value at index 1 was 20. It is now 100.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>2.7 The length property</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Java arrays provide a <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">length</code> field.
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`int[] numbers = {10, 20, 30, 40, 50};

System.out.println(numbers.length);`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Output:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`5`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Important distinction:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`numbers.length`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            is correct for arrays.
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`name.length()`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            is correct for String objects.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            The array length does not change when values are updated.
          </p>
        </div>
      </section>

      {/* SECTION 3: 3. Array Traversal */}
      <section id="section-3" className="bg-slate-900/80 rounded-2xl border border-slate-800 p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-500/15 text-orange-300 text-xs font-bold uppercase tracking-wider font-mono">
            Part 1 · Iteration & Traversal
          </span>
          <span className="text-xs font-mono text-slate-400">Section 3</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          3. Array Traversal
        </h2>
        <div className="space-y-4 text-slate-300 leading-relaxed text-sm sm:text-base">
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>3.1 What is array traversal?</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Array traversal means visiting the elements of an array one by one to perform a specific operation.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Typical traversal tasks include:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-slate-300 text-sm sm:text-base my-3 leading-relaxed">
            <li>Printing elements.</li>
            <li>Calculating sums.</li>
            <li>Finding maximum or minimum values.</li>
            <li>Counting specific values.</li>
            <li>Searching for an element.</li>
            <li>Updating values.</li>
            <li>Calculating averages.</li>
          </ul>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Traversal is one of the most important operations in DSA.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>3.2 Traversal using a for loop</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Example:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public class ArrayTraversal {

    public static void main(String[] args) {

        int[] numbers = {10, 20, 30, 40, 50};

        for (int i = 0; i < numbers.length; i++) {

            System.out.println(numbers[i]);
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
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`10
20
30
40
50`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            The loop starts at index 0 and continues until it reaches the last valid index.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Time complexity: O(n), where n is the array length.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>3.3 Traversal using an enhanced for loop</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Java supports an enhanced for loop, commonly called a for-each loop.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Syntax:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`for (dataType variable : arrayName) {

    // Process element
}`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Example:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public class EnhancedForLoop {

    public static void main(String[] args) {

        int[] numbers = {10, 20, 30, 40, 50};

        for (int number : numbers) {

            System.out.println(number);
        }
    }
}`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            The loop automatically retrieves each element.
          </p>
          <h4 className="text-base sm:text-lg font-bold text-white mt-4 mb-2 flex items-center gap-2">
            <span>Difference between for and for-each</span>
          </h4>
          <div className="overflow-x-auto my-4 rounded-xl border border-slate-800 shadow-2xs">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-white border-b border-slate-800 font-semibold">
                <tr>
                  <th className="px-4 py-3">Standard for loop</th>
                  <th className="px-4 py-3">Enhanced for loop</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">Uses an explicit index</td>
                  <td className="px-4 py-2.5 text-slate-300">Does not expose an index directly</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">Useful for indexed access</td>
                  <td className="px-4 py-2.5 text-slate-300">Useful for reading each element</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">Can move forward or backward</td>
                  <td className="px-4 py-2.5 text-slate-300">Traverses elements in iteration order</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">Useful for updates through indexes</td>
                  <td className="px-4 py-2.5 text-slate-300">Assigning to the loop variable does not update primitive array elements</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Example of why the distinction matters:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`int[] numbers = {1, 2, 3};

for (int number : numbers) {

    number = number * 10;
}`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            The original array remains:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`[1, 2, 3]`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            The loop variable receives a copy of each primitive value.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            To update the original array, use indexes:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`for (int i = 0; i < numbers.length; i++) {

    numbers[i] *= 10;
}`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            The array becomes:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`[10, 20, 30]`}</code>
            </pre>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>3.4 Calculate the sum of an array</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Problem:
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Find the sum of all elements.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Input:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`[10, 20, 30, 40, 50]`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Calculation:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`10 + 20 + 30 + 40 + 50 = 150`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Java:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public class ArraySum {

    public static void main(String[] args) {

        int[] numbers = {10, 20, 30, 40, 50};

        int sum = 0;

        for (int i = 0; i < numbers.length; i++) {

            sum += numbers[i];
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
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Sum: 150`}</code>
            </pre>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>3.5 Calculate the average</span>
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public class ArrayAverage {

    public static void main(String[] args) {

        int[] marks = {80, 90, 75, 85, 95};

        int total = 0;

        for (int mark : marks) {

            total += mark;
        }

        double average = (double) total / marks.length;

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
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Average: 85.0`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            The explicit conversion to <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">double</code> ensures the division can produce a fractional result.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>3.6 Find the maximum element</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Algorithm:
          </p>
          <ol className="list-decimal pl-5 space-y-2 text-slate-300 text-sm sm:text-base my-3 leading-relaxed">
            <li>Assume the first element is the maximum.</li>
            <li>Traverse the remaining elements.</li>
            <li>Compare each element with the current maximum.</li>
            <li>Update the maximum when a larger element is found.</li>
            <li>Display the maximum.</li>
          </ol>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Java:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public class ArrayMaximum {

    public static void main(String[] args) {

        int[] numbers = {25, 10, 90, 45, 70};

        int maximum = numbers[0];

        for (int i = 1; i < numbers.length; i++) {

            if (numbers[i] > maximum) {

                maximum = numbers[i];
            }
        }

        System.out.println("Maximum: " + maximum);
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
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Maximum: 90`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Time complexity: O(n).
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            The algorithm assumes the array is non-empty.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>3.7 Find the minimum element</span>
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public class ArrayMinimum {

    public static void main(String[] args) {

        int[] numbers = {25, 10, 90, 45, 70};

        int minimum = numbers[0];

        for (int i = 1; i < numbers.length; i++) {

            if (numbers[i] < minimum) {

                minimum = numbers[i];
            }
        }

        System.out.println("Minimum: " + minimum);
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
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Minimum: 10`}</code>
            </pre>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>3.8 Count occurrences of a value</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Problem:
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Count how many times the number 5 appears.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Input:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`[5, 2, 5, 8, 5, 1]`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Java:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public class OccurrenceCounter {

    public static void main(String[] args) {

        int[] numbers = {5, 2, 5, 8, 5, 1};

        int target = 5;

        int count = 0;

        for (int number : numbers) {

            if (number == target) {

                count++;
            }
        }

        System.out.println("Occurrences: " + count);
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
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Occurrences: 3`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            This technique is called frequency counting.
          </p>
        </div>
      </section>

      {/* SECTION 4: 4. Array Insertion and Deletion */}
      <section id="section-4" className="bg-slate-900/80 rounded-2xl border border-slate-800 p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-500/15 text-orange-300 text-xs font-bold uppercase tracking-wider font-mono">
            Part 2 · Dynamic Shifting & Mutations
          </span>
          <span className="text-xs font-mono text-slate-400">Section 4</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          4. Array Insertion and Deletion
        </h2>
        <div className="space-y-4 text-slate-300 leading-relaxed text-sm sm:text-base">
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>4.1 Understanding insertion</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Insertion means adding a new element at a specified position.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Java arrays have fixed lengths. Therefore, insertion into a full array requires creating a larger array.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            If an array has unused capacity, insertion can be performed by shifting existing elements to the right.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Consider:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Original:
[10, 20, 30, 40, 50]

Insert 25 at index 2:

[10, 20, 25, 30, 40, 50]`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            The elements originally at indexes 2 and above must move one position to the right.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>4.2 Array insertion using a new array</span>
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`import java.util.Arrays;

public class ArrayInsertion {

    public static void main(String[] args) {

        int[] original = {10, 20, 30, 40, 50};

        int position = 2;

        int value = 25;

        int[] result = new int[original.length + 1];

        for (int i = 0; i < position; i++) {

            result[i] = original[i];
        }

        result[position] = value;

        for (int i = position; i < original.length; i++) {

            result[i + 1] = original[i];
        }

        System.out.println(Arrays.toString(result));
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
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`[10, 20, 25, 30, 40, 50]`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Here, <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">position</code> represents a zero-based index.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Time complexity: O(n), because elements may need to be copied.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>4.3 Insertion with spare capacity</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Sometimes an application reserves extra space in an array and tracks the actual number of elements separately.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Example:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`import java.util.Arrays;

public class InsertionWithCapacity {

    public static void main(String[] args) {

        int[] numbers = new int[10];

        numbers[0] = 10;
        numbers[1] = 20;
        numbers[2] = 30;
        numbers[3] = 40;

        int size = 4;

        int position = 2;

        int value = 25;

        if (size < numbers.length &&
            position >= 0 &&
            position <= size) {

            for (int i = size; i > position; i--) {

                numbers[i] = numbers[i - 1];
            }

            numbers[position] = value;

            size++;
        }

        System.out.println(
                Arrays.toString(Arrays.copyOf(numbers, size))
        );
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
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`[10, 20, 25, 30, 40]`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            The array has a capacity of ten, but currently contains five logical elements.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>4.4 Understanding deletion</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Deletion means removing an element from an array.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Because the array's length cannot change, we normally shift the remaining elements to the left and reduce the logical size.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Consider:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Original:
[10, 20, 30, 40, 50]

Delete index 2:

[10, 20, 40, 50]`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            The elements after index 2 move one position to the left.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>4.5 Array deletion implementation</span>
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`import java.util.Arrays;

public class ArrayDeletion {

    public static void main(String[] args) {

        int[] numbers = {10, 20, 30, 40, 50};

        int position = 2;

        int[] result = new int[numbers.length - 1];

        if (position >= 0 && position < numbers.length) {

            for (int i = 0; i < position; i++) {

                result[i] = numbers[i];
            }

            for (int i = position + 1; i < numbers.length; i++) {

                result[i - 1] = numbers[i];
            }
        }

        System.out.println(Arrays.toString(result));
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
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`[10, 20, 40, 50]`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            For a more robust implementation, validate the position before creating the result array.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>4.6 Insertion and deletion complexity</span>
          </h3>
          <div className="overflow-x-auto my-4 rounded-xl border border-slate-800 shadow-2xs">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-white border-b border-slate-800 font-semibold">
                <tr>
                  <th className="px-4 py-3">Operation</th>
                  <th className="px-4 py-3">Time complexity</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">Access by index</td>
                  <td className="px-4 py-2.5 text-slate-300">O(1)</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">Update by index</td>
                  <td className="px-4 py-2.5 text-slate-300">O(1)</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">Traversal</td>
                  <td className="px-4 py-2.5 text-slate-300">O(n)</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">Linear search</td>
                  <td className="px-4 py-2.5 text-slate-300">O(n)</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">Insert at end with free capacity</td>
                  <td className="px-4 py-2.5 text-slate-300">O(1)</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">Insert at beginning</td>
                  <td className="px-4 py-2.5 text-slate-300">O(n)</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">Insert in middle</td>
                  <td className="px-4 py-2.5 text-slate-300">O(n)</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">Delete last logical element</td>
                  <td className="px-4 py-2.5 text-slate-300">O(1)</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">Delete beginning</td>
                  <td className="px-4 py-2.5 text-slate-300">O(n)</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">Delete middle</td>
                  <td className="px-4 py-2.5 text-slate-300">O(n)</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            The complexities describe the common basic implementations, not every possible implementation or resizing policy.
          </p>
        </div>
      </section>

      {/* SECTION 5: 5. Searching Algorithms in Arrays */}
      <section id="section-5" className="bg-slate-900/80 rounded-2xl border border-slate-800 p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-500/15 text-orange-300 text-xs font-bold uppercase tracking-wider font-mono">
            Part 2 · Linear & Binary Search
          </span>
          <span className="text-xs font-mono text-slate-400">Section 5</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          5. Searching Algorithms in Arrays
        </h2>
        <div className="space-y-4 text-slate-300 leading-relaxed text-sm sm:text-base">
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Searching means finding whether an element exists in a collection and, when it does, identifying its position.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Two fundamental searching algorithms are:
          </p>
          <ol className="list-decimal pl-5 space-y-2 text-slate-300 text-sm sm:text-base my-3 leading-relaxed">
            <li>Linear search.</li>
            <li>Binary search.</li>
          </ol>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>5.1 Linear search</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Linear search checks elements one by one until the required value is found or the array ends.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Example:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Array:  [10, 20, 30, 40, 50]
Target: 40`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Search process:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Compare 40 with 10 → Not found
Compare 40 with 20 → Not found
Compare 40 with 30 → Not found
Compare 40 with 40 → Found`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Java implementation:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public class LinearSearch {

    static int search(int[] numbers, int target) {

        for (int i = 0; i < numbers.length; i++) {

            if (numbers[i] == target) {

                return i;
            }
        }

        return -1;
    }

    public static void main(String[] args) {

        int[] numbers = {10, 20, 30, 40, 50};

        int result = search(numbers, 40);

        if (result != -1) {

            System.out.println("Found at index: " + result);

        } else {

            System.out.println("Not found");
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
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Found at index: 3`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Time complexity:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-slate-300 text-sm sm:text-base my-3 leading-relaxed">
            <li>Best case: O(1).</li>
            <li>Average case: O(n).</li>
            <li>Worst case: O(n).</li>
          </ul>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Auxiliary space complexity: O(1).
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Linear search works on sorted and unsorted arrays.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>5.2 Binary search</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Binary search is an efficient searching technique that repeatedly divides a sorted search interval into two parts.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            It requires the input array to be sorted according to the ordering used by the algorithm.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Instead of examining every element, it eliminates approximately half the remaining search space after each comparison.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Example:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Array: [10, 20, 30, 40, 50, 60, 70]

Target: 60`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Initial middle index:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`middle = 3
value = 40`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Since 60 is greater than 40, search the right half.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Next:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`middle = 5
value = 60`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            The target is found.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>5.3 Binary search implementation</span>
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public class BinarySearch {

    static int search(int[] numbers, int target) {

        int left = 0;

        int right = numbers.length - 1;

        while (left <= right) {

            int middle = left + (right - left) / 2;

            if (numbers[middle] == target) {

                return middle;
            }

            if (numbers[middle] < target) {

                left = middle + 1;

            } else {

                right = middle - 1;
            }
        }

        return -1;
    }

    public static void main(String[] args) {

        int[] numbers = {10, 20, 30, 40, 50, 60, 70};

        System.out.println(search(numbers, 60));
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
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`5`}</code>
            </pre>
          </div>
          <h4 className="text-base sm:text-lg font-bold text-white mt-4 mb-2 flex items-center gap-2">
            <span>Why use <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">left + (right - left) / 2</code>?</span>
          </h4>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            A simpler expression is:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`int middle = (left + right) / 2;`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            However, adding two large integer indexes could overflow.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            The alternative expression avoids that particular addition overflow when the bounds are valid non-negative array indexes.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>5.4 Binary search dry run</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Array:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`[10, 20, 30, 40, 50, 60, 70]`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Target:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`60`}</code>
            </pre>
          </div>
          <div className="overflow-x-auto my-4 rounded-xl border border-slate-800 shadow-2xs">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-white border-b border-slate-800 font-semibold">
                <tr>
                  <th className="px-4 py-3">Step</th>
                  <th className="px-4 py-3">Left</th>
                  <th className="px-4 py-3">Right</th>
                  <th className="px-4 py-3">Middle</th>
                  <th className="px-4 py-3">Value</th>
                  <th className="px-4 py-3">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">1</td>
                  <td className="px-4 py-2.5 text-slate-300">0</td>
                  <td className="px-4 py-2.5 text-slate-300">6</td>
                  <td className="px-4 py-2.5 text-slate-300">3</td>
                  <td className="px-4 py-2.5 text-slate-300">40</td>
                  <td className="px-4 py-2.5 text-slate-300">Search right</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">2</td>
                  <td className="px-4 py-2.5 text-slate-300">4</td>
                  <td className="px-4 py-2.5 text-slate-300">6</td>
                  <td className="px-4 py-2.5 text-slate-300">5</td>
                  <td className="px-4 py-2.5 text-slate-300">60</td>
                  <td className="px-4 py-2.5 text-slate-300">Found</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Time complexity:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-slate-300 text-sm sm:text-base my-3 leading-relaxed">
            <li>Best case: O(1).</li>
            <li>Average case: O(log n).</li>
            <li>Worst case: O(log n).</li>
          </ul>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Auxiliary space complexity for this iterative implementation: O(1).
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>5.5 Linear search versus binary search</span>
          </h3>
          <div className="overflow-x-auto my-4 rounded-xl border border-slate-800 shadow-2xs">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-white border-b border-slate-800 font-semibold">
                <tr>
                  <th className="px-4 py-3">Linear search</th>
                  <th className="px-4 py-3">Binary search</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">Works with unsorted data</td>
                  <td className="px-4 py-2.5 text-slate-300">Requires sorted data</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">Examines elements sequentially</td>
                  <td className="px-4 py-2.5 text-slate-300">Repeatedly halves the search range</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">Worst-case O(n)</td>
                  <td className="px-4 py-2.5 text-slate-300">Worst-case O(log n)</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">Simple to implement</td>
                  <td className="px-4 py-2.5 text-slate-300">Requires careful boundary handling</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">Useful for small or unsorted collections</td>
                  <td className="px-4 py-2.5 text-slate-300">Useful for large sorted collections</td>
                </tr>
              </tbody>
            </table>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>5.6 Java's built-in binary search</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Java provides the <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">Arrays.binarySearch()</code> method.
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`import java.util.Arrays;

public class BuiltInSearch {

    public static void main(String[] args) {

        int[] numbers = {10, 20, 30, 40, 50};

        int index = Arrays.binarySearch(numbers, 40);

        System.out.println(index);
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
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`3`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Important:
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            The array should be sorted before using binary search.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            If the value is absent, the method returns a negative value encoding the insertion point. Do not assume every negative result is simply <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">-1</code>.
          </p>
        </div>
      </section>

      {/* SECTION 6: 6. Array References and Memory Behavior */}
      <section id="section-6" className="bg-slate-900/80 rounded-2xl border border-slate-800 p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-500/15 text-orange-300 text-xs font-bold uppercase tracking-wider font-mono">
            Part 3 · Reference Semantics & Heap Memory
          </span>
          <span className="text-xs font-mono text-slate-400">Section 6</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          6. Array References and Memory Behavior
        </h2>
        <div className="space-y-4 text-slate-300 leading-relaxed text-sm sm:text-base">
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>6.1 Arrays are objects in Java</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            One of the most important concepts in Java is that arrays are objects.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Consider:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`int[] numbers = {10, 20, 30};`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            The array object is created, and the variable <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">numbers</code> holds a reference to it.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            A conceptual representation:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Variable: numbers
       |
       v
+------------------+
| Array Object     |
+------------------+
| Index 0 = 10     |
| Index 1 = 20     |
| Index 2 = 30     |
+------------------+`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            The variable does not contain all the array values as separate local variables. It holds a reference to the array object.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>6.2 Reference assignment</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Consider:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`int[] first = {10, 20, 30};

int[] second = first;`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Both variables refer to the same array object.
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`first  -----+
            |
            v
       [10, 20, 30]
            ^
            |
second -----+`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Changing the array through either reference changes the same object.
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public class ArrayReferenceExample {

    public static void main(String[] args) {

        int[] first = {10, 20, 30};

        int[] second = first;

        second[0] = 100;

        System.out.println(first[0]);
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
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`100`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            This is called aliasing: multiple references point to the same object.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>6.3 Copying an array</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            If an independent array is required, its contents must be copied.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Example using <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">Arrays.copyOf()</code>:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`import java.util.Arrays;

public class ArrayCopy {

    public static void main(String[] args) {

        int[] first = {10, 20, 30};

        int[] second = Arrays.copyOf(
                first,
                first.length
        );

        second[0] = 100;

        System.out.println(Arrays.toString(first));

        System.out.println(Arrays.toString(second));
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
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`[10, 20, 30]
[100, 20, 30]`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            The two arrays are independent array objects.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Another option is:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`int[] second = first.clone();`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            For an array of primitive values, cloning copies the elements.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            For arrays containing object references, cloning is shallow: the references are copied, but the referenced objects are not automatically cloned.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>6.4 Arrays as method parameters</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Java passes array references by value.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            This means the method receives a copy of the reference value, but both references can point to the same array object.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Example:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public class ArrayMethodExample {

    static void update(int[] values) {

        values[0] = 999;
    }

    public static void main(String[] args) {

        int[] numbers = {10, 20, 30};

        update(numbers);

        System.out.println(numbers[0]);
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
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`999`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            The method modifies the shared array object.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            However, assigning a different array to the method's local parameter does not change the caller's variable.
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`static void replace(int[] values) {

    values = new int[]{100, 200, 300};
}`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            This changes the local parameter reference only.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>6.5 Default initialization</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            When an array is created, Java initializes its components.
          </p>
          <div className="overflow-x-auto my-4 rounded-xl border border-slate-800 shadow-2xs">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-white border-b border-slate-800 font-semibold">
                <tr>
                  <th className="px-4 py-3">Component type</th>
                  <th className="px-4 py-3">Default</th>
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
                  <td className="px-4 py-2.5 text-slate-300">0.0</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">char</td>
                  <td className="px-4 py-2.5 text-slate-300"><code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">'\u0000'</code></td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">boolean</td>
                  <td className="px-4 py-2.5 text-slate-300">false</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">Reference types</td>
                  <td className="px-4 py-2.5 text-slate-300">null</td>
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
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public class ArrayDefaults {

    public static void main(String[] args) {

        int[] numbers = new int[3];

        String[] names = new String[3];

        System.out.println(numbers[0]);

        System.out.println(names[0]);
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
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`0
null`}</code>
            </pre>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>6.6 Null and array errors</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            A reference variable may contain <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">null</code>.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Example:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`int[] numbers = null;`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Trying to access:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`System.out.println(numbers.length);`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            causes a <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">NullPointerException</code>.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Trying to access an invalid index:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`int[] values = {10, 20, 30};

System.out.println(values[3]);`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            causes an <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">ArrayIndexOutOfBoundsException</code>.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Always validate references and indexes before accessing arrays.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>6.7 Array memory considerations</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            At the Java language level, array variables are references to array objects.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            The precise physical memory layout is determined by the JVM implementation.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            For this reason, avoid assuming that every Java array is physically laid out in exactly the same way as a C-language array.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Important practical concepts:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-slate-300 text-sm sm:text-base my-3 leading-relaxed">
            <li>Arrays are objects.</li>
            <li>Primitive arrays store primitive values as their components.</li>
            <li>Reference arrays store references as their components.</li>
            <li>An array has a fixed length.</li>
            <li>Index-based access has constant-time complexity in the usual model.</li>
            <li>Large arrays consume memory and should be sized appropriately.</li>
          </ul>
        </div>
      </section>

      {/* SECTION 7: 7. Multidimensional Arrays */}
      <section id="section-7" className="bg-slate-900/80 rounded-2xl border border-slate-800 p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-500/15 text-orange-300 text-xs font-bold uppercase tracking-wider font-mono">
            Part 4 · Multidimensional & Jagged Arrays
          </span>
          <span className="text-xs font-mono text-slate-400">Section 7</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          7. Multidimensional Arrays
        </h2>
        <div className="space-y-4 text-slate-300 leading-relaxed text-sm sm:text-base">
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>7.1 What is a multidimensional array?</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            A multidimensional array organizes values using more than one index.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            For example, a two-dimensional array stores values in a row-and-column arrangement.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Real-world applications include:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-slate-300 text-sm sm:text-base my-3 leading-relaxed">
            <li>Examination result tables.</li>
            <li>Matrix calculations.</li>
            <li>Game boards.</li>
            <li>Seating arrangements.</li>
            <li>Image pixel grids.</li>
            <li>Timetables.</li>
            <li>Scientific data.</li>
          </ul>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>7.2 Two-dimensional array declaration</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Syntax:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`dataType[][] arrayName;`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Example:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`int[][] matrix;`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Creating a matrix:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`int[][] matrix = new int[3][3];`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            This creates an outer array with three references to row arrays, each of length three.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>7.3 Understanding rows and columns</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Consider:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`int[][] matrix = {
    {10, 20, 30},
    {40, 50, 60},
    {70, 80, 90}
};`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Representation:
          </p>
          <div className="overflow-x-auto my-4 rounded-xl border border-slate-800 shadow-2xs">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-white border-b border-slate-800 font-semibold">
                <tr>
                  <th className="px-4 py-3">Row / Column</th>
                  <th className="px-4 py-3">Column 0</th>
                  <th className="px-4 py-3">Column 1</th>
                  <th className="px-4 py-3">Column 2</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">Row 0</td>
                  <td className="px-4 py-2.5 text-slate-300">10</td>
                  <td className="px-4 py-2.5 text-slate-300">20</td>
                  <td className="px-4 py-2.5 text-slate-300">30</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">Row 1</td>
                  <td className="px-4 py-2.5 text-slate-300">40</td>
                  <td className="px-4 py-2.5 text-slate-300">50</td>
                  <td className="px-4 py-2.5 text-slate-300">60</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">Row 2</td>
                  <td className="px-4 py-2.5 text-slate-300">70</td>
                  <td className="px-4 py-2.5 text-slate-300">80</td>
                  <td className="px-4 py-2.5 text-slate-300">90</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            To access 50:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`matrix[1][1]`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            To access 90:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`matrix[2][2]`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            General syntax:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`array[row][column]`}</code>
            </pre>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>7.4 Initialize a two-dimensional array</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Method 1:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`int[][] matrix = {
    {1, 2},
    {3, 4}
};`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Method 2:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`int[][] matrix = new int[2][2];

matrix[0][0] = 1;
matrix[0][1] = 2;
matrix[1][0] = 3;
matrix[1][1] = 4;`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Method 3 — Input using nested loops:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`import java.util.Scanner;

public class MatrixInput {

    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);

        int[][] matrix = new int[2][3];

        for (int i = 0; i < matrix.length; i++) {

            for (int j = 0; j < matrix[i].length; j++) {

                System.out.print(
                        "Enter value: "
                );

                matrix[i][j] = scanner.nextInt();
            }
        }

        scanner.close();
    }
}`}</code>
            </pre>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>7.5 Traversing a two-dimensional array</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            A nested loop is commonly used to process every element.
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public class MatrixTraversal {

    public static void main(String[] args) {

        int[][] matrix = {
            {1, 2, 3},
            {4, 5, 6},
            {7, 8, 9}
        };

        for (int i = 0; i < matrix.length; i++) {

            for (int j = 0; j < matrix[i].length; j++) {

                System.out.print(
                        matrix[i][j] + " "
                );
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
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`1 2 3
4 5 6
7 8 9`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            The outer loop traverses rows.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            The inner loop traverses the elements within each row.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            For a rectangular matrix with r rows and c columns, visiting all elements requires O(rc) time.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>7.6 Enhanced traversal of a matrix</span>
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`for (int[] row : matrix) {

    for (int value : row) {

        System.out.print(value + " ");
    }

    System.out.println();
}`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            This form is useful when the index is not required.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>7.7 Jagged arrays</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            An important feature of Java is that a two-dimensional array is actually an array whose components can refer to other arrays.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            It does not have to be rectangular.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Example:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public class JaggedArray {

    public static void main(String[] args) {

        int[][] numbers = {

            {1, 2, 3},

            {4, 5},

            {6, 7, 8, 9}
        };

        for (int i = 0; i < numbers.length; i++) {

            for (int j = 0; j < numbers[i].length; j++) {

                System.out.print(numbers[i][j] + " ");
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
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`1 2 3
4 5
6 7 8 9`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            This is called a jagged array.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            It is possible because each row is a separate array object and can have a different length.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Always use:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`matrix[i].length`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            when traversing a row whose length may differ from other rows.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>7.8 Three-dimensional arrays</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Java also supports arrays with three or more dimensions.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Example:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`int[][][] data = new int[2][3][4];`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            This structure can represent:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-slate-300 text-sm sm:text-base my-3 leading-relaxed">
            <li>Two groups.</li>
            <li>Three rows per group.</li>
            <li>Four columns per row.</li>
          </ul>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Access example:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`data[0][1][2] = 100;`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Three-dimensional arrays can be useful for representing layered data, but many applications use alternative data structures when the dimensional structure becomes complex.
          </p>
        </div>
      </section>

      {/* SECTION 8: 8. Two-Dimensional Matrix Operations */}
      <section id="section-8" className="bg-slate-900/80 rounded-2xl border border-slate-800 p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-500/15 text-orange-300 text-xs font-bold uppercase tracking-wider font-mono">
            Part 4 · 2D Matrix Mathematics
          </span>
          <span className="text-xs font-mono text-slate-400">Section 8</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          8. Two-Dimensional Matrix Operations
        </h2>
        <div className="space-y-4 text-slate-300 leading-relaxed text-sm sm:text-base">
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            A matrix is a rectangular arrangement of values organized into rows and columns.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Matrix operations are important in mathematics, scientific computing, image processing, graphics, and machine learning.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>8.1 Matrix addition</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Two matrices can be added if they have the same dimensions.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Suppose:
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            \[
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            A =
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            \begin&#123;bmatrix&#125;
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            1 &amp; 2\\
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            3 &amp; 4
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            \end&#123;bmatrix&#125;
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            \]
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            \[
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            B =
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            \begin&#123;bmatrix&#125;
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            5 &amp; 6\\
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            7 &amp; 8
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            \end&#123;bmatrix&#125;
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            \]
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Their sum is:
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            \[
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            A+B =
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            \begin&#123;bmatrix&#125;
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            6 &amp; 8\\
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            10 &amp; 12
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            \end&#123;bmatrix&#125;
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
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public class MatrixAddition {

    public static void main(String[] args) {

        int[][] a = {
            {1, 2},
            {3, 4}
        };

        int[][] b = {
            {5, 6},
            {7, 8}
        };

        int rows = a.length;

        int columns = a[0].length;

        int[][] result = new int[rows][columns];

        for (int i = 0; i < rows; i++) {

            for (int j = 0; j < columns; j++) {

                result[i][j] = a[i][j] + b[i][j];
            }
        }

        for (int[] row : result) {

            for (int value : row) {

                System.out.print(value + " ");
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
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`6 8
10 12`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Time complexity: O(rc), where r is the number of rows and c is the number of columns.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>8.2 Matrix subtraction</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Matrix subtraction follows the same element-by-element approach.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            \[
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            C[i][j] = A[i][j] - B[i][j]
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
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`for (int i = 0; i < rows; i++) {

    for (int j = 0; j < columns; j++) {

        result[i][j] = a[i][j] - b[i][j];
    }
}`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            The matrices must have matching dimensions.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>8.3 Matrix transpose</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            The transpose of a matrix is obtained by converting its rows into columns and its columns into rows.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Original:
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            \[
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            A =
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            \begin&#123;bmatrix&#125;
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            1 &amp; 2 &amp; 3\\
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            4 &amp; 5 &amp; 6
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            \end&#123;bmatrix&#125;
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            \]
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Transpose:
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            \[
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            A^T =
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            \begin&#123;bmatrix&#125;
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            1 &amp; 4\\
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            2 &amp; 5\\
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            3 &amp; 6
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            \end&#123;bmatrix&#125;
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
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public class MatrixTranspose {

    public static void main(String[] args) {

        int[][] matrix = {
            {1, 2, 3},
            {4, 5, 6}
        };

        int rows = matrix.length;

        int columns = matrix[0].length;

        int[][] transpose = new int[columns][rows];

        for (int i = 0; i < rows; i++) {

            for (int j = 0; j < columns; j++) {

                transpose[j][i] = matrix[i][j];
            }
        }

        for (int[] row : transpose) {

            for (int value : row) {

                System.out.print(value + " ");
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
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`1 4
2 5
3 6`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Time complexity: O(rc).
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>8.4 Matrix multiplication</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Matrix multiplication is different from matrix addition.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Suppose:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-slate-300 text-sm sm:text-base my-3 leading-relaxed">
            <li>Matrix A has dimensions m × n.</li>
            <li>Matrix B has dimensions n × p.</li>
          </ul>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            The product has dimensions m × p.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            The number of columns in the first matrix must equal the number of rows in the second matrix.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            For every result element:
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            \[
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            C[i][j] =
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            \sum_&#123;k=0&#125;^&#123;n-1&#125; A[i][k] \times B[k][j]
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            \]
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Example:
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            \[
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            A =
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            \begin&#123;bmatrix&#125;
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            1 &amp; 2\\
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            3 &amp; 4
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            \end&#123;bmatrix&#125;
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            \]
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            \[
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            B =
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            \begin&#123;bmatrix&#125;
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            5 &amp; 6\\
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            7 &amp; 8
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            \end&#123;bmatrix&#125;
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            \]
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Then:
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            \[
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            AB =
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            \begin&#123;bmatrix&#125;
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            19 &amp; 22\\
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            43 &amp; 50
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            \end&#123;bmatrix&#125;
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
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public class MatrixMultiplication {

    public static void main(String[] args) {

        int[][] a = {
            {1, 2},
            {3, 4}
        };

        int[][] b = {
            {5, 6},
            {7, 8}
        };

        int rowsA = a.length;

        int columnsA = a[0].length;

        int columnsB = b[0].length;

        if (columnsA != b.length) {

            System.out.println("Multiplication not possible");

            return;
        }

        int[][] result = new int[rowsA][columnsB];

        for (int i = 0; i < rowsA; i++) {

            for (int j = 0; j < columnsB; j++) {

                for (int k = 0; k < columnsA; k++) {

                    result[i][j] += a[i][k] * b[k][j];
                }
            }
        }

        for (int[] row : result) {

            for (int value : row) {

                System.out.print(value + " ");
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
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`19 22
43 50`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            For dense matrices, the classical algorithm uses O(mnp) arithmetic operations.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>8.5 Main diagonal sum</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            For a square matrix, the main diagonal consists of elements where row and column indexes are equal.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Example:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`1 2 3
4 5 6
7 8 9`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Main diagonal:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`1, 5, 9`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Sum:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`15`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Java:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public class DiagonalSum {

    public static void main(String[] args) {

        int[][] matrix = {
            {1, 2, 3},
            {4, 5, 6},
            {7, 8, 9}
        };

        int sum = 0;

        for (int i = 0; i < matrix.length; i++) {

            sum += matrix[i][i];
        }

        System.out.println(sum);
    }
}`}</code>
            </pre>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>8.6 Secondary diagonal sum</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            The secondary diagonal of a square matrix contains elements whose column index is:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`matrix.length - 1 - row`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Example:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`1 2 3
4 5 6
7 8 9`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Secondary diagonal:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`3, 5, 7`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Sum:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`15`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Java:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`int sum = 0;

int n = matrix.length;

for (int i = 0; i < n; i++) {

    sum += matrix[i][n - 1 - i];
}`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            For a matrix of odd dimension, the center element is included in both diagonal sums if they are calculated separately.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>8.7 Row and column sums</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Row sum:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`for (int i = 0; i < matrix.length; i++) {

    int sum = 0;

    for (int j = 0; j < matrix[i].length; j++) {

        sum += matrix[i][j];
    }

    System.out.println("Row sum: " + sum);
}`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Column sum for a rectangular matrix with equal row lengths:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`int rows = matrix.length;

int columns = matrix[0].length;

for (int j = 0; j < columns; j++) {

    int sum = 0;

    for (int i = 0; i < rows; i++) {

        sum += matrix[i][j];
    }

    System.out.println("Column sum: " + sum);
}`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            The column-sum example assumes the matrix is rectangular.
          </p>
        </div>
      </section>

      {/* SECTION 9: 9. Introduction to Strings */}
      <section id="section-9" className="bg-slate-900/80 rounded-2xl border border-slate-800 p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-500/15 text-orange-300 text-xs font-bold uppercase tracking-wider font-mono">
            Part 5 · String Fundamentals
          </span>
          <span className="text-xs font-mono text-slate-400">Section 9</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          9. Introduction to Strings
        </h2>
        <div className="space-y-4 text-slate-300 leading-relaxed text-sm sm:text-base">
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>9.1 What is a String?</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            A String is a sequence of characters used to represent text.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Examples:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`String name = "Alex";

String language = "Java";

String message = "Welcome to programming";`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Java's <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">String</code> class belongs to the <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">java.lang</code> package, so it does not require an explicit import.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Strings are widely used in:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-slate-300 text-sm sm:text-base my-3 leading-relaxed">
            <li>Usernames and passwords.</li>
            <li>Text processing.</li>
            <li>File paths.</li>
            <li>Web applications.</li>
            <li>Messages and notifications.</li>
            <li>Database information.</li>
            <li>Natural language processing.</li>
            <li>Search systems.</li>
          </ul>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>9.2 Creating String objects</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            There are several ways to create String objects.
          </p>
          <h4 className="text-base sm:text-lg font-bold text-white mt-4 mb-2 flex items-center gap-2">
            <span>Method 1 — String literal</span>
          </h4>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`String name = "Java";`}</code>
            </pre>
          </div>
          <h4 className="text-base sm:text-lg font-bold text-white mt-4 mb-2 flex items-center gap-2">
            <span>Method 2 — Using new</span>
          </h4>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`String name = new String("Java");`}</code>
            </pre>
          </div>
          <h4 className="text-base sm:text-lg font-bold text-white mt-4 mb-2 flex items-center gap-2">
            <span>Method 3 — From a character array</span>
          </h4>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`char[] letters = {'J', 'a', 'v', 'a'};

String name = new String(letters);`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            All three examples produce strings containing:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Java`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            However, they differ in how the reference and object creation work, especially regarding literal interning.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>9.3 String indexing</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Strings support zero-based indexing through character-related methods.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Example:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`String word = "JAVA";`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Conceptual character positions:
          </p>
          <div className="overflow-x-auto my-4 rounded-xl border border-slate-800 shadow-2xs">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-white border-b border-slate-800 font-semibold">
                <tr>
                  <th className="px-4 py-3">Index</th>
                  <th className="px-4 py-3">0</th>
                  <th className="px-4 py-3">1</th>
                  <th className="px-4 py-3">2</th>
                  <th className="px-4 py-3">3</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">Character</td>
                  <td className="px-4 py-2.5 text-slate-300">J</td>
                  <td className="px-4 py-2.5 text-slate-300">A</td>
                  <td className="px-4 py-2.5 text-slate-300">V</td>
                  <td className="px-4 py-2.5 text-slate-300">A</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Access using <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">charAt()</code>:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`System.out.println(word.charAt(0));

System.out.println(word.charAt(2));`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Output:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`J
V`}</code>
            </pre>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>9.4 String length</span>
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`String text = "Programming";

System.out.println(text.length());`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Output:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`11`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Unlike arrays, String length uses a method:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`text.length()`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            For Java Strings, this returns the number of UTF-16 code units, not necessarily the number of Unicode code points or user-perceived characters.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            This distinction matters for some international text and emoji.
          </p>
        </div>
      </section>

      {/* SECTION 10: 10. String Immutability */}
      <section id="section-10" className="bg-slate-900/80 rounded-2xl border border-slate-800 p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-500/15 text-orange-300 text-xs font-bold uppercase tracking-wider font-mono">
            Part 5 · Immutability Architecture
          </span>
          <span className="text-xs font-mono text-slate-400">Section 10</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          10. String Immutability
        </h2>
        <div className="space-y-4 text-slate-300 leading-relaxed text-sm sm:text-base">
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>10.1 What is immutability?</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            An immutable object is an object whose observable state cannot be changed after it has been created.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Java String objects are immutable.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Once a String object has been created, its character sequence cannot be modified.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            This means String methods that appear to change text actually return a new String.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>10.2 Example of String immutability</span>
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public class StringImmutability {

    public static void main(String[] args) {

        String name = "Java";

        name.concat(" Programming");

        System.out.println(name);
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
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Java`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Why?
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            The <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">concat()</code> method creates and returns a new String value. The returned value was not assigned to <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">name</code>.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Correct:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`String name = "Java";

name = name.concat(" Programming");

System.out.println(name);`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Output:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Java Programming`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            The variable now refers to the resulting String.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            The original String object itself was not modified.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>10.3 Benefits of String immutability</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            String immutability offers several useful properties.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-white">1. Safer sharing</strong>
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Multiple parts of a program can refer to the same String without one part modifying its contents unexpectedly.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-white">2. Predictability</strong>
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Once a String is created, its contents remain constant.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-white">3. String pool support</strong>
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Interned strings can be shared safely because their contents cannot change.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-white">4. Security</strong>
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Immutable strings reduce certain classes of accidental state changes when text is shared between components.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-white">5. Hash-based collections</strong>
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            String hash codes remain stable because the contents remain unchanged. This is useful when strings are used as hash-map keys.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>10.4 Repeated concatenation</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Consider:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`String result = "";

for (int i = 1; i <= 5; i++) {

    result = result + i;
}

System.out.println(result);`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Output:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`12345`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Because Strings are immutable, repeated concatenation can create intermediate String objects.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            For extensive repeated modification, StringBuilder is usually a better choice.
          </p>
        </div>
      </section>

      {/* SECTION 11: 11. Java String Pool */}
      <section id="section-11" className="bg-slate-900/80 rounded-2xl border border-slate-800 p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-500/15 text-orange-300 text-xs font-bold uppercase tracking-wider font-mono">
            Part 5 · JVM String Constant Pool
          </span>
          <span className="text-xs font-mono text-slate-400">Section 11</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          11. Java String Pool
        </h2>
        <div className="space-y-4 text-slate-300 leading-relaxed text-sm sm:text-base">
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>11.1 What is the String pool?</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            The String pool is a special internal pool maintained by the String class for interned strings.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            String literals and compile-time constant String expressions are interned by Java.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            The purpose is to allow equal String values to share a common reference when they are interned.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Example:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public class StringPoolExample {

    public static void main(String[] args) {

        String a = "Java";

        String b = "Java";

        System.out.println(a == b);

        System.out.println(a.equals(b));
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
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`true
true`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            In this example, both variables refer to the same interned String object.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>11.2 String literal versus new String()</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Consider:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public class StringPoolComparison {

    public static void main(String[] args) {

        String a = "Java";

        String b = new String("Java");

        System.out.println(a == b);

        System.out.println(a.equals(b));
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
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`false
true`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Explanation:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-slate-300 text-sm sm:text-base my-3 leading-relaxed">
            <li><code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">a</code> refers to the interned literal.</li>
            <li><code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">b</code> is a separate String object created using the constructor.</li>
            <li>Both objects contain the same characters.</li>
            <li><code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">==</code> compares references.</li>
            <li><code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">equals()</code> compares String contents.</li>
          </ul>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>11.3 Understanding intern()</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            The <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">intern()</code> method returns the canonical pooled String for a particular sequence of characters.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Example:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public class InternExample {

    public static void main(String[] args) {

        String a = new String("Java");

        String b = a.intern();

        String c = "Java";

        System.out.println(b == c);
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
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`true`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Both references point to the canonical interned String.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>11.4 Difference between == and equals()</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            This is a particularly important topic for interviews and Java programming.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-white">The <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">==</code> operator</strong>
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            For reference variables, it checks whether the references refer to the same object.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-white">The <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">equals()</code> method</strong>
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            For String objects, it checks whether the character sequences are equal.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Example:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`String first = new String("Hello");

String second = new String("Hello");

System.out.println(first == second);

System.out.println(first.equals(second));`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Output:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`false
true`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Remember:
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Use <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">equals()</code> when comparing String contents.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Use <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">==</code> when reference identity is specifically what you need to compare.
          </p>
        </div>
      </section>

      {/* SECTION 12: 12. String Manipulation */}
      <section id="section-12" className="bg-slate-900/80 rounded-2xl border border-slate-800 p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-500/15 text-orange-300 text-xs font-bold uppercase tracking-wider font-mono">
            Part 6 · Standard String Methods API
          </span>
          <span className="text-xs font-mono text-slate-400">Section 12</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          12. String Manipulation
        </h2>
        <div className="space-y-4 text-slate-300 leading-relaxed text-sm sm:text-base">
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Java's String class provides many useful methods for processing and transforming text.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>12.1 length()</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Returns the number of UTF-16 code units.
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`String text = "Programming";

System.out.println(text.length());`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Output:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`11`}</code>
            </pre>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>12.2 charAt()</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Returns the UTF-16 <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">char</code> value at a specified index.
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`String text = "Java";

System.out.println(text.charAt(1));`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Output:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`a`}</code>
            </pre>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>12.3 substring()</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Extracts part of a String.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Syntax:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`substring(beginIndex, endIndex)`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            The starting index is included, while the ending index is excluded.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Example:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`String text = "Programming";

System.out.println(text.substring(0, 4));`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Output:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Prog`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Another form:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`text.substring(4);`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            This returns the portion from index 4 to the end.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>12.4 equals()</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Compares String contents.
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`String a = "Java";

String b = "Java";

System.out.println(a.equals(b));`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Output:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`true`}</code>
            </pre>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>12.5 equalsIgnoreCase()</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Compares content without distinguishing letter case.
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`String a = "JAVA";

String b = "java";

System.out.println(a.equalsIgnoreCase(b));`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Output:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`true`}</code>
            </pre>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>12.6 compareTo()</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Compares two Strings lexicographically according to their String comparison rules.
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`String a = "Apple";

String b = "Banana";

System.out.println(a.compareTo(b));`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            The result is negative because <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">"Apple"</code> comes before <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">"Banana"</code> in this ordering.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Do not assume the method returns only -1, 0, or 1. It returns a negative integer, zero, or a positive integer.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>12.7 contains()</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Checks whether a String contains a particular character sequence.
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`String text = "Java Programming";

System.out.println(text.contains("Programming"));`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Output:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`true`}</code>
            </pre>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>12.8 startsWith() and endsWith()</span>
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`String file = "report.pdf";

System.out.println(file.startsWith("report"));

System.out.println(file.endsWith(".pdf"));`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Output:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`true
true`}</code>
            </pre>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>12.9 indexOf()</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Returns the index of the first occurrence of a character or substring.
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`String text = "Programming";

System.out.println(text.indexOf('g'));`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Output:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`3`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            If the requested value is not found, it returns <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">-1</code>.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>12.10 lastIndexOf()</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Returns the index of the final occurrence.
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`String text = "Programming";

System.out.println(text.lastIndexOf('g'));`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Output:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`10`}</code>
            </pre>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>12.11 toUpperCase() and toLowerCase()</span>
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`String text = "Java Programming";

System.out.println(text.toUpperCase());

System.out.println(text.toLowerCase());`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Output:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`JAVA PROGRAMMING
java programming`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            For consistent language-independent comparisons, consider using an explicit locale where appropriate.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>12.12 trim() and strip()</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Both methods remove surrounding whitespace, but they differ in their definitions of whitespace.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">trim()</code> uses the traditional character range at or below U+0020.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">strip()</code> uses the Unicode-aware whitespace definition exposed through <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">Character.isWhitespace()</code>.
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`String text = "   Java   ";

System.out.println(text.trim());

System.out.println(text.strip());`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Output:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Java
Java`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">strip()</code> is available from Java 11.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>12.13 replace()</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Replaces matching character sequences.
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`String text = "I like Python";

String result = text.replace("Python", "Java");

System.out.println(result);`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Output:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`I like Java`}</code>
            </pre>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>12.14 split()</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Splits a String using a regular expression and returns an array of Strings.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Example:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public class SplitExample {

    public static void main(String[] args) {

        String text = "Java,Python,C++";

        String[] languages = text.split(",");

        for (String language : languages) {

            System.out.println(language);
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
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Java
Python
C++`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Important: <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">split()</code> takes a regular expression, not a plain literal delimiter in every case.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            For example, a period has special meaning in regular expressions. To split on an actual period, escape it:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`String[] parts = "file.txt".split("\\\\.");`}</code>
            </pre>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>12.15 String.join()</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Joins values using a chosen delimiter.
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`String result = String.join(
        " - ",
        "Java",
        "Python",
        "C++"
);

System.out.println(result);`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Output:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Java - Python - C++`}</code>
            </pre>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>12.16 Common String methods summary</span>
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
                  <td className="px-4 py-2.5 text-slate-300"><code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">length()</code></td>
                  <td className="px-4 py-2.5 text-slate-300">Gets String length</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300"><code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">charAt()</code></td>
                  <td className="px-4 py-2.5 text-slate-300">Gets a character at an index</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300"><code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">substring()</code></td>
                  <td className="px-4 py-2.5 text-slate-300">Extracts a portion</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300"><code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">equals()</code></td>
                  <td className="px-4 py-2.5 text-slate-300">Compares contents</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300"><code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">equalsIgnoreCase()</code></td>
                  <td className="px-4 py-2.5 text-slate-300">Compares ignoring case</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300"><code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">compareTo()</code></td>
                  <td className="px-4 py-2.5 text-slate-300">Lexicographically compares Strings</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300"><code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">contains()</code></td>
                  <td className="px-4 py-2.5 text-slate-300">Checks for a substring</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300"><code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">startsWith()</code></td>
                  <td className="px-4 py-2.5 text-slate-300">Checks the prefix</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300"><code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">endsWith()</code></td>
                  <td className="px-4 py-2.5 text-slate-300">Checks the suffix</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300"><code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">indexOf()</code></td>
                  <td className="px-4 py-2.5 text-slate-300">Finds the first occurrence</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300"><code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">lastIndexOf()</code></td>
                  <td className="px-4 py-2.5 text-slate-300">Finds the last occurrence</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300"><code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">toUpperCase()</code></td>
                  <td className="px-4 py-2.5 text-slate-300">Converts case</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300"><code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">toLowerCase()</code></td>
                  <td className="px-4 py-2.5 text-slate-300">Converts case</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300"><code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">trim()</code></td>
                  <td className="px-4 py-2.5 text-slate-300">Removes traditional surrounding whitespace</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300"><code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">strip()</code></td>
                  <td className="px-4 py-2.5 text-slate-300">Removes Unicode-defined surrounding whitespace</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300"><code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">replace()</code></td>
                  <td className="px-4 py-2.5 text-slate-300">Replaces matching content</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300"><code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">split()</code></td>
                  <td className="px-4 py-2.5 text-slate-300">Splits using a regular expression</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300"><code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">concat()</code></td>
                  <td className="px-4 py-2.5 text-slate-300">Concatenates Strings</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300"><code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">isEmpty()</code></td>
                  <td className="px-4 py-2.5 text-slate-300">Checks whether length is zero</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300"><code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">isBlank()</code></td>
                  <td className="px-4 py-2.5 text-slate-300">Checks whether a String is empty or consists of whitespace</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300"><code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">repeat()</code></td>
                  <td className="px-4 py-2.5 text-slate-300">Repeats a String</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* SECTION 13: 13. StringBuilder and StringBuffer */}
      <section id="section-13" className="bg-slate-900/80 rounded-2xl border border-slate-800 p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-500/15 text-orange-300 text-xs font-bold uppercase tracking-wider font-mono">
            Part 6 · Mutable Character Sequences
          </span>
          <span className="text-xs font-mono text-slate-400">Section 13</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          13. StringBuilder and StringBuffer
        </h2>
        <div className="space-y-4 text-slate-300 leading-relaxed text-sm sm:text-base">
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>13.1 Why do we need StringBuilder?</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Strings are immutable.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            When a program needs to repeatedly modify text, creating a new String for every modification can involve unnecessary object creation and copying.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Java provides mutable character-sequence classes.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            The two important classes are:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-slate-300 text-sm sm:text-base my-3 leading-relaxed">
            <li><code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">StringBuilder</code></li>
            <li><code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">StringBuffer</code></li>
          </ul>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>13.2 What is StringBuilder?</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">StringBuilder</code> is a mutable sequence of characters.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Unlike String, its contents can be modified.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Example:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public class StringBuilderExample {

    public static void main(String[] args) {

        StringBuilder builder = new StringBuilder("Java");

        builder.append(" Programming");

        System.out.println(builder);
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
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Java Programming`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            The same StringBuilder object is modified.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>13.3 Important StringBuilder methods</span>
          </h3>
          <h4 className="text-base sm:text-lg font-bold text-white mt-4 mb-2 flex items-center gap-2">
            <span>append()</span>
          </h4>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Adds characters to the end.
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`StringBuilder sb = new StringBuilder("Hello");

sb.append(" Java");`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Result:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Hello Java`}</code>
            </pre>
          </div>
          <h4 className="text-base sm:text-lg font-bold text-white mt-4 mb-2 flex items-center gap-2">
            <span>insert()</span>
          </h4>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Inserts text at a specified index.
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`StringBuilder sb = new StringBuilder("Java");

sb.insert(0, "Learn ");

System.out.println(sb);`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Output:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Learn Java`}</code>
            </pre>
          </div>
          <h4 className="text-base sm:text-lg font-bold text-white mt-4 mb-2 flex items-center gap-2">
            <span>delete()</span>
          </h4>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Removes characters between two indexes, with the ending index excluded.
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`StringBuilder sb = new StringBuilder("Hello Java");

sb.delete(0, 6);

System.out.println(sb);`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Output:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Java`}</code>
            </pre>
          </div>
          <h4 className="text-base sm:text-lg font-bold text-white mt-4 mb-2 flex items-center gap-2">
            <span>deleteCharAt()</span>
          </h4>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Removes a character at an index.
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`StringBuilder sb = new StringBuilder("Java");

sb.deleteCharAt(1);

System.out.println(sb);`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Output:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Jva`}</code>
            </pre>
          </div>
          <h4 className="text-base sm:text-lg font-bold text-white mt-4 mb-2 flex items-center gap-2">
            <span>replace()</span>
          </h4>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Replaces the specified character range.
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`StringBuilder sb = new StringBuilder("Hello World");

sb.replace(6, 11, "Java");

System.out.println(sb);`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Output:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Hello Java`}</code>
            </pre>
          </div>
          <h4 className="text-base sm:text-lg font-bold text-white mt-4 mb-2 flex items-center gap-2">
            <span>reverse()</span>
          </h4>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Reverses the character sequence.
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`StringBuilder sb = new StringBuilder("Java");

sb.reverse();

System.out.println(sb);`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Output:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`avaJ`}</code>
            </pre>
          </div>
          <h4 className="text-base sm:text-lg font-bold text-white mt-4 mb-2 flex items-center gap-2">
            <span>setCharAt()</span>
          </h4>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Replaces the character at a particular index.
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`StringBuilder sb = new StringBuilder("Java");

sb.setCharAt(0, 'L');

System.out.println(sb);`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Output:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Lava`}</code>
            </pre>
          </div>
          <h4 className="text-base sm:text-lg font-bold text-white mt-4 mb-2 flex items-center gap-2">
            <span>capacity()</span>
          </h4>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Returns the current capacity of the builder.
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`StringBuilder sb = new StringBuilder();

System.out.println(sb.capacity());`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            A newly constructed empty StringBuilder has an initial capacity of 16.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Capacity represents available internal storage, not the number of characters currently present.
          </p>
          <h4 className="text-base sm:text-lg font-bold text-white mt-4 mb-2 flex items-center gap-2">
            <span>toString()</span>
          </h4>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Converts the builder's current contents into a String.
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`StringBuilder sb = new StringBuilder("Java");

String result = sb.toString();`}</code>
            </pre>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>13.3 StringBuilder practical example</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Problem:
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Build a String containing numbers from 1 to 10.
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public class BuilderPerformanceExample {

    public static void main(String[] args) {

        StringBuilder builder = new StringBuilder();

        for (int i = 1; i <= 10; i++) {

            builder.append(i).append(" ");
        }

        System.out.println(builder.toString());
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
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`1 2 3 4 5 6 7 8 9 10`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            StringBuilder is generally preferable for repeated String construction within a single thread.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>13.4 What is StringBuffer?</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">StringBuffer</code> is also a mutable sequence of characters.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Its methods are synchronized where necessary, making individual operations on an instance safe for concurrent access.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Example:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public class StringBufferExample {

    public static void main(String[] args) {

        StringBuffer buffer = new StringBuffer("Java");

        buffer.append(" Programming");

        System.out.println(buffer);
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
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Java Programming`}</code>
            </pre>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>13.5 String versus StringBuilder versus StringBuffer</span>
          </h3>
          <div className="overflow-x-auto my-4 rounded-xl border border-slate-800 shadow-2xs">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-white border-b border-slate-800 font-semibold">
                <tr>
                  <th className="px-4 py-3">Feature</th>
                  <th className="px-4 py-3">String</th>
                  <th className="px-4 py-3">StringBuilder</th>
                  <th className="px-4 py-3">StringBuffer</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">Mutable</td>
                  <td className="px-4 py-2.5 text-slate-300">No</td>
                  <td className="px-4 py-2.5 text-slate-300">Yes</td>
                  <td className="px-4 py-2.5 text-slate-300">Yes</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">Content modification</td>
                  <td className="px-4 py-2.5 text-slate-300">Creates resulting String</td>
                  <td className="px-4 py-2.5 text-slate-300">Modifies the builder</td>
                  <td className="px-4 py-2.5 text-slate-300">Modifies the buffer</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">Synchronization</td>
                  <td className="px-4 py-2.5 text-slate-300">Not applicable to mutable operations</td>
                  <td className="px-4 py-2.5 text-slate-300">Not synchronized</td>
                  <td className="px-4 py-2.5 text-slate-300">Synchronized methods where required</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">Typical use</td>
                  <td className="px-4 py-2.5 text-slate-300">Fixed textual values</td>
                  <td className="px-4 py-2.5 text-slate-300">Repeated single-threaded modification</td>
                  <td className="px-4 py-2.5 text-slate-300">Shared mutable character sequence requiring synchronization</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">Performance</td>
                  <td className="px-4 py-2.5 text-slate-300">Repeated concatenation can be costly</td>
                  <td className="px-4 py-2.5 text-slate-300">Generally preferred for single-threaded construction</td>
                  <td className="px-4 py-2.5 text-slate-300">Synchronization can add overhead</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            A synchronized StringBuffer operation does not automatically make a larger multi-step application workflow atomic. Appropriate coordination may still be necessary when multiple operations need to be treated as one logical transaction.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-white">Practical guideline:</strong>
          </p>
          <ul className="list-disc pl-5 space-y-2 text-slate-300 text-sm sm:text-base my-3 leading-relaxed">
            <li>Use String for ordinary text values.</li>
            <li>Use StringBuilder for repeated String modification in normal single-threaded code.</li>
            <li>Use StringBuffer when synchronized access to a shared mutable buffer is needed.</li>
          </ul>
        </div>
      </section>

      {/* SECTION 14: 14. Character Processing */}
      <section id="section-14" className="bg-slate-900/80 rounded-2xl border border-slate-800 p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-500/15 text-orange-300 text-xs font-bold uppercase tracking-wider font-mono">
            Part 7 · Character Classification & Unicode
          </span>
          <span className="text-xs font-mono text-slate-400">Section 14</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          14. Character Processing
        </h2>
        <div className="space-y-4 text-slate-300 leading-relaxed text-sm sm:text-base">
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>14.1 What is character processing?</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Character processing means examining and manipulating individual characters within a sequence of text.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            It is important in:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-slate-300 text-sm sm:text-base my-3 leading-relaxed">
            <li>Text analytics.</li>
            <li>Search algorithms.</li>
            <li>Password validation.</li>
            <li>Input sanitization.</li>
            <li>Data cleaning.</li>
            <li>Tokenization.</li>
            <li>Pattern matching.</li>
            <li>Basic natural language processing.</li>
          </ul>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Java provides the <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">char</code> primitive type and the <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">Character</code> utility class.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>14.2 Accessing characters</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Example:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public class CharacterAccess {

    public static void main(String[] args) {

        String text = "JAVA";

        for (int i = 0; i < text.length(); i++) {

            char character = text.charAt(i);

            System.out.println(character);
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
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`J
A
V
A`}</code>
            </pre>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>14.3 Character classification</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Java provides useful methods through <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">Character</code>.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Examples:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Character.isLetter('A');

Character.isDigit('5');

Character.isWhitespace(' ');

Character.isUpperCase('J');

Character.isLowerCase('a');`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Each method returns a boolean.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>14.4 Count vowels and consonants</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Problem:
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Given a String, count its vowels and consonants.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Java:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public class VowelCounter {

    public static void main(String[] args) {

        String text = "Java Programming";

        int vowels = 0;

        int consonants = 0;

        for (int i = 0; i < text.length(); i++) {

            char ch = Character.toLowerCase(
                    text.charAt(i)
            );

            if (ch >= 'a' && ch <= 'z') {

                if (ch == 'a' ||
                    ch == 'e' ||
                    ch == 'i' ||
                    ch == 'o' ||
                    ch == 'u') {

                    vowels++;

                } else {

                    consonants++;
                }
            }
        }

        System.out.println("Vowels: " + vowels);

        System.out.println("Consonants: " + consonants);
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
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Vowels: 5
Consonants: 10`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            This particular example counts English alphabetic characters only. It does not classify every character in all writing systems.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>14.5 Count uppercase, lowercase, digits, and spaces</span>
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public class CharacterAnalyzer {

    public static void main(String[] args) {

        String text = "Java 17 Programming";

        int upper = 0;

        int lower = 0;

        int digits = 0;

        int spaces = 0;

        for (int i = 0; i < text.length(); i++) {

            char ch = text.charAt(i);

            if (Character.isUpperCase(ch)) {

                upper++;

            } else if (Character.isLowerCase(ch)) {

                lower++;

            } else if (Character.isDigit(ch)) {

                digits++;

            } else if (Character.isWhitespace(ch)) {

                spaces++;
            }
        }

        System.out.println("Uppercase: " + upper);

        System.out.println("Lowercase: " + lower);

        System.out.println("Digits: " + digits);

        System.out.println("Spaces: " + spaces);
    }
}`}</code>
            </pre>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>14.6 Unicode and character representation</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Java's <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">char</code> type represents a 16-bit UTF-16 code unit.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            This distinction is important because not every Unicode character can be represented using only one <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">char</code>.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Some Unicode characters, including many emoji, require two UTF-16 code units.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Therefore:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`String text = "A😀B";

System.out.println(text.length());`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            The result is:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`4`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            There are three Unicode code points:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-slate-300 text-sm sm:text-base my-3 leading-relaxed">
            <li>A</li>
            <li>😀</li>
            <li>B</li>
          </ul>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            But four UTF-16 code units.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            For code-point-based processing, Java provides methods such as:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-slate-300 text-sm sm:text-base my-3 leading-relaxed">
            <li><code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">codePointAt()</code></li>
            <li><code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">codePointCount()</code></li>
            <li><code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">codePoints()</code></li>
          </ul>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Example:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public class UnicodeExample {

    public static void main(String[] args) {

        String text = "A😀B";

        System.out.println(text.length());

        System.out.println(
                text.codePointCount(0, text.length())
        );
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
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`4
3`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            This matters when building software that processes international text.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            For many introductory DSA problems, characters are restricted to English letters, digits, or ASCII. Students should understand the assumption before using a fixed-size character-counting array.
          </p>
        </div>
      </section>

      {/* SECTION 15: 15. Frequency Counting */}
      <section id="section-15" className="bg-slate-900/80 rounded-2xl border border-slate-800 p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-500/15 text-orange-300 text-xs font-bold uppercase tracking-wider font-mono">
            Part 7 · Frequency Counting Techniques
          </span>
          <span className="text-xs font-mono text-slate-400">Section 15</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          15. Frequency Counting
        </h2>
        <div className="space-y-4 text-slate-300 leading-relaxed text-sm sm:text-base">
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>15.1 What is frequency counting?</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Frequency counting is the process of determining how many times each value or character appears in a dataset.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            It is an important technique in DSA.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Applications include:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-slate-300 text-sm sm:text-base my-3 leading-relaxed">
            <li>Counting repeated numbers.</li>
            <li>Finding duplicate values.</li>
            <li>Finding the most frequent element.</li>
            <li>Character analysis.</li>
            <li>Anagram checking.</li>
            <li>Statistical data processing.</li>
          </ul>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>15.2 Frequency counting in an integer array</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Input:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`[1, 2, 2, 3, 1, 4, 2]`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Frequency:
          </p>
          <div className="overflow-x-auto my-4 rounded-xl border border-slate-800 shadow-2xs">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-white border-b border-slate-800 font-semibold">
                <tr>
                  <th className="px-4 py-3">Number</th>
                  <th className="px-4 py-3">Frequency</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">1</td>
                  <td className="px-4 py-2.5 text-slate-300">2</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">2</td>
                  <td className="px-4 py-2.5 text-slate-300">3</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">3</td>
                  <td className="px-4 py-2.5 text-slate-300">1</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">4</td>
                  <td className="px-4 py-2.5 text-slate-300">1</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Java using a frequency array for a restricted non-negative range:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public class ArrayFrequency {

    public static void main(String[] args) {

        int[] numbers = {1, 2, 2, 3, 1, 4, 2};

        int[] frequency = new int[5];

        for (int number : numbers) {

            frequency[number]++;
        }

        for (int i = 0; i < frequency.length; i++) {

            if (frequency[i] > 0) {

                System.out.println(
                        i + " appears " +
                        frequency[i] + " times"
                );
            }
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
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`1 appears 2 times
2 appears 3 times
3 appears 1 times
4 appears 1 times`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            This implementation assumes every number is in the range 0 through 4.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            For arbitrary integer values, use an appropriate map-based representation or coordinate-compression technique.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>15.3 Character frequency using an array</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            For English lowercase letters, a frequency array of size 26 is sufficient.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Index calculation:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`'a' → 0
'b' → 1
'c' → 2
...
'z' → 25`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Java:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public class CharacterFrequency {

    public static void main(String[] args) {

        String text = "banana";

        int[] frequency = new int[26];

        for (int i = 0; i < text.length(); i++) {

            char ch = text.charAt(i);

            if (ch >= 'a' && ch <= 'z') {

                frequency[ch - 'a']++;
            }
        }

        for (int i = 0; i < 26; i++) {

            if (frequency[i] > 0) {

                char ch = (char) ('a' + i);

                System.out.println(
                        ch + " : " + frequency[i]
                );
            }
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
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`a : 3
b : 1
n : 2`}</code>
            </pre>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>15.4 Find the first non-repeating character</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Problem:
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Find the first character that appears exactly once.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Example:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Input: swiss

Output: w`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Explanation:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-slate-300 text-sm sm:text-base my-3 leading-relaxed">
            <li><code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">s</code> appears three times.</li>
            <li><code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">w</code> appears once.</li>
            <li><code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">i</code> appears once.</li>
          </ul>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            The first non-repeating character is <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">w</code>.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Java using two passes for lowercase English letters:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public class FirstNonRepeating {

    public static void main(String[] args) {

        String text = "swiss";

        int[] frequency = new int[26];

        for (int i = 0; i < text.length(); i++) {

            char ch = text.charAt(i);

            frequency[ch - 'a']++;
        }

        for (int i = 0; i < text.length(); i++) {

            char ch = text.charAt(i);

            if (frequency[ch - 'a'] == 1) {

                System.out.println(ch);

                return;
            }
        }

        System.out.println("No non-repeating character");
    }
}`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            The code assumes all input characters are lowercase English letters.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Time complexity: O(n).
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Space complexity: O(1), because the frequency array always has 26 entries.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>15.5 Frequency counting for general Unicode code points</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            A fixed 26-element array is not suitable for arbitrary Unicode data.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            A map can be used instead:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`import java.util.HashMap;
import java.util.Map;

public class UnicodeFrequency {

    public static void main(String[] args) {

        String text = "banana";

        Map<Integer, Integer> frequency = new HashMap<>();

        text.codePoints().forEach(codePoint -> {

            frequency.merge(codePoint, 1, Integer::sum);
        });

        for (Map.Entry<Integer, Integer> entry :
                frequency.entrySet()) {

            System.out.println(
                    new String(Character.toChars(entry.getKey()))
                    + " : " + entry.getValue()
            );
        }
    }
}`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            This version counts Unicode code points rather than individual UTF-16 code units.
          </p>
        </div>
      </section>

      {/* SECTION 16: 16. String Problem-Solving Techniques */}
      <section id="section-16" className="bg-slate-900/80 rounded-2xl border border-slate-800 p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-500/15 text-orange-300 text-xs font-bold uppercase tracking-wider font-mono">
            Part 8 · Classic String Algorithms
          </span>
          <span className="text-xs font-mono text-slate-400">Section 16</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          16. String Problem-Solving Techniques
        </h2>
        <div className="space-y-4 text-slate-300 leading-relaxed text-sm sm:text-base">
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>16.1 Reverse a String</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Problem:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Input: Java

Output: avaJ`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Method 1: Using a loop.
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public class ReverseString {

    public static void main(String[] args) {

        String text = "Java";

        StringBuilder reversed = new StringBuilder();

        for (int i = text.length() - 1; i >= 0; i--) {

            reversed.append(text.charAt(i));
        }

        System.out.println(reversed);
    }
}`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Method 2: Using StringBuilder.
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`String text = "Java";

String reversed = new StringBuilder(text)
        .reverse()
        .toString();`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            The built-in <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">reverse()</code> method reverses the UTF-16 code-unit sequence while preserving surrogate pairs as pairs. It does not perform full grapheme-cluster reversal for every complex written character.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>16.2 Check whether a String is a palindrome</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            A palindrome reads the same forward and backward under the comparison rules being used.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Examples:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`madam
level
radar`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Java:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public class StringPalindrome {

    static boolean isPalindrome(String text) {

        int left = 0;

        int right = text.length() - 1;

        while (left < right) {

            if (text.charAt(left) != text.charAt(right)) {

                return false;
            }

            left++;

            right--;
        }

        return true;
    }

    public static void main(String[] args) {

        System.out.println(isPalindrome("madam"));

        System.out.println(isPalindrome("hello"));
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
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`true
false`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            This version performs a case-sensitive comparison and includes spaces and punctuation.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            For a case-insensitive comparison that ignores non-alphanumeric characters, first normalize the input according to the intended requirements.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>16.3 Check whether two Strings are anagrams</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Two strings are anagrams when they contain the same character frequencies, ignoring order.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Example:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`listen
silent`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Both contain the same letters with the same frequencies.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            A basic lowercase-English-letter solution:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public class AnagramChecker {

    static boolean areAnagrams(String a, String b) {

        if (a.length() != b.length()) {
            return false;
        }

        int[] frequency = new int[26];

        for (int i = 0; i < a.length(); i++) {

            frequency[a.charAt(i) - 'a']++;

            frequency[b.charAt(i) - 'a']--;
        }

        for (count : frequency) {

            if (count != 0) {
                return false;
            }
        }

        return true;
    }

    public static void main(String[] args) {

        System.out.println(
                areAnagrams("listen", "silent")
        );
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
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`true`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            This implementation assumes lowercase English letters and does not ignore spaces or punctuation.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>16.4 Count words in a sentence</span>
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public class WordCounter {

    public static void main(String[] args) {

        String sentence = "Java is a programming language";

        String cleaned = sentence.strip();

        if (cleaned.isEmpty()) {

            System.out.println("Word count: 0");

        } else {

            String[] words = cleaned.split("\\\\s+");

            System.out.println(
                    "Word count: " + words.length
            );
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
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Word count: 5`}</code>
            </pre>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>16.5 Remove duplicate characters</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Problem:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Input: programming

Output: progamin`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            The following implementation preserves the first occurrence of each character and assumes ordinary UTF-16 character processing.
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public class RemoveDuplicates {

    public static void main(String[] args) {

        String text = "programming";

        boolean[] seen = new boolean[65536];

        StringBuilder result = new StringBuilder();

        for (int i = 0; i < text.length(); i++) {

            char ch = text.charAt(i);

            if (!seen[ch]) {

                seen[ch] = true;

                result.append(ch);
            }
        }

        System.out.println(result);
    }
}`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            For Unicode code-point-aware processing, use a suitable set of integer code points rather than treating each <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">char</code> as a complete character.
          </p>
        </div>
      </section>

      {/* SECTION 17: 17. Basic Mathematics for DSA */}
      <section id="section-17" className="bg-slate-900/80 rounded-2xl border border-slate-800 p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-500/15 text-orange-300 text-xs font-bold uppercase tracking-wider font-mono">
            Part 9 · Number Theory & Prime Sieves
          </span>
          <span className="text-xs font-mono text-slate-400">Section 17</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          17. Basic Mathematics for DSA
        </h2>
        <div className="space-y-4 text-slate-300 leading-relaxed text-sm sm:text-base">
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Mathematics is an important foundation for algorithm design.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Many DSA problems require number theory, divisibility, modular arithmetic, prime numbers, and integer manipulation.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Students should understand the mathematical logic behind these problems before memorizing implementations.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>17.1 Divisibility</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            An integer a is divisible by a non-zero integer b if dividing a by b leaves no remainder.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            In Java:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`a % b == 0`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Example:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`int a = 20;
int b = 5;

System.out.println(a % b == 0);`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Output:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`true`}</code>
            </pre>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>17.2 Factors</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            A factor of a number divides the number without leaving a remainder.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Factors of 12:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`1, 2, 3, 4, 6, 12`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Java:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public class FactorFinder {

    public static void main(String[] args) {

        int number = 12;

        for (int i = 1; i <= number; i++) {

            if (number % i == 0) {

                System.out.print(i + " ");
            }
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
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`1 2 3 4 6 12`}</code>
            </pre>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>17.3 Prime numbers</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            A prime number is a positive integer greater than 1 that has exactly two positive divisors:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-slate-300 text-sm sm:text-base my-3 leading-relaxed">
            <li>1.</li>
            <li>The number itself.</li>
          </ul>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Examples:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`2, 3, 5, 7, 11, 13, 17, 19`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            The smallest prime number is 2.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            It is also the only even prime number.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Composite numbers have more than two positive divisors.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Examples:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`4, 6, 8, 9, 10, 12`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            The number 1 is neither prime nor composite.
          </p>
          <h4 className="text-base sm:text-lg font-bold text-white mt-4 mb-2 flex items-center gap-2">
            <span>Basic prime-checking approach</span>
          </h4>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            A simple approach checks whether any number between 2 and n - 1 divides n.
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public class BasicPrimeChecker {

    public static void main(String[] args) {

        int number = 29;

        boolean prime = number > 1;

        for (int i = 2; i < number; i++) {

            if (number % i == 0) {

                prime = false;

                break;
            }
        }

        System.out.println(prime);
    }
}`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            This correctly handles positive input through its initial <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">number &gt; 1</code> check.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            However, it performs more work than necessary.
          </p>
          <h4 className="text-base sm:text-lg font-bold text-white mt-4 mb-2 flex items-center gap-2">
            <span>Optimized prime checking</span>
          </h4>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            If a number has a divisor larger than its square root, it must also have a corresponding divisor smaller than its square root.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Therefore, it is sufficient to test divisors up to the square root of n.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            The check can be written as:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`i <= number / i`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            This avoids potential integer overflow from evaluating <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">i * i</code>.
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public class OptimizedPrimeChecker {

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

        System.out.println(isPrime(29));

        System.out.println(isPrime(30));
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
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`true
false`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Time complexity: O(√n).
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Auxiliary space complexity: O(1).
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>17.4 Print prime numbers in a range</span>
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public class PrimeRange {

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

        int start = 10;

        int end = 50;

        for (int i = start; i <= end; i++) {

            if (isPrime(i)) {

                System.out.print(i + " ");
            }
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
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`11 13 17 19 23 29 31 37 41 43 47`}</code>
            </pre>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>17.5 Sieve of Eratosthenes</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            For generating many prime numbers up to a maximum limit, repeatedly testing each number independently is not always the most efficient approach.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            The Sieve of Eratosthenes is a classic algorithm for finding all primes up to a specified limit.
          </p>
          <h4 className="text-base sm:text-lg font-bold text-white mt-4 mb-2 flex items-center gap-2">
            <span>Algorithm</span>
          </h4>
          <ol className="list-decimal pl-5 space-y-2 text-slate-300 text-sm sm:text-base my-3 leading-relaxed">
            <li>Create a boolean array.</li>
            <li>Initially treat numbers from 2 onward as prime candidates.</li>
            <li>Start with the smallest unmarked prime.</li>
            <li>Mark its multiples as composite.</li>
            <li>Move to the next unmarked number.</li>
            <li>Continue until the relevant square-root limit is reached.</li>
            <li>The remaining unmarked numbers are prime.</li>
          </ol>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Example for 20:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Numbers:
2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20

Mark multiples of 2:
4 6 8 10 12 14 16 18 20

Mark multiples of 3:
9 15

Remaining primes:
2 3 5 7 11 13 17 19`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Java:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`import java.util.Arrays;

public class SieveOfEratosthenes {

    static void printPrimes(int limit) {

        if (limit < 2) {
            return;
        }

        boolean[] isPrime = new boolean[limit + 1];

        Arrays.fill(isPrime, true);

        isPrime[0] = false;

        isPrime[1] = false;

        for (int i = 2; i <= limit / i; i++) {

            if (isPrime[i]) {

                for (int j = i * i; j <= limit; j += i) {

                    isPrime[j] = false;
                }
            }
        }

        for (int i = 2; i <= limit; i++) {

            if (isPrime[i]) {

                System.out.print(i + " ");
            }
        }
    }

    public static void main(String[] args) {

        printPrimes(50);
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
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`2 3 5 7 11 13 17 19 23 29 31 37 41 43 47`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Time complexity: O(n log log n).
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Space complexity: O(n).
          </p>
        </div>
      </section>

      {/* SECTION 18: 18. Greatest Common Divisor (GCD) */}
      <section id="section-18" className="bg-slate-900/80 rounded-2xl border border-slate-800 p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-500/15 text-orange-300 text-xs font-bold uppercase tracking-wider font-mono">
            Part 9 · Euclidean GCD Algorithm
          </span>
          <span className="text-xs font-mono text-slate-400">Section 18</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          18. Greatest Common Divisor (GCD)
        </h2>
        <div className="space-y-4 text-slate-300 leading-relaxed text-sm sm:text-base">
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>18.1 What is GCD?</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            The Greatest Common Divisor is the largest positive integer that divides two or more integers without leaving a remainder.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Example:
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Find the GCD of 12 and 18.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Factors of 12:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`1, 2, 3, 4, 6, 12`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Factors of 18:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`1, 2, 3, 6, 9, 18`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Common factors:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`1, 2, 3, 6`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Greatest common factor:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`6`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Therefore:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`GCD(12, 18) = 6`}</code>
            </pre>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>18.2 Basic GCD algorithm</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            One simple method checks all possible common divisors.
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public class BasicGCD {

    public static void main(String[] args) {

        int a = 12;

        int b = 18;

        int gcd = 1;

        for (int i = 1; i <= Math.min(a, b); i++) {

            if (a % i == 0 && b % i == 0) {

                gcd = i;
            }
        }

        System.out.println(gcd);
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
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`6`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            This approach has O(min(a, b)) time complexity for positive inputs.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>18.3 Euclidean algorithm</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            The Euclidean algorithm is a more efficient method.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Mathematical identity:
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            \[
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            GCD(a,b)=GCD(b,a\bmod b)
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            \]
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            The process continues until the second number becomes zero.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            At that point, the first number is the GCD.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Example:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`GCD(48, 18)

48 % 18 = 12

18 % 12 = 6

12 % 6 = 0

GCD = 6`}</code>
            </pre>
          </div>
          <h4 className="text-base sm:text-lg font-bold text-white mt-4 mb-2 flex items-center gap-2">
            <span>Java implementation</span>
          </h4>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public class EuclideanGCD {

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

        System.out.println(gcd(48, 18));
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
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`6`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Time complexity: O(log(min(a, b))) for non-negative inputs, excluding the special handling of the minimum integer value.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Important edge case: <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">Math.abs(Integer.MIN_VALUE)</code> cannot be represented as a positive <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">int</code>. For robust handling over the complete <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">int</code> domain, promote inputs to <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">long</code> before taking absolute values.
          </p>
        </div>
      </section>

      {/* SECTION 19: 19. Least Common Multiple (LCM) */}
      <section id="section-19" className="bg-slate-900/80 rounded-2xl border border-slate-800 p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-500/15 text-orange-300 text-xs font-bold uppercase tracking-wider font-mono">
            Part 9 · LCM & Multiples
          </span>
          <span className="text-xs font-mono text-slate-400">Section 19</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          19. Least Common Multiple (LCM)
        </h2>
        <div className="space-y-4 text-slate-300 leading-relaxed text-sm sm:text-base">
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>19.1 What is LCM?</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            The Least Common Multiple is the smallest positive integer divisible by each of the given positive integers.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Example:
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Find the LCM of 4 and 6.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Multiples of 4:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`4, 8, 12, 16, 20, 24...`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Multiples of 6:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`6, 12, 18, 24, 30...`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            The first common positive multiple is 12.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Therefore:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`LCM(4, 6) = 12`}</code>
            </pre>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>19.2 Mathematical relationship between GCD and LCM</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            For positive integers a and b:
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            \[
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            GCD(a,b)\times LCM(a,b)=a\times b
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            \]
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Therefore:
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
            A safer evaluation order for integer implementations is:
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            \[
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            LCM(a,b)=\left|\frac&#123;a&#125;&#123;GCD(a,b)&#125;\times b\right|
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            \]
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Dividing before multiplying can reduce overflow risk.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>19.3 LCM implementation</span>
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public class LCMCalculator {

    static long gcd(long a, long b) {

        while (b != 0) {

            long remainder = a % b;

            a = b;

            b = remainder;
        }

        return a;
    }

    static long lcm(long a, long b) {

        if (a == 0 || b == 0) {
            return 0;
        }

        return Math.abs((a / gcd(a, b)) * b);
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
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`36`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            The implementation is intended for inputs whose absolute values and intermediate result are representable as <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">long</code>.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            For unrestricted large integers, use <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">BigInteger</code>.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>19.4 GCD versus LCM</span>
          </h3>
          <div className="overflow-x-auto my-4 rounded-xl border border-slate-800 shadow-2xs">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-white border-b border-slate-800 font-semibold">
                <tr>
                  <th className="px-4 py-3">GCD</th>
                  <th className="px-4 py-3">LCM</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">Greatest common divisor</td>
                  <td className="px-4 py-2.5 text-slate-300">Least common multiple</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">Largest shared divisor</td>
                  <td className="px-4 py-2.5 text-slate-300">Smallest shared positive multiple</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">Often useful in fraction simplification</td>
                  <td className="px-4 py-2.5 text-slate-300">Often useful in repeated schedules</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">Calculated efficiently using Euclid's algorithm</td>
                  <td className="px-4 py-2.5 text-slate-300">Commonly calculated using GCD</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* SECTION 20: 20. Modular Arithmetic */}
      <section id="section-20" className="bg-slate-900/80 rounded-2xl border border-slate-800 p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-500/15 text-orange-300 text-xs font-bold uppercase tracking-wider font-mono">
            Part 10 · Modular Arithmetic & Exponentiation
          </span>
          <span className="text-xs font-mono text-slate-400">Section 20</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          20. Modular Arithmetic
        </h2>
        <div className="space-y-4 text-slate-300 leading-relaxed text-sm sm:text-base">
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>20.1 What is modular arithmetic?</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Modular arithmetic is a system of arithmetic in which values are considered according to their remainders after division by a positive integer called the modulus.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            It is widely used in:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-slate-300 text-sm sm:text-base my-3 leading-relaxed">
            <li>Cryptography.</li>
            <li>Computer science algorithms.</li>
            <li>Hashing.</li>
            <li>Cyclic calculations.</li>
            <li>Number theory.</li>
            <li>Competitive programming.</li>
          </ul>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            The expression:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`a mod m`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            represents the remainder when a is divided by m under mathematical modulo conventions.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Example:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`17 mod 5 = 2`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Because:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`17 = 5 × 3 + 2`}</code>
            </pre>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>20.2 Java's remainder operator</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Java uses <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">%</code> as a remainder operator.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            For positive operands, it behaves as expected:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`System.out.println(17 % 5);`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Output:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`2`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            However, negative operands require care.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Example:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`System.out.println(-17 % 5);`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Output:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`-2`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Java's remainder can be negative because its result follows the sign of the dividend.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Mathematical modulo is commonly defined to produce a non-negative result when the modulus is positive.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Java provides:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Math.floorMod(-17, 5);`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Output:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`3`}</code>
            </pre>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>20.3 Modular addition</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            For modulus m:
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            \[
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            (a+b)\bmod m
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            \]
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            can be calculated by reducing the operands before or after addition, subject to avoiding integer overflow in the intermediate calculation.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Example:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`(15 + 12) mod 7

= 27 mod 7

= 6`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Java:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`int result = Math.floorMod(15 + 12, 7);`}</code>
            </pre>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>20.4 Modular subtraction</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Example:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`(8 - 13) mod 7

= -5 mod 7

= 2`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Java:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`int result = Math.floorMod(8 - 13, 7);`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Output:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`2`}</code>
            </pre>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>20.5 Modular multiplication</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Example:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`(6 × 8) mod 5

= 48 mod 5

= 3`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Java:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`int result = Math.floorMod(6 * 8, 5);`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            For large operands, multiplication may overflow before the remainder operation is performed. Using <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">long</code> or arbitrary-precision integers may be necessary.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>20.6 Important properties of modular arithmetic</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            For a positive modulus m:
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-white">Addition:</strong>
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            \[
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            (a+b)\bmod m
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            =
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            ((a\bmod m)+(b\bmod m))\bmod m
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            \]
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-white">Subtraction:</strong>
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            \[
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            (a-b)\bmod m
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            =
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            ((a\bmod m)-(b\bmod m))\bmod m
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            \]
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-white">Multiplication:</strong>
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            \[
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            (a\times b)\bmod m
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            =
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            ((a\bmod m)\times(b\bmod m))\bmod m
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            \]
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            These properties help simplify calculations.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>20.7 Modular exponentiation</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Modular exponentiation calculates:
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            \[
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            a^b \bmod m
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            \]
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            without calculating the entire potentially enormous value of \(a^b\).
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            A common technique is binary exponentiation.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Instead of multiplying a by itself b times, the algorithm repeatedly squares the base and processes exponent bits.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Java implementation:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public class ModularPower {

    static long power(long base, long exponent, long mod) {

        if (mod <= 0) {
            throw new IllegalArgumentException(
                    "Modulus must be positive"
            );
        }

        if (exponent < 0) {
            throw new IllegalArgumentException(
                    "Exponent must be non-negative"
            );
        }

        long result = 1 % mod;

        base = Math.floorMod(base, mod);

        while (exponent > 0) {

            if ((exponent & 1) == 1) {

                result = (result * base) % mod;
            }

            base = (base * base) % mod;

            exponent >>= 1;
        }

        return result;
    }

    public static void main(String[] args) {

        System.out.println(power(2, 10, 1000));
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
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`24`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Because:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`2^10 = 1024

1024 mod 1000 = 24`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            This implementation is suitable when the intermediate products fit in <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">long</code>. For larger values, overflow-safe modular multiplication or <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">BigInteger</code> should be used.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Time complexity: O(log exponent).
          </p>
        </div>
      </section>

      {/* SECTION 21: 21. Number Reversal and Palindrome Problems */}
      <section id="section-21" className="bg-slate-900/80 rounded-2xl border border-slate-800 p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-500/15 text-orange-300 text-xs font-bold uppercase tracking-wider font-mono">
            Part 10 · Digit Reversal & Palindromes
          </span>
          <span className="text-xs font-mono text-slate-400">Section 21</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          21. Number Reversal and Palindrome Problems
        </h2>
        <div className="space-y-4 text-slate-300 leading-relaxed text-sm sm:text-base">
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            These are classic programming problems because they combine integer arithmetic, loops, conditions, and careful handling of edge cases.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>21.1 Reverse a number</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Consider:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Input: 1234

Output: 4321`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            The algorithm extracts digits from right to left.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Mathematical operations:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-slate-300 text-sm sm:text-base my-3 leading-relaxed">
            <li><code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">number % 10</code> extracts the final digit.</li>
            <li><code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">number / 10</code> removes the final digit using integer division.</li>
            <li><code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">reversed * 10 + digit</code> appends the extracted digit to the reversed number.</li>
          </ul>
          <h4 className="text-base sm:text-lg font-bold text-white mt-4 mb-2 flex items-center gap-2">
            <span>Step-by-step trace</span>
          </h4>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Input:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`1234`}</code>
            </pre>
          </div>
          <div className="overflow-x-auto my-4 rounded-xl border border-slate-800 shadow-2xs">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-white border-b border-slate-800 font-semibold">
                <tr>
                  <th className="px-4 py-3">Step</th>
                  <th className="px-4 py-3">Number</th>
                  <th className="px-4 py-3">Extracted digit</th>
                  <th className="px-4 py-3">Reversed</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">1</td>
                  <td className="px-4 py-2.5 text-slate-300">1234</td>
                  <td className="px-4 py-2.5 text-slate-300">4</td>
                  <td className="px-4 py-2.5 text-slate-300">4</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">2</td>
                  <td className="px-4 py-2.5 text-slate-300">123</td>
                  <td className="px-4 py-2.5 text-slate-300">3</td>
                  <td className="px-4 py-2.5 text-slate-300">43</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">3</td>
                  <td className="px-4 py-2.5 text-slate-300">12</td>
                  <td className="px-4 py-2.5 text-slate-300">2</td>
                  <td className="px-4 py-2.5 text-slate-300">432</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">4</td>
                  <td className="px-4 py-2.5 text-slate-300">1</td>
                  <td className="px-4 py-2.5 text-slate-300">1</td>
                  <td className="px-4 py-2.5 text-slate-300">4321</td>
                </tr>
              </tbody>
            </table>
          </div>
          <h4 className="text-base sm:text-lg font-bold text-white mt-4 mb-2 flex items-center gap-2">
            <span>Java implementation</span>
          </h4>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public class NumberReversal {

    public static void main(String[] args) {

        int number = 1234;

        int reversed = 0;

        while (number > 0) {

            int digit = number % 10;

            reversed = reversed * 10 + digit;

            number /= 10;
        }

        System.out.println(reversed);
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
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`4321`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            For production-level code, consider negative values and integer overflow.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>21.2 Palindrome number</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            A palindrome number remains the same when its digits are reversed.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Examples:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`121
1331
12321`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Non-palindrome:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`1234`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Algorithm:
          </p>
          <ol className="list-decimal pl-5 space-y-2 text-slate-300 text-sm sm:text-base my-3 leading-relaxed">
            <li>Store the original value.</li>
            <li>Reverse the digits.</li>
            <li>Compare the original and reversed values.</li>
            <li>Return true if they are equal.</li>
          </ol>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Java:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public class NumberPalindrome {

    static boolean isPalindrome(int number) {

        if (number < 0) {
            return false;
        }

        int original = number;

        long reversed = 0;

        while (number > 0) {

            int digit = number % 10;

            reversed = reversed * 10 + digit;

            number /= 10;
        }

        return original == reversed;
    }

    public static void main(String[] args) {

        System.out.println(isPalindrome(121));

        System.out.println(isPalindrome(1234));
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
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`true
false`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            The implementation uses <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">long</code> for the reversed value to reduce overflow risk when processing an <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">int</code>.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>21.3 Optimized palindrome checking</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            A complete reversal is not always necessary.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            We can reverse only half of the number.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            This reduces the number of iterations.
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public class OptimizedPalindrome {

    static boolean isPalindrome(int number) {

        if (number < 0 ||
            (number != 0 && number % 10 == 0)) {

            return false;
        }

        int reversedHalf = 0;

        while (number > reversedHalf) {

            reversedHalf =
                    reversedHalf * 10 + number % 10;

            number /= 10;
        }

        return number == reversedHalf ||
               number == reversedHalf / 10;
    }

    public static void main(String[] args) {

        System.out.println(isPalindrome(1221));

        System.out.println(isPalindrome(12321));
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
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`true
true`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Why do we divide the reversed half by 10 in the second comparison?
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            For odd-length numbers, the middle digit does not need to match a corresponding digit. It is removed from the reversed half before comparison.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            This technique is frequently encountered in DSA problem-solving.
          </p>
        </div>
      </section>

      {/* SECTION 22: 22. Advanced Array Problem-Solving Foundations */}
      <section id="section-22" className="bg-slate-900/80 rounded-2xl border border-slate-800 p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-500/15 text-orange-300 text-xs font-bold uppercase tracking-wider font-mono">
            Part 11 · Two-Pointers & Prefix Sums
          </span>
          <span className="text-xs font-mono text-slate-400">Section 22</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          22. Advanced Array Problem-Solving Foundations
        </h2>
        <div className="space-y-4 text-slate-300 leading-relaxed text-sm sm:text-base">
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            The following techniques are essential for progressing toward interview-level array problems.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>22.1 Two-pointer technique</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            The two-pointer technique uses two indexes to process an array efficiently.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Example:
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Reverse an array in place.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Initial array:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`[10, 20, 30, 40, 50]`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Place one pointer at the beginning and another at the end.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Swap their values and move the pointers toward the center.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Java:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`import java.util.Arrays;

public class ReverseArray {

    static void reverse(int[] numbers) {

        int left = 0;

        int right = numbers.length - 1;

        while (left < right) {

            int temp = numbers[left];

            numbers[left] = numbers[right];

            numbers[right] = temp;

            left++;

            right--;
        }
    }

    public static void main(String[] args) {

        int[] numbers = {10, 20, 30, 40, 50};

        reverse(numbers);

        System.out.println(Arrays.toString(numbers));
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
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`[50, 40, 30, 20, 10]`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Time complexity: O(n).
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Auxiliary space complexity: O(1).
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>22.2 Find the second-largest distinct element</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Problem:
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Given:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`[10, 40, 20, 40, 30]`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Find the second-largest distinct value.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Answer:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`30`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Java:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public class SecondLargest {

    static int secondLargest(int[] numbers) {

        Integer largest = null;

        Integer second = null;

        for (int number : numbers) {

            if (largest == null || number > largest) {

                second = largest;

                largest = number;

            } else if (
                    number != largest &&
                    (second == null || number > second)
            ) {

                second = number;
            }
        }

        if (second == null) {

            throw new IllegalArgumentException(
                    "No second distinct largest value"
            );
        }

        return second;
    }

    public static void main(String[] args) {

        int[] numbers = {10, 40, 20, 40, 30};

        System.out.println(secondLargest(numbers));
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
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`30`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Time complexity: O(n).
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Auxiliary space complexity: O(1).
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>22.3 Remove duplicates from a sorted array</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Given a sorted array:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`[1, 1, 2, 2, 3, 4, 4]`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            We want the unique values at the beginning of the array:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`[1, 2, 3, 4]`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            A two-pointer approach can accomplish this without constructing a second full array.
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`import java.util.Arrays;

public class RemoveSortedDuplicates {

    static int removeDuplicates(int[] numbers) {

        if (numbers.length == 0) {
            return 0;
        }

        int uniqueCount = 1;

        for (int i = 1; i < numbers.length; i++) {

            if (numbers[i] != numbers[uniqueCount - 1]) {

                numbers[uniqueCount] = numbers[i];

                uniqueCount++;
            }
        }

        return uniqueCount;
    }

    public static void main(String[] args) {

        int[] numbers = {1, 1, 2, 2, 3, 4, 4};

        int size = removeDuplicates(numbers);

        System.out.println(
                Arrays.toString(
                        Arrays.copyOf(numbers, size)
                )
        );
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
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`[1, 2, 3, 4]`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            The algorithm assumes ascending sorted input.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Time complexity: O(n).
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Auxiliary space complexity: O(1).
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>22.4 Prefix sums</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Prefix sums are a technique used to answer repeated range-sum queries efficiently.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Given:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`[2, 4, 6, 8, 10]`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Construct a prefix sum array:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`[2, 6, 12, 20, 30]`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Each position stores the sum of all elements up to that position.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            For a zero-based inclusive range from index l to r:
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            \[
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            RangeSum(l,r)=prefix[r]-
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            \begin&#123;cases&#125;
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            prefix[l-1] &amp; l&gt;0\\
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            0 &amp; l=0
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            \end&#123;cases&#125;
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
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public class PrefixSum {

    public static void main(String[] args) {

        int[] numbers = {2, 4, 6, 8, 10};

        int[] prefix = new int[numbers.length];

        prefix[0] = numbers[0];

        for (int i = 1; i < numbers.length; i++) {

            prefix[i] = prefix[i - 1] + numbers[i];
        }

        int left = 1;

        int right = 3;

        int sum = prefix[right] -
                (left > 0 ? prefix[left - 1] : 0);

        System.out.println(sum);
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
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`18`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            The range includes 4, 6, and 8.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Construction requires O(n) time. Each range-sum query then takes O(1) time.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Prefix sums are one of the most useful foundations for array-based interview problems.
          </p>
        </div>
      </section>

      {/* SECTION 23: 23. Algorithm Complexity Revision */}
      <section id="section-23" className="bg-slate-900/80 rounded-2xl border border-slate-800 p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-500/15 text-orange-300 text-xs font-bold uppercase tracking-wider font-mono">
            Part 12 · Complexity Reference Tables
          </span>
          <span className="text-xs font-mono text-slate-400">Section 23</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          23. Algorithm Complexity Revision
        </h2>
        <div className="space-y-4 text-slate-300 leading-relaxed text-sm sm:text-base">
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Complexity analysis helps programmers evaluate how an algorithm behaves as the input size increases.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>23.1 Array operations</span>
          </h3>
          <div className="overflow-x-auto my-4 rounded-xl border border-slate-800 shadow-2xs">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-white border-b border-slate-800 font-semibold">
                <tr>
                  <th className="px-4 py-3">Operation</th>
                  <th className="px-4 py-3">Typical time complexity</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">Read <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">array[i]</code></td>
                  <td className="px-4 py-2.5 text-slate-300">O(1)</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">Update <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">array[i]</code></td>
                  <td className="px-4 py-2.5 text-slate-300">O(1)</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">Traverse array</td>
                  <td className="px-4 py-2.5 text-slate-300">O(n)</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">Linear search</td>
                  <td className="px-4 py-2.5 text-slate-300">O(n)</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">Binary search on sorted data</td>
                  <td className="px-4 py-2.5 text-slate-300">O(log n)</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">Reverse in place</td>
                  <td className="px-4 py-2.5 text-slate-300">O(n)</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">Insert at beginning</td>
                  <td className="px-4 py-2.5 text-slate-300">O(n)</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">Delete at beginning</td>
                  <td className="px-4 py-2.5 text-slate-300">O(n)</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">Copy array</td>
                  <td className="px-4 py-2.5 text-slate-300">O(n)</td>
                </tr>
              </tbody>
            </table>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>23.2 String operations</span>
          </h3>
          <div className="overflow-x-auto my-4 rounded-xl border border-slate-800 shadow-2xs">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-white border-b border-slate-800 font-semibold">
                <tr>
                  <th className="px-4 py-3">Operation</th>
                  <th className="px-4 py-3">Typical complexity</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300"><code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">length()</code></td>
                  <td className="px-4 py-2.5 text-slate-300">O(1)</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300"><code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">charAt(index)</code></td>
                  <td className="px-4 py-2.5 text-slate-300">O(1)</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">String equality</td>
                  <td className="px-4 py-2.5 text-slate-300">O(n) worst case</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">String concatenation</td>
                  <td className="px-4 py-2.5 text-slate-300">Depends on operand lengths</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300"><code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">substring()</code></td>
                  <td className="px-4 py-2.5 text-slate-300">Typically proportional to resulting content in current implementations</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">Search for a character sequence</td>
                  <td className="px-4 py-2.5 text-slate-300">Depends on algorithm and input</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">StringBuilder append</td>
                  <td className="px-4 py-2.5 text-slate-300">Amortized O(1) for appending a character, excluding resizing and input conversion costs</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">StringBuilder reverse</td>
                  <td className="px-4 py-2.5 text-slate-300">O(n)</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">Character traversal</td>
                  <td className="px-4 py-2.5 text-slate-300">O(n)</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            These are useful algorithmic models rather than guarantees of every internal JVM implementation.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>23.3 Matrix operations</span>
          </h3>
          <div className="overflow-x-auto my-4 rounded-xl border border-slate-800 shadow-2xs">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-white border-b border-slate-800 font-semibold">
                <tr>
                  <th className="px-4 py-3">Operation</th>
                  <th className="px-4 py-3">Time complexity</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">Traverse matrix</td>
                  <td className="px-4 py-2.5 text-slate-300">O(rc)</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">Matrix addition</td>
                  <td className="px-4 py-2.5 text-slate-300">O(rc)</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">Matrix transpose</td>
                  <td className="px-4 py-2.5 text-slate-300">O(rc)</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">Main diagonal sum of n × n matrix</td>
                  <td className="px-4 py-2.5 text-slate-300">O(n)</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">Standard multiplication of two n × n matrices</td>
                  <td className="px-4 py-2.5 text-slate-300">O(n³)</td>
                </tr>
              </tbody>
            </table>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>23.4 Space complexity</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Space complexity measures the additional memory required by an algorithm as its input grows.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Examples:
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-white">O(1) additional space</strong>
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Reversing an array using two pointers and one temporary variable.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-white">O(n) additional space</strong>
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Creating a copy of an array of length n.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-white">O(n) additional space</strong>
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Building a prefix sum array of length n.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-white">O(n²) additional space</strong>
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Creating an n × n result matrix.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Understanding time and space complexity prepares students for later DSA modules.
          </p>
        </div>
      </section>

      {/* SECTION 24: 24. Practical Programming Examples (5 Programs) */}
      <section id="section-24" className="bg-slate-900/80 rounded-2xl border border-slate-800 p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-500/15 text-orange-300 text-xs font-bold uppercase tracking-wider font-mono">
            Part 13 · 5 Worked Code Examples
          </span>
          <span className="text-xs font-mono text-slate-400">Section 24</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          24. Practical Programming Examples (5 Programs)
        </h2>
        <div className="space-y-4 text-slate-300 leading-relaxed text-sm sm:text-base">
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>Program 1 — Find the sum and average of an array</span>
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public class SumAndAverage {

    public static void main(String[] args) {

        int[] values = {12, 15, 18, 20, 25};

        int sum = 0;

        for (int value : values) {

            sum += value;
        }

        double average = (double) sum / values.length;

        System.out.println("Total: " + sum);

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
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Total: 90
Average: 18.0`}</code>
            </pre>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>Program 2 — Find duplicate elements</span>
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public class DuplicateFinder {

    public static void main(String[] args) {

        int[] numbers = {1, 2, 3, 2, 4, 1, 5};

        for (int i = 0; i < numbers.length; i++) {

            for (int j = i + 1; j < numbers.length; j++) {

                if (numbers[i] == numbers[j]) {

                    System.out.println(numbers[i]);

                    break;
                }
            }
        }
    }
}`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            This simple approach compares pairs and has O(n²) worst-case time complexity. It may print the same duplicated value more than once when the value appears in more than two positions.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>Program 3 — Reverse a String using StringBuilder</span>
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public class StringReverse {

    public static void main(String[] args) {

        String text = "Computer Science";

        String reversed = new StringBuilder(text)
                .reverse()
                .toString();

        System.out.println(reversed);
    }
}`}</code>
            </pre>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>Program 4 — Find the largest element in each matrix row</span>
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public class RowMaximum {

    public static void main(String[] args) {

        int[][] matrix = {
            {10, 20, 30},
            {45, 15, 25},
            {5, 60, 40}
        };

        for (int i = 0; i < matrix.length; i++) {

            int maximum = matrix[i][0];

            for (int j = 1; j < matrix[i].length; j++) {

                if (matrix[i][j] > maximum) {

                    maximum = matrix[i][j];
                }
            }

            System.out.println(
                    "Row " + i + " maximum: " + maximum
            );
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
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Row 0 maximum: 30
Row 1 maximum: 45
Row 2 maximum: 60`}</code>
            </pre>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>Program 5 — Count vowels using Character processing</span>
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public class VowelAnalysis {

    static int countVowels(String text) {

        int count = 0;

        for (int i = 0; i < text.length(); i++) {

            char ch = Character.toLowerCase(
                    text.charAt(i)
            );

            if ("aeiou".indexOf(ch) >= 0) {

                count++;
            }
        }

        return count;
    }

    public static void main(String[] args) {

        String text = "Data Structures and Algorithms";

        System.out.println(countVowels(text));
    }
}`}</code>
            </pre>
          </div>
        </div>
      </section>

      {/* SECTION 25: 25. Practical Laboratory Exercises (8 Labs) */}
      <section id="section-25" className="bg-slate-900/80 rounded-2xl border border-slate-800 p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-500/15 text-orange-300 text-xs font-bold uppercase tracking-wider font-mono">
            Part 14 · 8 Hands-on Laboratory Exercises
          </span>
          <span className="text-xs font-mono text-slate-400">Section 25</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          25. Practical Laboratory Exercises (8 Labs)
        </h2>
        <div className="space-y-4 text-slate-300 leading-relaxed text-sm sm:text-base">
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Students should complete these laboratories using an IDE or terminal.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>Lab 1 — Array fundamentals</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-white">Objective:</strong> Understand array declaration, initialization, and traversal.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Requirements:
          </p>
          <ol className="list-decimal pl-5 space-y-2 text-slate-300 text-sm sm:text-base my-3 leading-relaxed">
            <li>Accept the number of students.</li>
            <li>Create an integer array for student marks.</li>
            <li>Accept each student's marks.</li>
            <li>Display all marks.</li>
            <li>Calculate the total.</li>
            <li>Calculate the average.</li>
            <li>Find the highest mark.</li>
            <li>Find the lowest mark.</li>
          </ol>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Handle empty or invalid input appropriately.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>Lab 2 — Array insertion and deletion</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-white">Objective:</strong> Practice element shifting.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Requirements:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-slate-300 text-sm sm:text-base my-3 leading-relaxed">
            <li>Create an array with extra capacity.</li>
            <li>Insert an element at a selected position.</li>
            <li>Delete an element at a selected position.</li>
            <li>Display the resulting logical elements.</li>
            <li>Validate indexes and available capacity.</li>
          </ul>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>Lab 3 — Searching algorithms</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-white">Objective:</strong> Implement linear and binary search.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Requirements:
          </p>
          <ol className="list-decimal pl-5 space-y-2 text-slate-300 text-sm sm:text-base my-3 leading-relaxed">
            <li>Perform linear search on an unsorted array.</li>
            <li>Sort an array.</li>
            <li>Implement binary search.</li>
            <li>Display the returned index.</li>
            <li>Handle missing values.</li>
            <li>Compare the number of comparisons for selected test cases.</li>
          </ol>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>Lab 4 — Array analytics</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-white">Objective:</strong> Develop array-processing logic.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Implement methods for:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-slate-300 text-sm sm:text-base my-3 leading-relaxed">
            <li>Maximum and minimum.</li>
            <li>Second-largest distinct element.</li>
            <li>Sum and average.</li>
            <li>Duplicate detection.</li>
            <li>Frequency counting.</li>
            <li>Array reversal.</li>
            <li>Removing duplicates from sorted arrays.</li>
          </ul>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>Lab 5 — String analyzer</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-white">Objective:</strong> Develop String-processing abilities.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Accept a sentence and calculate:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-slate-300 text-sm sm:text-base my-3 leading-relaxed">
            <li>Total length.</li>
            <li>Number of words.</li>
            <li>Number of vowels.</li>
            <li>Number of consonants.</li>
            <li>Number of uppercase characters.</li>
            <li>Number of lowercase characters.</li>
            <li>Number of digits.</li>
            <li>Number of spaces.</li>
            <li>Reversed text.</li>
          </ul>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Document whether your implementation handles only ASCII/English text or full Unicode code points.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>Lab 6 — StringBuilder laboratory</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-white">Objective:</strong> Understand mutable string operations.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Implement programs using:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-slate-300 text-sm sm:text-base my-3 leading-relaxed">
            <li><code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">append()</code></li>
            <li><code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">insert()</code></li>
            <li><code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">delete()</code></li>
            <li><code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">replace()</code></li>
            <li><code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">reverse()</code></li>
            <li><code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">setCharAt()</code></li>
            <li><code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">capacity()</code></li>
          </ul>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Compare repeated String concatenation with StringBuilder construction using increasing input sizes. Use a proper benchmarking framework for reliable performance measurements rather than relying on a single execution time.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>Lab 7 — Mathematical algorithms</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-white">Objective:</strong> Develop mathematical problem-solving skills.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Implement methods for:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-slate-300 text-sm sm:text-base my-3 leading-relaxed">
            <li>Prime checking.</li>
            <li>Prime number generation.</li>
            <li>GCD.</li>
            <li>LCM.</li>
            <li>Digit sum.</li>
            <li>Number reversal.</li>
            <li>Palindrome checking.</li>
            <li>Armstrong checking.</li>
            <li>Modular exponentiation.</li>
          </ul>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>Lab 8 — Matrix processing</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-white">Objective:</strong> Work with two-dimensional arrays.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Create programs to:
          </p>
          <ol className="list-decimal pl-5 space-y-2 text-slate-300 text-sm sm:text-base my-3 leading-relaxed">
            <li>Add two matrices.</li>
            <li>Subtract two matrices.</li>
            <li>Find a matrix transpose.</li>
            <li>Multiply two matrices.</li>
            <li>Calculate diagonal sums.</li>
            <li>Calculate row and column sums.</li>
            <li>Find the maximum and minimum matrix values.</li>
            <li>Search for a value in a matrix.</li>
          </ol>
        </div>
      </section>

      {/* SECTION 26: 26. Independent Programming Assignments (10 Tasks) */}
      <section id="section-26" className="bg-slate-900/80 rounded-2xl border border-slate-800 p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-500/15 text-orange-300 text-xs font-bold uppercase tracking-wider font-mono">
            Part 15 · 10 Independent Assignments
          </span>
          <span className="text-xs font-mono text-slate-400">Section 26</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          26. Independent Programming Assignments (10 Tasks)
        </h2>
        <div className="space-y-4 text-slate-300 leading-relaxed text-sm sm:text-base">
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            These assignments are designed to test independent application of the concepts.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>Assignment 1 — Product inventory analyzer</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Create a program that stores product prices and quantities using arrays.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Calculate:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-slate-300 text-sm sm:text-base my-3 leading-relaxed">
            <li>Total number of products.</li>
            <li>Total inventory value.</li>
            <li>Highest-priced product.</li>
            <li>Lowest-priced product.</li>
            <li>Average product price.</li>
            <li>Products whose quantity is below a specified threshold.</li>
          </ul>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Requirements:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-slate-300 text-sm sm:text-base my-3 leading-relaxed">
            <li>Use separate methods for calculations.</li>
            <li>Accept dynamic user input.</li>
            <li>Validate non-negative prices and quantities.</li>
            <li>Display a formatted inventory report.</li>
          </ul>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>Assignment 2 — Array rotation</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Given:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`[1, 2, 3, 4, 5]`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Rotate the array to the right by two positions.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Expected output:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`[4, 5, 1, 2, 3]`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Implement:
          </p>
          <ol className="list-decimal pl-5 space-y-2 text-slate-300 text-sm sm:text-base my-3 leading-relaxed">
            <li>A simple extra-array solution.</li>
            <li>An in-place reversal-based solution.</li>
          </ol>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Compare their time and space complexity.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>Assignment 3 — Second-largest and second-smallest</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Given an integer array, find:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-slate-300 text-sm sm:text-base my-3 leading-relaxed">
            <li>Largest distinct value.</li>
            <li>Second-largest distinct value.</li>
            <li>Smallest distinct value.</li>
            <li>Second-smallest distinct value.</li>
          </ul>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Handle cases where there are not enough distinct values.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>Assignment 4 — Anagram analyzer</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Accept two Strings and determine whether they are anagrams.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Test cases:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`listen / silent → true
hello / world → false
triangle / integral → true`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Extend the solution to handle uppercase letters and spaces according to clearly defined comparison rules.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>Assignment 5 — Character frequency report</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Accept a sentence and display the frequency of each character.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Example:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Input: banana

Output:
b = 1
a = 3
n = 2`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Preserve the order of first occurrence in your report.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>Assignment 6 — Prime number toolkit</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Develop a program supporting:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-slate-300 text-sm sm:text-base my-3 leading-relaxed">
            <li>Check whether a number is prime.</li>
            <li>Print all primes up to n.</li>
            <li>Find the prime factors of a number.</li>
            <li>Find the number of divisors.</li>
            <li>Calculate the sum of prime numbers in a range.</li>
          </ul>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>Assignment 7 — Matrix calculator</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Create a menu-driven matrix application supporting:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-slate-300 text-sm sm:text-base my-3 leading-relaxed">
            <li>Matrix addition.</li>
            <li>Matrix subtraction.</li>
            <li>Matrix multiplication.</li>
            <li>Matrix transpose.</li>
            <li>Diagonal sums.</li>
            <li>Row sums.</li>
            <li>Column sums.</li>
          </ul>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Validate matrix dimensions before attempting each operation.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>Assignment 8 — Text normalization and palindrome analyzer</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Create a program that checks whether a sentence is a palindrome while ignoring:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-slate-300 text-sm sm:text-base my-3 leading-relaxed">
            <li>Letter case.</li>
            <li>Spaces.</li>
            <li>Common punctuation.</li>
          </ul>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            For example:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`A man, a plan, a canal: Panama`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Expected result:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Palindrome`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Define the normalization rules clearly and consider Unicode limitations.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>Assignment 9 — Range sum query</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Given an integer array, answer multiple range-sum queries using prefix sums.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Example:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Array: [2, 4, 6, 8, 10]

Query:
Index 1 to 3

Answer:
18`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Create the prefix sum only once, then answer several queries.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>Assignment 10 — Matrix diagonal and boundary analyzer</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Accept an n × n matrix and calculate:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-slate-300 text-sm sm:text-base my-3 leading-relaxed">
            <li>Main diagonal sum.</li>
            <li>Secondary diagonal sum.</li>
            <li>Boundary element sum.</li>
            <li>Center element for odd dimensions.</li>
            <li>Maximum and minimum values.</li>
          </ul>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Be careful not to count corner elements multiple times in the boundary sum.
          </p>
        </div>
      </section>

      {/* SECTION 27: 27. Assessment and Review Questions */}
      <section id="section-27" className="bg-slate-900/80 rounded-2xl border border-slate-800 p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-500/15 text-orange-300 text-xs font-bold uppercase tracking-wider font-mono">
            Part 16 · 20 MCQs & Practice Questions
          </span>
          <span className="text-xs font-mono text-slate-400">Section 27</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          27. Assessment and Review Questions
        </h2>
        <div className="space-y-4 text-slate-300 leading-relaxed text-sm sm:text-base">
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>Part A — Multiple-choice questions</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-white">1. What is an array in Java?</strong>
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            A. A collection that automatically grows in size
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            B. A fixed-length object containing elements of one component type
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            C. A method that stores multiple values
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            D. A primitive data type
          </p>
          <div className="mt-4 mb-2 p-3 rounded-lg bg-orange-500/15/70 border border-orange-500/30/80 font-semibold text-white text-sm sm:text-base">
            <strong className="font-semibold text-white">Correct answer:</strong> B
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-white">2. What is the first valid index of a Java array?</strong>
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            A. -1
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            B. 0
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            C. 1
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            D. Depends on the array size
          </p>
          <div className="mt-4 mb-2 p-3 rounded-lg bg-orange-500/15/70 border border-orange-500/30/80 font-semibold text-white text-sm sm:text-base">
            <strong className="font-semibold text-white">Correct answer:</strong> B
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-white">3. How do you obtain an array's length?</strong>
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            A. <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">array.length()</code>
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            B. <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">array.size()</code>
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            C. <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">array.length</code>
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            D. <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">array.count()</code>
          </p>
          <div className="mt-4 mb-2 p-3 rounded-lg bg-orange-500/15/70 border border-orange-500/30/80 font-semibold text-white text-sm sm:text-base">
            <strong className="font-semibold text-white">Correct answer:</strong> C
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-white">4. Which operation usually takes O(1) time for an array?</strong>
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            A. Full traversal
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            B. Linear search
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            C. Indexed access
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            D. Copying the complete array
          </p>
          <div className="mt-4 mb-2 p-3 rounded-lg bg-orange-500/15/70 border border-orange-500/30/80 font-semibold text-white text-sm sm:text-base">
            <strong className="font-semibold text-white">Correct answer:</strong> C
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-white">5. Which searching algorithm requires sorted input?</strong>
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            A. Linear search
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            B. Binary search
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            C. Sequential search
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            D. Unordered search
          </p>
          <div className="mt-4 mb-2 p-3 rounded-lg bg-orange-500/15/70 border border-orange-500/30/80 font-semibold text-white text-sm sm:text-base">
            <strong className="font-semibold text-white">Correct answer:</strong> B
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-white">6. What does assigning one array variable to another do?</strong>
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            A. Automatically creates a deep copy
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            B. Copies all primitive elements to a different object
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            C. Copies the reference value
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            D. Deletes the first array
          </p>
          <div className="mt-4 mb-2 p-3 rounded-lg bg-orange-500/15/70 border border-orange-500/30/80 font-semibold text-white text-sm sm:text-base">
            <strong className="font-semibold text-white">Correct answer:</strong> C
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-white">7. What happens when an invalid array index is accessed?</strong>
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            A. The array automatically expands
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            B. An ArrayIndexOutOfBoundsException occurs
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            C. Java returns zero
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            D. The operation is ignored
          </p>
          <div className="mt-4 mb-2 p-3 rounded-lg bg-orange-500/15/70 border border-orange-500/30/80 font-semibold text-white text-sm sm:text-base">
            <strong className="font-semibold text-white">Correct answer:</strong> B
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-white">8. Which statement about Java's two-dimensional arrays is correct?</strong>
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            A. Every two-dimensional array must be rectangular
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            B. They are arrays whose elements can reference other arrays
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            C. They are primitive values
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            D. They cannot be traversed using nested loops
          </p>
          <div className="mt-4 mb-2 p-3 rounded-lg bg-orange-500/15/70 border border-orange-500/30/80 font-semibold text-white text-sm sm:text-base">
            <strong className="font-semibold text-white">Correct answer:</strong> B
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-white">9. Why are String objects immutable?</strong>
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            A. Their contents can never be accessed
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            B. Their character sequence cannot be changed after construction
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            C. They cannot be assigned to variables
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            D. They cannot be compared
          </p>
          <div className="mt-4 mb-2 p-3 rounded-lg bg-orange-500/15/70 border border-orange-500/30/80 font-semibold text-white text-sm sm:text-base">
            <strong className="font-semibold text-white">Correct answer:</strong> B
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-white">10. What does <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">equals()</code> do when used on String objects?</strong>
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            A. Checks reference identity
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            B. Compares String content
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            C. Deletes the String
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            D. Converts the String to uppercase
          </p>
          <div className="mt-4 mb-2 p-3 rounded-lg bg-orange-500/15/70 border border-orange-500/30/80 font-semibold text-white text-sm sm:text-base">
            <strong className="font-semibold text-white">Correct answer:</strong> B
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-white">11. Which class is generally preferred for repeated String construction in single-threaded code?</strong>
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            A. String
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            B. StringBuilder
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            C. StringBuffer
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            D. Scanner
          </p>
          <div className="mt-4 mb-2 p-3 rounded-lg bg-orange-500/15/70 border border-orange-500/30/80 font-semibold text-white text-sm sm:text-base">
            <strong className="font-semibold text-white">Correct answer:</strong> B
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-white">12. Which class provides synchronized methods for mutable character-sequence operations?</strong>
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            A. String
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            B. StringBuilder
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            C. StringBuffer
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            D. Character
          </p>
          <div className="mt-4 mb-2 p-3 rounded-lg bg-orange-500/15/70 border border-orange-500/30/80 font-semibold text-white text-sm sm:text-base">
            <strong className="font-semibold text-white">Correct answer:</strong> C
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-white">13. What does <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">String.indexOf()</code> return if the target is absent?</strong>
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            A. 0
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            B. 1
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            C. -1
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            D. null
          </p>
          <div className="mt-4 mb-2 p-3 rounded-lg bg-orange-500/15/70 border border-orange-500/30/80 font-semibold text-white text-sm sm:text-base">
            <strong className="font-semibold text-white">Correct answer:</strong> C
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-white">14. What is the usual time complexity of linear search?</strong>
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
            <strong className="font-semibold text-white">Correct answer:</strong> C
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-white">15. What is the optimized trial-division complexity of checking whether a number is prime?</strong>
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            A. O(n²)
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            B. O(√n)
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            C. O(log n)
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            D. O(1)
          </p>
          <div className="mt-4 mb-2 p-3 rounded-lg bg-orange-500/15/70 border border-orange-500/30/80 font-semibold text-white text-sm sm:text-base">
            <strong className="font-semibold text-white">Correct answer:</strong> B
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-white">16. What is the GCD of 12 and 18?</strong>
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            A. 2
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            B. 3
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            C. 6
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            D. 36
          </p>
          <div className="mt-4 mb-2 p-3 rounded-lg bg-orange-500/15/70 border border-orange-500/30/80 font-semibold text-white text-sm sm:text-base">
            <strong className="font-semibold text-white">Correct answer:</strong> C
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-white">17. What is the LCM of 4 and 6?</strong>
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            A. 4
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            B. 6
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            C. 10
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            D. 12
          </p>
          <div className="mt-4 mb-2 p-3 rounded-lg bg-orange-500/15/70 border border-orange-500/30/80 font-semibold text-white text-sm sm:text-base">
            <strong className="font-semibold text-white">Correct answer:</strong> D
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-white">18. What is the result of <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">Math.floorMod(-17, 5)</code>?</strong>
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            A. -2
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            B. -3
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            C. 2
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            D. 3
          </p>
          <div className="mt-4 mb-2 p-3 rounded-lg bg-orange-500/15/70 border border-orange-500/30/80 font-semibold text-white text-sm sm:text-base">
            <strong className="font-semibold text-white">Correct answer:</strong> D
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-white">19. Which structure is useful for storing character frequencies for lowercase English letters?</strong>
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            A. int array of length 10
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            B. int array of length 26
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            C. boolean array of length 2
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            D. double array of length 5
          </p>
          <div className="mt-4 mb-2 p-3 rounded-lg bg-orange-500/15/70 border border-orange-500/30/80 font-semibold text-white text-sm sm:text-base">
            <strong className="font-semibold text-white">Correct answer:</strong> B
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-white">20. What is the time complexity of traversing every element of an r × c matrix?</strong>
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            A. O(r + c)
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            B. O(r × c)
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            C. O(log r)
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            D. O(1)
          </p>
          <div className="mt-4 mb-2 p-3 rounded-lg bg-orange-500/15/70 border border-orange-500/30/80 font-semibold text-white text-sm sm:text-base">
            <strong className="font-semibold text-white">Correct answer:</strong> B
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>Part B — Short-answer questions</span>
          </h3>
          <ol className="list-decimal pl-5 space-y-2 text-slate-300 text-sm sm:text-base my-3 leading-relaxed">
            <li>Define an array.</li>
            <li>Explain zero-based indexing.</li>
            <li>Differentiate between array declaration and initialization.</li>
            <li>What is the difference between array length and String length?</li>
            <li>Explain array traversal.</li>
            <li>Differentiate between standard and enhanced for loops.</li>
            <li>Explain the array insertion process.</li>
            <li>Explain the array deletion process.</li>
            <li>What is linear search?</li>
            <li>Explain binary search.</li>
            <li>Why must an array be sorted for binary search?</li>
            <li>Explain array references and aliasing.</li>
            <li>Differentiate between shallow copying and independent object copying.</li>
            <li>What are jagged arrays?</li>
            <li>Explain String immutability.</li>
            <li>What is the String pool?</li>
            <li>Differentiate between <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">==</code> and <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">equals()</code>.</li>
            <li>What is the purpose of <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">intern()</code>?</li>
            <li>Explain the difference between StringBuilder and StringBuffer.</li>
            <li>Explain Unicode code points and UTF-16 code units.</li>
            <li>What is character frequency counting?</li>
            <li>Define an anagram.</li>
            <li>Define a prime number.</li>
            <li>Explain the Sieve of Eratosthenes.</li>
            <li>Explain the Euclidean algorithm.</li>
            <li>Define GCD and LCM.</li>
            <li>What is modular arithmetic?</li>
            <li>Differentiate between Java remainder and mathematical modulo.</li>
            <li>Explain the two-pointer technique.</li>
            <li>What are prefix sums?</li>
            <li>Explain matrix transposition.</li>
            <li>What are the dimension requirements for matrix multiplication?</li>
            <li>Explain time complexity and space complexity.</li>
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
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public class OutputOne {

    public static void main(String[] args) {

        int[] numbers = {10, 20, 30, 40};

        System.out.println(numbers[2]);

        System.out.println(numbers.length);
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
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`30
4`}</code>
            </pre>
          </div>
          <h4 className="text-base sm:text-lg font-bold text-white mt-4 mb-2 flex items-center gap-2">
            <span>Question 2</span>
          </h4>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public class OutputTwo {

    public static void main(String[] args) {

        int[] a = {1, 2, 3};

        int[] b = a;

        b[1] = 100;

        System.out.println(a[1]);
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
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`100`}</code>
            </pre>
          </div>
          <h4 className="text-base sm:text-lg font-bold text-white mt-4 mb-2 flex items-center gap-2">
            <span>Question 3</span>
          </h4>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public class OutputThree {

    public static void main(String[] args) {

        String text = "Java";

        text.concat(" Programming");

        System.out.println(text);
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
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Java`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Explanation: The returned String was not assigned.
          </p>
          <h4 className="text-base sm:text-lg font-bold text-white mt-4 mb-2 flex items-center gap-2">
            <span>Question 4</span>
          </h4>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public class OutputFour {

    public static void main(String[] args) {

        String a = new String("Hello");

        String b = new String("Hello");

        System.out.println(a == b);

        System.out.println(a.equals(b));
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
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`false
true`}</code>
            </pre>
          </div>
          <h4 className="text-base sm:text-lg font-bold text-white mt-4 mb-2 flex items-center gap-2">
            <span>Question 5</span>
          </h4>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public class OutputFive {

    public static void main(String[] args) {

        int[] numbers = {1, 2, 3, 4, 5};

        int sum = 0;

        for (int i = 0; i < numbers.length; i++) {

            if (numbers[i] % 2 != 0) {

                sum += numbers[i];
            }
        }

        System.out.println(sum);
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
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`9`}</code>
            </pre>
          </div>
          <h4 className="text-base sm:text-lg font-bold text-white mt-4 mb-2 flex items-center gap-2">
            <span>Question 6</span>
          </h4>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public class OutputSix {

    public static void main(String[] args) {

        StringBuilder sb = new StringBuilder("Java");

        sb.append(" Programming");

        sb.reverse();

        System.out.println(sb);
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
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`gnimmargorP avaJ`}</code>
            </pre>
          </div>
          <h4 className="text-base sm:text-lg font-bold text-white mt-4 mb-2 flex items-center gap-2">
            <span>Question 7</span>
          </h4>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public class OutputSeven {

    public static void main(String[] args) {

        int[][] matrix = {
            {1, 2},
            {3, 4}
        };

        System.out.println(
                matrix[0][1] + matrix[1][0]
        );
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
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`5`}</code>
            </pre>
          </div>
          <h4 className="text-base sm:text-lg font-bold text-white mt-4 mb-2 flex items-center gap-2">
            <span>Question 8</span>
          </h4>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public class OutputEight {

    public static void main(String[] args) {

        int[] numbers = {2, 4, 6, 8};

        int result = 0;

        for (int number : numbers) {

            result += number / 2;
        }

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
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`10`}</code>
            </pre>
          </div>
        </div>
      </section>

      {/* SECTION 28: 28. Programming Assessment Challenges (30 Tasks) */}
      <section id="section-28" className="bg-slate-900/80 rounded-2xl border border-slate-800 p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-500/15 text-orange-300 text-xs font-bold uppercase tracking-wider font-mono">
            Part 17 · 30 Graded Coding Challenges
          </span>
          <span className="text-xs font-mono text-slate-400">Section 28</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          28. Programming Assessment Challenges (30 Tasks)
        </h2>
        <div className="space-y-4 text-slate-300 leading-relaxed text-sm sm:text-base">
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Students should solve these problems without looking at the worked implementations.
          </p>
          <h4 className="text-base sm:text-lg font-bold text-white mt-4 mb-2 flex items-center gap-2">
            <span>Beginner</span>
          </h4>
          <ol className="list-decimal pl-5 space-y-2 text-slate-300 text-sm sm:text-base my-3 leading-relaxed">
            <li>Find the sum of all elements in an array.</li>
            <li>Find the largest and smallest values.</li>
            <li>Reverse an array.</li>
            <li>Count even and odd values.</li>
            <li>Find whether a target exists in an array.</li>
            <li>Count vowels in a String.</li>
            <li>Reverse a String.</li>
            <li>Calculate the sum of digits of an integer.</li>
            <li>Check whether a number is prime.</li>
            <li>Calculate GCD and LCM.</li>
          </ol>
          <h4 className="text-base sm:text-lg font-bold text-white mt-4 mb-2 flex items-center gap-2">
            <span>Intermediate</span>
          </h4>
          <ol className="list-decimal pl-5 space-y-2 text-slate-300 text-sm sm:text-base my-3 leading-relaxed">
            <li>Find the second-largest distinct element.</li>
            <li>Remove duplicates from a sorted array.</li>
            <li>Rotate an array to the left by k positions.</li>
            <li>Rotate an array to the right by k positions.</li>
            <li>Find the missing number from a sequence.</li>
            <li>Find the first non-repeating character.</li>
            <li>Check whether two Strings are anagrams.</li>
            <li>Find the majority element when it exists.</li>
            <li>Generate prime numbers using the Sieve of Eratosthenes.</li>
            <li>Implement prefix-sum range queries.</li>
          </ol>
          <h4 className="text-base sm:text-lg font-bold text-white mt-4 mb-2 flex items-center gap-2">
            <span>Advanced foundation</span>
          </h4>
          <ol className="list-decimal pl-5 space-y-2 text-slate-300 text-sm sm:text-base my-3 leading-relaxed">
            <li>Find the maximum sum of a contiguous subarray.</li>
            <li>Find the longest common prefix among Strings.</li>
            <li>Find the longest substring without repeated characters.</li>
            <li>Search for an element in a sorted matrix.</li>
            <li>Rotate a square matrix by 90 degrees.</li>
            <li>Merge two sorted arrays.</li>
            <li>Find all pairs with a given sum.</li>
            <li>Implement modular exponentiation.</li>
            <li>Find the number of subarrays with a specified sum.</li>
            <li>Implement matrix multiplication with dimension validation.</li>
          </ol>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            These challenges introduce techniques that will be explored more deeply in subsequent DSA modules.
          </p>
        </div>
      </section>

      {/* SECTION 29: 29. Mini Project — Array, Text & Matrix Analysis Toolkit */}
      <section id="section-29" className="bg-slate-900/80 rounded-2xl border border-slate-800 p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-500/15 text-orange-300 text-xs font-bold uppercase tracking-wider font-mono">
            Part 18 · Capstone Mini Project
          </span>
          <span className="text-xs font-mono text-slate-400">Section 29</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          29. Mini Project — Array, Text & Matrix Analysis Toolkit
        </h2>
        <div className="space-y-4 text-slate-300 leading-relaxed text-sm sm:text-base">
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>Project Overview</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Build a menu-driven Java application that can analyze numerical arrays, process text, perform mathematical calculations, and manipulate matrices.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            This project integrates the primary learning outcomes from Module 3.
          </p>
          <h4 className="text-base sm:text-lg font-bold text-white mt-4 mb-2 flex items-center gap-2">
            <span>Project objectives</span>
          </h4>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Students should demonstrate the ability to:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-slate-300 text-sm sm:text-base my-3 leading-relaxed">
            <li>Store and process collections using arrays.</li>
            <li>Implement searching and sorting-related operations.</li>
            <li>Process String data.</li>
            <li>Use StringBuilder.</li>
            <li>Count character frequencies.</li>
            <li>Implement prime, GCD, and LCM algorithms.</li>
            <li>Perform two-dimensional matrix operations.</li>
            <li>Organize the application using reusable methods.</li>
          </ul>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>Functional requirements</span>
          </h3>
          <h4 className="text-base sm:text-lg font-bold text-white mt-4 mb-2 flex items-center gap-2">
            <span>Component 1 — Array analyzer</span>
          </h4>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Allow the user to:
          </p>
          <ol className="list-decimal pl-5 space-y-2 text-slate-300 text-sm sm:text-base my-3 leading-relaxed">
            <li>Enter an array.</li>
            <li>Display all elements.</li>
            <li>Find maximum and minimum.</li>
            <li>Calculate the sum and average.</li>
            <li>Search for a value.</li>
            <li>Reverse the array.</li>
            <li>Count duplicate values.</li>
            <li>Calculate element frequency.</li>
          </ol>
          <h4 className="text-base sm:text-lg font-bold text-white mt-4 mb-2 flex items-center gap-2">
            <span>Component 2 — String analyzer</span>
          </h4>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Allow the user to:
          </p>
          <ol className="list-decimal pl-5 space-y-2 text-slate-300 text-sm sm:text-base my-3 leading-relaxed">
            <li>Enter a sentence.</li>
            <li>Display its length.</li>
            <li>Reverse the text.</li>
            <li>Count vowels.</li>
            <li>Count consonants.</li>
            <li>Count uppercase and lowercase characters.</li>
            <li>Count words.</li>
            <li>Generate a character-frequency report.</li>
            <li>Check whether the text is a palindrome.</li>
          </ol>
          <h4 className="text-base sm:text-lg font-bold text-white mt-4 mb-2 flex items-center gap-2">
            <span>Component 3 — Mathematical toolkit</span>
          </h4>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Allow the user to:
          </p>
          <ol className="list-decimal pl-5 space-y-2 text-slate-300 text-sm sm:text-base my-3 leading-relaxed">
            <li>Check prime numbers.</li>
            <li>Display primes in a range.</li>
            <li>Calculate GCD.</li>
            <li>Calculate LCM.</li>
            <li>Calculate modular exponentiation.</li>
            <li>Reverse a number.</li>
            <li>Check number palindromes.</li>
          </ol>
          <h4 className="text-base sm:text-lg font-bold text-white mt-4 mb-2 flex items-center gap-2">
            <span>Component 4 — Matrix analyzer</span>
          </h4>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Allow the user to:
          </p>
          <ol className="list-decimal pl-5 space-y-2 text-slate-300 text-sm sm:text-base my-3 leading-relaxed">
            <li>Input a matrix.</li>
            <li>Display the matrix.</li>
            <li>Calculate row sums.</li>
            <li>Calculate column sums.</li>
            <li>Find diagonal sums.</li>
            <li>Calculate the transpose.</li>
            <li>Add matrices.</li>
            <li>Multiply compatible matrices.</li>
          </ol>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>Suggested project architecture</span>
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`ArrayTextMatrixToolkit
|
+-- Main
|   +-- displayMenu()
|   +-- processChoice()
|
+-- ArrayAnalyzer
|   +-- displayArray()
|   +-- calculateSum()
|   +-- findMaximum()
|   +-- findMinimum()
|   +-- linearSearch()
|   +-- reverseArray()
|   +-- calculateFrequency()
|
+-- StringAnalyzer
|   +-- reverseString()
|   +-- countVowels()
|   +-- countWords()
|   +-- isPalindrome()
|   +-- characterFrequency()
|
+-- MathToolkit
|   +-- isPrime()
|   +-- gcd()
|   +-- lcm()
|   +-- modularPower()
|   +-- reverseNumber()
|
+-- MatrixAnalyzer
    +-- displayMatrix()
    +-- matrixAddition()
    +-- matrixTranspose()
    +-- matrixMultiplication()
    +-- diagonalSum()`}</code>
            </pre>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>Sample implementation — Core array and String analysis</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            The following is a compact working foundation for two project components. Students should extend it with the remaining menu options and matrix operations.
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`import java.util.Arrays;
import java.util.Scanner;

public class AnalysisToolkit {

    static Scanner scanner = new Scanner(System.in);

    static void arrayAnalyzer() {

        System.out.print("Enter array size: ");

        int n = scanner.nextInt();

        if (n <= 0) {
            System.out.println("Invalid array size");
            return;
        }

        int[] numbers = new int[n];

        for (int i = 0; i < n; i++) {

            System.out.print("Enter element: ");

            numbers[i] = scanner.nextInt();
        }

        int sum = 0;

        int maximum = numbers[0];

        int minimum = numbers[0];

        for (int number : numbers) {

            sum += number;

            maximum = Math.max(maximum, number);

            minimum = Math.min(minimum, number);
        }

        double average = (double) sum / n;

        System.out.println("\\nArray Report");

        System.out.println(Arrays.toString(numbers));

        System.out.println("Sum: " + sum);

        System.out.println("Average: " + average);

        System.out.println("Maximum: " + maximum);

        System.out.println("Minimum: " + minimum);

        System.out.println(
                "Reversed: " +
                Arrays.toString(reverseArray(numbers))
        );
    }

    static int[] reverseArray(int[] original) {

        int[] reversed = new int[original.length];

        for (int i = 0; i < original.length; i++) {

            reversed[i] =
                    original[original.length - 1 - i];
        }

        return reversed;
    }

    static void stringAnalyzer() {

        scanner.nextLine();

        System.out.print("Enter a sentence: ");

        String text = scanner.nextLine();

        int vowels = 0;

        int consonants = 0;

        int digits = 0;

        int spaces = 0;

        for (int i = 0; i < text.length(); i++) {

            char ch = Character.toLowerCase(text.charAt(i));

            if (ch >= 'a' && ch <= 'z') {

                if ("aeiou".indexOf(ch) >= 0) {

                    vowels++;

                } else {

                    consonants++;
                }

            } else if (Character.isDigit(ch)) {

                digits++;

            } else if (Character.isWhitespace(ch)) {

                spaces++;
            }
        }

        String reversed = new StringBuilder(text)
                .reverse()
                .toString();

        System.out.println("\\nText Analysis");

        System.out.println("Original: " + text);

        System.out.println("Length: " + text.length());

        System.out.println("Vowels: " + vowels);

        System.out.println("Consonants: " + consonants);

        System.out.println("Digits: " + digits);

        System.out.println("Spaces: " + spaces);

        System.out.println("Reversed: " + reversed);
    }

    public static void main(String[] args) {

        int choice;

        do {

            System.out.println("\\nANALYSIS TOOLKIT");

            System.out.println("1. Array Analyzer");

            System.out.println("2. String Analyzer");

            System.out.println("3. Exit");

            System.out.print("Enter choice: ");

            choice = scanner.nextInt();

            switch (choice) {

                case 1:

                    arrayAnalyzer();

                    break;

                case 2:

                    stringAnalyzer();

                    break;

                case 3:

                    System.out.println("Exiting...");

                    break;

                default:

                    System.out.println("Invalid option");
            }

        } while (choice != 3);

        scanner.close();
    }
}`}</code>
            </pre>
          </div>
          <h4 className="text-base sm:text-lg font-bold text-white mt-4 mb-2 flex items-center gap-2">
            <span>Sample output</span>
          </h4>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`ANALYSIS TOOLKIT

1. Array Analyzer
2. String Analyzer
3. Exit

Enter choice: 1

Enter array size: 5

Enter element: 10
Enter element: 20
Enter element: 30
Enter element: 40
Enter element: 50

Array Report

[10, 20, 30, 40, 50]

Sum: 150
Average: 30.0
Maximum: 50
Minimum: 10
Reversed: [50, 40, 30, 20, 10]`}</code>
            </pre>
          </div>
          <h4 className="text-base sm:text-lg font-bold text-white mt-4 mb-2 flex items-center gap-2">
            <span>Project extension requirements</span>
          </h4>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            The student should extend the application by:
          </p>
          <ol className="list-decimal pl-5 space-y-2 text-slate-300 text-sm sm:text-base my-3 leading-relaxed">
            <li>Adding a mathematical toolkit.</li>
            <li>Adding GCD and LCM calculations.</li>
            <li>Adding prime-number generation.</li>
            <li>Adding a two-dimensional matrix analyzer.</li>
            <li>Implementing matrix addition and multiplication.</li>
            <li>Adding character-frequency counting.</li>
            <li>Adding anagram and palindrome detection.</li>
            <li>Adding input validation.</li>
            <li>Separating the application into multiple Java classes.</li>
            <li>Testing all methods with suitable unit tests.</li>
          </ol>
          <h4 className="text-base sm:text-lg font-bold text-white mt-4 mb-2 flex items-center gap-2">
            <span>Expected project outcome</span>
          </h4>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            The student should be able to design and implement a small data-analysis application using fundamental Java data structures and algorithms.
          </p>
        </div>
      </section>

      {/* SECTION 30: 30. Common Beginner Mistakes */}
      <section id="section-30" className="bg-slate-900/80 rounded-2xl border border-slate-800 p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-500/15 text-orange-300 text-xs font-bold uppercase tracking-wider font-mono">
            Part 19 · Antipatterns & Pitfalls
          </span>
          <span className="text-xs font-mono text-slate-400">Section 30</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          30. Common Beginner Mistakes
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
                  <td className="px-4 py-2.5 text-slate-300">Accessing index equal to array length</td>
                  <td className="px-4 py-2.5 text-slate-300">Confusing length with final index</td>
                  <td className="px-4 py-2.5 text-slate-300">Use <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">length - 1</code></td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">Assuming arrays grow automatically</td>
                  <td className="px-4 py-2.5 text-slate-300">Confusing arrays with dynamic collections</td>
                  <td className="px-4 py-2.5 text-slate-300">Allocate a new array or use an appropriate collection</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">Using <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">==</code> for String content</td>
                  <td className="px-4 py-2.5 text-slate-300">Confusing identity and equality</td>
                  <td className="px-4 py-2.5 text-slate-300">Use <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">equals()</code></td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">Forgetting String immutability</td>
                  <td className="px-4 py-2.5 text-slate-300">Assuming String methods modify existing objects</td>
                  <td className="px-4 py-2.5 text-slate-300">Store the returned String</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">Using String concatenation repeatedly in loops</td>
                  <td className="px-4 py-2.5 text-slate-300">Not understanding mutable alternatives</td>
                  <td className="px-4 py-2.5 text-slate-300">Use StringBuilder</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">Using binary search on unsorted data</td>
                  <td className="px-4 py-2.5 text-slate-300">Ignoring the sorting requirement</td>
                  <td className="px-4 py-2.5 text-slate-300">Sort first</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">Assigning one array variable to another and assuming a copy</td>
                  <td className="px-4 py-2.5 text-slate-300">Not understanding references</td>
                  <td className="px-4 py-2.5 text-slate-300">Use <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">clone()</code> or an explicit copy</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">Ignoring jagged arrays</td>
                  <td className="px-4 py-2.5 text-slate-300">Assuming all rows have identical lengths</td>
                  <td className="px-4 py-2.5 text-slate-300">Use <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">matrix[i].length</code></td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">Using incorrect row/column dimensions</td>
                  <td className="px-4 py-2.5 text-slate-300">Misunderstanding matrix indexing</td>
                  <td className="px-4 py-2.5 text-slate-300">Validate dimensions</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">Misusing <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">char</code> for all Unicode characters</td>
                  <td className="px-4 py-2.5 text-slate-300">Confusing code units and code points</td>
                  <td className="px-4 py-2.5 text-slate-300">Use code-point-aware processing</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">Using <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">%</code> as always-positive modulo</td>
                  <td className="px-4 py-2.5 text-slate-300">Ignoring negative operands</td>
                  <td className="px-4 py-2.5 text-slate-300">Consider <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">Math.floorMod()</code></td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">Incorrect GCD base case</td>
                  <td className="px-4 py-2.5 text-slate-300">Not understanding the Euclidean algorithm</td>
                  <td className="px-4 py-2.5 text-slate-300">Stop when the second value is zero</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">Overflow during number reversal</td>
                  <td className="px-4 py-2.5 text-slate-300">Ignoring numeric limits</td>
                  <td className="px-4 py-2.5 text-slate-300">Use range checks and appropriate numeric types</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">Counting matrix corners twice</td>
                  <td className="px-4 py-2.5 text-slate-300">Incorrect boundary logic</td>
                  <td className="px-4 py-2.5 text-slate-300">Define boundary conditions carefully</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">Incorrect prefix sum indexes</td>
                  <td className="px-4 py-2.5 text-slate-300">Confusing inclusive and exclusive indexes</td>
                  <td className="px-4 py-2.5 text-slate-300">Document range conventions</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* SECTION 31: 31. Module Revision Sheet */}
      <section id="section-31" className="bg-slate-900/80 rounded-2xl border border-slate-800 p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-500/15 text-orange-300 text-xs font-bold uppercase tracking-wider font-mono">
            Review · Module Revision Sheet
          </span>
          <span className="text-xs font-mono text-slate-400">Section 31</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          31. Module Revision Sheet
        </h2>
        <div className="space-y-4 text-slate-300 leading-relaxed text-sm sm:text-base">
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>Important definitions</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-white">Array:</strong> A fixed-length object containing a sequence of components of one declared type.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-white">Index:</strong> The zero-based position used to access an array component.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-white">Array traversal:</strong> Visiting elements of an array one by one.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-white">Insertion:</strong> Adding a value at a specified logical position.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-white">Deletion:</strong> Removing a value and shifting subsequent values when necessary.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-white">Linear search:</strong> Searching sequentially through elements.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-white">Binary search:</strong> Searching a sorted collection by repeatedly reducing the search interval.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-white">Array reference:</strong> A reference value that identifies an array object.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-white">Jagged array:</strong> A multidimensional array whose component arrays may have different lengths.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-white">String:</strong> An immutable object representing a character sequence.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-white">String pool:</strong> The pool of canonical interned Strings maintained by the String class.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-white">StringBuilder:</strong> A mutable character sequence without synchronization guarantees.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-white">StringBuffer:</strong> A mutable character sequence with synchronized operations.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-white">Character frequency:</strong> The number of occurrences of each character or code point.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-white">Prime number:</strong> An integer greater than one with exactly two positive divisors.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-white">GCD:</strong> The greatest positive common divisor of given integers.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-white">LCM:</strong> The smallest positive common multiple of positive integers.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-white">Modular arithmetic:</strong> Arithmetic based on equivalence classes or remainders under a modulus.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-white">Matrix:</strong> A rectangular arrangement of values in rows and columns.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-white">Prefix sum:</strong> A cumulative-sum structure used to answer range-sum queries efficiently.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-white">Two-pointer technique:</strong> An algorithmic approach that processes data using two indexes or references.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>Essential Java syntax</span>
          </h3>
          <h4 className="text-base sm:text-lg font-bold text-white mt-4 mb-2 flex items-center gap-2">
            <span>Array creation</span>
          </h4>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`int[] numbers = new int[5];

int[] values = {10, 20, 30};`}</code>
            </pre>
          </div>
          <h4 className="text-base sm:text-lg font-bold text-white mt-4 mb-2 flex items-center gap-2">
            <span>Array traversal</span>
          </h4>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`for (int i = 0; i < numbers.length; i++) {

    System.out.println(numbers[i]);
}`}</code>
            </pre>
          </div>
          <h4 className="text-base sm:text-lg font-bold text-white mt-4 mb-2 flex items-center gap-2">
            <span>Array length</span>
          </h4>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`numbers.length`}</code>
            </pre>
          </div>
          <h4 className="text-base sm:text-lg font-bold text-white mt-4 mb-2 flex items-center gap-2">
            <span>Array copying</span>
          </h4>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`int[] copy = numbers.clone();`}</code>
            </pre>
          </div>
          <h4 className="text-base sm:text-lg font-bold text-white mt-4 mb-2 flex items-center gap-2">
            <span>Array utilities</span>
          </h4>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`import java.util.Arrays;

Arrays.sort(numbers);

Arrays.toString(numbers);

Arrays.binarySearch(numbers, 20);`}</code>
            </pre>
          </div>
          <h4 className="text-base sm:text-lg font-bold text-white mt-4 mb-2 flex items-center gap-2">
            <span>Matrix</span>
          </h4>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`int[][] matrix = {
    {1, 2},
    {3, 4}
};`}</code>
            </pre>
          </div>
          <h4 className="text-base sm:text-lg font-bold text-white mt-4 mb-2 flex items-center gap-2">
            <span>String comparison</span>
          </h4>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`first.equals(second);`}</code>
            </pre>
          </div>
          <h4 className="text-base sm:text-lg font-bold text-white mt-4 mb-2 flex items-center gap-2">
            <span>StringBuilder</span>
          </h4>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`StringBuilder sb = new StringBuilder();

sb.append("Java");

sb.reverse();`}</code>
            </pre>
          </div>
          <h4 className="text-base sm:text-lg font-bold text-white mt-4 mb-2 flex items-center gap-2">
            <span>Prime checking</span>
          </h4>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`for (int i = 2; i <= number / i; i++) {

    if (number % i == 0) {
        return false;
    }
}`}</code>
            </pre>
          </div>
          <h4 className="text-base sm:text-lg font-bold text-white mt-4 mb-2 flex items-center gap-2">
            <span>GCD</span>
          </h4>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`while (b != 0) {

    int remainder = a % b;

    a = b;

    b = remainder;
}`}</code>
            </pre>
          </div>
          <h4 className="text-base sm:text-lg font-bold text-white mt-4 mb-2 flex items-center gap-2">
            <span>Frequency counting</span>
          </h4>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`frequency[index]++;`}</code>
            </pre>
          </div>
          <h4 className="text-base sm:text-lg font-bold text-white mt-4 mb-2 flex items-center gap-2">
            <span>Matrix traversal</span>
          </h4>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`for (int i = 0; i < matrix.length; i++) {

    for (int j = 0; j < matrix[i].length; j++) {

        System.out.println(matrix[i][j]);
    }
}`}</code>
            </pre>
          </div>
        </div>
      </section>

      {/* SECTION 32: 32. Recommended Learning Resources */}
      <section id="section-32" className="bg-slate-900/80 rounded-2xl border border-slate-800 p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-500/15 text-orange-300 text-xs font-bold uppercase tracking-wider font-mono">
            References · Curated Resources
          </span>
          <span className="text-xs font-mono text-slate-400">Section 32</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          32. Recommended Learning Resources
        </h2>
        <div className="space-y-4 text-slate-300 leading-relaxed text-sm sm:text-base">
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Students should supplement the lessons with official Java documentation and practical coding.
          </p>
          <ol className="list-decimal pl-5 space-y-2 text-slate-300 text-sm sm:text-base my-3 leading-relaxed">
            <li><strong className="font-semibold text-white">Oracle Java Language Specification — Arrays</strong></li>
          </ol>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            <a href="https://docs.oracle.com/javase/specs/jls/se25/html/jls-10.html" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-300 font-medium underline inline-flex items-center gap-0.5">https://docs.oracle.com/javase/specs/jls/se25/html/jls-10.html</a>
          </p>
          <ol className="list-decimal pl-5 space-y-2 text-slate-300 text-sm sm:text-base my-3 leading-relaxed">
            <li><strong className="font-semibold text-white">Oracle Java String API</strong></li>
          </ol>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            <a href="https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/lang/String.html" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-300 font-medium underline inline-flex items-center gap-0.5">https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/lang/String.html</a>
          </p>
          <ol className="list-decimal pl-5 space-y-2 text-slate-300 text-sm sm:text-base my-3 leading-relaxed">
            <li><strong className="font-semibold text-white">Oracle Java StringBuilder API</strong></li>
          </ol>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            <a href="https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/lang/StringBuilder.html" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-300 font-medium underline inline-flex items-center gap-0.5">https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/lang/StringBuilder.html</a>
          </p>
          <ol className="list-decimal pl-5 space-y-2 text-slate-300 text-sm sm:text-base my-3 leading-relaxed">
            <li><strong className="font-semibold text-white">Oracle Java StringBuffer API</strong></li>
          </ol>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            <a href="https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/lang/StringBuffer.html" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-300 font-medium underline inline-flex items-center gap-0.5">https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/lang/StringBuffer.html</a>
          </p>
          <ol className="list-decimal pl-5 space-y-2 text-slate-300 text-sm sm:text-base my-3 leading-relaxed">
            <li><strong className="font-semibold text-white">Oracle Arrays Utility API</strong></li>
          </ol>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            <a href="https://docs.oracle.com/en/java/javase/25/docs/api/java.base/util/Arrays.html" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-300 font-medium underline inline-flex items-center gap-0.5">https://docs.oracle.com/en/java/javase/25/docs/api/java.base/util/Arrays.html</a>
          </p>
          <ol className="list-decimal pl-5 space-y-2 text-slate-300 text-sm sm:text-base my-3 leading-relaxed">
            <li><strong className="font-semibold text-white">Dev.java — Creating Arrays in Your Programs</strong></li>
          </ol>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            <a href="https://dev.java/learn/language-basics/arrays/" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-300 font-medium underline inline-flex items-center gap-0.5">https://dev.java/learn/language-basics/arrays/</a>
          </p>
          <ol className="list-decimal pl-5 space-y-2 text-slate-300 text-sm sm:text-base my-3 leading-relaxed">
            <li><strong className="font-semibold text-white">OpenJDK</strong></li>
          </ol>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            <a href="https://openjdk.org/" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-300 font-medium underline inline-flex items-center gap-0.5">https://openjdk.org/</a>
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Official documentation should be the primary reference for language behavior and library methods.
          </p>
        </div>
      </section>

      {/* SECTION 33: 33. Module Completion Criteria */}
      <section id="section-33" className="bg-slate-900/80 rounded-2xl border border-slate-800 p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-500/15 text-orange-300 text-xs font-bold uppercase tracking-wider font-mono">
            Milestone · Completion Criteria
          </span>
          <span className="text-xs font-mono text-slate-400">Section 33</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          33. Module Completion Criteria
        </h2>
        <div className="space-y-4 text-slate-300 leading-relaxed text-sm sm:text-base">
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Students should complete the following checklist before progressing.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>Arrays</span>
          </h3>
          <ul className="list-disc pl-5 space-y-2 text-slate-300 text-sm sm:text-base my-3 leading-relaxed">
            <li>[ ] Understand one-dimensional arrays.</li>
            <li>[ ] Declare, create, and initialize arrays.</li>
            <li>[ ] Access elements using indexes.</li>
            <li>[ ] Traverse arrays using standard and enhanced for loops.</li>
            <li>[ ] Calculate sums, averages, maximums, and minimums.</li>
            <li>[ ] Implement insertion and deletion.</li>
            <li>[ ] Implement linear search.</li>
            <li>[ ] Implement binary search.</li>
            <li>[ ] Explain array references and copying.</li>
            <li>[ ] Understand default array initialization.</li>
            <li>[ ] Explain multidimensional and jagged arrays.</li>
          </ul>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>Strings</span>
          </h3>
          <ul className="list-disc pl-5 space-y-2 text-slate-300 text-sm sm:text-base my-3 leading-relaxed">
            <li>[ ] Explain String immutability.</li>
            <li>[ ] Understand String pooling and <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">intern()</code>.</li>
            <li>[ ] Differentiate <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">==</code> and <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">equals()</code>.</li>
            <li>[ ] Apply common String methods.</li>
            <li>[ ] Understand StringBuilder.</li>
            <li>[ ] Understand StringBuffer.</li>
            <li>[ ] Perform character-level processing.</li>
            <li>[ ] Understand UTF-16 code units and Unicode code points.</li>
            <li>[ ] Count character frequencies.</li>
            <li>[ ] Implement reverse, palindrome, and anagram algorithms.</li>
          </ul>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>Mathematics and DSA</span>
          </h3>
          <ul className="list-disc pl-5 space-y-2 text-slate-300 text-sm sm:text-base my-3 leading-relaxed">
            <li>[ ] Understand prime numbers and factorization.</li>
            <li>[ ] Implement optimized prime checking.</li>
            <li>[ ] Implement the Sieve of Eratosthenes.</li>
            <li>[ ] Implement GCD using the Euclidean algorithm.</li>
            <li>[ ] Calculate LCM using GCD.</li>
            <li>[ ] Understand modular arithmetic.</li>
            <li>[ ] Implement modular exponentiation.</li>
            <li>[ ] Reverse integers and check number palindromes.</li>
            <li>[ ] Use two-pointer algorithms.</li>
            <li>[ ] Implement prefix sums.</li>
            <li>[ ] Perform matrix addition, multiplication, and transposition.</li>
            <li>[ ] Analyze basic time and space complexity.</li>
          </ul>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>Practical work</span>
          </h3>
          <ul className="list-disc pl-5 space-y-2 text-slate-300 text-sm sm:text-base my-3 leading-relaxed">
            <li>[ ] Complete all eight laboratory exercises.</li>
            <li>[ ] Attempt all ten programming assignments.</li>
            <li>[ ] Complete the assessment questions.</li>
            <li>[ ] Build the Array, Text &amp; Matrix Analysis Toolkit.</li>
            <li>[ ] Test normal and boundary cases.</li>
            <li>[ ] Explain the algorithmic logic behind each implementation.</li>
          </ul>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>Final Expected Capability</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            By the end of Module 3, students should be capable of independently working with collections of data, manipulating text, analyzing numerical values, and performing basic matrix operations.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            They should understand how arrays and strings are represented and manipulated at the Java language level, how references affect program behavior, and how algorithmic techniques improve performance.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            Most importantly, students should be ready to solve foundational DSA problems involving:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-slate-300 text-sm sm:text-base my-3 leading-relaxed">
            <li>Arrays and array traversal.</li>
            <li>Searching and element manipulation.</li>
            <li>String processing.</li>
            <li>Character frequency.</li>
            <li>Two-pointer techniques.</li>
            <li>Prefix sums.</li>
            <li>Number theory.</li>
            <li>Matrix traversal and operations.</li>
          </ul>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-white">The objective is to transition from basic Java programming to structured data processing and algorithm development.</strong>
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-2">
            <span>Next Module</span>
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-white">Module 4 — Object-Oriented Programming (OOP) with Java</strong>
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            The next module will introduce classes, objects, constructors, encapsulation, inheritance, polymorphism, abstraction, interfaces, access modifiers, static members, and object relationships.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-2">
            These concepts will establish the foundation for designing larger Java applications and implementing advanced data structures.
          </p>
        </div>
      </section>

    </div>
  );
}
