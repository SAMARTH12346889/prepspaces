import React, { useState } from "react";
import {
  BookOpen,
  ChevronRight,
  Code2,
  Copy,
  Check,
  Search,
  Sparkles,
  Layers,
  ArrowRight,
  Calculator,
  Compass,
  Zap,
  Activity,
  Workflow,
  CheckSquare,
  Award,
} from "lucide-react";

export default function JavaComplexitySections() {
  const [activeSectionId, setActiveSectionId] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [copiedId, setCopiedId] = useState(null);

  const copyToClipboard = (text, id) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const sections = [
    {
      id: 0,
      title: "Module 7: Curriculum Overview & Objectives",
      category: "Course Roadmap · Objectives",
      anchor: "overview",
      render: () => (
        <div className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-black text-stone-900 mt-10 mb-4 pb-2 border-b border-[#e7e3da] tracking-tight">
            1. Learning Objectives
          </h2>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            By the end of this module, you should be able to:
          </p>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">1.</span>
            <div className="flex-1">Explain what an algorithm is and identify its input, output, and constraints.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">2.</span>
            <div className="flex-1">Understand correctness and prove that an algorithm produces the expected result.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">3.</span>
            <div className="flex-1">Analyze time complexity and space complexity.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">4.</span>
            <div className="flex-1">Understand asymptotic analysis and why it matters.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">5.</span>
            <div className="flex-1">Explain Big-O, Big-Omega, and Big-Theta notation.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">6.</span>
            <div className="flex-1">Distinguish best-case, average-case, and worst-case complexity.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">7.</span>
            <div className="flex-1">Recognize constant, logarithmic, linear, quadratic, and exponential growth.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">8.</span>
            <div className="flex-1">Analyze nested loops, dependent loops, and sequential loops.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">9.</span>
            <div className="flex-1">Analyze recursive algorithms using recurrence relations.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">10.</span>
            <div className="flex-1">Apply the Master Theorem to appropriate recurrence relations.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">11.</span>
            <div className="flex-1">Understand amortized analysis and dynamic-array operations.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">12.</span>
            <div className="flex-1">Distinguish auxiliary space from total space.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">13.</span>
            <div className="flex-1">Evaluate time-space trade-offs.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">14.</span>
            <div className="flex-1">Compare algorithms based on their theoretical performance.</div>
          </div>
          <hr className="my-8 border-t border-[#e7e3da]" />
        </div>
      ),
    },
    {
      id: 1,
      title: "Part 1: Algorithms and Correctness",
      category: "Part 1 · Invariants & Correctness",
      anchor: "part-1",
      render: () => (
        <div className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-black text-stone-900 mt-10 mb-4 pb-2 border-b border-[#e7e3da] tracking-tight">
            2. What Is an Algorithm?
          </h2>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            An <strong className="font-semibold text-stone-900">algorithm</strong> is a finite, well-defined sequence of instructions designed to solve a particular computational problem.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            An algorithm accepts input, performs a sequence of operations, and produces output.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            For example, suppose you want to find the largest number in an array:
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">[12, 45, 7, 89, 23]</code>
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            A possible algorithm is:
          </p>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">1.</span>
            <div className="flex-1">Assume the first element is the largest.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">2.</span>
            <div className="flex-1">Examine every remaining element.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">3.</span>
            <div className="flex-1">Whenever you encounter a larger value, update the largest value.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">4.</span>
            <div className="flex-1">Return the largest value after examining the entire array.</div>
          </div>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            The result is <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">89</code>.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            2.1 Characteristics of a good algorithm
          </h3>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            A well-designed algorithm should have these characteristics:
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <strong className="font-semibold text-stone-900">1. Input:</strong> It accepts zero or more clearly defined inputs.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <strong className="font-semibold text-stone-900">2. Output:</strong> It produces at least one result.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <strong className="font-semibold text-stone-900">3. Definiteness:</strong> Every instruction should be precise and unambiguous.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <strong className="font-semibold text-stone-900">4. Finiteness:</strong> It must terminate after a finite number of steps for valid inputs.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <strong className="font-semibold text-stone-900">5. Effectiveness:</strong> Each operation must be sufficiently basic to be carried out.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <strong className="font-semibold text-stone-900">6. Correctness:</strong> It must produce the required result for all inputs covered by its specification.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <strong className="font-semibold text-stone-900">7. Efficiency:</strong> It should use a reasonable amount of time and memory.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Not every correct algorithm is efficient. Two algorithms may solve exactly the same problem but have dramatically different performance.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            2.2 Algorithm versus program
          </h3>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            An algorithm is the logical solution to a problem. A program is an implementation of that solution in a programming language.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            For example:
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <strong className="font-semibold text-stone-900">Algorithm:</strong>
          </p>
          <ul className="list-disc list-outside pl-5 space-y-2 text-stone-700 my-3 text-sm leading-relaxed">
            <li>Set <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">sum</code> to zero.</li>
            <li>Add each array element to <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">sum</code>.</li>
            <li>Return <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">sum</code>.</li>
          </ul>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <strong className="font-semibold text-stone-900">Java implementation:</strong>
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public class ArraySum {

    public static int calculateSum(int[] numbers) {
        int sum = 0;

        for (int number : numbers) {
            sum += number;
        }

        return sum;
    }

    public static void main(String[] args) {
        int values = {10, 20, 30, 40};

        System.out.println(calculateSum(values));
    }
}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
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
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            The algorithm is independent of Java. The same logical solution could be implemented in Python, C++, JavaScript, or another language.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            2.3 Input size
          </h3>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Algorithm analysis usually measures performance in relation to the <strong className="font-semibold text-stone-900">size of the input</strong>.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            We commonly represent input size using <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">n</code>.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Examples:
          </p>
          <div className="overflow-x-auto my-4 rounded-xl border border-[#e7e3da] shadow-2xs">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-stone-900 border-b border-[#e7e3da] font-semibold">
                <tr>
                  <th className="px-4 py-3">Problem</th>
                  <th className="px-4 py-3">Possible input-size measure</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Searching an array</td>
                  <td className="px-4 py-2.5 text-stone-700">Number of elements, n</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Sorting an array</td>
                  <td className="px-4 py-2.5 text-stone-700">Number of elements, n</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Processing a string</td>
                  <td className="px-4 py-2.5 text-stone-700">Number of characters, n</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Multiplying matrices</td>
                  <td className="px-4 py-2.5 text-stone-700">Matrix dimensions, n</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Traversing a graph</td>
                  <td className="px-4 py-2.5 text-stone-700">Vertices V and edges E</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Processing a file</td>
                  <td className="px-4 py-2.5 text-stone-700">Number of records or bytes</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            The correct input-size measure depends on the problem.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            For a matrix with <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">r</code> rows and <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">c</code> columns, an operation that processes every cell takes <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">O(r × c)</code> time, not necessarily <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">O(n²)</code> unless the matrix is square.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            2.4 Primitive operation
          </h3>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            A primitive operation is a basic operation whose execution count we can estimate.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Examples include:
          </p>
          <ul className="list-disc list-outside pl-5 space-y-2 text-stone-700 my-3 text-sm leading-relaxed">
            <li>Assigning a value.</li>
            <li>Comparing two values.</li>
            <li>Performing arithmetic.</li>
            <li>Accessing an array element.</li>
            <li>Incrementing a counter.</li>
            <li>Returning a value.</li>
          </ul>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Consider:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`int a = 10;
int b = 20;
int result = a + b;`}</code>
            </pre>
          </div>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            There are a fixed number of basic operations. Increasing the size of an unrelated input does not increase their count.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Therefore, this fragment takes constant time: <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">O(1)</code>.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            In theoretical analysis, we count how the number of operations grows as input size increases, rather than measuring exact milliseconds on one computer.
          </p>
          <hr className="my-8 border-t border-[#e7e3da]" />
          <h2 className="text-xl sm:text-2xl font-black text-stone-900 mt-10 mb-4 pb-2 border-b border-[#e7e3da] tracking-tight">
            3. Correctness of Algorithms
          </h2>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            An algorithm is correct when it produces the required result for every valid input within its specification.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            An algorithm that is fast but produces incorrect answers is not a successful algorithm.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            3.1 Specification: preconditions and postconditions
          </h3>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            A formal way to describe an algorithm is through:
          </p>
          <ul className="list-disc list-outside pl-5 space-y-2 text-stone-700 my-3 text-sm leading-relaxed">
            <li><strong className="font-semibold text-stone-900">Precondition:</strong> What must be true before execution.</li>
            <li><strong className="font-semibold text-stone-900">Postcondition:</strong> What must be true after successful execution.</li>
          </ul>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            For example, consider a method that searches an integer array.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Precondition:
          </p>
          <ul className="list-disc list-outside pl-5 space-y-2 text-stone-700 my-3 text-sm leading-relaxed">
            <li>The array is not null.</li>
          </ul>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Postcondition:
          </p>
          <ul className="list-disc list-outside pl-5 space-y-2 text-stone-700 my-3 text-sm leading-relaxed">
            <li>If the target exists, return an index containing the target.</li>
            <li>If the target does not exist, return <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">-1</code>.</li>
          </ul>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            This specification makes the method's expected behavior explicit.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            3.2 Partial correctness and termination
          </h3>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Correctness has two important aspects.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <strong className="font-semibold text-stone-900">Partial correctness:</strong> If the algorithm terminates, its result satisfies the postcondition.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <strong className="font-semibold text-stone-900">Termination:</strong> The algorithm eventually stops for every valid input.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Together, partial correctness and termination establish total correctness.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            For example, a loop that repeatedly subtracts one from a positive number may be partially correct but still needs an argument showing that it cannot continue forever.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            3.3 Proving an algorithm using a loop invariant
          </h3>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            A <strong className="font-semibold text-stone-900">loop invariant</strong> is a property that remains true before and after every iteration of a loop.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            To use a loop invariant in a proof, establish three conditions:
          </p>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">1.</span>
            <div className="flex-1"><strong className="font-semibold text-stone-900">Initialization:</strong> It is true before the first iteration.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">2.</span>
            <div className="flex-1"><strong className="font-semibold text-stone-900">Maintenance:</strong> If it is true before an iteration, it remains true after that iteration.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">3.</span>
            <div className="flex-1"><strong className="font-semibold text-stone-900">Termination:</strong> When the loop ends, the invariant helps establish the required final result.</div>
          </div>
          <h4 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2">
            <span className="w-1.5 h-4 bg-orange-500 rounded-full inline-block"></span>
            Worked example: finding the maximum element
          </h4>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Input:
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">[12, 45, 7, 89, 23]</code>
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Algorithm:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public static int findMaximum(int[] numbers) {
    if (numbers == null || numbers.length == 0) {
        throw new IllegalArgumentException(
            "Array must contain at least one element"
        );
    }

    int maximum = numbers[0];

    for (int i = 1; i < numbers.length; i++) {
        if (numbers[i] > maximum) {
            maximum = numbers[i];
        }
    }

    return maximum;
}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <strong className="font-semibold text-stone-900">Loop invariant:</strong>
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Before each iteration at index <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">i</code>, <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">maximum</code> is the largest value among the elements from index <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">0</code> through <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">i - 1</code>.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <strong className="font-semibold text-stone-900">Initialization:</strong> Before the first iteration, <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">maximum</code> equals <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">numbers[0]</code>. It is therefore the largest value among the elements examined so far.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <strong className="font-semibold text-stone-900">Maintenance:</strong> At iteration <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">i</code>, the algorithm compares <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">numbers[i]</code> with <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">maximum</code>. It updates <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">maximum</code> when necessary. After the update, <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">maximum</code> is the largest value among elements <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">0</code> through <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">i</code>.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <strong className="font-semibold text-stone-900">Termination:</strong> When the loop finishes, every array element has been examined. The invariant establishes that <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">maximum</code> is the largest element in the entire array.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Therefore, the algorithm is correct for every non-empty array.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <strong className="font-semibold text-stone-900">Complexity:</strong>
          </p>
          <ul className="list-disc list-outside pl-5 space-y-2 text-stone-700 my-3 text-sm leading-relaxed">
            <li>Time: <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">O(n)</code>, because the algorithm examines every element.</li>
            <li>Auxiliary space: <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">O(1)</code>, because it uses only a fixed number of variables.</li>
          </ul>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            3.4 Binary search correctness
          </h3>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Binary search is a particularly useful example because its correctness depends on maintaining a precise invariant.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <strong className="font-semibold text-stone-900">Precondition:</strong> The array must be sorted in ascending order.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <strong className="font-semibold text-stone-900">Postcondition:</strong> Return an index containing the target if one exists; otherwise return <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">-1</code>.
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public static int binarySearch(int[] numbers, int target) {
    int low = 0;
    int high = numbers.length - 1;

    while (low <= high) {
        int mid = low + (high - low) / 2;

        if (numbers[mid] == target) {
            return mid;
        } else if (numbers[mid] < target) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }

    return -1;
}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <strong className="font-semibold text-stone-900">Loop invariant:</strong> If the target occurs in the array, at least one occurrence remains inside the current search interval <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">[low, high]</code>.
          </p>
          <ul className="list-disc list-outside pl-5 space-y-2 text-stone-700 my-3 text-sm leading-relaxed">
            <li>If the middle value equals the target, the algorithm returns a valid position.</li>
            <li>If the middle value is smaller, every position at or before <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">mid</code> can be excluded.</li>
            <li>If the middle value is larger, every position at or after <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">mid</code> can be excluded.</li>
          </ul>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            The search interval becomes smaller on every iteration. Eventually, either the target is found or the interval becomes empty.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            If the interval is empty, the invariant tells us that no occurrence remains to be found. Returning <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">-1</code> is therefore correct.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            The sorted-array precondition is essential. Without it, excluding half of the elements is not justified.
          </p>
          <hr className="my-8 border-t border-[#e7e3da]" />
        </div>
      ),
    },
    {
      id: 2,
      title: "Part 2: Time and Space Complexity",
      category: "Part 2 · Resource Scaling",
      anchor: "part-2",
      render: () => (
        <div className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-black text-stone-900 mt-10 mb-4 pb-2 border-b border-[#e7e3da] tracking-tight">
            4. Time Complexity
          </h2>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <strong className="font-semibold text-stone-900">Time complexity</strong> describes how an algorithm's execution work grows as its input size increases.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            It is usually expressed as a function of input size <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">n</code>.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Examples:
          </p>
          <div className="overflow-x-auto my-4 rounded-xl border border-[#e7e3da] shadow-2xs">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-stone-900 border-b border-[#e7e3da] font-semibold">
                <tr>
                  <th className="px-4 py-3">Algorithm pattern</th>
                  <th className="px-4 py-3">Time complexity</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">A fixed number of operations</td>
                  <td className="px-4 py-2.5 text-stone-700">O(1)</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">One traversal of an array</td>
                  <td className="px-4 py-2.5 text-stone-700">O(n)</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Repeatedly divide the input by two</td>
                  <td className="px-4 py-2.5 text-stone-700">O(log n)</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Two complete nested traversals</td>
                  <td className="px-4 py-2.5 text-stone-700">O(n²)</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Generate every subset</td>
                  <td className="px-4 py-2.5 text-stone-700">O(2ⁿ)</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Time complexity does not directly tell us the exact number of seconds an algorithm needs.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            An algorithm that takes <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">O(n)</code> time may be faster than another <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">O(n)</code> algorithm because of differences in constants, implementation, hardware, and input characteristics.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            However, asymptotic complexity helps us understand how each algorithm scales.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            4.1 Constant number of operations
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public static int getFirst(int[] numbers) {
    return numbers[0];
}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            The method performs a fixed number of operations, regardless of whether the array contains 10, 1,000, or 1,000,000 elements.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Time complexity: <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">O(1)</code>.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            4.2 One traversal
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public static void printNumbers(int[] numbers) {
    for (int number : numbers) {
        System.out.println(number);
    }
}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            The loop processes each element once.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            For <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">n</code> elements, the number of iterations is <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">n</code>.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Time complexity: <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">O(n)</code>.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            4.3 Two independent traversals
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`for (int i = 0; i < n; i++) {
    processFirst(i);
}

for (int j = 0; j < n; j++) {
    processSecond(j);
}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            The first loop performs <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">n</code> iterations, and the second performs another <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">n</code>.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Total work is approximately <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">2n</code>.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Time complexity: <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">O(n)</code>, not <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">O(n²)</code>.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            4.4 Space complexity
          </h3>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <strong className="font-semibold text-stone-900">Space complexity</strong> measures how the memory requirement of an algorithm grows with input size.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            It can include:
          </p>
          <ul className="list-disc list-outside pl-5 space-y-2 text-stone-700 my-3 text-sm leading-relaxed">
            <li>Memory occupied by input.</li>
            <li>Additional arrays or collections.</li>
            <li>Temporary variables.</li>
            <li>Recursive call-stack frames.</li>
            <li>Objects and other data structures created during execution.</li>
          </ul>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            In algorithm analysis, it is important to state whether a space figure includes the input itself or only additional memory.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            This leads to the distinction between total space and auxiliary space, explained later.
          </p>
          <hr className="my-8 border-t border-[#e7e3da]" />
        </div>
      ),
    },
    {
      id: 3,
      title: "Part 3: Asymptotic Analysis & Math Bounds (O, Ω, Θ)",
      category: "Part 3 · Asymptotic Notations",
      anchor: "part-3",
      render: () => (
        <div className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-black text-stone-900 mt-10 mb-4 pb-2 border-b border-[#e7e3da] tracking-tight">
            5. What Is Asymptotic Analysis?
          </h2>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Asymptotic analysis studies the growth of an algorithm's resource requirements as input size becomes large.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Instead of measuring the exact execution time for a small input, we focus on how the algorithm behaves as <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">n</code> increases.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Consider two algorithms:
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Algorithm A:
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">T(n) = 5n + 20</code>
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Algorithm B:
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">T(n) = 2n² + 3n + 10</code>
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            For small inputs, their actual performance depends on the constants and implementation. As the input grows, the quadratic term becomes increasingly important.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Asymptotic analysis focuses on the dominant growth term.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Therefore:
          </p>
          <ul className="list-disc list-outside pl-5 space-y-2 text-stone-700 my-3 text-sm leading-relaxed">
            <li>Algorithm A has linear growth: <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">Θ(n)</code>.</li>
            <li>Algorithm B has quadratic growth: <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">Θ(n²)</code>.</li>
          </ul>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            5.1 Removing constants
          </h3>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            For asymptotic growth, constant multipliers do not change the complexity class.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Examples:
          </p>
          <ul className="list-disc list-outside pl-5 space-y-2 text-stone-700 my-3 text-sm leading-relaxed">
            <li><code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">O(5n)</code> becomes <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">O(n)</code>.</li>
            <li><code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">O(1000n)</code> becomes <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">O(n)</code>.</li>
            <li><code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">O(7n²)</code> becomes <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">O(n²)</code>.</li>
          </ul>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            5.2 Removing lower-order terms
          </h3>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            The highest-growth term dominates as the input becomes large.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Examples:
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">T(n) = 3n² + 5n + 10</code>
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            The dominant term is <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">n²</code>.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Therefore:
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">T(n) = Θ(n²)</code>.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Another example:
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">T(n) = 8n log n + 20n + 50</code>
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            The dominant term is <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">n log n</code>.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Therefore:
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">T(n) = Θ(n log n)</code>.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            5.3 Why asymptotic analysis matters
          </h3>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            It helps you:
          </p>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">1.</span>
            <div className="flex-1">Compare different algorithms independently of specific hardware.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">2.</span>
            <div className="flex-1">Predict performance when data becomes larger.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">3.</span>
            <div className="flex-1">Identify solutions that will not scale.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">4.</span>
            <div className="flex-1">Select appropriate algorithms and data structures.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">5.</span>
            <div className="flex-1">Understand performance trade-offs before implementation.</div>
          </div>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            It is a theoretical model, not a replacement for practical benchmarking. Both analysis and measurement are useful in software engineering.
          </p>
          <hr className="my-8 border-t border-[#e7e3da]" />
          <h2 className="text-xl sm:text-2xl font-black text-stone-900 mt-10 mb-4 pb-2 border-b border-[#e7e3da] tracking-tight">
            6. Big-O Notation — O
          </h2>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Big-O notation describes an <strong className="font-semibold text-stone-900">asymptotic upper bound</strong> on a function's growth.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Informally, it says that the function does not grow faster than a constant multiple of a comparison function once the input is sufficiently large.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Formally, for non-negative functions <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">f(n)</code> and <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">g(n)</code>, we say:
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">f(n) = O(g(n))</code>
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            when there exist positive constants <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">c</code> and <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">n₀</code> such that:
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">0 ≤ f(n) ≤ c × g(n)</code> for all <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">n ≥ n₀</code>.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Here:
          </p>
          <ul className="list-disc list-outside pl-5 space-y-2 text-stone-700 my-3 text-sm leading-relaxed">
            <li><code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">f(n)</code> is the function being analyzed.</li>
            <li><code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">g(n)</code> is the comparison growth function.</li>
            <li><code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">c</code> is a positive constant.</li>
            <li><code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">n₀</code> is the point beyond which the bound must hold.</li>
          </ul>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            6.1 Example
          </h3>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Suppose:
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">f(n) = 3n + 10</code>
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            We want to show that it is <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">O(n)</code>.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            For every <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">n ≥ 1</code>:
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">3n + 10 ≤ 13n</code>
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            We can choose:
          </p>
          <ul className="list-disc list-outside pl-5 space-y-2 text-stone-700 my-3 text-sm leading-relaxed">
            <li><code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">c = 13</code></li>
            <li><code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">n₀ = 1</code></li>
          </ul>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Therefore:
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">3n + 10 = O(n)</code>.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            6.2 Another example
          </h3>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Suppose:
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">f(n) = 4n² + 7n + 5</code>
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            For <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">n ≥ 1</code>, we have:
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">4n² + 7n + 5 ≤ 16n²</code>
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            We can choose <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">c = 16</code> and <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">n₀ = 1</code>.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Therefore:
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">f(n) = O(n²)</code>.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            6.3 Important point
          </h3>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Big-O is not automatically synonymous with worst-case complexity.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Big-O describes an upper bound. You can use Big-O to express a worst-case running-time bound, an average-case upper bound, or a bound on some other quantity.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Always identify which case or function you are analyzing.
          </p>
          <hr className="my-8 border-t border-[#e7e3da]" />
          <h2 className="text-xl sm:text-2xl font-black text-stone-900 mt-10 mb-4 pb-2 border-b border-[#e7e3da] tracking-tight">
            7. Big-Omega Notation — Ω
          </h2>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Big-Omega notation describes an <strong className="font-semibold text-stone-900">asymptotic lower bound</strong>.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Informally, it says that a function grows at least as quickly as a constant multiple of another function once the input is sufficiently large.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Formally:
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">f(n) = Ω(g(n))</code>
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            when there exist positive constants <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">c</code> and <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">n₀</code> such that:
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">0 ≤ c × g(n) ≤ f(n)</code> for all <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">n ≥ n₀</code>.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            7.1 Example
          </h3>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Suppose:
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">f(n) = 5n² + 10n + 3</code>
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            For <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">n ≥ 1</code>:
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">5n² ≤ 5n² + 10n + 3</code>
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Therefore:
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">f(n) = Ω(n²)</code>.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            The function is bounded below by a positive constant multiple of <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">n²</code>.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            7.2 Why Omega is useful
          </h3>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Omega notation helps describe:
          </p>
          <ul className="list-disc list-outside pl-5 space-y-2 text-stone-700 my-3 text-sm leading-relaxed">
            <li>Lower bounds on algorithmic running time.</li>
            <li>Minimum work required by a particular algorithm or problem under specified assumptions.</li>
            <li>Theoretical limits that algorithms cannot beat.</li>
          </ul>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            For example, any comparison-based sorting algorithm has a worst-case comparison lower bound of <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">Ω(n log n)</code>.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            7.3 Important distinction
          </h3>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Big-Omega does not automatically mean best-case complexity.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            It is a mathematical lower-bound notation. A best-case running-time function can be expressed using Omega, but the notation itself does not mean "best case."
          </p>
          <hr className="my-8 border-t border-[#e7e3da]" />
          <h2 className="text-xl sm:text-2xl font-black text-stone-900 mt-10 mb-4 pb-2 border-b border-[#e7e3da] tracking-tight">
            8. Big-Theta Notation — Θ
          </h2>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Big-Theta notation describes a <strong className="font-semibold text-stone-900">tight asymptotic bound</strong>.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            It means that the function is bounded both above and below by constant multiples of the comparison function.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Formally:
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">f(n) = Θ(g(n))</code>
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            when there are positive constants <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">c₁</code>, <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">c₂</code>, and <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">n₀</code> such that:
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">0 ≤ c₁g(n) ≤ f(n) ≤ c₂g(n)</code> for all <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">n ≥ n₀</code>.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            In other words, the two functions grow at the same asymptotic rate.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            8.1 Example
          </h3>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Suppose:
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">f(n) = 3n² + 5n + 2</code>
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            For <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">n ≥ 1</code>:
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">3n² ≤ f(n)</code>
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            and:
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">f(n) ≤ 10n²</code>
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            We can therefore choose:
          </p>
          <ul className="list-disc list-outside pl-5 space-y-2 text-stone-700 my-3 text-sm leading-relaxed">
            <li><code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">c₁ = 3</code></li>
            <li><code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">c₂ = 10</code></li>
            <li><code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">n₀ = 1</code></li>
          </ul>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Thus:
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">f(n) = Θ(n²)</code>.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            8.2 Relationship between the three notations
          </h3>
          <div className="overflow-x-auto my-4 rounded-xl border border-[#e7e3da] shadow-2xs">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-stone-900 border-b border-[#e7e3da] font-semibold">
                <tr>
                  <th className="px-4 py-3">Notation</th>
                  <th className="px-4 py-3">Meaning</th>
                  <th className="px-4 py-3">Interpretation</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">O(g(n))</td>
                  <td className="px-4 py-2.5 text-stone-700">Upper bound</td>
                  <td className="px-4 py-2.5 text-stone-700">Grows no faster than a constant multiple of g(n) eventually</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Ω(g(n))</td>
                  <td className="px-4 py-2.5 text-stone-700">Lower bound</td>
                  <td className="px-4 py-2.5 text-stone-700">Grows at least as fast as a constant multiple of g(n) eventually</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Θ(g(n))</td>
                  <td className="px-4 py-2.5 text-stone-700">Tight bound</td>
                  <td className="px-4 py-2.5 text-stone-700">Has the same asymptotic growth rate as g(n)</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            If a function is <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">Θ(n²)</code>, then it is also both <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">O(n²)</code> and <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">Ω(n²)</code>.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            8.3 A useful mental model
          </h3>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Consider a function that grows quadratically.
          </p>
          <ul className="list-disc list-outside pl-5 space-y-2 text-stone-700 my-3 text-sm leading-relaxed">
            <li>Big-O can say its growth is at most quadratic.</li>
            <li>Big-Omega can say its growth is at least quadratic.</li>
            <li>Big-Theta can say its growth is tightly quadratic.</li>
          </ul>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Do not treat these symbols as three names for the same thing.
          </p>
          <hr className="my-8 border-t border-[#e7e3da]" />
        </div>
      ),
    },
    {
      id: 4,
      title: "Part 4: Best, Average, and Worst Cases",
      category: "Part 4 · Case Distributions",
      anchor: "part-4",
      render: () => (
        <div className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-black text-stone-900 mt-10 mb-4 pb-2 border-b border-[#e7e3da] tracking-tight">
            9. Best-Case Analysis
          </h2>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Best-case analysis describes the minimum amount of work an algorithm performs for an input of a given size, considering the allowed inputs.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            Example: linear search
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public static int linearSearch(int[] numbers, int target) {
    for (int i = 0; i < numbers.length; i++) {
        if (numbers[i] == target) {
            return i;
        }
    }

    return -1;
}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Suppose:
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">numbers = [10, 20, 30, 40, 50]</code>
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Searching for <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">10</code> requires only one comparison.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Best-case time complexity: <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">Θ(1)</code>.
          </p>
          <h2 className="text-xl sm:text-2xl font-black text-stone-900 mt-10 mb-4 pb-2 border-b border-[#e7e3da] tracking-tight">
            10. Worst-Case Analysis
          </h2>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Worst-case analysis describes the maximum amount of work for any valid input of a given size.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            For the same linear search method, searching for <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">50</code> requires five comparisons.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Searching for a value that does not exist also requires examining every element.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Worst-case time complexity: <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">Θ(n)</code>.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Worst-case analysis is especially useful when performance guarantees are important.
          </p>
          <h2 className="text-xl sm:text-2xl font-black text-stone-900 mt-10 mb-4 pb-2 border-b border-[#e7e3da] tracking-tight">
            11. Average-Case Analysis
          </h2>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Average-case analysis describes the expected amount of work under a specified probability distribution of inputs.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Suppose the target is guaranteed to exist and is equally likely to occupy any of the five positions.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            The possible number of comparisons is:
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">1, 2, 3, 4, 5</code>
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            The average number is:
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">(1 + 2 + 3 + 4 + 5) / 5 = 3</code>
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            For an array of <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">n</code> elements, the average number of comparisons under this assumption is:
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">(n + 1) / 2</code>
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Therefore, average-case complexity is <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">Θ(n)</code>.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            The probability assumptions matter. If the target is sometimes absent, or positions are not equally likely, the expected work may differ.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            11.1 Comparison
          </h3>
          <div className="overflow-x-auto my-4 rounded-xl border border-[#e7e3da] shadow-2xs">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-stone-900 border-b border-[#e7e3da] font-semibold">
                <tr>
                  <th className="px-4 py-3">Case</th>
                  <th className="px-4 py-3">Linear search</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Best</td>
                  <td className="px-4 py-2.5 text-stone-700">Θ(1)</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Average, target uniformly placed and present</td>
                  <td className="px-4 py-2.5 text-stone-700">Θ(n)</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Worst</td>
                  <td className="px-4 py-2.5 text-stone-700">Θ(n)</td>
                </tr>
              </tbody>
            </table>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            11.2 Quick sort case analysis
          </h3>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Quick sort partitions an array around a pivot.
          </p>
          <ul className="list-disc list-outside pl-5 space-y-2 text-stone-700 my-3 text-sm leading-relaxed">
            <li><strong className="font-semibold text-stone-900">Best case:</strong> Partitions are consistently balanced; time is <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">Θ(n log n)</code>.</li>
            <li><strong className="font-semibold text-stone-900">Average case:</strong> Under typical randomized or suitable pivot assumptions, expected time is <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">Θ(n log n)</code>.</li>
            <li><strong className="font-semibold text-stone-900">Worst case:</strong> Partitions repeatedly have sizes zero and <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">n - 1</code>; time is <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">Θ(n²)</code>.</li>
          </ul>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            This illustrates why identifying the analyzed case and assumptions is important.
          </p>
          <hr className="my-8 border-t border-[#e7e3da]" />
        </div>
      ),
    },
    {
      id: 5,
      title: "Part 5: Common Complexity Classes (O(1) to O(n!))",
      category: "Part 5 · Growth Class Hierarchy",
      anchor: "part-5",
      render: () => (
        <div className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-black text-stone-900 mt-10 mb-4 pb-2 border-b border-[#e7e3da] tracking-tight">
            12. Constant Time — O(1)
          </h2>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            An operation has constant time complexity when its work does not grow with input size.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Example:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public static int getElement(int[] numbers, int index) {
    return numbers[index];
}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Accessing an array element by index takes constant time under the standard RAM model.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Other examples:
          </p>
          <ul className="list-disc list-outside pl-5 space-y-2 text-stone-700 my-3 text-sm leading-relaxed">
            <li>Assigning an integer.</li>
            <li>Comparing two fixed-size integers.</li>
            <li>Reading an array element at a known index.</li>
            <li>Swapping two variables.</li>
          </ul>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            An <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">O(1)</code> operation does not necessarily take exactly one machine instruction. It means the operation count remains bounded independently of <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">n</code>.
          </p>
          <h2 className="text-xl sm:text-2xl font-black text-stone-900 mt-10 mb-4 pb-2 border-b border-[#e7e3da] tracking-tight">
            13. Logarithmic Time — O(log n)
          </h2>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Logarithmic complexity occurs when the input size is repeatedly reduced by a constant factor.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Binary search is the standard example.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Suppose an array contains 16 sorted elements.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Each comparison approximately halves the remaining search interval:
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">16 → 8 → 4 → 2 → 1</code>
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            After a small number of steps, the target is found or the interval becomes empty.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            More generally, after <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">k</code> halvings:
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">n / 2ᵏ ≈ 1</code>
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Therefore:
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">k ≈ log₂ n</code>
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Binary search takes <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">O(log n)</code> time.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            Java example: binary search
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public static int binarySearch(int[] numbers, int target) {
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
}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Time complexity: <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">O(log n)</code>.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Auxiliary space: <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">O(1)</code>.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Logarithms with different constant bases belong to the same asymptotic class.
          </p>
          <h2 className="text-xl sm:text-2xl font-black text-stone-900 mt-10 mb-4 pb-2 border-b border-[#e7e3da] tracking-tight">
            14. Linear Time — O(n)
          </h2>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            An algorithm has linear time complexity when its work grows proportionally to the input size.
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public static int calculateSum(int[] numbers) {
    int sum = 0;

    for (int number : numbers) {
        sum += number;
    }

    return sum;
}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            For each additional array element, the algorithm performs a fixed amount of additional work.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Time complexity: <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">O(n)</code>.
          </p>
          <h2 className="text-xl sm:text-2xl font-black text-stone-900 mt-10 mb-4 pb-2 border-b border-[#e7e3da] tracking-tight">
            15. Linearithmic Time — O(n log n)
          </h2>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            This complexity appears frequently in efficient sorting and divide-and-conquer algorithms.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Examples include:
          </p>
          <ul className="list-disc list-outside pl-5 space-y-2 text-stone-700 my-3 text-sm leading-relaxed">
            <li>Merge sort.</li>
            <li>Heap sort.</li>
            <li>Typical average-case quick sort.</li>
          </ul>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Merge sort divides an array into two halves, recursively sorts the halves, and merges the results.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            The recursion has approximately <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">log₂ n</code> levels, and each level processes a total of <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">n</code> elements.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Therefore:
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">O(n) × O(log n) = O(n log n)</code>.
          </p>
          <h2 className="text-xl sm:text-2xl font-black text-stone-900 mt-10 mb-4 pb-2 border-b border-[#e7e3da] tracking-tight">
            16. Quadratic Time — O(n²)
          </h2>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Quadratic complexity commonly appears when each element is compared with many other elements.
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public static void printAllPairs(int[] numbers) {
    for (int i = 0; i < numbers.length; i++) {
        for (int j = 0; j < numbers.length; j++) {
            System.out.println(
                numbers[i] + ", " + numbers[j]
            );
        }
    }
}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            The outer loop executes <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">n</code> times.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            For every outer iteration, the inner loop executes <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">n</code> times.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Total iterations:
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">n × n = n²</code>
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Time complexity: <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">O(n²)</code>.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Some simple sorting algorithms, such as bubble sort and selection sort, have quadratic worst-case time.
          </p>
          <h2 className="text-xl sm:text-2xl font-black text-stone-900 mt-10 mb-4 pb-2 border-b border-[#e7e3da] tracking-tight">
            17. Exponential Time — O(2ⁿ)
          </h2>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Exponential complexity occurs when work grows by a constant factor for each additional input element.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Generating every subset of a set is a common example.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            For a set containing <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">n</code> elements, each element has two choices:
          </p>
          <ul className="list-disc list-outside pl-5 space-y-2 text-stone-700 my-3 text-sm leading-relaxed">
            <li>Include it.</li>
            <li>Exclude it.</li>
          </ul>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Therefore, the number of subsets is:
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">2ⁿ</code>
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Java example:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public static void generateSubsets(
    int[] numbers,
    int index,
    StringBuilder current
) {
    if (index == numbers.length) {
        System.out.println(current);
        return;
    }

    // Exclude the current element.
    generateSubsets(numbers, index + 1, current);

    // Include the current element.
    current.append(numbers[index]).append(" ");

    generateSubsets(numbers, index + 1, current);

    // Restore the previous state.
    current.setLength(
        current.length() - (numbers[index] + " ").length()
    );
}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            This implementation demonstrates the branching structure, although for production code a list of selected elements is generally a more appropriate representation than a string.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            There are <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">2ⁿ</code> subsets to produce. If printing a subset requires additional work proportional to its size, the total output work must also be considered.
          </p>
          <h2 className="text-xl sm:text-2xl font-black text-stone-900 mt-10 mb-4 pb-2 border-b border-[#e7e3da] tracking-tight">
            18. Factorial Time — O(n!)
          </h2>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Some problems require considering every possible ordering of <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">n</code> distinct elements.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            There are:
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">n × (n - 1) × (n - 2) × ... × 1 = n!</code>
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            possible permutations.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            This can lead to factorial-time algorithms.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Examples:
          </p>
          <ul className="list-disc list-outside pl-5 space-y-2 text-stone-700 my-3 text-sm leading-relaxed">
            <li>Brute-force generation of all permutations.</li>
            <li>Brute-force search over every ordering in a small optimization problem.</li>
            <li>Certain exhaustive backtracking solutions.</li>
          </ul>
          <h2 className="text-xl sm:text-2xl font-black text-stone-900 mt-10 mb-4 pb-2 border-b border-[#e7e3da] tracking-tight">
            19. Growth comparison
          </h2>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            The following table shows common complexity classes in increasing order of asymptotic growth.
          </p>
          <div className="overflow-x-auto my-4 rounded-xl border border-[#e7e3da] shadow-2xs">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-stone-900 border-b border-[#e7e3da] font-semibold">
                <tr>
                  <th className="px-4 py-3">Complexity</th>
                  <th className="px-4 py-3">Name</th>
                  <th className="px-4 py-3">Typical example</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">O(1)</td>
                  <td className="px-4 py-2.5 text-stone-700">Constant</td>
                  <td className="px-4 py-2.5 text-stone-700">Array index access</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">O(log n)</td>
                  <td className="px-4 py-2.5 text-stone-700">Logarithmic</td>
                  <td className="px-4 py-2.5 text-stone-700">Binary search</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">O(n)</td>
                  <td className="px-4 py-2.5 text-stone-700">Linear</td>
                  <td className="px-4 py-2.5 text-stone-700">Array traversal</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">O(n log n)</td>
                  <td className="px-4 py-2.5 text-stone-700">Linearithmic</td>
                  <td className="px-4 py-2.5 text-stone-700">Merge sort</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">O(n²)</td>
                  <td className="px-4 py-2.5 text-stone-700">Quadratic</td>
                  <td className="px-4 py-2.5 text-stone-700">Simple nested-loop comparisons</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">O(n³)</td>
                  <td className="px-4 py-2.5 text-stone-700">Cubic</td>
                  <td className="px-4 py-2.5 text-stone-700">Three nested full loops</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">O(2ⁿ)</td>
                  <td className="px-4 py-2.5 text-stone-700">Exponential</td>
                  <td className="px-4 py-2.5 text-stone-700">Enumerating subsets</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">O(n!)</td>
                  <td className="px-4 py-2.5 text-stone-700">Factorial</td>
                  <td className="px-4 py-2.5 text-stone-700">Enumerating all permutations</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            As <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">n</code> becomes large, higher-growth complexity classes generally become much more expensive.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Remember that real performance also depends on constant factors, memory behavior, implementation quality, and input characteristics.
          </p>
          <hr className="my-8 border-t border-[#e7e3da]" />
        </div>
      ),
    },
    {
      id: 6,
      title: "Part 6: Nested Loop Analysis",
      category: "Part 6 · Loop Iteration Arithmetic",
      anchor: "part-6",
      render: () => (
        <div className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-black text-stone-900 mt-10 mb-4 pb-2 border-b border-[#e7e3da] tracking-tight">
            20. How to Analyze Nested Loops
          </h2>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Nested loops are a major source of complexity-analysis mistakes.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            The correct approach is to count how many times each loop executes, including how its iteration count depends on the outer loop.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            20.1 Two independent loops
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`for (int i = 0; i < n; i++) {
    System.out.println(i);
}

for (int j = 0; j < n; j++) {
    System.out.println(j);
}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Work:
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">n + n = 2n</code>
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Complexity: <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">O(n)</code>.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            The loops are sequential, not nested. Their costs are added.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            20.2 Two full nested loops
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`for (int i = 0; i < n; i++) {
    for (int j = 0; j < n; j++) {
        System.out.println(i + " " + j);
    }
}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Work:
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">n × n = n²</code>
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Complexity: <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">O(n²)</code>.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            20.3 Three nested full loops
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`for (int i = 0; i < n; i++) {
    for (int j = 0; j < n; j++) {
        for (int k = 0; k < n; k++) {
            System.out.println(i + j + k);
        }
    }
}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Work:
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">n × n × n = n³</code>
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Complexity: <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">O(n³)</code>.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            20.4 Dependent inner loop
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`for (int i = 0; i < n; i++) {
    for (int j = 0; j <= i; j++) {
        System.out.println(i + " " + j);
    }
}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            The inner loop executes:
          </p>
          <ul className="list-disc list-outside pl-5 space-y-2 text-stone-700 my-3 text-sm leading-relaxed">
            <li>1 time when <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">i = 0</code>.</li>
            <li>2 times when <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">i = 1</code>.</li>
            <li>3 times when <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">i = 2</code>.</li>
            <li>...</li>
            <li><code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">n</code> times when <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">i = n - 1</code>.</li>
          </ul>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Total work:
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">1 + 2 + 3 + ... + n</code>
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Using the arithmetic-series formula:
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">n(n + 1) / 2</code>
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            The dominant term is <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">n²</code>.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Complexity: <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">Θ(n²)</code>.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            20.5 Logarithmic inner loop
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`for (int i = 0; i < n; i++) {
    for (int j = 1; j < n; j *= 2) {
        System.out.println(i + " " + j);
    }
}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            The outer loop executes <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">n</code> times.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            The inner loop takes approximately <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">log₂ n</code> iterations because <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">j</code> doubles every time.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Total work:
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">n × log₂ n</code>
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Complexity: <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">O(n log n)</code>.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            20.6 Two logarithmic loops
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`for (int i = 1; i < n; i *= 2) {
    for (int j = 1; j < n; j *= 2) {
        System.out.println(i + " " + j);
    }
}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Both loops execute <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">O(log n)</code> times.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Total complexity:
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">O(log n × log n) = O((log n)²)</code>.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            20.7 A loop that halves its input
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`int n = numbers.length;

while (n > 1) {
    n /= 2;
}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            The variable is divided by two on every iteration.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Complexity: <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">O(log n)</code>.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            20.8 Analysis checklist for loops
          </h3>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            When analyzing a loop, ask:
          </p>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">1.</span>
            <div className="flex-1">What is the initial value?</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">2.</span>
            <div className="flex-1">How is the loop variable updated?</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">3.</span>
            <div className="flex-1">What is the termination condition?</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">4.</span>
            <div className="flex-1">How many iterations occur?</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">5.</span>
            <div className="flex-1">Does the inner loop depend on the outer loop?</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">6.</span>
            <div className="flex-1">Is the loop variable multiplied, divided, incremented, or decremented?</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">7.</span>
            <div className="flex-1">Are the loops nested or sequential?</div>
          </div>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Do not assume that every nested loop produces <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">O(n²)</code>. A loop that repeatedly halves its variable is logarithmic, even when nested inside a linear loop.
          </p>
          <hr className="my-8 border-t border-[#e7e3da]" />
        </div>
      ),
    },
    {
      id: 7,
      title: "Part 7: Recursion Complexity",
      category: "Part 7 · Recursion & Call Stacks",
      anchor: "part-7",
      render: () => (
        <div className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-black text-stone-900 mt-10 mb-4 pb-2 border-b border-[#e7e3da] tracking-tight">
            21. What Is Recursive Complexity?
          </h2>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            A recursive algorithm solves a problem by calling itself on smaller or otherwise simpler subproblems.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            To analyze recursion, consider:
          </p>
          <ul className="list-disc list-outside pl-5 space-y-2 text-stone-700 my-3 text-sm leading-relaxed">
            <li>The number of recursive calls.</li>
            <li>The size of each subproblem.</li>
            <li>The non-recursive work performed by each call.</li>
            <li>The depth of the recursion.</li>
            <li>The memory used by the call stack.</li>
          </ul>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            A recurrence relation is often used to express recursive running time.
          </p>
          <h2 className="text-xl sm:text-2xl font-black text-stone-900 mt-10 mb-4 pb-2 border-b border-[#e7e3da] tracking-tight">
            22. Linear Recursion
          </h2>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Consider factorial:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public static long factorial(int n) {
    if (n < 0) {
        throw new IllegalArgumentException(
            "n must be non-negative"
        );
    }

    if (n <= 1) {
        return 1;
    }

    return n * factorial(n - 1);
}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Each call performs constant work and creates one recursive call with input size <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">n - 1</code>.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            The recurrence is:
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">T(n) = T(n - 1) + Θ(1)</code>
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            There are approximately <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">n</code> recursive calls.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Time complexity: <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">Θ(n)</code>.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Auxiliary space: <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">Θ(n)</code> for the recursive call stack.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            The iterative factorial implementation uses constant auxiliary space.
          </p>
          <h2 className="text-xl sm:text-2xl font-black text-stone-900 mt-10 mb-4 pb-2 border-b border-[#e7e3da] tracking-tight">
            23. Recursive Binary Search
          </h2>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            A recursive binary search processes only one half of the current search interval.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Its recurrence is:
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">T(n) = T(n / 2) + Θ(1)</code>
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            The input size is halved after every recursive call.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Time complexity: <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">Θ(log n)</code>.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Auxiliary space: <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">Θ(log n)</code> because of recursive call-stack frames.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            An iterative binary search performs the same search without recursive stack growth, using <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">O(1)</code> auxiliary space.
          </p>
          <h2 className="text-xl sm:text-2xl font-black text-stone-900 mt-10 mb-4 pb-2 border-b border-[#e7e3da] tracking-tight">
            24. Naive Fibonacci Recursion
          </h2>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Consider:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public static long fibonacci(int n) {
    if (n < 0) {
        throw new IllegalArgumentException(
            "n must be non-negative"
        );
    }

    if (n <= 1) {
        return n;
    }

    return fibonacci(n - 1) + fibonacci(n - 2);
}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            The function makes two recursive calls for most non-base inputs.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Its recurrence is:
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">T(n) = T(n - 1) + T(n - 2) + Θ(1)</code>
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            This causes repeated computation of the same Fibonacci values.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            A simple upper bound is <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">O(2ⁿ)</code>. A tighter asymptotic bound is <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">Θ(φⁿ)</code>, where <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">φ = (1 + √5) / 2</code>.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            The important issue is that the algorithm repeatedly solves overlapping subproblems.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            24.1 Optimizing Fibonacci with memoization
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`import java.util.Arrays;

public class FibonacciMemo {

    public static long fibonacci(int n) {
        if (n < 0) {
            throw new IllegalArgumentException(
                "n must be non-negative"
            );
        }

        long[] memo = new long[n + 1];
        Arrays.fill(memo, -1);

        return calculate(n, memo);
    }

    private static long calculate(int n, long[] memo) {
        if (n <= 1) {
            return n;
        }

        if (memo[n] != -1) {
            return memo[n];
        }

        memo[n] =
            calculate(n - 1, memo) +
            calculate(n - 2, memo);

        return memo[n];
    }

    public static void main(String[] args) {
        System.out.println(fibonacci(10));
    }
}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            There are only <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">n + 1</code> possible input states.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Each state is calculated at most once, and later requests reuse the stored answer.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Time complexity: <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">O(n)</code>.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Auxiliary space:
          </p>
          <ul className="list-disc list-outside pl-5 space-y-2 text-stone-700 my-3 text-sm leading-relaxed">
            <li>Memoization array: <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">O(n)</code>.</li>
            <li>Maximum recursion depth: <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">O(n)</code>.</li>
            <li>Total auxiliary space: <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">O(n)</code>.</li>
          </ul>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            This is a classic example of trading extra memory for reduced computation.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            For sufficiently large <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">n</code>, <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">long</code> can overflow. Complexity analysis does not automatically guarantee that the numeric type can represent the mathematical result.
          </p>
          <hr className="my-8 border-t border-[#e7e3da]" />
        </div>
      ),
    },
    {
      id: 8,
      title: "Part 8: Recurrence Relations",
      category: "Part 8 · Formulations & Expansions",
      anchor: "part-8",
      render: () => (
        <div className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-black text-stone-900 mt-10 mb-4 pb-2 border-b border-[#e7e3da] tracking-tight">
            25. What Is a Recurrence Relation?
          </h2>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            A recurrence relation describes a function using one or more smaller instances of that function.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            In algorithm analysis, it often represents the running time of a recursive algorithm.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            For example:
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">T(n) = T(n - 1) + 1</code>
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            says that a problem of size <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">n</code> requires the work for a smaller problem of size <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">n - 1</code>, plus one unit of additional work.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            A recurrence usually needs base cases to be fully defined.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            25.1 Recurrence for factorial
          </h3>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">T(n) = T(n - 1) + Θ(1)</code>
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Base case:
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">T(1) = Θ(1)</code>
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Expanding:
          </p>
          <ul className="list-disc list-outside pl-5 space-y-2 text-stone-700 my-3 text-sm leading-relaxed">
            <li><code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">T(n) = T(n - 1) + 1</code></li>
            <li><code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">T(n) = T(n - 2) + 2</code></li>
            <li><code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">T(n) = T(n - 3) + 3</code></li>
            <li>...</li>
            <li><code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">T(n) = T(1) + (n - 1)</code></li>
          </ul>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Therefore:
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">T(n) = Θ(n)</code>.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            25.2 Binary search recurrence
          </h3>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">T(n) = T(n / 2) + Θ(1)</code>
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Each recursive call reduces the problem size by half.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            After <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">k</code> calls:
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">n / 2ᵏ = 1</code>
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Therefore:
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">k = log₂ n</code>
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Time complexity: <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">Θ(log n)</code>.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            25.3 Merge sort recurrence
          </h3>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Merge sort divides the array into two halves, sorts each half, and merges the results.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            The two recursive calls each process approximately <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">n / 2</code> elements.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Merging requires linear work.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Recurrence:
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">T(n) = 2T(n / 2) + Θ(n)</code>
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            The result is:
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">Θ(n log n)</code>.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            25.4 Quicksort worst-case recurrence
          </h3>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            When the pivot repeatedly creates an empty partition and a partition of size <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">n - 1</code>, the recurrence is:
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">T(n) = T(n - 1) + Θ(n)</code>
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Expanding the work gives:
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">n + (n - 1) + (n - 2) + ... + 1</code>
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            This is an arithmetic series.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Worst-case time complexity: <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">Θ(n²)</code>.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            25.5 Common recurrences
          </h3>
          <div className="overflow-x-auto my-4 rounded-xl border border-[#e7e3da] shadow-2xs">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-stone-900 border-b border-[#e7e3da] font-semibold">
                <tr>
                  <th className="px-4 py-3">Algorithm pattern</th>
                  <th className="px-4 py-3">Recurrence</th>
                  <th className="px-4 py-3">Time complexity</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Factorial-style recursion</td>
                  <td className="px-4 py-2.5 text-stone-700">T(n) = T(n − 1) + Θ(1)</td>
                  <td className="px-4 py-2.5 text-stone-700">Θ(n)</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Binary search</td>
                  <td className="px-4 py-2.5 text-stone-700">T(n) = T(n / 2) + Θ(1)</td>
                  <td className="px-4 py-2.5 text-stone-700">Θ(log n)</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Merge sort</td>
                  <td className="px-4 py-2.5 text-stone-700">T(n) = 2T(n / 2) + Θ(n)</td>
                  <td className="px-4 py-2.5 text-stone-700">Θ(n log n)</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Two recursive halves, constant extra work</td>
                  <td className="px-4 py-2.5 text-stone-700">T(n) = 2T(n / 2) + Θ(1)</td>
                  <td className="px-4 py-2.5 text-stone-700">Θ(n)</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Quicksort worst case</td>
                  <td className="px-4 py-2.5 text-stone-700">T(n) = T(n − 1) + Θ(n)</td>
                  <td className="px-4 py-2.5 text-stone-700">Θ(n²)</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Naive Fibonacci</td>
                  <td className="px-4 py-2.5 text-stone-700">T(n) = T(n − 1) + T(n − 2) + Θ(1)</td>
                  <td className="px-4 py-2.5 text-stone-700">Θ(φⁿ)</td>
                </tr>
              </tbody>
            </table>
          </div>
          <hr className="my-8 border-t border-[#e7e3da]" />
        </div>
      ),
    },
    {
      id: 9,
      title: "Part 9: Master Theorem Introduction",
      category: "Part 9 · Divide & Conquer Recurrences",
      anchor: "part-9",
      render: () => (
        <div className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-black text-stone-900 mt-10 mb-4 pb-2 border-b border-[#e7e3da] tracking-tight">
            26. What Is the Master Theorem?
          </h2>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            The Master Theorem is a method for solving a particular family of divide-and-conquer recurrence relations.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            It applies to recurrences of the form:
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">T(n) = aT(n / b) + f(n)</code>
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            where:
          </p>
          <ul className="list-disc list-outside pl-5 space-y-2 text-stone-700 my-3 text-sm leading-relaxed">
            <li><code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">a ≥ 1</code> is the number of recursive subproblems.</li>
            <li><code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">b &gt; 1</code> is the factor by which the input size is reduced.</li>
            <li><code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">f(n)</code> is the non-recursive work performed outside the recursive calls.</li>
          </ul>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            First calculate:
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">n^(log_b a)</code>
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            This value represents the main comparison growth function for the recursive part.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            The Master Theorem has three main cases.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            Case 1 — Recursive work dominates
          </h3>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            If:
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">f(n) = O(n^(log_b a - ε))</code>
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            for some <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">ε &gt; 0</code>, then:
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">T(n) = Θ(n^(log_b a))</code>.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            The non-recursive work is polynomially smaller than the recursive contribution.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            Case 2 — Balanced work
          </h3>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            If:
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">f(n) = Θ(n^(log_b a) × log^k n)</code>
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            for <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">k ≥ 0</code>, then:
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">T(n) = Θ(n^(log_b a) × log^(k + 1) n)</code>.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            The non-recursive work is asymptotically comparable to the recursive contribution, up to a logarithmic factor.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            Case 3 — Non-recursive work dominates
          </h3>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            If:
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">f(n) = Ω(n^(log_b a + ε))</code>
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            for some <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">ε &gt; 0</code>, and the regularity condition is satisfied, then:
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">T(n) = Θ(f(n))</code>.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            The regularity condition requires that, for some constant <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">c &lt; 1</code> and sufficiently large <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">n</code>:
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">a × f(n / b) ≤ c × f(n)</code>.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            This condition prevents the recursive contribution from growing in a way that invalidates the result.
          </p>
          <h2 className="text-xl sm:text-2xl font-black text-stone-900 mt-10 mb-4 pb-2 border-b border-[#e7e3da] tracking-tight">
            27. Master Theorem Worked Examples
          </h2>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            Example 1: Merge sort
          </h3>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Recurrence:
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">T(n) = 2T(n / 2) + n</code>
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Identify:
          </p>
          <ul className="list-disc list-outside pl-5 space-y-2 text-stone-700 my-3 text-sm leading-relaxed">
            <li><code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">a = 2</code></li>
            <li><code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">b = 2</code></li>
            <li><code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">f(n) = n</code></li>
          </ul>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Calculate:
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">n^(log₂ 2) = n</code>
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Therefore:
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">f(n) = Θ(n)</code>
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            This is Case 2 with <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">k = 0</code>.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Result:
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">T(n) = Θ(n log n)</code>.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            Example 2: Binary divide-and-conquer with two subproblems
          </h3>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Recurrence:
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">T(n) = 2T(n / 2) + 1</code>
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Identify:
          </p>
          <ul className="list-disc list-outside pl-5 space-y-2 text-stone-700 my-3 text-sm leading-relaxed">
            <li><code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">a = 2</code></li>
            <li><code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">b = 2</code></li>
            <li><code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">f(n) = 1</code></li>
          </ul>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Calculate:
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">n^(log₂ 2) = n</code>
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Since constant work is polynomially smaller than <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">n</code>, this is Case 1.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Result:
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">T(n) = Θ(n)</code>.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            Example 3: One recursive half with constant extra work
          </h3>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Recurrence:
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">T(n) = T(n / 2) + 1</code>
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Identify:
          </p>
          <ul className="list-disc list-outside pl-5 space-y-2 text-stone-700 my-3 text-sm leading-relaxed">
            <li><code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">a = 1</code></li>
            <li><code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">b = 2</code></li>
            <li><code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">f(n) = 1</code></li>
          </ul>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Calculate:
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">n^(log₂ 1) = 1</code>
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            The non-recursive work is <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">Θ(1)</code>, so this is Case 2 with <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">k = 0</code>.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Result:
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">T(n) = Θ(log n)</code>.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            Example 4: Quadratic non-recursive work
          </h3>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Recurrence:
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">T(n) = 2T(n / 2) + n²</code>
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Identify:
          </p>
          <ul className="list-disc list-outside pl-5 space-y-2 text-stone-700 my-3 text-sm leading-relaxed">
            <li><code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">a = 2</code></li>
            <li><code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">b = 2</code></li>
            <li><code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">f(n) = n²</code></li>
          </ul>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Calculate:
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">n^(log₂ 2) = n</code>
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Since <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">n²</code> is polynomially larger than <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">n</code>, Case 3 applies, provided the regularity condition holds. It does hold here.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Result:
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">T(n) = Θ(n²)</code>.
          </p>
          <h2 className="text-xl sm:text-2xl font-black text-stone-900 mt-10 mb-4 pb-2 border-b border-[#e7e3da] tracking-tight">
            28. When the Master Theorem Does Not Apply
          </h2>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            The Master Theorem is not a universal recurrence solver.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            For example:
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">T(n) = T(n - 1) + n</code>
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            does not have the standard form <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">aT(n / b) + f(n)</code>.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Its input reduces by subtraction rather than by a fixed factor.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            We can solve it by expansion:
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">T(n) = n + (n - 1) + ... + 1</code>
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Therefore:
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">T(n) = Θ(n²)</code>.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Other recurrences, particularly those with uneven subproblem sizes or unusual non-recursive costs, may require substitution, a recursion tree, or another method.
          </p>
          <hr className="my-8 border-t border-[#e7e3da]" />
        </div>
      ),
    },
    {
      id: 10,
      title: "Part 10: Amortized Analysis",
      category: "Part 10 · Aggregate, Accounting & Potential",
      anchor: "part-10",
      render: () => (
        <div className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-black text-stone-900 mt-10 mb-4 pb-2 border-b border-[#e7e3da] tracking-tight">
            29. What Is Amortized Analysis?
          </h2>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Amortized analysis studies the cost of a sequence of operations rather than analyzing each operation independently.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Some operations may be expensive, but they happen infrequently enough that the average cost per operation across the sequence remains small.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Amortized analysis provides a deterministic guarantee for a sequence of operations, under the assumptions of the data structure.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            It is different from average-case analysis, which generally relies on a probability distribution over inputs.
          </p>
          <h2 className="text-xl sm:text-2xl font-black text-stone-900 mt-10 mb-4 pb-2 border-b border-[#e7e3da] tracking-tight">
            30. Dynamic Array Example
          </h2>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            A dynamic array automatically increases its capacity when it becomes full.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Imagine an array with capacity 1:
          </p>
          <ul className="list-disc list-outside pl-5 space-y-2 text-stone-700 my-3 text-sm leading-relaxed">
            <li>Append the first value: no resize.</li>
            <li>Append the second value: allocate capacity 2 and copy the existing value.</li>
            <li>Append the third value: allocate capacity 4 and copy the two existing values.</li>
            <li>Append the fifth value: allocate capacity 8 and copy the four existing values.</li>
          </ul>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            A resize is expensive because it requires allocating a larger array and copying existing elements.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            30.1 Individual operation costs
          </h3>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            For an append operation:
          </p>
          <ul className="list-disc list-outside pl-5 space-y-2 text-stone-700 my-3 text-sm leading-relaxed">
            <li>Without resizing: <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">O(1)</code>.</li>
            <li>With resizing: <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">O(n)</code> to copy the existing elements.</li>
          </ul>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            A single append can therefore be expensive.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            But how expensive are many appends?
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            30.2 Aggregate analysis
          </h3>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Suppose capacity doubles whenever the array becomes full.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            For <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">m</code> appended elements, the number of copied elements across all resizing operations is bounded by a geometric sum:
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">1 + 2 + 4 + 8 + ... &lt; 2m</code>
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            There are also <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">m</code> ordinary insertions.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            The total work is therefore bounded by a constant multiple of <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">m</code>.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            For <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">m</code> appends:
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">Total cost = O(m)</code>
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Amortized cost per append:
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">O(m) / m = O(1)</code>
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Therefore, append has <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">O(1)</code> amortized time when capacity grows geometrically.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            This does not mean every append is constant time. A resizing append can still take linear time.
          </p>
          <h2 className="text-xl sm:text-2xl font-black text-stone-900 mt-10 mb-4 pb-2 border-b border-[#e7e3da] tracking-tight">
            31. Amortized Analysis Techniques
          </h2>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            There are three widely used techniques.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            31.1 Aggregate method
          </h3>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Calculate the total cost of a sequence of <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">m</code> operations, then divide by <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">m</code>.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Dynamic-array doubling is a standard example.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            31.2 Accounting method
          </h3>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Assign an amortized charge to each operation.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Some cheap operations pay more than their immediate cost. The extra amount is stored as credit and can pay for future expensive operations.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            For example, an ordinary array append can be charged a small constant amount. Extra credit accumulated across appends pays for occasional copying during resizing.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            The total stored credit must never become negative.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            31.3 Potential method
          </h3>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Define a potential function representing stored credit or prepaid work in the data structure.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            For operation <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">i</code>:
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">Amortized cost = Actual cost + Change in potential</code>
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            The total amortized cost across a sequence accounts for the increase or decrease in potential.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            The purpose of the potential function is to distribute the cost of expensive operations across cheaper ones.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            31.4 Average-case versus amortized analysis
          </h3>
          <div className="overflow-x-auto my-4 rounded-xl border border-[#e7e3da] shadow-2xs">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-stone-900 border-b border-[#e7e3da] font-semibold">
                <tr>
                  <th className="px-4 py-3">Average-case analysis</th>
                  <th className="px-4 py-3">Amortized analysis</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Uses a probability distribution over inputs</td>
                  <td className="px-4 py-2.5 text-stone-700">Analyzes a sequence of operations</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Depends on stated probability assumptions</td>
                  <td className="px-4 py-2.5 text-stone-700">Does not require random input assumptions</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Describes expected cost</td>
                  <td className="px-4 py-2.5 text-stone-700">Describes guaranteed average cost over the sequence</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Example: expected quicksort behavior under random pivot assumptions</td>
                  <td className="px-4 py-2.5 text-stone-700">Example: dynamic-array append</td>
                </tr>
              </tbody>
            </table>
          </div>
          <hr className="my-8 border-t border-[#e7e3da]" />
        </div>
      ),
    },
    {
      id: 11,
      title: "Part 11: Auxiliary Space",
      category: "Part 11 · Auxiliary Memory vs Total Space",
      anchor: "part-11",
      render: () => (
        <div className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-black text-stone-900 mt-10 mb-4 pb-2 border-b border-[#e7e3da] tracking-tight">
            32. What Is Auxiliary Space?
          </h2>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Auxiliary space is the additional memory an algorithm uses while executing, excluding the input storage itself.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            It can include:
          </p>
          <ul className="list-disc list-outside pl-5 space-y-2 text-stone-700 my-3 text-sm leading-relaxed">
            <li>Temporary variables.</li>
            <li>Additional arrays.</li>
            <li>Hash maps and hash sets.</li>
            <li>Temporary lists.</li>
            <li>Recursion stack frames.</li>
            <li>Other data structures created during execution.</li>
          </ul>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            32.1 Constant auxiliary space
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public static int findMaximum(int[] numbers) {
    int maximum = numbers[0];

    for (int i = 1; i < numbers.length; i++) {
        if (numbers[i] > maximum) {
            maximum = numbers[i];
        }
    }

    return maximum;
}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            The algorithm uses a fixed number of additional variables.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Auxiliary space: <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">O(1)</code>.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            32.2 Linear auxiliary space
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public static int[] copyArray(int[] numbers) {
    int[] copy = new int[numbers.length];

    for (int i = 0; i < numbers.length; i++) {
        copy[i] = numbers[i];
    }

    return copy;
}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            The additional array contains <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">n</code> elements.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Auxiliary space: <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">O(n)</code>.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            32.3 Recursive stack space
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public static int sum(int n) {
    if (n <= 0) {
        return 0;
    }

    return n + sum(n - 1);
}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            The method creates approximately <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">n</code> active recursive frames before reaching the base case.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Auxiliary stack space: <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">O(n)</code>.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            The mathematical result is a single integer, but the recursive implementation still consumes memory for its call stack.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            32.4 Total space versus auxiliary space
          </h3>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Suppose a method receives an array of <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">n</code> elements and creates another array of <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">n</code> elements.
          </p>
          <ul className="list-disc list-outside pl-5 space-y-2 text-stone-700 my-3 text-sm leading-relaxed">
            <li>Input storage: <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">O(n)</code>.</li>
            <li>Additional array: <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">O(n)</code>.</li>
            <li>Auxiliary space: <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">O(n)</code>.</li>
            <li>Combined input and additional array storage: <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">O(n)</code>.</li>
          </ul>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Always state which convention you are using when comparing space complexities.
          </p>
          <hr className="my-8 border-t border-[#e7e3da]" />
        </div>
      ),
    },
    {
      id: 12,
      title: "Part 12: Time-Space Trade-Offs",
      category: "Part 12 · Memory-Compute Optimization",
      anchor: "part-12",
      render: () => (
        <div className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-black text-stone-900 mt-10 mb-4 pb-2 border-b border-[#e7e3da] tracking-tight">
            33. What Is a Time-Space Trade-Off?
          </h2>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            A time-space trade-off occurs when an algorithm uses additional memory to reduce running time, or uses less memory at the cost of additional computation.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            There is often no single solution that minimizes both resources under every constraint.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            33.1 Example: duplicate detection
          </h3>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <strong className="font-semibold text-stone-900">Approach A — Nested loops</strong>
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public static boolean containsDuplicateSlow(int[] numbers) {
    for (int i = 0; i < numbers.length; i++) {
        for (int j = i + 1; j < numbers.length; j++) {
            if (numbers[i] == numbers[j]) {
                return true;
            }
        }
    }

    return false;
}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Time complexity: <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">O(n²)</code>.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Auxiliary space: <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">O(1)</code>.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            This method avoids an additional collection but may perform many comparisons.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <strong className="font-semibold text-stone-900">Approach B — Hash set</strong>
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`import java.util.HashSet;
import java.util.Set;

public static boolean containsDuplicateFast(int[] numbers) {
    Set<Integer> seen = new HashSet<>();

    for (int number : numbers) {
        if (!seen.add(number)) {
            return true;
        }
    }

    return false;
}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Expected time complexity: <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">O(n)</code> under standard hashing assumptions.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Auxiliary space: <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">O(n)</code> in the worst case for stored elements.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            This algorithm uses additional memory to reduce repeated comparisons.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            The exact worst-case behavior of hash-table operations depends on implementation, hashing, and collision handling, so distinguish expected performance from a strict worst-case guarantee.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            33.2 Memoization
          </h3>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Without memoization, recursive Fibonacci performs repeated calculations.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            With memoization:
          </p>
          <ul className="list-disc list-outside pl-5 space-y-2 text-stone-700 my-3 text-sm leading-relaxed">
            <li>Previously calculated results are stored.</li>
            <li>Repeated subproblems reuse stored values.</li>
            <li>Time complexity improves to <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">O(n)</code>.</li>
            <li>Additional memory is <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">O(n)</code>.</li>
          </ul>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            This is a time-space trade-off.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            33.3 Lookup tables
          </h3>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            A program can precompute results and store them in a table.
          </p>
          <ul className="list-disc list-outside pl-5 space-y-2 text-stone-700 my-3 text-sm leading-relaxed">
            <li>More memory is used.</li>
            <li>Later lookups become faster.</li>
            <li>The table may require an initial preprocessing step.</li>
          </ul>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            This approach appears in dynamic programming, compilers, database systems, and many performance-sensitive applications.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            33.4 In-place algorithms
          </h3>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            An in-place algorithm aims to transform or process its input using little additional memory.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Examples include:
          </p>
          <ul className="list-disc list-outside pl-5 space-y-2 text-stone-700 my-3 text-sm leading-relaxed">
            <li>Reversing an array using two pointers.</li>
            <li>Selection sort.</li>
            <li>Heap sort on an array.</li>
          </ul>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            In-place does not necessarily mean the algorithm uses exactly zero extra memory. It may still require a fixed number of variables or a small call stack.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            33.5 Choosing the right trade-off
          </h3>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Consider:
          </p>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">1.</span>
            <div className="flex-1">Is memory limited?</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">2.</span>
            <div className="flex-1">How large can the input become?</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">3.</span>
            <div className="flex-1">Is execution time more important than memory?</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">4.</span>
            <div className="flex-1">Will the same data be processed repeatedly?</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">5.</span>
            <div className="flex-1">Does the algorithm need predictable worst-case performance?</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">6.</span>
            <div className="flex-1">Can the result be recomputed instead of stored?</div>
          </div>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            The best algorithm depends on system requirements, not just the smallest Big-O expression.
          </p>
          <hr className="my-8 border-t border-[#e7e3da]" />
        </div>
      ),
    },
    {
      id: 13,
      title: "Part 13: Complexity Comparison of Algorithms",
      category: "Part 13 · Searching & Sorting Benchmark",
      anchor: "part-13",
      render: () => (
        <div className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-black text-stone-900 mt-10 mb-4 pb-2 border-b border-[#e7e3da] tracking-tight">
            34. Searching Algorithms
          </h2>
          <div className="overflow-x-auto my-4 rounded-xl border border-[#e7e3da] shadow-2xs">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-stone-900 border-b border-[#e7e3da] font-semibold">
                <tr>
                  <th className="px-4 py-3">Algorithm</th>
                  <th className="px-4 py-3">Best time</th>
                  <th className="px-4 py-3">Average time</th>
                  <th className="px-4 py-3">Worst time</th>
                  <th className="px-4 py-3">Auxiliary space</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Linear search</td>
                  <td className="px-4 py-2.5 text-stone-700">O(1)</td>
                  <td className="px-4 py-2.5 text-stone-700">O(n)</td>
                  <td className="px-4 py-2.5 text-stone-700">O(n)</td>
                  <td className="px-4 py-2.5 text-stone-700">O(1)</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Binary search, iterative</td>
                  <td className="px-4 py-2.5 text-stone-700">O(1)</td>
                  <td className="px-4 py-2.5 text-stone-700">O(log n)</td>
                  <td className="px-4 py-2.5 text-stone-700">O(log n)</td>
                  <td className="px-4 py-2.5 text-stone-700">O(1)</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Binary search, recursive</td>
                  <td className="px-4 py-2.5 text-stone-700">O(1)</td>
                  <td className="px-4 py-2.5 text-stone-700">O(log n)</td>
                  <td className="px-4 py-2.5 text-stone-700">O(log n)</td>
                  <td className="px-4 py-2.5 text-stone-700">O(log n) stack</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Binary search requires sorted input and efficient access to the middle element. Linear search does not require sorted data and can also be used with linked structures.
          </p>
          <h2 className="text-xl sm:text-2xl font-black text-stone-900 mt-10 mb-4 pb-2 border-b border-[#e7e3da] tracking-tight">
            35. Sorting Algorithms
          </h2>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            The following are typical theoretical bounds for standard versions of these algorithms.
          </p>
          <div className="overflow-x-auto my-4 rounded-xl border border-[#e7e3da] shadow-2xs">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-stone-900 border-b border-[#e7e3da] font-semibold">
                <tr>
                  <th className="px-4 py-3">Algorithm</th>
                  <th className="px-4 py-3">Best time</th>
                  <th className="px-4 py-3">Average time</th>
                  <th className="px-4 py-3">Worst time</th>
                  <th className="px-4 py-3">Auxiliary space</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Bubble sort, optimized</td>
                  <td className="px-4 py-2.5 text-stone-700">O(n)</td>
                  <td className="px-4 py-2.5 text-stone-700">O(n²)</td>
                  <td className="px-4 py-2.5 text-stone-700">O(n²)</td>
                  <td className="px-4 py-2.5 text-stone-700">O(1)</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Selection sort</td>
                  <td className="px-4 py-2.5 text-stone-700">O(n²)</td>
                  <td className="px-4 py-2.5 text-stone-700">O(n²)</td>
                  <td className="px-4 py-2.5 text-stone-700">O(n²)</td>
                  <td className="px-4 py-2.5 text-stone-700">O(1)</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Insertion sort</td>
                  <td className="px-4 py-2.5 text-stone-700">O(n)</td>
                  <td className="px-4 py-2.5 text-stone-700">O(n²)</td>
                  <td className="px-4 py-2.5 text-stone-700">O(n²)</td>
                  <td className="px-4 py-2.5 text-stone-700">O(1)</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Merge sort</td>
                  <td className="px-4 py-2.5 text-stone-700">O(n log n)</td>
                  <td className="px-4 py-2.5 text-stone-700">O(n log n)</td>
                  <td className="px-4 py-2.5 text-stone-700">O(n log n)</td>
                  <td className="px-4 py-2.5 text-stone-700">O(n)</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Quicksort</td>
                  <td className="px-4 py-2.5 text-stone-700">O(n log n)</td>
                  <td className="px-4 py-2.5 text-stone-700">O(n log n) expected</td>
                  <td className="px-4 py-2.5 text-stone-700">O(n²)</td>
                  <td className="px-4 py-2.5 text-stone-700">O(log n) expected stack; O(n) worst stack</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Heap sort</td>
                  <td className="px-4 py-2.5 text-stone-700">O(n log n)</td>
                  <td className="px-4 py-2.5 text-stone-700">O(n log n)</td>
                  <td className="px-4 py-2.5 text-stone-700">O(n log n)</td>
                  <td className="px-4 py-2.5 text-stone-700">O(1) auxiliary for a standard in-place array implementation</td>
                </tr>
              </tbody>
            </table>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            35.1 How to interpret the table
          </h3>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <strong className="font-semibold text-stone-900">Bubble sort:</strong> Repeatedly swaps adjacent out-of-order elements. An optimized version stops early if a full pass makes no swaps.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <strong className="font-semibold text-stone-900">Selection sort:</strong> Repeatedly selects the smallest remaining element. Its comparison count remains quadratic even if the input is already sorted.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <strong className="font-semibold text-stone-900">Insertion sort:</strong> Inserts each new element into its appropriate position in an already processed prefix. It is efficient on small or nearly sorted arrays.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <strong className="font-semibold text-stone-900">Merge sort:</strong> Uses divide and conquer. It offers guaranteed <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">O(n log n)</code> time but typically requires additional array storage for merging.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <strong className="font-semibold text-stone-900">Quicksort:</strong> Partitions around a pivot. It is usually fast in practice but can reach quadratic time with consistently poor partitions.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <strong className="font-semibold text-stone-900">Heap sort:</strong> Uses a heap to repeatedly extract the largest or smallest element. It provides <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">O(n log n)</code> time with constant auxiliary array space in a standard in-place implementation.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Specific library implementations may use different algorithms, optimizations, or fallback strategies.
          </p>
          <h2 className="text-xl sm:text-2xl font-black text-stone-900 mt-10 mb-4 pb-2 border-b border-[#e7e3da] tracking-tight">
            36. Algorithm Comparison Example: Choosing a Search Method
          </h2>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Suppose you have an array containing one million elements.
          </p>
          <ul className="list-disc list-outside pl-5 space-y-2 text-stone-700 my-3 text-sm leading-relaxed">
            <li>A linear search may inspect up to one million elements.</li>
            <li>Binary search requires about 20 halvings because <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">2²⁰ = 1,048,576</code>.</li>
          </ul>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            However, if the data is not sorted and only one search will be performed, sorting the data first may cost more than simply searching linearly.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            If many searches will be performed on the same data, sorting once and then using binary search may be worthwhile.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            This is a practical example of combining algorithm complexity with the broader workload.
          </p>
          <hr className="my-8 border-t border-[#e7e3da]" />
        </div>
      ),
    },
    {
      id: 14,
      title: "Part 14: Practical Complexity Analysis",
      category: "Part 14 · 7-Step Step-by-Step Methodology",
      anchor: "part-14",
      render: () => (
        <div className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-black text-stone-900 mt-10 mb-4 pb-2 border-b border-[#e7e3da] tracking-tight">
            37. A Step-by-Step Analysis Method
          </h2>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            When you encounter a new algorithm in an interview, assessment, or project, use this process.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            Step 1: Identify the input size
          </h3>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Decide what <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">n</code> represents.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Example: number of elements in an array.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            Step 2: Identify the operations that scale
          </h3>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Find loops, recursive calls, collection operations, and other input-dependent work.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            Step 3: Count iterations or recursive calls
          </h3>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Determine how many times the important operations execute.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            Step 4: Combine their costs
          </h3>
          <ul className="list-disc list-outside pl-5 space-y-2 text-stone-700 my-3 text-sm leading-relaxed">
            <li>Sequential operations: add their costs.</li>
            <li>Independent nested loops: multiply their iteration counts.</li>
            <li>Recursive calls: establish a recurrence.</li>
            <li>Conditional branches: analyze the relevant case.</li>
          </ul>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            Step 5: Simplify the function
          </h3>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Remove constant multipliers and lower-order terms when expressing asymptotic growth.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            Step 6: Analyze space separately
          </h3>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Count additional data structures, arrays, and recursive frames.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            Step 7: State your assumptions
          </h3>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Identify preconditions, case assumptions, and whether the result is expected or worst-case.
          </p>
          <hr className="my-8 border-t border-[#e7e3da]" />
        </div>
      ),
    },
    {
      id: 15,
      title: "Part 15: Worked Analysis Problems (Problems 1-7)",
      category: "Part 15 · Step-by-Step Practice Clinic",
      anchor: "part-15",
      render: () => (
        <div className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-black text-stone-900 mt-10 mb-4 pb-2 border-b border-[#e7e3da] tracking-tight">
            38. Problem 1: Analyze a Single Loop
          </h2>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`for (int i = 0; i < n; i++) {
    System.out.println(i);
}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            The loop executes <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">n</code> times.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Each iteration performs constant work.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Total work:
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">n × O(1)</code>
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <strong className="font-semibold text-stone-900">Answer: <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">O(n)</code> time.</strong>
          </p>
          <h2 className="text-xl sm:text-2xl font-black text-stone-900 mt-10 mb-4 pb-2 border-b border-[#e7e3da] tracking-tight">
            39. Problem 2: Analyze a Halving Loop
          </h2>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`int i = n;

while (i > 1) {
    i /= 2;
}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            The variable is divided by two each time.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            After <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">k</code> iterations:
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">n / 2ᵏ ≤ 1</code>
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Solving gives approximately <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">k = log₂ n</code>.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <strong className="font-semibold text-stone-900">Answer: <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">O(log n)</code> time.</strong>
          </p>
          <h2 className="text-xl sm:text-2xl font-black text-stone-900 mt-10 mb-4 pb-2 border-b border-[#e7e3da] tracking-tight">
            40. Problem 3: Analyze a Nested Loop
          </h2>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`for (int i = 0; i < n; i++) {
    for (int j = 0; j < n; j++) {
        System.out.println(i + j);
    }
}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            The outer loop runs <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">n</code> times.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            The inner loop runs <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">n</code> times for every outer iteration.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Total iterations:
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">n²</code>
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <strong className="font-semibold text-stone-900">Answer: <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">O(n²)</code> time.</strong>
          </p>
          <h2 className="text-xl sm:text-2xl font-black text-stone-900 mt-10 mb-4 pb-2 border-b border-[#e7e3da] tracking-tight">
            41. Problem 4: Analyze Mixed Loops
          </h2>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`for (int i = 0; i < n; i++) {
    System.out.println(i);
}

for (int j = 1; j < n; j *= 2) {
    System.out.println(j);
}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            First loop:
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">O(n)</code>
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Second loop:
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">O(log n)</code>
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Combined:
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">O(n + log n)</code>
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            The linear term dominates.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <strong className="font-semibold text-stone-900">Answer: <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">O(n)</code> time.</strong>
          </p>
          <h2 className="text-xl sm:text-2xl font-black text-stone-900 mt-10 mb-4 pb-2 border-b border-[#e7e3da] tracking-tight">
            42. Problem 5: Analyze a Nested Logarithmic Loop
          </h2>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`for (int i = 1; i < n; i *= 2) {
    for (int j = 1; j < n; j *= 2) {
        System.out.println(i + j);
    }
}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Outer loop:
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">O(log n)</code>
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Inner loop:
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">O(log n)</code>
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Combined:
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">O((log n)²)</code>.
          </p>
          <h2 className="text-xl sm:text-2xl font-black text-stone-900 mt-10 mb-4 pb-2 border-b border-[#e7e3da] tracking-tight">
            43. Problem 6: Analyze Recursion
          </h2>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public static void countDown(int n) {
    if (n <= 0) {
        return;
    }

    System.out.println(n);
    countDown(n - 1);
}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Every recursive call reduces the input by one and performs constant work.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Recurrence:
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">T(n) = T(n - 1) + O(1)</code>
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Time complexity: <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">O(n)</code>.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Auxiliary stack space: <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">O(n)</code>.
          </p>
          <h2 className="text-xl sm:text-2xl font-black text-stone-900 mt-10 mb-4 pb-2 border-b border-[#e7e3da] tracking-tight">
            44. Problem 7: Analyze a Hash-Set Solution
          </h2>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Set<Integer> values = new HashSet<>();

for (int number : numbers) {
    values.add(number);
}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            There are <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">n</code> loop iterations.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Under typical hashing assumptions, each insertion has expected constant time.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Expected total time: <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">O(n)</code>.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Auxiliary space: <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">O(n)</code>.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            A strict worst-case guarantee requires considering hash collisions and the collection implementation.
          </p>
          <hr className="my-8 border-t border-[#e7e3da]" />
        </div>
      ),
    },
    {
      id: 16,
      title: "Part 16: Common Complexity Analysis Mistakes",
      category: "Part 16 · 10 Diagnostic Pitfalls",
      anchor: "part-16",
      render: () => (
        <div className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-black text-stone-900 mt-10 mb-4 pb-2 border-b border-[#e7e3da] tracking-tight">
            45. Mistakes to Avoid
          </h2>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <strong className="font-semibold text-stone-900">Mistake 1: Assuming every nested loop is O(n²).</strong>
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Incorrect. An inner loop that doubles or halves its variable may be logarithmic.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <strong className="font-semibold text-stone-900">Mistake 2: Multiplying the complexity of sequential loops.</strong>
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Two sequential linear loops take <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">O(n + n) = O(n)</code>, not <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">O(n²)</code>.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <strong className="font-semibold text-stone-900">Mistake 3: Forgetting the recursion stack.</strong>
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            A recursive algorithm may use substantial memory even if it creates no additional arrays.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <strong className="font-semibold text-stone-900">Mistake 4: Confusing Big-O with exact running time.</strong>
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">O(n)</code> does not mean exactly <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">n</code> operations. It is an asymptotic upper bound.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <strong className="font-semibold text-stone-900">Mistake 5: Treating Omega as best-case notation.</strong>
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Omega is a lower-bound notation. Best case is a separate way of analyzing inputs.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <strong className="font-semibold text-stone-900">Mistake 6: Assuming average-case complexity without stating assumptions.</strong>
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Average-case analysis requires a probability model or distribution of inputs.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <strong className="font-semibold text-stone-900">Mistake 7: Ignoring output size.</strong>
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            If an algorithm generates every subset, merely producing the output requires work proportional to the number and size of the subsets.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <strong className="font-semibold text-stone-900">Mistake 8: Ignoring preprocessing costs.</strong>
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Binary search is logarithmic after the input is sorted. Sorting an initially unsorted input has its own cost.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <strong className="font-semibold text-stone-900">Mistake 9: Treating expected hash-table performance as an unconditional worst-case guarantee.</strong>
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            State the expected-time assumption when appropriate.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <strong className="font-semibold text-stone-900">Mistake 10: Mixing total space and auxiliary space.</strong>
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Always state whether input storage is included.
          </p>
          <hr className="my-8 border-t border-[#e7e3da]" />
        </div>
      ),
    },
    {
      id: 17,
      title: "Part 17: Laboratory Exercises (Labs 1-4)",
      category: "Part 17 · Hands-on Benchmarks & Counters",
      anchor: "part-17",
      render: () => (
        <div className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-black text-stone-900 mt-10 mb-4 pb-2 border-b border-[#e7e3da] tracking-tight">
            46. Lab 1: Build a Complexity Demonstrator
          </h2>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <strong className="font-semibold text-stone-900">Objective:</strong> Implement methods with different growth rates and observe how their operation counts change.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Requirements:
          </p>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">1.</span>
            <div className="flex-1">Write one method that performs constant work.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">2.</span>
            <div className="flex-1">Write one method that traverses an array.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">3.</span>
            <div className="flex-1">Write one method with two nested loops.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">4.</span>
            <div className="flex-1">Write one method that repeatedly halves a variable.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">5.</span>
            <div className="flex-1">Count operations explicitly instead of relying only on execution time.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">6.</span>
            <div className="flex-1">Compare counts for input sizes 10, 100, and 1,000.</div>
          </div>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Example:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public class ComplexityLab {

    public static long linearOperations(int n) {
        long operations = 0;

        for (int i = 0; i < n; i++) {
            operations++;
        }

        return operations;
    }

    public static long quadraticOperations(int n) {
        long operations = 0;

        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++) {
                operations++;
            }
        }

        return operations;
    }

    public static long logarithmicOperations(int n) {
        long operations = 0;

        for (int i = 1; i < n; i *= 2) {
            operations++;
        }

        return operations;
    }

    public static void main(String[] args) {
        int n = 100;

        System.out.println("Linear: " +
            linearOperations(n));

        System.out.println("Quadratic: " +
            quadraticOperations(n));

        System.out.println("Logarithmic: " +
            logarithmicOperations(n));
    }
}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Expected operation counts for <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">n = 100</code>:
          </p>
          <ul className="list-disc list-outside pl-5 space-y-2 text-stone-700 my-3 text-sm leading-relaxed">
            <li>Linear: 100.</li>
            <li>Quadratic: 10,000.</li>
            <li>Logarithmic: 7.</li>
          </ul>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <strong className="font-semibold text-stone-900">Important implementation note:</strong> In a production-quality complexity counter, avoid integer overflow in expressions such as <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">i *= 2</code> for very large limits. The laboratory uses small inputs to demonstrate growth.
          </p>
          <h2 className="text-xl sm:text-2xl font-black text-stone-900 mt-10 mb-4 pb-2 border-b border-[#e7e3da] tracking-tight">
            47. Lab 2: Compare Duplicate Detection
          </h2>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Implement two methods:
          </p>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">1.</span>
            <div className="flex-1">Nested-loop duplicate detection.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">2.</span>
            <div className="flex-1">HashSet-based duplicate detection.</div>
          </div>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            For each method:
          </p>
          <ul className="list-disc list-outside pl-5 space-y-2 text-stone-700 my-3 text-sm leading-relaxed">
            <li>Test an array with no duplicates.</li>
            <li>Test an array with duplicates near the beginning.</li>
            <li>Test an array with duplicates near the end.</li>
            <li>Test arrays of increasing size.</li>
            <li>Explain the time and space complexities.</li>
            <li>Compare measured execution time separately from theoretical complexity.</li>
          </ul>
          <h2 className="text-xl sm:text-2xl font-black text-stone-900 mt-10 mb-4 pb-2 border-b border-[#e7e3da] tracking-tight">
            48. Lab 3: Compare Recursive and Iterative Factorial
          </h2>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Implement factorial using:
          </p>
          <ul className="list-disc list-outside pl-5 space-y-2 text-stone-700 my-3 text-sm leading-relaxed">
            <li>A recursive method.</li>
            <li>An iterative method.</li>
          </ul>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Compare:
          </p>
          <ul className="list-disc list-outside pl-5 space-y-2 text-stone-700 my-3 text-sm leading-relaxed">
            <li>Number of operations.</li>
            <li>Call-stack memory.</li>
            <li>Auxiliary space.</li>
            <li>Behavior for negative inputs.</li>
            <li>Numeric overflow behavior.</li>
          </ul>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Explain why both implementations are <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">O(n)</code> time but have different auxiliary-space requirements.
          </p>
          <h2 className="text-xl sm:text-2xl font-black text-stone-900 mt-10 mb-4 pb-2 border-b border-[#e7e3da] tracking-tight">
            49. Lab 4: Solve Recurrences
          </h2>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Solve these recurrence relations:
          </p>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">1.</span>
            <div className="flex-1"><code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">T(n) = T(n - 1) + 1</code></div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">2.</span>
            <div className="flex-1"><code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">T(n) = T(n / 2) + 1</code></div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">3.</span>
            <div className="flex-1"><code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">T(n) = 2T(n / 2) + n</code></div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">4.</span>
            <div className="flex-1"><code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">T(n) = 2T(n / 2) + 1</code></div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">5.</span>
            <div className="flex-1"><code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">T(n) = T(n - 1) + n</code></div>
          </div>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            For each recurrence:
          </p>
          <ul className="list-disc list-outside pl-5 space-y-2 text-stone-700 my-3 text-sm leading-relaxed">
            <li>Identify the recursive subproblem.</li>
            <li>Identify the non-recursive work.</li>
            <li>State whether the Master Theorem applies.</li>
            <li>Derive the time complexity.</li>
          </ul>
          <hr className="my-8 border-t border-[#e7e3da]" />
        </div>
      ),
    },
    {
      id: 18,
      title: "Part 18: Assignments (Projects 1-4)",
      category: "Part 18 · Independent Engineering Problems",
      anchor: "part-18",
      render: () => (
        <div className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-black text-stone-900 mt-10 mb-4 pb-2 border-b border-[#e7e3da] tracking-tight">
            50. Assignment 1: Complexity Classification
          </h2>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Determine the time complexity of each code fragment.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <strong className="font-semibold text-stone-900">A.</strong>
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`for (int i = 0; i < n; i++) {
    System.out.println(i);
}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <strong className="font-semibold text-stone-900">B.</strong>
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`for (int i = 0; i < n; i++) {
    for (int j = 0; j < n; j++) {
        System.out.println(i + j);
    }
}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <strong className="font-semibold text-stone-900">C.</strong>
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`for (int i = 1; i < n; i *= 2) {
    System.out.println(i);
}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <strong className="font-semibold text-stone-900">D.</strong>
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`for (int i = 0; i < n; i++) {
    for (int j = 1; j < n; j *= 2) {
        System.out.println(i + j);
    }
}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <strong className="font-semibold text-stone-900">E.</strong>
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`for (int i = 0; i < n; i++) {
    System.out.println(i);
}

for (int j = 0; j < n; j++) {
    System.out.println(j);
}`}</code>
            </pre>
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-stone-900 mt-10 mb-4 pb-2 border-b border-[#e7e3da] tracking-tight">
            51. Assignment 2: Build a Better Search
          </h2>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Write a Java program that:
          </p>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">1.</span>
            <div className="flex-1">Accepts a sorted integer array.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">2.</span>
            <div className="flex-1">Implements iterative binary search.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">3.</span>
            <div className="flex-1">Implements recursive binary search.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">4.</span>
            <div className="flex-1">Reports the index of the target or <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">-1</code>.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">5.</span>
            <div className="flex-1">Handles an empty array.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">6.</span>
            <div className="flex-1">Compares time and auxiliary space.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">7.</span>
            <div className="flex-1">Explains why the sorted-input condition is necessary.</div>
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-stone-900 mt-10 mb-4 pb-2 border-b border-[#e7e3da] tracking-tight">
            52. Assignment 3: Analyze a Recursive Algorithm
          </h2>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Write a recursive method that generates all subsets of an array.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Explain:
          </p>
          <ul className="list-disc list-outside pl-5 space-y-2 text-stone-700 my-3 text-sm leading-relaxed">
            <li>Why the number of subsets is <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">2ⁿ</code>.</li>
            <li>Why the recursion branches into two choices at each position.</li>
            <li>The recursion depth.</li>
            <li>The amount of memory needed to store the results.</li>
            <li>Why output-generation cost matters.</li>
          </ul>
          <h2 className="text-xl sm:text-2xl font-black text-stone-900 mt-10 mb-4 pb-2 border-b border-[#e7e3da] tracking-tight">
            53. Assignment 4: Design a Time-Space Trade-Off
          </h2>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Choose a problem, such as:
          </p>
          <ul className="list-disc list-outside pl-5 space-y-2 text-stone-700 my-3 text-sm leading-relaxed">
            <li>Detecting duplicate elements.</li>
            <li>Finding repeated words.</li>
            <li>Checking whether two strings are anagrams.</li>
            <li>Looking up student records by ID.</li>
          </ul>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Implement two solutions:
          </p>
          <ul className="list-disc list-outside pl-5 space-y-2 text-stone-700 my-3 text-sm leading-relaxed">
            <li>One that uses less additional memory.</li>
            <li>One that uses additional memory to reduce repeated computation.</li>
          </ul>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Compare the time and auxiliary-space requirements.
          </p>
          <hr className="my-8 border-t border-[#e7e3da]" />
        </div>
      ),
    },
    {
      id: 19,
      title: "Part 19: Knowledge Assessment (MCQ & Short Answer)",
      category: "Part 19 · Assessment & Code Tracing",
      anchor: "part-19",
      render: () => (
        <div className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-black text-stone-900 mt-10 mb-4 pb-2 border-b border-[#e7e3da] tracking-tight">
            54. Multiple-Choice Questions
          </h2>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <strong className="font-semibold text-stone-900">1. What does algorithmic time complexity describe?</strong>
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            A. Exact execution time in seconds
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            B. Growth of computational work as input size increases
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            C. Amount of source code
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            D. Number of Java classes
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <strong className="font-semibold text-stone-900">2. Which notation represents an asymptotic upper bound?</strong>
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            A. Big-O
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            B. Big-Omega
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            C. Big-Theta
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            D. None
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <strong className="font-semibold text-stone-900">3. Which notation represents a tight asymptotic bound?</strong>
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            A. Big-O
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            B. Big-Omega
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            C. Big-Theta
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            D. Big-Delta
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <strong className="font-semibold text-stone-900">4. What is the time complexity of binary search?</strong>
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            A. O(n²)
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            B. O(n)
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            C. O(log n)
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            D. O(2ⁿ)
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <strong className="font-semibold text-stone-900">5. What is the time complexity of two full nested loops, each executing n times?</strong>
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            A. O(n)
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            B. O(log n)
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            C. O(n²)
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            D. O(n log n)
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <strong className="font-semibold text-stone-900">6. What is the auxiliary stack space of a simple recursive factorial implementation?</strong>
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            A. O(1)
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            B. O(log n)
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            C. O(n)
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            D. O(n²)
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <strong className="font-semibold text-stone-900">7. Which algorithm commonly has O(n log n) worst-case time and O(n) auxiliary array space?</strong>
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            A. Linear search
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            B. Merge sort
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            C. Selection sort
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            D. Bubble sort
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <strong className="font-semibold text-stone-900">8. What does amortized analysis examine?</strong>
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            A. Only the fastest possible input
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            B. A sequence of operations and their combined cost
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            C. Only the memory required by recursion
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            D. The exact CPU time of one operation
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <strong className="font-semibold text-stone-900">9. Which algorithm commonly has exponential time when implemented naively?</strong>
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            A. Iterative linear search
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            B. Binary search
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            C. Naive recursive Fibonacci
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            D. Array index access
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <strong className="font-semibold text-stone-900">10. Which statement about Big-O is correct?</strong>
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            A. It always means worst-case complexity.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            B. It gives an asymptotic upper bound.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            C. It always gives the exact number of operations.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            D. It means constant time.
          </p>
          <h2 className="text-xl sm:text-2xl font-black text-stone-900 mt-10 mb-4 pb-2 border-b border-[#e7e3da] tracking-tight">
            55. Short-Answer Questions
          </h2>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">1.</span>
            <div className="flex-1">What is an algorithm?</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">2.</span>
            <div className="flex-1">What is algorithm correctness?</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">3.</span>
            <div className="flex-1">Explain the difference between partial correctness and termination.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">4.</span>
            <div className="flex-1">What is a loop invariant?</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">5.</span>
            <div className="flex-1">Explain time complexity.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">6.</span>
            <div className="flex-1">Explain auxiliary space.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">7.</span>
            <div className="flex-1">What is asymptotic analysis?</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">8.</span>
            <div className="flex-1">Differentiate Big-O, Big-Omega, and Big-Theta.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">9.</span>
            <div className="flex-1">What is the difference between best-case and average-case analysis?</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">10.</span>
            <div className="flex-1">Why does binary search require sorted input?</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">11.</span>
            <div className="flex-1">Explain the purpose of recurrence relations.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">12.</span>
            <div className="flex-1">What is the Master Theorem?</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">13.</span>
            <div className="flex-1">Differentiate average-case and amortized analysis.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">14.</span>
            <div className="flex-1">Explain a time-space trade-off with an example.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">15.</span>
            <div className="flex-1">Why can a recursive algorithm use more memory than an iterative implementation of the same logic?</div>
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-stone-900 mt-10 mb-4 pb-2 border-b border-[#e7e3da] tracking-tight">
            56. Output-Based Questions
          </h2>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <strong className="font-semibold text-stone-900">Question 1</strong>
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`int count = 0;

for (int i = 0; i < 5; i++) {
    count++;
}

System.out.println(count);`}</code>
            </pre>
          </div>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            What is printed, and what is the time complexity?
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <strong className="font-semibold text-stone-900">Question 2</strong>
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`int count = 0;

for (int i = 0; i < 4; i++) {
    for (int j = 0; j < 3; j++) {
        count++;
    }
}

System.out.println(count);`}</code>
            </pre>
          </div>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            What is printed, and what is the time complexity in terms of <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">n</code> when both loop limits are proportional to <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">n</code>?
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <strong className="font-semibold text-stone-900">Question 3</strong>
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`int count = 0;

for (int i = 1; i < 16; i *= 2) {
    count++;
}

System.out.println(count);`}</code>
            </pre>
          </div>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            What is printed, and what is the time complexity?
          </p>
          <hr className="my-8 border-t border-[#e7e3da]" />
        </div>
      ),
    },
    {
      id: 20,
      title: "Part 20: Answer Key & Comprehensive Explanations",
      category: "Part 20 · Diagnostic Verification & Solutions",
      anchor: "part-20",
      render: () => (
        <div className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-black text-stone-900 mt-10 mb-4 pb-2 border-b border-[#e7e3da] tracking-tight">
            57. Multiple-Choice Answers
          </h2>
          <div className="overflow-x-auto my-4 rounded-xl border border-[#e7e3da] shadow-2xs">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-stone-900 border-b border-[#e7e3da] font-semibold">
                <tr>
                  <th className="px-4 py-3">Question</th>
                  <th className="px-4 py-3">Answer</th>
                  <th className="px-4 py-3">Explanation</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">1</td>
                  <td className="px-4 py-2.5 text-stone-700">B</td>
                  <td className="px-4 py-2.5 text-stone-700">Time complexity describes growth in computational work.</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">2</td>
                  <td className="px-4 py-2.5 text-stone-700">A</td>
                  <td className="px-4 py-2.5 text-stone-700">Big-O is an asymptotic upper bound.</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">3</td>
                  <td className="px-4 py-2.5 text-stone-700">C</td>
                  <td className="px-4 py-2.5 text-stone-700">Big-Theta is a tight asymptotic bound.</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">4</td>
                  <td className="px-4 py-2.5 text-stone-700">C</td>
                  <td className="px-4 py-2.5 text-stone-700">Binary search halves the search interval.</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">5</td>
                  <td className="px-4 py-2.5 text-stone-700">C</td>
                  <td className="px-4 py-2.5 text-stone-700">Two full nested loops perform n × n work.</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">6</td>
                  <td className="px-4 py-2.5 text-stone-700">C</td>
                  <td className="px-4 py-2.5 text-stone-700">Factorial recursion has a linear call-stack depth.</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">7</td>
                  <td className="px-4 py-2.5 text-stone-700">B</td>
                  <td className="px-4 py-2.5 text-stone-700">Merge sort has O(n log n) time and O(n) auxiliary storage in its standard array implementation.</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">8</td>
                  <td className="px-4 py-2.5 text-stone-700">B</td>
                  <td className="px-4 py-2.5 text-stone-700">Amortized analysis examines a sequence of operations.</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">9</td>
                  <td className="px-4 py-2.5 text-stone-700">C</td>
                  <td className="px-4 py-2.5 text-stone-700">Naive recursive Fibonacci repeats overlapping calculations.</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">10</td>
                  <td className="px-4 py-2.5 text-stone-700">B</td>
                  <td className="px-4 py-2.5 text-stone-700">Big-O describes an asymptotic upper bound.</td>
                </tr>
              </tbody>
            </table>
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-stone-900 mt-10 mb-4 pb-2 border-b border-[#e7e3da] tracking-tight">
            58. Complexity Classification Answers
          </h2>
          <div className="overflow-x-auto my-4 rounded-xl border border-[#e7e3da] shadow-2xs">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-stone-900 border-b border-[#e7e3da] font-semibold">
                <tr>
                  <th className="px-4 py-3">Fragment</th>
                  <th className="px-4 py-3">Answer</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">A</td>
                  <td className="px-4 py-2.5 text-stone-700">O(n)</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">B</td>
                  <td className="px-4 py-2.5 text-stone-700">O(n²)</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">C</td>
                  <td className="px-4 py-2.5 text-stone-700">O(log n)</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">D</td>
                  <td className="px-4 py-2.5 text-stone-700">O(n log n)</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">E</td>
                  <td className="px-4 py-2.5 text-stone-700">O(n)</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            For E, the two loop costs are added: <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">O(n + n) = O(n)</code>.
          </p>
          <h2 className="text-xl sm:text-2xl font-black text-stone-900 mt-10 mb-4 pb-2 border-b border-[#e7e3da] tracking-tight">
            59. Output-Based Answers
          </h2>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <strong className="font-semibold text-stone-900">Question 1</strong>
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Output:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`5`}</code>
            </pre>
          </div>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Explanation: The loop executes five times.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Complexity: <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">O(n)</code> when the loop limit is generalized to <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">n</code>.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <strong className="font-semibold text-stone-900">Question 2</strong>
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Output:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`12`}</code>
            </pre>
          </div>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Explanation: The outer loop executes four times and the inner loop executes three times per outer iteration.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Total:
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">4 × 3 = 12</code>
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Complexity: <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">O(n²)</code> if both loop limits scale with <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">n</code>.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <strong className="font-semibold text-stone-900">Question 3</strong>
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
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
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            The values of <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">i</code> are:
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">1, 2, 4, 8</code>
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            The next value would be <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">16</code>, which fails the condition <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">i &lt; 16</code>.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Complexity: <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">O(log n)</code>.
          </p>
          <h2 className="text-xl sm:text-2xl font-black text-stone-900 mt-10 mb-4 pb-2 border-b border-[#e7e3da] tracking-tight">
            60. Recurrence Answer Key
          </h2>
          <div className="overflow-x-auto my-4 rounded-xl border border-[#e7e3da] shadow-2xs">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-stone-900 border-b border-[#e7e3da] font-semibold">
                <tr>
                  <th className="px-4 py-3">Recurrence</th>
                  <th className="px-4 py-3">Result</th>
                  <th className="px-4 py-3">Method</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">T(n) = T(n − 1) + 1</td>
                  <td className="px-4 py-2.5 text-stone-700">Θ(n)</td>
                  <td className="px-4 py-2.5 text-stone-700">Expansion</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">T(n) = T(n / 2) + 1</td>
                  <td className="px-4 py-2.5 text-stone-700">Θ(log n)</td>
                  <td className="px-4 py-2.5 text-stone-700">Master Theorem</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">T(n) = 2T(n / 2) + n</td>
                  <td className="px-4 py-2.5 text-stone-700">Θ(n log n)</td>
                  <td className="px-4 py-2.5 text-stone-700">Master Theorem</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">T(n) = 2T(n / 2) + 1</td>
                  <td className="px-4 py-2.5 text-stone-700">Θ(n)</td>
                  <td className="px-4 py-2.5 text-stone-700">Master Theorem</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">T(n) = T(n − 1) + n</td>
                  <td className="px-4 py-2.5 text-stone-700">Θ(n²)</td>
                  <td className="px-4 py-2.5 text-stone-700">Expansion and arithmetic series</td>
                </tr>
              </tbody>
            </table>
          </div>
          <hr className="my-8 border-t border-[#e7e3da]" />
        </div>
      ),
    },
    {
      id: 21,
      title: "Part 21: Mini-Project — Algorithm Performance Comparison",
      category: "Part 21 · Benchmark Suite Capstone",
      anchor: "part-21",
      render: () => (
        <div className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-black text-stone-900 mt-10 mb-4 pb-2 border-b border-[#e7e3da] tracking-tight">
            61. Algorithm Performance Comparison System
          </h2>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            Project objective
          </h3>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Build a Java console application that compares multiple approaches to solving the same problem.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            Features
          </h3>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <strong className="font-semibold text-stone-900">Feature 1 — Searching</strong>
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Implement:
          </p>
          <ul className="list-disc list-outside pl-5 space-y-2 text-stone-700 my-3 text-sm leading-relaxed">
            <li>Linear search.</li>
            <li>Binary search.</li>
          </ul>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <strong className="font-semibold text-stone-900">Feature 2 — Duplicate detection</strong>
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Implement:
          </p>
          <ul className="list-disc list-outside pl-5 space-y-2 text-stone-700 my-3 text-sm leading-relaxed">
            <li>Nested-loop detection.</li>
            <li>HashSet-based detection.</li>
          </ul>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <strong className="font-semibold text-stone-900">Feature 3 — Sorting</strong>
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Implement:
          </p>
          <ul className="list-disc list-outside pl-5 space-y-2 text-stone-700 my-3 text-sm leading-relaxed">
            <li>Insertion sort.</li>
            <li>Merge sort.</li>
          </ul>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <strong className="font-semibold text-stone-900">Feature 4 — Operation counting</strong>
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Count key operations such as:
          </p>
          <ul className="list-disc list-outside pl-5 space-y-2 text-stone-700 my-3 text-sm leading-relaxed">
            <li>Comparisons.</li>
            <li>Array accesses.</li>
            <li>Swaps.</li>
            <li>Insertions.</li>
            <li>Recursive calls.</li>
          </ul>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <strong className="font-semibold text-stone-900">Feature 5 — Results</strong>
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            For each algorithm, display:
          </p>
          <ul className="list-disc list-outside pl-5 space-y-2 text-stone-700 my-3 text-sm leading-relaxed">
            <li>Input size.</li>
            <li>Operation count.</li>
            <li>Measured execution time.</li>
            <li>Estimated time complexity.</li>
            <li>Auxiliary space complexity.</li>
            <li>A brief explanation of the results.</li>
          </ul>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            Suggested input sizes
          </h3>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Test with:
          </p>
          <ul className="list-disc list-outside pl-5 space-y-2 text-stone-700 my-3 text-sm leading-relaxed">
            <li>100 elements.</li>
            <li>1,000 elements.</li>
            <li>10,000 elements.</li>
            <li>50,000 elements, where appropriate.</li>
          </ul>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            Important experimental rules
          </h3>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">1.</span>
            <div className="flex-1">Use the same input data when comparing algorithms.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">2.</span>
            <div className="flex-1">Consider best-case, average-like, and worst-case input arrangements.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">3.</span>
            <div className="flex-1">Separate setup costs from the operation being measured.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">4.</span>
            <div className="flex-1">Avoid assuming that one timing result proves a complexity class.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">5.</span>
            <div className="flex-1">Use multiple repetitions for meaningful measurements.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">6.</span>
            <div className="flex-1">Do not let an expensive quadratic algorithm run on excessively large inputs without considering the workload.</div>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            Expected learning outcomes
          </h3>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            After completing the project, you should be able to explain why two correct algorithms can behave very differently when the input becomes larger.
          </p>
          <hr className="my-8 border-t border-[#e7e3da]" />
        </div>
      ),
    },
    {
      id: 22,
      title: "Part 22: Interview Preparation",
      category: "Part 22 · Top 10 High-Yield DSA Questions",
      anchor: "part-22",
      render: () => (
        <div className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-black text-stone-900 mt-10 mb-4 pb-2 border-b border-[#e7e3da] tracking-tight">
            62. Frequently Asked Interview Questions
          </h2>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <strong className="font-semibold text-stone-900">1. What is Big-O notation?</strong>
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Big-O expresses an asymptotic upper bound on the growth of an algorithm's resource usage.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <strong className="font-semibold text-stone-900">2. What is the difference between O(n) and O(log n)?</strong>
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            O(n) grows proportionally to input size. O(log n) grows proportionally to the logarithm of input size, commonly when an algorithm repeatedly divides the input by a fixed factor.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <strong className="font-semibold text-stone-900">3. Why is binary search faster than linear search on large sorted arrays?</strong>
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Binary search eliminates approximately half the remaining search interval per comparison, whereas linear search may inspect every element.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <strong className="font-semibold text-stone-900">4. Is O(1) always faster than O(n)?</strong>
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Not necessarily for every small input or implementation. Big-O describes asymptotic growth and does not account for all constant factors or hardware effects.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <strong className="font-semibold text-stone-900">5. Does Big-O always describe worst-case complexity?</strong>
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            No. It describes an upper bound on a function. That function may represent worst-case, average-case, or another explicitly specified measure.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <strong className="font-semibold text-stone-900">6. What is the difference between Big-O and Big-Theta?</strong>
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Big-O gives an asymptotic upper bound. Big-Theta gives a tight asymptotic bound.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <strong className="font-semibold text-stone-900">7. Why is recursive factorial O(n) space?</strong>
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Because it creates a chain of approximately n active recursive calls, each of which requires a stack frame.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <strong className="font-semibold text-stone-900">8. What is amortized complexity?</strong>
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            It describes the cost per operation across a sequence of operations, accounting for occasional expensive operations.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <strong className="font-semibold text-stone-900">9. Why does merge sort take O(n log n) time?</strong>
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            It has logarithmically many division levels, and each level performs linear total work while merging.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <strong className="font-semibold text-stone-900">10. When should you use a HashSet instead of nested loops?</strong>
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            When fast membership checks are valuable and the additional memory is acceptable. Under typical hashing assumptions, duplicate detection can improve from O(n²) to expected O(n).
          </p>
          <hr className="my-8 border-t border-[#e7e3da]" />
        </div>
      ),
    },
    {
      id: 23,
      title: "Part 23: Module Revision Sheet",
      category: "Part 23 · Fast Reference Formulas & Patterns",
      anchor: "part-23",
      render: () => (
        <div className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-black text-stone-900 mt-10 mb-4 pb-2 border-b border-[#e7e3da] tracking-tight">
            63. Essential Definitions
          </h2>
          <div className="overflow-x-auto my-4 rounded-xl border border-[#e7e3da] shadow-2xs">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-stone-900 border-b border-[#e7e3da] font-semibold">
                <tr>
                  <th className="px-4 py-3">Concept</th>
                  <th className="px-4 py-3">Meaning</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Algorithm</td>
                  <td className="px-4 py-2.5 text-stone-700">Finite, well-defined procedure for solving a problem</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Correctness</td>
                  <td className="px-4 py-2.5 text-stone-700">Produces the required result for all valid inputs</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Time complexity</td>
                  <td className="px-4 py-2.5 text-stone-700">Growth of computational work</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Space complexity</td>
                  <td className="px-4 py-2.5 text-stone-700">Growth of memory requirements</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Asymptotic analysis</td>
                  <td className="px-4 py-2.5 text-stone-700">Study of growth as input size becomes large</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Big-O</td>
                  <td className="px-4 py-2.5 text-stone-700">Asymptotic upper bound</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Big-Omega</td>
                  <td className="px-4 py-2.5 text-stone-700">Asymptotic lower bound</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Big-Theta</td>
                  <td className="px-4 py-2.5 text-stone-700">Tight asymptotic bound</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Best case</td>
                  <td className="px-4 py-2.5 text-stone-700">Minimum work over allowed inputs of a given size</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Average case</td>
                  <td className="px-4 py-2.5 text-stone-700">Expected work under a specified input distribution</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Worst case</td>
                  <td className="px-4 py-2.5 text-stone-700">Maximum work over allowed inputs of a given size</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Recurrence</td>
                  <td className="px-4 py-2.5 text-stone-700">Equation describing a function using smaller instances</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Master Theorem</td>
                  <td className="px-4 py-2.5 text-stone-700">Method for solving specified divide-and-conquer recurrences</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Amortized analysis</td>
                  <td className="px-4 py-2.5 text-stone-700">Analysis of aggregate cost across a sequence of operations</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Auxiliary space</td>
                  <td className="px-4 py-2.5 text-stone-700">Additional memory used, excluding input storage</td>
                </tr>
              </tbody>
            </table>
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-stone-900 mt-10 mb-4 pb-2 border-b border-[#e7e3da] tracking-tight">
            64. Essential Complexity Patterns
          </h2>
          <div className="overflow-x-auto my-4 rounded-xl border border-[#e7e3da] shadow-2xs">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-stone-900 border-b border-[#e7e3da] font-semibold">
                <tr>
                  <th className="px-4 py-3">Code or algorithm pattern</th>
                  <th className="px-4 py-3">Typical complexity</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Fixed number of operations</td>
                  <td className="px-4 py-2.5 text-stone-700">O(1)</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">One complete traversal</td>
                  <td className="px-4 py-2.5 text-stone-700">O(n)</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Repeatedly halve the input</td>
                  <td className="px-4 py-2.5 text-stone-700">O(log n)</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Two complete nested loops</td>
                  <td className="px-4 py-2.5 text-stone-700">O(n²)</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Three complete nested loops</td>
                  <td className="px-4 py-2.5 text-stone-700">O(n³)</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Linear outer loop and logarithmic inner loop</td>
                  <td className="px-4 py-2.5 text-stone-700">O(n log n)</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Generate every subset</td>
                  <td className="px-4 py-2.5 text-stone-700">O(2ⁿ) outputs</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Generate every permutation</td>
                  <td className="px-4 py-2.5 text-stone-700">O(n!) outputs</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Merge sort</td>
                  <td className="px-4 py-2.5 text-stone-700">O(n log n)</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Binary search</td>
                  <td className="px-4 py-2.5 text-stone-700">O(log n)</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Linear search</td>
                  <td className="px-4 py-2.5 text-stone-700">O(n) worst case</td>
                </tr>
              </tbody>
            </table>
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-stone-900 mt-10 mb-4 pb-2 border-b border-[#e7e3da] tracking-tight">
            65. Essential Recurrences
          </h2>
          <div className="overflow-x-auto my-4 rounded-xl border border-[#e7e3da] shadow-2xs">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-stone-900 border-b border-[#e7e3da] font-semibold">
                <tr>
                  <th className="px-4 py-3">Recurrence</th>
                  <th className="px-4 py-3">Complexity</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">T(n) = T(n − 1) + 1</td>
                  <td className="px-4 py-2.5 text-stone-700">Θ(n)</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">T(n) = T(n / 2) + 1</td>
                  <td className="px-4 py-2.5 text-stone-700">Θ(log n)</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">T(n) = 2T(n / 2) + n</td>
                  <td className="px-4 py-2.5 text-stone-700">Θ(n log n)</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">T(n) = 2T(n / 2) + 1</td>
                  <td className="px-4 py-2.5 text-stone-700">Θ(n)</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">T(n) = T(n − 1) + n</td>
                  <td className="px-4 py-2.5 text-stone-700">Θ(n²)</td>
                </tr>
              </tbody>
            </table>
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-stone-900 mt-10 mb-4 pb-2 border-b border-[#e7e3da] tracking-tight">
            66. Important Rules to Remember
          </h2>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">1.</span>
            <div className="flex-1">Add the costs of sequential sections.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">2.</span>
            <div className="flex-1">Multiply iteration counts for independent nested loops.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">3.</span>
            <div className="flex-1">Analyze dependent loops by counting their actual total iterations.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">4.</span>
            <div className="flex-1">Identify recursive calls and formulate a recurrence.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">5.</span>
            <div className="flex-1">Count recursive stack frames when calculating auxiliary space.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">6.</span>
            <div className="flex-1">Remove constant multipliers and lower-order terms in asymptotic expressions.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">7.</span>
            <div className="flex-1">State assumptions when using expected or average-case complexity.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">8.</span>
            <div className="flex-1">Check whether the Master Theorem actually applies.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">9.</span>
            <div className="flex-1">Include the cost of producing outputs when the result itself is large.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">10.</span>
            <div className="flex-1">Analyze time and space separately.</div>
          </div>
          <hr className="my-8 border-t border-[#e7e3da]" />
        </div>
      ),
    },
    {
      id: 24,
      title: "Part 24: Module Completion Criteria & Final Takeaway",
      category: "Milestone · Foundations Mastery",
      anchor: "part-24",
      render: () => (
        <div className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-black text-stone-900 mt-10 mb-4 pb-2 border-b border-[#e7e3da] tracking-tight">
            67. Required Knowledge
          </h2>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            You should be able to:
          </p>
          <ul className="list-disc list-outside pl-5 space-y-2 text-stone-700 my-3 text-sm leading-relaxed">
            <li>[ ] Define an algorithm and explain input size.</li>
            <li>[ ] Explain algorithm correctness, partial correctness, and termination.</li>
            <li>[ ] Prove a simple loop invariant.</li>
            <li>[ ] Calculate time complexity for common loops.</li>
            <li>[ ] Calculate auxiliary space.</li>
            <li>[ ] Explain asymptotic analysis.</li>
            <li>[ ] Differentiate Big-O, Big-Omega, and Big-Theta.</li>
            <li>[ ] Analyze best, average, and worst cases.</li>
            <li>[ ] Recognize constant, logarithmic, linear, quadratic, and exponential growth.</li>
            <li>[ ] Analyze nested and dependent loops.</li>
            <li>[ ] Derive simple recursion recurrences.</li>
            <li>[ ] Analyze recursive time and stack space.</li>
            <li>[ ] Solve basic recurrence relations.</li>
            <li>[ ] Apply the Master Theorem to supported recurrences.</li>
            <li>[ ] Explain amortized analysis and dynamic-array doubling.</li>
            <li>[ ] Explain time-space trade-offs.</li>
            <li>[ ] Compare searching and sorting algorithms.</li>
          </ul>
          <h2 className="text-xl sm:text-2xl font-black text-stone-900 mt-10 mb-4 pb-2 border-b border-[#e7e3da] tracking-tight">
            68. Practical Completion
          </h2>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Before moving forward, complete:
          </p>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">1.</span>
            <div className="flex-1">The four laboratory exercises.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">2.</span>
            <div className="flex-1">At least three complexity-analysis assignments.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">3.</span>
            <div className="flex-1">The knowledge assessment.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">4.</span>
            <div className="flex-1">The recurrence-solving exercises.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">5.</span>
            <div className="flex-1">The Algorithm Performance Comparison System mini-project.</div>
          </div>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            You should be able to explain not only the final complexity, but also the reasoning that produces it.
          </p>
          <hr className="my-8 border-t border-[#e7e3da]" />
          <h2 className="text-xl sm:text-2xl font-black text-stone-900 mt-10 mb-4 pb-2 border-b border-[#e7e3da] tracking-tight">
            Module 7 — Final Takeaway
          </h2>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Algorithm analysis is one of the central foundations of Data Structures and Algorithms.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Writing a program that produces the correct answer is only the first step. A capable programmer must also understand how that solution behaves as the input grows, how much memory it requires, and whether a better approach exists.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            The most important habit to develop is this:
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <strong className="font-semibold text-stone-900">Do not simply write code. Understand its correctness, count its work, analyze its memory, and justify its efficiency.</strong>
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            That habit will help you solve DSA problems, prepare for technical interviews, and design software that remains efficient as real-world workloads increase.
          </p>
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
      <aside className="lg:col-span-4 bg-white rounded-2xl border border-[#e7e3da] p-4 sm:p-5 shadow-2xs lg:sticky lg:top-20 max-h-[85vh] flex flex-col">
        <div className="pb-3 border-b border-[#e7e3da] mb-3">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-bold text-stone-900 flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-orange-600" />
              <span>Curriculum Index</span>
            </h3>
            <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-orange-100 text-orange-800 font-bold">
              {sections.length} Chapters
            </span>
          </div>
          <input
            type="text"
            placeholder="Search chapters, topics, formulas..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full text-xs px-3 py-2 rounded-xl bg-stone-50 border border-stone-200 focus:outline-none focus:border-orange-500 focus:bg-white transition"
          />
        </div>

        <nav className="overflow-y-auto space-y-1 pr-1 text-xs [scrollbar-width:thin] flex-1">
          {filteredSections.map((sec) => {
            const isActive = sec.id === activeSectionId;
            return (
              <button
                key={sec.id}
                onClick={() => {
                  setActiveSectionId(sec.id);
                  window.scrollTo({ top: 380, behavior: "smooth" });
                }}
                className={`w-full text-left px-3 py-2.5 rounded-xl transition flex items-start justify-between gap-2 ${
                  isActive
                    ? "bg-orange-600 text-white font-bold shadow-xs"
                    : "text-stone-700 hover:bg-stone-100 hover:text-stone-900"
                }`}
              >
                <div className="flex-1 truncate">
                  <div className={`text-[10px] uppercase font-mono tracking-wider truncate mb-0.5 ${
                    isActive ? "text-orange-200" : "text-stone-600 font-semibold"
                  }`}>
                    {sec.category}
                  </div>
                  <div className="truncate text-xs">{sec.title}</div>
                </div>
                <ChevronRight className={`w-3.5 h-3.5 mt-1 shrink-0 ${isActive ? "text-white" : "text-stone-600"}`} />
              </button>
            );
          })}
        </nav>
      </aside>

      {/* Main Chapter Content View */}
      <section className="lg:col-span-8 bg-white rounded-2xl sm:rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-sm min-h-[600px]">
        {/* Section Header Banner */}
        <div className="border-b border-[#e7e3da] pb-6 mb-8">
          <div className="text-xs uppercase font-mono font-bold tracking-wider text-orange-600 mb-1.5">
            {activeSection.category}
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-stone-900 tracking-tight">
            {activeSection.title}
          </h1>
        </div>

        {/* Section Body */}
        <div className="prose prose-stone max-w-none text-stone-800 leading-relaxed">
          {activeSection.render()}
        </div>

        {/* Next / Previous Navigator Footer */}
        <div className="mt-12 pt-6 border-t border-[#e7e3da] flex items-center justify-between gap-4">
          <button
            disabled={activeSectionId === 0}
            onClick={() => {
              setActiveSectionId((prev) => Math.max(0, prev - 1));
              window.scrollTo({ top: 380, behavior: "smooth" });
            }}
            className="px-4 py-2 rounded-xl border border-stone-200 text-xs font-semibold text-stone-700 hover:bg-stone-50 disabled:opacity-40 disabled:cursor-not-allowed transition"
          >
            &larr; Previous Chapter
          </button>
          <span className="text-xs text-stone-500 font-mono">
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
