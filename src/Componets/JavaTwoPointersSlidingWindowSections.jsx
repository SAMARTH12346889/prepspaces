import React from "react";

export const JAVA_TWO_POINTERS_SLIDING_WINDOW_SECTIONS = [
  {
    id: 0,
    title: "Curriculum Overview: Two Pointers, Sliding Window & Prefix Sums",
    category: "Module Overview",
    content: (
      <div className="space-y-4">
        <p key="p-0-0" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          # <strong className="text-white font-semibold">Module 15 — Two Pointers, Sliding Window &amp; Prefix Sums</strong>
        </p>
        <p key="p-0-2" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <strong className="text-white font-semibold">Java + Data Structures and Algorithms | Advanced Problem-Solving Patterns</strong>
        </p>
        <p key="p-0-4" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          This module introduces three of the most important techniques for solving array, string, and subarray problems efficiently:
        </p>
        <ol key="ol-0-9" className="my-3 space-y-2 pl-2">
          <li key="oli-0-0" className="flex items-start gap-2.5 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-5 h-5 rounded-full bg-slate-800 text-emerald-400 font-mono text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5 border border-slate-700">
              1
            </span>
            <span><strong className="text-white font-semibold">Two Pointers:</strong> Use two indices to explore or modify data without unnecessary nested loops.</span>
          </li>
          <li key="oli-0-1" className="flex items-start gap-2.5 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-5 h-5 rounded-full bg-slate-800 text-emerald-400 font-mono text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5 border border-slate-700">
              2
            </span>
            <span><strong className="text-white font-semibold">Sliding Window:</strong> Maintain a moving range over a contiguous part of an array or string.</span>
          </li>
          <li key="oli-0-2" className="flex items-start gap-2.5 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-5 h-5 rounded-full bg-slate-800 text-emerald-400 font-mono text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5 border border-slate-700">
              3
            </span>
            <span><strong className="text-white font-semibold">Prefix Sums:</strong> Precompute cumulative information so that range queries and subarray calculations become efficient.</span>
          </li>
        </ol>
        <p key="p-0-10" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          These techniques are especially important in coding interviews because they help transform many brute-force <code className="font-mono text-cyan-300 font-semibold px-1 py-0.5 rounded bg-slate-900 border border-slate-800">O(n^2)</code> or <code className="font-mono text-cyan-300 font-semibold px-1 py-0.5 rounded bg-slate-900 border border-slate-800">O(n^3)</code> solutions into <code className="font-mono text-cyan-300 font-semibold px-1 py-0.5 rounded bg-slate-900 border border-slate-800">O(n)</code> or <code className="font-mono text-cyan-300 font-semibold px-1 py-0.5 rounded bg-slate-900 border border-slate-800">O(n\log n)</code> solutions.
        </p>
      </div>
    )
  },
  {
    id: 1,
    title: "1. Pattern-Based Problem-Solving",
    category: "Algorithmic Paradigms",
    content: (
      <div className="space-y-4">
        <p key="p-1-2" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Before learning individual algorithms, understand how to recognize a problem-solving pattern.
        </p>
        <p key="p-1-4" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          In DSA, solving a problem is not simply about knowing syntax or memorizing algorithms. It is about identifying the structure of the problem and selecting an appropriate technique.
        </p>
        <p key="p-1-6" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Consider this problem:
        </p>
        <p key="p-1-8" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <strong className="text-white font-semibold">Problem:</strong> Given an integer array, find two numbers whose sum equals a target.
        </p>
        <div key="code-1-14" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-emerald-500/30 border border-emerald-500/50"></span>Code Example</span>
            <span className="text-[10px] text-slate-400 font-sans">Java / DSA</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`int[] arr = {2, 7, 11, 15};
int target = 9;`}</code>
          </pre>
        </div>
        <p key="p-1-15" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Expected answer: <code className="font-mono text-amber-300 text-xs px-1.5 py-0.5 rounded bg-slate-900 border border-slate-800">2 + 7 = 9</code>.
        </p>
        <p key="p-1-17" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          A beginner might check every possible pair.
        </p>
        <div key="code-1-28" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-emerald-500/30 border border-emerald-500/50"></span>Code Example</span>
            <span className="text-[10px] text-slate-400 font-sans">Java / DSA</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`for (int i = 0; i < arr.length; i++) {
    for (int j = i + 1; j < arr.length; j++) {
        if (arr[i] + arr[j] == target) {
            System.out.println(arr[i] + ", " + arr[j]);
        }
    }
}`}</code>
          </pre>
        </div>
        <p key="p-1-29" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          This examines approximately <code className="font-mono text-cyan-300 font-semibold px-1 py-0.5 rounded bg-slate-900 border border-slate-800">n(n-1)/2</code> pairs.
        </p>
        <p key="p-1-31" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <strong className="text-white font-semibold">Time complexity:</strong> <code className="font-mono text-cyan-300 font-semibold px-1 py-0.5 rounded bg-slate-900 border border-slate-800">O(n^2)</code>.
        </p>
        <p key="p-1-33" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          However, if the array is sorted, we can use two pointers and solve the problem in <code className="font-mono text-cyan-300 font-semibold px-1 py-0.5 rounded bg-slate-900 border border-slate-800">O(n)</code>.
        </p>
        <p key="p-1-35" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          This is the central idea behind pattern-based problem-solving: identify useful properties of the input, then exploit them.
        </p>
        <h3 key="h3-1-37" className="text-lg md:text-xl font-bold text-emerald-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
          1.1 Recognizing common patterns
        </h3>
        <div key="table-1-51" className="my-5 overflow-x-auto rounded-xl border border-slate-800 shadow-md">
          <table className="w-full text-xs text-left border-collapse">
            <thead>
              <tr className="bg-slate-900 border-b border-slate-800 text-emerald-400 font-mono">
                <th key="th-1-0" className="p-3 font-semibold">Problem characteristics</th>
                <th key="th-1-1" className="p-3 font-semibold">Possible pattern</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-850 bg-slate-950/60 font-sans">
              <tr key="tr-1-0" className="hover:bg-slate-900/40 transition-colors">
                <td key="td-1-0-0" className="p-3 text-slate-300 font-mono text-slate-200">Find a pair in a sorted array</td>
                <td key="td-1-0-1" className="p-3 text-slate-300 ">Opposite-direction two pointers</td>
              </tr>
              <tr key="tr-1-1" className="hover:bg-slate-900/40 transition-colors">
                <td key="td-1-1-0" className="p-3 text-slate-300 font-mono text-slate-200">Find a triplet with a target sum</td>
                <td key="td-1-1-1" className="p-3 text-slate-300 ">Sorting + two pointers</td>
              </tr>
              <tr key="tr-1-2" className="hover:bg-slate-900/40 transition-colors">
                <td key="td-1-2-0" className="p-3 text-slate-300 font-mono text-slate-200">Detect a cycle in a linked list</td>
                <td key="td-1-2-1" className="p-3 text-slate-300 ">Fast and slow pointers</td>
              </tr>
              <tr key="tr-1-3" className="hover:bg-slate-900/40 transition-colors">
                <td key="td-1-3-0" className="p-3 text-slate-300 font-mono text-slate-200">Remove duplicates in-place</td>
                <td key="td-1-3-1" className="p-3 text-slate-300 ">Same-direction two pointers</td>
              </tr>
              <tr key="tr-1-4" className="hover:bg-slate-900/40 transition-colors">
                <td key="td-1-4-0" className="p-3 text-slate-300 font-mono text-slate-200">Find maximum sum of exactly K consecutive elements</td>
                <td key="td-1-4-1" className="p-3 text-slate-300 ">Fixed-size sliding window</td>
              </tr>
              <tr key="tr-1-5" className="hover:bg-slate-900/40 transition-colors">
                <td key="td-1-5-0" className="p-3 text-slate-300 font-mono text-slate-200">Find the longest valid substring</td>
                <td key="td-1-5-1" className="p-3 text-slate-300 ">Variable-size sliding window</td>
              </tr>
              <tr key="tr-1-6" className="hover:bg-slate-900/40 transition-colors">
                <td key="td-1-6-0" className="p-3 text-slate-300 font-mono text-slate-200">Find the sum between two indices repeatedly</td>
                <td key="td-1-6-1" className="p-3 text-slate-300 ">Prefix sums</td>
              </tr>
              <tr key="tr-1-7" className="hover:bg-slate-900/40 transition-colors">
                <td key="td-1-7-0" className="p-3 text-slate-300 font-mono text-slate-200">Count subarrays whose sum equals K</td>
                <td key="td-1-7-1" className="p-3 text-slate-300 ">Prefix sums + HashMap</td>
              </tr>
              <tr key="tr-1-8" className="hover:bg-slate-900/40 transition-colors">
                <td key="td-1-8-0" className="p-3 text-slate-300 font-mono text-slate-200">Find a maximum-sum contiguous subarray</td>
                <td key="td-1-8-1" className="p-3 text-slate-300 ">Kadane&apos;s algorithm</td>
              </tr>
              <tr key="tr-1-9" className="hover:bg-slate-900/40 transition-colors">
                <td key="td-1-9-0" className="p-3 text-slate-300 font-mono text-slate-200">Apply many range updates</td>
                <td key="td-1-9-1" className="p-3 text-slate-300 ">Difference array</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p key="p-1-52" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          These are clues rather than strict rules. Some problems can be solved using multiple techniques.
        </p>
        <h3 key="h3-1-54" className="text-lg md:text-xl font-bold text-emerald-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
          1.2 Understand the type of range
        </h3>
        <p key="p-1-56" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          One of the most important distinctions is between a <em className="text-slate-300 italic">subarray</em>, a <em className="text-slate-300 italic">substring</em>, and a <em className="text-slate-300 italic">subsequence</em>.
        </p>
        <p key="p-1-58" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <strong className="text-white font-semibold">Subarray:</strong> A contiguous portion of an array.
        </p>
        <div key="code-1-65" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-emerald-500/30 border border-emerald-500/50"></span>Code Example</span>
            <span className="text-[10px] text-slate-400 font-sans">Java / DSA</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`Array:     [2, 4, 6, 8, 10]

Subarray:  [4, 6, 8]`}</code>
          </pre>
        </div>
        <p key="p-1-66" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <strong className="text-white font-semibold">Substring:</strong> A contiguous portion of a string.
        </p>
        <div key="code-1-73" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-emerald-500/30 border border-emerald-500/50"></span>Code Example</span>
            <span className="text-[10px] text-slate-400 font-sans">Java / DSA</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`String:    "PROGRAM"

Substring: "GRA"`}</code>
          </pre>
        </div>
        <p key="p-1-74" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <strong className="text-white font-semibold">Subsequence:</strong> Elements that retain their original order but do not have to be adjacent.
        </p>
        <div key="code-1-81" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-emerald-500/30 border border-emerald-500/50"></span>Code Example</span>
            <span className="text-[10px] text-slate-400 font-sans">Java / DSA</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`String:      "PROGRAM"

Subsequence: "POM"`}</code>
          </pre>
        </div>
        <p key="p-1-82" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Sliding windows and most basic subarray techniques operate on contiguous ranges. A subsequence problem may require dynamic programming instead.
        </p>
        <h3 key="h3-1-84" className="text-lg md:text-xl font-bold text-emerald-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
          1.3 A practical problem-solving workflow
        </h3>
        <p key="p-1-86" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          When you receive an array or string problem:
        </p>
        <ol key="ol-1-96" className="my-3 space-y-2 pl-2">
          <li key="oli-1-0" className="flex items-start gap-2.5 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-5 h-5 rounded-full bg-slate-800 text-emerald-400 font-mono text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5 border border-slate-700">
              1
            </span>
            <span>Identify whether it asks for a pair, triplet, subarray, substring, or subsequence.</span>
          </li>
          <li key="oli-1-1" className="flex items-start gap-2.5 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-5 h-5 rounded-full bg-slate-800 text-emerald-400 font-mono text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5 border border-slate-700">
              2
            </span>
            <span>Check whether the input is sorted.</span>
          </li>
          <li key="oli-1-2" className="flex items-start gap-2.5 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-5 h-5 rounded-full bg-slate-800 text-emerald-400 font-mono text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5 border border-slate-700">
              3
            </span>
            <span>Identify whether negative numbers are allowed.</span>
          </li>
          <li key="oli-1-3" className="flex items-start gap-2.5 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-5 h-5 rounded-full bg-slate-800 text-emerald-400 font-mono text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5 border border-slate-700">
              4
            </span>
            <span>Determine whether you need a maximum, minimum, count, existence check, or actual indices.</span>
          </li>
          <li key="oli-1-4" className="flex items-start gap-2.5 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-5 h-5 rounded-full bg-slate-800 text-emerald-400 font-mono text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5 border border-slate-700">
              5
            </span>
            <span>Write a brute-force solution first.</span>
          </li>
          <li key="oli-1-5" className="flex items-start gap-2.5 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-5 h-5 rounded-full bg-slate-800 text-emerald-400 font-mono text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5 border border-slate-700">
              6
            </span>
            <span>Identify repeated work and look for a suitable pattern.</span>
          </li>
          <li key="oli-1-6" className="flex items-start gap-2.5 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-5 h-5 rounded-full bg-slate-800 text-emerald-400 font-mono text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5 border border-slate-700">
              7
            </span>
            <span>Confirm the time and space complexity.</span>
          </li>
          <li key="oli-1-7" className="flex items-start gap-2.5 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-5 h-5 rounded-full bg-slate-800 text-emerald-400 font-mono text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5 border border-slate-700">
              8
            </span>
            <span>Test edge cases such as empty input, duplicates, negative numbers, and arrays of length one.</span>
          </li>
        </ol>
        <p key="p-1-97" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <strong className="text-white font-semibold">Important:</strong> Never apply a sliding-window sum technique blindly when negative numbers are present. Its usual shrinking logic relies on predictable changes in the sum.
        </p>
      </div>
    )
  },
  {
    id: 2,
    title: "2. Two-Pointer Technique",
    category: "Two Pointers",
    content: (
      <div className="space-y-4">
        <p key="p-2-2" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          The two-pointer technique uses two indices to process an array, string, or linked list.
        </p>
        <p key="p-2-4" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Instead of comparing every possible combination, we move pointers according to some condition.
        </p>
        <p key="p-2-6" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          The general structure is:
        </p>
        <div key="code-2-18" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-emerald-500/30 border border-emerald-500/50"></span>Code Example</span>
            <span className="text-[10px] text-slate-400 font-sans">Java / DSA</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`int left = 0;
int right = arr.length - 1;

while (left < right) {
    // Process current elements

    // Move left, right, or both
}`}</code>
          </pre>
        </div>
        <p key="p-2-19" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          The two-pointer technique can reduce many <code className="font-mono text-cyan-300 font-semibold px-1 py-0.5 rounded bg-slate-900 border border-slate-800">O(n^2)</code> operations to <code className="font-mono text-cyan-300 font-semibold px-1 py-0.5 rounded bg-slate-900 border border-slate-800">O(n)</code>.
        </p>
        <p key="p-2-21" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          There are three important variations:
        </p>
        <ul key="ul-2-26" className="my-3 space-y-1.5 pl-2">
          <li key="li-2-0" className="flex items-start gap-2 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0"></span>
            <span>Opposite-direction pointers.</span>
          </li>
          <li key="li-2-1" className="flex items-start gap-2 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0"></span>
            <span>Fast and slow pointers.</span>
          </li>
          <li key="li-2-2" className="flex items-start gap-2 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0"></span>
            <span>Same-direction pointers.</span>
          </li>
        </ul>
        <h3 key="h3-2-27" className="text-lg md:text-xl font-bold text-emerald-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
          2.1 Opposite-Direction Pointers
        </h3>
        <p key="p-2-29" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          In this pattern, one pointer starts at the beginning and another starts at the end.
        </p>
        <div key="code-2-37" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-emerald-500/30 border border-emerald-500/50"></span>Code Example</span>
            <span className="text-[10px] text-slate-400 font-sans">Java / DSA</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`Index:    0   1   2   3   4
Array:   [1,  2,  4,  7,  9]

          L           R`}</code>
          </pre>
        </div>
        <p key="p-2-38" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          The pointers move towards each other until they meet.
        </p>
        <h4 key="h4-2-40" className="text-base font-semibold text-white mt-6 mb-2 flex items-center gap-2">
          <span className="text-emerald-500 font-mono">▸</span>
          Example: Two Sum in a Sorted Array
        </h4>
        <p key="p-2-42" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <strong className="text-white font-semibold">Problem:</strong> Given a sorted array, determine whether two elements add up to a target.
        </p>
        <div key="code-2-48" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-emerald-500/30 border border-emerald-500/50"></span>Code Example</span>
            <span className="text-[10px] text-slate-400 font-sans">Java / DSA</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`int[] arr = {1, 2, 4, 7, 9};
int target = 11;`}</code>
          </pre>
        </div>
        <p key="p-2-49" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Expected answer:
        </p>
        <div key="code-2-54" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-emerald-500/30 border border-emerald-500/50"></span>Code Example</span>
            <span className="text-[10px] text-slate-400 font-sans">Java / DSA</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`2 + 9 = 11`}</code>
          </pre>
        </div>
        <h4 key="h4-2-55" className="text-base font-semibold text-white mt-6 mb-2 flex items-center gap-2">
          <span className="text-emerald-500 font-mono">▸</span>
          Step-by-step execution
        </h4>
        <p key="p-2-57" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Initially:
        </p>
        <div key="code-2-65" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-emerald-500/30 border border-emerald-500/50"></span>Code Example</span>
            <span className="text-[10px] text-slate-400 font-sans">Java / DSA</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`Array: [1, 2, 4, 7, 9]
        L           R

1 + 9 = 10`}</code>
          </pre>
        </div>
        <p key="p-2-66" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          The sum is smaller than the target.
        </p>
        <p key="p-2-68" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Because the array is sorted, moving the left pointer right increases the possible sum.
        </p>
        <div key="code-2-76" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-emerald-500/30 border border-emerald-500/50"></span>Code Example</span>
            <span className="text-[10px] text-slate-400 font-sans">Java / DSA</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`Array: [1, 2, 4, 7, 9]
           L        R

2 + 9 = 11`}</code>
          </pre>
        </div>
        <p key="p-2-77" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          We found the answer.
        </p>
        <h4 key="h4-2-79" className="text-base font-semibold text-white mt-6 mb-2 flex items-center gap-2">
          <span className="text-emerald-500 font-mono">▸</span>
          Java implementation
        </h4>
        <div key="code-2-117" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-emerald-500/30 border border-emerald-500/50"></span>Code Example</span>
            <span className="text-[10px] text-slate-400 font-sans">Java / DSA</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`public class TwoSumSorted {

    public static boolean twoSum(int[] arr, int target) {

        int left = 0;
        int right = arr.length - 1;

        while (left < right) {

            int sum = arr[left] + arr[right];

            if (sum == target) {
                return true;
            }

            else if (sum < target) {
                left++;
            }

            else {
                right--;
            }
        }

        return false;
    }

    public static void main(String[] args) {

        int[] arr = {1, 2, 4, 7, 9};

        System.out.println(twoSum(arr, 11));
    }
}`}</code>
          </pre>
        </div>
        <p key="p-2-118" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <strong className="text-white font-semibold">Output:</strong>
        </p>
        <div key="code-2-123" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-emerald-500/30 border border-emerald-500/50"></span>Code Example</span>
            <span className="text-[10px] text-slate-400 font-sans">Java / DSA</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`true`}</code>
          </pre>
        </div>
        <p key="p-2-124" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <strong className="text-white font-semibold">Complexity:</strong>
        </p>
        <ul key="ul-2-128" className="my-3 space-y-1.5 pl-2">
          <li key="li-2-0" className="flex items-start gap-2 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0"></span>
            <span>Time: <code className="font-mono text-cyan-300 font-semibold px-1 py-0.5 rounded bg-slate-900 border border-slate-800">O(n)</code></span>
          </li>
          <li key="li-2-1" className="flex items-start gap-2 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0"></span>
            <span>Auxiliary space: <code className="font-mono text-cyan-300 font-semibold px-1 py-0.5 rounded bg-slate-900 border border-slate-800">O(1)</code></span>
          </li>
        </ul>
        <h4 key="h4-2-129" className="text-base font-semibold text-white mt-6 mb-2 flex items-center gap-2">
          <span className="text-emerald-500 font-mono">▸</span>
          Why does this work?
        </h4>
        <p key="p-2-131" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          The array is sorted.
        </p>
        <p key="p-2-133" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          When the sum is too small, the current right element is already the largest remaining candidate. Moving the right pointer left would only make the sum smaller. Therefore, we move the left pointer right.
        </p>
        <p key="p-2-135" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          When the sum is too large, the current left element is already the smallest remaining candidate. Moving the left pointer right would only make the sum larger. Therefore, we move the right pointer left.
        </p>
        <p key="p-2-137" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          This reasoning is the basis of the algorithm&apos;s correctness.
        </p>
        <p key="p-2-139" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <strong className="text-white font-semibold">Important:</strong> This implementation requires a sorted array. It does not directly work on an arbitrary unsorted array.
        </p>
        <h3 key="h3-2-141" className="text-lg md:text-xl font-bold text-emerald-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
          2.2 Palindrome Checking Using Two Pointers
        </h3>
        <p key="p-2-143" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          A palindrome reads the same forward and backward.
        </p>
        <p key="p-2-145" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Examples:
        </p>
        <div key="code-2-152" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-emerald-500/30 border border-emerald-500/50"></span>Code Example</span>
            <span className="text-[10px] text-slate-400 font-sans">Java / DSA</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`"madam"  → Palindrome
"level"  → Palindrome
"hello"  → Not a palindrome`}</code>
          </pre>
        </div>
        <p key="p-2-153" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          We compare the first and last characters, then move inward.
        </p>
        <h4 key="h4-2-155" className="text-base font-semibold text-white mt-6 mb-2 flex items-center gap-2">
          <span className="text-emerald-500 font-mono">▸</span>
          Java implementation
        </h4>
        <div key="code-2-185" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-emerald-500/30 border border-emerald-500/50"></span>Code Example</span>
            <span className="text-[10px] text-slate-400 font-sans">Java / DSA</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`public class Palindrome {

    public static boolean isPalindrome(String str) {

        int left = 0;
        int right = str.length() - 1;

        while (left < right) {

            if (str.charAt(left) != str.charAt(right)) {
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
        <p key="p-2-186" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <strong className="text-white font-semibold">Output:</strong>
        </p>
        <div key="code-2-192" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-emerald-500/30 border border-emerald-500/50"></span>Code Example</span>
            <span className="text-[10px] text-slate-400 font-sans">Java / DSA</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`true
false`}</code>
          </pre>
        </div>
        <p key="p-2-193" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <strong className="text-white font-semibold">Complexity:</strong>
        </p>
        <ul key="ul-2-197" className="my-3 space-y-1.5 pl-2">
          <li key="li-2-0" className="flex items-start gap-2 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0"></span>
            <span>Time: <code className="font-mono text-cyan-300 font-semibold px-1 py-0.5 rounded bg-slate-900 border border-slate-800">O(n)</code></span>
          </li>
          <li key="li-2-1" className="flex items-start gap-2 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0"></span>
            <span>Auxiliary space: <code className="font-mono text-cyan-300 font-semibold px-1 py-0.5 rounded bg-slate-900 border border-slate-800">O(1)</code></span>
          </li>
        </ul>
        <p key="p-2-198" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          The code checks exact character equality. A case-insensitive or punctuation-ignoring palindrome requires additional preprocessing or conditional character skipping.
        </p>
        <h3 key="h3-2-200" className="text-lg md:text-xl font-bold text-emerald-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
          2.3 Reversing an Array In-Place
        </h3>
        <p key="p-2-202" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          An in-place algorithm modifies the original array without creating another array of the same size.
        </p>
        <h4 key="h4-2-204" className="text-base font-semibold text-white mt-6 mb-2 flex items-center gap-2">
          <span className="text-emerald-500 font-mono">▸</span>
          Example
        </h4>
        <div key="code-2-211" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-emerald-500/30 border border-emerald-500/50"></span>Code Example</span>
            <span className="text-[10px] text-slate-400 font-sans">Java / DSA</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`Original: [1, 2, 3, 4, 5]

Reversed: [5, 4, 3, 2, 1]`}</code>
          </pre>
        </div>
        <p key="p-2-212" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          We swap the elements at the two pointer positions.
        </p>
        <h4 key="h4-2-214" className="text-base font-semibold text-white mt-6 mb-2 flex items-center gap-2">
          <span className="text-emerald-500 font-mono">▸</span>
          Java implementation
        </h4>
        <div key="code-2-246" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-emerald-500/30 border border-emerald-500/50"></span>Code Example</span>
            <span className="text-[10px] text-slate-400 font-sans">Java / DSA</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`public class ReverseArray {

    public static void reverse(int[] arr) {

        int left = 0;
        int right = arr.length - 1;

        while (left < right) {

            int temp = arr[left];

            arr[left] = arr[right];
            arr[right] = temp;

            left++;
            right--;
        }
    }

    public static void main(String[] args) {

        int[] arr = {1, 2, 3, 4, 5};

        reverse(arr);

        System.out.println(Arrays.toString(arr));
    }
}`}</code>
          </pre>
        </div>
        <p key="p-2-247" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Add this import:
        </p>
        <div key="code-2-252" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-emerald-500/30 border border-emerald-500/50"></span>Code Example</span>
            <span className="text-[10px] text-slate-400 font-sans">Java / DSA</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`import java.util.Arrays;`}</code>
          </pre>
        </div>
        <p key="p-2-253" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <strong className="text-white font-semibold">Output:</strong>
        </p>
        <div key="code-2-258" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-emerald-500/30 border border-emerald-500/50"></span>Code Example</span>
            <span className="text-[10px] text-slate-400 font-sans">Java / DSA</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`[5, 4, 3, 2, 1]`}</code>
          </pre>
        </div>
        <p key="p-2-259" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <strong className="text-white font-semibold">Complexity:</strong>
        </p>
        <ul key="ul-2-263" className="my-3 space-y-1.5 pl-2">
          <li key="li-2-0" className="flex items-start gap-2 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0"></span>
            <span>Time: <code className="font-mono text-cyan-300 font-semibold px-1 py-0.5 rounded bg-slate-900 border border-slate-800">O(n)</code></span>
          </li>
          <li key="li-2-1" className="flex items-start gap-2 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0"></span>
            <span>Auxiliary space: <code className="font-mono text-cyan-300 font-semibold px-1 py-0.5 rounded bg-slate-900 border border-slate-800">O(1)</code></span>
          </li>
        </ul>
        <p key="p-2-264" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Only half of the array needs to be processed because every swap handles two elements.
        </p>
      </div>
    )
  },
  {
    id: 3,
    title: "3. Fast and Slow Pointers",
    category: "Two Pointers",
    content: (
      <div className="space-y-4">
        <p key="p-3-2" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Fast and slow pointers are another variation of the two-pointer technique.
        </p>
        <p key="p-3-4" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Here, both pointers usually start at the same position but move at different speeds.
        </p>
        <div key="code-3-10" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-emerald-500/30 border border-emerald-500/50"></span>Code Example</span>
            <span className="text-[10px] text-slate-400 font-sans">Java / DSA</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`Slow pointer: Moves one step
Fast pointer: Moves two steps`}</code>
          </pre>
        </div>
        <p key="p-3-11" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          This technique is especially useful for linked lists and cycle-detection problems.
        </p>
        <h3 key="h3-3-13" className="text-lg md:text-xl font-bold text-emerald-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
          3.1 Finding the Middle of a Linked List
        </h3>
        <p key="p-3-15" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Consider a linked list:
        </p>
        <div key="code-3-20" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-emerald-500/30 border border-emerald-500/50"></span>Code Example</span>
            <span className="text-[10px] text-slate-400 font-sans">Java / DSA</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`10 → 20 → 30 → 40 → 50 → null`}</code>
          </pre>
        </div>
        <p key="p-3-21" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          We need to find the middle node.
        </p>
        <p key="p-3-23" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          A straightforward solution counts the nodes and then traverses halfway through the list.
        </p>
        <p key="p-3-25" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          However, fast and slow pointers allow us to find the middle in one traversal.
        </p>
        <h4 key="h4-3-27" className="text-base font-semibold text-white mt-6 mb-2 flex items-center gap-2">
          <span className="text-emerald-500 font-mono">▸</span>
          Logic
        </h4>
        <ul key="ul-3-32" className="my-3 space-y-1.5 pl-2">
          <li key="li-3-0" className="flex items-start gap-2 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0"></span>
            <span>Slow moves one node.</span>
          </li>
          <li key="li-3-1" className="flex items-start gap-2 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0"></span>
            <span>Fast moves two nodes.</span>
          </li>
          <li key="li-3-2" className="flex items-start gap-2 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0"></span>
            <span>When fast reaches the end, slow is at the middle.</span>
          </li>
        </ul>
        <div key="code-3-41" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-emerald-500/30 border border-emerald-500/50"></span>Code Example</span>
            <span className="text-[10px] text-slate-400 font-sans">Java / DSA</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`Initially:

Slow
Fast
 ↓
10 → 20 → 30 → 40 → 50`}</code>
          </pre>
        </div>
        <p key="p-3-42" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          After one iteration:
        </p>
        <div key="code-3-50" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-emerald-500/30 border border-emerald-500/50"></span>Code Example</span>
            <span className="text-[10px] text-slate-400 font-sans">Java / DSA</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`     Slow
          Fast
       ↓    ↓
10 → 20 → 30 → 40 → 50`}</code>
          </pre>
        </div>
        <p key="p-3-51" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          When fast reaches the end, slow reaches the middle.
        </p>
        <h4 key="h4-3-53" className="text-base font-semibold text-white mt-6 mb-2 flex items-center gap-2">
          <span className="text-emerald-500 font-mono">▸</span>
          Java implementation
        </h4>
        <div key="code-3-84" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-emerald-500/30 border border-emerald-500/50"></span>Code Example</span>
            <span className="text-[10px] text-slate-400 font-sans">Java / DSA</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`class ListNode {

    int value;
    ListNode next;

    ListNode(int value) {
        this.value = value;
        this.next = null;
    }
}

public class MiddleOfLinkedList {

    public static ListNode findMiddle(ListNode head) {

        ListNode slow = head;
        ListNode fast = head;

        while (fast != null && fast.next != null) {

            slow = slow.next;
            fast = fast.next.next;
        }

        return slow;
    }
}`}</code>
          </pre>
        </div>
        <p key="p-3-85" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <strong className="text-white font-semibold">Complexity:</strong>
        </p>
        <ul key="ul-3-89" className="my-3 space-y-1.5 pl-2">
          <li key="li-3-0" className="flex items-start gap-2 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0"></span>
            <span>Time: <code className="font-mono text-cyan-300 font-semibold px-1 py-0.5 rounded bg-slate-900 border border-slate-800">O(n)</code></span>
          </li>
          <li key="li-3-1" className="flex items-start gap-2 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0"></span>
            <span>Auxiliary space: <code className="font-mono text-cyan-300 font-semibold px-1 py-0.5 rounded bg-slate-900 border border-slate-800">O(1)</code></span>
          </li>
        </ul>
        <p key="p-3-90" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          For an even number of nodes, this implementation returns the second middle node.
        </p>
        <h3 key="h3-3-92" className="text-lg md:text-xl font-bold text-emerald-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
          3.2 Detecting a Cycle in a Linked List
        </h3>
        <p key="p-3-94" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          A linked list normally ends with <code className="font-mono text-amber-300 text-xs px-1.5 py-0.5 rounded bg-slate-900 border border-slate-800">null</code>.
        </p>
        <p key="p-3-96" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          However, a cycle occurs when a node points back to an earlier node.
        </p>
        <p key="p-3-98" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Example:
        </p>
        <div key="code-3-105" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-emerald-500/30 border border-emerald-500/50"></span>Code Example</span>
            <span className="text-[10px] text-slate-400 font-sans">Java / DSA</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`10 → 20 → 30 → 40
          ↑     ↓
          ← ← ←`}</code>
          </pre>
        </div>
        <p key="p-3-106" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Here, the list never reaches <code className="font-mono text-amber-300 text-xs px-1.5 py-0.5 rounded bg-slate-900 border border-slate-800">null</code>.
        </p>
        <h4 key="h4-3-108" className="text-base font-semibold text-white mt-6 mb-2 flex items-center gap-2">
          <span className="text-emerald-500 font-mono">▸</span>
          Floyd&apos;s Cycle Detection Algorithm
        </h4>
        <p key="p-3-110" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          This is also called the <strong className="text-white font-semibold">Tortoise and Hare algorithm</strong>.
        </p>
        <ul key="ul-3-116" className="my-3 space-y-1.5 pl-2">
          <li key="li-3-0" className="flex items-start gap-2 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0"></span>
            <span>Slow pointer moves one step.</span>
          </li>
          <li key="li-3-1" className="flex items-start gap-2 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0"></span>
            <span>Fast pointer moves two steps.</span>
          </li>
          <li key="li-3-2" className="flex items-start gap-2 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0"></span>
            <span>If a cycle exists, they eventually meet.</span>
          </li>
          <li key="li-3-3" className="flex items-start gap-2 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0"></span>
            <span>If fast reaches <code className="font-mono text-amber-300 text-xs px-1.5 py-0.5 rounded bg-slate-900 border border-slate-800">null</code>, no cycle exists.</span>
          </li>
        </ul>
        <h4 key="h4-3-117" className="text-base font-semibold text-white mt-6 mb-2 flex items-center gap-2">
          <span className="text-emerald-500 font-mono">▸</span>
          Java implementation
        </h4>
        <div key="code-3-141" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-emerald-500/30 border border-emerald-500/50"></span>Code Example</span>
            <span className="text-[10px] text-slate-400 font-sans">Java / DSA</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`public class CycleDetection {

    public static boolean hasCycle(ListNode head) {

        ListNode slow = head;
        ListNode fast = head;

        while (fast != null && fast.next != null) {

            slow = slow.next;
            fast = fast.next.next;

            if (slow == fast) {
                return true;
            }
        }

        return false;
    }
}`}</code>
          </pre>
        </div>
        <p key="p-3-142" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <strong className="text-white font-semibold">Complexity:</strong>
        </p>
        <ul key="ul-3-146" className="my-3 space-y-1.5 pl-2">
          <li key="li-3-0" className="flex items-start gap-2 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0"></span>
            <span>Time: <code className="font-mono text-cyan-300 font-semibold px-1 py-0.5 rounded bg-slate-900 border border-slate-800">O(n)</code></span>
          </li>
          <li key="li-3-1" className="flex items-start gap-2 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0"></span>
            <span>Auxiliary space: <code className="font-mono text-cyan-300 font-semibold px-1 py-0.5 rounded bg-slate-900 border border-slate-800">O(1)</code></span>
          </li>
        </ul>
        <p key="p-3-147" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Why is this efficient?
        </p>
        <p key="p-3-149" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          A HashSet-based solution stores every visited node, requiring <code className="font-mono text-cyan-300 font-semibold px-1 py-0.5 rounded bg-slate-900 border border-slate-800">O(n)</code> additional space. Floyd&apos;s algorithm only requires two references.
        </p>
        <h3 key="h3-3-151" className="text-lg md:text-xl font-bold text-emerald-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
          3.3 Finding the Start of a Cycle
        </h3>
        <p key="p-3-153" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Floyd&apos;s algorithm can do more than detect a cycle.
        </p>
        <p key="p-3-155" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          After slow and fast meet:
        </p>
        <ol key="ol-3-161" className="my-3 space-y-2 pl-2">
          <li key="oli-3-0" className="flex items-start gap-2.5 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-5 h-5 rounded-full bg-slate-800 text-emerald-400 font-mono text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5 border border-slate-700">
              1
            </span>
            <span>Move one pointer back to the head.</span>
          </li>
          <li key="oli-3-1" className="flex items-start gap-2.5 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-5 h-5 rounded-full bg-slate-800 text-emerald-400 font-mono text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5 border border-slate-700">
              2
            </span>
            <span>Keep the other pointer at the meeting node.</span>
          </li>
          <li key="oli-3-2" className="flex items-start gap-2.5 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-5 h-5 rounded-full bg-slate-800 text-emerald-400 font-mono text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5 border border-slate-700">
              3
            </span>
            <span>Move both pointers one step at a time.</span>
          </li>
          <li key="oli-3-3" className="flex items-start gap-2.5 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-5 h-5 rounded-full bg-slate-800 text-emerald-400 font-mono text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5 border border-slate-700">
              4
            </span>
            <span>Their next meeting point is the beginning of the cycle.</span>
          </li>
        </ol>
        <h4 key="h4-3-162" className="text-base font-semibold text-white mt-6 mb-2 flex items-center gap-2">
          <span className="text-emerald-500 font-mono">▸</span>
          Java implementation
        </h4>
        <div key="code-3-194" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-emerald-500/30 border border-emerald-500/50"></span>Code Example</span>
            <span className="text-[10px] text-slate-400 font-sans">Java / DSA</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`public class CycleStart {

    public static ListNode detectCycle(ListNode head) {

        ListNode slow = head;
        ListNode fast = head;

        while (fast != null && fast.next != null) {

            slow = slow.next;
            fast = fast.next.next;

            if (slow == fast) {

                ListNode pointer = head;

                while (pointer != slow) {
                    pointer = pointer.next;
                    slow = slow.next;
                }

                return pointer;
            }
        }

        return null;
    }
}`}</code>
          </pre>
        </div>
        <p key="p-3-195" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          This is a common interview question because it tests whether you understand the mathematics behind fast and slow pointers.
        </p>
      </div>
    )
  },
  {
    id: 4,
    title: "4. Same-Direction Pointers",
    category: "Two Pointers",
    content: (
      <div className="space-y-4">
        <p key="p-4-2" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          In same-direction two-pointer problems, both pointers move from left to right.
        </p>
        <p key="p-4-4" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Typically:
        </p>
        <ul key="ul-4-8" className="my-3 space-y-1.5 pl-2">
          <li key="li-4-0" className="flex items-start gap-2 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0"></span>
            <span>One pointer tracks the position where the next valid element should go.</span>
          </li>
          <li key="li-4-1" className="flex items-start gap-2 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0"></span>
            <span>Another pointer scans the array.</span>
          </li>
        </ul>
        <p key="p-4-9" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          This is useful for in-place modifications.
        </p>
        <h3 key="h3-4-11" className="text-lg md:text-xl font-bold text-emerald-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
          4.1 Removing Duplicates from a Sorted Array
        </h3>
        <p key="p-4-13" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <strong className="text-white font-semibold">Problem:</strong> Remove duplicates from a sorted array without creating another array.
        </p>
        <p key="p-4-15" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Input:
        </p>
        <div key="code-4-20" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-emerald-500/30 border border-emerald-500/50"></span>Code Example</span>
            <span className="text-[10px] text-slate-400 font-sans">Java / DSA</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`[1, 1, 2, 2, 3, 4, 4]`}</code>
          </pre>
        </div>
        <p key="p-4-21" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Expected logical array:
        </p>
        <div key="code-4-26" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-emerald-500/30 border border-emerald-500/50"></span>Code Example</span>
            <span className="text-[10px] text-slate-400 font-sans">Java / DSA</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`[1, 2, 3, 4]`}</code>
          </pre>
        </div>
        <h4 key="h4-4-27" className="text-base font-semibold text-white mt-6 mb-2 flex items-center gap-2">
          <span className="text-emerald-500 font-mono">▸</span>
          Pointer logic
        </h4>
        <ul key="ul-4-32" className="my-3 space-y-1.5 pl-2">
          <li key="li-4-0" className="flex items-start gap-2 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0"></span>
            <span><code className="font-mono text-amber-300 text-xs px-1.5 py-0.5 rounded bg-slate-900 border border-slate-800">i</code> tracks the last unique element.</span>
          </li>
          <li key="li-4-1" className="flex items-start gap-2 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0"></span>
            <span><code className="font-mono text-amber-300 text-xs px-1.5 py-0.5 rounded bg-slate-900 border border-slate-800">j</code> scans the remaining elements.</span>
          </li>
          <li key="li-4-2" className="flex items-start gap-2 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0"></span>
            <span>Whenever <code className="font-mono text-amber-300 text-xs px-1.5 py-0.5 rounded bg-slate-900 border border-slate-800">arr[j]</code> differs from <code className="font-mono text-amber-300 text-xs px-1.5 py-0.5 rounded bg-slate-900 border border-slate-800">arr[i]</code>, advance <code className="font-mono text-amber-300 text-xs px-1.5 py-0.5 rounded bg-slate-900 border border-slate-800">i</code> and copy the new unique value.</span>
          </li>
        </ul>
        <h4 key="h4-4-33" className="text-base font-semibold text-white mt-6 mb-2 flex items-center gap-2">
          <span className="text-emerald-500 font-mono">▸</span>
          Java implementation
        </h4>
        <div key="code-4-71" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-emerald-500/30 border border-emerald-500/50"></span>Code Example</span>
            <span className="text-[10px] text-slate-400 font-sans">Java / DSA</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`public class RemoveDuplicates {

    public static int removeDuplicates(int[] arr) {

        if (arr.length == 0) {
            return 0;
        }

        int i = 0;

        for (int j = 1; j < arr.length; j++) {

            if (arr[j] != arr[i]) {

                i++;

                arr[i] = arr[j];
            }
        }

        return i + 1;
    }

    public static void main(String[] args) {

        int[] arr = {1, 1, 2, 2, 3, 4, 4};

        int size = removeDuplicates(arr);

        for (int i = 0; i < size; i++) {
            System.out.print(arr[i] + " ");
        }
    }
}`}</code>
          </pre>
        </div>
        <p key="p-4-72" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <strong className="text-white font-semibold">Output:</strong>
        </p>
        <div key="code-4-77" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-emerald-500/30 border border-emerald-500/50"></span>Code Example</span>
            <span className="text-[10px] text-slate-400 font-sans">Java / DSA</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`1 2 3 4`}</code>
          </pre>
        </div>
        <p key="p-4-78" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <strong className="text-white font-semibold">Complexity:</strong>
        </p>
        <ul key="ul-4-82" className="my-3 space-y-1.5 pl-2">
          <li key="li-4-0" className="flex items-start gap-2 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0"></span>
            <span>Time: <code className="font-mono text-cyan-300 font-semibold px-1 py-0.5 rounded bg-slate-900 border border-slate-800">O(n)</code></span>
          </li>
          <li key="li-4-1" className="flex items-start gap-2 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0"></span>
            <span>Auxiliary space: <code className="font-mono text-cyan-300 font-semibold px-1 py-0.5 rounded bg-slate-900 border border-slate-800">O(1)</code></span>
          </li>
        </ul>
        <p key="p-4-83" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Notice that the array may still contain old values after the returned logical length. Only the first <code className="font-mono text-amber-300 text-xs px-1.5 py-0.5 rounded bg-slate-900 border border-slate-800">size</code> positions represent the deduplicated result.
        </p>
        <h3 key="h3-4-85" className="text-lg md:text-xl font-bold text-emerald-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
          4.2 Moving Zeroes to the End
        </h3>
        <p key="p-4-87" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <strong className="text-white font-semibold">Problem:</strong> Move all zeroes to the end while maintaining the relative order of nonzero elements.
        </p>
        <p key="p-4-89" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Input:
        </p>
        <div key="code-4-94" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-emerald-500/30 border border-emerald-500/50"></span>Code Example</span>
            <span className="text-[10px] text-slate-400 font-sans">Java / DSA</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`[0, 1, 0, 3, 12]`}</code>
          </pre>
        </div>
        <p key="p-4-95" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Expected output:
        </p>
        <div key="code-4-100" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-emerald-500/30 border border-emerald-500/50"></span>Code Example</span>
            <span className="text-[10px] text-slate-400 font-sans">Java / DSA</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`[1, 3, 12, 0, 0]`}</code>
          </pre>
        </div>
        <h4 key="h4-4-101" className="text-base font-semibold text-white mt-6 mb-2 flex items-center gap-2">
          <span className="text-emerald-500 font-mono">▸</span>
          Java implementation
        </h4>
        <div key="code-4-125" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-emerald-500/30 border border-emerald-500/50"></span>Code Example</span>
            <span className="text-[10px] text-slate-400 font-sans">Java / DSA</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`public class MoveZeroes {

    public static void moveZeroes(int[] arr) {

        int position = 0;

        for (int i = 0; i < arr.length; i++) {

            if (arr[i] != 0) {

                int temp = arr[position];

                arr[position] = arr[i];
                arr[i] = temp;

                position++;
            }
        }
    }
}`}</code>
          </pre>
        </div>
        <p key="p-4-126" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <strong className="text-white font-semibold">Complexity:</strong>
        </p>
        <ul key="ul-4-130" className="my-3 space-y-1.5 pl-2">
          <li key="li-4-0" className="flex items-start gap-2 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0"></span>
            <span>Time: <code className="font-mono text-cyan-300 font-semibold px-1 py-0.5 rounded bg-slate-900 border border-slate-800">O(n)</code></span>
          </li>
          <li key="li-4-1" className="flex items-start gap-2 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0"></span>
            <span>Auxiliary space: <code className="font-mono text-cyan-300 font-semibold px-1 py-0.5 rounded bg-slate-900 border border-slate-800">O(1)</code></span>
          </li>
        </ul>
        <p key="p-4-131" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          The scanning pointer finds nonzero values, while the second pointer identifies where the next nonzero value belongs.
        </p>
        <h3 key="h3-4-133" className="text-lg md:text-xl font-bold text-emerald-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
          4.3 When to Use Same-Direction Pointers
        </h3>
        <p key="p-4-135" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Recognize this pattern when the problem asks you to:
        </p>
        <ul key="ul-4-144" className="my-3 space-y-1.5 pl-2">
          <li key="li-4-0" className="flex items-start gap-2 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0"></span>
            <span>Remove duplicates.</span>
          </li>
          <li key="li-4-1" className="flex items-start gap-2 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0"></span>
            <span>Remove certain elements in-place.</span>
          </li>
          <li key="li-4-2" className="flex items-start gap-2 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0"></span>
            <span>Move zeroes.</span>
          </li>
          <li key="li-4-3" className="flex items-start gap-2 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0"></span>
            <span>Partition an array.</span>
          </li>
          <li key="li-4-4" className="flex items-start gap-2 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0"></span>
            <span>Separate positive and negative numbers.</span>
          </li>
          <li key="li-4-5" className="flex items-start gap-2 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0"></span>
            <span>Compact valid elements towards the beginning.</span>
          </li>
          <li key="li-4-6" className="flex items-start gap-2 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0"></span>
            <span>Maintain a filtered array without allocating another array.</span>
          </li>
        </ul>
      </div>
    )
  },
  {
    id: 5,
    title: "5. Sliding Window Fundamentals",
    category: "Sliding Window",
    content: (
      <div className="space-y-4">
        <p key="p-5-2" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Sliding window is one of the most important patterns for array and string problems.
        </p>
        <p key="p-5-4" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          It is used when we need to examine <strong className="text-white font-semibold">contiguous ranges</strong> efficiently.
        </p>
        <p key="p-5-6" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          A window is a range represented by two pointers:
        </p>
        <div key="code-5-11" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-emerald-500/30 border border-emerald-500/50"></span>Code Example</span>
            <span className="text-[10px] text-slate-400 font-sans">Java / DSA</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`[left, right]`}</code>
          </pre>
        </div>
        <p key="p-5-12" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Instead of recalculating information for every possible subarray, we update the existing window as it moves.
        </p>
        <h3 key="h3-5-14" className="text-lg md:text-xl font-bold text-emerald-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
          5.1 Why Sliding Window Is Needed
        </h3>
        <p key="p-5-16" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Consider:
        </p>
        <div key="code-5-21" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-emerald-500/30 border border-emerald-500/50"></span>Code Example</span>
            <span className="text-[10px] text-slate-400 font-sans">Java / DSA</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`Array: [2, 1, 5, 1, 3, 2]`}</code>
          </pre>
        </div>
        <p key="p-5-22" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <strong className="text-white font-semibold">Problem:</strong> Find the maximum sum of any three consecutive elements.
        </p>
        <p key="p-5-24" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          A brute-force approach calculates every group of three elements independently.
        </p>
        <div key="code-5-32" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-emerald-500/30 border border-emerald-500/50"></span>Code Example</span>
            <span className="text-[10px] text-slate-400 font-sans">Java / DSA</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`2 + 1 + 5 = 8
1 + 5 + 1 = 7
5 + 1 + 3 = 9
1 + 3 + 2 = 6`}</code>
          </pre>
        </div>
        <p key="p-5-33" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          The maximum is <code className="font-mono text-amber-300 text-xs px-1.5 py-0.5 rounded bg-slate-900 border border-slate-800">9</code>.
        </p>
        <p key="p-5-35" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          With sliding window, we calculate the first window once and then update it.
        </p>
        <p key="p-5-37" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          The first window:
        </p>
        <div key="code-5-42" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-emerald-500/30 border border-emerald-500/50"></span>Code Example</span>
            <span className="text-[10px] text-slate-400 font-sans">Java / DSA</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`[2, 1, 5] → Sum = 8`}</code>
          </pre>
        </div>
        <p key="p-5-43" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Move one position right:
        </p>
        <ul key="ul-5-47" className="my-3 space-y-1.5 pl-2">
          <li key="li-5-0" className="flex items-start gap-2 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0"></span>
            <span>Remove the outgoing element <code className="font-mono text-amber-300 text-xs px-1.5 py-0.5 rounded bg-slate-900 border border-slate-800">2</code>.</span>
          </li>
          <li key="li-5-1" className="flex items-start gap-2 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0"></span>
            <span>Add the incoming element <code className="font-mono text-amber-300 text-xs px-1.5 py-0.5 rounded bg-slate-900 border border-slate-800">1</code>.</span>
          </li>
        </ul>
        <div key="code-5-51" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-emerald-500/30 border border-emerald-500/50"></span>Code Example</span>
            <span className="text-[10px] text-slate-400 font-sans">Java / DSA</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`[1, 5, 1] → 8 - 2 + 1 = 7`}</code>
          </pre>
        </div>
        <p key="p-5-52" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Move again:
        </p>
        <div key="code-5-57" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-emerald-500/30 border border-emerald-500/50"></span>Code Example</span>
            <span className="text-[10px] text-slate-400 font-sans">Java / DSA</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`[5, 1, 3] → 7 - 1 + 3 = 9`}</code>
          </pre>
        </div>
        <p key="p-5-58" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Move again:
        </p>
        <div key="code-5-63" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-emerald-500/30 border border-emerald-500/50"></span>Code Example</span>
            <span className="text-[10px] text-slate-400 font-sans">Java / DSA</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`[1, 3, 2] → 9 - 5 + 2 = 6`}</code>
          </pre>
        </div>
        <p key="p-5-64" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          We avoided recalculating the entire sum for each window.
        </p>
        <h3 key="h3-5-66" className="text-lg md:text-xl font-bold text-emerald-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
          5.2 Types of Sliding Windows
        </h3>
        <p key="p-5-68" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          There are two major types.
        </p>
        <div key="table-5-75" className="my-5 overflow-x-auto rounded-xl border border-slate-800 shadow-md">
          <table className="w-full text-xs text-left border-collapse">
            <thead>
              <tr className="bg-slate-900 border-b border-slate-800 text-emerald-400 font-mono">
                <th key="th-5-0" className="p-3 font-semibold">Fixed-size window</th>
                <th key="th-5-1" className="p-3 font-semibold">Variable-size window</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-850 bg-slate-950/60 font-sans">
              <tr key="tr-5-0" className="hover:bg-slate-900/40 transition-colors">
                <td key="td-5-0-0" className="p-3 text-slate-300 font-mono text-slate-200">Window length is given</td>
                <td key="td-5-0-1" className="p-3 text-slate-300 ">Window length changes</td>
              </tr>
              <tr key="tr-5-1" className="hover:bg-slate-900/40 transition-colors">
                <td key="td-5-1-0" className="p-3 text-slate-300 font-mono text-slate-200">Add one element and remove one element</td>
                <td key="td-5-1-1" className="p-3 text-slate-300 ">Expand and shrink based on a condition</td>
              </tr>
              <tr key="tr-5-2" className="hover:bg-slate-900/40 transition-colors">
                <td key="td-5-2-0" className="p-3 text-slate-300 font-mono text-slate-200">Example: Maximum sum of K elements</td>
                <td key="td-5-2-1" className="p-3 text-slate-300 ">Example: Longest substring without repeating characters</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    )
  },
  {
    id: 6,
    title: "6. Fixed-Size Sliding Window",
    category: "Sliding Window",
    content: (
      <div className="space-y-4">
        <p key="p-6-2" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          A fixed-size sliding window maintains exactly <code className="font-mono text-amber-300 text-xs px-1.5 py-0.5 rounded bg-slate-900 border border-slate-800">K</code> elements.
        </p>
        <p key="p-6-4" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Typical questions include:
        </p>
        <ul key="ul-6-10" className="my-3 space-y-1.5 pl-2">
          <li key="li-6-0" className="flex items-start gap-2 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0"></span>
            <span>Maximum sum of K consecutive elements.</span>
          </li>
          <li key="li-6-1" className="flex items-start gap-2 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0"></span>
            <span>Minimum sum of K consecutive elements.</span>
          </li>
          <li key="li-6-2" className="flex items-start gap-2 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0"></span>
            <span>Average of every window of size K.</span>
          </li>
          <li key="li-6-3" className="flex items-start gap-2 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0"></span>
            <span>Maximum number of vowels in a substring of length K.</span>
          </li>
        </ul>
        <h3 key="h3-6-11" className="text-lg md:text-xl font-bold text-emerald-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
          6.1 Maximum Sum Subarray of Size K
        </h3>
        <p key="p-6-13" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <strong className="text-white font-semibold">Problem:</strong> Find the maximum sum of any contiguous subarray of size K.
        </p>
        <p key="p-6-15" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Input:
        </p>
        <div key="code-6-21" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-emerald-500/30 border border-emerald-500/50"></span>Code Example</span>
            <span className="text-[10px] text-slate-400 font-sans">Java / DSA</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`int[] arr = {2, 1, 5, 1, 3, 2};
int k = 3;`}</code>
          </pre>
        </div>
        <p key="p-6-22" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Expected result:
        </p>
        <div key="code-6-27" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-emerald-500/30 border border-emerald-500/50"></span>Code Example</span>
            <span className="text-[10px] text-slate-400 font-sans">Java / DSA</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`9`}</code>
          </pre>
        </div>
        <h4 key="h4-6-28" className="text-base font-semibold text-white mt-6 mb-2 flex items-center gap-2">
          <span className="text-emerald-500 font-mono">▸</span>
          Algorithm
        </h4>
        <ol key="ol-6-36" className="my-3 space-y-2 pl-2">
          <li key="oli-6-0" className="flex items-start gap-2.5 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-5 h-5 rounded-full bg-slate-800 text-emerald-400 font-mono text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5 border border-slate-700">
              1
            </span>
            <span>Calculate the sum of the first <code className="font-mono text-amber-300 text-xs px-1.5 py-0.5 rounded bg-slate-900 border border-slate-800">K</code> elements.</span>
          </li>
          <li key="oli-6-1" className="flex items-start gap-2.5 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-5 h-5 rounded-full bg-slate-800 text-emerald-400 font-mono text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5 border border-slate-700">
              2
            </span>
            <span>Store this as the initial maximum.</span>
          </li>
          <li key="oli-6-2" className="flex items-start gap-2.5 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-5 h-5 rounded-full bg-slate-800 text-emerald-400 font-mono text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5 border border-slate-700">
              3
            </span>
            <span>Move the window one position at a time.</span>
          </li>
          <li key="oli-6-3" className="flex items-start gap-2.5 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-5 h-5 rounded-full bg-slate-800 text-emerald-400 font-mono text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5 border border-slate-700">
              4
            </span>
            <span>Subtract the outgoing element.</span>
          </li>
          <li key="oli-6-4" className="flex items-start gap-2.5 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-5 h-5 rounded-full bg-slate-800 text-emerald-400 font-mono text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5 border border-slate-700">
              5
            </span>
            <span>Add the incoming element.</span>
          </li>
          <li key="oli-6-5" className="flex items-start gap-2.5 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-5 h-5 rounded-full bg-slate-800 text-emerald-400 font-mono text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5 border border-slate-700">
              6
            </span>
            <span>Update the maximum.</span>
          </li>
        </ol>
        <h4 key="h4-6-37" className="text-base font-semibold text-white mt-6 mb-2 flex items-center gap-2">
          <span className="text-emerald-500 font-mono">▸</span>
          Java implementation
        </h4>
        <div key="code-6-75" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-emerald-500/30 border border-emerald-500/50"></span>Code Example</span>
            <span className="text-[10px] text-slate-400 font-sans">Java / DSA</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`public class MaximumSumWindow {

    public static long maxSum(int[] arr, int k) {

        if (arr == null || k <= 0 || k > arr.length) {
            throw new IllegalArgumentException("Invalid window size");
        }

        long windowSum = 0;

        for (int i = 0; i < k; i++) {
            windowSum += arr[i];
        }

        long maxSum = windowSum;

        for (int right = k; right < arr.length; right++) {

            windowSum += arr[right];
            windowSum -= arr[right - k];

            maxSum = Math.max(maxSum, windowSum);
        }

        return maxSum;
    }

    public static void main(String[] args) {

        int[] arr = {2, 1, 5, 1, 3, 2};

        System.out.println(maxSum(arr, 3));
    }
}`}</code>
          </pre>
        </div>
        <p key="p-6-76" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <strong className="text-white font-semibold">Output:</strong>
        </p>
        <div key="code-6-81" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-emerald-500/30 border border-emerald-500/50"></span>Code Example</span>
            <span className="text-[10px] text-slate-400 font-sans">Java / DSA</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`9`}</code>
          </pre>
        </div>
        <p key="p-6-82" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <strong className="text-white font-semibold">Complexity:</strong>
        </p>
        <ul key="ul-6-86" className="my-3 space-y-1.5 pl-2">
          <li key="li-6-0" className="flex items-start gap-2 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0"></span>
            <span>Time: <code className="font-mono text-cyan-300 font-semibold px-1 py-0.5 rounded bg-slate-900 border border-slate-800">O(n)</code></span>
          </li>
          <li key="li-6-1" className="flex items-start gap-2 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0"></span>
            <span>Auxiliary space: <code className="font-mono text-cyan-300 font-semibold px-1 py-0.5 rounded bg-slate-900 border border-slate-800">O(1)</code></span>
          </li>
        </ul>
        <h4 key="h4-6-87" className="text-base font-semibold text-white mt-6 mb-2 flex items-center gap-2">
          <span className="text-emerald-500 font-mono">▸</span>
          Important edge cases
        </h4>
        <ul key="ul-6-93" className="my-3 space-y-1.5 pl-2">
          <li key="li-6-0" className="flex items-start gap-2 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0"></span>
            <span><code className="font-mono text-amber-300 text-xs px-1.5 py-0.5 rounded bg-slate-900 border border-slate-800">k = 1</code>: The answer is the largest individual element.</span>
          </li>
          <li key="li-6-1" className="flex items-start gap-2 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0"></span>
            <span><code className="font-mono text-amber-300 text-xs px-1.5 py-0.5 rounded bg-slate-900 border border-slate-800">k = arr.length</code>: The answer is the sum of the entire array.</span>
          </li>
          <li key="li-6-2" className="flex items-start gap-2 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0"></span>
            <span>All elements negative: Initialize the maximum using the first window, not zero.</span>
          </li>
          <li key="li-6-3" className="flex items-start gap-2 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0"></span>
            <span><code className="font-mono text-amber-300 text-xs px-1.5 py-0.5 rounded bg-slate-900 border border-slate-800">k &gt; arr.length</code>: The requested window does not exist.</span>
          </li>
        </ul>
        <p key="p-6-94" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Using <code className="font-mono text-amber-300 text-xs px-1.5 py-0.5 rounded bg-slate-900 border border-slate-800">long</code> for the sum helps avoid integer overflow.
        </p>
        <h3 key="h3-6-96" className="text-lg md:text-xl font-bold text-emerald-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
          6.2 Average of Every Window of Size K
        </h3>
        <p key="p-6-98" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          The same technique works for averages.
        </p>
        <div key="code-6-128" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-emerald-500/30 border border-emerald-500/50"></span>Code Example</span>
            <span className="text-[10px] text-slate-400 font-sans">Java / DSA</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`public static double[] findAverages(int[] arr, int k) {

    if (k <= 0 || k > arr.length) {
        throw new IllegalArgumentException("Invalid window size");
    }

    double[] result = new double[arr.length - k + 1];

    long sum = 0;

    for (int i = 0; i < k; i++) {
        sum += arr[i];
    }

    result[0] = (double) sum / k;

    for (int right = k; right < arr.length; right++) {

        sum += arr[right];
        sum -= arr[right - k];

        result[right - k + 1] = (double) sum / k;
    }

    return result;
}`}</code>
          </pre>
        </div>
        <p key="p-6-129" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          If the array contains <code className="font-mono text-amber-300 text-xs px-1.5 py-0.5 rounded bg-slate-900 border border-slate-800">n</code> elements, the result contains <code className="font-mono text-amber-300 text-xs px-1.5 py-0.5 rounded bg-slate-900 border border-slate-800">n - k + 1</code> averages.
        </p>
      </div>
    )
  },
  {
    id: 7,
    title: "7. Variable-Size Sliding Window",
    category: "Sliding Window",
    content: (
      <div className="space-y-4">
        <p key="p-7-2" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Unlike a fixed window, a variable-size window changes its length according to a condition.
        </p>
        <p key="p-7-4" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          The general pattern is:
        </p>
        <div key="code-7-23" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-emerald-500/30 border border-emerald-500/50"></span>Code Example</span>
            <span className="text-[10px] text-slate-400 font-sans">Java / DSA</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`int left = 0;

for (int right = 0; right < arr.length; right++) {

    // Add the new element to the window

    while (/* window violates the condition */) {

        // Remove the leftmost element

        left++;
    }

    // Update the answer
}`}</code>
          </pre>
        </div>
        <p key="p-7-24" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          The exact condition depends on the problem.
        </p>
        <p key="p-7-26" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          The important operations are:
        </p>
        <ul key="ul-7-31" className="my-3 space-y-1.5 pl-2">
          <li key="li-7-0" className="flex items-start gap-2 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0"></span>
            <span>Expand the window by moving <code className="font-mono text-amber-300 text-xs px-1.5 py-0.5 rounded bg-slate-900 border border-slate-800">right</code>.</span>
          </li>
          <li key="li-7-1" className="flex items-start gap-2 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0"></span>
            <span>Shrink the window by moving <code className="font-mono text-amber-300 text-xs px-1.5 py-0.5 rounded bg-slate-900 border border-slate-800">left</code>.</span>
          </li>
          <li key="li-7-2" className="flex items-start gap-2 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0"></span>
            <span>Update the answer when the current window is valid.</span>
          </li>
        </ul>
        <h3 key="h3-7-32" className="text-lg md:text-xl font-bold text-emerald-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
          7.1 Longest Subarray with Sum at Most K
        </h3>
        <p key="p-7-34" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Suppose all array elements are nonnegative.
        </p>
        <div key="code-7-40" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-emerald-500/30 border border-emerald-500/50"></span>Code Example</span>
            <span className="text-[10px] text-slate-400 font-sans">Java / DSA</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`Array: [2, 1, 3, 2, 1]
K = 5`}</code>
          </pre>
        </div>
        <p key="p-7-41" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          We want the longest contiguous subarray whose sum is at most <code className="font-mono text-amber-300 text-xs px-1.5 py-0.5 rounded bg-slate-900 border border-slate-800">5</code>.
        </p>
        <p key="p-7-43" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          A window may expand while its sum remains valid. When the sum exceeds <code className="font-mono text-amber-300 text-xs px-1.5 py-0.5 rounded bg-slate-900 border border-slate-800">5</code>, remove elements from the left until it becomes valid again.
        </p>
        <h4 key="h4-7-45" className="text-base font-semibold text-white mt-6 mb-2 flex items-center gap-2">
          <span className="text-emerald-500 font-mono">▸</span>
          Java implementation
        </h4>
        <div key="code-7-70" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-emerald-500/30 border border-emerald-500/50"></span>Code Example</span>
            <span className="text-[10px] text-slate-400 font-sans">Java / DSA</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`public static int longestSubarrayAtMostK(int[] arr, int k) {

    int left = 0;
    int sum = 0;
    int maxLength = 0;

    for (int right = 0; right < arr.length; right++) {

        sum += arr[right];

        while (sum > k && left <= right) {

            sum -= arr[left];
            left++;
        }

        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
}`}</code>
          </pre>
        </div>
        <p key="p-7-71" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <strong className="text-white font-semibold">Complexity:</strong>
        </p>
        <ul key="ul-7-75" className="my-3 space-y-1.5 pl-2">
          <li key="li-7-0" className="flex items-start gap-2 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0"></span>
            <span>Time: <code className="font-mono text-cyan-300 font-semibold px-1 py-0.5 rounded bg-slate-900 border border-slate-800">O(n)</code></span>
          </li>
          <li key="li-7-1" className="flex items-start gap-2 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0"></span>
            <span>Auxiliary space: <code className="font-mono text-cyan-300 font-semibold px-1 py-0.5 rounded bg-slate-900 border border-slate-800">O(1)</code></span>
          </li>
        </ul>
        <p key="p-7-76" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <strong className="text-white font-semibold">Why does it work?</strong>
        </p>
        <p key="p-7-78" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          The elements are nonnegative. Removing an element from the left cannot increase the window sum, so shrinking the window can restore validity.
        </p>
        <p key="p-7-80" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <strong className="text-white font-semibold">Important limitation:</strong> This reasoning does not work for arbitrary negative numbers. Adding a negative number can decrease the sum, while removing a negative number can increase it. For problems with negative values, consider prefix sums and other techniques.
        </p>
      </div>
    )
  },
  {
    id: 8,
    title: "8. Longest Substring Without Repeating Characters",
    category: "Sliding Window",
    content: (
      <div className="space-y-4">
        <p key="p-8-2" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          This is a classic interview problem.
        </p>
        <p key="p-8-4" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <strong className="text-white font-semibold">Problem:</strong> Find the length of the longest substring that contains no repeated characters.
        </p>
        <p key="p-8-6" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Input:
        </p>
        <div key="code-8-11" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-emerald-500/30 border border-emerald-500/50"></span>Code Example</span>
            <span className="text-[10px] text-slate-400 font-sans">Java / DSA</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`"abcabcbb"`}</code>
          </pre>
        </div>
        <p key="p-8-12" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Expected output:
        </p>
        <div key="code-8-17" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-emerald-500/30 border border-emerald-500/50"></span>Code Example</span>
            <span className="text-[10px] text-slate-400 font-sans">Java / DSA</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`3`}</code>
          </pre>
        </div>
        <p key="p-8-18" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Explanation:
        </p>
        <div key="code-8-25" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-emerald-500/30 border border-emerald-500/50"></span>Code Example</span>
            <span className="text-[10px] text-slate-400 font-sans">Java / DSA</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`"abc" → Length 3
"bca" → Length 3
"cab" → Length 3`}</code>
          </pre>
        </div>
        <p key="p-8-26" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          No longer substring exists without repeating characters.
        </p>
        <h3 key="h3-8-28" className="text-lg md:text-xl font-bold text-emerald-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
          8.1 Brute-Force Approach
        </h3>
        <p key="p-8-30" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Generate every possible substring and check whether it contains duplicate characters.
        </p>
        <p key="p-8-32" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          This involves generating <code className="font-mono text-cyan-300 font-semibold px-1 py-0.5 rounded bg-slate-900 border border-slate-800">O(n^2)</code> substrings and potentially checking up to <code className="font-mono text-cyan-300 font-semibold px-1 py-0.5 rounded bg-slate-900 border border-slate-800">O(n)</code> characters for each one.
        </p>
        <p key="p-8-34" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <strong className="text-white font-semibold">Time complexity:</strong> <code className="font-mono text-cyan-300 font-semibold px-1 py-0.5 rounded bg-slate-900 border border-slate-800">O(n^3)</code> in a straightforward implementation.
        </p>
        <p key="p-8-36" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          We can improve this using a variable-size sliding window and a HashMap.
        </p>
        <h3 key="h3-8-38" className="text-lg md:text-xl font-bold text-emerald-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
          8.2 Optimized Approach: Sliding Window + HashMap
        </h3>
        <p key="p-8-40" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Maintain a map storing the most recent index at which each character appeared.
        </p>
        <p key="p-8-42" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          For example:
        </p>
        <div key="code-8-52" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-emerald-500/30 border border-emerald-500/50"></span>Code Example</span>
            <span className="text-[10px] text-slate-400 font-sans">Java / DSA</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`String: "abcabcbb"

Character positions:
a → 0
b → 1
c → 2`}</code>
          </pre>
        </div>
        <p key="p-8-53" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          When a repeated character appears, move the left pointer beyond its previous occurrence, provided that occurrence is inside the current window.
        </p>
        <h4 key="h4-8-55" className="text-base font-semibold text-white mt-6 mb-2 flex items-center gap-2">
          <span className="text-emerald-500 font-mono">▸</span>
          Java implementation
        </h4>
        <div key="code-8-101" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-emerald-500/30 border border-emerald-500/50"></span>Code Example</span>
            <span className="text-[10px] text-slate-400 font-sans">Java / DSA</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`import java.util.HashMap;
import java.util.Map;

public class LongestUniqueSubstring {

    public static int lengthOfLongestSubstring(String s) {

        Map<Character, Integer> lastSeen = new HashMap<>();

        int left = 0;
        int maxLength = 0;

        for (int right = 0; right < s.length(); right++) {

            char current = s.charAt(right);

            if (lastSeen.containsKey(current)) {

                left = Math.max(
                    left,
                    lastSeen.get(current) + 1
                );
            }

            lastSeen.put(current, right);

            maxLength = Math.max(
                maxLength,
                right - left + 1
            );
        }

        return maxLength;
    }

    public static void main(String[] args) {

        System.out.println(
            lengthOfLongestSubstring("abcabcbb")
        );
    }
}`}</code>
          </pre>
        </div>
        <p key="p-8-102" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <strong className="text-white font-semibold">Output:</strong>
        </p>
        <div key="code-8-107" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-emerald-500/30 border border-emerald-500/50"></span>Code Example</span>
            <span className="text-[10px] text-slate-400 font-sans">Java / DSA</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`3`}</code>
          </pre>
        </div>
        <p key="p-8-108" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <strong className="text-white font-semibold">Complexity:</strong>
        </p>
        <ul key="ul-8-112" className="my-3 space-y-1.5 pl-2">
          <li key="li-8-0" className="flex items-start gap-2 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0"></span>
            <span>Time: <code className="font-mono text-cyan-300 font-semibold px-1 py-0.5 rounded bg-slate-900 border border-slate-800">O(n)</code> expected with HashMap operations.</span>
          </li>
          <li key="li-8-1" className="flex items-start gap-2 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0"></span>
            <span>Auxiliary space: <code className="font-mono text-cyan-300 font-semibold px-1 py-0.5 rounded bg-slate-900 border border-slate-800">O(min(n, character\ set\ size))</code>.</span>
          </li>
        </ul>
        <h4 key="h4-8-113" className="text-base font-semibold text-white mt-6 mb-2 flex items-center gap-2">
          <span className="text-emerald-500 font-mono">▸</span>
          Why do we use Math.max?
        </h4>
        <p key="p-8-115" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Consider:
        </p>
        <div key="code-8-120" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-emerald-500/30 border border-emerald-500/50"></span>Code Example</span>
            <span className="text-[10px] text-slate-400 font-sans">Java / DSA</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`"abba"`}</code>
          </pre>
        </div>
        <p key="p-8-121" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          When the second <code className="font-mono text-amber-300 text-xs px-1.5 py-0.5 rounded bg-slate-900 border border-slate-800">b</code> appears, the previous index of <code className="font-mono text-amber-300 text-xs px-1.5 py-0.5 rounded bg-slate-900 border border-slate-800">b</code> is inside the current window, so <code className="font-mono text-amber-300 text-xs px-1.5 py-0.5 rounded bg-slate-900 border border-slate-800">left</code> moves forward.
        </p>
        <p key="p-8-123" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Later, the final <code className="font-mono text-amber-300 text-xs px-1.5 py-0.5 rounded bg-slate-900 border border-slate-800">a</code> appears. Its earlier occurrence is already outside the current window.
        </p>
        <p key="p-8-125" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          We must not move <code className="font-mono text-amber-300 text-xs px-1.5 py-0.5 rounded bg-slate-900 border border-slate-800">left</code> backwards.
        </p>
        <p key="p-8-127" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          This is why we write:
        </p>
        <div key="code-8-132" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-emerald-500/30 border border-emerald-500/50"></span>Code Example</span>
            <span className="text-[10px] text-slate-400 font-sans">Java / DSA</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`left = Math.max(left, lastSeen.get(current) + 1);`}</code>
          </pre>
        </div>
        <h4 key="h4-8-133" className="text-base font-semibold text-white mt-6 mb-2 flex items-center gap-2">
          <span className="text-emerald-500 font-mono">▸</span>
          Interview insight
        </h4>
        <p key="p-8-135" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          This problem demonstrates an important combination:
        </p>
        <p key="p-8-137" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <strong className="text-white font-semibold">Sliding Window + HashMap = Efficient substring tracking.</strong>
        </p>
        <p key="p-8-139" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          The sliding window determines the valid range, while the HashMap stores the information needed to decide how far to move the boundary.
        </p>
      </div>
    )
  },
  {
    id: 9,
    title: "9. Minimum Window Substring",
    category: "Sliding Window",
    content: (
      <div className="space-y-4">
        <p key="p-9-2" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          This is a more advanced sliding-window problem.
        </p>
        <p key="p-9-4" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <strong className="text-white font-semibold">Problem:</strong> Given two strings <code className="font-mono text-amber-300 text-xs px-1.5 py-0.5 rounded bg-slate-900 border border-slate-800">s</code> and <code className="font-mono text-amber-300 text-xs px-1.5 py-0.5 rounded bg-slate-900 border border-slate-800">t</code>, find the smallest substring of <code className="font-mono text-amber-300 text-xs px-1.5 py-0.5 rounded bg-slate-900 border border-slate-800">s</code> that contains every character of <code className="font-mono text-amber-300 text-xs px-1.5 py-0.5 rounded bg-slate-900 border border-slate-800">t</code>, including repeated occurrences.
        </p>
        <p key="p-9-6" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Example:
        </p>
        <div key="code-9-12" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-emerald-500/30 border border-emerald-500/50"></span>Code Example</span>
            <span className="text-[10px] text-slate-400 font-sans">Java / DSA</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`s = "ADOBECODEBANC"
t = "ABC"`}</code>
          </pre>
        </div>
        <p key="p-9-13" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Expected result:
        </p>
        <div key="code-9-18" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-emerald-500/30 border border-emerald-500/50"></span>Code Example</span>
            <span className="text-[10px] text-slate-400 font-sans">Java / DSA</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`"BANC"`}</code>
          </pre>
        </div>
        <p key="p-9-19" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Why?
        </p>
        <ul key="ul-9-24" className="my-3 space-y-1.5 pl-2">
          <li key="li-9-0" className="flex items-start gap-2 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0"></span>
            <span><code className="font-mono text-amber-300 text-xs px-1.5 py-0.5 rounded bg-slate-900 border border-slate-800">&quot;BANC&quot;</code> contains A, B, and C.</span>
          </li>
          <li key="li-9-1" className="flex items-start gap-2 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0"></span>
            <span>Its length is 4.</span>
          </li>
          <li key="li-9-2" className="flex items-start gap-2 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0"></span>
            <span>No shorter valid substring exists.</span>
          </li>
        </ul>
        <p key="p-9-25" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Notice that a valid window must respect character frequencies, not merely contain each distinct character.
        </p>
        <p key="p-9-27" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          For example:
        </p>
        <div key="code-9-33" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-emerald-500/30 border border-emerald-500/50"></span>Code Example</span>
            <span className="text-[10px] text-slate-400 font-sans">Java / DSA</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`s = "AAB"
t = "AAB"`}</code>
          </pre>
        </div>
        <p key="p-9-34" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          The window must contain two <code className="font-mono text-amber-300 text-xs px-1.5 py-0.5 rounded bg-slate-900 border border-slate-800">A</code> characters and one <code className="font-mono text-amber-300 text-xs px-1.5 py-0.5 rounded bg-slate-900 border border-slate-800">B</code>.
        </p>
        <h3 key="h3-9-36" className="text-lg md:text-xl font-bold text-emerald-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
          9.1 Approach
        </h3>
        <p key="p-9-38" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Use two frequency maps:
        </p>
        <ul key="ul-9-42" className="my-3 space-y-1.5 pl-2">
          <li key="li-9-0" className="flex items-start gap-2 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0"></span>
            <span><code className="font-mono text-amber-300 text-xs px-1.5 py-0.5 rounded bg-slate-900 border border-slate-800">need</code>: Required frequency of every character in <code className="font-mono text-amber-300 text-xs px-1.5 py-0.5 rounded bg-slate-900 border border-slate-800">t</code>.</span>
          </li>
          <li key="li-9-1" className="flex items-start gap-2 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0"></span>
            <span><code className="font-mono text-amber-300 text-xs px-1.5 py-0.5 rounded bg-slate-900 border border-slate-800">window</code>: Current frequency inside the active substring.</span>
          </li>
        </ul>
        <p key="p-9-43" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Also maintain:
        </p>
        <ul key="ul-9-47" className="my-3 space-y-1.5 pl-2">
          <li key="li-9-0" className="flex items-start gap-2 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0"></span>
            <span><code className="font-mono text-amber-300 text-xs px-1.5 py-0.5 rounded bg-slate-900 border border-slate-800">required</code>: Number of distinct characters that must reach their required frequency.</span>
          </li>
          <li key="li-9-1" className="flex items-start gap-2 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0"></span>
            <span><code className="font-mono text-amber-300 text-xs px-1.5 py-0.5 rounded bg-slate-900 border border-slate-800">formed</code>: Number of distinct characters that currently satisfy their required frequency.</span>
          </li>
        </ul>
        <p key="p-9-48" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          When <code className="font-mono text-amber-300 text-xs px-1.5 py-0.5 rounded bg-slate-900 border border-slate-800">formed == required</code>, the current window is valid.
        </p>
        <p key="p-9-50" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Then try shrinking it to find the shortest valid answer.
        </p>
        <h3 key="h3-9-52" className="text-lg md:text-xl font-bold text-emerald-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
          9.2 Java implementation
        </h3>
        <div key="code-9-141" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-emerald-500/30 border border-emerald-500/50"></span>Code Example</span>
            <span className="text-[10px] text-slate-400 font-sans">Java / DSA</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`import java.util.HashMap;
import java.util.Map;

public class MinimumWindowSubstring {

    public static String minWindow(String s, String t) {

        if (s.length() < t.length() || t.isEmpty()) {
            return "";
        }

        Map<Character, Integer> need = new HashMap<>();
        Map<Character, Integer> window = new HashMap<>();

        for (char c : t.toCharArray()) {
            need.put(c, need.getOrDefault(c, 0) + 1);
        }

        int required = need.size();
        int formed = 0;

        int left = 0;

        int minLength = Integer.MAX_VALUE;
        int minStart = 0;

        for (int right = 0; right < s.length(); right++) {

            char current = s.charAt(right);

            window.put(
                current,
                window.getOrDefault(current, 0) + 1
            );

            if (need.containsKey(current)
                    && window.get(current).intValue()
                       == need.get(current).intValue()) {

                formed++;
            }

            while (formed == required) {

                int currentLength = right - left + 1;

                if (currentLength < minLength) {

                    minLength = currentLength;
                    minStart = left;
                }

                char leftChar = s.charAt(left);

                window.put(
                    leftChar,
                    window.get(leftChar) - 1
                );

                if (need.containsKey(leftChar)
                        && window.get(leftChar)
                           < need.get(leftChar)) {

                    formed--;
                }

                left++;
            }
        }

        if (minLength == Integer.MAX_VALUE) {
            return "";
        }

        return s.substring(minStart, minStart + minLength);
    }

    public static void main(String[] args) {

        String s = "ADOBECODEBANC";
        String t = "ABC";

        System.out.println(minWindow(s, t));
    }
}`}</code>
          </pre>
        </div>
        <p key="p-9-142" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <strong className="text-white font-semibold">Output:</strong>
        </p>
        <div key="code-9-147" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-emerald-500/30 border border-emerald-500/50"></span>Code Example</span>
            <span className="text-[10px] text-slate-400 font-sans">Java / DSA</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`BANC`}</code>
          </pre>
        </div>
        <p key="p-9-148" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <strong className="text-white font-semibold">Complexity:</strong>
        </p>
        <ul key="ul-9-152" className="my-3 space-y-1.5 pl-2">
          <li key="li-9-0" className="flex items-start gap-2 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0"></span>
            <span>Time: <code className="font-mono text-cyan-300 font-semibold px-1 py-0.5 rounded bg-slate-900 border border-slate-800">O(n+m)</code> expected with HashMap operations, where <code className="font-mono text-amber-300 text-xs px-1.5 py-0.5 rounded bg-slate-900 border border-slate-800">n</code> and <code className="font-mono text-amber-300 text-xs px-1.5 py-0.5 rounded bg-slate-900 border border-slate-800">m</code> are the lengths of <code className="font-mono text-amber-300 text-xs px-1.5 py-0.5 rounded bg-slate-900 border border-slate-800">s</code> and <code className="font-mono text-amber-300 text-xs px-1.5 py-0.5 rounded bg-slate-900 border border-slate-800">t</code>.</span>
          </li>
          <li key="li-9-1" className="flex items-start gap-2 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0"></span>
            <span>Auxiliary space: <code className="font-mono text-cyan-300 font-semibold px-1 py-0.5 rounded bg-slate-900 border border-slate-800">O(d)</code>, where <code className="font-mono text-amber-300 text-xs px-1.5 py-0.5 rounded bg-slate-900 border border-slate-800">d</code> is the number of distinct characters tracked, bounded by the relevant character sets.</span>
          </li>
        </ul>
        <h4 key="h4-9-153" className="text-base font-semibold text-white mt-6 mb-2 flex items-center gap-2">
          <span className="text-emerald-500 font-mono">▸</span>
          Why does the inner while loop work?
        </h4>
        <p key="p-9-155" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          The outer loop expands the window until it contains all required characters.
        </p>
        <p key="p-9-157" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Once valid, the inner loop removes characters from the left.
        </p>
        <p key="p-9-159" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          It continues until removing another character would make the window invalid.
        </p>
        <p key="p-9-161" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          This guarantees that we examine increasingly smaller valid windows as we progress.
        </p>
        <h4 key="h4-9-163" className="text-base font-semibold text-white mt-6 mb-2 flex items-center gap-2">
          <span className="text-emerald-500 font-mono">▸</span>
          Important distinction
        </h4>
        <p key="p-9-165" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          The longest-substring-without-repetition problem and minimum-window-substring problem both use variable-size windows, but their conditions differ:
        </p>
        <div key="table-9-171" className="my-5 overflow-x-auto rounded-xl border border-slate-800 shadow-md">
          <table className="w-full text-xs text-left border-collapse">
            <thead>
              <tr className="bg-slate-900 border-b border-slate-800 text-emerald-400 font-mono">
                <th key="th-9-0" className="p-3 font-semibold">Problem</th>
                <th key="th-9-1" className="p-3 font-semibold">Window condition</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-850 bg-slate-950/60 font-sans">
              <tr key="tr-9-0" className="hover:bg-slate-900/40 transition-colors">
                <td key="td-9-0-0" className="p-3 text-slate-300 font-mono text-slate-200">Longest substring without repetition</td>
                <td key="td-9-0-1" className="p-3 text-slate-300 ">No character appears more than once</td>
              </tr>
              <tr key="tr-9-1" className="hover:bg-slate-900/40 transition-colors">
                <td key="td-9-1-0" className="p-3 text-slate-300 font-mono text-slate-200">Minimum window substring</td>
                <td key="td-9-1-1" className="p-3 text-slate-300 ">Every required character reaches its required frequency</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p key="p-9-172" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Understanding the condition is more important than memorizing the template.
        </p>
      </div>
    )
  },
  {
    id: 10,
    title: "10. Prefix Sum Arrays",
    category: "Prefix Sums",
    content: (
      <div className="space-y-4">
        <p key="p-10-2" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Prefix sums are used to calculate cumulative information.
        </p>
        <p key="p-10-4" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          They are especially useful when a problem asks for many range-sum queries.
        </p>
        <h3 key="h3-10-6" className="text-lg md:text-xl font-bold text-emerald-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
          10.1 Basic Idea
        </h3>
        <p key="p-10-8" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Consider:
        </p>
        <div key="code-10-13" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-emerald-500/30 border border-emerald-500/50"></span>Code Example</span>
            <span className="text-[10px] text-slate-400 font-sans">Java / DSA</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`Array: [2, 4, 6, 8, 10]`}</code>
          </pre>
        </div>
        <p key="p-10-14" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Construct a prefix sum array.
        </p>
        <div key="code-10-21" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-emerald-500/30 border border-emerald-500/50"></span>Code Example</span>
            <span className="text-[10px] text-slate-400 font-sans">Java / DSA</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`Original: [2, 4, 6, 8, 10]

Prefix:   [2, 6, 12, 20, 30]`}</code>
          </pre>
        </div>
        <p key="p-10-22" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Each prefix value represents the sum of all elements up to that index.
        </p>
        <p key="p-10-24" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Mathematically:
        </p>
        <div key="eq-10-27" className="my-3 p-3 rounded-lg bg-slate-950 border border-slate-800 font-mono text-xs text-cyan-300 text-center overflow-x-auto">
          {"P[i] = a[0] + a[1] + \\dots + a[i]"}
        </div>
        <p key="p-10-28" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          For convenience, we usually create a prefix array of length <code className="font-mono text-amber-300 text-xs px-1.5 py-0.5 rounded bg-slate-900 border border-slate-800">n + 1</code>.
        </p>
        <div key="code-10-36" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-emerald-500/30 border border-emerald-500/50"></span>Code Example</span>
            <span className="text-[10px] text-slate-400 font-sans">Java / DSA</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`Array:  [2, 4, 6, 8, 10]

Prefix: [0, 2, 6, 12, 20, 30]
         0  1  2   3   4   5`}</code>
          </pre>
        </div>
        <p key="p-10-37" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          The extra zero makes range queries easier.
        </p>
        <p key="p-10-39" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          The general formula is:
        </p>
        <div key="eq-10-42" className="my-3 p-3 rounded-lg bg-slate-950 border border-slate-800 font-mono text-xs text-cyan-300 text-center overflow-x-auto">
          {"P[i+1] = P[i] + a[i]"}
        </div>
        <h3 key="h3-10-43" className="text-lg md:text-xl font-bold text-emerald-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
          10.2 Calculating a Range Sum in O(1)
        </h3>
        <p key="p-10-45" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Suppose we need the sum of elements from index <code className="font-mono text-amber-300 text-xs px-1.5 py-0.5 rounded bg-slate-900 border border-slate-800">1</code> to index <code className="font-mono text-amber-300 text-xs px-1.5 py-0.5 rounded bg-slate-900 border border-slate-800">3</code>, inclusive.
        </p>
        <p key="p-10-47" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Original array:
        </p>
        <div key="code-10-52" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-emerald-500/30 border border-emerald-500/50"></span>Code Example</span>
            <span className="text-[10px] text-slate-400 font-sans">Java / DSA</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`[2, 4, 6, 8, 10]`}</code>
          </pre>
        </div>
        <p key="p-10-53" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Expected sum:
        </p>
        <div key="code-10-58" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-emerald-500/30 border border-emerald-500/50"></span>Code Example</span>
            <span className="text-[10px] text-slate-400 font-sans">Java / DSA</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`4 + 6 + 8 = 18`}</code>
          </pre>
        </div>
        <p key="p-10-59" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Using prefix sums:
        </p>
        <div key="code-10-64" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-emerald-500/30 border border-emerald-500/50"></span>Code Example</span>
            <span className="text-[10px] text-slate-400 font-sans">Java / DSA</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`Prefix: [0, 2, 6, 12, 20, 30]`}</code>
          </pre>
        </div>
        <p key="p-10-65" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Formula:
        </p>
        <div key="eq-10-68" className="my-3 p-3 rounded-lg bg-slate-950 border border-slate-800 font-mono text-xs text-cyan-300 text-center overflow-x-auto">
          {"sum(l,r) = P[r+1] - P[l]"}
        </div>
        <p key="p-10-69" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Substitute:
        </p>
        <div key="eq-10-72" className="my-3 p-3 rounded-lg bg-slate-950 border border-slate-800 font-mono text-xs text-cyan-300 text-center overflow-x-auto">
          {"sum(1,3) = P[4] - P[1]"}
        </div>
        <div key="eq-10-74" className="my-3 p-3 rounded-lg bg-slate-950 border border-slate-800 font-mono text-xs text-cyan-300 text-center overflow-x-auto">
          {"=20-2=18"}
        </div>
        <p key="p-10-75" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          We can answer the query in constant time.
        </p>
        <h3 key="h3-10-77" className="text-lg md:text-xl font-bold text-emerald-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
          10.3 Java implementation
        </h3>
        <div key="code-10-118" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-emerald-500/30 border border-emerald-500/50"></span>Code Example</span>
            <span className="text-[10px] text-slate-400 font-sans">Java / DSA</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`public class PrefixSum {

    public static long[] buildPrefixSum(int[] arr) {

        long[] prefix = new long[arr.length + 1];

        for (int i = 0; i < arr.length; i++) {

            prefix[i + 1] = prefix[i] + arr[i];
        }

        return prefix;
    }

    public static long rangeSum(
            long[] prefix,
            int left,
            int right) {

        if (left < 0 || right + 1 >= prefix.length
                || left > right) {

            throw new IllegalArgumentException("Invalid range");
        }

        return prefix[right + 1] - prefix[left];
    }

    public static void main(String[] args) {

        int[] arr = {2, 4, 6, 8, 10};

        long[] prefix = buildPrefixSum(arr);

        System.out.println(rangeSum(prefix, 1, 3));
    }
}`}</code>
          </pre>
        </div>
        <p key="p-10-119" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <strong className="text-white font-semibold">Output:</strong>
        </p>
        <div key="code-10-124" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-emerald-500/30 border border-emerald-500/50"></span>Code Example</span>
            <span className="text-[10px] text-slate-400 font-sans">Java / DSA</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`18`}</code>
          </pre>
        </div>
        <p key="p-10-125" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <strong className="text-white font-semibold">Complexity:</strong>
        </p>
        <div key="table-10-133" className="my-5 overflow-x-auto rounded-xl border border-slate-800 shadow-md">
          <table className="w-full text-xs text-left border-collapse">
            <thead>
              <tr className="bg-slate-900 border-b border-slate-800 text-emerald-400 font-mono">
                <th key="th-10-0" className="p-3 font-semibold">Operation</th>
                <th key="th-10-1" className="p-3 font-semibold">Time complexity</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-850 bg-slate-950/60 font-sans">
              <tr key="tr-10-0" className="hover:bg-slate-900/40 transition-colors">
                <td key="td-10-0-0" className="p-3 text-slate-300 font-mono text-slate-200">Build prefix sum</td>
                <td key="td-10-0-1" className="p-3 text-slate-300 "><code className="font-mono text-cyan-300 font-semibold px-1 py-0.5 rounded bg-slate-900 border border-slate-800">O(n)</code></td>
              </tr>
              <tr key="tr-10-1" className="hover:bg-slate-900/40 transition-colors">
                <td key="td-10-1-0" className="p-3 text-slate-300 font-mono text-slate-200">Answer one range query</td>
                <td key="td-10-1-1" className="p-3 text-slate-300 "><code className="font-mono text-cyan-300 font-semibold px-1 py-0.5 rounded bg-slate-900 border border-slate-800">O(1)</code></td>
              </tr>
              <tr key="tr-10-2" className="hover:bg-slate-900/40 transition-colors">
                <td key="td-10-2-0" className="p-3 text-slate-300 font-mono text-slate-200">Answer Q queries after preprocessing</td>
                <td key="td-10-2-1" className="p-3 text-slate-300 "><code className="font-mono text-cyan-300 font-semibold px-1 py-0.5 rounded bg-slate-900 border border-slate-800">O(n+Q)</code></td>
              </tr>
              <tr key="tr-10-3" className="hover:bg-slate-900/40 transition-colors">
                <td key="td-10-3-0" className="p-3 text-slate-300 font-mono text-slate-200">Additional storage</td>
                <td key="td-10-3-1" className="p-3 text-slate-300 "><code className="font-mono text-cyan-300 font-semibold px-1 py-0.5 rounded bg-slate-900 border border-slate-800">O(n)</code></td>
              </tr>
            </tbody>
          </table>
        </div>
        <p key="p-10-134" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Prefix sums are especially useful when the array does not change between queries.
        </p>
      </div>
    )
  },
  {
    id: 11,
    title: "11. 2D Prefix Sums",
    category: "Prefix Sums",
    content: (
      <div className="space-y-4">
        <p key="p-11-2" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          A normal prefix sum works with a one-dimensional array.
        </p>
        <p key="p-11-4" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          A 2D prefix sum extends the same concept to matrices.
        </p>
        <p key="p-11-6" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          It allows us to calculate the sum of any rectangular region in constant time after preprocessing.
        </p>
        <h3 key="h3-11-8" className="text-lg md:text-xl font-bold text-emerald-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
          11.1 Example
        </h3>
        <p key="p-11-10" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Consider this matrix:
        </p>
        <div key="code-11-18" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-emerald-500/30 border border-emerald-500/50"></span>Code Example</span>
            <span className="text-[10px] text-slate-400 font-sans">Java / DSA</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`       C0  C1  C2
R0     1   2   3
R1     4   5   6
R2     7   8   9`}</code>
          </pre>
        </div>
        <p key="p-11-19" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Suppose we want the sum of this rectangle:
        </p>
        <div key="code-11-25" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-emerald-500/30 border border-emerald-500/50"></span>Code Example</span>
            <span className="text-[10px] text-slate-400 font-sans">Java / DSA</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`5   6
8   9`}</code>
          </pre>
        </div>
        <p key="p-11-26" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Expected result:
        </p>
        <div key="eq-11-29" className="my-3 p-3 rounded-lg bg-slate-950 border border-slate-800 font-mono text-xs text-cyan-300 text-center overflow-x-auto">
          {"5+6+8+9=28"}
        </div>
        <p key="p-11-30" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Repeatedly iterating through each rectangle would be expensive when many queries are required.
        </p>
        <p key="p-11-32" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          A 2D prefix sum solves this efficiently.
        </p>
        <h3 key="h3-11-34" className="text-lg md:text-xl font-bold text-emerald-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
          11.2 Building a 2D Prefix Sum
        </h3>
        <p key="p-11-36" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Create a prefix matrix of dimensions:
        </p>
        <div key="code-11-41" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-emerald-500/30 border border-emerald-500/50"></span>Code Example</span>
            <span className="text-[10px] text-slate-400 font-sans">Java / DSA</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`(rows + 1) × (columns + 1)`}</code>
          </pre>
        </div>
        <p key="p-11-42" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          For every cell:
        </p>
        <div key="eq-11-45" className="my-3 p-3 rounded-lg bg-slate-950 border border-slate-800 font-mono text-xs text-cyan-300 text-center overflow-x-auto">
          {"P[i+1][j+1] = A[i][j] +P[i][j+1] +P[i+1][j] -P[i][j]"}
        </div>
        <p key="p-11-46" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          The last term is subtracted because the top-left region has been counted twice.
        </p>
        <h3 key="h3-11-48" className="text-lg md:text-xl font-bold text-emerald-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
          11.3 Rectangle Sum Formula
        </h3>
        <p key="p-11-50" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          For a rectangle with inclusive coordinates:
        </p>
        <ul key="ul-11-56" className="my-3 space-y-1.5 pl-2">
          <li key="li-11-0" className="flex items-start gap-2 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0"></span>
            <span>Top row = <code className="font-mono text-amber-300 text-xs px-1.5 py-0.5 rounded bg-slate-900 border border-slate-800">r1</code></span>
          </li>
          <li key="li-11-1" className="flex items-start gap-2 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0"></span>
            <span>Left column = <code className="font-mono text-amber-300 text-xs px-1.5 py-0.5 rounded bg-slate-900 border border-slate-800">c1</code></span>
          </li>
          <li key="li-11-2" className="flex items-start gap-2 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0"></span>
            <span>Bottom row = <code className="font-mono text-amber-300 text-xs px-1.5 py-0.5 rounded bg-slate-900 border border-slate-800">r2</code></span>
          </li>
          <li key="li-11-3" className="flex items-start gap-2 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0"></span>
            <span>Right column = <code className="font-mono text-amber-300 text-xs px-1.5 py-0.5 rounded bg-slate-900 border border-slate-800">c2</code></span>
          </li>
        </ul>
        <p key="p-11-57" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          The formula is:
        </p>
        <div key="eq-11-60" className="my-3 p-3 rounded-lg bg-slate-950 border border-slate-800 font-mono text-xs text-cyan-300 text-center overflow-x-auto">
          {"\\begin{aligned} sum ={}& P[r2+1][c2+1]\\\\ &-P[r1][c2+1]\\\\ &-P[r2+1][c1]\\\\ &+P[r1][c1] \\end{aligned}"}
        </div>
        <p key="p-11-61" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Think of this as inclusion-exclusion:
        </p>
        <ol key="ol-11-67" className="my-3 space-y-2 pl-2">
          <li key="oli-11-0" className="flex items-start gap-2.5 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-5 h-5 rounded-full bg-slate-800 text-emerald-400 font-mono text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5 border border-slate-700">
              1
            </span>
            <span>Start with the entire prefix rectangle.</span>
          </li>
          <li key="oli-11-1" className="flex items-start gap-2.5 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-5 h-5 rounded-full bg-slate-800 text-emerald-400 font-mono text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5 border border-slate-700">
              2
            </span>
            <span>Remove the area above the requested rectangle.</span>
          </li>
          <li key="oli-11-2" className="flex items-start gap-2.5 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-5 h-5 rounded-full bg-slate-800 text-emerald-400 font-mono text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5 border border-slate-700">
              3
            </span>
            <span>Remove the area to its left.</span>
          </li>
          <li key="oli-11-3" className="flex items-start gap-2.5 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-5 h-5 rounded-full bg-slate-800 text-emerald-400 font-mono text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5 border border-slate-700">
              4
            </span>
            <span>Add back the top-left overlap because it was removed twice.</span>
          </li>
        </ol>
        <h3 key="h3-11-68" className="text-lg md:text-xl font-bold text-emerald-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
          11.4 Java implementation
        </h3>
        <div key="code-11-124" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-emerald-500/30 border border-emerald-500/50"></span>Code Example</span>
            <span className="text-[10px] text-slate-400 font-sans">Java / DSA</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`public class MatrixPrefixSum {

    public static long[][] buildPrefix(int[][] matrix) {

        int rows = matrix.length;
        int cols = matrix[0].length;

        long[][] prefix = new long[rows + 1][cols + 1];

        for (int i = 0; i < rows; i++) {

            for (int j = 0; j < cols; j++) {

                prefix[i + 1][j + 1] =
                    matrix[i][j]
                    + prefix[i][j + 1]
                    + prefix[i + 1][j]
                    - prefix[i][j];
            }
        }

        return prefix;
    }

    public static long rectangleSum(
            long[][] prefix,
            int r1,
            int c1,
            int r2,
            int c2) {

        return prefix[r2 + 1][c2 + 1]
             - prefix[r1][c2 + 1]
             - prefix[r2 + 1][c1]
             + prefix[r1][c1];
    }

    public static void main(String[] args) {

        int[][] matrix = {
            {1, 2, 3},
            {4, 5, 6},
            {7, 8, 9}
        };

        long[][] prefix = buildPrefix(matrix);

        System.out.println(
            rectangleSum(prefix, 1, 1, 2, 2)
        );
    }
}`}</code>
          </pre>
        </div>
        <p key="p-11-125" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <strong className="text-white font-semibold">Output:</strong>
        </p>
        <div key="code-11-130" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-emerald-500/30 border border-emerald-500/50"></span>Code Example</span>
            <span className="text-[10px] text-slate-400 font-sans">Java / DSA</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`28`}</code>
          </pre>
        </div>
        <p key="p-11-131" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <strong className="text-white font-semibold">Complexity:</strong>
        </p>
        <ul key="ul-11-136" className="my-3 space-y-1.5 pl-2">
          <li key="li-11-0" className="flex items-start gap-2 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0"></span>
            <span>Building the prefix matrix: <code className="font-mono text-cyan-300 font-semibold px-1 py-0.5 rounded bg-slate-900 border border-slate-800">O(rows \times columns)</code>.</span>
          </li>
          <li key="li-11-1" className="flex items-start gap-2 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0"></span>
            <span>Each rectangle query: <code className="font-mono text-cyan-300 font-semibold px-1 py-0.5 rounded bg-slate-900 border border-slate-800">O(1)</code>.</span>
          </li>
          <li key="li-11-2" className="flex items-start gap-2 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0"></span>
            <span>Additional space: <code className="font-mono text-cyan-300 font-semibold px-1 py-0.5 rounded bg-slate-900 border border-slate-800">O(rows \times columns)</code>.</span>
          </li>
        </ul>
        <p key="p-11-137" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <strong className="text-white font-semibold">Real-world applications:</strong>
        </p>
        <ul key="ul-11-144" className="my-3 space-y-1.5 pl-2">
          <li key="li-11-0" className="flex items-start gap-2 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0"></span>
            <span>Image processing.</span>
          </li>
          <li key="li-11-1" className="flex items-start gap-2 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0"></span>
            <span>2D grid analysis.</span>
          </li>
          <li key="li-11-2" className="flex items-start gap-2 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0"></span>
            <span>Finding the sum of a rectangular region.</span>
          </li>
          <li key="li-11-3" className="flex items-start gap-2 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0"></span>
            <span>Heat maps.</span>
          </li>
          <li key="li-11-4" className="flex items-start gap-2 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0"></span>
            <span>Matrix-based competitive programming problems.</span>
          </li>
        </ul>
      </div>
    )
  },
  {
    id: 12,
    title: "12. Difference Arrays",
    category: "Prefix Sums",
    content: (
      <div className="space-y-4">
        <p key="p-12-2" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          A difference array is closely related to prefix sums.
        </p>
        <p key="p-12-4" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          While prefix sums efficiently answer range-sum queries, difference arrays efficiently handle repeated range updates.
        </p>
        <p key="p-12-6" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Suppose we have:
        </p>
        <div key="code-12-11" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-emerald-500/30 border border-emerald-500/50"></span>Code Example</span>
            <span className="text-[10px] text-slate-400 font-sans">Java / DSA</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`[0, 0, 0, 0, 0]`}</code>
          </pre>
        </div>
        <p key="p-12-12" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          We need to add <code className="font-mono text-amber-300 text-xs px-1.5 py-0.5 rounded bg-slate-900 border border-slate-800">5</code> to every element from index <code className="font-mono text-amber-300 text-xs px-1.5 py-0.5 rounded bg-slate-900 border border-slate-800">1</code> to index <code className="font-mono text-amber-300 text-xs px-1.5 py-0.5 rounded bg-slate-900 border border-slate-800">3</code>.
        </p>
        <p key="p-12-14" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Expected result:
        </p>
        <div key="code-12-19" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-emerald-500/30 border border-emerald-500/50"></span>Code Example</span>
            <span className="text-[10px] text-slate-400 font-sans">Java / DSA</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`[0, 5, 5, 5, 0]`}</code>
          </pre>
        </div>
        <p key="p-12-20" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          A straightforward implementation updates all three positions.
        </p>
        <p key="p-12-22" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          But suppose we need thousands of range updates. Repeatedly traversing each range may become expensive.
        </p>
        <p key="p-12-24" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          A difference array lets us represent each update using only two changes.
        </p>
        <h3 key="h3-12-26" className="text-lg md:text-xl font-bold text-emerald-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
          12.1 Difference Array Concept
        </h3>
        <p key="p-12-28" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          For an array <code className="font-mono text-amber-300 text-xs px-1.5 py-0.5 rounded bg-slate-900 border border-slate-800">arr</code>, define:
        </p>
        <div key="eq-12-31" className="my-3 p-3 rounded-lg bg-slate-950 border border-slate-800 font-mono text-xs text-cyan-300 text-center overflow-x-auto">
          {"diff[0]=arr[0]"}
        </div>
        <div key="eq-12-33" className="my-3 p-3 rounded-lg bg-slate-950 border border-slate-800 font-mono text-xs text-cyan-300 text-center overflow-x-auto">
          {"diff[i]=arr[i]-arr[i-1]"}
        </div>
        <p key="p-12-34" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          For the original array:
        </p>
        <div key="code-12-41" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-emerald-500/30 border border-emerald-500/50"></span>Code Example</span>
            <span className="text-[10px] text-slate-400 font-sans">Java / DSA</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`Array: [0, 0, 0, 0, 0]

Diff:  [0, 0, 0, 0, 0]`}</code>
          </pre>
        </div>
        <p key="p-12-42" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          To add <code className="font-mono text-amber-300 text-xs px-1.5 py-0.5 rounded bg-slate-900 border border-slate-800">5</code> from index <code className="font-mono text-amber-300 text-xs px-1.5 py-0.5 rounded bg-slate-900 border border-slate-800">1</code> through index <code className="font-mono text-amber-300 text-xs px-1.5 py-0.5 rounded bg-slate-900 border border-slate-800">3</code>:
        </p>
        <div key="code-12-48" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-emerald-500/30 border border-emerald-500/50"></span>Code Example</span>
            <span className="text-[10px] text-slate-400 font-sans">Java / DSA</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`diff[1] += 5
diff[4] -= 5`}</code>
          </pre>
        </div>
        <p key="p-12-49" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          The updated difference array becomes:
        </p>
        <div key="code-12-54" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-emerald-500/30 border border-emerald-500/50"></span>Code Example</span>
            <span className="text-[10px] text-slate-400 font-sans">Java / DSA</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`Diff: [0, 5, 0, 0, -5]`}</code>
          </pre>
        </div>
        <p key="p-12-55" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Take the running sum:
        </p>
        <div key="code-12-64" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-emerald-500/30 border border-emerald-500/50"></span>Code Example</span>
            <span className="text-[10px] text-slate-400 font-sans">Java / DSA</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`Index 0:  0
Index 1:  5
Index 2:  5
Index 3:  5
Index 4:  0`}</code>
          </pre>
        </div>
        <p key="p-12-65" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          The resulting array is:
        </p>
        <div key="code-12-70" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-emerald-500/30 border border-emerald-500/50"></span>Code Example</span>
            <span className="text-[10px] text-slate-400 font-sans">Java / DSA</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`[0, 5, 5, 5, 0]`}</code>
          </pre>
        </div>
        <h3 key="h3-12-71" className="text-lg md:text-xl font-bold text-emerald-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
          12.2 General Formula
        </h3>
        <p key="p-12-73" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          For a range update:
        </p>
        <div key="eq-12-76" className="my-3 p-3 rounded-lg bg-slate-950 border border-slate-800 font-mono text-xs text-cyan-300 text-center overflow-x-auto">
          {"[l,r] \\text{ add } x"}
        </div>
        <p key="p-12-77" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Apply:
        </p>
        <div key="eq-12-80" className="my-3 p-3 rounded-lg bg-slate-950 border border-slate-800 font-mono text-xs text-cyan-300 text-center overflow-x-auto">
          {"diff[l] += x"}
        </div>
        <p key="p-12-81" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          If <code className="font-mono text-amber-300 text-xs px-1.5 py-0.5 rounded bg-slate-900 border border-slate-800">r + 1</code> is inside the array:
        </p>
        <div key="eq-12-84" className="my-3 p-3 rounded-lg bg-slate-950 border border-slate-800 font-mono text-xs text-cyan-300 text-center overflow-x-auto">
          {"diff[r+1] -= x"}
        </div>
        <p key="p-12-85" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          After processing every update, compute the prefix sum of the difference array to reconstruct the final values.
        </p>
        <h3 key="h3-12-87" className="text-lg md:text-xl font-bold text-emerald-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
          12.3 Java implementation
        </h3>
        <div key="code-12-135" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-emerald-500/30 border border-emerald-500/50"></span>Code Example</span>
            <span className="text-[10px] text-slate-400 font-sans">Java / DSA</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`import java.util.Arrays;

public class DifferenceArray {

    public static void rangeAdd(
            long[] diff,
            int left,
            int right,
            long value) {

        diff[left] += value;

        if (right + 1 < diff.length) {
            diff[right + 1] -= value;
        }
    }

    public static long[] buildResult(long[] diff) {

        long[] result = new long[diff.length];

        result[0] = diff[0];

        for (int i = 1; i < diff.length; i++) {

            result[i] = result[i - 1] + diff[i];
        }

        return result;
    }

    public static void main(String[] args) {

        int n = 5;

        long[] diff = new long[n];

        rangeAdd(diff, 1, 3, 5);

        long[] result = buildResult(diff);

        System.out.println(Arrays.toString(result));
    }
}`}</code>
          </pre>
        </div>
        <p key="p-12-136" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <strong className="text-white font-semibold">Output:</strong>
        </p>
        <div key="code-12-141" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-emerald-500/30 border border-emerald-500/50"></span>Code Example</span>
            <span className="text-[10px] text-slate-400 font-sans">Java / DSA</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`[0, 5, 5, 5, 0]`}</code>
          </pre>
        </div>
        <p key="p-12-142" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <strong className="text-white font-semibold">Complexity:</strong>
        </p>
        <p key="p-12-144" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          For <code className="font-mono text-amber-300 text-xs px-1.5 py-0.5 rounded bg-slate-900 border border-slate-800">Q</code> range updates:
        </p>
        <ul key="ul-12-150" className="my-3 space-y-1.5 pl-2">
          <li key="li-12-0" className="flex items-start gap-2 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0"></span>
            <span>Each update: <code className="font-mono text-cyan-300 font-semibold px-1 py-0.5 rounded bg-slate-900 border border-slate-800">O(1)</code>.</span>
          </li>
          <li key="li-12-1" className="flex items-start gap-2 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0"></span>
            <span>Reconstructing the final array: <code className="font-mono text-cyan-300 font-semibold px-1 py-0.5 rounded bg-slate-900 border border-slate-800">O(n)</code>.</span>
          </li>
          <li key="li-12-2" className="flex items-start gap-2 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0"></span>
            <span>Total: <code className="font-mono text-cyan-300 font-semibold px-1 py-0.5 rounded bg-slate-900 border border-slate-800">O(n+Q)</code>.</span>
          </li>
          <li key="li-12-3" className="flex items-start gap-2 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0"></span>
            <span>Auxiliary space: <code className="font-mono text-cyan-300 font-semibold px-1 py-0.5 rounded bg-slate-900 border border-slate-800">O(n)</code>.</span>
          </li>
        </ul>
        <h4 key="h4-12-151" className="text-base font-semibold text-white mt-6 mb-2 flex items-center gap-2">
          <span className="text-emerald-500 font-mono">▸</span>
          Difference Arrays vs Prefix Sums
        </h4>
        <div key="table-12-159" className="my-5 overflow-x-auto rounded-xl border border-slate-800 shadow-md">
          <table className="w-full text-xs text-left border-collapse">
            <thead>
              <tr className="bg-slate-900 border-b border-slate-800 text-emerald-400 font-mono">
                <th key="th-12-0" className="p-3 font-semibold">Prefix Sum</th>
                <th key="th-12-1" className="p-3 font-semibold">Difference Array</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-850 bg-slate-950/60 font-sans">
              <tr key="tr-12-0" className="hover:bg-slate-900/40 transition-colors">
                <td key="td-12-0-0" className="p-3 text-slate-300 font-mono text-slate-200">Efficient range-sum queries</td>
                <td key="td-12-0-1" className="p-3 text-slate-300 ">Efficient range updates</td>
              </tr>
              <tr key="tr-12-1" className="hover:bg-slate-900/40 transition-colors">
                <td key="td-12-1-0" className="p-3 text-slate-300 font-mono text-slate-200">Precompute cumulative totals</td>
                <td key="td-12-1-1" className="p-3 text-slate-300 ">Record changes at boundaries</td>
              </tr>
              <tr key="tr-12-2" className="hover:bg-slate-900/40 transition-colors">
                <td key="td-12-2-0" className="p-3 text-slate-300 font-mono text-slate-200">Query uses subtraction</td>
                <td key="td-12-2-1" className="p-3 text-slate-300 ">Reconstruction uses cumulative addition</td>
              </tr>
              <tr key="tr-12-3" className="hover:bg-slate-900/40 transition-colors">
                <td key="td-12-3-0" className="p-3 text-slate-300 font-mono text-slate-200">Usually assumes the array is static</td>
                <td key="td-12-3-1" className="p-3 text-slate-300 ">Particularly useful for batch updates</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    )
  },
  {
    id: 13,
    title: "13. Prefix XOR",
    category: "Prefix Sums",
    content: (
      <div className="space-y-4">
        <p key="p-13-2" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Prefix XOR is similar to prefix sum, but it uses the XOR operator.
        </p>
        <p key="p-13-4" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          The XOR operator is written as:
        </p>
        <div key="code-13-9" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-emerald-500/30 border border-emerald-500/50"></span>Code Example</span>
            <span className="text-[10px] text-slate-400 font-sans">Java / DSA</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`^`}</code>
          </pre>
        </div>
        <p key="p-13-10" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Its basic properties are:
        </p>
        <div key="code-13-17" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-emerald-500/30 border border-emerald-500/50"></span>Code Example</span>
            <span className="text-[10px] text-slate-400 font-sans">Java / DSA</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`0 ^ a = a
a ^ a = 0
a ^ 0 = a`}</code>
          </pre>
        </div>
        <p key="p-13-18" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          XOR is commutative and associative:
        </p>
        <div key="eq-13-21" className="my-3 p-3 rounded-lg bg-slate-950 border border-slate-800 font-mono text-xs text-cyan-300 text-center overflow-x-auto">
          {"a \\oplus b = b \\oplus a"}
        </div>
        <div key="eq-13-23" className="my-3 p-3 rounded-lg bg-slate-950 border border-slate-800 font-mono text-xs text-cyan-300 text-center overflow-x-auto">
          {"(a \\oplus b)\\oplus c = a\\oplus(b\\oplus c)"}
        </div>
        <p key="p-13-24" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          These properties make range-XOR queries efficient.
        </p>
        <h3 key="h3-13-26" className="text-lg md:text-xl font-bold text-emerald-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
          13.1 Building Prefix XOR
        </h3>
        <p key="p-13-28" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          For an array:
        </p>
        <div key="code-13-33" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-emerald-500/30 border border-emerald-500/50"></span>Code Example</span>
            <span className="text-[10px] text-slate-400 font-sans">Java / DSA</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`[2, 3, 5, 7]`}</code>
          </pre>
        </div>
        <p key="p-13-34" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Define:
        </p>
        <div key="code-13-40" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-emerald-500/30 border border-emerald-500/50"></span>Code Example</span>
            <span className="text-[10px] text-slate-400 font-sans">Java / DSA</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`prefix[0] = 0
prefix[i + 1] = prefix[i] ^ arr[i]`}</code>
          </pre>
        </div>
        <p key="p-13-41" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Result:
        </p>
        <div key="code-13-47" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-emerald-500/30 border border-emerald-500/50"></span>Code Example</span>
            <span className="text-[10px] text-slate-400 font-sans">Java / DSA</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`Array:       [2, 3, 5, 7]
Prefix XOR: [0, 2, 1, 4, 3]`}</code>
          </pre>
        </div>
        <h3 key="h3-13-48" className="text-lg md:text-xl font-bold text-emerald-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
          13.2 Range XOR Formula
        </h3>
        <p key="p-13-50" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          To calculate XOR from index <code className="font-mono text-amber-300 text-xs px-1.5 py-0.5 rounded bg-slate-900 border border-slate-800">left</code> to index <code className="font-mono text-amber-300 text-xs px-1.5 py-0.5 rounded bg-slate-900 border border-slate-800">right</code>:
        </p>
        <div key="eq-13-53" className="my-3 p-3 rounded-lg bg-slate-950 border border-slate-800 font-mono text-xs text-cyan-300 text-center overflow-x-auto">
          {"XOR(left,right)=P[right+1]\\oplus P[left]"}
        </div>
        <p key="p-13-54" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Example:
        </p>
        <div key="code-13-59" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-emerald-500/30 border border-emerald-500/50"></span>Code Example</span>
            <span className="text-[10px] text-slate-400 font-sans">Java / DSA</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`Array = [2, 3, 5, 7]`}</code>
          </pre>
        </div>
        <p key="p-13-60" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          XOR from index <code className="font-mono text-amber-300 text-xs px-1.5 py-0.5 rounded bg-slate-900 border border-slate-800">1</code> through <code className="font-mono text-amber-300 text-xs px-1.5 py-0.5 rounded bg-slate-900 border border-slate-800">3</code>:
        </p>
        <div key="eq-13-63" className="my-3 p-3 rounded-lg bg-slate-950 border border-slate-800 font-mono text-xs text-cyan-300 text-center overflow-x-auto">
          {"3\\oplus5\\oplus7=1"}
        </div>
        <p key="p-13-64" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Using prefix XOR:
        </p>
        <div key="eq-13-67" className="my-3 p-3 rounded-lg bg-slate-950 border border-slate-800 font-mono text-xs text-cyan-300 text-center overflow-x-auto">
          {"P[4]\\oplus P[1]"}
        </div>
        <div key="eq-13-69" className="my-3 p-3 rounded-lg bg-slate-950 border border-slate-800 font-mono text-xs text-cyan-300 text-center overflow-x-auto">
          {"=3\\oplus2=1"}
        </div>
        <h3 key="h3-13-70" className="text-lg md:text-xl font-bold text-emerald-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
          13.3 Java implementation
        </h3>
        <div key="code-13-105" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-emerald-500/30 border border-emerald-500/50"></span>Code Example</span>
            <span className="text-[10px] text-slate-400 font-sans">Java / DSA</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`public class PrefixXOR {

    public static int[] buildPrefixXOR(int[] arr) {

        int[] prefix = new int[arr.length + 1];

        for (int i = 0; i < arr.length; i++) {

            prefix[i + 1] = prefix[i] ^ arr[i];
        }

        return prefix;
    }

    public static int rangeXOR(
            int[] prefix,
            int left,
            int right) {

        return prefix[right + 1] ^ prefix[left];
    }

    public static void main(String[] args) {

        int[] arr = {2, 3, 5, 7};

        int[] prefix = buildPrefixXOR(arr);

        System.out.println(rangeXOR(prefix, 1, 3));
    }
}`}</code>
          </pre>
        </div>
        <p key="p-13-106" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <strong className="text-white font-semibold">Output:</strong>
        </p>
        <div key="code-13-111" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-emerald-500/30 border border-emerald-500/50"></span>Code Example</span>
            <span className="text-[10px] text-slate-400 font-sans">Java / DSA</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`1`}</code>
          </pre>
        </div>
        <p key="p-13-112" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <strong className="text-white font-semibold">Complexity:</strong>
        </p>
        <ul key="ul-13-117" className="my-3 space-y-1.5 pl-2">
          <li key="li-13-0" className="flex items-start gap-2 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0"></span>
            <span>Building prefix XOR: <code className="font-mono text-cyan-300 font-semibold px-1 py-0.5 rounded bg-slate-900 border border-slate-800">O(n)</code>.</span>
          </li>
          <li key="li-13-1" className="flex items-start gap-2 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0"></span>
            <span>Each range query: <code className="font-mono text-cyan-300 font-semibold px-1 py-0.5 rounded bg-slate-900 border border-slate-800">O(1)</code>.</span>
          </li>
          <li key="li-13-2" className="flex items-start gap-2 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0"></span>
            <span>Additional space: <code className="font-mono text-cyan-300 font-semibold px-1 py-0.5 rounded bg-slate-900 border border-slate-800">O(n)</code>.</span>
          </li>
        </ul>
        <h3 key="h3-13-118" className="text-lg md:text-xl font-bold text-emerald-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
          13.4 Where Prefix XOR Is Useful
        </h3>
        <ul key="ul-13-125" className="my-3 space-y-1.5 pl-2">
          <li key="li-13-0" className="flex items-start gap-2 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0"></span>
            <span>Range XOR queries.</span>
          </li>
          <li key="li-13-1" className="flex items-start gap-2 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0"></span>
            <span>Finding XOR of all subarrays.</span>
          </li>
          <li key="li-13-2" className="flex items-start gap-2 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0"></span>
            <span>Detecting repeated values using XOR properties in special problems.</span>
          </li>
          <li key="li-13-3" className="flex items-start gap-2 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0"></span>
            <span>Bitwise competitive programming problems.</span>
          </li>
          <li key="li-13-4" className="flex items-start gap-2 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0"></span>
            <span>XOR-based subarray counting.</span>
          </li>
        </ul>
      </div>
    )
  },
  {
    id: 14,
    title: "14. Subarray Sum Problems",
    category: "Prefix Sums & Hashing",
    content: (
      <div className="space-y-4">
        <p key="p-14-2" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Subarray sum problems are among the most common uses of prefix sums and sliding windows.
        </p>
        <p key="p-14-4" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          The correct technique depends on the properties of the array and the question.
        </p>
        <p key="p-14-6" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Consider:
        </p>
        <div key="code-14-11" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-emerald-500/30 border border-emerald-500/50"></span>Code Example</span>
            <span className="text-[10px] text-slate-400 font-sans">Java / DSA</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`Array: [1, 2, 3, 4]`}</code>
          </pre>
        </div>
        <p key="p-14-12" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Some possible questions:
        </p>
        <ul key="ul-14-19" className="my-3 space-y-1.5 pl-2">
          <li key="li-14-0" className="flex items-start gap-2 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0"></span>
            <span>Find a subarray with sum equal to K.</span>
          </li>
          <li key="li-14-1" className="flex items-start gap-2 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0"></span>
            <span>Count subarrays with sum equal to K.</span>
          </li>
          <li key="li-14-2" className="flex items-start gap-2 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0"></span>
            <span>Find the longest subarray with sum K.</span>
          </li>
          <li key="li-14-3" className="flex items-start gap-2 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0"></span>
            <span>Find the shortest subarray with sum at least K.</span>
          </li>
          <li key="li-14-4" className="flex items-start gap-2 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0"></span>
            <span>Find the maximum-sum subarray.</span>
          </li>
        </ul>
        <p key="p-14-20" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          These questions may look similar, but their solutions are different.
        </p>
        <h3 key="h3-14-22" className="text-lg md:text-xl font-bold text-emerald-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
          14.1 Count Subarrays with Sum Equal to K
        </h3>
        <p key="p-14-24" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <strong className="text-white font-semibold">Problem:</strong> Count how many contiguous subarrays have a sum equal to <code className="font-mono text-amber-300 text-xs px-1.5 py-0.5 rounded bg-slate-900 border border-slate-800">K</code>.
        </p>
        <p key="p-14-26" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Input:
        </p>
        <div key="code-14-32" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-emerald-500/30 border border-emerald-500/50"></span>Code Example</span>
            <span className="text-[10px] text-slate-400 font-sans">Java / DSA</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`arr = [1, 2, 3]
K = 3`}</code>
          </pre>
        </div>
        <p key="p-14-33" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Subarrays:
        </p>
        <div key="code-14-39" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-emerald-500/30 border border-emerald-500/50"></span>Code Example</span>
            <span className="text-[10px] text-slate-400 font-sans">Java / DSA</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`[1, 2] → Sum 3
[3]    → Sum 3`}</code>
          </pre>
        </div>
        <p key="p-14-40" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Expected result:
        </p>
        <div key="code-14-45" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-emerald-500/30 border border-emerald-500/50"></span>Code Example</span>
            <span className="text-[10px] text-slate-400 font-sans">Java / DSA</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`2`}</code>
          </pre>
        </div>
        <h4 key="h4-14-46" className="text-base font-semibold text-white mt-6 mb-2 flex items-center gap-2">
          <span className="text-emerald-500 font-mono">▸</span>
          Prefix Sum + HashMap
        </h4>
        <p key="p-14-48" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Let the current prefix sum be <code className="font-mono text-amber-300 text-xs px-1.5 py-0.5 rounded bg-slate-900 border border-slate-800">prefix</code>.
        </p>
        <p key="p-14-50" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          If an earlier prefix sum was:
        </p>
        <div key="eq-14-53" className="my-3 p-3 rounded-lg bg-slate-950 border border-slate-800 font-mono text-xs text-cyan-300 text-center overflow-x-auto">
          {"prefix-K"}
        </div>
        <p key="p-14-54" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          then the elements between that earlier position and the current position have sum <code className="font-mono text-amber-300 text-xs px-1.5 py-0.5 rounded bg-slate-900 border border-slate-800">K</code>.
        </p>
        <p key="p-14-56" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          In other words:
        </p>
        <div key="eq-14-59" className="my-3 p-3 rounded-lg bg-slate-950 border border-slate-800 font-mono text-xs text-cyan-300 text-center overflow-x-auto">
          {"currentPrefix-previousPrefix=K"}
        </div>
        <p key="p-14-60" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Rearranging:
        </p>
        <div key="eq-14-63" className="my-3 p-3 rounded-lg bg-slate-950 border border-slate-800 font-mono text-xs text-cyan-300 text-center overflow-x-auto">
          {"previousPrefix=currentPrefix-K"}
        </div>
        <p key="p-14-64" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          We can store the frequency of previously seen prefix sums in a HashMap.
        </p>
        <h4 key="h4-14-66" className="text-base font-semibold text-white mt-6 mb-2 flex items-center gap-2">
          <span className="text-emerald-500 font-mono">▸</span>
          Java implementation
        </h4>
        <div key="code-14-109" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-emerald-500/30 border border-emerald-500/50"></span>Code Example</span>
            <span className="text-[10px] text-slate-400 font-sans">Java / DSA</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`import java.util.HashMap;
import java.util.Map;

public class SubarraySumEqualsK {

    public static long subarraySum(int[] nums, int k) {

        Map<Long, Integer> frequency = new HashMap<>();

        frequency.put(0L, 1);

        long prefix = 0;
        long count = 0;

        for (int num : nums) {

            prefix += num;

            count += frequency.getOrDefault(
                prefix - k,
                0
            );

            frequency.put(
                prefix,
                frequency.getOrDefault(prefix, 0) + 1
            );
        }

        return count;
    }

    public static void main(String[] args) {

        int[] arr = {1, 2, 3};

        System.out.println(subarraySum(arr, 3));
    }
}`}</code>
          </pre>
        </div>
        <p key="p-14-110" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <strong className="text-white font-semibold">Output:</strong>
        </p>
        <div key="code-14-115" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-emerald-500/30 border border-emerald-500/50"></span>Code Example</span>
            <span className="text-[10px] text-slate-400 font-sans">Java / DSA</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`2`}</code>
          </pre>
        </div>
        <h4 key="h4-14-116" className="text-base font-semibold text-white mt-6 mb-2 flex items-center gap-2">
          <span className="text-emerald-500 font-mono">▸</span>
          Why initialize the map with <code className="font-mono text-amber-300 text-xs px-1.5 py-0.5 rounded bg-slate-900 border border-slate-800">0 → 1</code>?
        </h4>
        <p key="p-14-118" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          This represents an empty prefix before the array begins.
        </p>
        <p key="p-14-120" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Without it, we would fail to count a valid subarray that starts at index <code className="font-mono text-amber-300 text-xs px-1.5 py-0.5 rounded bg-slate-900 border border-slate-800">0</code>.
        </p>
        <h4 key="h4-14-122" className="text-base font-semibold text-white mt-6 mb-2 flex items-center gap-2">
          <span className="text-emerald-500 font-mono">▸</span>
          Why is this better than sliding window?
        </h4>
        <p key="p-14-124" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Because this technique works with negative numbers too.
        </p>
        <p key="p-14-126" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Example:
        </p>
        <div key="code-14-131" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-emerald-500/30 border border-emerald-500/50"></span>Code Example</span>
            <span className="text-[10px] text-slate-400 font-sans">Java / DSA</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`[2, -1, 2]`}</code>
          </pre>
        </div>
        <p key="p-14-132" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          With negative values, adding a new element does not always increase the window sum. Therefore, the usual sliding-window shrinking rule may fail.
        </p>
        <p key="p-14-134" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Prefix sums do not depend on all elements being nonnegative.
        </p>
        <p key="p-14-136" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <strong className="text-white font-semibold">Complexity:</strong>
        </p>
        <ul key="ul-14-140" className="my-3 space-y-1.5 pl-2">
          <li key="li-14-0" className="flex items-start gap-2 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0"></span>
            <span>Time: <code className="font-mono text-cyan-300 font-semibold px-1 py-0.5 rounded bg-slate-900 border border-slate-800">O(n)</code> expected.</span>
          </li>
          <li key="li-14-1" className="flex items-start gap-2 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0"></span>
            <span>Auxiliary space: <code className="font-mono text-cyan-300 font-semibold px-1 py-0.5 rounded bg-slate-900 border border-slate-800">O(n)</code>.</span>
          </li>
        </ul>
        <h3 key="h3-14-141" className="text-lg md:text-xl font-bold text-emerald-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
          14.2 Longest Subarray with Sum Equal to K
        </h3>
        <p key="p-14-143" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          This problem is similar, but we want the maximum length instead of the count.
        </p>
        <h4 key="h4-14-145" className="text-base font-semibold text-white mt-6 mb-2 flex items-center gap-2">
          <span className="text-emerald-500 font-mono">▸</span>
          Key idea
        </h4>
        <p key="p-14-147" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Store the earliest index at which each prefix sum appears.
        </p>
        <p key="p-14-149" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Why the earliest index?
        </p>
        <p key="p-14-151" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Suppose the same prefix sum occurs at indices <code className="font-mono text-amber-300 text-xs px-1.5 py-0.5 rounded bg-slate-900 border border-slate-800">2</code> and <code className="font-mono text-amber-300 text-xs px-1.5 py-0.5 rounded bg-slate-900 border border-slate-800">7</code>.
        </p>
        <p key="p-14-153" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          To obtain the longest possible range ending at some later index, we prefer the earlier occurrence.
        </p>
        <h4 key="h4-14-155" className="text-base font-semibold text-white mt-6 mb-2 flex items-center gap-2">
          <span className="text-emerald-500 font-mono">▸</span>
          Java implementation
        </h4>
        <div key="code-14-199" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-emerald-500/30 border border-emerald-500/50"></span>Code Example</span>
            <span className="text-[10px] text-slate-400 font-sans">Java / DSA</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`import java.util.HashMap;
import java.util.Map;

public class LongestSubarraySumK {

    public static int longestSubarray(int[] arr, long k) {

        Map<Long, Integer> firstIndex = new HashMap<>();

        firstIndex.put(0L, -1);

        long prefix = 0;
        int maxLength = 0;

        for (int i = 0; i < arr.length; i++) {

            prefix += arr[i];

            long required = prefix - k;

            if (firstIndex.containsKey(required)) {

                int length = i - firstIndex.get(required);

                maxLength = Math.max(maxLength, length);
            }

            firstIndex.putIfAbsent(prefix, i);
        }

        return maxLength;
    }

    public static void main(String[] args) {

        int[] arr = {1, -1, 5, -2, 3};

        System.out.println(longestSubarray(arr, 3));
    }
}`}</code>
          </pre>
        </div>
        <p key="p-14-200" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <strong className="text-white font-semibold">Output:</strong>
        </p>
        <div key="code-14-205" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-emerald-500/30 border border-emerald-500/50"></span>Code Example</span>
            <span className="text-[10px] text-slate-400 font-sans">Java / DSA</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`4`}</code>
          </pre>
        </div>
        <p key="p-14-206" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          One longest valid subarray is:
        </p>
        <div key="code-14-211" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-emerald-500/30 border border-emerald-500/50"></span>Code Example</span>
            <span className="text-[10px] text-slate-400 font-sans">Java / DSA</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`[1, -1, 5, -2]`}</code>
          </pre>
        </div>
        <p key="p-14-212" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Its sum is <code className="font-mono text-amber-300 text-xs px-1.5 py-0.5 rounded bg-slate-900 border border-slate-800">3</code>, and its length is <code className="font-mono text-amber-300 text-xs px-1.5 py-0.5 rounded bg-slate-900 border border-slate-800">4</code>.
        </p>
        <p key="p-14-214" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <strong className="text-white font-semibold">Complexity:</strong>
        </p>
        <ul key="ul-14-218" className="my-3 space-y-1.5 pl-2">
          <li key="li-14-0" className="flex items-start gap-2 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0"></span>
            <span>Time: <code className="font-mono text-cyan-300 font-semibold px-1 py-0.5 rounded bg-slate-900 border border-slate-800">O(n)</code> expected.</span>
          </li>
          <li key="li-14-1" className="flex items-start gap-2 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0"></span>
            <span>Auxiliary space: <code className="font-mono text-cyan-300 font-semibold px-1 py-0.5 rounded bg-slate-900 border border-slate-800">O(n)</code>.</span>
          </li>
        </ul>
        <p key="p-14-219" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <strong className="text-white font-semibold">Important distinction:</strong> When array elements are nonnegative, a sliding window may solve some longest or shortest sum problems. For arrays containing negatives, prefix sums with a HashMap are often more appropriate.
        </p>
      </div>
    )
  },
  {
    id: 15,
    title: "15. Pair Sum and Triplet Sum Problems",
    category: "Two Pointers",
    content: (
      <div className="space-y-4">
        <p key="p-15-2" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Pair sum and triplet sum are important problems that frequently use sorting and two pointers.
        </p>
        <h3 key="h3-15-4" className="text-lg md:text-xl font-bold text-emerald-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
          15.1 Pair Sum
        </h3>
        <p key="p-15-6" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <strong className="text-white font-semibold">Problem:</strong> Find two elements whose sum equals a target.
        </p>
        <p key="p-15-8" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          There are two main approaches.
        </p>
        <h4 key="h4-15-10" className="text-base font-semibold text-white mt-6 mb-2 flex items-center gap-2">
          <span className="text-emerald-500 font-mono">▸</span>
          Approach 1: HashMap
        </h4>
        <p key="p-15-12" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          For each element, calculate:
        </p>
        <div key="eq-15-15" className="my-3 p-3 rounded-lg bg-slate-950 border border-slate-800 font-mono text-xs text-cyan-300 text-center overflow-x-auto">
          {"needed=target-current"}
        </div>
        <p key="p-15-16" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Check whether the required value has already been seen.
        </p>
        <div key="code-15-47" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-emerald-500/30 border border-emerald-500/50"></span>Code Example</span>
            <span className="text-[10px] text-slate-400 font-sans">Java / DSA</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`import java.util.HashMap;
import java.util.Map;

public class TwoSumHashMap {

    public static int[] twoSum(int[] nums, int target) {

        Map<Integer, Integer> map = new HashMap<>();

        for (int i = 0; i < nums.length; i++) {

            int needed = target - nums[i];

            if (map.containsKey(needed)) {

                return new int[] {
                    map.get(needed),
                    i
                };
            }

            map.put(nums[i], i);
        }

        return new int[] {-1, -1};
    }
}`}</code>
          </pre>
        </div>
        <p key="p-15-48" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <strong className="text-white font-semibold">Complexity:</strong>
        </p>
        <ul key="ul-15-52" className="my-3 space-y-1.5 pl-2">
          <li key="li-15-0" className="flex items-start gap-2 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0"></span>
            <span>Time: <code className="font-mono text-cyan-300 font-semibold px-1 py-0.5 rounded bg-slate-900 border border-slate-800">O(n)</code> expected.</span>
          </li>
          <li key="li-15-1" className="flex items-start gap-2 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0"></span>
            <span>Auxiliary space: <code className="font-mono text-cyan-300 font-semibold px-1 py-0.5 rounded bg-slate-900 border border-slate-800">O(n)</code>.</span>
          </li>
        </ul>
        <p key="p-15-53" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          This approach works without sorting and can return original indices.
        </p>
        <h4 key="h4-15-55" className="text-base font-semibold text-white mt-6 mb-2 flex items-center gap-2">
          <span className="text-emerald-500 font-mono">▸</span>
          Approach 2: Sorting + Two Pointers
        </h4>
        <p key="p-15-57" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Sort the array, set pointers at both ends, and adjust them based on the sum.
        </p>
        <ul key="ul-15-61" className="my-3 space-y-1.5 pl-2">
          <li key="li-15-0" className="flex items-start gap-2 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0"></span>
            <span>Time: <code className="font-mono text-cyan-300 font-semibold px-1 py-0.5 rounded bg-slate-900 border border-slate-800">O(n\log n)</code> including sorting.</span>
          </li>
          <li key="li-15-1" className="flex items-start gap-2 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0"></span>
            <span>Auxiliary space: Depends on the sorting implementation and whether the original array is modified.</span>
          </li>
        </ul>
        <p key="p-15-62" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          This is convenient when the problem is focused on finding values rather than preserving original indices.
        </p>
        <h3 key="h3-15-64" className="text-lg md:text-xl font-bold text-emerald-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
          15.2 Three Sum
        </h3>
        <p key="p-15-66" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <strong className="text-white font-semibold">Problem:</strong> Find all unique triplets whose sum equals zero.
        </p>
        <p key="p-15-68" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Input:
        </p>
        <div key="code-15-73" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-emerald-500/30 border border-emerald-500/50"></span>Code Example</span>
            <span className="text-[10px] text-slate-400 font-sans">Java / DSA</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`[-1, 0, 1, 2, -1, -4]`}</code>
          </pre>
        </div>
        <p key="p-15-74" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Expected answer:
        </p>
        <div key="code-15-80" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-emerald-500/30 border border-emerald-500/50"></span>Code Example</span>
            <span className="text-[10px] text-slate-400 font-sans">Java / DSA</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`[-1, -1, 2]
[-1, 0, 1]`}</code>
          </pre>
        </div>
        <h4 key="h4-15-81" className="text-base font-semibold text-white mt-6 mb-2 flex items-center gap-2">
          <span className="text-emerald-500 font-mono">▸</span>
          Brute-force approach
        </h4>
        <p key="p-15-83" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Use three nested loops.
        </p>
        <p key="p-15-85" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <strong className="text-white font-semibold">Time complexity:</strong> <code className="font-mono text-cyan-300 font-semibold px-1 py-0.5 rounded bg-slate-900 border border-slate-800">O(n^3)</code>.
        </p>
        <h4 key="h4-15-87" className="text-base font-semibold text-white mt-6 mb-2 flex items-center gap-2">
          <span className="text-emerald-500 font-mono">▸</span>
          Optimized approach
        </h4>
        <ol key="ol-15-94" className="my-3 space-y-2 pl-2">
          <li key="oli-15-0" className="flex items-start gap-2.5 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-5 h-5 rounded-full bg-slate-800 text-emerald-400 font-mono text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5 border border-slate-700">
              1
            </span>
            <span>Sort the array.</span>
          </li>
          <li key="oli-15-1" className="flex items-start gap-2.5 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-5 h-5 rounded-full bg-slate-800 text-emerald-400 font-mono text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5 border border-slate-700">
              2
            </span>
            <span>Fix one element at index <code className="font-mono text-amber-300 text-xs px-1.5 py-0.5 rounded bg-slate-900 border border-slate-800">i</code>.</span>
          </li>
          <li key="oli-15-2" className="flex items-start gap-2.5 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-5 h-5 rounded-full bg-slate-800 text-emerald-400 font-mono text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5 border border-slate-700">
              3
            </span>
            <span>Use two pointers for the remaining array.</span>
          </li>
          <li key="oli-15-3" className="flex items-start gap-2.5 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-5 h-5 rounded-full bg-slate-800 text-emerald-400 font-mono text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5 border border-slate-700">
              4
            </span>
            <span>Move pointers based on the sum.</span>
          </li>
          <li key="oli-15-4" className="flex items-start gap-2.5 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-5 h-5 rounded-full bg-slate-800 text-emerald-400 font-mono text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5 border border-slate-700">
              5
            </span>
            <span>Skip duplicates to avoid repeated triplets.</span>
          </li>
        </ol>
        <h4 key="h4-15-95" className="text-base font-semibold text-white mt-6 mb-2 flex items-center gap-2">
          <span className="text-emerald-500 font-mono">▸</span>
          Java implementation
        </h4>
        <div key="code-15-168" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-emerald-500/30 border border-emerald-500/50"></span>Code Example</span>
            <span className="text-[10px] text-slate-400 font-sans">Java / DSA</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class ThreeSum {

    public static List<List<Integer>> threeSum(int[] nums) {

        Arrays.sort(nums);

        List<List<Integer>> result = new ArrayList<>();

        for (int i = 0; i < nums.length - 2; i++) {

            if (i > 0 && nums[i] == nums[i - 1]) {
                continue;
            }

            int left = i + 1;
            int right = nums.length - 1;

            while (left < right) {

                long sum = (long) nums[i]
                         + nums[left]
                         + nums[right];

                if (sum == 0) {

                    result.add(Arrays.asList(
                        nums[i],
                        nums[left],
                        nums[right]
                    ));

                    left++;
                    right--;

                    while (left < right
                            && nums[left] == nums[left - 1]) {
                        left++;
                    }

                    while (left < right
                            && nums[right] == nums[right + 1]) {
                        right--;
                    }
                }

                else if (sum < 0) {
                    left++;
                }

                else {
                    right--;
                }
            }
        }

        return result;
    }

    public static void main(String[] args) {

        int[] nums = {-1, 0, 1, 2, -1, -4};

        System.out.println(threeSum(nums));
    }
}`}</code>
          </pre>
        </div>
        <p key="p-15-169" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <strong className="text-white font-semibold">Output:</strong>
        </p>
        <div key="code-15-174" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-emerald-500/30 border border-emerald-500/50"></span>Code Example</span>
            <span className="text-[10px] text-slate-400 font-sans">Java / DSA</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`[[-1, -1, 2], [-1, 0, 1]]`}</code>
          </pre>
        </div>
        <p key="p-15-175" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <strong className="text-white font-semibold">Complexity:</strong>
        </p>
        <ul key="ul-15-181" className="my-3 space-y-1.5 pl-2">
          <li key="li-15-0" className="flex items-start gap-2 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0"></span>
            <span>Sorting: <code className="font-mono text-cyan-300 font-semibold px-1 py-0.5 rounded bg-slate-900 border border-slate-800">O(n\log n)</code>.</span>
          </li>
          <li key="li-15-1" className="flex items-start gap-2 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0"></span>
            <span>Main algorithm: <code className="font-mono text-cyan-300 font-semibold px-1 py-0.5 rounded bg-slate-900 border border-slate-800">O(n^2)</code>.</span>
          </li>
          <li key="li-15-2" className="flex items-start gap-2 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0"></span>
            <span>Total: <code className="font-mono text-cyan-300 font-semibold px-1 py-0.5 rounded bg-slate-900 border border-slate-800">O(n^2)</code>.</span>
          </li>
          <li key="li-15-3" className="flex items-start gap-2 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0"></span>
            <span>Additional working space: <code className="font-mono text-cyan-300 font-semibold px-1 py-0.5 rounded bg-slate-900 border border-slate-800">O(1)</code> apart from sorting, excluding the output list.</span>
          </li>
        </ul>
        <h4 key="h4-15-182" className="text-base font-semibold text-white mt-6 mb-2 flex items-center gap-2">
          <span className="text-emerald-500 font-mono">▸</span>
          Why skip duplicates?
        </h4>
        <p key="p-15-184" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Without duplicate handling, an input containing multiple copies of the same value could produce the same triplet repeatedly.
        </p>
        <p key="p-15-186" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          We skip duplicates at three levels:
        </p>
        <ul key="ul-15-191" className="my-3 space-y-1.5 pl-2">
          <li key="li-15-0" className="flex items-start gap-2 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0"></span>
            <span>The fixed element.</span>
          </li>
          <li key="li-15-1" className="flex items-start gap-2 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0"></span>
            <span>The left pointer value.</span>
          </li>
          <li key="li-15-2" className="flex items-start gap-2 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0"></span>
            <span>The right pointer value.</span>
          </li>
        </ul>
        <h4 key="h4-15-192" className="text-base font-semibold text-white mt-6 mb-2 flex items-center gap-2">
          <span className="text-emerald-500 font-mono">▸</span>
          Other important variations
        </h4>
        <p key="p-15-194" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Once you understand Three Sum, you can learn:
        </p>
        <ul key="ul-15-202" className="my-3 space-y-1.5 pl-2">
          <li key="li-15-0" className="flex items-start gap-2 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0"></span>
            <span>Three Sum Closest.</span>
          </li>
          <li key="li-15-1" className="flex items-start gap-2 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0"></span>
            <span>Four Sum.</span>
          </li>
          <li key="li-15-2" className="flex items-start gap-2 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0"></span>
            <span>Pair Sum in a Sorted Array.</span>
          </li>
          <li key="li-15-3" className="flex items-start gap-2 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0"></span>
            <span>Count Pairs with a Given Sum.</span>
          </li>
          <li key="li-15-4" className="flex items-start gap-2 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0"></span>
            <span>Count Triplets with a Smaller Sum.</span>
          </li>
          <li key="li-15-5" className="flex items-start gap-2 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0"></span>
            <span>K-Sum problems.</span>
          </li>
        </ul>
        <p key="p-15-203" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          The general idea is to reduce the number of free variables by fixing one or more elements and using the remaining structure to search efficiently.
        </p>
      </div>
    )
  },
  {
    id: 16,
    title: "16. Kadane's Algorithm",
    category: "Dynamic Programming & Subarrays",
    content: (
      <div className="space-y-4">
        <p key="p-16-2" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Kadane&apos;s algorithm finds the maximum sum of a contiguous subarray.
        </p>
        <p key="p-16-4" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          It is one of the most important array algorithms in DSA.
        </p>
        <p key="p-16-6" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <strong className="text-white font-semibold">Problem:</strong>
        </p>
        <p key="p-16-8" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Given an integer array, find the maximum possible sum of a nonempty contiguous subarray.
        </p>
        <p key="p-16-10" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Example:
        </p>
        <div key="code-16-15" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-emerald-500/30 border border-emerald-500/50"></span>Code Example</span>
            <span className="text-[10px] text-slate-400 font-sans">Java / DSA</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`[-2, 1, -3, 4, -1, 2, 1, -5, 4]`}</code>
          </pre>
        </div>
        <p key="p-16-16" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Expected answer:
        </p>
        <div key="code-16-21" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-emerald-500/30 border border-emerald-500/50"></span>Code Example</span>
            <span className="text-[10px] text-slate-400 font-sans">Java / DSA</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`6`}</code>
          </pre>
        </div>
        <p key="p-16-22" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          The maximum-sum subarray is:
        </p>
        <div key="code-16-27" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-emerald-500/30 border border-emerald-500/50"></span>Code Example</span>
            <span className="text-[10px] text-slate-400 font-sans">Java / DSA</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`[4, -1, 2, 1]`}</code>
          </pre>
        </div>
        <p key="p-16-28" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Its sum is:
        </p>
        <div key="eq-16-31" className="my-3 p-3 rounded-lg bg-slate-950 border border-slate-800 font-mono text-xs text-cyan-300 text-center overflow-x-auto">
          {"4-1+2+1=6"}
        </div>
        <h3 key="h3-16-32" className="text-lg md:text-xl font-bold text-emerald-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
          16.1 Brute-Force Approach
        </h3>
        <p key="p-16-34" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Generate every subarray and calculate its sum.
        </p>
        <p key="p-16-36" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          There are <code className="font-mono text-cyan-300 font-semibold px-1 py-0.5 rounded bg-slate-900 border border-slate-800">O(n^2)</code> possible subarrays, but calculating each independently may take another <code className="font-mono text-cyan-300 font-semibold px-1 py-0.5 rounded bg-slate-900 border border-slate-800">O(n)</code>.
        </p>
        <p key="p-16-38" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <strong className="text-white font-semibold">Time complexity:</strong> <code className="font-mono text-cyan-300 font-semibold px-1 py-0.5 rounded bg-slate-900 border border-slate-800">O(n^3)</code>.
        </p>
        <p key="p-16-40" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Using a running sum for each starting index can improve this to <code className="font-mono text-cyan-300 font-semibold px-1 py-0.5 rounded bg-slate-900 border border-slate-800">O(n^2)</code>.
        </p>
        <p key="p-16-42" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          However, Kadane&apos;s algorithm solves it in <code className="font-mono text-cyan-300 font-semibold px-1 py-0.5 rounded bg-slate-900 border border-slate-800">O(n)</code>.
        </p>
        <h3 key="h3-16-44" className="text-lg md:text-xl font-bold text-emerald-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
          16.2 Core Idea
        </h3>
        <p key="p-16-46" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          At every position, ask:
        </p>
        <p key="p-16-48" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Should we:
        </p>
        <ol key="ol-16-52" className="my-3 space-y-2 pl-2">
          <li key="oli-16-0" className="flex items-start gap-2.5 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-5 h-5 rounded-full bg-slate-800 text-emerald-400 font-mono text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5 border border-slate-700">
              1
            </span>
            <span>Extend the previous subarray?</span>
          </li>
          <li key="oli-16-1" className="flex items-start gap-2.5 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-5 h-5 rounded-full bg-slate-800 text-emerald-400 font-mono text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5 border border-slate-700">
              2
            </span>
            <span>Start a new subarray from the current element?</span>
          </li>
        </ol>
        <p key="p-16-53" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          The recurrence is:
        </p>
        <div key="eq-16-56" className="my-3 p-3 rounded-lg bg-slate-950 border border-slate-800 font-mono text-xs text-cyan-300 text-center overflow-x-auto">
          {"currentSum= \\max(arr[i], currentSum+arr[i])"}
        </div>
        <p key="p-16-57" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Then update the global maximum:
        </p>
        <div key="eq-16-60" className="my-3 p-3 rounded-lg bg-slate-950 border border-slate-800 font-mono text-xs text-cyan-300 text-center overflow-x-auto">
          {"maxSum=\\max(maxSum,currentSum)"}
        </div>
        <p key="p-16-61" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          In plain language:
        </p>
        <ul key="ul-16-65" className="my-3 space-y-1.5 pl-2">
          <li key="li-16-0" className="flex items-start gap-2 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0"></span>
            <span>If the previous running sum makes the current subarray better, continue it.</span>
          </li>
          <li key="li-16-1" className="flex items-start gap-2 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0"></span>
            <span>Otherwise, discard the previous subarray and start again.</span>
          </li>
        </ul>
        <h3 key="h3-16-66" className="text-lg md:text-xl font-bold text-emerald-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
          16.3 Step-by-Step Example
        </h3>
        <p key="p-16-68" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Array:
        </p>
        <div key="code-16-73" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-emerald-500/30 border border-emerald-500/50"></span>Code Example</span>
            <span className="text-[10px] text-slate-400 font-sans">Java / DSA</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`[-2, 1, -3, 4, -1, 2, 1, -5, 4]`}</code>
          </pre>
        </div>
        <div key="table-16-85" className="my-5 overflow-x-auto rounded-xl border border-slate-800 shadow-md">
          <table className="w-full text-xs text-left border-collapse">
            <thead>
              <tr className="bg-slate-900 border-b border-slate-800 text-emerald-400 font-mono">
                <th key="th-16-0" className="p-3 font-semibold">Element</th>
                <th key="th-16-1" className="p-3 font-semibold">Best sum ending here</th>
                <th key="th-16-2" className="p-3 font-semibold">Overall maximum</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-850 bg-slate-950/60 font-sans">
              <tr key="tr-16-0" className="hover:bg-slate-900/40 transition-colors">
                <td key="td-16-0-0" className="p-3 text-slate-300 font-mono text-slate-200">-2</td>
                <td key="td-16-0-1" className="p-3 text-slate-300 ">-2</td>
                <td key="td-16-0-2" className="p-3 text-slate-300 ">-2</td>
              </tr>
              <tr key="tr-16-1" className="hover:bg-slate-900/40 transition-colors">
                <td key="td-16-1-0" className="p-3 text-slate-300 font-mono text-slate-200">1</td>
                <td key="td-16-1-1" className="p-3 text-slate-300 ">1</td>
                <td key="td-16-1-2" className="p-3 text-slate-300 ">1</td>
              </tr>
              <tr key="tr-16-2" className="hover:bg-slate-900/40 transition-colors">
                <td key="td-16-2-0" className="p-3 text-slate-300 font-mono text-slate-200">-3</td>
                <td key="td-16-2-1" className="p-3 text-slate-300 ">-2</td>
                <td key="td-16-2-2" className="p-3 text-slate-300 ">1</td>
              </tr>
              <tr key="tr-16-3" className="hover:bg-slate-900/40 transition-colors">
                <td key="td-16-3-0" className="p-3 text-slate-300 font-mono text-slate-200">4</td>
                <td key="td-16-3-1" className="p-3 text-slate-300 ">4</td>
                <td key="td-16-3-2" className="p-3 text-slate-300 ">4</td>
              </tr>
              <tr key="tr-16-4" className="hover:bg-slate-900/40 transition-colors">
                <td key="td-16-4-0" className="p-3 text-slate-300 font-mono text-slate-200">-1</td>
                <td key="td-16-4-1" className="p-3 text-slate-300 ">3</td>
                <td key="td-16-4-2" className="p-3 text-slate-300 ">4</td>
              </tr>
              <tr key="tr-16-5" className="hover:bg-slate-900/40 transition-colors">
                <td key="td-16-5-0" className="p-3 text-slate-300 font-mono text-slate-200">2</td>
                <td key="td-16-5-1" className="p-3 text-slate-300 ">5</td>
                <td key="td-16-5-2" className="p-3 text-slate-300 ">5</td>
              </tr>
              <tr key="tr-16-6" className="hover:bg-slate-900/40 transition-colors">
                <td key="td-16-6-0" className="p-3 text-slate-300 font-mono text-slate-200">1</td>
                <td key="td-16-6-1" className="p-3 text-slate-300 ">6</td>
                <td key="td-16-6-2" className="p-3 text-slate-300 ">6</td>
              </tr>
              <tr key="tr-16-7" className="hover:bg-slate-900/40 transition-colors">
                <td key="td-16-7-0" className="p-3 text-slate-300 font-mono text-slate-200">-5</td>
                <td key="td-16-7-1" className="p-3 text-slate-300 ">1</td>
                <td key="td-16-7-2" className="p-3 text-slate-300 ">6</td>
              </tr>
              <tr key="tr-16-8" className="hover:bg-slate-900/40 transition-colors">
                <td key="td-16-8-0" className="p-3 text-slate-300 font-mono text-slate-200">4</td>
                <td key="td-16-8-1" className="p-3 text-slate-300 ">5</td>
                <td key="td-16-8-2" className="p-3 text-slate-300 ">6</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p key="p-16-86" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Final result:
        </p>
        <div key="code-16-91" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-emerald-500/30 border border-emerald-500/50"></span>Code Example</span>
            <span className="text-[10px] text-slate-400 font-sans">Java / DSA</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`6`}</code>
          </pre>
        </div>
        <h3 key="h3-16-92" className="text-lg md:text-xl font-bold text-emerald-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
          16.4 Java implementation
        </h3>
        <div key="code-16-129" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-emerald-500/30 border border-emerald-500/50"></span>Code Example</span>
            <span className="text-[10px] text-slate-400 font-sans">Java / DSA</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`public class KadaneAlgorithm {

    public static long maxSubarraySum(int[] arr) {

        if (arr == null || arr.length == 0) {
            throw new IllegalArgumentException("Array cannot be empty");
        }

        long currentSum = arr[0];
        long maxSum = arr[0];

        for (int i = 1; i < arr.length; i++) {

            currentSum = Math.max(
                arr[i],
                currentSum + arr[i]
            );

            maxSum = Math.max(maxSum, currentSum);
        }

        return maxSum;
    }

    public static void main(String[] args) {

        int[] arr = {
            -2, 1, -3, 4, -1, 2, 1, -5, 4
        };

        System.out.println(maxSubarraySum(arr));
    }
}`}</code>
          </pre>
        </div>
        <p key="p-16-130" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <strong className="text-white font-semibold">Output:</strong>
        </p>
        <div key="code-16-135" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-emerald-500/30 border border-emerald-500/50"></span>Code Example</span>
            <span className="text-[10px] text-slate-400 font-sans">Java / DSA</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`6`}</code>
          </pre>
        </div>
        <p key="p-16-136" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <strong className="text-white font-semibold">Complexity:</strong>
        </p>
        <ul key="ul-16-140" className="my-3 space-y-1.5 pl-2">
          <li key="li-16-0" className="flex items-start gap-2 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0"></span>
            <span>Time: <code className="font-mono text-cyan-300 font-semibold px-1 py-0.5 rounded bg-slate-900 border border-slate-800">O(n)</code>.</span>
          </li>
          <li key="li-16-1" className="flex items-start gap-2 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0"></span>
            <span>Auxiliary space: <code className="font-mono text-cyan-300 font-semibold px-1 py-0.5 rounded bg-slate-900 border border-slate-800">O(1)</code>.</span>
          </li>
        </ul>
        <h4 key="h4-16-141" className="text-base font-semibold text-white mt-6 mb-2 flex items-center gap-2">
          <span className="text-emerald-500 font-mono">▸</span>
          Why initialize with the first element instead of zero?
        </h4>
        <p key="p-16-143" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Consider:
        </p>
        <div key="code-16-148" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-emerald-500/30 border border-emerald-500/50"></span>Code Example</span>
            <span className="text-[10px] text-slate-400 font-sans">Java / DSA</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`[-5, -2, -8, -1]`}</code>
          </pre>
        </div>
        <p key="p-16-149" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          The correct maximum nonempty subarray sum is:
        </p>
        <div key="code-16-154" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-emerald-500/30 border border-emerald-500/50"></span>Code Example</span>
            <span className="text-[10px] text-slate-400 font-sans">Java / DSA</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`-1`}</code>
          </pre>
        </div>
        <p key="p-16-155" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          If we initialize the maximum to zero, we incorrectly report zero by effectively choosing an empty subarray.
        </p>
        <p key="p-16-157" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Initializing with the first element handles all-negative arrays correctly.
        </p>
        <h3 key="h3-16-159" className="text-lg md:text-xl font-bold text-emerald-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
          16.5 Returning the Actual Maximum-Sum Subarray
        </h3>
        <p key="p-16-161" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Sometimes an interviewer asks for the subarray itself, not just its sum.
        </p>
        <p key="p-16-163" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          We can track the starting and ending indices.
        </p>
        <div key="code-16-221" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-emerald-500/30 border border-emerald-500/50"></span>Code Example</span>
            <span className="text-[10px] text-slate-400 font-sans">Java / DSA</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`public class KadaneWithIndices {

    public static void findMaxSubarray(int[] arr) {

        if (arr == null || arr.length == 0) {
            throw new IllegalArgumentException("Array cannot be empty");
        }

        long currentSum = arr[0];
        long maxSum = arr[0];

        int start = 0;
        int bestStart = 0;
        int bestEnd = 0;

        for (int i = 1; i < arr.length; i++) {

            if (arr[i] > currentSum + arr[i]) {

                currentSum = arr[i];
                start = i;
            }

            else {
                currentSum += arr[i];
            }

            if (currentSum > maxSum) {

                maxSum = currentSum;

                bestStart = start;
                bestEnd = i;
            }
        }

        System.out.println("Maximum Sum: " + maxSum);

        System.out.print("Subarray: ");

        for (int i = bestStart; i <= bestEnd; i++) {
            System.out.print(arr[i] + " ");
        }
    }

    public static void main(String[] args) {

        int[] arr = {
            -2, 1, -3, 4, -1, 2, 1, -5, 4
        };

        findMaxSubarray(arr);
    }
}`}</code>
          </pre>
        </div>
        <p key="p-16-222" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <strong className="text-white font-semibold">Output:</strong>
        </p>
        <div key="code-16-228" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-emerald-500/30 border border-emerald-500/50"></span>Code Example</span>
            <span className="text-[10px] text-slate-400 font-sans">Java / DSA</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`Maximum Sum: 6
Subarray: 4 -1 2 1`}</code>
          </pre>
        </div>
        <h3 key="h3-16-229" className="text-lg md:text-xl font-bold text-emerald-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
          16.6 Kadane&apos;s Algorithm and Dynamic Programming
        </h3>
        <p key="p-16-231" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Kadane&apos;s algorithm can be understood as a space-optimized dynamic programming solution.
        </p>
        <p key="p-16-233" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Define:
        </p>
        <div key="eq-16-236" className="my-3 p-3 rounded-lg bg-slate-950 border border-slate-800 font-mono text-xs text-cyan-300 text-center overflow-x-auto">
          {"dp[i]=\\text{maximum subarray sum ending exactly at index } i"}
        </div>
        <p key="p-16-237" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Then:
        </p>
        <div key="eq-16-240" className="my-3 p-3 rounded-lg bg-slate-950 border border-slate-800 font-mono text-xs text-cyan-300 text-center overflow-x-auto">
          {"dp[i]=\\max(arr[i],dp[i-1]+arr[i])"}
        </div>
        <p key="p-16-241" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          We only need the previous DP state to calculate the next one. Therefore, we do not need to store the entire DP array.
        </p>
        <p key="p-16-243" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          This is why Kadane&apos;s algorithm uses constant auxiliary space.
        </p>
      </div>
    )
  },
  {
    id: 17,
    title: "17. Subarray Optimization Techniques",
    category: "Architectural Decision Matrix",
    content: (
      <div className="space-y-4">
        <p key="p-17-2" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          The most important skill in this module is knowing which pattern to use.
        </p>
        <p key="p-17-4" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Several problems look almost identical but require different algorithms.
        </p>
        <h3 key="h3-17-6" className="text-lg md:text-xl font-bold text-emerald-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
          17.1 Technique Selection
        </h3>
        <div key="table-17-26" className="my-5 overflow-x-auto rounded-xl border border-slate-800 shadow-md">
          <table className="w-full text-xs text-left border-collapse">
            <thead>
              <tr className="bg-slate-900 border-b border-slate-800 text-emerald-400 font-mono">
                <th key="th-17-0" className="p-3 font-semibold">Requirement</th>
                <th key="th-17-1" className="p-3 font-semibold">Recommended technique</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-850 bg-slate-950/60 font-sans">
              <tr key="tr-17-0" className="hover:bg-slate-900/40 transition-colors">
                <td key="td-17-0-0" className="p-3 text-slate-300 font-mono text-slate-200">Maximum sum of exactly K consecutive elements</td>
                <td key="td-17-0-1" className="p-3 text-slate-300 ">Fixed-size sliding window</td>
              </tr>
              <tr key="tr-17-1" className="hover:bg-slate-900/40 transition-colors">
                <td key="td-17-1-0" className="p-3 text-slate-300 font-mono text-slate-200">Minimum sum of exactly K consecutive elements</td>
                <td key="td-17-1-1" className="p-3 text-slate-300 ">Fixed-size sliding window</td>
              </tr>
              <tr key="tr-17-2" className="hover:bg-slate-900/40 transition-colors">
                <td key="td-17-2-0" className="p-3 text-slate-300 font-mono text-slate-200">Longest substring without repetition</td>
                <td key="td-17-2-1" className="p-3 text-slate-300 ">Variable-size sliding window + HashMap</td>
              </tr>
              <tr key="tr-17-3" className="hover:bg-slate-900/40 transition-colors">
                <td key="td-17-3-0" className="p-3 text-slate-300 font-mono text-slate-200">Smallest substring containing required characters</td>
                <td key="td-17-3-1" className="p-3 text-slate-300 ">Variable-size sliding window + frequency map</td>
              </tr>
              <tr key="tr-17-4" className="hover:bg-slate-900/40 transition-colors">
                <td key="td-17-4-0" className="p-3 text-slate-300 font-mono text-slate-200">Pair sum in a sorted array</td>
                <td key="td-17-4-1" className="p-3 text-slate-300 ">Opposite-direction two pointers</td>
              </tr>
              <tr key="tr-17-5" className="hover:bg-slate-900/40 transition-colors">
                <td key="td-17-5-0" className="p-3 text-slate-300 font-mono text-slate-200">Triplets with a target sum</td>
                <td key="td-17-5-1" className="p-3 text-slate-300 ">Sorting + two pointers</td>
              </tr>
              <tr key="tr-17-6" className="hover:bg-slate-900/40 transition-colors">
                <td key="td-17-6-0" className="p-3 text-slate-300 font-mono text-slate-200">Remove duplicates in-place</td>
                <td key="td-17-6-1" className="p-3 text-slate-300 ">Same-direction two pointers</td>
              </tr>
              <tr key="tr-17-7" className="hover:bg-slate-900/40 transition-colors">
                <td key="td-17-7-0" className="p-3 text-slate-300 font-mono text-slate-200">Find the middle of a linked list</td>
                <td key="td-17-7-1" className="p-3 text-slate-300 ">Fast and slow pointers</td>
              </tr>
              <tr key="tr-17-8" className="hover:bg-slate-900/40 transition-colors">
                <td key="td-17-8-0" className="p-3 text-slate-300 font-mono text-slate-200">Detect a linked-list cycle</td>
                <td key="td-17-8-1" className="p-3 text-slate-300 ">Floyd&apos;s cycle detection</td>
              </tr>
              <tr key="tr-17-9" className="hover:bg-slate-900/40 transition-colors">
                <td key="td-17-9-0" className="p-3 text-slate-300 font-mono text-slate-200">Many static range-sum queries</td>
                <td key="td-17-9-1" className="p-3 text-slate-300 ">Prefix sums</td>
              </tr>
              <tr key="tr-17-10" className="hover:bg-slate-900/40 transition-colors">
                <td key="td-17-10-0" className="p-3 text-slate-300 font-mono text-slate-200">Many static matrix rectangle queries</td>
                <td key="td-17-10-1" className="p-3 text-slate-300 ">2D prefix sums</td>
              </tr>
              <tr key="tr-17-11" className="hover:bg-slate-900/40 transition-colors">
                <td key="td-17-11-0" className="p-3 text-slate-300 font-mono text-slate-200">Count subarrays with sum K</td>
                <td key="td-17-11-1" className="p-3 text-slate-300 ">Prefix sums + HashMap</td>
              </tr>
              <tr key="tr-17-12" className="hover:bg-slate-900/40 transition-colors">
                <td key="td-17-12-0" className="p-3 text-slate-300 font-mono text-slate-200">Longest subarray with sum K</td>
                <td key="td-17-12-1" className="p-3 text-slate-300 ">Prefix sums + earliest-index HashMap</td>
              </tr>
              <tr key="tr-17-13" className="hover:bg-slate-900/40 transition-colors">
                <td key="td-17-13-0" className="p-3 text-slate-300 font-mono text-slate-200">Many range additions</td>
                <td key="td-17-13-1" className="p-3 text-slate-300 ">Difference arrays</td>
              </tr>
              <tr key="tr-17-14" className="hover:bg-slate-900/40 transition-colors">
                <td key="td-17-14-0" className="p-3 text-slate-300 font-mono text-slate-200">Range XOR queries</td>
                <td key="td-17-14-1" className="p-3 text-slate-300 ">Prefix XOR</td>
              </tr>
              <tr key="tr-17-15" className="hover:bg-slate-900/40 transition-colors">
                <td key="td-17-15-0" className="p-3 text-slate-300 font-mono text-slate-200">Maximum-sum contiguous subarray</td>
                <td key="td-17-15-1" className="p-3 text-slate-300 ">Kadane&apos;s algorithm</td>
              </tr>
            </tbody>
          </table>
        </div>
        <h3 key="h3-17-27" className="text-lg md:text-xl font-bold text-emerald-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
          17.2 When Sliding Window Is Better Than Prefix Sum
        </h3>
        <p key="p-17-29" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Consider the problem:
        </p>
        <p key="p-17-31" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <strong className="text-white font-semibold">Find the maximum sum of any K consecutive elements.</strong>
        </p>
        <p key="p-17-33" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Both prefix sums and sliding windows can solve it.
        </p>
        <p key="p-17-35" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          However:
        </p>
        <ul key="ul-17-40" className="my-3 space-y-1.5 pl-2">
          <li key="li-17-0" className="flex items-start gap-2 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0"></span>
            <span>Prefix sums require an <code className="font-mono text-cyan-300 font-semibold px-1 py-0.5 rounded bg-slate-900 border border-slate-800">O(n)</code> preprocessing array.</span>
          </li>
          <li key="li-17-1" className="flex items-start gap-2 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0"></span>
            <span>A sliding window only needs the current sum and maximum sum.</span>
          </li>
          <li key="li-17-2" className="flex items-start gap-2 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0"></span>
            <span>Sliding window provides <code className="font-mono text-cyan-300 font-semibold px-1 py-0.5 rounded bg-slate-900 border border-slate-800">O(1)</code> auxiliary space.</span>
          </li>
        </ul>
        <p key="p-17-41" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Now consider:
        </p>
        <p key="p-17-43" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <strong className="text-white font-semibold">Answer 100,000 arbitrary range-sum queries on a static array.</strong>
        </p>
        <p key="p-17-45" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Prefix sums are better because each query takes <code className="font-mono text-cyan-300 font-semibold px-1 py-0.5 rounded bg-slate-900 border border-slate-800">O(1)</code>.
        </p>
        <p key="p-17-47" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          The lesson is that you should select the technique according to the operation being repeated.
        </p>
        <h3 key="h3-17-49" className="text-lg md:text-xl font-bold text-emerald-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
          17.3 When a HashMap Is Needed
        </h3>
        <p key="p-17-51" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          A HashMap is especially useful when you need to remember information about previously visited elements.
        </p>
        <p key="p-17-53" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Examples:
        </p>
        <ul key="ul-17-59" className="my-3 space-y-1.5 pl-2">
          <li key="li-17-0" className="flex items-start gap-2 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0"></span>
            <span>Last occurrence of a character.</span>
          </li>
          <li key="li-17-1" className="flex items-start gap-2 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0"></span>
            <span>Frequency of a prefix sum.</span>
          </li>
          <li key="li-17-2" className="flex items-start gap-2 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0"></span>
            <span>First index of a prefix sum.</span>
          </li>
          <li key="li-17-3" className="flex items-start gap-2 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0"></span>
            <span>Frequency of elements inside a window.</span>
          </li>
        </ul>
        <p key="p-17-60" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          It often works together with two pointers, sliding windows, or prefix sums.
        </p>
        <h3 key="h3-17-62" className="text-lg md:text-xl font-bold text-emerald-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
          17.4 Monotonic Deque: An Advanced Window Optimization
        </h3>
        <p key="p-17-64" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Sometimes a sliding-window problem needs the maximum or minimum element inside each window.
        </p>
        <p key="p-17-66" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          A normal window sum is easy to update using addition and subtraction. But the maximum element cannot be updated that way.
        </p>
        <p key="p-17-68" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          A <strong className="text-white font-semibold">monotonic deque</strong> maintains candidate indices in increasing or decreasing order.
        </p>
        <p key="p-17-70" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          For example, to find the maximum value in every window of size K:
        </p>
        <div key="code-17-76" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-emerald-500/30 border border-emerald-500/50"></span>Code Example</span>
            <span className="text-[10px] text-slate-400 font-sans">Java / DSA</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`Array: [1, 3, -1, -3, 5, 3, 6, 7]
K = 3`}</code>
          </pre>
        </div>
        <p key="p-17-77" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Expected result:
        </p>
        <div key="code-17-82" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-emerald-500/30 border border-emerald-500/50"></span>Code Example</span>
            <span className="text-[10px] text-slate-400 font-sans">Java / DSA</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`[3, 3, 5, 5, 6, 7]`}</code>
          </pre>
        </div>
        <p key="p-17-83" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          A decreasing deque keeps the largest candidates at the front and removes smaller candidates from the back.
        </p>
        <p key="p-17-85" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          This can solve the problem in:
        </p>
        <ul key="ul-17-89" className="my-3 space-y-1.5 pl-2">
          <li key="li-17-0" className="flex items-start gap-2 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0"></span>
            <span>Time: <code className="font-mono text-cyan-300 font-semibold px-1 py-0.5 rounded bg-slate-900 border border-slate-800">O(n)</code>.</span>
          </li>
          <li key="li-17-1" className="flex items-start gap-2 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0"></span>
            <span>Auxiliary space: <code className="font-mono text-cyan-300 font-semibold px-1 py-0.5 rounded bg-slate-900 border border-slate-800">O(k)</code>.</span>
          </li>
        </ul>
        <p key="p-17-90" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          This is an important advanced extension of sliding-window thinking.
        </p>
      </div>
    )
  },
  {
    id: 18,
    title: "18. Complexity Comparison",
    category: "Complexity Analysis",
    content: (
      <div className="space-y-4">
        <p key="p-18-2" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Understanding time and space complexity helps you select the correct algorithm during interviews.
        </p>
        <div key="table-18-21" className="my-5 overflow-x-auto rounded-xl border border-slate-800 shadow-md">
          <table className="w-full text-xs text-left border-collapse">
            <thead>
              <tr className="bg-slate-900 border-b border-slate-800 text-emerald-400 font-mono">
                <th key="th-18-0" className="p-3 font-semibold">Algorithm or technique</th>
                <th key="th-18-1" className="p-3 font-semibold">Typical time</th>
                <th key="th-18-2" className="p-3 font-semibold">Auxiliary space</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-850 bg-slate-950/60 font-sans">
              <tr key="tr-18-0" className="hover:bg-slate-900/40 transition-colors">
                <td key="td-18-0-0" className="p-3 text-slate-300 font-mono text-slate-200">Brute-force pair search</td>
                <td key="td-18-0-1" className="p-3 text-slate-300 "><code className="font-mono text-cyan-300 font-semibold px-1 py-0.5 rounded bg-slate-900 border border-slate-800">O(n^2)</code></td>
                <td key="td-18-0-2" className="p-3 text-slate-300 "><code className="font-mono text-cyan-300 font-semibold px-1 py-0.5 rounded bg-slate-900 border border-slate-800">O(1)</code></td>
              </tr>
              <tr key="tr-18-1" className="hover:bg-slate-900/40 transition-colors">
                <td key="td-18-1-0" className="p-3 text-slate-300 font-mono text-slate-200">Sorted-array two pointers</td>
                <td key="td-18-1-1" className="p-3 text-slate-300 "><code className="font-mono text-cyan-300 font-semibold px-1 py-0.5 rounded bg-slate-900 border border-slate-800">O(n)</code></td>
                <td key="td-18-1-2" className="p-3 text-slate-300 "><code className="font-mono text-cyan-300 font-semibold px-1 py-0.5 rounded bg-slate-900 border border-slate-800">O(1)</code></td>
              </tr>
              <tr key="tr-18-2" className="hover:bg-slate-900/40 transition-colors">
                <td key="td-18-2-0" className="p-3 text-slate-300 font-mono text-slate-200">HashMap Two Sum</td>
                <td key="td-18-2-1" className="p-3 text-slate-300 "><code className="font-mono text-cyan-300 font-semibold px-1 py-0.5 rounded bg-slate-900 border border-slate-800">O(n)</code> expected</td>
                <td key="td-18-2-2" className="p-3 text-slate-300 "><code className="font-mono text-cyan-300 font-semibold px-1 py-0.5 rounded bg-slate-900 border border-slate-800">O(n)</code></td>
              </tr>
              <tr key="tr-18-3" className="hover:bg-slate-900/40 transition-colors">
                <td key="td-18-3-0" className="p-3 text-slate-300 font-mono text-slate-200">Three Sum</td>
                <td key="td-18-3-1" className="p-3 text-slate-300 "><code className="font-mono text-cyan-300 font-semibold px-1 py-0.5 rounded bg-slate-900 border border-slate-800">O(n^2)</code></td>
                <td key="td-18-3-2" className="p-3 text-slate-300 ">Excluding output and sorting workspace</td>
              </tr>
              <tr key="tr-18-4" className="hover:bg-slate-900/40 transition-colors">
                <td key="td-18-4-0" className="p-3 text-slate-300 font-mono text-slate-200">Palindrome with two pointers</td>
                <td key="td-18-4-1" className="p-3 text-slate-300 "><code className="font-mono text-cyan-300 font-semibold px-1 py-0.5 rounded bg-slate-900 border border-slate-800">O(n)</code></td>
                <td key="td-18-4-2" className="p-3 text-slate-300 "><code className="font-mono text-cyan-300 font-semibold px-1 py-0.5 rounded bg-slate-900 border border-slate-800">O(1)</code></td>
              </tr>
              <tr key="tr-18-5" className="hover:bg-slate-900/40 transition-colors">
                <td key="td-18-5-0" className="p-3 text-slate-300 font-mono text-slate-200">Linked-list fast and slow</td>
                <td key="td-18-5-1" className="p-3 text-slate-300 "><code className="font-mono text-cyan-300 font-semibold px-1 py-0.5 rounded bg-slate-900 border border-slate-800">O(n)</code></td>
                <td key="td-18-5-2" className="p-3 text-slate-300 "><code className="font-mono text-cyan-300 font-semibold px-1 py-0.5 rounded bg-slate-900 border border-slate-800">O(1)</code></td>
              </tr>
              <tr key="tr-18-6" className="hover:bg-slate-900/40 transition-colors">
                <td key="td-18-6-0" className="p-3 text-slate-300 font-mono text-slate-200">In-place duplicate removal</td>
                <td key="td-18-6-1" className="p-3 text-slate-300 "><code className="font-mono text-cyan-300 font-semibold px-1 py-0.5 rounded bg-slate-900 border border-slate-800">O(n)</code></td>
                <td key="td-18-6-2" className="p-3 text-slate-300 "><code className="font-mono text-cyan-300 font-semibold px-1 py-0.5 rounded bg-slate-900 border border-slate-800">O(1)</code></td>
              </tr>
              <tr key="tr-18-7" className="hover:bg-slate-900/40 transition-colors">
                <td key="td-18-7-0" className="p-3 text-slate-300 font-mono text-slate-200">Fixed-size sliding window</td>
                <td key="td-18-7-1" className="p-3 text-slate-300 "><code className="font-mono text-cyan-300 font-semibold px-1 py-0.5 rounded bg-slate-900 border border-slate-800">O(n)</code></td>
                <td key="td-18-7-2" className="p-3 text-slate-300 "><code className="font-mono text-cyan-300 font-semibold px-1 py-0.5 rounded bg-slate-900 border border-slate-800">O(1)</code></td>
              </tr>
              <tr key="tr-18-8" className="hover:bg-slate-900/40 transition-colors">
                <td key="td-18-8-0" className="p-3 text-slate-300 font-mono text-slate-200">Sliding window + HashMap</td>
                <td key="td-18-8-1" className="p-3 text-slate-300 "><code className="font-mono text-cyan-300 font-semibold px-1 py-0.5 rounded bg-slate-900 border border-slate-800">O(n)</code> expected</td>
                <td key="td-18-8-2" className="p-3 text-slate-300 "><code className="font-mono text-cyan-300 font-semibold px-1 py-0.5 rounded bg-slate-900 border border-slate-800">O(d)</code></td>
              </tr>
              <tr key="tr-18-9" className="hover:bg-slate-900/40 transition-colors">
                <td key="td-18-9-0" className="p-3 text-slate-300 font-mono text-slate-200">Prefix sums</td>
                <td key="td-18-9-1" className="p-3 text-slate-300 "><code className="font-mono text-cyan-300 font-semibold px-1 py-0.5 rounded bg-slate-900 border border-slate-800">O(n)</code> preprocessing</td>
                <td key="td-18-9-2" className="p-3 text-slate-300 "><code className="font-mono text-cyan-300 font-semibold px-1 py-0.5 rounded bg-slate-900 border border-slate-800">O(n)</code></td>
              </tr>
              <tr key="tr-18-10" className="hover:bg-slate-900/40 transition-colors">
                <td key="td-18-10-0" className="p-3 text-slate-300 font-mono text-slate-200">2D prefix sums</td>
                <td key="td-18-10-1" className="p-3 text-slate-300 "><code className="font-mono text-cyan-300 font-semibold px-1 py-0.5 rounded bg-slate-900 border border-slate-800">O(RC)</code> preprocessing</td>
                <td key="td-18-10-2" className="p-3 text-slate-300 "><code className="font-mono text-cyan-300 font-semibold px-1 py-0.5 rounded bg-slate-900 border border-slate-800">O(RC)</code></td>
              </tr>
              <tr key="tr-18-11" className="hover:bg-slate-900/40 transition-colors">
                <td key="td-18-11-0" className="p-3 text-slate-300 font-mono text-slate-200">Difference array</td>
                <td key="td-18-11-1" className="p-3 text-slate-300 "><code className="font-mono text-cyan-300 font-semibold px-1 py-0.5 rounded bg-slate-900 border border-slate-800">O(1)</code> per update, <code className="font-mono text-cyan-300 font-semibold px-1 py-0.5 rounded bg-slate-900 border border-slate-800">O(n)</code> reconstruction</td>
                <td key="td-18-11-2" className="p-3 text-slate-300 "><code className="font-mono text-cyan-300 font-semibold px-1 py-0.5 rounded bg-slate-900 border border-slate-800">O(n)</code></td>
              </tr>
              <tr key="tr-18-12" className="hover:bg-slate-900/40 transition-colors">
                <td key="td-18-12-0" className="p-3 text-slate-300 font-mono text-slate-200">Prefix XOR</td>
                <td key="td-18-12-1" className="p-3 text-slate-300 "><code className="font-mono text-cyan-300 font-semibold px-1 py-0.5 rounded bg-slate-900 border border-slate-800">O(n)</code> preprocessing</td>
                <td key="td-18-12-2" className="p-3 text-slate-300 "><code className="font-mono text-cyan-300 font-semibold px-1 py-0.5 rounded bg-slate-900 border border-slate-800">O(n)</code></td>
              </tr>
              <tr key="tr-18-13" className="hover:bg-slate-900/40 transition-colors">
                <td key="td-18-13-0" className="p-3 text-slate-300 font-mono text-slate-200">Prefix sum + HashMap</td>
                <td key="td-18-13-1" className="p-3 text-slate-300 "><code className="font-mono text-cyan-300 font-semibold px-1 py-0.5 rounded bg-slate-900 border border-slate-800">O(n)</code> expected</td>
                <td key="td-18-13-2" className="p-3 text-slate-300 "><code className="font-mono text-cyan-300 font-semibold px-1 py-0.5 rounded bg-slate-900 border border-slate-800">O(n)</code></td>
              </tr>
              <tr key="tr-18-14" className="hover:bg-slate-900/40 transition-colors">
                <td key="td-18-14-0" className="p-3 text-slate-300 font-mono text-slate-200">Kadane&apos;s algorithm</td>
                <td key="td-18-14-1" className="p-3 text-slate-300 "><code className="font-mono text-cyan-300 font-semibold px-1 py-0.5 rounded bg-slate-900 border border-slate-800">O(n)</code></td>
                <td key="td-18-14-2" className="p-3 text-slate-300 "><code className="font-mono text-cyan-300 font-semibold px-1 py-0.5 rounded bg-slate-900 border border-slate-800">O(1)</code></td>
              </tr>
            </tbody>
          </table>
        </div>
        <p key="p-18-22" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Here, <code className="font-mono text-amber-300 text-xs px-1.5 py-0.5 rounded bg-slate-900 border border-slate-800">d</code> represents the number of distinct characters or keys stored in the relevant map.
        </p>
      </div>
    )
  },
  {
    id: 19,
    title: "19. Common Mistakes and Interview Traps",
    category: "Defensive Engineering",
    content: (
      <div className="space-y-4">
        <p key="p-19-2" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Understanding these mistakes will help you avoid incorrect solutions.
        </p>
        <h3 key="h3-19-4" className="text-lg md:text-xl font-bold text-emerald-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
          19.1 Using Two Pointers on an Unsorted Array
        </h3>
        <p key="p-19-6" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          The standard opposite-direction pair-sum algorithm depends on sorted order.
        </p>
        <p key="p-19-8" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          On an unsorted array, moving a pointer does not predictably increase or decrease the sum.
        </p>
        <p key="p-19-10" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <strong className="text-white font-semibold">Solution:</strong> Sort the array when original indices are not important, or use a HashMap.
        </p>
        <h3 key="h3-19-12" className="text-lg md:text-xl font-bold text-emerald-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
          19.2 Forgetting to Skip Duplicates in Three Sum
        </h3>
        <p key="p-19-14" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          The algorithm may discover the same triplet multiple times.
        </p>
        <p key="p-19-16" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <strong className="text-white font-semibold">Solution:</strong> Skip duplicate fixed values and duplicate left and right values after finding a valid triplet.
        </p>
        <h3 key="h3-19-18" className="text-lg md:text-xl font-bold text-emerald-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
          19.3 Incorrect Sliding Window Conditions
        </h3>
        <p key="p-19-20" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Do not assume every subarray problem can use the standard variable-window pattern.
        </p>
        <p key="p-19-22" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          For example, when negative values are present, shrinking a window may increase its sum.
        </p>
        <p key="p-19-24" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <strong className="text-white font-semibold">Solution:</strong> Check whether the problem&apos;s condition is monotonic as the window expands and shrinks. Use prefix sums or more advanced techniques when appropriate.
        </p>
        <h3 key="h3-19-26" className="text-lg md:text-xl font-bold text-emerald-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
          19.4 Incorrect Prefix Sum Indexing
        </h3>
        <p key="p-19-28" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          The most common mistake is mixing inclusive and exclusive indices.
        </p>
        <p key="p-19-30" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          With a prefix array of length <code className="font-mono text-amber-300 text-xs px-1.5 py-0.5 rounded bg-slate-900 border border-slate-800">n + 1</code>:
        </p>
        <div key="eq-19-33" className="my-3 p-3 rounded-lg bg-slate-950 border border-slate-800 font-mono text-xs text-cyan-300 text-center overflow-x-auto">
          {"sum(l,r)=prefix[r+1]-prefix[l]"}
        </div>
        <p key="p-19-34" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          This formula assumes both <code className="font-mono text-amber-300 text-xs px-1.5 py-0.5 rounded bg-slate-900 border border-slate-800">l</code> and <code className="font-mono text-amber-300 text-xs px-1.5 py-0.5 rounded bg-slate-900 border border-slate-800">r</code> are inclusive.
        </p>
        <h3 key="h3-19-36" className="text-lg md:text-xl font-bold text-emerald-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
          19.5 Forgetting the Initial Prefix Sum
        </h3>
        <p key="p-19-38" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          For subarray-sum counting:
        </p>
        <div key="code-19-43" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-emerald-500/30 border border-emerald-500/50"></span>Code Example</span>
            <span className="text-[10px] text-slate-400 font-sans">Java / DSA</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`frequency.put(0L, 1);`}</code>
          </pre>
        </div>
        <p key="p-19-44" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          is necessary to count subarrays beginning at index zero.
        </p>
        <h3 key="h3-19-46" className="text-lg md:text-xl font-bold text-emerald-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
          19.6 Overwriting the Earliest Prefix-Sum Index
        </h3>
        <p key="p-19-48" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          For longest subarray with sum K, use:
        </p>
        <div key="code-19-53" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-emerald-500/30 border border-emerald-500/50"></span>Code Example</span>
            <span className="text-[10px] text-slate-400 font-sans">Java / DSA</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`firstIndex.putIfAbsent(prefix, i);`}</code>
          </pre>
        </div>
        <p key="p-19-54" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Do not overwrite an earlier occurrence. The earliest index can produce the longest range.
        </p>
        <h3 key="h3-19-56" className="text-lg md:text-xl font-bold text-emerald-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
          19.7 Incorrect Initialization in Kadane&apos;s Algorithm
        </h3>
        <p key="p-19-58" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Do not initialize the maximum to zero when the problem requires a nonempty subarray.
        </p>
        <p key="p-19-60" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Use:
        </p>
        <div key="code-19-66" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-emerald-500/30 border border-emerald-500/50"></span>Code Example</span>
            <span className="text-[10px] text-slate-400 font-sans">Java / DSA</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`long currentSum = arr[0];
long maxSum = arr[0];`}</code>
          </pre>
        </div>
        <h3 key="h3-19-67" className="text-lg md:text-xl font-bold text-emerald-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
          19.8 Integer Overflow
        </h3>
        <p key="p-19-69" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          A sum of many <code className="font-mono text-amber-300 text-xs px-1.5 py-0.5 rounded bg-slate-900 border border-slate-800">int</code> values can exceed the <code className="font-mono text-amber-300 text-xs px-1.5 py-0.5 rounded bg-slate-900 border border-slate-800">int</code> range.
        </p>
        <p key="p-19-71" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Use <code className="font-mono text-amber-300 text-xs px-1.5 py-0.5 rounded bg-slate-900 border border-slate-800">long</code> for:
        </p>
        <ul key="ul-19-77" className="my-3 space-y-1.5 pl-2">
          <li key="li-19-0" className="flex items-start gap-2 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0"></span>
            <span>Prefix sums.</span>
          </li>
          <li key="li-19-1" className="flex items-start gap-2 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0"></span>
            <span>Subarray sums.</span>
          </li>
          <li key="li-19-2" className="flex items-start gap-2 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0"></span>
            <span>Running window sums.</span>
          </li>
          <li key="li-19-3" className="flex items-start gap-2 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0"></span>
            <span>Large target calculations where necessary.</span>
          </li>
        </ul>
        <p key="p-19-78" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          In Three Sum, the three values are also converted to <code className="font-mono text-amber-300 text-xs px-1.5 py-0.5 rounded bg-slate-900 border border-slate-800">long</code> before addition.
        </p>
        <h3 key="h3-19-80" className="text-lg md:text-xl font-bold text-emerald-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
          19.9 Confusing Window Length and Window Index
        </h3>
        <p key="p-19-82" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          For an inclusive window:
        </p>
        <div key="eq-19-85" className="my-3 p-3 rounded-lg bg-slate-950 border border-slate-800 font-mono text-xs text-cyan-300 text-center overflow-x-auto">
          {"length=right-left+1"}
        </div>
        <p key="p-19-86" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          For a range using an exclusive right boundary:
        </p>
        <div key="eq-19-89" className="my-3 p-3 rounded-lg bg-slate-950 border border-slate-800 font-mono text-xs text-cyan-300 text-center overflow-x-auto">
          {"length=right-left"}
        </div>
        <p key="p-19-90" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Be consistent throughout the implementation.
        </p>
      </div>
    )
  },
  {
    id: 20,
    title: "20. Worked Interview Problem-Solving Examples",
    category: "Interview Patterns",
    content: (
      <div className="space-y-4">
        <p key="p-20-2" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Let&apos;s compare how different patterns approach similar-looking questions.
        </p>
        <h3 key="h3-20-4" className="text-lg md:text-xl font-bold text-emerald-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
          Problem A — Maximum Sum of K Consecutive Elements
        </h3>
        <div key="code-20-10" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-emerald-500/30 border border-emerald-500/50"></span>Code Example</span>
            <span className="text-[10px] text-slate-400 font-sans">Java / DSA</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`Array: [4, 2, 1, 7, 8, 1, 2]
K = 3`}</code>
          </pre>
        </div>
        <p key="p-20-11" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Use fixed-size sliding window.
        </p>
        <div key="code-20-31" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-emerald-500/30 border border-emerald-500/50"></span>Code Example</span>
            <span className="text-[10px] text-slate-400 font-sans">Java / DSA</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`long sum = 0;
long maxSum;

for (int i = 0; i < k; i++) {
    sum += arr[i];
}

maxSum = sum;

for (int i = k; i < arr.length; i++) {

    sum += arr[i];
    sum -= arr[i - k];

    maxSum = Math.max(maxSum, sum);
}`}</code>
          </pre>
        </div>
        <p key="p-20-32" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Expected result:
        </p>
        <div key="code-20-37" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-emerald-500/30 border border-emerald-500/50"></span>Code Example</span>
            <span className="text-[10px] text-slate-400 font-sans">Java / DSA</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`16`}</code>
          </pre>
        </div>
        <p key="p-20-38" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          The maximum window is:
        </p>
        <div key="code-20-43" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-emerald-500/30 border border-emerald-500/50"></span>Code Example</span>
            <span className="text-[10px] text-slate-400 font-sans">Java / DSA</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`[7, 8, 1]`}</code>
          </pre>
        </div>
        <h3 key="h3-20-44" className="text-lg md:text-xl font-bold text-emerald-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
          Problem B — Count Subarrays with Sum K
        </h3>
        <div key="code-20-50" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-emerald-500/30 border border-emerald-500/50"></span>Code Example</span>
            <span className="text-[10px] text-slate-400 font-sans">Java / DSA</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`Array: [1, 2, 1, 2]
K = 3`}</code>
          </pre>
        </div>
        <p key="p-20-51" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Use prefix sums and a frequency HashMap.
        </p>
        <p key="p-20-53" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Valid subarrays:
        </p>
        <div key="code-20-60" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-emerald-500/30 border border-emerald-500/50"></span>Code Example</span>
            <span className="text-[10px] text-slate-400 font-sans">Java / DSA</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`[1, 2]
[2, 1]
[1, 2]`}</code>
          </pre>
        </div>
        <p key="p-20-61" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Expected result:
        </p>
        <div key="code-20-66" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-emerald-500/30 border border-emerald-500/50"></span>Code Example</span>
            <span className="text-[10px] text-slate-400 font-sans">Java / DSA</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`3`}</code>
          </pre>
        </div>
        <h3 key="h3-20-67" className="text-lg md:text-xl font-bold text-emerald-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
          Problem C — Find the Maximum Subarray Sum
        </h3>
        <div key="code-20-72" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-emerald-500/30 border border-emerald-500/50"></span>Code Example</span>
            <span className="text-[10px] text-slate-400 font-sans">Java / DSA</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`Array: [-2, 3, -1, 5, -6]`}</code>
          </pre>
        </div>
        <p key="p-20-73" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Use Kadane&apos;s algorithm.
        </p>
        <p key="p-20-75" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Maximum subarray:
        </p>
        <div key="code-20-80" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-emerald-500/30 border border-emerald-500/50"></span>Code Example</span>
            <span className="text-[10px] text-slate-400 font-sans">Java / DSA</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`[3, -1, 5]`}</code>
          </pre>
        </div>
        <p key="p-20-81" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Expected result:
        </p>
        <div key="code-20-86" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-emerald-500/30 border border-emerald-500/50"></span>Code Example</span>
            <span className="text-[10px] text-slate-400 font-sans">Java / DSA</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`7`}</code>
          </pre>
        </div>
        <h3 key="h3-20-87" className="text-lg md:text-xl font-bold text-emerald-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
          Problem D — Find Two Elements in a Sorted Array
        </h3>
        <div key="code-20-93" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-emerald-500/30 border border-emerald-500/50"></span>Code Example</span>
            <span className="text-[10px] text-slate-400 font-sans">Java / DSA</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`Array: [1, 3, 4, 6, 8, 10]
Target = 14`}</code>
          </pre>
        </div>
        <p key="p-20-94" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Use opposite-direction pointers.
        </p>
        <div key="code-20-99" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-emerald-500/30 border border-emerald-500/50"></span>Code Example</span>
            <span className="text-[10px] text-slate-400 font-sans">Java / DSA</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`4 + 10 = 14`}</code>
          </pre>
        </div>
        <p key="p-20-100" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Expected result:
        </p>
        <div key="code-20-105" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-emerald-500/30 border border-emerald-500/50"></span>Code Example</span>
            <span className="text-[10px] text-slate-400 font-sans">Java / DSA</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`[4, 10]`}</code>
          </pre>
        </div>
        <h3 key="h3-20-106" className="text-lg md:text-xl font-bold text-emerald-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
          Problem E — Find the Smallest Substring Containing All Required Characters
        </h3>
        <div key="code-20-112" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-emerald-500/30 border border-emerald-500/50"></span>Code Example</span>
            <span className="text-[10px] text-slate-400 font-sans">Java / DSA</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`s = "ADOBECODEBANC"
t = "ABC"`}</code>
          </pre>
        </div>
        <p key="p-20-113" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Use variable-size sliding window and frequency tracking.
        </p>
        <p key="p-20-115" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Expected result:
        </p>
        <div key="code-20-120" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-emerald-500/30 border border-emerald-500/50"></span>Code Example</span>
            <span className="text-[10px] text-slate-400 font-sans">Java / DSA</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`"BANC"`}</code>
          </pre>
        </div>
        <p key="p-20-121" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          The important lesson is that you should identify the problem&apos;s requirements first, rather than force every array problem into a single pattern.
        </p>
      </div>
    )
  },
  {
    id: 21,
    title: "21. Practice Problems",
    category: "Practice Roadmap",
    content: (
      <div className="space-y-4">
        <p key="p-21-2" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          These problems are designed to build from basic implementation to advanced interview-level problem solving.
        </p>
        <h3 key="h3-21-4" className="text-lg md:text-xl font-bold text-emerald-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
          Level 1 — Fundamentals
        </h3>
        <ol key="ol-21-13" className="my-3 space-y-2 pl-2">
          <li key="oli-21-0" className="flex items-start gap-2.5 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-5 h-5 rounded-full bg-slate-800 text-emerald-400 font-mono text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5 border border-slate-700">
              1
            </span>
            <span>Reverse an array using two pointers.</span>
          </li>
          <li key="oli-21-1" className="flex items-start gap-2.5 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-5 h-5 rounded-full bg-slate-800 text-emerald-400 font-mono text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5 border border-slate-700">
              2
            </span>
            <span>Check whether a string is a palindrome.</span>
          </li>
          <li key="oli-21-2" className="flex items-start gap-2.5 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-5 h-5 rounded-full bg-slate-800 text-emerald-400 font-mono text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5 border border-slate-700">
              3
            </span>
            <span>Find two numbers with a target sum in a sorted array.</span>
          </li>
          <li key="oli-21-3" className="flex items-start gap-2.5 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-5 h-5 rounded-full bg-slate-800 text-emerald-400 font-mono text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5 border border-slate-700">
              4
            </span>
            <span>Remove duplicates from a sorted array.</span>
          </li>
          <li key="oli-21-4" className="flex items-start gap-2.5 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-5 h-5 rounded-full bg-slate-800 text-emerald-400 font-mono text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5 border border-slate-700">
              5
            </span>
            <span>Move all zeroes to the end.</span>
          </li>
          <li key="oli-21-5" className="flex items-start gap-2.5 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-5 h-5 rounded-full bg-slate-800 text-emerald-400 font-mono text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5 border border-slate-700">
              6
            </span>
            <span>Find the middle node of a linked list.</span>
          </li>
          <li key="oli-21-6" className="flex items-start gap-2.5 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-5 h-5 rounded-full bg-slate-800 text-emerald-400 font-mono text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5 border border-slate-700">
              7
            </span>
            <span>Detect a cycle in a linked list.</span>
          </li>
        </ol>
        <h3 key="h3-21-14" className="text-lg md:text-xl font-bold text-emerald-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
          Level 2 — Sliding Window
        </h3>
        <ol key="ol-21-22" className="my-3 space-y-2 pl-2">
          <li key="oli-21-0" className="flex items-start gap-2.5 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-5 h-5 rounded-full bg-slate-800 text-emerald-400 font-mono text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5 border border-slate-700">
              1
            </span>
            <span>Maximum sum subarray of size K.</span>
          </li>
          <li key="oli-21-1" className="flex items-start gap-2.5 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-5 h-5 rounded-full bg-slate-800 text-emerald-400 font-mono text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5 border border-slate-700">
              2
            </span>
            <span>Minimum sum subarray of size K.</span>
          </li>
          <li key="oli-21-2" className="flex items-start gap-2.5 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-5 h-5 rounded-full bg-slate-800 text-emerald-400 font-mono text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5 border border-slate-700">
              3
            </span>
            <span>Average of all subarrays of size K.</span>
          </li>
          <li key="oli-21-3" className="flex items-start gap-2.5 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-5 h-5 rounded-full bg-slate-800 text-emerald-400 font-mono text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5 border border-slate-700">
              4
            </span>
            <span>Longest substring without repeating characters.</span>
          </li>
          <li key="oli-21-4" className="flex items-start gap-2.5 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-5 h-5 rounded-full bg-slate-800 text-emerald-400 font-mono text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5 border border-slate-700">
              5
            </span>
            <span>Longest subarray with at most K distinct elements.</span>
          </li>
          <li key="oli-21-5" className="flex items-start gap-2.5 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-5 h-5 rounded-full bg-slate-800 text-emerald-400 font-mono text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5 border border-slate-700">
              6
            </span>
            <span>Minimum-size subarray with sum at least a target, assuming positive elements.</span>
          </li>
        </ol>
        <h3 key="h3-21-23" className="text-lg md:text-xl font-bold text-emerald-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
          Level 3 — Prefix Sums
        </h3>
        <ol key="ol-21-32" className="my-3 space-y-2 pl-2">
          <li key="oli-21-0" className="flex items-start gap-2.5 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-5 h-5 rounded-full bg-slate-800 text-emerald-400 font-mono text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5 border border-slate-700">
              1
            </span>
            <span>Build a prefix sum array.</span>
          </li>
          <li key="oli-21-1" className="flex items-start gap-2.5 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-5 h-5 rounded-full bg-slate-800 text-emerald-400 font-mono text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5 border border-slate-700">
              2
            </span>
            <span>Answer multiple range-sum queries.</span>
          </li>
          <li key="oli-21-2" className="flex items-start gap-2.5 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-5 h-5 rounded-full bg-slate-800 text-emerald-400 font-mono text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5 border border-slate-700">
              3
            </span>
            <span>Find the equilibrium index of an array.</span>
          </li>
          <li key="oli-21-3" className="flex items-start gap-2.5 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-5 h-5 rounded-full bg-slate-800 text-emerald-400 font-mono text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5 border border-slate-700">
              4
            </span>
            <span>Count subarrays with sum equal to K.</span>
          </li>
          <li key="oli-21-4" className="flex items-start gap-2.5 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-5 h-5 rounded-full bg-slate-800 text-emerald-400 font-mono text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5 border border-slate-700">
              5
            </span>
            <span>Find the longest subarray with sum K.</span>
          </li>
          <li key="oli-21-5" className="flex items-start gap-2.5 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-5 h-5 rounded-full bg-slate-800 text-emerald-400 font-mono text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5 border border-slate-700">
              6
            </span>
            <span>Perform range updates using a difference array.</span>
          </li>
          <li key="oli-21-6" className="flex items-start gap-2.5 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-5 h-5 rounded-full bg-slate-800 text-emerald-400 font-mono text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5 border border-slate-700">
              7
            </span>
            <span>Answer range XOR queries.</span>
          </li>
        </ol>
        <h3 key="h3-21-33" className="text-lg md:text-xl font-bold text-emerald-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
          Level 4 — Advanced Interview Problems
        </h3>
        <ol key="ol-21-45" className="my-3 space-y-2 pl-2">
          <li key="oli-21-0" className="flex items-start gap-2.5 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-5 h-5 rounded-full bg-slate-800 text-emerald-400 font-mono text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5 border border-slate-700">
              1
            </span>
            <span>Three Sum.</span>
          </li>
          <li key="oli-21-1" className="flex items-start gap-2.5 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-5 h-5 rounded-full bg-slate-800 text-emerald-400 font-mono text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5 border border-slate-700">
              2
            </span>
            <span>Three Sum Closest.</span>
          </li>
          <li key="oli-21-2" className="flex items-start gap-2.5 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-5 h-5 rounded-full bg-slate-800 text-emerald-400 font-mono text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5 border border-slate-700">
              3
            </span>
            <span>Four Sum.</span>
          </li>
          <li key="oli-21-3" className="flex items-start gap-2.5 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-5 h-5 rounded-full bg-slate-800 text-emerald-400 font-mono text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5 border border-slate-700">
              4
            </span>
            <span>Minimum Window Substring.</span>
          </li>
          <li key="oli-21-4" className="flex items-start gap-2.5 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-5 h-5 rounded-full bg-slate-800 text-emerald-400 font-mono text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5 border border-slate-700">
              5
            </span>
            <span>Maximum Subarray — Kadane&apos;s Algorithm.</span>
          </li>
          <li key="oli-21-5" className="flex items-start gap-2.5 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-5 h-5 rounded-full bg-slate-800 text-emerald-400 font-mono text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5 border border-slate-700">
              6
            </span>
            <span>Sliding Window Maximum.</span>
          </li>
          <li key="oli-21-6" className="flex items-start gap-2.5 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-5 h-5 rounded-full bg-slate-800 text-emerald-400 font-mono text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5 border border-slate-700">
              7
            </span>
            <span>Count subarrays with XOR equal to K.</span>
          </li>
          <li key="oli-21-7" className="flex items-start gap-2.5 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-5 h-5 rounded-full bg-slate-800 text-emerald-400 font-mono text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5 border border-slate-700">
              8
            </span>
            <span>Maximum sum of a circular subarray.</span>
          </li>
          <li key="oli-21-8" className="flex items-start gap-2.5 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-5 h-5 rounded-full bg-slate-800 text-emerald-400 font-mono text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5 border border-slate-700">
              9
            </span>
            <span>Maximum sum of two non-overlapping subarrays.</span>
          </li>
          <li key="oli-21-9" className="flex items-start gap-2.5 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-5 h-5 rounded-full bg-slate-800 text-emerald-400 font-mono text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5 border border-slate-700">
              10
            </span>
            <span>Maximum sum rectangle in a 2D matrix.</span>
          </li>
        </ol>
      </div>
    )
  },
  {
    id: 22,
    title: "22. Important Concepts to Remember",
    category: "Summary & Review",
    content: (
      <div className="space-y-4">
        <p key="p-22-2" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <strong className="text-white font-semibold">Two Pointers</strong>
        </p>
        <p key="p-22-4" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Use two indices to reduce unnecessary comparisons.
        </p>
        <ul key="ul-22-9" className="my-3 space-y-1.5 pl-2">
          <li key="li-22-0" className="flex items-start gap-2 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0"></span>
            <span>Opposite direction: Sorted pair sum, palindrome, reversing.</span>
          </li>
          <li key="li-22-1" className="flex items-start gap-2 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0"></span>
            <span>Fast and slow: Linked-list middle and cycle detection.</span>
          </li>
          <li key="li-22-2" className="flex items-start gap-2 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0"></span>
            <span>Same direction: Removing duplicates, moving zeroes.</span>
          </li>
        </ul>
        <p key="p-22-10" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <strong className="text-white font-semibold">Sliding Window</strong>
        </p>
        <p key="p-22-12" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Maintain a contiguous range and update it as it moves.
        </p>
        <ul key="ul-22-18" className="my-3 space-y-1.5 pl-2">
          <li key="li-22-0" className="flex items-start gap-2 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0"></span>
            <span>Fixed window: Exactly K elements.</span>
          </li>
          <li key="li-22-1" className="flex items-start gap-2 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0"></span>
            <span>Variable window: Expand and shrink according to a condition.</span>
          </li>
          <li key="li-22-2" className="flex items-start gap-2 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0"></span>
            <span>HashMap integration: Track character frequencies or recent occurrences.</span>
          </li>
          <li key="li-22-3" className="flex items-start gap-2 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0"></span>
            <span>Monotonic deque: Maintain window minimum or maximum efficiently.</span>
          </li>
        </ul>
        <p key="p-22-19" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <strong className="text-white font-semibold">Prefix Sums</strong>
        </p>
        <p key="p-22-21" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Store cumulative information to avoid repeated calculations.
        </p>
        <ul key="ul-22-28" className="my-3 space-y-1.5 pl-2">
          <li key="li-22-0" className="flex items-start gap-2 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0"></span>
            <span>1D prefix sum: Range-sum queries.</span>
          </li>
          <li key="li-22-1" className="flex items-start gap-2 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0"></span>
            <span>2D prefix sum: Matrix rectangle queries.</span>
          </li>
          <li key="li-22-2" className="flex items-start gap-2 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0"></span>
            <span>Difference array: Batch range updates.</span>
          </li>
          <li key="li-22-3" className="flex items-start gap-2 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0"></span>
            <span>Prefix XOR: Range-XOR queries.</span>
          </li>
          <li key="li-22-4" className="flex items-start gap-2 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0"></span>
            <span>Prefix sum + HashMap: Subarray sum counting and length problems.</span>
          </li>
        </ul>
        <p key="p-22-29" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <strong className="text-white font-semibold">Kadane&apos;s Algorithm</strong>
        </p>
        <p key="p-22-31" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Find the maximum-sum contiguous subarray in linear time.
        </p>
        <div key="eq-22-34" className="my-3 p-3 rounded-lg bg-slate-950 border border-slate-800 font-mono text-xs text-cyan-300 text-center overflow-x-auto">
          {"current=\\max(a[i],current+a[i])"}
        </div>
        <div key="eq-22-36" className="my-3 p-3 rounded-lg bg-slate-950 border border-slate-800 font-mono text-xs text-cyan-300 text-center overflow-x-auto">
          {"answer=\\max(answer,current)"}
        </div>
      </div>
    )
  },
  {
    id: 23,
    title: "23. Module 15 — Mastery Checklist & Final Understanding",
    category: "Mastery Review",
    content: (
      <div className="space-y-4">
        <h3 key="h3-23-0" className="text-lg md:text-xl font-bold text-emerald-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
          23. Module 15 — Mastery Checklist
        </h3>
        <p key="p-23-2" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <strong className="text-white font-semibold">Your learning progress</strong>
        </p>
        <p key="p-23-4" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          # <strong className="text-white font-semibold">0%</strong>
        </p>
        <p key="p-23-6" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          0 of 18 concepts mastered
        </p>
        <p key="p-23-8" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Identify when to use two pointers instead of nested loops
        </p>
        <p key="p-23-10" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Implement opposite-direction pointers
        </p>
        <p key="p-23-12" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Solve pair sum and triplet sum problems
        </p>
        <p key="p-23-14" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Implement fast and slow pointers for linked lists
        </p>
        <p key="p-23-16" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Use same-direction pointers for in-place array modification
        </p>
        <p key="p-23-18" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Explain fixed-size sliding-window logic
        </p>
        <p key="p-23-20" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Implement variable-size sliding windows
        </p>
        <p key="p-23-22" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Solve longest substring without repeating characters
        </p>
        <p key="p-23-24" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Implement minimum window substring
        </p>
        <p key="p-23-26" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Build and query 1D prefix sums
        </p>
        <p key="p-23-28" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Build and query 2D prefix sums
        </p>
        <p key="p-23-30" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Apply range updates using difference arrays
        </p>
        <p key="p-23-32" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Implement prefix XOR
        </p>
        <p key="p-23-34" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Count subarrays with sum K using a HashMap
        </p>
        <p key="p-23-36" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Find the longest subarray with sum K
        </p>
        <p key="p-23-38" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Implement Kadane&apos;s algorithm and return the actual subarray
        </p>
        <p key="p-23-40" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Analyze time and space complexity
        </p>
        <p key="p-23-42" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Recognize negative-number limitations in sliding-window problems
        </p>
        <p key="p-23-44" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Reset checklist
        </p>
        <h3 key="h3-23-46" className="text-lg md:text-xl font-bold text-emerald-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
          Final Understanding
        </h3>
        <p key="p-23-48" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          The key to mastering this module is understanding the relationship between the patterns:
        </p>
        <ul key="ul-23-56" className="my-3 space-y-1.5 pl-2">
          <li key="li-23-0" className="flex items-start gap-2 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0"></span>
            <span><strong className="text-white font-semibold">Two pointers</strong> reduce unnecessary searching by intelligently moving indices.</span>
          </li>
          <li key="li-23-1" className="flex items-start gap-2 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0"></span>
            <span><strong className="text-white font-semibold">Sliding windows</strong> optimize repeated calculations over contiguous ranges.</span>
          </li>
          <li key="li-23-2" className="flex items-start gap-2 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0"></span>
            <span><strong className="text-white font-semibold">Prefix sums</strong> transform repeated range calculations into constant-time queries.</span>
          </li>
          <li key="li-23-3" className="flex items-start gap-2 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0"></span>
            <span><strong className="text-white font-semibold">Difference arrays</strong> optimize repeated range updates.</span>
          </li>
          <li key="li-23-4" className="flex items-start gap-2 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0"></span>
            <span><strong className="text-white font-semibold">HashMaps</strong> remember information about previously visited elements.</span>
          </li>
          <li key="li-23-5" className="flex items-start gap-2 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0"></span>
            <span><strong className="text-white font-semibold">Kadane&apos;s algorithm</strong> uses a running optimal subarray state to solve a maximum-sum problem.</span>
          </li>
        </ul>
        <p key="p-23-57" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Do not memorize only the code. Be able to explain <strong className="text-white font-semibold">why a pointer moves, why a window shrinks, why a prefix sum is subtracted, and why a previous prefix must be stored</strong>. That understanding is what makes these patterns useful across hundreds of different DSA problems.
        </p>
      </div>
    )
  },
];
