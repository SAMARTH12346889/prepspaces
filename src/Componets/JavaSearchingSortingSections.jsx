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
  ArrowDownUp,
  Filter,
} from "lucide-react";

export default function JavaSearchingSortingSections() {
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
      title: "Module 8: Curriculum Overview & Objectives",
      category: "Course Roadmap · Objectives",
      anchor: "overview",
      render: () => (
        <div className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-black text-stone-900 mt-10 mb-4 pb-2 border-b border-[#e7e3da] tracking-tight">
            1. Learning Objectives
          </h2>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            By completing this module, you should be able to:
          </p>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">1.</span>
            <div className="flex-1">Understand searching and sorting as fundamental algorithmic operations.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">2.</span>
            <div className="flex-1">Implement linear search and binary search in Java.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">3.</span>
            <div className="flex-1">Identify the prerequisites and limitations of binary search.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">4.</span>
            <div className="flex-1">Solve binary search on answer problems using monotonic predicates.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">5.</span>
            <div className="flex-1">Implement lower bound and upper bound.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">6.</span>
            <div className="flex-1">Search efficiently in rotated sorted arrays.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">7.</span>
            <div className="flex-1">Understand and implement bubble, selection, and insertion sort.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">8.</span>
            <div className="flex-1">Understand divide-and-conquer sorting through merge sort and quick sort.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">9.</span>
            <div className="flex-1">Implement heap sort using a binary heap.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">10.</span>
            <div className="flex-1">Understand non-comparison sorting through counting, radix, and bucket sort.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">11.</span>
            <div className="flex-1">Distinguish stable and unstable sorting.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">12.</span>
            <div className="flex-1">Distinguish in-place and out-of-place sorting.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">13.</span>
            <div className="flex-1">Compare best, average, and worst-case sorting complexities.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">14.</span>
            <div className="flex-1">Use Java's <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">Arrays.sort()</code> and <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">Collections.sort()</code>.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">15.</span>
            <div className="flex-1">Select appropriate searching and sorting algorithms for different problems.</div>
          </div>
          <hr className="my-8 border-t border-[#e7e3da]" />
        </div>
      ),
    },
    {
      id: 1,
      title: "Part 1: Introduction to Searching and Sorting",
      category: "Part 1 · Foundational Paradigms",
      anchor: "part-1",
      render: () => (
        <div className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-black text-stone-900 mt-10 mb-4 pb-2 border-b border-[#e7e3da] tracking-tight">
            2. What Is Searching?
          </h2>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <strong className="font-semibold text-stone-900">Searching</strong> is the process of locating a particular element or determining whether an element exists in a collection of data.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Suppose you have the following array:
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">[12, 35, 7, 89, 23, 45]</code>
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Your task is to find the number <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">89</code>.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            A searching algorithm examines data according to a specific strategy until it finds the target or determines that the target is absent.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            The target value is commonly called the <strong className="font-semibold text-stone-900">search key</strong>.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            2.1 Types of searching
          </h3>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Two fundamental searching techniques are:
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <strong className="font-semibold text-stone-900">1. Linear search</strong>
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Check elements sequentially until the target is found or the collection is exhausted.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <strong className="font-semibold text-stone-900">2. Binary search</strong>
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Repeatedly eliminate half of a sorted search interval by comparing the target with its middle element.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Other searching techniques include:
          </p>
          <ul className="list-disc list-outside pl-5 space-y-2 text-stone-700 my-3 text-sm leading-relaxed">
            <li>Interpolation search.</li>
            <li>Jump search.</li>
            <li>Exponential search.</li>
            <li>Hash-based lookup.</li>
            <li>Tree-based searching.</li>
            <li>Graph traversal.</li>
          </ul>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            This module concentrates on linear search, binary search, binary search on answer, lower and upper bounds, and rotated arrays.
          </p>
          <h2 className="text-xl sm:text-2xl font-black text-stone-900 mt-10 mb-4 pb-2 border-b border-[#e7e3da] tracking-tight">
            3. What Is Sorting?
          </h2>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <strong className="font-semibold text-stone-900">Sorting</strong> is the process of arranging elements according to a specified ordering rule.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            For example:
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Original array:
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">[8, 3, 5, 1, 9, 2]</code>
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Ascending order:
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">[1, 2, 3, 5, 8, 9]</code>
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Descending order:
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">[9, 8, 5, 3, 2, 1]</code>
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Sorting can be performed on:
          </p>
          <ul className="list-disc list-outside pl-5 space-y-2 text-stone-700 my-3 text-sm leading-relaxed">
            <li>Integers.</li>
            <li>Floating-point numbers.</li>
            <li>Characters.</li>
            <li>Strings.</li>
            <li>Objects.</li>
            <li>Student records.</li>
            <li>Employee records.</li>
            <li>Database records.</li>
          </ul>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            3.1 Why sorting matters
          </h3>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Sorting makes many operations easier.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Examples:
          </p>
          <ul className="list-disc list-outside pl-5 space-y-2 text-stone-700 my-3 text-sm leading-relaxed">
            <li>Binary search requires sorted input.</li>
            <li>Finding minimum and maximum values becomes straightforward.</li>
            <li>Duplicate elements become easier to identify.</li>
            <li>Ranking students by marks becomes simpler.</li>
            <li>Merging two sorted datasets becomes efficient.</li>
            <li>Many interview problems become easier after sorting.</li>
            <li>Ordered data can make certain algorithms more efficient.</li>
          </ul>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            3.2 Types of sorting algorithms
          </h3>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Sorting algorithms can be classified into two broad groups.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <strong className="font-semibold text-stone-900">Comparison-based sorting</strong>
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            These algorithms determine ordering through comparisons between elements.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Examples:
          </p>
          <ul className="list-disc list-outside pl-5 space-y-2 text-stone-700 my-3 text-sm leading-relaxed">
            <li>Bubble sort.</li>
            <li>Selection sort.</li>
            <li>Insertion sort.</li>
            <li>Merge sort.</li>
            <li>Quick sort.</li>
            <li>Heap sort.</li>
          </ul>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <strong className="font-semibold text-stone-900">Non-comparison-based sorting</strong>
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            These algorithms exploit properties of the values being sorted instead of relying exclusively on element-to-element comparisons.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Examples:
          </p>
          <ul className="list-disc list-outside pl-5 space-y-2 text-stone-700 my-3 text-sm leading-relaxed">
            <li>Counting sort.</li>
            <li>Radix sort.</li>
            <li>Bucket sort.</li>
          </ul>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Comparison-based sorting has a worst-case lower bound of <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">Ω(n log n)</code> comparisons for general sorting of arbitrary distinct keys. Non-comparison algorithms can achieve linear-time behavior under suitable assumptions about the input values.
          </p>
          <hr className="my-8 border-t border-[#e7e3da]" />
        </div>
      ),
    },
    {
      id: 2,
      title: "Part 2: Linear Search",
      category: "Part 2 · Sequential Inspection",
      anchor: "part-2",
      render: () => (
        <div className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-black text-stone-900 mt-10 mb-4 pb-2 border-b border-[#e7e3da] tracking-tight">
            4. What Is Linear Search?
          </h2>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Linear search is the simplest searching algorithm.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            It examines each element one by one until:
          </p>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">1.</span>
            <div className="flex-1">The target is found, or</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">2.</span>
            <div className="flex-1">All elements have been examined.</div>
          </div>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            It works on sorted and unsorted arrays.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            4.1 Algorithm
          </h3>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Suppose we have:
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">numbers = [10, 25, 37, 45, 59]</code>
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Target:
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">45</code>
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Search procedure:
          </p>
          <div className="overflow-x-auto my-4 rounded-xl border border-[#e7e3da] shadow-2xs">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-stone-900 border-b border-[#e7e3da] font-semibold">
                <tr>
                  <th className="px-4 py-3">Step</th>
                  <th className="px-4 py-3">Index</th>
                  <th className="px-4 py-3">Value</th>
                  <th className="px-4 py-3">Comparison</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">1</td>
                  <td className="px-4 py-2.5 text-stone-700">0</td>
                  <td className="px-4 py-2.5 text-stone-700">10</td>
                  <td className="px-4 py-2.5 text-stone-700">Not equal to 45</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">2</td>
                  <td className="px-4 py-2.5 text-stone-700">1</td>
                  <td className="px-4 py-2.5 text-stone-700">25</td>
                  <td className="px-4 py-2.5 text-stone-700">Not equal to 45</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">3</td>
                  <td className="px-4 py-2.5 text-stone-700">2</td>
                  <td className="px-4 py-2.5 text-stone-700">37</td>
                  <td className="px-4 py-2.5 text-stone-700">Not equal to 45</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">4</td>
                  <td className="px-4 py-2.5 text-stone-700">3</td>
                  <td className="px-4 py-2.5 text-stone-700">45</td>
                  <td className="px-4 py-2.5 text-stone-700">Target found</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            The returned index is <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">3</code>.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            4.2 Pseudocode
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`LINEAR_SEARCH(array, target)

    FOR each index i from 0 to array.length - 1

        IF array[i] equals target
            RETURN i

    RETURN -1`}</code>
            </pre>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            4.3 Java implementation
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public class LinearSearch {

    public static int search(int[] numbers, int target) {

        if (numbers == null) {
            throw new IllegalArgumentException(
                "Array cannot be null"
            );
        }

        for (int i = 0; i < numbers.length; i++) {

            if (numbers[i] == target) {
                return i;
            }
        }

        return -1;
    }

    public static void main(String[] args) {

        int[] numbers = {10, 25, 37, 45, 59};

        int target = 45;

        int result = search(numbers, target);

        if (result != -1) {
            System.out.println(
                "Element found at index: " + result
            );
        } else {
            System.out.println("Element not found");
        }
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
              <code>{`Element found at index: 3`}</code>
            </pre>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            4.4 Complexity analysis
          </h3>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Consider an array containing <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">n</code> elements.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <strong className="font-semibold text-stone-900">Best case:</strong> The target is at the first position. Only one comparison is needed.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Time: <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">Θ(1)</code>.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <strong className="font-semibold text-stone-900">Average case:</strong> Under the assumption that the target is present and equally likely to occupy any position, approximately <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">(n + 1) / 2</code> comparisons are needed.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Time: <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">Θ(n)</code>.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <strong className="font-semibold text-stone-900">Worst case:</strong> The target is at the last position or absent.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Time: <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">Θ(n)</code>.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Auxiliary space: <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">O(1)</code>.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            4.5 Advantages
          </h3>
          <ul className="list-disc list-outside pl-5 space-y-2 text-stone-700 my-3 text-sm leading-relaxed">
            <li>Very easy to understand.</li>
            <li>Easy to implement.</li>
            <li>Works on unsorted data.</li>
            <li>Works with arrays and sequential collections.</li>
            <li>Requires no additional data structure.</li>
          </ul>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            4.6 Disadvantages
          </h3>
          <ul className="list-disc list-outside pl-5 space-y-2 text-stone-700 my-3 text-sm leading-relaxed">
            <li>Slow for large datasets.</li>
            <li>May need to inspect every element.</li>
            <li>Does not exploit sorted ordering.</li>
          </ul>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            4.7 When should you use linear search?
          </h3>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Use it when:
          </p>
          <ul className="list-disc list-outside pl-5 space-y-2 text-stone-700 my-3 text-sm leading-relaxed">
            <li>The collection is small.</li>
            <li>Data is unsorted.</li>
            <li>Only one or very few searches are required.</li>
            <li>Sequential traversal is already available.</li>
            <li>Sorting the data first would cost more than searching it.</li>
          </ul>
          <hr className="my-8 border-t border-[#e7e3da]" />
        </div>
      ),
    },
    {
      id: 3,
      title: "Part 3: Binary Search (Iterative & Recursive)",
      category: "Part 3 · Divide & Conquer Lookup",
      anchor: "part-3",
      render: () => (
        <div className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-black text-stone-900 mt-10 mb-4 pb-2 border-b border-[#e7e3da] tracking-tight">
            5. What Is Binary Search?
          </h2>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Binary search is an efficient searching algorithm that repeatedly divides a sorted search interval into two smaller parts.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Instead of checking every element, it examines the middle element.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Depending on the comparison, it discards the half that cannot contain the target.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            This process continues until the target is found or the interval becomes empty.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            5.1 Binary search example
          </h3>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Sorted array:
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">[10, 20, 30, 40, 50, 60, 70, 80, 90]</code>
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Target:
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">70</code>
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Initial boundaries:
          </p>
          <ul className="list-disc list-outside pl-5 space-y-2 text-stone-700 my-3 text-sm leading-relaxed">
            <li>Low = 0</li>
            <li>High = 8</li>
          </ul>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <strong className="font-semibold text-stone-900">Step 1 — Find the middle</strong>
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">mid = 4</code>
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Middle value = <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">50</code>.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Since <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">70 &gt; 50</code>, eliminate the left half including index 4.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            New interval:
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">[60, 70, 80, 90]</code>
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <strong className="font-semibold text-stone-900">Step 2 — Find the middle</strong>
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Low = 5
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            High = 8
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Mid = 6
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Middle value = <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">70</code>.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Target found at index 6.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            5.2 Binary search visualization
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Initial:

10  20  30  40  50  60  70  80  90
                    ^
                   Mid

Target = 70

Discard:

10  20  30  40  50

Remaining:

60  70  80  90
     ^
    Mid

Target found.`}</code>
            </pre>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            5.3 Binary search algorithm
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`BINARY_SEARCH(array, target)

    low = 0
    high = array.length - 1

    WHILE low <= high

        mid = low + (high - low) / 2

        IF array[mid] == target
            RETURN mid

        ELSE IF array[mid] < target
            low = mid + 1

        ELSE
            high = mid - 1

    RETURN -1`}</code>
            </pre>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            5.4 Java implementation — Iterative binary search
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public class BinarySearch {

    public static int search(int[] numbers, int target) {

        int low = 0;
        int high = numbers.length - 1;

        while (low <= high) {

            int mid = low + (high - low) / 2;

            if (numbers[mid] == target) {
                return mid;
            }

            if (numbers[mid] < target) {

                low = mid + 1;

            } else {

                high = mid - 1;
            }
        }

        return -1;
    }

    public static void main(String[] args) {

        int[] numbers = {
            10, 20, 30, 40, 50, 60, 70, 80, 90
        };

        int target = 70;

        System.out.println(search(numbers, target));
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
              <code>{`6`}</code>
            </pre>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            5.5 Why use <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">low + (high - low) / 2</code>?
          </h3>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            A common implementation is:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`int mid = (low + high) / 2;`}</code>
            </pre>
          </div>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            However, if <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">low</code> and <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">high</code> are sufficiently large, their sum can overflow the maximum value of an <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">int</code>.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            The safer expression is:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`int mid = low + (high - low) / 2;`}</code>
            </pre>
          </div>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            This avoids the unnecessary addition of the two large boundaries.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            5.6 Binary search complexity
          </h3>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Each iteration reduces the search interval approximately by half.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            For an initial interval of size <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">n</code>:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`n
n / 2
n / 4
n / 8
n / 16
...
1`}</code>
            </pre>
          </div>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            After <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">k</code> iterations:
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">n / 2^k ≈ 1</code>
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Therefore:
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">k ≈ log₂(n)</code>
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Complexities:
          </p>
          <ul className="list-disc list-outside pl-5 space-y-2 text-stone-700 my-3 text-sm leading-relaxed">
            <li>Best-case time: <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">O(1)</code>.</li>
            <li>Average-case time: <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">O(log n)</code>.</li>
            <li>Worst-case time: <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">O(log n)</code>.</li>
            <li>Iterative auxiliary space: <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">O(1)</code>.</li>
          </ul>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            5.7 Recursive binary search
          </h3>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Binary search can also be implemented recursively.
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public class RecursiveBinarySearch {

    public static int search(
        int[] numbers,
        int target,
        int low,
        int high
    ) {

        if (low > high) {
            return -1;
        }

        int mid = low + (high - low) / 2;

        if (numbers[mid] == target) {
            return mid;
        }

        if (numbers[mid] < target) {

            return search(
                numbers,
                target,
                mid + 1,
                high
            );

        }

        return search(
            numbers,
            target,
            low,
            mid - 1
        );
    }

    public static void main(String[] args) {

        int[] numbers = {
            10, 20, 30, 40, 50, 60
        };

        int result = search(
            numbers,
            40,
            0,
            numbers.length - 1
        );

        System.out.println(result);
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
              <code>{`3`}</code>
            </pre>
          </div>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Recursive complexity:
          </p>
          <ul className="list-disc list-outside pl-5 space-y-2 text-stone-700 my-3 text-sm leading-relaxed">
            <li>Time: <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">O(log n)</code>.</li>
            <li>Auxiliary stack space: <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">O(log n)</code>.</li>
          </ul>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            5.8 Iterative versus recursive binary search
          </h3>
          <div className="overflow-x-auto my-4 rounded-xl border border-[#e7e3da] shadow-2xs">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-stone-900 border-b border-[#e7e3da] font-semibold">
                <tr>
                  <th className="px-4 py-3">Property</th>
                  <th className="px-4 py-3">Iterative</th>
                  <th className="px-4 py-3">Recursive</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Implementation</td>
                  <td className="px-4 py-2.5 text-stone-700">Loop</td>
                  <td className="px-4 py-2.5 text-stone-700">Method calls</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Time</td>
                  <td className="px-4 py-2.5 text-stone-700">O(log n)</td>
                  <td className="px-4 py-2.5 text-stone-700">O(log n)</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Auxiliary space</td>
                  <td className="px-4 py-2.5 text-stone-700">O(1)</td>
                  <td className="px-4 py-2.5 text-stone-700">O(log n)</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Stack usage</td>
                  <td className="px-4 py-2.5 text-stone-700">Constant</td>
                  <td className="px-4 py-2.5 text-stone-700">Logarithmic</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Practical preference</td>
                  <td className="px-4 py-2.5 text-stone-700">Often preferred</td>
                  <td className="px-4 py-2.5 text-stone-700">Useful for recursion practice</td>
                </tr>
              </tbody>
            </table>
          </div>
          <hr className="my-8 border-t border-[#e7e3da]" />
        </div>
      ),
    },
    {
      id: 4,
      title: "Part 4: Binary Search Prerequisites",
      category: "Part 4 · Invariants & Random Access",
      anchor: "part-4",
      render: () => (
        <div className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-black text-stone-900 mt-10 mb-4 pb-2 border-b border-[#e7e3da] tracking-tight">
            6. Requirements for Binary Search
          </h2>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Binary search does not work correctly on arbitrary unsorted data.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            It relies on the ability to eliminate an entire region after a comparison.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            The following requirements matter.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            6.1 Data must be sorted
          </h3>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Consider:
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">[10, 30, 20, 50, 40]</code>
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Target:
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">20</code>
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            The middle value might lead the algorithm to discard the part containing the target.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Therefore, ordinary binary search is not valid on this array.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            The correct array is:
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">[10, 20, 30, 40, 50]</code>
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            6.2 Elements must follow a consistent ordering rule
          </h3>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Binary search needs a consistent comparison operation.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            For integers, natural numerical ordering is straightforward.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            For objects, the collection must be sorted according to the same <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">Comparable</code> or <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">Comparator</code> ordering used by the search.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            For example, if students are sorted by marks, binary search must also compare marks. Searching using a different ordering is not valid.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            6.3 Efficient access to the middle element
          </h3>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Binary search is especially effective on structures that support efficient indexed access, such as arrays and <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">ArrayList</code>.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            A linked list does not provide constant-time random access. Repeatedly retrieving its middle element can require linear traversal.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            For Java's <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">Collections.binarySearch</code>, a large list that does not implement <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">RandomAccess</code> can require <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">O(n)</code> link traversals even though it performs <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">O(log n)</code> element comparisons.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            6.4 Input must remain consistently ordered
          </h3>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            If elements change during searching, the sorted-order assumption might stop being true.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            The algorithm needs a consistent view of the search structure.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            6.5 Cost of sorting first
          </h3>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Suppose an unsorted array requires one search.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Sorting it first may cost <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">O(n log n)</code>, followed by <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">O(log n)</code> for searching.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            If only one lookup is required, linear search may be cheaper.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            If the same dataset will be searched repeatedly, sorting once and performing many binary searches may be worthwhile.
          </p>
          <hr className="my-8 border-t border-[#e7e3da]" />
        </div>
      ),
    },
    {
      id: 5,
      title: "Part 5: Binary Search on Answer",
      category: "Part 5 · Parametric Monotonic Search",
      anchor: "part-5",
      render: () => (
        <div className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-black text-stone-900 mt-10 mb-4 pb-2 border-b border-[#e7e3da] tracking-tight">
            7. What Is Binary Search on Answer?
          </h2>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Binary search is not limited to finding a particular element in a sorted array.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            It can also be used to find the smallest or largest answer that satisfies a condition.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            This approach is called <strong className="font-semibold text-stone-900">binary search on answer</strong> or <strong className="font-semibold text-stone-900">parametric search</strong>.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            The key requirement is a monotonic condition.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            A predicate is monotonic when its result changes in only one direction as the candidate answer increases or decreases.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            For example:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Candidate capacity:  5  6  7  8  9  10  11
Can finish in time:  N  N  N  Y  Y   Y   Y`}</code>
            </pre>
          </div>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Once capacity 8 becomes sufficient, every larger capacity is also sufficient.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            The first valid capacity can therefore be found with binary search.
          </p>
          <h2 className="text-xl sm:text-2xl font-black text-stone-900 mt-10 mb-4 pb-2 border-b border-[#e7e3da] tracking-tight">
            8. Minimum Valid Answer Pattern
          </h2>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Suppose we have a range of possible answers from <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">low</code> to <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">high</code>.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            We want the smallest value for which <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">isValid(answer)</code> returns true.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Algorithm:
          </p>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">1.</span>
            <div className="flex-1">Find the middle candidate.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">2.</span>
            <div className="flex-1">Check whether the candidate is valid.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">3.</span>
            <div className="flex-1">If valid, record it and search the lower half.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">4.</span>
            <div className="flex-1">If invalid, search the upper half.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">5.</span>
            <div className="flex-1">Continue until the smallest valid answer is determined.</div>
          </div>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Pseudocode:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`low = minimum possible answer
high = maximum possible answer

WHILE low < high

    mid = low + (high - low) / 2

    IF isValid(mid)
        high = mid
    ELSE
        low = mid + 1

RETURN low`}</code>
            </pre>
          </div>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            The <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">low &lt; high</code> condition works because the candidate interval always retains the first valid answer.
          </p>
          <h2 className="text-xl sm:text-2xl font-black text-stone-900 mt-10 mb-4 pb-2 border-b border-[#e7e3da] tracking-tight">
            9. Worked Example — Minimum Capacity to Ship Packages
          </h2>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Problem:
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            You are given packages with the following weights:
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]</code>
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            A ship must deliver all packages within 5 days.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Packages must be shipped in their original order.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            The goal is to find the minimum ship capacity needed.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            9.1 Establish the search boundaries
          </h3>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            The minimum possible capacity is the heaviest package:
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">low = 10</code>
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            The maximum possible capacity is the sum of every package:
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">high = 55</code>
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            A capacity below 10 cannot carry the heaviest package.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            A capacity of 55 can carry all packages in one day.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            9.2 Define the feasibility condition
          </h3>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            For a proposed capacity:
          </p>
          <ul className="list-disc list-outside pl-5 space-y-2 text-stone-700 my-3 text-sm leading-relaxed">
            <li>Start with day 1.</li>
            <li>Add packages in order while the capacity allows.</li>
            <li>When the next package does not fit, start another day.</li>
            <li>Count the required days.</li>
            <li>The capacity is valid when the required days do not exceed 5.</li>
          </ul>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            9.3 Java implementation
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public class ShipCapacity {

    public static long minimumCapacity(
        int[] weights,
        int days
    ) {

        if (weights == null || weights.length == 0) {
            throw new IllegalArgumentException(
                "Weights must not be empty"
            );
        }

        if (days <= 0) {
            throw new IllegalArgumentException(
                "Days must be positive"
            );
        }

        long low = 0;
        long high = 0;

        for (int weight : weights) {

            if (weight <= 0) {
                throw new IllegalArgumentException(
                    "Weights must be positive"
                );
            }

            low = Math.max(low, weight);
            high += weight;
        }

        while (low < high) {

            long capacity =
                low + (high - low) / 2;

            if (canShip(weights, days, capacity)) {

                high = capacity;

            } else {

                low = capacity + 1;
            }
        }

        return low;
    }

    private static boolean canShip(
        int[] weights,
        int days,
        long capacity
    ) {

        int requiredDays = 1;
        long currentLoad = 0;

        for (int weight : weights) {

            if (currentLoad + weight > capacity) {

                requiredDays++;
                currentLoad = weight;

            } else {

                currentLoad += weight;
            }

            if (requiredDays > days) {
                return false;
            }
        }

        return true;
    }

    public static void main(String[] args) {

        int[] weights = {
            1, 2, 3, 4, 5, 6, 7, 8, 9, 10
        };

        System.out.println(
            minimumCapacity(weights, 5)
        );
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
              <code>{`15`}</code>
            </pre>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            9.4 Why is the result 15?
          </h3>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            A capacity of 15 can divide the packages into five days:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Day 1: 1 + 2 + 3 + 4 + 5 = 15
Day 2: 6 + 7 = 13
Day 3: 8 = 8
Day 4: 9 = 9
Day 5: 10 = 10`}</code>
            </pre>
          </div>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            A capacity smaller than 15 requires more than five days.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Therefore, 15 is the minimum valid answer.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            9.5 Complexity analysis
          </h3>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Let:
          </p>
          <ul className="list-disc list-outside pl-5 space-y-2 text-stone-700 my-3 text-sm leading-relaxed">
            <li><code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">n</code> be the number of packages.</li>
            <li><code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">R</code> be the range of possible capacities.</li>
          </ul>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Each feasibility check examines at most <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">n</code> packages.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Binary search performs approximately <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">O(log R)</code> checks.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Time:
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">O(n log R)</code>
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Auxiliary space:
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">O(1)</code>
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            9.6 Other binary-search-on-answer problems
          </h3>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            This technique is common in:
          </p>
          <ul className="list-disc list-outside pl-5 space-y-2 text-stone-700 my-3 text-sm leading-relaxed">
            <li>Minimum maximum workload.</li>
            <li>Book allocation.</li>
            <li>Painter's partition problem.</li>
            <li>Minimum eating speed.</li>
            <li>Minimum processing capacity.</li>
            <li>Maximum minimum distance.</li>
            <li>Aggressive cows.</li>
            <li>Finding the smallest feasible threshold.</li>
          </ul>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            The most important skill is identifying a monotonic validity condition.
          </p>
          <hr className="my-8 border-t border-[#e7e3da]" />
        </div>
      ),
    },
    {
      id: 6,
      title: "Part 6: Lower Bound and Upper Bound",
      category: "Part 6 · Boundary & Frequency Lookups",
      anchor: "part-6",
      render: () => (
        <div className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-black text-stone-900 mt-10 mb-4 pb-2 border-b border-[#e7e3da] tracking-tight">
            10. What Is Lower Bound?
          </h2>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            The <strong className="font-semibold text-stone-900">lower bound</strong> of a target in a sorted array is the index of the first element greater than or equal to the target.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            In mathematical form:
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">lowerBound(target) = first index i where array[i] &gt;= target</code>
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            If no element satisfies the condition, the lower bound is the length of the array.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            Example
          </h3>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Array:
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">[1, 2, 2, 2, 4, 6, 8]</code>
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Target:
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">2</code>
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Lower bound = <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">1</code>.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            The first occurrence of 2 is at index 1.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            10.1 Java implementation
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public static int lowerBound(
    int[] numbers,
    int target
) {

    int low = 0;
    int high = numbers.length;

    while (low < high) {

        int mid = low + (high - low) / 2;

        if (numbers[mid] < target) {

            low = mid + 1;

        } else {

            high = mid;
        }
    }

    return low;
}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            The search interval is half-open:
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">[low, high)</code>
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            The element at <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">high</code> is outside the interval.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            This makes it possible for the answer to equal <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">numbers.length</code>.
          </p>
          <h2 className="text-xl sm:text-2xl font-black text-stone-900 mt-10 mb-4 pb-2 border-b border-[#e7e3da] tracking-tight">
            11. What Is Upper Bound?
          </h2>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            The <strong className="font-semibold text-stone-900">upper bound</strong> of a target is the index of the first element strictly greater than the target.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Mathematically:
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">upperBound(target) = first index i where array[i] &gt; target</code>
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            Example
          </h3>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Array:
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">[1, 2, 2, 2, 4, 6, 8]</code>
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Target:
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">2</code>
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Upper bound = <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">4</code>.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Index 4 contains the first element greater than 2.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            11.1 Java implementation
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public static int upperBound(
    int[] numbers,
    int target
) {

    int low = 0;
    int high = numbers.length;

    while (low < high) {

        int mid = low + (high - low) / 2;

        if (numbers[mid] <= target) {

            low = mid + 1;

        } else {

            high = mid;
        }
    }

    return low;
}`}</code>
            </pre>
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-stone-900 mt-10 mb-4 pb-2 border-b border-[#e7e3da] tracking-tight">
            12. Lower Bound vs Upper Bound
          </h2>
          <div className="overflow-x-auto my-4 rounded-xl border border-[#e7e3da] shadow-2xs">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-stone-900 border-b border-[#e7e3da] font-semibold">
                <tr>
                  <th className="px-4 py-3">Feature</th>
                  <th className="px-4 py-3">Lower bound</th>
                  <th className="px-4 py-3">Upper bound</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Condition</td>
                  <td className="px-4 py-2.5 text-stone-700">First element <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">&gt;= target</code></td>
                  <td className="px-4 py-2.5 text-stone-700">First element <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">&gt; target</code></td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Duplicates</td>
                  <td className="px-4 py-2.5 text-stone-700">Finds first occurrence position</td>
                  <td className="px-4 py-2.5 text-stone-700">Finds position after last occurrence</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Missing target</td>
                  <td className="px-4 py-2.5 text-stone-700">Returns insertion position</td>
                  <td className="px-4 py-2.5 text-stone-700">Returns insertion position</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Complexity</td>
                  <td className="px-4 py-2.5 text-stone-700">O(log n)</td>
                  <td className="px-4 py-2.5 text-stone-700">O(log n)</td>
                </tr>
              </tbody>
            </table>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            12.1 Finding the number of occurrences
          </h3>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            The range of elements equal to a target can be represented by:
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">[lowerBound(target), upperBound(target))</code>
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Therefore:
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">count = upperBound(target) - lowerBound(target)</code>
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Example:
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Array:
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">[1, 2, 2, 2, 4, 6, 8]</code>
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Target:
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">2</code>
          </p>
          <ul className="list-disc list-outside pl-5 space-y-2 text-stone-700 my-3 text-sm leading-relaxed">
            <li>Lower bound = 1.</li>
            <li>Upper bound = 4.</li>
          </ul>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Number of occurrences:
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">4 - 1 = 3</code>
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            12.2 Complete Java example
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`import java.util.Arrays;

public class BoundSearch {

    public static int lowerBound(
        int[] numbers,
        int target
    ) {

        int low = 0;
        int high = numbers.length;

        while (low < high) {

            int mid = low + (high - low) / 2;

            if (numbers[mid] < target) {
                low = mid + 1;
            } else {
                high = mid;
            }
        }

        return low;
    }

    public static int upperBound(
        int[] numbers,
        int target
    ) {

        int low = 0;
        int high = numbers.length;

        while (low < high) {

            int mid = low + (high - low) / 2;

            if (numbers[mid] <= target) {
                low = mid + 1;
            } else {
                high = mid;
            }
        }

        return low;
    }

    public static int countOccurrences(
        int[] numbers,
        int target
    ) {

        return upperBound(numbers, target)
             - lowerBound(numbers, target);
    }

    public static void main(String[] args) {

        int[] numbers = {1, 2, 2, 2, 4, 6, 8};

        System.out.println(lowerBound(numbers, 2));
        System.out.println(upperBound(numbers, 2));
        System.out.println(countOccurrences(numbers, 2));
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
              <code>{`1
4
3`}</code>
            </pre>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            12.3 Important edge cases
          </h3>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            For an empty array:
          </p>
          <ul className="list-disc list-outside pl-5 space-y-2 text-stone-700 my-3 text-sm leading-relaxed">
            <li>Lower bound = 0.</li>
            <li>Upper bound = 0.</li>
          </ul>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            When the target is smaller than every element:
          </p>
          <ul className="list-disc list-outside pl-5 space-y-2 text-stone-700 my-3 text-sm leading-relaxed">
            <li>Both bounds = 0.</li>
          </ul>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            When the target is larger than every element:
          </p>
          <ul className="list-disc list-outside pl-5 space-y-2 text-stone-700 my-3 text-sm leading-relaxed">
            <li>Both bounds = <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">array.length</code>.</li>
          </ul>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            When the target appears multiple times:
          </p>
          <ul className="list-disc list-outside pl-5 space-y-2 text-stone-700 my-3 text-sm leading-relaxed">
            <li>Lower bound identifies its first position.</li>
            <li>Upper bound identifies the position immediately after its last position.</li>
          </ul>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            These patterns are especially important in coding interviews.
          </p>
          <hr className="my-8 border-t border-[#e7e3da]" />
        </div>
      ),
    },
    {
      id: 7,
      title: "Part 7: Search in Rotated Sorted Arrays",
      category: "Part 7 · Displaced Pivot Searching",
      anchor: "part-7",
      render: () => (
        <div className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-black text-stone-900 mt-10 mb-4 pb-2 border-b border-[#e7e3da] tracking-tight">
            13. What Is a Rotated Sorted Array?
          </h2>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            A rotated sorted array is an array originally arranged in sorted order, but moved around a pivot.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Original sorted array:
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">[1, 2, 3, 4, 5, 6, 7]</code>
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            After rotation:
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">[4, 5, 6, 7, 1, 2, 3]</code>
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            The original order has been split into two individually sorted sections.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            The goal is to search without sorting the array again.
          </p>
          <h2 className="text-xl sm:text-2xl font-black text-stone-900 mt-10 mb-4 pb-2 border-b border-[#e7e3da] tracking-tight">
            14. Binary Search in a Rotated Array — Distinct Values
          </h2>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            When all values are distinct, at least one half of the current search interval is sorted.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            That observation allows us to discard the half that cannot contain the target.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            14.1 Algorithm
          </h3>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            For every iteration:
          </p>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">1.</span>
            <div className="flex-1">Calculate the middle index.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">2.</span>
            <div className="flex-1">Check whether the middle value is the target.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">3.</span>
            <div className="flex-1">Determine whether the left half is sorted.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">4.</span>
            <div className="flex-1">If the left half is sorted, check whether the target belongs to it.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">5.</span>
            <div className="flex-1">Otherwise, check the right half.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">6.</span>
            <div className="flex-1">Move the corresponding boundary.</div>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            14.2 Java implementation
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public class RotatedArraySearch {

    public static int search(
        int[] numbers,
        int target
    ) {

        int low = 0;
        int high = numbers.length - 1;

        while (low <= high) {

            int mid = low + (high - low) / 2;

            if (numbers[mid] == target) {
                return mid;
            }

            // Left half is sorted.
            if (numbers[low] <= numbers[mid]) {

                if (
                    numbers[low] <= target &&
                    target < numbers[mid]
                ) {

                    high = mid - 1;

                } else {

                    low = mid + 1;
                }

            } else {

                // Right half is sorted.
                if (
                    numbers[mid] < target &&
                    target <= numbers[high]
                ) {

                    low = mid + 1;

                } else {

                    high = mid - 1;
                }
            }
        }

        return -1;
    }

    public static void main(String[] args) {

        int[] numbers = {
            4, 5, 6, 7, 0, 1, 2
        };

        System.out.println(search(numbers, 0));
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
              <code>{`4`}</code>
            </pre>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            14.3 Complexity
          </h3>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            For distinct values:
          </p>
          <ul className="list-disc list-outside pl-5 space-y-2 text-stone-700 my-3 text-sm leading-relaxed">
            <li>Time: <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">O(log n)</code>.</li>
            <li>Auxiliary space: <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">O(1)</code>.</li>
          </ul>
          <h2 className="text-xl sm:text-2xl font-black text-stone-900 mt-10 mb-4 pb-2 border-b border-[#e7e3da] tracking-tight">
            15. Rotated Arrays With Duplicate Values
          </h2>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Consider:
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">[2, 2, 2, 3, 4, 2]</code>
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Duplicates can make it impossible to determine which half is strictly sorted based only on endpoint comparisons.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            For example:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`left = 2
mid  = 2
right = 2`}</code>
            </pre>
          </div>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            These values do not reveal where the rotation boundary is.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            A common solution is to remove one ambiguous endpoint and continue.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            Java implementation
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public static boolean searchWithDuplicates(
    int[] numbers,
    int target
) {

    int low = 0;
    int high = numbers.length - 1;

    while (low <= high) {

        int mid = low + (high - low) / 2;

        if (numbers[mid] == target) {
            return true;
        }

        if (
            numbers[low] == numbers[mid] &&
            numbers[mid] == numbers[high]
        ) {

            low++;
            high--;

            continue;
        }

        if (numbers[low] <= numbers[mid]) {

            if (
                numbers[low] <= target &&
                target < numbers[mid]
            ) {

                high = mid - 1;

            } else {

                low = mid + 1;
            }

        } else {

            if (
                numbers[mid] < target &&
                target <= numbers[high]
            ) {

                low = mid + 1;

            } else {

                high = mid - 1;
            }
        }
    }

    return false;
}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Complexity:
          </p>
          <ul className="list-disc list-outside pl-5 space-y-2 text-stone-700 my-3 text-sm leading-relaxed">
            <li>Typical case: <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">O(log n)</code>.</li>
            <li>Worst case with many duplicates: <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">O(n)</code>.</li>
            <li>Auxiliary space: <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">O(1)</code>.</li>
          </ul>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            This distinction is important: duplicates can remove the information that makes binary search logarithmic.
          </p>
          <hr className="my-8 border-t border-[#e7e3da]" />
        </div>
      ),
    },
    {
      id: 8,
      title: "Part 8: Bubble Sort",
      category: "Part 8 · Adjacent Pair Exchanges",
      anchor: "part-8",
      render: () => (
        <div className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-black text-stone-900 mt-10 mb-4 pb-2 border-b border-[#e7e3da] tracking-tight">
            16. What Is Bubble Sort?
          </h2>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Bubble sort repeatedly compares adjacent elements and swaps them when they are in the wrong order.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            After each complete pass, the largest remaining unsorted value moves toward the end of the array.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            It is one of the simplest sorting algorithms to understand.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            However, it becomes inefficient for large inputs.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            16.1 Example
          </h3>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Input:
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">[5, 1, 4, 2, 8]</code>
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <strong className="font-semibold text-stone-900">Pass 1</strong>
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Compare 5 and 1: swap.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">[1, 5, 4, 2, 8]</code>
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Compare 5 and 4: swap.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">[1, 4, 5, 2, 8]</code>
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Compare 5 and 2: swap.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">[1, 4, 2, 5, 8]</code>
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Compare 5 and 8: no swap.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">[1, 4, 2, 5, 8]</code>
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            The largest value, 8, is now in its final position.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <strong className="font-semibold text-stone-900">Pass 2</strong>
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Compare 1 and 4: no swap.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Compare 4 and 2: swap.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">[1, 2, 4, 5, 8]</code>
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Compare 4 and 5: no swap.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            The array is sorted.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            16.2 Java implementation
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`import java.util.Arrays;

public class BubbleSort {

    public static void sort(int[] numbers) {

        int n = numbers.length;

        for (int i = 0; i < n - 1; i++) {

            boolean swapped = false;

            for (int j = 0; j < n - 1 - i; j++) {

                if (numbers[j] > numbers[j + 1]) {

                    int temp = numbers[j];

                    numbers[j] = numbers[j + 1];

                    numbers[j + 1] = temp;

                    swapped = true;
                }
            }

            // No swap means the array is already sorted.
            if (!swapped) {
                break;
            }
        }
    }

    public static void main(String[] args) {

        int[] numbers = {5, 1, 4, 2, 8};

        sort(numbers);

        System.out.println(Arrays.toString(numbers));
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
              <code>{`[1, 2, 4, 5, 8]`}</code>
            </pre>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            16.3 Complexity analysis
          </h3>
          <div className="overflow-x-auto my-4 rounded-xl border border-[#e7e3da] shadow-2xs">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-stone-900 border-b border-[#e7e3da] font-semibold">
                <tr>
                  <th className="px-4 py-3">Case</th>
                  <th className="px-4 py-3">Complexity</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Best</td>
                  <td className="px-4 py-2.5 text-stone-700">O(n), with early-exit optimization</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Average</td>
                  <td className="px-4 py-2.5 text-stone-700">O(n²)</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Worst</td>
                  <td className="px-4 py-2.5 text-stone-700">O(n²)</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Auxiliary space</td>
                  <td className="px-4 py-2.5 text-stone-700">O(1)</td>
                </tr>
              </tbody>
            </table>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            16.4 Properties
          </h3>
          <ul className="list-disc list-outside pl-5 space-y-2 text-stone-700 my-3 text-sm leading-relaxed">
            <li>Comparison-based.</li>
            <li>Stable.</li>
            <li>In-place.</li>
            <li>Simple implementation.</li>
            <li>Inefficient for large arrays.</li>
          </ul>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <strong className="font-semibold text-stone-900">Why is it stable?</strong>
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            The standard implementation swaps adjacent elements only when the left value is strictly greater than the right value.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Equal elements are not swapped with each other.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Therefore, their relative order is preserved.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            16.5 When should you use bubble sort?
          </h3>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Use it primarily for:
          </p>
          <ul className="list-disc list-outside pl-5 space-y-2 text-stone-700 my-3 text-sm leading-relaxed">
            <li>Learning sorting fundamentals.</li>
            <li>Understanding adjacent swaps.</li>
            <li>Small educational examples.</li>
          </ul>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            It is generally not appropriate for sorting large production datasets.
          </p>
          <hr className="my-8 border-t border-[#e7e3da]" />
        </div>
      ),
    },
    {
      id: 9,
      title: "Part 9: Selection Sort",
      category: "Part 9 · Extremum Selection",
      anchor: "part-9",
      render: () => (
        <div className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-black text-stone-900 mt-10 mb-4 pb-2 border-b border-[#e7e3da] tracking-tight">
            17. What Is Selection Sort?
          </h2>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Selection sort repeatedly finds the smallest element in the unsorted part of an array and places it at the next correct position.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            The array is conceptually divided into two sections:
          </p>
          <ul className="list-disc list-outside pl-5 space-y-2 text-stone-700 my-3 text-sm leading-relaxed">
            <li>Sorted prefix.</li>
            <li>Unsorted suffix.</li>
          </ul>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Each pass selects the minimum element from the unsorted section.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            17.1 Example
          </h3>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Input:
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">[64, 25, 12, 22, 11]</code>
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <strong className="font-semibold text-stone-900">Pass 1</strong>
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Find the minimum value in the complete array.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Minimum = 11.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Swap with the first element.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">[11, 25, 12, 22, 64]</code>
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <strong className="font-semibold text-stone-900">Pass 2</strong>
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Search the remaining unsorted part:
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">[25, 12, 22, 64]</code>
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Minimum = 12.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Swap with the element at index 1.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">[11, 12, 25, 22, 64]</code>
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <strong className="font-semibold text-stone-900">Pass 3</strong>
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Minimum of the remaining part = 22.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">[11, 12, 22, 25, 64]</code>
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <strong className="font-semibold text-stone-900">Pass 4</strong>
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Minimum = 25.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Final array:
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">[11, 12, 22, 25, 64]</code>
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            17.2 Java implementation
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`import java.util.Arrays;

public class SelectionSort {

    public static void sort(int[] numbers) {

        int n = numbers.length;

        for (int i = 0; i < n - 1; i++) {

            int minIndex = i;

            for (int j = i + 1; j < n; j++) {

                if (numbers[j] < numbers[minIndex]) {

                    minIndex = j;
                }
            }

            int temp = numbers[i];

            numbers[i] = numbers[minIndex];

            numbers[minIndex] = temp;
        }
    }

    public static void main(String[] args) {

        int[] numbers = {
            64, 25, 12, 22, 11
        };

        sort(numbers);

        System.out.println(Arrays.toString(numbers));
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
              <code>{`[11, 12, 22, 25, 64]`}</code>
            </pre>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            17.3 Complexity analysis
          </h3>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            The algorithm performs approximately:
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">(n - 1) + (n - 2) + ... + 1</code>
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            comparisons.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Therefore:
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">O(n²)</code>.
          </p>
          <div className="overflow-x-auto my-4 rounded-xl border border-[#e7e3da] shadow-2xs">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-stone-900 border-b border-[#e7e3da] font-semibold">
                <tr>
                  <th className="px-4 py-3">Case</th>
                  <th className="px-4 py-3">Complexity</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Best</td>
                  <td className="px-4 py-2.5 text-stone-700">O(n²)</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Average</td>
                  <td className="px-4 py-2.5 text-stone-700">O(n²)</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Worst</td>
                  <td className="px-4 py-2.5 text-stone-700">O(n²)</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Auxiliary space</td>
                  <td className="px-4 py-2.5 text-stone-700">O(1)</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            It performs only <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">O(n)</code> swaps, even though it makes quadratic comparisons.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            17.4 Properties
          </h3>
          <ul className="list-disc list-outside pl-5 space-y-2 text-stone-700 my-3 text-sm leading-relaxed">
            <li>Comparison-based.</li>
            <li>In-place.</li>
            <li>Usually unstable.</li>
            <li>Performs relatively few swaps.</li>
            <li>Always performs quadratic comparisons.</li>
          </ul>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            17.5 Why is selection sort usually unstable?
          </h3>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Consider:
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">[(4, A), (4, B), (3, C)]</code>
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Assume the number is the sorting key.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            The first minimum is <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">(3, C)</code>.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            The algorithm swaps it with the first element:
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">[(3, C), (4, B), (4, A)]</code>
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            The two values with key 4 have changed their relative order.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Therefore, the standard selection sort implementation is unstable.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            A carefully designed stable selection sort exists, but it requires shifting elements instead of performing the usual direct swap and can have different movement costs.
          </p>
          <hr className="my-8 border-t border-[#e7e3da]" />
        </div>
      ),
    },
    {
      id: 10,
      title: "Part 10: Insertion Sort",
      category: "Part 10 · Sorted Prefix Shifting",
      anchor: "part-10",
      render: () => (
        <div className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-black text-stone-900 mt-10 mb-4 pb-2 border-b border-[#e7e3da] tracking-tight">
            18. What Is Insertion Sort?
          </h2>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Insertion sort builds a sorted section one element at a time.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            It takes the next element, compares it with elements in the sorted section, shifts larger values to the right, and inserts the element into its correct position.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            It behaves similarly to arranging playing cards in your hand.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            18.1 Example
          </h3>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Input:
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">[5, 2, 4, 6, 1, 3]</code>
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Initially, the first element is considered sorted.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <strong className="font-semibold text-stone-900">Step 1</strong>
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Key = 2.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Move 5 right.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">[2, 5, 4, 6, 1, 3]</code>
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <strong className="font-semibold text-stone-900">Step 2</strong>
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Key = 4.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Move 5 right.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">[2, 4, 5, 6, 1, 3]</code>
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <strong className="font-semibold text-stone-900">Step 3</strong>
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Key = 6.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            No movement required.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">[2, 4, 5, 6, 1, 3]</code>
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <strong className="font-semibold text-stone-900">Step 4</strong>
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Key = 1.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Move 6, 5, 4, and 2 right.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">[1, 2, 4, 5, 6, 3]</code>
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <strong className="font-semibold text-stone-900">Step 5</strong>
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Key = 3.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Move 6, 5, and 4 right.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">[1, 2, 3, 4, 5, 6]</code>
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            18.2 Java implementation
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`import java.util.Arrays;

public class InsertionSort {

    public static void sort(int[] numbers) {

        for (int i = 1; i < numbers.length; i++) {

            int key = numbers[i];

            int j = i - 1;

            while (
                j >= 0 &&
                numbers[j] > key
            ) {

                numbers[j + 1] = numbers[j];

                j--;
            }

            numbers[j + 1] = key;
        }
    }

    public static void main(String[] args) {

        int[] numbers = {
            5, 2, 4, 6, 1, 3
        };

        sort(numbers);

        System.out.println(Arrays.toString(numbers));
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
              <code>{`[1, 2, 3, 4, 5, 6]`}</code>
            </pre>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            18.3 Complexity analysis
          </h3>
          <div className="overflow-x-auto my-4 rounded-xl border border-[#e7e3da] shadow-2xs">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-stone-900 border-b border-[#e7e3da] font-semibold">
                <tr>
                  <th className="px-4 py-3">Case</th>
                  <th className="px-4 py-3">Complexity</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Best</td>
                  <td className="px-4 py-2.5 text-stone-700">O(n)</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Average</td>
                  <td className="px-4 py-2.5 text-stone-700">O(n²)</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Worst</td>
                  <td className="px-4 py-2.5 text-stone-700">O(n²)</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Auxiliary space</td>
                  <td className="px-4 py-2.5 text-stone-700">O(1)</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <strong className="font-semibold text-stone-900">Best case:</strong> The array is already sorted, so each new key needs only one comparison.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <strong className="font-semibold text-stone-900">Worst case:</strong> The array is reverse sorted, so every new key must move across the sorted prefix.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            18.4 Properties
          </h3>
          <ul className="list-disc list-outside pl-5 space-y-2 text-stone-700 my-3 text-sm leading-relaxed">
            <li>Comparison-based.</li>
            <li>Stable.</li>
            <li>In-place.</li>
            <li>Adaptive for nearly sorted input.</li>
            <li>Suitable for small arrays.</li>
            <li>Useful when data arrives incrementally.</li>
          </ul>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            18.5 When is insertion sort useful?
          </h3>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Insertion sort is particularly effective when:
          </p>
          <ul className="list-disc list-outside pl-5 space-y-2 text-stone-700 my-3 text-sm leading-relaxed">
            <li>The number of elements is small.</li>
            <li>Input is already nearly sorted.</li>
            <li>Elements arrive one at a time.</li>
            <li>A simple, in-place stable algorithm is desired.</li>
          </ul>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Some advanced sorting implementations use insertion sort to process small partitions because its low overhead can make it faster than more complex algorithms on small inputs.
          </p>
          <hr className="my-8 border-t border-[#e7e3da]" />
        </div>
      ),
    },
    {
      id: 11,
      title: "Part 11: Merge Sort",
      category: "Part 11 · Guaranteed O(n log n) Divide & Conquer",
      anchor: "part-11",
      render: () => (
        <div className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-black text-stone-900 mt-10 mb-4 pb-2 border-b border-[#e7e3da] tracking-tight">
            19. What Is Merge Sort?
          </h2>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Merge sort is a divide-and-conquer sorting algorithm.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            It works through three main stages:
          </p>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">1.</span>
            <div className="flex-1">Divide the array into smaller sections.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">2.</span>
            <div className="flex-1">Recursively sort each section.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">3.</span>
            <div className="flex-1">Merge the sorted sections into one sorted array.</div>
          </div>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            It guarantees <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">O(n log n)</code> time complexity for standard array merge sort.
          </p>
          <h2 className="text-xl sm:text-2xl font-black text-stone-900 mt-10 mb-4 pb-2 border-b border-[#e7e3da] tracking-tight">
            20. Merge Sort Example
          </h2>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Input:
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">[38, 27, 43, 3, 9, 82, 10]</code>
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            20.1 Divide stage
          </h3>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            First divide the array:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`[38, 27, 43, 3, 9, 82, 10]

          /                 \\

[38, 27, 43, 3]          [9, 82, 10]

       /       \\             /     \\

[38, 27]   [43, 3]       [9, 82]  [10]

   / \\        / \\          / \\
[38][27]   [43][3]      [9][82] [10]`}</code>
            </pre>
          </div>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            The division continues until every section contains one element.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            A single-element array is already sorted.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            20.2 Merge stage
          </h3>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Merge adjacent sorted sections:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`[38] + [27] = [27, 38]

[43] + [3] = [3, 43]

[9] + [82] = [9, 82]

[10] = [10]`}</code>
            </pre>
          </div>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Merge again:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`[27, 38] + [3, 43]
= [3, 27, 38, 43]

[9, 82] + [10]
= [9, 10, 82]`}</code>
            </pre>
          </div>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Final merge:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`[3, 27, 38, 43]
+
[9, 10, 82]

= [3, 9, 10, 27, 38, 43, 82]`}</code>
            </pre>
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-stone-900 mt-10 mb-4 pb-2 border-b border-[#e7e3da] tracking-tight">
            21. Merge Sort Java Implementation
          </h2>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`import java.util.Arrays;

public class MergeSort {

    public static void sort(int[] numbers) {

        if (numbers == null) {
            throw new IllegalArgumentException(
                "Array cannot be null"
            );
        }

        if (numbers.length < 2) {
            return;
        }

        int[] temporary = new int[numbers.length];

        mergeSort(numbers, temporary, 0, numbers.length - 1);
    }

    private static void mergeSort(
        int[] numbers,
        int[] temporary,
        int left,
        int right
    ) {

        if (left >= right) {
            return;
        }

        int middle = left + (right - left) / 2;

        mergeSort(
            numbers,
            temporary,
            left,
            middle
        );

        mergeSort(
            numbers,
            temporary,
            middle + 1,
            right
        );

        merge(
            numbers,
            temporary,
            left,
            middle,
            right
        );
    }

    private static void merge(
        int[] numbers,
        int[] temporary,
        int left,
        int middle,
        int right
    ) {

        int i = left;
        int j = middle + 1;
        int k = left;

        while (i <= middle && j <= right) {

            if (numbers[i] <= numbers[j]) {

                temporary[k++] = numbers[i++];

            } else {

                temporary[k++] = numbers[j++];
            }
        }

        while (i <= middle) {

            temporary[k++] = numbers[i++];
        }

        while (j <= right) {

            temporary[k++] = numbers[j++];
        }

        for (int index = left; index <= right; index++) {

            numbers[index] = temporary[index];
        }
    }

    public static void main(String[] args) {

        int[] numbers = {
            38, 27, 43, 3, 9, 82, 10
        };

        sort(numbers);

        System.out.println(Arrays.toString(numbers));
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
              <code>{`[3, 9, 10, 27, 38, 43, 82]`}</code>
            </pre>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            21.1 Why use <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">&lt;=</code> when merging?
          </h3>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Notice:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`if (numbers[i] <= numbers[j])`}</code>
            </pre>
          </div>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            When values are equal, the algorithm chooses the element from the left subarray first.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            This preserves the original relative order of equal elements from the left and right portions.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            That detail contributes to merge sort's stability.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            If this comparison were changed carelessly, equal elements might be reordered.
          </p>
          <h2 className="text-xl sm:text-2xl font-black text-stone-900 mt-10 mb-4 pb-2 border-b border-[#e7e3da] tracking-tight">
            22. Merge Sort Complexity
          </h2>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            The recurrence is:
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">T(n) = 2T(n / 2) + Θ(n)</code>
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Why?
          </p>
          <ul className="list-disc list-outside pl-5 space-y-2 text-stone-700 my-3 text-sm leading-relaxed">
            <li>Two recursive calls sort two halves.</li>
            <li>Merging takes linear time.</li>
            <li>The number of levels is logarithmic.</li>
          </ul>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Therefore:
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Time complexity in best, average, and worst cases:
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">Θ(n log n)</code>
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Space complexity:
          </p>
          <ul className="list-disc list-outside pl-5 space-y-2 text-stone-700 my-3 text-sm leading-relaxed">
            <li>Temporary array: <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">O(n)</code>.</li>
            <li>Recursion stack: <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">O(log n)</code>.</li>
            <li>Total auxiliary space: <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">O(n)</code>.</li>
          </ul>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            22.1 Properties
          </h3>
          <ul className="list-disc list-outside pl-5 space-y-2 text-stone-700 my-3 text-sm leading-relaxed">
            <li>Comparison-based.</li>
            <li>Stable.</li>
            <li>Out-of-place for the standard array implementation.</li>
            <li>Guaranteed <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">O(n log n)</code> time.</li>
            <li>Requires additional memory.</li>
          </ul>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            22.2 Advantages
          </h3>
          <ul className="list-disc list-outside pl-5 space-y-2 text-stone-700 my-3 text-sm leading-relaxed">
            <li>Predictable performance.</li>
            <li>Stable ordering.</li>
            <li>Excellent for large datasets.</li>
            <li>Useful for external sorting.</li>
            <li>Suitable for linked-list sorting.</li>
            <li>Can efficiently merge already sorted datasets.</li>
          </ul>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            22.3 Disadvantages
          </h3>
          <ul className="list-disc list-outside pl-5 space-y-2 text-stone-700 my-3 text-sm leading-relaxed">
            <li>Uses additional memory.</li>
            <li>More implementation complexity than simple sorting algorithms.</li>
            <li>Often unnecessary for very small arrays.</li>
          </ul>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            22.4 External merge sort
          </h3>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            When data is too large to fit into RAM, an external sorting algorithm can be used.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            A common approach:
          </p>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">1.</span>
            <div className="flex-1">Read a manageable portion of a large file.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">2.</span>
            <div className="flex-1">Sort that portion in memory.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">3.</span>
            <div className="flex-1">Write the sorted portion as a temporary run.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">4.</span>
            <div className="flex-1">Repeat until all portions are processed.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">5.</span>
            <div className="flex-1">Merge the sorted runs.</div>
          </div>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            This is why merge-based techniques are important in databases and large-scale data processing.
          </p>
          <hr className="my-8 border-t border-[#e7e3da]" />
        </div>
      ),
    },
    {
      id: 12,
      title: "Part 12: Quick Sort",
      category: "Part 12 · Partitioning & Pivot Mechanics",
      anchor: "part-12",
      render: () => (
        <div className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-black text-stone-900 mt-10 mb-4 pb-2 border-b border-[#e7e3da] tracking-tight">
            23. What Is Quick Sort?
          </h2>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Quick sort is a divide-and-conquer sorting algorithm.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            It chooses a <strong className="font-semibold text-stone-900">pivot</strong> and partitions the array around that pivot.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            After partitioning:
          </p>
          <ul className="list-disc list-outside pl-5 space-y-2 text-stone-700 my-3 text-sm leading-relaxed">
            <li>Values smaller than or equal to the pivot are placed on one side.</li>
            <li>Larger values are placed on the other side.</li>
            <li>The pivot is placed at its final sorted position in a conventional partition scheme.</li>
          </ul>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            The algorithm recursively sorts the two resulting portions.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            23.1 Example
          </h3>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Input:
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">[8, 3, 1, 7, 0, 10, 2]</code>
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Choose pivot:
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">2</code>
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            After partitioning, one possible result is:
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">[1, 0, 2, 7, 8, 10, 3]</code>
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            The pivot <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">2</code> is now in its final position.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Then sort the left partition:
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">[1, 0]</code>
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            And the right partition:
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">[7, 8, 10, 3]</code>
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Continue until the partitions are sorted.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Final result:
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">[0, 1, 2, 3, 7, 8, 10]</code>
          </p>
          <h2 className="text-xl sm:text-2xl font-black text-stone-900 mt-10 mb-4 pb-2 border-b border-[#e7e3da] tracking-tight">
            24. Lomuto Partition Scheme
          </h2>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            A simple teaching implementation uses the last element as the pivot.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            The partitioning process:
          </p>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">1.</span>
            <div className="flex-1">Select the pivot.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">2.</span>
            <div className="flex-1">Maintain a boundary for values less than or equal to it.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">3.</span>
            <div className="flex-1">Scan the remaining elements.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">4.</span>
            <div className="flex-1">Move smaller or equal values to the left.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">5.</span>
            <div className="flex-1">Place the pivot at the boundary.</div>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            24.1 Java implementation
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`import java.util.Arrays;

public class QuickSort {

    public static void sort(int[] numbers) {

        if (numbers == null) {
            throw new IllegalArgumentException(
                "Array cannot be null"
            );
        }

        quickSort(numbers, 0, numbers.length - 1);
    }

    private static void quickSort(
        int[] numbers,
        int low,
        int high
    ) {

        if (low < high) {

            int pivotIndex = partition(
                numbers,
                low,
                high
            );

            quickSort(
                numbers,
                low,
                pivotIndex - 1
            );

            quickSort(
                numbers,
                pivotIndex + 1,
                high
            );
        }
    }

    private static int partition(
        int[] numbers,
        int low,
        int high
    ) {

        int pivot = numbers[high];

        int i = low - 1;

        for (int j = low; j < high; j++) {

            if (numbers[j] <= pivot) {

                i++;

                int temp = numbers[i];

                numbers[i] = numbers[j];

                numbers[j] = temp;
            }
        }

        int temp = numbers[i + 1];

        numbers[i + 1] = numbers[high];

        numbers[high] = temp;

        return i + 1;
    }

    public static void main(String[] args) {

        int[] numbers = {
            8, 3, 1, 7, 0, 10, 2
        };

        sort(numbers);

        System.out.println(Arrays.toString(numbers));
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
              <code>{`[0, 1, 2, 3, 7, 8, 10]`}</code>
            </pre>
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-stone-900 mt-10 mb-4 pb-2 border-b border-[#e7e3da] tracking-tight">
            25. Quicksort Complexity Analysis
          </h2>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            Best case
          </h3>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            The pivot divides the array into approximately equal partitions.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            The recursion depth is approximately <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">log₂ n</code>.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Each level performs linear partitioning work.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Time:
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">O(n log n)</code>
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            Average case
          </h3>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            For reasonably balanced partitions, expected time:
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">O(n log n)</code>
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Randomized pivot selection is one technique used to reduce the chance of repeatedly selecting poor pivots.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            Worst case
          </h3>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Suppose the pivot repeatedly creates partitions of size zero and <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">n - 1</code>.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Recurrence:
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">T(n) = T(n - 1) + Θ(n)</code>
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Therefore:
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">O(n²)</code>
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            This can occur with the last-element-pivot implementation on some already sorted or reverse-sorted arrays.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            Space complexity
          </h3>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Quicksort performs partitioning in the original array, so the partitioning itself is in-place.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            However, recursive calls consume stack memory.
          </p>
          <ul className="list-disc list-outside pl-5 space-y-2 text-stone-700 my-3 text-sm leading-relaxed">
            <li>Average stack space: <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">O(log n)</code> with balanced partitions.</li>
            <li>Worst-case stack space: <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">O(n)</code>.</li>
          </ul>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Thus, the usual textbook description is:
          </p>
          <ul className="list-disc list-outside pl-5 space-y-2 text-stone-700 my-3 text-sm leading-relaxed">
            <li>Average time: <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">O(n log n)</code>.</li>
            <li>Worst time: <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">O(n²)</code>.</li>
            <li>Average auxiliary stack space: <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">O(log n)</code>.</li>
            <li>Worst auxiliary stack space: <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">O(n)</code>.</li>
          </ul>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            25.1 Improving quicksort
          </h3>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Common improvements include:
          </p>
          <ul className="list-disc list-outside pl-5 space-y-2 text-stone-700 my-3 text-sm leading-relaxed">
            <li>Randomized pivot selection.</li>
            <li>Median-of-three pivot selection.</li>
            <li>Three-way partitioning for many duplicate values.</li>
            <li>Recursing on the smaller partition first.</li>
            <li>Using insertion sort for small partitions.</li>
            <li>Preventing excessive recursion depth.</li>
          </ul>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            The simple implementation above is educational. Production implementations use more careful strategies.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            25.2 Properties
          </h3>
          <ul className="list-disc list-outside pl-5 space-y-2 text-stone-700 my-3 text-sm leading-relaxed">
            <li>Comparison-based.</li>
            <li>Usually unstable.</li>
            <li>Usually in-place for array partitioning.</li>
            <li>Very efficient in many practical situations.</li>
            <li>Has a quadratic worst case in its conventional form.</li>
          </ul>
          <hr className="my-8 border-t border-[#e7e3da]" />
        </div>
      ),
    },
    {
      id: 13,
      title: "Part 13: Heap Sort",
      category: "Part 13 · Binary Heap & In-Place Trees",
      anchor: "part-13",
      render: () => (
        <div className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-black text-stone-900 mt-10 mb-4 pb-2 border-b border-[#e7e3da] tracking-tight">
            26. What Is Heap Sort?
          </h2>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Heap sort uses a binary heap to sort an array.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            A binary heap is a complete binary tree that satisfies a heap-order property.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            There are two common types:
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <strong className="font-semibold text-stone-900">Max heap:</strong> Every parent is greater than or equal to its children.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <strong className="font-semibold text-stone-900">Min heap:</strong> Every parent is less than or equal to its children.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            For ascending heap sort, a max heap is commonly used.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            The largest value remains at the root.
          </p>
          <h2 className="text-xl sm:text-2xl font-black text-stone-900 mt-10 mb-4 pb-2 border-b border-[#e7e3da] tracking-tight">
            27. Array Representation of a Heap
          </h2>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            A binary heap can be stored in an array without creating separate node objects.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            For a zero-indexed array:
          </p>
          <ul className="list-disc list-outside pl-5 space-y-2 text-stone-700 my-3 text-sm leading-relaxed">
            <li>Parent of index <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">i</code>: <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">(i - 1) / 2</code>.</li>
            <li>Left child: <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">2 * i + 1</code>.</li>
            <li>Right child: <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">2 * i + 2</code>.</li>
          </ul>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Example:
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Array:
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">[50, 30, 40, 10, 20, 35, 25]</code>
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Tree representation:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`              50
            /    \\
          30      40
         /  \\    /  \\
        10  20  35  25`}</code>
            </pre>
          </div>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            The root contains the maximum value.
          </p>
          <h2 className="text-xl sm:text-2xl font-black text-stone-900 mt-10 mb-4 pb-2 border-b border-[#e7e3da] tracking-tight">
            28. Heap Sort Algorithm
          </h2>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">1.</span>
            <div className="flex-1">Convert the array into a max heap.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">2.</span>
            <div className="flex-1">Swap the root with the last element of the active heap.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">3.</span>
            <div className="flex-1">Reduce the active heap size by one.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">4.</span>
            <div className="flex-1">Restore the max-heap property.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">5.</span>
            <div className="flex-1">Repeat until the heap is exhausted.</div>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            28.1 Java implementation
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`import java.util.Arrays;

public class HeapSort {

    public static void sort(int[] numbers) {

        int n = numbers.length;

        // Build a max heap.
        for (int i = n / 2 - 1; i >= 0; i--) {

            heapify(numbers, n, i);
        }

        // Move the maximum to the sorted suffix.
        for (int i = n - 1; i > 0; i--) {

            int temp = numbers[0];

            numbers[0] = numbers[i];

            numbers[i] = temp;

            heapify(numbers, i, 0);
        }
    }

    private static void heapify(
        int[] numbers,
        int heapSize,
        int root
    ) {

        int largest = root;

        int left = 2 * root + 1;

        int right = 2 * root + 2;

        if (
            left < heapSize &&
            numbers[left] > numbers[largest]
        ) {

            largest = left;
        }

        if (
            right < heapSize &&
            numbers[right] > numbers[largest]
        ) {

            largest = right;
        }

        if (largest != root) {

            int temp = numbers[root];

            numbers[root] = numbers[largest];

            numbers[largest] = temp;

            heapify(numbers, heapSize, largest);
        }
    }

    public static void main(String[] args) {

        int[] numbers = {
            12, 11, 13, 5, 6, 7
        };

        sort(numbers);

        System.out.println(Arrays.toString(numbers));
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
              <code>{`[5, 6, 7, 11, 12, 13]`}</code>
            </pre>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            28.2 Complexity analysis
          </h3>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Building the heap takes <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">O(n)</code> time.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Removing the maximum element requires restoring the heap, which takes <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">O(log n)</code>.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Repeating this operation <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">n</code> times gives:
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">O(n log n)</code>
          </p>
          <div className="overflow-x-auto my-4 rounded-xl border border-[#e7e3da] shadow-2xs">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-stone-900 border-b border-[#e7e3da] font-semibold">
                <tr>
                  <th className="px-4 py-3">Case</th>
                  <th className="px-4 py-3">Complexity</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Best</td>
                  <td className="px-4 py-2.5 text-stone-700">O(n log n)</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Average</td>
                  <td className="px-4 py-2.5 text-stone-700">O(n log n)</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Worst</td>
                  <td className="px-4 py-2.5 text-stone-700">O(n log n)</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Auxiliary space</td>
                  <td className="px-4 py-2.5 text-stone-700">O(1) in an iterative heapify implementation</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            The recursive <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">heapify</code> shown here uses recursion with a maximum depth of <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">O(log n)</code>. An iterative version can make the auxiliary stack requirement <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">O(1)</code>.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            28.3 Properties
          </h3>
          <ul className="list-disc list-outside pl-5 space-y-2 text-stone-700 my-3 text-sm leading-relaxed">
            <li>Comparison-based.</li>
            <li>In-place.</li>
            <li>Unstable.</li>
            <li>Guaranteed <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">O(n log n)</code> time.</li>
            <li>Useful when predictable worst-case performance and low auxiliary array space are important.</li>
          </ul>
          <hr className="my-8 border-t border-[#e7e3da]" />
        </div>
      ),
    },
    {
      id: 14,
      title: "Part 14: Counting Sort",
      category: "Part 14 · Non-Comparison Linear Frequency",
      anchor: "part-14",
      render: () => (
        <div className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-black text-stone-900 mt-10 mb-4 pb-2 border-b border-[#e7e3da] tracking-tight">
            29. What Is Counting Sort?
          </h2>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Counting sort is a non-comparison sorting algorithm.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Instead of comparing every pair of elements, it counts how many times each value appears.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            It then reconstructs the sorted output using those frequencies.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Counting sort is particularly effective when the values are integers in a relatively small range.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            29.1 Example
          </h3>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Input:
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">[4, 2, 2, 8, 3, 3, 1]</code>
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Count each value:
          </p>
          <div className="overflow-x-auto my-4 rounded-xl border border-[#e7e3da] shadow-2xs">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-stone-900 border-b border-[#e7e3da] font-semibold">
                <tr>
                  <th className="px-4 py-3">Value</th>
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
                  <td className="px-4 py-2.5 text-stone-700">2</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">4</td>
                  <td className="px-4 py-2.5 text-stone-700">1</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">5</td>
                  <td className="px-4 py-2.5 text-stone-700">0</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">6</td>
                  <td className="px-4 py-2.5 text-stone-700">0</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">7</td>
                  <td className="px-4 py-2.5 text-stone-700">0</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">8</td>
                  <td className="px-4 py-2.5 text-stone-700">1</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Reconstruct the array in ascending order:
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">[1, 2, 2, 3, 3, 4, 8]</code>
          </p>
          <h2 className="text-xl sm:text-2xl font-black text-stone-900 mt-10 mb-4 pb-2 border-b border-[#e7e3da] tracking-tight">
            30. Counting Sort Java Implementation
          </h2>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            The following implementation supports negative and positive integers and uses cumulative counts to produce a stable result.
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`import java.util.Arrays;

public class CountingSort {

    public static int[] sort(int[] numbers) {

        if (numbers == null) {
            throw new IllegalArgumentException(
                "Array cannot be null"
            );
        }

        if (numbers.length == 0) {
            return new int[0];
        }

        int min = numbers[0];
        int max = numbers[0];

        for (int value : numbers) {

            min = Math.min(min, value);

            max = Math.max(max, value);
        }

        long range =
            (long) max - (long) min + 1;

        if (range > Integer.MAX_VALUE) {

            throw new IllegalArgumentException(
                "Value range is too large for counting sort"
            );
        }

        int[] count = new int[(int) range];

        // Count frequencies.
        for (int value : numbers) {

            count[value - min]++;
        }

        // Convert frequencies into cumulative positions.
        for (int i = 1; i < count.length; i++) {

            count[i] += count[i - 1];
        }

        int[] output = new int[numbers.length];

        // Traverse backwards to preserve stability.
        for (int i = numbers.length - 1; i >= 0; i--) {

            int value = numbers[i];

            int index = value - min;

            output[--count[index]] = value;
        }

        return output;
    }

    public static void main(String[] args) {

        int[] numbers = {
            4, 2, 2, 8, 3, 3, 1, -2
        };

        int[] result = sort(numbers);

        System.out.println(Arrays.toString(result));
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
              <code>{`[-2, 1, 2, 2, 3, 3, 4, 8]`}</code>
            </pre>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            30.1 Complexity
          </h3>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Let:
          </p>
          <ul className="list-disc list-outside pl-5 space-y-2 text-stone-700 my-3 text-sm leading-relaxed">
            <li><code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">n</code> be the number of elements.</li>
            <li><code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">k</code> be the size of the value range.</li>
          </ul>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Time:
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">O(n + k)</code>
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Auxiliary space for the stable implementation:
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">O(n + k)</code>
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            30.2 Advantages
          </h3>
          <ul className="list-disc list-outside pl-5 space-y-2 text-stone-700 my-3 text-sm leading-relaxed">
            <li>Can be faster than comparison sorting for a small value range.</li>
            <li>Stable implementation is possible.</li>
            <li>Handles negative values with an offset.</li>
            <li>Useful in frequency-based problems.</li>
          </ul>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            30.3 Disadvantages
          </h3>
          <ul className="list-disc list-outside pl-5 space-y-2 text-stone-700 my-3 text-sm leading-relaxed">
            <li>Inefficient when the value range is extremely large.</li>
            <li>Requires additional memory.</li>
            <li>Only applicable when values can be mapped to a manageable range of integer keys.</li>
          </ul>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            For example, sorting ten values spread across billions of possible integers would generally make ordinary counting sort unattractive.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            30.4 A key distinction
          </h3>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Counting sort has a different complexity from comparison-based sorting because it uses information about the values, not only comparisons between elements.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Its efficiency depends heavily on the relationship between <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">n</code> and <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">k</code>.
          </p>
          <hr className="my-8 border-t border-[#e7e3da]" />
        </div>
      ),
    },
    {
      id: 15,
      title: "Part 15: Radix Sort",
      category: "Part 15 · Byte & Digit-Level Sorting",
      anchor: "part-15",
      render: () => (
        <div className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-black text-stone-900 mt-10 mb-4 pb-2 border-b border-[#e7e3da] tracking-tight">
            31. What Is Radix Sort?
          </h2>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Radix sort sorts values by processing their individual digits or digit groups.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            A common approach is <strong className="font-semibold text-stone-900">LSD radix sort</strong>, which processes from the least significant digit toward the most significant digit.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            It uses a stable sorting procedure for each digit position.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            31.1 Decimal example
          </h3>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Input:
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">[170, 45, 75, 90, 802, 24, 2, 66]</code>
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <strong className="font-semibold text-stone-900">Pass 1 — Ones digit</strong>
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Sort according to the last digit.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <strong className="font-semibold text-stone-900">Pass 2 — Tens digit</strong>
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Sort according to the second digit while preserving the order established by the previous pass for equal tens digits.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <strong className="font-semibold text-stone-900">Pass 3 — Hundreds digit</strong>
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Sort according to the hundreds digit.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Final output:
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">[2, 24, 45, 66, 75, 90, 170, 802]</code>
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            The stability of each digit pass is essential.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            If a digit-sorting pass is unstable, the ordering created by earlier passes can be destroyed.
          </p>
          <h2 className="text-xl sm:text-2xl font-black text-stone-900 mt-10 mb-4 pb-2 border-b border-[#e7e3da] tracking-tight">
            32. Radix Sort Complexity
          </h2>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Let:
          </p>
          <ul className="list-disc list-outside pl-5 space-y-2 text-stone-700 my-3 text-sm leading-relaxed">
            <li><code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">n</code> be the number of values.</li>
            <li><code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">d</code> be the number of processed digit positions.</li>
            <li><code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">b</code> be the number of possible digit values in the chosen base.</li>
          </ul>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            When stable counting sort is used for each digit:
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Time:
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">O(d(n + b))</code>
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Auxiliary space:
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">O(n + b)</code>
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            If the number of digits and the base are bounded by constants, radix sort can behave like a linear-time algorithm with respect to <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">n</code>.
          </p>
          <h2 className="text-xl sm:text-2xl font-black text-stone-900 mt-10 mb-4 pb-2 border-b border-[#e7e3da] tracking-tight">
            33. Java Radix Sort for Signed Integers
          </h2>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            This implementation sorts all Java <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">int</code> values, including negative values, by processing four bytes using base 256.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            The high bit is flipped during digit extraction so that signed integer ordering is converted into a digit ordering compatible with ascending numerical order.
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`import java.util.Arrays;

public class RadixSort {

    public static void sort(int[] numbers) {

        if (numbers == null) {
            throw new IllegalArgumentException(
                "Array cannot be null"
            );
        }

        int n = numbers.length;

        if (n < 2) {
            return;
        }

        int[] source = numbers;

        int[] destination = new int[n];

        // Four passes: 8 bits per pass.
        for (int shift = 0; shift < 32; shift += 8) {

            int[] count = new int[256];

            // Count the frequency of each byte.
            for (int value : source) {

                int key =
                    ((value ^ Integer.MIN_VALUE) >>> shift)
                    & 0xFF;

                count[key]++;
            }

            // Convert counts into starting positions.
            int position = 0;

            for (int i = 0; i < count.length; i++) {

                int frequency = count[i];

                count[i] = position;

                position += frequency;
            }

            // Stable distribution.
            for (int value : source) {

                int key =
                    ((value ^ Integer.MIN_VALUE) >>> shift)
                    & 0xFF;

                destination[count[key]++] = value;
            }

            int[] temporary = source;

            source = destination;

            destination = temporary;
        }

        // Four passes return the sorted result to the
        // original array.
        if (source != numbers) {

            System.arraycopy(
                source,
                0,
                numbers,
                0,
                n
            );
        }
    }

    public static void main(String[] args) {

        int[] numbers = {
            170, -45, 75, 90, 802,
            24, 2, 66, Integer.MIN_VALUE,
            Integer.MAX_VALUE
        };

        sort(numbers);

        System.out.println(Arrays.toString(numbers));
    }
}`}</code>
            </pre>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            33.1 Properties
          </h3>
          <ul className="list-disc list-outside pl-5 space-y-2 text-stone-700 my-3 text-sm leading-relaxed">
            <li>Non-comparison-based.</li>
            <li>Stable when every digit pass is stable.</li>
            <li>Requires additional memory.</li>
            <li>Useful for fixed-width integer keys and suitable representations of strings.</li>
            <li>Performance depends on digit count and chosen base.</li>
          </ul>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            33.2 Limitations
          </h3>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Radix sort is not automatically faster than every comparison sort.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Its usefulness depends on:
          </p>
          <ul className="list-disc list-outside pl-5 space-y-2 text-stone-700 my-3 text-sm leading-relaxed">
            <li>Data type.</li>
            <li>Number of digits.</li>
            <li>Digit representation.</li>
            <li>Memory requirements.</li>
            <li>Input size.</li>
            <li>Cost of each digit pass.</li>
          </ul>
          <hr className="my-8 border-t border-[#e7e3da]" />
        </div>
      ),
    },
    {
      id: 16,
      title: "Part 16: Bucket Sort",
      category: "Part 16 · Interval Distribution Sorting",
      anchor: "part-16",
      render: () => (
        <div className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-black text-stone-900 mt-10 mb-4 pb-2 border-b border-[#e7e3da] tracking-tight">
            34. What Is Bucket Sort?
          </h2>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Bucket sort distributes elements into multiple groups called buckets.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Each bucket is sorted individually, and the sorted buckets are concatenated to obtain the final output.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            It is especially useful when the values are spread fairly evenly across a known range.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            34.1 Example
          </h3>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Input:
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">[0.42, 0.32, 0.23, 0.52, 0.25, 0.47, 0.51]</code>
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Assume each value is in <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">[0, 1)</code>.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Create several buckets.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            For example:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Bucket 0: values near 0.0–0.2
Bucket 1: values near 0.2–0.4
Bucket 2: values near 0.4–0.6
Bucket 3: values near 0.6–0.8
Bucket 4: values near 0.8–1.0`}</code>
            </pre>
          </div>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Distribute the values:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Bucket 0: []

Bucket 1: [0.32, 0.23, 0.25]

Bucket 2: [0.42, 0.52, 0.47, 0.51]

Bucket 3: []

Bucket 4: []`}</code>
            </pre>
          </div>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Sort each bucket individually.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Concatenate the results:
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">[0.23, 0.25, 0.32, 0.42, 0.47, 0.51, 0.52]</code>
          </p>
          <h2 className="text-xl sm:text-2xl font-black text-stone-900 mt-10 mb-4 pb-2 border-b border-[#e7e3da] tracking-tight">
            35. Java Bucket Sort Implementation
          </h2>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            This example accepts finite floating-point values in the range <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">[0, 1)</code> and sorts each bucket using insertion sort.
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`import java.util.ArrayList;
import java.util.List;
import java.util.Arrays;

public class BucketSort {

    public static void sort(double[] numbers) {

        if (numbers == null) {
            throw new IllegalArgumentException(
                "Array cannot be null"
            );
        }

        int n = numbers.length;

        if (n < 2) {
            return;
        }

        List<List<Double>> buckets =
            new ArrayList<>(n);

        for (int i = 0; i < n; i++) {

            buckets.add(new ArrayList<>());
        }

        // Distribute values into buckets.
        for (double value : numbers) {

            if (
                !Double.isFinite(value) ||
                value < 0.0 ||
                value >= 1.0
            ) {

                throw new IllegalArgumentException(
                    "Values must be finite and in [0, 1)"
                );
            }

            int bucketIndex =
                (int) (value * n);

            buckets.get(bucketIndex).add(value);
        }

        // Sort each bucket individually.
        for (List<Double> bucket : buckets) {

            insertionSort(bucket);
        }

        // Concatenate the sorted buckets.
        int index = 0;

        for (List<Double> bucket : buckets) {

            for (double value : bucket) {

                numbers[index++] = value;
            }
        }
    }

    private static void insertionSort(
        List<Double> bucket
    ) {

        for (int i = 1; i < bucket.size(); i++) {

            double key = bucket.get(i);

            int j = i - 1;

            while (
                j >= 0 &&
                bucket.get(j) > key
            ) {

                bucket.set(j + 1, bucket.get(j));

                j--;
            }

            bucket.set(j + 1, key);
        }
    }

    public static void main(String[] args) {

        double[] numbers = {
            0.42, 0.32, 0.23,
            0.52, 0.25, 0.47, 0.51
        };

        sort(numbers);

        System.out.println(Arrays.toString(numbers));
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
              <code>{`[0.23, 0.25, 0.32, 0.42, 0.47, 0.51, 0.52]`}</code>
            </pre>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            35.1 Complexity analysis
          </h3>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Let <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">n</code> be the number of values and <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">k</code> the number of buckets.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Under a reasonably uniform distribution, the expected work is approximately:
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">O(n + k)</code>
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            With insertion sort inside each bucket, the more detailed cost is:
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">O(n + k + Σ(mᵢ²))</code>
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            where <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">mᵢ</code> is the number of elements in bucket <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">i</code>.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            If many values fall into one bucket, the individual sorting cost can become quadratic.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Worst-case time with insertion sort inside a single crowded bucket:
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">O(n²)</code>
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Auxiliary space:
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">O(n + k)</code>
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            35.2 Properties
          </h3>
          <ul className="list-disc list-outside pl-5 space-y-2 text-stone-700 my-3 text-sm leading-relaxed">
            <li>Distribution-based sorting.</li>
            <li>Uses additional memory.</li>
            <li>Can be very efficient with suitable data distribution.</li>
            <li>Performance depends on the bucket distribution.</li>
            <li>A poor bucket distribution can significantly reduce performance.</li>
          </ul>
          <hr className="my-8 border-t border-[#e7e3da]" />
        </div>
      ),
    },
    {
      id: 17,
      title: "Part 17: Stable vs Unstable Sorting",
      category: "Part 17 · Key-Tie Preservation Invariants",
      anchor: "part-17",
      render: () => (
        <div className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-black text-stone-900 mt-10 mb-4 pb-2 border-b border-[#e7e3da] tracking-tight">
            36. What Is Stable Sorting?
          </h2>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            A sorting algorithm is stable when elements with equal sorting keys preserve their relative order from the original input.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            This matters when sorting records with multiple attributes.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            36.1 Example
          </h3>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Consider student records:
          </p>
          <div className="overflow-x-auto my-4 rounded-xl border border-[#e7e3da] shadow-2xs">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-stone-900 border-b border-[#e7e3da] font-semibold">
                <tr>
                  <th className="px-4 py-3">Original position</th>
                  <th className="px-4 py-3">Student</th>
                  <th className="px-4 py-3">Marks</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">1</td>
                  <td className="px-4 py-2.5 text-stone-700">Alice</td>
                  <td className="px-4 py-2.5 text-stone-700">85</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">2</td>
                  <td className="px-4 py-2.5 text-stone-700">Bob</td>
                  <td className="px-4 py-2.5 text-stone-700">90</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">3</td>
                  <td className="px-4 py-2.5 text-stone-700">Charlie</td>
                  <td className="px-4 py-2.5 text-stone-700">85</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">4</td>
                  <td className="px-4 py-2.5 text-stone-700">David</td>
                  <td className="px-4 py-2.5 text-stone-700">80</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            We want to sort by marks in ascending order.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            A stable sorting algorithm produces:
          </p>
          <div className="overflow-x-auto my-4 rounded-xl border border-[#e7e3da] shadow-2xs">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-stone-900 border-b border-[#e7e3da] font-semibold">
                <tr>
                  <th className="px-4 py-3">Sorted position</th>
                  <th className="px-4 py-3">Student</th>
                  <th className="px-4 py-3">Marks</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">1</td>
                  <td className="px-4 py-2.5 text-stone-700">David</td>
                  <td className="px-4 py-2.5 text-stone-700">80</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">2</td>
                  <td className="px-4 py-2.5 text-stone-700">Alice</td>
                  <td className="px-4 py-2.5 text-stone-700">85</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">3</td>
                  <td className="px-4 py-2.5 text-stone-700">Charlie</td>
                  <td className="px-4 py-2.5 text-stone-700">85</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">4</td>
                  <td className="px-4 py-2.5 text-stone-700">Bob</td>
                  <td className="px-4 py-2.5 text-stone-700">90</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Alice appears before Charlie because she appeared before Charlie in the original collection and both have the same marks.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            36.2 Unstable sorting
          </h3>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            An unstable sorting algorithm is allowed to change the relative ordering of elements whose sorting keys are equal.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            For example:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Original:
[(85, Alice), (85, Charlie)]

Possible unstable result:
[(85, Charlie), (85, Alice)]`}</code>
            </pre>
          </div>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            The sorting result is still numerically correct, but the original tie order is not preserved.
          </p>
          <h2 className="text-xl sm:text-2xl font-black text-stone-900 mt-10 mb-4 pb-2 border-b border-[#e7e3da] tracking-tight">
            37. Stability Comparison
          </h2>
          <div className="overflow-x-auto my-4 rounded-xl border border-[#e7e3da] shadow-2xs">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-stone-900 border-b border-[#e7e3da] font-semibold">
                <tr>
                  <th className="px-4 py-3">Algorithm</th>
                  <th className="px-4 py-3">Standard implementation</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Bubble sort</td>
                  <td className="px-4 py-2.5 text-stone-700">Stable</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Selection sort</td>
                  <td className="px-4 py-2.5 text-stone-700">Unstable</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Insertion sort</td>
                  <td className="px-4 py-2.5 text-stone-700">Stable</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Merge sort</td>
                  <td className="px-4 py-2.5 text-stone-700">Stable</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Quick sort</td>
                  <td className="px-4 py-2.5 text-stone-700">Usually unstable</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Heap sort</td>
                  <td className="px-4 py-2.5 text-stone-700">Unstable</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Counting sort</td>
                  <td className="px-4 py-2.5 text-stone-700">Can be stable</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Radix sort</td>
                  <td className="px-4 py-2.5 text-stone-700">Stable when each digit pass is stable</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Bucket sort</td>
                  <td className="px-4 py-2.5 text-stone-700">Depends on bucket and internal sorting strategy</td>
                </tr>
              </tbody>
            </table>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            37.1 Why stability matters
          </h3>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Suppose a company wants to sort employee records.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            First, employees are sorted by department.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Then, within that ordering, they are sorted by salary.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            A stable second sort by salary preserves the previous department ordering among employees with equal salaries, provided the records were initially ordered by department.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            This is useful in:
          </p>
          <ul className="list-disc list-outside pl-5 space-y-2 text-stone-700 my-3 text-sm leading-relaxed">
            <li>Multi-level sorting.</li>
            <li>Student rankings.</li>
            <li>Employee management.</li>
            <li>Database query processing.</li>
            <li>Data processing pipelines.</li>
          </ul>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Stability is about preserving ties under the comparator. It does not mean that an algorithm produces the same order for all possible comparators.
          </p>
          <hr className="my-8 border-t border-[#e7e3da]" />
        </div>
      ),
    },
    {
      id: 18,
      title: "Part 18: In-Place vs Out-of-Place Sorting",
      category: "Part 18 · Memory Allocation Bounds",
      anchor: "part-18",
      render: () => (
        <div className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-black text-stone-900 mt-10 mb-4 pb-2 border-b border-[#e7e3da] tracking-tight">
            38. What Is In-Place Sorting?
          </h2>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            An in-place sorting algorithm rearranges elements inside the original collection using a relatively small amount of additional memory.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Examples:
          </p>
          <ul className="list-disc list-outside pl-5 space-y-2 text-stone-700 my-3 text-sm leading-relaxed">
            <li>Selection sort.</li>
            <li>Insertion sort.</li>
            <li>Heap sort.</li>
            <li>Conventional array quicksort.</li>
          </ul>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            An in-place algorithm generally uses <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">O(1)</code> or relatively small auxiliary space for its element rearrangement, although recursive stack usage must still be considered.
          </p>
          <h2 className="text-xl sm:text-2xl font-black text-stone-900 mt-10 mb-4 pb-2 border-b border-[#e7e3da] tracking-tight">
            39. What Is Out-of-Place Sorting?
          </h2>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            An out-of-place algorithm uses additional data structures or memory to build the sorted result.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Examples:
          </p>
          <ul className="list-disc list-outside pl-5 space-y-2 text-stone-700 my-3 text-sm leading-relaxed">
            <li>Standard array merge sort.</li>
            <li>Stable counting sort with a separate output array.</li>
            <li>Standard radix sort with an auxiliary array.</li>
            <li>Bucket sort.</li>
          </ul>
          <h2 className="text-xl sm:text-2xl font-black text-stone-900 mt-10 mb-4 pb-2 border-b border-[#e7e3da] tracking-tight">
            40. Comparison
          </h2>
          <div className="overflow-x-auto my-4 rounded-xl border border-[#e7e3da] shadow-2xs">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-stone-900 border-b border-[#e7e3da] font-semibold">
                <tr>
                  <th className="px-4 py-3">Property</th>
                  <th className="px-4 py-3">In-place</th>
                  <th className="px-4 py-3">Out-of-place</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Additional memory</td>
                  <td className="px-4 py-2.5 text-stone-700">Usually small</td>
                  <td className="px-4 py-2.5 text-stone-700">Usually larger</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Original storage</td>
                  <td className="px-4 py-2.5 text-stone-700">Rearranged directly</td>
                  <td className="px-4 py-2.5 text-stone-700">May create additional storage</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Memory efficiency</td>
                  <td className="px-4 py-2.5 text-stone-700">Often better</td>
                  <td className="px-4 py-2.5 text-stone-700">Depends on implementation</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Examples</td>
                  <td className="px-4 py-2.5 text-stone-700">Heap sort, insertion sort</td>
                  <td className="px-4 py-2.5 text-stone-700">Merge sort, bucket sort</td>
                </tr>
              </tbody>
            </table>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            Important distinction
          </h3>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            In-place does not necessarily mean zero extra memory.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            For example:
          </p>
          <ul className="list-disc list-outside pl-5 space-y-2 text-stone-700 my-3 text-sm leading-relaxed">
            <li>Recursive quicksort has stack usage.</li>
            <li>Recursive heapify has stack usage.</li>
            <li>An iterative in-place algorithm may use a fixed number of temporary variables.</li>
          </ul>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Always include stack memory when reporting actual auxiliary space.
          </p>
          <hr className="my-8 border-t border-[#e7e3da]" />
        </div>
      ),
    },
    {
      id: 19,
      title: "Part 19: Complete Sorting Complexity Matrix",
      category: "Part 19 · Theoretical Benchmarks",
      anchor: "part-19",
      render: () => (
        <div className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-black text-stone-900 mt-10 mb-4 pb-2 border-b border-[#e7e3da] tracking-tight">
            41. Complete Sorting Complexity Table
          </h2>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            The following table describes conventional textbook implementations.
          </p>
          <div className="overflow-x-auto my-4 rounded-xl border border-[#e7e3da] shadow-2xs">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-stone-900 border-b border-[#e7e3da] font-semibold">
                <tr>
                  <th className="px-4 py-3">Sorting algorithm</th>
                  <th className="px-4 py-3">Best time</th>
                  <th className="px-4 py-3">Average time</th>
                  <th className="px-4 py-3">Worst time</th>
                  <th className="px-4 py-3">Auxiliary space</th>
                  <th className="px-4 py-3">Stable?</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Bubble sort, optimized</td>
                  <td className="px-4 py-2.5 text-stone-700">O(n)</td>
                  <td className="px-4 py-2.5 text-stone-700">O(n²)</td>
                  <td className="px-4 py-2.5 text-stone-700">O(n²)</td>
                  <td className="px-4 py-2.5 text-stone-700">O(1)</td>
                  <td className="px-4 py-2.5 text-stone-700">Yes</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Selection sort</td>
                  <td className="px-4 py-2.5 text-stone-700">O(n²)</td>
                  <td className="px-4 py-2.5 text-stone-700">O(n²)</td>
                  <td className="px-4 py-2.5 text-stone-700">O(n²)</td>
                  <td className="px-4 py-2.5 text-stone-700">O(1)</td>
                  <td className="px-4 py-2.5 text-stone-700">No</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Insertion sort</td>
                  <td className="px-4 py-2.5 text-stone-700">O(n)</td>
                  <td className="px-4 py-2.5 text-stone-700">O(n²)</td>
                  <td className="px-4 py-2.5 text-stone-700">O(n²)</td>
                  <td className="px-4 py-2.5 text-stone-700">O(1)</td>
                  <td className="px-4 py-2.5 text-stone-700">Yes</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Merge sort</td>
                  <td className="px-4 py-2.5 text-stone-700">O(n log n)</td>
                  <td className="px-4 py-2.5 text-stone-700">O(n log n)</td>
                  <td className="px-4 py-2.5 text-stone-700">O(n log n)</td>
                  <td className="px-4 py-2.5 text-stone-700">O(n)</td>
                  <td className="px-4 py-2.5 text-stone-700">Yes</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Quick sort</td>
                  <td className="px-4 py-2.5 text-stone-700">O(n log n)</td>
                  <td className="px-4 py-2.5 text-stone-700">O(n log n) expected</td>
                  <td className="px-4 py-2.5 text-stone-700">O(n²)</td>
                  <td className="px-4 py-2.5 text-stone-700">O(log n) average stack; O(n) worst stack</td>
                  <td className="px-4 py-2.5 text-stone-700">No</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Heap sort</td>
                  <td className="px-4 py-2.5 text-stone-700">O(n log n)</td>
                  <td className="px-4 py-2.5 text-stone-700">O(n log n)</td>
                  <td className="px-4 py-2.5 text-stone-700">O(n log n)</td>
                  <td className="px-4 py-2.5 text-stone-700">O(1) with iterative heapify</td>
                  <td className="px-4 py-2.5 text-stone-700">No</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Counting sort</td>
                  <td className="px-4 py-2.5 text-stone-700">O(n + k)</td>
                  <td className="px-4 py-2.5 text-stone-700">O(n + k)</td>
                  <td className="px-4 py-2.5 text-stone-700">O(n + k)</td>
                  <td className="px-4 py-2.5 text-stone-700">O(n + k) for stable version</td>
                  <td className="px-4 py-2.5 text-stone-700">Can be</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Radix sort</td>
                  <td className="px-4 py-2.5 text-stone-700">O(d(n + b))</td>
                  <td className="px-4 py-2.5 text-stone-700">O(d(n + b))</td>
                  <td className="px-4 py-2.5 text-stone-700">O(d(n + b))</td>
                  <td className="px-4 py-2.5 text-stone-700">O(n + b)</td>
                  <td className="px-4 py-2.5 text-stone-700">Yes, with stable digit passes</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Bucket sort</td>
                  <td className="px-4 py-2.5 text-stone-700">Distribution-dependent</td>
                  <td className="px-4 py-2.5 text-stone-700">Expected O(n + k) under suitable distribution</td>
                  <td className="px-4 py-2.5 text-stone-700">O(n²) with insertion sorting in one bucket</td>
                  <td className="px-4 py-2.5 text-stone-700">O(n + k)</td>
                  <td className="px-4 py-2.5 text-stone-700">Depends on implementation</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Where:
          </p>
          <ul className="list-disc list-outside pl-5 space-y-2 text-stone-700 my-3 text-sm leading-relaxed">
            <li><code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">n</code> = number of elements.</li>
            <li><code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">k</code> = value range or number of buckets, depending on the algorithm.</li>
            <li><code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">d</code> = number of processed digits.</li>
            <li><code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">b</code> = radix or number of possible digit values.</li>
          </ul>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            41.1 Why is insertion sort useful despite O(n²)?
          </h3>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Its implementation overhead is low.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            For small arrays or nearly sorted inputs, it can perform very well.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            41.2 Why use merge sort?
          </h3>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            It provides a predictable <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">O(n log n)</code> time bound and stability.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            41.3 Why use quicksort?
          </h3>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            It often performs very well in practice because of efficient partitioning and good memory locality, although the basic version has a quadratic worst case.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            41.4 Why use heap sort?
          </h3>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            It provides <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">O(n log n)</code> time with low auxiliary array-space requirements and no quadratic worst case.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            41.5 When are counting, radix, and bucket sort useful?
          </h3>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            They are useful when the nature of the input permits the algorithm to exploit key ranges, digit structure, or distribution.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            They do not replace comparison sorting in every problem.
          </p>
          <hr className="my-8 border-t border-[#e7e3da]" />
        </div>
      ),
    },
    {
      id: 20,
      title: "Part 20: Java Arrays.sort()",
      category: "Part 20 · Dual-Pivot & Primitive Sorts",
      anchor: "part-20",
      render: () => (
        <div className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-black text-stone-900 mt-10 mb-4 pb-2 border-b border-[#e7e3da] tracking-tight">
            42. What Is <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">Arrays.sort()</code>?
          </h2>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">Arrays.sort()</code> is a static method provided by Java's <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">java.util.Arrays</code> class.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            It sorts arrays in ascending order by default.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            It supports:
          </p>
          <ul className="list-disc list-outside pl-5 space-y-2 text-stone-700 my-3 text-sm leading-relaxed">
            <li>Primitive arrays.</li>
            <li>Object arrays.</li>
            <li>Custom comparators for object arrays.</li>
            <li>Sorting specific array ranges.</li>
          </ul>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            For ordinary application development, this is generally preferable to implementing a sorting algorithm manually.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            42.1 Import
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`import java.util.Arrays;`}</code>
            </pre>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            42.2 Sorting an integer array
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`import java.util.Arrays;

public class ArraysSortExample {

    public static void main(String[] args) {

        int[] numbers = {
            5, 2, 8, 1, 3
        };

        Arrays.sort(numbers);

        System.out.println(
            Arrays.toString(numbers)
        );
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
              <code>{`[1, 2, 3, 5, 8]`}</code>
            </pre>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            42.3 Sorting other primitive arrays
          </h3>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">Arrays.sort()</code> also supports primitive types such as:
          </p>
          <ul className="list-disc list-outside pl-5 space-y-2 text-stone-700 my-3 text-sm leading-relaxed">
            <li><code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">byte[]</code></li>
            <li><code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">short[]</code></li>
            <li><code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">char[]</code></li>
            <li><code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">int[]</code></li>
            <li><code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">long[]</code></li>
            <li><code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">float[]</code></li>
            <li><code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">double[]</code></li>
          </ul>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Example:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`double[] values = {
    3.4, 1.2, 5.6, 2.1
};

Arrays.sort(values);

System.out.println(Arrays.toString(values));`}</code>
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
              <code>{`[1.2, 2.1, 3.4, 5.6]`}</code>
            </pre>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            42.4 Sorting object arrays
          </h3>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Object arrays can be sorted by their natural ordering if their elements implement <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">Comparable</code>.
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`import java.util.Arrays;

public class StringSorting {

    public static void main(String[] args) {

        String[] names = {
            "Rahul",
            "Aman",
            "Zoya",
            "Meera"
        };

        Arrays.sort(names);

        System.out.println(
            Arrays.toString(names)
        );
    }
}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Strings are sorted according to their natural lexicographical ordering.
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
              <code>{`[Aman, Meera, Rahul, Zoya]`}</code>
            </pre>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            42.5 Sorting in descending order
          </h3>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            For object arrays, a comparator can be used.
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`import java.util.Arrays;
import java.util.Collections;

public class DescendingSort {

    public static void main(String[] args) {

        Integer[] numbers = {
            5, 2, 8, 1, 3
        };

        Arrays.sort(
            numbers,
            Collections.reverseOrder()
        );

        System.out.println(
            Arrays.toString(numbers)
        );
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
              <code>{`[8, 5, 3, 2, 1]`}</code>
            </pre>
          </div>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Notice that <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">Integer[]</code> is used here rather than <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">int[]</code>.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">Collections.reverseOrder()</code> returns a comparator for objects. It cannot be passed directly to the primitive-array overload of <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">Arrays.sort()</code>.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            42.6 Sorting a range
          </h3>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            You can sort only a selected section of an array.
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`import java.util.Arrays;

public class RangeSort {

    public static void main(String[] args) {

        int[] numbers = {
            9, 7, 5, 3, 1
        };

        Arrays.sort(numbers, 1, 4);

        System.out.println(
            Arrays.toString(numbers)
        );
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
              <code>{`[9, 3, 5, 7, 1]`}</code>
            </pre>
          </div>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            The range starts at index 1 and ends before index 4.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            The <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">toIndex</code> parameter is exclusive.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            42.7 Stability of <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">Arrays.sort()</code>
          </h3>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            There is an important difference between sorting primitive arrays and object arrays.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <strong className="font-semibold text-stone-900">Primitive-array sorting:</strong> The elements are values of primitive types. The ordering stability of equal primitive values is generally not distinguishable in the output because equal primitive values carry no separate object identity.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <strong className="font-semibold text-stone-900">Object-array sorting:</strong> Java guarantees stable sorting for object arrays. Equal elements are not reordered relative to one another by the sort.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            The Java SE 26 API documentation describes the primitive integer-array implementation using Dual-Pivot Quicksort and object-array sorting as stable and adaptive. These implementation notes can evolve across JDK versions, so application code should rely on the documented API contract rather than assuming an internal algorithm forever.
          </p>
          <hr className="my-8 border-t border-[#e7e3da]" />
        </div>
      ),
    },
    {
      id: 21,
      title: "Part 21: Java Collections.sort()",
      category: "Part 21 · List Sorting & Comparators",
      anchor: "part-21",
      render: () => (
        <div className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-black text-stone-900 mt-10 mb-4 pb-2 border-b border-[#e7e3da] tracking-tight">
            43. What Is <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">Collections.sort()</code>?
          </h2>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">Collections.sort()</code> is a static method from Java's <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">java.util.Collections</code> utility class.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            It sorts the elements of a <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">List</code>.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            It supports:
          </p>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">1.</span>
            <div className="flex-1">Natural ordering.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">2.</span>
            <div className="flex-1">Custom ordering through a <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">Comparator</code>.</div>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            43.1 Basic example
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class CollectionsSortExample {

    public static void main(String[] args) {

        List<Integer> numbers = new ArrayList<>();

        numbers.add(50);
        numbers.add(10);
        numbers.add(40);
        numbers.add(20);
        numbers.add(30);

        Collections.sort(numbers);

        System.out.println(numbers);
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
              <code>{`[10, 20, 30, 40, 50]`}</code>
            </pre>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            43.2 Sorting in descending order
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class DescendingListSort {

    public static void main(String[] args) {

        List<Integer> numbers =
            new ArrayList<>(
                List.of(5, 2, 8, 1, 3)
            );

        Collections.sort(
            numbers,
            Collections.reverseOrder()
        );

        System.out.println(numbers);
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
              <code>{`[8, 5, 3, 2, 1]`}</code>
            </pre>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            43.3 Sorting strings
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class StringListSort {

    public static void main(String[] args) {

        List<String> names =
            new ArrayList<>(
                List.of(
                    "Zoya",
                    "Aman",
                    "Rahul",
                    "Meera"
                )
            );

        Collections.sort(names);

        System.out.println(names);
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
              <code>{`[Aman, Meera, Rahul, Zoya]`}</code>
            </pre>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            43.4 Custom sorting with Comparator
          </h3>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Suppose you have employees and want to sort them by salary.
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;

public class EmployeeSorting {

    record Employee(
        String name,
        int salary
    ) {}

    public static void main(String[] args) {

        List<Employee> employees =
            new ArrayList<>(
                List.of(
                    new Employee("Aman", 50000),
                    new Employee("Rahul", 70000),
                    new Employee("Meera", 45000)
                )
            );

        employees.sort(
            Comparator.comparingInt(Employee::salary)
        );

        for (Employee employee : employees) {

            System.out.println(employee);
        }
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
              <code>{`Employee[name=Meera, salary=45000]
Employee[name=Aman, salary=50000]
Employee[name=Rahul, salary=70000]`}</code>
            </pre>
          </div>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            This example uses a Java record, supported from Java 16 onward.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            43.5 Multiple sorting conditions
          </h3>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Suppose students must be sorted:
          </p>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">1.</span>
            <div className="flex-1">By marks in descending order.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">2.</span>
            <div className="flex-1">For equal marks, by name alphabetically.</div>
          </div>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;

public class StudentSorting {

    record Student(
        String name,
        int marks
    ) {}

    public static void main(String[] args) {

        List<Student> students =
            new ArrayList<>(
                List.of(
                    new Student("Rahul", 90),
                    new Student("Aman", 85),
                    new Student("Meera", 90),
                    new Student("Zoya", 85)
                )
            );

        students.sort(
            Comparator
                .comparingInt(Student::marks)
                .reversed()
                .thenComparing(Student::name)
        );

        students.forEach(System.out::println);
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
              <code>{`Student[name=Meera, marks=90]
Student[name=Rahul, marks=90]
Student[name=Aman, marks=85]
Student[name=Zoya, marks=85]`}</code>
            </pre>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            43.6 Stability of <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">Collections.sort()</code>
          </h3>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">Collections.sort()</code> is guaranteed to be stable.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            It uses natural ordering or the comparator you provide. If two elements compare as equal under that ordering, their relative order is preserved.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            The collection must support the required modification operations. Sorting an unmodifiable list such as <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">List.of(...)</code> directly throws <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">UnsupportedOperationException</code>.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Use a modifiable list such as <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">ArrayList</code> when sorting in place.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            The current Java API specifies that <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">Collections.sort()</code> delegates to the list's <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">sort</code> operation. The exact internal sorting strategy is an implementation detail, while stability is part of the contract.
          </p>
          <hr className="my-8 border-t border-[#e7e3da]" />
        </div>
      ),
    },
    {
      id: 22,
      title: "Part 22: Arrays.sort() vs Collections.sort()",
      category: "Part 22 · API Differences & TimSort",
      anchor: "part-22",
      render: () => (
        <div className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-black text-stone-900 mt-10 mb-4 pb-2 border-b border-[#e7e3da] tracking-tight">
            44. Main Differences
          </h2>
          <div className="overflow-x-auto my-4 rounded-xl border border-[#e7e3da] shadow-2xs">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-stone-900 border-b border-[#e7e3da] font-semibold">
                <tr>
                  <th className="px-4 py-3">Feature</th>
                  <th className="px-4 py-3"><code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">Arrays.sort()</code></th>
                  <th className="px-4 py-3"><code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">Collections.sort()</code></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Class</td>
                  <td className="px-4 py-2.5 text-stone-700"><code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">java.util.Arrays</code></td>
                  <td className="px-4 py-2.5 text-stone-700"><code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">java.util.Collections</code></td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Input</td>
                  <td className="px-4 py-2.5 text-stone-700">Array</td>
                  <td className="px-4 py-2.5 text-stone-700">List</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Primitive arrays</td>
                  <td className="px-4 py-2.5 text-stone-700">Supported</td>
                  <td className="px-4 py-2.5 text-stone-700">Not directly</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Object ordering</td>
                  <td className="px-4 py-2.5 text-stone-700">Supported</td>
                  <td className="px-4 py-2.5 text-stone-700">Supported</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Custom comparator</td>
                  <td className="px-4 py-2.5 text-stone-700">Supported for object arrays</td>
                  <td className="px-4 py-2.5 text-stone-700">Supported</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Modifies input</td>
                  <td className="px-4 py-2.5 text-stone-700">Yes</td>
                  <td className="px-4 py-2.5 text-stone-700">Yes</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Object sort stability</td>
                  <td className="px-4 py-2.5 text-stone-700">Guaranteed stable</td>
                  <td className="px-4 py-2.5 text-stone-700">Guaranteed stable</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Primitive sort stability</td>
                  <td className="px-4 py-2.5 text-stone-700">No meaningful object-order guarantee</td>
                  <td className="px-4 py-2.5 text-stone-700">Not applicable</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Common use</td>
                  <td className="px-4 py-2.5 text-stone-700">Sorting arrays</td>
                  <td className="px-4 py-2.5 text-stone-700">Sorting lists</td>
                </tr>
              </tbody>
            </table>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            44.1 When should you use <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">Arrays.sort()</code>?
          </h3>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Use it when the data is stored in an array.
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Arrays.sort(numbers);`}</code>
            </pre>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            44.2 When should you use <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">Collections.sort()</code>?
          </h3>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Use it when the data is stored in a <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">List</code>.
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Collections.sort(numberList);`}</code>
            </pre>
          </div>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            You can also use the modern list method:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`numberList.sort(null);`}</code>
            </pre>
          </div>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Passing <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">null</code> uses natural ordering.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            To specify custom ordering:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`numberList.sort(Comparator.reverseOrder());`}</code>
            </pre>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            44.3 Important performance detail: ArrayList versus LinkedList
          </h3>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Array-based lists provide efficient indexed access.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Linked lists do not.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Java's list-sorting APIs are designed to account for the access characteristics of different list implementations.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            For a large list without random access, the API's sorting and searching implementations can use array-based processing to avoid repeatedly traversing the linked structure.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            The <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">Collections.binarySearch()</code> documentation explicitly distinguishes random-access lists from large sequential-access lists: element comparisons can remain logarithmic while link traversal costs make the overall operation linear.
          </p>
          <hr className="my-8 border-t border-[#e7e3da]" />
        </div>
      ),
    },
    {
      id: 23,
      title: "Part 23: Searching and Sorting Comparison",
      category: "Part 23 · Unified Decision Matrix",
      anchor: "part-23",
      render: () => (
        <div className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-black text-stone-900 mt-10 mb-4 pb-2 border-b border-[#e7e3da] tracking-tight">
            45. Searching Algorithm Comparison
          </h2>
          <div className="overflow-x-auto my-4 rounded-xl border border-[#e7e3da] shadow-2xs">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-stone-900 border-b border-[#e7e3da] font-semibold">
                <tr>
                  <th className="px-4 py-3">Algorithm</th>
                  <th className="px-4 py-3">Best time</th>
                  <th className="px-4 py-3">Average time</th>
                  <th className="px-4 py-3">Worst time</th>
                  <th className="px-4 py-3">Requirement</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Linear search</td>
                  <td className="px-4 py-2.5 text-stone-700">O(1)</td>
                  <td className="px-4 py-2.5 text-stone-700">O(n)</td>
                  <td className="px-4 py-2.5 text-stone-700">O(n)</td>
                  <td className="px-4 py-2.5 text-stone-700">No sorting required</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Binary search</td>
                  <td className="px-4 py-2.5 text-stone-700">O(1)</td>
                  <td className="px-4 py-2.5 text-stone-700">O(log n)</td>
                  <td className="px-4 py-2.5 text-stone-700">O(log n)</td>
                  <td className="px-4 py-2.5 text-stone-700">Sorted data with efficient indexed access</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Lower bound</td>
                  <td className="px-4 py-2.5 text-stone-700">O(log n)</td>
                  <td className="px-4 py-2.5 text-stone-700">O(log n)</td>
                  <td className="px-4 py-2.5 text-stone-700">O(log n)</td>
                  <td className="px-4 py-2.5 text-stone-700">Sorted data</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Upper bound</td>
                  <td className="px-4 py-2.5 text-stone-700">O(log n)</td>
                  <td className="px-4 py-2.5 text-stone-700">O(log n)</td>
                  <td className="px-4 py-2.5 text-stone-700">O(log n)</td>
                  <td className="px-4 py-2.5 text-stone-700">Sorted data</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Rotated-array search, distinct values</td>
                  <td className="px-4 py-2.5 text-stone-700">O(1)</td>
                  <td className="px-4 py-2.5 text-stone-700">O(log n)</td>
                  <td className="px-4 py-2.5 text-stone-700">O(log n)</td>
                  <td className="px-4 py-2.5 text-stone-700">Rotated sorted array</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Rotated-array search, duplicates</td>
                  <td className="px-4 py-2.5 text-stone-700">O(1)</td>
                  <td className="px-4 py-2.5 text-stone-700">Often O(log n)</td>
                  <td className="px-4 py-2.5 text-stone-700">O(n)</td>
                  <td className="px-4 py-2.5 text-stone-700">Rotated sorted array with possible duplicates</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Binary search on answer</td>
                  <td className="px-4 py-2.5 text-stone-700">Depends on predicate</td>
                  <td className="px-4 py-2.5 text-stone-700">Depends on predicate</td>
                  <td className="px-4 py-2.5 text-stone-700">O(n log R) for an O(n) check</td>
                  <td className="px-4 py-2.5 text-stone-700">Monotonic feasibility condition</td>
                </tr>
              </tbody>
            </table>
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-stone-900 mt-10 mb-4 pb-2 border-b border-[#e7e3da] tracking-tight">
            46. Sorting Algorithm Comparison
          </h2>
          <div className="overflow-x-auto my-4 rounded-xl border border-[#e7e3da] shadow-2xs">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-stone-900 border-b border-[#e7e3da] font-semibold">
                <tr>
                  <th className="px-4 py-3">Algorithm</th>
                  <th className="px-4 py-3">Comparison-based?</th>
                  <th className="px-4 py-3">Stable?</th>
                  <th className="px-4 py-3">In-place?</th>
                  <th className="px-4 py-3">Main strength</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Bubble</td>
                  <td className="px-4 py-2.5 text-stone-700">Yes</td>
                  <td className="px-4 py-2.5 text-stone-700">Yes</td>
                  <td className="px-4 py-2.5 text-stone-700">Yes</td>
                  <td className="px-4 py-2.5 text-stone-700">Simplicity</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Selection</td>
                  <td className="px-4 py-2.5 text-stone-700">Yes</td>
                  <td className="px-4 py-2.5 text-stone-700">No, standard form</td>
                  <td className="px-4 py-2.5 text-stone-700">Yes</td>
                  <td className="px-4 py-2.5 text-stone-700">Few swaps</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Insertion</td>
                  <td className="px-4 py-2.5 text-stone-700">Yes</td>
                  <td className="px-4 py-2.5 text-stone-700">Yes</td>
                  <td className="px-4 py-2.5 text-stone-700">Yes</td>
                  <td className="px-4 py-2.5 text-stone-700">Small and nearly sorted inputs</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Merge</td>
                  <td className="px-4 py-2.5 text-stone-700">Yes</td>
                  <td className="px-4 py-2.5 text-stone-700">Yes</td>
                  <td className="px-4 py-2.5 text-stone-700">No, standard array version</td>
                  <td className="px-4 py-2.5 text-stone-700">Guaranteed O(n log n)</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Quick</td>
                  <td className="px-4 py-2.5 text-stone-700">Yes</td>
                  <td className="px-4 py-2.5 text-stone-700">No, standard form</td>
                  <td className="px-4 py-2.5 text-stone-700">Usually</td>
                  <td className="px-4 py-2.5 text-stone-700">Strong practical performance</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Heap</td>
                  <td className="px-4 py-2.5 text-stone-700">Yes</td>
                  <td className="px-4 py-2.5 text-stone-700">No</td>
                  <td className="px-4 py-2.5 text-stone-700">Yes, iterative heap version</td>
                  <td className="px-4 py-2.5 text-stone-700">Worst-case O(n log n)</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Counting</td>
                  <td className="px-4 py-2.5 text-stone-700">No</td>
                  <td className="px-4 py-2.5 text-stone-700">Can be</td>
                  <td className="px-4 py-2.5 text-stone-700">No, stable output version</td>
                  <td className="px-4 py-2.5 text-stone-700">Small integer range</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Radix</td>
                  <td className="px-4 py-2.5 text-stone-700">No</td>
                  <td className="px-4 py-2.5 text-stone-700">Yes, with stable passes</td>
                  <td className="px-4 py-2.5 text-stone-700">Usually no</td>
                  <td className="px-4 py-2.5 text-stone-700">Fixed-width keys</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Bucket</td>
                  <td className="px-4 py-2.5 text-stone-700">No</td>
                  <td className="px-4 py-2.5 text-stone-700">Depends</td>
                  <td className="px-4 py-2.5 text-stone-700">Usually no</td>
                  <td className="px-4 py-2.5 text-stone-700">Suitable value distribution</td>
                </tr>
              </tbody>
            </table>
          </div>
          <hr className="my-8 border-t border-[#e7e3da]" />
        </div>
      ),
    },
    {
      id: 24,
      title: "Part 24: Common Interview Patterns",
      category: "Part 24 · High-Yield Problem Archetypes",
      anchor: "part-24",
      render: () => (
        <div className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-black text-stone-900 mt-10 mb-4 pb-2 border-b border-[#e7e3da] tracking-tight">
            47. Searching Patterns to Master
          </h2>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            Pattern 1 — Basic binary search
          </h3>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Find a target in a sorted array.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Common questions:
          </p>
          <ul className="list-disc list-outside pl-5 space-y-2 text-stone-700 my-3 text-sm leading-relaxed">
            <li>Search Insert Position.</li>
            <li>Find a Target.</li>
            <li>Search in a Sorted Array.</li>
          </ul>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            Pattern 2 — First or last occurrence
          </h3>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Use lower bound and upper bound to find duplicate ranges.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Common questions:
          </p>
          <ul className="list-disc list-outside pl-5 space-y-2 text-stone-700 my-3 text-sm leading-relaxed">
            <li>First and Last Position of an Element.</li>
            <li>Count Occurrences in a Sorted Array.</li>
            <li>Number of Elements Within a Range.</li>
          </ul>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            Pattern 3 — Search in a rotated array
          </h3>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Identify which half is sorted and eliminate the impossible half.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Common questions:
          </p>
          <ul className="list-disc list-outside pl-5 space-y-2 text-stone-700 my-3 text-sm leading-relaxed">
            <li>Search in Rotated Sorted Array.</li>
            <li>Search in Rotated Sorted Array With Duplicates.</li>
            <li>Find Minimum in Rotated Sorted Array.</li>
          </ul>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            Pattern 4 — Binary search on answer
          </h3>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Search for the smallest or largest answer satisfying a condition.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Common questions:
          </p>
          <ul className="list-disc list-outside pl-5 space-y-2 text-stone-700 my-3 text-sm leading-relaxed">
            <li>Koko Eating Bananas.</li>
            <li>Capacity to Ship Packages Within D Days.</li>
            <li>Book Allocation.</li>
            <li>Aggressive Cows.</li>
            <li>Minimum Days to Make Bouquets.</li>
          </ul>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            Pattern 5 — Search a monotonic function
          </h3>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            If the result of a condition only changes in one direction, binary search may be applicable.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Examples:
          </p>
          <ul className="list-disc list-outside pl-5 space-y-2 text-stone-700 my-3 text-sm leading-relaxed">
            <li>First time an event becomes possible.</li>
            <li>Minimum speed satisfying a deadline.</li>
            <li>Maximum distance that satisfies a constraint.</li>
          </ul>
          <hr className="my-8 border-t border-[#e7e3da]" />
        </div>
      ),
    },
    {
      id: 25,
      title: "Part 25: Laboratory Exercises (Labs 1-5)",
      category: "Part 25 · 5 Hands-on Laboratories",
      anchor: "part-25",
      render: () => (
        <div className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-black text-stone-900 mt-10 mb-4 pb-2 border-b border-[#e7e3da] tracking-tight">
            48. Lab 1: Searching Algorithm Comparison
          </h2>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <strong className="font-semibold text-stone-900">Objective:</strong> Compare linear search and binary search.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Requirements:
          </p>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">1.</span>
            <div className="flex-1">Generate a sorted array containing 100,000 integers.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">2.</span>
            <div className="flex-1">Search for a value near the beginning.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">3.</span>
            <div className="flex-1">Search for a value near the middle.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">4.</span>
            <div className="flex-1">Search for a value near the end.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">5.</span>
            <div className="flex-1">Search for a value that does not exist.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">6.</span>
            <div className="flex-1">Implement linear search.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">7.</span>
            <div className="flex-1">Implement iterative binary search.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">8.</span>
            <div className="flex-1">Count comparisons in both implementations.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">9.</span>
            <div className="flex-1">Record measured execution times separately.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">10.</span>
            <div className="flex-1">Explain why binary search requires sorted data.</div>
          </div>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Expected discussion:
          </p>
          <ul className="list-disc list-outside pl-5 space-y-2 text-stone-700 my-3 text-sm leading-relaxed">
            <li>Linear search performs up to <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">n</code> comparisons.</li>
            <li>Binary search performs approximately <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">log₂ n</code> comparisons.</li>
            <li>Both can return a correct result, but their scalability differs.</li>
          </ul>
          <h2 className="text-xl sm:text-2xl font-black text-stone-900 mt-10 mb-4 pb-2 border-b border-[#e7e3da] tracking-tight">
            49. Lab 2: Lower Bound and Upper Bound
          </h2>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Implement a Java class that:
          </p>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">1.</span>
            <div className="flex-1">Accepts a sorted array with duplicates.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">2.</span>
            <div className="flex-1">Finds lower bound.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">3.</span>
            <div className="flex-1">Finds upper bound.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">4.</span>
            <div className="flex-1">Counts target occurrences.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">5.</span>
            <div className="flex-1">Finds the insertion position.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">6.</span>
            <div className="flex-1">Handles an empty array.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">7.</span>
            <div className="flex-1">Handles a target outside the array's range.</div>
          </div>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Suggested input:
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">[1, 2, 2, 2, 4, 5, 7, 7, 9]</code>
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Try targets:
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">2</code>, <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">3</code>, <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">7</code>, <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">10</code>.
          </p>
          <h2 className="text-xl sm:text-2xl font-black text-stone-900 mt-10 mb-4 pb-2 border-b border-[#e7e3da] tracking-tight">
            50. Lab 3: Compare Simple Sorting Algorithms
          </h2>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Implement:
          </p>
          <ul className="list-disc list-outside pl-5 space-y-2 text-stone-700 my-3 text-sm leading-relaxed">
            <li>Bubble sort.</li>
            <li>Selection sort.</li>
            <li>Insertion sort.</li>
          </ul>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Test with:
          </p>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">1.</span>
            <div className="flex-1">Already sorted data.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">2.</span>
            <div className="flex-1">Reverse-sorted data.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">3.</span>
            <div className="flex-1">Randomly arranged data.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">4.</span>
            <div className="flex-1">Data with many duplicate values.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">5.</span>
            <div className="flex-1">Arrays of increasing sizes.</div>
          </div>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Count:
          </p>
          <ul className="list-disc list-outside pl-5 space-y-2 text-stone-700 my-3 text-sm leading-relaxed">
            <li>Comparisons.</li>
            <li>Swaps.</li>
            <li>Shifts.</li>
            <li>Execution time.</li>
          </ul>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Explain why insertion sort performs well on nearly sorted input.
          </p>
          <h2 className="text-xl sm:text-2xl font-black text-stone-900 mt-10 mb-4 pb-2 border-b border-[#e7e3da] tracking-tight">
            51. Lab 4: Compare Efficient Sorting Algorithms
          </h2>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Implement:
          </p>
          <ul className="list-disc list-outside pl-5 space-y-2 text-stone-700 my-3 text-sm leading-relaxed">
            <li>Merge sort.</li>
            <li>Quick sort.</li>
            <li>Heap sort.</li>
          </ul>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Compare:
          </p>
          <ul className="list-disc list-outside pl-5 space-y-2 text-stone-700 my-3 text-sm leading-relaxed">
            <li>Execution time.</li>
            <li>Memory use.</li>
            <li>Stability.</li>
            <li>Worst-case behavior.</li>
            <li>Performance for sorted and reverse-sorted input.</li>
          </ul>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            For quicksort, test multiple pivot strategies or randomized pivot selection.
          </p>
          <h2 className="text-xl sm:text-2xl font-black text-stone-900 mt-10 mb-4 pb-2 border-b border-[#e7e3da] tracking-tight">
            52. Lab 5: Non-Comparison Sorting
          </h2>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Implement:
          </p>
          <ul className="list-disc list-outside pl-5 space-y-2 text-stone-700 my-3 text-sm leading-relaxed">
            <li>Counting sort.</li>
            <li>Radix sort.</li>
            <li>Bucket sort.</li>
          </ul>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Test each algorithm with suitable input.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            For each implementation, document:
          </p>
          <ul className="list-disc list-outside pl-5 space-y-2 text-stone-700 my-3 text-sm leading-relaxed">
            <li>Input assumptions.</li>
            <li>Value range.</li>
            <li>Digit representation or bucket distribution.</li>
            <li>Time complexity.</li>
            <li>Auxiliary memory.</li>
            <li>Limitations.</li>
          </ul>
          <hr className="my-8 border-t border-[#e7e3da]" />
        </div>
      ),
    },
    {
      id: 26,
      title: "Part 26: Assignments (Projects 1-6)",
      category: "Part 26 · 6 Independent Projects",
      anchor: "part-26",
      render: () => (
        <div className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-black text-stone-900 mt-10 mb-4 pb-2 border-b border-[#e7e3da] tracking-tight">
            53. Assignment 1: Search in a Rotated Sorted Array
          </h2>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Input:
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">[4, 5, 6, 7, 0, 1, 2]</code>
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Target:
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">0</code>
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Requirements:
          </p>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">1.</span>
            <div className="flex-1">Implement modified binary search.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">2.</span>
            <div className="flex-1">Return the correct index.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">3.</span>
            <div className="flex-1">Do not sort the array.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">4.</span>
            <div className="flex-1">Explain how the algorithm identifies the sorted half.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">5.</span>
            <div className="flex-1">Analyze complexity.</div>
          </div>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Expected result:
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">4</code>
          </p>
          <h2 className="text-xl sm:text-2xl font-black text-stone-900 mt-10 mb-4 pb-2 border-b border-[#e7e3da] tracking-tight">
            54. Assignment 2: Find First and Last Position
          </h2>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Input:
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">[5, 7, 7, 8, 8, 10]</code>
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Target:
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">8</code>
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Requirements:
          </p>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">1.</span>
            <div className="flex-1">Use binary search.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">2.</span>
            <div className="flex-1">Find the first position.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">3.</span>
            <div className="flex-1">Find the last position.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">4.</span>
            <div className="flex-1">Do not use a linear scan.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">5.</span>
            <div className="flex-1">Analyze time complexity.</div>
          </div>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Expected result:
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">[3, 4]</code>
          </p>
          <h2 className="text-xl sm:text-2xl font-black text-stone-900 mt-10 mb-4 pb-2 border-b border-[#e7e3da] tracking-tight">
            55. Assignment 3: Sort Student Records
          </h2>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Create a Java program with a Student class or record.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Each student should contain:
          </p>
          <ul className="list-disc list-outside pl-5 space-y-2 text-stone-700 my-3 text-sm leading-relaxed">
            <li>Name.</li>
            <li>Roll number.</li>
            <li>Marks.</li>
          </ul>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Requirements:
          </p>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">1.</span>
            <div className="flex-1">Sort by marks ascending.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">2.</span>
            <div className="flex-1">Sort by marks descending.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">3.</span>
            <div className="flex-1">Sort by name alphabetically.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">4.</span>
            <div className="flex-1">Sort by marks descending, then name ascending.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">5.</span>
            <div className="flex-1">Demonstrate stable sorting.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">6.</span>
            <div className="flex-1">Explain natural ordering and custom comparators.</div>
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-stone-900 mt-10 mb-4 pb-2 border-b border-[#e7e3da] tracking-tight">
            56. Assignment 4: Implement Quick Sort
          </h2>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Requirements:
          </p>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">1.</span>
            <div className="flex-1">Implement a partition method.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">2.</span>
            <div className="flex-1">Implement recursive quicksort.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">3.</span>
            <div className="flex-1">Test sorted and reverse-sorted arrays.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">4.</span>
            <div className="flex-1">Explain why the pivot choice affects complexity.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">5.</span>
            <div className="flex-1">Calculate worst-case recursion depth.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">6.</span>
            <div className="flex-1">Investigate randomized pivot selection.</div>
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-stone-900 mt-10 mb-4 pb-2 border-b border-[#e7e3da] tracking-tight">
            57. Assignment 5: Implement Merge Sort
          </h2>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Requirements:
          </p>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">1.</span>
            <div className="flex-1">Implement recursive division.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">2.</span>
            <div className="flex-1">Implement the merge procedure.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">3.</span>
            <div className="flex-1">Sort an array containing duplicate values.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">4.</span>
            <div className="flex-1">Verify stability using tagged records.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">5.</span>
            <div className="flex-1">Explain the recurrence relation.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">6.</span>
            <div className="flex-1">Calculate auxiliary space.</div>
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-stone-900 mt-10 mb-4 pb-2 border-b border-[#e7e3da] tracking-tight">
            58. Assignment 6: Binary Search on Answer
          </h2>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Problem:
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            A number of workers must complete tasks within a given deadline.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Each worker has a maximum workload capacity per day.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Find the minimum required capacity that allows all tasks to finish within the deadline.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Requirements:
          </p>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">1.</span>
            <div className="flex-1">Establish the lower and upper bounds.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">2.</span>
            <div className="flex-1">Write the feasibility function.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">3.</span>
            <div className="flex-1">Prove that feasibility is monotonic.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">4.</span>
            <div className="flex-1">Apply binary search.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">5.</span>
            <div className="flex-1">Analyze the overall complexity.</div>
          </div>
          <hr className="my-8 border-t border-[#e7e3da]" />
        </div>
      ),
    },
    {
      id: 27,
      title: "Part 27: Knowledge Assessment (15 MCQs, 25 Qs & Output)",
      category: "Part 27 · Assessment Suite",
      anchor: "part-27",
      render: () => (
        <div className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-black text-stone-900 mt-10 mb-4 pb-2 border-b border-[#e7e3da] tracking-tight">
            59. Multiple-Choice Questions
          </h2>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <strong className="font-semibold text-stone-900">1. Which algorithm works without requiring sorted input?</strong>
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            A. Binary search
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            B. Lower bound
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            C. Linear search
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            D. Upper bound
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <strong className="font-semibold text-stone-900">2. What is the worst-case time complexity of linear search?</strong>
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
            <strong className="font-semibold text-stone-900">3. What is the time complexity of binary search?</strong>
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
            D. O(2ⁿ)
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <strong className="font-semibold text-stone-900">4. What is required for ordinary binary search?</strong>
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            A. Unsorted input
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            B. Sorted input
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            C. A hash table
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            D. A linked list
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <strong className="font-semibold text-stone-900">5. Which search algorithm finds the first element greater than or equal to a target?</strong>
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            A. Upper bound
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            B. Linear search
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            C. Lower bound
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            D. Quick search
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <strong className="font-semibold text-stone-900">6. Which sorting algorithm uses divide and conquer?</strong>
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            A. Bubble sort
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            B. Selection sort
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            C. Merge sort
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            D. Linear search
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <strong className="font-semibold text-stone-900">7. Which sorting algorithm is stable in its standard implementation?</strong>
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            A. Heap sort
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            B. Selection sort
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            C. Insertion sort
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            D. Standard quicksort
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <strong className="font-semibold text-stone-900">8. Which sorting algorithm typically requires O(n) additional array memory?</strong>
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            A. Heap sort
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
            <strong className="font-semibold text-stone-900">9. Which sorting algorithm repeatedly builds a sorted prefix by inserting the next element?</strong>
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            A. Insertion sort
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            B. Heap sort
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            C. Counting sort
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            D. Quick sort
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <strong className="font-semibold text-stone-900">10. Which sorting algorithm uses a heap?</strong>
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            A. Merge sort
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            B. Heap sort
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            C. Bubble sort
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            D. Bucket sort
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <strong className="font-semibold text-stone-900">11. What is the worst-case time complexity of conventional quicksort?</strong>
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            A. O(n)
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            B. O(log n)
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            C. O(n log n)
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            D. O(n²)
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <strong className="font-semibold text-stone-900">12. Which sorting algorithm is particularly useful when integer values fall within a small range?</strong>
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            A. Counting sort
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            B. Quick sort
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            C. Heap sort
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            D. Merge sort
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <strong className="font-semibold text-stone-900">13. Which technique sorts values digit by digit?</strong>
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            A. Bucket sort
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            B. Radix sort
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            C. Heap sort
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            D. Selection sort
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <strong className="font-semibold text-stone-900">14. Which Java class provides <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">Arrays.sort()</code>?</strong>
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            A. java.util.Collections
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            B. java.util.Arrays
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            C. java.lang.Array
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            D. java.util.Sort
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <strong className="font-semibold text-stone-900">15. Which Java utility method sorts a List?</strong>
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            A. Arrays.sort()
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            B. Collections.sort()
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            C. List.search()
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            D. Scanner.sort()
          </p>
          <h2 className="text-xl sm:text-2xl font-black text-stone-900 mt-10 mb-4 pb-2 border-b border-[#e7e3da] tracking-tight">
            60. Short-Answer Questions
          </h2>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">1.</span>
            <div className="flex-1">What is searching?</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">2.</span>
            <div className="flex-1">What is sorting?</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">3.</span>
            <div className="flex-1">Explain the difference between linear and binary search.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">4.</span>
            <div className="flex-1">Why does binary search require sorted input?</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">5.</span>
            <div className="flex-1">What is binary search on answer?</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">6.</span>
            <div className="flex-1">What is a monotonic predicate?</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">7.</span>
            <div className="flex-1">What is lower bound?</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">8.</span>
            <div className="flex-1">What is upper bound?</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">9.</span>
            <div className="flex-1">How can lower bound and upper bound be used to count occurrences?</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">10.</span>
            <div className="flex-1">Explain searching in a rotated sorted array.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">11.</span>
            <div className="flex-1">Explain bubble sort.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">12.</span>
            <div className="flex-1">Explain selection sort.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">13.</span>
            <div className="flex-1">Explain insertion sort.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">14.</span>
            <div className="flex-1">Explain the divide-and-conquer strategy in merge sort.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">15.</span>
            <div className="flex-1">What is a pivot in quicksort?</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">16.</span>
            <div className="flex-1">Explain how heap sort works.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">17.</span>
            <div className="flex-1">What is counting sort?</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">18.</span>
            <div className="flex-1">Explain radix sort.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">19.</span>
            <div className="flex-1">Explain bucket sort.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">20.</span>
            <div className="flex-1">Differentiate stable and unstable sorting.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">21.</span>
            <div className="flex-1">Differentiate in-place and out-of-place sorting.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">22.</span>
            <div className="flex-1">Why is merge sort stable?</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">23.</span>
            <div className="flex-1">Why can quicksort have O(n²) worst-case time?</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">24.</span>
            <div className="flex-1">Explain the difference between <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">Arrays.sort()</code> and <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">Collections.sort()</code>.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">25.</span>
            <div className="flex-1">Why is insertion sort effective for nearly sorted input?</div>
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-stone-900 mt-10 mb-4 pb-2 border-b border-[#e7e3da] tracking-tight">
            61. Output-Based Questions
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
              <code>{`int[] numbers = {5, 2, 8, 1};

Arrays.sort(numbers);

System.out.println(Arrays.toString(numbers));`}</code>
            </pre>
          </div>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            What is the output?
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
              <code>{`int[] numbers = {1, 2, 2, 2, 4, 6};

System.out.println(lowerBound(numbers, 2));
System.out.println(upperBound(numbers, 2));`}</code>
            </pre>
          </div>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            What are the two output values?
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
              <code>{`int[] numbers = {10, 20, 30, 40, 50};

System.out.println(
    binarySearch(numbers, 40)
);`}</code>
            </pre>
          </div>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            What index is returned?
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <strong className="font-semibold text-stone-900">Question 4</strong>
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`int[] numbers = {5, 1, 4, 2, 8};

BubbleSort.sort(numbers);

System.out.println(Arrays.toString(numbers));`}</code>
            </pre>
          </div>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            What is printed?
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <strong className="font-semibold text-stone-900">Question 5</strong>
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            An array contains 1,000,000 sorted integers.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Approximately how many halvings are needed by binary search to reduce the search interval to one element?
          </p>
          <hr className="my-8 border-t border-[#e7e3da]" />
        </div>
      ),
    },
    {
      id: 28,
      title: "Part 28: Answer Key & Comprehensive Explanations",
      category: "Part 28 · Verification & Solutions",
      anchor: "part-28",
      render: () => (
        <div className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-black text-stone-900 mt-10 mb-4 pb-2 border-b border-[#e7e3da] tracking-tight">
            62. Multiple-Choice Answers
          </h2>
          <div className="overflow-x-auto my-4 rounded-xl border border-[#e7e3da] shadow-2xs">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-stone-900 border-b border-[#e7e3da] font-semibold">
                <tr>
                  <th className="px-4 py-3">Question</th>
                  <th className="px-4 py-3">Correct answer</th>
                  <th className="px-4 py-3">Reason</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">1</td>
                  <td className="px-4 py-2.5 text-stone-700">C</td>
                  <td className="px-4 py-2.5 text-stone-700">Linear search works on unsorted input.</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">2</td>
                  <td className="px-4 py-2.5 text-stone-700">C</td>
                  <td className="px-4 py-2.5 text-stone-700">It may inspect all n elements.</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">3</td>
                  <td className="px-4 py-2.5 text-stone-700">B</td>
                  <td className="px-4 py-2.5 text-stone-700">Binary search halves the interval.</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">4</td>
                  <td className="px-4 py-2.5 text-stone-700">B</td>
                  <td className="px-4 py-2.5 text-stone-700">Ordering is essential to eliminating half the interval.</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">5</td>
                  <td className="px-4 py-2.5 text-stone-700">C</td>
                  <td className="px-4 py-2.5 text-stone-700">Lower bound finds the first value greater than or equal to the target.</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">6</td>
                  <td className="px-4 py-2.5 text-stone-700">C</td>
                  <td className="px-4 py-2.5 text-stone-700">Merge sort recursively divides and merges sections.</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">7</td>
                  <td className="px-4 py-2.5 text-stone-700">C</td>
                  <td className="px-4 py-2.5 text-stone-700">Standard insertion sort preserves equal-key ordering.</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">8</td>
                  <td className="px-4 py-2.5 text-stone-700">B</td>
                  <td className="px-4 py-2.5 text-stone-700">Standard array merge sort uses an auxiliary array.</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">9</td>
                  <td className="px-4 py-2.5 text-stone-700">A</td>
                  <td className="px-4 py-2.5 text-stone-700">Insertion sort builds a sorted prefix.</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">10</td>
                  <td className="px-4 py-2.5 text-stone-700">B</td>
                  <td className="px-4 py-2.5 text-stone-700">Heap sort uses a binary heap.</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">11</td>
                  <td className="px-4 py-2.5 text-stone-700">D</td>
                  <td className="px-4 py-2.5 text-stone-700">Poor partitions can produce quadratic work.</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">12</td>
                  <td className="px-4 py-2.5 text-stone-700">A</td>
                  <td className="px-4 py-2.5 text-stone-700">Counting sort uses a frequency array over a bounded range.</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">13</td>
                  <td className="px-4 py-2.5 text-stone-700">B</td>
                  <td className="px-4 py-2.5 text-stone-700">Radix sort processes digit positions.</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">14</td>
                  <td className="px-4 py-2.5 text-stone-700">B</td>
                  <td className="px-4 py-2.5 text-stone-700"><code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">Arrays</code> is in <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">java.util</code>.</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">15</td>
                  <td className="px-4 py-2.5 text-stone-700">B</td>
                  <td className="px-4 py-2.5 text-stone-700"><code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">Collections.sort()</code> sorts a List.</td>
                </tr>
              </tbody>
            </table>
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-stone-900 mt-10 mb-4 pb-2 border-b border-[#e7e3da] tracking-tight">
            63. Output-Based Answers
          </h2>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <strong className="font-semibold text-stone-900">Question 1</strong>
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`[1, 2, 5, 8]`}</code>
            </pre>
          </div>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            The array is sorted in ascending order.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <strong className="font-semibold text-stone-900">Question 2</strong>
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`1
4`}</code>
            </pre>
          </div>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            The lower bound is index 1 and the upper bound is index 4.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <strong className="font-semibold text-stone-900">Question 3</strong>
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
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            The value 40 is located at index 3.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <strong className="font-semibold text-stone-900">Question 4</strong>
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`[1, 2, 4, 5, 8]`}</code>
            </pre>
          </div>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Bubble sort repeatedly swaps adjacent elements that are out of order.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <strong className="font-semibold text-stone-900">Question 5</strong>
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Approximately 20 halvings.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">2²⁰ = 1,048,576</code>, which is slightly greater than one million.
          </p>
          <hr className="my-8 border-t border-[#e7e3da]" />
        </div>
      ),
    },
    {
      id: 29,
      title: "Part 29: Mini-Project — Search and Sort Toolkit",
      category: "Part 29 · Toolkit Architecture Capstone",
      anchor: "part-29",
      render: () => (
        <div className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-black text-stone-900 mt-10 mb-4 pb-2 border-b border-[#e7e3da] tracking-tight">
            64. Build a Java Search and Sort Toolkit
          </h2>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            Project objective
          </h3>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Create a reusable Java application containing multiple search and sorting implementations.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            Feature 1 — Search toolkit
          </h3>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Implement:
          </p>
          <ul className="list-disc list-outside pl-5 space-y-2 text-stone-700 my-3 text-sm leading-relaxed">
            <li>Linear search.</li>
            <li>Binary search.</li>
            <li>Recursive binary search.</li>
            <li>Lower bound.</li>
            <li>Upper bound.</li>
            <li>Search in a rotated sorted array.</li>
            <li>Binary search on answer.</li>
          </ul>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            Feature 2 — Sorting toolkit
          </h3>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Implement:
          </p>
          <ul className="list-disc list-outside pl-5 space-y-2 text-stone-700 my-3 text-sm leading-relaxed">
            <li>Bubble sort.</li>
            <li>Selection sort.</li>
            <li>Insertion sort.</li>
            <li>Merge sort.</li>
            <li>Quick sort.</li>
            <li>Heap sort.</li>
            <li>Counting sort.</li>
            <li>Radix sort.</li>
            <li>Bucket sort.</li>
          </ul>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            Feature 3 — Test cases
          </h3>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Test:
          </p>
          <ul className="list-disc list-outside pl-5 space-y-2 text-stone-700 my-3 text-sm leading-relaxed">
            <li>Empty arrays.</li>
            <li>Single-element arrays.</li>
            <li>Already sorted arrays.</li>
            <li>Reverse-sorted arrays.</li>
            <li>Duplicate values.</li>
            <li>Negative integers.</li>
            <li>Large datasets.</li>
            <li>Missing search targets.</li>
          </ul>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Use only the input types supported by each algorithm and document those assumptions.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            Feature 4 — Performance measurement
          </h3>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            For each algorithm, display:
          </p>
          <ul className="list-disc list-outside pl-5 space-y-2 text-stone-700 my-3 text-sm leading-relaxed">
            <li>Algorithm name.</li>
            <li>Input size.</li>
            <li>Comparison count, where applicable.</li>
            <li>Swap or movement count, where applicable.</li>
            <li>Execution time.</li>
            <li>Time complexity.</li>
            <li>Auxiliary space.</li>
            <li>Stability.</li>
            <li>In-place or out-of-place classification.</li>
          </ul>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            Feature 5 — Automated correctness checks
          </h3>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            For each sorting algorithm:
          </p>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">1.</span>
            <div className="flex-1">Create a copy of the same input.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">2.</span>
            <div className="flex-1">Sort one copy with your implementation.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">3.</span>
            <div className="flex-1">Sort another copy with <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">Arrays.sort()</code>.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">4.</span>
            <div className="flex-1">Compare the two results using <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">Arrays.equals()</code>.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">5.</span>
            <div className="flex-1">Report whether the custom implementation matches the reference output.</div>
          </div>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            For searching:
          </p>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">1.</span>
            <div className="flex-1">Generate test arrays.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">2.</span>
            <div className="flex-1">Use a straightforward reference search.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">3.</span>
            <div className="flex-1">Compare its result with your implementation.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">4.</span>
            <div className="flex-1">Test targets that are present and absent.</div>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            Suggested folder structure
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`SearchSortToolkit/
│
├── src/
│   ├── searching/
│   │   ├── LinearSearch.java
│   │   ├── BinarySearch.java
│   │   ├── Bounds.java
│   │   └── RotatedSearch.java
│   │
│   ├── sorting/
│   │   ├── BubbleSort.java
│   │   ├── SelectionSort.java
│   │   ├── InsertionSort.java
│   │   ├── MergeSort.java
│   │   ├── QuickSort.java
│   │   ├── HeapSort.java
│   │   ├── CountingSort.java
│   │   ├── RadixSort.java
│   │   └── BucketSort.java
│   │
│   ├── benchmark/
│   │   └── AlgorithmBenchmark.java
│   │
│   ├── testing/
│   │   └── AlgorithmTests.java
│   │
│   └── Main.java
│
└── README.md`}</code>
            </pre>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            Expected project outcome
          </h3>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            By finishing this project, you should understand how search and sort algorithms work internally, how their resource requirements differ, and how to validate implementations against trusted library methods.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            For meaningful performance measurements, use repeated trials and a proper Java benchmarking framework such as JMH rather than relying on a single timing result.
          </p>
          <hr className="my-8 border-t border-[#e7e3da]" />
        </div>
      ),
    },
    {
      id: 30,
      title: "Part 30: Interview Preparation",
      category: "Part 30 · Top 15 Technical Interview Qs",
      anchor: "part-30",
      render: () => (
        <div className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-black text-stone-900 mt-10 mb-4 pb-2 border-b border-[#e7e3da] tracking-tight">
            65. Frequently Asked Interview Questions
          </h2>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <strong className="font-semibold text-stone-900">1. Why is binary search faster than linear search for large sorted arrays?</strong>
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Binary search removes approximately half of the remaining search interval after each comparison, whereas linear search may need to inspect every element.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <strong className="font-semibold text-stone-900">2. Can binary search work on an unsorted array?</strong>
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Ordinary binary search cannot guarantee correct results on an unsorted array because its elimination decisions rely on ordering.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <strong className="font-semibold text-stone-900">3. What is binary search on answer?</strong>
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            It is a technique that uses binary search over possible solution values when a feasibility condition is monotonic.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <strong className="font-semibold text-stone-900">4. What is the difference between lower bound and upper bound?</strong>
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Lower bound returns the first index with value greater than or equal to the target. Upper bound returns the first index with a value strictly greater than the target.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <strong className="font-semibold text-stone-900">5. Why is merge sort O(n log n)?</strong>
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            It has logarithmically many recursion levels and performs linear total merging work at every level.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <strong className="font-semibold text-stone-900">6. Why can quicksort become O(n²)?</strong>
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Repeatedly selecting a poor pivot can create highly unbalanced partitions, causing nearly linear recursion depth and quadratic total partitioning work.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <strong className="font-semibold text-stone-900">7. Which sorting algorithm is stable and in-place?</strong>
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Insertion sort and bubble sort are standard examples.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <strong className="font-semibold text-stone-900">8. Which sorting algorithm provides O(n log n) worst-case time and O(1) auxiliary array space?</strong>
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Heap sort with an iterative heap implementation.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <strong className="font-semibold text-stone-900">9. Why is counting sort not suitable for every integer array?</strong>
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Its memory requirement depends on the value range. A small number of values spread over a huge range can require excessive memory.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <strong className="font-semibold text-stone-900">10. Why does radix sort require stable digit sorting?</strong>
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Stability preserves the ordering established by previously processed digit positions.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <strong className="font-semibold text-stone-900">11. Is merge sort in-place?</strong>
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            The standard array implementation that uses a temporary array is out-of-place. Special variants exist with different performance and complexity characteristics.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <strong className="font-semibold text-stone-900">12. Is quicksort stable?</strong>
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            The conventional in-place partitioning implementation is generally unstable.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <strong className="font-semibold text-stone-900">13. Can insertion sort be faster than merge sort?</strong>
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Yes, for small or nearly sorted inputs its low overhead and adaptive behavior can make it faster in practice.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <strong className="font-semibold text-stone-900">14. What is the difference between <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">Arrays.sort()</code> and <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">Collections.sort()</code>?</strong>
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">Arrays.sort()</code> sorts arrays. <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">Collections.sort()</code> sorts Lists.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <strong className="font-semibold text-stone-900">15. Does Java guarantee that <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">Collections.sort()</code> is stable?</strong>
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Yes. Stability is part of its documented API contract.
          </p>
          <hr className="my-8 border-t border-[#e7e3da]" />
        </div>
      ),
    },
    {
      id: 31,
      title: "Part 31: Module Revision Sheet",
      category: "Part 31 · Quick Reference Summaries",
      anchor: "part-31",
      render: () => (
        <div className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-black text-stone-900 mt-10 mb-4 pb-2 border-b border-[#e7e3da] tracking-tight">
            66. Searching Algorithm Summary
          </h2>
          <div className="overflow-x-auto my-4 rounded-xl border border-[#e7e3da] shadow-2xs">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-stone-900 border-b border-[#e7e3da] font-semibold">
                <tr>
                  <th className="px-4 py-3">Algorithm</th>
                  <th className="px-4 py-3">Core idea</th>
                  <th className="px-4 py-3">Time complexity</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Linear search</td>
                  <td className="px-4 py-2.5 text-stone-700">Examine elements sequentially</td>
                  <td className="px-4 py-2.5 text-stone-700">O(n) worst</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Binary search</td>
                  <td className="px-4 py-2.5 text-stone-700">Repeatedly halve a sorted interval</td>
                  <td className="px-4 py-2.5 text-stone-700">O(log n)</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Binary search on answer</td>
                  <td className="px-4 py-2.5 text-stone-700">Search a range of possible answers using a monotonic condition</td>
                  <td className="px-4 py-2.5 text-stone-700">O(n log R) for an O(n) predicate</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Lower bound</td>
                  <td className="px-4 py-2.5 text-stone-700">Find first value &gt;= target</td>
                  <td className="px-4 py-2.5 text-stone-700">O(log n)</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Upper bound</td>
                  <td className="px-4 py-2.5 text-stone-700">Find first value &gt; target</td>
                  <td className="px-4 py-2.5 text-stone-700">O(log n)</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Rotated search</td>
                  <td className="px-4 py-2.5 text-stone-700">Identify the sorted half and discard the other half</td>
                  <td className="px-4 py-2.5 text-stone-700">O(log n) with distinct values</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Rotated search with duplicates</td>
                  <td className="px-4 py-2.5 text-stone-700">Resolve ambiguous endpoints</td>
                  <td className="px-4 py-2.5 text-stone-700">O(n) worst</td>
                </tr>
              </tbody>
            </table>
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-stone-900 mt-10 mb-4 pb-2 border-b border-[#e7e3da] tracking-tight">
            67. Sorting Algorithm Summary
          </h2>
          <div className="overflow-x-auto my-4 rounded-xl border border-[#e7e3da] shadow-2xs">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-stone-900 border-b border-[#e7e3da] font-semibold">
                <tr>
                  <th className="px-4 py-3">Algorithm</th>
                  <th className="px-4 py-3">Best</th>
                  <th className="px-4 py-3">Average</th>
                  <th className="px-4 py-3">Worst</th>
                  <th className="px-4 py-3">Auxiliary space</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Bubble</td>
                  <td className="px-4 py-2.5 text-stone-700">O(n) optimized</td>
                  <td className="px-4 py-2.5 text-stone-700">O(n²)</td>
                  <td className="px-4 py-2.5 text-stone-700">O(n²)</td>
                  <td className="px-4 py-2.5 text-stone-700">O(1)</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Selection</td>
                  <td className="px-4 py-2.5 text-stone-700">O(n²)</td>
                  <td className="px-4 py-2.5 text-stone-700">O(n²)</td>
                  <td className="px-4 py-2.5 text-stone-700">O(n²)</td>
                  <td className="px-4 py-2.5 text-stone-700">O(1)</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Insertion</td>
                  <td className="px-4 py-2.5 text-stone-700">O(n)</td>
                  <td className="px-4 py-2.5 text-stone-700">O(n²)</td>
                  <td className="px-4 py-2.5 text-stone-700">O(n²)</td>
                  <td className="px-4 py-2.5 text-stone-700">O(1)</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Merge</td>
                  <td className="px-4 py-2.5 text-stone-700">O(n log n)</td>
                  <td className="px-4 py-2.5 text-stone-700">O(n log n)</td>
                  <td className="px-4 py-2.5 text-stone-700">O(n log n)</td>
                  <td className="px-4 py-2.5 text-stone-700">O(n)</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Quick</td>
                  <td className="px-4 py-2.5 text-stone-700">O(n log n)</td>
                  <td className="px-4 py-2.5 text-stone-700">O(n log n) expected</td>
                  <td className="px-4 py-2.5 text-stone-700">O(n²)</td>
                  <td className="px-4 py-2.5 text-stone-700">O(log n) average stack</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Heap</td>
                  <td className="px-4 py-2.5 text-stone-700">O(n log n)</td>
                  <td className="px-4 py-2.5 text-stone-700">O(n log n)</td>
                  <td className="px-4 py-2.5 text-stone-700">O(n log n)</td>
                  <td className="px-4 py-2.5 text-stone-700">O(1) iterative</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Counting</td>
                  <td className="px-4 py-2.5 text-stone-700">O(n + k)</td>
                  <td className="px-4 py-2.5 text-stone-700">O(n + k)</td>
                  <td className="px-4 py-2.5 text-stone-700">O(n + k)</td>
                  <td className="px-4 py-2.5 text-stone-700">O(n + k) stable version</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Radix</td>
                  <td className="px-4 py-2.5 text-stone-700">O(d(n + b))</td>
                  <td className="px-4 py-2.5 text-stone-700">O(d(n + b))</td>
                  <td className="px-4 py-2.5 text-stone-700">O(d(n + b))</td>
                  <td className="px-4 py-2.5 text-stone-700">O(n + b)</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Bucket</td>
                  <td className="px-4 py-2.5 text-stone-700">Distribution-dependent</td>
                  <td className="px-4 py-2.5 text-stone-700">Expected O(n + k) under suitable distribution</td>
                  <td className="px-4 py-2.5 text-stone-700">O(n²) with insertion sorting</td>
                  <td className="px-4 py-2.5 text-stone-700">O(n + k)</td>
                </tr>
              </tbody>
            </table>
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-stone-900 mt-10 mb-4 pb-2 border-b border-[#e7e3da] tracking-tight">
            68. Essential Concepts
          </h2>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <strong className="font-semibold text-stone-900">Searching:</strong>
          </p>
          <ul className="list-disc list-outside pl-5 space-y-2 text-stone-700 my-3 text-sm leading-relaxed">
            <li>Linear search works without sorting.</li>
            <li>Binary search requires consistent ordering and efficient access to the middle.</li>
            <li>Lower bound finds the first value <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">&gt;= target</code>.</li>
            <li>Upper bound finds the first value <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">&gt; target</code>.</li>
            <li>Binary search on answer requires a monotonic feasibility condition.</li>
            <li>Rotated-array binary search identifies an ordered half.</li>
          </ul>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <strong className="font-semibold text-stone-900">Sorting:</strong>
          </p>
          <ul className="list-disc list-outside pl-5 space-y-2 text-stone-700 my-3 text-sm leading-relaxed">
            <li>Bubble sort compares adjacent elements.</li>
            <li>Selection sort selects the minimum.</li>
            <li>Insertion sort builds a sorted prefix.</li>
            <li>Merge sort divides and merges.</li>
            <li>Quick sort partitions around a pivot.</li>
            <li>Heap sort uses a heap.</li>
            <li>Counting sort counts value frequencies.</li>
            <li>Radix sort processes digits.</li>
            <li>Bucket sort distributes elements into buckets.</li>
          </ul>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <strong className="font-semibold text-stone-900">Java APIs:</strong>
          </p>
          <ul className="list-disc list-outside pl-5 space-y-2 text-stone-700 my-3 text-sm leading-relaxed">
            <li><code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">Arrays.sort()</code> for arrays.</li>
            <li><code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">Collections.sort()</code> for Lists.</li>
            <li><code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">Comparator</code> for custom ordering.</li>
            <li><code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">Comparable</code> for natural object ordering.</li>
          </ul>
          <hr className="my-8 border-t border-[#e7e3da]" />
        </div>
      ),
    },
    {
      id: 32,
      title: "Part 32: Module Completion Criteria & Final Takeaways",
      category: "Milestone · Foundations Mastery",
      anchor: "part-32",
      render: () => (
        <div className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-black text-stone-900 mt-10 mb-4 pb-2 border-b border-[#e7e3da] tracking-tight">
            69. Theoretical Knowledge
          </h2>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            You should be able to:
          </p>
          <ul className="list-disc list-outside pl-5 space-y-2 text-stone-700 my-3 text-sm leading-relaxed">
            <li>[ ] Explain searching and sorting.</li>
            <li>[ ] Implement linear search.</li>
            <li>[ ] Implement iterative and recursive binary search.</li>
            <li>[ ] Explain binary search prerequisites.</li>
            <li>[ ] Solve a binary search on answer problem.</li>
            <li>[ ] Implement lower bound and upper bound.</li>
            <li>[ ] Search in rotated sorted arrays.</li>
            <li>[ ] Explain bubble sort.</li>
            <li>[ ] Explain selection sort.</li>
            <li>[ ] Explain insertion sort.</li>
            <li>[ ] Explain merge sort and its recurrence.</li>
            <li>[ ] Explain quick sort and pivot selection.</li>
            <li>[ ] Explain heap sort.</li>
            <li>[ ] Explain counting sort.</li>
            <li>[ ] Explain radix sort.</li>
            <li>[ ] Explain bucket sort.</li>
            <li>[ ] Differentiate stable and unstable sorting.</li>
            <li>[ ] Differentiate in-place and out-of-place sorting.</li>
            <li>[ ] Compare algorithm complexities.</li>
            <li>[ ] Use <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">Arrays.sort()</code>.</li>
            <li>[ ] Use <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">Collections.sort()</code>.</li>
            <li>[ ] Write custom comparators.</li>
          </ul>
          <h2 className="text-xl sm:text-2xl font-black text-stone-900 mt-10 mb-4 pb-2 border-b border-[#e7e3da] tracking-tight">
            70. Practical Completion
          </h2>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Before moving forward, complete:
          </p>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">1.</span>
            <div className="flex-1">All searching implementations.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">2.</span>
            <div className="flex-1">All nine sorting implementations.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">3.</span>
            <div className="flex-1">The five laboratory exercises.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">4.</span>
            <div className="flex-1">At least four assignments.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">5.</span>
            <div className="flex-1">The knowledge assessment.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">6.</span>
            <div className="flex-1">The Search and Sort Toolkit mini-project.</div>
          </div>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            You should be able to write binary search, merge sort, quicksort, and at least one non-comparison sorting algorithm without copying a solution.
          </p>
          <hr className="my-8 border-t border-[#e7e3da]" />
          <h2 className="text-xl sm:text-2xl font-black text-stone-900 mt-10 mb-4 pb-2 border-b border-[#e7e3da] tracking-tight">
            Final Takeaway
          </h2>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Searching and sorting are foundational tools in software engineering.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            Linear search teaches straightforward traversal. Binary search teaches how to exploit ordering and eliminate unnecessary work. Sorting algorithms teach different ways to organize data while balancing speed, memory, stability, and input characteristics.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            The most important lesson is not memorizing nine sorting algorithms. It is learning to choose the right algorithm for the actual problem.
          </p>
          <p className="text-stone-700 text-sm leading-relaxed my-3">
            <strong className="font-semibold text-stone-900">A strong DSA developer knows how an algorithm works, why it is correct, when it is appropriate, and what its complexity guarantees.</strong>
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
            placeholder="Search chapters, algorithms, bounds..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full text-xs px-3 py-2 rounded-xl bg-stone-50 border border-stone-200 focus:outline-none focus:border-orange-500 focus:bg-white transition"
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
                    : "text-stone-700 hover:bg-stone-100 hover:text-stone-900"
                }`}
              >
                <div className="flex-1 min-w-0">
                  <div className={`text-[10px] uppercase font-mono tracking-wider line-clamp-1 mb-0.5 ${
                    isActive ? "text-orange-200" : "text-stone-600 font-semibold"
                  }`}>
                    {sec.category}
                  </div>
                  <div className="text-xs break-words whitespace-normal leading-snug">{sec.title}</div>
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
