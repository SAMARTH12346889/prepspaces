import React from "react";

// MODULE 11: HASHING & HASH-BASED DATA STRUCTURES — COMPLETE CURRICULUM SECTIONS
// Automatically generated with 100% text fidelity to original curriculum text.

export const JAVA_HASHING_SECTIONS = [
  {
    id: "overview",
    number: "0",
    title: "Module 11: Curriculum Overview & Advanced Foundations",
    category: "Course Roadmap · Objectives",
    content: (
      <div className="space-y-4 text-stone-800 leading-relaxed font-sans">
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Java + DSA
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Advanced Foundations
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Module 11
          </p>
      </div>
    )
  },
  {
    id: "intro-hashing",
    number: "1",
    title: "1. Introduction to Hashing",
    category: "Part 1 · Hashing Foundations",
    content: (
      <div className="space-y-4 text-stone-800 leading-relaxed font-sans">
          <h4 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
            <span>1.1 What is Hashing?</span>
          </h4>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Hashing is a technique used to store, retrieve, and manage data efficiently by converting a given key into an index using a mathematical function called a hash function.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            The main purpose of hashing is to make searching, insertion, and deletion extremely fast.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Consider an array:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`int[] numbers =  {
  10, 20, 30, 40, 50
};`}</code>
            </pre>
          </div>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            If you want to find whether 40 exists, you may need to check elements one by one.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            This is called linear search.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Time complexity:
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Best case: \(O(1)\)
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Average case: \(O(n)\)
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Worst case: \(O(n)\)
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            But what if you have one million records and want to find a particular student using their ID?
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Searching one by one is inefficient.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Hashing solves this problem by calculating where the data should be stored.
          </p>
          <h4 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
            <span>1.2 Real-world example</span>
          </h4>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Imagine a university database containing:
          </p>
          <div className="overflow-x-auto my-4 rounded-xl border border-[#e7e3da] shadow-2xs">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-stone-900 border-b border-[#e7e3da] font-semibold">
                <tr>
                  <th className="px-4 py-3">Student ID</th>
                  <th className="px-4 py-3">Student Name</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">101</td>
                  <td className="px-4 py-2.5 text-stone-700">Rahul</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">102</td>
                  <td className="px-4 py-2.5 text-stone-700">Priya</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">103</td>
                  <td className="px-4 py-2.5 text-stone-700">Aman</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">104</td>
                  <td className="px-4 py-2.5 text-stone-700">Neha</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Suppose you want to find the student with ID 103.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Instead of checking every student, a hash function calculates an index from the ID.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            For example:
          </p>
          <div className="my-4 p-4 rounded-xl bg-orange-50/60 border border-orange-200/60 text-center font-mono text-sm sm:text-base text-stone-900 shadow-2xs overflow-x-auto">
            <span className="text-orange-700 font-bold mr-2">EQUATION:</span>
            <code>h(key)=key \bmod 10</code>
          </div>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            For student ID 103:
          </p>
          <div className="my-4 p-4 rounded-xl bg-orange-50/60 border border-orange-200/60 text-center font-mono text-sm sm:text-base text-stone-900 shadow-2xs overflow-x-auto">
            <span className="text-orange-700 font-bold mr-2">EQUATION:</span>
            <code>h(103)=103\bmod 10=3</code>
          </div>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            The student can be stored at index 3.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            When you search for ID 103, the same calculation takes you directly to the expected location.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            <a href="https://images.openai.com/static-rsc-4/KeZwnSNQHRFVj2ZAOgVIXCPfJiUwlA20yknD0r7pDep0HspjzevwdTWABu-RXAJBAFNM-iG_qmCbELqQHL6ZiQMCZQKuSaz6_ndMsRojuC6tdvq1tPofV-pcHFi9airrdRmdF_06t_0Mwul8QN8vvvmElKtlbfEsVrzFXKNH7HY?purpose=inline" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 font-medium underline inline-flex items-center gap-0.5">Data Structures, Algorithms | Python | QuickStart</a>
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            <a href="https://www.quickstart.com/blog/data-science/data-structures-and-algorithms-all-analysts-need-to-know/?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 font-medium underline inline-flex items-center gap-0.5">quickstart.com</a>
          </p>
          <h4 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
            <span>1.3 Why do we need hashing?</span>
          </h4>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Hashing is useful when you need:
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Fast searching.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Fast insertion.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Fast deletion.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Duplicate detection.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Frequency counting.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Efficient key-value storage.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Fast lookup in databases and applications.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Examples of real-world applications:
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Username and password lookup systems.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Caching systems.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Database indexing.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Compiler symbol tables.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Dictionaries and maps.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Duplicate file detection.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            URL routing and session management.
          </p>
          <h4 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
            <span>1.4 Time complexity of hashing</span>
          </h4>
          <div className="overflow-x-auto my-4 rounded-xl border border-[#e7e3da] shadow-2xs">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-stone-900 border-b border-[#e7e3da] font-semibold">
                <tr>
                  <th className="px-4 py-3">Operation</th>
                  <th className="px-4 py-3">Average</th>
                  <th className="px-4 py-3">Worst case</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Search</td>
                  <td className="px-4 py-2.5 text-stone-700">\(O(1)\)</td>
                  <td className="px-4 py-2.5 text-stone-700">\(O(n)\)</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Insert</td>
                  <td className="px-4 py-2.5 text-stone-700">\(O(1)\)</td>
                  <td className="px-4 py-2.5 text-stone-700">\(O(n)\)</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Delete</td>
                  <td className="px-4 py-2.5 text-stone-700">\(O(1)\)</td>
                  <td className="px-4 py-2.5 text-stone-700">\(O(n)\)</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="p-4 rounded-xl border bg-orange-500/10 border-orange-500/30 text-orange-950 my-4 text-xs sm:text-sm leading-relaxed">
            <div className="font-bold flex items-center gap-1.5 mb-1 text-stone-900">
              <span>💡</span>
              <span>Important</span>
            </div>
            <p className="text-stone-700">Hashing does not guarantee \(O(1)\) in every situation. Collisions and poor hash functions can make operations slower.</p>
          </div>
      </div>
    )
  },
  {
    id: "hash-functions",
    number: "2",
    title: "2. Hash Functions & Uniform Distribution",
    category: "Part 2 · Hash Functions",
    content: (
      <div className="space-y-4 text-stone-800 leading-relaxed font-sans">
          <h4 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
            <span>2.1 What is a hash function?</span>
          </h4>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            A hash function is a mathematical function that converts a key into an integer value, which is then used to determine the storage location in a hash table.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Mathematically:
          </p>
          <div className="my-4 p-4 rounded-xl bg-orange-50/60 border border-orange-200/60 text-center font-mono text-sm sm:text-base text-stone-900 shadow-2xs overflow-x-auto">
            <span className="text-orange-700 font-bold mr-2">EQUATION:</span>
            <code>h(key)=index</code>
          </div>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            For example:
          </p>
          <div className="my-4 p-4 rounded-xl bg-orange-50/60 border border-orange-200/60 text-center font-mono text-sm sm:text-base text-stone-900 shadow-2xs overflow-x-auto">
            <span className="text-orange-700 font-bold mr-2">EQUATION:</span>
            <code>h(key)=key\bmod 10</code>
          </div>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Suppose we have these keys:
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            12, 25, 37, 41, 53
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Using the hash function:
          </p>
          <div className="my-4 p-4 rounded-xl bg-orange-50/60 border border-orange-200/60 text-center font-mono text-sm sm:text-base text-stone-900 shadow-2xs overflow-x-auto">
            <span className="text-orange-700 font-bold mr-2">EQUATION:</span>
            <code>h(key)=key\bmod 10</code>
          </div>
          <div className="overflow-x-auto my-4 rounded-xl border border-[#e7e3da] shadow-2xs">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-stone-900 border-b border-[#e7e3da] font-semibold">
                <tr>
                  <th className="px-4 py-3">Key</th>
                  <th className="px-4 py-3">Calculation</th>
                  <th className="px-4 py-3">Index</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">12</td>
                  <td className="px-4 py-2.5 text-stone-700">12 % 10</td>
                  <td className="px-4 py-2.5 text-stone-700">2</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">25</td>
                  <td className="px-4 py-2.5 text-stone-700">25 % 10</td>
                  <td className="px-4 py-2.5 text-stone-700">5</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">37</td>
                  <td className="px-4 py-2.5 text-stone-700">37 % 10</td>
                  <td className="px-4 py-2.5 text-stone-700">7</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">41</td>
                  <td className="px-4 py-2.5 text-stone-700">41 % 10</td>
                  <td className="px-4 py-2.5 text-stone-700">1</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">53</td>
                  <td className="px-4 py-2.5 text-stone-700">53 % 10</td>
                  <td className="px-4 py-2.5 text-stone-700">3</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            The resulting indices are:
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Index: 0 1 2 3 4 5 6 7 8 9 Value: - 41 12 53 - 25 - 37 - -
          </p>
          <h4 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
            <span>2.2 Characteristics of a good hash function</span>
          </h4>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            A good hash function should have the following properties:
          </p>
          <h3 className="text-xl sm:text-2xl font-bold text-stone-900 mt-8 mb-3 tracking-tight border-b border-[#e7e3da] pb-2">
            1. Deterministic
          </h3>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            The same key should produce the same hash value under the same hash-function configuration.
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`hash(25) = 5 hash(25) = 5 hash(25) = 5`}</code>
            </pre>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-stone-900 mt-8 mb-3 tracking-tight border-b border-[#e7e3da] pb-2">
            2. Uniform distribution
          </h3>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Keys should be distributed across the table rather than concentrated in a few positions.
          </p>
          <h3 className="text-xl sm:text-2xl font-bold text-stone-900 mt-8 mb-3 tracking-tight border-b border-[#e7e3da] pb-2">
            3. Fast computation
          </h3>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Calculating a hash should not require excessive processing time.
          </p>
          <h3 className="text-xl sm:text-2xl font-bold text-stone-900 mt-8 mb-3 tracking-tight border-b border-[#e7e3da] pb-2">
            4. Low collision probability
          </h3>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Different keys should ideally produce different table indices as often as possible.
          </p>
          <h3 className="text-xl sm:text-2xl font-bold text-stone-900 mt-8 mb-3 tracking-tight border-b border-[#e7e3da] pb-2">
            5. Consistency with equality
          </h3>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            If two keys are equal according to their equality rules, they must produce the same hash code.
          </p>
          <h4 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
            <span>2.3 Hashing strings</span>
          </h4>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Hash functions can work with more than integers.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Consider:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`String name = "Java";`}</code>
            </pre>
          </div>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            A string consists of characters, and each character has a numerical representation.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Java provides:
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            name.hashCode();
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            For example:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public class Main  {
  public static void main(String[] args)  {
    String name = "Java";
    System.out.println(name.hashCode());

  }

}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Java calculates a hash code using a polynomial-style formula.
          </p>
          <div className="my-4 p-4 rounded-xl bg-orange-50/60 border border-orange-200/60 text-center font-mono text-sm sm:text-base text-stone-900 shadow-2xs overflow-x-auto">
            <span className="text-orange-700 font-bold mr-2">EQUATION:</span>
            <code>hash(s)=s_0\times31^&#123;n-1&#125;+ s_1\times31^&#123;n-2&#125;+\cdots+s_&#123;n-1&#125;</code>
          </div>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Here:
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            \(s_i\) represents a character's numerical value.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            31 is the multiplier used by Java's String hash calculation.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            \(n\) is the string length.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Important distinction: hashCode() produces an integer hash code, not necessarily the final array index. A hash table performs additional processing to obtain a valid bucket location.
          </p>
      </div>
    )
  },
  {
    id: "hash-tables",
    number: "3",
    title: "3. Hash Tables & Basic Implementation",
    category: "Part 3 · Hash Tables",
    content: (
      <div className="space-y-4 text-stone-800 leading-relaxed font-sans">
          <h4 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
            <span>3.1 What is a hash table?</span>
          </h4>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            A hash table is a data structure that stores information in an array-like structure and uses a hash function to determine where each element should be placed.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            It generally stores data in key-value pairs.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Example:
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Key Value 101 Rahul 102 Priya 103 Aman 104 Neha
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            A hash table uses the key to calculate the storage location.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            <a href="https://images.openai.com/static-rsc-4/GXHAFQxvBDCLis2ey0x4V1vH0W8WDTB_6VuPQWzkqA_ZOvTg2EmyuoGwrRzyjRwYWOnZ_EXikqfhqQ3FjkLmlGQNM3Ax65vWNJt42NVpc-3VlvjScX7AxsIg1z4GV07A975RgNHS32yRiCfMrJZGBPY5KB81l8gQAcnnmo3z0qQ?purpose=inline" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 font-medium underline inline-flex items-center gap-0.5">A Beginner’s Guide to Data Structure and Algorithm (DSA)</a>
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            <a href="https://www.bosscoderacademy.com/blog/beginners-guide-to-data-structures-and-algorithms?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 font-medium underline inline-flex items-center gap-0.5">bosscoderacademy.com</a>
          </p>
          <h4 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
            <span>3.2 How does a hash table work?</span>
          </h4>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            There are three major operations.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Insertion
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Receive a key.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Calculate its hash.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Determine the bucket index.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Store the key-value pair.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Searching
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Receive the key.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Calculate its hash.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Locate the corresponding bucket.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Check the key stored there.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Return the associated value.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Deletion
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Receive the key.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Calculate its hash.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Locate the bucket.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Find the matching key.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Remove it using the collision-handling strategy.
          </p>
          <h4 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
            <span>3.3 Implementing a basic hash table in Java</span>
          </h4>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Let's create a simplified hash table using an integer array.
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`class SimpleHashTable  {
  private int[] table;
  private int size;
  SimpleHashTable(int size)  {
    this.size = size;
    table = new int[size];
    java.util.Arrays.fill(table, -1);

  }
  private int hash(int key)  {
    return Math.floorMod(key, size);

  }
  void insert(int key)  {
    int index = hash(key);
    table[index] = key;

  }
  boolean search(int key)  {
    int index = hash(key);
    return table[index] == key;

  }
  void display()  {
    for (int i = 0; i < size; i++)  {
      System.out.println(i + " -> " + table[i]);

    }

  }

}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Usage:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public class Main  {
  public static void main(String[] args)  {
    SimpleHashTable ht = new SimpleHashTable(10);
    ht.insert(12);
    ht.insert(25);
    ht.insert(37);
    ht.display();
    System.out.println(ht.search(25));

  }

}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            This implementation demonstrates hashing but does not handle collisions. Inserting two keys that map to the same index can overwrite existing data.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            We need collision-handling techniques to build a reliable hash table.
          </p>
      </div>
    )
  },
  {
    id: "hash-collisions",
    number: "4",
    title: "4. Hash Collisions & Resolution Strategies",
    category: "Part 4 · Collisions",
    content: (
      <div className="space-y-4 text-stone-800 leading-relaxed font-sans">
          <h4 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
            <span>4.1 What is a collision?</span>
          </h4>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            A collision occurs when two or more different keys produce the same hash-table index.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Suppose:
          </p>
          <div className="my-4 p-4 rounded-xl bg-orange-50/60 border border-orange-200/60 text-center font-mono text-sm sm:text-base text-stone-900 shadow-2xs overflow-x-auto">
            <span className="text-orange-700 font-bold mr-2">EQUATION:</span>
            <code>h(key)=key\bmod10</code>
          </div>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Now consider:
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            12 % 10 = 2 22 % 10 = 2 32 % 10 = 2
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            All three keys want to occupy index 2.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            This is called a hash collision.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            <a href="https://images.openai.com/static-rsc-4/wBJrTU37DJ20pB5YaQiHNLE_IqZeC-a77QhvQ7K2P1GzWwG_G8CjsOxuVO6N6pzPEoz3QVwj6Slu1VITyNGnpXeFSFw2NP31mYO2J2QZVLMQulCSJnzRdCHDHZieD6FCcL2Xyfwt4xuwJIxwzPwKIe4KvQoLO5N_lgb7j5pXKWU?purpose=inline" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 font-medium underline inline-flex items-center gap-0.5">Data Structure and Algorithms IN C: Intro | by PrimerPy | Medium</a>
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            <a href="https://primerpy.medium.com/data-structure-and-algorithms-in-c-intro-53d191de685b?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 font-medium underline inline-flex items-center gap-0.5">primerpy.medium.com</a>
          </p>
          <h4 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
            <span>4.2 Why do collisions happen?</span>
          </h4>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Collisions are unavoidable in a finite hash table when the possible key space is larger than the number of available buckets.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            For example:
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Possible integer keys: billions.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Available buckets: 100.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Many different keys must share bucket indices.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            A collision does not necessarily mean that the hash function is bad. Even a good hash function can produce collisions.
          </p>
          <h4 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
            <span>4.3 Collision-handling techniques</span>
          </h4>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            The two major approaches are:
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Separate chaining.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Open addressing.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Other open-addressing techniques include:
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Linear probing.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Quadratic probing.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Double hashing.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            We will examine each in detail.
          </p>
      </div>
    )
  },
  {
    id: "separate-chaining",
    number: "5",
    title: "5. Separate Chaining with Linked Lists",
    category: "Part 5 · Separate Chaining",
    content: (
      <div className="space-y-4 text-stone-800 leading-relaxed font-sans">
          <h4 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
            <span>5.1 What is separate chaining?</span>
          </h4>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Separate chaining is a collision-handling technique in which each bucket stores a collection of elements instead of storing only one element.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Usually, each bucket contains a linked list or another collection.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Suppose the hash function is:
          </p>
          <div className="my-4 p-4 rounded-xl bg-orange-50/60 border border-orange-200/60 text-center font-mono text-sm sm:text-base text-stone-900 shadow-2xs overflow-x-auto">
            <span className="text-orange-700 font-bold mr-2">EQUATION:</span>
            <code>h(key)=key\bmod 10</code>
          </div>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Insert:
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            12, 22, 32, 15, 25
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            The resulting structure is:
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Index 0: null Index 1: null Index 2: 12 -&gt; 22 -&gt; 32 Index 3: null Index 4: null Index 5: 15 -&gt; 25 Index 6: null Index 7: null Index 8: null Index 9: null
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            <a href="https://images.openai.com/static-rsc-4/TzfHOIlcwRgF_ZdDA8_btGSCoxA-jQNr96kR9qOZHhYIZvZxnVjTZq-R8yej7vl9Ejj4_Nkk_JvKh9j44BvDjvx9NfLL19jU0EUHzPgZL-DlvpJ6DlpVNILoDSOWf5JvAAZLmK_pw9_AvgeNaM5F0X8nQZxqjhhMB-7sh-E2CVE?purpose=inline" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 font-medium underline inline-flex items-center gap-0.5">Hashing - HackMD</a>
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            <a href="https://hackmd.io/%40SukanyaPai/Hashing?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 font-medium underline inline-flex items-center gap-0.5">hackmd.io</a>
          </p>
          <h4 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
            <span>5.2 How insertion works</span>
          </h4>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            To insert 32:
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Calculate 32 % 10.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Result is index 2.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Go to bucket 2.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            A linked list already exists.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Add 32 to that bucket's collection.
          </p>
          <h4 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
            <span>5.3 How searching works</span>
          </h4>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            To search for 22:
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Calculate 22 % 10 = 2.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Go to bucket 2.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Traverse the linked list.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Compare each element.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Find 22.
          </p>
          <h4 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
            <span>5.4 Java implementation</span>
          </h4>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`import java.util.LinkedList;
class HashTable  {
  private LinkedList<Integer>[] table;
  private int size;
  @SuppressWarnings("unchecked") HashTable(int size)  {
    this.size = size;
    table = new LinkedList[size];
    for (int i = 0; i < size; i++)  {
      table[i] = new LinkedList<>();

    }

  }
  private int hash(int key)  {
    return Math.floorMod(key, size);

  }
  void insert(int key)  {
    int index = hash(key);
    if (!table[index].contains(key))  {
      table[index].add(key);

    }

  }
  boolean search(int key)  {
    int index = hash(key);
    return table[index].contains(key);

  }
  void delete(int key)  {
    int index = hash(key);
    table[index].remove(Integer.valueOf(key));

  }

}`}</code>
            </pre>
          </div>
          <h4 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
            <span>5.5 Complexity</span>
          </h4>
          <div className="overflow-x-auto my-4 rounded-xl border border-[#e7e3da] shadow-2xs">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-stone-900 border-b border-[#e7e3da] font-semibold">
                <tr>
                  <th className="px-4 py-3">Operation</th>
                  <th className="px-4 py-3">Average</th>
                  <th className="px-4 py-3">Worst case</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Insert</td>
                  <td className="px-4 py-2.5 text-stone-700">\(O(1)\)</td>
                  <td className="px-4 py-2.5 text-stone-700">\(O(n)\)</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Search</td>
                  <td className="px-4 py-2.5 text-stone-700">\(O(1)\)</td>
                  <td className="px-4 py-2.5 text-stone-700">\(O(n)\)</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Delete</td>
                  <td className="px-4 py-2.5 text-stone-700">\(O(1)\)</td>
                  <td className="px-4 py-2.5 text-stone-700">\(O(n)\)</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            The average performance depends on a reasonably uniform distribution and a controlled load factor.
          </p>
          <h4 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
            <span>5.6 Advantages and disadvantages</span>
          </h4>
          <div className="p-4 rounded-xl border bg-orange-500/10 border-orange-500/30 text-orange-950 my-4 text-xs sm:text-sm leading-relaxed">
            <div className="font-bold flex items-center gap-1.5 mb-1 text-stone-900">
              <span>ℹ️</span>
              <span>Advantages</span>
            </div>
            <p className="text-stone-700"></p>
          </div>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Simple to implement.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Handles multiple collisions naturally.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Deletion is relatively easy.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            The table can store more elements than its number of buckets.
          </p>
          <div className="p-4 rounded-xl border bg-amber-500/10 border-amber-500/30 text-amber-950 my-4 text-xs sm:text-sm leading-relaxed">
            <div className="font-bold flex items-center gap-1.5 mb-1 text-stone-900">
              <span>⚠️</span>
              <span>Disadvantages</span>
            </div>
            <p className="text-stone-700"></p>
          </div>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Additional memory for linked-list nodes.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Pointer traversal can be slower.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Poor hash functions can create long chains.
          </p>
          <div className="p-4 rounded-xl border bg-orange-500/10 border-orange-500/30 text-orange-950 my-4 text-xs sm:text-sm leading-relaxed">
            <div className="font-bold flex items-center gap-1.5 mb-1 text-stone-900">
              <span>💡</span>
              <span>Interview insight</span>
            </div>
            <p className="text-stone-700">Separate chaining is a common theoretical model for explaining collision resolution and is also relevant to understanding hash-based collections.</p>
          </div>
      </div>
    )
  },
  {
    id: "open-addressing",
    number: "6",
    title: "6. Open Addressing Fundamentals",
    category: "Part 6 · Open Addressing",
    content: (
      <div className="space-y-4 text-stone-800 leading-relaxed font-sans">
          <h4 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
            <span>6.1 What is open addressing?</span>
          </h4>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Open addressing is a collision-resolution technique in which all elements are stored directly inside the hash table's array.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Unlike separate chaining, it does not use linked lists to store colliding elements.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            When a collision occurs, the algorithm searches for another available position in the array.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            For example:
          </p>
          <div className="my-4 p-4 rounded-xl bg-orange-50/60 border border-orange-200/60 text-center font-mono text-sm sm:text-base text-stone-900 shadow-2xs overflow-x-auto">
            <span className="text-orange-700 font-bold mr-2">EQUATION:</span>
            <code>h(key)=key\bmod 10</code>
          </div>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Insert:
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            12, 22, 32
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            All three keys initially map to index 2.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            If index 2 is occupied, the algorithm searches for another available index.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            One possible arrangement:
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Index: 0 1 2 3 4 5 6 7 8 9 Value: - - 12 22 32 - - - - -
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            <a href="https://images.openai.com/static-rsc-4/1Jreznr3N4JnjcDPt_zZA4-iSJM5uMmZrzke62k2zRmhOsoTjjJZXX_Bwe4uZYAm6RLbIxRr9SkF7u0-tECSo22WDQ_ELFMSSNMYq8dtAEUfYsAzGDjshG5s9y4FVNHkSpAwzcbRYqZ5NsPYihF4XNuKWXrNgwWb5mCASIRVNd4?purpose=inline" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 font-medium underline inline-flex items-center gap-0.5">PPT - Skip List &amp;amp; Hashing PowerPoint Presentation, free download - ID:371591</a>
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            <a href="https://www.slideserve.com/burke/skip-list-hashing?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 font-medium underline inline-flex items-center gap-0.5">slideserve.com</a>
          </p>
          <h4 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
            <span>6.2 How does open addressing work?</span>
          </h4>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            When inserting an element:
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Calculate the initial hash index.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Check whether the position is empty.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            If empty, insert the element.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            If occupied, calculate another position using a probing technique.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Continue until an available position is found.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            The three important probing techniques are:
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Linear probing.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Quadratic probing.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Double hashing.
          </p>
      </div>
    )
  },
  {
    id: "linear-probing",
    number: "7",
    title: "7. Linear Probing & Primary Clustering",
    category: "Part 7 · Linear Probing",
    content: (
      <div className="space-y-4 text-stone-800 leading-relaxed font-sans">
          <h4 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
            <span>7.1 What is linear probing?</span>
          </h4>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Linear probing is a collision-resolution technique that checks the next consecutive position whenever a collision occurs.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Its formula is:
          </p>
          <div className="my-4 p-4 rounded-xl bg-orange-50/60 border border-orange-200/60 text-center font-mono text-sm sm:text-base text-stone-900 shadow-2xs overflow-x-auto">
            <span className="text-orange-700 font-bold mr-2">EQUATION:</span>
            <code>h_i(key)=(h(key)+i)\bmod m</code>
          </div>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Where:
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            \(h(key)\) = original hash index.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            \(i\) = number of attempts.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            \(m\) = hash table capacity.
          </p>
          <h4 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
            <span>7.2 Example</span>
          </h4>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Suppose:
          </p>
          <div className="my-4 p-4 rounded-xl bg-orange-50/60 border border-orange-200/60 text-center font-mono text-sm sm:text-base text-stone-900 shadow-2xs overflow-x-auto">
            <span className="text-orange-700 font-bold mr-2">EQUATION:</span>
            <code>h(key)=key\bmod 10</code>
          </div>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Insert:
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            12, 22, 32, 42
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Insertion of 12
          </p>
          <div className="my-4 p-4 rounded-xl bg-orange-50/60 border border-orange-200/60 text-center font-mono text-sm sm:text-base text-stone-900 shadow-2xs overflow-x-auto">
            <span className="text-orange-700 font-bold mr-2">EQUATION:</span>
            <code>12\bmod10=2</code>
          </div>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Index 2 is empty.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Store 12.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Insertion of 22
          </p>
          <div className="my-4 p-4 rounded-xl bg-orange-50/60 border border-orange-200/60 text-center font-mono text-sm sm:text-base text-stone-900 shadow-2xs overflow-x-auto">
            <span className="text-orange-700 font-bold mr-2">EQUATION:</span>
            <code>22\bmod10=2</code>
          </div>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Index 2 is occupied.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Check the next position: index 3.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Store 22 at index 3.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Insertion of 32
          </p>
          <div className="my-4 p-4 rounded-xl bg-orange-50/60 border border-orange-200/60 text-center font-mono text-sm sm:text-base text-stone-900 shadow-2xs overflow-x-auto">
            <span className="text-orange-700 font-bold mr-2">EQUATION:</span>
            <code>32\bmod10=2</code>
          </div>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Index 2: occupied.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Index 3: occupied.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Index 4: empty.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Store 32 at index 4.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Insertion of 42
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Index 2: occupied.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Index 3: occupied.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Index 4: occupied.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Index 5: empty.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Store 42 at index 5.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Final table:
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Index: 0 1 2 3 4 5 6 7 8 9 Value: - - 12 22 32 42 - - - -
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            <a href="https://images.openai.com/static-rsc-4/ANR3fQq7KGwMBT1y6DPKH_ZFROoFbQ3K-gljdRmqH5AVN-ce7KvlKgRfhke7j6GayAnNaEwpSU2_9w7b0ddkfhq1uSdhz1BvN1rnDTb55KnpIPa0srijCYcE-5nr7YHQkSk7SDkUgmTUWYJSxOl1Jh5khOi_gRYypU8t5n80Ktk?purpose=inline" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 font-medium underline inline-flex items-center gap-0.5">Learn Hash Table | Advanced Data Structures</a>
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            <a href="https://codefinity.com/courses/v2/212d3d3e-af15-4df9-bb13-5cbbb8114954/3a2558c0-2edb-4b98-a8d6-88b105cbcdda/415ad333-2a20-4b93-aa79-32beac2339bd?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 font-medium underline inline-flex items-center gap-0.5">codefinity.com</a>
          </p>
          <h4 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
            <span>7.3 Primary clustering</span>
          </h4>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            One major disadvantage of linear probing is primary clustering.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Primary clustering occurs when consecutive occupied positions form long groups.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            For example:
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Index 2: 12 Index 3: 22 Index 4: 32 Index 5: 42 Index 6: 52 Index 7: 62
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            When more keys are inserted, they may encounter this large occupied region.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            This increases the number of probes required.
          </p>
          <h4 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
            <span>7.4 Java implementation</span>
          </h4>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`class LinearProbingHashTable  {
  private int[] table;
  private int capacity;
  LinearProbingHashTable(int capacity)  {
    this.capacity = capacity;
    table = new int[capacity];
    java.util.Arrays.fill(table, -1);

  }
  private int hash(int key)  {
    return Math.floorMod(key, capacity);

  }
  void insert(int key)  {
    int index = hash(key);
    for (int i = 0; i < capacity; i++)  {
      int position = (index + i) % capacity;
      if (table[position] == -1)  {
        table[position] = key;
        return;

      }
      if (table[position] == key)  {
        return;

      }

    }
    System.out.println("Hash table is full");

  }
  boolean search(int key)  {
    int index = hash(key);
    for (int i = 0; i < capacity; i++)  {
      int position = (index + i) % capacity;
      if (table[position] == -1)  {
        return false;

      }
      if (table[position] == key)  {
        return true;

      }

    }
    return false;

  }

}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            This is a simplified implementation. The -1 empty marker assumes -1 cannot be a valid key. Deletion requires special handling using a deleted marker, called a tombstone.
          </p>
          <h4 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
            <span>7.5 Complexity</span>
          </h4>
          <div className="overflow-x-auto my-4 rounded-xl border border-[#e7e3da] shadow-2xs">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-stone-900 border-b border-[#e7e3da] font-semibold">
                <tr>
                  <th className="px-4 py-3">Operation</th>
                  <th className="px-4 py-3">Average</th>
                  <th className="px-4 py-3">Worst case</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Search</td>
                  <td className="px-4 py-2.5 text-stone-700">\(O(1)\)</td>
                  <td className="px-4 py-2.5 text-stone-700">\(O(n)\)</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Insert</td>
                  <td className="px-4 py-2.5 text-stone-700">\(O(1)\)</td>
                  <td className="px-4 py-2.5 text-stone-700">\(O(n)\)</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Delete</td>
                  <td className="px-4 py-2.5 text-stone-700">\(O(1)\)</td>
                  <td className="px-4 py-2.5 text-stone-700">\(O(n)\)</td>
                </tr>
              </tbody>
            </table>
          </div>
      </div>
    )
  },
  {
    id: "quadratic-probing",
    number: "8",
    title: "8. Quadratic Probing & Secondary Clustering",
    category: "Part 8 · Quadratic Probing",
    content: (
      <div className="space-y-4 text-stone-800 leading-relaxed font-sans">
          <h4 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
            <span>8.1 What is quadratic probing?</span>
          </h4>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Quadratic probing is another open-addressing technique.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Instead of checking consecutive positions, it uses a quadratic function to calculate the next position.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Formula:
          </p>
          <div className="my-4 p-4 rounded-xl bg-orange-50/60 border border-orange-200/60 text-center font-mono text-sm sm:text-base text-stone-900 shadow-2xs overflow-x-auto">
            <span className="text-orange-700 font-bold mr-2">EQUATION:</span>
            <code>h_i(key)=(h(key)+c_1i+c_2i^2)\bmod m</code>
          </div>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            A commonly used simplified version is:
          </p>
          <div className="my-4 p-4 rounded-xl bg-orange-50/60 border border-orange-200/60 text-center font-mono text-sm sm:text-base text-stone-900 shadow-2xs overflow-x-auto">
            <span className="text-orange-700 font-bold mr-2">EQUATION:</span>
            <code>h_i(key)=(h(key)+i^2)\bmod m</code>
          </div>
          <h4 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
            <span>8.2 Example</span>
          </h4>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Assume:
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Table size = 11.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Hash function = key % 11.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Insert keys = 22, 33, 44, 55.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            All keys initially map to index 0.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            For 22:
          </p>
          <div className="my-4 p-4 rounded-xl bg-orange-50/60 border border-orange-200/60 text-center font-mono text-sm sm:text-base text-stone-900 shadow-2xs overflow-x-auto">
            <span className="text-orange-700 font-bold mr-2">EQUATION:</span>
            <code>22\bmod11=0</code>
          </div>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Store at index 0.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            For 33:
          </p>
          <div className="my-4 p-4 rounded-xl bg-orange-50/60 border border-orange-200/60 text-center font-mono text-sm sm:text-base text-stone-900 shadow-2xs overflow-x-auto">
            <span className="text-orange-700 font-bold mr-2">EQUATION:</span>
            <code>33\bmod11=0</code>
          </div>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Collision at index 0.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Try:
          </p>
          <div className="my-4 p-4 rounded-xl bg-orange-50/60 border border-orange-200/60 text-center font-mono text-sm sm:text-base text-stone-900 shadow-2xs overflow-x-auto">
            <span className="text-orange-700 font-bold mr-2">EQUATION:</span>
            <code>(0+1^2)\bmod11=1</code>
          </div>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Store at index 1.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            For 44:
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Index 0: occupied.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Index 1: occupied.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Try:
          </p>
          <div className="my-4 p-4 rounded-xl bg-orange-50/60 border border-orange-200/60 text-center font-mono text-sm sm:text-base text-stone-900 shadow-2xs overflow-x-auto">
            <span className="text-orange-700 font-bold mr-2">EQUATION:</span>
            <code>(0+2^2)\bmod11=4</code>
          </div>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Store at index 4.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            For 55:
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Index 0: occupied.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Index 1: occupied.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Index 4: occupied.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Try:
          </p>
          <div className="my-4 p-4 rounded-xl bg-orange-50/60 border border-orange-200/60 text-center font-mono text-sm sm:text-base text-stone-900 shadow-2xs overflow-x-auto">
            <span className="text-orange-700 font-bold mr-2">EQUATION:</span>
            <code>(0+3^2)\bmod11=9</code>
          </div>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Store at index 9.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Final arrangement:
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Index 0 -&gt; 22 Index 1 -&gt; 33 Index 4 -&gt; 44 Index 9 -&gt; 55
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            <a href="https://images.openai.com/static-rsc-4/ehOQcBS-pVnuy4nG_3lBtvgKmB1pg9FOxizf7qK7af42y-5Hz1_OGJpqrVJDZJJO3RjVhIT2Zayf1CjYe76ome8eo4YxlmqhP9_AISg6jdDz0O09gDCTiKpNDrGKbWs60AJ9De0yzWcMyLSH9J7L68c0ugqvEA4rIgZfhBkMud8?purpose=inline" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 font-medium underline inline-flex items-center gap-0.5">Learn Hash Table | Advanced Data Structures</a>
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            <a href="https://codefinity.com/courses/v2/212d3d3e-af15-4df9-bb13-5cbbb8114954/3a2558c0-2edb-4b98-a8d6-88b105cbcdda/415ad333-2a20-4b93-aa79-32beac2339bd?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 font-medium underline inline-flex items-center gap-0.5">codefinity.com</a>
          </p>
          <h4 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
            <span>8.3 Advantages</span>
          </h4>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Reduces primary clustering.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Spreads colliding keys farther apart.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Can perform better than linear probing under suitable conditions.
          </p>
          <h4 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
            <span>8.4 Disadvantages</span>
          </h4>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Secondary clustering can still occur.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Some table positions may never be visited.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Table capacity and probing constants must be selected carefully.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Secondary clustering: Keys with the same initial hash value follow the same probing sequence.
          </p>
          <h4 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
            <span>8.5 Linear vs quadratic probing</span>
          </h4>
          <div className="overflow-x-auto my-4 rounded-xl border border-[#e7e3da] shadow-2xs">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-stone-900 border-b border-[#e7e3da] font-semibold">
                <tr>
                  <th className="px-4 py-3">Feature</th>
                  <th className="px-4 py-3">Linear probing</th>
                  <th className="px-4 py-3">Quadratic probing</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Next position</td>
                  <td className="px-4 py-2.5 text-stone-700">Consecutive</td>
                  <td className="px-4 py-2.5 text-stone-700">Quadratic offset</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Primary clustering</td>
                  <td className="px-4 py-2.5 text-stone-700">High</td>
                  <td className="px-4 py-2.5 text-stone-700">Reduced</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Secondary clustering</td>
                  <td className="px-4 py-2.5 text-stone-700">Yes</td>
                  <td className="px-4 py-2.5 text-stone-700">Yes</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Implementation</td>
                  <td className="px-4 py-2.5 text-stone-700">Simple</td>
                  <td className="px-4 py-2.5 text-stone-700">More complex</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Distribution</td>
                  <td className="px-4 py-2.5 text-stone-700">Less spread</td>
                  <td className="px-4 py-2.5 text-stone-700">Better spread in suitable configurations</td>
                </tr>
              </tbody>
            </table>
          </div>
      </div>
    )
  },
  {
    id: "double-hashing",
    number: "9",
    title: "9. Double Hashing & Prime Capacities",
    category: "Part 9 · Double Hashing",
    content: (
      <div className="space-y-4 text-stone-800 leading-relaxed font-sans">
          <h4 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
            <span>9.1 What is double hashing?</span>
          </h4>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Double hashing uses two different hash functions to determine the probing sequence.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            The first hash function calculates the initial index.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            The second hash function calculates the step size between attempts.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Formula:
          </p>
          <div className="my-4 p-4 rounded-xl bg-orange-50/60 border border-orange-200/60 text-center font-mono text-sm sm:text-base text-stone-900 shadow-2xs overflow-x-auto">
            <span className="text-orange-700 font-bold mr-2">EQUATION:</span>
            <code>h_i(key)=(h_1(key)+i\times h_2(key))\bmod m</code>
          </div>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Where:
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            \(h_1(key)\) = first hash function.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            \(h_2(key)\) = second hash function.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            \(i\) = probing attempt.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            \(m\) = table capacity.
          </p>
          <h4 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
            <span>9.2 Example</span>
          </h4>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Assume:
          </p>
          <div className="my-4 p-4 rounded-xl bg-orange-50/60 border border-orange-200/60 text-center font-mono text-sm sm:text-base text-stone-900 shadow-2xs overflow-x-auto">
            <span className="text-orange-700 font-bold mr-2">EQUATION:</span>
            <code>m=11</code>
          </div>
          <div className="my-4 p-4 rounded-xl bg-orange-50/60 border border-orange-200/60 text-center font-mono text-sm sm:text-base text-stone-900 shadow-2xs overflow-x-auto">
            <span className="text-orange-700 font-bold mr-2">EQUATION:</span>
            <code>h_1(key)=key\bmod11</code>
          </div>
          <div className="my-4 p-4 rounded-xl bg-orange-50/60 border border-orange-200/60 text-center font-mono text-sm sm:text-base text-stone-900 shadow-2xs overflow-x-auto">
            <span className="text-orange-700 font-bold mr-2">EQUATION:</span>
            <code>h_2(key)=7-(key\bmod7)</code>
          </div>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Insert key 22.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            First hash:
          </p>
          <div className="my-4 p-4 rounded-xl bg-orange-50/60 border border-orange-200/60 text-center font-mono text-sm sm:text-base text-stone-900 shadow-2xs overflow-x-auto">
            <span className="text-orange-700 font-bold mr-2">EQUATION:</span>
            <code>h_1(22)=22\bmod11=0</code>
          </div>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Second hash:
          </p>
          <div className="my-4 p-4 rounded-xl bg-orange-50/60 border border-orange-200/60 text-center font-mono text-sm sm:text-base text-stone-900 shadow-2xs overflow-x-auto">
            <span className="text-orange-700 font-bold mr-2">EQUATION:</span>
            <code>h_2(22)=7-(22\bmod7)</code>
          </div>
          <div className="my-4 p-4 rounded-xl bg-orange-50/60 border border-orange-200/60 text-center font-mono text-sm sm:text-base text-stone-900 shadow-2xs overflow-x-auto">
            <span className="text-orange-700 font-bold mr-2">EQUATION:</span>
            <code>=7-1=6</code>
          </div>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            The first position is:
          </p>
          <div className="my-4 p-4 rounded-xl bg-orange-50/60 border border-orange-200/60 text-center font-mono text-sm sm:text-base text-stone-900 shadow-2xs overflow-x-auto">
            <span className="text-orange-700 font-bold mr-2">EQUATION:</span>
            <code>(0+0\times6)\bmod11=0</code>
          </div>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Suppose index 0 is occupied.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Next position:
          </p>
          <div className="my-4 p-4 rounded-xl bg-orange-50/60 border border-orange-200/60 text-center font-mono text-sm sm:text-base text-stone-900 shadow-2xs overflow-x-auto">
            <span className="text-orange-700 font-bold mr-2">EQUATION:</span>
            <code>(0+1\times6)\bmod11=6</code>
          </div>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            If index 6 is also occupied:
          </p>
          <div className="my-4 p-4 rounded-xl bg-orange-50/60 border border-orange-200/60 text-center font-mono text-sm sm:text-base text-stone-900 shadow-2xs overflow-x-auto">
            <span className="text-orange-700 font-bold mr-2">EQUATION:</span>
            <code>(0+2\times6)\bmod11=1</code>
          </div>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            The sequence becomes:
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            0 -&gt; 6 -&gt; 1 -&gt; 7 -&gt; 2 -&gt; 8 ...
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            This creates a more varied probing sequence.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            <a href="https://images.openai.com/static-rsc-4/RuvwcFr1fqjfZ5NzUYawUI05yRQN45DPlRyrxD-Uph_5YV7suflVH8B6KmNBrEpCZ4bDUzreplrTTu7C2bM4Zh_JYamEzF73J7LGlOuaZxKXPqN4oKtkehbNWn2WhtopBOqYg7GX-nU1ZTlpTD2mQPYGevtMSGXvk455Zjbyb8Q?purpose=inline" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 font-medium underline inline-flex items-center gap-0.5">Hashing | PPTX</a>
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            <a href="https://www.slideshare.net/slideshow/hashing-109089980/109089980?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 font-medium underline inline-flex items-center gap-0.5">slideshare.net</a>
          </p>
          <h4 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
            <span>9.3 Advantages</span>
          </h4>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Reduces primary clustering.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Reduces secondary clustering.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Often produces better distribution than linear and quadratic probing.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Different keys can follow different probing sequences.
          </p>
          <h4 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
            <span>9.4 Disadvantages</span>
          </h4>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            More computational work.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Requires two well-designed hash functions.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Poor choices of table size and second hash function can prevent some slots from being visited.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            For a table of prime capacity, a suitable nonzero step size less than the capacity can ensure that every position is eventually reachable.
          </p>
          <h4 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
            <span>9.5 Comparison of probing techniques</span>
          </h4>
          <div className="overflow-x-auto my-4 rounded-xl border border-[#e7e3da] shadow-2xs">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-stone-900 border-b border-[#e7e3da] font-semibold">
                <tr>
                  <th className="px-4 py-3">Technique</th>
                  <th className="px-4 py-3">Formula</th>
                  <th className="px-4 py-3">Main issue</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Linear</td>
                  <td className="px-4 py-2.5 text-stone-700">\(h(k)+i\)</td>
                  <td className="px-4 py-2.5 text-stone-700">Primary clustering</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Quadratic</td>
                  <td className="px-4 py-2.5 text-stone-700">\(h(k)+i^2\)</td>
                  <td className="px-4 py-2.5 text-stone-700">Secondary clustering</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Double hashing</td>
                  <td className="px-4 py-2.5 text-stone-700">\(h_1(k)+i h_2(k)\)</td>
                  <td className="px-4 py-2.5 text-stone-700">More complex</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="p-4 rounded-xl border bg-orange-500/10 border-orange-500/30 text-orange-950 my-4 text-xs sm:text-sm leading-relaxed">
            <div className="font-bold flex items-center gap-1.5 mb-1 text-stone-900">
              <span>💡</span>
              <span>Interview question</span>
            </div>
            <p className="text-stone-700">Which open-addressing technique generally gives better distribution?</p>
          </div>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Double hashing often provides better distribution because the step size depends on the key.
          </p>
      </div>
    )
  },
  {
    id: "load-factor",
    number: "10",
    title: "10. Load Factor & Growth Trade-Offs",
    category: "Part 10 · Load Factor",
    content: (
      <div className="space-y-4 text-stone-800 leading-relaxed font-sans">
          <h4 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
            <span>10.1 What is load factor?</span>
          </h4>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Load factor measures how full a hash table is.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            It tells us how many elements are stored relative to the number of available buckets.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Formula:
          </p>
          <div className="my-4 p-4 rounded-xl bg-orange-50/60 border border-orange-200/60 text-center font-mono text-sm sm:text-base text-stone-900 shadow-2xs overflow-x-auto">
            <span className="text-orange-700 font-bold mr-2">EQUATION:</span>
            <code>\alpha=\frac&#123;n&#125;&#123;m&#125;</code>
          </div>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Where:
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            \(n\) = number of stored elements.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            \(m\) = number of buckets.
          </p>
          <h4 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
            <span>10.2 Example</span>
          </h4>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Suppose:
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Total buckets = 10 Stored elements = 7
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Then:
          </p>
          <div className="my-4 p-4 rounded-xl bg-orange-50/60 border border-orange-200/60 text-center font-mono text-sm sm:text-base text-stone-900 shadow-2xs overflow-x-auto">
            <span className="text-orange-700 font-bold mr-2">EQUATION:</span>
            <code>\alpha=\frac&#123;7&#125;&#123;10&#125;=0.7</code>
          </div>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            The load factor is 0.7, or 70%.
          </p>
          <h4 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
            <span>10.3 Why is load factor important?</span>
          </h4>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            As a hash table becomes fuller, collisions generally become more frequent.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            A high load factor can cause:
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Longer collision chains in separate chaining.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            More probing in open addressing.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Slower searching.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Slower insertion.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            A low load factor generally means more unused memory but fewer collisions.
          </p>
          <h4 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
            <span>10.4 Load factor in Java HashMap</span>
          </h4>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Java's default HashMap configuration uses:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`HashMap<String, Integer> map = new HashMap<>();`}</code>
            </pre>
          </div>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Important default values:
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Initial capacity = 16 Load factor = 0.75
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            When the number of entries exceeds the threshold, resizing is triggered.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Initially:
          </p>
          <div className="my-4 p-4 rounded-xl bg-orange-50/60 border border-orange-200/60 text-center font-mono text-sm sm:text-base text-stone-900 shadow-2xs overflow-x-auto">
            <span className="text-orange-700 font-bold mr-2">EQUATION:</span>
            <code>threshold=16\times0.75=12</code>
          </div>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            After the 13th insertion, the map normally grows from capacity 16 to capacity 32, assuming the normal default configuration and no other special circumstances.
          </p>
          <h4 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
            <span>10.5 Load factor trade-off</span>
          </h4>
          <div className="overflow-x-auto my-4 rounded-xl border border-[#e7e3da] shadow-2xs">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-stone-900 border-b border-[#e7e3da] font-semibold">
                <tr>
                  <th className="px-4 py-3">Load factor</th>
                  <th className="px-4 py-3">Effect</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Very low</td>
                  <td className="px-4 py-2.5 text-stone-700">More memory usage, fewer collisions</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Moderate</td>
                  <td className="px-4 py-2.5 text-stone-700">Balance between memory and performance</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Very high</td>
                  <td className="px-4 py-2.5 text-stone-700">More collisions and potentially slower operations</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="p-4 rounded-xl border bg-orange-500/10 border-orange-500/30 text-orange-950 my-4 text-xs sm:text-sm leading-relaxed">
            <div className="font-bold flex items-center gap-1.5 mb-1 text-stone-900">
              <span>💡</span>
              <span>Important</span>
            </div>
            <p className="text-stone-700">A load factor of 0.75 is a configuration choice, not a universal mathematical optimum for every hash-table implementation.</p>
          </div>
      </div>
    )
  },
  {
    id: "rehashing",
    number: "11",
    title: "11. Rehashing & Geometric Capacity Expansion",
    category: "Part 11 · Rehashing",
    content: (
      <div className="space-y-4 text-stone-800 leading-relaxed font-sans">
          <h4 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
            <span>11.1 What is rehashing?</span>
          </h4>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Rehashing is the process of increasing the capacity of a hash table and redistributing its existing entries into the new table.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Why is this necessary?
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Suppose a hash table has:
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Capacity = 4 Load factor = 0.75
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Its threshold is:
          </p>
          <div className="my-4 p-4 rounded-xl bg-orange-50/60 border border-orange-200/60 text-center font-mono text-sm sm:text-base text-stone-900 shadow-2xs overflow-x-auto">
            <span className="text-orange-700 font-bold mr-2">EQUATION:</span>
            <code>4\times0.75=3</code>
          </div>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            When the number of elements exceeds the threshold, the table needs to grow.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            A typical resizing operation doubles the capacity:
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Old capacity = 4 New capacity = 8
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            <a href="https://images.openai.com/static-rsc-4/mcRPj0Flkqy5XknZRjibarhdYfocWPvlbblcVU7bxqdpgJm3dOIdPj0_QF79InmmX0G-hF_Y5iekBXsqMDLK4gNIAZpvGnCCH2xlfgl8kM0F0r9JjHQwk4QqlrI8bdzZLLX2cfLcPNxek5K-ZZFE4Oif_XPWR6C0FCmASIIc39c?purpose=inline" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 font-medium underline inline-flex items-center gap-0.5">What is Hash and Hash Table · Maratom's Study Blog</a>
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            <a href="https://hyosup0513.github.io/data%20structure/2020/06/22/What-is-Hash-and-Hash-Table.html?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 font-medium underline inline-flex items-center gap-0.5">hyosup0513.github.io</a>
          </p>
          <h4 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
            <span>11.2 How rehashing works</span>
          </h4>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Create a larger array.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Visit all existing entries.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Recalculate their positions using the new capacity.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Insert them into the new table.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Replace the old table with the new one.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Consider:
          </p>
          <div className="my-4 p-4 rounded-xl bg-orange-50/60 border border-orange-200/60 text-center font-mono text-sm sm:text-base text-stone-900 shadow-2xs overflow-x-auto">
            <span className="text-orange-700 font-bold mr-2">EQUATION:</span>
            <code>h(key)=key\bmod m</code>
          </div>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Old capacity:
          </p>
          <div className="my-4 p-4 rounded-xl bg-orange-50/60 border border-orange-200/60 text-center font-mono text-sm sm:text-base text-stone-900 shadow-2xs overflow-x-auto">
            <span className="text-orange-700 font-bold mr-2">EQUATION:</span>
            <code>m=4</code>
          </div>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            For key 10:
          </p>
          <div className="my-4 p-4 rounded-xl bg-orange-50/60 border border-orange-200/60 text-center font-mono text-sm sm:text-base text-stone-900 shadow-2xs overflow-x-auto">
            <span className="text-orange-700 font-bold mr-2">EQUATION:</span>
            <code>10\bmod4=2</code>
          </div>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            New capacity:
          </p>
          <div className="my-4 p-4 rounded-xl bg-orange-50/60 border border-orange-200/60 text-center font-mono text-sm sm:text-base text-stone-900 shadow-2xs overflow-x-auto">
            <span className="text-orange-700 font-bold mr-2">EQUATION:</span>
            <code>m=8</code>
          </div>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Now:
          </p>
          <div className="my-4 p-4 rounded-xl bg-orange-50/60 border border-orange-200/60 text-center font-mono text-sm sm:text-base text-stone-900 shadow-2xs overflow-x-auto">
            <span className="text-orange-700 font-bold mr-2">EQUATION:</span>
            <code>10\bmod8=2</code>
          </div>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            For key 14:
          </p>
          <div className="my-4 p-4 rounded-xl bg-orange-50/60 border border-orange-200/60 text-center font-mono text-sm sm:text-base text-stone-900 shadow-2xs overflow-x-auto">
            <span className="text-orange-700 font-bold mr-2">EQUATION:</span>
            <code>14\bmod4=2</code>
          </div>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            But:
          </p>
          <div className="my-4 p-4 rounded-xl bg-orange-50/60 border border-orange-200/60 text-center font-mono text-sm sm:text-base text-stone-900 shadow-2xs overflow-x-auto">
            <span className="text-orange-700 font-bold mr-2">EQUATION:</span>
            <code>14\bmod8=6</code>
          </div>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Its position changes.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            This demonstrates why entries must be redistributed.
          </p>
          <h4 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
            <span>11.3 Rehashing complexity</span>
          </h4>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            A resize operation may require:
          </p>
          <div className="my-4 p-4 rounded-xl bg-orange-50/60 border border-orange-200/60 text-center font-mono text-sm sm:text-base text-stone-900 shadow-2xs overflow-x-auto">
            <span className="text-orange-700 font-bold mr-2">EQUATION:</span>
            <code>O(n)</code>
          </div>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            time to redistribute \(n\) entries.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            However, when resizing happens geometrically, the amortized cost of insertion remains \(O(1)\) under normal assumptions.
          </p>
          <h4 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
            <span>11.4 Rehashing vs resizing</span>
          </h4>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            These terms are related but not always identical.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Resizing: Increasing the underlying table capacity.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Rehashing: Recalculating or redistributing entries into the new table.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            In Java's HashMap, resizing redistributes entries into the expanded bucket array using its internal hash and capacity rules.
          </p>
      </div>
    )
  },
  {
    id: "hashmap-internals",
    number: "12",
    title: "12. Java HashMap Internals (Put, Get & Treeification)",
    category: "Part 12 · HashMap Internals",
    content: (
      <div className="space-y-4 text-stone-800 leading-relaxed font-sans">
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Important for Java Interviews
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            This is one of the most important topics in the entire module.
          </p>
          <h4 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
            <span>12.1 What is HashMap?</span>
          </h4>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            HashMap is a Java collection class that stores information as key-value pairs.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            It belongs to the Java Collections Framework and implements the Map interface.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Example:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`import java.util.HashMap;
public class Main  {
  public static void main(String[] args)  {
    HashMap<Integer, String> students = new HashMap<>();
    students.put(101, "Rahul");
    students.put(102, "Priya");
    students.put(103, "Aman");
    System.out.println(students.get(102));

  }

}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Output:
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Priya
          </p>
          <h4 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
            <span>12.2 Important characteristics</span>
          </h4>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Stores key-value pairs.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Does not guarantee insertion order.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Allows one null key.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Allows multiple null values.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Keys must be unique according to equality.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Inserting an existing equal key updates its value.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Provides average constant-time lookup, insertion, and deletion under good hashing conditions.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Is not synchronized by default.
          </p>
          <h4 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
            <span>12.3 Internal structure of HashMap</span>
          </h4>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            A Java HashMap uses an array of buckets.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Each bucket can contain:
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            No entry.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            A linked list of nodes.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            A balanced red-black tree under certain conditions.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            A simplified node contains:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`class Node<K, V>  {
  int hash;
  K key;
  V value;
  Node<K, V> next;

}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            The actual implementation is more sophisticated, but this represents its fundamental structure.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            <a href="https://images.openai.com/static-rsc-4/kDclvBOyq88CKNltcOH24pSyk3L50dlUycKjdnA4I_b6VcdWd_aFKP5W014PQsltMSmdy8l4WHvIuVtoXU7iNxb4sayitfQLXCNi6uKCv239F4ft_qQ2JJIKFpEio2ZHVjxU7wQUVO5ETwnbElvvHoFMh6sWvol0dqKD1I9z7nQ?purpose=inline" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 font-medium underline inline-flex items-center gap-0.5">How HashMap Works Internally?. Principle of Hashing | by Ramjeet Mahto | Medium</a>
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            <a href="https://medium.com/%40ramjeet.mahto77/how-hashmap-works-internally-be7ada869d51?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 font-medium underline inline-flex items-center gap-0.5">medium.com</a>
          </p>
          <h4 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
            <span>12.4 How does put() work internally?</span>
          </h4>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Consider:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`HashMap<String, Integer> map = new HashMap<>();
map.put("Java", 90);`}</code>
            </pre>
          </div>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Conceptually, Java performs these operations:
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Step 1: Calculate the key's hash code
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`int hash = key.hashCode();`}</code>
            </pre>
          </div>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Step 2: Apply hash spreading
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Modern Java HashMap implementations use a transformation similar to:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`h ^ (h >>> 16)`}</code>
            </pre>
          </div>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            This mixes higher-order bits into lower-order bits.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Step 3: Calculate the bucket index
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            For a table of length \(n\):
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`index = (n - 1) & hash;`}</code>
            </pre>
          </div>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            This works because the table capacity is maintained as a power of two.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Step 4: Check the bucket
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            If empty, create a new node.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            If the same key exists, replace its value.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            If another key exists in the bucket, handle the collision.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Step 5: Insert the new node
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            The node is added to the appropriate bucket structure.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Step 6: Check the resize threshold
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            If the number of entries exceeds the threshold, resizing may occur.
          </p>
          <h4 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
            <span>12.5 How does get() work internally?</span>
          </h4>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Consider:
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            map.get("Java");
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Conceptually:
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Calculate the hash code.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Apply hash spreading.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Calculate the bucket index.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Access the bucket.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Compare the stored hash and key.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Use equals() to identify the matching key.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Return the corresponding value.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            If the key does not exist:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`System.out.println(map.get("Python"));`}</code>
            </pre>
          </div>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Output:
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            null
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Be aware that null can also be a stored value, so containsKey() is useful when you need to distinguish between an absent key and a key mapped to null.
          </p>
          <h4 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
            <span>12.6 What happens when collisions occur in HashMap?</span>
          </h4>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Suppose:
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            map.put("AB", 100); map.put("CD", 200);
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Imagine both keys map to the same bucket.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            The bucket may look like:
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Bucket 3 AB = 100 | v CD = 200
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Java can store multiple entries in one bucket.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            In modern Java implementations, sufficiently large collision chains can be converted into red-black trees.
          </p>
          <h4 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
            <span>12.7 Treeification in Java HashMap</span>
          </h4>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Treeification means converting a bucket's linked-list representation into a red-black tree.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Important implementation details for modern Java HashMap:
          </p>
          <div className="overflow-x-auto my-4 rounded-xl border border-[#e7e3da] shadow-2xs">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-stone-900 border-b border-[#e7e3da] font-semibold">
                <tr>
                  <th className="px-4 py-3">Constant</th>
                  <th className="px-4 py-3">Default value</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Default capacity</td>
                  <td className="px-4 py-2.5 text-stone-700">16</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Default load factor</td>
                  <td className="px-4 py-2.5 text-stone-700">0.75</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Treeification threshold</td>
                  <td className="px-4 py-2.5 text-stone-700">8</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Minimum capacity for treeification</td>
                  <td className="px-4 py-2.5 text-stone-700">64</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Untreeification threshold</td>
                  <td className="px-4 py-2.5 text-stone-700">6</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Important details:
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Treeification is considered when a collision chain reaches the threshold.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            If the table capacity is below 64, resizing is preferred instead of treeification.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            The exact conversion depends on insertion and removal conditions.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            When a tree bucket becomes sufficiently small, it can convert back to a linked representation.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Why use a red-black tree?
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            A linked list may require:
          </p>
          <div className="my-4 p-4 rounded-xl bg-orange-50/60 border border-orange-200/60 text-center font-mono text-sm sm:text-base text-stone-900 shadow-2xs overflow-x-auto">
            <span className="text-orange-700 font-bold mr-2">EQUATION:</span>
            <code>O(n)</code>
          </div>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            search time in a heavily collided bucket.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            A balanced tree can provide approximately:
          </p>
          <div className="my-4 p-4 rounded-xl bg-orange-50/60 border border-orange-200/60 text-center font-mono text-sm sm:text-base text-stone-900 shadow-2xs overflow-x-auto">
            <span className="text-orange-700 font-bold mr-2">EQUATION:</span>
            <code>O(\log n)</code>
          </div>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            search time within that bucket.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            The overall behavior still depends on hash distribution and key comparison.
          </p>
          <h4 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
            <span>12.8 HashMap internal flow</span>
          </h4>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            <a href="https://images.openai.com/static-rsc-4/t0A1SyUGGACEjhmnKdzeXXIKJ9iCTJrv-ILxXTLBi3fLkJ4NHik-IHe05NJcnIKbzgclv5E9SpWVEN0zh4ufARNRTzuYu8LZyj7wUKoMy6BrQ9z5PxhUEzERgVXob2n29TdVXxKNd74lpNYvmtURklhSc9NnuNgvm734ZO36bM0?purpose=inline" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 font-medium underline inline-flex items-center gap-0.5">Interview Question - How Hashmap Works Internally? Unveiled Secrets</a>
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            <a href="https://mdsumonkhan.com/interview-question-how-hashmap-works-internally/?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 font-medium underline inline-flex items-center gap-0.5">mdsumonkhan.com</a>
          </p>
          <h4 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
            <span>12.9 Important HashMap methods</span>
          </h4>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`HashMap<String, Integer> map = new HashMap<>();
map.put("Java", 90);
map.get("Java");
map.containsKey("Java");
map.containsValue(90);
map.remove("Java");
map.size();
map.isEmpty();
map.clear();
map.putIfAbsent("Python", 85);
map.getOrDefault("C++", 0);`}</code>
            </pre>
          </div>
          <h4 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
            <span>12.10 Iterating through HashMap</span>
          </h4>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Using entrySet():
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`for (Map.Entry<String, Integer> entry : map.entrySet())  {
  System.out.println( entry.getKey() + " = " + entry.getValue() );

}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Using keySet():
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`for (String key : map.keySet())  {
  System.out.println(key);

}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Using forEach():
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`map.forEach((key, value) ->  {
  System.out.println(key + " = " + value);
});`}</code>
            </pre>
          </div>
          <h4 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
            <span>12.11 HashMap time complexity</span>
          </h4>
          <div className="overflow-x-auto my-4 rounded-xl border border-[#e7e3da] shadow-2xs">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-stone-900 border-b border-[#e7e3da] font-semibold">
                <tr>
                  <th className="px-4 py-3">Operation</th>
                  <th className="px-4 py-3">Average</th>
                  <th className="px-4 py-3">Worst case</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">put()</td>
                  <td className="px-4 py-2.5 text-stone-700">\(O(1)\)</td>
                  <td className="px-4 py-2.5 text-stone-700">\(O(n)\) in general</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">get()</td>
                  <td className="px-4 py-2.5 text-stone-700">\(O(1)\)</td>
                  <td className="px-4 py-2.5 text-stone-700">\(O(n)\) in general</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">remove()</td>
                  <td className="px-4 py-2.5 text-stone-700">\(O(1)\)</td>
                  <td className="px-4 py-2.5 text-stone-700">\(O(n)\) in general</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            containsKey()
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            \(O(1)\)
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            \(O(n)\) in general
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Tree bins can improve heavily collided bucket operations to approximately \(O(\log n)\) under suitable conditions.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Interview questions:
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            How does HashMap work internally?
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            What happens when two keys have the same hash code?
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Why does HashMap use a power-of-two capacity?
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            What is hash spreading?
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            What is treeification?
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Why is the default load factor 0.75?
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Can HashMap contain null keys?
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Is HashMap thread-safe?
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            What happens when an existing key is inserted again?
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Why must equals() and hashCode() be consistent?
          </p>
      </div>
    )
  },
  {
    id: "hashset",
    number: "13",
    title: "13. HashSet Internals & Set Operations",
    category: "Part 13 · HashSet",
    content: (
      <div className="space-y-4 text-stone-800 leading-relaxed font-sans">
          <h4 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
            <span>13.1 What is HashSet?</span>
          </h4>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            HashSet is a Java collection used to store unique elements.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Unlike HashMap, it does not expose key-value pairs.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            It stores elements without allowing duplicates according to their equality rules.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Example:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`import java.util.HashSet;
public class Main  {
  public static void main(String[] args)  {
    HashSet<Integer> numbers = new HashSet<>();
    numbers.add(10);
    numbers.add(20);
    numbers.add(30);
    numbers.add(20);
    System.out.println(numbers);

  }

}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            The value 20 is stored only once.
          </p>
          <h4 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
            <span>13.2 How does HashSet work internally?</span>
          </h4>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            This is an important interview concept.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            HashSet internally uses a HashMap.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Conceptually:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`HashMap<E, Object> map;`}</code>
            </pre>
          </div>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            When you insert an element:
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            set.add(10);
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            It behaves approximately like:
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            map.put(10, PRESENT);
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            The element becomes the key, and a shared dummy object becomes the value.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            This is why HashSet can efficiently check whether an element already exists.
          </p>
          <h4 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
            <span>13.3 Important HashSet methods</span>
          </h4>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`HashSet<String> set = new HashSet<>();
set.add("Java");
set.contains("Java");
set.remove("Java");
set.size();
set.isEmpty();
set.clear();`}</code>
            </pre>
          </div>
          <h4 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
            <span>13.4 Removing duplicates from an array</span>
          </h4>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Problem:
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Given an array, remove duplicate elements.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Input:
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            [1, 2, 2, 3, 4, 4, 5]
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Output:
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            [1, 2, 3, 4, 5]
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Solution:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`import java.util.*;
public class Main  {
  public static void main(String[] args)  {
    int[] arr =  {
      1, 2, 2, 3, 4, 4, 5
    };
    HashSet<Integer> set = new HashSet<>();
    for (int num : arr)  {
      set.add(num);

    }
    System.out.println(set);

  }

}`}</code>
            </pre>
          </div>
          <div className="p-4 rounded-xl border bg-orange-500/10 border-orange-500/30 text-orange-950 my-4 text-xs sm:text-sm leading-relaxed">
            <div className="font-bold flex items-center gap-1.5 mb-1 text-stone-900">
              <span>ℹ️</span>
              <span>Note</span>
            </div>
            <p className="text-stone-700">HashSet does not guarantee the original insertion order.</p>
          </div>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            If order matters, use LinkedHashSet.
          </p>
          <h4 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
            <span>13.5 Complexity</span>
          </h4>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Operation
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Average
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            add()
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            \(O(1)\)
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            contains()
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            \(O(1)\)
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            remove()
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            \(O(1)\)
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Worst-case behavior depends on collisions and implementation details.
          </p>
      </div>
    )
  },
  {
    id: "linked-hashmap",
    number: "14",
    title: "14. LinkedHashMap & LRU Cache Architecture",
    category: "Part 14 · LinkedHashMap",
    content: (
      <div className="space-y-4 text-stone-800 leading-relaxed font-sans">
          <h4 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
            <span>14.1 What is LinkedHashMap?</span>
          </h4>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            LinkedHashMap is a Java collection that stores key-value pairs while maintaining a predictable iteration order.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            By default, it maintains insertion order.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Example:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`import java.util.LinkedHashMap;
public class Main  {
  public static void main(String[] args)  {
    LinkedHashMap<Integer, String> map = new LinkedHashMap<>();
    map.put(3, "Aman");
    map.put(1, "Rahul");
    map.put(2, "Priya");
    System.out.println(map);

  }

}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Iteration follows insertion order:
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            3 = Aman 1 = Rahul 2 = Priya
          </p>
          <h4 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
            <span>14.2 How does LinkedHashMap work internally?</span>
          </h4>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            LinkedHashMap extends HashMap.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            It maintains additional links between entries to preserve their order.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Conceptually:
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Entry 1 &lt;-&gt; Entry 2 &lt;-&gt; Entry 3
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            This linked structure allows predictable traversal.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            <a href="https://images.openai.com/static-rsc-4/MkZ3Zb24u09mmk2tVz_5S4qo6B_Oj0xuZYo1qC88diuNfMNIsZ9c7ii9hvkUrAZIEqhNazvz3Yg-3NcE_A6A7v77J991frtTbMZHcbFPfqs1i9rv-8SWuFOIp5sFSyJ5P--nGHoCVcbhiEGHQX_BncQkOSFTVUahqqvrUuTkQ1o?purpose=inline" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 font-medium underline inline-flex items-center gap-0.5">Difference between HashMap and LinkedHashMap in Java | Java67</a>
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            <a href="https://www.java67.com/2012/08/difference-between-hashmap-and-LinkedHashMap-Java.html?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 font-medium underline inline-flex items-center gap-0.5">java67.com</a>
          </p>
          <h4 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
            <span>14.3 Insertion order vs access order</span>
          </h4>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            LinkedHashMap supports two ordering modes.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Insertion order
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Elements remain in the order they were inserted.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Access order
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Elements move according to their most recent access.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Example:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`LinkedHashMap<Integer, String> map = new LinkedHashMap<>(16, 0.75f, true);`}</code>
            </pre>
          </div>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            The third argument true enables access-order mode.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            This is useful when implementing an LRU cache.
          </p>
          <h4 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
            <span>14.4 Real-world application: LRU Cache</span>
          </h4>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            LRU means Least Recently Used.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Imagine a cache with a maximum capacity of three items.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Initially:
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            A, B, C
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            You access A:
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            B, C, A
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Now insert D.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            The least recently used item B is removed:
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            C, A, D
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            This is a common caching strategy.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            LinkedHashMap provides functionality that makes a basic LRU implementation convenient.
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`import java.util.*;
class LRUCache<K, V> extends LinkedHashMap<K, V>  {
  private final int capacity;
  LRUCache(int capacity)  {
    super(16, 0.75f, true);
    this.capacity = capacity;

  }
  @Override protected boolean removeEldestEntry( Map.Entry<K, V> eldest)  {
    return size() > capacity;

  }

}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Usage:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public class Main  {
  public static void main(String[] args)  {
    LRUCache<Integer, String> cache = new LRUCache<>(3);
    cache.put(1, "A");
    cache.put(2, "B");
    cache.put(3, "C");
    cache.get(1);
    cache.put(4, "D");
    System.out.println(cache);

  }

}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Key 2 is removed because it was least recently accessed.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            This implementation is not automatically thread-safe.
          </p>
          <h4 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
            <span>14.5 HashMap vs LinkedHashMap</span>
          </h4>
          <div className="overflow-x-auto my-4 rounded-xl border border-[#e7e3da] shadow-2xs">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-stone-900 border-b border-[#e7e3da] font-semibold">
                <tr>
                  <th className="px-4 py-3">Feature</th>
                  <th className="px-4 py-3">HashMap</th>
                  <th className="px-4 py-3">LinkedHashMap</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Key-value storage</td>
                  <td className="px-4 py-2.5 text-stone-700">Yes</td>
                  <td className="px-4 py-2.5 text-stone-700">Yes</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Insertion order</td>
                  <td className="px-4 py-2.5 text-stone-700">Not guaranteed</td>
                  <td className="px-4 py-2.5 text-stone-700">Preserved by default</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Access order</td>
                  <td className="px-4 py-2.5 text-stone-700">No</td>
                  <td className="px-4 py-2.5 text-stone-700">Supported</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Internal structure</td>
                  <td className="px-4 py-2.5 text-stone-700">Hash table</td>
                  <td className="px-4 py-2.5 text-stone-700">Hash table + linked entries</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Memory</td>
                  <td className="px-4 py-2.5 text-stone-700">Lower</td>
                  <td className="px-4 py-2.5 text-stone-700">Higher</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">LRU implementation</td>
                  <td className="px-4 py-2.5 text-stone-700">Requires additional logic</td>
                  <td className="px-4 py-2.5 text-stone-700">Convenient</td>
                </tr>
              </tbody>
            </table>
          </div>
      </div>
    )
  },
  {
    id: "treemap",
    number: "15",
    title: "15. TreeMap & Red-Black Tree Sorting",
    category: "Part 15 · TreeMap",
    content: (
      <div className="space-y-4 text-stone-800 leading-relaxed font-sans">
          <h4 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
            <span>15.1 What is TreeMap?</span>
          </h4>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            TreeMap is a Java collection that stores key-value pairs in sorted key order.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Unlike HashMap, it maintains keys in sorted order rather than relying on hash-based bucket positions.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Example:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`import java.util.TreeMap;
public class Main  {
  public static void main(String[] args)  {
    TreeMap<Integer, String> map = new TreeMap<>();
    map.put(30, "Aman");
    map.put(10, "Rahul");
    map.put(20, "Priya");
    System.out.println(map);

  }

}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Output:
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            &#123;10=Rahul, 20=Priya, 30=Aman&#125;
          </p>
          <h4 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
            <span>15.2 How does TreeMap work internally?</span>
          </h4>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            TreeMap is implemented using a Red-Black Tree.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            A red-black tree is a self-balancing binary search tree.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Its main properties maintain approximately balanced tree height.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            As a result:
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Insertion: \(O(\log n)\)
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Searching: \(O(\log n)\)
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Deletion: \(O(\log n)\)
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            <a href="https://images.openai.com/static-rsc-4/bdkaD_BvQJnPJzFoNcNUNIojgLB-B6w_dG_pW6O10VhAwFO9tlIKG4umzkWiI9hYUpXAsajaUs1kmSurYh7YSezGQos4JE2nPeX2SrxIWi7U7grLDZ3entyMcZ6ZW5rl3W-3DCAkeUTXZ0CnbgLynrassHXu3DpAOaaKLzN9A4E?purpose=inline" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 font-medium underline inline-flex items-center gap-0.5">Red Black Tree</a>
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            <a href="https://pages.cs.wisc.edu/~ragrawal/?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 font-medium underline inline-flex items-center gap-0.5">pages.cs.wisc.edu</a>
          </p>
          <h4 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
            <span>15.3 Important TreeMap methods</span>
          </h4>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`TreeMap<Integer, String> map = new TreeMap<>();
map.put(10, "A");
map.put(20, "B");
map.put(30, "C");
map.firstKey();
map.lastKey();
map.firstEntry();
map.lastEntry();
map.lowerKey(20);
map.higherKey(20);
map.floorKey(25);
map.ceilingKey(25);
map.headMap(20);
map.tailMap(20);`}</code>
            </pre>
          </div>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Understand these carefully:
          </p>
          <div className="overflow-x-auto my-4 rounded-xl border border-[#e7e3da] shadow-2xs">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-stone-900 border-b border-[#e7e3da] font-semibold">
                <tr>
                  <th className="px-4 py-3">Method</th>
                  <th className="px-4 py-3">Meaning</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">firstKey()</td>
                  <td className="px-4 py-2.5 text-stone-700">Smallest key</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">lastKey()</td>
                  <td className="px-4 py-2.5 text-stone-700">Largest key</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">lowerKey(x)</td>
                  <td className="px-4 py-2.5 text-stone-700">Greatest key strictly smaller than x</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">higherKey(x)</td>
                  <td className="px-4 py-2.5 text-stone-700">Smallest key greater than x</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">floorKey(x)</td>
                  <td className="px-4 py-2.5 text-stone-700">Greatest key less than or equal to x</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">ceilingKey(x)</td>
                  <td className="px-4 py-2.5 text-stone-700">Smallest key greater than or equal to x</td>
                </tr>
              </tbody>
            </table>
          </div>
          <h4 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
            <span>15.4 When should you use TreeMap?</span>
          </h4>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Use TreeMap when:
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            You need sorted keys.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            You need minimum and maximum keys.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            You need range queries.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            You need predecessor and successor operations.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            You need ordered traversal.
          </p>
          <h4 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
            <span>15.5 HashMap vs LinkedHashMap vs TreeMap</span>
          </h4>
          <div className="overflow-x-auto my-4 rounded-xl border border-[#e7e3da] shadow-2xs">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-stone-900 border-b border-[#e7e3da] font-semibold">
                <tr>
                  <th className="px-4 py-3">Feature</th>
                  <th className="px-4 py-3">HashMap</th>
                  <th className="px-4 py-3">LinkedHashMap</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">TreeMap</td>
                  <td className="px-4 py-2.5 text-stone-700">Ordering</td>
                  <td className="px-4 py-2.5 text-stone-700">No guaranteed order</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Insertion/access order</td>
                  <td className="px-4 py-2.5 text-stone-700">Sorted keys</td>
                  <td className="px-4 py-2.5 text-stone-700">Internal structure</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Hash table</td>
                  <td className="px-4 py-2.5 text-stone-700">Hash table + links</td>
                  <td className="px-4 py-2.5 text-stone-700">Red-black tree</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Average lookup</td>
                  <td className="px-4 py-2.5 text-stone-700">\(O(1)\)</td>
                  <td className="px-4 py-2.5 text-stone-700">\(O(1)\)</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">\(O(\log n)\)</td>
                  <td className="px-4 py-2.5 text-stone-700">Range queries</td>
                  <td className="px-4 py-2.5 text-stone-700">No direct support</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">No direct support</td>
                  <td className="px-4 py-2.5 text-stone-700">Yes</td>
                  <td className="px-4 py-2.5 text-stone-700">Null key</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            One allowed
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            One allowed
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Normally not allowed with natural ordering
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Best use
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Fast lookup
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Ordered traversal
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Sorted data
          </p>
          <div className="p-4 rounded-xl border bg-orange-500/10 border-orange-500/30 text-orange-950 my-4 text-xs sm:text-sm leading-relaxed">
            <div className="font-bold flex items-center gap-1.5 mb-1 text-stone-900">
              <span>ℹ️</span>
              <span>Remember</span>
            </div>
            <p className="text-stone-700"></p>
          </div>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            HashMap = Fast lookup.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            LinkedHashMap = Predictable order.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            TreeMap = Sorted order.
          </p>
      </div>
    )
  },
  {
    id: "frequency-maps",
    number: "16",
    title: "16. Frequency Maps & Modern Java Patterns",
    category: "Part 16 · Frequency Maps",
    content: (
      <div className="space-y-4 text-stone-800 leading-relaxed font-sans">
          <h4 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
            <span>16.1 What is a frequency map?</span>
          </h4>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            A frequency map is a data structure that stores how many times each element appears in a collection.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            It is one of the most frequently used hashing techniques in DSA interviews.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Example:
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Input:
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            [1, 2, 2, 3, 3, 3, 4]
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Frequency map:
          </p>
          <div className="overflow-x-auto my-4 rounded-xl border border-[#e7e3da] shadow-2xs">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-stone-900 border-b border-[#e7e3da] font-semibold">
                <tr>
                  <th className="px-4 py-3">Number</th>
                  <th className="px-4 py-3">Frequency</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">1</td>
                  <td className="px-4 py-2.5 text-stone-700">1</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">2</td>
                  <td className="px-4 py-2.5 text-stone-700">2</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">3</td>
                  <td className="px-4 py-2.5 text-stone-700">3</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">4</td>
                  <td className="px-4 py-2.5 text-stone-700">1</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Instead of repeatedly counting each element by scanning the entire array, we store its count.
          </p>
          <h4 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
            <span>16.2 Implementing frequency maps using HashMap</span>
          </h4>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`import java.util.*;
public class Main  {
  public static void main(String[] args)  {
    int[] arr =  {
      1, 2, 2, 3, 3, 3, 4
    };
    HashMap<Integer, Integer> frequency = new HashMap<>();
    for (int num : arr)  {
      frequency.put( num, frequency.getOrDefault(num, 0) + 1 );

    }
    System.out.println(frequency);

  }

}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Output:
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            &#123;1=1, 2=2, 3=3, 4=1&#125;
          </p>
          <h4 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
            <span>16.3 Understanding getOrDefault()</span>
          </h4>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            This method is especially useful for frequency counting.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            frequency.getOrDefault(num, 0)
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            It means:
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            If the key exists, return its current value.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            If the key does not exist, return 0.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Then we add 1.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            frequency.put(num, frequency.getOrDefault(num, 0) + 1);
          </p>
          <h4 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
            <span>16.4 Alternative using merge()</span>
          </h4>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Java provides an even shorter way:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`frequency.merge(num, 1, Integer::sum);`}</code>
            </pre>
          </div>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            This inserts 1 for a new key or adds 1 to an existing value.
          </p>
          <h4 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
            <span>16.5 Character frequency</span>
          </h4>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Problem:
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Count how many times each character appears in a string.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Input:
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            programming
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Solution:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`import java.util.*;
public class Main  {
  public static void main(String[] args)  {
    String str = "programming";
    HashMap<Character, Integer> frequency = new HashMap<>();
    for (char ch : str.toCharArray())  {
      frequency.put( ch, frequency.getOrDefault(ch, 0) + 1 );

    }
    System.out.println(frequency);

  }

}`}</code>
            </pre>
          </div>
          <h4 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
            <span>16.6 Find the most frequent element</span>
          </h4>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Input:
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            [1, 2, 2, 3, 3, 3, 4]
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Output:
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            3
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Solution:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`import java.util.*;
public class Main  {
  public static void main(String[] args)  {
    int[] arr =  {
      1, 2, 2, 3, 3, 3, 4
    };
    HashMap<Integer, Integer> map = new HashMap<>();
    for (int num : arr)  {
      map.put(num, map.getOrDefault(num, 0) + 1);

    }
    int answer = arr[0];
    int maxFrequency = 0;
    for (int num : map.keySet())  {
      if (map.get(num) > maxFrequency)  {
        maxFrequency = map.get(num);
        answer = num;

      }

    }
    System.out.println(answer);

  }

}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Complexity:
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Building the map: \(O(n)\) average.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Finding the maximum: \(O(k)\), where \(k\) is the number of distinct elements.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Total: \(O(n)\) average.
          </p>
      </div>
    )
  },
  {
    id: "hashcode-equals",
    number: "17",
    title: "17. Custom hashCode() and equals() Contract",
    category: "Part 17 · Equality Contract",
    content: (
      <div className="space-y-4 text-stone-800 leading-relaxed font-sans">
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Critical Java Interview Concept
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            This is extremely important when using custom objects as HashMap keys or HashSet elements.
          </p>
          <h4 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
            <span>17.1 What is equals()?</span>
          </h4>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            The equals() method determines whether two objects should be considered logically equal.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Example:
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            String a = new String("Java"); String b = new String("Java"); System.out.println(a == b); System.out.println(a.equals(b));
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Output:
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            false true
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Why?
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            == compares object references.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            equals() compares logical equality for String objects.
          </p>
          <h4 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
            <span>17.2 What is hashCode()?</span>
          </h4>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            hashCode() returns an integer representing an object's hash code.
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`String name = "Java";
System.out.println(name.hashCode());`}</code>
            </pre>
          </div>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Hash-based collections use hash codes to help locate objects efficiently.
          </p>
          <h4 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
            <span>17.3 The equals() and hashCode() contract</span>
          </h4>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Java follows an important rule:
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            If two objects are equal according to equals(), they must have the same hash code.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Formally:
          </p>
          <div className="my-4 p-4 rounded-xl bg-orange-50/60 border border-orange-200/60 text-center font-mono text-sm sm:text-base text-stone-900 shadow-2xs overflow-x-auto">
            <span className="text-orange-700 font-bold mr-2">EQUATION:</span>
            <code>a.equals(b)=true</code>
          </div>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Implies:
          </p>
          <div className="my-4 p-4 rounded-xl bg-orange-50/60 border border-orange-200/60 text-center font-mono text-sm sm:text-base text-stone-900 shadow-2xs overflow-x-auto">
            <span className="text-orange-700 font-bold mr-2">EQUATION:</span>
            <code>a.hashCode()=b.hashCode()</code>
          </div>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            However, the reverse is not guaranteed.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Two unequal objects can have the same hash code.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            That is called a collision.
          </p>
          <h4 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
            <span>17.4 What happens if we do not override equals() and hashCode()?</span>
          </h4>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Consider a Student class:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`class Student  {
  int id;
  String name;
  Student(int id, String name)  {
    this.id = id;
    this.name = name;

  }

}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Now:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Student s1 = new Student(101, "Rahul");
Student s2 = new Student(101, "Rahul");
HashSet<Student> set = new HashSet<>();
set.add(s1);
set.add(s2);
System.out.println(set.size());`}</code>
            </pre>
          </div>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            The result will generally be:
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            2
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Why?
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            The default Object.equals() compares references, not student fields.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            The default Object.hashCode() also does not calculate a hash from the student fields.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Therefore, the two objects are treated as different.
          </p>
          <h4 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
            <span>17.5 Correct implementation</span>
          </h4>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Override both methods.
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`import java.util.Objects;
class Student  {
  int id;
  String name;
  Student(int id, String name)  {
    this.id = id;
    this.name = name;

  }
  @Override public boolean equals(Object obj)  {
    if (this == obj)  {
      return true;

    }
    if (!(obj instanceof Student))  {
      return false;

    }
    Student other = (Student) obj;
    return id == other.id && Objects.equals(name, other.name);

  }
  @Override public int hashCode()  {
    return Objects.hash(id, name);

  }

}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Now:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Student s1 = new Student(101, "Rahul");
Student s2 = new Student(101, "Rahul");
HashSet<Student> set = new HashSet<>();
set.add(s1);
set.add(s2);
System.out.println(set.size());`}</code>
            </pre>
          </div>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Output:
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            1
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Because both objects are logically equal.
          </p>
          <h4 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
            <span>17.6 Why must we override both methods?</span>
          </h4>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Suppose we override only equals() but not hashCode().
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Two logically equal objects might have different hash codes.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            HashMap may place them into different buckets.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            As a result, the map may fail to identify them as the same logical key.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Similarly, overriding hashCode() without implementing appropriate equality can produce incorrect duplicate-handling behavior.
          </p>
          <h4 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
            <span>17.7 Important rules</span>
          </h4>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Equal objects must have equal hash codes.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Unequal objects may have equal hash codes.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            equals() should be consistent.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            hashCode() should remain consistent while equality-relevant fields remain unchanged.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Never mutate fields involved in equality and hashing while an object is being used as a key in a HashMap or an element in a HashSet.
          </p>
          <h4 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
            <span>17.8 Modern Java: records</span>
          </h4>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Java records automatically provide implementations of equals(), hashCode(), and toString() based on their components.
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`record Student(int id, String name)  {

}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Example:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`HashSet<Student> students = new HashSet<>();
students.add(new Student(101, "Rahul"));
students.add(new Student(101, "Rahul"));
System.out.println(students.size());`}</code>
            </pre>
          </div>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Output:
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            1
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Records are particularly useful for immutable data models.
          </p>
      </div>
    )
  },
  {
    id: "anagram-problems",
    number: "18",
    title: "18. Anagram Problems & Group Anagrams",
    category: "Part 18 · Anagram Algorithms",
    content: (
      <div className="space-y-4 text-stone-800 leading-relaxed font-sans">
          <h4 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
            <span>18.1 What is an anagram?</span>
          </h4>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            An anagram is a word or string formed by rearranging the characters of another word or string.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Two strings are anagrams if:
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            They contain exactly the same characters.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Each character appears the same number of times.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Their lengths are equal.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Examples:
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            listen -&gt; silent race -&gt; care heart -&gt; earth
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Not anagrams:
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            hello -&gt; world cat -&gt; car
          </p>
          <h4 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
            <span>18.2 Approach 1: Sorting</span>
          </h4>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            If two strings are anagrams, sorting their characters produces the same result.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Example:
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            listen -&gt; eilnst silent -&gt; eilnst
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Java implementation:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`import java.util.Arrays;
public class Main  {
  static boolean isAnagram(String s1, String s2)  {
    if (s1.length() != s2.length())  {
      return false;

    }
    char[] a = s1.toCharArray();
    char[] b = s2.toCharArray();
    Arrays.sort(a);
    Arrays.sort(b);
    return Arrays.equals(a, b);

  }
  public static void main(String[] args)  {
    System.out.println( isAnagram("listen", "silent") );

  }

}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Output:
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            true
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Complexity:
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Sorting: \(O(n\log n)\).
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Comparison: \(O(n)\).
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Total: \(O(n\log n)\).
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Additional space: \(O(n)\) for character arrays.
          </p>
          <h4 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
            <span>18.3 Approach 2: Frequency HashMap</span>
          </h4>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Instead of sorting, count the characters.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Example:
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            listen
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Frequency:
          </p>
          <div className="overflow-x-auto my-4 rounded-xl border border-[#e7e3da] shadow-2xs">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-stone-900 border-b border-[#e7e3da] font-semibold">
                <tr>
                  <th className="px-4 py-3">Character</th>
                  <th className="px-4 py-3">Count</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">l</td>
                  <td className="px-4 py-2.5 text-stone-700">1</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">i</td>
                  <td className="px-4 py-2.5 text-stone-700">1</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">s</td>
                  <td className="px-4 py-2.5 text-stone-700">1</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">t</td>
                  <td className="px-4 py-2.5 text-stone-700">1</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">e</td>
                  <td className="px-4 py-2.5 text-stone-700">1</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">n</td>
                  <td className="px-4 py-2.5 text-stone-700">1</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            For silent, the frequency map is identical.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Java implementation:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`import java.util.*;
public class Main  {
  static boolean isAnagram(String s1, String s2)  {
    if (s1.length() != s2.length())  {
      return false;

    }
    HashMap<Character, Integer> map = new HashMap<>();
    for (char ch : s1.toCharArray())  {
      map.put(ch, map.getOrDefault(ch, 0) + 1);

    }
    for (char ch : s2.toCharArray())  {
      if (!map.containsKey(ch))  {
        return false;

      }
      map.put(ch, map.get(ch) - 1);
      if (map.get(ch) == 0)  {
        map.remove(ch);

      }

    }
    return map.isEmpty();

  }
  public static void main(String[] args)  {
    System.out.println( isAnagram("listen", "silent") );

  }

}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Complexity:
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Time: \(O(n)\) average.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Space: \(O(k)\), where \(k\) is the number of distinct characters.
          </p>
          <h4 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
            <span>18.4 Approach 3: Character frequency array</span>
          </h4>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            If the input is restricted to lowercase English letters (a–z), an array is more efficient than a HashMap.
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public class Main  {
  static boolean isAnagram(String s1, String s2)  {
    if (s1.length() != s2.length())  {
      return false;

    }
    int[] frequency = new int[26];
    for (int i = 0; i < s1.length(); i++)  {
      frequency[s1.charAt(i) - 'a']++;
      frequency[s2.charAt(i) - 'a']--;

    }
    for (int count : frequency)  {
      if (count != 0)  {
        return false;

      }

    }
    return true;

  }
  public static void main(String[] args)  {
    System.out.println( isAnagram("race", "care") );

  }

}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Complexity:
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Time: \(O(n)\).
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Space: \(O(1)\), because the array always contains 26 positions.
          </p>
          <div className="p-4 rounded-xl border bg-orange-500/10 border-orange-500/30 text-orange-950 my-4 text-xs sm:text-sm leading-relaxed">
            <div className="font-bold flex items-center gap-1.5 mb-1 text-stone-900">
              <span>💡</span>
              <span>Important</span>
            </div>
            <p className="text-stone-700">This implementation assumes lowercase English letters. It does not directly handle uppercase letters, spaces, punctuation, or arbitrary Unicode characters.</p>
          </div>
          <h4 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
            <span>18.5 Advanced anagram problem: Group Anagrams</span>
          </h4>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Problem:
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Given an array of strings, group all anagrams together.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Input:
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            ["eat", "tea", "tan", "ate", "nat", "bat"]
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Output:
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            [ ["eat", "tea", "ate"], ["tan", "nat"], ["bat"] ]
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Approach:
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Use a HashMap where:
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Key = sorted representation of the string.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Value = list of strings with that key.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Java implementation:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`import java.util.*;
public class Main  {
  static List<List<String>> groupAnagrams(String[] words)  {
    HashMap<String, List<String>> map = new HashMap<>();
    for (String word : words)  {
      char[] chars = word.toCharArray();
      Arrays.sort(chars);
      String key = new String(chars);
      map.putIfAbsent(key, new ArrayList<>());
      map.get(key).add(word);

    }
    return new ArrayList<>(map.values());

  }
  public static void main(String[] args)  {
    String[] words =  {
      "eat", "tea", "tan", "ate", "nat", "bat"
    };
    System.out.println( groupAnagrams(words) );

  }

}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Complexity:
          </p>
          <div className="my-4 p-4 rounded-xl bg-orange-50/60 border border-orange-200/60 text-center font-mono text-sm sm:text-base text-stone-900 shadow-2xs overflow-x-auto">
            <span className="text-orange-700 font-bold mr-2">EQUATION:</span>
            <code>O(n\times k\log k)</code>
          </div>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Where:
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            \(n\) = number of words.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            \(k\) = maximum word length.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            This is a popular interview problem because it combines string processing, hashing, and grouping.
          </p>
      </div>
    )
  },
  {
    id: "duplicate-detection",
    number: "19",
    title: "19. Duplicate Detection & Set Membership",
    category: "Part 19 · Duplicate Detection",
    content: (
      <div className="space-y-4 text-stone-800 leading-relaxed font-sans">
          <h4 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
            <span>19.1 What is duplicate detection?</span>
          </h4>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Duplicate detection means identifying elements that appear more than once in a collection.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Example:
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Input:
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            [1, 2, 3, 4, 2, 5, 3]
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Duplicates:
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            2, 3
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            A HashSet provides a simple and efficient way to solve this problem.
          </p>
          <h4 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
            <span>19.2 Approach 1: Using HashSet</span>
          </h4>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Logic:
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Create an empty HashSet.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Traverse the array.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Check whether the current number already exists.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            If it exists, a duplicate is found.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Otherwise, insert it.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Java implementation:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`import java.util.*;
public class Main  {
  static boolean containsDuplicate(int[] arr)  {
    HashSet<Integer> set = new HashSet<>();
    for (int num : arr)  {
      if (set.contains(num))  {
        return true;

      }
      set.add(num);

    }
    return false;

  }
  public static void main(String[] args)  {
    int[] arr =  {
      1, 2, 3, 4, 2
    };
    System.out.println(containsDuplicate(arr));

  }

}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Output:
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            true
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Complexity:
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Time: \(O(n)\) average.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Space: \(O(n)\).
          </p>
          <h4 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
            <span>19.3 Approach 2: Find all duplicate elements</span>
          </h4>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Sometimes the interviewer wants all duplicate values rather than just a true/false result.
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`import java.util.*;
public class Main  {
  static Set<Integer> findDuplicates(int[] arr)  {
    HashSet<Integer> seen = new HashSet<>();
    HashSet<Integer> duplicates = new HashSet<>();
    for (int num : arr)  {
      if (!seen.add(num))  {
        duplicates.add(num);

      }

    }
    return duplicates;

  }
  public static void main(String[] args)  {
    int[] arr =  {
      1, 2, 3, 2, 4, 3, 5
    };
    System.out.println(findDuplicates(arr));

  }

}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Output:
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            [2, 3]
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            The add() method returns:
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            true if the element was newly inserted.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            false if the element already existed.
          </p>
          <h4 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
            <span>19.4 Approach 3: Find duplicate characters in a string</span>
          </h4>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Input:
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            programming
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Output:
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            r, g, m
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Solution:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`import java.util.*;
public class Main  {
  public static void main(String[] args)  {
    String str = "programming";
    HashSet<Character> seen = new HashSet<>();
    HashSet<Character> duplicates = new HashSet<>();
    for (char ch : str.toCharArray())  {
      if (!seen.add(ch))  {
        duplicates.add(ch);

      }

    }
    System.out.println(duplicates);

  }

}`}</code>
            </pre>
          </div>
          <h4 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
            <span>19.5 Real-world applications</span>
          </h4>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Duplicate detection is used in:
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Removing duplicate database records.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Detecting repeated usernames.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Identifying duplicate transactions.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Finding repeated files.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Validating unique identifiers.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Preventing duplicate submissions.
          </p>
      </div>
    )
  },
  {
    id: "two-sum",
    number: "20",
    title: "20. Two Sum Problem & Complement Matching",
    category: "Part 20 · Two Sum",
    content: (
      <div className="space-y-4 text-stone-800 leading-relaxed font-sans">
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Very Important Interview Problem
          </p>
          <h4 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
            <span>20.1 Problem statement</span>
          </h4>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Given an integer array and a target value, find the indices of two numbers whose sum equals the target.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Example:
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Array = [2, 7, 11, 15] Target = 9
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Output:
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            [0, 1]
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Explanation:
          </p>
          <div className="my-4 p-4 rounded-xl bg-orange-50/60 border border-orange-200/60 text-center font-mono text-sm sm:text-base text-stone-900 shadow-2xs overflow-x-auto">
            <span className="text-orange-700 font-bold mr-2">EQUATION:</span>
            <code>2+7=9</code>
          </div>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            The elements at indices 0 and 1 produce the target.
          </p>
          <h4 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
            <span>20.2 Approach 1: Brute Force</span>
          </h4>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Check every possible pair.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Java implementation:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public class Main  {
  static int[] twoSum(int[] arr, int target)  {
    for (int i = 0; i < arr.length; i++)  {
      for (int j = i + 1; j < arr.length; j++)  {
        if (arr[i] + arr[j] == target)  {
          return new int[] {
            i, j
          };

        }

      }

    }
    return new int[] {
      -1, -1
    };

  }
  public static void main(String[] args)  {
    int[] arr =  {
      2, 7, 11, 15
    };
    int[] result = twoSum(arr, 9);
    System.out.println( Arrays.toString(result) );

  }

}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Complexity:
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Time: \(O(n^2)\).
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Space: \(O(1)\).
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            The problem is that we repeatedly search for the required second number.
          </p>
          <h4 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
            <span>20.3 Approach 2: HashMap optimization</span>
          </h4>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            We can solve this problem in linear average time using a HashMap.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            The key idea is:
          </p>
          <div className="my-4 p-4 rounded-xl bg-orange-50/60 border border-orange-200/60 text-center font-mono text-sm sm:text-base text-stone-900 shadow-2xs overflow-x-auto">
            <span className="text-orange-700 font-bold mr-2">EQUATION:</span>
            <code>complement=target-current</code>
          </div>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            For every number, check whether its complement already exists in the map.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Example:
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Array = [2, 7, 11, 15] Target = 9
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Iteration 1
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Current number:
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            2
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Calculate:
          </p>
          <div className="my-4 p-4 rounded-xl bg-orange-50/60 border border-orange-200/60 text-center font-mono text-sm sm:text-base text-stone-900 shadow-2xs overflow-x-auto">
            <span className="text-orange-700 font-bold mr-2">EQUATION:</span>
            <code>9-2=7</code>
          </div>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Is 7 in the HashMap?
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            No.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Store:
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            2 -&gt; 0
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Iteration 2
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Current number:
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            7
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Calculate:
          </p>
          <div className="my-4 p-4 rounded-xl bg-orange-50/60 border border-orange-200/60 text-center font-mono text-sm sm:text-base text-stone-900 shadow-2xs overflow-x-auto">
            <span className="text-orange-700 font-bold mr-2">EQUATION:</span>
            <code>9-7=2</code>
          </div>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Is 2 in the HashMap?
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Yes.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            The map contains:
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            2 -&gt; 0
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Current index = 1.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Answer:
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            [0, 1]
          </p>
          <h4 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
            <span>20.4 Java implementation</span>
          </h4>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`import java.util.*;
public class Main  {
  static int[] twoSum(int[] arr, int target)  {
    HashMap<Integer, Integer> map = new HashMap<>();
    for (int i = 0; i < arr.length; i++)  {
      int complement = target - arr[i];
      if (map.containsKey(complement))  {
        return new int[] {
          map.get(complement), i
        };

      }
      map.put(arr[i], i);

    }
    return new int[] {
      -1, -1
    };

  }
  public static void main(String[] args)  {
    int[] arr =  {
      2, 7, 11, 15
    };
    System.out.println( Arrays.toString(twoSum(arr, 9)) );

  }

}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Output:
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            [0, 1]
          </p>
          <h4 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
            <span>20.5 Complexity analysis</span>
          </h4>
          <div className="overflow-x-auto my-4 rounded-xl border border-[#e7e3da] shadow-2xs">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-stone-900 border-b border-[#e7e3da] font-semibold">
                <tr>
                  <th className="px-4 py-3">Approach</th>
                  <th className="px-4 py-3">Time</th>
                  <th className="px-4 py-3">Space</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Brute force</td>
                  <td className="px-4 py-2.5 text-stone-700">\(O(n^2)\)</td>
                  <td className="px-4 py-2.5 text-stone-700">\(O(1)\)</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">HashMap</td>
                  <td className="px-4 py-2.5 text-stone-700">\(O(n)\) average</td>
                  <td className="px-4 py-2.5 text-stone-700">\(O(n)\)</td>
                </tr>
              </tbody>
            </table>
          </div>
          <h4 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
            <span>20.6 Important edge cases</span>
          </h4>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Case 1: Duplicate numbers
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            arr = [3, 3] target = 6
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Answer:
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            [0, 1]
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            The implementation handles this correctly because it checks the map before inserting the current element.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Case 2: Negative numbers
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            arr = [-3, 4, 3, 90] target = 0
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Answer:
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            [0, 2]
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Case 3: No valid pair
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            arr = [1, 2, 3] target = 10
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Answer:
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            [-1, -1]
          </p>
          <h4 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
            <span>20.7 Interview variations</span>
          </h4>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Once you understand Two Sum, practise these related problems:
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Two Sum II — Input Array Is Sorted.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Two Sum — Return All Unique Pairs.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Three Sum.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Four Sum.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Count Pairs With Given Sum.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Subarray Sum Equals K.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            These problems extend the same complement-searching and frequency-map ideas.
          </p>
      </div>
    )
  },
  {
    id: "longest-consecutive",
    number: "21",
    title: "21. Longest Consecutive Sequence (LeetCode 128)",
    category: "Part 21 · Consecutive Sequence",
    content: (
      <div className="space-y-4 text-stone-800 leading-relaxed font-sans">
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Important — LeetCode 128
          </p>
          <h4 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
            <span>21.1 Problem statement</span>
          </h4>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Given an unsorted array of integers, find the length of the longest sequence of consecutive numbers.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            The numbers do not need to appear next to each other in the original array.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Example:
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Input: [100, 4, 200, 1, 3, 2]
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            The consecutive sequence is:
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            1, 2, 3, 4
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Output:
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            4
          </p>
          <h4 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
            <span>21.2 Approach 1: Sorting</span>
          </h4>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Sort the array:
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            [100, 4, 200, 1, 3, 2]
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            After sorting:
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            [1, 2, 3, 4, 100, 200]
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Now traverse the sorted array and find the longest consecutive sequence.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Time complexity:
          </p>
          <div className="my-4 p-4 rounded-xl bg-orange-50/60 border border-orange-200/60 text-center font-mono text-sm sm:text-base text-stone-900 shadow-2xs overflow-x-auto">
            <span className="text-orange-700 font-bold mr-2">EQUATION:</span>
            <code>O(n\log n)</code>
          </div>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Because sorting dominates the algorithm.
          </p>
          <h4 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
            <span>21.3 Approach 2: HashSet optimization</span>
          </h4>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            We can solve this problem in \(O(n)\) average time using HashSet.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            The key observation:
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Only start counting when the current number is the beginning of a consecutive sequence.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            How do we identify the beginning?
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            A number is a sequence starting point if:
          </p>
          <div className="my-4 p-4 rounded-xl bg-orange-50/60 border border-orange-200/60 text-center font-mono text-sm sm:text-base text-stone-900 shadow-2xs overflow-x-auto">
            <span className="text-orange-700 font-bold mr-2">EQUATION:</span>
            <code>num-1</code>
          </div>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            does not exist in the HashSet.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Example:
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            [100, 4, 200, 1, 3, 2]
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            HashSet:
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            &#123;100, 4, 200, 1, 3, 2&#125;
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Check each number:
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            100: 99 does not exist. Start sequence.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            4: 3 exists. Not a starting point.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            200: 199 does not exist. Start sequence.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            1: 0 does not exist. Start sequence.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            3: 2 exists. Not a starting point.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            2: 1 exists. Not a starting point.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Starting at 1:
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            1 exists 2 exists 3 exists 4 exists 5 does not exist
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Sequence length = 4.
          </p>
          <h4 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
            <span>21.4 Java implementation</span>
          </h4>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`import java.util.*;
public class Main  {
  static int longestConsecutive(int[] arr)  {
    HashSet<Integer> set = new HashSet<>();
    for (int num : arr)  {
      set.add(num);

    }
    int longest = 0;
    for (int num : set)  {
      if (!set.contains(num - 1))  {
        int current = num;
        int length = 1;
        while (set.contains(current + 1))  {
          current++;
          length++;

        }
        longest = Math.max(longest, length);

      }

    }
    return longest;

  }
  public static void main(String[] args)  {
    int[] arr =  {
      100, 4, 200, 1, 3, 2
    };
    System.out.println( longestConsecutive(arr) );

  }

}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Output:
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            4
          </p>
          <h4 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
            <span>21.5 Why is this O(n) and not O(n²)?</span>
          </h4>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            This is an important interview question.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            At first glance, we have:
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            One loop over the set.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Another while loop inside it.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            That looks like nested loops.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            However, the algorithm does not repeatedly traverse the same consecutive sequence.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Only sequence starting points initiate the while loop.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Each element participates in the consecutive-sequence traversal at most once.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Therefore:
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Building the HashSet: \(O(n)\) average.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Finding sequence starts: \(O(n)\) average.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Total: \(O(n)\) average.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Space: \(O(n)\).
          </p>
          <h4 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
            <span>21.6 Edge cases</span>
          </h4>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Empty array
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            []
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Output:
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            0
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Single element
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            [10]
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Output:
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            1
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Duplicates
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            [1, 2, 2, 3, 3, 4]
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Output:
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            4
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Negative numbers
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            [-2, -1, 0, 1, 2]
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Output:
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            5
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Large gaps
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            [1, 100, 1000]
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Output:
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            1
          </p>
      </div>
    )
  },
  {
    id: "interview-patterns",
    number: "22",
    title: "22. Core Hashing Patterns for DSA Interviews",
    category: "Part 22 · Interview Patterns",
    content: (
      <div className="space-y-4 text-stone-800 leading-relaxed font-sans">
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Now that we have covered the individual topics, let's understand the reusable patterns.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            These patterns help you recognize when a problem can be solved using HashMap or HashSet.
          </p>
          <div className="overflow-x-auto my-4 rounded-xl border border-[#e7e3da] shadow-2xs">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-stone-900 border-b border-[#e7e3da] font-semibold">
                <tr>
                  <th className="px-4 py-3">Pattern</th>
                  <th className="px-4 py-3">Data structure</th>
                  <th className="px-4 py-3">Typical problem</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Fast lookup</td>
                  <td className="px-4 py-2.5 text-stone-700">HashSet</td>
                  <td className="px-4 py-2.5 text-stone-700">Contains Duplicate</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Complement lookup</td>
                  <td className="px-4 py-2.5 text-stone-700">HashMap</td>
                  <td className="px-4 py-2.5 text-stone-700">Two Sum</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Frequency counting</td>
                  <td className="px-4 py-2.5 text-stone-700">HashMap</td>
                  <td className="px-4 py-2.5 text-stone-700">Character Frequency</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Grouping</td>
                  <td className="px-4 py-2.5 text-stone-700">HashMap + List</td>
                  <td className="px-4 py-2.5 text-stone-700">Group Anagrams</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Membership checking</td>
                  <td className="px-4 py-2.5 text-stone-700">HashSet</td>
                  <td className="px-4 py-2.5 text-stone-700">Longest Consecutive Sequence</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Key-value mapping</td>
                  <td className="px-4 py-2.5 text-stone-700">HashMap</td>
                  <td className="px-4 py-2.5 text-stone-700">Index mapping</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Ordered frequency</td>
                  <td className="px-4 py-2.5 text-stone-700">TreeMap</td>
                  <td className="px-4 py-2.5 text-stone-700">Frequency sorted by key</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Recent access tracking</td>
                  <td className="px-4 py-2.5 text-stone-700">LinkedHashMap</td>
                  <td className="px-4 py-2.5 text-stone-700">LRU Cache</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Custom object lookup</td>
                  <td className="px-4 py-2.5 text-stone-700">HashMap</td>
                  <td className="px-4 py-2.5 text-stone-700">Student records</td>
                </tr>
              </tbody>
            </table>
          </div>
          <h4 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
            <span>22.1 When should you choose HashMap?</span>
          </h4>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Use HashMap when you need:
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            To associate one value with another.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            To count frequencies.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            To retrieve an index using a value.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            To find complements.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            To group elements.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            To perform fast key-based lookup.
          </p>
          <h4 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
            <span>22.2 When should you choose HashSet?</span>
          </h4>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Use HashSet when you need:
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            To remove duplicates.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            To check whether an element exists.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            To identify repeated values.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            To find unique elements.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            To check membership efficiently.
          </p>
          <h4 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
            <span>22.3 When should you choose TreeMap?</span>
          </h4>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Use TreeMap when you need:
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Sorted keys.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Minimum or maximum keys.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Range-based operations.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Predecessor and successor searches.
          </p>
          <h4 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
            <span>22.4 When should you choose LinkedHashMap?</span>
          </h4>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Use LinkedHashMap when you need:
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Insertion-order preservation.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Access-order tracking.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            LRU cache implementation.
          </p>
      </div>
    )
  },
  {
    id: "complexity-matrix",
    number: "23",
    title: "23. Overall Complexity Cheat Sheet",
    category: "Part 23 · Complexity Matrix",
    content: (
      <div className="space-y-4 text-stone-800 leading-relaxed font-sans">
          <div className="overflow-x-auto my-4 rounded-xl border border-[#e7e3da] shadow-2xs">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-stone-900 border-b border-[#e7e3da] font-semibold">
                <tr>
                  <th className="px-4 py-3">Data structure</th>
                  <th className="px-4 py-3">Search</th>
                  <th className="px-4 py-3">Insert</th>
                  <th className="px-4 py-3">Delete</th>
                  <th className="px-4 py-3">Ordering</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">HashMap</td>
                  <td className="px-4 py-2.5 text-stone-700">\(O(1)\)*</td>
                  <td className="px-4 py-2.5 text-stone-700">\(O(1)\)*</td>
                  <td className="px-4 py-2.5 text-stone-700">\(O(1)\)*</td>
                  <td className="px-4 py-2.5 text-stone-700">No guaranteed order</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">HashSet</td>
                  <td className="px-4 py-2.5 text-stone-700">\(O(1)\)*</td>
                  <td className="px-4 py-2.5 text-stone-700">\(O(1)\)*</td>
                  <td className="px-4 py-2.5 text-stone-700">\(O(1)\)*</td>
                  <td className="px-4 py-2.5 text-stone-700">No guaranteed order</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">LinkedHashMap</td>
                  <td className="px-4 py-2.5 text-stone-700">\(O(1)\)*</td>
                  <td className="px-4 py-2.5 text-stone-700">\(O(1)\)*</td>
                  <td className="px-4 py-2.5 text-stone-700">\(O(1)\)*</td>
                  <td className="px-4 py-2.5 text-stone-700">Insertion/access</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">LinkedHashSet</td>
                  <td className="px-4 py-2.5 text-stone-700">\(O(1)\)*</td>
                  <td className="px-4 py-2.5 text-stone-700">\(O(1)\)*</td>
                  <td className="px-4 py-2.5 text-stone-700">\(O(1)\)*</td>
                  <td className="px-4 py-2.5 text-stone-700">Insertion</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">TreeMap</td>
                  <td className="px-4 py-2.5 text-stone-700">\(O(\log n)\)</td>
                  <td className="px-4 py-2.5 text-stone-700">\(O(\log n)\)</td>
                  <td className="px-4 py-2.5 text-stone-700">\(O(\log n)\)</td>
                  <td className="px-4 py-2.5 text-stone-700">Sorted</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">TreeSet</td>
                  <td className="px-4 py-2.5 text-stone-700">\(O(\log n)\)</td>
                  <td className="px-4 py-2.5 text-stone-700">\(O(\log n)\)</td>
                  <td className="px-4 py-2.5 text-stone-700">\(O(\log n)\)</td>
                  <td className="px-4 py-2.5 text-stone-700">Sorted</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            *Average expected complexity under suitable hashing assumptions. Worst-case behavior can differ.
          </p>
      </div>
    )
  },
  {
    id: "interview-questions",
    number: "24",
    title: "24. Common Technical Interview Questions (Theory)",
    category: "Part 24 · Technical Q&A",
    content: (
      <div className="space-y-4 text-stone-800 leading-relaxed font-sans">
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Prepare these questions after completing the module.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            What is hashing, and why is it used?
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            What is a hash function?
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            What is a hash collision?
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Why are collisions unavoidable?
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Explain separate chaining.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Explain open addressing.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Differentiate linear probing and quadratic probing.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            What is double hashing?
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            What is primary clustering?
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            What is secondary clustering?
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            What is load factor?
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            What happens when the load factor increases?
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            What is rehashing?
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Explain HashMap internals in Java.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Why does Java HashMap use a power-of-two capacity?
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            What is hash spreading?
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            What happens when two HashMap keys have the same hash code?
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            What is treeification?
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Why does HashMap use a red-black tree?
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            How does HashSet work internally?
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            What is the difference between HashMap and LinkedHashMap?
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            What is the difference between HashMap and TreeMap?
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            What is the contract between equals() and hashCode()?
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Can two different objects have the same hash code?
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Why should mutable objects not be used as HashMap keys?
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Is HashMap thread-safe?
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            What is the difference between HashMap and Hashtable?
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            What is the difference between HashSet and TreeSet?
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            What happens when an existing HashMap key is inserted again?
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            How would you implement an LRU cache?
          </p>
      </div>
    )
  },
  {
    id: "coding-assignments",
    number: "25",
    title: "25. Practical Coding Assignments (30 Problems)",
    category: "Part 25 · Labs & Assignments",
    content: (
      <div className="space-y-4 text-stone-800 leading-relaxed font-sans">
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Complete these assignments using Java.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Hands-on Practice
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Assignment 1 — Beginner
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Implement a frequency map for an integer array.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Count the frequency of each character in a string.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Remove duplicate elements from an array.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Find the first repeated element.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Find the first non-repeating character.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Check whether two strings are anagrams.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Count distinct elements in an array.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Find the intersection of two arrays.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Find the union of two arrays.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Check whether an array contains duplicates.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Assignment 2 — Intermediate
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Two Sum.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Group Anagrams.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Find all duplicate elements.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Top K Frequent Elements.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Sort Characters by Frequency.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Intersection of Two Arrays II.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Subarray Sum Equals K.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Longest Substring Without Repeating Characters.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Find Common Characters.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Count Pairs With a Given Sum.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Assignment 3 — Advanced
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Longest Consecutive Sequence.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Minimum Window Substring.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            4Sum II.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Subarray Sums Divisible by K.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Longest Arithmetic Subsequence.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Design an LRU Cache.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Design a Custom HashMap.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Design a Custom HashSet.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Insert Delete GetRandom in O(1).
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Count Distinct Elements in Every Window.
          </p>
      </div>
    )
  },
  {
    id: "leetcode-track",
    number: "26",
    title: "26. Curated LeetCode Practice Track",
    category: "Part 26 · LeetCode Track",
    content: (
      <div className="space-y-4 text-stone-800 leading-relaxed font-sans">
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Problem numbers refer to LeetCode.
          </p>
          <div className="overflow-x-auto my-4 rounded-xl border border-[#e7e3da] shadow-2xs">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-stone-900 border-b border-[#e7e3da] font-semibold">
                <tr>
                  <th className="px-4 py-3">Problem</th>
                  <th className="px-4 py-3">Difficulty</th>
                  <th className="px-4 py-3">Main concept</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700"><a href="https://leetcode.com/problems/contains-duplicate/?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 font-medium underline inline-flex items-center gap-0.5">217. Contains Duplicate</a></td>
                  <td className="px-4 py-2.5 text-stone-700">Easy</td>
                  <td className="px-4 py-2.5 text-stone-700">HashSet</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700"><a href="https://leetcode.com/problems/two-sum/?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 font-medium underline inline-flex items-center gap-0.5">1. Two Sum</a></td>
                  <td className="px-4 py-2.5 text-stone-700">Easy</td>
                  <td className="px-4 py-2.5 text-stone-700">HashMap</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700"><a href="https://leetcode.com/problems/valid-anagram/?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 font-medium underline inline-flex items-center gap-0.5">242. Valid Anagram</a></td>
                  <td className="px-4 py-2.5 text-stone-700">Easy</td>
                  <td className="px-4 py-2.5 text-stone-700">Frequency</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700"><a href="https://leetcode.com/problems/intersection-of-two-arrays/?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 font-medium underline inline-flex items-center gap-0.5">349. Intersection of Two Arrays</a></td>
                  <td className="px-4 py-2.5 text-stone-700">Easy</td>
                  <td className="px-4 py-2.5 text-stone-700">HashSet</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700"><a href="https://leetcode.com/problems/first-unique-character-in-a-string/?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 font-medium underline inline-flex items-center gap-0.5">387. First Unique Character</a></td>
                  <td className="px-4 py-2.5 text-stone-700">Easy</td>
                  <td className="px-4 py-2.5 text-stone-700">Frequency</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700"><a href="https://leetcode.com/problems/group-anagrams/?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 font-medium underline inline-flex items-center gap-0.5">49. Group Anagrams</a></td>
                  <td className="px-4 py-2.5 text-stone-700">Medium</td>
                  <td className="px-4 py-2.5 text-stone-700">HashMap</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700"><a href="https://leetcode.com/problems/top-k-frequent-elements/?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 font-medium underline inline-flex items-center gap-0.5">347. Top K Frequent Elements</a></td>
                  <td className="px-4 py-2.5 text-stone-700">Medium</td>
                  <td className="px-4 py-2.5 text-stone-700">Frequency + Heap</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700"><a href="https://leetcode.com/problems/longest-substring-without-repeating-characters/?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 font-medium underline inline-flex items-center gap-0.5">3. Longest Substring Without Repeating Characters</a></td>
                  <td className="px-4 py-2.5 text-stone-700">Medium</td>
                  <td className="px-4 py-2.5 text-stone-700">HashSet/HashMap</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700"><a href="https://leetcode.com/problems/subarray-sum-equals-k/?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 font-medium underline inline-flex items-center gap-0.5">560. Subarray Sum Equals K</a></td>
                  <td className="px-4 py-2.5 text-stone-700">Medium</td>
                  <td className="px-4 py-2.5 text-stone-700">Prefix Sum + HashMap</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700"><a href="https://leetcode.com/problems/longest-consecutive-sequence/?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 font-medium underline inline-flex items-center gap-0.5">128. Longest Consecutive Sequence</a></td>
                  <td className="px-4 py-2.5 text-stone-700">Medium</td>
                  <td className="px-4 py-2.5 text-stone-700">HashSet</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700"><a href="https://leetcode.com/problems/lru-cache/?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 font-medium underline inline-flex items-center gap-0.5">146. LRU Cache</a></td>
                  <td className="px-4 py-2.5 text-stone-700">Medium</td>
                  <td className="px-4 py-2.5 text-stone-700">HashMap + Linked List</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700"><a href="https://leetcode.com/problems/minimum-window-substring/?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 font-medium underline inline-flex items-center gap-0.5">76. Minimum Window Substring</a></td>
                  <td className="px-4 py-2.5 text-stone-700">Hard</td>
                  <td className="px-4 py-2.5 text-stone-700">Frequency Map + Sliding Window</td>
                </tr>
              </tbody>
            </table>
          </div>
      </div>
    )
  },
  {
    id: "knowledge-check",
    number: "27",
    title: "27. Knowledge Assessment & Quiz",
    category: "Part 27 · Knowledge Check",
    content: (
      <div className="space-y-4 text-stone-800 leading-relaxed font-sans">
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Test your understanding before moving to the next module.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Module 11 assessment
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            0/8 answered
          </p>
          <h3 className="text-xl sm:text-2xl font-bold text-stone-900 mt-8 mb-3 tracking-tight border-b border-[#e7e3da] pb-2">
            1. What is the average time complexity of searching in a well-distributed HashMap?
          </h3>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            O(n)
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            O(log n)
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            O(1)
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            O(n log n)
          </p>
          <h3 className="text-xl sm:text-2xl font-bold text-stone-900 mt-8 mb-3 tracking-tight border-b border-[#e7e3da] pb-2">
            2. Which collision-resolution technique uses consecutive positions?
          </h3>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Double hashing
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Linear probing
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Quadratic probing
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Separate chaining
          </p>
          <h3 className="text-xl sm:text-2xl font-bold text-stone-900 mt-8 mb-3 tracking-tight border-b border-[#e7e3da] pb-2">
            3. What is the default load factor of Java HashMap?
          </h3>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            0.25
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            0.50
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            0.75
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            1.00
          </p>
          <h3 className="text-xl sm:text-2xl font-bold text-stone-900 mt-8 mb-3 tracking-tight border-b border-[#e7e3da] pb-2">
            4. Which data structure is internally used by HashSet?
          </h3>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            TreeMap
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            LinkedList
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            HashMap
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            ArrayDeque
          </p>
          <h3 className="text-xl sm:text-2xl font-bold text-stone-900 mt-8 mb-3 tracking-tight border-b border-[#e7e3da] pb-2">
            5. Which Java collection maintains sorted keys?
          </h3>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            HashMap
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            LinkedHashMap
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            TreeMap
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            HashSet
          </p>
          <h3 className="text-xl sm:text-2xl font-bold text-stone-900 mt-8 mb-3 tracking-tight border-b border-[#e7e3da] pb-2">
            6. If a.equals(b) is true, what must be true?
          </h3>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            a == b
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Their hash codes must be equal
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Their hash codes must differ
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            They must have different references
          </p>
          <h3 className="text-xl sm:text-2xl font-bold text-stone-900 mt-8 mb-3 tracking-tight border-b border-[#e7e3da] pb-2">
            7. Which technique generally reduces primary clustering most effectively among the three probing methods?
          </h3>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Linear probing
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Double hashing
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Separate chaining
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            None
          </p>
          <h3 className="text-xl sm:text-2xl font-bold text-stone-900 mt-8 mb-3 tracking-tight border-b border-[#e7e3da] pb-2">
            8. Which data structure is particularly useful for Longest Consecutive Sequence?
          </h3>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Stack
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Queue
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            HashSet
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            TreeMap
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Submit answers
          </p>
      </div>
    )
  },
  {
    id: "learning-outcomes",
    number: "28",
    title: "28. Learning Outcomes & Completion Strategy",
    category: "Milestone · Hashing Mastery",
    content: (
      <div className="space-y-4 text-stone-800 leading-relaxed font-sans">
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            By the end of this module, you should be able to:
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Explain hashing and hash-table operations.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Implement collision-resolution techniques.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Understand load factor and rehashing.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Explain Java HashMap internals.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Choose between HashMap, HashSet, LinkedHashMap, and TreeMap.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Implement frequency maps.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Override equals() and hashCode() correctly.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Solve anagram and duplicate-detection problems.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Optimize Two Sum using HashMap.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Solve Longest Consecutive Sequence in linear average time.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Recognize hashing patterns in unfamiliar DSA problems.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Module completion strategy
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            I recommend following this order:
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Understand hash functions, hash tables, and collisions.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Implement separate chaining and all three probing techniques.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Understand load factor and rehashing.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Study Java HashMap internals carefully.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Practise HashSet, LinkedHashMap, and TreeMap.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Master frequency maps and equals()/hashCode().
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Solve Two Sum and Group Anagrams.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Solve Longest Consecutive Sequence.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Complete the LeetCode assignments.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            Take the final assessment without referring to notes.
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            The most important lesson: Hashing is not just about learning HashMap. It is about recognizing when you can replace repeated searching with fast lookup, frequency counting, or membership checking. That ability will be useful throughout the remaining DSA modules.
          </p>
      </div>
    )
  }
];

export default JAVA_HASHING_SECTIONS;
