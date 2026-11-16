import React from "react";
import { Box, Layers, ShieldCheck, GitFork, Cpu, Workflow, Award, CheckCircle2, BookOpen } from "lucide-react";

export default function JavaOOPSections() {
  return (
    <div className="space-y-10">
      {/* SECTION 0: Module 4: Complete Curriculum Specification */}
      <section id="overview" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider font-mono">
            Course Roadmap · Overview
          </span>
          <span className="text-xs font-mono text-stone-500">Section 0</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          Module 4: Complete Curriculum Specification
        </h2>
        <div className="space-y-4 text-stone-700 leading-relaxed text-sm sm:text-base">
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>Module Overview</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Object-Oriented Programming (OOP) is a programming paradigm that organizes software around objects containing data and behavior.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Instead of writing an entire application as a collection of unrelated statements and methods, OOP allows developers to represent real-world entities, define their responsibilities, establish relationships, and organize application behavior into reusable components.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Java is a class-based, object-oriented programming language. Its core OOP capabilities include classes, objects, encapsulation, inheritance, polymorphism, abstraction, and interfaces.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            This module explores these concepts from beginner to intermediate level and introduces fundamental software design practices used in professional Java development.
          </p>
          <h4 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span>Prerequisites</span>
          </h4>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Students should understand:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-stone-700 text-sm sm:text-base my-3 leading-relaxed">
            <li>Java variables and data types.</li>
            <li>Arrays and String manipulation.</li>
            <li>Methods and method parameters.</li>
            <li>Return types and method overloading.</li>
            <li>Control-flow statements.</li>
            <li>Basic algorithms and problem-solving.</li>
            <li>Java references and object behavior.</li>
          </ul>
          <h4 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span>Learning Objectives</span>
          </h4>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            By the end of this module, students should be able to:
          </p>
          <ol className="list-decimal pl-5 space-y-2 text-stone-700 text-sm sm:text-base my-3 leading-relaxed">
            <li>Explain object-oriented programming and its importance.</li>
            <li>Understand the four major OOP principles.</li>
            <li>Design and declare Java classes.</li>
            <li>Create and manipulate objects.</li>
            <li>Understand object state, behavior, and identity.</li>
            <li>Implement default and parameterized constructors.</li>
            <li>Implement constructor overloading and chaining.</li>
            <li>Understand the <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">this</code> and <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">super</code> keywords.</li>
            <li>Apply encapsulation and data hiding.</li>
            <li>Implement inheritance using <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">extends</code>.</li>
            <li>Understand Java's inheritance hierarchy.</li>
            <li>Override inherited methods correctly.</li>
            <li>Understand runtime polymorphism and dynamic method dispatch.</li>
            <li>Distinguish method overloading from method overriding.</li>
            <li>Implement abstraction using abstract classes.</li>
            <li>Design and implement interfaces.</li>
            <li>Understand multiple interface implementation.</li>
            <li>Work with static and instance members.</li>
            <li>Apply the <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">final</code> keyword.</li>
            <li>Use access modifiers correctly.</li>
            <li>Organize applications using packages.</li>
            <li>Compare composition and inheritance.</li>
            <li>Model association, aggregation, and composition.</li>
            <li>Read and create UML class diagrams.</li>
            <li>Understand and apply the five SOLID principles.</li>
            <li>Design a modular Java application using OOP principles.</li>
          </ol>
          <hr className="border-[#e7e3da] my-6" />
        </div>
      </section>

      {/* SECTION 1: 1. Introduction to Object-Oriented Programming */}
      <section id="section-1" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider font-mono">
            Part 1 · Paradigm Shift
          </span>
          <span className="text-xs font-mono text-stone-500">Section 1</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          1. Introduction to Object-Oriented Programming
        </h2>
        <div className="space-y-4 text-stone-700 leading-relaxed text-sm sm:text-base">
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>1.1 What is Object-Oriented Programming?</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Object-Oriented Programming is a programming paradigm in which software is organized around objects that combine state and behavior.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            An object represents an entity or concept within a program.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            For example, consider a banking application.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            A bank account can be represented as an object containing:
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-stone-900">State:</strong>
          </p>
          <ul className="list-disc pl-5 space-y-2 text-stone-700 text-sm sm:text-base my-3 leading-relaxed">
            <li>Account number.</li>
            <li>Account holder name.</li>
            <li>Current balance.</li>
            <li>Account status.</li>
          </ul>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-stone-900">Behavior:</strong>
          </p>
          <ul className="list-disc pl-5 space-y-2 text-stone-700 text-sm sm:text-base my-3 leading-relaxed">
            <li>Deposit money.</li>
            <li>Withdraw money.</li>
            <li>Check balance.</li>
            <li>Display account information.</li>
          </ul>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Instead of writing unrelated variables and methods for each account, we can create a class that defines the common structure and behavior of bank accounts.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Each individual bank account can then be represented by a separate object.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>1.2 Procedural programming versus object-oriented programming</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Before understanding OOP deeply, it is useful to compare it with procedural programming.
          </p>
          <h4 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span>Procedural programming</span>
          </h4>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Procedural programming organizes a program primarily around procedures or functions.
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
              <code>{`public class BankingProcedure {

    static double balance = 5000;

    static void deposit(double amount) {

        balance += amount;
    }

    static void withdraw(double amount) {

        balance -= amount;
    }

    public static void main(String[] args) {

        deposit(1000);

        withdraw(500);

        System.out.println(balance);
    }
}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            This program works for a basic demonstration, but all accounts share the same balance variable.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            It becomes difficult to manage multiple independent accounts.
          </p>
          <h4 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span>Object-oriented programming</span>
          </h4>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            In OOP, data and the methods that operate on that data are organized into objects.
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`class BankAccount {

    double balance;

    void deposit(double amount) {

        balance += amount;
    }

    void withdraw(double amount) {

        balance -= amount;
    }
}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Now we can create multiple accounts.
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public class BankingApplication {

    public static void main(String[] args) {

        BankAccount account1 = new BankAccount();

        BankAccount account2 = new BankAccount();

        account1.balance = 5000;

        account2.balance = 10000;

        account1.deposit(1000);

        account2.deposit(2000);

        System.out.println(account1.balance);

        System.out.println(account2.balance);
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
              <code>{`6000.0
12000.0`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Each object maintains its own instance state.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            This is one of the major benefits of object-oriented programming.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>1.3 Why do we need OOP?</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Large applications contain many interacting components.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Consider an e-commerce platform.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            It may contain:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-stone-700 text-sm sm:text-base my-3 leading-relaxed">
            <li>Customers.</li>
            <li>Products.</li>
            <li>Shopping carts.</li>
            <li>Orders.</li>
            <li>Payments.</li>
            <li>Delivery information.</li>
            <li>Reviews.</li>
            <li>Notifications.</li>
          </ul>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Developing such a system using only unrelated variables and methods would make it difficult to organize the code.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            OOP provides a structured way to represent each responsibility.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            For example:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`E-Commerce Application
|
+-- Customer
|
+-- Product
|
+-- ShoppingCart
|
+-- Order
|
+-- Payment
|
+-- Delivery
|
+-- Notification`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Each class defines specific responsibilities, and objects interact to implement application behavior.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>1.4 Major advantages of OOP</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-stone-900">1. Modularity</strong>
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Applications can be divided into independent classes and components.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-stone-900">2. Reusability</strong>
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Existing classes and interfaces can be reused in different parts of an application.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-stone-900">3. Maintainability</strong>
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Well-organized classes make software easier to understand and modify.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-stone-900">4. Encapsulation</strong>
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Internal implementation details can be hidden while controlled operations are exposed.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-stone-900">5. Extensibility</strong>
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            New functionality can be introduced by extending or implementing appropriate abstractions.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-stone-900">6. Testability</strong>
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Individual components can be tested independently when their dependencies are designed appropriately.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-stone-900">7. Real-world modeling</strong>
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Objects can represent entities, responsibilities, and relationships found in real systems.
          </p>
          <hr className="border-[#e7e3da] my-6" />
        </div>
      </section>

      {/* SECTION 2: 2. The Four Main Principles of OOP */}
      <section id="section-2" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider font-mono">
            Part 1 · OOP Pillars
          </span>
          <span className="text-xs font-mono text-stone-500">Section 2</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          2. The Four Main Principles of OOP
        </h2>
        <div className="space-y-4 text-stone-700 leading-relaxed text-sm sm:text-base">
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Object-oriented programming is commonly explained using four fundamental principles:
          </p>
          <ol className="list-decimal pl-5 space-y-2 text-stone-700 text-sm sm:text-base my-3 leading-relaxed">
            <li>Encapsulation.</li>
            <li>Inheritance.</li>
            <li>Polymorphism.</li>
            <li>Abstraction.</li>
          </ol>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            These concepts work together rather than operating as completely separate features.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>2.1 Encapsulation</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Encapsulation combines data and related behavior within a class while controlling access to internal state.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Example:
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            A bank account should not allow an external application to directly change its balance to any arbitrary value.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Instead, it should provide controlled methods such as <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">deposit()</code> and <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">withdraw()</code>.
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`class BankAccount {

    private double balance;

    public void deposit(double amount) {

        if (amount > 0) {

            balance += amount;
        }
    }

    public double getBalance() {

        return balance;
    }
}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            The balance is private.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            External classes must use the public methods to interact with it.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Benefits:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-stone-700 text-sm sm:text-base my-3 leading-relaxed">
            <li>Protects internal data.</li>
            <li>Enforces validation.</li>
            <li>Prevents uncontrolled modification.</li>
            <li>Makes implementation changes easier.</li>
            <li>Provides a well-defined public API.</li>
          </ul>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>2.2 Inheritance</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Inheritance allows one class to acquire accessible members and behavior from another class.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Example:
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            A student and an instructor are both people.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            They may share:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-stone-700 text-sm sm:text-base my-3 leading-relaxed">
            <li>Name.</li>
            <li>Age.</li>
            <li>Email address.</li>
          </ul>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            However, they also have different responsibilities.
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`           Person
             |
       +-----+-----+
       |           |
     Student    Instructor`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            The common features can be defined in a parent class called <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">Person</code>.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">Student</code> and <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">Instructor</code> can then extend it.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Benefits:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-stone-700 text-sm sm:text-base my-3 leading-relaxed">
            <li>Reuse of common implementation.</li>
            <li>Reduced duplication.</li>
            <li>Clear class hierarchies.</li>
            <li>Support for polymorphism.</li>
          </ul>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>2.3 Polymorphism</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Polymorphism means that a common interface or parent type can represent objects with different implementations or behaviors.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            For example, an application may work with different payment methods:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-stone-700 text-sm sm:text-base my-3 leading-relaxed">
            <li>Credit card.</li>
            <li>UPI.</li>
            <li>Bank transfer.</li>
          </ul>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Each payment method can provide its own implementation of a common payment operation.
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`interface Payment {

    void pay(double amount);
}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Different implementations can provide different behaviors.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            The application can use a common <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">Payment</code> reference without needing to know every implementation detail.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Benefits:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-stone-700 text-sm sm:text-base my-3 leading-relaxed">
            <li>Flexible code.</li>
            <li>Extensible application design.</li>
            <li>Reduced dependency on specific implementations.</li>
            <li>Supports runtime method selection.</li>
          </ul>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>2.4 Abstraction</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Abstraction focuses on exposing essential functionality while hiding implementation details.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            For example, when using an ATM, a customer selects an option such as withdrawing money without needing to understand the internal banking software, transaction management, or database operations.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            In Java, abstraction is commonly implemented using:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-stone-700 text-sm sm:text-base my-3 leading-relaxed">
            <li>Abstract classes.</li>
            <li>Interfaces.</li>
          </ul>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Benefits:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-stone-700 text-sm sm:text-base my-3 leading-relaxed">
            <li>Hides unnecessary implementation details.</li>
            <li>Reduces complexity.</li>
            <li>Defines clear contracts.</li>
            <li>Allows implementation flexibility.</li>
          </ul>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>2.5 Comparison of the four principles</span>
          </h3>
          <div className="overflow-x-auto my-4 rounded-xl border border-[#e7e3da] shadow-2xs">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-stone-900 border-b border-[#e7e3da] font-semibold">
                <tr>
                  <th className="px-4 py-3">Principle</th>
                  <th className="px-4 py-3">Main idea</th>
                  <th className="px-4 py-3">Java mechanism</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Encapsulation</td>
                  <td className="px-4 py-2.5 text-stone-700">Protect and control object state</td>
                  <td className="px-4 py-2.5 text-stone-700">Private fields and public methods</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Inheritance</td>
                  <td className="px-4 py-2.5 text-stone-700">Reuse and specialize class behavior</td>
                  <td className="px-4 py-2.5 text-stone-700"><code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">extends</code></td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Polymorphism</td>
                  <td className="px-4 py-2.5 text-stone-700">Different implementations through common types</td>
                  <td className="px-4 py-2.5 text-stone-700">Overriding and interfaces</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Abstraction</td>
                  <td className="px-4 py-2.5 text-stone-700">Expose essential functionality</td>
                  <td className="px-4 py-2.5 text-stone-700">Abstract classes and interfaces</td>
                </tr>
              </tbody>
            </table>
          </div>
          <hr className="border-[#e7e3da] my-6" />
        </div>
      </section>

      {/* SECTION 3: 3. Classes and Objects */}
      <section id="section-3" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider font-mono">
            Part 2 · Blueprints & Runtime Instances
          </span>
          <span className="text-xs font-mono text-stone-500">Section 3</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          3. Classes and Objects
        </h2>
        <div className="space-y-4 text-stone-700 leading-relaxed text-sm sm:text-base">
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>3.1 What is a class?</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            A class is a user-defined reference type that acts as a blueprint for creating objects.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            A class defines the structure and behavior that its instances can have.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Consider a student management application.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            A <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">Student</code> class may define:
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-stone-900">Attributes:</strong>
          </p>
          <ul className="list-disc pl-5 space-y-2 text-stone-700 text-sm sm:text-base my-3 leading-relaxed">
            <li>Student ID.</li>
            <li>Student name.</li>
            <li>Age.</li>
            <li>Course.</li>
          </ul>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-stone-900">Methods:</strong>
          </p>
          <ul className="list-disc pl-5 space-y-2 text-stone-700 text-sm sm:text-base my-3 leading-relaxed">
            <li>Display details.</li>
            <li>Update course.</li>
            <li>Calculate academic performance.</li>
            <li>Check enrollment status.</li>
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
              <code>{`class Student {

    int studentId;

    String name;

    int age;

    String course;

    void displayDetails() {

        System.out.println("Student ID: " + studentId);

        System.out.println("Name: " + name);

        System.out.println("Age: " + age);

        System.out.println("Course: " + course);
    }
}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            This class defines a structure for student objects.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            It does not itself represent a particular student.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>3.2 What is an object?</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            An object is a runtime instance of a class.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Each object has:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-stone-700 text-sm sm:text-base my-3 leading-relaxed">
            <li>Identity.</li>
            <li>State.</li>
            <li>Behavior.</li>
          </ul>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-stone-900">Identity:</strong> Distinguishes one object from another.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-stone-900">State:</strong> Represented through its instance fields.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-stone-900">Behavior:</strong> Represented through its methods.
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
              <code>{`public class StudentApplication {

    public static void main(String[] args) {

        Student student1 = new Student();

        Student student2 = new Student();

        student1.studentId = 101;

        student1.name = "Alex";

        student1.age = 21;

        student1.course = "Computer Science";

        student2.studentId = 102;

        student2.name = "Sam";

        student2.age = 22;

        student2.course = "Information Technology";

        student1.displayDetails();

        student2.displayDetails();
    }
}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Each object has its own instance fields.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>3.3 Class versus object</span>
          </h3>
          <div className="overflow-x-auto my-4 rounded-xl border border-[#e7e3da] shadow-2xs">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-stone-900 border-b border-[#e7e3da] font-semibold">
                <tr>
                  <th className="px-4 py-3">Class</th>
                  <th className="px-4 py-3">Object</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Blueprint or reference type</td>
                  <td className="px-4 py-2.5 text-stone-700">Runtime instance</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Defines fields and methods</td>
                  <td className="px-4 py-2.5 text-stone-700">Holds actual instance state</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Declared using <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">class</code></td>
                  <td className="px-4 py-2.5 text-stone-700">Commonly created using <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">new</code></td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Defines possible behavior</td>
                  <td className="px-4 py-2.5 text-stone-700">Performs behavior when methods are called</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Example: Student</td>
                  <td className="px-4 py-2.5 text-stone-700">Example: Alex's student object</td>
                </tr>
              </tbody>
            </table>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>3.4 Creating objects using new</span>
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
              <code>{`ClassName referenceName = new ClassName();`}</code>
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
              <code>{`Student student = new Student();`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            This statement involves several concepts.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-stone-900">ClassName</strong>
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            The reference type is <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">Student</code>.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-stone-900">referenceName</strong>
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            The local variable is <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">student</code>.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-stone-900">new</strong>
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Creates a new instance.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-stone-900">ClassName()</strong>
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Invokes the constructor.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            The resulting reference is assigned to the variable.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Conceptually:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Local variable
student
    |
    v
Student object
+----------------------+
| studentId            |
| name                 |
| age                  |
| course               |
+----------------------+`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            The exact physical layout and allocation strategy are JVM implementation details. The conceptual model is enough for understanding Java object references.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>3.5 Creating multiple objects</span>
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Student s1 = new Student();

Student s2 = new Student();

Student s3 = new Student();`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Each statement creates a separate object.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Objects of the same class share the class definition but generally maintain independent instance state.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>3.6 Instance variables and instance methods</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            A field declared inside a class, outside its methods and without <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">static</code>, is an instance variable.
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
              <code>{`class Employee {

    String name;

    double salary;

    void displaySalary() {

        System.out.println(salary);
    }
}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Each Employee object has its own <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">name</code> and <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">salary</code>.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>3.7 Object references</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Consider:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Student first = new Student();

Student second = first;`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            The two variables refer to the same object.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Changing its fields through either reference affects the same object.
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`first.name = "Alex";

System.out.println(second.name);`}</code>
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
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            This is important because assigning an object reference does not automatically create an independent object.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>3.8 Null references</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            A reference variable can contain <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">null</code>.
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Student student = null;`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            It does not refer to any object.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Calling a method through this reference causes a <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">NullPointerException</code>.
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`student.displayDetails();`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Objects should be created and references validated before accessing their members.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>3.9 The Object class</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            In Java, <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">Object</code> is the root superclass of the ordinary class hierarchy.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            If a class does not explicitly extend another class, it implicitly extends <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">Object</code>.
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`class Student {
}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Conceptually:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`class Student extends Object {
}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Important methods inherited from <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">Object</code> include:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-stone-700 text-sm sm:text-base my-3 leading-relaxed">
            <li><code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">toString()</code></li>
            <li><code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">equals(Object obj)</code></li>
            <li><code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">hashCode()</code></li>
            <li><code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">getClass()</code></li>
          </ul>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            These methods become useful when implementing custom object behavior and working with collections.
          </p>
          <hr className="border-[#e7e3da] my-6" />
        </div>
      </section>

      {/* SECTION 4: 4. Constructors */}
      <section id="section-4" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider font-mono">
            Part 2 · Object Initialization & Chaining
          </span>
          <span className="text-xs font-mono text-stone-500">Section 4</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          4. Constructors
        </h2>
        <div className="space-y-4 text-stone-700 leading-relaxed text-sm sm:text-base">
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>4.1 What is a constructor?</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            A constructor is a special declaration used during object creation to initialize a new instance.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            A constructor:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-stone-700 text-sm sm:text-base my-3 leading-relaxed">
            <li>Has the same name as its class.</li>
            <li>Does not declare a return type.</li>
            <li>Can accept parameters.</li>
            <li>Can be overloaded.</li>
            <li>Is invoked when an object is created through object creation expressions.</li>
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
              <code>{`class Student {

    String name;

    int age;

    Student() {

        name = "Unknown";

        age = 18;
    }

    void display() {

        System.out.println(name);

        System.out.println(age);
    }
}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Create the object:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Student student = new Student();

student.display();`}</code>
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
              <code>{`Unknown
18`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            The constructor initializes the object.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>4.2 Why are constructors required?</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Without proper initialization, an object may contain values that are not suitable for the application's requirements.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            For example:
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            A bank account should not be created with arbitrary or invalid initial state.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            A constructor can ensure that an object receives the information needed to establish a valid starting state.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Constructors help:
          </p>
          <ol className="list-decimal pl-5 space-y-2 text-stone-700 text-sm sm:text-base my-3 leading-relaxed">
            <li>Initialize fields.</li>
            <li>Enforce required information.</li>
            <li>Establish object invariants.</li>
            <li>Reduce repeated initialization code.</li>
            <li>Provide multiple ways to construct objects.</li>
          </ol>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>4.3 Default constructor</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            A default constructor is the no-argument constructor implicitly provided by the compiler when a class declares no constructors.
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
              <code>{`class Employee {

    String name;

    int age;
}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            The compiler provides an implicit no-argument constructor.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Therefore:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Employee employee = new Employee();`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            is valid.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Important distinction:
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            When a programmer declares any constructor, the compiler no longer supplies the implicit default constructor.
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
              <code>{`class Employee {

    Employee(String name) {

    }
}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Now:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Employee employee = new Employee();`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            is invalid unless a no-argument constructor is also explicitly declared.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>4.4 No-argument constructor</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            A programmer can explicitly declare a constructor without parameters.
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`class Employee {

    String name;

    int age;

    Employee() {

        name = "Unknown";

        age = 18;
    }
}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            This is called a no-argument constructor.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            It is not the same thing as the compiler-provided default constructor.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>4.5 Parameterized constructor</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            A parameterized constructor accepts values used to initialize fields.
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`class Student {

    String name;

    int age;

    Student(String studentName, int studentAge) {

        name = studentName;

        age = studentAge;
    }

    void display() {

        System.out.println(name);

        System.out.println(age);
    }
}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Object creation:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public class StudentDemo {

    public static void main(String[] args) {

        Student s1 = new Student("Alex", 21);

        Student s2 = new Student("Sam", 22);

        s1.display();

        s2.display();
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
21
Sam
22`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Each object receives different initialization values.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>4.6 Constructor overloading</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Constructor overloading means defining multiple constructors with different parameter lists.
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
              <code>{`class Student {

    String name;

    int age;

    String course;

    Student() {

        name = "Unknown";

        age = 18;

        course = "Not Assigned";
    }

    Student(String name) {

        this.name = name;

        age = 18;

        course = "Not Assigned";
    }

    Student(String name, int age) {

        this.name = name;

        this.age = age;

        course = "Not Assigned";
    }

    Student(String name, int age, String course) {

        this.name = name;

        this.age = age;

        this.course = course;
    }
}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            All of the following are valid:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Student s1 = new Student();

Student s2 = new Student("Alex");

Student s3 = new Student("Sam", 22);

Student s4 = new Student("John", 21, "Java");`}</code>
            </pre>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>4.7 Constructor chaining</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Constructor chaining allows one constructor to invoke another constructor.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Java uses:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-stone-700 text-sm sm:text-base my-3 leading-relaxed">
            <li><code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">this()</code> to invoke another constructor in the same class.</li>
            <li><code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">super()</code> to invoke a constructor in the superclass.</li>
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
              <code>{`class Employee {

    String name;

    int age;

    double salary;

    Employee() {

        this("Unknown", 18, 0);
    }

    Employee(String name, int age) {

        this(name, age, 0);
    }

    Employee(String name, int age, double salary) {

        this.name = name;

        this.age = age;

        this.salary = salary;
    }
}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            The first constructor delegates initialization to the third constructor.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            The second constructor also delegates to the third constructor.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            This reduces duplicated initialization logic.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>4.8 Constructor versus method</span>
          </h3>
          <div className="overflow-x-auto my-4 rounded-xl border border-[#e7e3da] shadow-2xs">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-stone-900 border-b border-[#e7e3da] font-semibold">
                <tr>
                  <th className="px-4 py-3">Constructor</th>
                  <th className="px-4 py-3">Method</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Initializes a new instance</td>
                  <td className="px-4 py-2.5 text-stone-700">Performs an operation</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Has the class name</td>
                  <td className="px-4 py-2.5 text-stone-700">Has a programmer-defined method name</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Declares no return type</td>
                  <td className="px-4 py-2.5 text-stone-700">Has a return type or <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">void</code></td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Invoked during object construction</td>
                  <td className="px-4 py-2.5 text-stone-700">Invoked through a method call</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Cannot be overridden</td>
                  <td className="px-4 py-2.5 text-stone-700">Can be overridden where Java permits</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Can be overloaded</td>
                  <td className="px-4 py-2.5 text-stone-700">Can be overloaded</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Constructors are not inherited by subclasses.
          </p>
          <hr className="border-[#e7e3da] my-6" />
        </div>
      </section>

      {/* SECTION 5: 5. The this Keyword */}
      <section id="section-5" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider font-mono">
            Part 3 · Instance References
          </span>
          <span className="text-xs font-mono text-stone-500">Section 5</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          5. The this Keyword
        </h2>
        <div className="space-y-4 text-stone-700 leading-relaxed text-sm sm:text-base">
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>5.1 What is this?</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            The <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">this</code> keyword refers to the current object instance.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            It is commonly used inside instance methods and constructors.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Its most common applications include:
          </p>
          <ol className="list-decimal pl-5 space-y-2 text-stone-700 text-sm sm:text-base my-3 leading-relaxed">
            <li>Distinguishing instance fields from local variables.</li>
            <li>Calling another constructor in the same class.</li>
            <li>Passing the current object as an argument.</li>
            <li>Returning the current object.</li>
            <li>Accessing current instance members.</li>
          </ol>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>5.2 Using this to distinguish instance variables</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Consider:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`class Student {

    String name;

    int age;

    Student(String name, int age) {

        this.name = name;

        this.age = age;
    }
}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Here:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-stone-700 text-sm sm:text-base my-3 leading-relaxed">
            <li><code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">name</code> represents the constructor parameter.</li>
            <li><code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">this.name</code> represents the current object's instance field.</li>
            <li><code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">age</code> represents the constructor parameter.</li>
            <li><code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">this.age</code> represents the current object's instance field.</li>
          </ul>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Without <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">this</code>, the assignment could accidentally refer to the parameter itself.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>5.3 Using this() for constructor chaining</span>
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`class Product {

    String name;

    double price;

    Product() {

        this("Unknown", 0);
    }

    Product(String name, double price) {

        this.name = name;

        this.price = price;
    }
}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            The no-argument constructor delegates to the parameterized constructor.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Important rule:
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            A constructor invocation using <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">this()</code> must be the first constructor statement in Java 17.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            You cannot use both <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">this()</code> and <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">super()</code> as separate constructor invocations within the same constructor.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>5.4 Passing this as an argument</span>
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`class Student {

    void display() {

        System.out.println("Student object");
    }

    void show() {

        printObject(this);
    }

    void printObject(Student student) {

        student.display();
    }
}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            The current object is passed to another method.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>5.5 Returning this</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Returning <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">this</code> is sometimes used in fluent APIs and method chaining.
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`class Builder {

    private String name;

    Builder setName(String name) {

        this.name = name;

        return this;
    }

    void display() {

        System.out.println(name);
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
              <code>{`Builder builder = new Builder();

builder.setName("Java").display();`}</code>
            </pre>
          </div>
          <hr className="border-[#e7e3da] my-6" />
        </div>
      </section>

      {/* SECTION 6: 6. The super Keyword */}
      <section id="section-6" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider font-mono">
            Part 3 · Superclass Invocations
          </span>
          <span className="text-xs font-mono text-stone-500">Section 6</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          6. The super Keyword
        </h2>
        <div className="space-y-4 text-stone-700 leading-relaxed text-sm sm:text-base">
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>6.1 What is super?</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            The <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">super</code> keyword refers to the superclass portion of the current object.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            It allows a subclass to:
          </p>
          <ol className="list-decimal pl-5 space-y-2 text-stone-700 text-sm sm:text-base my-3 leading-relaxed">
            <li>Invoke a superclass constructor.</li>
            <li>Access an accessible superclass field hidden by a subclass field.</li>
            <li>Invoke an overridden superclass method.</li>
          </ol>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>6.2 Calling a superclass constructor</span>
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`class Person {

    String name;

    Person(String name) {

        this.name = name;
    }
}

class Student extends Person {

    int studentId;

    Student(String name, int studentId) {

        super(name);

        this.studentId = studentId;
    }
}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Here:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`super(name);`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            invokes the constructor of <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">Person</code>.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            This is useful when the parent class is responsible for initializing common data.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>6.3 Calling a superclass method</span>
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`class Animal {

    void sound() {

        System.out.println("Animal makes a sound");
    }
}

class Dog extends Animal {

    @Override
    void sound() {

        super.sound();

        System.out.println("Dog barks");
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
              <code>{`Animal makes a sound
Dog barks`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            The child class adds its behavior while reusing the parent implementation.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>6.4 Accessing a hidden superclass field</span>
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`class Parent {

    int number = 100;
}

class Child extends Parent {

    int number = 200;

    void display() {

        System.out.println(number);

        System.out.println(super.number);
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
              <code>{`200
100`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            The first statement accesses the child field.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            The second accesses the accessible parent field.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>6.5 this versus super</span>
          </h3>
          <div className="overflow-x-auto my-4 rounded-xl border border-[#e7e3da] shadow-2xs">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-stone-900 border-b border-[#e7e3da] font-semibold">
                <tr>
                  <th className="px-4 py-3">this</th>
                  <th className="px-4 py-3">super</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Refers to the current object</td>
                  <td className="px-4 py-2.5 text-stone-700">Refers to the superclass portion of the current object</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Accesses current class members</td>
                  <td className="px-4 py-2.5 text-stone-700">Accesses accessible superclass members</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Calls another constructor using <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">this()</code></td>
                  <td className="px-4 py-2.5 text-stone-700">Calls a superclass constructor using <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">super()</code></td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Refers to current instance</td>
                  <td className="px-4 py-2.5 text-stone-700">Used in subclass context</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Cannot be used in a static context</td>
                  <td className="px-4 py-2.5 text-stone-700">Cannot be used in a static context</td>
                </tr>
              </tbody>
            </table>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>6.6 Constructor execution order</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            When an object of a subclass is created, its superclass constructor chain runs before the subclass constructor completes.
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
              <code>{`class Parent {

    Parent() {

        System.out.println("Parent constructor");
    }
}

class Child extends Parent {

    Child() {

        System.out.println("Child constructor");
    }
}

public class ConstructorOrder {

    public static void main(String[] args) {

        new Child();
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
              <code>{`Parent constructor
Child constructor`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Conceptually:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`new Child()
     |
     v
Parent constructor
     |
     v
Child constructor
     |
     v
Child object initialized`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            If no explicit constructor invocation is written, Java inserts an implicit no-argument superclass constructor invocation when permitted. If the superclass does not have an accessible no-argument constructor, the subclass constructor must explicitly invoke an appropriate superclass constructor.
          </p>
          <hr className="border-[#e7e3da] my-6" />
        </div>
      </section>

      {/* SECTION 7: 7. Encapsulation */}
      <section id="section-7" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider font-mono">
            Part 4 · Data Hiding & Invariants
          </span>
          <span className="text-xs font-mono text-stone-500">Section 7</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          7. Encapsulation
        </h2>
        <div className="space-y-4 text-stone-700 leading-relaxed text-sm sm:text-base">
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>7.1 What is encapsulation?</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Encapsulation is the OOP principle of combining data and the methods that operate on it while controlling access to the internal state of an object.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            In Java, encapsulation is commonly implemented through:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-stone-700 text-sm sm:text-base my-3 leading-relaxed">
            <li>Classes.</li>
            <li>Private fields.</li>
            <li>Public methods.</li>
            <li>Controlled validation.</li>
            <li>Appropriate access modifiers.</li>
          </ul>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            The goal is to ensure that objects maintain valid internal state.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>7.2 Problem without encapsulation</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Consider:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`class BankAccount {

    public double balance;
}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Any external class can directly assign an arbitrary balance.
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`BankAccount account = new BankAccount();

account.balance = -100000;`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            This is dangerous because the program does not enforce any business rules.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>7.3 Encapsulation using private fields</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Improved implementation:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`class BankAccount {

    private double balance;

    public void deposit(double amount) {

        if (amount > 0) {

            balance += amount;
        }
    }

    public double getBalance() {

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
              <code>{`public class BankDemo {

    public static void main(String[] args) {

        BankAccount account = new BankAccount();

        account.deposit(5000);

        account.deposit(1000);

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
              <code>{`6000.0`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            The balance is accessed through a public method rather than directly.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>7.4 Getters and setters</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            A getter retrieves the value of a private field.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            A setter updates it using a controlled method.
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
              <code>{`class Employee {

    private String name;

    private double salary;

    public String getName() {

        return name;
    }

    public void setName(String name) {

        if (name != null && !name.isBlank()) {

            this.name = name;
        }
    }

    public double getSalary() {

        return salary;
    }

    public void setSalary(double salary) {

        if (salary >= 0) {

            this.salary = salary;
        }
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
              <code>{`Employee employee = new Employee();

employee.setName("Alex");

employee.setSalary(50000);

System.out.println(employee.getName());

System.out.println(employee.getSalary());`}</code>
            </pre>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>7.5 Why should fields be private?</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Private fields provide several advantages:
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-stone-900">Controlled modification:</strong> External classes cannot directly change internal fields.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-stone-900">Validation:</strong> Methods can reject invalid values.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-stone-900">Implementation independence:</strong> Internal storage can change without necessarily changing the external interface.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-stone-900">Improved maintainability:</strong> State-changing rules are centralized.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-stone-900">Data integrity:</strong> Objects can protect important invariants.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>7.6 Encapsulation versus data hiding</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            These terms are related but not identical.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-stone-900">Data hiding</strong> emphasizes restricting direct access to implementation details.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-stone-900">Encapsulation</strong> combines state and related behavior within a defined unit while controlling interaction with that unit.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Private fields are a common data-hiding mechanism used to implement encapsulation.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>7.7 Encapsulation with immutable objects</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Some classes are designed so their state cannot change after construction.
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
              <code>{`final class EmployeeRecord {

    private final String employeeName;

    private final int employeeId;

    EmployeeRecord(String employeeName, int employeeId) {

        this.employeeName = employeeName;

        this.employeeId = employeeId;
    }

    public String getEmployeeName() {

        return employeeName;
    }

    public int getEmployeeId() {

        return employeeId;
    }
}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            The fields are private and final, and no setters are provided.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            This is a simple immutable-object design.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            If a class contains mutable objects, immutability requires additional care, such as defensive copying.
          </p>
          <hr className="border-[#e7e3da] my-6" />
        </div>
      </section>

      {/* SECTION 8: 8. Inheritance */}
      <section id="section-8" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider font-mono">
            Part 5 · Class Hierarchies & IS-A
          </span>
          <span className="text-xs font-mono text-stone-500">Section 8</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          8. Inheritance
        </h2>
        <div className="space-y-4 text-stone-700 leading-relaxed text-sm sm:text-base">
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>8.1 What is inheritance?</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Inheritance is the mechanism through which a subclass derives from a superclass and receives accessible inherited behavior and state.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Inheritance represents an IS-A relationship.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Examples:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-stone-700 text-sm sm:text-base my-3 leading-relaxed">
            <li>Student is a Person.</li>
            <li>Dog is an Animal.</li>
            <li>Car is a Vehicle.</li>
            <li>SavingsAccount is a BankAccount.</li>
            <li>Manager is an Employee.</li>
          </ul>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Inheritance helps reduce duplication and establish meaningful type hierarchies.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>8.2 Inheritance syntax</span>
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`class Parent {

    // Fields and methods
}

class Child extends Parent {

    // Additional members
}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            The keyword <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">extends</code> establishes class inheritance.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>8.3 Basic inheritance example</span>
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`class Animal {

    void eat() {

        System.out.println("Animal is eating");
    }
}

class Dog extends Animal {

    void bark() {

        System.out.println("Dog is barking");
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
              <code>{`public class InheritanceExample {

    public static void main(String[] args) {

        Dog dog = new Dog();

        dog.eat();

        dog.bark();
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
              <code>{`Animal is eating
Dog is barking`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            The <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">Dog</code> object can access the inherited public or otherwise accessible <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">eat()</code> method and its own <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">bark()</code> method.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>8.4 Types of inheritance</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Java class inheritance is commonly explained using several structural patterns.
          </p>
          <h4 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span>A. Single inheritance</span>
          </h4>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            A class inherits directly from one parent class.
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Animal
   |
  Dog`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Java:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`class Animal {
}

class Dog extends Animal {
}`}</code>
            </pre>
          </div>
          <h4 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span>B. Multilevel inheritance</span>
          </h4>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            A class inherits from a class that itself inherits from another class.
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Animal
   |
  Dog
   |
Puppy`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Java:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`class Animal {
}

class Dog extends Animal {
}

class Puppy extends Dog {
}`}</code>
            </pre>
          </div>
          <h4 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span>C. Hierarchical inheritance</span>
          </h4>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Several subclasses inherit from the same superclass.
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`       Animal
       /    \\
     Dog    Cat`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Java:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`class Animal {
}

class Dog extends Animal {
}

class Cat extends Animal {
}`}</code>
            </pre>
          </div>
          <h4 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span>D. Multiple inheritance</span>
          </h4>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Multiple inheritance means inheriting implementation or state from more than one parent class.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Java does not support extending multiple classes.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            This is invalid:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`class C extends A, B {
}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            However, Java supports implementing multiple interfaces.
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`interface Printable {

    void print();
}

interface Scannable {

    void scan();
}

class Machine implements Printable, Scannable {

    public void print() {

        System.out.println("Printing");
    }

    public void scan() {

        System.out.println("Scanning");
    }
}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            This gives Java a way to support multiple behavioral contracts without allowing a class to inherit from multiple concrete classes.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>8.5 Java inheritance hierarchy</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Consider:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`           Person
              |
       +------+------+
       |             |
     Student      Employee
                       |
                   Instructor`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Common fields and methods can be defined in <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">Person</code> and <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">Employee</code>.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            More specialized classes can introduce their own information and behavior.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>8.6 Inheritance with constructors</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Constructors are not inherited.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            However, subclass construction must initialize its superclass portion.
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
              <code>{`class Person {

    String name;

    Person(String name) {

        this.name = name;
    }
}

class Student extends Person {

    int rollNumber;

    Student(String name, int rollNumber) {

        super(name);

        this.rollNumber = rollNumber;
    }

    void display() {

        System.out.println(name);

        System.out.println(rollNumber);
    }
}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            The <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">super(name)</code> statement initializes the parent-class state.
          </p>
          <hr className="border-[#e7e3da] my-6" />
        </div>
      </section>

      {/* SECTION 9: 9. Method Overriding */}
      <section id="section-9" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider font-mono">
            Part 5 · Behavioral Specialization
          </span>
          <span className="text-xs font-mono text-stone-500">Section 9</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          9. Method Overriding
        </h2>
        <div className="space-y-4 text-stone-700 leading-relaxed text-sm sm:text-base">
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>9.1 What is method overriding?</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Method overriding occurs when a subclass provides a new implementation of an inheritable instance method defined by its superclass or an inherited interface.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            The overridden method must follow Java's method-signature and return-type rules.
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
              <code>{`class Animal {

    void sound() {

        System.out.println("Animal makes a sound");
    }
}

class Dog extends Animal {

    @Override
    void sound() {

        System.out.println("Dog barks");
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
              <code>{`public class OverridingExample {

    public static void main(String[] args) {

        Dog dog = new Dog();

        dog.sound();
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
              <code>{`Dog barks`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            The subclass provides its specialized implementation.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>9.2 The @Override annotation</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">@Override</code> indicates that a method is intended to override an inherited method.
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
              <code>{`@Override
void sound() {

    System.out.println("Dog barks");
}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            The compiler checks that the method actually satisfies the overriding rules.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            It helps detect accidental mistakes in names and signatures.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>9.3 Rules of method overriding</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Important rules include:
          </p>
          <ol className="list-decimal pl-5 space-y-2 text-stone-700 text-sm sm:text-base my-3 leading-relaxed">
            <li>An overriding method must have a compatible method signature.</li>
            <li>The return type must be the same or covariant where reference types permit it.</li>
            <li>The access level cannot be more restrictive than the overridden method.</li>
            <li>Private methods are not overridden.</li>
            <li>Static methods are hidden rather than overridden.</li>
            <li>Final methods cannot be overridden.</li>
            <li>Checked exceptions must follow the restrictions imposed by the overridden method.</li>
            <li>The method being overridden must be inherited and accessible under Java's rules.</li>
          </ol>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>9.4 Overriding versus overloading</span>
          </h3>
          <div className="overflow-x-auto my-4 rounded-xl border border-[#e7e3da] shadow-2xs">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-stone-900 border-b border-[#e7e3da] font-semibold">
                <tr>
                  <th className="px-4 py-3">Overriding</th>
                  <th className="px-4 py-3">Overloading</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Related to inheritance or inherited interface behavior</td>
                  <td className="px-4 py-2.5 text-stone-700">Can occur within one class or across an inheritance hierarchy</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Replaces an inherited instance-method implementation</td>
                  <td className="px-4 py-2.5 text-stone-700">Defines multiple methods with different parameter lists</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Same compatible signature</td>
                  <td className="px-4 py-2.5 text-stone-700">Different parameter lists</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Runtime dispatch selects overridden implementation</td>
                  <td className="px-4 py-2.5 text-stone-700">Compiler resolves the overload</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Supports runtime polymorphism</td>
                  <td className="px-4 py-2.5 text-stone-700">Commonly described as compile-time polymorphism</td>
                </tr>
              </tbody>
            </table>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>9.5 Static method hiding</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Static methods are associated with classes, not individual instances.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            If a subclass declares a static method with a matching signature, it hides the superclass method rather than overriding it.
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
              <code>{`class Parent {

    static void display() {

        System.out.println("Parent");
    }
}

class Child extends Parent {

    static void display() {

        System.out.println("Child");
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
              <code>{`Parent.display();

Child.display();`}</code>
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
              <code>{`Parent
Child`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            This behavior differs from runtime overriding of instance methods.
          </p>
          <hr className="border-[#e7e3da] my-6" />
        </div>
      </section>

      {/* SECTION 10: 10. Polymorphism */}
      <section id="section-10" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider font-mono">
            Part 6 · Dynamic Dispatch & Polymorphism
          </span>
          <span className="text-xs font-mono text-stone-500">Section 10</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          10. Polymorphism
        </h2>
        <div className="space-y-4 text-stone-700 leading-relaxed text-sm sm:text-base">
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>10.1 What is polymorphism?</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Polymorphism means many forms.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            In Java, a reference of a common type can refer to objects of different concrete classes, and overridden instance methods can execute according to the actual object type at runtime.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            This allows application code to work with general abstractions instead of depending on every concrete implementation.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>10.2 Compile-time polymorphism</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Method overloading is commonly described as compile-time polymorphism because overload resolution occurs at compile time.
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
              <code>{`class Calculator {

    int add(int a, int b) {

        return a + b;
    }

    double add(double a, double b) {

        return a + b;
    }
}`}</code>
            </pre>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>10.3 Runtime polymorphism</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Runtime polymorphism occurs through overridden instance methods.
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
              <code>{`class Animal {

    void sound() {

        System.out.println("Animal sound");
    }
}

class Dog extends Animal {

    @Override
    void sound() {

        System.out.println("Dog barks");
    }
}

class Cat extends Animal {

    @Override
    void sound() {

        System.out.println("Cat meows");
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
              <code>{`public class RuntimePolymorphism {

    public static void main(String[] args) {

        Animal animal;

        animal = new Dog();

        animal.sound();

        animal = new Cat();

        animal.sound();
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
              <code>{`Dog barks
Cat meows`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            The declared reference type is <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">Animal</code>.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            The actual objects are <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">Dog</code> and <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">Cat</code>.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Java selects the overridden instance-method implementation based on the runtime class of the object.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>10.4 Dynamic method dispatch</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Dynamic method dispatch is the mechanism through which Java determines which overridden instance method to execute at runtime.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Conceptually:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`         Animal reference
                |
         +------+------+
         |             |
         v             v
        Dog           Cat
         |             |
         v             v
     Dog.sound()   Cat.sound()`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            The same method call can result in different implementations.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>10.5 Upcasting</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Upcasting means treating a subclass object as an instance of its superclass type.
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
              <code>{`Dog dog = new Dog();

Animal animal = dog;`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            This is valid because every Dog is an Animal.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            The reference type controls which members are accessible through the reference, while overridden instance methods can still dispatch according to the actual object.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>10.6 Downcasting</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Downcasting means converting a superclass reference back to a more specific subclass reference.
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
              <code>{`Animal animal = new Dog();

Dog dog = (Dog) animal;

dog.sound();`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            This is valid because the object actually is a Dog.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            But:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Animal animal = new Cat();

Dog dog = (Dog) animal;`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            causes a <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">ClassCastException</code> at runtime.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Use <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">instanceof</code> when a safe type check is needed.
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`if (animal instanceof Dog) {

    Dog dog = (Dog) animal;

    dog.sound();
}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Java 17 also supports pattern matching for <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">instanceof</code>:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`if (animal instanceof Dog dog) {

    dog.sound();
}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            This combines the type check and local variable declaration.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>10.7 Benefits of polymorphism</span>
          </h3>
          <ul className="list-disc pl-5 space-y-2 text-stone-700 text-sm sm:text-base my-3 leading-relaxed">
            <li>Flexible application design.</li>
            <li>Common APIs for multiple implementations.</li>
            <li>Easier extension.</li>
            <li>Less dependency on concrete classes.</li>
            <li>Better support for reusable components.</li>
            <li>Simplified application logic.</li>
          </ul>
          <hr className="border-[#e7e3da] my-6" />
        </div>
      </section>

      {/* SECTION 11: 11. Abstraction */}
      <section id="section-11" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider font-mono">
            Part 7 · Essential Operations
          </span>
          <span className="text-xs font-mono text-stone-500">Section 11</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          11. Abstraction
        </h2>
        <div className="space-y-4 text-stone-700 leading-relaxed text-sm sm:text-base">
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>11.1 What is abstraction?</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Abstraction is the process of exposing essential operations while hiding unnecessary implementation details.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            For example, a car driver uses the steering wheel, accelerator, and brake without needing to understand every internal engine operation.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            In Java, abstract classes and interfaces provide important abstraction mechanisms.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>11.2 Abstraction versus encapsulation</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            These concepts are related but have different goals.
          </p>
          <div className="overflow-x-auto my-4 rounded-xl border border-[#e7e3da] shadow-2xs">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-stone-900 border-b border-[#e7e3da] font-semibold">
                <tr>
                  <th className="px-4 py-3">Abstraction</th>
                  <th className="px-4 py-3">Encapsulation</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Focuses on what an object exposes</td>
                  <td className="px-4 py-2.5 text-stone-700">Controls how internal state and implementation are accessed</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Hides unnecessary implementation complexity</td>
                  <td className="px-4 py-2.5 text-stone-700">Protects internal data</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Defines essential operations</td>
                  <td className="px-4 py-2.5 text-stone-700">Controls access to state and behavior</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Implemented using interfaces and abstract classes</td>
                  <td className="px-4 py-2.5 text-stone-700">Commonly implemented using private fields and controlled methods</td>
                </tr>
              </tbody>
            </table>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>11.3 Real-world abstraction example</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Imagine a payment application.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            The application needs a payment operation.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            It should not need to understand every internal detail of each payment provider.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            A common abstraction can define:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`interface PaymentMethod {

    void pay(double amount);
}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Each implementation handles its own payment behavior.
          </p>
          <hr className="border-[#e7e3da] my-6" />
        </div>
      </section>

      {/* SECTION 12: 12. Abstract Classes */}
      <section id="section-12" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider font-mono">
            Part 7 · Incomplete Base Classes
          </span>
          <span className="text-xs font-mono text-stone-500">Section 12</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          12. Abstract Classes
        </h2>
        <div className="space-y-4 text-stone-700 leading-relaxed text-sm sm:text-base">
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>12.1 What is an abstract class?</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            An abstract class is a class declared using the <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">abstract</code> keyword.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            It is designed to serve as a base for other classes.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            An abstract class cannot be instantiated directly.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            It can contain:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-stone-700 text-sm sm:text-base my-3 leading-relaxed">
            <li>Instance fields.</li>
            <li>Constructors.</li>
            <li>Concrete methods.</li>
            <li>Abstract methods.</li>
            <li>Static members.</li>
            <li>Final methods.</li>
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
              <code>{`abstract class Animal {

    abstract void sound();

    void sleep() {

        System.out.println("Animal is sleeping");
    }
}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            The method <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">sound()</code> is abstract because it declares no implementation.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            The method <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">sleep()</code> is concrete because it contains a body.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>12.2 Implementing an abstract class</span>
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`class Dog extends Animal {

    @Override
    void sound() {

        System.out.println("Dog barks");
    }
}

class Cat extends Animal {

    @Override
    void sound() {

        System.out.println("Cat meows");
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
              <code>{`public class AbstractExample {

    public static void main(String[] args) {

        Animal dog = new Dog();

        Animal cat = new Cat();

        dog.sound();

        dog.sleep();

        cat.sound();
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
              <code>{`Dog barks
Animal is sleeping
Cat meows`}</code>
            </pre>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>12.3 Rules of abstract classes</span>
          </h3>
          <ol className="list-decimal pl-5 space-y-2 text-stone-700 text-sm sm:text-base my-3 leading-relaxed">
            <li>An abstract class cannot be instantiated directly.</li>
            <li>It can contain abstract and concrete methods.</li>
            <li>It can contain constructors.</li>
            <li>It can contain instance fields.</li>
            <li>It can contain static methods.</li>
            <li>It can extend another class.</li>
            <li>A concrete subclass must implement inherited abstract methods.</li>
            <li>An abstract subclass can leave abstract methods unimplemented.</li>
          </ol>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>12.4 Abstract methods</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            An abstract method declares behavior without implementing it.
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`abstract double calculateArea();`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            A subclass can provide the implementation:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`class Circle extends Shape {

    double radius;

    Circle(double radius) {

        this.radius = radius;
    }

    @Override
    double calculateArea() {

        return Math.PI * radius * radius;
    }
}`}</code>
            </pre>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>12.5 Abstract class with constructor</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Abstract classes can have constructors.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            These constructors are invoked when concrete subclass objects are created.
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`abstract class Employee {

    String name;

    Employee(String name) {

        this.name = name;
    }

    abstract double calculateSalary();
}

class FullTimeEmployee extends Employee {

    double monthlySalary;

    FullTimeEmployee(String name, double monthlySalary) {

        super(name);

        this.monthlySalary = monthlySalary;
    }

    @Override
    double calculateSalary() {

        return monthlySalary;
    }
}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            The abstract class initializes common employee information.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            The subclass provides its salary calculation.
          </p>
          <hr className="border-[#e7e3da] my-6" />
        </div>
      </section>

      {/* SECTION 13: 13. Interfaces */}
      <section id="section-13" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider font-mono">
            Part 8 · Contracts & Multiple Realization
          </span>
          <span className="text-xs font-mono text-stone-500">Section 13</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          13. Interfaces
        </h2>
        <div className="space-y-4 text-stone-700 leading-relaxed text-sm sm:text-base">
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>13.1 What is an interface?</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            An interface defines a contract that implementing classes agree to provide.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Interfaces are useful for expressing capabilities and common behavior across otherwise unrelated classes.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            For example:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-stone-700 text-sm sm:text-base my-3 leading-relaxed">
            <li>A printer can print.</li>
            <li>A scanner can scan.</li>
            <li>A payment method can process a payment.</li>
            <li>A notification service can send a message.</li>
            <li>A sortable object can define a comparison order.</li>
          </ul>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>13.2 Interface declaration</span>
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
              <code>{`interface InterfaceName {

    // Method declarations
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
              <code>{`interface Printable {

    void print();
}`}</code>
            </pre>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>13.3 Implementing an interface</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            A class uses <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">implements</code> to implement an interface.
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`class Document implements Printable {

    @Override
    public void print() {

        System.out.println("Printing document");
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
              <code>{`public class InterfaceExample {

    public static void main(String[] args) {

        Printable printable = new Document();

        printable.print();
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
              <code>{`Printing document`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            The implementation method must be public because ordinary interface abstract methods are public.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>13.4 Interface characteristics</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Interfaces can contain:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-stone-700 text-sm sm:text-base my-3 leading-relaxed">
            <li>Abstract methods.</li>
            <li>Default methods.</li>
            <li>Static methods.</li>
            <li>Private methods.</li>
            <li>Constants.</li>
          </ul>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Fields declared in an interface are implicitly <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">public static final</code>.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Ordinary abstract methods are implicitly <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">public abstract</code>.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>13.5 Interface constants</span>
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`interface ApplicationConfig {

    int MAX_USERS = 100;

    String APPLICATION_NAME = "University Portal";
}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            These fields are implicitly:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public static final`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            They cannot be reassigned.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>13.6 Default methods</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            A default method contains an implementation that implementing classes inherit unless they override it.
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`interface Vehicle {

    void start();

    default void stop() {

        System.out.println("Vehicle stopped");
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
              <code>{`class Car implements Vehicle {

    @Override
    public void start() {

        System.out.println("Car started");
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
              <code>{`Car car = new Car();

car.start();

car.stop();`}</code>
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
              <code>{`Car started
Vehicle stopped`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Default methods were introduced to allow interfaces to evolve by adding behavior without requiring every existing implementation to immediately provide a new implementation.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>13.7 Static methods in interfaces</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Interfaces can define static methods.
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`interface Calculator {

    static int add(int a, int b) {

        return a + b;
    }
}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Call it using the interface name:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`System.out.println(Calculator.add(10, 20));`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Static interface methods are not inherited as ordinary instance methods by implementing classes.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>13.8 Private methods in interfaces</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Java 9 and later support private interface methods.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            They can be used to share implementation within default or static methods.
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`interface Notification {

    default void send() {

        validate();

        System.out.println("Notification sent");
    }

    private void validate() {

        System.out.println("Validating notification");
    }
}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Private interface methods are not inherited as public API methods by implementing classes.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>13.9 Multiple interface implementation</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            One of the major advantages of Java interfaces is that a class can implement multiple interfaces.
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
              <code>{`interface Printable {

    void print();
}

interface Scannable {

    void scan();
}

interface Faxable {

    void fax();
}

class OfficeMachine
        implements Printable, Scannable, Faxable {

    @Override
    public void print() {

        System.out.println("Printing");
    }

    @Override
    public void scan() {

        System.out.println("Scanning");
    }

    @Override
    public void fax() {

        System.out.println("Sending fax");
    }
}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            This allows one class to provide multiple capabilities.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>13.10 Conflicting default methods</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Suppose two interfaces define the same default method.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Java requires the implementing class to resolve the ambiguity.
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`interface A {

    default void display() {

        System.out.println("Interface A");
    }
}

interface B {

    default void display() {

        System.out.println("Interface B");
    }
}

class C implements A, B {

    @Override
    public void display() {

        A.super.display();

        B.super.display();
    }
}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            This explicitly selects which inherited default implementations to invoke.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>13.11 Abstract class versus interface</span>
          </h3>
          <div className="overflow-x-auto my-4 rounded-xl border border-[#e7e3da] shadow-2xs">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-stone-900 border-b border-[#e7e3da] font-semibold">
                <tr>
                  <th className="px-4 py-3">Abstract class</th>
                  <th className="px-4 py-3">Interface</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Declared using <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">abstract class</code></td>
                  <td className="px-4 py-2.5 text-stone-700">Declared using <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">interface</code></td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Can contain instance fields</td>
                  <td className="px-4 py-2.5 text-stone-700">Fields are implicitly constants</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Can contain constructors</td>
                  <td className="px-4 py-2.5 text-stone-700">Cannot declare constructors</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Can maintain instance state</td>
                  <td className="px-4 py-2.5 text-stone-700">Does not provide ordinary per-object instance fields</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Can contain concrete methods</td>
                  <td className="px-4 py-2.5 text-stone-700">Can contain default, static, private, and abstract methods</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">A class extends one class</td>
                  <td className="px-4 py-2.5 text-stone-700">A class can implement multiple interfaces</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Useful for shared state and implementation</td>
                  <td className="px-4 py-2.5 text-stone-700">Useful for contracts and capabilities</td>
                </tr>
              </tbody>
            </table>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>13.12 When should you use an abstract class?</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Use an abstract class when:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-stone-700 text-sm sm:text-base my-3 leading-relaxed">
            <li>Related subclasses share common state.</li>
            <li>They need common constructor logic.</li>
            <li>They share implementation.</li>
            <li>They form a meaningful inheritance hierarchy.</li>
          </ul>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Example:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Employee
   |
   +-- FullTimeEmployee
   |
   +-- PartTimeEmployee`}</code>
            </pre>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>13.13 When should you use an interface?</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Use an interface when:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-stone-700 text-sm sm:text-base my-3 leading-relaxed">
            <li>Different classes need a common capability.</li>
            <li>A shared contract is required.</li>
            <li>Implementation details should remain independent.</li>
            <li>A class needs to support several unrelated roles.</li>
          </ul>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Example:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Printable
    |
    +-- Document
    +-- Image
    +-- Report`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            These types do not necessarily need to share a class hierarchy.
          </p>
          <hr className="border-[#e7e3da] my-6" />
        </div>
      </section>

      {/* SECTION 14: 14. Static Members */}
      <section id="section-14" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider font-mono">
            Part 9 · Class-Level State & Methods
          </span>
          <span className="text-xs font-mono text-stone-500">Section 14</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          14. Static Members
        </h2>
        <div className="space-y-4 text-stone-700 leading-relaxed text-sm sm:text-base">
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>14.1 What is static?</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            The <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">static</code> keyword declares a member that belongs to the class rather than an individual object.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Static members are shared or accessed at the class level.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Java supports:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-stone-700 text-sm sm:text-base my-3 leading-relaxed">
            <li>Static variables.</li>
            <li>Static methods.</li>
            <li>Static initialization blocks.</li>
            <li>Static nested classes.</li>
          </ul>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>14.2 Static variables</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Consider:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`class Student {

    int rollNumber;

    static String university = "Global University";
}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Every Student object has its own <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">rollNumber</code>.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            All Student objects share the same class-level <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">university</code> field.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Usage:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public class StaticExample {

    public static void main(String[] args) {

        Student s1 = new Student();

        Student s2 = new Student();

        s1.rollNumber = 101;

        s2.rollNumber = 102;

        System.out.println(Student.university);
    }
}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Accessing a static member through the class name is generally clearer than accessing it through an object reference.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>14.3 Static methods</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Static methods belong to the class.
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
              <code>{`class Calculator {

    static int add(int a, int b) {

        return a + b;
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
              <code>{`int result = Calculator.add(10, 20);`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            No Calculator object is required.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>14.4 Static method restrictions</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            A static method cannot directly access instance members because it does not operate on a particular object instance.
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
              <code>{`class Example {

    int number = 100;

    static void display() {

        // System.out.println(number);
    }
}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            A static method must access instance data through an object reference.
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
              <code>{`class Example {

    int number = 100;

    static void display() {

        Example example = new Example();

        System.out.println(example.number);
    }
}`}</code>
            </pre>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>14.5 Static initialization block</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Static initialization blocks execute when the class is initialized.
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
              <code>{`class Application {

    static int value;

    static {

        value = 100;

        System.out.println("Static initialization");
    }
}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            The static field is initialized through the static block.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Such blocks are useful for certain class-level initialization tasks, although ordinary static field initialization is often simpler.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>14.6 Static versus instance members</span>
          </h3>
          <div className="overflow-x-auto my-4 rounded-xl border border-[#e7e3da] shadow-2xs">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-stone-900 border-b border-[#e7e3da] font-semibold">
                <tr>
                  <th className="px-4 py-3">Static members</th>
                  <th className="px-4 py-3">Instance members</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Belong to a class</td>
                  <td className="px-4 py-2.5 text-stone-700">Belong to individual objects</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">One shared class variable per defining class</td>
                  <td className="px-4 py-2.5 text-stone-700">Each object has its own instance state</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Accessible using the class name</td>
                  <td className="px-4 py-2.5 text-stone-700">Accessed through object references</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Static methods lack an implicit current object</td>
                  <td className="px-4 py-2.5 text-stone-700">Instance methods have access to <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">this</code></td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Cannot directly access instance members</td>
                  <td className="px-4 py-2.5 text-stone-700">Can access instance and accessible static members</td>
                </tr>
              </tbody>
            </table>
          </div>
          <hr className="border-[#e7e3da] my-6" />
        </div>
      </section>

      {/* SECTION 15: 15. The final Keyword */}
      <section id="section-15" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider font-mono">
            Part 9 · Immutability & Sealing
          </span>
          <span className="text-xs font-mono text-stone-500">Section 15</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          15. The final Keyword
        </h2>
        <div className="space-y-4 text-stone-700 leading-relaxed text-sm sm:text-base">
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            The <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">final</code> keyword restricts reassignment, overriding, or inheritance depending on where it is used.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>15.1 Final variables</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            A final variable can be assigned only once.
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public class FinalVariable {

    public static void main(String[] args) {

        final int MAX_USERS = 100;

        System.out.println(MAX_USERS);
    }
}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            The following is invalid after initialization:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`// MAX_USERS = 200;`}</code>
            </pre>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>15.2 Blank final variables</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            A blank final variable is declared without an initial value and assigned later under the language's definite-assignment rules.
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
              <code>{`class Employee {

    final int employeeId;

    Employee(int employeeId) {

        this.employeeId = employeeId;
    }
}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Every constructor path must ensure the blank final instance field is assigned exactly once.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>15.3 Final reference variables</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            A final reference variable cannot be reassigned to a different reference after assignment.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            However, the referenced object may still be mutable.
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
              <code>{`final int[] numbers = {10, 20, 30};

numbers[0] = 100;`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            This is allowed.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            But:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`// numbers = new int[]{1, 2, 3};`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            is not allowed.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            The reference cannot change, but the array contents can.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>15.4 Final methods</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            A final instance method cannot be overridden in subclasses.
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`class Parent {

    final void display() {

        System.out.println("Parent method");
    }
}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            A subclass cannot override this method.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>15.5 Final classes</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            A final class cannot be extended.
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`final class SecurityConfig {

    void display() {

        System.out.println("Secure configuration");
    }
}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            This is invalid:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`// class CustomConfig extends SecurityConfig {}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Final classes are useful when a design intentionally prevents inheritance.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>15.6 static final constants</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            The combination:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`static final`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            is commonly used for class-level constants.
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
              <code>{`class AppConfig {

    public static final int MAX_CONNECTIONS = 100;
}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Access:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`System.out.println(AppConfig.MAX_CONNECTIONS);`}</code>
            </pre>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>15.7 Summary of final</span>
          </h3>
          <div className="overflow-x-auto my-4 rounded-xl border border-[#e7e3da] shadow-2xs">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-stone-900 border-b border-[#e7e3da] font-semibold">
                <tr>
                  <th className="px-4 py-3">Usage</th>
                  <th className="px-4 py-3">Meaning</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Final variable</td>
                  <td className="px-4 py-2.5 text-stone-700">Cannot be reassigned</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Final parameter</td>
                  <td className="px-4 py-2.5 text-stone-700">Cannot be reassigned inside the method</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Final method</td>
                  <td className="px-4 py-2.5 text-stone-700">Cannot be overridden</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Final class</td>
                  <td className="px-4 py-2.5 text-stone-700">Cannot be subclassed</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Static final field</td>
                  <td className="px-4 py-2.5 text-stone-700">Commonly used for class-level constants</td>
                </tr>
              </tbody>
            </table>
          </div>
          <hr className="border-[#e7e3da] my-6" />
        </div>
      </section>

      {/* SECTION 16: 16. Access Modifiers */}
      <section id="section-16" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider font-mono">
            Part 10 · Visibility Boundaries
          </span>
          <span className="text-xs font-mono text-stone-500">Section 16</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          16. Access Modifiers
        </h2>
        <div className="space-y-4 text-stone-700 leading-relaxed text-sm sm:text-base">
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>16.1 What are access modifiers?</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Access modifiers determine where classes and their members can be accessed.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            They are an essential part of encapsulation and application design.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Java provides four member access levels:
          </p>
          <ol className="list-decimal pl-5 space-y-2 text-stone-700 text-sm sm:text-base my-3 leading-relaxed">
            <li>public.</li>
            <li>protected.</li>
            <li>package-private.</li>
            <li>private.</li>
          </ol>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Package-private means no explicit access modifier is written.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>16.2 Public</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            A public member can generally be accessed from any code that can access its declaring type.
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
              <code>{`public class Student {

    public String name;
}`}</code>
            </pre>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>16.3 Private</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            A private member is accessible only within the enclosing top-level class or interface body, subject to Java's nested-type rules.
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
              <code>{`class Employee {

    private double salary;
}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Other unrelated classes cannot directly access <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">salary</code>.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>16.4 Protected</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Protected members are accessible:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-stone-700 text-sm sm:text-base my-3 leading-relaxed">
            <li>Within the declaring package.</li>
            <li>From subclasses under Java's cross-package protected-access rules.</li>
          </ul>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            The cross-package rule is more specific than simply saying all subclasses can access the member through any object reference.
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
              <code>{`class Person {

    protected String name;
}

class Student extends Person {

    void display() {

        System.out.println(name);
    }
}`}</code>
            </pre>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>16.5 Package-private</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            When no access modifier is specified, a member or top-level class receives package access.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            It can be accessed by appropriate code within the same package.
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
              <code>{`class Student {

    int age;
}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Here, both the class and its field have package-private access.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>16.6 Access modifier comparison</span>
          </h3>
          <div className="overflow-x-auto my-4 rounded-xl border border-[#e7e3da] shadow-2xs">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-stone-900 border-b border-[#e7e3da] font-semibold">
                <tr>
                  <th className="px-4 py-3">Modifier</th>
                  <th className="px-4 py-3">Same class</th>
                  <th className="px-4 py-3">Same package</th>
                  <th className="px-4 py-3">Subclass in another package</th>
                  <th className="px-4 py-3">Unrelated class in another package</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">public</td>
                  <td className="px-4 py-2.5 text-stone-700">Yes</td>
                  <td className="px-4 py-2.5 text-stone-700">Yes</td>
                  <td className="px-4 py-2.5 text-stone-700">Yes</td>
                  <td className="px-4 py-2.5 text-stone-700">Yes, if type is accessible</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">protected</td>
                  <td className="px-4 py-2.5 text-stone-700">Yes</td>
                  <td className="px-4 py-2.5 text-stone-700">Yes</td>
                  <td className="px-4 py-2.5 text-stone-700">Yes, subject to protected-access rules</td>
                  <td className="px-4 py-2.5 text-stone-700">No</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">package-private</td>
                  <td className="px-4 py-2.5 text-stone-700">Yes</td>
                  <td className="px-4 py-2.5 text-stone-700">Yes</td>
                  <td className="px-4 py-2.5 text-stone-700">No, unless also in same package</td>
                  <td className="px-4 py-2.5 text-stone-700">No</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">private</td>
                  <td className="px-4 py-2.5 text-stone-700">Yes</td>
                  <td className="px-4 py-2.5 text-stone-700">No</td>
                  <td className="px-4 py-2.5 text-stone-700">No</td>
                  <td className="px-4 py-2.5 text-stone-700">No</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            These rules concern members. Top-level classes and interfaces have a smaller set of permitted access declarations: public or package-private.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>16.7 Choosing appropriate access levels</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            A good object-oriented design generally uses the least permissive access level that satisfies the requirement.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            For example:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-stone-700 text-sm sm:text-base my-3 leading-relaxed">
            <li>Use <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">private</code> for internal fields.</li>
            <li>Use <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">public</code> for intended external operations.</li>
            <li>Use package-private for implementation details shared inside a package.</li>
            <li>Use <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">protected</code> for carefully designed subclass extension points.</li>
          </ul>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Do not make every field public simply to make a program easier to write.
          </p>
          <hr className="border-[#e7e3da] my-6" />
        </div>
      </section>

      {/* SECTION 17: 17. Packages in Java */}
      <section id="section-17" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider font-mono">
            Part 10 · Modular Namespaces
          </span>
          <span className="text-xs font-mono text-stone-500">Section 17</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          17. Packages in Java
        </h2>
        <div className="space-y-4 text-stone-700 leading-relaxed text-sm sm:text-base">
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>17.1 What is a package?</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            A package is a namespace used to organize related Java classes, interfaces, and other types.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Packages help:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-stone-700 text-sm sm:text-base my-3 leading-relaxed">
            <li>Organize large applications.</li>
            <li>Avoid name conflicts.</li>
            <li>Control package-level access.</li>
            <li>Improve modularity.</li>
            <li>Make code easier to maintain.</li>
          </ul>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Java's standard library is organized into packages.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Examples:
          </p>
          <div className="overflow-x-auto my-4 rounded-xl border border-[#e7e3da] shadow-2xs">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-stone-900 border-b border-[#e7e3da] font-semibold">
                <tr>
                  <th className="px-4 py-3">Package</th>
                  <th className="px-4 py-3">Purpose</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700"><code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">java.lang</code></td>
                  <td className="px-4 py-2.5 text-stone-700">Fundamental Java language classes</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700"><code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">java.util</code></td>
                  <td className="px-4 py-2.5 text-stone-700">Collections and utility classes</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700"><code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">java.io</code></td>
                  <td className="px-4 py-2.5 text-stone-700">Input and output</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700"><code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">java.nio</code></td>
                  <td className="px-4 py-2.5 text-stone-700">Modern input/output and file APIs</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700"><code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">java.net</code></td>
                  <td className="px-4 py-2.5 text-stone-700">Networking</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700"><code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">java.time</code></td>
                  <td className="px-4 py-2.5 text-stone-700">Date and time</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700"><code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">java.sql</code></td>
                  <td className="px-4 py-2.5 text-stone-700">Database connectivity</td>
                </tr>
              </tbody>
            </table>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>17.2 Declaring a package</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Example file:
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">Student.java</code>
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`package university.students;

public class Student {

    private String name;

    public Student(String name) {

        this.name = name;
    }

    public void display() {

        System.out.println(name);
    }
}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            The package declaration identifies the package containing the class.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            For an ordinary compilation unit, the package declaration appears before import declarations and type declarations.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>17.3 Using import</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Suppose another class wants to use Student.
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`package university.app;

import university.students.Student;

public class Main {

    public static void main(String[] args) {

        Student student = new Student("Alex");

        student.display();
    }
}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            The import declaration allows the class to refer to <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">Student</code> by its simple name.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Alternatively, a fully qualified name can be used:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`university.students.Student student =
        new university.students.Student("Alex");`}</code>
            </pre>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>17.4 Package structure</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            A project may be organized as follows:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`UniversityApplication
|
+-- src
|   |
|   +-- university
|       |
|       +-- students
|       |   +-- Student.java
|       |
|       +-- teachers
|       |   +-- Teacher.java
|       |
|       +-- courses
|       |   +-- Course.java
|       |
|       +-- app
|           +-- Main.java
|
+-- out`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Package names are conventionally lowercase.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>17.5 Compiling package-based Java code</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            From the project directory, compile source files into an output directory:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">BASH</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`javac -d out src/university/students/Student.java`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Compile the application class along with its dependencies when necessary:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">BASH</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`javac -d out -sourcepath src src/university/app/Main.java`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Run the application using its fully qualified class name:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">BASH</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`java -cp out university.app.Main`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            The <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">-cp</code> option sets the classpath.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>17.6 Static imports</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Java supports importing static members.
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
              <code>{`import static java.lang.Math.PI;
import static java.lang.Math.sqrt;

public class StaticImportExample {

    public static void main(String[] args) {

        System.out.println(PI);

        System.out.println(sqrt(25));
    }
}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Static imports can make selected utility methods easier to use, but excessive static imports can reduce readability.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>17.7 Package naming conventions</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Packages commonly use reverse domain notation.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Examples:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`com.company.application
org.university.students
in.prepspaces.courses`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            This reduces the likelihood of package-name conflicts.
          </p>
          <hr className="border-[#e7e3da] my-6" />
        </div>
      </section>

      {/* SECTION 18: 18. Composition Versus Inheritance */}
      <section id="section-18" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider font-mono">
            Part 11 · HAS-A vs IS-A Design
          </span>
          <span className="text-xs font-mono text-stone-500">Section 18</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          18. Composition Versus Inheritance
        </h2>
        <div className="space-y-4 text-stone-700 leading-relaxed text-sm sm:text-base">
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>18.1 What is composition?</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Composition is an object-oriented design technique in which an object contains or uses other objects to provide its functionality.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            It represents a HAS-A relationship.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Examples:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-stone-700 text-sm sm:text-base my-3 leading-relaxed">
            <li>A car has an engine.</li>
            <li>A university has departments.</li>
            <li>A computer has a processor.</li>
            <li>An order has order items.</li>
            <li>A course has learning modules.</li>
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
              <code>{`class Engine {

    void start() {

        System.out.println("Engine started");
    }
}

class Car {

    private final Engine engine = new Engine();

    void startCar() {

        engine.start();

        System.out.println("Car started");
    }
}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            The Car object uses an Engine object.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>18.2 What is inheritance?</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Inheritance establishes an IS-A relationship.
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
              <code>{`class Vehicle {

    void move() {

        System.out.println("Vehicle is moving");
    }
}

class Car extends Vehicle {

    void openTrunk() {

        System.out.println("Trunk opened");
    }
}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Car IS-A Vehicle.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>18.3 Composition versus inheritance</span>
          </h3>
          <div className="overflow-x-auto my-4 rounded-xl border border-[#e7e3da] shadow-2xs">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-stone-900 border-b border-[#e7e3da] font-semibold">
                <tr>
                  <th className="px-4 py-3">Composition</th>
                  <th className="px-4 py-3">Inheritance</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Represents HAS-A</td>
                  <td className="px-4 py-2.5 text-stone-700">Represents IS-A</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Uses other objects</td>
                  <td className="px-4 py-2.5 text-stone-700">Extends another class</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Often supports flexible behavior replacement</td>
                  <td className="px-4 py-2.5 text-stone-700">Establishes a class hierarchy</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Uses object references</td>
                  <td className="px-4 py-2.5 text-stone-700">Uses <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">extends</code></td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Helps reduce inheritance coupling</td>
                  <td className="px-4 py-2.5 text-stone-700">Reuses inherited implementation</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Useful when responsibilities are separate</td>
                  <td className="px-4 py-2.5 text-stone-700">Useful for genuine subtype relationships</td>
                </tr>
              </tbody>
            </table>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>18.4 Why composition is often preferred</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Inheritance creates a relationship between a child and parent class.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Changes to a parent implementation may affect subclasses.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Composition can provide a more flexible structure because components can be replaced or configured independently.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            This is why software design often prefers composition over inheritance when there is no genuine IS-A relationship.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            However, inheritance is still valuable when a meaningful subtype relationship exists and the child can correctly satisfy the parent's behavioral contract.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>18.5 Composition with dependency injection</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Instead of creating a dependency internally, a class can receive it through its constructor.
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`interface Engine {

    void start();
}

class ElectricEngine implements Engine {

    @Override
    public void start() {

        System.out.println("Electric engine started");
    }
}

class Car {

    private final Engine engine;

    Car(Engine engine) {

        this.engine = engine;
    }

    void startCar() {

        engine.start();
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
              <code>{`public class CompositionExample {

    public static void main(String[] args) {

        Engine engine = new ElectricEngine();

        Car car = new Car(engine);

        car.startCar();
    }
}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            This design allows a different Engine implementation to be supplied without rewriting the Car class.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            This technique is called constructor injection and is closely related to dependency inversion.
          </p>
          <hr className="border-[#e7e3da] my-6" />
        </div>
      </section>

      {/* SECTION 19: 19. Object Relationships */}
      <section id="section-19" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider font-mono">
            Part 11 · Association, Aggregation & Composition
          </span>
          <span className="text-xs font-mono text-stone-500">Section 19</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          19. Object Relationships
        </h2>
        <div className="space-y-4 text-stone-700 leading-relaxed text-sm sm:text-base">
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Understanding object relationships is important when designing large systems.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Four common relationships are:
          </p>
          <ol className="list-decimal pl-5 space-y-2 text-stone-700 text-sm sm:text-base my-3 leading-relaxed">
            <li>Association.</li>
            <li>Aggregation.</li>
            <li>Composition.</li>
            <li>Dependency.</li>
          </ol>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>19.1 Association</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Association is a relationship in which two objects know about or interact with each other.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Example:
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            A student enrolls in a course.
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Student -------- Course`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            A student and a course can exist independently.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Java:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`class Course {

    String courseName;
}

class Student {

    String studentName;

    void enroll(Course course) {

        System.out.println(
                studentName + " enrolled in " +
                course.courseName
        );
    }
}`}</code>
            </pre>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>19.2 Aggregation</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Aggregation is a whole-part relationship in which the contained objects can exist independently of the container.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Example:
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            A department has teachers.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            A teacher can still exist even if the department is reorganized or removed from an application model.
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Department ◇-------- Teacher`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            The hollow diamond in UML represents aggregation.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Java:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`class Teacher {

    String name;

    Teacher(String name) {

        this.name = name;
    }
}

class Department {

    Teacher teacher;

    Department(Teacher teacher) {

        this.teacher = teacher;
    }
}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            The Teacher is supplied from outside rather than created as an inseparable part of the Department.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>19.3 Composition</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Composition is a stronger whole-part relationship in which the part is modeled as belonging to the lifecycle and ownership of the whole.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Example:
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            An order contains order-line objects.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            When an order is discarded from this model, its owned order-line components normally do not have an independent lifecycle in the same ownership relationship.
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Order ◆-------- OrderItem`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            The filled diamond represents composition.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Java:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`class OrderItem {

    String productName;

    int quantity;

    OrderItem(String productName, int quantity) {

        this.productName = productName;

        this.quantity = quantity;
    }
}

class Order {

    private final OrderItem item;

    Order() {

        item = new OrderItem("Laptop", 1);
    }
}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            This simple example demonstrates the ownership model. Java's garbage collector manages memory based on reachability; composition does not mean that the language automatically destroys a part at the exact moment its owner becomes unreachable.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>19.4 Dependency</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Dependency occurs when one class temporarily uses another class to perform an operation.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Example:
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            A ReportGenerator uses a Printer.
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`ReportGenerator - - - - > Printer`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Java:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`class Printer {

    void print(String text) {

        System.out.println(text);
    }
}

class ReportGenerator {

    void generateReport(Printer printer) {

        printer.print("Student Report");
    }
}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            The Printer is used as a method parameter rather than being necessarily stored as permanent state.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>19.5 Relationship comparison</span>
          </h3>
          <div className="overflow-x-auto my-4 rounded-xl border border-[#e7e3da] shadow-2xs">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-stone-900 border-b border-[#e7e3da] font-semibold">
                <tr>
                  <th className="px-4 py-3">Relationship</th>
                  <th className="px-4 py-3">Meaning</th>
                  <th className="px-4 py-3">Example</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Association</td>
                  <td className="px-4 py-2.5 text-stone-700">Objects interact</td>
                  <td className="px-4 py-2.5 text-stone-700">Student and Course</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Aggregation</td>
                  <td className="px-4 py-2.5 text-stone-700">Whole contains independently existing parts</td>
                  <td className="px-4 py-2.5 text-stone-700">Department and Teacher</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Composition</td>
                  <td className="px-4 py-2.5 text-stone-700">Whole strongly owns its parts</td>
                  <td className="px-4 py-2.5 text-stone-700">Order and OrderItem</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Dependency</td>
                  <td className="px-4 py-2.5 text-stone-700">One type temporarily uses another</td>
                  <td className="px-4 py-2.5 text-stone-700">ReportGenerator and Printer</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Inheritance</td>
                  <td className="px-4 py-2.5 text-stone-700">One type specializes another</td>
                  <td className="px-4 py-2.5 text-stone-700">Student and Person</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Interface realization</td>
                  <td className="px-4 py-2.5 text-stone-700">Class implements a contract</td>
                  <td className="px-4 py-2.5 text-stone-700">PaymentProcessor and PaymentMethod</td>
                </tr>
              </tbody>
            </table>
          </div>
          <hr className="border-[#e7e3da] my-6" />
        </div>
      </section>

      {/* SECTION 20: 20. UML Class Diagrams */}
      <section id="section-20" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider font-mono">
            Part 12 · System Modeling & UML
          </span>
          <span className="text-xs font-mono text-stone-500">Section 20</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          20. UML Class Diagrams
        </h2>
        <div className="space-y-4 text-stone-700 leading-relaxed text-sm sm:text-base">
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>20.1 What is UML?</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            UML stands for Unified Modeling Language.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            It is a standardized modeling language used to visualize and describe software systems.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            UML is useful for:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-stone-700 text-sm sm:text-base my-3 leading-relaxed">
            <li>Software architecture.</li>
            <li>Requirements analysis.</li>
            <li>Class design.</li>
            <li>Object relationships.</li>
            <li>System documentation.</li>
            <li>Communication between developers.</li>
          </ul>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            UML is not a programming language. It provides diagrams that describe software structures and behavior.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>20.2 What is a UML class diagram?</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            A UML class diagram represents the static structure of a software system.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            It displays classes, their attributes, their operations, and the relationships between classes.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            A basic class box contains three sections:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`+-------------------------+
|        Student          |
+-------------------------+
| - studentId: int        |
| - name: String          |
| - age: int              |
+-------------------------+
| + getName(): String     |
| + setName(String): void |
| + display(): void       |
+-------------------------+`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-stone-900">Top section:</strong> Class name.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-stone-900">Middle section:</strong> Attributes or fields.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-stone-900">Bottom section:</strong> Methods or operations.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>20.3 UML visibility notation</span>
          </h3>
          <div className="overflow-x-auto my-4 rounded-xl border border-[#e7e3da] shadow-2xs">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-stone-900 border-b border-[#e7e3da] font-semibold">
                <tr>
                  <th className="px-4 py-3">Symbol</th>
                  <th className="px-4 py-3">Java meaning</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700"><code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">+</code></td>
                  <td className="px-4 py-2.5 text-stone-700">Public</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700"><code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">-</code></td>
                  <td className="px-4 py-2.5 text-stone-700">Private</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700"><code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">#</code></td>
                  <td className="px-4 py-2.5 text-stone-700">Protected</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700"><code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">~</code></td>
                  <td className="px-4 py-2.5 text-stone-700">Package-private</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Example:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`+--------------------------------+
|            Employee            |
+--------------------------------+
| - employeeId: int              |
| - name: String                 |
| # salary: double               |
+--------------------------------+
| + getName(): String            |
| + setSalary(double): void      |
| ~ calculateBonus(): double     |
+--------------------------------+`}</code>
            </pre>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>20.4 UML inheritance relationship</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Inheritance is represented using a solid line with a hollow triangular arrowhead pointing toward the parent class.
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`             Person
                △
                |
             Student`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            The triangle points to the superclass.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>20.5 UML interface implementation</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Interface realization is represented using a dashed line with a hollow triangular arrowhead pointing toward the interface.
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`       <<interface>>
          Payable
             △
             |
         - - - -
             |
        Invoice`}</code>
            </pre>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>20.6 UML association</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Association is generally represented by a solid line.
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Student ---------------- Course`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            This indicates that Student and Course are associated.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>20.7 UML aggregation</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Aggregation uses a hollow diamond on the whole side.
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Department ◇---------- Teacher`}</code>
            </pre>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>20.8 UML composition</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Composition uses a filled diamond on the owner side.
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Order ◆------------- OrderItem`}</code>
            </pre>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>20.9 Multiplicity</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Multiplicity indicates how many objects can participate in a relationship.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Common notation:
          </p>
          <div className="overflow-x-auto my-4 rounded-xl border border-[#e7e3da] shadow-2xs">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-stone-900 border-b border-[#e7e3da] font-semibold">
                <tr>
                  <th className="px-4 py-3">Notation</th>
                  <th className="px-4 py-3">Meaning</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700"><code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">1</code></td>
                  <td className="px-4 py-2.5 text-stone-700">Exactly one</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700"><code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">0..1</code></td>
                  <td className="px-4 py-2.5 text-stone-700">Zero or one</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700"><code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">0..*</code></td>
                  <td className="px-4 py-2.5 text-stone-700">Zero or many</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700"><code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">1..*</code></td>
                  <td className="px-4 py-2.5 text-stone-700">One or many</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700"><code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">2..5</code></td>
                  <td className="px-4 py-2.5 text-stone-700">Between two and five</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Example:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Student 1 -------- 0..* Enrollment`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            This model indicates that a student may have zero or many enrollments, with each enrollment associated with one student.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>20.10 Complete example UML class diagram</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Consider a university registration system:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`              <<abstract>>
                 Person
         ----------------------
         - name: String
         - email: String
         ----------------------
         + getName(): String
         + getEmail(): String
                  △
             +----+----+
             |         |
          Student  Instructor


        Student -------- Enrollment
                            |
                            |
                          Course`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            This design can be expanded with separate payment and notification contracts.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>20.11 Why should developers learn UML?</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            UML allows developers to think through system design before implementing code.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            It helps identify:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-stone-700 text-sm sm:text-base my-3 leading-relaxed">
            <li>Missing responsibilities.</li>
            <li>Unnecessary relationships.</li>
            <li>Duplicate attributes.</li>
            <li>Incorrect inheritance hierarchies.</li>
            <li>Object ownership.</li>
            <li>Access requirements.</li>
            <li>Dependencies between classes.</li>
          </ul>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Students should practice drawing a UML class diagram before writing the complete mini-project implementation.
          </p>
          <hr className="border-[#e7e3da] my-6" />
        </div>
      </section>

      {/* SECTION 21: 21. Introduction to SOLID Principles */}
      <section id="section-21" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider font-mono">
            Part 13 · Professional Software Design
          </span>
          <span className="text-xs font-mono text-stone-500">Section 21</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          21. Introduction to SOLID Principles
        </h2>
        <div className="space-y-4 text-stone-700 leading-relaxed text-sm sm:text-base">
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>21.1 What is SOLID?</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            SOLID is an acronym for five object-oriented software design principles.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            They are used to guide the design of maintainable, extensible, and loosely coupled software.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            The five principles are:
          </p>
          <div className="overflow-x-auto my-4 rounded-xl border border-[#e7e3da] shadow-2xs">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-stone-900 border-b border-[#e7e3da] font-semibold">
                <tr>
                  <th className="px-4 py-3">Letter</th>
                  <th className="px-4 py-3">Principle</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">S</td>
                  <td className="px-4 py-2.5 text-stone-700">Single Responsibility Principle</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">O</td>
                  <td className="px-4 py-2.5 text-stone-700">Open/Closed Principle</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">L</td>
                  <td className="px-4 py-2.5 text-stone-700">Liskov Substitution Principle</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">I</td>
                  <td className="px-4 py-2.5 text-stone-700">Interface Segregation Principle</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">D</td>
                  <td className="px-4 py-2.5 text-stone-700">Dependency Inversion Principle</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            These are design guidelines, not rigid syntax rules. They should be applied with judgment to avoid unnecessary complexity.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>21.2 Single Responsibility Principle (SRP)</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            A class should have one primary responsibility and one coherent reason to change.
          </p>
          <h4 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span>Poor design</span>
          </h4>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`class StudentManager {

    void registerStudent() {

        System.out.println("Registering student");
    }

    void calculateFees() {

        System.out.println("Calculating fees");
    }

    void sendEmail() {

        System.out.println("Sending email");
    }

    void generateReport() {

        System.out.println("Generating report");
    }
}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            This class performs several unrelated responsibilities.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Changes to registration, billing, email, and reporting all affect the same class.
          </p>
          <h4 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span>Improved design</span>
          </h4>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`class StudentRegistration {

    void registerStudent() {

        System.out.println("Registering student");
    }
}

class FeeCalculator {

    void calculateFees() {

        System.out.println("Calculating fees");
    }
}

class EmailService {

    void sendEmail() {

        System.out.println("Sending email");
    }
}

class StudentReport {

    void generateReport() {

        System.out.println("Generating report");
    }
}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Each component has a clearer responsibility.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>21.3 Open/Closed Principle (OCP)</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Software entities should be open for extension but closed for modification.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            This means new behavior should often be introduced through abstractions and new implementations rather than repeatedly modifying existing stable code.
          </p>
          <h4 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span>Poor design</span>
          </h4>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`class PaymentProcessor {

    void process(String type, double amount) {

        if (type.equals("UPI")) {

            System.out.println("UPI payment");

        } else if (type.equals("CARD")) {

            System.out.println("Card payment");
        }
    }
}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Every new payment method requires modifying this class.
          </p>
          <h4 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span>Improved design</span>
          </h4>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`interface PaymentMethod {

    void pay(double amount);
}

class UPIPayment implements PaymentMethod {

    public void pay(double amount) {

        System.out.println("UPI payment: " + amount);
    }
}

class CardPayment implements PaymentMethod {

    public void pay(double amount) {

        System.out.println("Card payment: " + amount);
    }
}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            A processing component can depend on the interface:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`class PaymentProcessor {

    void process(
            PaymentMethod method,
            double amount
    ) {

        method.pay(amount);
    }
}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            New payment implementations can be added without rewriting the processor's main logic.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>21.4 Liskov Substitution Principle (LSP)</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Subtypes should be usable wherever their declared parent type is expected without violating the expected behavior of that parent abstraction.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            In simple terms:
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            A subclass should respect the behavioral contract of its superclass.
          </p>
          <h4 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span>Problematic design</span>
          </h4>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Suppose every Bird is modeled as being able to fly.
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`class Bird {

    void fly() {

        System.out.println("Flying");
    }
}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Then:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`class Penguin extends Bird {

    @Override
    void fly() {

        throw new UnsupportedOperationException();
    }
}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            This design violates the behavioral expectations of code that relies on every Bird being able to fly.
          </p>
          <h4 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span>Improved design</span>
          </h4>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Separate the ability to fly from the general Bird abstraction.
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`abstract class Bird {

    abstract void eat();
}

interface Flyable {

    void fly();
}

class Eagle extends Bird implements Flyable {

    public void eat() {

        System.out.println("Eagle eating");
    }

    public void fly() {

        System.out.println("Eagle flying");
    }
}

class Penguin extends Bird {

    public void eat() {

        System.out.println("Penguin eating");
    }
}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Now flying behavior is only required from objects that actually support it.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>21.5 Interface Segregation Principle (ISP)</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Clients should not be forced to depend on methods they do not use.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Large interfaces should often be divided into smaller, more specific interfaces.
          </p>
          <h4 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span>Poor design</span>
          </h4>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`interface Machine {

    void print();

    void scan();

    void fax();
}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            A printer-only device would have to implement operations it cannot perform.
          </p>
          <h4 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span>Improved design</span>
          </h4>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`interface Printable {

    void print();
}

interface Scannable {

    void scan();
}

interface Faxable {

    void fax();
}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            A printer can implement only <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">Printable</code>.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            A multifunction office device can implement all three.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            This produces smaller and more focused contracts.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>21.6 Dependency Inversion Principle (DIP)</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            High-level modules should depend on abstractions rather than directly depending on specific low-level implementations.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            This reduces tight coupling.
          </p>
          <h4 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span>Poor design</span>
          </h4>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`class EmailSender {

    void sendEmail(String message) {

        System.out.println(message);
    }
}

class Notification {

    private final EmailSender sender = new EmailSender();

    void notifyUser(String message) {

        sender.sendEmail(message);
    }
}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            The Notification class is directly coupled to EmailSender.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Replacing it with SMS or another delivery mechanism requires changes.
          </p>
          <h4 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span>Improved design</span>
          </h4>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`interface MessageSender {

    void send(String message);
}

class EmailSender implements MessageSender {

    public void send(String message) {

        System.out.println("Email: " + message);
    }
}

class SMSSender implements MessageSender {

    public void send(String message) {

        System.out.println("SMS: " + message);
    }
}

class Notification {

    private final MessageSender sender;

    Notification(MessageSender sender) {

        this.sender = sender;
    }

    void notifyUser(String message) {

        sender.send(message);
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
              <code>{`public class NotificationDemo {

    public static void main(String[] args) {

        MessageSender sender = new EmailSender();

        Notification notification = new Notification(sender);

        notification.notifyUser("Welcome to Java");
    }
}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            The Notification class depends on the MessageSender abstraction rather than a specific implementation.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>21.7 SOLID principles summary</span>
          </h3>
          <div className="overflow-x-auto my-4 rounded-xl border border-[#e7e3da] shadow-2xs">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-stone-900 border-b border-[#e7e3da] font-semibold">
                <tr>
                  <th className="px-4 py-3">Principle</th>
                  <th className="px-4 py-3">Main objective</th>
                  <th className="px-4 py-3">Common design benefit</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">SRP</td>
                  <td className="px-4 py-2.5 text-stone-700">One cohesive responsibility</td>
                  <td className="px-4 py-2.5 text-stone-700">Easier maintenance</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">OCP</td>
                  <td className="px-4 py-2.5 text-stone-700">Extend without unnecessarily modifying stable code</td>
                  <td className="px-4 py-2.5 text-stone-700">Easier expansion</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">LSP</td>
                  <td className="px-4 py-2.5 text-stone-700">Preserve behavioral substitutability</td>
                  <td className="px-4 py-2.5 text-stone-700">Reliable inheritance</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">ISP</td>
                  <td className="px-4 py-2.5 text-stone-700">Keep interfaces focused</td>
                  <td className="px-4 py-2.5 text-stone-700">Reduced unnecessary dependencies</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">DIP</td>
                  <td className="px-4 py-2.5 text-stone-700">Depend on abstractions</td>
                  <td className="px-4 py-2.5 text-stone-700">Lower coupling</td>
                </tr>
              </tbody>
            </table>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>21.8 How SOLID relates to OOP</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            SOLID principles build on the Java concepts introduced in this module.
          </p>
          <div className="overflow-x-auto my-4 rounded-xl border border-[#e7e3da] shadow-2xs">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-stone-900 border-b border-[#e7e3da] font-semibold">
                <tr>
                  <th className="px-4 py-3">OOP concept</th>
                  <th className="px-4 py-3">Related SOLID principles</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Classes</td>
                  <td className="px-4 py-2.5 text-stone-700">SRP</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Inheritance</td>
                  <td className="px-4 py-2.5 text-stone-700">LSP</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Interfaces</td>
                  <td className="px-4 py-2.5 text-stone-700">ISP and DIP</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Polymorphism</td>
                  <td className="px-4 py-2.5 text-stone-700">OCP and DIP</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Encapsulation</td>
                  <td className="px-4 py-2.5 text-stone-700">SRP and maintainable design</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Abstraction</td>
                  <td className="px-4 py-2.5 text-stone-700">DIP and OCP</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Composition</td>
                  <td className="px-4 py-2.5 text-stone-700">DIP and loose coupling</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Students should understand the principle behind each guideline rather than memorizing only its full form.
          </p>
          <hr className="border-[#e7e3da] my-6" />
        </div>
      </section>

      {/* SECTION 22: 22. Practical OOP Example — Banking Management System */}
      <section id="section-22" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider font-mono">
            Part 14 · Full Worked Architecture
          </span>
          <span className="text-xs font-mono text-stone-500">Section 22</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          22. Practical OOP Example — Banking Management System
        </h2>
        <div className="space-y-4 text-stone-700 leading-relaxed text-sm sm:text-base">
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            This section brings together classes, constructors, encapsulation, inheritance, overriding, and polymorphism.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>Project requirements</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Create a banking application that supports:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-stone-700 text-sm sm:text-base my-3 leading-relaxed">
            <li>Account holder information.</li>
            <li>Savings account.</li>
            <li>Current account.</li>
            <li>Deposits.</li>
            <li>Withdrawals.</li>
            <li>Balance inquiry.</li>
            <li>Account-specific withdrawal behavior.</li>
          </ul>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>Step 1 — Create the parent class</span>
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`abstract class BankAccount {

    private String accountNumber;

    private String accountHolder;

    protected double balance;

    BankAccount(
            String accountNumber,
            String accountHolder,
            double balance
    ) {

        if (balance < 0) {

            throw new IllegalArgumentException(
                    "Initial balance cannot be negative"
            );
        }

        this.accountNumber = accountNumber;

        this.accountHolder = accountHolder;

        this.balance = balance;
    }

    public void deposit(double amount) {

        if (amount > 0) {

            balance += amount;
        }
    }

    public abstract void withdraw(double amount);

    public double getBalance() {

        return balance;
    }

    public String getAccountNumber() {

        return accountNumber;
    }

    public String getAccountHolder() {

        return accountHolder;
    }
}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            The class:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-stone-700 text-sm sm:text-base my-3 leading-relaxed">
            <li>Encapsulates identity information.</li>
            <li>Shares common deposit logic.</li>
            <li>Declares withdrawal as abstract.</li>
            <li>Provides a common balance retrieval operation.</li>
          </ul>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>Step 2 — Create the savings account</span>
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`class SavingsAccount extends BankAccount {

    SavingsAccount(
            String accountNumber,
            String accountHolder,
            double balance
    ) {

        super(accountNumber, accountHolder, balance);
    }

    @Override
    public void withdraw(double amount) {

        if (amount > 0 && amount <= balance) {

            balance -= amount;

            System.out.println("Savings withdrawal successful");

        } else {

            System.out.println("Withdrawal not permitted");
        }
    }
}`}</code>
            </pre>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>Step 3 — Create the current account</span>
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`class CurrentAccount extends BankAccount {

    CurrentAccount(
            String accountNumber,
            String accountHolder,
            double balance
    ) {

        super(accountNumber, accountHolder, balance);
    }

    @Override
    public void withdraw(double amount) {

        double overdraftLimit = 10000;

        if (amount > 0 &&
            amount <= balance + overdraftLimit) {

            balance -= amount;

            System.out.println("Current withdrawal successful");

        } else {

            System.out.println("Overdraft limit exceeded");
        }
    }
}`}</code>
            </pre>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>Step 4 — Demonstrate polymorphism</span>
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public class BankingApplication {

    public static void main(String[] args) {

        BankAccount account1 = new SavingsAccount(
                "S101",
                "Alex",
                20000
        );

        BankAccount account2 = new CurrentAccount(
                "C101",
                "Sam",
                30000
        );

        account1.withdraw(5000);

        account2.withdraw(35000);

        System.out.println(account1.getBalance());

        System.out.println(account2.getBalance());
    }
}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Possible output:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Savings withdrawal successful
Current withdrawal successful
15000.0
-5000.0`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            This illustrates:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-stone-700 text-sm sm:text-base my-3 leading-relaxed">
            <li>Abstract classes.</li>
            <li>Constructor chaining.</li>
            <li>Inheritance.</li>
            <li>Encapsulation.</li>
            <li>Method overriding.</li>
            <li>Runtime polymorphism.</li>
          </ul>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Note: This is an educational demonstration, not production banking software. Real systems require transaction integrity, security, persistence, monetary precision, auditability, and concurrency control.
          </p>
          <hr className="border-[#e7e3da] my-6" />
        </div>
      </section>

      {/* SECTION 23: 23. Practical Laboratory Exercises (10 Labs) */}
      <section id="section-23" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider font-mono">
            Part 15 · 10 Hands-on Laboratories
          </span>
          <span className="text-xs font-mono text-stone-500">Section 23</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          23. Practical Laboratory Exercises (10 Labs)
        </h2>
        <div className="space-y-4 text-stone-700 leading-relaxed text-sm sm:text-base">
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Students should complete these exercises independently.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>Lab 1 — Employee class</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-stone-900">Objective:</strong> Understand classes, objects, fields, and methods.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Requirements:
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Create an Employee class containing:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-stone-700 text-sm sm:text-base my-3 leading-relaxed">
            <li>Employee ID.</li>
            <li>Name.</li>
            <li>Department.</li>
            <li>Salary.</li>
          </ul>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Implement methods to:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-stone-700 text-sm sm:text-base my-3 leading-relaxed">
            <li>Display employee details.</li>
            <li>Update salary.</li>
            <li>Calculate annual salary.</li>
          </ul>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Create at least three Employee objects with different values.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>Lab 2 — Constructor implementation</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-stone-900">Objective:</strong> Practice object initialization.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Create a Product class with:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-stone-700 text-sm sm:text-base my-3 leading-relaxed">
            <li>Product ID.</li>
            <li>Product name.</li>
            <li>Price.</li>
            <li>Quantity.</li>
          </ul>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Implement:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-stone-700 text-sm sm:text-base my-3 leading-relaxed">
            <li>No-argument constructor.</li>
            <li>Constructor with product name.</li>
            <li>Constructor with all fields.</li>
          </ul>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Demonstrate constructor overloading and chaining.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>Lab 3 — Encapsulated bank account</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-stone-900">Objective:</strong> Practice data hiding and validation.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Requirements:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-stone-700 text-sm sm:text-base my-3 leading-relaxed">
            <li>Make balance private.</li>
            <li>Provide deposit and withdrawal methods.</li>
            <li>Prevent invalid deposits.</li>
            <li>Prevent unsupported withdrawals.</li>
            <li>Provide a balance getter.</li>
            <li>Test normal and boundary values.</li>
          </ul>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>Lab 4 — Inheritance hierarchy</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-stone-900">Objective:</strong> Understand class relationships.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Create:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Person
 |
 +-- Student
 |
 +-- Teacher
 |
 +-- Administrator`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Use common fields in Person.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Introduce appropriate specialized fields and methods in each subclass.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>Lab 5 — Method overriding and polymorphism</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-stone-900">Objective:</strong> Understand dynamic dispatch.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Create a Shape hierarchy:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Shape
 |
 +-- Circle
 |
 +-- Rectangle
 |
 +-- Triangle`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Implement a method:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`double calculateArea();`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Call it using references of the common Shape type.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>Lab 6 — Abstract class and interfaces</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-stone-900">Objective:</strong> Understand abstraction.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Create:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-stone-700 text-sm sm:text-base my-3 leading-relaxed">
            <li>An abstract Employee class.</li>
            <li>A Payable interface.</li>
            <li>FullTimeEmployee.</li>
            <li>ContractEmployee.</li>
          </ul>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Implement the salary calculation according to each employment type.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>Lab 7 — Multiple interface implementation</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-stone-900">Objective:</strong> Understand interfaces and capabilities.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Create an OfficeMachine class implementing:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-stone-700 text-sm sm:text-base my-3 leading-relaxed">
            <li>Printable.</li>
            <li>Scannable.</li>
            <li>Copyable.</li>
          </ul>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Each interface should define its own operation.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>Lab 8 — Composition</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-stone-900">Objective:</strong> Understand HAS-A relationships.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Develop:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Car
 |
 +-- Engine
 |
 +-- MusicSystem
 |
 +-- NavigationSystem`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Create component objects and inject them into a Car object.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>Lab 9 — Packages</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-stone-900">Objective:</strong> Understand application organization.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Create packages:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`com.university.students
com.university.teachers
com.university.courses
com.university.application`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Place related classes in appropriate packages.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Import and use those classes from the application package.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>Lab 10 — UML design</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-stone-900">Objective:</strong> Translate application requirements into object-oriented design.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Create a UML class diagram for a library management system.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Include:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-stone-700 text-sm sm:text-base my-3 leading-relaxed">
            <li>Book.</li>
            <li>Member.</li>
            <li>Librarian.</li>
            <li>Loan.</li>
            <li>Library.</li>
          </ul>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Identify association, aggregation, composition, and inheritance where appropriate.
          </p>
          <hr className="border-[#e7e3da] my-6" />
        </div>
      </section>

      {/* SECTION 24: 24. Independent Programming Assignments (8 Assignments) */}
      <section id="section-24" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider font-mono">
            Part 16 · 8 Independent Projects
          </span>
          <span className="text-xs font-mono text-stone-500">Section 24</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          24. Independent Programming Assignments (8 Assignments)
        </h2>
        <div className="space-y-4 text-stone-700 leading-relaxed text-sm sm:text-base">
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            These assignments assess independent design and implementation skills.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>Assignment 1 — Student management system</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Create a Student class containing:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-stone-700 text-sm sm:text-base my-3 leading-relaxed">
            <li>Student ID.</li>
            <li>Student name.</li>
            <li>Email.</li>
            <li>Course.</li>
            <li>Marks.</li>
          </ul>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Requirements:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-stone-700 text-sm sm:text-base my-3 leading-relaxed">
            <li>Use private fields.</li>
            <li>Implement constructors.</li>
            <li>Create suitable getters and setters.</li>
            <li>Calculate average marks.</li>
            <li>Determine the result.</li>
            <li>Create several Student objects.</li>
          </ul>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>Assignment 2 — Vehicle hierarchy</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Create:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Vehicle
 |
 +-- Car
 |
 +-- Bike
 |
 +-- Truck`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            The parent class should contain:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-stone-700 text-sm sm:text-base my-3 leading-relaxed">
            <li>Brand.</li>
            <li>Model.</li>
            <li>Registration number.</li>
          </ul>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Each subclass should provide specialized behavior.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Override suitable methods and demonstrate polymorphism.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>Assignment 3 — Shape calculation engine</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Create an abstract Shape class.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Implement:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-stone-700 text-sm sm:text-base my-3 leading-relaxed">
            <li>Circle.</li>
            <li>Rectangle.</li>
            <li>Triangle.</li>
          </ul>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Requirements:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-stone-700 text-sm sm:text-base my-3 leading-relaxed">
            <li>Use abstract methods.</li>
            <li>Override area calculations.</li>
            <li>Store objects using Shape references.</li>
            <li>Display the area of each object.</li>
            <li>Validate dimensions.</li>
          </ul>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>Assignment 4 — Payment processing system</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Create a PaymentMethod interface.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Implement:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-stone-700 text-sm sm:text-base my-3 leading-relaxed">
            <li>CardPayment.</li>
            <li>UPIPayment.</li>
            <li>BankTransferPayment.</li>
          </ul>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Create a PaymentProcessor class that accepts a PaymentMethod reference.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Demonstrate that the processor works with different payment implementations without changing its core logic.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>Assignment 5 — Library management system</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Create the following classes:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-stone-700 text-sm sm:text-base my-3 leading-relaxed">
            <li>Library.</li>
            <li>Book.</li>
            <li>Member.</li>
            <li>Librarian.</li>
            <li>Loan.</li>
          </ul>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Requirements:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-stone-700 text-sm sm:text-base my-3 leading-relaxed">
            <li>Support book registration.</li>
            <li>Support book borrowing.</li>
            <li>Support book return.</li>
            <li>Track loan details.</li>
            <li>Prevent invalid borrowing.</li>
            <li>Model appropriate relationships.</li>
          </ul>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>Assignment 6 — University course registration</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Build a system containing:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-stone-700 text-sm sm:text-base my-3 leading-relaxed">
            <li>Person.</li>
            <li>Student.</li>
            <li>Instructor.</li>
            <li>Course.</li>
            <li>Enrollment.</li>
          </ul>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Requirements:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-stone-700 text-sm sm:text-base my-3 leading-relaxed">
            <li>Use inheritance for Person, Student, and Instructor.</li>
            <li>Use encapsulation.</li>
            <li>Model Student-Course enrollment.</li>
            <li>Use composition for owned components where appropriate.</li>
            <li>Draw a UML diagram.</li>
            <li>Keep unrelated responsibilities separate.</li>
          </ul>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>Assignment 7 — SOLID refactoring challenge</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Given a large class that performs registration, payment, messaging, and reporting, redesign it using the five SOLID principles.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Explain:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-stone-700 text-sm sm:text-base my-3 leading-relaxed">
            <li>What was wrong with the original design.</li>
            <li>Which responsibilities were separated.</li>
            <li>Which abstractions were introduced.</li>
            <li>How the new design reduces coupling.</li>
            <li>How additional features can be added.</li>
          </ul>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>Assignment 8 — UML-based application design</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Choose one:
          </p>
          <ol className="list-decimal pl-5 space-y-2 text-stone-700 text-sm sm:text-base my-3 leading-relaxed">
            <li>Hospital management system.</li>
            <li>Banking management system.</li>
            <li>E-commerce platform.</li>
            <li>University management system.</li>
            <li>Online learning platform.</li>
          </ol>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Prepare:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-stone-700 text-sm sm:text-base my-3 leading-relaxed">
            <li>Requirements.</li>
            <li>Main classes.</li>
            <li>Attributes.</li>
            <li>Methods.</li>
            <li>Relationships.</li>
            <li>Access modifiers.</li>
            <li>UML class diagram.</li>
            <li>Java implementation.</li>
          </ul>
          <hr className="border-[#e7e3da] my-6" />
        </div>
      </section>

      {/* SECTION 25: 25. Assessment and Review Questions */}
      <section id="section-25" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider font-mono">
            Part 17 · 20 MCQs & Theory Review
          </span>
          <span className="text-xs font-mono text-stone-500">Section 25</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          25. Assessment and Review Questions
        </h2>
        <div className="space-y-4 text-stone-700 leading-relaxed text-sm sm:text-base">
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>Part A — Multiple-choice questions</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-stone-900">1. What is the primary purpose of a class?</strong>
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            A. Store only numbers
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            B. Serve as a blueprint for objects
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            C. Replace all methods
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            D. Execute operating-system instructions
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-stone-900">Correct answer:</strong> B
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-stone-900">2. What is an object?</strong>
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            A. A runtime instance of a class
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            B. A Java keyword
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            C. A compiler
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            D. A package
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-stone-900">Correct answer:</strong> A
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-stone-900">3. Which OOP principle protects internal object state?</strong>
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            A. Inheritance
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            B. Encapsulation
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            C. Polymorphism
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            D. Recursion
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-stone-900">Correct answer:</strong> B
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-stone-900">4. Which keyword is used for class inheritance?</strong>
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            A. implements
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            B. extends
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            C. inherits
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            D. super
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-stone-900">Correct answer:</strong> B
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-stone-900">5. Which keyword refers to the current object?</strong>
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            A. super
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            B. this
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            C. static
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            D. final
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-stone-900">Correct answer:</strong> B
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-stone-900">6. Which keyword is used to invoke a superclass constructor?</strong>
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            A. this
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            B. super
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            C. parent
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            D. base
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-stone-900">Correct answer:</strong> B
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-stone-900">7. Which statement about constructors is correct?</strong>
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            A. Constructors must return int
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            B. Constructors have the same name as their class
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            C. Constructors can be overridden
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            D. Constructors are inherited by subclasses
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-stone-900">Correct answer:</strong> B
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-stone-900">8. Which feature allows multiple constructors with different parameter lists?</strong>
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            A. Method overriding
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            B. Constructor overloading
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            C. Encapsulation
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            D. Abstraction
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-stone-900">Correct answer:</strong> B
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-stone-900">9. Which annotation identifies an intended method override?</strong>
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            A. @Static
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            B. @Final
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            C. @Override
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            D. @Method
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-stone-900">Correct answer:</strong> C
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-stone-900">10. Runtime polymorphism is commonly achieved through:</strong>
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            A. Method overriding
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            B. Variable declaration
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            C. Constructor overloading
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            D. Package imports
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-stone-900">Correct answer:</strong> A
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-stone-900">11. Which class cannot be instantiated directly?</strong>
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            A. Public class
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            B. Abstract class
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            C. Final object
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            D. Static class
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-stone-900">Correct answer:</strong> B
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-stone-900">12. Which keyword declares that a class implements an interface?</strong>
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            A. extends
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            B. implements
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            C. interface
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            D. super
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-stone-900">Correct answer:</strong> B
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-stone-900">13. Can one Java class extend two classes?</strong>
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            A. Yes
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            B. No
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            C. Only with final
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            D. Only inside a package
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-stone-900">Correct answer:</strong> B
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-stone-900">14. Can one Java class implement multiple interfaces?</strong>
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            A. Yes
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            B. No
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            C. Only one
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            D. Only if abstract
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-stone-900">Correct answer:</strong> A
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-stone-900">15. What is a static variable?</strong>
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            A. A variable shared at class level
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            B. An automatically constant variable
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            C. A variable belonging to every object separately
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            D. A method parameter
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-stone-900">Correct answer:</strong> A
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-stone-900">16. Which keyword prevents a class from being extended?</strong>
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            A. static
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            B. protected
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            C. final
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            D. abstract
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-stone-900">Correct answer:</strong> C
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-stone-900">17. Which access modifier provides the most restrictive direct member access?</strong>
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            A. public
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            B. protected
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            C. package-private
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            D. private
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-stone-900">Correct answer:</strong> D
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-stone-900">18. What does composition represent?</strong>
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            A. IS-A
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            B. HAS-A
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            C. Overrides
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            D. Overloads
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-stone-900">Correct answer:</strong> B
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-stone-900">19. Which UML symbol is used for composition?</strong>
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            A. Hollow diamond
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            B. Filled diamond
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            C. Hollow triangle
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            D. Dashed arrow
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-stone-900">Correct answer:</strong> B
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-stone-900">20. What does the Open/Closed Principle encourage?</strong>
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            A. Every class must be final
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            B. Software should be open for extension and closed for modification
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            C. Classes should never use interfaces
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            D. Every method should be private
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-stone-900">Correct answer:</strong> B
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>Part B — Short-answer questions</span>
          </h3>
          <ol className="list-decimal pl-5 space-y-2 text-stone-700 text-sm sm:text-base my-3 leading-relaxed">
            <li>Define object-oriented programming.</li>
            <li>Differentiate between procedural and object-oriented programming.</li>
            <li>Explain the four pillars of OOP.</li>
            <li>What is a class?</li>
            <li>What is an object?</li>
            <li>Explain state, behavior, and identity.</li>
            <li>What is an object reference?</li>
            <li>What happens when two variables refer to the same object?</li>
            <li>Define a constructor.</li>
            <li>Differentiate between a default constructor and a no-argument constructor.</li>
            <li>What is constructor overloading?</li>
            <li>Explain constructor chaining.</li>
            <li>What is the purpose of <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">this</code>?</li>
            <li>What is the purpose of <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">super</code>?</li>
            <li>Explain constructor execution order.</li>
            <li>Define encapsulation.</li>
            <li>Why should class fields often be private?</li>
            <li>Differentiate between encapsulation and abstraction.</li>
            <li>Define inheritance.</li>
            <li>Explain single, multilevel, and hierarchical inheritance.</li>
            <li>Why does Java not support multiple class inheritance?</li>
            <li>What is method overriding?</li>
            <li>Explain the purpose of <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">@Override</code>.</li>
            <li>Differentiate between method hiding and method overriding.</li>
            <li>Define runtime polymorphism.</li>
            <li>Explain dynamic method dispatch.</li>
            <li>What is upcasting?</li>
            <li>What is downcasting?</li>
            <li>What is an abstract class?</li>
            <li>What is an abstract method?</li>
            <li>Define an interface.</li>
            <li>Differentiate between interfaces and abstract classes.</li>
            <li>Explain default methods in interfaces.</li>
            <li>What are static methods in interfaces?</li>
            <li>Explain the purpose of static variables.</li>
            <li>Explain the final keyword.</li>
            <li>Differentiate between public, private, protected, and package-private.</li>
            <li>What is a Java package?</li>
            <li>Differentiate between inheritance and composition.</li>
            <li>Explain association, aggregation, and composition.</li>
            <li>What is UML?</li>
            <li>Explain UML multiplicity.</li>
            <li>Define the Single Responsibility Principle.</li>
            <li>Explain the Open/Closed Principle.</li>
            <li>Explain the Liskov Substitution Principle.</li>
            <li>Explain the Interface Segregation Principle.</li>
            <li>Explain the Dependency Inversion Principle.</li>
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
              <code>{`class Student {

    String name = "Alex";

    void display() {

        System.out.println(name);
    }
}

public class Test {

    public static void main(String[] args) {

        Student s = new Student();

        s.display();
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
              <code>{`Alex`}</code>
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
              <code>{`class Parent {

    void show() {

        System.out.println("Parent");
    }
}

class Child extends Parent {

    @Override
    void show() {

        System.out.println("Child");
    }
}

public class Test {

    public static void main(String[] args) {

        Parent obj = new Child();

        obj.show();
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
              <code>{`Child`}</code>
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
              <code>{`class Example {

    static int count = 0;

    Example() {

        count++;
    }
}

public class Test {

    public static void main(String[] args) {

        new Example();

        new Example();

        new Example();

        System.out.println(Example.count);
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
              <code>{`3`}</code>
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
              <code>{`class Parent {

    Parent() {

        System.out.println("Parent");
    }
}

class Child extends Parent {

    Child() {

        System.out.println("Child");
    }
}

public class Test {

    public static void main(String[] args) {

        new Child();
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
              <code>{`Parent
Child`}</code>
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
              <code>{`class Example {

    int number = 10;

    Example(int number) {

        this.number = number;
    }

    void display() {

        System.out.println(number);
    }
}

public class Test {

    public static void main(String[] args) {

        Example obj = new Example(50);

        obj.display();
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
            <span>Question 6</span>
          </h4>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`class A {

    void show() {

        System.out.println("A");
    }
}

class B extends A {

    void show() {

        System.out.println("B");
    }

    void display() {

        super.show();

        show();
    }
}

public class Test {

    public static void main(String[] args) {

        B obj = new B();

        obj.display();
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
              <code>{`A
B`}</code>
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
              <code>{`interface Demo {

    int VALUE = 100;
}

public class Test {

    public static void main(String[] args) {

        System.out.println(Demo.VALUE);
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
              <code>{`100`}</code>
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
              <code>{`final int[] numbers = {10, 20};

numbers[0] = 100;

System.out.println(numbers[0]);`}</code>
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
              <code>{`100`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            The final reference cannot be reassigned, but the array object remains mutable.
          </p>
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
              <code>{`class Student {

    private String name;
}

public class Test {

    public static void main(String[] args) {

        Student student = new Student();

        student.name = "Alex";
    }
}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Task: Explain why the assignment is invalid and implement an appropriate setter.
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
              <code>{`class Parent {

    private void display() {

        System.out.println("Parent");
    }
}

class Child extends Parent {

    @Override
    void display() {

        System.out.println("Child");
    }
}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Task: Explain why this is not valid overriding and correct the implementation.
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
              <code>{`class Parent {

    Parent(String name) {
    }
}

class Child extends Parent {

    Child() {
    }
}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Task: Explain why the child constructor fails and correct it.
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
              <code>{`abstract class Shape {

    abstract void calculateArea();
}

class Circle extends Shape {
}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Task: Explain why Circle must either implement the method or be declared abstract.
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
              <code>{`class A {

    int value = 10;
}

class B extends A {

    void display() {

        System.out.println(super.value);
    }
}

public class Test {

    public static void main(String[] args) {

        A obj = new B();

        obj.display();
    }
}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Task: Determine whether the problem is the superclass reference or the method call. Explain the correction if any.
          </p>
          <hr className="border-[#e7e3da] my-6" />
        </div>
      </section>

      {/* SECTION 26: 26. Mini Project — University Course Registration & Management System */}
      <section id="section-26" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider font-mono">
            Part 18 · Capstone Mini Project
          </span>
          <span className="text-xs font-mono text-stone-500">Section 26</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          26. Mini Project — University Course Registration & Management System
        </h2>
        <div className="space-y-4 text-stone-700 leading-relaxed text-sm sm:text-base">
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>Project Overview</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Develop a Java application that models a university's students, instructors, courses, and enrollments using object-oriented programming.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            This project is designed to demonstrate how different classes work together to create a structured application.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            It introduces object modeling, access control, inheritance, polymorphism, interfaces, composition, and SOLID-oriented design.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>Functional Requirements</span>
          </h3>
          <h4 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span>Student management</span>
          </h4>
          <ul className="list-disc pl-5 space-y-2 text-stone-700 text-sm sm:text-base my-3 leading-relaxed">
            <li>Register a student.</li>
            <li>Store student identification.</li>
            <li>Store contact information.</li>
            <li>Display student details.</li>
            <li>Update permitted student information.</li>
          </ul>
          <h4 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span>Instructor management</span>
          </h4>
          <ul className="list-disc pl-5 space-y-2 text-stone-700 text-sm sm:text-base my-3 leading-relaxed">
            <li>Register instructors.</li>
            <li>Store instructor details.</li>
            <li>Assign instructors to courses.</li>
          </ul>
          <h4 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span>Course management</span>
          </h4>
          <ul className="list-disc pl-5 space-y-2 text-stone-700 text-sm sm:text-base my-3 leading-relaxed">
            <li>Create courses.</li>
            <li>Store course information.</li>
            <li>Assign instructors.</li>
            <li>Track enrollment information.</li>
          </ul>
          <h4 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span>Enrollment management</span>
          </h4>
          <ul className="list-disc pl-5 space-y-2 text-stone-700 text-sm sm:text-base my-3 leading-relaxed">
            <li>Enroll students in courses.</li>
            <li>Prevent duplicate enrollment.</li>
            <li>Track enrollment status.</li>
            <li>Display student course records.</li>
          </ul>
          <h4 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span>Notification management</span>
          </h4>
          <ul className="list-disc pl-5 space-y-2 text-stone-700 text-sm sm:text-base my-3 leading-relaxed">
            <li>Define a notification interface.</li>
            <li>Provide console-based notification implementation.</li>
            <li>Allow alternative notification implementations.</li>
          </ul>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>Suggested class architecture</span>
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`                 Person
             <<abstract>>
                    △
             +------+------+
             |             |
          Student       Instructor


       Course -------- Instructor
         |
         |
         |
      Enrollment
       /      \\
  Student    Course


    <<interface>>
    NotificationService
           △
           |
    ConsoleNotification`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            A more detailed UML diagram should distinguish the associations from inheritance and define the multiplicities for Student, Course, Instructor, and Enrollment.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>Suggested package structure</span>
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`university-system/
|
+-- src/
|   |
|   +-- university/
|       |
|       +-- people/
|       |   +-- Person.java
|       |   +-- Student.java
|       |   +-- Instructor.java
|       |
|       +-- courses/
|       |   +-- Course.java
|       |   +-- Enrollment.java
|       |
|       +-- notifications/
|       |   +-- NotificationService.java
|       |   +-- ConsoleNotification.java
|       |
|       +-- services/
|       |   +-- EnrollmentService.java
|       |
|       +-- app/
|           +-- Main.java
|
+-- out/`}</code>
            </pre>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>Implementation — Core classes</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            The following code is a compact foundation. Each public class should be saved in its corresponding file inside the stated package.
          </p>
          <h4 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span>Person.java</span>
          </h4>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`package university.people;

public abstract class Person {

    private final String personId;

    private String name;

    private String email;

    protected Person(
            String personId,
            String name,
            String email
    ) {

        this.personId = personId;

        this.name = name;

        this.email = email;
    }

    public String getPersonId() {

        return personId;
    }

    public String getName() {

        return name;
    }

    public void setName(String name) {

        if (name == null || name.isBlank()) {

            throw new IllegalArgumentException(
                    "Name cannot be empty"
            );
        }

        this.name = name;
    }

    public String getEmail() {

        return email;
    }

    public abstract String getRole();
}`}</code>
            </pre>
          </div>
          <h4 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span>Student.java</span>
          </h4>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`package university.people;

public class Student extends Person {

    private String courseOfStudy;

    public Student(
            String studentId,
            String name,
            String email,
            String courseOfStudy
    ) {

        super(studentId, name, email);

        this.courseOfStudy = courseOfStudy;
    }

    public String getCourseOfStudy() {

        return courseOfStudy;
    }

    @Override
    public String getRole() {

        return "Student";
    }

    public void display() {

        System.out.println("Student ID: " + getPersonId());

        System.out.println("Name: " + getName());

        System.out.println("Email: " + getEmail());

        System.out.println("Course: " + courseOfStudy);
    }
}`}</code>
            </pre>
          </div>
          <h4 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span>Instructor.java</span>
          </h4>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`package university.people;

public class Instructor extends Person {

    private String specialization;

    public Instructor(
            String instructorId,
            String name,
            String email,
            String specialization
    ) {

        super(instructorId, name, email);

        this.specialization = specialization;
    }

    public String getSpecialization() {

        return specialization;
    }

    @Override
    public String getRole() {

        return "Instructor";
    }
}`}</code>
            </pre>
          </div>
          <h4 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span>Course.java</span>
          </h4>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`package university.courses;

import university.people.Instructor;

public class Course {

    private final String courseId;

    private String courseName;

    private Instructor instructor;

    public Course(
            String courseId,
            String courseName,
            Instructor instructor
    ) {

        this.courseId = courseId;

        this.courseName = courseName;

        this.instructor = instructor;
    }

    public String getCourseId() {

        return courseId;
    }

    public String getCourseName() {

        return courseName;
    }

    public Instructor getInstructor() {

        return instructor;
    }

    public void assignInstructor(Instructor instructor) {

        this.instructor = instructor;
    }
}`}</code>
            </pre>
          </div>
          <h4 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span>Enrollment.java</span>
          </h4>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`package university.courses;

import university.people.Student;

public class Enrollment {

    private final Student student;

    private final Course course;

    public Enrollment(Student student, Course course) {

        this.student = student;

        this.course = course;
    }

    public Student getStudent() {

        return student;
    }

    public Course getCourse() {

        return course;
    }

    public void display() {

        System.out.println(
                student.getName() +
                " enrolled in " +
                course.getCourseName()
        );
    }
}`}</code>
            </pre>
          </div>
          <h4 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span>NotificationService.java</span>
          </h4>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`package university.notifications;

public interface NotificationService {

    void sendNotification(
            String recipient,
            String message
    );
}`}</code>
            </pre>
          </div>
          <h4 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span>ConsoleNotification.java</span>
          </h4>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`package university.notifications;

public class ConsoleNotification
        implements NotificationService {

    @Override
    public void sendNotification(
            String recipient,
            String message
    ) {

        System.out.println(
                "Notification to " +
                recipient +
                ": " +
                message
        );
    }
}`}</code>
            </pre>
          </div>
          <h4 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span>Main.java</span>
          </h4>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`package university.app;

import university.people.Student;
import university.people.Instructor;

import university.courses.Course;
import university.courses.Enrollment;

import university.notifications.NotificationService;
import university.notifications.ConsoleNotification;

public class Main {

    public static void main(String[] args) {

        Student student = new Student(
                "S101",
                "Alex",
                "alex@example.com",
                "Computer Science"
        );

        Instructor instructor = new Instructor(
                "I101",
                "Dr. Smith",
                "smith@example.com",
                "Java Programming"
        );

        Course course = new Course(
                "CS101",
                "Java Programming",
                instructor
        );

        Enrollment enrollment =
                new Enrollment(student, course);

        enrollment.display();

        NotificationService notification =
                new ConsoleNotification();

        notification.sendNotification(
                student.getEmail(),
                "Your enrollment is confirmed"
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
              <code>{`Alex enrolled in Java Programming

Notification to alex@example.com:
Your enrollment is confirmed`}</code>
            </pre>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>Concepts demonstrated</span>
          </h3>
          <div className="overflow-x-auto my-4 rounded-xl border border-[#e7e3da] shadow-2xs">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-stone-900 border-b border-[#e7e3da] font-semibold">
                <tr>
                  <th className="px-4 py-3">Concept</th>
                  <th className="px-4 py-3">Implementation</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Abstract class</td>
                  <td className="px-4 py-2.5 text-stone-700">Person</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Inheritance</td>
                  <td className="px-4 py-2.5 text-stone-700">Student and Instructor</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Constructor chaining</td>
                  <td className="px-4 py-2.5 text-stone-700"><code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">super()</code></td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Encapsulation</td>
                  <td className="px-4 py-2.5 text-stone-700">Private fields</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Method overriding</td>
                  <td className="px-4 py-2.5 text-stone-700"><code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">getRole()</code></td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Composition and association modeling</td>
                  <td className="px-4 py-2.5 text-stone-700">Enrollment and Course relationships</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Interface</td>
                  <td className="px-4 py-2.5 text-stone-700">NotificationService</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Polymorphism</td>
                  <td className="px-4 py-2.5 text-stone-700">NotificationService reference</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Packages</td>
                  <td className="px-4 py-2.5 text-stone-700">university.people, courses, notifications, app</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Object relationships</td>
                  <td className="px-4 py-2.5 text-stone-700">Student, Course, Instructor, Enrollment</td>
                </tr>
              </tbody>
            </table>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>Project extension tasks</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            After completing the basic application:
          </p>
          <ol className="list-decimal pl-5 space-y-2 text-stone-700 text-sm sm:text-base my-3 leading-relaxed">
            <li>Add a registration service.</li>
            <li>Prevent duplicate student enrollment.</li>
            <li>Introduce course capacity.</li>
            <li>Add course prerequisites.</li>
            <li>Implement different enrollment statuses.</li>
            <li>Create a second notification implementation.</li>
            <li>Introduce a payment interface for course fees.</li>
            <li>Add student and instructor dashboards.</li>
            <li>Add exception handling.</li>
            <li>Implement unit tests.</li>
            <li>Redraw the UML diagram after design improvements.</li>
            <li>Evaluate the design against all five SOLID principles.</li>
          </ol>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-stone-900">Important:</strong> The code is a teaching foundation. A production-ready application would also need persistent storage, identity management, stronger validation, concurrency handling, and proper service-layer boundaries.
          </p>
          <hr className="border-[#e7e3da] my-6" />
        </div>
      </section>

      {/* SECTION 27: 27. Recommended Learning Resources */}
      <section id="section-27" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider font-mono">
            References · Curated Resources
          </span>
          <span className="text-xs font-mono text-stone-500">Section 27</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          27. Recommended Learning Resources
        </h2>
        <div className="space-y-4 text-stone-700 leading-relaxed text-sm sm:text-base">
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Students should use official documentation and software engineering references.
          </p>
          <ol className="list-decimal pl-5 space-y-2 text-stone-700 text-sm sm:text-base my-3 leading-relaxed">
            <li><strong className="font-semibold text-stone-900">Dev.java — Object-Oriented Programming</strong></li>
          </ol>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            <a href="https://dev.java/learn/language/oop/" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 font-medium underline inline-flex items-center gap-0.5">https://dev.java/learn/language/oop/</a>
          </p>
          <ol className="list-decimal pl-5 space-y-2 text-stone-700 text-sm sm:text-base my-3 leading-relaxed">
            <li><strong className="font-semibold text-stone-900">Dev.java — Classes and Objects</strong></li>
          </ol>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            <a href="https://dev.java/learn/classes-objects/" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 font-medium underline inline-flex items-center gap-0.5">https://dev.java/learn/classes-objects/</a>
          </p>
          <ol className="list-decimal pl-5 space-y-2 text-stone-700 text-sm sm:text-base my-3 leading-relaxed">
            <li><strong className="font-semibold text-stone-900">Dev.java — Inheritance</strong></li>
          </ol>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            <a href="https://dev.java/learn/inheritance/" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 font-medium underline inline-flex items-center gap-0.5">https://dev.java/learn/inheritance/</a>
          </p>
          <ol className="list-decimal pl-5 space-y-2 text-stone-700 text-sm sm:text-base my-3 leading-relaxed">
            <li><strong className="font-semibold text-stone-900">Dev.java — Interfaces</strong></li>
          </ol>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            <a href="https://dev.java/learn/interfaces/" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 font-medium underline inline-flex items-center gap-0.5">https://dev.java/learn/interfaces/</a>
          </p>
          <ol className="list-decimal pl-5 space-y-2 text-stone-700 text-sm sm:text-base my-3 leading-relaxed">
            <li><strong className="font-semibold text-stone-900">Dev.java — Packages</strong></li>
          </ol>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            <a href="https://dev.java/learn/packages/" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 font-medium underline inline-flex items-center gap-0.5">https://dev.java/learn/packages/</a>
          </p>
          <ol className="list-decimal pl-5 space-y-2 text-stone-700 text-sm sm:text-base my-3 leading-relaxed">
            <li><strong className="font-semibold text-stone-900">Java Language Specification</strong></li>
          </ol>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            <a href="https://docs.oracle.com/javase/specs/jls/se17/html/" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 font-medium underline inline-flex items-center gap-0.5">https://docs.oracle.com/javase/specs/jls/se17/html/</a>
          </p>
          <ol className="list-decimal pl-5 space-y-2 text-stone-700 text-sm sm:text-base my-3 leading-relaxed">
            <li><strong className="font-semibold text-stone-900">Java API Documentation</strong></li>
          </ol>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            <a href="https://docs.oracle.com/en/java/javase/17/docs/api/" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 font-medium underline inline-flex items-center gap-0.5">https://docs.oracle.com/en/java/javase/17/docs/api/</a>
          </p>
          <ol className="list-decimal pl-5 space-y-2 text-stone-700 text-sm sm:text-base my-3 leading-relaxed">
            <li><strong className="font-semibold text-stone-900">SOLID Principles — University of Padua Software Engineering Material</strong></li>
          </ol>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            <a href="https://www.math.unipd.it/~rcardin/swea/2021/SOLID%20Principles%20of%20Object-Oriented%20Design_4x4.pdf" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 font-medium underline inline-flex items-center gap-0.5">https://www.math.unipd.it/~rcardin/swea/2021/SOLID%20Principles%20of%20Object-Oriented%20Design_4x4.pdf</a>
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Students should prioritize designing small class structures and implementing them rather than merely memorizing OOP definitions.
          </p>
          <hr className="border-[#e7e3da] my-6" />
        </div>
      </section>

      {/* SECTION 28: 28. Module Revision Sheet */}
      <section id="section-28" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider font-mono">
            Review · Module Revision Sheet
          </span>
          <span className="text-xs font-mono text-stone-500">Section 28</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          28. Module Revision Sheet
        </h2>
        <div className="space-y-4 text-stone-700 leading-relaxed text-sm sm:text-base">
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>Important definitions</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-stone-900">Object-Oriented Programming:</strong> A programming paradigm that organizes software around objects containing state and behavior.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-stone-900">Class:</strong> A user-defined reference type that defines the structure and behavior of its instances.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-stone-900">Object:</strong> A runtime instance of a class.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-stone-900">Constructor:</strong> A special declaration used to initialize a new instance.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-stone-900">Constructor overloading:</strong> Defining multiple constructors with different parameter lists.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-stone-900">this:</strong> A reference to the current object instance.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-stone-900">super:</strong> A keyword used to access superclass members and invoke superclass constructors.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-stone-900">Encapsulation:</strong> Combining state and related behavior while controlling access to internal implementation.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-stone-900">Inheritance:</strong> A mechanism that allows a subclass to derive from a superclass.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-stone-900">Method overriding:</strong> Providing a specialized implementation of an inherited instance method.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-stone-900">Polymorphism:</strong> Using a common type or contract with different possible implementations.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-stone-900">Abstraction:</strong> Exposing essential functionality while hiding unnecessary implementation details.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-stone-900">Abstract class:</strong> A class that cannot be instantiated directly and may contain abstract and concrete members.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-stone-900">Interface:</strong> A reference type that defines a contract and may contain abstract, default, static, and private methods.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-stone-900">Static member:</strong> A member associated with a class rather than an individual instance.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-stone-900">Final:</strong> A modifier that restricts reassignment, overriding, or inheritance depending on its use.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-stone-900">Access modifier:</strong> A modifier that controls the visibility of classes and members.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-stone-900">Package:</strong> A namespace used to organize related Java types.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-stone-900">Composition:</strong> A HAS-A relationship in which an object owns or contains other objects.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-stone-900">Association:</strong> A relationship between objects that interact with one another.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-stone-900">Aggregation:</strong> A weaker whole-part relationship in which components can exist independently.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-stone-900">UML:</strong> Unified Modeling Language, used to visualize and document software designs.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-stone-900">SOLID:</strong> Five foundational principles for designing maintainable object-oriented software.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>Essential Java syntax</span>
          </h3>
          <h4 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span>Class declaration</span>
          </h4>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`class Student {

    String name;

    void display() {

        System.out.println(name);
    }
}`}</code>
            </pre>
          </div>
          <h4 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span>Object creation</span>
          </h4>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Student student = new Student();`}</code>
            </pre>
          </div>
          <h4 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span>Constructor</span>
          </h4>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Student(String name) {

    this.name = name;
}`}</code>
            </pre>
          </div>
          <h4 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span>Constructor chaining</span>
          </h4>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Student() {

    this("Unknown");
}`}</code>
            </pre>
          </div>
          <h4 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span>Inheritance</span>
          </h4>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`class Student extends Person {
}`}</code>
            </pre>
          </div>
          <h4 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span>Method overriding</span>
          </h4>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`@Override
void display() {

    System.out.println("Student");
}`}</code>
            </pre>
          </div>
          <h4 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span>Encapsulation</span>
          </h4>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`private String name;

public String getName() {

    return name;
}`}</code>
            </pre>
          </div>
          <h4 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span>Abstract class</span>
          </h4>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`abstract class Shape {

    abstract double calculateArea();
}`}</code>
            </pre>
          </div>
          <h4 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span>Interface</span>
          </h4>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`interface Printable {

    void print();
}`}</code>
            </pre>
          </div>
          <h4 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span>Interface implementation</span>
          </h4>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`class Document implements Printable {

    public void print() {

        System.out.println("Printing");
    }
}`}</code>
            </pre>
          </div>
          <h4 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span>Static member</span>
          </h4>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`static int count = 0;`}</code>
            </pre>
          </div>
          <h4 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span>Final constant</span>
          </h4>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public static final int MAX_USERS = 100;`}</code>
            </pre>
          </div>
          <h4 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span>Package</span>
          </h4>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`package com.application.students;`}</code>
            </pre>
          </div>
          <hr className="border-[#e7e3da] my-6" />
        </div>
      </section>

      {/* SECTION 29: 29. Module Completion Criteria */}
      <section id="section-29" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider font-mono">
            Milestone · Completion Checklist
          </span>
          <span className="text-xs font-mono text-stone-500">Section 29</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          29. Module Completion Criteria
        </h2>
        <div className="space-y-4 text-stone-700 leading-relaxed text-sm sm:text-base">
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Students should complete the following checklist before progressing.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>OOP fundamentals</span>
          </h3>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm sm:text-base">
            <span className="w-4 h-4 mt-0.5 rounded border border-stone-300 flex items-center justify-center bg-stone-50 text-transparent">
              ✓
            </span>
            <span>Explain object-oriented programming.</span>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm sm:text-base">
            <span className="w-4 h-4 mt-0.5 rounded border border-stone-300 flex items-center justify-center bg-stone-50 text-transparent">
              ✓
            </span>
            <span>Differentiate procedural programming and OOP.</span>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm sm:text-base">
            <span className="w-4 h-4 mt-0.5 rounded border border-stone-300 flex items-center justify-center bg-stone-50 text-transparent">
              ✓
            </span>
            <span>Understand the four OOP principles.</span>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm sm:text-base">
            <span className="w-4 h-4 mt-0.5 rounded border border-stone-300 flex items-center justify-center bg-stone-50 text-transparent">
              ✓
            </span>
            <span>Design Java classes.</span>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm sm:text-base">
            <span className="w-4 h-4 mt-0.5 rounded border border-stone-300 flex items-center justify-center bg-stone-50 text-transparent">
              ✓
            </span>
            <span>Create multiple objects.</span>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm sm:text-base">
            <span className="w-4 h-4 mt-0.5 rounded border border-stone-300 flex items-center justify-center bg-stone-50 text-transparent">
              ✓
            </span>
            <span>Understand object state and behavior.</span>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm sm:text-base">
            <span className="w-4 h-4 mt-0.5 rounded border border-stone-300 flex items-center justify-center bg-stone-50 text-transparent">
              ✓
            </span>
            <span>Explain object references and null references.</span>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>Constructors and keywords</span>
          </h3>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm sm:text-base">
            <span className="w-4 h-4 mt-0.5 rounded border border-stone-300 flex items-center justify-center bg-stone-50 text-transparent">
              ✓
            </span>
            <span>Implement constructors.</span>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm sm:text-base">
            <span className="w-4 h-4 mt-0.5 rounded border border-stone-300 flex items-center justify-center bg-stone-50 text-transparent">
              ✓
            </span>
            <span>Understand implicit default constructors.</span>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm sm:text-base">
            <span className="w-4 h-4 mt-0.5 rounded border border-stone-300 flex items-center justify-center bg-stone-50 text-transparent">
              ✓
            </span>
            <span>Implement parameterized constructors.</span>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm sm:text-base">
            <span className="w-4 h-4 mt-0.5 rounded border border-stone-300 flex items-center justify-center bg-stone-50 text-transparent">
              ✓
            </span>
            <span>Apply constructor overloading.</span>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm sm:text-base">
            <span className="w-4 h-4 mt-0.5 rounded border border-stone-300 flex items-center justify-center bg-stone-50 text-transparent">
              ✓
            </span>
            <span>Understand constructor chaining.</span>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm sm:text-base">
            <span className="w-4 h-4 mt-0.5 rounded border border-stone-300 flex items-center justify-center bg-stone-50 text-transparent">
              ✓
            </span>
            <span>Use <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">this</code> correctly.</span>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm sm:text-base">
            <span className="w-4 h-4 mt-0.5 rounded border border-stone-300 flex items-center justify-center bg-stone-50 text-transparent">
              ✓
            </span>
            <span>Use <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">super</code> correctly.</span>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm sm:text-base">
            <span className="w-4 h-4 mt-0.5 rounded border border-stone-300 flex items-center justify-center bg-stone-50 text-transparent">
              ✓
            </span>
            <span>Explain constructor execution order.</span>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>Encapsulation and inheritance</span>
          </h3>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm sm:text-base">
            <span className="w-4 h-4 mt-0.5 rounded border border-stone-300 flex items-center justify-center bg-stone-50 text-transparent">
              ✓
            </span>
            <span>Apply private fields and public methods.</span>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm sm:text-base">
            <span className="w-4 h-4 mt-0.5 rounded border border-stone-300 flex items-center justify-center bg-stone-50 text-transparent">
              ✓
            </span>
            <span>Implement getters and setters where appropriate.</span>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm sm:text-base">
            <span className="w-4 h-4 mt-0.5 rounded border border-stone-300 flex items-center justify-center bg-stone-50 text-transparent">
              ✓
            </span>
            <span>Enforce object invariants.</span>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm sm:text-base">
            <span className="w-4 h-4 mt-0.5 rounded border border-stone-300 flex items-center justify-center bg-stone-50 text-transparent">
              ✓
            </span>
            <span>Understand single inheritance.</span>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm sm:text-base">
            <span className="w-4 h-4 mt-0.5 rounded border border-stone-300 flex items-center justify-center bg-stone-50 text-transparent">
              ✓
            </span>
            <span>Understand multilevel inheritance.</span>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm sm:text-base">
            <span className="w-4 h-4 mt-0.5 rounded border border-stone-300 flex items-center justify-center bg-stone-50 text-transparent">
              ✓
            </span>
            <span>Understand hierarchical inheritance.</span>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm sm:text-base">
            <span className="w-4 h-4 mt-0.5 rounded border border-stone-300 flex items-center justify-center bg-stone-50 text-transparent">
              ✓
            </span>
            <span>Explain why Java does not support multiple class inheritance.</span>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm sm:text-base">
            <span className="w-4 h-4 mt-0.5 rounded border border-stone-300 flex items-center justify-center bg-stone-50 text-transparent">
              ✓
            </span>
            <span>Implement method overriding.</span>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm sm:text-base">
            <span className="w-4 h-4 mt-0.5 rounded border border-stone-300 flex items-center justify-center bg-stone-50 text-transparent">
              ✓
            </span>
            <span>Understand runtime polymorphism.</span>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm sm:text-base">
            <span className="w-4 h-4 mt-0.5 rounded border border-stone-300 flex items-center justify-center bg-stone-50 text-transparent">
              ✓
            </span>
            <span>Distinguish overriding and overloading.</span>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>Abstraction and interfaces</span>
          </h3>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm sm:text-base">
            <span className="w-4 h-4 mt-0.5 rounded border border-stone-300 flex items-center justify-center bg-stone-50 text-transparent">
              ✓
            </span>
            <span>Create abstract classes.</span>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm sm:text-base">
            <span className="w-4 h-4 mt-0.5 rounded border border-stone-300 flex items-center justify-center bg-stone-50 text-transparent">
              ✓
            </span>
            <span>Implement abstract methods.</span>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm sm:text-base">
            <span className="w-4 h-4 mt-0.5 rounded border border-stone-300 flex items-center justify-center bg-stone-50 text-transparent">
              ✓
            </span>
            <span>Implement interfaces.</span>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm sm:text-base">
            <span className="w-4 h-4 mt-0.5 rounded border border-stone-300 flex items-center justify-center bg-stone-50 text-transparent">
              ✓
            </span>
            <span>Understand default and static interface methods.</span>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm sm:text-base">
            <span className="w-4 h-4 mt-0.5 rounded border border-stone-300 flex items-center justify-center bg-stone-50 text-transparent">
              ✓
            </span>
            <span>Understand private interface methods.</span>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm sm:text-base">
            <span className="w-4 h-4 mt-0.5 rounded border border-stone-300 flex items-center justify-center bg-stone-50 text-transparent">
              ✓
            </span>
            <span>Implement multiple interfaces.</span>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm sm:text-base">
            <span className="w-4 h-4 mt-0.5 rounded border border-stone-300 flex items-center justify-center bg-stone-50 text-transparent">
              ✓
            </span>
            <span>Resolve default method conflicts.</span>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm sm:text-base">
            <span className="w-4 h-4 mt-0.5 rounded border border-stone-300 flex items-center justify-center bg-stone-50 text-transparent">
              ✓
            </span>
            <span>Compare abstract classes and interfaces.</span>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>Java language organization</span>
          </h3>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm sm:text-base">
            <span className="w-4 h-4 mt-0.5 rounded border border-stone-300 flex items-center justify-center bg-stone-50 text-transparent">
              ✓
            </span>
            <span>Understand static members.</span>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm sm:text-base">
            <span className="w-4 h-4 mt-0.5 rounded border border-stone-300 flex items-center justify-center bg-stone-50 text-transparent">
              ✓
            </span>
            <span>Apply the final keyword.</span>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm sm:text-base">
            <span className="w-4 h-4 mt-0.5 rounded border border-stone-300 flex items-center justify-center bg-stone-50 text-transparent">
              ✓
            </span>
            <span>Use access modifiers correctly.</span>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm sm:text-base">
            <span className="w-4 h-4 mt-0.5 rounded border border-stone-300 flex items-center justify-center bg-stone-50 text-transparent">
              ✓
            </span>
            <span>Create Java packages.</span>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm sm:text-base">
            <span className="w-4 h-4 mt-0.5 rounded border border-stone-300 flex items-center justify-center bg-stone-50 text-transparent">
              ✓
            </span>
            <span>Import classes from other packages.</span>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm sm:text-base">
            <span className="w-4 h-4 mt-0.5 rounded border border-stone-300 flex items-center justify-center bg-stone-50 text-transparent">
              ✓
            </span>
            <span>Compile and execute package-based applications.</span>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>Design and architecture</span>
          </h3>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm sm:text-base">
            <span className="w-4 h-4 mt-0.5 rounded border border-stone-300 flex items-center justify-center bg-stone-50 text-transparent">
              ✓
            </span>
            <span>Understand composition and inheritance.</span>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm sm:text-base">
            <span className="w-4 h-4 mt-0.5 rounded border border-stone-300 flex items-center justify-center bg-stone-50 text-transparent">
              ✓
            </span>
            <span>Model association, aggregation, and composition.</span>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm sm:text-base">
            <span className="w-4 h-4 mt-0.5 rounded border border-stone-300 flex items-center justify-center bg-stone-50 text-transparent">
              ✓
            </span>
            <span>Understand dependency relationships.</span>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm sm:text-base">
            <span className="w-4 h-4 mt-0.5 rounded border border-stone-300 flex items-center justify-center bg-stone-50 text-transparent">
              ✓
            </span>
            <span>Draw UML class diagrams.</span>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm sm:text-base">
            <span className="w-4 h-4 mt-0.5 rounded border border-stone-300 flex items-center justify-center bg-stone-50 text-transparent">
              ✓
            </span>
            <span>Understand UML visibility and multiplicity.</span>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm sm:text-base">
            <span className="w-4 h-4 mt-0.5 rounded border border-stone-300 flex items-center justify-center bg-stone-50 text-transparent">
              ✓
            </span>
            <span>Explain and apply the five SOLID principles.</span>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm sm:text-base">
            <span className="w-4 h-4 mt-0.5 rounded border border-stone-300 flex items-center justify-center bg-stone-50 text-transparent">
              ✓
            </span>
            <span>Design a modular application.</span>
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
            <span>Attempt the eight programming assignments.</span>
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
            <span>Build the University Course Registration System.</span>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm sm:text-base">
            <span className="w-4 h-4 mt-0.5 rounded border border-stone-300 flex items-center justify-center bg-stone-50 text-transparent">
              ✓
            </span>
            <span>Explain the role of every class.</span>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm sm:text-base">
            <span className="w-4 h-4 mt-0.5 rounded border border-stone-300 flex items-center justify-center bg-stone-50 text-transparent">
              ✓
            </span>
            <span>Draw the project's UML class diagram.</span>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm sm:text-base">
            <span className="w-4 h-4 mt-0.5 rounded border border-stone-300 flex items-center justify-center bg-stone-50 text-transparent">
              ✓
            </span>
            <span>Identify where encapsulation, inheritance, and polymorphism are used.</span>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm sm:text-base">
            <span className="w-4 h-4 mt-0.5 rounded border border-stone-300 flex items-center justify-center bg-stone-50 text-transparent">
              ✓
            </span>
            <span>Evaluate the application against SOLID principles.</span>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>Final Expected Capability</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            By the end of Module 4, students should be able to move from basic procedural Java programs toward designing object-oriented applications.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            They should understand how to model application entities as classes, create objects with valid initial state, protect data through encapsulation, reuse appropriate behavior through inheritance, support different implementations using polymorphism, and establish abstractions through interfaces and abstract classes.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            They should also be able to organize source code using packages, describe object relationships through UML, and recognize design problems using SOLID principles.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-stone-900">The essential learning outcome is the ability to design a small, modular Java application before writing its implementation.</strong>
          </p>
          <hr className="border-[#e7e3da] my-6" />
        </div>
      </section>

      {/* SECTION 30: 30. Phase 1 — Java Foundations Milestone & Transition to DSA */}
      <section id="section-30" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider font-mono">
            Milestone · Phase 1 Capstone
          </span>
          <span className="text-xs font-mono text-stone-500">Section 30</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          30. Phase 1 — Java Foundations Milestone & Transition to DSA
        </h2>
        <div className="space-y-4 text-stone-700 leading-relaxed text-sm sm:text-base">
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            With Modules 1–4 completed, students will have covered the fundamental Java programming foundation.
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
                  <td className="px-4 py-2.5 text-stone-700">Introduction to Java</td>
                  <td className="px-4 py-2.5 text-stone-700">Understand programming and write basic Java programs</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Module 2</td>
                  <td className="px-4 py-2.5 text-stone-700">Control Flow, Methods &amp; Problem-Solving</td>
                  <td className="px-4 py-2.5 text-stone-700">Develop logic, loops, methods, and recursion</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Module 3</td>
                  <td className="px-4 py-2.5 text-stone-700">Arrays, Strings &amp; Mathematical Programming</td>
                  <td className="px-4 py-2.5 text-stone-700">Process collections, text, numbers, and matrices</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Module 4</td>
                  <td className="px-4 py-2.5 text-stone-700">Object-Oriented Programming</td>
                  <td className="px-4 py-2.5 text-stone-700">Design classes, objects, and modular applications</td>
                </tr>
              </tbody>
            </table>
          </div>
          <h4 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span>Phase 1 exit-level capabilities</span>
          </h4>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Students should now be able to:
          </p>
          <ol className="list-decimal pl-5 space-y-2 text-stone-700 text-sm sm:text-base my-3 leading-relaxed">
            <li>Write, compile, execute, and debug Java programs.</li>
            <li>Analyze a problem and develop an algorithm.</li>
            <li>Use conditions and loops to control execution.</li>
            <li>Build reusable methods.</li>
            <li>Implement basic recursive solutions.</li>
            <li>Process arrays and Strings.</li>
            <li>Implement fundamental mathematical algorithms.</li>
            <li>Perform basic matrix operations.</li>
            <li>Understand references and object behavior.</li>
            <li>Design classes using OOP principles.</li>
            <li>Apply inheritance, polymorphism, and abstraction.</li>
            <li>Organize code using interfaces and packages.</li>
            <li>Create UML class diagrams.</li>
            <li>Apply the introductory SOLID principles.</li>
            <li>Build small modular Java applications independently.</li>
          </ol>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>Next Phase — Data Structures &amp; Algorithms</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            <strong className="font-semibold text-stone-900">The natural next step is to transition from Java Programming Foundations into Data Structures and Algorithms.</strong>
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            Students should now be prepared to study:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-stone-700 text-sm sm:text-base my-3 leading-relaxed">
            <li>Algorithm analysis and asymptotic complexity.</li>
            <li>Arrays and advanced array techniques.</li>
            <li>Searching and sorting algorithms.</li>
            <li>Linked lists.</li>
            <li>Stacks and queues.</li>
            <li>Hashing and hash tables.</li>
            <li>Recursion and backtracking.</li>
            <li>Trees and binary search trees.</li>
            <li>Heaps and priority queues.</li>
            <li>Graphs and graph traversal.</li>
            <li>Greedy algorithms.</li>
            <li>Dynamic programming.</li>
          </ul>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            The important distinction is that Phase 1 teaches students how to write and organize Java programs, while the DSA phase teaches them how to select and implement efficient computational solutions to increasingly complex problems.
          </p>
        </div>
      </section>

    </div>
  );
}
