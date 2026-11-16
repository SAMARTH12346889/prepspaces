import React from "react";
import { AlertCircle, Box, Layers, Cpu, Workflow, Award, CheckCircle2, BookOpen, HardDrive, Filter, Repeat } from "lucide-react";

export default function JavaAdvancedSections() {
  return (
    <div className="space-y-10">
      {/* SECTION 0: Module 5: Complete Curriculum Specification */}
      <section id="overview" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider font-mono">
            Course Roadmap · Overview
          </span>
          <span className="text-xs font-mono text-stone-500">Section 0</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          Module 5: Complete Curriculum Specification
        </h2>
        <div className="space-y-4 text-stone-700 leading-relaxed text-sm sm:text-base">
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>Module Overview</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Modern Java applications require more than classes, objects, and basic control-flow statements. They need reliable error handling, reusable data structures, type-safe programming, functional operations, and mechanisms for working with external resources.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Java provides a rich standard library to support these requirements.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            This module introduces the advanced core features that developers use when building real-world applications.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            The learning journey progresses through six major areas:
          </p>
          <ol className="list-decimal pl-5 space-y-2 text-stone-700 text-sm sm:text-base my-3 leading-relaxed">
            <li><strong className="font-semibold text-stone-900">Exception handling:</strong> Handling failures and maintaining application reliability.</li>
            <li><strong className="font-semibold text-stone-900">Generics:</strong> Developing reusable and type-safe classes and methods.</li>
            <li><strong className="font-semibold text-stone-900">Collections Framework:</strong> Managing dynamic groups of objects efficiently.</li>
            <li><strong className="font-semibold text-stone-900">Functional programming:</strong> Using lambdas, functional interfaces, and method references.</li>
            <li><strong className="font-semibold text-stone-900">Stream processing:</strong> Transforming, filtering, grouping, and processing collections.</li>
            <li><strong className="font-semibold text-stone-900">File handling and serialization:</strong> Reading, writing, storing, and restoring information.</li>
          </ol>
          <h4 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span>Prerequisites</span>
          </h4>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Students should understand:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-stone-700 text-sm sm:text-base my-3 leading-relaxed">
            <li>Classes and objects.</li>
            <li>Constructors and constructor overloading.</li>
            <li>Encapsulation and inheritance.</li>
            <li>Interfaces and abstract classes.</li>
            <li>Method overriding and polymorphism.</li>
            <li>Arrays and String manipulation.</li>
            <li>Methods and return types.</li>
            <li>Basic exception concepts from previous programming exercises.</li>
          </ul>
          <h4 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span>Learning Objectives</span>
          </h4>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            By the end of this module, students should be able to:
          </p>
          <ol className="list-decimal pl-5 space-y-2 text-stone-700 text-sm sm:text-base my-3 leading-relaxed">
            <li>Explain Java's exception hierarchy.</li>
            <li>Differentiate checked and unchecked exceptions.</li>
            <li>Implement exception handling using <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">try</code>, <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">catch</code>, and <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">finally</code>.</li>
            <li>Understand <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">throw</code> and <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">throws</code>.</li>
            <li>Create and use custom exceptions.</li>
            <li>Understand exception propagation and chaining.</li>
            <li>Use try-with-resources for resource management.</li>
            <li>Explain generic programming and its advantages.</li>
            <li>Implement generic classes and methods.</li>
            <li>Use bounded type parameters and wildcards.</li>
            <li>Understand type erasure.</li>
            <li>Explain the architecture of the Collections Framework.</li>
            <li>Work with List, Set, Queue, Deque, and Map.</li>
            <li>Use Iterable and Iterator.</li>
            <li>Implement Comparable and Comparator.</li>
            <li>Understand lambda expressions and functional interfaces.</li>
            <li>Use standard functional interfaces.</li>
            <li>Understand Stream API pipelines.</li>
            <li>Apply filtering, mapping, reduction, and collectors.</li>
            <li>Use Optional for representing potentially absent results.</li>
            <li>Understand method references.</li>
            <li>Perform file operations using Java I/O and NIO.</li>
            <li>Read and write text files.</li>
            <li>Understand byte streams and character streams.</li>
            <li>Explain object serialization and deserialization.</li>
            <li>Design an advanced Java application combining these concepts.</li>
            <li>Recognize security and performance considerations in modern Java applications.</li>
          </ol>
          <hr className="border-[#e7e3da] my-6" />
        </div>
      </section>

      {/* SECTION 1: 1. Introduction to Exception Handling */}
      <section id="section-1" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider font-mono">
            Part 1 · Fault Tolerance
          </span>
          <span className="text-xs font-mono text-stone-500">Section 1</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          1. Introduction to Exception Handling
        </h2>
        <div className="space-y-4 text-stone-700 leading-relaxed text-sm sm:text-base">
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>1.1 What is an exception?</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            An exception is an event represented by an object that disrupts the normal execution of a program.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Exceptions generally occur when an operation cannot be completed successfully.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Examples:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-stone-700 text-sm sm:text-base my-3 leading-relaxed">
            <li>Dividing an integer by zero.</li>
            <li>Accessing an invalid array index.</li>
            <li>Opening a file that does not exist.</li>
            <li>Converting invalid text into an integer.</li>
            <li>Attempting to use a null reference.</li>
            <li>Connecting to an unavailable external resource.</li>
          </ul>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Consider:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public class ExceptionExample {

    public static void main(String[] args) {

        int a = 10;

        int b = 0;

        int result = a / b;

        System.out.println(result);
    }
}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            This program throws an <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">ArithmeticException</code>.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            The expected calculation cannot be performed, so normal execution is interrupted.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>1.2 What is exception handling?</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Exception handling is the mechanism used to detect, propagate, handle, and recover from exceptional situations.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            It allows a program to respond to certain failures rather than terminating abruptly because of an unhandled exception.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            For example, instead of crashing when a user enters invalid numerical input, the program can display an appropriate message and request valid input.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Example:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public class ExceptionHandlingExample {

    public static void main(String[] args) {

        int a = 10;

        int b = 0;

        try {

            int result = a / b;

            System.out.println(result);

        } catch (ArithmeticException e) {

            System.out.println("Cannot divide by zero.");
        }

        System.out.println("Program continues.");
    }
}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Output:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Cannot divide by zero.
Program continues.`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            The exception was caught, handled, and execution continued after the try-catch structure.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>1.3 Why is exception handling important?</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Exception handling provides several benefits.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-stone-900">Reliability:</strong> Applications can handle expected failures without abruptly terminating.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-stone-900">Separation of concerns:</strong> Normal application logic can remain separate from error-handling logic.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-stone-900">Debugging:</strong> Exception objects contain useful diagnostic information.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-stone-900">Resource management:</strong> Files, streams, and other resources can be closed reliably.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-stone-900">Error propagation:</strong> A lower-level method can communicate failures to a higher-level component that knows how to respond.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-stone-900">Application stability:</strong> Appropriate recovery strategies can prevent certain errors from affecting unrelated operations.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Exception handling does not make an application automatically reliable. Developers must identify which failures are recoverable and provide meaningful responses.
          </p>
          <hr className="border-[#e7e3da] my-6" />
        </div>
      </section>

      {/* SECTION 2: 2. Java Exception Hierarchy */}
      <section id="section-2" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider font-mono">
            Part 1 · Throwable Architecture
          </span>
          <span className="text-xs font-mono text-stone-500">Section 2</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          2. Java Exception Hierarchy
        </h2>
        <div className="space-y-4 text-stone-700 leading-relaxed text-sm sm:text-base">
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>2.1 Understanding Throwable</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            In Java, <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">Throwable</code> is the root class of the exception and error hierarchy.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Only objects of <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">Throwable</code> or its subclasses can be thrown and caught using Java's exception mechanism.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            The basic hierarchy is:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`                  Object
                    |
                 Throwable
                    |
          +---------+---------+
          |                   |
        Error              Exception
                              |
                    +---------+---------+
                    |                   |
             RuntimeException     Other Exceptions
                    |
             Unchecked Exceptions`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            The hierarchy is more extensive in the actual Java library, but this is the important conceptual structure.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>2.2 What is Throwable?</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">Throwable</code> is the superclass of all Java errors and exceptions.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            It provides important methods such as:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-stone-700 text-sm sm:text-base my-3 leading-relaxed">
            <li><code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">getMessage()</code></li>
            <li><code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">getCause()</code></li>
            <li><code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">initCause()</code></li>
            <li><code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">printStackTrace()</code></li>
            <li><code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">getStackTrace()</code></li>
            <li><code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">toString()</code></li>
          </ul>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Example:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public class ThrowableInformation {

    public static void main(String[] args) {

        try {

            int result = 10 / 0;

        } catch (ArithmeticException e) {

            System.out.println(e.getMessage());

            System.out.println(e.toString());

            e.printStackTrace();
        }
    }
}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            The exception object contains information that helps developers understand what happened.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>2.3 What is Error?</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">Error</code> represents serious conditions that applications generally are not expected to recover from through ordinary exception handling.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Examples:
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-stone-900">OutOfMemoryError</strong>
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            The JVM cannot allocate additional required memory.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-stone-900">StackOverflowError</strong>
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            The thread's stack becomes exhausted, often because of excessive recursion.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-stone-900">NoClassDefFoundError</strong>
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            A class definition required at runtime cannot be found or initialized successfully in the expected manner.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Example of a stack overflow:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public class StackOverflowExample {

    static void recursiveMethod() {

        recursiveMethod();
    }

    public static void main(String[] args) {

        recursiveMethod();
    }
}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            The method repeatedly calls itself without a terminating condition.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Eventually, the thread can run out of stack space.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Important distinction:
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Errors are subclasses of <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">Throwable</code>, but they are not ordinary exceptions. Catching an <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">Error</code> is generally not a substitute for correcting the underlying problem.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>2.4 What is Exception?</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">Exception</code> represents conditions that an application may be able to handle.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Examples:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-stone-700 text-sm sm:text-base my-3 leading-relaxed">
            <li>IOException.</li>
            <li>FileNotFoundException.</li>
            <li>SQLException.</li>
            <li>ClassNotFoundException.</li>
            <li>RuntimeException.</li>
          </ul>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Exceptions are divided into checked and unchecked categories.
          </p>
          <hr className="border-[#e7e3da] my-6" />
        </div>
      </section>

      {/* SECTION 3: 3. Checked and Unchecked Exceptions */}
      <section id="section-3" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider font-mono">
            Part 1 · Exception Categories
          </span>
          <span className="text-xs font-mono text-stone-500">Section 3</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          3. Checked and Unchecked Exceptions
        </h2>
        <div className="space-y-4 text-stone-700 leading-relaxed text-sm sm:text-base">
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>3.1 What are checked exceptions?</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Checked exceptions are exception classes other than unchecked exceptions.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            The compiler checks whether potentially propagated checked exceptions are handled or declared.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            A method must either:
          </p>
          <ol className="list-decimal pl-5 space-y-2 text-stone-700 text-sm sm:text-base my-3 leading-relaxed">
            <li>Catch the checked exception, or</li>
            <li>Declare that it can throw the exception using <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">throws</code>.</li>
          </ol>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Examples:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-stone-700 text-sm sm:text-base my-3 leading-relaxed">
            <li>IOException.</li>
            <li>FileNotFoundException.</li>
            <li>SQLException.</li>
            <li>ClassNotFoundException.</li>
            <li>InterruptedException.</li>
          </ul>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Example:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`import java.io.FileReader;

public class CheckedExceptionExample {

    public static void main(String[] args) {

        try {

            FileReader reader =
                    new FileReader("data.txt");

            reader.close();

        } catch (Exception e) {

            System.out.println("File operation failed");
        }
    }
}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Opening a file can produce a checked IOException.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            The program handles the checked exception through the catch block.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>3.2 What are unchecked exceptions?</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Unchecked exceptions are exceptions belonging to RuntimeException and its subclasses.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            The compiler does not require methods to catch or declare them.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Examples:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-stone-700 text-sm sm:text-base my-3 leading-relaxed">
            <li>ArithmeticException.</li>
            <li>NullPointerException.</li>
            <li>ArrayIndexOutOfBoundsException.</li>
            <li>IllegalArgumentException.</li>
            <li>NumberFormatException.</li>
            <li>ClassCastException.</li>
          </ul>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Example:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public class UncheckedExample {

    public static void main(String[] args) {

        int[] numbers = {10, 20, 30};

        System.out.println(numbers[5]);
    }
}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            This causes an ArrayIndexOutOfBoundsException.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            The compiler does not require a catch block for this exception.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            However, programs should still validate indexes before accessing arrays.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>3.3 RuntimeException</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">RuntimeException</code> is the superclass of many common programming and input-validation failures.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Example:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public class NumberFormatExample {

    public static void main(String[] args) {

        String value = "Java";

        int number = Integer.parseInt(value);

        System.out.println(number);
    }
}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            The string <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">"Java"</code> cannot be converted into an integer.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Java throws a NumberFormatException.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>3.4 Checked versus unchecked exceptions</span>
          </h3>
          <div className="overflow-x-auto my-4 rounded-xl border border-[#e7e3da] shadow-2xs">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-stone-900 border-b border-[#e7e3da] font-semibold">
                <tr>
                  <th className="px-4 py-3">Feature</th>
                  <th className="px-4 py-3">Checked exceptions</th>
                  <th className="px-4 py-3">Unchecked exceptions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Compiler checking</td>
                  <td className="px-4 py-2.5 text-stone-700">Yes</td>
                  <td className="px-4 py-2.5 text-stone-700">No</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Must be caught or declared</td>
                  <td className="px-4 py-2.5 text-stone-700">Yes, if propagated</td>
                  <td className="px-4 py-2.5 text-stone-700">No</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Typical cause</td>
                  <td className="px-4 py-2.5 text-stone-700">External or recoverable conditions</td>
                  <td className="px-4 py-2.5 text-stone-700">Programming errors or invalid runtime conditions</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Parent hierarchy</td>
                  <td className="px-4 py-2.5 text-stone-700">Exception, excluding RuntimeException and its subclasses</td>
                  <td className="px-4 py-2.5 text-stone-700">RuntimeException and its subclasses</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Example</td>
                  <td className="px-4 py-2.5 text-stone-700">IOException</td>
                  <td className="px-4 py-2.5 text-stone-700">NullPointerException</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Handling</td>
                  <td className="px-4 py-2.5 text-stone-700">Required by compile-time rules</td>
                  <td className="px-4 py-2.5 text-stone-700">Optional from compile-time perspective</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">Error</code> is another unchecked category in Java's exception model, although it should not be confused with RuntimeException.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>3.5 When should developers use checked exceptions?</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Checked exceptions are often appropriate when a method has a meaningful failure condition that callers should explicitly consider.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Example:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`import java.io.IOException;

class FileService {

    void readFile() throws IOException {

        throw new IOException("Unable to read file");
    }
}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            The caller must handle or declare the IOException.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>3.6 When should developers use unchecked exceptions?</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Unchecked exceptions are generally appropriate for programming contract violations and invalid arguments that callers are expected to prevent.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Example:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`class AgeValidator {

    static void validateAge(int age) {

        if (age < 0) {

            throw new IllegalArgumentException(
                    "Age cannot be negative"
            );
        }
    }
}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            The method rejects an argument that violates its requirements.
          </p>
          <hr className="border-[#e7e3da] my-6" />
        </div>
      </section>

      {/* SECTION 4: 4. Try, Catch, and Finally */}
      <section id="section-4" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider font-mono">
            Part 2 · Control Transfer & Handlers
          </span>
          <span className="text-xs font-mono text-stone-500">Section 4</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          4. Try, Catch, and Finally
        </h2>
        <div className="space-y-4 text-stone-700 leading-relaxed text-sm sm:text-base">
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>4.1 The try block</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            The <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">try</code> block contains statements that may produce exceptions.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Syntax:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`try {

    // Statements that may throw exceptions

}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            A try statement must be followed by at least one catch clause or a finally clause, or both.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>4.2 The catch block</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            The <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">catch</code> block defines how a specific type of exception should be handled.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Syntax:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`try {

    // Risky operation

} catch (ExceptionType e) {

    // Exception handling
}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Example:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public class CatchExample {

    public static void main(String[] args) {

        try {

            int result = 10 / 0;

        } catch (ArithmeticException e) {

            System.out.println("Invalid arithmetic operation");
        }
    }
}`}</code>
            </pre>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>4.3 Multiple catch blocks</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            One try block can have multiple catch blocks.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Example:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public class MultipleCatchExample {

    public static void main(String[] args) {

        try {

            int[] numbers = {10, 20, 30};

            System.out.println(numbers[5]);

            int result = 10 / 0;

        } catch (ArrayIndexOutOfBoundsException e) {

            System.out.println("Invalid array index");

        } catch (ArithmeticException e) {

            System.out.println("Arithmetic error");

        } catch (Exception e) {

            System.out.println("Unexpected exception");
        }
    }
}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Output:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Invalid array index`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Execution moves to the first throwing operation, so the division operation is never reached.
          </p>
          <h4 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span>Important rule</span>
          </h4>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Catch blocks should be ordered from more specific exception types to more general exception types.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Incorrect:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`try {

} catch (Exception e) {

} catch (ArithmeticException e) {

}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            The second catch is unreachable because Exception already catches ArithmeticException.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Correct:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`try {

} catch (ArithmeticException e) {

} catch (Exception e) {

}`}</code>
            </pre>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>4.4 Multi-catch</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Java supports catching several unrelated exception types in one catch clause using <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">|</code>.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Example:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public class MultiCatchExample {

    public static void main(String[] args) {

        try {

            String value = "ABC";

            int number = Integer.parseInt(value);

            System.out.println(number);

        } catch (
                NumberFormatException |
                NullPointerException e
        ) {

            System.out.println("Invalid input");

        }
    }
}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Both exception types are handled by the same catch block.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            The alternatives in a multi-catch declaration cannot be related through subclassing in a way that would make one alternative redundant.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>4.5 The finally block</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            A <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">finally</code> block contains cleanup statements that normally execute after the associated try/catch processing.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Example:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public class FinallyExample {

    public static void main(String[] args) {

        try {

            int result = 10 / 0;

        } catch (ArithmeticException e) {

            System.out.println("Exception handled");

        } finally {

            System.out.println("Cleanup operation");
        }
    }
}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Output:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Exception handled
Cleanup operation`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            A finally block is useful for releasing resources and performing cleanup.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>4.6 Does finally always execute?</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            The normal rule is that finally executes when control leaves the associated try/catch construct.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            However, it is not an absolute guarantee under every possible termination condition.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            For example:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-stone-700 text-sm sm:text-base my-3 leading-relaxed">
            <li>The JVM may terminate abruptly.</li>
            <li>The process may be forcibly stopped.</li>
            <li>The machine may lose power.</li>
            <li>The thread may never complete normal execution.</li>
          </ul>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Therefore, resource safety should rely on try-with-resources where applicable rather than assumptions that every finally block must execute under all circumstances.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>4.7 Try with nested operations</span>
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public class NestedTryExample {

    public static void main(String[] args) {

        try {

            System.out.println("Outer try");

            try {

                int result = 10 / 0;

            } catch (ArithmeticException e) {

                System.out.println("Inner exception handled");
            }

            System.out.println("Outer continues");

        } catch (Exception e) {

            System.out.println("Outer exception");
        }
    }
}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Output:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Outer try
Inner exception handled
Outer continues`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Nested try-catch blocks can be used, but they should not be introduced unnecessarily.
          </p>
          <hr className="border-[#e7e3da] my-6" />
        </div>
      </section>

      {/* SECTION 5: 5. Throw and Throws */}
      <section id="section-5" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider font-mono">
            Part 2 · Explicit Signaling & Propagation
          </span>
          <span className="text-xs font-mono text-stone-500">Section 5</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          5. Throw and Throws
        </h2>
        <div className="space-y-4 text-stone-700 leading-relaxed text-sm sm:text-base">
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            These two keywords are related, but their purposes are different.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>5.1 What is throw?</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            The <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">throw</code> keyword explicitly throws an exception object.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Syntax:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`throw new ExceptionType("Error message");`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Example:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public class ThrowExample {

    static void validateAge(int age) {

        if (age < 18) {

            throw new IllegalArgumentException(
                    "Age must be at least 18"
            );
        }

        System.out.println("Eligible");
    }

    public static void main(String[] args) {

        validateAge(15);
    }
}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            The method explicitly creates and throws an exception.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>5.2 What is throws?</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            The <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">throws</code> keyword declares exceptions that a method or constructor may propagate to its caller.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Syntax:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`returnType methodName() throws ExceptionType {

    // Statements
}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Example:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`import java.io.FileReader;
import java.io.IOException;

public class ThrowsExample {

    static void openFile() throws IOException {

        FileReader reader = new FileReader("data.txt");

        reader.close();
    }

    public static void main(String[] args) {

        try {

            openFile();

        } catch (IOException e) {

            System.out.println("Unable to open file");
        }
    }
}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            The method declares its possible checked exception.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            The caller handles it.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>5.3 Difference between throw and throws</span>
          </h3>
          <div className="overflow-x-auto my-4 rounded-xl border border-[#e7e3da] shadow-2xs">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-stone-900 border-b border-[#e7e3da] font-semibold">
                <tr>
                  <th className="px-4 py-3">throw</th>
                  <th className="px-4 py-3">throws</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Explicitly throws an exception object</td>
                  <td className="px-4 py-2.5 text-stone-700">Declares possible propagated exceptions</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Used inside a method or block</td>
                  <td className="px-4 py-2.5 text-stone-700">Used in a method or constructor declaration</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Followed by an exception object</td>
                  <td className="px-4 py-2.5 text-stone-700">Followed by exception type names</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Transfers control through exception handling</td>
                  <td className="px-4 py-2.5 text-stone-700">Communicates an exception contract</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Example: <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">throw new IOException()</code></td>
                  <td className="px-4 py-2.5 text-stone-700">Example: <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">throws IOException</code></td>
                </tr>
              </tbody>
            </table>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>5.4 Exception propagation</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            An exception may propagate from one method to another until a matching handler is found.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Example:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public class ExceptionPropagation {

    static void method3() {

        int result = 10 / 0;
    }

    static void method2() {

        method3();
    }

    static void method1() {

        method2();
    }

    public static void main(String[] args) {

        try {

            method1();

        } catch (ArithmeticException e) {

            System.out.println(
                    "Exception handled in main"
            );
        }
    }
}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Output:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Exception handled in main`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            The exception originates in <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">method3()</code> and propagates through the calling methods until it reaches the matching catch block.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>5.5 Exception chaining</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Exception chaining records one exception as the cause of another.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            This is particularly useful when converting low-level failures into application-specific exceptions.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Example:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public class ExceptionChaining {

    static void loadConfiguration() {

        try {

            throw new NumberFormatException(
                    "Invalid configuration value"
            );

        } catch (NumberFormatException e) {

            throw new IllegalStateException(
                    "Configuration loading failed",
                    e
            );
        }
    }

    public static void main(String[] args) {

        try {

            loadConfiguration();

        } catch (IllegalStateException e) {

            System.out.println(e.getMessage());

            System.out.println(
                    e.getCause().getMessage()
            );
        }
    }
}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Output:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Configuration loading failed
Invalid configuration value`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            The original exception remains available through <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">getCause()</code>.
          </p>
          <hr className="border-[#e7e3da] my-6" />
        </div>
      </section>

      {/* SECTION 6: 6. Custom Exceptions */}
      <section id="section-6" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider font-mono">
            Part 2 · Domain-Specific Diagnostics
          </span>
          <span className="text-xs font-mono text-stone-500">Section 6</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          6. Custom Exceptions
        </h2>
        <div className="space-y-4 text-stone-700 leading-relaxed text-sm sm:text-base">
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>6.1 What is a custom exception?</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            A custom exception is a programmer-defined exception class used to represent application-specific failure conditions.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Standard exceptions may not always describe a business rule clearly.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            For example:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-stone-700 text-sm sm:text-base my-3 leading-relaxed">
            <li>Insufficient account balance.</li>
            <li>Invalid student registration.</li>
            <li>Course capacity exceeded.</li>
            <li>Unsupported payment operation.</li>
            <li>Invalid examination result.</li>
          </ul>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Developers can create custom exceptions to represent these conditions.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>6.2 Creating a checked custom exception</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            To create a checked exception, extend <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">Exception</code>.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Example:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`class InsufficientBalanceException extends Exception {

    InsufficientBalanceException(String message) {

        super(message);
    }
}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Implementation:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`class BankAccount {

    private double balance;

    BankAccount(double balance) {

        this.balance = balance;
    }

    void withdraw(double amount)
            throws InsufficientBalanceException {

        if (amount <= 0) {

            throw new IllegalArgumentException(
                    "Amount must be positive"
            );
        }

        if (amount > balance) {

            throw new InsufficientBalanceException(
                    "Insufficient balance"
            );
        }

        balance -= amount;
    }

    double getBalance() {

        return balance;
    }
}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Usage:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public class CustomExceptionExample {

    public static void main(String[] args) {

        BankAccount account = new BankAccount(5000);

        try {

            account.withdraw(7000);

        } catch (InsufficientBalanceException e) {

            System.out.println(e.getMessage());
        }

        System.out.println(account.getBalance());
    }
}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Output:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Insufficient balance
5000.0`}</code>
            </pre>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>6.3 Creating an unchecked custom exception</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            To create an unchecked exception, extend RuntimeException.
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`class InvalidAgeException extends RuntimeException {

    InvalidAgeException(String message) {

        super(message);
    }
}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Usage:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public class AgeExample {

    static void validateAge(int age) {

        if (age < 0) {

            throw new InvalidAgeException(
                    "Age cannot be negative"
            );
        }
    }

    public static void main(String[] args) {

        validateAge(-5);
    }
}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            This exception does not need to be declared using <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">throws</code>.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>6.4 Checked versus unchecked custom exceptions</span>
          </h3>
          <div className="overflow-x-auto my-4 rounded-xl border border-[#e7e3da] shadow-2xs">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-stone-900 border-b border-[#e7e3da] font-semibold">
                <tr>
                  <th className="px-4 py-3">Checked custom exception</th>
                  <th className="px-4 py-3">Unchecked custom exception</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Extends Exception directly or indirectly, excluding RuntimeException</td>
                  <td className="px-4 py-2.5 text-stone-700">Extends RuntimeException</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Must be caught or declared when propagated</td>
                  <td className="px-4 py-2.5 text-stone-700">No compile-time catch-or-declare requirement</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Useful for conditions callers are expected to handle explicitly</td>
                  <td className="px-4 py-2.5 text-stone-700">Useful for invalid arguments and programming contract violations</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Example: RegistrationException extends Exception</td>
                  <td className="px-4 py-2.5 text-stone-700">Example: InvalidAgeException extends RuntimeException</td>
                </tr>
              </tbody>
            </table>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>6.5 Best practices for custom exceptions</span>
          </h3>
          <ol className="list-decimal pl-5 space-y-2 text-stone-700 text-sm sm:text-base my-3 leading-relaxed">
            <li>Use meaningful class names.</li>
            <li>Include useful diagnostic messages.</li>
            <li>Preserve the original cause when translating exceptions.</li>
            <li>Avoid creating a new exception for every minor condition.</li>
            <li>Choose checked or unchecked behavior deliberately.</li>
            <li>Do not expose sensitive information in exception messages.</li>
            <li>Avoid using exceptions as ordinary control-flow mechanisms.</li>
          </ol>
          <hr className="border-[#e7e3da] my-6" />
        </div>
      </section>

      {/* SECTION 7: 7. Try-with-Resources */}
      <section id="section-7" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider font-mono">
            Part 2 · Automatic Resource Management
          </span>
          <span className="text-xs font-mono text-stone-500">Section 7</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          7. Try-with-Resources
        </h2>
        <div className="space-y-4 text-stone-700 leading-relaxed text-sm sm:text-base">
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>7.1 What is try-with-resources?</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Try-with-resources is a Java construct that automatically closes resources after the try block completes.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            It is designed for resources that implement <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">AutoCloseable</code>, including many file and stream classes.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Introduced in Java 7, it reduces the need for manually managing cleanup using finally blocks.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Example:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`import java.io.FileReader;
import java.io.IOException;

public class ResourceExample {

    public static void main(String[] args) {

        try (
                FileReader reader =
                        new FileReader("data.txt")
        ) {

            System.out.println("File opened");

        } catch (IOException e) {

            System.out.println("File operation failed");
        }
    }
}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            The FileReader is automatically closed after the resource block completes.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>7.2 Why do we need automatic resource management?</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Resources include:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-stone-700 text-sm sm:text-base my-3 leading-relaxed">
            <li>File handles.</li>
            <li>Network connections.</li>
            <li>Database connections.</li>
            <li>Input streams.</li>
            <li>Output streams.</li>
            <li>Locks and other closeable resources.</li>
          </ul>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Failing to release resources can cause:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-stone-700 text-sm sm:text-base my-3 leading-relaxed">
            <li>File descriptor exhaustion.</li>
            <li>Resource leaks.</li>
            <li>Unavailable database connections.</li>
            <li>Unnecessary memory and system pressure.</li>
          </ul>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>7.3 Multiple resources</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            A try-with-resources statement can manage multiple resources.
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;

public class MultipleResources {

    public static void main(String[] args) {

        try (
                FileReader file =
                        new FileReader("data.txt");

                BufferedReader reader =
                        new BufferedReader(file)
        ) {

            System.out.println(reader.readLine());

        } catch (IOException e) {

            System.out.println(e.getMessage());
        }
    }
}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Resources are closed automatically in reverse initialization order.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Here, the BufferedReader is closed before its underlying FileReader.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>7.4 Suppressed exceptions</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Sometimes the operation inside a try-with-resources block fails, and closing the resource also fails.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Java preserves the primary exception and records cleanup failures as suppressed exceptions.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Example:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`try (SomeResource resource = new SomeResource()) {

    // Operation that may fail

} catch (Exception e) {

    System.out.println(e.getMessage());

    for (Throwable suppressed : e.getSuppressed()) {

        System.out.println(suppressed.getMessage());
    }
}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            This behavior is useful when diagnosing multiple failures involving resources.
          </p>
          <hr className="border-[#e7e3da] my-6" />
        </div>
      </section>

      {/* SECTION 8: 8. Generics */}
      <section id="section-8" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider font-mono">
            Part 3 · Parametric Polymorphism
          </span>
          <span className="text-xs font-mono text-stone-500">Section 8</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          8. Generics
        </h2>
        <div className="space-y-4 text-stone-700 leading-relaxed text-sm sm:text-base">
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>8.1 What are generics?</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Generics allow classes, interfaces, and methods to operate on different types while maintaining compile-time type safety.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            They enable reusable code without forcing developers to work with untyped Object references and manual casts.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Consider:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Object value = "Java";

String text = (String) value;`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            This uses an explicit cast.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            With generics:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`String value = "Java";`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            A generic collection can enforce the type of values it stores.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>8.2 Why do we need generics?</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Before generics, collections commonly stored Object references.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Example of non-generic style:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`import java.util.ArrayList;

public class RawCollection {

    public static void main(String[] args) {

        ArrayList list = new ArrayList();

        list.add("Java");

        list.add(100);

        String value = (String) list.get(0);

        System.out.println(value);
    }
}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Problems:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-stone-700 text-sm sm:text-base my-3 leading-relaxed">
            <li>Multiple unrelated types can enter the same collection.</li>
            <li>Manual casting is required.</li>
            <li>Incorrect casts can fail at runtime.</li>
            <li>Type errors are not detected early enough.</li>
          </ul>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Generic solution:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`import java.util.ArrayList;

public class GenericCollection {

    public static void main(String[] args) {

        ArrayList<String> languages = new ArrayList<>();

        languages.add("Java");

        languages.add("Python");

        String value = languages.get(0);

        System.out.println(value);
    }
}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Now the collection is restricted to String values.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Adding an integer directly is a compile-time error.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>8.3 Benefits of generics</span>
          </h3>
          <ol className="list-decimal pl-5 space-y-2 text-stone-700 text-sm sm:text-base my-3 leading-relaxed">
            <li>Compile-time type checking.</li>
            <li>Reduced manual casting.</li>
            <li>Better code reuse.</li>
            <li>Improved readability.</li>
            <li>More reliable collections.</li>
            <li>Reusable algorithms.</li>
            <li>Clearer APIs.</li>
          </ol>
          <hr className="border-[#e7e3da] my-6" />
        </div>
      </section>

      {/* SECTION 9: 9. Generic Classes */}
      <section id="section-9" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider font-mono">
            Part 3 · Generic Types & Constraints
          </span>
          <span className="text-xs font-mono text-stone-500">Section 9</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          9. Generic Classes
        </h2>
        <div className="space-y-4 text-stone-700 leading-relaxed text-sm sm:text-base">
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>9.1 What is a generic class?</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            A generic class declares one or more type parameters.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            The type parameters act as placeholders for actual types supplied when the class is used.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Syntax:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`class ClassName<T> {

    T value;
}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Here, T represents a type parameter.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            By convention, common type parameter names include:
          </p>
          <div className="overflow-x-auto my-4 rounded-xl border border-[#e7e3da] shadow-2xs">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-stone-900 border-b border-[#e7e3da] font-semibold">
                <tr>
                  <th className="px-4 py-3">Letter</th>
                  <th className="px-4 py-3">Common meaning</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">T</td>
                  <td className="px-4 py-2.5 text-stone-700">Type</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">E</td>
                  <td className="px-4 py-2.5 text-stone-700">Element</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">K</td>
                  <td className="px-4 py-2.5 text-stone-700">Key</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">V</td>
                  <td className="px-4 py-2.5 text-stone-700">Value</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">N</td>
                  <td className="px-4 py-2.5 text-stone-700">Number</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">R</td>
                  <td className="px-4 py-2.5 text-stone-700">Result</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            These letters are conventions, not reserved keywords.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>9.2 Creating a generic class</span>
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`class Box<T> {

    private T value;

    Box(T value) {

        this.value = value;
    }

    T getValue() {

        return value;
    }

    void setValue(T value) {

        this.value = value;
    }
}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Usage:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public class GenericBoxExample {

    public static void main(String[] args) {

        Box<String> stringBox =
                new Box<>("Java");

        Box<Integer> integerBox =
                new Box<>(100);

        System.out.println(stringBox.getValue());

        System.out.println(integerBox.getValue());
    }
}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Output:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Java
100`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            The same class works with different reference types.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>9.3 Multiple type parameters</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            A generic class can declare multiple type parameters.
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`class Pair<K, V> {

    private K key;

    private V value;

    Pair(K key, V value) {

        this.key = key;

        this.value = value;
    }

    K getKey() {

        return key;
    }

    V getValue() {

        return value;
    }
}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Usage:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public class PairExample {

    public static void main(String[] args) {

        Pair<Integer, String> student =
                new Pair<>(101, "Alex");

        System.out.println(student.getKey());

        System.out.println(student.getValue());
    }
}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Output:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`101
Alex`}</code>
            </pre>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>9.4 Generic classes with arrays</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            A generic class may hold an array reference, but Java does not permit ordinary direct creation of arrays of a non-reifiable type such as <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">new T[10]</code>.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            For an introductory example, a generic class can use a reference to an array supplied by the caller:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`class ArrayContainer<T> {

    private final T[] values;

    ArrayContainer(T[] values) {

        this.values = values;
    }

    T get(int index) {

        return values[index];
    }

    int size() {

        return values.length;
    }
}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Usage:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`String[] names = {"Alex", "Sam"};

ArrayContainer<String> container =
        new ArrayContainer<>(names);`}</code>
            </pre>
          </div>
          <hr className="border-[#e7e3da] my-6" />
        </div>
      </section>

      {/* SECTION 10: 10. Generic Methods */}
      <section id="section-10" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider font-mono">
            Part 3 · Method-Level Type Inference
          </span>
          <span className="text-xs font-mono text-stone-500">Section 10</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          10. Generic Methods
        </h2>
        <div className="space-y-4 text-stone-700 leading-relaxed text-sm sm:text-base">
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>10.1 What is a generic method?</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            A generic method declares its own type parameter or parameters.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            It can be declared inside a non-generic class or inside a generic class.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Syntax:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public static <T> void methodName(T value) {

}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            The type parameter declaration appears before the return type.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>10.2 Generic method example</span>
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public class GenericMethodExample {

    public static <T> void display(T value) {

        System.out.println(value);
    }

    public static void main(String[] args) {

        display("Java");

        display(100);

        display(25.5);

        display(true);
    }
}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Output:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Java
100
25.5
true`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            The method accepts different reference types.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>10.3 Generic method with arrays</span>
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public class ArrayDisplay {

    static <T> void displayArray(T[] values) {

        for (T value : values) {

            System.out.println(value);
        }
    }

    public static void main(String[] args) {

        String[] names = {"Alex", "Sam", "John"};

        Integer[] numbers = {10, 20, 30};

        displayArray(names);

        displayArray(numbers);
    }
}`}</code>
            </pre>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>10.4 Generic method versus generic class</span>
          </h3>
          <div className="overflow-x-auto my-4 rounded-xl border border-[#e7e3da] shadow-2xs">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-stone-900 border-b border-[#e7e3da] font-semibold">
                <tr>
                  <th className="px-4 py-3">Generic class</th>
                  <th className="px-4 py-3">Generic method</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Declares type parameters at class level</td>
                  <td className="px-4 py-2.5 text-stone-700">Declares type parameters at method level</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Parameters apply to the class instance's declarations</td>
                  <td className="px-4 py-2.5 text-stone-700">Parameters apply to a particular method</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Example: <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">class Box&lt;T&gt;</code></td>
                  <td className="px-4 py-2.5 text-stone-700">Example: <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">&lt;T&gt; void display(T value)</code></td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Types are supplied when using the parameterized class</td>
                  <td className="px-4 py-2.5 text-stone-700">Types are often inferred from method arguments</td>
                </tr>
              </tbody>
            </table>
          </div>
          <hr className="border-[#e7e3da] my-6" />
        </div>
      </section>

      {/* SECTION 11: 11. Bounded Type Parameters */}
      <section id="section-11" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider font-mono">
            Part 4 · Wildcards & PECS Principle
          </span>
          <span className="text-xs font-mono text-stone-500">Section 11</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          11. Bounded Type Parameters
        </h2>
        <div className="space-y-4 text-stone-700 leading-relaxed text-sm sm:text-base">
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>11.1 What is a bounded type parameter?</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            A bounded type parameter restricts which types can be supplied to a generic declaration.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Without a bound, a type parameter can represent any reference type.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            When a generic operation requires particular capabilities, the type can be restricted.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Syntax:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`<T extends SomeType>`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            The keyword <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">extends</code> is used for both class and interface bounds.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>11.2 Upper-bounded type parameter</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Example:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`class NumberBox<T extends Number> {

    private T value;

    NumberBox(T value) {

        this.value = value;
    }

    double getDoubleValue() {

        return value.doubleValue();
    }
}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Usage:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public class NumberBoxExample {

    public static void main(String[] args) {

        NumberBox<Integer> a =
                new NumberBox<>(100);

        NumberBox<Double> b =
                new NumberBox<>(25.5);

        System.out.println(a.getDoubleValue());

        System.out.println(b.getDoubleValue());
    }
}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Output:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`100.0
25.5`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Number is the superclass of wrapper classes such as Integer, Double, and Float.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            A String cannot be supplied as the type argument because String does not extend Number.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>11.3 Bounded generic method</span>
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public class NumberUtility {

    static <T extends Number> double sum(
            T a,
            T b
    ) {

        return a.doubleValue() + b.doubleValue();
    }

    public static void main(String[] args) {

        System.out.println(sum(10, 20.5));
    }
}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Output:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`30.5`}</code>
            </pre>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>11.4 Multiple bounds</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            A type parameter can have multiple bounds.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Example:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`<T extends Number & Comparable<T>>`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            This means T must:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-stone-700 text-sm sm:text-base my-3 leading-relaxed">
            <li>Extend Number.</li>
            <li>Implement Comparable of the same type.</li>
          </ul>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Example:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public class GenericComparison {

    static <T extends Number & Comparable<T>>
    T maximum(T a, T b) {

        return a.compareTo(b) >= 0 ? a : b;
    }

    public static void main(String[] args) {

        System.out.println(maximum(10, 20));

        System.out.println(maximum(10.5, 5.5));
    }
}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Output:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`20
10.5`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Important rule:
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            If a class bound is present, it must appear before interface bounds.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>11.5 Wildcards in generics</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            A wildcard uses <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">?</code> to represent an unknown type.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Example:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`List<?> values;`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            This represents a List whose element type is unknown to the current code.
          </p>
          <h4 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span>Unbounded wildcard</span>
          </h4>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`static void display(List<?> values) {

    for (Object value : values) {

        System.out.println(value);
    }
}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            This method can display lists of different types.
          </p>
          <h4 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span>Upper-bounded wildcard</span>
          </h4>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Syntax:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`<? extends Number>`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            It means an unknown type that is Number or a subtype of Number.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Example:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`static double total(List<? extends Number> numbers) {

    double sum = 0;

    for (Number number : numbers) {

        sum += number.doubleValue();
    }

    return sum;
}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            This method can accept lists of Integer, Double, or other Number subtypes.
          </p>
          <h4 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span>Lower-bounded wildcard</span>
          </h4>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Syntax:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`<? super Integer>`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            It means an unknown type that is Integer or a supertype of Integer.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Example:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`static void addNumbers(List<? super Integer> values) {

    values.add(10);

    values.add(20);

    values.add(30);
}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            This method can add Integer values to a suitable list.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>11.6 PECS principle</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            PECS stands for:
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-stone-900">Producer Extends, Consumer Super.</strong>
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            This is a useful guideline when designing wildcard-based APIs.
          </p>
          <ul className="list-disc pl-5 space-y-2 text-stone-700 text-sm sm:text-base my-3 leading-relaxed">
            <li>Use <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">? extends T</code> when a structure produces values that your code reads as T.</li>
            <li>Use <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">? super T</code> when a structure consumes values of type T that your code adds.</li>
          </ul>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Example:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`static double sum(
        List<? extends Number> values
) {

    double result = 0;

    for (Number value : values) {

        result += value.doubleValue();
    }

    return result;
}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Here, the list provides numbers for reading.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Example:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`static void addValues(
        List<? super Integer> values
) {

    values.add(100);

    values.add(200);
}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Here, the list accepts integer values.
          </p>
          <hr className="border-[#e7e3da] my-6" />
        </div>
      </section>

      {/* SECTION 12: 12. Type Erasure */}
      <section id="section-12" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider font-mono">
            Part 4 · JVM Bytecode Compatibility
          </span>
          <span className="text-xs font-mono text-stone-500">Section 12</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          12. Type Erasure
        </h2>
        <div className="space-y-4 text-stone-700 leading-relaxed text-sm sm:text-base">
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>12.1 What is type erasure?</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Java implements generics primarily through a compilation technique called type erasure.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            During compilation, generic type parameters are erased or replaced according to their bounds.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            The compiler inserts required type checks and casts as necessary to preserve type safety.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            This design maintains compatibility with older Java bytecode and APIs.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>12.2 Example</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Generic declaration:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`class Box<T> {

    private T value;

    void set(T value) {

        this.value = value;
    }

    T get() {

        return value;
    }
}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            For an unbounded T, the erased form uses Object at the relevant generic boundaries.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Conceptually:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`class Box {

    private Object value;

    void set(Object value) {

        this.value = value;
    }

    Object get() {

        return value;
    }
}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            This is a conceptual illustration of erasure, not the literal source code generated by the compiler.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>12.3 Important restrictions of generics</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Java imposes some restrictions because of type erasure and the type system.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Examples:
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-stone-900">Cannot create an array of a non-reifiable type directly</strong>
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Invalid:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`// T[] values = new T[10];`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-stone-900">Cannot use primitive types as type arguments directly</strong>
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Invalid:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`// List<int> numbers;`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Correct:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`List<Integer> numbers;`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-stone-900">Cannot use a type parameter in an ordinary new expression</strong>
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Invalid:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`// T value = new T();`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-stone-900">Cannot use instanceof with a non-reifiable parameterized type</strong>
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Generally invalid:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`// if (value instanceof List<String>) {}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            A check against the raw generic class is permitted:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`if (value instanceof List<?>) {
    System.out.println("It is a List");
}`}</code>
            </pre>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>12.4 Why type erasure matters</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Understanding type erasure helps explain:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-stone-700 text-sm sm:text-base my-3 leading-relaxed">
            <li>Why generic arrays are restricted.</li>
            <li>Why parameterized types generally share the same runtime class.</li>
            <li>Why primitive types use wrapper classes in generics.</li>
            <li>Why certain overloads cause name clashes.</li>
            <li>Why generic code may require carefully designed APIs.</li>
          </ul>
          <hr className="border-[#e7e3da] my-6" />
        </div>
      </section>

      {/* SECTION 13: 13. Introduction to the Collections Framework */}
      <section id="section-13" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider font-mono">
            Part 5 · Framework Architecture
          </span>
          <span className="text-xs font-mono text-stone-500">Section 13</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          13. Introduction to the Collections Framework
        </h2>
        <div className="space-y-4 text-stone-700 leading-relaxed text-sm sm:text-base">
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>13.1 What is the Java Collections Framework?</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            The Java Collections Framework is a group of interfaces, implementations, and algorithms designed for storing and manipulating collections of objects.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            It provides reusable data structures so developers do not need to implement every collection manually.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            The framework is mainly available through:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`java.util`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Common collection types include:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-stone-700 text-sm sm:text-base my-3 leading-relaxed">
            <li>ArrayList.</li>
            <li>LinkedList.</li>
            <li>HashSet.</li>
            <li>LinkedHashSet.</li>
            <li>TreeSet.</li>
            <li>PriorityQueue.</li>
            <li>ArrayDeque.</li>
            <li>HashMap.</li>
            <li>LinkedHashMap.</li>
            <li>TreeMap.</li>
          </ul>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>13.2 Why do we need collections?</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Arrays have fixed lengths.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Real applications frequently need collections that can grow or shrink dynamically.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Example:
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            A student application may start with ten students and later contain ten thousand.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Creating a large fixed array in advance is often inconvenient.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            An ArrayList can expand as elements are added.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>13.3 Collections Framework architecture</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            A simplified view:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`                   Iterable
                      |
                  Collection
                      |
          +-----------+-----------+
          |           |           |
         List         Set       Queue
          |           |           |
      ArrayList    HashSet   PriorityQueue
      LinkedList   TreeSet   ArrayDeque
      Vector       LinkedHashSet
          |
       ListIterator


                  Map
                   |
          +--------+--------+
          |        |        |
       HashMap  TreeMap  LinkedHashMap`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Important:
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Map is part of the Collections Framework, but it does not extend the Collection interface.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            It stores key-value mappings rather than individual elements.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>13.4 Collection versus Collections</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            These names refer to different things.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-stone-900">Collection</strong>
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            An interface representing a group of elements.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-stone-900">Collections</strong>
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            A utility class containing static algorithms and helper methods for collections.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Example:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Collections.sort(list);

Collections.reverse(list);

Collections.shuffle(list);`}</code>
            </pre>
          </div>
          <hr className="border-[#e7e3da] my-6" />
        </div>
      </section>

      {/* SECTION 14: 14. List Interface */}
      <section id="section-14" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider font-mono">
            Part 5 · ArrayList vs LinkedList
          </span>
          <span className="text-xs font-mono text-stone-500">Section 14</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          14. List Interface
        </h2>
        <div className="space-y-4 text-stone-700 leading-relaxed text-sm sm:text-base">
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>14.1 What is a List?</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            A List is an ordered collection of elements.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            It allows duplicate values and supports position-based access.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Common implementations include:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-stone-700 text-sm sm:text-base my-3 leading-relaxed">
            <li>ArrayList.</li>
            <li>LinkedList.</li>
            <li>Vector.</li>
          </ul>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>14.2 ArrayList</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            ArrayList is a resizable-array implementation of the List interface.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            It supports:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-stone-700 text-sm sm:text-base my-3 leading-relaxed">
            <li>Dynamic resizing.</li>
            <li>Indexed access.</li>
            <li>Duplicate elements.</li>
            <li>Insertion-order iteration.</li>
            <li>Null elements.</li>
          </ul>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Example:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`import java.util.ArrayList;

public class ArrayListExample {

    public static void main(String[] args) {

        ArrayList<String> languages =
                new ArrayList<>();

        languages.add("Java");

        languages.add("Python");

        languages.add("C++");

        languages.add("Java");

        System.out.println(languages);
    }
}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Output:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`[Java, Python, C++, Java]`}</code>
            </pre>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>14.3 Important ArrayList methods</span>
          </h3>
          <div className="overflow-x-auto my-4 rounded-xl border border-[#e7e3da] shadow-2xs">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-stone-900 border-b border-[#e7e3da] font-semibold">
                <tr>
                  <th className="px-4 py-3">Method</th>
                  <th className="px-4 py-3">Purpose</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700"><code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">add()</code></td>
                  <td className="px-4 py-2.5 text-stone-700">Adds an element</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700"><code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">get()</code></td>
                  <td className="px-4 py-2.5 text-stone-700">Retrieves an element</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700"><code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">set()</code></td>
                  <td className="px-4 py-2.5 text-stone-700">Replaces an element</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700"><code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">remove()</code></td>
                  <td className="px-4 py-2.5 text-stone-700">Removes an element</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700"><code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">size()</code></td>
                  <td className="px-4 py-2.5 text-stone-700">Returns the number of elements</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700"><code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">contains()</code></td>
                  <td className="px-4 py-2.5 text-stone-700">Checks whether an element exists</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700"><code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">clear()</code></td>
                  <td className="px-4 py-2.5 text-stone-700">Removes all elements</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700"><code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">isEmpty()</code></td>
                  <td className="px-4 py-2.5 text-stone-700">Checks whether the list is empty</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700"><code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">indexOf()</code></td>
                  <td className="px-4 py-2.5 text-stone-700">Returns the first matching position</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700"><code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">lastIndexOf()</code></td>
                  <td className="px-4 py-2.5 text-stone-700">Returns the final matching position</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700"><code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">toArray()</code></td>
                  <td className="px-4 py-2.5 text-stone-700">Converts the list to an array representation</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Example:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`import java.util.ArrayList;

public class ListMethods {

    public static void main(String[] args) {

        ArrayList<Integer> numbers =
                new ArrayList<>();

        numbers.add(10);

        numbers.add(20);

        numbers.add(30);

        System.out.println(numbers.get(1));

        numbers.set(1, 100);

        numbers.remove(Integer.valueOf(10));

        System.out.println(numbers);

        System.out.println(numbers.size());
    }
}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Output:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`20
[100, 30]
2`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Notice the difference:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`numbers.remove(1);`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            removes the element at index 1.
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`numbers.remove(Integer.valueOf(10));`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            removes the matching Integer value.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            This distinction matters for lists of numeric wrapper types.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>14.4 ArrayList traversal</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Using a standard for loop:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`for (int i = 0; i < numbers.size(); i++) {

    System.out.println(numbers.get(i));
}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Using enhanced for:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`for (Integer number : numbers) {

    System.out.println(number);
}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Using forEach:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`numbers.forEach(
        number -> System.out.println(number)
);`}</code>
            </pre>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>14.5 LinkedList</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            LinkedList is a doubly linked list implementation.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Each node maintains links to adjacent elements.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Conceptual structure:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`null
 |
 v
[10] <--> [20] <--> [30]
                         |
                         v
                        null`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Example:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`import java.util.LinkedList;

public class LinkedListExample {

    public static void main(String[] args) {

        LinkedList<String> names = new LinkedList<>();

        names.add("Alex");

        names.add("Sam");

        names.add("John");

        names.addFirst("Admin");

        names.addLast("Guest");

        System.out.println(names);
    }
}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Output:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`[Admin, Alex, Sam, John, Guest]`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            LinkedList also implements Deque.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            It therefore supports operations at both ends.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>14.6 ArrayList versus LinkedList</span>
          </h3>
          <div className="overflow-x-auto my-4 rounded-xl border border-[#e7e3da] shadow-2xs">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-stone-900 border-b border-[#e7e3da] font-semibold">
                <tr>
                  <th className="px-4 py-3">Feature</th>
                  <th className="px-4 py-3">ArrayList</th>
                  <th className="px-4 py-3">LinkedList</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Internal structure</td>
                  <td className="px-4 py-2.5 text-stone-700">Resizable array</td>
                  <td className="px-4 py-2.5 text-stone-700">Doubly linked list</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Indexed access</td>
                  <td className="px-4 py-2.5 text-stone-700">O(1)</td>
                  <td className="px-4 py-2.5 text-stone-700">O(n)</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Add at end</td>
                  <td className="px-4 py-2.5 text-stone-700">Amortized O(1)</td>
                  <td className="px-4 py-2.5 text-stone-700">O(1)</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Remove at beginning</td>
                  <td className="px-4 py-2.5 text-stone-700">O(n)</td>
                  <td className="px-4 py-2.5 text-stone-700">O(1)</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Insert in middle by index</td>
                  <td className="px-4 py-2.5 text-stone-700">O(n)</td>
                  <td className="px-4 py-2.5 text-stone-700">O(n) to locate position; linking afterward is O(1)</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Memory overhead</td>
                  <td className="px-4 py-2.5 text-stone-700">Generally lower</td>
                  <td className="px-4 py-2.5 text-stone-700">Generally higher due to node links</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Common use</td>
                  <td className="px-4 py-2.5 text-stone-700">General-purpose indexed collections</td>
                  <td className="px-4 py-2.5 text-stone-700">Deque-style operations and suitable linked-list use cases</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Do not assume LinkedList is always faster for frequent insertions or deletions. Finding the insertion point can still require traversal, and its additional memory and cache behavior can make it slower in practice.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            For many ordinary application workloads, ArrayList is a good default.
          </p>
          <hr className="border-[#e7e3da] my-6" />
        </div>
      </section>

      {/* SECTION 15: 15. Set Interface */}
      <section id="section-15" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider font-mono">
            Part 5 · HashSet, LinkedHashSet & TreeSet
          </span>
          <span className="text-xs font-mono text-stone-500">Section 15</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          15. Set Interface
        </h2>
        <div className="space-y-4 text-stone-700 leading-relaxed text-sm sm:text-base">
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>15.1 What is a Set?</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            A Set is a collection that does not contain duplicate elements according to its equality semantics.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            The major Set implementations are:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-stone-700 text-sm sm:text-base my-3 leading-relaxed">
            <li>HashSet.</li>
            <li>LinkedHashSet.</li>
            <li>TreeSet.</li>
          </ul>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>15.2 HashSet</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            HashSet stores unique elements using hashing.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            It does not guarantee iteration order.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Example:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`import java.util.HashSet;

public class HashSetExample {

    public static void main(String[] args) {

        HashSet<Integer> numbers = new HashSet<>();

        numbers.add(10);

        numbers.add(20);

        numbers.add(30);

        numbers.add(10);

        System.out.println(numbers);
    }
}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            The value 10 is stored only once.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Do not rely on a particular printed iteration order.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>15.3 LinkedHashSet</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            LinkedHashSet maintains insertion order during iteration while ensuring uniqueness.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Example:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`import java.util.LinkedHashSet;

public class LinkedHashSetExample {

    public static void main(String[] args) {

        LinkedHashSet<String> names =
                new LinkedHashSet<>();

        names.add("Alex");

        names.add("Sam");

        names.add("John");

        names.add("Alex");

        System.out.println(names);
    }
}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Output:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`[Alex, Sam, John]`}</code>
            </pre>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>15.4 TreeSet</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            TreeSet stores unique elements according to a sorted ordering.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Example:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`import java.util.TreeSet;

public class TreeSetExample {

    public static void main(String[] args) {

        TreeSet<Integer> numbers = new TreeSet<>();

        numbers.add(40);

        numbers.add(10);

        numbers.add(30);

        numbers.add(20);

        System.out.println(numbers);
    }
}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Output:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`[10, 20, 30, 40]`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            TreeSet generally provides logarithmic-time basic operations with its usual tree-based implementation.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Elements must be comparable or an appropriate comparator must be supplied.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>15.5 Set comparison</span>
          </h3>
          <div className="overflow-x-auto my-4 rounded-xl border border-[#e7e3da] shadow-2xs">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-stone-900 border-b border-[#e7e3da] font-semibold">
                <tr>
                  <th className="px-4 py-3">Implementation</th>
                  <th className="px-4 py-3">Ordering behavior</th>
                  <th className="px-4 py-3">Duplicate elements</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">HashSet</td>
                  <td className="px-4 py-2.5 text-stone-700">No guaranteed iteration order</td>
                  <td className="px-4 py-2.5 text-stone-700">Not allowed</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">LinkedHashSet</td>
                  <td className="px-4 py-2.5 text-stone-700">Insertion order</td>
                  <td className="px-4 py-2.5 text-stone-700">Not allowed</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">TreeSet</td>
                  <td className="px-4 py-2.5 text-stone-700">Sorted order</td>
                  <td className="px-4 py-2.5 text-stone-700">Not allowed</td>
                </tr>
              </tbody>
            </table>
          </div>
          <hr className="border-[#e7e3da] my-6" />
        </div>
      </section>

      {/* SECTION 16: 16. Queue and Deque Interfaces */}
      <section id="section-16" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider font-mono">
            Part 6 · PriorityQueues & ArrayDeques
          </span>
          <span className="text-xs font-mono text-stone-500">Section 16</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          16. Queue and Deque Interfaces
        </h2>
        <div className="space-y-4 text-stone-700 leading-relaxed text-sm sm:text-base">
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>16.1 What is a Queue?</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            A Queue is a collection designed for holding elements before processing.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            The conventional queue model follows FIFO:
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            First In, First Out.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Example:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Insertion:

10 -> 20 -> 30

Removal:

10 first
20 second
30 third`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Queues are commonly used in:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-stone-700 text-sm sm:text-base my-3 leading-relaxed">
            <li>Task scheduling.</li>
            <li>Job processing.</li>
            <li>Breadth-first search.</li>
            <li>Request buffering.</li>
            <li>Message processing.</li>
          </ul>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>16.2 Queue implementation</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Java provides the Queue interface.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Example using LinkedList:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`import java.util.LinkedList;
import java.util.Queue;

public class QueueExample {

    public static void main(String[] args) {

        Queue<String> tasks = new LinkedList<>();

        tasks.offer("Task 1");

        tasks.offer("Task 2");

        tasks.offer("Task 3");

        System.out.println(tasks);

        System.out.println(tasks.poll());

        System.out.println(tasks.peek());
    }
}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Output:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`[Task 1, Task 2, Task 3]
Task 1
Task 2`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Important Queue methods:
          </p>
          <div className="overflow-x-auto my-4 rounded-xl border border-[#e7e3da] shadow-2xs">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-stone-900 border-b border-[#e7e3da] font-semibold">
                <tr>
                  <th className="px-4 py-3">Method</th>
                  <th className="px-4 py-3">Purpose</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700"><code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">offer()</code></td>
                  <td className="px-4 py-2.5 text-stone-700">Inserts an element when possible</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700"><code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">poll()</code></td>
                  <td className="px-4 py-2.5 text-stone-700">Retrieves and removes the head, or returns null if empty</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700"><code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">peek()</code></td>
                  <td className="px-4 py-2.5 text-stone-700">Retrieves the head without removing it, or returns null if empty</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700"><code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">remove()</code></td>
                  <td className="px-4 py-2.5 text-stone-700">Removes the head or throws when empty</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700"><code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">element()</code></td>
                  <td className="px-4 py-2.5 text-stone-700">Retrieves the head or throws when empty</td>
                </tr>
              </tbody>
            </table>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>16.3 PriorityQueue</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            PriorityQueue processes elements according to their ordering or supplied comparator.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            It does not necessarily process elements in insertion order.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Example:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`import java.util.PriorityQueue;

public class PriorityQueueExample {

    public static void main(String[] args) {

        PriorityQueue<Integer> queue =
                new PriorityQueue<>();

        queue.offer(40);

        queue.offer(10);

        queue.offer(30);

        queue.offer(20);

        while (!queue.isEmpty()) {

            System.out.println(queue.poll());
        }
    }
}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Output:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`10
20
30
40`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            The default natural ordering makes the smallest element the head.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>16.4 Deque</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Deque means double-ended queue.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            It supports insertion and removal at both ends.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Example using ArrayDeque:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`import java.util.ArrayDeque;
import java.util.Deque;

public class DequeExample {

    public static void main(String[] args) {

        Deque<Integer> deque = new ArrayDeque<>();

        deque.addFirst(10);

        deque.addLast(20);

        deque.addFirst(5);

        System.out.println(deque);

        System.out.println(deque.removeFirst());

        System.out.println(deque.removeLast());
    }
}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Output:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`[5, 10, 20]
5
20`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            ArrayDeque is also frequently used to implement:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-stone-700 text-sm sm:text-base my-3 leading-relaxed">
            <li>Stacks.</li>
            <li>Queues.</li>
            <li>Monotonic queues.</li>
            <li>Deque-based algorithms.</li>
          </ul>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            It does not permit null elements.
          </p>
          <hr className="border-[#e7e3da] my-6" />
        </div>
      </section>

      {/* SECTION 17: 17. Map Interface */}
      <section id="section-17" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider font-mono">
            Part 6 · Key-Value Systems & Hash Tables
          </span>
          <span className="text-xs font-mono text-stone-500">Section 17</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          17. Map Interface
        </h2>
        <div className="space-y-4 text-stone-700 leading-relaxed text-sm sm:text-base">
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>17.1 What is a Map?</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            A Map stores key-value pairs.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Every key maps to at most one value.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Example:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`101 -> Alex
102 -> Sam
103 -> John`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Maps are useful for:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-stone-700 text-sm sm:text-base my-3 leading-relaxed">
            <li>Student records.</li>
            <li>Product inventories.</li>
            <li>User sessions.</li>
            <li>Configuration settings.</li>
            <li>Word frequency.</li>
            <li>Database lookups.</li>
          </ul>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>17.2 HashMap</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            HashMap is a hash-table-based implementation of Map.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            It provides efficient average-case key-based lookup, insertion, and removal under suitable hashing conditions.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Example:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`import java.util.HashMap;

public class HashMapExample {

    public static void main(String[] args) {

        HashMap<Integer, String> students =
                new HashMap<>();

        students.put(101, "Alex");

        students.put(102, "Sam");

        students.put(103, "John");

        System.out.println(students.get(101));
    }
}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Output:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Alex`}</code>
            </pre>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>17.3 Important HashMap methods</span>
          </h3>
          <div className="overflow-x-auto my-4 rounded-xl border border-[#e7e3da] shadow-2xs">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-stone-900 border-b border-[#e7e3da] font-semibold">
                <tr>
                  <th className="px-4 py-3">Method</th>
                  <th className="px-4 py-3">Purpose</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700"><code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">put()</code></td>
                  <td className="px-4 py-2.5 text-stone-700">Adds or updates a key-value pair</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700"><code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">get()</code></td>
                  <td className="px-4 py-2.5 text-stone-700">Retrieves a value</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700"><code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">remove()</code></td>
                  <td className="px-4 py-2.5 text-stone-700">Removes a mapping</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700"><code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">containsKey()</code></td>
                  <td className="px-4 py-2.5 text-stone-700">Checks whether a key exists</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700"><code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">containsValue()</code></td>
                  <td className="px-4 py-2.5 text-stone-700">Checks whether a value exists</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700"><code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">keySet()</code></td>
                  <td className="px-4 py-2.5 text-stone-700">Returns the set of keys</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700"><code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">values()</code></td>
                  <td className="px-4 py-2.5 text-stone-700">Returns the collection of values</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700"><code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">entrySet()</code></td>
                  <td className="px-4 py-2.5 text-stone-700">Returns key-value entries</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700"><code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">putIfAbsent()</code></td>
                  <td className="px-4 py-2.5 text-stone-700">Inserts a mapping if the key is absent</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700"><code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">getOrDefault()</code></td>
                  <td className="px-4 py-2.5 text-stone-700">Returns a value or a fallback</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700"><code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">computeIfAbsent()</code></td>
                  <td className="px-4 py-2.5 text-stone-700">Computes and inserts a value when absent</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700"><code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">merge()</code></td>
                  <td className="px-4 py-2.5 text-stone-700">Combines a value with an existing mapping</td>
                </tr>
              </tbody>
            </table>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>17.4 Duplicate keys</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            A Map does not store multiple independent mappings for the same key.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            If the same key is inserted again, its value is replaced.
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`HashMap<Integer, String> students = new HashMap<>();

students.put(101, "Alex");

students.put(101, "Sam");

System.out.println(students.get(101));`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Output:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Sam`}</code>
            </pre>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>17.5 Iterating through a Map</span>
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`import java.util.HashMap;
import java.util.Map;

public class MapTraversal {

    public static void main(String[] args) {

        Map<Integer, String> students = new HashMap<>();

        students.put(101, "Alex");

        students.put(102, "Sam");

        students.put(103, "John");

        for (Map.Entry<Integer, String> entry :
                students.entrySet()) {

            System.out.println(
                    entry.getKey() + " = " +
                    entry.getValue()
            );
        }
    }
}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            The iteration order is not guaranteed by HashMap.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>17.6 LinkedHashMap</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            LinkedHashMap maintains a defined encounter order, normally insertion order.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            It can also be configured for access order, which can be useful in cache implementations.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>17.7 TreeMap</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            TreeMap stores keys according to their natural ordering or a supplied comparator.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Example:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`import java.util.TreeMap;

public class TreeMapExample {

    public static void main(String[] args) {

        TreeMap<Integer, String> students =
                new TreeMap<>();

        students.put(103, "John");

        students.put(101, "Alex");

        students.put(102, "Sam");

        System.out.println(students);
    }
}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Output:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`{101=Alex, 102=Sam, 103=John}`}</code>
            </pre>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>17.8 Map comparison</span>
          </h3>
          <div className="overflow-x-auto my-4 rounded-xl border border-[#e7e3da] shadow-2xs">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-stone-900 border-b border-[#e7e3da] font-semibold">
                <tr>
                  <th className="px-4 py-3">Implementation</th>
                  <th className="px-4 py-3">Ordering</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">HashMap</td>
                  <td className="px-4 py-2.5 text-stone-700">No guaranteed iteration order</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">LinkedHashMap</td>
                  <td className="px-4 py-2.5 text-stone-700">Insertion order by default</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">TreeMap</td>
                  <td className="px-4 py-2.5 text-stone-700">Sorted by key</td>
                </tr>
              </tbody>
            </table>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>17.9 Choosing a collection</span>
          </h3>
          <div className="overflow-x-auto my-4 rounded-xl border border-[#e7e3da] shadow-2xs">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-stone-900 border-b border-[#e7e3da] font-semibold">
                <tr>
                  <th className="px-4 py-3">Requirement</th>
                  <th className="px-4 py-3">Suitable choice</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Dynamic ordered list</td>
                  <td className="px-4 py-2.5 text-stone-700">ArrayList</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Efficient deque operations</td>
                  <td className="px-4 py-2.5 text-stone-700">ArrayDeque</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Unique values without ordering requirements</td>
                  <td className="px-4 py-2.5 text-stone-700">HashSet</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Unique values with insertion order</td>
                  <td className="px-4 py-2.5 text-stone-700">LinkedHashSet</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Unique sorted values</td>
                  <td className="px-4 py-2.5 text-stone-700">TreeSet</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">FIFO queue</td>
                  <td className="px-4 py-2.5 text-stone-700">ArrayDeque or LinkedList</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Priority-based processing</td>
                  <td className="px-4 py-2.5 text-stone-700">PriorityQueue</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Key-value storage</td>
                  <td className="px-4 py-2.5 text-stone-700">HashMap</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Insertion-ordered key-value storage</td>
                  <td className="px-4 py-2.5 text-stone-700">LinkedHashMap</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Sorted key-value storage</td>
                  <td className="px-4 py-2.5 text-stone-700">TreeMap</td>
                </tr>
              </tbody>
            </table>
          </div>
          <hr className="border-[#e7e3da] my-6" />
        </div>
      </section>

      {/* SECTION 18: 18. Iterable and Iterator */}
      <section id="section-18" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider font-mono">
            Part 7 · Traversal & Fail-Fast Mechanics
          </span>
          <span className="text-xs font-mono text-stone-500">Section 18</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          18. Iterable and Iterator
        </h2>
        <div className="space-y-4 text-stone-700 leading-relaxed text-sm sm:text-base">
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>18.1 What is Iterable?</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Iterable is an interface that represents an object capable of providing an Iterator.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            It is the foundation of Java's enhanced for loop.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            The Collection interface extends Iterable.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Conceptual relationship:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Iterable
   |
Collection
   |
ArrayList`}</code>
            </pre>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>18.2 What is Iterator?</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            An Iterator provides a standard mechanism for traversing elements.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Its main methods include:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-stone-700 text-sm sm:text-base my-3 leading-relaxed">
            <li><code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">hasNext()</code></li>
            <li><code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">next()</code></li>
            <li><code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">remove()</code></li>
          </ul>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Example:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`import java.util.ArrayList;
import java.util.Iterator;

public class IteratorExample {

    public static void main(String[] args) {

        ArrayList<String> names =
                new ArrayList<>();

        names.add("Alex");

        names.add("Sam");

        names.add("John");

        Iterator<String> iterator =
                names.iterator();

        while (iterator.hasNext()) {

            String name = iterator.next();

            System.out.println(name);
        }
    }
}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Output:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Alex
Sam
John`}</code>
            </pre>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>18.3 Removing elements using Iterator</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Removing elements from a collection directly while iterating can cause ConcurrentModificationException with many fail-fast collection iterators.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            The Iterator's own <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">remove()</code> method is the appropriate mechanism for supported iterator-based removal.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Example:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`import java.util.ArrayList;
import java.util.Iterator;

public class IteratorRemoval {

    public static void main(String[] args) {

        ArrayList<Integer> numbers =
                new ArrayList<>();

        numbers.add(10);

        numbers.add(20);

        numbers.add(30);

        Iterator<Integer> iterator =
                numbers.iterator();

        while (iterator.hasNext()) {

            int number = iterator.next();

            if (number == 20) {

                iterator.remove();
            }
        }

        System.out.println(numbers);
    }
}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Output:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`[10, 30]`}</code>
            </pre>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>18.4 ListIterator</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            ListIterator is a specialized iterator for lists.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            It supports:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-stone-700 text-sm sm:text-base my-3 leading-relaxed">
            <li>Forward traversal.</li>
            <li>Backward traversal.</li>
            <li>Insertion.</li>
            <li>Removal.</li>
            <li>Replacement.</li>
          </ul>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Example:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`import java.util.ArrayList;
import java.util.ListIterator;

public class ListIteratorExample {

    public static void main(String[] args) {

        ArrayList<String> names =
                new ArrayList<>();

        names.add("Alex");

        names.add("Sam");

        ListIterator<String> iterator =
                names.listIterator();

        while (iterator.hasNext()) {

            System.out.println(iterator.next());
        }

        while (iterator.hasPrevious()) {

            System.out.println(iterator.previous());
        }
    }
}`}</code>
            </pre>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>18.5 Fail-fast behavior</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Many collection iterators are fail-fast.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            This means they may throw ConcurrentModificationException when they detect structural modification of the underlying collection outside the iterator's supported modification operations.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            This is a best-effort error-detection mechanism, not a thread-safety guarantee.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            For concurrent applications, use suitable concurrency mechanisms and collection implementations.
          </p>
          <hr className="border-[#e7e3da] my-6" />
        </div>
      </section>

      {/* SECTION 19: 19. Comparable and Comparator */}
      <section id="section-19" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider font-mono">
            Part 7 · Natural vs Strategy Sorting
          </span>
          <span className="text-xs font-mono text-stone-500">Section 19</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          19. Comparable and Comparator
        </h2>
        <div className="space-y-4 text-stone-700 leading-relaxed text-sm sm:text-base">
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>19.1 Why do we need object sorting?</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Primitive values can be sorted directly using standard algorithms.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            However, real applications frequently need to sort custom objects.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            For example, students may need to be sorted by:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-stone-700 text-sm sm:text-base my-3 leading-relaxed">
            <li>Student ID.</li>
            <li>Name.</li>
            <li>Marks.</li>
            <li>Enrollment date.</li>
          </ul>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Java provides Comparable and Comparator to define object ordering.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>19.2 Comparable</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Comparable allows a class to define its natural ordering.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            It declares the method:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`int compareTo(T other);`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Example:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`class Student implements Comparable<Student> {

    private int id;

    private String name;

    Student(int id, String name) {

        this.id = id;

        this.name = name;
    }

    public int getId() {

        return id;
    }

    public String getName() {

        return name;
    }

    @Override
    public int compareTo(Student other) {

        return Integer.compare(this.id, other.id);
    }

    @Override
    public String toString() {

        return id + " " + name;
    }
}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Usage:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`import java.util.ArrayList;
import java.util.Collections;

public class ComparableExample {

    public static void main(String[] args) {

        ArrayList<Student> students =
                new ArrayList<>();

        students.add(new Student(103, "John"));

        students.add(new Student(101, "Alex"));

        students.add(new Student(102, "Sam"));

        Collections.sort(students);

        System.out.println(students);
    }
}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Output:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`[101 Alex, 102 Sam, 103 John]`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            The class defines natural ordering by student ID.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>19.3 Comparator</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Comparator defines an external or alternative ordering.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            It is particularly useful when a class needs multiple sorting strategies.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Example:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`import java.util.Comparator;

class StudentNameComparator
        implements Comparator<Student> {

    @Override
    public int compare(Student a, Student b) {

        return a.getName().compareTo(b.getName());
    }
}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Usage:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Collections.sort(
        students,
        new StudentNameComparator()
);`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Now students are sorted by name rather than ID.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>19.4 Comparator using lambda expressions</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Java 8 introduced functional-style comparator creation.
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`students.sort(
        (a, b) ->
                a.getName().compareTo(b.getName())
);`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            A more concise form uses a method reference:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`students.sort(
        Comparator.comparing(Student::getName)
);`}</code>
            </pre>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>19.5 Comparator chaining</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Multiple sorting conditions can be combined.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Example:
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Sort students first by marks in descending order and then by name alphabetically.
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`students.sort(
        Comparator.comparing(Student::getMarks)
                .reversed()
                .thenComparing(Student::getName)
);`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            This assumes the Student class provides a compatible <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">getMarks()</code> method.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>19.6 Comparable versus Comparator</span>
          </h3>
          <div className="overflow-x-auto my-4 rounded-xl border border-[#e7e3da] shadow-2xs">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-stone-900 border-b border-[#e7e3da] font-semibold">
                <tr>
                  <th className="px-4 py-3">Comparable</th>
                  <th className="px-4 py-3">Comparator</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Defines natural ordering</td>
                  <td className="px-4 py-2.5 text-stone-700">Defines an external ordering</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Implemented by the class being compared</td>
                  <td className="px-4 py-2.5 text-stone-700">Can be supplied separately</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Uses <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">compareTo()</code></td>
                  <td className="px-4 py-2.5 text-stone-700">Uses <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">compare()</code></td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Generally defines one primary natural ordering</td>
                  <td className="px-4 py-2.5 text-stone-700">Supports multiple sorting strategies</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Example: Student sorted by ID</td>
                  <td className="px-4 py-2.5 text-stone-700">Example: Student sorted by marks or name</td>
                </tr>
              </tbody>
            </table>
          </div>
          <hr className="border-[#e7e3da] my-6" />
        </div>
      </section>

      {/* SECTION 20: 20. Lambda Expressions */}
      <section id="section-20" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider font-mono">
            Part 8 · Functional Programming Syntax
          </span>
          <span className="text-xs font-mono text-stone-500">Section 20</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          20. Lambda Expressions
        </h2>
        <div className="space-y-4 text-stone-700 leading-relaxed text-sm sm:text-base">
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>20.1 What is a lambda expression?</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            A lambda expression is a concise way to represent an implementation of a functional interface.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Lambdas were introduced in Java 8.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            They support functional-style programming by allowing behavior to be passed as a method argument or assigned to a functional-interface variable.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Example:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`interface Greeting {

    void sayHello();
}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Traditional implementation:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Greeting greeting = new Greeting() {

    @Override
    public void sayHello() {

        System.out.println("Hello Java");
    }
};`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Lambda implementation:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Greeting greeting =
        () -> System.out.println("Hello Java");`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            The lambda removes much of the anonymous-class boilerplate.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>20.2 Lambda syntax</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            General syntax:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`(parameters) -> expression`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Or:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`(parameters) -> {

    // Statements
};`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Examples:
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            No parameters:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`() -> System.out.println("Hello")`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            One parameter:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`name -> System.out.println(name)`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Multiple parameters:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`(a, b) -> a + b`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Block body:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`(a, b) -> {

    int sum = a + b;

    return sum;
}`}</code>
            </pre>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>20.3 Lambda with multiple parameters</span>
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`interface Calculator {

    int calculate(int a, int b);
}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Usage:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public class LambdaExample {

    public static void main(String[] args) {

        Calculator add = (a, b) -> a + b;

        Calculator multiply = (a, b) -> a * b;

        System.out.println(add.calculate(10, 20));

        System.out.println(multiply.calculate(10, 20));
    }
}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Output:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`30
200`}</code>
            </pre>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>20.4 Lambda with collections</span>
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`import java.util.ArrayList;

public class LambdaCollection {

    public static void main(String[] args) {

        ArrayList<String> names =
                new ArrayList<>();

        names.add("Alex");

        names.add("Sam");

        names.add("John");

        names.forEach(
                name -> System.out.println(name)
        );
    }
}`}</code>
            </pre>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>20.5 Lambda with sorting</span>
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`import java.util.ArrayList;

public class LambdaSorting {

    public static void main(String[] args) {

        ArrayList<Integer> numbers =
                new ArrayList<>();

        numbers.add(40);

        numbers.add(10);

        numbers.add(30);

        numbers.add(20);

        numbers.sort(
                (a, b) -> Integer.compare(a, b)
        );

        System.out.println(numbers);
    }
}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Output:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`[10, 20, 30, 40]`}</code>
            </pre>
          </div>
          <hr className="border-[#e7e3da] my-6" />
        </div>
      </section>

      {/* SECTION 21: 21. Functional Interfaces */}
      <section id="section-21" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider font-mono">
            Part 8 · Standard java.util.function APIs
          </span>
          <span className="text-xs font-mono text-stone-500">Section 21</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          21. Functional Interfaces
        </h2>
        <div className="space-y-4 text-stone-700 leading-relaxed text-sm sm:text-base">
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>21.1 What is a functional interface?</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            A functional interface is an interface with exactly one abstract method.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            It may still contain default and static methods.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            It provides the target type for lambda expressions and method references.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            The <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">@FunctionalInterface</code> annotation can be used to communicate this design intention to the compiler.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Example:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`@FunctionalInterface
interface Greeting {

    void greet();
}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            This interface can be implemented with a lambda.
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Greeting greeting =
        () -> System.out.println("Welcome");`}</code>
            </pre>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>21.2 Built-in functional interfaces</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Java provides common functional interfaces in:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`java.util.function`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Important examples include:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-stone-700 text-sm sm:text-base my-3 leading-relaxed">
            <li>Predicate.</li>
            <li>Function.</li>
            <li>Consumer.</li>
            <li>Supplier.</li>
            <li>UnaryOperator.</li>
            <li>BinaryOperator.</li>
            <li>BiFunction.</li>
            <li>BiConsumer.</li>
          </ul>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>21.3 Predicate</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Predicate represents a function that accepts an input and returns a boolean.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Conceptual structure:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Predicate<T>`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            It defines:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`boolean test(T value);`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Example:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`import java.util.function.Predicate;

public class PredicateExample {

    public static void main(String[] args) {

        Predicate<Integer> isEven =
                number -> number % 2 == 0;

        System.out.println(isEven.test(10));

        System.out.println(isEven.test(15));
    }
}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Output:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`true
false`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Common uses:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-stone-700 text-sm sm:text-base my-3 leading-relaxed">
            <li>Filtering data.</li>
            <li>Validating conditions.</li>
            <li>Searching.</li>
            <li>Selecting matching records.</li>
          </ul>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>21.4 Function</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Function accepts one input and produces one output.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Conceptual structure:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Function<T, R>`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            It defines:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`R apply(T value);`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Example:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`import java.util.function.Function;

public class FunctionExample {

    public static void main(String[] args) {

        Function<String, Integer> length =
                text -> text.length();

        System.out.println(length.apply("Java"));
    }
}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Output:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`4`}</code>
            </pre>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>21.5 Consumer</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Consumer accepts an input but does not return a result.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Conceptual structure:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Consumer<T>`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Example:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`import java.util.function.Consumer;

public class ConsumerExample {

    public static void main(String[] args) {

        Consumer<String> display =
                text -> System.out.println(text);

        display.accept("Java Programming");
    }
}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Output:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Java Programming`}</code>
            </pre>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>21.6 Supplier</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Supplier produces a value without accepting an input.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Conceptual structure:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Supplier<T>`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Example:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`import java.util.function.Supplier;

public class SupplierExample {

    public static void main(String[] args) {

        Supplier<Double> randomValue =
                () -> Math.random();

        System.out.println(randomValue.get());
    }
}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            The output is a generated value between zero inclusive and one exclusive.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>21.7 UnaryOperator</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            UnaryOperator represents an operation that accepts and returns the same type.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Example:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`import java.util.function.UnaryOperator;

public class UnaryOperatorExample {

    public static void main(String[] args) {

        UnaryOperator<Integer> square =
                number -> number * number;

        System.out.println(square.apply(5));
    }
}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Output:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`25`}</code>
            </pre>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>21.8 BinaryOperator</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            BinaryOperator accepts two inputs of the same type and returns a result of that type.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Example:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`import java.util.function.BinaryOperator;

public class BinaryOperatorExample {

    public static void main(String[] args) {

        BinaryOperator<Integer> addition =
                (a, b) -> a + b;

        System.out.println(addition.apply(10, 20));
    }
}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Output:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`30`}</code>
            </pre>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>21.9 Functional interface summary</span>
          </h3>
          <div className="overflow-x-auto my-4 rounded-xl border border-[#e7e3da] shadow-2xs">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-stone-900 border-b border-[#e7e3da] font-semibold">
                <tr>
                  <th className="px-4 py-3">Interface</th>
                  <th className="px-4 py-3">Input</th>
                  <th className="px-4 py-3">Output</th>
                  <th className="px-4 py-3">Main method</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Predicate&lt;T&gt;</td>
                  <td className="px-4 py-2.5 text-stone-700">T</td>
                  <td className="px-4 py-2.5 text-stone-700">boolean</td>
                  <td className="px-4 py-2.5 text-stone-700"><code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">test()</code></td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Function&lt;T,R&gt;</td>
                  <td className="px-4 py-2.5 text-stone-700">T</td>
                  <td className="px-4 py-2.5 text-stone-700">R</td>
                  <td className="px-4 py-2.5 text-stone-700"><code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">apply()</code></td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Consumer&lt;T&gt;</td>
                  <td className="px-4 py-2.5 text-stone-700">T</td>
                  <td className="px-4 py-2.5 text-stone-700">void</td>
                  <td className="px-4 py-2.5 text-stone-700"><code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">accept()</code></td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Supplier&lt;T&gt;</td>
                  <td className="px-4 py-2.5 text-stone-700">None</td>
                  <td className="px-4 py-2.5 text-stone-700">T</td>
                  <td className="px-4 py-2.5 text-stone-700"><code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">get()</code></td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">UnaryOperator&lt;T&gt;</td>
                  <td className="px-4 py-2.5 text-stone-700">T</td>
                  <td className="px-4 py-2.5 text-stone-700">T</td>
                  <td className="px-4 py-2.5 text-stone-700"><code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">apply()</code></td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">BinaryOperator&lt;T&gt;</td>
                  <td className="px-4 py-2.5 text-stone-700">T, T</td>
                  <td className="px-4 py-2.5 text-stone-700">T</td>
                  <td className="px-4 py-2.5 text-stone-700"><code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">apply()</code></td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">BiFunction&lt;T,U,R&gt;</td>
                  <td className="px-4 py-2.5 text-stone-700">T, U</td>
                  <td className="px-4 py-2.5 text-stone-700">R</td>
                  <td className="px-4 py-2.5 text-stone-700"><code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">apply()</code></td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">BiConsumer&lt;T,U&gt;</td>
                  <td className="px-4 py-2.5 text-stone-700">T, U</td>
                  <td className="px-4 py-2.5 text-stone-700">void</td>
                  <td className="px-4 py-2.5 text-stone-700"><code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">accept()</code></td>
                </tr>
              </tbody>
            </table>
          </div>
          <hr className="border-[#e7e3da] my-6" />
        </div>
      </section>

      {/* SECTION 22: 22. Method References */}
      <section id="section-22" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider font-mono">
            Part 8 · Double-Colon :: Operator
          </span>
          <span className="text-xs font-mono text-stone-500">Section 22</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          22. Method References
        </h2>
        <div className="space-y-4 text-stone-700 leading-relaxed text-sm sm:text-base">
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>22.1 What is a method reference?</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            A method reference is a concise way of referring to an existing method or constructor when a functional interface is expected.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            It uses the <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">::</code> operator.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Method references reduce unnecessary lambda code when the lambda simply calls an existing method.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>22.2 Static method reference</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Syntax:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`ClassName::staticMethod`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Example:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`import java.util.function.Function;

public class StaticMethodReference {

    public static void main(String[] args) {

        Function<String, Integer> parser =
                Integer::parseInt;

        System.out.println(parser.apply("100"));
    }
}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Output:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`100`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Equivalent lambda:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`text -> Integer.parseInt(text)`}</code>
            </pre>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>22.3 Instance method reference on a particular object</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Syntax:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`objectReference::instanceMethod`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Example:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`import java.util.function.Consumer;

public class InstanceMethodReference {

    public static void main(String[] args) {

        Consumer<String> display =
                System.out::println;

        display.accept("Hello Java");
    }
}`}</code>
            </pre>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>22.4 Instance method reference on an arbitrary object of a type</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Syntax:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`ClassName::instanceMethod`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Example:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`import java.util.function.Function;

public class ArbitraryObjectReference {

    public static void main(String[] args) {

        Function<String, String> uppercase =
                String::toUpperCase;

        System.out.println(
                uppercase.apply("java")
        );
    }
}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Output:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`JAVA`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Here, the String supplied as the function input becomes the receiver of <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">toUpperCase()</code>.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>22.5 Constructor reference</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Syntax:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`ClassName::new`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Example:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`import java.util.function.Supplier;

public class ConstructorReference {

    public static void main(String[] args) {

        Supplier<StringBuilder> supplier =
                StringBuilder::new;

        StringBuilder builder = supplier.get();

        builder.append("Java");

        System.out.println(builder);
    }
}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Output:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Java`}</code>
            </pre>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>22.6 Method reference versus lambda</span>
          </h3>
          <div className="overflow-x-auto my-4 rounded-xl border border-[#e7e3da] shadow-2xs">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-stone-900 border-b border-[#e7e3da] font-semibold">
                <tr>
                  <th className="px-4 py-3">Lambda expression</th>
                  <th className="px-4 py-3">Method reference</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Explicitly describes an operation</td>
                  <td className="px-4 py-2.5 text-stone-700">Refers to an existing method</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Can contain multiple statements</td>
                  <td className="px-4 py-2.5 text-stone-700">Refers to one method or constructor operation</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Uses <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">-&gt;</code></td>
                  <td className="px-4 py-2.5 text-stone-700">Uses <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">::</code></td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Useful for custom logic</td>
                  <td className="px-4 py-2.5 text-stone-700">Useful for concise delegation</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Method references are not always better. Use them when they make the code more readable.
          </p>
          <hr className="border-[#e7e3da] my-6" />
        </div>
      </section>

      {/* SECTION 23: 23. Introduction to Stream API */}
      <section id="section-23" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider font-mono">
            Part 9 · Stream Architecture
          </span>
          <span className="text-xs font-mono text-stone-500">Section 23</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          23. Introduction to Stream API
        </h2>
        <div className="space-y-4 text-stone-700 leading-relaxed text-sm sm:text-base">
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>23.1 What is the Stream API?</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            The Java Stream API provides a functional-style way to process sequences of data.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            It was introduced in Java 8.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Streams allow developers to express operations such as:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-stone-700 text-sm sm:text-base my-3 leading-relaxed">
            <li>Filtering.</li>
            <li>Mapping.</li>
            <li>Sorting.</li>
            <li>Grouping.</li>
            <li>Counting.</li>
            <li>Reduction.</li>
            <li>Aggregation.</li>
          </ul>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            A Stream is not itself a data structure that stores elements.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            It represents a pipeline of operations over a source of data.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>23.2 Why do we need streams?</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Without streams, collection processing often requires repeated loop-based code.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Example without streams:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`import java.util.ArrayList;

public class TraditionalFiltering {

    public static void main(String[] args) {

        ArrayList<Integer> numbers =
                new ArrayList<>();

        numbers.add(10);

        numbers.add(15);

        numbers.add(20);

        numbers.add(25);

        ArrayList<Integer> result =
                new ArrayList<>();

        for (int number : numbers) {

            if (number > 15) {

                result.add(number);
            }
        }

        System.out.println(result);
    }
}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            With streams:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

public class StreamFiltering {

    public static void main(String[] args) {

        List<Integer> numbers =
                Arrays.asList(10, 15, 20, 25);

        List<Integer> result =
                numbers.stream()
                        .filter(number -> number > 15)
                        .collect(Collectors.toList());

        System.out.println(result);
    }
}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Output:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`[20, 25]`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            The stream expresses the transformation in a readable sequence.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>23.3 Stream pipeline architecture</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            A stream pipeline usually contains three stages:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`       Source
          |
          v
   Intermediate operations
          |
          v
      Terminal operation
          |
          v
        Result`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Example:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`numbers.stream()
        .filter(number -> number > 10)
        .map(number -> number * 2)
        .toList();`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Source:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`numbers`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Intermediate operations:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`filter()
map()`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Terminal operation:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`toList()`}</code>
            </pre>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>23.4 Stream characteristics</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-stone-900">1. No storage</strong>
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            A stream does not store its own collection of elements.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            It processes elements obtained from a source.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-stone-900">2. Functional style</strong>
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Operations can transform values without modifying the original source.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-stone-900">3. Lazy intermediate operations</strong>
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Intermediate operations are generally not executed until a terminal operation begins processing.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-stone-900">4. Single-use</strong>
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            A stream should not be reused after a terminal operation.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-stone-900">5. Sequential or parallel</strong>
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Streams can process elements sequentially or through parallel execution when appropriate.
          </p>
          <hr className="border-[#e7e3da] my-6" />
        </div>
      </section>

      {/* SECTION 24: 24. Stream Intermediate Operations */}
      <section id="section-24" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider font-mono">
            Part 9 · Lazy Transformations
          </span>
          <span className="text-xs font-mono text-stone-500">Section 24</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          24. Stream Intermediate Operations
        </h2>
        <div className="space-y-4 text-stone-700 leading-relaxed text-sm sm:text-base">
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Intermediate operations create another stream and can be chained.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Important operations include:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-stone-700 text-sm sm:text-base my-3 leading-relaxed">
            <li>filter().</li>
            <li>map().</li>
            <li>flatMap().</li>
            <li>distinct().</li>
            <li>sorted().</li>
            <li>limit().</li>
            <li>skip().</li>
            <li>peek().</li>
          </ul>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>24.1 filter()</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Filters elements according to a condition.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Example:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`import java.util.List;

public class FilterExample {

    public static void main(String[] args) {

        List<Integer> numbers =
                List.of(10, 15, 20, 25, 30);

        List<Integer> result =
                numbers.stream()
                        .filter(n -> n > 20)
                        .toList();

        System.out.println(result);
    }
}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Output:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`[25, 30]`}</code>
            </pre>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>24.2 map()</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Transforms each element into another value.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Example:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`import java.util.List;

public class MapExample {

    public static void main(String[] args) {

        List<Integer> numbers =
                List.of(1, 2, 3, 4);

        List<Integer> squares =
                numbers.stream()
                        .map(n -> n * n)
                        .toList();

        System.out.println(squares);
    }
}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Output:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`[1, 4, 9, 16]`}</code>
            </pre>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>24.3 flatMap()</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Transforms each element into a stream and flattens the resulting streams into one sequence.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Example:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`import java.util.List;

public class FlatMapExample {

    public static void main(String[] args) {

        List<List<Integer>> values = List.of(

                List.of(1, 2),

                List.of(3, 4),

                List.of(5, 6)
        );

        List<Integer> result =
                values.stream()
                        .flatMap(List::stream)
                        .toList();

        System.out.println(result);
    }
}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Output:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`[1, 2, 3, 4, 5, 6]`}</code>
            </pre>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>24.4 distinct()</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Removes duplicate elements according to equality.
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`List<Integer> numbers =
        List.of(10, 20, 10, 30, 20);

List<Integer> result =
        numbers.stream()
                .distinct()
                .toList();`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Output:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`[10, 20, 30]`}</code>
            </pre>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>24.5 sorted()</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Sorts elements in natural order or according to a comparator.
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`List<Integer> numbers =
        List.of(40, 10, 30, 20);

List<Integer> result =
        numbers.stream()
                .sorted()
                .toList();`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Output:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`[10, 20, 30, 40]`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Descending:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`numbers.stream()
        .sorted((a, b) -> Integer.compare(b, a))
        .toList();`}</code>
            </pre>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>24.6 limit()</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Restricts the number of elements processed downstream.
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`List<Integer> result =
        numbers.stream()
                .limit(3)
                .toList();`}</code>
            </pre>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>24.7 skip()</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Skips the first n elements.
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`List<Integer> result =
        numbers.stream()
                .skip(2)
                .toList();`}</code>
            </pre>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>24.8 peek()</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Provides an intermediate operation that observes elements as they pass through a pipeline.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Example:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`numbers.stream()
        .peek(n -> System.out.println("Before: " + n))
        .filter(n -> n > 10)
        .peek(n -> System.out.println("After: " + n))
        .toList();`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">peek()</code> is useful for debugging, but it should not be used as a substitute for proper side-effecting operations.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Stream operations may be optimized or skipped under certain conditions, so do not depend on peek for essential application behavior.
          </p>
          <hr className="border-[#e7e3da] my-6" />
        </div>
      </section>

      {/* SECTION 25: 25. Stream Terminal Operations */}
      <section id="section-25" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider font-mono">
            Part 9 · Reductions & Short-Circuiting
          </span>
          <span className="text-xs font-mono text-stone-500">Section 25</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          25. Stream Terminal Operations
        </h2>
        <div className="space-y-4 text-stone-700 leading-relaxed text-sm sm:text-base">
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Terminal operations produce a final result or side effect and trigger processing of a stream pipeline.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Important examples:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-stone-700 text-sm sm:text-base my-3 leading-relaxed">
            <li>forEach().</li>
            <li>collect().</li>
            <li>toList().</li>
            <li>count().</li>
            <li>reduce().</li>
            <li>min().</li>
            <li>max().</li>
            <li>anyMatch().</li>
            <li>allMatch().</li>
            <li>noneMatch().</li>
            <li>findFirst().</li>
            <li>findAny().</li>
          </ul>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>25.1 forEach()</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Performs an action for each processed element.
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`numbers.stream()
        .forEach(System.out::println);`}</code>
            </pre>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>25.2 count()</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Returns the number of elements processed.
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`long count =
        numbers.stream()
                .filter(n -> n > 10)
                .count();`}</code>
            </pre>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>25.3 min() and max()</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Example:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`import java.util.List;

public class MinMaxExample {

    public static void main(String[] args) {

        List<Integer> numbers =
                List.of(10, 20, 5, 40, 30);

        int minimum = numbers.stream()
                .min(Integer::compareTo)
                .orElseThrow();

        int maximum = numbers.stream()
                .max(Integer::compareTo)
                .orElseThrow();

        System.out.println(minimum);

        System.out.println(maximum);
    }
}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Output:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`5
40`}</code>
            </pre>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>25.4 reduce()</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            The reduce operation combines stream elements into a single result.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Example:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`import java.util.List;

public class ReduceExample {

    public static void main(String[] args) {

        List<Integer> numbers =
                List.of(1, 2, 3, 4, 5);

        int sum = numbers.stream()
                .reduce(0, Integer::sum);

        System.out.println(sum);
    }
}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Output:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`15`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Here:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-stone-700 text-sm sm:text-base my-3 leading-relaxed">
            <li>Identity value: 0.</li>
            <li>Accumulator: addition.</li>
            <li>Result: total sum.</li>
          </ul>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Reduction operations used in parallel processing should follow the required associative behavior and identity rules.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>25.5 anyMatch()</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Checks whether at least one element satisfies a condition.
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`boolean result =
        numbers.stream()
                .anyMatch(n -> n > 100);`}</code>
            </pre>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>25.6 allMatch()</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Checks whether every element satisfies a condition.
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`boolean result =
        numbers.stream()
                .allMatch(n -> n > 0);`}</code>
            </pre>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>25.7 noneMatch()</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Checks whether no element satisfies a condition.
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`boolean result =
        numbers.stream()
                .noneMatch(n -> n < 0);`}</code>
            </pre>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>25.8 findFirst()</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Returns the first matching element when one exists.
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`import java.util.List;
import java.util.Optional;

public class FindFirstExample {

    public static void main(String[] args) {

        List<Integer> numbers =
                List.of(10, 15, 20, 25);

        Optional<Integer> result =
                numbers.stream()
                        .filter(n -> n > 15)
                        .findFirst();

        System.out.println(result.orElse(-1));
    }
}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Output:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`20`}</code>
            </pre>
          </div>
          <hr className="border-[#e7e3da] my-6" />
        </div>
      </section>

      {/* SECTION 26: 26. Collectors and Stream Grouping */}
      <section id="section-26" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider font-mono">
            Part 10 · Aggregation & GroupingBy
          </span>
          <span className="text-xs font-mono text-stone-500">Section 26</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          26. Collectors and Stream Grouping
        </h2>
        <div className="space-y-4 text-stone-700 leading-relaxed text-sm sm:text-base">
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>26.1 What is a Collector?</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            A Collector describes how stream elements should be accumulated into a result container or combined result.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Collectors are commonly used with the <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">collect()</code> terminal operation.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            They are available through:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`java.util.stream.Collectors`}</code>
            </pre>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>26.2 Collecting into a list</span>
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`List<Integer> evenNumbers =
        numbers.stream()
                .filter(n -> n % 2 == 0)
                .collect(Collectors.toList());`}</code>
            </pre>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>26.3 Collecting into a Set</span>
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Set<Integer> unique =
        numbers.stream()
                .collect(Collectors.toSet());`}</code>
            </pre>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>26.4 Joining Strings</span>
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`List<String> names =
        List.of("Alex", "Sam", "John");

String result =
        names.stream()
                .collect(
                        Collectors.joining(", ")
                );

System.out.println(result);`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Output:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Alex, Sam, John`}</code>
            </pre>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>26.5 Grouping by a property</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Suppose students have different grades.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            We can group them according to their grades.
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

public class GroupingExample {

    public static void main(String[] args) {

        List<String> names =
                List.of(
                        "Alex",
                        "Sam",
                        "Anna",
                        "John",
                        "Adam"
                );

        Map<Character, List<String>> result =
                names.stream()
                        .collect(
                                Collectors.groupingBy(
                                        name -> name.charAt(0)
                                )
                        );

        System.out.println(result);
    }
}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            This groups names according to the first character.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            The resulting Map does not promise a particular key iteration order unless an ordered map collector is specified.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>26.6 Counting grouped elements</span>
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Map<Character, Long> result =
        names.stream()
                .collect(
                        Collectors.groupingBy(
                                name -> name.charAt(0),
                                Collectors.counting()
                        )
                );`}</code>
            </pre>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>26.7 Summing grouped values</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Suppose an application has employees grouped by department.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            A Collector can calculate the total salary within each department.
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Map<String, Double> salaryByDepartment =
        employees.stream()
                .collect(
                        Collectors.groupingBy(
                                Employee::getDepartment,
                                Collectors.summingDouble(
                                        Employee::getSalary
                                )
                        )
                );`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            This is particularly useful for analytical applications and report generation.
          </p>
          <hr className="border-[#e7e3da] my-6" />
        </div>
      </section>

      {/* SECTION 27: 27. Primitive Streams */}
      <section id="section-27" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider font-mono">
            Part 10 · IntStream & Unboxed Performance
          </span>
          <span className="text-xs font-mono text-stone-500">Section 27</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          27. Primitive Streams
        </h2>
        <div className="space-y-4 text-stone-700 leading-relaxed text-sm sm:text-base">
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Java provides specialized streams for primitive numeric values.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            They include:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-stone-700 text-sm sm:text-base my-3 leading-relaxed">
            <li>IntStream.</li>
            <li>LongStream.</li>
            <li>DoubleStream.</li>
          </ul>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            These avoid some boxing and unboxing costs associated with Stream&lt;Integer&gt;, Stream&lt;Long&gt;, and Stream&lt;Double&gt;.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Example:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`import java.util.stream.IntStream;

public class IntStreamExample {

    public static void main(String[] args) {

        int sum = IntStream.rangeClosed(1, 10)
                .sum();

        System.out.println(sum);
    }
}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Output:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`55`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Other useful methods include:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-stone-700 text-sm sm:text-base my-3 leading-relaxed">
            <li><code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">sum()</code></li>
            <li><code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">average()</code></li>
            <li><code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">min()</code></li>
            <li><code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">max()</code></li>
            <li><code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">count()</code></li>
            <li><code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">range()</code></li>
            <li><code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">rangeClosed()</code></li>
          </ul>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>27.1 range versus rangeClosed</span>
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`IntStream.range(1, 5)`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Produces:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`1, 2, 3, 4`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            The ending value is excluded.
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`IntStream.rangeClosed(1, 5)`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Produces:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`1, 2, 3, 4, 5`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            The ending value is included.
          </p>
          <hr className="border-[#e7e3da] my-6" />
        </div>
      </section>

      {/* SECTION 28: 28. Parallel Streams */}
      <section id="section-28" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider font-mono">
            Part 10 · Fork-Join & Thread Safety
          </span>
          <span className="text-xs font-mono text-stone-500">Section 28</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          28. Parallel Streams
        </h2>
        <div className="space-y-4 text-stone-700 leading-relaxed text-sm sm:text-base">
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>28.1 What is a parallel stream?</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            A parallel stream can divide processing across multiple execution threads using the stream framework's parallel execution facilities.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Example:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`List<Integer> numbers =
        List.of(1, 2, 3, 4, 5, 6);

numbers.parallelStream()
        .forEach(System.out::println);`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            The order of printed values is not guaranteed.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>28.2 Sequential versus parallel streams</span>
          </h3>
          <div className="overflow-x-auto my-4 rounded-xl border border-[#e7e3da] shadow-2xs">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-stone-900 border-b border-[#e7e3da] font-semibold">
                <tr>
                  <th className="px-4 py-3">Sequential stream</th>
                  <th className="px-4 py-3">Parallel stream</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Processes elements sequentially</td>
                  <td className="px-4 py-2.5 text-stone-700">Can process partitions concurrently</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Predictable encounter-order behavior for ordered operations</td>
                  <td className="px-4 py-2.5 text-stone-700">May execute operations in different threads</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Lower parallel coordination overhead</td>
                  <td className="px-4 py-2.5 text-stone-700">Additional coordination and splitting overhead</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Often suitable for ordinary workloads</td>
                  <td className="px-4 py-2.5 text-stone-700">Can help suitable CPU-intensive operations on sufficiently large inputs</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Parallel streams are not automatically faster.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Performance depends on:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-stone-700 text-sm sm:text-base my-3 leading-relaxed">
            <li>Input size.</li>
            <li>Operation cost.</li>
            <li>Data source.</li>
            <li>Available processors.</li>
            <li>Splitting efficiency.</li>
            <li>Synchronization.</li>
            <li>Memory allocation.</li>
            <li>I/O behavior.</li>
          </ul>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>28.3 Common mistakes with parallel streams</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Avoid shared mutable variables.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Incorrect pattern:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`List<Integer> numbers = List.of(1, 2, 3, 4, 5);

int[] sum = {0};

numbers.parallelStream()
        .forEach(n -> sum[0] += n);`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Multiple threads may update the shared value concurrently, causing a data race.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Use reduction:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`int sum = numbers.parallelStream()
        .mapToInt(Integer::intValue)
        .sum();`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Prefer stateless operations and avoid modifying the source collection while a stream pipeline is processing it.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>28.4 Stream reuse</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            A Stream is intended for one traversal.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Incorrect:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Stream<Integer> stream =
        numbers.stream();

stream.count();

stream.forEach(System.out::println);`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            The stream has already been consumed by the terminal operation.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Correct:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`numbers.stream().count();

numbers.stream().forEach(System.out::println);`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Each operation creates a new stream pipeline.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>28.5 When should students use streams?</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Use streams when they make data transformations clearer.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Use ordinary loops when:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-stone-700 text-sm sm:text-base my-3 leading-relaxed">
            <li>State changes are complex.</li>
            <li>Control flow is heavily conditional.</li>
            <li>Debugging requires step-by-step execution.</li>
            <li>An operation depends on breaking or continuing in specific ways.</li>
            <li>A stream expression would become difficult to read.</li>
          </ul>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Good Java developers understand both approaches.
          </p>
          <hr className="border-[#e7e3da] my-6" />
        </div>
      </section>

      {/* SECTION 29: 29. Optional in Java */}
      <section id="section-29" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider font-mono">
            Part 11 · Null Safety & Monadic Flow
          </span>
          <span className="text-xs font-mono text-stone-500">Section 29</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          29. Optional in Java
        </h2>
        <div className="space-y-4 text-stone-700 leading-relaxed text-sm sm:text-base">
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>29.1 What is Optional?</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Optional is a container object that may contain a non-null value or may be empty.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            It is designed to represent the possible absence of a result.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Example:
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            A student-search operation may fail to find a student with the requested ID.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Instead of returning null directly, a method can return:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Optional<Student>`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            This tells the caller that a student may or may not be present.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>29.2 Why do we need Optional?</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Without Optional:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Student findStudent(int id) {

    return null;
}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Callers must remember to check whether the result is null.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Otherwise, a NullPointerException may occur.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Using Optional:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Optional<Student> findStudent(int id) {

    // Return a present or empty Optional
}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            The return type communicates the possibility of absence.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>29.3 Creating Optional objects</span>
          </h3>
          <h4 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span>Optional.of()</span>
          </h4>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Creates an Optional containing a non-null value.
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Optional<String> name =
        Optional.of("Alex");`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Passing null causes NullPointerException.
          </p>
          <h4 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span>Optional.ofNullable()</span>
          </h4>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Creates a populated Optional when the input is non-null, otherwise an empty Optional.
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`String value = null;

Optional<String> result =
        Optional.ofNullable(value);`}</code>
            </pre>
          </div>
          <h4 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span>Optional.empty()</span>
          </h4>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Creates an empty Optional.
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Optional<String> result =
        Optional.empty();`}</code>
            </pre>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>29.4 Checking whether a value exists</span>
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Optional<String> name =
        Optional.of("Java");

System.out.println(name.isPresent());

System.out.println(name.isEmpty());`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Output:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`true
false`}</code>
            </pre>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>29.5 orElse()</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Returns the contained value when present, otherwise a fallback value.
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Optional<String> name =
        Optional.empty();

String result = name.orElse("Unknown");

System.out.println(result);`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Output:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Unknown`}</code>
            </pre>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>29.6 orElseGet()</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Returns the contained value when present, otherwise obtains a value from a Supplier.
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`String result =
        Optional.<String>empty()
                .orElseGet(() -> "Generated value");`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            The Supplier is evaluated only when the Optional is empty.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>29.7 Difference between orElse and orElseGet</span>
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`String value = optional.orElse(createDefault());`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            The argument to <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">orElse()</code> is evaluated before the method invocation.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            With:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`String value =
        optional.orElseGet(() -> createDefault());`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            the default-producing function is invoked only when needed.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            This matters when fallback generation is expensive or has side effects.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>29.8 ifPresent()</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Executes an action if a value exists.
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Optional<String> name =
        Optional.of("Java");

name.ifPresent(
        value -> System.out.println(value)
);`}</code>
            </pre>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>29.9 map()</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Transforms the contained value if present.
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Optional<String> name =
        Optional.of("java");

Optional<String> result =
        name.map(String::toUpperCase);

System.out.println(result.orElse(""));`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Output:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`JAVA`}</code>
            </pre>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>29.10 filter()</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Keeps the value only if it satisfies a condition.
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Optional<Integer> age =
        Optional.of(21);

Optional<Integer> result =
        age.filter(value -> value >= 18);

System.out.println(result);`}</code>
            </pre>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>29.11 flatMap()</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            flatMap is useful when the transformation itself returns an Optional.
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Optional<String> result =
        Optional.of("Java")
                .flatMap(
                        value -> Optional.of(value.toUpperCase())
                );`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Unlike map, flatMap does not create nested Optional objects when the mapping function already returns Optional.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>29.12 orElseThrow()</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Throws an exception if the Optional is empty.
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Student student =
        optionalStudent.orElseThrow(
                () -> new IllegalArgumentException(
                        "Student not found"
                )
        );`}</code>
            </pre>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>29.13 Best practices for Optional</span>
          </h3>
          <ol className="list-decimal pl-5 space-y-2 text-stone-700 text-sm sm:text-base my-3 leading-relaxed">
            <li>Use it mainly as a return type when absence is meaningful.</li>
            <li>Avoid returning null instead of an Optional.</li>
            <li>Avoid calling <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">get()</code> without checking presence.</li>
            <li>Prefer <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">orElse</code>, <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">orElseGet</code>, or <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">orElseThrow</code> where appropriate.</li>
            <li>Do not use Optional as a replacement for every nullable field or method parameter.</li>
            <li>Do not use Optional as a synchronization mechanism.</li>
            <li>Do not make an Optional reference itself null.</li>
          </ol>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Optional is a tool for expressing a potentially absent value. It does not eliminate every possible null-related error in Java.
          </p>
          <hr className="border-[#e7e3da] my-6" />
        </div>
      </section>

      {/* SECTION 30: 30. File Handling in Java */}
      <section id="section-30" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider font-mono">
            Part 12 · Modern NIO.2 Path & Files
          </span>
          <span className="text-xs font-mono text-stone-500">Section 30</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          30. File Handling in Java
        </h2>
        <div className="space-y-4 text-stone-700 leading-relaxed text-sm sm:text-base">
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>30.1 What is file handling?</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            File handling is the process of creating, reading, writing, updating, copying, and deleting files using program instructions.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Most applications need persistent storage.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Examples:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-stone-700 text-sm sm:text-base my-3 leading-relaxed">
            <li>Student records.</li>
            <li>Reports.</li>
            <li>Configuration files.</li>
            <li>Logs.</li>
            <li>User-generated documents.</li>
            <li>Application data exports.</li>
            <li>CSV files.</li>
            <li>Text files.</li>
          </ul>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Java provides several APIs for file operations.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Important packages include:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`java.io
java.nio.file`}</code>
            </pre>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>30.2 Understanding file handling approaches</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Java supports two major file-handling families.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-stone-900">Traditional I/O</strong>
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Provided through <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">java.io</code>.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Examples:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-stone-700 text-sm sm:text-base my-3 leading-relaxed">
            <li>FileReader.</li>
            <li>FileWriter.</li>
            <li>BufferedReader.</li>
            <li>BufferedWriter.</li>
            <li>InputStream.</li>
            <li>OutputStream.</li>
          </ul>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-stone-900">NIO.2</strong>
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Provided through <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">java.nio.file</code> and related packages.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Examples:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-stone-700 text-sm sm:text-base my-3 leading-relaxed">
            <li>Path.</li>
            <li>Files.</li>
            <li>Paths.</li>
            <li>DirectoryStream.</li>
          </ul>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            For modern everyday file operations, NIO.2 is commonly convenient.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>30.3 File class</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            The File class represents a file or directory path in the traditional I/O API.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Example:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`import java.io.File;

public class FileExample {

    public static void main(String[] args) {

        File file = new File("data.txt");

        System.out.println(file.exists());

        System.out.println(file.getName());

        System.out.println(file.getAbsolutePath());
    }
}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            The File object does not necessarily represent an existing physical file.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            It can represent a path whether or not the resource exists.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>30.4 Path and Paths</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            The Path interface represents a path in a file system.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            The Paths utility class can create Path objects.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Example:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`import java.nio.file.Path;
import java.nio.file.Paths;

public class PathExample {

    public static void main(String[] args) {

        Path path = Paths.get("data", "students.txt");

        System.out.println(path);

        System.out.println(path.getFileName());

        System.out.println(path.toAbsolutePath());
    }
}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Path is preferred for new file-system APIs over relying solely on the older File type.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>30.5 Files utility class</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            The Files class provides static operations for working with paths and files.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Important methods include:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-stone-700 text-sm sm:text-base my-3 leading-relaxed">
            <li><code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">exists()</code></li>
            <li><code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">notExists()</code></li>
            <li><code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">createFile()</code></li>
            <li><code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">createDirectory()</code></li>
            <li><code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">createDirectories()</code></li>
            <li><code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">readString()</code></li>
            <li><code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">writeString()</code></li>
            <li><code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">readAllLines()</code></li>
            <li><code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">write()</code></li>
            <li><code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">copy()</code></li>
            <li><code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">move()</code></li>
            <li><code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">delete()</code></li>
            <li><code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">deleteIfExists()</code></li>
            <li><code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">lines()</code></li>
            <li><code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">newBufferedReader()</code></li>
            <li><code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">newBufferedWriter()</code></li>
          </ul>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Example:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`import java.nio.file.Files;
import java.nio.file.Path;
import java.io.IOException;

public class FilesExample {

    public static void main(String[] args) {

        Path path = Path.of("message.txt");

        try {

            Files.writeString(
                    path,
                    "Welcome to Java"
            );

            String content = Files.readString(path);

            System.out.println(content);

        } catch (IOException e) {

            System.out.println(e.getMessage());
        }
    }
}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Output:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Welcome to Java`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Java's readString and writeString convenience methods are available from Java 11.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>30.6 Creating a file</span>
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`import java.nio.file.Files;
import java.nio.file.Path;
import java.io.IOException;

public class CreateFileExample {

    public static void main(String[] args) {

        Path path = Path.of("student.txt");

        try {

            Files.createFile(path);

            System.out.println("File created");

        } catch (IOException e) {

            System.out.println("Unable to create file");
        }
    }
}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            If the file already exists, <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">createFile()</code> fails rather than silently replacing it.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>30.7 Creating directories</span>
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Path path = Path.of("data/students/results");

Files.createDirectories(path);`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">createDirectories()</code> also creates any missing parent directories.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>30.8 Writing to a text file</span>
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`import java.nio.file.Files;
import java.nio.file.Path;
import java.io.IOException;

public class FileWriteExample {

    public static void main(String[] args) {

        Path path = Path.of("student.txt");

        String content =
                "Student Name: Alex\\n" +
                "Course: Java Programming\\n" +
                "Marks: 90";

        try {

            Files.writeString(path, content);

            System.out.println("Data written successfully");

        } catch (IOException e) {

            System.out.println(e.getMessage());
        }
    }
}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            By default, writeString creates the file when necessary and truncates an existing file unless different open options are specified.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>30.9 Appending data</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            To append data instead of replacing the existing contents:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.StandardOpenOption;

import java.io.IOException;

public class FileAppendExample {

    public static void main(String[] args) {

        Path path = Path.of("student.txt");

        try {

            Files.writeString(
                    path,
                    "\\nNew Student: Sam",
                    StandardOpenOption.CREATE,
                    StandardOpenOption.APPEND
            );

            System.out.println("Data appended");

        } catch (IOException e) {

            System.out.println(e.getMessage());
        }
    }
}`}</code>
            </pre>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>30.10 Reading a text file</span>
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`import java.nio.file.Files;
import java.nio.file.Path;

import java.io.IOException;

public class FileReadExample {

    public static void main(String[] args) {

        Path path = Path.of("student.txt");

        try {

            String content = Files.readString(path);

            System.out.println(content);

        } catch (IOException e) {

            System.out.println(e.getMessage());
        }
    }
}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            For simple cases, readString is convenient.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            It is not intended for very large files that should be processed incrementally.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>30.11 Reading line by line</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            For larger files, buffered reading is generally preferable.
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`import java.io.BufferedReader;
import java.io.IOException;

import java.nio.file.Files;
import java.nio.file.Path;

public class BufferedReadExample {

    public static void main(String[] args) {

        Path path = Path.of("students.txt");

        try (
                BufferedReader reader =
                        Files.newBufferedReader(path)
        ) {

            String line;

            while ((line = reader.readLine()) != null) {

                System.out.println(line);
            }

        } catch (IOException e) {

            System.out.println(e.getMessage());
        }
    }
}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            The reader is automatically closed.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>30.12 Writing line by line</span>
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`import java.io.BufferedWriter;
import java.io.IOException;

import java.nio.file.Files;
import java.nio.file.Path;

public class BufferedWriteExample {

    public static void main(String[] args) {

        Path path = Path.of("report.txt");

        try (
                BufferedWriter writer =
                        Files.newBufferedWriter(path)
        ) {

            writer.write("Java Report");

            writer.newLine();

            writer.write("Total Students: 100");

            writer.newLine();

            writer.write("Average Marks: 85");

        } catch (IOException e) {

            System.out.println(e.getMessage());
        }
    }
}`}</code>
            </pre>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>30.13 File copying</span>
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.StandardCopyOption;

import java.io.IOException;

public class FileCopyExample {

    public static void main(String[] args) {

        Path source = Path.of("student.txt");

        Path destination = Path.of("student-copy.txt");

        try {

            Files.copy(
                    source,
                    destination,
                    StandardCopyOption.REPLACE_EXISTING
            );

            System.out.println("File copied");

        } catch (IOException e) {

            System.out.println(e.getMessage());
        }
    }
}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            The replacement option permits the destination to be replaced when supported by the operation.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>30.14 File deletion</span>
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`import java.nio.file.Files;
import java.nio.file.Path;

import java.io.IOException;

public class FileDeleteExample {

    public static void main(String[] args) {

        Path path = Path.of("temporary.txt");

        try {

            boolean deleted = Files.deleteIfExists(path);

            System.out.println(deleted);

        } catch (IOException e) {

            System.out.println(e.getMessage());
        }
    }
}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            The method returns false when the target did not exist.
          </p>
          <hr className="border-[#e7e3da] my-6" />
        </div>
      </section>

      {/* SECTION 31: 31. Byte Streams and Character Streams */}
      <section id="section-31" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider font-mono">
            Part 12 · I/O Stream Taxonomy
          </span>
          <span className="text-xs font-mono text-stone-500">Section 31</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          31. Byte Streams and Character Streams
        </h2>
        <div className="space-y-4 text-stone-700 leading-relaxed text-sm sm:text-base">
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>31.1 What is a stream?</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            A stream is an abstraction for sequentially reading or writing data.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Java provides stream classes for different types of content and resource interactions.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Two major categories are:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-stone-700 text-sm sm:text-base my-3 leading-relaxed">
            <li>Byte streams.</li>
            <li>Character streams.</li>
          </ul>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>31.2 Byte streams</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Byte streams process raw bytes.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            The primary base classes are:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-stone-700 text-sm sm:text-base my-3 leading-relaxed">
            <li>InputStream.</li>
            <li>OutputStream.</li>
          </ul>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Common implementations:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-stone-700 text-sm sm:text-base my-3 leading-relaxed">
            <li>FileInputStream.</li>
            <li>FileOutputStream.</li>
            <li>BufferedInputStream.</li>
            <li>BufferedOutputStream.</li>
          </ul>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            They are useful for:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-stone-700 text-sm sm:text-base my-3 leading-relaxed">
            <li>Images.</li>
            <li>Audio files.</li>
            <li>PDFs.</li>
            <li>Binary documents.</li>
            <li>Raw data files.</li>
          </ul>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Example:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`import java.io.FileInputStream;
import java.io.IOException;

public class ByteReadExample {

    public static void main(String[] args) {

        try (
                FileInputStream input =
                        new FileInputStream("image.bin")
        ) {

            int value;

            while ((value = input.read()) != -1) {

                System.out.println(value);
            }

        } catch (IOException e) {

            System.out.println(e.getMessage());
        }
    }
}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">read()</code> returns the next byte value as an integer or -1 at the end of the stream.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>31.3 Character streams</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Character streams are designed for character-oriented text processing.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            The primary base classes are:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-stone-700 text-sm sm:text-base my-3 leading-relaxed">
            <li>Reader.</li>
            <li>Writer.</li>
          </ul>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Examples:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-stone-700 text-sm sm:text-base my-3 leading-relaxed">
            <li>FileReader.</li>
            <li>FileWriter.</li>
            <li>BufferedReader.</li>
            <li>BufferedWriter.</li>
          </ul>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Example:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`import java.io.FileReader;
import java.io.IOException;

public class CharacterReadExample {

    public static void main(String[] args) {

        try (
                FileReader reader =
                        new FileReader("text.txt")
        ) {

            int character;

            while ((character = reader.read()) != -1) {

                System.out.print((char) character);
            }

        } catch (IOException e) {

            System.out.println(e.getMessage());
        }
    }
}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            For explicit encoding control, prefer APIs such as <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">Files.newBufferedReader(path, StandardCharsets.UTF_8)</code> rather than depending on platform defaults.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>31.4 Byte stream versus character stream</span>
          </h3>
          <div className="overflow-x-auto my-4 rounded-xl border border-[#e7e3da] shadow-2xs">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-stone-900 border-b border-[#e7e3da] font-semibold">
                <tr>
                  <th className="px-4 py-3">Byte stream</th>
                  <th className="px-4 py-3">Character stream</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Processes byte data</td>
                  <td className="px-4 py-2.5 text-stone-700">Processes decoded character data</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Uses InputStream and OutputStream</td>
                  <td className="px-4 py-2.5 text-stone-700">Uses Reader and Writer</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Suitable for binary content</td>
                  <td className="px-4 py-2.5 text-stone-700">Suitable for text</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Encoding must be considered when converting bytes to text</td>
                  <td className="px-4 py-2.5 text-stone-700">Character decoding and encoding are performed by the reader/writer</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Example: FileInputStream</td>
                  <td className="px-4 py-2.5 text-stone-700">Example: BufferedReader</td>
                </tr>
              </tbody>
            </table>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>31.5 Choosing the correct file API</span>
          </h3>
          <div className="overflow-x-auto my-4 rounded-xl border border-[#e7e3da] shadow-2xs">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-stone-900 border-b border-[#e7e3da] font-semibold">
                <tr>
                  <th className="px-4 py-3">Requirement</th>
                  <th className="px-4 py-3">Recommended approach</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Small text file</td>
                  <td className="px-4 py-2.5 text-stone-700"><code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">Files.readString()</code></td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Write simple text</td>
                  <td className="px-4 py-2.5 text-stone-700"><code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">Files.writeString()</code></td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Large text file</td>
                  <td className="px-4 py-2.5 text-stone-700">BufferedReader</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Large text output</td>
                  <td className="px-4 py-2.5 text-stone-700">BufferedWriter</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Binary input</td>
                  <td className="px-4 py-2.5 text-stone-700">BufferedInputStream or FileInputStream</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Binary output</td>
                  <td className="px-4 py-2.5 text-stone-700">BufferedOutputStream or FileOutputStream</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">File path management</td>
                  <td className="px-4 py-2.5 text-stone-700">Path</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">File operations</td>
                  <td className="px-4 py-2.5 text-stone-700">Files</td>
                </tr>
              </tbody>
            </table>
          </div>
          <hr className="border-[#e7e3da] my-6" />
        </div>
      </section>

      {/* SECTION 32: 32. File Handling Best Practices */}
      <section id="section-32" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider font-mono">
            Part 12 · Security & Atomicity Guidelines
          </span>
          <span className="text-xs font-mono text-stone-500">Section 32</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          32. File Handling Best Practices
        </h2>
        <div className="space-y-4 text-stone-700 leading-relaxed text-sm sm:text-base">
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            File operations introduce security and reliability concerns.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Students should follow these principles:
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-stone-900">1. Use try-with-resources</strong>
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Close resources automatically.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-stone-900">2. Choose explicit text encoding</strong>
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            UTF-8 is a suitable default for most modern text applications.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-stone-900">3. Validate paths</strong>
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Do not blindly trust a user-supplied filename.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-stone-900">4. Check exceptions</strong>
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            File access may fail due to missing files, permissions, storage problems, or invalid paths.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-stone-900">5. Avoid reading huge files entirely into memory</strong>
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Process large files line by line or in suitable chunks.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-stone-900">6. Distinguish missing files from other failures</strong>
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            An IOException can represent many types of file operation problems.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-stone-900">7. Avoid accidental overwriting</strong>
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Use deliberate file-open options.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-stone-900">8. Consider atomicity</strong>
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            A partially written file can be problematic. For important data, consider writing to a temporary file and moving it into place when appropriate.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-stone-900">9. Avoid unsafe path construction</strong>
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            When accepting user-supplied names, validate that resolved paths remain within the intended directory.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-stone-900">10. Apply least privilege</strong>
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Applications should only access the filesystem locations they need.
          </p>
          <hr className="border-[#e7e3da] my-6" />
        </div>
      </section>

      {/* SECTION 33: 33. Serialization Fundamentals */}
      <section id="section-33" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider font-mono">
            Part 13 · Object Graphs & Security Risks
          </span>
          <span className="text-xs font-mono text-stone-500">Section 33</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          33. Serialization Fundamentals
        </h2>
        <div className="space-y-4 text-stone-700 leading-relaxed text-sm sm:text-base">
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>33.1 What is serialization?</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Serialization is the process of converting an object's state into a representation that can be stored or transmitted.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Java provides native object serialization through:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-stone-700 text-sm sm:text-base my-3 leading-relaxed">
            <li>Serializable.</li>
            <li>ObjectOutputStream.</li>
            <li>ObjectInputStream.</li>
          </ul>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Serialization can preserve an object's fields and the graph of referenced serializable objects.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>33.2 What is deserialization?</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Deserialization is the process of reconstructing an object from a serialized representation.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Conceptual flow:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`          Java Object
               |
               v
          Serialization
               |
               v
        Byte Representation
               |
               v
       File / Transmission
               |
               v
         Deserialization
               |
               v
        Reconstructed Object`}</code>
            </pre>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>33.3 Serializable interface</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            A class participates in Java's default serialization mechanism by implementing the Serializable marker interface.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            The interface does not define ordinary abstract methods.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Example:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`import java.io.Serializable;

class Student implements Serializable {

    private int id;

    private String name;

    Student(int id, String name) {

        this.id = id;

        this.name = name;
    }

    public void display() {

        System.out.println(id);

        System.out.println(name);
    }
}`}</code>
            </pre>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>33.4 serialVersionUID</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            The serialVersionUID is used by Java serialization to identify compatible class versions.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Example:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`private static final long serialVersionUID = 1L;`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            It is commonly declared in serializable classes to control version compatibility.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            If an incoming serialized object has an incompatible serial version identifier, deserialization may fail with InvalidClassException.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>33.5 ObjectOutputStream</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            ObjectOutputStream serializes objects to an underlying output stream.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Example:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`import java.io.FileOutputStream;
import java.io.ObjectOutputStream;
import java.io.IOException;

public class SerializationExample {

    public static void main(String[] args) {

        Student student =
                new Student(101, "Alex");

        try (
                ObjectOutputStream output =
                        new ObjectOutputStream(
                                new FileOutputStream("student.dat")
                        )
        ) {

            output.writeObject(student);

            System.out.println("Object serialized");

        } catch (IOException e) {

            System.out.println(e.getMessage());
        }
    }
}`}</code>
            </pre>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>33.6 ObjectInputStream</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            ObjectInputStream reconstructs objects from data written using compatible object serialization.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Example:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`import java.io.FileInputStream;
import java.io.ObjectInputStream;
import java.io.IOException;
import java.lang.ClassNotFoundException;

public class DeserializationExample {

    public static void main(String[] args) {

        try (
                ObjectInputStream input =
                        new ObjectInputStream(
                                new FileInputStream("student.dat")
                        )
        ) {

            Student student =
                    (Student) input.readObject();

            student.display();

        } catch (IOException | ClassNotFoundException e) {

            System.out.println(e.getMessage());
        }
    }
}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Output:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`101
Alex`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            The Student class must be available and compatible when the object is reconstructed.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>33.7 transient keyword</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            The <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">transient</code> keyword excludes an instance field from default serialization.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Example:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`import java.io.Serializable;

class User implements Serializable {

    private static final long serialVersionUID = 1L;

    private String username;

    private transient String password;

    User(String username, String password) {

        this.username = username;

        this.password = password;
    }
}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            The password field is not included through default serialization.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            When the object is reconstructed, the transient field receives its default value unless custom deserialization logic supplies another value.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Transient is not an encryption mechanism.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            It does not protect information from being exposed through other application channels.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>33.8 Static fields and serialization</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Static fields belong to the class rather than the individual object.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            They are not serialized as part of an object's default instance state.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            For example:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`class Counter implements Serializable {

    static int globalCount;

    int localCount;
}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            The instance field <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">localCount</code> is part of the default serialized object state.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            The static field <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">globalCount</code> is not serialized as an instance field.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>33.9 Object graphs</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            If a serializable object refers to another object, Java serialization follows object references to serialize the relevant reachable object graph, subject to serialization rules.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Example:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`class Address implements Serializable {

    String city;
}

class Student implements Serializable {

    String name;

    Address address;
}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            If Address is also serializable, the referenced address can be serialized as part of the object graph.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            If a non-serializable object is encountered in a field that must be serialized, serialization may fail with NotSerializableException unless suitable custom handling is implemented.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>33.10 Security warning: Deserialization of untrusted data</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Native Java deserialization can be dangerous when untrusted serialized input is accepted.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Maliciously constructed object graphs can trigger unsafe behaviors through classes available in the runtime environment.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Important practices:
          </p>
          <ol className="list-decimal pl-5 space-y-2 text-stone-700 text-sm sm:text-base my-3 leading-relaxed">
            <li>Do not deserialize arbitrary data from untrusted sources.</li>
            <li>Prefer safer data formats for external interchange.</li>
            <li>Apply serialization filters when native serialization must be used.</li>
            <li>Restrict allowed classes and object graph sizes.</li>
            <li>Validate reconstructed data.</li>
            <li>Avoid assuming that Serializable means safe.</li>
            <li>Keep serialization-related library dependencies updated.</li>
          </ol>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Java provides ObjectInputFilter and related filtering mechanisms to restrict classes and graph characteristics during deserialization.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            For new application APIs and cross-system communication, formats such as JSON or Protocol Buffers are often more appropriate than native Java object serialization.
          </p>
          <hr className="border-[#e7e3da] my-6" />
        </div>
      </section>

      {/* SECTION 34: 34. Complete Practical Project — Student Record Management System */}
      <section id="section-34" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider font-mono">
            Part 14 · Capstone Architecture
          </span>
          <span className="text-xs font-mono text-stone-500">Section 34</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          34. Complete Practical Project — Student Record Management System
        </h2>
        <div className="space-y-4 text-stone-700 leading-relaxed text-sm sm:text-base">
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>Project Overview</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Develop a console-based Student Record Management System using the advanced Java concepts covered in this module.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            The application should manage student information, handle errors, store records in collections, search and filter records using streams, and persist records using file operations.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            The project also introduces generic programming and a separation between application logic and storage functionality.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>Functional Requirements</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            The application must support:
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-stone-900">Student management</strong>
          </p>
          <ul className="list-disc pl-5 space-y-2 text-stone-700 text-sm sm:text-base my-3 leading-relaxed">
            <li>Add a student.</li>
            <li>Display all students.</li>
            <li>Search by student ID.</li>
            <li>Update student information.</li>
            <li>Remove students.</li>
            <li>Prevent duplicate IDs.</li>
          </ul>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-stone-900">Academic analysis</strong>
          </p>
          <ul className="list-disc pl-5 space-y-2 text-stone-700 text-sm sm:text-base my-3 leading-relaxed">
            <li>Calculate average marks.</li>
            <li>Identify top performers.</li>
            <li>Filter students by minimum average.</li>
            <li>Sort students by name.</li>
            <li>Sort students by marks.</li>
            <li>Group students by result status.</li>
          </ul>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-stone-900">Error handling</strong>
          </p>
          <ul className="list-disc pl-5 space-y-2 text-stone-700 text-sm sm:text-base my-3 leading-relaxed">
            <li>Handle invalid numerical input.</li>
            <li>Handle duplicate IDs.</li>
            <li>Handle missing student records.</li>
            <li>Handle invalid marks.</li>
            <li>Handle file operation errors.</li>
          </ul>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-stone-900">Data persistence</strong>
          </p>
          <ul className="list-disc pl-5 space-y-2 text-stone-700 text-sm sm:text-base my-3 leading-relaxed">
            <li>Save student records to a file.</li>
            <li>Load records when the program starts.</li>
            <li>Preserve records between application sessions.</li>
          </ul>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            For this educational project, text-based persistence is used. Native object serialization can be implemented as an optional extension.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>Suggested package architecture</span>
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`student-management/
|
+-- src/
|   |
|   +-- application/
|   |   +-- Main.java
|   |
|   +-- models/
|   |   +-- Student.java
|   |
|   +-- exceptions/
|   |   +-- DuplicateStudentException.java
|   |   +-- StudentNotFoundException.java
|   |
|   +-- services/
|   |   +-- StudentService.java
|   |
|   +-- storage/
|       +-- StudentStorage.java
|
+-- data/
    +-- students.txt`}</code>
            </pre>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>Step 1 — Student model</span>
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`package models;

import java.util.List;

public class Student {

    private final int id;

    private String name;

    private String course;

    private final List<Double> marks;

    public Student(
            int id,
            String name,
            String course,
            List<Double> marks
    ) {

        if (id <= 0) {

            throw new IllegalArgumentException(
                    "ID must be positive"
            );
        }

        if (name == null || name.isBlank()) {

            throw new IllegalArgumentException(
                    "Name cannot be empty"
            );
        }

        if (course == null || course.isBlank()) {

            throw new IllegalArgumentException(
                    "Course cannot be empty"
            );
        }

        if (marks == null || marks.isEmpty()) {

            throw new IllegalArgumentException(
                    "Marks are required"
            );
        }

        for (Double mark : marks) {

            if (mark == null ||
                mark < 0 ||
                mark > 100) {

                throw new IllegalArgumentException(
                        "Marks must be between 0 and 100"
                );
            }
        }

        this.id = id;

        this.name = name;

        this.course = course;

        this.marks = List.copyOf(marks);
    }

    public int getId() {

        return id;
    }

    public String getName() {

        return name;
    }

    public String getCourse() {

        return course;
    }

    public List<Double> getMarks() {

        return marks;
    }

    public void setName(String name) {

        if (name == null || name.isBlank()) {

            throw new IllegalArgumentException(
                    "Name cannot be empty"
            );
        }

        this.name = name;
    }

    public double getAverage() {

        return marks.stream()
                .mapToDouble(Double::doubleValue)
                .average()
                .orElse(0);
    }

    public String getResult() {

        return getAverage() >= 35 ? "PASS" : "FAIL";
    }

    @Override
    public String toString() {

        return id + " | " +
                name + " | " +
                course + " | " +
                getAverage() + " | " +
                getResult();
    }
}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            This model demonstrates:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-stone-700 text-sm sm:text-base my-3 leading-relaxed">
            <li>Encapsulation.</li>
            <li>Constructor validation.</li>
            <li>Collections.</li>
            <li>Streams.</li>
            <li>Optional numeric results.</li>
            <li>Immutable marks list.</li>
          </ul>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>Step 2 — Custom exceptions</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            DuplicateStudentException.java:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`package exceptions;

public class DuplicateStudentException
        extends Exception {

    public DuplicateStudentException(String message) {

        super(message);
    }
}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            StudentNotFoundException.java:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`package exceptions;

public class StudentNotFoundException
        extends Exception {

    public StudentNotFoundException(String message) {

        super(message);
    }
}`}</code>
            </pre>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>Step 3 — Generic response container</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Create a reusable generic result structure.
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`package services;

public class Result<T> {

    private final boolean success;

    private final T data;

    private final String message;

    public Result(
            boolean success,
            T data,
            String message
    ) {

        this.success = success;

        this.data = data;

        this.message = message;
    }

    public boolean isSuccess() {

        return success;
    }

    public T getData() {

        return data;
    }

    public String getMessage() {

        return message;
    }
}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            This demonstrates generic class design.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>Step 4 — Student service</span>
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`package services;

import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;
import java.util.Optional;

import java.util.stream.Collectors;

import models.Student;
import exceptions.DuplicateStudentException;
import exceptions.StudentNotFoundException;

public class StudentService {

    private final List<Student> students =
            new ArrayList<>();

    public void addStudent(Student student)
            throws DuplicateStudentException {

        boolean exists =
                students.stream()
                        .anyMatch(
                                s -> s.getId() == student.getId()
                        );

        if (exists) {

            throw new DuplicateStudentException(
                    "Student ID already exists"
            );
        }

        students.add(student);
    }

    public Optional<Student> findStudent(int id) {

        return students.stream()
                .filter(student -> student.getId() == id)
                .findFirst();
    }

    public void removeStudent(int id)
            throws StudentNotFoundException {

        Student student = findStudent(id)
                .orElseThrow(
                        () -> new StudentNotFoundException(
                                "Student not found"
                        )
                );

        students.remove(student);
    }

    public List<Student> getAllStudents() {

        return List.copyOf(students);
    }

    public List<Student> getTopStudents() {

        return students.stream()
                .filter(s -> s.getResult().equals("PASS"))
                .sorted(
                        Comparator.comparingDouble(
                                Student::getAverage
                        ).reversed()
                )
                .toList();
    }

    public List<Student> searchByCourse(String course) {

        return students.stream()
                .filter(
                        student ->
                                student.getCourse()
                                        .equalsIgnoreCase(course)
                )
                .toList();
    }

    public double calculateClassAverage() {

        return students.stream()
                .mapToDouble(Student::getAverage)
                .average()
                .orElse(0);
    }

    public List<Student> getByMinimumAverage(double minimum) {

        return students.stream()
                .filter(
                        student ->
                                student.getAverage() >= minimum
                )
                .collect(Collectors.toList());
    }
}`}</code>
            </pre>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>Step 5 — Text-based storage</span>
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`package storage;

import java.io.IOException;

import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Path;

import java.util.List;

import models.Student;

public class StudentStorage {

    private final Path path;

    public StudentStorage(Path path) {

        this.path = path;
    }

    public void save(List<Student> students)
            throws IOException {

        List<String> lines =
                students.stream()
                        .map(student ->
                                student.getId() + "," +
                                student.getName().replace(",", " ") + "," +
                                student.getCourse().replace(",", " ") + "," +
                                student.getMarks().stream()
                                        .map(String::valueOf)
                                        .collect(
                                                java.util.stream.Collectors
                                                        .joining(";")
                                        )
                        )
                        .toList();

        Path parent = path.toAbsolutePath().getParent();

        if (parent != null) {

            Files.createDirectories(parent);
        }

        Files.write(
                path,
                lines,
                StandardCharsets.UTF_8
        );
    }
}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            This storage implementation demonstrates writing records to a text file.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            It is a simplified CSV-like format. A production implementation should use a proper escaping or structured serialization format so that commas, newlines, and special characters cannot corrupt record boundaries.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>Step 6 — Main application</span>
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`package application;

import java.util.List;

import models.Student;

import services.StudentService;

import services.Result;

import exceptions.DuplicateStudentException;

public class Main {

    static StudentService service =
            new StudentService();

    static Result<Student> createStudent(
            int id,
            String name,
            String course,
            List<Double> marks
    ) {

        try {

            Student student = new Student(
                    id,
                    name,
                    course,
                    marks
            );

            service.addStudent(student);

            return new Result<>(
                    true,
                    student,
                    "Student registered"
            );

        } catch (
                DuplicateStudentException |
                IllegalArgumentException e
        ) {

            return new Result<>(
                    false,
                    null,
                    e.getMessage()
            );
        }
    }

    public static void main(String[] args) {

        Result<Student> first =
                createStudent(
                        101,
                        "Alex",
                        "Computer Science",
                        List.of(90.0, 85.0, 95.0)
                );

        Result<Student> second =
                createStudent(
                        102,
                        "Sam",
                        "Information Technology",
                        List.of(75.0, 80.0, 70.0)
                );

        System.out.println(first.getMessage());

        System.out.println(second.getMessage());

        System.out.println("\\nAll Students");

        service.getAllStudents()
                .forEach(System.out::println);

        System.out.println("\\nTop Students");

        service.getTopStudents()
                .forEach(System.out::println);

        System.out.println(
                "\\nClass Average: " +
                service.calculateClassAverage()
        );
    }
}`}</code>
            </pre>
          </div>
          <h4 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span>Sample output</span>
          </h4>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Student registered
Student registered

All Students

101 | Alex | Computer Science | 90.0 | PASS
102 | Sam | Information Technology | 75.0 | PASS

Top Students

101 | Alex | Computer Science | 90.0 | PASS
102 | Sam | Information Technology | 75.0 | PASS

Class Average: 82.5`}</code>
            </pre>
          </div>
          <h4 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span>Project extension tasks</span>
          </h4>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Students should enhance the project with:
          </p>
          <ol className="list-decimal pl-5 space-y-2 text-stone-700 text-sm sm:text-base my-3 leading-relaxed">
            <li>Interactive menu-based input.</li>
            <li>Student search and update.</li>
            <li>Removal of students.</li>
            <li>Complete file-loading implementation.</li>
            <li>Input validation.</li>
            <li>Sorting by multiple criteria.</li>
            <li>Grouping students by course.</li>
            <li>Generating class reports.</li>
            <li>Generic repository interfaces.</li>
            <li>Unit testing.</li>
            <li>Optional serialization exercise.</li>
            <li>Proper CSV or JSON persistence.</li>
            <li>Separating storage and business logic with interfaces.</li>
            <li>SOLID-based refactoring.</li>
          </ol>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-stone-900">Project note:</strong> The code above demonstrates the main concepts, but the storage class is not yet connected to startup loading or application shutdown saving. Students should implement those lifecycle operations as part of the extension work.
          </p>
          <hr className="border-[#e7e3da] my-6" />
        </div>
      </section>

      {/* SECTION 35: 35. Practical Laboratory Exercises (10 Labs) */}
      <section id="section-35" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider font-mono">
            Part 15 · 10 Hands-on Laboratories
          </span>
          <span className="text-xs font-mono text-stone-500">Section 35</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          35. Practical Laboratory Exercises (10 Labs)
        </h2>
        <div className="space-y-4 text-stone-700 leading-relaxed text-sm sm:text-base">
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>Lab 1 — Exception handling</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-stone-900">Objective:</strong> Understand exception hierarchy and handling.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Tasks:
          </p>
          <ol className="list-decimal pl-5 space-y-2 text-stone-700 text-sm sm:text-base my-3 leading-relaxed">
            <li>Create an arithmetic calculator.</li>
            <li>Handle division by zero.</li>
            <li>Handle invalid numerical input.</li>
            <li>Handle invalid array indexes.</li>
            <li>Use multiple catch blocks.</li>
            <li>Add finally for appropriate cleanup.</li>
            <li>Test valid and invalid inputs.</li>
          </ol>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>Lab 2 — Custom exceptions</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-stone-900">Objective:</strong> Create application-specific exceptions.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Tasks:
          </p>
          <ol className="list-decimal pl-5 space-y-2 text-stone-700 text-sm sm:text-base my-3 leading-relaxed">
            <li>Create InvalidMarksException.</li>
            <li>Create InsufficientBalanceException.</li>
            <li>Create DuplicateStudentException.</li>
            <li>Create a checked exception.</li>
            <li>Create an unchecked exception.</li>
            <li>Add meaningful messages and causes.</li>
            <li>Demonstrate exception propagation.</li>
          </ol>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>Lab 3 — Generic programming</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-stone-900">Objective:</strong> Understand type parameters.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Tasks:
          </p>
          <ol className="list-decimal pl-5 space-y-2 text-stone-700 text-sm sm:text-base my-3 leading-relaxed">
            <li>Create a generic Box class.</li>
            <li>Create a generic Pair class.</li>
            <li>Write a generic display method.</li>
            <li>Write a method using bounded type parameters.</li>
            <li>Use upper- and lower-bounded wildcards.</li>
            <li>Demonstrate type safety.</li>
          </ol>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>Lab 4 — Collections Framework</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-stone-900">Objective:</strong> Understand data structures.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Tasks:
          </p>
          <ol className="list-decimal pl-5 space-y-2 text-stone-700 text-sm sm:text-base my-3 leading-relaxed">
            <li>Create an ArrayList of students.</li>
            <li>Create a HashSet of unique student IDs.</li>
            <li>Create a TreeSet of sorted numbers.</li>
            <li>Create a Queue for examination processing.</li>
            <li>Create a HashMap of student records.</li>
            <li>Traverse collections using for-each and Iterator.</li>
            <li>Compare the behavior of different collection implementations.</li>
          </ol>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>Lab 5 — Comparable and Comparator</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-stone-900">Objective:</strong> Implement custom-object sorting.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Tasks:
          </p>
          <ol className="list-decimal pl-5 space-y-2 text-stone-700 text-sm sm:text-base my-3 leading-relaxed">
            <li>Create an Employee class.</li>
            <li>Implement Comparable by employee ID.</li>
            <li>Implement Comparator by employee name.</li>
            <li>Sort employees by salary.</li>
            <li>Sort by salary descending and name ascending.</li>
            <li>Compare natural and custom ordering.</li>
          </ol>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>Lab 6 — Lambda and functional interfaces</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-stone-900">Objective:</strong> Understand functional programming.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Tasks:
          </p>
          <ol className="list-decimal pl-5 space-y-2 text-stone-700 text-sm sm:text-base my-3 leading-relaxed">
            <li>Create a custom functional interface.</li>
            <li>Use a Predicate to test even numbers.</li>
            <li>Use a Function to convert values.</li>
            <li>Use a Consumer to display records.</li>
            <li>Use a Supplier to generate IDs.</li>
            <li>Implement lambda-based sorting.</li>
            <li>Replace suitable lambdas with method references.</li>
          </ol>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>Lab 7 — Stream API</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-stone-900">Objective:</strong> Process collections using streams.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Tasks:
          </p>
          <ol className="list-decimal pl-5 space-y-2 text-stone-700 text-sm sm:text-base my-3 leading-relaxed">
            <li>Filter students who passed.</li>
            <li>Map student names to uppercase.</li>
            <li>Calculate average marks.</li>
            <li>Find highest and lowest marks.</li>
            <li>Sort students by performance.</li>
            <li>Group students by course.</li>
            <li>Count students in every group.</li>
            <li>Use reduce for numerical calculations.</li>
            <li>Compare stream processing with loops.</li>
            <li>Implement a suitable parallel-stream exercise.</li>
          </ol>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>Lab 8 — Optional</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-stone-900">Objective:</strong> Model missing values.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Tasks:
          </p>
          <ol className="list-decimal pl-5 space-y-2 text-stone-700 text-sm sm:text-base my-3 leading-relaxed">
            <li>Create a method returning Optional.</li>
            <li>Use empty and ofNullable.</li>
            <li>Apply map and filter.</li>
            <li>Use orElse and orElseGet.</li>
            <li>Use orElseThrow.</li>
            <li>Implement a student lookup using Optional.</li>
          </ol>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>Lab 9 — File handling</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-stone-900">Objective:</strong> Read and write persistent data.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Tasks:
          </p>
          <ol className="list-decimal pl-5 space-y-2 text-stone-700 text-sm sm:text-base my-3 leading-relaxed">
            <li>Create a text file.</li>
            <li>Write student information.</li>
            <li>Read student information.</li>
            <li>Append new records.</li>
            <li>Copy files.</li>
            <li>Delete temporary files.</li>
            <li>Use BufferedReader and BufferedWriter.</li>
            <li>Use UTF-8 explicitly.</li>
            <li>Handle IOException.</li>
            <li>Use try-with-resources.</li>
          </ol>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>Lab 10 — Serialization</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-stone-900">Objective:</strong> Understand Java object serialization.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Tasks:
          </p>
          <ol className="list-decimal pl-5 space-y-2 text-stone-700 text-sm sm:text-base my-3 leading-relaxed">
            <li>Create a Serializable Student class.</li>
            <li>Define serialVersionUID.</li>
            <li>Serialize an object.</li>
            <li>Deserialize the object.</li>
            <li>Test transient fields.</li>
            <li>Test a referenced object that is not serializable.</li>
            <li>Inspect serialization compatibility behavior.</li>
            <li>Research why untrusted deserialization is dangerous.</li>
            <li>Implement a restrictive serialization filter in a controlled exercise.</li>
          </ol>
          <hr className="border-[#e7e3da] my-6" />
        </div>
      </section>

      {/* SECTION 36: 36. Independent Programming Assignments (10 Assignments) */}
      <section id="section-36" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider font-mono">
            Part 16 · 10 Independent Projects
          </span>
          <span className="text-xs font-mono text-stone-500">Section 36</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          36. Independent Programming Assignments (10 Assignments)
        </h2>
        <div className="space-y-4 text-stone-700 leading-relaxed text-sm sm:text-base">
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>Assignment 1 — Employee management using Collections</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Create an application that manages employees using ArrayList.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Requirements:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-stone-700 text-sm sm:text-base my-3 leading-relaxed">
            <li>Add employees.</li>
            <li>Remove employees.</li>
            <li>Search employees.</li>
            <li>Update salary.</li>
            <li>Sort by salary.</li>
            <li>Sort by name.</li>
            <li>Find the highest-paid employee.</li>
            <li>Calculate average salary.</li>
          </ul>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Use separate methods and suitable exception handling.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>Assignment 2 — Generic data repository</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Create a generic repository:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`class Repository<T, ID> {
}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            It should support:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-stone-700 text-sm sm:text-base my-3 leading-relaxed">
            <li>Saving records.</li>
            <li>Finding by ID.</li>
            <li>Removing records.</li>
            <li>Listing all records.</li>
            <li>Updating records.</li>
          </ul>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Use a suitable generic interface for entities that provide identifiers.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>Assignment 3 — Product inventory using Map</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Build an inventory application using HashMap.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Requirements:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-stone-700 text-sm sm:text-base my-3 leading-relaxed">
            <li>Product ID as key.</li>
            <li>Product information as value.</li>
            <li>Add products.</li>
            <li>Update quantity.</li>
            <li>Search products.</li>
            <li>Remove products.</li>
            <li>Calculate inventory value.</li>
            <li>Find products below a quantity threshold.</li>
          </ul>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>Assignment 4 — Student ranking engine</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Use:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-stone-700 text-sm sm:text-base my-3 leading-relaxed">
            <li>ArrayList.</li>
            <li>Comparable.</li>
            <li>Comparator.</li>
            <li>Lambda expressions.</li>
            <li>Stream API.</li>
          </ul>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Requirements:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-stone-700 text-sm sm:text-base my-3 leading-relaxed">
            <li>Sort by average marks.</li>
            <li>Sort by name.</li>
            <li>Find the top five students.</li>
            <li>Calculate class average.</li>
            <li>Group by result.</li>
            <li>Generate subject-wise performance summaries.</li>
          </ul>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>Assignment 5 — Text analytics application</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Accept a text file and calculate:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-stone-700 text-sm sm:text-base my-3 leading-relaxed">
            <li>Total lines.</li>
            <li>Total words.</li>
            <li>Total characters.</li>
            <li>Frequency of words.</li>
            <li>Most frequently used word.</li>
            <li>Number of unique words.</li>
            <li>Longest word.</li>
          </ul>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Use BufferedReader or another appropriate incremental reading approach.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Define case normalization and punctuation handling.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>Assignment 6 — Exception-based banking system</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Create a banking system with:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-stone-700 text-sm sm:text-base my-3 leading-relaxed">
            <li>InvalidTransactionException.</li>
            <li>InsufficientBalanceException.</li>
            <li>InvalidAccountException.</li>
          </ul>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Implement deposits, withdrawals, and transfers.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Validate input and preserve balance consistency.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>Assignment 7 — File-based Student Database</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Create a Student Management System with persistent storage.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Requirements:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-stone-700 text-sm sm:text-base my-3 leading-relaxed">
            <li>Save records.</li>
            <li>Load records.</li>
            <li>Update records.</li>
            <li>Delete records.</li>
            <li>Search records.</li>
            <li>Handle malformed file content.</li>
            <li>Prevent data loss during saving.</li>
          </ul>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Use structured text persistence rather than serializing arbitrary objects as the default approach.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>Assignment 8 — Stream-based Sales Analytics</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Given a collection of sales transactions, calculate:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-stone-700 text-sm sm:text-base my-3 leading-relaxed">
            <li>Total sales.</li>
            <li>Average transaction value.</li>
            <li>Highest transaction.</li>
            <li>Lowest transaction.</li>
            <li>Total sales per product.</li>
            <li>Total sales per category.</li>
            <li>Number of transactions per customer.</li>
            <li>Top-performing product.</li>
          </ul>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Use grouping, reduction, mapping, and filtering.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>Assignment 9 — Java serialization experiment</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Create a serializable object graph containing:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-stone-700 text-sm sm:text-base my-3 leading-relaxed">
            <li>Customer.</li>
            <li>Address.</li>
            <li>Account.</li>
          </ul>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Investigate:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-stone-700 text-sm sm:text-base my-3 leading-relaxed">
            <li>serialVersionUID.</li>
            <li>transient fields.</li>
            <li>Static fields.</li>
            <li>Object references.</li>
            <li>Non-serializable fields.</li>
            <li>Serialization compatibility.</li>
          </ul>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Do not deserialize arbitrary external or untrusted files.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>Assignment 10 — Advanced Java application</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Develop a library or university management system using:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-stone-700 text-sm sm:text-base my-3 leading-relaxed">
            <li>OOP.</li>
            <li>Custom exceptions.</li>
            <li>Generics.</li>
            <li>Collections.</li>
            <li>Comparable and Comparator.</li>
            <li>Lambda expressions.</li>
            <li>Streams.</li>
            <li>Optional.</li>
            <li>File handling.</li>
          </ul>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Create a complete class diagram and demonstrate how each major concept is used.
          </p>
          <hr className="border-[#e7e3da] my-6" />
        </div>
      </section>

      {/* SECTION 37: 37. Assessment and Review Questions */}
      <section id="section-37" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider font-mono">
            Part 17 · 30 MCQs & Deep Diagnostics
          </span>
          <span className="text-xs font-mono text-stone-500">Section 37</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          37. Assessment and Review Questions
        </h2>
        <div className="space-y-4 text-stone-700 leading-relaxed text-sm sm:text-base">
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>Part A — Multiple-choice questions</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-stone-900">1. What is the root class of Java's exception hierarchy?</strong>
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            A. Exception
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            B. Error
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            C. Throwable
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            D. RuntimeException
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-stone-900">Correct answer:</strong> C
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-stone-900">2. Which of the following is a checked exception?</strong>
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            A. NullPointerException
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            B. ArithmeticException
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            C. IOException
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            D. ArrayIndexOutOfBoundsException
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-stone-900">Correct answer:</strong> C
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-stone-900">3. Which keyword explicitly throws an exception?</strong>
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            A. throws
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            B. throw
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            C. catch
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            D. finally
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-stone-900">Correct answer:</strong> B
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-stone-900">4. Which keyword declares exceptions that a method can propagate?</strong>
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            A. throws
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            B. throw
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            C. final
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            D. static
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-stone-900">Correct answer:</strong> A
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-stone-900">5. Which construct automatically closes suitable resources?</strong>
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            A. switch
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            B. try-with-resources
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            C. synchronized
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            D. if-else
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-stone-900">Correct answer:</strong> B
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-stone-900">6. Which exception category does not require compile-time handling or declaration?</strong>
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            A. Checked exceptions
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            B. Unchecked exceptions
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            C. All Throwable objects
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            D. Only IOException
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-stone-900">Correct answer:</strong> B
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-stone-900">7. What is the main advantage of Java generics?</strong>
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            A. Automatic multithreading
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            B. Compile-time type safety and reusable code
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            C. Elimination of all exceptions
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            D. Automatic file handling
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-stone-900">Correct answer:</strong> B
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-stone-900">8. Which symbol represents a wildcard in generics?</strong>
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            A. T
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            B. &amp;
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            C. ?
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            D. *
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-stone-900">Correct answer:</strong> C
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-stone-900">9. What does <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">&lt;T extends Number&gt;</code> represent?</strong>
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            A. T must be a primitive number
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            B. T must be Number or its subtype
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            C. T must be String
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            D. T cannot be Integer
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-stone-900">Correct answer:</strong> B
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-stone-900">10. What is type erasure?</strong>
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            A. Deleting generic source code
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            B. Removing generic type information during compilation according to generic bounds
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            C. Deleting objects at runtime
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            D. Removing collections from memory
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-stone-900">Correct answer:</strong> B
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-stone-900">11. Which collection permits duplicates and preserves positional ordering?</strong>
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            A. HashSet
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            B. TreeSet
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            C. ArrayList
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            D. HashMap
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-stone-900">Correct answer:</strong> C
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-stone-900">12. Which collection does not guarantee iteration order?</strong>
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            A. LinkedHashSet
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            B. HashSet
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            C. TreeSet
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            D. ArrayList
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-stone-900">Correct answer:</strong> B
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-stone-900">13. Which collection stores key-value pairs?</strong>
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            A. List
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            B. Set
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            C. Queue
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            D. Map
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-stone-900">Correct answer:</strong> D
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-stone-900">14. Which implementation maintains unique elements in insertion order?</strong>
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            A. HashSet
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            B. LinkedHashSet
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            C. ArrayList
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            D. PriorityQueue
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-stone-900">Correct answer:</strong> B
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-stone-900">15. Which interface supports iterator-based traversal?</strong>
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            A. Serializable
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            B. Iterable
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            C. Comparator
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            D. Optional
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-stone-900">Correct answer:</strong> B
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-stone-900">16. Which method belongs to Iterator?</strong>
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            A. hasNext()
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            B. compareTo()
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            C. apply()
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            D. collect()
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-stone-900">Correct answer:</strong> A
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-stone-900">17. Which interface defines natural ordering?</strong>
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            A. Comparator
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            B. Comparable
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            C. Iterator
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            D. Supplier
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-stone-900">Correct answer:</strong> B
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-stone-900">18. Which interface defines an external comparison strategy?</strong>
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            A. Comparable
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            B. Comparator
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            C. Consumer
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            D. Predicate
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-stone-900">Correct answer:</strong> B
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-stone-900">19. When were lambda expressions introduced as a standard Java language feature?</strong>
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            A. Java 5
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            B. Java 7
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            C. Java 8
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            D. Java 17
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-stone-900">Correct answer:</strong> C
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-stone-900">20. What is the defining characteristic of a functional interface?</strong>
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            A. It must contain only static methods
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            B. It has exactly one abstract method
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            C. It cannot have default methods
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            D. It cannot be implemented
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-stone-900">Correct answer:</strong> B
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-stone-900">21. Which functional interface returns a boolean result?</strong>
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            A. Consumer
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            B. Supplier
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            C. Predicate
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            D. Function
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-stone-900">Correct answer:</strong> C
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-stone-900">22. Which operator is used for method references?</strong>
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            A. -&gt;
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            B. ::
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            C. ==
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            D. =&gt;
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-stone-900">Correct answer:</strong> B
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-stone-900">23. Which Stream operation is intermediate?</strong>
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            A. count()
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            B. collect()
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            C. filter()
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            D. reduce()
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-stone-900">Correct answer:</strong> C
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-stone-900">24. Which Stream operation combines multiple elements into one result?</strong>
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            A. filter()
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            B. reduce()
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            C. peek()
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            D. sorted()
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-stone-900">Correct answer:</strong> B
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-stone-900">25. What is the primary purpose of Optional?</strong>
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            A. Store unlimited objects
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            B. Represent a potentially absent value
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            C. Replace every Java variable
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            D. Replace exception handling
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-stone-900">Correct answer:</strong> B
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-stone-900">26. Which class is used to represent a file-system path in modern Java?</strong>
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            A. StringBuilder
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            B. Path
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            C. Scanner
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            D. Iterator
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-stone-900">Correct answer:</strong> B
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-stone-900">27. Which class provides utility methods for file operations?</strong>
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            A. Files
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            B. Optional
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            C. Collection
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            D. Serializable
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-stone-900">Correct answer:</strong> A
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-stone-900">28. Which interface marks a class as eligible for default Java object serialization?</strong>
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            A. Iterator
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            B. Comparable
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            C. Serializable
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            D. AutoCloseable
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-stone-900">Correct answer:</strong> C
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-stone-900">29. Which keyword excludes an instance field from default serialization?</strong>
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            A. static
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            B. final
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            C. transient
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            D. protected
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-stone-900">Correct answer:</strong> C
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-stone-900">30. Why is deserialization of untrusted data dangerous?</strong>
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            A. It always deletes the input file
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            B. It can construct unsafe object graphs and trigger dangerous behaviors
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            C. It disables Java generics
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            D. It automatically encrypts data
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-stone-900">Correct answer:</strong> B
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>Part B — Short-answer questions</span>
          </h3>
          <ol className="list-decimal pl-5 space-y-2 text-stone-700 text-sm sm:text-base my-3 leading-relaxed">
            <li>Define an exception.</li>
            <li>Explain Java's Throwable hierarchy.</li>
            <li>Differentiate between Error and Exception.</li>
            <li>Define checked exceptions.</li>
            <li>Define unchecked exceptions.</li>
            <li>Explain try, catch, and finally.</li>
            <li>What is multi-catch?</li>
            <li>Explain exception propagation.</li>
            <li>Differentiate between throw and throws.</li>
            <li>What is exception chaining?</li>
            <li>Define a custom exception.</li>
            <li>Differentiate between checked and unchecked custom exceptions.</li>
            <li>What is try-with-resources?</li>
            <li>Explain suppressed exceptions.</li>
            <li>Define generic programming.</li>
            <li>Explain the advantages of generics.</li>
            <li>What are generic classes?</li>
            <li>What are generic methods?</li>
            <li>Explain bounded type parameters.</li>
            <li>What are generic wildcards?</li>
            <li>Explain the PECS principle.</li>
            <li>Define type erasure.</li>
            <li>What are the major restrictions of generics?</li>
            <li>Explain the Java Collections Framework.</li>
            <li>Differentiate between Collection and Collections.</li>
            <li>Explain List, Set, Queue, and Map.</li>
            <li>Compare ArrayList and LinkedList.</li>
            <li>Compare HashSet, LinkedHashSet, and TreeSet.</li>
            <li>Compare HashMap, LinkedHashMap, and TreeMap.</li>
            <li>Explain Iterable and Iterator.</li>
            <li>What is fail-fast behavior?</li>
            <li>Differentiate between Comparable and Comparator.</li>
            <li>Define lambda expressions.</li>
            <li>What is a functional interface?</li>
            <li>Explain Predicate, Function, Consumer, and Supplier.</li>
            <li>What are method references?</li>
            <li>Explain the Stream API architecture.</li>
            <li>Differentiate between intermediate and terminal operations.</li>
            <li>Explain filter, map, and flatMap.</li>
            <li>What is reduction?</li>
            <li>What is a Collector?</li>
            <li>Explain parallel streams.</li>
            <li>What is Optional?</li>
            <li>Differentiate between orElse and orElseGet.</li>
            <li>Explain NIO.2.</li>
            <li>Differentiate between byte streams and character streams.</li>
            <li>What is try-with-resources in file handling?</li>
            <li>Explain serialization and deserialization.</li>
            <li>What is serialVersionUID?</li>
            <li>What is the purpose of transient?</li>
            <li>Explain why untrusted Java deserialization is dangerous.</li>
          </ol>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>Part C — Predict the output</span>
          </h3>
          <h4 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span>Question 1</span>
          </h4>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public class OutputOne {

    public static void main(String[] args) {

        try {

            int result = 10 / 0;

            System.out.println(result);

        } catch (ArithmeticException e) {

            System.out.println("Error");

        } finally {

            System.out.println("Finished");
        }
    }
}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Answer:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Error
Finished`}</code>
            </pre>
          </div>
          <h4 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span>Question 2</span>
          </h4>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public class OutputTwo {

    public static void main(String[] args) {

        List<Integer> values =
                List.of(1, 2, 3, 4, 5);

        values.stream()
                .filter(n -> n % 2 == 0)
                .map(n -> n * 2)
                .forEach(System.out::println);
    }
}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Answer:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`4
8`}</code>
            </pre>
          </div>
          <h4 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span>Question 3</span>
          </h4>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public class OutputThree {

    public static void main(String[] args) {

        Optional<String> name =
                Optional.ofNullable(null);

        System.out.println(
                name.orElse("Unknown")
        );
    }
}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Answer:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Unknown`}</code>
            </pre>
          </div>
          <h4 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span>Question 4</span>
          </h4>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public class OutputFour {

    public static void main(String[] args) {

        List<Integer> numbers =
                List.of(5, 10, 15, 20);

        int result = numbers.stream()
                .reduce(0, Integer::sum);

        System.out.println(result);
    }
}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Answer:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`50`}</code>
            </pre>
          </div>
          <h4 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span>Question 5</span>
          </h4>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public class OutputFive {

    public static void main(String[] args) {

        Predicate<Integer> test =
                number -> number > 10;

        System.out.println(test.test(20));

        System.out.println(test.test(5));
    }
}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Answer:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`true
false`}</code>
            </pre>
          </div>
          <h4 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span>Question 6</span>
          </h4>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public class OutputSix {

    public static void main(String[] args) {

        List<String> values =
                List.of("java", "python");

        values.stream()
                .map(String::toUpperCase)
                .forEach(System.out::println);
    }
}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Answer:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`JAVA
PYTHON`}</code>
            </pre>
          </div>
          <h4 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span>Question 7</span>
          </h4>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public class OutputSeven {

    public static void main(String[] args) {

        Map<Integer, String> students =
                new TreeMap<>();

        students.put(3, "Sam");

        students.put(1, "Alex");

        students.put(2, "John");

        System.out.println(students);
    }
}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Answer:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`{1=Alex, 2=John, 3=Sam}`}</code>
            </pre>
          </div>
          <h4 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span>Question 8</span>
          </h4>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public class OutputEight {

    public static void main(String[] args) {

        Function<Integer, Integer> square =
                n -> n * n;

        int result = square.apply(6);

        System.out.println(result);
    }
}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Answer:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`36`}</code>
            </pre>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>Part D — Find the error</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-stone-900">Question 1</strong>
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`try {

    int result = 10 / 0;

} catch (Exception e) {

} catch (ArithmeticException e) {

}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Task: Explain why the second catch is unreachable and correct the exception ordering.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-stone-900">Question 2</strong>
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`class Box<T> {

    T value;

    Box() {

        value = new T();
    }
}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Task: Explain the generic type restriction and design a valid alternative.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-stone-900">Question 3</strong>
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`List<int> numbers = new ArrayList<>();`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Task: Explain why primitive types cannot be used directly as generic type arguments.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-stone-900">Question 4</strong>
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`List<String> names = new ArrayList<>();

Iterator<String> iterator = names.iterator();

while (iterator.hasNext()) {

    String name = iterator.next();

    if (name.isBlank()) {

        names.remove(name);
    }
}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Task: Explain the structural modification issue and correct it using Iterator.remove().
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-stone-900">Question 5</strong>
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Optional<String> value = Optional.empty();

System.out.println(value.get());`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Task: Explain what happens and implement a safer alternative.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-stone-900">Question 6</strong>
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Stream<Integer> stream =
        numbers.stream();

long count = stream.count();

stream.forEach(System.out::println);`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Task: Explain why the stream cannot be reused and correct the program.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-stone-900">Question 7</strong>
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`class Student implements Serializable {

    private String name;
}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Task: Explain why a production serialization design should consider an explicit serialVersionUID and safe deserialization policies.
          </p>
          <hr className="border-[#e7e3da] my-6" />
        </div>
      </section>

      {/* SECTION 38: 38. Practical Interview Questions (40 Topics) */}
      <section id="section-38" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider font-mono">
            Part 18 · 40 Technical Interview Questions
          </span>
          <span className="text-xs font-mono text-stone-500">Section 38</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          38. Practical Interview Questions (40 Topics)
        </h2>
        <div className="space-y-4 text-stone-700 leading-relaxed text-sm sm:text-base">
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Students should be able to explain these concepts clearly without relying entirely on code.
          </p>
          <h4 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span>Exception Handling</span>
          </h4>
          <ol className="list-decimal pl-5 space-y-2 text-stone-700 text-sm sm:text-base my-3 leading-relaxed">
            <li>Why is Throwable the root of the exception hierarchy?</li>
            <li>Can an Error be caught?</li>
            <li>Why should developers avoid catching Exception everywhere?</li>
            <li>Can finally execute after a return statement?</li>
            <li>Can a method declare multiple exceptions?</li>
            <li>What happens when a checked exception is not caught or declared?</li>
            <li>What is the difference between throw and throws?</li>
            <li>Why is try-with-resources preferred for closeable resources?</li>
            <li>What is a suppressed exception?</li>
            <li>When should a custom exception be checked or unchecked?</li>
          </ol>
          <h4 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span>Generics and Collections</span>
          </h4>
          <ol className="list-decimal pl-5 space-y-2 text-stone-700 text-sm sm:text-base my-3 leading-relaxed">
            <li>Why were generics introduced?</li>
            <li>What is type erasure?</li>
            <li>Why cannot generic arrays normally be created directly?</li>
            <li>What is a bounded type parameter?</li>
            <li>What is the difference between <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">? extends T</code> and <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">? super T</code>?</li>
            <li>Why does Map not extend Collection?</li>
            <li>What happens when a duplicate element is inserted into a Set?</li>
            <li>When would you prefer TreeMap over HashMap?</li>
            <li>How does fail-fast iterator behavior work?</li>
            <li>Why is ArrayList generally better for indexed access than LinkedList?</li>
          </ol>
          <h4 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span>Functional Programming</span>
          </h4>
          <ol className="list-decimal pl-5 space-y-2 text-stone-700 text-sm sm:text-base my-3 leading-relaxed">
            <li>What is a functional interface?</li>
            <li>Can a functional interface contain default methods?</li>
            <li>What is a lambda expression?</li>
            <li>What is a method reference?</li>
            <li>What is the difference between map and flatMap?</li>
            <li>What makes a stream lazy?</li>
            <li>Can a Stream be reused?</li>
            <li>What is the difference between sequential and parallel streams?</li>
            <li>What is a reduction operation?</li>
            <li>Why should shared mutable state be avoided in parallel streams?</li>
          </ol>
          <h4 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span>File Handling and Serialization</span>
          </h4>
          <ol className="list-decimal pl-5 space-y-2 text-stone-700 text-sm sm:text-base my-3 leading-relaxed">
            <li>Differentiate between Java I/O and NIO.2.</li>
            <li>What is the difference between a byte stream and a character stream?</li>
            <li>Why is explicit character encoding important?</li>
            <li>How does try-with-resources close multiple resources?</li>
            <li>What does Serializable represent?</li>
            <li>Why is serialVersionUID useful?</li>
            <li>What does transient do?</li>
            <li>Are static fields serialized as ordinary object fields?</li>
            <li>Why is arbitrary deserialization unsafe?</li>
            <li>When should a structured external data format be preferred over native serialization?</li>
          </ol>
          <hr className="border-[#e7e3da] my-6" />
        </div>
      </section>

      {/* SECTION 39: 39. Debugging and Common Advanced Java Mistakes */}
      <section id="section-39" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider font-mono">
            Part 19 · Antipatterns & Diagnostic Matrix
          </span>
          <span className="text-xs font-mono text-stone-500">Section 39</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          39. Debugging and Common Advanced Java Mistakes
        </h2>
        <div className="space-y-4 text-stone-700 leading-relaxed text-sm sm:text-base">
          <div className="overflow-x-auto my-4 rounded-xl border border-[#e7e3da] shadow-2xs">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-stone-900 border-b border-[#e7e3da] font-semibold">
                <tr>
                  <th className="px-4 py-3">Mistake</th>
                  <th className="px-4 py-3">Cause</th>
                  <th className="px-4 py-3">Correct approach</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Catching Exception too broadly</td>
                  <td className="px-4 py-2.5 text-stone-700">Lack of exception classification</td>
                  <td className="px-4 py-2.5 text-stone-700">Catch specific exceptions where possible</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Swallowing exceptions</td>
                  <td className="px-4 py-2.5 text-stone-700">Empty catch blocks</td>
                  <td className="px-4 py-2.5 text-stone-700">Log appropriately, recover, or propagate</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Catching Error unnecessarily</td>
                  <td className="px-4 py-2.5 text-stone-700">Confusing errors with ordinary exceptions</td>
                  <td className="px-4 py-2.5 text-stone-700">Fix underlying serious conditions</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Repeating cleanup code</td>
                  <td className="px-4 py-2.5 text-stone-700">Not using resource management</td>
                  <td className="px-4 py-2.5 text-stone-700">Use try-with-resources</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Throwing generic exceptions everywhere</td>
                  <td className="px-4 py-2.5 text-stone-700">Poor exception design</td>
                  <td className="px-4 py-2.5 text-stone-700">Use meaningful exception types</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Using raw collections</td>
                  <td className="px-4 py-2.5 text-stone-700">Avoiding type parameters</td>
                  <td className="px-4 py-2.5 text-stone-700">Use generic declarations</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Creating invalid generic arrays</td>
                  <td className="px-4 py-2.5 text-stone-700">Ignoring type erasure</td>
                  <td className="px-4 py-2.5 text-stone-700">Use supported array or collection designs</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Incorrect wildcard bounds</td>
                  <td className="px-4 py-2.5 text-stone-700">Confusing producer and consumer types</td>
                  <td className="px-4 py-2.5 text-stone-700">Apply PECS appropriately</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Assuming HashMap iteration order</td>
                  <td className="px-4 py-2.5 text-stone-700">Misunderstanding its contract</td>
                  <td className="px-4 py-2.5 text-stone-700">Use an ordered Map when needed</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Modifying a collection during iteration</td>
                  <td className="px-4 py-2.5 text-stone-700">Ignoring iterator rules</td>
                  <td className="px-4 py-2.5 text-stone-700">Use Iterator.remove() or another supported approach</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Incorrect compare implementation</td>
                  <td className="px-4 py-2.5 text-stone-700">Violating comparator contracts</td>
                  <td className="px-4 py-2.5 text-stone-700">Ensure antisymmetry and transitivity</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Overcomplicated lambdas</td>
                  <td className="px-4 py-2.5 text-stone-700">Overusing functional syntax</td>
                  <td className="px-4 py-2.5 text-stone-700">Prefer readable methods</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Reusing a consumed stream</td>
                  <td className="px-4 py-2.5 text-stone-700">Misunderstanding single-use behavior</td>
                  <td className="px-4 py-2.5 text-stone-700">Create a new stream</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Using parallel streams without analysis</td>
                  <td className="px-4 py-2.5 text-stone-700">Assuming automatic speed improvement</td>
                  <td className="px-4 py-2.5 text-stone-700">Benchmark representative workloads</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Ignoring Optional emptiness</td>
                  <td className="px-4 py-2.5 text-stone-700">Calling get() blindly</td>
                  <td className="px-4 py-2.5 text-stone-700">Use appropriate fallback or exception handling</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Reading huge files into one String</td>
                  <td className="px-4 py-2.5 text-stone-700">Not considering memory use</td>
                  <td className="px-4 py-2.5 text-stone-700">Use buffered or streaming approaches</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Using the wrong character encoding</td>
                  <td className="px-4 py-2.5 text-stone-700">Relying on platform defaults</td>
                  <td className="px-4 py-2.5 text-stone-700">Specify UTF-8 where appropriate</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Forgetting to close streams</td>
                  <td className="px-4 py-2.5 text-stone-700">Manual resource management</td>
                  <td className="px-4 py-2.5 text-stone-700">Use try-with-resources</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Deserializing arbitrary files</td>
                  <td className="px-4 py-2.5 text-stone-700">Ignoring security risks</td>
                  <td className="px-4 py-2.5 text-stone-700">Avoid untrusted native deserialization</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Treating transient as encryption</td>
                  <td className="px-4 py-2.5 text-stone-700">Misunderstanding serialization behavior</td>
                  <td className="px-4 py-2.5 text-stone-700">Use suitable security and data-protection mechanisms</td>
                </tr>
              </tbody>
            </table>
          </div>
          <hr className="border-[#e7e3da] my-6" />
        </div>
      </section>

      {/* SECTION 40: 40. Recommended Learning Resources */}
      <section id="section-40" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider font-mono">
            References · Curated Resources
          </span>
          <span className="text-xs font-mono text-stone-500">Section 40</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          40. Recommended Learning Resources
        </h2>
        <div className="space-y-4 text-stone-700 leading-relaxed text-sm sm:text-base">
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Students should prioritize official Oracle and OpenJDK documentation when learning advanced Java APIs.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>Java exceptions</span>
          </h3>
          <ol className="list-decimal pl-5 space-y-2 text-stone-700 text-sm sm:text-base my-3 leading-relaxed">
            <li>Java Throwable API:</li>
          </ol>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            <a href="https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/lang/Throwable.html" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 font-medium underline inline-flex items-center gap-0.5">https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/lang/Throwable.html</a>
          </p>
          <ol className="list-decimal pl-5 space-y-2 text-stone-700 text-sm sm:text-base my-3 leading-relaxed">
            <li>Java Exception API:</li>
          </ol>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            <a href="https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/lang/Exception.html" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 font-medium underline inline-flex items-center gap-0.5">https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/lang/Exception.html</a>
          </p>
          <ol className="list-decimal pl-5 space-y-2 text-stone-700 text-sm sm:text-base my-3 leading-relaxed">
            <li>Java Language Specification — Exceptions:</li>
          </ol>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            <a href="https://docs.oracle.com/javase/specs/jls/se17/html/jls-11.html" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 font-medium underline inline-flex items-center gap-0.5">https://docs.oracle.com/javase/specs/jls/se17/html/jls-11.html</a>
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>Generics</span>
          </h3>
          <ol className="list-decimal pl-5 space-y-2 text-stone-700 text-sm sm:text-base my-3 leading-relaxed">
            <li>Java Generics Tutorial:</li>
          </ol>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            <a href="https://docs.oracle.com/javase/tutorial/java/generics/" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 font-medium underline inline-flex items-center gap-0.5">https://docs.oracle.com/javase/tutorial/java/generics/</a>
          </p>
          <ol className="list-decimal pl-5 space-y-2 text-stone-700 text-sm sm:text-base my-3 leading-relaxed">
            <li>Bounded Type Parameters:</li>
          </ol>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            <a href="https://docs.oracle.com/javase/tutorial/java/generics/bounded.html" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 font-medium underline inline-flex items-center gap-0.5">https://docs.oracle.com/javase/tutorial/java/generics/bounded.html</a>
          </p>
          <ol className="list-decimal pl-5 space-y-2 text-stone-700 text-sm sm:text-base my-3 leading-relaxed">
            <li>Wildcards and Type Bounds:</li>
          </ol>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            <a href="https://docs.oracle.com/javase/tutorial/java/generics/wildcards.html" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 font-medium underline inline-flex items-center gap-0.5">https://docs.oracle.com/javase/tutorial/java/generics/wildcards.html</a>
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>Collections</span>
          </h3>
          <ol className="list-decimal pl-5 space-y-2 text-stone-700 text-sm sm:text-base my-3 leading-relaxed">
            <li>Java Collection API:</li>
          </ol>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            <a href="https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/util/Collection.html" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 font-medium underline inline-flex items-center gap-0.5">https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/util/Collection.html</a>
          </p>
          <ol className="list-decimal pl-5 space-y-2 text-stone-700 text-sm sm:text-base my-3 leading-relaxed">
            <li>Java Map API:</li>
          </ol>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            <a href="https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/util/Map.html" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 font-medium underline inline-flex items-center gap-0.5">https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/util/Map.html</a>
          </p>
          <ol className="list-decimal pl-5 space-y-2 text-stone-700 text-sm sm:text-base my-3 leading-relaxed">
            <li>Java Comparator API:</li>
          </ol>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            <a href="https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/util/Comparator.html" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 font-medium underline inline-flex items-center gap-0.5">https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/util/Comparator.html</a>
          </p>
          <ol className="list-decimal pl-5 space-y-2 text-stone-700 text-sm sm:text-base my-3 leading-relaxed">
            <li>Java Comparable API:</li>
          </ol>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            <a href="https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/lang/Comparable.html" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 font-medium underline inline-flex items-center gap-0.5">https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/lang/Comparable.html</a>
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>Functional programming and streams</span>
          </h3>
          <ol className="list-decimal pl-5 space-y-2 text-stone-700 text-sm sm:text-base my-3 leading-relaxed">
            <li>Java Functional Interfaces:</li>
          </ol>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            <a href="https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/util/function/package-summary.html" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 font-medium underline inline-flex items-center gap-0.5">https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/util/function/package-summary.html</a>
          </p>
          <ol className="list-decimal pl-5 space-y-2 text-stone-700 text-sm sm:text-base my-3 leading-relaxed">
            <li>Stream API:</li>
          </ol>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            <a href="https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/util/stream/package-summary.html" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 font-medium underline inline-flex items-center gap-0.5">https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/util/stream/package-summary.html</a>
          </p>
          <ol className="list-decimal pl-5 space-y-2 text-stone-700 text-sm sm:text-base my-3 leading-relaxed">
            <li>Optional API:</li>
          </ol>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            <a href="https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/util/Optional.html" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 font-medium underline inline-flex items-center gap-0.5">https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/util/Optional.html</a>
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>File handling and serialization</span>
          </h3>
          <ol className="list-decimal pl-5 space-y-2 text-stone-700 text-sm sm:text-base my-3 leading-relaxed">
            <li>Files API:</li>
          </ol>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            <a href="https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/nio/file/Files.html" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 font-medium underline inline-flex items-center gap-0.5">https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/nio/file/Files.html</a>
          </p>
          <ol className="list-decimal pl-5 space-y-2 text-stone-700 text-sm sm:text-base my-3 leading-relaxed">
            <li>Path API:</li>
          </ol>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            <a href="https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/nio/file/Path.html" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 font-medium underline inline-flex items-center gap-0.5">https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/nio/file/Path.html</a>
          </p>
          <ol className="list-decimal pl-5 space-y-2 text-stone-700 text-sm sm:text-base my-3 leading-relaxed">
            <li>ObjectInputStream:</li>
          </ol>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            <a href="https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/io/ObjectInputStream.html" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 font-medium underline inline-flex items-center gap-0.5">https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/io/ObjectInputStream.html</a>
          </p>
          <ol className="list-decimal pl-5 space-y-2 text-stone-700 text-sm sm:text-base my-3 leading-relaxed">
            <li>ObjectOutputStream:</li>
          </ol>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            <a href="https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/io/ObjectOutputStream.html" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 font-medium underline inline-flex items-center gap-0.5">https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/io/ObjectOutputStream.html</a>
          </p>
          <ol className="list-decimal pl-5 space-y-2 text-stone-700 text-sm sm:text-base my-3 leading-relaxed">
            <li>Java Secure Coding Guidelines:</li>
          </ol>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            <a href="https://www.oracle.com/java/technologies/javase/seccodeguide.html" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 font-medium underline inline-flex items-center gap-0.5">https://www.oracle.com/java/technologies/javase/seccodeguide.html</a>
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Official documentation should be the primary reference for API behavior, exception contracts, and security requirements.
          </p>
          <hr className="border-[#e7e3da] my-6" />
        </div>
      </section>

      {/* SECTION 41: 41. Module Completion Criteria */}
      <section id="section-41" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider font-mono">
            Milestone · Completion Checklist
          </span>
          <span className="text-xs font-mono text-stone-500">Section 41</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          41. Module Completion Criteria
        </h2>
        <div className="space-y-4 text-stone-700 leading-relaxed text-sm sm:text-base">
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Students should complete this checklist before progressing.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>Exception handling</span>
          </h3>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm sm:text-base">
            <span className="w-4 h-4 mt-0.5 rounded border border-stone-300 flex items-center justify-center bg-stone-50 text-transparent">
              ✓
            </span>
            <span>Understand Throwable, Error, and Exception.</span>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm sm:text-base">
            <span className="w-4 h-4 mt-0.5 rounded border border-stone-300 flex items-center justify-center bg-stone-50 text-transparent">
              ✓
            </span>
            <span>Differentiate checked and unchecked exceptions.</span>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm sm:text-base">
            <span className="w-4 h-4 mt-0.5 rounded border border-stone-300 flex items-center justify-center bg-stone-50 text-transparent">
              ✓
            </span>
            <span>Use try, catch, and finally.</span>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm sm:text-base">
            <span className="w-4 h-4 mt-0.5 rounded border border-stone-300 flex items-center justify-center bg-stone-50 text-transparent">
              ✓
            </span>
            <span>Implement multiple catch blocks.</span>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm sm:text-base">
            <span className="w-4 h-4 mt-0.5 rounded border border-stone-300 flex items-center justify-center bg-stone-50 text-transparent">
              ✓
            </span>
            <span>Implement multi-catch.</span>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm sm:text-base">
            <span className="w-4 h-4 mt-0.5 rounded border border-stone-300 flex items-center justify-center bg-stone-50 text-transparent">
              ✓
            </span>
            <span>Understand exception propagation.</span>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm sm:text-base">
            <span className="w-4 h-4 mt-0.5 rounded border border-stone-300 flex items-center justify-center bg-stone-50 text-transparent">
              ✓
            </span>
            <span>Use throw and throws.</span>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm sm:text-base">
            <span className="w-4 h-4 mt-0.5 rounded border border-stone-300 flex items-center justify-center bg-stone-50 text-transparent">
              ✓
            </span>
            <span>Create custom checked and unchecked exceptions.</span>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm sm:text-base">
            <span className="w-4 h-4 mt-0.5 rounded border border-stone-300 flex items-center justify-center bg-stone-50 text-transparent">
              ✓
            </span>
            <span>Understand exception chaining.</span>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm sm:text-base">
            <span className="w-4 h-4 mt-0.5 rounded border border-stone-300 flex items-center justify-center bg-stone-50 text-transparent">
              ✓
            </span>
            <span>Implement try-with-resources.</span>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm sm:text-base">
            <span className="w-4 h-4 mt-0.5 rounded border border-stone-300 flex items-center justify-center bg-stone-50 text-transparent">
              ✓
            </span>
            <span>Explain suppressed exceptions.</span>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>Generics</span>
          </h3>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm sm:text-base">
            <span className="w-4 h-4 mt-0.5 rounded border border-stone-300 flex items-center justify-center bg-stone-50 text-transparent">
              ✓
            </span>
            <span>Understand the purpose of generics.</span>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm sm:text-base">
            <span className="w-4 h-4 mt-0.5 rounded border border-stone-300 flex items-center justify-center bg-stone-50 text-transparent">
              ✓
            </span>
            <span>Create generic classes.</span>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm sm:text-base">
            <span className="w-4 h-4 mt-0.5 rounded border border-stone-300 flex items-center justify-center bg-stone-50 text-transparent">
              ✓
            </span>
            <span>Create generic methods.</span>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm sm:text-base">
            <span className="w-4 h-4 mt-0.5 rounded border border-stone-300 flex items-center justify-center bg-stone-50 text-transparent">
              ✓
            </span>
            <span>Use multiple type parameters.</span>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm sm:text-base">
            <span className="w-4 h-4 mt-0.5 rounded border border-stone-300 flex items-center justify-center bg-stone-50 text-transparent">
              ✓
            </span>
            <span>Implement bounded type parameters.</span>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm sm:text-base">
            <span className="w-4 h-4 mt-0.5 rounded border border-stone-300 flex items-center justify-center bg-stone-50 text-transparent">
              ✓
            </span>
            <span>Understand generic wildcards.</span>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm sm:text-base">
            <span className="w-4 h-4 mt-0.5 rounded border border-stone-300 flex items-center justify-center bg-stone-50 text-transparent">
              ✓
            </span>
            <span>Apply PECS.</span>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm sm:text-base">
            <span className="w-4 h-4 mt-0.5 rounded border border-stone-300 flex items-center justify-center bg-stone-50 text-transparent">
              ✓
            </span>
            <span>Understand type erasure.</span>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm sm:text-base">
            <span className="w-4 h-4 mt-0.5 rounded border border-stone-300 flex items-center justify-center bg-stone-50 text-transparent">
              ✓
            </span>
            <span>Recognize restrictions involving generic types.</span>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>Collections Framework</span>
          </h3>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm sm:text-base">
            <span className="w-4 h-4 mt-0.5 rounded border border-stone-300 flex items-center justify-center bg-stone-50 text-transparent">
              ✓
            </span>
            <span>Understand the Collections Framework hierarchy.</span>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm sm:text-base">
            <span className="w-4 h-4 mt-0.5 rounded border border-stone-300 flex items-center justify-center bg-stone-50 text-transparent">
              ✓
            </span>
            <span>Use ArrayList and LinkedList.</span>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm sm:text-base">
            <span className="w-4 h-4 mt-0.5 rounded border border-stone-300 flex items-center justify-center bg-stone-50 text-transparent">
              ✓
            </span>
            <span>Use HashSet, LinkedHashSet, and TreeSet.</span>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm sm:text-base">
            <span className="w-4 h-4 mt-0.5 rounded border border-stone-300 flex items-center justify-center bg-stone-50 text-transparent">
              ✓
            </span>
            <span>Use Queue, Deque, and PriorityQueue.</span>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm sm:text-base">
            <span className="w-4 h-4 mt-0.5 rounded border border-stone-300 flex items-center justify-center bg-stone-50 text-transparent">
              ✓
            </span>
            <span>Use HashMap, LinkedHashMap, and TreeMap.</span>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm sm:text-base">
            <span className="w-4 h-4 mt-0.5 rounded border border-stone-300 flex items-center justify-center bg-stone-50 text-transparent">
              ✓
            </span>
            <span>Traverse collections using enhanced for loops.</span>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm sm:text-base">
            <span className="w-4 h-4 mt-0.5 rounded border border-stone-300 flex items-center justify-center bg-stone-50 text-transparent">
              ✓
            </span>
            <span>Implement Iterator and ListIterator.</span>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm sm:text-base">
            <span className="w-4 h-4 mt-0.5 rounded border border-stone-300 flex items-center justify-center bg-stone-50 text-transparent">
              ✓
            </span>
            <span>Understand fail-fast behavior.</span>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm sm:text-base">
            <span className="w-4 h-4 mt-0.5 rounded border border-stone-300 flex items-center justify-center bg-stone-50 text-transparent">
              ✓
            </span>
            <span>Implement Comparable.</span>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm sm:text-base">
            <span className="w-4 h-4 mt-0.5 rounded border border-stone-300 flex items-center justify-center bg-stone-50 text-transparent">
              ✓
            </span>
            <span>Implement Comparator.</span>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm sm:text-base">
            <span className="w-4 h-4 mt-0.5 rounded border border-stone-300 flex items-center justify-center bg-stone-50 text-transparent">
              ✓
            </span>
            <span>Compare collection performance characteristics.</span>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>Functional programming</span>
          </h3>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm sm:text-base">
            <span className="w-4 h-4 mt-0.5 rounded border border-stone-300 flex items-center justify-center bg-stone-50 text-transparent">
              ✓
            </span>
            <span>Implement lambda expressions.</span>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm sm:text-base">
            <span className="w-4 h-4 mt-0.5 rounded border border-stone-300 flex items-center justify-center bg-stone-50 text-transparent">
              ✓
            </span>
            <span>Define functional interfaces.</span>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm sm:text-base">
            <span className="w-4 h-4 mt-0.5 rounded border border-stone-300 flex items-center justify-center bg-stone-50 text-transparent">
              ✓
            </span>
            <span>Use Predicate.</span>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm sm:text-base">
            <span className="w-4 h-4 mt-0.5 rounded border border-stone-300 flex items-center justify-center bg-stone-50 text-transparent">
              ✓
            </span>
            <span>Use Function.</span>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm sm:text-base">
            <span className="w-4 h-4 mt-0.5 rounded border border-stone-300 flex items-center justify-center bg-stone-50 text-transparent">
              ✓
            </span>
            <span>Use Consumer.</span>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm sm:text-base">
            <span className="w-4 h-4 mt-0.5 rounded border border-stone-300 flex items-center justify-center bg-stone-50 text-transparent">
              ✓
            </span>
            <span>Use Supplier.</span>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm sm:text-base">
            <span className="w-4 h-4 mt-0.5 rounded border border-stone-300 flex items-center justify-center bg-stone-50 text-transparent">
              ✓
            </span>
            <span>Use UnaryOperator and BinaryOperator.</span>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm sm:text-base">
            <span className="w-4 h-4 mt-0.5 rounded border border-stone-300 flex items-center justify-center bg-stone-50 text-transparent">
              ✓
            </span>
            <span>Implement static method references.</span>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm sm:text-base">
            <span className="w-4 h-4 mt-0.5 rounded border border-stone-300 flex items-center justify-center bg-stone-50 text-transparent">
              ✓
            </span>
            <span>Implement instance method references.</span>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm sm:text-base">
            <span className="w-4 h-4 mt-0.5 rounded border border-stone-300 flex items-center justify-center bg-stone-50 text-transparent">
              ✓
            </span>
            <span>Implement constructor references.</span>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>Stream API and Optional</span>
          </h3>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm sm:text-base">
            <span className="w-4 h-4 mt-0.5 rounded border border-stone-300 flex items-center justify-center bg-stone-50 text-transparent">
              ✓
            </span>
            <span>Build Stream pipelines.</span>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm sm:text-base">
            <span className="w-4 h-4 mt-0.5 rounded border border-stone-300 flex items-center justify-center bg-stone-50 text-transparent">
              ✓
            </span>
            <span>Use filter, map, and flatMap.</span>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm sm:text-base">
            <span className="w-4 h-4 mt-0.5 rounded border border-stone-300 flex items-center justify-center bg-stone-50 text-transparent">
              ✓
            </span>
            <span>Use sorted, distinct, skip, and limit.</span>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm sm:text-base">
            <span className="w-4 h-4 mt-0.5 rounded border border-stone-300 flex items-center justify-center bg-stone-50 text-transparent">
              ✓
            </span>
            <span>Use reduce and collect.</span>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm sm:text-base">
            <span className="w-4 h-4 mt-0.5 rounded border border-stone-300 flex items-center justify-center bg-stone-50 text-transparent">
              ✓
            </span>
            <span>Implement groupingBy and counting.</span>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm sm:text-base">
            <span className="w-4 h-4 mt-0.5 rounded border border-stone-300 flex items-center justify-center bg-stone-50 text-transparent">
              ✓
            </span>
            <span>Use primitive streams.</span>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm sm:text-base">
            <span className="w-4 h-4 mt-0.5 rounded border border-stone-300 flex items-center justify-center bg-stone-50 text-transparent">
              ✓
            </span>
            <span>Understand parallel streams.</span>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm sm:text-base">
            <span className="w-4 h-4 mt-0.5 rounded border border-stone-300 flex items-center justify-center bg-stone-50 text-transparent">
              ✓
            </span>
            <span>Understand stream single-use behavior.</span>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm sm:text-base">
            <span className="w-4 h-4 mt-0.5 rounded border border-stone-300 flex items-center justify-center bg-stone-50 text-transparent">
              ✓
            </span>
            <span>Use Optional.of, empty, and ofNullable.</span>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm sm:text-base">
            <span className="w-4 h-4 mt-0.5 rounded border border-stone-300 flex items-center justify-center bg-stone-50 text-transparent">
              ✓
            </span>
            <span>Apply map, filter, and flatMap.</span>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm sm:text-base">
            <span className="w-4 h-4 mt-0.5 rounded border border-stone-300 flex items-center justify-center bg-stone-50 text-transparent">
              ✓
            </span>
            <span>Use orElse, orElseGet, and orElseThrow.</span>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>File handling and serialization</span>
          </h3>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm sm:text-base">
            <span className="w-4 h-4 mt-0.5 rounded border border-stone-300 flex items-center justify-center bg-stone-50 text-transparent">
              ✓
            </span>
            <span>Understand Path and Files.</span>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm sm:text-base">
            <span className="w-4 h-4 mt-0.5 rounded border border-stone-300 flex items-center justify-center bg-stone-50 text-transparent">
              ✓
            </span>
            <span>Create files and directories.</span>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm sm:text-base">
            <span className="w-4 h-4 mt-0.5 rounded border border-stone-300 flex items-center justify-center bg-stone-50 text-transparent">
              ✓
            </span>
            <span>Read text files.</span>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm sm:text-base">
            <span className="w-4 h-4 mt-0.5 rounded border border-stone-300 flex items-center justify-center bg-stone-50 text-transparent">
              ✓
            </span>
            <span>Write and append text files.</span>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm sm:text-base">
            <span className="w-4 h-4 mt-0.5 rounded border border-stone-300 flex items-center justify-center bg-stone-50 text-transparent">
              ✓
            </span>
            <span>Use BufferedReader and BufferedWriter.</span>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm sm:text-base">
            <span className="w-4 h-4 mt-0.5 rounded border border-stone-300 flex items-center justify-center bg-stone-50 text-transparent">
              ✓
            </span>
            <span>Understand byte and character streams.</span>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm sm:text-base">
            <span className="w-4 h-4 mt-0.5 rounded border border-stone-300 flex items-center justify-center bg-stone-50 text-transparent">
              ✓
            </span>
            <span>Specify text encoding.</span>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm sm:text-base">
            <span className="w-4 h-4 mt-0.5 rounded border border-stone-300 flex items-center justify-center bg-stone-50 text-transparent">
              ✓
            </span>
            <span>Apply try-with-resources.</span>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm sm:text-base">
            <span className="w-4 h-4 mt-0.5 rounded border border-stone-300 flex items-center justify-center bg-stone-50 text-transparent">
              ✓
            </span>
            <span>Understand Serializable.</span>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm sm:text-base">
            <span className="w-4 h-4 mt-0.5 rounded border border-stone-300 flex items-center justify-center bg-stone-50 text-transparent">
              ✓
            </span>
            <span>Implement object serialization.</span>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm sm:text-base">
            <span className="w-4 h-4 mt-0.5 rounded border border-stone-300 flex items-center justify-center bg-stone-50 text-transparent">
              ✓
            </span>
            <span>Implement object deserialization in a controlled environment.</span>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm sm:text-base">
            <span className="w-4 h-4 mt-0.5 rounded border border-stone-300 flex items-center justify-center bg-stone-50 text-transparent">
              ✓
            </span>
            <span>Understand serialVersionUID.</span>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm sm:text-base">
            <span className="w-4 h-4 mt-0.5 rounded border border-stone-300 flex items-center justify-center bg-stone-50 text-transparent">
              ✓
            </span>
            <span>Understand transient fields.</span>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm sm:text-base">
            <span className="w-4 h-4 mt-0.5 rounded border border-stone-300 flex items-center justify-center bg-stone-50 text-transparent">
              ✓
            </span>
            <span>Understand deserialization security risks.</span>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>Practical assessment</span>
          </h3>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm sm:text-base">
            <span className="w-4 h-4 mt-0.5 rounded border border-stone-300 flex items-center justify-center bg-stone-50 text-transparent">
              ✓
            </span>
            <span>Complete all ten laboratory exercises.</span>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm sm:text-base">
            <span className="w-4 h-4 mt-0.5 rounded border border-stone-300 flex items-center justify-center bg-stone-50 text-transparent">
              ✓
            </span>
            <span>Attempt all ten programming assignments.</span>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm sm:text-base">
            <span className="w-4 h-4 mt-0.5 rounded border border-stone-300 flex items-center justify-center bg-stone-50 text-transparent">
              ✓
            </span>
            <span>Complete the assessment questions.</span>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm sm:text-base">
            <span className="w-4 h-4 mt-0.5 rounded border border-stone-300 flex items-center justify-center bg-stone-50 text-transparent">
              ✓
            </span>
            <span>Complete the Student Record Management System.</span>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm sm:text-base">
            <span className="w-4 h-4 mt-0.5 rounded border border-stone-300 flex items-center justify-center bg-stone-50 text-transparent">
              ✓
            </span>
            <span>Explain the architecture of the application.</span>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm sm:text-base">
            <span className="w-4 h-4 mt-0.5 rounded border border-stone-300 flex items-center justify-center bg-stone-50 text-transparent">
              ✓
            </span>
            <span>Use generic code where appropriate.</span>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm sm:text-base">
            <span className="w-4 h-4 mt-0.5 rounded border border-stone-300 flex items-center justify-center bg-stone-50 text-transparent">
              ✓
            </span>
            <span>Demonstrate stream-based data processing.</span>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm sm:text-base">
            <span className="w-4 h-4 mt-0.5 rounded border border-stone-300 flex items-center justify-center bg-stone-50 text-transparent">
              ✓
            </span>
            <span>Persist records using file handling.</span>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm sm:text-base">
            <span className="w-4 h-4 mt-0.5 rounded border border-stone-300 flex items-center justify-center bg-stone-50 text-transparent">
              ✓
            </span>
            <span>Handle expected exceptions correctly.</span>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm sm:text-base">
            <span className="w-4 h-4 mt-0.5 rounded border border-stone-300 flex items-center justify-center bg-stone-50 text-transparent">
              ✓
            </span>
            <span>Test application behavior with invalid inputs and missing resources.</span>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>Final Expected Capability</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            By the end of Module 5, students should be able to develop Java applications using advanced language features and standard library components.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            They should be capable of implementing type-safe reusable code with generics, choosing appropriate collection implementations, handling exceptional situations, processing data using functional operations, managing files safely, and understanding serialization.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Most importantly, students should understand when each feature is appropriate rather than simply memorizing its syntax.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-stone-900">The expected outcome is the ability to build a structured Java application that can handle real-world data, errors, collections, processing, and persistent storage.</strong>
          </p>
          <hr className="border-[#e7e3da] my-6" />
        </div>
      </section>

      {/* SECTION 42: 42. Phase 1 — Java Foundations Final Capstone & Transition to DSA */}
      <section id="section-42" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider font-mono">
            Milestone · Phase 1 Exit Mastery
          </span>
          <span className="text-xs font-mono text-stone-500">Section 42</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          42. Phase 1 — Java Foundations Final Capstone & Transition to DSA
        </h2>
        <div className="space-y-4 text-stone-700 leading-relaxed text-sm sm:text-base">
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            With Modules 1–5, students have now covered a broad foundation in Java programming.
          </p>
          <div className="overflow-x-auto my-4 rounded-xl border border-[#e7e3da] shadow-2xs">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-stone-900 border-b border-[#e7e3da] font-semibold">
                <tr>
                  <th className="px-4 py-3">Module</th>
                  <th className="px-4 py-3">Subject</th>
                  <th className="px-4 py-3">Main capability</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Module 1</td>
                  <td className="px-4 py-2.5 text-stone-700">Introduction to Programming with Java</td>
                  <td className="px-4 py-2.5 text-stone-700">Programming fundamentals and Java execution</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Module 2</td>
                  <td className="px-4 py-2.5 text-stone-700">Control Flow, Methods &amp; Problem-Solving</td>
                  <td className="px-4 py-2.5 text-stone-700">Algorithms, conditions, loops, and reusable methods</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Module 3</td>
                  <td className="px-4 py-2.5 text-stone-700">Arrays, Strings &amp; Mathematical Programming</td>
                  <td className="px-4 py-2.5 text-stone-700">Data processing and mathematical algorithms</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Module 4</td>
                  <td className="px-4 py-2.5 text-stone-700">Object-Oriented Programming with Java</td>
                  <td className="px-4 py-2.5 text-stone-700">Object-oriented design and software modeling</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Module 5</td>
                  <td className="px-4 py-2.5 text-stone-700">Advanced Java Programming</td>
                  <td className="px-4 py-2.5 text-stone-700">Exceptions, generics, collections, streams, and persistence</td>
                </tr>
              </tbody>
            </table>
          </div>
          <h4 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span>Phase 1 exit-level capabilities</span>
          </h4>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            After completing all five modules, students should be able to:
          </p>
          <ol className="list-decimal pl-5 space-y-2 text-stone-700 text-sm sm:text-base my-3 leading-relaxed">
            <li>Develop and execute Java applications.</li>
            <li>Understand Java's compilation and runtime architecture.</li>
            <li>Analyze programming problems and design algorithms.</li>
            <li>Implement conditions, loops, methods, and recursion.</li>
            <li>Work with arrays, Strings, and matrices.</li>
            <li>Implement mathematical and searching algorithms.</li>
            <li>Design classes and objects.</li>
            <li>Apply encapsulation, inheritance, polymorphism, and abstraction.</li>
            <li>Implement interfaces and composition.</li>
            <li>Organize applications using packages.</li>
            <li>Apply introductory SOLID principles.</li>
            <li>Handle exceptions and create custom exceptions.</li>
            <li>Develop reusable generic classes and methods.</li>
            <li>Choose appropriate Collections Framework implementations.</li>
            <li>Implement lambda expressions and functional interfaces.</li>
            <li>Process collection data using Stream API.</li>
            <li>Use Optional appropriately.</li>
            <li>Perform file operations.</li>
            <li>Understand serialization and deserialization.</li>
            <li>Build complete modular Java applications.</li>
          </ol>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>What comes after Phase 1?</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            The next major learning stage is <strong className="font-semibold text-stone-900">Phase 2 — Data Structures and Algorithms</strong>.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            The focus shifts from learning the Java language and its APIs to designing efficient solutions for computational problems.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            The recommended progression is:
          </p>
          <ol className="list-decimal pl-5 space-y-2 text-stone-700 text-sm sm:text-base my-3 leading-relaxed">
            <li>Algorithm analysis and Big-O notation.</li>
            <li>Advanced array problem-solving.</li>
            <li>Searching algorithms.</li>
            <li>Sorting algorithms.</li>
            <li>Linked lists.</li>
            <li>Stacks and queues.</li>
            <li>Hashing and hash tables.</li>
            <li>Recursion and backtracking.</li>
            <li>Trees and binary search trees.</li>
            <li>Heaps and priority queues.</li>
            <li>Graphs and graph algorithms.</li>
            <li>Greedy algorithms.</li>
            <li>Dynamic programming.</li>
            <li>Interview-level problem-solving and optimization.</li>
          </ol>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-stone-900">Final outcome of Phase 1:</strong> Students should be comfortable using Java as a programming language and development platform. They can now concentrate on becoming stronger algorithm designers and software developers in the next phase.
          </p>
        </div>
      </section>

    </div>
  );
}
