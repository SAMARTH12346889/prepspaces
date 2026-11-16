// Comprehensive Curriculum Sections for Java Module 6 — Recursion, Backtracking & Mathematical Foundations
import React, { useState } from "react";
import { BookOpen, ChevronRight, Hash, Sparkles, CheckCircle2, Copy, Check, Terminal, ExternalLink } from "lucide-react";

export default function JavaRecursionSections() {
  const [activeSectionId, setActiveSectionId] = useState(0);
  const [copiedId, setCopiedId] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const handleCopy = (id, text) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const sections = [
    {
      id: 0,
      title: "Module 6: Complete Curriculum Specification",
      category: "Course Roadmap · Overview",
      anchor: "overview",
      render: () => (
        <div className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-black text-white mt-10 mb-4 pb-2 border-b border-slate-800 tracking-tight">
            Module Overview
          </h2>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Recursion and backtracking are fundamental problem-solving techniques used in computer science.</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Many programming problems cannot be solved conveniently using a straightforward sequence of instructions. Some problems require exploring multiple possible choices, dividing a large problem into smaller instances, or finding a valid configuration among many possibilities.</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Examples include:</p>
          <ul className="list-disc list-outside pl-5 space-y-2 text-slate-300 my-3 text-sm leading-relaxed">
            <li>Generating all possible combinations of items.</li>
            <li>Finding every permutation of a sequence.</li>
            <li>Solving Sudoku puzzles.</li>
            <li>Finding paths through a maze.</li>
            <li>Placing queens on a chessboard without conflicts.</li>
            <li>Generating all subsets of a collection.</li>
            <li>Exploring possible arrangements and configurations.</li>
            <li>Solving mathematical problems recursively.</li>
          </ul>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">This module develops the mathematical reasoning and programming techniques needed to solve these problems systematically.</p>
          <hr className="my-8 border-slate-800" />
        </div>
      ),
    },
    {
      id: 1,
      title: "1. Understanding Recursion",
      category: "Part 1 · Recursive Thinking",
      anchor: "section-1",
      render: () => (
        <div className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-black text-white mt-10 mb-4 pb-2 border-b border-slate-800 tracking-tight">
            1.1 What is recursion?
          </h2>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Recursion is a programming technique in which a method calls itself to solve a smaller instance of the same problem.</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Instead of solving the entire problem in one operation, a recursive algorithm breaks the problem into progressively smaller subproblems.</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">It continues until it reaches a condition where the answer can be obtained directly.</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">That condition is called the <strong className="font-semibold text-white">base case</strong>.</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Consider the problem of counting backwards from 5 to 1.</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">An iterative solution uses a loop:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public class CountdownIteration {

    public static void main(String[] args) {

        for (int i = 5; i >= 1; i--) {

            System.out.println(i);
        }
    }
}`}</code>
            </pre>
          </div>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">A recursive solution uses a method that calls itself:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public class CountdownRecursion {

    static void countdown(int number) {

        if (number == 0) {
            return;
        }

        System.out.println(number);

        countdown(number - 1);
    }

    public static void main(String[] args) {

        countdown(5);
    }
}`}</code>
            </pre>
          </div>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Output:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`5
4
3
2
1`}</code>
            </pre>
          </div>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">The method repeatedly calls itself with a smaller number.</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">The recursion eventually stops when the argument becomes zero.</p>
          <h2 className="text-xl sm:text-2xl font-black text-white mt-10 mb-4 pb-2 border-b border-slate-800 tracking-tight">
            1.2 Why is recursion important?
          </h2>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Recursion is especially useful when problems naturally contain smaller versions of the original problem.</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Examples:</p>
          <div className="overflow-x-auto my-4 rounded-xl border border-slate-800 shadow-2xs">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-white border-b border-slate-800 font-semibold">
                <tr>
                  <th className="px-4 py-3">Problem</th>
                  <th className="px-4 py-3">Recursive relationship</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">Factorial</td>
                  <td className="px-4 py-2.5 text-slate-300">n multiplied by factorial of n - 1</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">Fibonacci</td>
                  <td className="px-4 py-2.5 text-slate-300">Sum of the previous two Fibonacci values</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">Binary search</td>
                  <td className="px-4 py-2.5 text-slate-300">Search one half of a sorted range</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">Tree traversal</td>
                  <td className="px-4 py-2.5 text-slate-300">Process a node and recursively process children</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">Subsets</td>
                  <td className="px-4 py-2.5 text-slate-300">Include or exclude an element</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">Permutations</td>
                  <td className="px-4 py-2.5 text-slate-300">Choose an element and arrange the remaining elements</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">Maze solving</td>
                  <td className="px-4 py-2.5 text-slate-300">Choose a direction and explore the resulting position</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">N-Queens</td>
                  <td className="px-4 py-2.5 text-slate-300">Place a queen and recursively place the remaining queens</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Recursion is also important because it introduces a different way of thinking about algorithms.</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Rather than thinking about every operation individually, a programmer defines:</p>
          <div className="flex items-start gap-3 my-2.5 text-sm text-slate-300 leading-relaxed">
            <span className="flex items-center justify-center w-6 h-6 rounded-md bg-slate-950 border border-slate-800 text-slate-200 font-mono text-xs font-bold shrink-0 mt-0.5">1</span>
            <div className="flex-1">What the smallest solvable problem looks like.</div>
          </div>
          <div className="flex items-start gap-3 my-2.5 text-sm text-slate-300 leading-relaxed">
            <span className="flex items-center justify-center w-6 h-6 rounded-md bg-slate-950 border border-slate-800 text-slate-200 font-mono text-xs font-bold shrink-0 mt-0.5">2</span>
            <div className="flex-1">How a larger problem can be reduced.</div>
          </div>
          <div className="flex items-start gap-3 my-2.5 text-sm text-slate-300 leading-relaxed">
            <span className="flex items-center justify-center w-6 h-6 rounded-md bg-slate-950 border border-slate-800 text-slate-200 font-mono text-xs font-bold shrink-0 mt-0.5">3</span>
            <div className="flex-1">How the smaller answer contributes to the larger answer.</div>
          </div>
          <hr className="my-8 border-slate-800" />
        </div>
      ),
    },
    {
      id: 2,
      title: "2. Recursive Function Design",
      category: "Part 1 · Four-Step Design Method",
      anchor: "section-2",
      render: () => (
        <div className="space-y-4">
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Designing a recursive function requires a systematic approach.</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">A recursive method should have:</p>
          <ul className="list-disc list-outside pl-5 space-y-2 text-slate-300 my-3 text-sm leading-relaxed">
            <li>A clearly defined problem.</li>
            <li>A base case.</li>
            <li>A recursive case.</li>
            <li>Progress toward termination.</li>
            <li>A correct way to combine or return results.</li>
          </ul>
          <h2 className="text-xl sm:text-2xl font-black text-white mt-10 mb-4 pb-2 border-b border-slate-800 tracking-tight">
            2.1 The four-step recursive design method
          </h2>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed"><strong className="font-semibold text-white">Step 1 — Identify the smaller problem</strong></p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Determine whether the original problem can be reduced to a smaller version of itself.</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed"><strong className="font-semibold text-white">Step 2 — Define the base case</strong></p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Identify the simplest possible input whose result is already known.</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed"><strong className="font-semibold text-white">Step 3 — Define the recursive case</strong></p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Write how the current result depends on a smaller problem.</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed"><strong className="font-semibold text-white">Step 4 — Ensure progress</strong></p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Make sure every recursive call moves toward the base case.</p>
          <h3 className="text-lg font-bold text-white mt-8 mb-3 pb-1 border-b border-slate-800/60 flex items-center gap-2">
            <span className="w-1.5 h-4 rounded-full bg-orange-600 inline-block"></span>
            General recursive structure
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`returnType recursiveMethod(parameters) {

    if (baseCondition) {

        return baseResult;
    }

    // Reduce the problem

    return recursiveMethod(smallerInput);
}`}</code>
            </pre>
          </div>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">For a recursive method returning a value, every valid execution path must satisfy Java's return requirements.</p>
          <h2 className="text-xl sm:text-2xl font-black text-white mt-10 mb-4 pb-2 border-b border-slate-800 tracking-tight">
            2.2 Example: Sum of natural numbers
          </h2>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Problem:</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Calculate the sum of the first n natural numbers.</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">For example:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`1 + 2 + 3 + 4 + 5 = 15`}</code>
            </pre>
          </div>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">We can define the problem recursively.</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">The sum of the first five numbers is:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`5 + sum of the first four numbers`}</code>
            </pre>
          </div>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">The sum of the first four numbers is:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`4 + sum of the first three numbers`}</code>
            </pre>
          </div>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Eventually, the calculation reaches zero.</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Mathematical definition:</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">\[</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">S(n)=</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">\begin&#123;cases&#125;</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">0 &amp; n=0\\</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">n+S(n-1) &amp; n&gt;0</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">\end&#123;cases&#125;</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">\]</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Java implementation:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public class NaturalNumberSum {

    static int sum(int n) {

        if (n == 0) {
            return 0;
        }

        return n + sum(n - 1);
    }

    public static void main(String[] args) {

        System.out.println(sum(5));
    }
}`}</code>
            </pre>
          </div>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Output:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`15`}</code>
            </pre>
          </div>
          <h3 className="text-lg font-bold text-white mt-8 mb-3 pb-1 border-b border-slate-800/60 flex items-center gap-2">
            <span className="w-1.5 h-4 rounded-full bg-orange-600 inline-block"></span>
            Execution trace
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`sum(5)
  |
  v
5 + sum(4)
      |
      v
      4 + sum(3)
            |
            v
            3 + sum(2)
                  |
                  v
                  2 + sum(1)
                        |
                        v
                        1 + sum(0)
                              |
                              v
                              0`}</code>
            </pre>
          </div>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">The calls return:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`sum(0) = 0
sum(1) = 1
sum(2) = 3
sum(3) = 6
sum(4) = 10
sum(5) = 15`}</code>
            </pre>
          </div>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Time complexity: O(n).</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Auxiliary space complexity: O(n), because the recursive calls create stack frames.</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">An iterative approach can calculate the same result using O(1) auxiliary space.</p>
          <h2 className="text-xl sm:text-2xl font-black text-white mt-10 mb-4 pb-2 border-b border-slate-800 tracking-tight">
            2.3 Example: Factorial
          </h2>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Factorial is another fundamental recursive problem.</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">For a non-negative integer n:</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">\[</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">n! = 1 \times 2 \times 3 \times \cdots \times n</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">\]</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">The base cases are:</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">\[</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">0!=1,\qquad 1!=1</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">\]</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Java:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public class Factorial {

    static long factorial(int n) {

        if (n < 0) {

            throw new IllegalArgumentException(
                    "Negative factorial is undefined"
            );
        }

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
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Output:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`120`}</code>
            </pre>
          </div>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Important: A <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">long</code> cannot store arbitrarily large factorials. Java's long type has a finite range, so sufficiently large values overflow.</p>
          <h2 className="text-xl sm:text-2xl font-black text-white mt-10 mb-4 pb-2 border-b border-slate-800 tracking-tight">
            2.4 Example: Power calculation
          </h2>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Calculate:</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">\[</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">a^n</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">\]</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">where n is a non-negative integer.</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">A recursive definition is:</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">\[</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">power(a,n)=</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">\begin&#123;cases&#125;</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">1 &amp; n=0\\</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">a \times power(a,n-1) &amp; n&gt;0</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">\end&#123;cases&#125;</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">\]</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Java:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public class PowerCalculator {

    static long power(long base, int exponent) {

        if (exponent < 0) {

            throw new IllegalArgumentException(
                    "Exponent must be non-negative"
            );
        }

        if (exponent == 0) {
            return 1;
        }

        return base * power(base, exponent - 1);
    }

    public static void main(String[] args) {

        System.out.println(power(2, 5));
    }
}`}</code>
            </pre>
          </div>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Output:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`32`}</code>
            </pre>
          </div>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">The algorithm makes n recursive calls.</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">A faster alternative using exponentiation by squaring will be covered later in this module.</p>
          <h2 className="text-xl sm:text-2xl font-black text-white mt-10 mb-4 pb-2 border-b border-slate-800 tracking-tight">
            2.5 Example: Reverse an array recursively
          </h2>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Problem:</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Given:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`[10, 20, 30, 40, 50]`}</code>
            </pre>
          </div>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Produce:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`[50, 40, 30, 20, 10]`}</code>
            </pre>
          </div>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">The recursive idea is:</p>
          <ul className="list-disc list-outside pl-5 space-y-2 text-slate-300 my-3 text-sm leading-relaxed">
            <li>Swap the first and last elements.</li>
            <li>Move inward.</li>
            <li>Continue until the pointers meet.</li>
          </ul>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Java:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`import java.util.Arrays;

public class RecursiveArrayReverse {

    static void reverse(
            int[] numbers,
            int left,
            int right
    ) {

        if (left >= right) {
            return;
        }

        int temp = numbers[left];

        numbers[left] = numbers[right];

        numbers[right] = temp;

        reverse(numbers, left + 1, right - 1);
    }

    public static void main(String[] args) {

        int[] numbers = {10, 20, 30, 40, 50};

        reverse(numbers, 0, numbers.length - 1);

        System.out.println(Arrays.toString(numbers));
    }
}`}</code>
            </pre>
          </div>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Output:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`[50, 40, 30, 20, 10]`}</code>
            </pre>
          </div>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Time complexity: O(n).</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Auxiliary space complexity: O(n) because of recursion.</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">The algorithm performs only O(1) additional work per recursive call.</p>
          <hr className="my-8 border-slate-800" />
        </div>
      ),
    },
    {
      id: 3,
      title: "3. Base Cases and Recursive Cases",
      category: "Part 1 · Termination & Progress",
      anchor: "section-3",
      render: () => (
        <div className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-black text-white mt-10 mb-4 pb-2 border-b border-slate-800 tracking-tight">
            3.1 What is a base case?
          </h2>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">The base case identifies when recursion must stop.</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">It provides an answer without making another recursive call.</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Example:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`if (n == 0) {
    return 1;
}`}</code>
            </pre>
          </div>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">This is the base case for a factorial implementation.</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Without a base case, recursion may continue indefinitely.</p>
          <h2 className="text-xl sm:text-2xl font-black text-white mt-10 mb-4 pb-2 border-b border-slate-800 tracking-tight">
            3.2 What is a recursive case?
          </h2>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">The recursive case defines how the method reduces the current problem into a smaller problem.</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Example:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`return n * factorial(n - 1);`}</code>
            </pre>
          </div>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">The method calls itself using a smaller input.</p>
          <h2 className="text-xl sm:text-2xl font-black text-white mt-10 mb-4 pb-2 border-b border-slate-800 tracking-tight">
            3.3 Why must recursion make progress?
          </h2>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Consider:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`static void problem(int n) {

    if (n == 0) {
        return;
    }

    problem(n);
}`}</code>
            </pre>
          </div>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">This method never changes its input.</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">If the initial input is 5, the base case is never reached.</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">This eventually causes a StackOverflowError under ordinary execution.</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Correct:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`static void problem(int n) {

    if (n == 0) {
        return;
    }

    problem(n - 1);
}`}</code>
            </pre>
          </div>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">The argument gradually approaches zero.</p>
          <h2 className="text-xl sm:text-2xl font-black text-white mt-10 mb-4 pb-2 border-b border-slate-800 tracking-tight">
            3.4 Multiple base cases
          </h2>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Some recursive problems require more than one base case.</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Example: Fibonacci.</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">\[</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">F(0)=0,\qquad F(1)=1</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">\]</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Recursive case:</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">\[</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">F(n)=F(n-1)+F(n-2)</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">\]</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Java:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`static int fibonacci(int n) {

    if (n == 0) {
        return 0;
    }

    if (n == 1) {
        return 1;
    }

    return fibonacci(n - 1) +
           fibonacci(n - 2);
}`}</code>
            </pre>
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-white mt-10 mb-4 pb-2 border-b border-slate-800 tracking-tight">
            3.5 Designing robust base cases
          </h2>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">A good recursive implementation should consider:</p>
          <ul className="list-disc list-outside pl-5 space-y-2 text-slate-300 my-3 text-sm leading-relaxed">
            <li>The smallest valid input.</li>
            <li>Empty input.</li>
            <li>Single-element input.</li>
            <li>Invalid input.</li>
            <li>Negative values.</li>
            <li>Overflow conditions.</li>
            <li>Whether the recursive call always progresses.</li>
          </ul>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">For array recursion, a base case might be:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`if (index == numbers.length) {
    return;
}`}</code>
            </pre>
          </div>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">For tree recursion, a base case might be:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`if (root == null) {
    return;
}`}</code>
            </pre>
          </div>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">For substring recursion:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`if (left >= right) {
    return true;
}`}</code>
            </pre>
          </div>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">The base case depends on the structure of the problem.</p>
          <hr className="my-8 border-slate-800" />
        </div>
      ),
    },
    {
      id: 4,
      title: "4. Understanding the Call Stack",
      category: "Part 2 · Runtime Stack Frames",
      anchor: "section-4",
      render: () => (
        <div className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-black text-white mt-10 mb-4 pb-2 border-b border-slate-800 tracking-tight">
            4.1 What is a call stack?
          </h2>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">The call stack is a runtime structure used to manage method invocations.</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">When a method is called, the runtime creates an activation frame containing information needed for that invocation.</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">This commonly includes:</p>
          <ul className="list-disc list-outside pl-5 space-y-2 text-slate-300 my-3 text-sm leading-relaxed">
            <li>Local variables.</li>
            <li>Parameters.</li>
            <li>Return information.</li>
            <li>Operand and execution state.</li>
          </ul>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">When a method finishes, its frame is removed from the stack.</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Java normally uses a thread-specific stack for method invocation management.</p>
          <h2 className="text-xl sm:text-2xl font-black text-white mt-10 mb-4 pb-2 border-b border-slate-800 tracking-tight">
            4.2 How recursion uses the call stack
          </h2>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Consider:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public class StackExample {

    static void count(int n) {

        if (n == 0) {
            return;
        }

        System.out.println("Entering: " + n);

        count(n - 1);

        System.out.println("Returning: " + n);
    }

    public static void main(String[] args) {

        count(3);
    }
}`}</code>
            </pre>
          </div>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Output:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Entering: 3
Entering: 2
Entering: 1
Returning: 1
Returning: 2
Returning: 3`}</code>
            </pre>
          </div>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Notice that method execution occurs in two phases:</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed"><strong className="font-semibold text-white">Recursive descent:</strong> Calls are created until the base case is reached.</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed"><strong className="font-semibold text-white">Stack unwinding:</strong> Calls return in reverse order.</p>
          <h2 className="text-xl sm:text-2xl font-black text-white mt-10 mb-4 pb-2 border-b border-slate-800 tracking-tight">
            4.3 Call stack visualization
          </h2>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">For <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">count(3)</code>:</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">&lt;text color="secondary" weight="medium" size="xs"&gt;RECURSIVE CALL STACK&lt;/text&gt;</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`First call:

main()
  |
count(3)
  |
count(2)
  |
count(1)
  |
count(0)  ← base case`}</code>
            </pre>
          </div>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">The last call finishes first.</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Then:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`count(0) returns
       |
       v
count(1) returns
       |
       v
count(2) returns
       |
       v
count(3) returns
       |
       v
main() continues`}</code>
            </pre>
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-white mt-10 mb-4 pb-2 border-b border-slate-800 tracking-tight">
            4.4 Stack frames in factorial
          </h2>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Consider <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">factorial(4)</code>.</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">During recursive descent:</p>
          <div className="overflow-x-auto my-4 rounded-xl border border-slate-800 shadow-2xs">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-white border-b border-slate-800 font-semibold">
                <tr>
                  <th className="px-4 py-3">Frame</th>
                  <th className="px-4 py-3">Parameter</th>
                  <th className="px-4 py-3">Pending operation</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">1</td>
                  <td className="px-4 py-2.5 text-slate-300">4</td>
                  <td className="px-4 py-2.5 text-slate-300">4 × factorial(3)</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">2</td>
                  <td className="px-4 py-2.5 text-slate-300">3</td>
                  <td className="px-4 py-2.5 text-slate-300">3 × factorial(2)</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">3</td>
                  <td className="px-4 py-2.5 text-slate-300">2</td>
                  <td className="px-4 py-2.5 text-slate-300">2 × factorial(1)</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">4</td>
                  <td className="px-4 py-2.5 text-slate-300">1</td>
                  <td className="px-4 py-2.5 text-slate-300">Base case returns 1</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">During stack unwinding:</p>
          <div className="overflow-x-auto my-4 rounded-xl border border-slate-800 shadow-2xs">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-white border-b border-slate-800 font-semibold">
                <tr>
                  <th className="px-4 py-3">Frame</th>
                  <th className="px-4 py-3">Calculation</th>
                  <th className="px-4 py-3">Result</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">factorial(1)</td>
                  <td className="px-4 py-2.5 text-slate-300">1</td>
                  <td className="px-4 py-2.5 text-slate-300">1</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">factorial(2)</td>
                  <td className="px-4 py-2.5 text-slate-300">2 × 1</td>
                  <td className="px-4 py-2.5 text-slate-300">2</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">factorial(3)</td>
                  <td className="px-4 py-2.5 text-slate-300">3 × 2</td>
                  <td className="px-4 py-2.5 text-slate-300">6</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">factorial(4)</td>
                  <td className="px-4 py-2.5 text-slate-300">4 × 6</td>
                  <td className="px-4 py-2.5 text-slate-300">24</td>
                </tr>
              </tbody>
            </table>
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-white mt-10 mb-4 pb-2 border-b border-slate-800 tracking-tight">
            4.5 What is StackOverflowError?
          </h2>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Every method invocation requires runtime resources.</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">An extremely deep recursion can exhaust the available stack space.</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Example:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public class StackOverflow {

    static void repeat() {

        repeat();
    }

    public static void main(String[] args) {

        repeat();
    }
}`}</code>
            </pre>
          </div>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">This method never reaches a return condition.</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Eventually, StackOverflowError may occur.</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Common causes include:</p>
          <ul className="list-disc list-outside pl-5 space-y-2 text-slate-300 my-3 text-sm leading-relaxed">
            <li>Missing base cases.</li>
            <li>Incorrect recursive progression.</li>
            <li>Excessive recursion depth.</li>
            <li>Unexpected cycles in recursive structures.</li>
          </ul>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">There is no single guaranteed maximum recursion depth. It depends on the runtime environment, stack configuration, frame size, and implementation.</p>
          <hr className="my-8 border-slate-800" />
        </div>
      ),
    },
    {
      id: 5,
      title: "5. Recursion Tree Visualization",
      category: "Part 2 · Branching & Memoization",
      anchor: "section-5",
      render: () => (
        <div className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-black text-white mt-10 mb-4 pb-2 border-b border-slate-800 tracking-tight">
            5.1 What is a recursion tree?
          </h2>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">A recursion tree is a diagram showing how a recursive algorithm divides its input into smaller recursive calls.</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Each node represents a method invocation.</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Each branch represents a recursive call made by that invocation.</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Recursion trees are useful for:</p>
          <ul className="list-disc list-outside pl-5 space-y-2 text-slate-300 my-3 text-sm leading-relaxed">
            <li>Visualizing recursive execution.</li>
            <li>Understanding branching.</li>
            <li>Calculating the number of calls.</li>
            <li>Estimating time complexity.</li>
            <li>Identifying repeated computations.</li>
          </ul>
          <h2 className="text-xl sm:text-2xl font-black text-white mt-10 mb-4 pb-2 border-b border-slate-800 tracking-tight">
            5.2 Example: Fibonacci recursion tree
          </h2>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">The Fibonacci function is defined as:</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">\[</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">F(n)=F(n-1)+F(n-2)</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">\]</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Consider:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`static int fibonacci(int n) {

    if (n <= 1) {
        return n;
    }

    return fibonacci(n - 1) +
           fibonacci(n - 2);
}`}</code>
            </pre>
          </div>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">For <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">fibonacci(4)</code>:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`                  F(4)
                 /    \\
              F(3)    F(2)
             /   \\     /  \\
          F(2)  F(1) F(1) F(0)
          /  \\
       F(1) F(0)`}</code>
            </pre>
          </div>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">The recursion tree reveals an important inefficiency.</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed"><code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">F(2)</code> is calculated multiple times.</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Likewise, many smaller Fibonacci values are recomputed.</p>
          <h2 className="text-xl sm:text-2xl font-black text-white mt-10 mb-4 pb-2 border-b border-slate-800 tracking-tight">
            5.3 Why repeated calculations are expensive
          </h2>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Suppose we calculate:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`F(5)`}</code>
            </pre>
          </div>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">The same subproblems appear repeatedly.</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">A simple recursive algorithm performs redundant work.</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Its recurrence is approximately:</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">\[</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">T(n)=T(n-1)+T(n-2)+O(1)</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">\]</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Its running time grows exponentially.</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">A common upper-bound description is O(2ⁿ).</p>
          <h2 className="text-xl sm:text-2xl font-black text-white mt-10 mb-4 pb-2 border-b border-slate-800 tracking-tight">
            5.4 Improving Fibonacci through memoization
          </h2>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Memoization stores results that have already been calculated.</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Instead of solving the same smaller problem repeatedly, the program reuses its stored answer.</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`import java.util.Arrays;

public class FibonacciMemoization {

    static long fibonacci(
            int n,
            long[] memo
    ) {

        if (n <= 1) {
            return n;
        }

        if (memo[n] != -1) {

            return memo[n];
        }

        memo[n] =
                fibonacci(n - 1, memo) +
                fibonacci(n - 2, memo);

        return memo[n];
    }

    public static void main(String[] args) {

        int n = 10;

        long[] memo = new long[n + 1];

        Arrays.fill(memo, -1);

        System.out.println(fibonacci(n, memo));
    }
}`}</code>
            </pre>
          </div>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Output:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`55`}</code>
            </pre>
          </div>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Time complexity: O(n).</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Auxiliary space complexity: O(n) for memoization and recursion frames.</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">This introduces the idea of dynamic programming, which will be studied in a later DSA section.</p>
          <h2 className="text-xl sm:text-2xl font-black text-white mt-10 mb-4 pb-2 border-b border-slate-800 tracking-tight">
            5.5 Recursive problems with different branching patterns
          </h2>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Not every recursion tree branches in the same way.</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed"><strong className="font-semibold text-white">Single recursive call</strong></p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Example: Factorial.</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`f(5)
 |
f(4)
 |
f(3)
 |
f(2)
 |
f(1)`}</code>
            </pre>
          </div>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed"><strong className="font-semibold text-white">Two recursive calls</strong></p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Example: Fibonacci.</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`        f(n)
       /    \\
    f(n-1) f(n-2)`}</code>
            </pre>
          </div>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed"><strong className="font-semibold text-white">Multiple recursive calls</strong></p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Example: Exploring all possible choices in a search problem.</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`             State
          /    |    \\
         A     B     C
        / \\   / \\   / \\
       ...   ...   ...`}</code>
            </pre>
          </div>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">The branching structure plays an important role in complexity analysis.</p>
          <hr className="my-8 border-slate-800" />
        </div>
      ),
    },
    {
      id: 6,
      title: "6. Tail and Non-Tail Recursion",
      category: "Part 2 · Accumulators & JVM Stack",
      anchor: "section-6",
      render: () => (
        <div className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-black text-white mt-10 mb-4 pb-2 border-b border-slate-800 tracking-tight">
            6.1 What is tail recursion?
          </h2>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Tail recursion occurs when a recursive method performs its recursive call as the final operation before returning.</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">There should be no additional computation that depends on the recursive call's result after it returns.</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Example:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public class TailRecursion {

    static void countdown(int n) {

        if (n == 0) {
            return;
        }

        System.out.println(n);

        countdown(n - 1);
    }

    public static void main(String[] args) {

        countdown(5);
    }
}`}</code>
            </pre>
          </div>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">The recursive call is the final operation of the method.</p>
          <h2 className="text-xl sm:text-2xl font-black text-white mt-10 mb-4 pb-2 border-b border-slate-800 tracking-tight">
            6.2 Tail-recursive factorial
          </h2>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">A conventional factorial implementation is:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`static long factorial(int n) {

    if (n <= 1) {
        return 1;
    }

    return n * factorial(n - 1);
}`}</code>
            </pre>
          </div>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">This is not tail recursive because multiplication is still required after the recursive call returns.</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">A tail-recursive version uses an accumulator.</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public class TailRecursiveFactorial {

    static long factorial(
            int n,
            long accumulator
    ) {

        if (n < 0) {

            throw new IllegalArgumentException(
                    "Negative input"
            );
        }

        if (n == 0 || n == 1) {

            return accumulator;
        }

        return factorial(
                n - 1,
                accumulator * n
        );
    }

    public static void main(String[] args) {

        System.out.println(factorial(5, 1));
    }
}`}</code>
            </pre>
          </div>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Output:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`120`}</code>
            </pre>
          </div>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">The accumulator maintains the result built so far.</p>
          <h2 className="text-xl sm:text-2xl font-black text-white mt-10 mb-4 pb-2 border-b border-slate-800 tracking-tight">
            6.3 What is non-tail recursion?
          </h2>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Non-tail recursion occurs when additional work remains after the recursive call returns.</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Example:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
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
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">The multiplication must happen after the recursive result becomes available.</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Another example:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`static void printReverse(int n) {

    if (n == 0) {
        return;
    }

    printReverse(n - 1);

    System.out.println(n);
}`}</code>
            </pre>
          </div>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">The print statement runs after the recursive call returns.</p>
          <h2 className="text-xl sm:text-2xl font-black text-white mt-10 mb-4 pb-2 border-b border-slate-800 tracking-tight">
            6.4 Tail versus non-tail recursion
          </h2>
          <div className="overflow-x-auto my-4 rounded-xl border border-slate-800 shadow-2xs">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-white border-b border-slate-800 font-semibold">
                <tr>
                  <th className="px-4 py-3">Feature</th>
                  <th className="px-4 py-3">Tail recursion</th>
                  <th className="px-4 py-3">Non-tail recursion</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">Recursive call</td>
                  <td className="px-4 py-2.5 text-slate-300">Final operation</td>
                  <td className="px-4 py-2.5 text-slate-300">Additional work follows the recursive call</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">Typical example</td>
                  <td className="px-4 py-2.5 text-slate-300">Accumulator-based factorial</td>
                  <td className="px-4 py-2.5 text-slate-300">Standard factorial</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">Pending computation</td>
                  <td className="px-4 py-2.5 text-slate-300">Often reduced</td>
                  <td className="px-4 py-2.5 text-slate-300">May remain on every stack frame</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">Stack usage</td>
                  <td className="px-4 py-2.5 text-slate-300">Can be optimized by runtimes that support tail-call elimination</td>
                  <td className="px-4 py-2.5 text-slate-300">Normally uses recursive stack frames</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">Java behavior</td>
                  <td className="px-4 py-2.5 text-slate-300">No guaranteed tail-call optimization</td>
                  <td className="px-4 py-2.5 text-slate-300">Stack frames are required</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed"><strong className="font-semibold text-white">Important Java detail:</strong> Java does not guarantee tail-call optimization. Therefore, converting an algorithm into tail-recursive form does not guarantee constant stack space.</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">For deep recursive operations, an iterative implementation may be preferable in Java.</p>
          <hr className="my-8 border-slate-800" />
        </div>
      ),
    },
    {
      id: 7,
      title: "7. Recursion Versus Iteration",
      category: "Part 3 · Trade-offs & Efficiency",
      anchor: "section-7",
      render: () => (
        <div className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-black text-white mt-10 mb-4 pb-2 border-b border-slate-800 tracking-tight">
            7.1 What is iteration?
          </h2>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Iteration means repeating operations using looping statements.</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Java provides:</p>
          <ul className="list-disc list-outside pl-5 space-y-2 text-slate-300 my-3 text-sm leading-relaxed">
            <li>for.</li>
            <li>while.</li>
            <li>do-while.</li>
          </ul>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Example: Factorial using iteration.</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public class IterativeFactorial {

    static long factorial(int n) {

        if (n < 0) {

            throw new IllegalArgumentException(
                    "Negative input"
            );
        }

        long result = 1;

        for (int i = 2; i <= n; i++) {

            result *= i;
        }

        return result;
    }

    public static void main(String[] args) {

        System.out.println(factorial(5));
    }
}`}</code>
            </pre>
          </div>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Output:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`120`}</code>
            </pre>
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-white mt-10 mb-4 pb-2 border-b border-slate-800 tracking-tight">
            7.2 Comparing recursion and iteration
          </h2>
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
                  <td className="px-4 py-2.5 text-slate-300">Uses method calls</td>
                  <td className="px-4 py-2.5 text-slate-300">Uses loops</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">Requires a terminating base case</td>
                  <td className="px-4 py-2.5 text-slate-300">Requires a terminating loop condition</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">Uses call-stack resources</td>
                  <td className="px-4 py-2.5 text-slate-300">Usually uses constant loop-control space</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">Often natural for recursive structures</td>
                  <td className="px-4 py-2.5 text-slate-300">Often natural for sequential repetition</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">Can express divide-and-conquer elegantly</td>
                  <td className="px-4 py-2.5 text-slate-300">Often easier to optimize for simple repetition</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">May create many stack frames</td>
                  <td className="px-4 py-2.5 text-slate-300">Avoids recursive call depth</td>
                </tr>
              </tbody>
            </table>
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-white mt-10 mb-4 pb-2 border-b border-slate-800 tracking-tight">
            7.3 When should recursion be used?
          </h2>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Recursion is especially useful for:</p>
          <ul className="list-disc list-outside pl-5 space-y-2 text-slate-300 my-3 text-sm leading-relaxed">
            <li>Tree traversal.</li>
            <li>Recursive mathematical definitions.</li>
            <li>Permutation generation.</li>
            <li>Subset generation.</li>
            <li>Backtracking.</li>
            <li>Divide-and-conquer algorithms.</li>
            <li>Hierarchical data processing.</li>
          </ul>
          <h2 className="text-xl sm:text-2xl font-black text-white mt-10 mb-4 pb-2 border-b border-slate-800 tracking-tight">
            7.4 When should iteration be used?
          </h2>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Iteration is often preferable when:</p>
          <ul className="list-disc list-outside pl-5 space-y-2 text-slate-300 my-3 text-sm leading-relaxed">
            <li>The problem is a simple counter-controlled loop.</li>
            <li>Recursion would become unnecessarily deep.</li>
            <li>Memory usage must remain small.</li>
            <li>A straightforward loop is easier to understand.</li>
            <li>Java recursion depth could become problematic.</li>
          </ul>
          <h2 className="text-xl sm:text-2xl font-black text-white mt-10 mb-4 pb-2 border-b border-slate-800 tracking-tight">
            7.5 Performance comparison
          </h2>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Consider calculating the sum from 1 through n.</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Recursive version:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`static long sumRecursive(int n) {

    if (n == 0) {
        return 0;
    }

    return n + sumRecursive(n - 1);
}`}</code>
            </pre>
          </div>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Iterative version:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`static long sumIterative(int n) {

    long sum = 0;

    for (int i = 1; i <= n; i++) {

        sum += i;
    }

    return sum;
}`}</code>
            </pre>
          </div>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Both require O(n) time.</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">However:</p>
          <ul className="list-disc list-outside pl-5 space-y-2 text-slate-300 my-3 text-sm leading-relaxed">
            <li>The recursive version uses O(n) stack space.</li>
            <li>The iterative version uses O(1) auxiliary space.</li>
          </ul>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">For this problem, iteration is generally more memory-efficient.</p>
          <hr className="my-8 border-slate-800" />
        </div>
      ),
    },
    {
      id: 8,
      title: "8. Mathematical Induction",
      category: "Part 3 · Proofs & Correctness",
      anchor: "section-8",
      render: () => (
        <div className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-black text-white mt-10 mb-4 pb-2 border-b border-slate-800 tracking-tight">
            8.1 What is mathematical induction?
          </h2>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Mathematical induction is a proof technique used to establish that a mathematical statement holds for every integer in a specified range, usually all non-negative integers or all positive integers.</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">It is closely related to recursive algorithm correctness.</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">It consists of two essential stages:</p>
          <div className="flex items-start gap-3 my-2.5 text-sm text-slate-300 leading-relaxed">
            <span className="flex items-center justify-center w-6 h-6 rounded-md bg-slate-950 border border-slate-800 text-slate-200 font-mono text-xs font-bold shrink-0 mt-0.5">1</span>
            <div className="flex-1">Base case.</div>
          </div>
          <div className="flex items-start gap-3 my-2.5 text-sm text-slate-300 leading-relaxed">
            <span className="flex items-center justify-center w-6 h-6 rounded-md bg-slate-950 border border-slate-800 text-slate-200 font-mono text-xs font-bold shrink-0 mt-0.5">2</span>
            <div className="flex-1">Inductive step.</div>
          </div>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">The central idea is:</p>
          <ul className="list-disc list-outside pl-5 space-y-2 text-slate-300 my-3 text-sm leading-relaxed">
            <li>Prove the statement for the first value.</li>
            <li>Prove that if it holds for an arbitrary value k, then it also holds for k + 1.</li>
            <li>Conclude that it holds for every value in the intended domain.</li>
          </ul>
          <h2 className="text-xl sm:text-2xl font-black text-white mt-10 mb-4 pb-2 border-b border-slate-800 tracking-tight">
            8.2 Structure of mathematical induction
          </h2>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Suppose we want to prove a statement P(n).</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed"><strong className="font-semibold text-white">Step 1 — Base case</strong></p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Prove that P(1) is true.</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed"><strong className="font-semibold text-white">Step 2 — Inductive hypothesis</strong></p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Assume that P(k) is true for an arbitrary positive integer k.</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed"><strong className="font-semibold text-white">Step 3 — Inductive step</strong></p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Using that assumption, prove that P(k + 1) is also true.</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed"><strong className="font-semibold text-white">Step 4 — Conclusion</strong></p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Therefore, P(n) is true for every positive integer n.</p>
          <h2 className="text-xl sm:text-2xl font-black text-white mt-10 mb-4 pb-2 border-b border-slate-800 tracking-tight">
            8.3 Example: Sum of the first n natural numbers
          </h2>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">We want to prove:</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">\[</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">1+2+\cdots+n=\frac&#123;n(n+1)&#125;&#123;2&#125;</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">\]</p>
          <h3 className="text-lg font-bold text-white mt-8 mb-3 pb-1 border-b border-slate-800/60 flex items-center gap-2">
            <span className="w-1.5 h-4 rounded-full bg-orange-600 inline-block"></span>
            Step 1 — Base case
          </h3>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">For n = 1:</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Left side:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`1`}</code>
            </pre>
          </div>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Right side:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`1 × 2 / 2 = 1`}</code>
            </pre>
          </div>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Both sides are equal.</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Therefore, P(1) is true.</p>
          <h3 className="text-lg font-bold text-white mt-8 mb-3 pb-1 border-b border-slate-800/60 flex items-center gap-2">
            <span className="w-1.5 h-4 rounded-full bg-orange-600 inline-block"></span>
            Step 2 — Inductive hypothesis
          </h3>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Assume the statement is true for n = k.</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">That is:</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">\[</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">1+2+\cdots+k=\frac&#123;k(k+1)&#125;&#123;2&#125;</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">\]</p>
          <h3 className="text-lg font-bold text-white mt-8 mb-3 pb-1 border-b border-slate-800/60 flex items-center gap-2">
            <span className="w-1.5 h-4 rounded-full bg-orange-600 inline-block"></span>
            Step 3 — Inductive step
          </h3>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">We must prove that it is true for k + 1.</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Start with:</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">\[</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">1+2+\cdots+k+(k+1)</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">\]</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Using the inductive hypothesis:</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">\[</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">=\frac&#123;k(k+1)&#125;&#123;2&#125;+(k+1)</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">\]</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Take the common factor:</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">\[</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">=(k+1)\left(\frac&#123;k&#125;&#123;2&#125;+1\right)</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">\]</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Simplify:</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">\[</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">=\frac&#123;(k+1)(k+2)&#125;&#123;2&#125;</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">\]</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">This is exactly the required expression for k + 1.</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Therefore, P(k + 1) is true.</p>
          <h3 className="text-lg font-bold text-white mt-8 mb-3 pb-1 border-b border-slate-800/60 flex items-center gap-2">
            <span className="w-1.5 h-4 rounded-full bg-orange-600 inline-block"></span>
            Step 4 — Conclusion
          </h3>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">The statement holds for every positive integer n.</p>
          <h2 className="text-xl sm:text-2xl font-black text-white mt-10 mb-4 pb-2 border-b border-slate-800 tracking-tight">
            8.4 Connection between induction and recursion
          </h2>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Mathematical induction and recursion have similar structures.</p>
          <div className="overflow-x-auto my-4 rounded-xl border border-slate-800 shadow-2xs">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-white border-b border-slate-800 font-semibold">
                <tr>
                  <th className="px-4 py-3">Mathematical induction</th>
                  <th className="px-4 py-3">Recursive programming</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">Base case</td>
                  <td className="px-4 py-2.5 text-slate-300">Base case</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">Inductive hypothesis</td>
                  <td className="px-4 py-2.5 text-slate-300">Assumed result of smaller recursive call</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">Inductive step</td>
                  <td className="px-4 py-2.5 text-slate-300">Recursive case</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">Proves mathematical correctness</td>
                  <td className="px-4 py-2.5 text-slate-300">Implements the recursive relationship</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">This connection is particularly important when proving recursive algorithms correct.</p>
          <h2 className="text-xl sm:text-2xl font-black text-white mt-10 mb-4 pb-2 border-b border-slate-800 tracking-tight">
            8.5 Example: Proving factorial recursion
          </h2>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Consider:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`static long factorial(int n) {

    if (n == 0) {
        return 1;
    }

    return n * factorial(n - 1);
}`}</code>
            </pre>
          </div>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">We can reason mathematically:</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed"><strong className="font-semibold text-white">Base case:</strong> The method returns 1 for n = 0, matching the definition of zero factorial.</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed"><strong className="font-semibold text-white">Inductive hypothesis:</strong> Assume the method correctly returns the factorial of k.</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed"><strong className="font-semibold text-white">Inductive step:</strong> For k + 1, the method returns:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`(k + 1) × factorial(k)`}</code>
            </pre>
          </div>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">By the inductive hypothesis, the recursive call returns k factorial.</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Therefore, the result is:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`(k + 1)!`}</code>
            </pre>
          </div>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">The recursive implementation follows the factorial definition.</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">This style of reasoning is useful when proving recursive algorithms correct.</p>
          <h2 className="text-xl sm:text-2xl font-black text-white mt-10 mb-4 pb-2 border-b border-slate-800 tracking-tight">
            8.6 Strong induction
          </h2>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Strong induction is a variation in which the inductive hypothesis assumes the statement is true for all smaller values up to k, rather than only for k.</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">It is useful for problems where the next value depends on several previous values.</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">For example, an algorithm that represents an integer using smaller integer components may rely on multiple smaller cases.</p>
          <h2 className="text-xl sm:text-2xl font-black text-white mt-10 mb-4 pb-2 border-b border-slate-800 tracking-tight">
            8.7 Why should programmers study induction?
          </h2>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Induction is useful for:</p>
          <ul className="list-disc list-outside pl-5 space-y-2 text-slate-300 my-3 text-sm leading-relaxed">
            <li>Proving recursive algorithms correct.</li>
            <li>Understanding recurrence relations.</li>
            <li>Verifying mathematical sequences.</li>
            <li>Analyzing recursive structures.</li>
            <li>Establishing correctness of loop invariants in related proofs.</li>
            <li>Understanding divide-and-conquer algorithms.</li>
          </ul>
          <hr className="my-8 border-slate-800" />
        </div>
      ),
    },
    {
      id: 9,
      title: "9. Permutations and Combinations",
      category: "Part 4 · Combinatorial Foundations",
      anchor: "section-9",
      render: () => (
        <div className="space-y-4">
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Permutations and combinations are important mathematical foundations for generating possible arrangements and selections.</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">They are used in:</p>
          <ul className="list-disc list-outside pl-5 space-y-2 text-slate-300 my-3 text-sm leading-relaxed">
            <li>Probability.</li>
            <li>Competitive programming.</li>
            <li>Backtracking.</li>
            <li>Search algorithms.</li>
            <li>Scheduling.</li>
            <li>Cryptography.</li>
            <li>Combinatorial optimization.</li>
          </ul>
          <h2 className="text-xl sm:text-2xl font-black text-white mt-10 mb-4 pb-2 border-b border-slate-800 tracking-tight">
            9.1 What is a permutation?
          </h2>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">A permutation is an arrangement of selected elements in which order matters.</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">For example, consider three students:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`A, B, C`}</code>
            </pre>
          </div>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Possible arrangements:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`ABC
ACB
BAC
BCA
CAB
CBA`}</code>
            </pre>
          </div>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">All six arrangements are different because their orders differ.</p>
          <h2 className="text-xl sm:text-2xl font-black text-white mt-10 mb-4 pb-2 border-b border-slate-800 tracking-tight">
            9.2 Factorial
          </h2>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Permutation calculations depend on factorial.</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">For a non-negative integer n:</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">\[</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">n!=n(n-1)(n-2)\cdots 2\times1</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">\]</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">And:</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">\[</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">0!=1</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">\]</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Examples:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`3! = 6
4! = 24
5! = 120`}</code>
            </pre>
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-white mt-10 mb-4 pb-2 border-b border-slate-800 tracking-tight">
            9.3 Number of permutations
          </h2>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">When selecting and arranging r different objects from n distinct objects without replacement, the number of arrangements is:</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">\[</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">P(n,r)=\frac&#123;n!&#125;&#123;(n-r)!&#125;</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">\]</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Example:</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Choose and arrange three students from five students.</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">The number of possible arrangements is 60.</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">The order matters.</p>
          <h2 className="text-xl sm:text-2xl font-black text-white mt-10 mb-4 pb-2 border-b border-slate-800 tracking-tight">
            9.4 Java implementation of permutations count
          </h2>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public class PermutationCount {

    static long factorial(int n) {

        long result = 1;

        for (int i = 2; i <= n; i++) {

            result *= i;
        }

        return result;
    }

    static long permutation(int n, int r) {

        if (r < 0 || r > n) {
            throw new IllegalArgumentException();
        }

        return factorial(n) / factorial(n - r);
    }

    public static void main(String[] args) {

        System.out.println(permutation(5, 3));
    }
}`}</code>
            </pre>
          </div>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Output:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`60`}</code>
            </pre>
          </div>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">This straightforward factorial-based implementation is suitable for small values. Larger values may overflow <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">long</code>, so a more careful multiplicative implementation or BigInteger should be used.</p>
          <h2 className="text-xl sm:text-2xl font-black text-white mt-10 mb-4 pb-2 border-b border-slate-800 tracking-tight">
            9.5 Generating permutations using recursion
          </h2>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Problem:</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Generate all permutations of:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`ABC`}</code>
            </pre>
          </div>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">We can recursively:</p>
          <div className="flex items-start gap-3 my-2.5 text-sm text-slate-300 leading-relaxed">
            <span className="flex items-center justify-center w-6 h-6 rounded-md bg-slate-950 border border-slate-800 text-slate-200 font-mono text-xs font-bold shrink-0 mt-0.5">1</span>
            <div className="flex-1">Choose one character for the current position.</div>
          </div>
          <div className="flex items-start gap-3 my-2.5 text-sm text-slate-300 leading-relaxed">
            <span className="flex items-center justify-center w-6 h-6 rounded-md bg-slate-950 border border-slate-800 text-slate-200 font-mono text-xs font-bold shrink-0 mt-0.5">2</span>
            <div className="flex-1">Swap it into that position.</div>
          </div>
          <div className="flex items-start gap-3 my-2.5 text-sm text-slate-300 leading-relaxed">
            <span className="flex items-center justify-center w-6 h-6 rounded-md bg-slate-950 border border-slate-800 text-slate-200 font-mono text-xs font-bold shrink-0 mt-0.5">3</span>
            <div className="flex-1">Generate permutations of the remaining positions.</div>
          </div>
          <div className="flex items-start gap-3 my-2.5 text-sm text-slate-300 leading-relaxed">
            <span className="flex items-center justify-center w-6 h-6 rounded-md bg-slate-950 border border-slate-800 text-slate-200 font-mono text-xs font-bold shrink-0 mt-0.5">4</span>
            <div className="flex-1">Undo the swap.</div>
          </div>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">This is a classic backtracking algorithm.</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Java:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public class PermutationGenerator {

    static void generate(
            char[] characters,
            int index
    ) {

        if (index == characters.length) {

            System.out.println(
                    new String(characters)
            );

            return;
        }

        for (int i = index; i < characters.length; i++) {

            swap(characters, index, i);

            generate(characters, index + 1);

            swap(characters, index, i);
        }
    }

    static void swap(
            char[] characters,
            int i,
            int j
    ) {

        char temp = characters[i];

        characters[i] = characters[j];

        characters[j] = temp;
    }

    public static void main(String[] args) {

        generate("ABC".toCharArray(), 0);
    }
}`}</code>
            </pre>
          </div>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Output:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`ABC
ACB
BAC
BCA
CBA
CAB`}</code>
            </pre>
          </div>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">This version assumes that every input character is distinct.</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">If duplicate characters are present, duplicate arrangements can be generated. Later examples explain how to avoid them.</p>
          <h2 className="text-xl sm:text-2xl font-black text-white mt-10 mb-4 pb-2 border-b border-slate-800 tracking-tight">
            9.6 What is a combination?
          </h2>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">A combination is a selection of elements in which order does not matter.</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Consider:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`A, B, C`}</code>
            </pre>
          </div>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Selecting two elements gives:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`AB
AC
BC`}</code>
            </pre>
          </div>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">The selections AB and BA are treated as the same combination.</p>
          <h2 className="text-xl sm:text-2xl font-black text-white mt-10 mb-4 pb-2 border-b border-slate-800 tracking-tight">
            9.7 Number of combinations
          </h2>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">When selecting r objects from n distinct objects without replacement, the number of selections is:</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">\[</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">C(n,r)=\frac&#123;n!&#125;&#123;r!(n-r)!&#125;</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">\]</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Example:</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Select three students from five students.</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">The number of possible groups is 10.</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Order does not matter.</p>
          <h2 className="text-xl sm:text-2xl font-black text-white mt-10 mb-4 pb-2 border-b border-slate-800 tracking-tight">
            9.8 Java implementation of combination count
          </h2>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`import java.math.BigInteger;

public class CombinationCount {

    static BigInteger combination(int n, int r) {

        if (n < 0 || r < 0 || r > n) {

            throw new IllegalArgumentException(
                    "Invalid values"
            );
        }

        r = Math.min(r, n - r);

        BigInteger result = BigInteger.ONE;

        for (int i = 1; i <= r; i++) {

            result = result
                    .multiply(BigInteger.valueOf(n - r + i))
                    .divide(BigInteger.valueOf(i));
        }

        return result;
    }

    public static void main(String[] args) {

        System.out.println(combination(5, 3));
    }
}`}</code>
            </pre>
          </div>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Output:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`10`}</code>
            </pre>
          </div>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Using BigInteger avoids the fixed numeric limit of primitive integer types.</p>
          <h2 className="text-xl sm:text-2xl font-black text-white mt-10 mb-4 pb-2 border-b border-slate-800 tracking-tight">
            9.9 Java implementation of combination generation
          </h2>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Problem:</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Generate all possible two-element combinations from:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`A, B, C, D`}</code>
            </pre>
          </div>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Expected output:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`AB
AC
AD
BC
BD
CD`}</code>
            </pre>
          </div>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Java:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public class CombinationGenerator {

    static void generate(
            char[] values,
            int start,
            int index,
            int r,
            char[] selected
    ) {

        if (index == r) {

            System.out.println(
                    new String(selected)
            );

            return;
        }

        for (
                int i = start;
                i <= values.length - (r - index);
                i++
        ) {

            selected[index] = values[i];

            generate(
                    values,
                    i + 1,
                    index + 1,
                    r,
                    selected
            );
        }
    }

    public static void main(String[] args) {

        char[] values = {'A', 'B', 'C', 'D'};

        int r = 2;

        char[] selected = new char[r];

        generate(values, 0, 0, r, selected);
    }
}`}</code>
            </pre>
          </div>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">The recursive method always moves forward through the input.</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Therefore, the same combination is not generated in a different order.</p>
          <h2 className="text-xl sm:text-2xl font-black text-white mt-10 mb-4 pb-2 border-b border-slate-800 tracking-tight">
            9.10 Permutation versus combination
          </h2>
          <div className="overflow-x-auto my-4 rounded-xl border border-slate-800 shadow-2xs">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-white border-b border-slate-800 font-semibold">
                <tr>
                  <th className="px-4 py-3">Permutation</th>
                  <th className="px-4 py-3">Combination</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">Arrangement</td>
                  <td className="px-4 py-2.5 text-slate-300">Selection</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">Order matters</td>
                  <td className="px-4 py-2.5 text-slate-300">Order does not matter</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">AB and BA are different</td>
                  <td className="px-4 py-2.5 text-slate-300">AB and BA are equivalent</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">Counts ordered arrangements</td>
                  <td className="px-4 py-2.5 text-slate-300">Counts distinct groups</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">More possible arrangements for the same selection size</td>
                  <td className="px-4 py-2.5 text-slate-300">Fewer possible selections</td>
                </tr>
              </tbody>
            </table>
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-white mt-10 mb-4 pb-2 border-b border-slate-800 tracking-tight">
            9.11 Combinations with repetition
          </h2>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">In some problems, an element may be selected more than once.</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Example:</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Choose two values from:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`A, B, C`}</code>
            </pre>
          </div>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">with repetition permitted and order ignored.</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Possible combinations:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`AA
AB
AC
BB
BC
CC`}</code>
            </pre>
          </div>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">The number of combinations with repetition is given by the number of multisets of size r chosen from n distinct types.</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">For non-negative n and r, the count is:</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">\[</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">C(n+r-1,r)</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">\]</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">This variant appears in probability, resource allocation, and certain counting problems.</p>
          <hr className="my-8 border-slate-800" />
        </div>
      ),
    },
    {
      id: 10,
      title: "10. Subsequences and Subset Generation",
      category: "Part 4 · Include-Exclude & Bitmasks",
      anchor: "section-10",
      render: () => (
        <div className="space-y-4">
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">These two concepts are closely related but should not be confused.</p>
          <h2 className="text-xl sm:text-2xl font-black text-white mt-10 mb-4 pb-2 border-b border-slate-800 tracking-tight">
            10.1 What is a subsequence?
          </h2>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">A subsequence is a sequence obtained by removing zero or more elements from the original sequence without changing the relative order of the remaining elements.</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Consider:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`ABC`}</code>
            </pre>
          </div>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Some subsequences are:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`A
B
C
AB
AC
BC
ABC`}</code>
            </pre>
          </div>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">The empty subsequence also exists.</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Notice:</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed"><code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">AC</code> is a subsequence of <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">ABC</code>.</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed"><code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">CA</code> is not, because the original relative order has changed.</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">A subsequence does not need to contain consecutive elements.</p>
          <h2 className="text-xl sm:text-2xl font-black text-white mt-10 mb-4 pb-2 border-b border-slate-800 tracking-tight">
            10.2 Substring versus subsequence
          </h2>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">A substring must be contiguous.</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">A subsequence does not have to be contiguous.</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">For:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`ABCDE`}</code>
            </pre>
          </div>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Examples:</p>
          <div className="overflow-x-auto my-4 rounded-xl border border-slate-800 shadow-2xs">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-white border-b border-slate-800 font-semibold">
                <tr>
                  <th className="px-4 py-3">Value</th>
                  <th className="px-4 py-3">Substring?</th>
                  <th className="px-4 py-3">Subsequence?</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">ABC</td>
                  <td className="px-4 py-2.5 text-slate-300">Yes</td>
                  <td className="px-4 py-2.5 text-slate-300">Yes</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">BCD</td>
                  <td className="px-4 py-2.5 text-slate-300">Yes</td>
                  <td className="px-4 py-2.5 text-slate-300">Yes</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">ACE</td>
                  <td className="px-4 py-2.5 text-slate-300">No</td>
                  <td className="px-4 py-2.5 text-slate-300">Yes</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">ECA</td>
                  <td className="px-4 py-2.5 text-slate-300">No</td>
                  <td className="px-4 py-2.5 text-slate-300">No</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">BCDE</td>
                  <td className="px-4 py-2.5 text-slate-300">Yes</td>
                  <td className="px-4 py-2.5 text-slate-300">Yes</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">ABE</td>
                  <td className="px-4 py-2.5 text-slate-300">No</td>
                  <td className="px-4 py-2.5 text-slate-300">Yes</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">This distinction is important in String and dynamic-programming problems.</p>
          <h2 className="text-xl sm:text-2xl font-black text-white mt-10 mb-4 pb-2 border-b border-slate-800 tracking-tight">
            10.3 Generating all subsequences using recursion
          </h2>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">For every character, there are two choices:</p>
          <div className="flex items-start gap-3 my-2.5 text-sm text-slate-300 leading-relaxed">
            <span className="flex items-center justify-center w-6 h-6 rounded-md bg-slate-950 border border-slate-800 text-slate-200 font-mono text-xs font-bold shrink-0 mt-0.5">1</span>
            <div className="flex-1">Include the character.</div>
          </div>
          <div className="flex items-start gap-3 my-2.5 text-sm text-slate-300 leading-relaxed">
            <span className="flex items-center justify-center w-6 h-6 rounded-md bg-slate-950 border border-slate-800 text-slate-200 font-mono text-xs font-bold shrink-0 mt-0.5">2</span>
            <div className="flex-1">Exclude the character.</div>
          </div>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">For a String of length n, there are \(2^n\) possible subsequences when positions are treated as distinct choices.</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Java:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public class SubsequenceGenerator {

    static void generate(
            String text,
            int index,
            String current
    ) {

        if (index == text.length()) {

            System.out.println(
                    current.isEmpty()
                            ? "EMPTY"
                            : current
            );

            return;
        }

        // Include current character

        generate(
                text,
                index + 1,
                current + text.charAt(index)
        );

        // Exclude current character

        generate(
                text,
                index + 1,
                current
        );
    }

    public static void main(String[] args) {

        generate("ABC", 0, "");
    }
}`}</code>
            </pre>
          </div>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">This generates eight subsequences, including the empty subsequence.</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Time complexity: O(n × 2ⁿ) for this implementation because each output can require constructing or printing a sequence of length up to n.</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">The total number of recursive decision nodes is O(2ⁿ).</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Auxiliary recursion depth: O(n), excluding the space used for accumulated output and captured strings.</p>
          <h2 className="text-xl sm:text-2xl font-black text-white mt-10 mb-4 pb-2 border-b border-slate-800 tracking-tight">
            10.4 What is a subset?
          </h2>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">A subset is a collection selected from a larger set.</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Order does not matter, and set elements are distinct.</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Given:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`{1, 2, 3}`}</code>
            </pre>
          </div>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">The subsets are:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`{}
{1}
{2}
{3}
{1, 2}
{1, 3}
{2, 3}
{1, 2, 3}`}</code>
            </pre>
          </div>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">For a set containing n distinct elements, the number of possible subsets is:</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">\[</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">2^n</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">\]</p>
          <h2 className="text-xl sm:text-2xl font-black text-white mt-10 mb-4 pb-2 border-b border-slate-800 tracking-tight">
            10.5 Generating all subsets using recursion
          </h2>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Java:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`import java.util.ArrayList;
import java.util.List;

public class SubsetGenerator {

    static void generate(
            int[] numbers,
            int index,
            List<Integer> current
    ) {

        if (index == numbers.length) {

            System.out.println(current);

            return;
        }

        // Choice 1: Include the element

        current.add(numbers[index]);

        generate(numbers, index + 1, current);

        // Undo the choice

        current.remove(current.size() - 1);

        // Choice 2: Exclude the element

        generate(numbers, index + 1, current);
    }

    public static void main(String[] args) {

        int[] numbers = {1, 2, 3};

        generate(
                numbers,
                0,
                new ArrayList<>()
        );
    }
}`}</code>
            </pre>
          </div>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">The empty subset is generated when every element has been excluded.</p>
          <h2 className="text-xl sm:text-2xl font-black text-white mt-10 mb-4 pb-2 border-b border-slate-800 tracking-tight">
            10.6 Subsets versus permutations
          </h2>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">For:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`{1, 2, 3}`}</code>
            </pre>
          </div>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Subsets include:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`{1, 2}`}</code>
            </pre>
          </div>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">There is only one such subset regardless of arrangement.</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Permutations include:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`123
132
213
231
312
321`}</code>
            </pre>
          </div>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">These are different arrangements.</p>
          <h2 className="text-xl sm:text-2xl font-black text-white mt-10 mb-4 pb-2 border-b border-slate-800 tracking-tight">
            10.7 Bitmask-based subset generation
          </h2>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Subsets can also be generated using bit manipulation.</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">For n elements, use integers from zero through the mask containing n set bits.</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Each bit indicates whether an element is selected.</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Example:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Input: [A, B, C]

Mask: 000 -> {}
Mask: 001 -> {C}
Mask: 010 -> {B}
Mask: 011 -> {B, C}
Mask: 100 -> {A}
Mask: 101 -> {A, C}
Mask: 110 -> {A, B}
Mask: 111 -> {A, B, C}`}</code>
            </pre>
          </div>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Java:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public class BitmaskSubsets {

    public static void main(String[] args) {

        int[] numbers = {1, 2, 3};

        int n = numbers.length;

        for (int mask = 0; mask < (1 << n); mask++) {

            System.out.print("{ ");

            for (int i = 0; i < n; i++) {

                if ((mask & (1 << i)) != 0) {

                    System.out.print(numbers[i] + " ");
                }
            }

            System.out.println("}");
        }
    }
}`}</code>
            </pre>
          </div>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">For very large n, an int shift is not sufficient to represent all subset masks. Use suitable bit representations and recognize that enumerating every subset still requires exponential work.</p>
          <hr className="my-8 border-slate-800" />
        </div>
      ),
    },
    {
      id: 11,
      title: "11. Introduction to Backtracking",
      category: "Part 5 · Choose-Explore-Unchoose",
      anchor: "section-11",
      render: () => (
        <div className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-black text-white mt-10 mb-4 pb-2 border-b border-slate-800 tracking-tight">
            11.1 What is backtracking?
          </h2>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Backtracking is an algorithmic technique that explores possible solutions by making choices one at a time.</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Whenever a choice leads to an invalid or unproductive state, the algorithm reverses that choice and explores an alternative.</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">The general process is:</p>
          <div className="flex items-start gap-3 my-2.5 text-sm text-slate-300 leading-relaxed">
            <span className="flex items-center justify-center w-6 h-6 rounded-md bg-slate-950 border border-slate-800 text-slate-200 font-mono text-xs font-bold shrink-0 mt-0.5">1</span>
            <div className="flex-1">Make a choice.</div>
          </div>
          <div className="flex items-start gap-3 my-2.5 text-sm text-slate-300 leading-relaxed">
            <span className="flex items-center justify-center w-6 h-6 rounded-md bg-slate-950 border border-slate-800 text-slate-200 font-mono text-xs font-bold shrink-0 mt-0.5">2</span>
            <div className="flex-1">Explore the resulting state.</div>
          </div>
          <div className="flex items-start gap-3 my-2.5 text-sm text-slate-300 leading-relaxed">
            <span className="flex items-center justify-center w-6 h-6 rounded-md bg-slate-950 border border-slate-800 text-slate-200 font-mono text-xs font-bold shrink-0 mt-0.5">3</span>
            <div className="flex-1">Check whether the state can lead to a solution.</div>
          </div>
          <div className="flex items-start gap-3 my-2.5 text-sm text-slate-300 leading-relaxed">
            <span className="flex items-center justify-center w-6 h-6 rounded-md bg-slate-950 border border-slate-800 text-slate-200 font-mono text-xs font-bold shrink-0 mt-0.5">4</span>
            <div className="flex-1">Continue if the choice is valid.</div>
          </div>
          <div className="flex items-start gap-3 my-2.5 text-sm text-slate-300 leading-relaxed">
            <span className="flex items-center justify-center w-6 h-6 rounded-md bg-slate-950 border border-slate-800 text-slate-200 font-mono text-xs font-bold shrink-0 mt-0.5">5</span>
            <div className="flex-1">Undo the choice when exploration finishes or fails.</div>
          </div>
          <div className="flex items-start gap-3 my-2.5 text-sm text-slate-300 leading-relaxed">
            <span className="flex items-center justify-center w-6 h-6 rounded-md bg-slate-950 border border-slate-800 text-slate-200 font-mono text-xs font-bold shrink-0 mt-0.5">6</span>
            <div className="flex-1">Try another choice.</div>
          </div>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">This process is commonly described as:</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed"><strong className="font-semibold text-white">Choose → Explore → Unchoose.</strong></p>
          <h2 className="text-xl sm:text-2xl font-black text-white mt-10 mb-4 pb-2 border-b border-slate-800 tracking-tight">
            11.2 Why is backtracking important?
          </h2>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Many problems require exploring combinations of decisions.</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Examples:</p>
          <ul className="list-disc list-outside pl-5 space-y-2 text-slate-300 my-3 text-sm leading-relaxed">
            <li>Generating permutations.</li>
            <li>Generating subsets.</li>
            <li>Solving Sudoku.</li>
            <li>N-Queens.</li>
            <li>Maze pathfinding.</li>
            <li>Crossword puzzles.</li>
            <li>Scheduling under constraints.</li>
            <li>Finding valid configurations.</li>
          </ul>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">These problems cannot always be solved by selecting the first available option.</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Sometimes a choice that appears valid initially creates a conflict later.</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Backtracking allows the program to reverse such choices.</p>
          <h2 className="text-xl sm:text-2xl font-black text-white mt-10 mb-4 pb-2 border-b border-slate-800 tracking-tight">
            11.3 Basic backtracking template
          </h2>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">A common backtracking structure looks like this:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`void backtrack(State state) {

    if (isSolution(state)) {

        saveSolution(state);

        return;
    }

    for (Choice choice : getChoices(state)) {

        if (!isValid(state, choice)) {

            continue;
        }

        // Make the choice

        applyChoice(state, choice);

        // Explore

        backtrack(state);

        // Undo the choice

        undoChoice(state, choice);
    }
}`}</code>
            </pre>
          </div>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">The structure is widely useful, although particular problems may require additional pruning, return values, early stopping, or state restoration.</p>
          <h2 className="text-xl sm:text-2xl font-black text-white mt-10 mb-4 pb-2 border-b border-slate-800 tracking-tight">
            11.4 Backtracking versus recursion
          </h2>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Recursion is a programming technique.</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Backtracking is a problem-solving strategy that often uses recursion.</p>
          <div className="overflow-x-auto my-4 rounded-xl border border-slate-800 shadow-2xs">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-white border-b border-slate-800 font-semibold">
                <tr>
                  <th className="px-4 py-3">Recursion</th>
                  <th className="px-4 py-3">Backtracking</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">A method calls itself</td>
                  <td className="px-4 py-2.5 text-slate-300">Explores choices and reverses decisions</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">Can solve simple mathematical problems</td>
                  <td className="px-4 py-2.5 text-slate-300">Commonly solves constraint and search problems</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">May follow one path</td>
                  <td className="px-4 py-2.5 text-slate-300">Often explores multiple paths</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">Does not necessarily require undoing state</td>
                  <td className="px-4 py-2.5 text-slate-300">Usually requires restoring changed state</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">Example: factorial</td>
                  <td className="px-4 py-2.5 text-slate-300">Example: N-Queens</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Backtracking can also be implemented iteratively, although recursive implementations are often easier to understand.</p>
          <hr className="my-8 border-slate-800" />
        </div>
      ),
    },
    {
      id: 12,
      title: "12. Constraint-Based Search",
      category: "Part 5 · State Spaces & Pruning",
      anchor: "section-12",
      render: () => (
        <div className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-black text-white mt-10 mb-4 pb-2 border-b border-slate-800 tracking-tight">
            12.1 What is constraint-based search?
          </h2>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Constraint-based search is a technique in which possible solutions are explored while respecting a collection of rules or restrictions.</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">A candidate solution is accepted only when it satisfies the required constraints.</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Examples:</p>
          <div className="overflow-x-auto my-4 rounded-xl border border-slate-800 shadow-2xs">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-white border-b border-slate-800 font-semibold">
                <tr>
                  <th className="px-4 py-3">Problem</th>
                  <th className="px-4 py-3">Constraints</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">Sudoku</td>
                  <td className="px-4 py-2.5 text-slate-300">Each row, column, and box must contain valid digits</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">N-Queens</td>
                  <td className="px-4 py-2.5 text-slate-300">No two queens may attack one another</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">Maze pathfinding</td>
                  <td className="px-4 py-2.5 text-slate-300">Moves must stay within valid open cells</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">Scheduling</td>
                  <td className="px-4 py-2.5 text-slate-300">Events must satisfy timing and resource restrictions</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">Graph coloring</td>
                  <td className="px-4 py-2.5 text-slate-300">Adjacent vertices must use different colors</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">Word arrangement</td>
                  <td className="px-4 py-2.5 text-slate-300">Letters must satisfy positional requirements</td>
                </tr>
              </tbody>
            </table>
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-white mt-10 mb-4 pb-2 border-b border-slate-800 tracking-tight">
            12.2 State-space tree
          </h2>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">A state-space tree represents the possible choices available during the search.</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">For example, suppose we have three binary decisions:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Choose / Do not choose`}</code>
            </pre>
          </div>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Each level makes one decision.</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`                    Start
                   /     \\
                Include  Exclude
                /          \\
             Include      Include
             /               \\
           ...               ...`}</code>
            </pre>
          </div>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Each leaf represents a completed decision sequence.</p>
          <h2 className="text-xl sm:text-2xl font-black text-white mt-10 mb-4 pb-2 border-b border-slate-800 tracking-tight">
            12.3 Validity checking
          </h2>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">A backtracking algorithm should test partial states before exploring them further.</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">For example, in N-Queens:</p>
          <ul className="list-disc list-outside pl-5 space-y-2 text-slate-300 my-3 text-sm leading-relaxed">
            <li>A position cannot contain an existing queen.</li>
            <li>A column cannot contain another queen.</li>
            <li>Diagonals cannot contain another queen.</li>
          </ul>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">When a partial configuration violates one of these constraints, it can be abandoned immediately.</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">This is called pruning.</p>
          <h2 className="text-xl sm:text-2xl font-black text-white mt-10 mb-4 pb-2 border-b border-slate-800 tracking-tight">
            12.4 What is pruning?
          </h2>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Pruning eliminates branches that cannot produce a valid solution.</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Suppose an algorithm is exploring a configuration.</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">If the current state already violates a requirement, there is no reason to continue exploring its descendants.</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Without pruning, the algorithm wastes time exploring impossible solutions.</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">With pruning, invalid branches are rejected as early as possible.</p>
          <h2 className="text-xl sm:text-2xl font-black text-white mt-10 mb-4 pb-2 border-b border-slate-800 tracking-tight">
            12.5 Backtracking execution structure
          </h2>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`            Initial State
                 |
                 v
           Generate Choices
                 |
                 v
          Select One Choice
                 |
                 v
           Check Constraints
              /       \\
           Invalid    Valid
              |         |
              v         v
           Reject    Apply Choice
                       |
                       v
                   Explore
                       |
                       v
                  Undo Choice
                       |
                       v
                 Next Choice`}</code>
            </pre>
          </div>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Pruning improves practical performance, but it does not necessarily change the worst-case exponential complexity of a problem.</p>
          <hr className="my-8 border-slate-800" />
        </div>
      ),
    },
    {
      id: 13,
      title: "13. Permutation Generation Through Backtracking",
      category: "Part 5 · Backtracking Permutations",
      anchor: "section-13",
      render: () => (
        <div className="space-y-4">
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Permutation generation is one of the simplest examples of recursive search.</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Suppose we have:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`A, B, C`}</code>
            </pre>
          </div>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">We need to generate all possible arrangements.</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">At each recursion level:</p>
          <div className="flex items-start gap-3 my-2.5 text-sm text-slate-300 leading-relaxed">
            <span className="flex items-center justify-center w-6 h-6 rounded-md bg-slate-950 border border-slate-800 text-slate-200 font-mono text-xs font-bold shrink-0 mt-0.5">1</span>
            <div className="flex-1">Select an unused character.</div>
          </div>
          <div className="flex items-start gap-3 my-2.5 text-sm text-slate-300 leading-relaxed">
            <span className="flex items-center justify-center w-6 h-6 rounded-md bg-slate-950 border border-slate-800 text-slate-200 font-mono text-xs font-bold shrink-0 mt-0.5">2</span>
            <div className="flex-1">Place it in the current position.</div>
          </div>
          <div className="flex items-start gap-3 my-2.5 text-sm text-slate-300 leading-relaxed">
            <span className="flex items-center justify-center w-6 h-6 rounded-md bg-slate-950 border border-slate-800 text-slate-200 font-mono text-xs font-bold shrink-0 mt-0.5">3</span>
            <div className="flex-1">Continue with the remaining characters.</div>
          </div>
          <div className="flex items-start gap-3 my-2.5 text-sm text-slate-300 leading-relaxed">
            <span className="flex items-center justify-center w-6 h-6 rounded-md bg-slate-950 border border-slate-800 text-slate-200 font-mono text-xs font-bold shrink-0 mt-0.5">4</span>
            <div className="flex-1">Restore the selection state.</div>
          </div>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Java implementation using a used array:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public class Permutations {

    static void generate(
            char[] values,
            boolean[] used,
            StringBuilder current
    ) {

        if (current.length() == values.length) {

            System.out.println(current);

            return;
        }

        for (int i = 0; i < values.length; i++) {

            if (used[i]) {
                continue;
            }

            used[i] = true;

            current.append(values[i]);

            generate(values, used, current);

            // Backtrack

            current.deleteCharAt(
                    current.length() - 1
            );

            used[i] = false;
        }
    }

    public static void main(String[] args) {

        char[] values = {'A', 'B', 'C'};

        boolean[] used = new boolean[values.length];

        generate(
                values,
                used,
                new StringBuilder()
        );
    }
}`}</code>
            </pre>
          </div>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Output:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`ABC
ACB
BAC
BCA
CAB
CBA`}</code>
            </pre>
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-white mt-10 mb-4 pb-2 border-b border-slate-800 tracking-tight">
            13.1 Avoid duplicate permutations
          </h2>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Consider:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`AAB`}</code>
            </pre>
          </div>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">A straightforward permutation generator may generate duplicate arrangements because the two A characters are identical.</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">To avoid this:</p>
          <div className="flex items-start gap-3 my-2.5 text-sm text-slate-300 leading-relaxed">
            <span className="flex items-center justify-center w-6 h-6 rounded-md bg-slate-950 border border-slate-800 text-slate-200 font-mono text-xs font-bold shrink-0 mt-0.5">1</span>
            <div className="flex-1">Sort the input.</div>
          </div>
          <div className="flex items-start gap-3 my-2.5 text-sm text-slate-300 leading-relaxed">
            <span className="flex items-center justify-center w-6 h-6 rounded-md bg-slate-950 border border-slate-800 text-slate-200 font-mono text-xs font-bold shrink-0 mt-0.5">2</span>
            <div className="flex-1">Skip a duplicate character when its previous identical character has not been used at the current search depth.</div>
          </div>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Java:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`import java.util.Arrays;

public class UniquePermutations {

    static void generate(
            char[] values,
            boolean[] used,
            StringBuilder current
    ) {

        if (current.length() == values.length) {

            System.out.println(current);

            return;
        }

        for (int i = 0; i < values.length; i++) {

            if (used[i]) {
                continue;
            }

            if (i > 0 &&
                values[i] == values[i - 1] &&
                !used[i - 1]) {

                continue;
            }

            used[i] = true;

            current.append(values[i]);

            generate(values, used, current);

            current.deleteCharAt(current.length() - 1);

            used[i] = false;
        }
    }

    public static void main(String[] args) {

        char[] values = {'A', 'A', 'B'};

        Arrays.sort(values);

        generate(
                values,
                new boolean[values.length],
                new StringBuilder()
        );
    }
}`}</code>
            </pre>
          </div>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Output:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`AAB
ABA
BAA`}</code>
            </pre>
          </div>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">The duplicate-skip condition prevents identical branches at the same decision depth.</p>
          <hr className="my-8 border-slate-800" />
        </div>
      ),
    },
    {
      id: 14,
      title: "14. N-Queens Problem",
      category: "Part 6 · Classic Constraint Satisfaction",
      anchor: "section-14",
      render: () => (
        <div className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-black text-white mt-10 mb-4 pb-2 border-b border-slate-800 tracking-tight">
            14.1 What is the N-Queens problem?
          </h2>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">The N-Queens problem asks us to place N queens on an N × N chessboard so that no two queens attack each other.</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">In chess, a queen can attack another piece along:</p>
          <ul className="list-disc list-outside pl-5 space-y-2 text-slate-300 my-3 text-sm leading-relaxed">
            <li>Rows.</li>
            <li>Columns.</li>
            <li>Diagonals.</li>
          </ul>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Therefore, the solution must satisfy three constraints:</p>
          <div className="flex items-start gap-3 my-2.5 text-sm text-slate-300 leading-relaxed">
            <span className="flex items-center justify-center w-6 h-6 rounded-md bg-slate-950 border border-slate-800 text-slate-200 font-mono text-xs font-bold shrink-0 mt-0.5">1</span>
            <div className="flex-1">No two queens share the same row.</div>
          </div>
          <div className="flex items-start gap-3 my-2.5 text-sm text-slate-300 leading-relaxed">
            <span className="flex items-center justify-center w-6 h-6 rounded-md bg-slate-950 border border-slate-800 text-slate-200 font-mono text-xs font-bold shrink-0 mt-0.5">2</span>
            <div className="flex-1">No two queens share the same column.</div>
          </div>
          <div className="flex items-start gap-3 my-2.5 text-sm text-slate-300 leading-relaxed">
            <span className="flex items-center justify-center w-6 h-6 rounded-md bg-slate-950 border border-slate-800 text-slate-200 font-mono text-xs font-bold shrink-0 mt-0.5">3</span>
            <div className="flex-1">No two queens share the same diagonal.</div>
          </div>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">The goal is to find one or all valid arrangements.</p>
          <h2 className="text-xl sm:text-2xl font-black text-white mt-10 mb-4 pb-2 border-b border-slate-800 tracking-tight">
            14.2 Understanding the problem
          </h2>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">For N = 4, the board has four rows and four columns.</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">We need to place four queens.</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Each row receives exactly one queen.</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Once a queen is placed, the algorithm checks whether subsequent placements are safe.</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">If no safe placement is possible, the algorithm removes the previous queen and tries a different column.</p>
          <h2 className="text-xl sm:text-2xl font-black text-white mt-10 mb-4 pb-2 border-b border-slate-800 tracking-tight">
            14.3 Backtracking approach
          </h2>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Algorithm:</p>
          <div className="flex items-start gap-3 my-2.5 text-sm text-slate-300 leading-relaxed">
            <span className="flex items-center justify-center w-6 h-6 rounded-md bg-slate-950 border border-slate-800 text-slate-200 font-mono text-xs font-bold shrink-0 mt-0.5">1</span>
            <div className="flex-1">Start from row zero.</div>
          </div>
          <div className="flex items-start gap-3 my-2.5 text-sm text-slate-300 leading-relaxed">
            <span className="flex items-center justify-center w-6 h-6 rounded-md bg-slate-950 border border-slate-800 text-slate-200 font-mono text-xs font-bold shrink-0 mt-0.5">2</span>
            <div className="flex-1">Try placing a queen in each column.</div>
          </div>
          <div className="flex items-start gap-3 my-2.5 text-sm text-slate-300 leading-relaxed">
            <span className="flex items-center justify-center w-6 h-6 rounded-md bg-slate-950 border border-slate-800 text-slate-200 font-mono text-xs font-bold shrink-0 mt-0.5">3</span>
            <div className="flex-1">Check whether the position is safe.</div>
          </div>
          <div className="flex items-start gap-3 my-2.5 text-sm text-slate-300 leading-relaxed">
            <span className="flex items-center justify-center w-6 h-6 rounded-md bg-slate-950 border border-slate-800 text-slate-200 font-mono text-xs font-bold shrink-0 mt-0.5">4</span>
            <div className="flex-1">Place the queen if safe.</div>
          </div>
          <div className="flex items-start gap-3 my-2.5 text-sm text-slate-300 leading-relaxed">
            <span className="flex items-center justify-center w-6 h-6 rounded-md bg-slate-950 border border-slate-800 text-slate-200 font-mono text-xs font-bold shrink-0 mt-0.5">5</span>
            <div className="flex-1">Recursively solve the next row.</div>
          </div>
          <div className="flex items-start gap-3 my-2.5 text-sm text-slate-300 leading-relaxed">
            <span className="flex items-center justify-center w-6 h-6 rounded-md bg-slate-950 border border-slate-800 text-slate-200 font-mono text-xs font-bold shrink-0 mt-0.5">6</span>
            <div className="flex-1">If the recursive call fails, remove the queen.</div>
          </div>
          <div className="flex items-start gap-3 my-2.5 text-sm text-slate-300 leading-relaxed">
            <span className="flex items-center justify-center w-6 h-6 rounded-md bg-slate-950 border border-slate-800 text-slate-200 font-mono text-xs font-bold shrink-0 mt-0.5">7</span>
            <div className="flex-1">Try the next column.</div>
          </div>
          <div className="flex items-start gap-3 my-2.5 text-sm text-slate-300 leading-relaxed">
            <span className="flex items-center justify-center w-6 h-6 rounded-md bg-slate-950 border border-slate-800 text-slate-200 font-mono text-xs font-bold shrink-0 mt-0.5">8</span>
            <div className="flex-1">If all rows are completed, a valid solution is found.</div>
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-white mt-10 mb-4 pb-2 border-b border-slate-800 tracking-tight">
            14.4 Java implementation using backtracking
          </h2>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public class NQueens {

    static int solutionCount = 0;

    static boolean isSafe(
            int[] queenColumns,
            int row,
            int column
    ) {

        for (int previousRow = 0;
             previousRow < row;
             previousRow++) {

            int previousColumn =
                    queenColumns[previousRow];

            // Same column

            if (previousColumn == column) {

                return false;
            }

            // Same diagonal

            if (
                    Math.abs(previousRow - row) ==
                    Math.abs(previousColumn - column)
            ) {

                return false;
            }
        }

        return true;
    }

    static void solve(
            int[] queenColumns,
            int row,
            int n
    ) {

        if (row == n) {

            solutionCount++;

            printBoard(queenColumns, n);

            return;
        }

        for (int column = 0; column < n; column++) {

            if (
                    isSafe(
                            queenColumns,
                            row,
                            column
                    )
            ) {

                queenColumns[row] = column;

                solve(
                        queenColumns,
                        row + 1,
                        n
                );

                // Backtracking

                queenColumns[row] = -1;
            }
        }
    }

    static void printBoard(
            int[] queenColumns,
            int n
    ) {

        System.out.println("Solution:");

        for (int row = 0; row < n; row++) {

            for (int column = 0; column < n; column++) {

                if (queenColumns[row] == column) {

                    System.out.print("Q ");

                } else {

                    System.out.print(". ");
                }
            }

            System.out.println();
        }

        System.out.println();
    }

    public static void main(String[] args) {

        int n = 4;

        int[] queenColumns = new int[n];

        for (int i = 0; i < n; i++) {

            queenColumns[i] = -1;
        }

        solve(queenColumns, 0, n);

        System.out.println(
                "Total solutions: " + solutionCount
        );
    }
}`}</code>
            </pre>
          </div>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Possible output:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Solution:

. Q . .
. . . Q
Q . . .
. . Q .

Solution:

. . Q .
Q . . .
. . . Q
. Q . .

Total solutions: 2`}</code>
            </pre>
          </div>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">The order of solutions is determined by the column traversal.</p>
          <h2 className="text-xl sm:text-2xl font-black text-white mt-10 mb-4 pb-2 border-b border-slate-800 tracking-tight">
            14.5 Understanding the implementation
          </h2>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">The array:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`int[] queenColumns`}</code>
            </pre>
          </div>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">stores the column position of the queen in each row.</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">For example:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`[1, 3, 0, 2]`}</code>
            </pre>
          </div>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">means:</p>
          <ul className="list-disc list-outside pl-5 space-y-2 text-slate-300 my-3 text-sm leading-relaxed">
            <li>Row 0: Column 1.</li>
            <li>Row 1: Column 3.</li>
            <li>Row 2: Column 0.</li>
            <li>Row 3: Column 2.</li>
          </ul>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">The <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">isSafe()</code> method checks previously placed queens.</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">The recursive function explores one row at a time.</p>
          <h2 className="text-xl sm:text-2xl font-black text-white mt-10 mb-4 pb-2 border-b border-slate-800 tracking-tight">
            14.6 Why do we need backtracking?
          </h2>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Suppose the algorithm places a queen in a position that appears safe.</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">A later row may have no legal position.</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Without backtracking, the algorithm would stop at that failed arrangement.</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">With backtracking, it:</p>
          <ul className="list-disc list-outside pl-5 space-y-2 text-slate-300 my-3 text-sm leading-relaxed">
            <li>Removes the previous queen.</li>
            <li>Tries another column.</li>
            <li>Continues the search.</li>
          </ul>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">This is how the algorithm explores alternative arrangements.</p>
          <h2 className="text-xl sm:text-2xl font-black text-white mt-10 mb-4 pb-2 border-b border-slate-800 tracking-tight">
            14.7 Complexity analysis
          </h2>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">There are at most N choices for each row.</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">A loose upper bound is O(Nⁿ) for this simplified search-space description, though the one-queen-per-row representation and safety checks substantially constrain the actual search.</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">An improved combinatorial upper bound on complete arrangements before diagonal pruning is O(N!).</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">The implementation's safety check examines up to N previous rows.</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Space complexity is O(N) for the position array and recursive stack, excluding printed output.</p>
          <h2 className="text-xl sm:text-2xl font-black text-white mt-10 mb-4 pb-2 border-b border-slate-800 tracking-tight">
            14.8 N-Queens extensions
          </h2>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Students should implement:</p>
          <div className="flex items-start gap-3 my-2.5 text-sm text-slate-300 leading-relaxed">
            <span className="flex items-center justify-center w-6 h-6 rounded-md bg-slate-950 border border-slate-800 text-slate-200 font-mono text-xs font-bold shrink-0 mt-0.5">1</span>
            <div className="flex-1">A function that returns whether a solution exists.</div>
          </div>
          <div className="flex items-start gap-3 my-2.5 text-sm text-slate-300 leading-relaxed">
            <span className="flex items-center justify-center w-6 h-6 rounded-md bg-slate-950 border border-slate-800 text-slate-200 font-mono text-xs font-bold shrink-0 mt-0.5">2</span>
            <div className="flex-1">A function that returns the number of solutions.</div>
          </div>
          <div className="flex items-start gap-3 my-2.5 text-sm text-slate-300 leading-relaxed">
            <span className="flex items-center justify-center w-6 h-6 rounded-md bg-slate-950 border border-slate-800 text-slate-200 font-mono text-xs font-bold shrink-0 mt-0.5">3</span>
            <div className="flex-1">A function that prints all solutions.</div>
          </div>
          <div className="flex items-start gap-3 my-2.5 text-sm text-slate-300 leading-relaxed">
            <span className="flex items-center justify-center w-6 h-6 rounded-md bg-slate-950 border border-slate-800 text-slate-200 font-mono text-xs font-bold shrink-0 mt-0.5">4</span>
            <div className="flex-1">An optimization using column and diagonal tracking arrays.</div>
          </div>
          <div className="flex items-start gap-3 my-2.5 text-sm text-slate-300 leading-relaxed">
            <span className="flex items-center justify-center w-6 h-6 rounded-md bg-slate-950 border border-slate-800 text-slate-200 font-mono text-xs font-bold shrink-0 mt-0.5">5</span>
            <div className="flex-1">A solver for N = 8.</div>
          </div>
          <div className="flex items-start gap-3 my-2.5 text-sm text-slate-300 leading-relaxed">
            <span className="flex items-center justify-center w-6 h-6 rounded-md bg-slate-950 border border-slate-800 text-slate-200 font-mono text-xs font-bold shrink-0 mt-0.5">6</span>
            <div className="flex-1">A solver using bit masks.</div>
          </div>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">N-Queens is a foundational example of constraint satisfaction and combinatorial search.</p>
          <hr className="my-8 border-slate-800" />
        </div>
      ),
    },
    {
      id: 15,
      title: "15. Sudoku Solver Using Backtracking",
      category: "Part 6 · Grid Constraint Satisfaction",
      anchor: "section-15",
      render: () => (
        <div className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-black text-white mt-10 mb-4 pb-2 border-b border-slate-800 tracking-tight">
            15.1 What is Sudoku?
          </h2>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Sudoku is a number-placement puzzle usually played on a 9 × 9 grid.</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">The standard rules require:</p>
          <div className="flex items-start gap-3 my-2.5 text-sm text-slate-300 leading-relaxed">
            <span className="flex items-center justify-center w-6 h-6 rounded-md bg-slate-950 border border-slate-800 text-slate-200 font-mono text-xs font-bold shrink-0 mt-0.5">1</span>
            <div className="flex-1">Every row to contain digits 1 through 9 exactly once.</div>
          </div>
          <div className="flex items-start gap-3 my-2.5 text-sm text-slate-300 leading-relaxed">
            <span className="flex items-center justify-center w-6 h-6 rounded-md bg-slate-950 border border-slate-800 text-slate-200 font-mono text-xs font-bold shrink-0 mt-0.5">2</span>
            <div className="flex-1">Every column to contain digits 1 through 9 exactly once.</div>
          </div>
          <div className="flex items-start gap-3 my-2.5 text-sm text-slate-300 leading-relaxed">
            <span className="flex items-center justify-center w-6 h-6 rounded-md bg-slate-950 border border-slate-800 text-slate-200 font-mono text-xs font-bold shrink-0 mt-0.5">3</span>
            <div className="flex-1">Every 3 × 3 subgrid to contain digits 1 through 9 exactly once.</div>
          </div>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Some cells are initially filled.</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">The task is to fill the remaining cells without violating any rule.</p>
          <h2 className="text-xl sm:text-2xl font-black text-white mt-10 mb-4 pb-2 border-b border-slate-800 tracking-tight">
            15.2 Why is Sudoku a backtracking problem?
          </h2>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">A blank cell may have several possible values.</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Placing one value can restrict the possible values of other cells.</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Sometimes an initially valid choice leads to an impossible configuration later.</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Backtracking handles this by:</p>
          <div className="flex items-start gap-3 my-2.5 text-sm text-slate-300 leading-relaxed">
            <span className="flex items-center justify-center w-6 h-6 rounded-md bg-slate-950 border border-slate-800 text-slate-200 font-mono text-xs font-bold shrink-0 mt-0.5">1</span>
            <div className="flex-1">Selecting a blank cell.</div>
          </div>
          <div className="flex items-start gap-3 my-2.5 text-sm text-slate-300 leading-relaxed">
            <span className="flex items-center justify-center w-6 h-6 rounded-md bg-slate-950 border border-slate-800 text-slate-200 font-mono text-xs font-bold shrink-0 mt-0.5">2</span>
            <div className="flex-1">Trying a valid digit.</div>
          </div>
          <div className="flex items-start gap-3 my-2.5 text-sm text-slate-300 leading-relaxed">
            <span className="flex items-center justify-center w-6 h-6 rounded-md bg-slate-950 border border-slate-800 text-slate-200 font-mono text-xs font-bold shrink-0 mt-0.5">3</span>
            <div className="flex-1">Moving to another blank cell.</div>
          </div>
          <div className="flex items-start gap-3 my-2.5 text-sm text-slate-300 leading-relaxed">
            <span className="flex items-center justify-center w-6 h-6 rounded-md bg-slate-950 border border-slate-800 text-slate-200 font-mono text-xs font-bold shrink-0 mt-0.5">4</span>
            <div className="flex-1">Undoing the value when no valid continuation exists.</div>
          </div>
          <div className="flex items-start gap-3 my-2.5 text-sm text-slate-300 leading-relaxed">
            <span className="flex items-center justify-center w-6 h-6 rounded-md bg-slate-950 border border-slate-800 text-slate-200 font-mono text-xs font-bold shrink-0 mt-0.5">5</span>
            <div className="flex-1">Trying another digit.</div>
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-white mt-10 mb-4 pb-2 border-b border-slate-800 tracking-tight">
            15.3 Basic Sudoku-solving algorithm
          </h2>
          <div className="flex items-start gap-3 my-2.5 text-sm text-slate-300 leading-relaxed">
            <span className="flex items-center justify-center w-6 h-6 rounded-md bg-slate-950 border border-slate-800 text-slate-200 font-mono text-xs font-bold shrink-0 mt-0.5">1</span>
            <div className="flex-1">Locate an empty cell.</div>
          </div>
          <div className="flex items-start gap-3 my-2.5 text-sm text-slate-300 leading-relaxed">
            <span className="flex items-center justify-center w-6 h-6 rounded-md bg-slate-950 border border-slate-800 text-slate-200 font-mono text-xs font-bold shrink-0 mt-0.5">2</span>
            <div className="flex-1">Try digits from 1 through 9.</div>
          </div>
          <div className="flex items-start gap-3 my-2.5 text-sm text-slate-300 leading-relaxed">
            <span className="flex items-center justify-center w-6 h-6 rounded-md bg-slate-950 border border-slate-800 text-slate-200 font-mono text-xs font-bold shrink-0 mt-0.5">3</span>
            <div className="flex-1">Check the row.</div>
          </div>
          <div className="flex items-start gap-3 my-2.5 text-sm text-slate-300 leading-relaxed">
            <span className="flex items-center justify-center w-6 h-6 rounded-md bg-slate-950 border border-slate-800 text-slate-200 font-mono text-xs font-bold shrink-0 mt-0.5">4</span>
            <div className="flex-1">Check the column.</div>
          </div>
          <div className="flex items-start gap-3 my-2.5 text-sm text-slate-300 leading-relaxed">
            <span className="flex items-center justify-center w-6 h-6 rounded-md bg-slate-950 border border-slate-800 text-slate-200 font-mono text-xs font-bold shrink-0 mt-0.5">5</span>
            <div className="flex-1">Check the corresponding 3 × 3 box.</div>
          </div>
          <div className="flex items-start gap-3 my-2.5 text-sm text-slate-300 leading-relaxed">
            <span className="flex items-center justify-center w-6 h-6 rounded-md bg-slate-950 border border-slate-800 text-slate-200 font-mono text-xs font-bold shrink-0 mt-0.5">6</span>
            <div className="flex-1">Place the digit if valid.</div>
          </div>
          <div className="flex items-start gap-3 my-2.5 text-sm text-slate-300 leading-relaxed">
            <span className="flex items-center justify-center w-6 h-6 rounded-md bg-slate-950 border border-slate-800 text-slate-200 font-mono text-xs font-bold shrink-0 mt-0.5">7</span>
            <div className="flex-1">Recursively solve the remaining cells.</div>
          </div>
          <div className="flex items-start gap-3 my-2.5 text-sm text-slate-300 leading-relaxed">
            <span className="flex items-center justify-center w-6 h-6 rounded-md bg-slate-950 border border-slate-800 text-slate-200 font-mono text-xs font-bold shrink-0 mt-0.5">8</span>
            <div className="flex-1">Restore the cell when a trial fails.</div>
          </div>
          <div className="flex items-start gap-3 my-2.5 text-sm text-slate-300 leading-relaxed">
            <span className="flex items-center justify-center w-6 h-6 rounded-md bg-slate-950 border border-slate-800 text-slate-200 font-mono text-xs font-bold shrink-0 mt-0.5">9</span>
            <div className="flex-1">Return true when all cells are filled successfully.</div>
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-white mt-10 mb-4 pb-2 border-b border-slate-800 tracking-tight">
            15.4 Java implementation
          </h2>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public class SudokuSolver {

    static final int SIZE = 9;

    static boolean isValid(
            int[][] board,
            int row,
            int column,
            int number
    ) {

        // Check row and column

        for (int i = 0; i < SIZE; i++) {

            if (board[row][i] == number) {

                return false;
            }

            if (board[i][column] == number) {

                return false;
            }
        }

        // Find 3x3 box starting position

        int boxRow = (row / 3) * 3;

        int boxColumn = (column / 3) * 3;

        // Check box

        for (int i = 0; i < 3; i++) {

            for (int j = 0; j < 3; j++) {

                if (
                        board[boxRow + i]
                             [boxColumn + j] == number
                ) {

                    return false;
                }
            }
        }

        return true;
    }

    static boolean solve(int[][] board) {

        for (int row = 0; row < SIZE; row++) {

            for (int column = 0;
                 column < SIZE;
                 column++) {

                if (board[row][column] == 0) {

                    for (int number = 1;
                         number <= 9;
                         number++) {

                        if (
                                isValid(
                                        board,
                                        row,
                                        column,
                                        number
                                )
                        ) {

                            board[row][column] = number;

                            if (solve(board)) {

                                return true;
                            }

                            // Undo the choice

                            board[row][column] = 0;
                        }
                    }

                    return false;
                }
            }
        }

        return true;
    }

    static void display(int[][] board) {

        for (int[] row : board) {

            for (int value : row) {

                System.out.print(value + " ");
            }

            System.out.println();
        }
    }

    public static void main(String[] args) {

        int[][] board = {

            {5, 3, 0, 0, 7, 0, 0, 0, 0},

            {6, 0, 0, 1, 9, 5, 0, 0, 0},

            {0, 9, 8, 0, 0, 0, 0, 6, 0},

            {8, 0, 0, 0, 6, 0, 0, 0, 3},

            {4, 0, 0, 8, 0, 3, 0, 0, 1},

            {7, 0, 0, 0, 2, 0, 0, 0, 6},

            {0, 6, 0, 0, 0, 0, 2, 8, 0},

            {0, 0, 0, 4, 1, 9, 0, 0, 5},

            {0, 0, 0, 0, 8, 0, 0, 7, 9}
        };

        if (solve(board)) {

            display(board);

        } else {

            System.out.println("No solution found");
        }
    }
}`}</code>
            </pre>
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-white mt-10 mb-4 pb-2 border-b border-slate-800 tracking-tight">
            15.5 Understanding Sudoku backtracking
          </h2>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">The line:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`board[row][column] = number;`}</code>
            </pre>
          </div>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">represents the choice.</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">The recursive call:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`solve(board);`}</code>
            </pre>
          </div>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">explores the consequences of that choice.</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">The undo operation:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`board[row][column] = 0;`}</code>
            </pre>
          </div>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">restores the original state when the choice fails.</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">This is the essential backtracking pattern.</p>
          <h2 className="text-xl sm:text-2xl font-black text-white mt-10 mb-4 pb-2 border-b border-slate-800 tracking-tight">
            15.6 Sudoku optimization
          </h2>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">The basic implementation repeatedly checks rows, columns, and boxes.</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">A faster implementation can maintain boolean tracking arrays:</p>
          <ul className="list-disc list-outside pl-5 space-y-2 text-slate-300 my-3 text-sm leading-relaxed">
            <li><code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">rowUsed[9][10]</code></li>
            <li><code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">columnUsed[9][10]</code></li>
            <li><code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">boxUsed[9][10]</code></li>
          </ul>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">This allows constant-time validity checks for candidate digits after initialization.</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Another useful improvement is the Minimum Remaining Values heuristic.</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Instead of always selecting the first empty cell, select the empty cell with the fewest valid candidate values.</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">This often reduces the amount of search.</p>
          <h2 className="text-xl sm:text-2xl font-black text-white mt-10 mb-4 pb-2 border-b border-slate-800 tracking-tight">
            15.7 Complexity analysis
          </h2>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">A loose upper bound is O(9ᵐ), where m is the number of empty cells, because each empty cell may have at most nine possible values.</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Constraint checking and pruning eliminate many branches in practical cases.</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">The recursive space usage is O(m) for a search depth proportional to the number of empty cells, excluding board storage.</p>
          <hr className="my-8 border-slate-800" />
        </div>
      ),
    },
    {
      id: 16,
      title: "16. Rat in a Maze",
      category: "Part 7 · Grid Pathfinding",
      anchor: "section-16",
      render: () => (
        <div className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-black text-white mt-10 mb-4 pb-2 border-b border-slate-800 tracking-tight">
            16.1 What is the Rat in a Maze problem?
          </h2>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Rat in a Maze is a classic backtracking problem.</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">A maze is represented as a two-dimensional grid.</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">The rat begins at a starting cell and must reach a destination cell.</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Some cells are open, while others are blocked.</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">The program must determine whether a valid path exists.</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">A common introductory representation is:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`1 = Open cell
0 = Blocked cell`}</code>
            </pre>
          </div>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Example:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`1 0 0 0
1 1 0 1
0 1 0 0
1 1 1 1`}</code>
            </pre>
          </div>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">The starting position is:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`(0, 0)`}</code>
            </pre>
          </div>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">The destination is:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`(3, 3)`}</code>
            </pre>
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-white mt-10 mb-4 pb-2 border-b border-slate-800 tracking-tight">
            16.2 Backtracking approach
          </h2>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">The algorithm:</p>
          <div className="flex items-start gap-3 my-2.5 text-sm text-slate-300 leading-relaxed">
            <span className="flex items-center justify-center w-6 h-6 rounded-md bg-slate-950 border border-slate-800 text-slate-200 font-mono text-xs font-bold shrink-0 mt-0.5">1</span>
            <div className="flex-1">Start at the source.</div>
          </div>
          <div className="flex items-start gap-3 my-2.5 text-sm text-slate-300 leading-relaxed">
            <span className="flex items-center justify-center w-6 h-6 rounded-md bg-slate-950 border border-slate-800 text-slate-200 font-mono text-xs font-bold shrink-0 mt-0.5">2</span>
            <div className="flex-1">Check whether the cell is valid.</div>
          </div>
          <div className="flex items-start gap-3 my-2.5 text-sm text-slate-300 leading-relaxed">
            <span className="flex items-center justify-center w-6 h-6 rounded-md bg-slate-950 border border-slate-800 text-slate-200 font-mono text-xs font-bold shrink-0 mt-0.5">3</span>
            <div className="flex-1">Mark the cell as part of the path.</div>
          </div>
          <div className="flex items-start gap-3 my-2.5 text-sm text-slate-300 leading-relaxed">
            <span className="flex items-center justify-center w-6 h-6 rounded-md bg-slate-950 border border-slate-800 text-slate-200 font-mono text-xs font-bold shrink-0 mt-0.5">4</span>
            <div className="flex-1">Explore the allowed directions.</div>
          </div>
          <div className="flex items-start gap-3 my-2.5 text-sm text-slate-300 leading-relaxed">
            <span className="flex items-center justify-center w-6 h-6 rounded-md bg-slate-950 border border-slate-800 text-slate-200 font-mono text-xs font-bold shrink-0 mt-0.5">5</span>
            <div className="flex-1">If a destination is reached, a path exists.</div>
          </div>
          <div className="flex items-start gap-3 my-2.5 text-sm text-slate-300 leading-relaxed">
            <span className="flex items-center justify-center w-6 h-6 rounded-md bg-slate-950 border border-slate-800 text-slate-200 font-mono text-xs font-bold shrink-0 mt-0.5">6</span>
            <div className="flex-1">If all directions fail, remove the cell from the path.</div>
          </div>
          <div className="flex items-start gap-3 my-2.5 text-sm text-slate-300 leading-relaxed">
            <span className="flex items-center justify-center w-6 h-6 rounded-md bg-slate-950 border border-slate-800 text-slate-200 font-mono text-xs font-bold shrink-0 mt-0.5">7</span>
            <div className="flex-1">Return to the previous position.</div>
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-white mt-10 mb-4 pb-2 border-b border-slate-800 tracking-tight">
            16.3 Java implementation
          </h2>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">This version permits movement down and right only.</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public class RatInMaze {

    static final int N = 4;

    static boolean solve(
            int[][] maze,
            int row,
            int column,
            int[][] path
    ) {

        // Destination reached

        if (row == N - 1 && column == N - 1) {

            if (maze[row][column] == 1) {

                path[row][column] = 1;

                return true;
            }

            return false;
        }

        // Check boundaries and blocked cells

        if (
                row < 0 ||
                column < 0 ||
                row >= N ||
                column >= N ||
                maze[row][column] == 0 ||
                path[row][column] == 1
        ) {

            return false;
        }

        // Mark current cell

        path[row][column] = 1;

        // Explore downward

        if (
                solve(
                        maze,
                        row + 1,
                        column,
                        path
                )
        ) {

            return true;
        }

        // Explore rightward

        if (
                solve(
                        maze,
                        row,
                        column + 1,
                        path
                )
        ) {

            return true;
        }

        // Backtrack

        path[row][column] = 0;

        return false;
    }

    static void display(int[][] path) {

        for (int[] row : path) {

            for (int value : row) {

                System.out.print(value + " ");
            }

            System.out.println();
        }
    }

    public static void main(String[] args) {

        int[][] maze = {

            {1, 0, 0, 0},

            {1, 1, 0, 1},

            {0, 1, 0, 0},

            {1, 1, 1, 1}
        };

        int[][] path = new int[N][N];

        if (solve(maze, 0, 0, path)) {

            System.out.println("Path found");

            display(path);

        } else {

            System.out.println("No path exists");
        }
    }
}`}</code>
            </pre>
          </div>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Possible output:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Path found

1 0 0 0
1 1 0 0
0 1 0 0
0 1 1 1`}</code>
            </pre>
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-white mt-10 mb-4 pb-2 border-b border-slate-800 tracking-tight">
            16.4 Why is a visited/path array necessary?
          </h2>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Without a record of previously visited cells, algorithms that allow movement in multiple directions may revisit cells repeatedly.</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">In this particular down-and-right-only problem, movement cannot create a cycle, but the path array still records the chosen solution.</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">For more general maze exploration, a visited array is important to prevent infinite revisiting.</p>
          <hr className="my-8 border-slate-800" />
        </div>
      ),
    },
    {
      id: 17,
      title: "17. General Maze Pathfinding",
      category: "Part 7 · 4-Direction DFS & BFS",
      anchor: "section-17",
      render: () => (
        <div className="space-y-4">
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">The basic Rat in a Maze problem is a restricted form of pathfinding.</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">A more general maze may allow movement in four directions:</p>
          <ul className="list-disc list-outside pl-5 space-y-2 text-slate-300 my-3 text-sm leading-relaxed">
            <li>Up.</li>
            <li>Down.</li>
            <li>Left.</li>
            <li>Right.</li>
          </ul>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">The algorithm needs:</p>
          <div className="flex items-start gap-3 my-2.5 text-sm text-slate-300 leading-relaxed">
            <span className="flex items-center justify-center w-6 h-6 rounded-md bg-slate-950 border border-slate-800 text-slate-200 font-mono text-xs font-bold shrink-0 mt-0.5">1</span>
            <div className="flex-1">A grid.</div>
          </div>
          <div className="flex items-start gap-3 my-2.5 text-sm text-slate-300 leading-relaxed">
            <span className="flex items-center justify-center w-6 h-6 rounded-md bg-slate-950 border border-slate-800 text-slate-200 font-mono text-xs font-bold shrink-0 mt-0.5">2</span>
            <div className="flex-1">A starting location.</div>
          </div>
          <div className="flex items-start gap-3 my-2.5 text-sm text-slate-300 leading-relaxed">
            <span className="flex items-center justify-center w-6 h-6 rounded-md bg-slate-950 border border-slate-800 text-slate-200 font-mono text-xs font-bold shrink-0 mt-0.5">3</span>
            <div className="flex-1">A target location.</div>
          </div>
          <div className="flex items-start gap-3 my-2.5 text-sm text-slate-300 leading-relaxed">
            <span className="flex items-center justify-center w-6 h-6 rounded-md bg-slate-950 border border-slate-800 text-slate-200 font-mono text-xs font-bold shrink-0 mt-0.5">4</span>
            <div className="flex-1">A set of movement rules.</div>
          </div>
          <div className="flex items-start gap-3 my-2.5 text-sm text-slate-300 leading-relaxed">
            <span className="flex items-center justify-center w-6 h-6 rounded-md bg-slate-950 border border-slate-800 text-slate-200 font-mono text-xs font-bold shrink-0 mt-0.5">5</span>
            <div className="flex-1">A visited-state representation.</div>
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-white mt-10 mb-4 pb-2 border-b border-slate-800 tracking-tight">
            17.1 Four-direction recursive pathfinding
          </h2>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Java:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public class MazePathfinding {

    static final int[] ROW_MOVE = {-1, 1, 0, 0};

    static final int[] COLUMN_MOVE = {0, 0, -1, 1};

    static boolean search(
            int[][] maze,
            boolean[][] visited,
            int row,
            int column,
            int targetRow,
            int targetColumn
    ) {

        if (
                row < 0 ||
                column < 0 ||
                row >= maze.length ||
                column >= maze[0].length
        ) {

            return false;
        }

        if (maze[row][column] == 0 ||
            visited[row][column]) {

            return false;
        }

        if (
                row == targetRow &&
                column == targetColumn
        ) {

            return true;
        }

        visited[row][column] = true;

        for (int direction = 0;
             direction < 4;
             direction++) {

            int nextRow =
                    row + ROW_MOVE[direction];

            int nextColumn =
                    column + COLUMN_MOVE[direction];

            if (
                    search(
                            maze,
                            visited,
                            nextRow,
                            nextColumn,
                            targetRow,
                            targetColumn
                    )
            ) {

                return true;
            }
        }

        return false;
    }

    public static void main(String[] args) {

        int[][] maze = {

            {1, 1, 1, 0},

            {0, 1, 1, 0},

            {1, 1, 0, 1},

            {1, 1, 1, 1}
        };

        boolean[][] visited =
                new boolean[maze.length][maze[0].length];

        boolean found = search(
                maze,
                visited,
                0,
                0,
                3,
                3
        );

        System.out.println(
                found ? "Path exists" : "No path"
        );
    }
}`}</code>
            </pre>
          </div>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">This code determines whether a path exists using depth-first search with recursive exploration.</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">It does not reconstruct the actual path in this version.</p>
          <h2 className="text-xl sm:text-2xl font-black text-white mt-10 mb-4 pb-2 border-b border-slate-800 tracking-tight">
            17.2 Important distinction: DFS versus BFS
          </h2>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Depth-first search (DFS) explores one path as far as possible before backtracking.</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Breadth-first search (BFS) explores positions in increasing distance from the starting position.</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">For an unweighted grid, BFS is generally the preferred method when the goal is to find a path with the minimum number of moves.</p>
          <div className="overflow-x-auto my-4 rounded-xl border border-slate-800 shadow-2xs">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-white border-b border-slate-800 font-semibold">
                <tr>
                  <th className="px-4 py-3">DFS</th>
                  <th className="px-4 py-3">BFS</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">Explores depth first</td>
                  <td className="px-4 py-2.5 text-slate-300">Explores level by level</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">Naturally implemented recursively</td>
                  <td className="px-4 py-2.5 text-slate-300">Often implemented using a queue</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">Useful for reachability and exploration</td>
                  <td className="px-4 py-2.5 text-slate-300">Useful for shortest paths in unweighted graphs</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">May find a longer path first</td>
                  <td className="px-4 py-2.5 text-slate-300">Finds a shortest path under equal movement costs</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">This distinction becomes particularly important when studying graph algorithms.</p>
          <hr className="my-8 border-slate-800" />
        </div>
      ),
    },
    {
      id: 18,
      title: "18. Recursive Complexity Analysis",
      category: "Part 8 · Recurrence & Master Theorem",
      anchor: "section-18",
      render: () => (
        <div className="space-y-4">
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Understanding recursion is incomplete without understanding how its execution cost grows with input size.</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">A recursive algorithm can perform a small amount of work per call but make many calls.</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Its total complexity depends on both.</p>
          <h2 className="text-xl sm:text-2xl font-black text-white mt-10 mb-4 pb-2 border-b border-slate-800 tracking-tight">
            18.1 What is a recurrence relation?
          </h2>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">A recurrence relation expresses the running time of an algorithm in terms of smaller input sizes.</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Examples:</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Factorial:</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">\[</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">T(n)=T(n-1)+O(1)</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">\]</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Binary search:</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">\[</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">T(n)=T(n/2)+O(1)</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">\]</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Naive Fibonacci:</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">\[</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">T(n)=T(n-1)+T(n-2)+O(1)</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">\]</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">These relationships help derive the overall time complexity.</p>
          <h2 className="text-xl sm:text-2xl font-black text-white mt-10 mb-4 pb-2 border-b border-slate-800 tracking-tight">
            18.2 Complexity of factorial recursion
          </h2>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Consider:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`static long factorial(int n) {

    if (n <= 1) {
        return 1;
    }

    return n * factorial(n - 1);
}`}</code>
            </pre>
          </div>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Every recursive call performs constant work and reduces the input by one.</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Therefore:</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">\[</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">T(n)=T(n-1)+O(1)</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">\]</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">There are approximately n recursive calls.</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Time complexity:</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">O(n).</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Auxiliary space complexity:</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">O(n), due to recursive stack frames.</p>
          <h2 className="text-xl sm:text-2xl font-black text-white mt-10 mb-4 pb-2 border-b border-slate-800 tracking-tight">
            18.3 Complexity of binary search
          </h2>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Binary search reduces the search interval by approximately half in each recursive call.</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`static int binarySearch(
        int[] numbers,
        int left,
        int right,
        int target
) {

    if (left > right) {
        return -1;
    }

    int middle = left + (right - left) / 2;

    if (numbers[middle] == target) {

        return middle;
    }

    if (target < numbers[middle]) {

        return binarySearch(
                numbers,
                left,
                middle - 1,
                target
        );
    }

    return binarySearch(
            numbers,
            middle + 1,
            right,
            target
    );
}`}</code>
            </pre>
          </div>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Its recurrence is:</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">\[</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">T(n)=T(n/2)+O(1)</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">\]</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Time complexity:</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">O(log n).</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Auxiliary space complexity:</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">O(log n) due to recursive calls.</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">An iterative version would use O(1) auxiliary space.</p>
          <h2 className="text-xl sm:text-2xl font-black text-white mt-10 mb-4 pb-2 border-b border-slate-800 tracking-tight">
            18.4 Complexity of recursive Fibonacci
          </h2>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">The naive Fibonacci algorithm uses two recursive calls for most values.</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Its running time follows:</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">\[</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">T(n)=T(n-1)+T(n-2)+O(1)</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">\]</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">The number of calls grows exponentially.</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">A common upper-bound description is O(2ⁿ).</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">The recursion depth is O(n), so auxiliary stack space is O(n).</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Memoization reduces the time complexity to O(n), with O(n) additional storage.</p>
          <h2 className="text-xl sm:text-2xl font-black text-white mt-10 mb-4 pb-2 border-b border-slate-800 tracking-tight">
            18.5 Complexity of subset generation
          </h2>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">For n independent elements, every element has two possible choices:</p>
          <ul className="list-disc list-outside pl-5 space-y-2 text-slate-300 my-3 text-sm leading-relaxed">
            <li>Include.</li>
            <li>Exclude.</li>
          </ul>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">The total number of subsets is exponential.</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">The total number of subsets is:</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">\[</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">2^n</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">\]</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">If every subset is printed, the total output size across all subsets is O(n × 2ⁿ).</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">This output cost matters when analyzing the algorithm.</p>
          <h2 className="text-xl sm:text-2xl font-black text-white mt-10 mb-4 pb-2 border-b border-slate-800 tracking-tight">
            18.6 Complexity of permutation generation
          </h2>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">When arranging n distinct elements, the number of complete arrangements grows factorially.</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">The total number of arrangements is:</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">\[</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">n!</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">\]</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">The algorithm must also spend time constructing or outputting each arrangement.</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">A typical permutation generator therefore requires O(n × n!) time when printing all permutations, excluding the cost model for individual output operations.</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Its recursive auxiliary space can be O(n), excluding output storage.</p>
          <h2 className="text-xl sm:text-2xl font-black text-white mt-10 mb-4 pb-2 border-b border-slate-800 tracking-tight">
            18.7 Complexity of N-Queens
          </h2>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">For an N × N board, we place exactly one queen per row.</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Each row provides up to N choices, but column and diagonal restrictions eliminate invalid configurations.</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">A simple search can be bounded by O(N!), because choices are progressively restricted to unused columns before diagonal pruning.</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Safety checks may add up to O(N) work per attempted placement.</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">The practical runtime depends heavily on pruning and the chosen representation.</p>
          <h2 className="text-xl sm:text-2xl font-black text-white mt-10 mb-4 pb-2 border-b border-slate-800 tracking-tight">
            18.8 Complexity summary
          </h2>
          <div className="overflow-x-auto my-4 rounded-xl border border-slate-800 shadow-2xs">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-white border-b border-slate-800 font-semibold">
                <tr>
                  <th className="px-4 py-3">Algorithm</th>
                  <th className="px-4 py-3">Time complexity</th>
                  <th className="px-4 py-3">Auxiliary space</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">Recursive sum</td>
                  <td className="px-4 py-2.5 text-slate-300">O(n)</td>
                  <td className="px-4 py-2.5 text-slate-300">O(n)</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">Recursive factorial</td>
                  <td className="px-4 py-2.5 text-slate-300">O(n)</td>
                  <td className="px-4 py-2.5 text-slate-300">O(n)</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">Naive Fibonacci</td>
                  <td className="px-4 py-2.5 text-slate-300">O(2ⁿ) upper bound</td>
                  <td className="px-4 py-2.5 text-slate-300">O(n)</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">Memoized Fibonacci</td>
                  <td className="px-4 py-2.5 text-slate-300">O(n)</td>
                  <td className="px-4 py-2.5 text-slate-300">O(n)</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">Recursive binary search</td>
                  <td className="px-4 py-2.5 text-slate-300">O(log n)</td>
                  <td className="px-4 py-2.5 text-slate-300">O(log n)</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">Subset generation</td>
                  <td className="px-4 py-2.5 text-slate-300">O(n × 2ⁿ) including output</td>
                  <td className="px-4 py-2.5 text-slate-300">O(n) excluding output</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">Permutation generation</td>
                  <td className="px-4 py-2.5 text-slate-300">O(n × n!) including output</td>
                  <td className="px-4 py-2.5 text-slate-300">O(n) excluding output</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">N-Queens</td>
                  <td className="px-4 py-2.5 text-slate-300">O(N × N!) conservative bound for this implementation</td>
                  <td className="px-4 py-2.5 text-slate-300">O(N) excluding output</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">Sudoku backtracking</td>
                  <td className="px-4 py-2.5 text-slate-300">O(9ᵐ) loose upper bound</td>
                  <td className="px-4 py-2.5 text-slate-300">O(m) recursion depth</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">Grid DFS</td>
                  <td className="px-4 py-2.5 text-slate-300">O(R × C) with visited tracking</td>
                  <td className="px-4 py-2.5 text-slate-300">O(R × C) including visited storage</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">These are algorithmic models under stated assumptions. Actual execution also depends on input structure, constraint pruning, and output costs.</p>
          <h2 className="text-xl sm:text-2xl font-black text-white mt-10 mb-4 pb-2 border-b border-slate-800 tracking-tight">
            18.9 Introduction to the Master Theorem
          </h2>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Some recursive algorithms divide a problem into multiple equally sized subproblems.</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Their recurrences can often be analyzed using the Master Theorem.</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">A common form is:</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">\[</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">T(n)=aT(n/b)+f(n)</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">\]</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Where:</p>
          <ul className="list-disc list-outside pl-5 space-y-2 text-slate-300 my-3 text-sm leading-relaxed">
            <li>a represents the number of recursive subproblems.</li>
            <li>b represents the factor by which input size is reduced.</li>
            <li>f(n) represents work performed outside recursive calls.</li>
          </ul>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Example:</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Merge sort:</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">\[</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">T(n)=2T(n/2)+O(n)</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">\]</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Its time complexity is O(n log n).</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">The Master Theorem is an important foundation for analyzing divide-and-conquer algorithms.</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">It is an introduction here; detailed recurrence-solving techniques should be revisited in the dedicated DSA algorithm-analysis module.</p>
          <hr className="my-8 border-slate-800" />
        </div>
      ),
    },
    {
      id: 19,
      title: "19. Divide-and-Conquer Versus Backtracking",
      category: "Part 8 · Algorithmic Paradigms",
      anchor: "section-19",
      render: () => (
        <div className="space-y-4">
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">These approaches both use recursion frequently, but they solve problems differently.</p>
          <h2 className="text-xl sm:text-2xl font-black text-white mt-10 mb-4 pb-2 border-b border-slate-800 tracking-tight">
            19.1 Divide-and-conquer
          </h2>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Divide-and-conquer splits a problem into smaller subproblems, solves those subproblems, and combines their results.</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Examples:</p>
          <ul className="list-disc list-outside pl-5 space-y-2 text-slate-300 my-3 text-sm leading-relaxed">
            <li>Merge sort.</li>
            <li>Quicksort.</li>
            <li>Binary search.</li>
            <li>Fast exponentiation.</li>
          </ul>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Typical process:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`       Original Problem
              |
          Divide
         /      \\
    Problem A  Problem B
        |          |
       Solve      Solve
         \\        /
          Combine
              |
          Final Result`}</code>
            </pre>
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-white mt-10 mb-4 pb-2 border-b border-slate-800 tracking-tight">
            19.2 Backtracking
          </h2>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Backtracking explores a collection of possible choices and reverses decisions when a path is unsuccessful or invalid.</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Examples:</p>
          <ul className="list-disc list-outside pl-5 space-y-2 text-slate-300 my-3 text-sm leading-relaxed">
            <li>N-Queens.</li>
            <li>Sudoku.</li>
            <li>Maze problems.</li>
            <li>Permutations.</li>
            <li>Combinations.</li>
            <li>Subsets.</li>
          </ul>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Typical process:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`        Initial State
             |
         Make Choice
             |
        Test Constraints
          /       \\
       Valid     Invalid
         |          |
      Explore     Reject
         |
      Undo Choice
         |
      Next Choice`}</code>
            </pre>
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-white mt-10 mb-4 pb-2 border-b border-slate-800 tracking-tight">
            19.3 Comparison
          </h2>
          <div className="overflow-x-auto my-4 rounded-xl border border-slate-800 shadow-2xs">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-white border-b border-slate-800 font-semibold">
                <tr>
                  <th className="px-4 py-3">Divide-and-conquer</th>
                  <th className="px-4 py-3">Backtracking</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">Divides a problem into smaller subproblems</td>
                  <td className="px-4 py-2.5 text-slate-300">Explores alternative choices</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">Often combines subproblem results</td>
                  <td className="px-4 py-2.5 text-slate-300">Often builds candidates incrementally</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">Does not normally undo a choice</td>
                  <td className="px-4 py-2.5 text-slate-300">Explicitly restores state</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">Commonly used for sorting and searching</td>
                  <td className="px-4 py-2.5 text-slate-300">Commonly used for constraint solving</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">Example: Merge sort</td>
                  <td className="px-4 py-2.5 text-slate-300">Example: N-Queens</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Some algorithms combine ideas from both approaches, so these categories are useful models rather than completely exclusive classifications.</p>
          <hr className="my-8 border-slate-800" />
        </div>
      ),
    },
    {
      id: 20,
      title: "20. Advanced Recursive Problem-Solving Patterns",
      category: "Part 9 · Core Design Patterns",
      anchor: "section-20",
      render: () => (
        <div className="space-y-4">
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">This section introduces several common patterns used in technical interviews and competitive programming.</p>
          <h2 className="text-xl sm:text-2xl font-black text-white mt-10 mb-4 pb-2 border-b border-slate-800 tracking-tight">
            20.1 Include-exclude pattern
          </h2>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">For every element, choose whether to include it or exclude it.</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Used in:</p>
          <ul className="list-disc list-outside pl-5 space-y-2 text-slate-300 my-3 text-sm leading-relaxed">
            <li>Subsets.</li>
            <li>Subsequence generation.</li>
            <li>Some subset-sum problems.</li>
            <li>Combinatorial search.</li>
          </ul>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">General structure:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`void solve(int index) {

    if (index == n) {

        return;
    }

    // Include

    solve(index + 1);

    // Exclude

    solve(index + 1);
}`}</code>
            </pre>
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-white mt-10 mb-4 pb-2 border-b border-slate-800 tracking-tight">
            20.2 Choose-explore-unchoose pattern
          </h2>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Used in:</p>
          <ul className="list-disc list-outside pl-5 space-y-2 text-slate-300 my-3 text-sm leading-relaxed">
            <li>Permutations.</li>
            <li>N-Queens.</li>
            <li>Sudoku.</li>
            <li>Maze pathfinding.</li>
          </ul>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">General structure:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`for (Choice choice : choices) {

    if (valid(choice)) {

        apply(choice);

        solve();

        undo(choice);
    }
}`}</code>
            </pre>
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-white mt-10 mb-4 pb-2 border-b border-slate-800 tracking-tight">
            20.3 Recursive pointer pattern
          </h2>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Useful for:</p>
          <ul className="list-disc list-outside pl-5 space-y-2 text-slate-300 my-3 text-sm leading-relaxed">
            <li>Array reversal.</li>
            <li>Palindrome checking.</li>
            <li>Recursive string processing.</li>
            <li>Linked-list recursion.</li>
          </ul>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Example:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`static boolean isPalindrome(
        String text,
        int left,
        int right
) {

    if (left >= right) {

        return true;
    }

    if (text.charAt(left) != text.charAt(right)) {

        return false;
    }

    return isPalindrome(
            text,
            left + 1,
            right - 1
    );
}`}</code>
            </pre>
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-white mt-10 mb-4 pb-2 border-b border-slate-800 tracking-tight">
            20.4 Divide-and-conquer pattern
          </h2>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Used in:</p>
          <ul className="list-disc list-outside pl-5 space-y-2 text-slate-300 my-3 text-sm leading-relaxed">
            <li>Binary search.</li>
            <li>Merge sort.</li>
            <li>Quicksort.</li>
            <li>Recursive multiplication techniques.</li>
          </ul>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">General structure:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Result solve(Problem problem) {

    if (isSmall(problem)) {

        return solveDirectly(problem);
    }

    Problem left = divideLeft(problem);

    Problem right = divideRight(problem);

    Result a = solve(left);

    Result b = solve(right);

    return combine(a, b);
}`}</code>
            </pre>
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-white mt-10 mb-4 pb-2 border-b border-slate-800 tracking-tight">
            20.5 Memoization pattern
          </h2>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Memoization stores solutions to smaller problems so they do not need to be recomputed.</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Used in:</p>
          <ul className="list-disc list-outside pl-5 space-y-2 text-slate-300 my-3 text-sm leading-relaxed">
            <li>Fibonacci.</li>
            <li>Dynamic programming.</li>
            <li>Recursive path counting.</li>
            <li>Optimization problems.</li>
          </ul>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Example:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`static int solve(
        int n,
        int[] memo
) {

    if (n <= 1) {
        return n;
    }

    if (memo[n] != -1) {

        return memo[n];
    }

    memo[n] =
            solve(n - 1, memo) +
            solve(n - 2, memo);

    return memo[n];
}`}</code>
            </pre>
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-white mt-10 mb-4 pb-2 border-b border-slate-800 tracking-tight">
            20.6 Pruning pattern
          </h2>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">A candidate is rejected as soon as it becomes impossible to reach a valid solution.</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Example:</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">If a maze position is outside the board, the recursive path should stop immediately.</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">If an N-Queens placement conflicts with an existing queen, it should not be explored further.</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Pruning can dramatically reduce the number of explored search states.</p>
          <hr className="my-8 border-slate-800" />
        </div>
      ),
    },
    {
      id: 21,
      title: "21. Practical Programming Examples (7 Programs)",
      category: "Part 10 · Worked Problem Set",
      anchor: "section-21",
      render: () => (
        <div className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-black text-white mt-10 mb-4 pb-2 border-b border-slate-800 tracking-tight">
            Program 1 — Recursive digit sum
          </h2>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public class RecursiveDigitSum {

    static int digitSum(int number) {

        number = Math.abs(number);

        if (number < 10) {

            return number;
        }

        return number % 10 +
               digitSum(number / 10);
    }

    public static void main(String[] args) {

        System.out.println(digitSum(12345));
    }
}`}</code>
            </pre>
          </div>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Output:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`15`}</code>
            </pre>
          </div>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">The recursive case removes one digit on each call.</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">This implementation has a boundary caveat for <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">Integer.MIN_VALUE</code>, because its absolute value cannot be represented as an int. Use a long input when handling the complete int range.</p>
          <h2 className="text-xl sm:text-2xl font-black text-white mt-10 mb-4 pb-2 border-b border-slate-800 tracking-tight">
            Program 2 — Count digits recursively
          </h2>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public class RecursiveDigitCount {

    static int countDigits(int number) {

        number = Math.abs(number);

        if (number < 10) {

            return 1;
        }

        return 1 + countDigits(number / 10);
    }

    public static void main(String[] args) {

        System.out.println(countDigits(12345));
    }
}`}</code>
            </pre>
          </div>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Output:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`5`}</code>
            </pre>
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-white mt-10 mb-4 pb-2 border-b border-slate-800 tracking-tight">
            Program 3 — Recursive GCD
          </h2>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Euclidean algorithm:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public class RecursiveGCD {

    static long gcd(long a, long b) {

        if (b == 0) {

            return Math.abs(a);
        }

        return gcd(b, a % b);
    }

    public static void main(String[] args) {

        System.out.println(gcd(48, 18));
    }
}`}</code>
            </pre>
          </div>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Output:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`6`}</code>
            </pre>
          </div>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">The method repeatedly reduces the problem using the remainder.</p>
          <h2 className="text-xl sm:text-2xl font-black text-white mt-10 mb-4 pb-2 border-b border-slate-800 tracking-tight">
            Program 4 — Recursive power using exponentiation by squaring
          </h2>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">A naive recursive power implementation makes one recursive call per exponent.</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Exponentiation by squaring reduces the number of operations.</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Mathematical relationships:</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">For even n, calculate the square of a smaller power.</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">For odd n, multiply the even-power result by the base.</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Java:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public class FastPower {

    static long power(long base, int exponent) {

        if (exponent < 0) {

            throw new IllegalArgumentException(
                    "Exponent must be non-negative"
            );
        }

        if (exponent == 0) {

            return 1;
        }

        long half = power(base, exponent / 2);

        long result = half * half;

        if (exponent % 2 != 0) {

            result *= base;
        }

        return result;
    }

    public static void main(String[] args) {

        System.out.println(power(2, 10));
    }
}`}</code>
            </pre>
          </div>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Output:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`1024`}</code>
            </pre>
          </div>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Time complexity: O(log n).</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Auxiliary space complexity: O(log n).</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">This version can still overflow long for sufficiently large results.</p>
          <h2 className="text-xl sm:text-2xl font-black text-white mt-10 mb-4 pb-2 border-b border-slate-800 tracking-tight">
            Program 5 — Recursive binary search
          </h2>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public class RecursiveBinarySearch {

    static int search(
            int[] numbers,
            int left,
            int right,
            int target
    ) {

        if (left > right) {

            return -1;
        }

        int middle =
                left + (right - left) / 2;

        if (numbers[middle] == target) {

            return middle;
        }

        if (target < numbers[middle]) {

            return search(
                    numbers,
                    left,
                    middle - 1,
                    target
            );
        }

        return search(
                numbers,
                middle + 1,
                right,
                target
        );
    }

    public static void main(String[] args) {

        int[] numbers = {10, 20, 30, 40, 50, 60};

        System.out.println(
                search(
                        numbers,
                        0,
                        numbers.length - 1,
                        40
                )
        );
    }
}`}</code>
            </pre>
          </div>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Output:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`3`}</code>
            </pre>
          </div>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">The input array must be sorted.</p>
          <h2 className="text-xl sm:text-2xl font-black text-white mt-10 mb-4 pb-2 border-b border-slate-800 tracking-tight">
            Program 6 — Generate all subsets of an integer array
          </h2>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`import java.util.ArrayList;
import java.util.List;

public class AllSubsets {

    static void generate(
            int[] numbers,
            int index,
            List<Integer> selected
    ) {

        if (index == numbers.length) {

            System.out.println(selected);

            return;
        }

        selected.add(numbers[index]);

        generate(
                numbers,
                index + 1,
                selected
        );

        selected.remove(selected.size() - 1);

        generate(
                numbers,
                index + 1,
                selected
        );
    }

    public static void main(String[] args) {

        int[] numbers = {1, 2, 3};

        generate(
                numbers,
                0,
                new ArrayList<>()
        );
    }
}`}</code>
            </pre>
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-white mt-10 mb-4 pb-2 border-b border-slate-800 tracking-tight">
            Program 7 — Generate combinations of a fixed size
          </h2>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`import java.util.ArrayList;
import java.util.List;

public class FixedCombinations {

    static void generate(
            int[] numbers,
            int start,
            int remaining,
            List<Integer> current
    ) {

        if (remaining == 0) {

            System.out.println(current);

            return;
        }

        for (
                int i = start;
                i <= numbers.length - remaining;
                i++
        ) {

            current.add(numbers[i]);

            generate(
                    numbers,
                    i + 1,
                    remaining - 1,
                    current
            );

            current.remove(current.size() - 1);
        }
    }

    public static void main(String[] args) {

        int[] numbers = {1, 2, 3, 4, 5};

        generate(
                numbers,
                0,
                3,
                new ArrayList<>()
        );
    }
}`}</code>
            </pre>
          </div>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">This generates all three-element combinations without repetition.</p>
          <hr className="my-8 border-slate-800" />
        </div>
      ),
    },
    {
      id: 22,
      title: "22. Recursive Complexity Practice",
      category: "Part 10 · Recurrence Drill",
      anchor: "section-22",
      render: () => (
        <div className="space-y-4">
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Students should learn to derive complexity instead of memorizing it.</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Consider these algorithms.</p>
          <div className="overflow-x-auto my-4 rounded-xl border border-slate-800 shadow-2xs">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-white border-b border-slate-800 font-semibold">
                <tr>
                  <th className="px-4 py-3">Code structure</th>
                  <th className="px-4 py-3">Number of recursive branches</th>
                  <th className="px-4 py-3">Typical time</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300"><code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">f(n - 1)</code> with O(1) work</td>
                  <td className="px-4 py-2.5 text-slate-300">1</td>
                  <td className="px-4 py-2.5 text-slate-300">O(n)</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300"><code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">f(n / 2)</code> with O(1) work</td>
                  <td className="px-4 py-2.5 text-slate-300">1</td>
                  <td className="px-4 py-2.5 text-slate-300">O(log n)</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">Two calls with n - 1</td>
                  <td className="px-4 py-2.5 text-slate-300">2</td>
                  <td className="px-4 py-2.5 text-slate-300">Exponential</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">Two calls on n / 2 with O(n) combine work</td>
                  <td className="px-4 py-2.5 text-slate-300">2</td>
                  <td className="px-4 py-2.5 text-slate-300">O(n log n)</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">Include or exclude n elements</td>
                  <td className="px-4 py-2.5 text-slate-300">2 per level</td>
                  <td className="px-4 py-2.5 text-slate-300">O(2ⁿ) nodes</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">Generate every permutation</td>
                  <td className="px-4 py-2.5 text-slate-300">Decreasing choices</td>
                  <td className="px-4 py-2.5 text-slate-300">O(n × n!) including output</td>
                </tr>
              </tbody>
            </table>
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-white mt-10 mb-4 pb-2 border-b border-slate-800 tracking-tight">
            Exercise: Identify the recurrence
          </h2>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed"><strong className="font-semibold text-white">Example A</strong></p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`static void solve(int n) {

    if (n == 0) {
        return;
    }

    solve(n - 1);
}`}</code>
            </pre>
          </div>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Recurrence:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`T(n) = T(n - 1) + O(1)`}</code>
            </pre>
          </div>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Time: O(n).</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed"><strong className="font-semibold text-white">Example B</strong></p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`static void solve(int n) {

    if (n <= 1) {
        return;
    }

    solve(n / 2);
}`}</code>
            </pre>
          </div>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Recurrence:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`T(n) = T(n / 2) + O(1)`}</code>
            </pre>
          </div>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Time: O(log n).</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed"><strong className="font-semibold text-white">Example C</strong></p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`static void solve(int n) {

    if (n <= 1) {
        return;
    }

    solve(n - 1);

    solve(n - 1);
}`}</code>
            </pre>
          </div>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Recurrence:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`T(n) = 2T(n - 1) + O(1)`}</code>
            </pre>
          </div>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Time: O(2ⁿ).</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed"><strong className="font-semibold text-white">Example D</strong></p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`static void solve(int n) {

    if (n <= 1) {
        return;
    }

    solve(n / 2);

    solve(n / 2);

    for (int i = 0; i < n; i++) {

        System.out.println(i);
    }
}`}</code>
            </pre>
          </div>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Recurrence:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`T(n) = 2T(n / 2) + O(n)`}</code>
            </pre>
          </div>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Time: O(n log n).</p>
          <hr className="my-8 border-slate-800" />
        </div>
      ),
    },
    {
      id: 23,
      title: "23. Practical Laboratory Exercises (10 Labs)",
      category: "Part 11 · 10 Hands-on Laboratories",
      anchor: "section-23",
      render: () => (
        <div className="space-y-4">
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Students should complete these exercises independently using Java.</p>
          <h2 className="text-xl sm:text-2xl font-black text-white mt-10 mb-4 pb-2 border-b border-slate-800 tracking-tight">
            Lab 1 — Recursive fundamentals
          </h2>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed"><strong className="font-semibold text-white">Objective:</strong> Understand base cases, recursive cases, and return values.</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Implement:</p>
          <div className="flex items-start gap-3 my-2.5 text-sm text-slate-300 leading-relaxed">
            <span className="flex items-center justify-center w-6 h-6 rounded-md bg-slate-950 border border-slate-800 text-slate-200 font-mono text-xs font-bold shrink-0 mt-0.5">1</span>
            <div className="flex-1">Sum of natural numbers.</div>
          </div>
          <div className="flex items-start gap-3 my-2.5 text-sm text-slate-300 leading-relaxed">
            <span className="flex items-center justify-center w-6 h-6 rounded-md bg-slate-950 border border-slate-800 text-slate-200 font-mono text-xs font-bold shrink-0 mt-0.5">2</span>
            <div className="flex-1">Factorial.</div>
          </div>
          <div className="flex items-start gap-3 my-2.5 text-sm text-slate-300 leading-relaxed">
            <span className="flex items-center justify-center w-6 h-6 rounded-md bg-slate-950 border border-slate-800 text-slate-200 font-mono text-xs font-bold shrink-0 mt-0.5">3</span>
            <div className="flex-1">Power of a number.</div>
          </div>
          <div className="flex items-start gap-3 my-2.5 text-sm text-slate-300 leading-relaxed">
            <span className="flex items-center justify-center w-6 h-6 rounded-md bg-slate-950 border border-slate-800 text-slate-200 font-mono text-xs font-bold shrink-0 mt-0.5">4</span>
            <div className="flex-1">Digit sum.</div>
          </div>
          <div className="flex items-start gap-3 my-2.5 text-sm text-slate-300 leading-relaxed">
            <span className="flex items-center justify-center w-6 h-6 rounded-md bg-slate-950 border border-slate-800 text-slate-200 font-mono text-xs font-bold shrink-0 mt-0.5">5</span>
            <div className="flex-1">Digit count.</div>
          </div>
          <div className="flex items-start gap-3 my-2.5 text-sm text-slate-300 leading-relaxed">
            <span className="flex items-center justify-center w-6 h-6 rounded-md bg-slate-950 border border-slate-800 text-slate-200 font-mono text-xs font-bold shrink-0 mt-0.5">6</span>
            <div className="flex-1">Reverse a String.</div>
          </div>
          <div className="flex items-start gap-3 my-2.5 text-sm text-slate-300 leading-relaxed">
            <span className="flex items-center justify-center w-6 h-6 rounded-md bg-slate-950 border border-slate-800 text-slate-200 font-mono text-xs font-bold shrink-0 mt-0.5">7</span>
            <div className="flex-1">Reverse an array.</div>
          </div>
          <div className="flex items-start gap-3 my-2.5 text-sm text-slate-300 leading-relaxed">
            <span className="flex items-center justify-center w-6 h-6 rounded-md bg-slate-950 border border-slate-800 text-slate-200 font-mono text-xs font-bold shrink-0 mt-0.5">8</span>
            <div className="flex-1">Recursive palindrome checking.</div>
          </div>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">For each program, document its base case and recursive case.</p>
          <h2 className="text-xl sm:text-2xl font-black text-white mt-10 mb-4 pb-2 border-b border-slate-800 tracking-tight">
            Lab 2 — Recursion tracing
          </h2>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed"><strong className="font-semibold text-white">Objective:</strong> Understand the call stack.</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Tasks:</p>
          <div className="flex items-start gap-3 my-2.5 text-sm text-slate-300 leading-relaxed">
            <span className="flex items-center justify-center w-6 h-6 rounded-md bg-slate-950 border border-slate-800 text-slate-200 font-mono text-xs font-bold shrink-0 mt-0.5">1</span>
            <div className="flex-1">Trace factorial of 5.</div>
          </div>
          <div className="flex items-start gap-3 my-2.5 text-sm text-slate-300 leading-relaxed">
            <span className="flex items-center justify-center w-6 h-6 rounded-md bg-slate-950 border border-slate-800 text-slate-200 font-mono text-xs font-bold shrink-0 mt-0.5">2</span>
            <div className="flex-1">Trace Fibonacci of 5.</div>
          </div>
          <div className="flex items-start gap-3 my-2.5 text-sm text-slate-300 leading-relaxed">
            <span className="flex items-center justify-center w-6 h-6 rounded-md bg-slate-950 border border-slate-800 text-slate-200 font-mono text-xs font-bold shrink-0 mt-0.5">3</span>
            <div className="flex-1">Predict the output of nested recursive methods.</div>
          </div>
          <div className="flex items-start gap-3 my-2.5 text-sm text-slate-300 leading-relaxed">
            <span className="flex items-center justify-center w-6 h-6 rounded-md bg-slate-950 border border-slate-800 text-slate-200 font-mono text-xs font-bold shrink-0 mt-0.5">4</span>
            <div className="flex-1">Draw stack frames.</div>
          </div>
          <div className="flex items-start gap-3 my-2.5 text-sm text-slate-300 leading-relaxed">
            <span className="flex items-center justify-center w-6 h-6 rounded-md bg-slate-950 border border-slate-800 text-slate-200 font-mono text-xs font-bold shrink-0 mt-0.5">5</span>
            <div className="flex-1">Identify the stack-unwinding phase.</div>
          </div>
          <div className="flex items-start gap-3 my-2.5 text-sm text-slate-300 leading-relaxed">
            <span className="flex items-center justify-center w-6 h-6 rounded-md bg-slate-950 border border-slate-800 text-slate-200 font-mono text-xs font-bold shrink-0 mt-0.5">6</span>
            <div className="flex-1">Identify recursion without a valid base case.</div>
          </div>
          <div className="flex items-start gap-3 my-2.5 text-sm text-slate-300 leading-relaxed">
            <span className="flex items-center justify-center w-6 h-6 rounded-md bg-slate-950 border border-slate-800 text-slate-200 font-mono text-xs font-bold shrink-0 mt-0.5">7</span>
            <div className="flex-1">Compare recursive and iterative execution.</div>
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-white mt-10 mb-4 pb-2 border-b border-slate-800 tracking-tight">
            Lab 3 — Mathematical induction
          </h2>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed"><strong className="font-semibold text-white">Objective:</strong> Develop mathematical proof skills.</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Prove:</p>
          <div className="flex items-start gap-3 my-2.5 text-sm text-slate-300 leading-relaxed">
            <span className="flex items-center justify-center w-6 h-6 rounded-md bg-slate-950 border border-slate-800 text-slate-200 font-mono text-xs font-bold shrink-0 mt-0.5">1</span>
            <div className="flex-1">Sum of the first n natural numbers.</div>
          </div>
          <div className="flex items-start gap-3 my-2.5 text-sm text-slate-300 leading-relaxed">
            <span className="flex items-center justify-center w-6 h-6 rounded-md bg-slate-950 border border-slate-800 text-slate-200 font-mono text-xs font-bold shrink-0 mt-0.5">2</span>
            <div className="flex-1">Sum of the first n odd numbers.</div>
          </div>
          <div className="flex items-start gap-3 my-2.5 text-sm text-slate-300 leading-relaxed">
            <span className="flex items-center justify-center w-6 h-6 rounded-md bg-slate-950 border border-slate-800 text-slate-200 font-mono text-xs font-bold shrink-0 mt-0.5">3</span>
            <div className="flex-1">A factorial recurrence.</div>
          </div>
          <div className="flex items-start gap-3 my-2.5 text-sm text-slate-300 leading-relaxed">
            <span className="flex items-center justify-center w-6 h-6 rounded-md bg-slate-950 border border-slate-800 text-slate-200 font-mono text-xs font-bold shrink-0 mt-0.5">4</span>
            <div className="flex-1">A simple divisibility property.</div>
          </div>
          <div className="flex items-start gap-3 my-2.5 text-sm text-slate-300 leading-relaxed">
            <span className="flex items-center justify-center w-6 h-6 rounded-md bg-slate-950 border border-slate-800 text-slate-200 font-mono text-xs font-bold shrink-0 mt-0.5">5</span>
            <div className="flex-1">Correctness of a recursive summation method.</div>
          </div>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">For each proof, explicitly state:</p>
          <ul className="list-disc list-outside pl-5 space-y-2 text-slate-300 my-3 text-sm leading-relaxed">
            <li>Base case.</li>
            <li>Inductive hypothesis.</li>
            <li>Inductive step.</li>
            <li>Conclusion.</li>
          </ul>
          <h2 className="text-xl sm:text-2xl font-black text-white mt-10 mb-4 pb-2 border-b border-slate-800 tracking-tight">
            Lab 4 — Permutation generator
          </h2>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed"><strong className="font-semibold text-white">Objective:</strong> Practice recursive backtracking.</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Tasks:</p>
          <div className="flex items-start gap-3 my-2.5 text-sm text-slate-300 leading-relaxed">
            <span className="flex items-center justify-center w-6 h-6 rounded-md bg-slate-950 border border-slate-800 text-slate-200 font-mono text-xs font-bold shrink-0 mt-0.5">1</span>
            <div className="flex-1">Generate permutations of ABC.</div>
          </div>
          <div className="flex items-start gap-3 my-2.5 text-sm text-slate-300 leading-relaxed">
            <span className="flex items-center justify-center w-6 h-6 rounded-md bg-slate-950 border border-slate-800 text-slate-200 font-mono text-xs font-bold shrink-0 mt-0.5">2</span>
            <div className="flex-1">Generate permutations of ABCD.</div>
          </div>
          <div className="flex items-start gap-3 my-2.5 text-sm text-slate-300 leading-relaxed">
            <span className="flex items-center justify-center w-6 h-6 rounded-md bg-slate-950 border border-slate-800 text-slate-200 font-mono text-xs font-bold shrink-0 mt-0.5">3</span>
            <div className="flex-1">Avoid duplicate arrangements.</div>
          </div>
          <div className="flex items-start gap-3 my-2.5 text-sm text-slate-300 leading-relaxed">
            <span className="flex items-center justify-center w-6 h-6 rounded-md bg-slate-950 border border-slate-800 text-slate-200 font-mono text-xs font-bold shrink-0 mt-0.5">4</span>
            <div className="flex-1">Calculate the total number of permutations.</div>
          </div>
          <div className="flex items-start gap-3 my-2.5 text-sm text-slate-300 leading-relaxed">
            <span className="flex items-center justify-center w-6 h-6 rounded-md bg-slate-950 border border-slate-800 text-slate-200 font-mono text-xs font-bold shrink-0 mt-0.5">5</span>
            <div className="flex-1">Compare the generated count with the mathematical result.</div>
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-white mt-10 mb-4 pb-2 border-b border-slate-800 tracking-tight">
            Lab 5 — Combination generator
          </h2>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed"><strong className="font-semibold text-white">Objective:</strong> Understand selection without ordering.</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Tasks:</p>
          <div className="flex items-start gap-3 my-2.5 text-sm text-slate-300 leading-relaxed">
            <span className="flex items-center justify-center w-6 h-6 rounded-md bg-slate-950 border border-slate-800 text-slate-200 font-mono text-xs font-bold shrink-0 mt-0.5">1</span>
            <div className="flex-1">Generate all two-element combinations.</div>
          </div>
          <div className="flex items-start gap-3 my-2.5 text-sm text-slate-300 leading-relaxed">
            <span className="flex items-center justify-center w-6 h-6 rounded-md bg-slate-950 border border-slate-800 text-slate-200 font-mono text-xs font-bold shrink-0 mt-0.5">2</span>
            <div className="flex-1">Generate all three-element combinations.</div>
          </div>
          <div className="flex items-start gap-3 my-2.5 text-sm text-slate-300 leading-relaxed">
            <span className="flex items-center justify-center w-6 h-6 rounded-md bg-slate-950 border border-slate-800 text-slate-200 font-mono text-xs font-bold shrink-0 mt-0.5">3</span>
            <div className="flex-1">Generate combinations from an integer array.</div>
          </div>
          <div className="flex items-start gap-3 my-2.5 text-sm text-slate-300 leading-relaxed">
            <span className="flex items-center justify-center w-6 h-6 rounded-md bg-slate-950 border border-slate-800 text-slate-200 font-mono text-xs font-bold shrink-0 mt-0.5">4</span>
            <div className="flex-1">Prevent duplicate selection.</div>
          </div>
          <div className="flex items-start gap-3 my-2.5 text-sm text-slate-300 leading-relaxed">
            <span className="flex items-center justify-center w-6 h-6 rounded-md bg-slate-950 border border-slate-800 text-slate-200 font-mono text-xs font-bold shrink-0 mt-0.5">5</span>
            <div className="flex-1">Calculate and compare the total number of combinations.</div>
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-white mt-10 mb-4 pb-2 border-b border-slate-800 tracking-tight">
            Lab 6 — Subsets and subsequences
          </h2>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed"><strong className="font-semibold text-white">Objective:</strong> Apply the include-exclude recursion pattern.</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Tasks:</p>
          <div className="flex items-start gap-3 my-2.5 text-sm text-slate-300 leading-relaxed">
            <span className="flex items-center justify-center w-6 h-6 rounded-md bg-slate-950 border border-slate-800 text-slate-200 font-mono text-xs font-bold shrink-0 mt-0.5">1</span>
            <div className="flex-1">Generate every subset.</div>
          </div>
          <div className="flex items-start gap-3 my-2.5 text-sm text-slate-300 leading-relaxed">
            <span className="flex items-center justify-center w-6 h-6 rounded-md bg-slate-950 border border-slate-800 text-slate-200 font-mono text-xs font-bold shrink-0 mt-0.5">2</span>
            <div className="flex-1">Generate every subsequence of a String.</div>
          </div>
          <div className="flex items-start gap-3 my-2.5 text-sm text-slate-300 leading-relaxed">
            <span className="flex items-center justify-center w-6 h-6 rounded-md bg-slate-950 border border-slate-800 text-slate-200 font-mono text-xs font-bold shrink-0 mt-0.5">3</span>
            <div className="flex-1">Count subsets.</div>
          </div>
          <div className="flex items-start gap-3 my-2.5 text-sm text-slate-300 leading-relaxed">
            <span className="flex items-center justify-center w-6 h-6 rounded-md bg-slate-950 border border-slate-800 text-slate-200 font-mono text-xs font-bold shrink-0 mt-0.5">4</span>
            <div className="flex-1">Generate subsets of a fixed size.</div>
          </div>
          <div className="flex items-start gap-3 my-2.5 text-sm text-slate-300 leading-relaxed">
            <span className="flex items-center justify-center w-6 h-6 rounded-md bg-slate-950 border border-slate-800 text-slate-200 font-mono text-xs font-bold shrink-0 mt-0.5">5</span>
            <div className="flex-1">Implement the same problem using bit masks.</div>
          </div>
          <div className="flex items-start gap-3 my-2.5 text-sm text-slate-300 leading-relaxed">
            <span className="flex items-center justify-center w-6 h-6 rounded-md bg-slate-950 border border-slate-800 text-slate-200 font-mono text-xs font-bold shrink-0 mt-0.5">6</span>
            <div className="flex-1">Compare recursion and iteration-based approaches.</div>
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-white mt-10 mb-4 pb-2 border-b border-slate-800 tracking-tight">
            Lab 7 — N-Queens
          </h2>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed"><strong className="font-semibold text-white">Objective:</strong> Practice constraint-based search.</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Tasks:</p>
          <div className="flex items-start gap-3 my-2.5 text-sm text-slate-300 leading-relaxed">
            <span className="flex items-center justify-center w-6 h-6 rounded-md bg-slate-950 border border-slate-800 text-slate-200 font-mono text-xs font-bold shrink-0 mt-0.5">1</span>
            <div className="flex-1">Implement a four-queen solver.</div>
          </div>
          <div className="flex items-start gap-3 my-2.5 text-sm text-slate-300 leading-relaxed">
            <span className="flex items-center justify-center w-6 h-6 rounded-md bg-slate-950 border border-slate-800 text-slate-200 font-mono text-xs font-bold shrink-0 mt-0.5">2</span>
            <div className="flex-1">Print all valid solutions.</div>
          </div>
          <div className="flex items-start gap-3 my-2.5 text-sm text-slate-300 leading-relaxed">
            <span className="flex items-center justify-center w-6 h-6 rounded-md bg-slate-950 border border-slate-800 text-slate-200 font-mono text-xs font-bold shrink-0 mt-0.5">3</span>
            <div className="flex-1">Calculate the total solution count.</div>
          </div>
          <div className="flex items-start gap-3 my-2.5 text-sm text-slate-300 leading-relaxed">
            <span className="flex items-center justify-center w-6 h-6 rounded-md bg-slate-950 border border-slate-800 text-slate-200 font-mono text-xs font-bold shrink-0 mt-0.5">4</span>
            <div className="flex-1">Extend the implementation to eight queens.</div>
          </div>
          <div className="flex items-start gap-3 my-2.5 text-sm text-slate-300 leading-relaxed">
            <span className="flex items-center justify-center w-6 h-6 rounded-md bg-slate-950 border border-slate-800 text-slate-200 font-mono text-xs font-bold shrink-0 mt-0.5">5</span>
            <div className="flex-1">Add column and diagonal tracking arrays.</div>
          </div>
          <div className="flex items-start gap-3 my-2.5 text-sm text-slate-300 leading-relaxed">
            <span className="flex items-center justify-center w-6 h-6 rounded-md bg-slate-950 border border-slate-800 text-slate-200 font-mono text-xs font-bold shrink-0 mt-0.5">6</span>
            <div className="flex-1">Compare execution behavior before and after optimization.</div>
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-white mt-10 mb-4 pb-2 border-b border-slate-800 tracking-tight">
            Lab 8 — Sudoku solver
          </h2>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed"><strong className="font-semibold text-white">Objective:</strong> Apply multi-constraint backtracking.</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Tasks:</p>
          <div className="flex items-start gap-3 my-2.5 text-sm text-slate-300 leading-relaxed">
            <span className="flex items-center justify-center w-6 h-6 rounded-md bg-slate-950 border border-slate-800 text-slate-200 font-mono text-xs font-bold shrink-0 mt-0.5">1</span>
            <div className="flex-1">Create a 9 × 9 Sudoku grid.</div>
          </div>
          <div className="flex items-start gap-3 my-2.5 text-sm text-slate-300 leading-relaxed">
            <span className="flex items-center justify-center w-6 h-6 rounded-md bg-slate-950 border border-slate-800 text-slate-200 font-mono text-xs font-bold shrink-0 mt-0.5">2</span>
            <div className="flex-1">Check row validity.</div>
          </div>
          <div className="flex items-start gap-3 my-2.5 text-sm text-slate-300 leading-relaxed">
            <span className="flex items-center justify-center w-6 h-6 rounded-md bg-slate-950 border border-slate-800 text-slate-200 font-mono text-xs font-bold shrink-0 mt-0.5">3</span>
            <div className="flex-1">Check column validity.</div>
          </div>
          <div className="flex items-start gap-3 my-2.5 text-sm text-slate-300 leading-relaxed">
            <span className="flex items-center justify-center w-6 h-6 rounded-md bg-slate-950 border border-slate-800 text-slate-200 font-mono text-xs font-bold shrink-0 mt-0.5">4</span>
            <div className="flex-1">Check 3 × 3 box validity.</div>
          </div>
          <div className="flex items-start gap-3 my-2.5 text-sm text-slate-300 leading-relaxed">
            <span className="flex items-center justify-center w-6 h-6 rounded-md bg-slate-950 border border-slate-800 text-slate-200 font-mono text-xs font-bold shrink-0 mt-0.5">5</span>
            <div className="flex-1">Implement recursive solving.</div>
          </div>
          <div className="flex items-start gap-3 my-2.5 text-sm text-slate-300 leading-relaxed">
            <span className="flex items-center justify-center w-6 h-6 rounded-md bg-slate-950 border border-slate-800 text-slate-200 font-mono text-xs font-bold shrink-0 mt-0.5">6</span>
            <div className="flex-1">Restore failed choices.</div>
          </div>
          <div className="flex items-start gap-3 my-2.5 text-sm text-slate-300 leading-relaxed">
            <span className="flex items-center justify-center w-6 h-6 rounded-md bg-slate-950 border border-slate-800 text-slate-200 font-mono text-xs font-bold shrink-0 mt-0.5">7</span>
            <div className="flex-1">Reject invalid initial boards.</div>
          </div>
          <div className="flex items-start gap-3 my-2.5 text-sm text-slate-300 leading-relaxed">
            <span className="flex items-center justify-center w-6 h-6 rounded-md bg-slate-950 border border-slate-800 text-slate-200 font-mono text-xs font-bold shrink-0 mt-0.5">8</span>
            <div className="flex-1">Improve the solver using minimum-remaining-values selection.</div>
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-white mt-10 mb-4 pb-2 border-b border-slate-800 tracking-tight">
            Lab 9 — Maze pathfinding
          </h2>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed"><strong className="font-semibold text-white">Objective:</strong> Explore recursive search.</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Tasks:</p>
          <div className="flex items-start gap-3 my-2.5 text-sm text-slate-300 leading-relaxed">
            <span className="flex items-center justify-center w-6 h-6 rounded-md bg-slate-950 border border-slate-800 text-slate-200 font-mono text-xs font-bold shrink-0 mt-0.5">1</span>
            <div className="flex-1">Represent a maze using a matrix.</div>
          </div>
          <div className="flex items-start gap-3 my-2.5 text-sm text-slate-300 leading-relaxed">
            <span className="flex items-center justify-center w-6 h-6 rounded-md bg-slate-950 border border-slate-800 text-slate-200 font-mono text-xs font-bold shrink-0 mt-0.5">2</span>
            <div className="flex-1">Find a path using down and right movement.</div>
          </div>
          <div className="flex items-start gap-3 my-2.5 text-sm text-slate-300 leading-relaxed">
            <span className="flex items-center justify-center w-6 h-6 rounded-md bg-slate-950 border border-slate-800 text-slate-200 font-mono text-xs font-bold shrink-0 mt-0.5">3</span>
            <div className="flex-1">Implement four-direction movement.</div>
          </div>
          <div className="flex items-start gap-3 my-2.5 text-sm text-slate-300 leading-relaxed">
            <span className="flex items-center justify-center w-6 h-6 rounded-md bg-slate-950 border border-slate-800 text-slate-200 font-mono text-xs font-bold shrink-0 mt-0.5">4</span>
            <div className="flex-1">Prevent revisiting cells.</div>
          </div>
          <div className="flex items-start gap-3 my-2.5 text-sm text-slate-300 leading-relaxed">
            <span className="flex items-center justify-center w-6 h-6 rounded-md bg-slate-950 border border-slate-800 text-slate-200 font-mono text-xs font-bold shrink-0 mt-0.5">5</span>
            <div className="flex-1">Display the final path.</div>
          </div>
          <div className="flex items-start gap-3 my-2.5 text-sm text-slate-300 leading-relaxed">
            <span className="flex items-center justify-center w-6 h-6 rounded-md bg-slate-950 border border-slate-800 text-slate-200 font-mono text-xs font-bold shrink-0 mt-0.5">6</span>
            <div className="flex-1">Compare DFS with BFS for shortest-path requirements.</div>
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-white mt-10 mb-4 pb-2 border-b border-slate-800 tracking-tight">
            Lab 10 — Recursive complexity analysis
          </h2>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed"><strong className="font-semibold text-white">Objective:</strong> Understand recurrence relations.</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Tasks:</p>
          <div className="flex items-start gap-3 my-2.5 text-sm text-slate-300 leading-relaxed">
            <span className="flex items-center justify-center w-6 h-6 rounded-md bg-slate-950 border border-slate-800 text-slate-200 font-mono text-xs font-bold shrink-0 mt-0.5">1</span>
            <div className="flex-1">Derive recurrence relations for factorial.</div>
          </div>
          <div className="flex items-start gap-3 my-2.5 text-sm text-slate-300 leading-relaxed">
            <span className="flex items-center justify-center w-6 h-6 rounded-md bg-slate-950 border border-slate-800 text-slate-200 font-mono text-xs font-bold shrink-0 mt-0.5">2</span>
            <div className="flex-1">Analyze recursive binary search.</div>
          </div>
          <div className="flex items-start gap-3 my-2.5 text-sm text-slate-300 leading-relaxed">
            <span className="flex items-center justify-center w-6 h-6 rounded-md bg-slate-950 border border-slate-800 text-slate-200 font-mono text-xs font-bold shrink-0 mt-0.5">3</span>
            <div className="flex-1">Analyze Fibonacci recursion.</div>
          </div>
          <div className="flex items-start gap-3 my-2.5 text-sm text-slate-300 leading-relaxed">
            <span className="flex items-center justify-center w-6 h-6 rounded-md bg-slate-950 border border-slate-800 text-slate-200 font-mono text-xs font-bold shrink-0 mt-0.5">4</span>
            <div className="flex-1">Analyze subset generation.</div>
          </div>
          <div className="flex items-start gap-3 my-2.5 text-sm text-slate-300 leading-relaxed">
            <span className="flex items-center justify-center w-6 h-6 rounded-md bg-slate-950 border border-slate-800 text-slate-200 font-mono text-xs font-bold shrink-0 mt-0.5">5</span>
            <div className="flex-1">Analyze permutation generation.</div>
          </div>
          <div className="flex items-start gap-3 my-2.5 text-sm text-slate-300 leading-relaxed">
            <span className="flex items-center justify-center w-6 h-6 rounded-md bg-slate-950 border border-slate-800 text-slate-200 font-mono text-xs font-bold shrink-0 mt-0.5">6</span>
            <div className="flex-1">Draw recursion trees.</div>
          </div>
          <div className="flex items-start gap-3 my-2.5 text-sm text-slate-300 leading-relaxed">
            <span className="flex items-center justify-center w-6 h-6 rounded-md bg-slate-950 border border-slate-800 text-slate-200 font-mono text-xs font-bold shrink-0 mt-0.5">7</span>
            <div className="flex-1">Calculate stack depth.</div>
          </div>
          <div className="flex items-start gap-3 my-2.5 text-sm text-slate-300 leading-relaxed">
            <span className="flex items-center justify-center w-6 h-6 rounded-md bg-slate-950 border border-slate-800 text-slate-200 font-mono text-xs font-bold shrink-0 mt-0.5">8</span>
            <div className="flex-1">Compare time and space complexity.</div>
          </div>
          <hr className="my-8 border-slate-800" />
        </div>
      ),
    },
    {
      id: 24,
      title: "24. Independent Programming Assignments (10 Projects)",
      category: "Part 12 · 10 Assignments",
      anchor: "section-24",
      render: () => (
        <div className="space-y-4">
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">These assignments are designed to develop independent algorithmic thinking.</p>
          <h2 className="text-xl sm:text-2xl font-black text-white mt-10 mb-4 pb-2 border-b border-slate-800 tracking-tight">
            Assignment 1 — Recursive mathematical calculator
          </h2>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Implement a collection of recursive methods:</p>
          <ul className="list-disc list-outside pl-5 space-y-2 text-slate-300 my-3 text-sm leading-relaxed">
            <li>Factorial.</li>
            <li>Sum of natural numbers.</li>
            <li>Power.</li>
            <li>GCD.</li>
            <li>Digit sum.</li>
            <li>Digit reversal.</li>
            <li>Palindrome checking.</li>
            <li>Fibonacci.</li>
          </ul>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Requirements:</p>
          <ul className="list-disc list-outside pl-5 space-y-2 text-slate-300 my-3 text-sm leading-relaxed">
            <li>Validate input.</li>
            <li>Define base cases.</li>
            <li>Analyze complexity.</li>
            <li>Compare recursive and iterative versions.</li>
          </ul>
          <h2 className="text-xl sm:text-2xl font-black text-white mt-10 mb-4 pb-2 border-b border-slate-800 tracking-tight">
            Assignment 2 — All permutations of a String
          </h2>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Create a program that generates all unique permutations of a String.</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Requirements:</p>
          <ul className="list-disc list-outside pl-5 space-y-2 text-slate-300 my-3 text-sm leading-relaxed">
            <li>Accept user input.</li>
            <li>Generate arrangements using backtracking.</li>
            <li>Avoid duplicate results.</li>
            <li>Count the generated permutations.</li>
            <li>Test Strings containing repeated characters.</li>
          </ul>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Example:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Input: AAB

Output:
AAB
ABA
BAA

Count: 3`}</code>
            </pre>
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-white mt-10 mb-4 pb-2 border-b border-slate-800 tracking-tight">
            Assignment 3 — Combination generator
          </h2>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Create an application that accepts:</p>
          <ul className="list-disc list-outside pl-5 space-y-2 text-slate-300 my-3 text-sm leading-relaxed">
            <li>A collection of n values.</li>
            <li>A selection size r.</li>
          </ul>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Generate every possible combination.</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Requirements:</p>
          <ul className="list-disc list-outside pl-5 space-y-2 text-slate-300 my-3 text-sm leading-relaxed">
            <li>No repeated selection.</li>
            <li>Original relative ordering should be preserved.</li>
            <li>Display all combinations.</li>
            <li>Calculate the mathematical combination count.</li>
            <li>Verify that generated and calculated counts agree.</li>
          </ul>
          <h2 className="text-xl sm:text-2xl font-black text-white mt-10 mb-4 pb-2 border-b border-slate-800 tracking-tight">
            Assignment 4 — Subset sum problem
          </h2>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Given a collection of integers and a target sum, determine whether a subset exists that produces the target.</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Example:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Array: [3, 4, 5, 2]

Target: 9

One valid subset: [4, 5]`}</code>
            </pre>
          </div>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Implement using:</p>
          <ul className="list-disc list-outside pl-5 space-y-2 text-slate-300 my-3 text-sm leading-relaxed">
            <li>Include-exclude recursion.</li>
            <li>Backtracking.</li>
            <li>Optional memoization.</li>
          </ul>
          <h2 className="text-xl sm:text-2xl font-black text-white mt-10 mb-4 pb-2 border-b border-slate-800 tracking-tight">
            Assignment 5 — N-Queens application
          </h2>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Develop a solver that supports different board sizes.</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Requirements:</p>
          <ul className="list-disc list-outside pl-5 space-y-2 text-slate-300 my-3 text-sm leading-relaxed">
            <li>Accept N.</li>
            <li>Generate valid placements.</li>
            <li>Count solutions.</li>
            <li>Display at least one solution.</li>
            <li>Optimize safety checking.</li>
            <li>Use clear termination conditions.</li>
          </ul>
          <h2 className="text-xl sm:text-2xl font-black text-white mt-10 mb-4 pb-2 border-b border-slate-800 tracking-tight">
            Assignment 6 — Sudoku solver
          </h2>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Build a program that accepts an incomplete Sudoku board and finds a solution when one exists.</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Requirements:</p>
          <ul className="list-disc list-outside pl-5 space-y-2 text-slate-300 my-3 text-sm leading-relaxed">
            <li>Validate initial conditions.</li>
            <li>Use recursive backtracking.</li>
            <li>Detect invalid boards.</li>
            <li>Restore invalid choices.</li>
            <li>Display the solved board.</li>
            <li>Introduce an optimized cell-selection strategy.</li>
          </ul>
          <h2 className="text-xl sm:text-2xl font-black text-white mt-10 mb-4 pb-2 border-b border-slate-800 tracking-tight">
            Assignment 7 — Maze pathfinder
          </h2>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Create a maze-solving program.</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Requirements:</p>
          <ul className="list-disc list-outside pl-5 space-y-2 text-slate-300 my-3 text-sm leading-relaxed">
            <li>Accept a grid.</li>
            <li>Accept source and destination.</li>
            <li>Find a valid path.</li>
            <li>Display the selected route.</li>
            <li>Prevent infinite cycles.</li>
            <li>Support four-direction movement.</li>
            <li>Extend it to identify the shortest path using BFS.</li>
          </ul>
          <h2 className="text-xl sm:text-2xl font-black text-white mt-10 mb-4 pb-2 border-b border-slate-800 tracking-tight">
            Assignment 8 — Word search puzzle
          </h2>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Create a word-search solver using a two-dimensional character grid.</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Requirements:</p>
          <ul className="list-disc list-outside pl-5 space-y-2 text-slate-300 my-3 text-sm leading-relaxed">
            <li>Accept a grid.</li>
            <li>Accept target word.</li>
            <li>Search horizontally and vertically, and optionally diagonally.</li>
            <li>Avoid reusing the same cell within one candidate path.</li>
            <li>Use backtracking to explore alternatives.</li>
            <li>Display the found path.</li>
          </ul>
          <h2 className="text-xl sm:text-2xl font-black text-white mt-10 mb-4 pb-2 border-b border-slate-800 tracking-tight">
            Assignment 9 — Graph coloring introduction
          </h2>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Given an undirected graph and a limited number of colors, determine whether the vertices can be colored so that adjacent vertices receive different colors.</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Use:</p>
          <ul className="list-disc list-outside pl-5 space-y-2 text-slate-300 my-3 text-sm leading-relaxed">
            <li>Recursive assignment.</li>
            <li>Constraint checking.</li>
            <li>Backtracking.</li>
            <li>Adjacency representation.</li>
          </ul>
          <h2 className="text-xl sm:text-2xl font-black text-white mt-10 mb-4 pb-2 border-b border-slate-800 tracking-tight">
            Assignment 10 — Constraint-based scheduling
          </h2>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Create a simple scheduling system.</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Requirements:</p>
          <ul className="list-disc list-outside pl-5 space-y-2 text-slate-300 my-3 text-sm leading-relaxed">
            <li>Allocate courses to time slots.</li>
            <li>Avoid instructor conflicts.</li>
            <li>Avoid classroom conflicts.</li>
            <li>Avoid assigning multiple classes to the same group simultaneously.</li>
            <li>Find a valid schedule using backtracking.</li>
          </ul>
          <hr className="my-8 border-slate-800" />
        </div>
      ),
    },
    {
      id: 25,
      title: "25. Assessment and Review Questions",
      category: "Part 13 · 20 MCQs, 38 Qs & Output",
      anchor: "section-25",
      render: () => (
        <div className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-black text-white mt-10 mb-4 pb-2 border-b border-slate-800 tracking-tight">
            Part A — Multiple-choice questions
          </h2>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed"><strong className="font-semibold text-white">1. What is recursion?</strong></p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">A. A method that never returns</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">B. A method calling itself</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">C. A loop without a condition</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">D. A variable referencing another variable</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed"><strong className="font-semibold text-white">Correct answer:</strong> B</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed"><strong className="font-semibold text-white">2. What is a base case?</strong></p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">A. The first line of a program</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">B. The condition that stops recursive calls</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">C. The final output statement</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">D. A method parameter</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed"><strong className="font-semibold text-white">Correct answer:</strong> B</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed"><strong className="font-semibold text-white">3. Which structure manages method invocations?</strong></p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">A. Heap</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">B. Call stack</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">C. Queue</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">D. HashMap</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed"><strong className="font-semibold text-white">Correct answer:</strong> B</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed"><strong className="font-semibold text-white">4. What happens when recursion becomes excessively deep?</strong></p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">A. Automatic iteration</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">B. StackOverflowError may occur</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">C. The program always returns zero</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">D. The compiler removes all calls</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed"><strong className="font-semibold text-white">Correct answer:</strong> B</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed"><strong className="font-semibold text-white">5. Which recursion is called tail recursion?</strong></p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">A. A recursive call followed by multiplication</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">B. A recursive call used as the final operation</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">C. Recursion with two base cases</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">D. Recursion without parameters</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed"><strong className="font-semibold text-white">Correct answer:</strong> B</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed"><strong className="font-semibold text-white">6. Does Java guarantee tail-call optimization?</strong></p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">A. Yes</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">B. No</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">C. Only for static methods</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">D. Only in JDK 17</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed"><strong className="font-semibold text-white">Correct answer:</strong> B</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed"><strong className="font-semibold text-white">7. What is mathematical induction used for?</strong></p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">A. File handling</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">B. Proving statements over integer ranges</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">C. Creating arrays</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">D. Sorting objects</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed"><strong className="font-semibold text-white">Correct answer:</strong> B</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed"><strong className="font-semibold text-white">8. What is the first step in mathematical induction?</strong></p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">A. Recursive hypothesis</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">B. Base case</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">C. Complexity calculation</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">D. Optimization</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed"><strong className="font-semibold text-white">Correct answer:</strong> B</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed"><strong className="font-semibold text-white">9. In a permutation, does order matter?</strong></p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">A. Yes</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">B. No</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">C. Only for integers</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">D. Only for Strings</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed"><strong className="font-semibold text-white">Correct answer:</strong> A</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed"><strong className="font-semibold text-white">10. In a combination, does order matter?</strong></p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">A. Yes</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">B. No</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">C. Sometimes for every combination</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">D. Only with repetition</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed"><strong className="font-semibold text-white">Correct answer:</strong> B</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed"><strong className="font-semibold text-white">11. How many subsets does a set containing four distinct elements have?</strong></p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">A. 4</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">B. 8</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">C. 12</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">D. 16</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed"><strong className="font-semibold text-white">Correct answer:</strong> D</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed"><strong className="font-semibold text-white">12. What is a subsequence?</strong></p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">A. Only a contiguous portion of a sequence</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">B. A sequence obtained while preserving the relative order of selected elements</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">C. A reversed string</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">D. A sorted sequence only</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed"><strong className="font-semibold text-white">Correct answer:</strong> B</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed"><strong className="font-semibold text-white">13. Which pattern is commonly used for subset generation?</strong></p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">A. Include-exclude</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">B. Push-pop only</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">C. Binary search only</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">D. Direct hashing</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed"><strong className="font-semibold text-white">Correct answer:</strong> A</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed"><strong className="font-semibold text-white">14. What is backtracking?</strong></p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">A. Sorting an array repeatedly</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">B. Exploring choices and undoing unsuccessful decisions</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">C. Repeating an entire program</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">D. Removing all recursive calls</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed"><strong className="font-semibold text-white">Correct answer:</strong> B</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed"><strong className="font-semibold text-white">15. What is pruning?</strong></p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">A. Adding more recursive calls</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">B. Rejecting branches that cannot produce a valid solution</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">C. Increasing the size of an array</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">D. Reversing a String</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed"><strong className="font-semibold text-white">Correct answer:</strong> B</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed"><strong className="font-semibold text-white">16. What is the main constraint in the N-Queens problem?</strong></p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">A. Every queen must be in the first row</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">B. No two queens may attack one another</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">C. Every queen must occupy the same column</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">D. Queens can only move diagonally</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed"><strong className="font-semibold text-white">Correct answer:</strong> B</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed"><strong className="font-semibold text-white">17. How many queens are placed on an N × N board in the standard N-Queens problem?</strong></p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">A. 2N</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">B. N - 1</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">C. N</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">D. N²</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed"><strong className="font-semibold text-white">Correct answer:</strong> C</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed"><strong className="font-semibold text-white">18. Which three structures must be valid in standard Sudoku?</strong></p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">A. Rows, columns, and 3 × 3 boxes</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">B. Diagonals, rows, and corners</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">C. Rows, diagonals, and boundaries</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">D. Only rows and columns</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed"><strong className="font-semibold text-white">Correct answer:</strong> A</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed"><strong className="font-semibold text-white">19. Which algorithm is generally preferred for finding the shortest path in an unweighted graph?</strong></p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">A. DFS</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">B. BFS</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">C. Factorial recursion</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">D. Binary search</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed"><strong className="font-semibold text-white">Correct answer:</strong> B</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed"><strong className="font-semibold text-white">20. What is the worst-case time complexity of generating all subsets of n distinct elements when accounting for their total output?</strong></p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">A. O(n)</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">B. O(log n)</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">C. O(n²)</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">D. O(n × 2ⁿ)</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed"><strong className="font-semibold text-white">Correct answer:</strong> D</p>
          <h2 className="text-xl sm:text-2xl font-black text-white mt-10 mb-4 pb-2 border-b border-slate-800 tracking-tight">
            Part B — Short-answer questions
          </h2>
          <div className="flex items-start gap-3 my-2.5 text-sm text-slate-300 leading-relaxed">
            <span className="flex items-center justify-center w-6 h-6 rounded-md bg-slate-950 border border-slate-800 text-slate-200 font-mono text-xs font-bold shrink-0 mt-0.5">1</span>
            <div className="flex-1">Define recursion.</div>
          </div>
          <div className="flex items-start gap-3 my-2.5 text-sm text-slate-300 leading-relaxed">
            <span className="flex items-center justify-center w-6 h-6 rounded-md bg-slate-950 border border-slate-800 text-slate-200 font-mono text-xs font-bold shrink-0 mt-0.5">2</span>
            <div className="flex-1">Explain recursive function design.</div>
          </div>
          <div className="flex items-start gap-3 my-2.5 text-sm text-slate-300 leading-relaxed">
            <span className="flex items-center justify-center w-6 h-6 rounded-md bg-slate-950 border border-slate-800 text-slate-200 font-mono text-xs font-bold shrink-0 mt-0.5">3</span>
            <div className="flex-1">What is a base case?</div>
          </div>
          <div className="flex items-start gap-3 my-2.5 text-sm text-slate-300 leading-relaxed">
            <span className="flex items-center justify-center w-6 h-6 rounded-md bg-slate-950 border border-slate-800 text-slate-200 font-mono text-xs font-bold shrink-0 mt-0.5">4</span>
            <div className="flex-1">What is a recursive case?</div>
          </div>
          <div className="flex items-start gap-3 my-2.5 text-sm text-slate-300 leading-relaxed">
            <span className="flex items-center justify-center w-6 h-6 rounded-md bg-slate-950 border border-slate-800 text-slate-200 font-mono text-xs font-bold shrink-0 mt-0.5">5</span>
            <div className="flex-1">Why must every recursive algorithm make progress?</div>
          </div>
          <div className="flex items-start gap-3 my-2.5 text-sm text-slate-300 leading-relaxed">
            <span className="flex items-center justify-center w-6 h-6 rounded-md bg-slate-950 border border-slate-800 text-slate-200 font-mono text-xs font-bold shrink-0 mt-0.5">6</span>
            <div className="flex-1">Explain the call stack.</div>
          </div>
          <div className="flex items-start gap-3 my-2.5 text-sm text-slate-300 leading-relaxed">
            <span className="flex items-center justify-center w-6 h-6 rounded-md bg-slate-950 border border-slate-800 text-slate-200 font-mono text-xs font-bold shrink-0 mt-0.5">7</span>
            <div className="flex-1">What is stack unwinding?</div>
          </div>
          <div className="flex items-start gap-3 my-2.5 text-sm text-slate-300 leading-relaxed">
            <span className="flex items-center justify-center w-6 h-6 rounded-md bg-slate-950 border border-slate-800 text-slate-200 font-mono text-xs font-bold shrink-0 mt-0.5">8</span>
            <div className="flex-1">What is StackOverflowError?</div>
          </div>
          <div className="flex items-start gap-3 my-2.5 text-sm text-slate-300 leading-relaxed">
            <span className="flex items-center justify-center w-6 h-6 rounded-md bg-slate-950 border border-slate-800 text-slate-200 font-mono text-xs font-bold shrink-0 mt-0.5">9</span>
            <div className="flex-1">Define recursion tree.</div>
          </div>
          <div className="flex items-start gap-3 my-2.5 text-sm text-slate-300 leading-relaxed">
            <span className="flex items-center justify-center w-6 h-6 rounded-md bg-slate-950 border border-slate-800 text-slate-200 font-mono text-xs font-bold shrink-0 mt-0.5">10</span>
            <div className="flex-1">Explain repeated subproblems in Fibonacci recursion.</div>
          </div>
          <div className="flex items-start gap-3 my-2.5 text-sm text-slate-300 leading-relaxed">
            <span className="flex items-center justify-center w-6 h-6 rounded-md bg-slate-950 border border-slate-800 text-slate-200 font-mono text-xs font-bold shrink-0 mt-0.5">11</span>
            <div className="flex-1">What is tail recursion?</div>
          </div>
          <div className="flex items-start gap-3 my-2.5 text-sm text-slate-300 leading-relaxed">
            <span className="flex items-center justify-center w-6 h-6 rounded-md bg-slate-950 border border-slate-800 text-slate-200 font-mono text-xs font-bold shrink-0 mt-0.5">12</span>
            <div className="flex-1">What is non-tail recursion?</div>
          </div>
          <div className="flex items-start gap-3 my-2.5 text-sm text-slate-300 leading-relaxed">
            <span className="flex items-center justify-center w-6 h-6 rounded-md bg-slate-950 border border-slate-800 text-slate-200 font-mono text-xs font-bold shrink-0 mt-0.5">13</span>
            <div className="flex-1">Does Java guarantee tail-call elimination?</div>
          </div>
          <div className="flex items-start gap-3 my-2.5 text-sm text-slate-300 leading-relaxed">
            <span className="flex items-center justify-center w-6 h-6 rounded-md bg-slate-950 border border-slate-800 text-slate-200 font-mono text-xs font-bold shrink-0 mt-0.5">14</span>
            <div className="flex-1">Differentiate between recursion and iteration.</div>
          </div>
          <div className="flex items-start gap-3 my-2.5 text-sm text-slate-300 leading-relaxed">
            <span className="flex items-center justify-center w-6 h-6 rounded-md bg-slate-950 border border-slate-800 text-slate-200 font-mono text-xs font-bold shrink-0 mt-0.5">15</span>
            <div className="flex-1">Define mathematical induction.</div>
          </div>
          <div className="flex items-start gap-3 my-2.5 text-sm text-slate-300 leading-relaxed">
            <span className="flex items-center justify-center w-6 h-6 rounded-md bg-slate-950 border border-slate-800 text-slate-200 font-mono text-xs font-bold shrink-0 mt-0.5">16</span>
            <div className="flex-1">Explain the inductive hypothesis.</div>
          </div>
          <div className="flex items-start gap-3 my-2.5 text-sm text-slate-300 leading-relaxed">
            <span className="flex items-center justify-center w-6 h-6 rounded-md bg-slate-950 border border-slate-800 text-slate-200 font-mono text-xs font-bold shrink-0 mt-0.5">17</span>
            <div className="flex-1">What is strong induction?</div>
          </div>
          <div className="flex items-start gap-3 my-2.5 text-sm text-slate-300 leading-relaxed">
            <span className="flex items-center justify-center w-6 h-6 rounded-md bg-slate-950 border border-slate-800 text-slate-200 font-mono text-xs font-bold shrink-0 mt-0.5">18</span>
            <div className="flex-1">Define permutation.</div>
          </div>
          <div className="flex items-start gap-3 my-2.5 text-sm text-slate-300 leading-relaxed">
            <span className="flex items-center justify-center w-6 h-6 rounded-md bg-slate-950 border border-slate-800 text-slate-200 font-mono text-xs font-bold shrink-0 mt-0.5">19</span>
            <div className="flex-1">Define combination.</div>
          </div>
          <div className="flex items-start gap-3 my-2.5 text-sm text-slate-300 leading-relaxed">
            <span className="flex items-center justify-center w-6 h-6 rounded-md bg-slate-950 border border-slate-800 text-slate-200 font-mono text-xs font-bold shrink-0 mt-0.5">20</span>
            <div className="flex-1">Explain the difference between ordered and unordered selections.</div>
          </div>
          <div className="flex items-start gap-3 my-2.5 text-sm text-slate-300 leading-relaxed">
            <span className="flex items-center justify-center w-6 h-6 rounded-md bg-slate-950 border border-slate-800 text-slate-200 font-mono text-xs font-bold shrink-0 mt-0.5">21</span>
            <div className="flex-1">What is a subsequence?</div>
          </div>
          <div className="flex items-start gap-3 my-2.5 text-sm text-slate-300 leading-relaxed">
            <span className="flex items-center justify-center w-6 h-6 rounded-md bg-slate-950 border border-slate-800 text-slate-200 font-mono text-xs font-bold shrink-0 mt-0.5">22</span>
            <div className="flex-1">Differentiate between a subsequence and substring.</div>
          </div>
          <div className="flex items-start gap-3 my-2.5 text-sm text-slate-300 leading-relaxed">
            <span className="flex items-center justify-center w-6 h-6 rounded-md bg-slate-950 border border-slate-800 text-slate-200 font-mono text-xs font-bold shrink-0 mt-0.5">23</span>
            <div className="flex-1">Define a subset.</div>
          </div>
          <div className="flex items-start gap-3 my-2.5 text-sm text-slate-300 leading-relaxed">
            <span className="flex items-center justify-center w-6 h-6 rounded-md bg-slate-950 border border-slate-800 text-slate-200 font-mono text-xs font-bold shrink-0 mt-0.5">24</span>
            <div className="flex-1">Explain the include-exclude pattern.</div>
          </div>
          <div className="flex items-start gap-3 my-2.5 text-sm text-slate-300 leading-relaxed">
            <span className="flex items-center justify-center w-6 h-6 rounded-md bg-slate-950 border border-slate-800 text-slate-200 font-mono text-xs font-bold shrink-0 mt-0.5">25</span>
            <div className="flex-1">What is backtracking?</div>
          </div>
          <div className="flex items-start gap-3 my-2.5 text-sm text-slate-300 leading-relaxed">
            <span className="flex items-center justify-center w-6 h-6 rounded-md bg-slate-950 border border-slate-800 text-slate-200 font-mono text-xs font-bold shrink-0 mt-0.5">26</span>
            <div className="flex-1">Explain choose-explore-unchoose.</div>
          </div>
          <div className="flex items-start gap-3 my-2.5 text-sm text-slate-300 leading-relaxed">
            <span className="flex items-center justify-center w-6 h-6 rounded-md bg-slate-950 border border-slate-800 text-slate-200 font-mono text-xs font-bold shrink-0 mt-0.5">27</span>
            <div className="flex-1">What is a state-space tree?</div>
          </div>
          <div className="flex items-start gap-3 my-2.5 text-sm text-slate-300 leading-relaxed">
            <span className="flex items-center justify-center w-6 h-6 rounded-md bg-slate-950 border border-slate-800 text-slate-200 font-mono text-xs font-bold shrink-0 mt-0.5">28</span>
            <div className="flex-1">Define constraint-based search.</div>
          </div>
          <div className="flex items-start gap-3 my-2.5 text-sm text-slate-300 leading-relaxed">
            <span className="flex items-center justify-center w-6 h-6 rounded-md bg-slate-950 border border-slate-800 text-slate-200 font-mono text-xs font-bold shrink-0 mt-0.5">29</span>
            <div className="flex-1">What is pruning?</div>
          </div>
          <div className="flex items-start gap-3 my-2.5 text-sm text-slate-300 leading-relaxed">
            <span className="flex items-center justify-center w-6 h-6 rounded-md bg-slate-950 border border-slate-800 text-slate-200 font-mono text-xs font-bold shrink-0 mt-0.5">30</span>
            <div className="flex-1">Explain the N-Queens problem.</div>
          </div>
          <div className="flex items-start gap-3 my-2.5 text-sm text-slate-300 leading-relaxed">
            <span className="flex items-center justify-center w-6 h-6 rounded-md bg-slate-950 border border-slate-800 text-slate-200 font-mono text-xs font-bold shrink-0 mt-0.5">31</span>
            <div className="flex-1">What is the Sudoku backtracking approach?</div>
          </div>
          <div className="flex items-start gap-3 my-2.5 text-sm text-slate-300 leading-relaxed">
            <span className="flex items-center justify-center w-6 h-6 rounded-md bg-slate-950 border border-slate-800 text-slate-200 font-mono text-xs font-bold shrink-0 mt-0.5">32</span>
            <div className="flex-1">Describe the Rat in a Maze problem.</div>
          </div>
          <div className="flex items-start gap-3 my-2.5 text-sm text-slate-300 leading-relaxed">
            <span className="flex items-center justify-center w-6 h-6 rounded-md bg-slate-950 border border-slate-800 text-slate-200 font-mono text-xs font-bold shrink-0 mt-0.5">33</span>
            <div className="flex-1">Differentiate between DFS and BFS.</div>
          </div>
          <div className="flex items-start gap-3 my-2.5 text-sm text-slate-300 leading-relaxed">
            <span className="flex items-center justify-center w-6 h-6 rounded-md bg-slate-950 border border-slate-800 text-slate-200 font-mono text-xs font-bold shrink-0 mt-0.5">34</span>
            <div className="flex-1">Explain recurrence relations.</div>
          </div>
          <div className="flex items-start gap-3 my-2.5 text-sm text-slate-300 leading-relaxed">
            <span className="flex items-center justify-center w-6 h-6 rounded-md bg-slate-950 border border-slate-800 text-slate-200 font-mono text-xs font-bold shrink-0 mt-0.5">35</span>
            <div className="flex-1">How is Fibonacci recursion analyzed?</div>
          </div>
          <div className="flex items-start gap-3 my-2.5 text-sm text-slate-300 leading-relaxed">
            <span className="flex items-center justify-center w-6 h-6 rounded-md bg-slate-950 border border-slate-800 text-slate-200 font-mono text-xs font-bold shrink-0 mt-0.5">36</span>
            <div className="flex-1">What is memoization?</div>
          </div>
          <div className="flex items-start gap-3 my-2.5 text-sm text-slate-300 leading-relaxed">
            <span className="flex items-center justify-center w-6 h-6 rounded-md bg-slate-950 border border-slate-800 text-slate-200 font-mono text-xs font-bold shrink-0 mt-0.5">37</span>
            <div className="flex-1">Explain the difference between backtracking and divide-and-conquer.</div>
          </div>
          <div className="flex items-start gap-3 my-2.5 text-sm text-slate-300 leading-relaxed">
            <span className="flex items-center justify-center w-6 h-6 rounded-md bg-slate-950 border border-slate-800 text-slate-200 font-mono text-xs font-bold shrink-0 mt-0.5">38</span>
            <div className="flex-1">What is the purpose of recursive complexity analysis?</div>
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-white mt-10 mb-4 pb-2 border-b border-slate-800 tracking-tight">
            Part C — Predict the output
          </h2>
          <h3 className="text-lg font-bold text-white mt-8 mb-3 pb-1 border-b border-slate-800/60 flex items-center gap-2">
            <span className="w-1.5 h-4 rounded-full bg-orange-600 inline-block"></span>
            Question 1
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public class OutputOne {

    static void display(int n) {

        if (n == 0) {
            return;
        }

        System.out.print(n + " ");

        display(n - 1);
    }

    public static void main(String[] args) {

        display(4);
    }
}`}</code>
            </pre>
          </div>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Answer:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`4 3 2 1`}</code>
            </pre>
          </div>
          <h3 className="text-lg font-bold text-white mt-8 mb-3 pb-1 border-b border-slate-800/60 flex items-center gap-2">
            <span className="w-1.5 h-4 rounded-full bg-orange-600 inline-block"></span>
            Question 2
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public class OutputTwo {

    static void display(int n) {

        if (n == 0) {
            return;
        }

        display(n - 1);

        System.out.print(n + " ");
    }

    public static void main(String[] args) {

        display(4);
    }
}`}</code>
            </pre>
          </div>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Answer:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`1 2 3 4`}</code>
            </pre>
          </div>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Explanation: Printing happens during stack unwinding.</p>
          <h3 className="text-lg font-bold text-white mt-8 mb-3 pb-1 border-b border-slate-800/60 flex items-center gap-2">
            <span className="w-1.5 h-4 rounded-full bg-orange-600 inline-block"></span>
            Question 3
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public class OutputThree {

    static int sum(int n) {

        if (n == 0) {
            return 0;
        }

        return n + sum(n - 1);
    }

    public static void main(String[] args) {

        System.out.println(sum(4));
    }
}`}</code>
            </pre>
          </div>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Answer:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`10`}</code>
            </pre>
          </div>
          <h3 className="text-lg font-bold text-white mt-8 mb-3 pb-1 border-b border-slate-800/60 flex items-center gap-2">
            <span className="w-1.5 h-4 rounded-full bg-orange-600 inline-block"></span>
            Question 4
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public class OutputFour {

    static int fibonacci(int n) {

        if (n <= 1) {
            return n;
        }

        return fibonacci(n - 1) +
               fibonacci(n - 2);
    }

    public static void main(String[] args) {

        System.out.println(fibonacci(6));
    }
}`}</code>
            </pre>
          </div>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Answer:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`8`}</code>
            </pre>
          </div>
          <h3 className="text-lg font-bold text-white mt-8 mb-3 pb-1 border-b border-slate-800/60 flex items-center gap-2">
            <span className="w-1.5 h-4 rounded-full bg-orange-600 inline-block"></span>
            Question 5
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public class OutputFive {

    static void print(int n) {

        if (n == 0) {
            return;
        }

        System.out.print(n + " ");

        print(n / 2);
    }

    public static void main(String[] args) {

        print(16);
    }
}`}</code>
            </pre>
          </div>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Answer:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`16 8 4 2 1`}</code>
            </pre>
          </div>
          <h3 className="text-lg font-bold text-white mt-8 mb-3 pb-1 border-b border-slate-800/60 flex items-center gap-2">
            <span className="w-1.5 h-4 rounded-full bg-orange-600 inline-block"></span>
            Question 6
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public class OutputSix {

    static int power(int a, int n) {

        if (n == 0) {
            return 1;
        }

        return a * power(a, n - 1);
    }

    public static void main(String[] args) {

        System.out.println(power(3, 3));
    }
}`}</code>
            </pre>
          </div>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Answer:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`27`}</code>
            </pre>
          </div>
          <h3 className="text-lg font-bold text-white mt-8 mb-3 pb-1 border-b border-slate-800/60 flex items-center gap-2">
            <span className="w-1.5 h-4 rounded-full bg-orange-600 inline-block"></span>
            Question 7
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public class OutputSeven {

    static void generate(
            int n,
            String current
    ) {

        if (n == 0) {

            System.out.println(current);

            return;
        }

        generate(n - 1, current + "A");

        generate(n - 1, current + "B");
    }

    public static void main(String[] args) {

        generate(2, "");
    }
}`}</code>
            </pre>
          </div>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Answer:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`AA
AB
BA
BB`}</code>
            </pre>
          </div>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">This demonstrates binary-choice recursion.</p>
          <h3 className="text-lg font-bold text-white mt-8 mb-3 pb-1 border-b border-slate-800/60 flex items-center gap-2">
            <span className="w-1.5 h-4 rounded-full bg-orange-600 inline-block"></span>
            Question 8
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public class OutputEight {

    static int count = 0;

    static void solve(int n) {

        if (n == 0) {

            count++;

            return;
        }

        solve(n - 1);

        solve(n - 1);
    }

    public static void main(String[] args) {

        solve(3);

        System.out.println(count);
    }
}`}</code>
            </pre>
          </div>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Answer:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`8`}</code>
            </pre>
          </div>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">There are two branches at each of three levels.</p>
          <hr className="my-8 border-slate-800" />
        </div>
      ),
    },
    {
      id: 26,
      title: "26. Find the Error and Correct the Logic",
      category: "Part 14 · Code Diagnostic Clinic",
      anchor: "section-26",
      render: () => (
        <div className="space-y-4">
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed"><strong className="font-semibold text-white">Question 1 — Missing base case</strong></p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`static int factorial(int n) {

    return n * factorial(n - 1);
}`}</code>
            </pre>
          </div>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Task: Identify why this method cannot terminate normally and add appropriate base-case and input validation logic.</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed"><strong className="font-semibold text-white">Question 2 — No recursive progress</strong></p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`static void display(int n) {

    if (n == 0) {
        return;
    }

    display(n);
}`}</code>
            </pre>
          </div>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Task: Explain the termination problem and correct the argument passed to the recursive call.</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed"><strong className="font-semibold text-white">Question 3 — Incorrect backtracking</strong></p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`current.add(number);

solve(index + 1);

solve(index + 1);`}</code>
            </pre>
          </div>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Task: Explain why the second branch does not represent an exclusion decision and why restoring state is important.</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed"><strong className="font-semibold text-white">Question 4 — Incorrect N-Queens diagonal check</strong></p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`if (previousColumn == column ||
    previousRow - previousColumn == row - column) {
    return false;
}`}</code>
            </pre>
          </div>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Task: Explain why the first diagonal condition does not check both diagonal directions correctly. Implement the absolute row-distance and column-distance comparison.</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed"><strong className="font-semibold text-white">Question 5 — Missing state restoration</strong></p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`visited[row][column] = true;

search(nextRow, nextColumn);

return false;`}</code>
            </pre>
          </div>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Task: Explain when the visited state should be restored in a backtracking path search.</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed"><strong className="font-semibold text-white">Question 6 — Incorrect combination loop</strong></p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`for (int i = start; i < numbers.length; i++) {

    selected.add(numbers[i]);

    solve(i, selected);
}`}</code>
            </pre>
          </div>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Task: Explain why this may repeat values and why the selected list must be restored after each recursive call.</p>
          <hr className="my-8 border-slate-800" />
        </div>
      ),
    },
    {
      id: 27,
      title: "27. Mini Project — Recursive & Backtracking Problem Solver",
      category: "Part 15 · Capstone Architecture",
      anchor: "section-27",
      render: () => (
        <div className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-black text-white mt-10 mb-4 pb-2 border-b border-slate-800 tracking-tight">
            Project Overview
          </h2>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Build an interactive Java application that demonstrates different recursive algorithms and constraint-solving techniques.</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">The application should provide multiple modules for mathematical recursion, combinatorics, subsets, maze solving, and N-Queens.</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">The purpose is to create a practical environment where users can select a problem, provide input, execute the solver, and view its result.</p>
          <h2 className="text-xl sm:text-2xl font-black text-white mt-10 mb-4 pb-2 border-b border-slate-800 tracking-tight">
            Functional Requirements
          </h2>
          <h3 className="text-lg font-bold text-white mt-8 mb-3 pb-1 border-b border-slate-800/60 flex items-center gap-2">
            <span className="w-1.5 h-4 rounded-full bg-orange-600 inline-block"></span>
            Component 1 — Recursive Mathematics
          </h3>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Implement:</p>
          <ul className="list-disc list-outside pl-5 space-y-2 text-slate-300 my-3 text-sm leading-relaxed">
            <li>Factorial.</li>
            <li>Fibonacci.</li>
            <li>GCD.</li>
            <li>Power.</li>
            <li>Digit sum.</li>
            <li>Recursive binary search.</li>
          </ul>
          <h3 className="text-lg font-bold text-white mt-8 mb-3 pb-1 border-b border-slate-800/60 flex items-center gap-2">
            <span className="w-1.5 h-4 rounded-full bg-orange-600 inline-block"></span>
            Component 2 — Combinatorics
          </h3>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Implement:</p>
          <ul className="list-disc list-outside pl-5 space-y-2 text-slate-300 my-3 text-sm leading-relaxed">
            <li>Permutations.</li>
            <li>Combinations.</li>
            <li>Unique permutations.</li>
            <li>All subsets.</li>
            <li>Subsequences.</li>
          </ul>
          <h3 className="text-lg font-bold text-white mt-8 mb-3 pb-1 border-b border-slate-800/60 flex items-center gap-2">
            <span className="w-1.5 h-4 rounded-full bg-orange-600 inline-block"></span>
            Component 3 — Constraint Solving
          </h3>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Implement:</p>
          <ul className="list-disc list-outside pl-5 space-y-2 text-slate-300 my-3 text-sm leading-relaxed">
            <li>N-Queens.</li>
            <li>Sudoku.</li>
            <li>Rat in a Maze.</li>
            <li>Maze pathfinding.</li>
          </ul>
          <h3 className="text-lg font-bold text-white mt-8 mb-3 pb-1 border-b border-slate-800/60 flex items-center gap-2">
            <span className="w-1.5 h-4 rounded-full bg-orange-600 inline-block"></span>
            Component 4 — Complexity Analysis
          </h3>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">For each algorithm, display:</p>
          <ul className="list-disc list-outside pl-5 space-y-2 text-slate-300 my-3 text-sm leading-relaxed">
            <li>General time complexity.</li>
            <li>Auxiliary space complexity.</li>
            <li>Number of generated solutions where applicable.</li>
            <li>Whether pruning is used.</li>
            <li>Relevant assumptions.</li>
          </ul>
          <h2 className="text-xl sm:text-2xl font-black text-white mt-10 mb-4 pb-2 border-b border-slate-800 tracking-tight">
            Suggested architecture
          </h2>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`RecursiveProblemSolver
|
+-- Main
|   +-- displayMenu()
|   +-- processChoice()
|
+-- mathematics
|   +-- FactorialSolver
|   +-- FibonacciSolver
|   +-- GCDSolver
|   +-- PowerSolver
|
+-- combinatorics
|   +-- PermutationGenerator
|   +-- CombinationGenerator
|   +-- SubsetGenerator
|   +-- SubsequenceGenerator
|
+-- backtracking
|   +-- NQueensSolver
|   +-- SudokuSolver
|   +-- MazeSolver
|
+-- analysis
    +-- ComplexityReport`}</code>
            </pre>
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-white mt-10 mb-4 pb-2 border-b border-slate-800 tracking-tight">
            Example menu
          </h2>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`==================================
     RECURSIVE PROBLEM SOLVER
==================================

1. Factorial
2. Fibonacci
3. GCD
4. Power Calculation
5. Generate Permutations
6. Generate Combinations
7. Generate Subsets
8. N-Queens
9. Sudoku Solver
10. Maze Pathfinding
11. Exit

Enter your choice:`}</code>
            </pre>
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-white mt-10 mb-4 pb-2 border-b border-slate-800 tracking-tight">
            Example implementation — Mathematics component
          </h2>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`package mathematics;

public class RecursiveMath {

    public static long factorial(int n) {

        if (n < 0) {

            throw new IllegalArgumentException(
                    "Negative factorial"
            );
        }

        if (n <= 1) {

            return 1;
        }

        return n * factorial(n - 1);
    }

    public static long fibonacci(int n) {

        if (n < 0) {

            throw new IllegalArgumentException(
                    "Negative position"
            );
        }

        if (n <= 1) {

            return n;
        }

        return fibonacci(n - 1) +
               fibonacci(n - 2);
    }

    public static long gcd(long a, long b) {

        if (b == 0) {

            return Math.abs(a);
        }

        return gcd(b, a % b);
    }

    public static long power(
            long base,
            int exponent
    ) {

        if (exponent < 0) {

            throw new IllegalArgumentException(
                    "Negative exponent"
            );
        }

        if (exponent == 0) {

            return 1;
        }

        long half = power(base, exponent / 2);

        long result = half * half;

        if (exponent % 2 != 0) {

            result *= base;
        }

        return result;
    }
}`}</code>
            </pre>
          </div>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">This component contains several fundamental recursive algorithms.</p>
          <h2 className="text-xl sm:text-2xl font-black text-white mt-10 mb-4 pb-2 border-b border-slate-800 tracking-tight">
            Example implementation — Complexity report
          </h2>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`package analysis;

public class ComplexityReport {

    public static void factorial() {

        System.out.println("Algorithm: Factorial");

        System.out.println("Time: O(n)");

        System.out.println("Space: O(n)");

        System.out.println("Technique: Linear recursion");
    }

    public static void fibonacci() {

        System.out.println("Algorithm: Naive Fibonacci");

        System.out.println("Time: O(2^n) upper bound");

        System.out.println("Space: O(n)");

        System.out.println("Technique: Binary recursion");
    }

    public static void binarySearch() {

        System.out.println("Algorithm: Recursive Binary Search");

        System.out.println("Time: O(log n)");

        System.out.println("Space: O(log n)");

        System.out.println("Technique: Divide and conquer");
    }

    public static void subsets() {

        System.out.println("Algorithm: Subset Generation");

        System.out.println("Output-sensitive time: O(n * 2^n)");

        System.out.println("Auxiliary space: O(n)");

        System.out.println("Technique: Include-exclude backtracking");
    }
}`}</code>
            </pre>
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-white mt-10 mb-4 pb-2 border-b border-slate-800 tracking-tight">
            Project testing requirements
          </h2>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Test the application using:</p>
          <ul className="list-disc list-outside pl-5 space-y-2 text-slate-300 my-3 text-sm leading-relaxed">
            <li>Normal inputs.</li>
            <li>Empty input.</li>
            <li>Minimum valid input.</li>
            <li>Invalid dimensions.</li>
            <li>No-solution cases.</li>
            <li>Multiple-solution cases.</li>
            <li>Duplicate elements.</li>
            <li>Large recursive inputs.</li>
            <li>Boundary conditions.</li>
          </ul>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">The project should also separate algorithm implementation from menu interaction.</p>
          <h2 className="text-xl sm:text-2xl font-black text-white mt-10 mb-4 pb-2 border-b border-slate-800 tracking-tight">
            Project extension tasks
          </h2>
          <div className="flex items-start gap-3 my-2.5 text-sm text-slate-300 leading-relaxed">
            <span className="flex items-center justify-center w-6 h-6 rounded-md bg-slate-950 border border-slate-800 text-slate-200 font-mono text-xs font-bold shrink-0 mt-0.5">1</span>
            <div className="flex-1">Add an option to count solutions without printing every solution.</div>
          </div>
          <div className="flex items-start gap-3 my-2.5 text-sm text-slate-300 leading-relaxed">
            <span className="flex items-center justify-center w-6 h-6 rounded-md bg-slate-950 border border-slate-800 text-slate-200 font-mono text-xs font-bold shrink-0 mt-0.5">2</span>
            <div className="flex-1">Add a timer for performance experiments.</div>
          </div>
          <div className="flex items-start gap-3 my-2.5 text-sm text-slate-300 leading-relaxed">
            <span className="flex items-center justify-center w-6 h-6 rounded-md bg-slate-950 border border-slate-800 text-slate-200 font-mono text-xs font-bold shrink-0 mt-0.5">3</span>
            <div className="flex-1">Add memoized Fibonacci.</div>
          </div>
          <div className="flex items-start gap-3 my-2.5 text-sm text-slate-300 leading-relaxed">
            <span className="flex items-center justify-center w-6 h-6 rounded-md bg-slate-950 border border-slate-800 text-slate-200 font-mono text-xs font-bold shrink-0 mt-0.5">4</span>
            <div className="flex-1">Add optimized N-Queens using bit masks.</div>
          </div>
          <div className="flex items-start gap-3 my-2.5 text-sm text-slate-300 leading-relaxed">
            <span className="flex items-center justify-center w-6 h-6 rounded-md bg-slate-950 border border-slate-800 text-slate-200 font-mono text-xs font-bold shrink-0 mt-0.5">5</span>
            <div className="flex-1">Add Sudoku minimum-remaining-values selection.</div>
          </div>
          <div className="flex items-start gap-3 my-2.5 text-sm text-slate-300 leading-relaxed">
            <span className="flex items-center justify-center w-6 h-6 rounded-md bg-slate-950 border border-slate-800 text-slate-200 font-mono text-xs font-bold shrink-0 mt-0.5">6</span>
            <div className="flex-1">Add BFS for maze shortest paths.</div>
          </div>
          <div className="flex items-start gap-3 my-2.5 text-sm text-slate-300 leading-relaxed">
            <span className="flex items-center justify-center w-6 h-6 rounded-md bg-slate-950 border border-slate-800 text-slate-200 font-mono text-xs font-bold shrink-0 mt-0.5">7</span>
            <div className="flex-1">Add a word-search solver.</div>
          </div>
          <div className="flex items-start gap-3 my-2.5 text-sm text-slate-300 leading-relaxed">
            <span className="flex items-center justify-center w-6 h-6 rounded-md bg-slate-950 border border-slate-800 text-slate-200 font-mono text-xs font-bold shrink-0 mt-0.5">8</span>
            <div className="flex-1">Add graph coloring.</div>
          </div>
          <div className="flex items-start gap-3 my-2.5 text-sm text-slate-300 leading-relaxed">
            <span className="flex items-center justify-center w-6 h-6 rounded-md bg-slate-950 border border-slate-800 text-slate-200 font-mono text-xs font-bold shrink-0 mt-0.5">9</span>
            <div className="flex-1">Add subset-sum optimization.</div>
          </div>
          <div className="flex items-start gap-3 my-2.5 text-sm text-slate-300 leading-relaxed">
            <span className="flex items-center justify-center w-6 h-6 rounded-md bg-slate-950 border border-slate-800 text-slate-200 font-mono text-xs font-bold shrink-0 mt-0.5">10</span>
            <div className="flex-1">Add a comparison report for recursive and iterative algorithms.</div>
          </div>
          <hr className="my-8 border-slate-800" />
        </div>
      ),
    },
    {
      id: 28,
      title: "28. Common Mistakes in Recursion & Backtracking",
      category: "Part 16 · Antipatterns & Diagnostic Matrix",
      anchor: "section-28",
      render: () => (
        <div className="space-y-4">
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
                  <td className="px-4 py-2.5 text-slate-300">Missing base case</td>
                  <td className="px-4 py-2.5 text-slate-300">Incomplete recursive design</td>
                  <td className="px-4 py-2.5 text-slate-300">Define a terminating condition</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">Wrong recursive argument</td>
                  <td className="px-4 py-2.5 text-slate-300">Problem does not become smaller</td>
                  <td className="px-4 py-2.5 text-slate-300">Ensure progress toward termination</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">Excessively deep recursion</td>
                  <td className="px-4 py-2.5 text-slate-300">Ignoring stack limits</td>
                  <td className="px-4 py-2.5 text-slate-300">Consider iterative implementations</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">Incorrect return statement</td>
                  <td className="px-4 py-2.5 text-slate-300">Confusing the recursive result</td>
                  <td className="px-4 py-2.5 text-slate-300">Trace the return flow</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">Missing backtracking</td>
                  <td className="px-4 py-2.5 text-slate-300">Not restoring modified state</td>
                  <td className="px-4 py-2.5 text-slate-300">Undo each decision after exploration</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">Shared state corruption</td>
                  <td className="px-4 py-2.5 text-slate-300">Multiple branches modify the same structure</td>
                  <td className="px-4 py-2.5 text-slate-300">Carefully restore changes</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">Missing visited tracking</td>
                  <td className="px-4 py-2.5 text-slate-300">Repeatedly exploring the same positions</td>
                  <td className="px-4 py-2.5 text-slate-300">Use visited-state management when cycles are possible</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">Incorrect pruning</td>
                  <td className="px-4 py-2.5 text-slate-300">Rejecting valid states or exploring invalid ones</td>
                  <td className="px-4 py-2.5 text-slate-300">Define constraints precisely</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">Duplicate permutations</td>
                  <td className="px-4 py-2.5 text-slate-300">Identical elements treated as distinct branches</td>
                  <td className="px-4 py-2.5 text-slate-300">Sort and skip duplicate choices</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">Wrong combination indexing</td>
                  <td className="px-4 py-2.5 text-slate-300">Reusing previous positions</td>
                  <td className="px-4 py-2.5 text-slate-300">Advance the starting index</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">Incorrect recursion complexity</td>
                  <td className="px-4 py-2.5 text-slate-300">Counting only one branch</td>
                  <td className="px-4 py-2.5 text-slate-300">Count all recursive calls</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">Forgetting output cost</td>
                  <td className="px-4 py-2.5 text-slate-300">Ignoring generated solutions</td>
                  <td className="px-4 py-2.5 text-slate-300">Include output-sensitive complexity</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">Assuming tail recursion is optimized</td>
                  <td className="px-4 py-2.5 text-slate-300">Misunderstanding Java execution</td>
                  <td className="px-4 py-2.5 text-slate-300">Account for recursive stack frames</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">Incorrect Sudoku validation</td>
                  <td className="px-4 py-2.5 text-slate-300">Checking incomplete constraints</td>
                  <td className="px-4 py-2.5 text-slate-300">Validate row, column, and box</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">Incorrect maze coordinates</td>
                  <td className="px-4 py-2.5 text-slate-300">Confusing row and column movement</td>
                  <td className="px-4 py-2.5 text-slate-300">Track row and column separately</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">Using DFS for guaranteed shortest path</td>
                  <td className="px-4 py-2.5 text-slate-300">Choosing the wrong search algorithm</td>
                  <td className="px-4 py-2.5 text-slate-300">Use BFS for unweighted shortest paths</td>
                </tr>
              </tbody>
            </table>
          </div>
          <hr className="my-8 border-slate-800" />
        </div>
      ),
    },
    {
      id: 29,
      title: "29. Advanced Problem-Solving Challenges (30 Problems)",
      category: "Part 17 · Beginner, Intermediate & Advanced",
      anchor: "section-29",
      render: () => (
        <div className="space-y-4">
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">After completing the main topics, students should attempt these problems.</p>
          <h2 className="text-xl sm:text-2xl font-black text-white mt-10 mb-4 pb-2 border-b border-slate-800 tracking-tight">
            Beginner
          </h2>
          <div className="flex items-start gap-3 my-2.5 text-sm text-slate-300 leading-relaxed">
            <span className="flex items-center justify-center w-6 h-6 rounded-md bg-slate-950 border border-slate-800 text-slate-200 font-mono text-xs font-bold shrink-0 mt-0.5">1</span>
            <div className="flex-1">Print numbers from n to 1 recursively.</div>
          </div>
          <div className="flex items-start gap-3 my-2.5 text-sm text-slate-300 leading-relaxed">
            <span className="flex items-center justify-center w-6 h-6 rounded-md bg-slate-950 border border-slate-800 text-slate-200 font-mono text-xs font-bold shrink-0 mt-0.5">2</span>
            <div className="flex-1">Calculate factorial recursively.</div>
          </div>
          <div className="flex items-start gap-3 my-2.5 text-sm text-slate-300 leading-relaxed">
            <span className="flex items-center justify-center w-6 h-6 rounded-md bg-slate-950 border border-slate-800 text-slate-200 font-mono text-xs font-bold shrink-0 mt-0.5">3</span>
            <div className="flex-1">Calculate the sum of natural numbers recursively.</div>
          </div>
          <div className="flex items-start gap-3 my-2.5 text-sm text-slate-300 leading-relaxed">
            <span className="flex items-center justify-center w-6 h-6 rounded-md bg-slate-950 border border-slate-800 text-slate-200 font-mono text-xs font-bold shrink-0 mt-0.5">4</span>
            <div className="flex-1">Reverse a String using recursion.</div>
          </div>
          <div className="flex items-start gap-3 my-2.5 text-sm text-slate-300 leading-relaxed">
            <span className="flex items-center justify-center w-6 h-6 rounded-md bg-slate-950 border border-slate-800 text-slate-200 font-mono text-xs font-bold shrink-0 mt-0.5">5</span>
            <div className="flex-1">Check a palindrome recursively.</div>
          </div>
          <div className="flex items-start gap-3 my-2.5 text-sm text-slate-300 leading-relaxed">
            <span className="flex items-center justify-center w-6 h-6 rounded-md bg-slate-950 border border-slate-800 text-slate-200 font-mono text-xs font-bold shrink-0 mt-0.5">6</span>
            <div className="flex-1">Calculate GCD recursively.</div>
          </div>
          <div className="flex items-start gap-3 my-2.5 text-sm text-slate-300 leading-relaxed">
            <span className="flex items-center justify-center w-6 h-6 rounded-md bg-slate-950 border border-slate-800 text-slate-200 font-mono text-xs font-bold shrink-0 mt-0.5">7</span>
            <div className="flex-1">Generate Fibonacci numbers.</div>
          </div>
          <div className="flex items-start gap-3 my-2.5 text-sm text-slate-300 leading-relaxed">
            <span className="flex items-center justify-center w-6 h-6 rounded-md bg-slate-950 border border-slate-800 text-slate-200 font-mono text-xs font-bold shrink-0 mt-0.5">8</span>
            <div className="flex-1">Generate all subsets of a small array.</div>
          </div>
          <div className="flex items-start gap-3 my-2.5 text-sm text-slate-300 leading-relaxed">
            <span className="flex items-center justify-center w-6 h-6 rounded-md bg-slate-950 border border-slate-800 text-slate-200 font-mono text-xs font-bold shrink-0 mt-0.5">9</span>
            <div className="flex-1">Generate permutations of three distinct characters.</div>
          </div>
          <div className="flex items-start gap-3 my-2.5 text-sm text-slate-300 leading-relaxed">
            <span className="flex items-center justify-center w-6 h-6 rounded-md bg-slate-950 border border-slate-800 text-slate-200 font-mono text-xs font-bold shrink-0 mt-0.5">10</span>
            <div className="flex-1">Find a path in a simple maze.</div>
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-white mt-10 mb-4 pb-2 border-b border-slate-800 tracking-tight">
            Intermediate
          </h2>
          <div className="flex items-start gap-3 my-2.5 text-sm text-slate-300 leading-relaxed">
            <span className="flex items-center justify-center w-6 h-6 rounded-md bg-slate-950 border border-slate-800 text-slate-200 font-mono text-xs font-bold shrink-0 mt-0.5">11</span>
            <div className="flex-1">Generate unique permutations when duplicate values exist.</div>
          </div>
          <div className="flex items-start gap-3 my-2.5 text-sm text-slate-300 leading-relaxed">
            <span className="flex items-center justify-center w-6 h-6 rounded-md bg-slate-950 border border-slate-800 text-slate-200 font-mono text-xs font-bold shrink-0 mt-0.5">12</span>
            <div className="flex-1">Generate combinations of a fixed size.</div>
          </div>
          <div className="flex items-start gap-3 my-2.5 text-sm text-slate-300 leading-relaxed">
            <span className="flex items-center justify-center w-6 h-6 rounded-md bg-slate-950 border border-slate-800 text-slate-200 font-mono text-xs font-bold shrink-0 mt-0.5">13</span>
            <div className="flex-1">Solve the four-queens problem.</div>
          </div>
          <div className="flex items-start gap-3 my-2.5 text-sm text-slate-300 leading-relaxed">
            <span className="flex items-center justify-center w-6 h-6 rounded-md bg-slate-950 border border-slate-800 text-slate-200 font-mono text-xs font-bold shrink-0 mt-0.5">14</span>
            <div className="flex-1">Solve the eight-queens problem.</div>
          </div>
          <div className="flex items-start gap-3 my-2.5 text-sm text-slate-300 leading-relaxed">
            <span className="flex items-center justify-center w-6 h-6 rounded-md bg-slate-950 border border-slate-800 text-slate-200 font-mono text-xs font-bold shrink-0 mt-0.5">15</span>
            <div className="flex-1">Solve Sudoku.</div>
          </div>
          <div className="flex items-start gap-3 my-2.5 text-sm text-slate-300 leading-relaxed">
            <span className="flex items-center justify-center w-6 h-6 rounded-md bg-slate-950 border border-slate-800 text-slate-200 font-mono text-xs font-bold shrink-0 mt-0.5">16</span>
            <div className="flex-1">Find all maze paths under restricted movement.</div>
          </div>
          <div className="flex items-start gap-3 my-2.5 text-sm text-slate-300 leading-relaxed">
            <span className="flex items-center justify-center w-6 h-6 rounded-md bg-slate-950 border border-slate-800 text-slate-200 font-mono text-xs font-bold shrink-0 mt-0.5">17</span>
            <div className="flex-1">Solve the subset-sum problem.</div>
          </div>
          <div className="flex items-start gap-3 my-2.5 text-sm text-slate-300 leading-relaxed">
            <span className="flex items-center justify-center w-6 h-6 rounded-md bg-slate-950 border border-slate-800 text-slate-200 font-mono text-xs font-bold shrink-0 mt-0.5">18</span>
            <div className="flex-1">Generate balanced parentheses.</div>
          </div>
          <div className="flex items-start gap-3 my-2.5 text-sm text-slate-300 leading-relaxed">
            <span className="flex items-center justify-center w-6 h-6 rounded-md bg-slate-950 border border-slate-800 text-slate-200 font-mono text-xs font-bold shrink-0 mt-0.5">19</span>
            <div className="flex-1">Implement recursive binary search.</div>
          </div>
          <div className="flex items-start gap-3 my-2.5 text-sm text-slate-300 leading-relaxed">
            <span className="flex items-center justify-center w-6 h-6 rounded-md bg-slate-950 border border-slate-800 text-slate-200 font-mono text-xs font-bold shrink-0 mt-0.5">20</span>
            <div className="flex-1">Count paths through a grid.</div>
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-white mt-10 mb-4 pb-2 border-b border-slate-800 tracking-tight">
            Advanced
          </h2>
          <div className="flex items-start gap-3 my-2.5 text-sm text-slate-300 leading-relaxed">
            <span className="flex items-center justify-center w-6 h-6 rounded-md bg-slate-950 border border-slate-800 text-slate-200 font-mono text-xs font-bold shrink-0 mt-0.5">21</span>
            <div className="flex-1">Solve graph coloring.</div>
          </div>
          <div className="flex items-start gap-3 my-2.5 text-sm text-slate-300 leading-relaxed">
            <span className="flex items-center justify-center w-6 h-6 rounded-md bg-slate-950 border border-slate-800 text-slate-200 font-mono text-xs font-bold shrink-0 mt-0.5">22</span>
            <div className="flex-1">Implement word search using backtracking.</div>
          </div>
          <div className="flex items-start gap-3 my-2.5 text-sm text-slate-300 leading-relaxed">
            <span className="flex items-center justify-center w-6 h-6 rounded-md bg-slate-950 border border-slate-800 text-slate-200 font-mono text-xs font-bold shrink-0 mt-0.5">23</span>
            <div className="flex-1">Solve a combination-sum problem.</div>
          </div>
          <div className="flex items-start gap-3 my-2.5 text-sm text-slate-300 leading-relaxed">
            <span className="flex items-center justify-center w-6 h-6 rounded-md bg-slate-950 border border-slate-800 text-slate-200 font-mono text-xs font-bold shrink-0 mt-0.5">24</span>
            <div className="flex-1">Find Hamiltonian paths using backtracking.</div>
          </div>
          <div className="flex items-start gap-3 my-2.5 text-sm text-slate-300 leading-relaxed">
            <span className="flex items-center justify-center w-6 h-6 rounded-md bg-slate-950 border border-slate-800 text-slate-200 font-mono text-xs font-bold shrink-0 mt-0.5">25</span>
            <div className="flex-1">Solve Knight's Tour.</div>
          </div>
          <div className="flex items-start gap-3 my-2.5 text-sm text-slate-300 leading-relaxed">
            <span className="flex items-center justify-center w-6 h-6 rounded-md bg-slate-950 border border-slate-800 text-slate-200 font-mono text-xs font-bold shrink-0 mt-0.5">26</span>
            <div className="flex-1">Generate all valid arrangements under positional constraints.</div>
          </div>
          <div className="flex items-start gap-3 my-2.5 text-sm text-slate-300 leading-relaxed">
            <span className="flex items-center justify-center w-6 h-6 rounded-md bg-slate-950 border border-slate-800 text-slate-200 font-mono text-xs font-bold shrink-0 mt-0.5">27</span>
            <div className="flex-1">Optimize Sudoku using minimum remaining values.</div>
          </div>
          <div className="flex items-start gap-3 my-2.5 text-sm text-slate-300 leading-relaxed">
            <span className="flex items-center justify-center w-6 h-6 rounded-md bg-slate-950 border border-slate-800 text-slate-200 font-mono text-xs font-bold shrink-0 mt-0.5">28</span>
            <div className="flex-1">Count N-Queens solutions using bit operations.</div>
          </div>
          <div className="flex items-start gap-3 my-2.5 text-sm text-slate-300 leading-relaxed">
            <span className="flex items-center justify-center w-6 h-6 rounded-md bg-slate-950 border border-slate-800 text-slate-200 font-mono text-xs font-bold shrink-0 mt-0.5">29</span>
            <div className="flex-1">Implement memoized recursive dynamic programming.</div>
          </div>
          <div className="flex items-start gap-3 my-2.5 text-sm text-slate-300 leading-relaxed">
            <span className="flex items-center justify-center w-6 h-6 rounded-md bg-slate-950 border border-slate-800 text-slate-200 font-mono text-xs font-bold shrink-0 mt-0.5">30</span>
            <div className="flex-1">Solve a scheduling problem with multiple constraints.</div>
          </div>
          <hr className="my-8 border-slate-800" />
        </div>
      ),
    },
    {
      id: 30,
      title: "30. Module Revision Sheet",
      category: "Part 18 · Quick Reference Guide",
      anchor: "section-30",
      render: () => (
        <div className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-black text-white mt-10 mb-4 pb-2 border-b border-slate-800 tracking-tight">
            Important definitions
          </h2>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed"><strong className="font-semibold text-white">Recursion:</strong> A technique in which a method calls itself to solve smaller instances of a problem.</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed"><strong className="font-semibold text-white">Base case:</strong> The condition that stops recursive calls.</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed"><strong className="font-semibold text-white">Recursive case:</strong> The part that reduces a problem into smaller problems.</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed"><strong className="font-semibold text-white">Call stack:</strong> The runtime structure that manages method invocations.</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed"><strong className="font-semibold text-white">Stack frame:</strong> The information associated with an individual method invocation.</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed"><strong className="font-semibold text-white">Stack unwinding:</strong> The process of returning through pending method calls.</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed"><strong className="font-semibold text-white">StackOverflowError:</strong> An error that can occur when a thread exhausts its stack space.</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed"><strong className="font-semibold text-white">Recursion tree:</strong> A diagram illustrating the recursive calls made by an algorithm.</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed"><strong className="font-semibold text-white">Tail recursion:</strong> Recursion where the recursive call is the final operation.</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed"><strong className="font-semibold text-white">Non-tail recursion:</strong> Recursion where additional computation remains after a recursive call returns.</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed"><strong className="font-semibold text-white">Mathematical induction:</strong> A proof technique based on a base case and an inductive step.</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed"><strong className="font-semibold text-white">Permutation:</strong> An arrangement in which ordering matters.</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed"><strong className="font-semibold text-white">Combination:</strong> A selection in which ordering does not matter.</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed"><strong className="font-semibold text-white">Subsequence:</strong> A sequence formed by selecting elements without changing their relative order.</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed"><strong className="font-semibold text-white">Subset:</strong> A selection of elements from a set, without regard to arrangement.</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed"><strong className="font-semibold text-white">Backtracking:</strong> A search technique that makes choices, explores possibilities, and reverses decisions when necessary.</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed"><strong className="font-semibold text-white">Constraint-based search:</strong> Exploring candidate solutions subject to defined rules.</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed"><strong className="font-semibold text-white">Pruning:</strong> Rejecting branches that cannot lead to valid solutions.</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed"><strong className="font-semibold text-white">Memoization:</strong> Storing previously calculated results for reuse.</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed"><strong className="font-semibold text-white">Recurrence relation:</strong> An equation describing the time cost of an algorithm in terms of smaller inputs.</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed"><strong className="font-semibold text-white">Divide-and-conquer:</strong> A technique that divides a problem into smaller problems and combines their results.</p>
          <h2 className="text-xl sm:text-2xl font-black text-white mt-10 mb-4 pb-2 border-b border-slate-800 tracking-tight">
            Essential Java syntax
          </h2>
          <h3 className="text-lg font-bold text-white mt-8 mb-3 pb-1 border-b border-slate-800/60 flex items-center gap-2">
            <span className="w-1.5 h-4 rounded-full bg-orange-600 inline-block"></span>
            Recursion
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
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
          <h3 className="text-lg font-bold text-white mt-8 mb-3 pb-1 border-b border-slate-800/60 flex items-center gap-2">
            <span className="w-1.5 h-4 rounded-full bg-orange-600 inline-block"></span>
            Tail recursion
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`static int sum(int n, int accumulator) {

    if (n == 0) {
        return accumulator;
    }

    return sum(n - 1, accumulator + n);
}`}</code>
            </pre>
          </div>
          <h3 className="text-lg font-bold text-white mt-8 mb-3 pb-1 border-b border-slate-800/60 flex items-center gap-2">
            <span className="w-1.5 h-4 rounded-full bg-orange-600 inline-block"></span>
            Binary recursive branching
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`static void solve(int n) {

    if (n == 0) {
        return;
    }

    solve(n - 1);

    solve(n - 1);
}`}</code>
            </pre>
          </div>
          <h3 className="text-lg font-bold text-white mt-8 mb-3 pb-1 border-b border-slate-800/60 flex items-center gap-2">
            <span className="w-1.5 h-4 rounded-full bg-orange-600 inline-block"></span>
            Backtracking
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`for (Choice choice : choices) {

    if (isValid(choice)) {

        apply(choice);

        solve();

        undo(choice);
    }
}`}</code>
            </pre>
          </div>
          <h3 className="text-lg font-bold text-white mt-8 mb-3 pb-1 border-b border-slate-800/60 flex items-center gap-2">
            <span className="w-1.5 h-4 rounded-full bg-orange-600 inline-block"></span>
            Subset generation
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`// Include the element

current.add(numbers[index]);

generate(index + 1);

// Exclude the element

current.remove(current.size() - 1);

generate(index + 1);`}</code>
            </pre>
          </div>
          <h3 className="text-lg font-bold text-white mt-8 mb-3 pb-1 border-b border-slate-800/60 flex items-center gap-2">
            <span className="w-1.5 h-4 rounded-full bg-orange-600 inline-block"></span>
            Permutation generation
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`used[i] = true;

current.append(values[i]);

generate();

current.deleteCharAt(current.length() - 1);

used[i] = false;`}</code>
            </pre>
          </div>
          <h3 className="text-lg font-bold text-white mt-8 mb-3 pb-1 border-b border-slate-800/60 flex items-center gap-2">
            <span className="w-1.5 h-4 rounded-full bg-orange-600 inline-block"></span>
            Mathematical induction
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`1. Base case
2. Inductive hypothesis
3. Inductive step
4. Conclusion`}</code>
            </pre>
          </div>
          <h3 className="text-lg font-bold text-white mt-8 mb-3 pb-1 border-b border-slate-800/60 flex items-center gap-2">
            <span className="w-1.5 h-4 rounded-full bg-orange-600 inline-block"></span>
            Complexity analysis
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Single recursive call:
T(n) = T(n - 1) + O(1)

Halving recursion:
T(n) = T(n / 2) + O(1)

Binary branching:
T(n) = 2T(n - 1) + O(1)

Divide and conquer:
T(n) = 2T(n / 2) + O(n)`}</code>
            </pre>
          </div>
          <hr className="my-8 border-slate-800" />
        </div>
      ),
    },
    {
      id: 31,
      title: "31. Module Completion Criteria",
      category: "Milestone · Completion Checklist",
      anchor: "section-31",
      render: () => (
        <div className="space-y-4">
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Students should complete the following checklist before progressing.</p>
          <h2 className="text-xl sm:text-2xl font-black text-white mt-10 mb-4 pb-2 border-b border-slate-800 tracking-tight">
            Recursion fundamentals
          </h2>
          <ul className="list-disc list-outside pl-5 space-y-2 text-slate-300 my-3 text-sm leading-relaxed">
            <li>[ ] Explain recursion.</li>
            <li>[ ] Design recursive methods.</li>
            <li>[ ] Identify base cases.</li>
            <li>[ ] Identify recursive cases.</li>
            <li>[ ] Ensure recursive progress.</li>
            <li>[ ] Trace recursive function calls.</li>
            <li>[ ] Understand call-stack frames.</li>
            <li>[ ] Explain stack unwinding.</li>
            <li>[ ] Recognize StackOverflowError.</li>
            <li>[ ] Draw recursion trees.</li>
            <li>[ ] Differentiate tail and non-tail recursion.</li>
            <li>[ ] Compare recursion and iteration.</li>
          </ul>
          <h2 className="text-xl sm:text-2xl font-black text-white mt-10 mb-4 pb-2 border-b border-slate-800 tracking-tight">
            Mathematical foundations
          </h2>
          <ul className="list-disc list-outside pl-5 space-y-2 text-slate-300 my-3 text-sm leading-relaxed">
            <li>[ ] Understand mathematical induction.</li>
            <li>[ ] Write base-case proofs.</li>
            <li>[ ] Apply inductive hypotheses.</li>
            <li>[ ] Prove recursive relationships.</li>
            <li>[ ] Calculate factorials.</li>
            <li>[ ] Calculate permutations.</li>
            <li>[ ] Calculate combinations.</li>
            <li>[ ] Understand subsets and subsequences.</li>
            <li>[ ] Derive recurrence relations.</li>
            <li>[ ] Analyze basic recursive complexity.</li>
          </ul>
          <h2 className="text-xl sm:text-2xl font-black text-white mt-10 mb-4 pb-2 border-b border-slate-800 tracking-tight">
            Backtracking
          </h2>
          <ul className="list-disc list-outside pl-5 space-y-2 text-slate-300 my-3 text-sm leading-relaxed">
            <li>[ ] Explain choose-explore-unchoose.</li>
            <li>[ ] Understand state-space trees.</li>
            <li>[ ] Identify constraints.</li>
            <li>[ ] Apply pruning.</li>
            <li>[ ] Generate permutations.</li>
            <li>[ ] Generate combinations.</li>
            <li>[ ] Generate subsets.</li>
            <li>[ ] Avoid duplicate permutations.</li>
            <li>[ ] Solve N-Queens.</li>
            <li>[ ] Implement a Sudoku solver.</li>
            <li>[ ] Solve Rat in a Maze.</li>
            <li>[ ] Understand maze pathfinding.</li>
            <li>[ ] Differentiate DFS and BFS.</li>
          </ul>
          <h2 className="text-xl sm:text-2xl font-black text-white mt-10 mb-4 pb-2 border-b border-slate-800 tracking-tight">
            Advanced algorithmic thinking
          </h2>
          <ul className="list-disc list-outside pl-5 space-y-2 text-slate-300 my-3 text-sm leading-relaxed">
            <li>[ ] Understand include-exclude recursion.</li>
            <li>[ ] Understand two-way and multiway branching.</li>
            <li>[ ] Implement recursive binary search.</li>
            <li>[ ] Understand memoization.</li>
            <li>[ ] Analyze recursive call counts.</li>
            <li>[ ] Compare time and space complexity.</li>
            <li>[ ] Understand output-sensitive complexity.</li>
            <li>[ ] Identify when recursion should be replaced by iteration.</li>
            <li>[ ] Understand the relationship between recursion and dynamic programming.</li>
          </ul>
          <h2 className="text-xl sm:text-2xl font-black text-white mt-10 mb-4 pb-2 border-b border-slate-800 tracking-tight">
            Practical assessment
          </h2>
          <ul className="list-disc list-outside pl-5 space-y-2 text-slate-300 my-3 text-sm leading-relaxed">
            <li>[ ] Complete all ten laboratory exercises.</li>
            <li>[ ] Attempt all ten programming assignments.</li>
            <li>[ ] Complete the assessment questions.</li>
            <li>[ ] Build the Recursive Problem Solver project.</li>
            <li>[ ] Implement at least one complete constraint solver.</li>
            <li>[ ] Document base cases and recursive cases.</li>
            <li>[ ] Draw recursion trees for selected algorithms.</li>
            <li>[ ] Provide time and space complexity for each implementation.</li>
            <li>[ ] Test both successful and unsuccessful search paths.</li>
          </ul>
          <h2 className="text-xl sm:text-2xl font-black text-white mt-10 mb-4 pb-2 border-b border-slate-800 tracking-tight">
            Final Expected Capability
          </h2>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">By the end of Module 6, students should be able to approach problems that require exploring multiple possible solutions.</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">They should understand how recursive functions execute, how the call stack manages method invocations, how mathematical induction supports algorithm correctness, and how permutations, combinations, and subsets can be generated systematically.</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">They should also be able to construct backtracking algorithms, validate constraints, prune unsuccessful branches, and solve foundational problems such as N-Queens, Sudoku, and maze pathfinding.</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed"><strong className="font-semibold text-white">The essential outcome is the ability to reason about recursive search spaces, design correct backtracking solutions, and analyze their computational cost.</strong></p>
          <hr className="my-8 border-slate-800" />
        </div>
      ),
    },
    {
      id: 32,
      title: "32. Phase 1 — Java Foundations Final Capstone & Transition to DSA",
      category: "Milestone · Phase 1 Exit Mastery",
      anchor: "section-32",
      render: () => (
        <div className="space-y-4">
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">Modules 1–6 now provide a foundation spanning Java programming, OOP, advanced Java APIs, recursion, mathematical reasoning, and backtracking.</p>
          <div className="overflow-x-auto my-4 rounded-xl border border-slate-800 shadow-2xs">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-white border-b border-slate-800 font-semibold">
                <tr>
                  <th className="px-4 py-3">Module</th>
                  <th className="px-4 py-3">Subject</th>
                  <th className="px-4 py-3">Main capability</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">Module 1</td>
                  <td className="px-4 py-2.5 text-slate-300">Introduction to Programming with Java</td>
                  <td className="px-4 py-2.5 text-slate-300">Programming and execution fundamentals</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">Module 2</td>
                  <td className="px-4 py-2.5 text-slate-300">Control Flow, Methods &amp; Problem-Solving</td>
                  <td className="px-4 py-2.5 text-slate-300">Algorithms, loops, methods, and basic recursion</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">Module 3</td>
                  <td className="px-4 py-2.5 text-slate-300">Arrays, Strings &amp; Mathematical Programming</td>
                  <td className="px-4 py-2.5 text-slate-300">Data processing and numerical algorithms</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">Module 4</td>
                  <td className="px-4 py-2.5 text-slate-300">Object-Oriented Programming with Java</td>
                  <td className="px-4 py-2.5 text-slate-300">Object-oriented design and architecture</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">Module 5</td>
                  <td className="px-4 py-2.5 text-slate-300">Advanced Java Programming</td>
                  <td className="px-4 py-2.5 text-slate-300">Exceptions, generics, collections, streams, and file operations</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">Module 6</td>
                  <td className="px-4 py-2.5 text-slate-300">Recursion, Backtracking &amp; Mathematical Foundations</td>
                  <td className="px-4 py-2.5 text-slate-300">Recursive algorithms, mathematical reasoning, and constraint-based search</td>
                </tr>
              </tbody>
            </table>
          </div>
          <h3 className="text-lg font-bold text-white mt-8 mb-3 pb-1 border-b border-slate-800/60 flex items-center gap-2">
            <span className="w-1.5 h-4 rounded-full bg-orange-600 inline-block"></span>
            Overall learning outcomes
          </h3>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">After completing these modules, students should be capable of:</p>
          <div className="flex items-start gap-3 my-2.5 text-sm text-slate-300 leading-relaxed">
            <span className="flex items-center justify-center w-6 h-6 rounded-md bg-slate-950 border border-slate-800 text-slate-200 font-mono text-xs font-bold shrink-0 mt-0.5">1</span>
            <div className="flex-1">Writing and executing Java applications.</div>
          </div>
          <div className="flex items-start gap-3 my-2.5 text-sm text-slate-300 leading-relaxed">
            <span className="flex items-center justify-center w-6 h-6 rounded-md bg-slate-950 border border-slate-800 text-slate-200 font-mono text-xs font-bold shrink-0 mt-0.5">2</span>
            <div className="flex-1">Understanding Java's core syntax and runtime behavior.</div>
          </div>
          <div className="flex items-start gap-3 my-2.5 text-sm text-slate-300 leading-relaxed">
            <span className="flex items-center justify-center w-6 h-6 rounded-md bg-slate-950 border border-slate-800 text-slate-200 font-mono text-xs font-bold shrink-0 mt-0.5">3</span>
            <div className="flex-1">Designing algorithms to solve programming problems.</div>
          </div>
          <div className="flex items-start gap-3 my-2.5 text-sm text-slate-300 leading-relaxed">
            <span className="flex items-center justify-center w-6 h-6 rounded-md bg-slate-950 border border-slate-800 text-slate-200 font-mono text-xs font-bold shrink-0 mt-0.5">4</span>
            <div className="flex-1">Working with loops, methods, arrays, and Strings.</div>
          </div>
          <div className="flex items-start gap-3 my-2.5 text-sm text-slate-300 leading-relaxed">
            <span className="flex items-center justify-center w-6 h-6 rounded-md bg-slate-950 border border-slate-800 text-slate-200 font-mono text-xs font-bold shrink-0 mt-0.5">5</span>
            <div className="flex-1">Applying object-oriented programming principles.</div>
          </div>
          <div className="flex items-start gap-3 my-2.5 text-sm text-slate-300 leading-relaxed">
            <span className="flex items-center justify-center w-6 h-6 rounded-md bg-slate-950 border border-slate-800 text-slate-200 font-mono text-xs font-bold shrink-0 mt-0.5">6</span>
            <div className="flex-1">Designing reusable classes and interfaces.</div>
          </div>
          <div className="flex items-start gap-3 my-2.5 text-sm text-slate-300 leading-relaxed">
            <span className="flex items-center justify-center w-6 h-6 rounded-md bg-slate-950 border border-slate-800 text-slate-200 font-mono text-xs font-bold shrink-0 mt-0.5">7</span>
            <div className="flex-1">Using Java's exception-handling mechanisms.</div>
          </div>
          <div className="flex items-start gap-3 my-2.5 text-sm text-slate-300 leading-relaxed">
            <span className="flex items-center justify-center w-6 h-6 rounded-md bg-slate-950 border border-slate-800 text-slate-200 font-mono text-xs font-bold shrink-0 mt-0.5">8</span>
            <div className="flex-1">Working with generics and the Collections Framework.</div>
          </div>
          <div className="flex items-start gap-3 my-2.5 text-sm text-slate-300 leading-relaxed">
            <span className="flex items-center justify-center w-6 h-6 rounded-md bg-slate-950 border border-slate-800 text-slate-200 font-mono text-xs font-bold shrink-0 mt-0.5">9</span>
            <div className="flex-1">Processing data using lambda expressions and streams.</div>
          </div>
          <div className="flex items-start gap-3 my-2.5 text-sm text-slate-300 leading-relaxed">
            <span className="flex items-center justify-center w-6 h-6 rounded-md bg-slate-950 border border-slate-800 text-slate-200 font-mono text-xs font-bold shrink-0 mt-0.5">10</span>
            <div className="flex-1">Reading and writing files.</div>
          </div>
          <div className="flex items-start gap-3 my-2.5 text-sm text-slate-300 leading-relaxed">
            <span className="flex items-center justify-center w-6 h-6 rounded-md bg-slate-950 border border-slate-800 text-slate-200 font-mono text-xs font-bold shrink-0 mt-0.5">11</span>
            <div className="flex-1">Implementing recursive algorithms.</div>
          </div>
          <div className="flex items-start gap-3 my-2.5 text-sm text-slate-300 leading-relaxed">
            <span className="flex items-center justify-center w-6 h-6 rounded-md bg-slate-950 border border-slate-800 text-slate-200 font-mono text-xs font-bold shrink-0 mt-0.5">12</span>
            <div className="flex-1">Understanding mathematical induction.</div>
          </div>
          <div className="flex items-start gap-3 my-2.5 text-sm text-slate-300 leading-relaxed">
            <span className="flex items-center justify-center w-6 h-6 rounded-md bg-slate-950 border border-slate-800 text-slate-200 font-mono text-xs font-bold shrink-0 mt-0.5">13</span>
            <div className="flex-1">Generating permutations, combinations, and subsets.</div>
          </div>
          <div className="flex items-start gap-3 my-2.5 text-sm text-slate-300 leading-relaxed">
            <span className="flex items-center justify-center w-6 h-6 rounded-md bg-slate-950 border border-slate-800 text-slate-200 font-mono text-xs font-bold shrink-0 mt-0.5">14</span>
            <div className="flex-1">Designing backtracking algorithms.</div>
          </div>
          <div className="flex items-start gap-3 my-2.5 text-sm text-slate-300 leading-relaxed">
            <span className="flex items-center justify-center w-6 h-6 rounded-md bg-slate-950 border border-slate-800 text-slate-200 font-mono text-xs font-bold shrink-0 mt-0.5">15</span>
            <div className="flex-1">Solving introductory constraint-based search problems.</div>
          </div>
          <div className="flex items-start gap-3 my-2.5 text-sm text-slate-300 leading-relaxed">
            <span className="flex items-center justify-center w-6 h-6 rounded-md bg-slate-950 border border-slate-800 text-slate-200 font-mono text-xs font-bold shrink-0 mt-0.5">16</span>
            <div className="flex-1">Analyzing recursive time and space complexity.</div>
          </div>
          <div className="flex items-start gap-3 my-2.5 text-sm text-slate-300 leading-relaxed">
            <span className="flex items-center justify-center w-6 h-6 rounded-md bg-slate-950 border border-slate-800 text-slate-200 font-mono text-xs font-bold shrink-0 mt-0.5">17</span>
            <div className="flex-1">Building modular applications using Java.</div>
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-white mt-10 mb-4 pb-2 border-b border-slate-800 tracking-tight">
            Next learning stage — Data Structures and Algorithms
          </h2>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">The next phase should transition from Java programming techniques into a systematic study of data structures and algorithm design.</p>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed">A recommended progression:</p>
          <div className="flex items-start gap-3 my-2.5 text-sm text-slate-300 leading-relaxed">
            <span className="flex items-center justify-center w-6 h-6 rounded-md bg-slate-950 border border-slate-800 text-slate-200 font-mono text-xs font-bold shrink-0 mt-0.5">1</span>
            <div className="flex-1">Algorithm analysis and asymptotic notation.</div>
          </div>
          <div className="flex items-start gap-3 my-2.5 text-sm text-slate-300 leading-relaxed">
            <span className="flex items-center justify-center w-6 h-6 rounded-md bg-slate-950 border border-slate-800 text-slate-200 font-mono text-xs font-bold shrink-0 mt-0.5">2</span>
            <div className="flex-1">Advanced arrays and array problem-solving.</div>
          </div>
          <div className="flex items-start gap-3 my-2.5 text-sm text-slate-300 leading-relaxed">
            <span className="flex items-center justify-center w-6 h-6 rounded-md bg-slate-950 border border-slate-800 text-slate-200 font-mono text-xs font-bold shrink-0 mt-0.5">3</span>
            <div className="flex-1">Searching algorithms.</div>
          </div>
          <div className="flex items-start gap-3 my-2.5 text-sm text-slate-300 leading-relaxed">
            <span className="flex items-center justify-center w-6 h-6 rounded-md bg-slate-950 border border-slate-800 text-slate-200 font-mono text-xs font-bold shrink-0 mt-0.5">4</span>
            <div className="flex-1">Sorting algorithms.</div>
          </div>
          <div className="flex items-start gap-3 my-2.5 text-sm text-slate-300 leading-relaxed">
            <span className="flex items-center justify-center w-6 h-6 rounded-md bg-slate-950 border border-slate-800 text-slate-200 font-mono text-xs font-bold shrink-0 mt-0.5">5</span>
            <div className="flex-1">Linked lists.</div>
          </div>
          <div className="flex items-start gap-3 my-2.5 text-sm text-slate-300 leading-relaxed">
            <span className="flex items-center justify-center w-6 h-6 rounded-md bg-slate-950 border border-slate-800 text-slate-200 font-mono text-xs font-bold shrink-0 mt-0.5">6</span>
            <div className="flex-1">Stacks and queues.</div>
          </div>
          <div className="flex items-start gap-3 my-2.5 text-sm text-slate-300 leading-relaxed">
            <span className="flex items-center justify-center w-6 h-6 rounded-md bg-slate-950 border border-slate-800 text-slate-200 font-mono text-xs font-bold shrink-0 mt-0.5">7</span>
            <div className="flex-1">Hashing and hash tables.</div>
          </div>
          <div className="flex items-start gap-3 my-2.5 text-sm text-slate-300 leading-relaxed">
            <span className="flex items-center justify-center w-6 h-6 rounded-md bg-slate-950 border border-slate-800 text-slate-200 font-mono text-xs font-bold shrink-0 mt-0.5">8</span>
            <div className="flex-1">Advanced recursion and backtracking.</div>
          </div>
          <div className="flex items-start gap-3 my-2.5 text-sm text-slate-300 leading-relaxed">
            <span className="flex items-center justify-center w-6 h-6 rounded-md bg-slate-950 border border-slate-800 text-slate-200 font-mono text-xs font-bold shrink-0 mt-0.5">9</span>
            <div className="flex-1">Trees and binary search trees.</div>
          </div>
          <div className="flex items-start gap-3 my-2.5 text-sm text-slate-300 leading-relaxed">
            <span className="flex items-center justify-center w-6 h-6 rounded-md bg-slate-950 border border-slate-800 text-slate-200 font-mono text-xs font-bold shrink-0 mt-0.5">10</span>
            <div className="flex-1">Heaps and priority queues.</div>
          </div>
          <div className="flex items-start gap-3 my-2.5 text-sm text-slate-300 leading-relaxed">
            <span className="flex items-center justify-center w-6 h-6 rounded-md bg-slate-950 border border-slate-800 text-slate-200 font-mono text-xs font-bold shrink-0 mt-0.5">11</span>
            <div className="flex-1">Graphs and graph algorithms.</div>
          </div>
          <div className="flex items-start gap-3 my-2.5 text-sm text-slate-300 leading-relaxed">
            <span className="flex items-center justify-center w-6 h-6 rounded-md bg-slate-950 border border-slate-800 text-slate-200 font-mono text-xs font-bold shrink-0 mt-0.5">12</span>
            <div className="flex-1">Greedy algorithms.</div>
          </div>
          <div className="flex items-start gap-3 my-2.5 text-sm text-slate-300 leading-relaxed">
            <span className="flex items-center justify-center w-6 h-6 rounded-md bg-slate-950 border border-slate-800 text-slate-200 font-mono text-xs font-bold shrink-0 mt-0.5">13</span>
            <div className="flex-1">Dynamic programming.</div>
          </div>
          <div className="flex items-start gap-3 my-2.5 text-sm text-slate-300 leading-relaxed">
            <span className="flex items-center justify-center w-6 h-6 rounded-md bg-slate-950 border border-slate-800 text-slate-200 font-mono text-xs font-bold shrink-0 mt-0.5">14</span>
            <div className="flex-1">Advanced interview problem-solving.</div>
          </div>
          <p className="text-slate-300 my-3 text-sm sm:text-base leading-relaxed"><strong className="font-semibold text-white">The distinction between the two stages:</strong> The Java foundation teaches students how to implement software and use the language effectively. The DSA stage teaches them how to design efficient algorithms, select appropriate data structures, and solve increasingly difficult computational problems.</p>
        </div>
      ),
    },
  ];

  const filteredSections = sections.filter((s) =>
    s.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    s.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const activeSection = sections.find((s) => s.id === activeSectionId) || sections[0];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
      {/* Table of Contents / Sidebar */}
      <aside className="lg:col-span-4 bg-slate-900/80 rounded-2xl border border-slate-800 p-4 sm:p-5 shadow-2xs lg:sticky lg:top-20 max-h-[85vh] flex flex-col">
        <div className="pb-3 border-b border-slate-800 mb-3">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-bold text-white flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-orange-400" />
              <span>Curriculum Index</span>
            </h3>
            <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-orange-500/15 text-orange-300 font-bold">
              {sections.length} Chapters
            </span>
          </div>
          <input
            type="text"
            placeholder="Search chapters, topics, rules..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full text-xs px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 focus:outline-none focus:border-orange-500 focus:bg-slate-900/80 transition"
          />
        </div>

        <nav className="overflow-y-auto space-y-1 pr-1 text-xs dark-scrollbar flex-1">
          {filteredSections.map((sec) => {
            const isActive = sec.id === activeSectionId;
            return (
              <button
                key={sec.id}
                onClick={() => {
                  setActiveSectionId(sec.id);
                  window.scrollTo({ top: 380, behavior: "smooth" });
                }}
                title={sec.title}
                className={`w-full text-left px-3 py-2.5 rounded-xl transition flex items-start justify-between gap-2 ${
                  isActive
                    ? "bg-orange-600 text-white font-bold shadow-xs"
                    : "text-slate-300 hover:bg-slate-950 hover:text-white"
                }`}
              >
                <div className="flex-1 min-w-0">
                  <div className={`text-[10px] uppercase font-mono tracking-wider line-clamp-1 mb-0.5 ${
                    isActive ? "text-orange-200" : "text-slate-400 font-semibold"
                  }`}>
                    {sec.category}
                  </div>
                  <div className="text-xs break-words whitespace-normal leading-snug">{sec.title}</div>
                </div>
                <ChevronRight className={`w-3.5 h-3.5 mt-1 shrink-0 ${isActive ? "text-white" : "text-slate-400"}`} />
              </button>
            );
          })}
        </nav>
      </aside>

      {/* Main Chapter Content View */}
      <section className="lg:col-span-8 bg-slate-900/80 rounded-2xl sm:rounded-3xl border border-slate-800 p-6 sm:p-10 shadow-sm min-h-[600px]">
        {/* Section Header Banner */}
        <div className="border-b border-slate-800 pb-6 mb-8">
          <div className="text-xs uppercase font-mono font-bold tracking-wider text-orange-400 mb-1.5">
            {activeSection.category}
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
            {activeSection.title}
          </h1>
        </div>

        {/* Section Body */}
        <div className="prose prose-stone max-w-none text-slate-200 leading-relaxed">
          {activeSection.render()}
        </div>

        {/* Next / Previous Navigator Footer */}
        <div className="mt-12 pt-6 border-t border-slate-800 flex items-center justify-between gap-4">
          <button
            disabled={activeSectionId === 0}
            onClick={() => {
              setActiveSectionId((prev) => Math.max(0, prev - 1));
              window.scrollTo({ top: 380, behavior: "smooth" });
            }}
            className="px-4 py-2 rounded-xl border border-slate-800 text-xs font-semibold text-slate-300 hover:bg-slate-950 disabled:opacity-40 disabled:cursor-not-allowed transition"
          >
            &larr; Previous Chapter
          </button>
          <span className="text-xs text-slate-400 font-mono">
            Chapter {activeSectionId + 1} of {sections.length}
          </span>
          <button
            disabled={activeSectionId === sections.length - 1}
            onClick={() => {
              setActiveSectionId((prev) => Math.min(sections.length - 1, prev + 1));
              window.scrollTo({ top: 380, behavior: "smooth" });
            }}
            className="px-4 py-2 rounded-xl bg-orange-600 text-white text-xs font-semibold hover:bg-orange-500 disabled:opacity-40 disabled:cursor-not-allowed transition shadow-2xs"
          >
            Next Chapter &rarr;
          </button>
        </div>
      </section>
    </div>
  );
}
