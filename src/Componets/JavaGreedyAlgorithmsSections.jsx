import React from "react";

export const JAVA_GREEDY_ALGORITHMS_SECTIONS = [
  {
    id: 0,
    title: "Curriculum Overview: Greedy Algorithms & Interval Problems",
    category: "Module Overview",
    content: (
      <div className="space-y-4">
        <p key="p-0-0" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          # <strong className="text-white font-semibold">Module 16 — Greedy Algorithms &amp; Interval Problems</strong>
        </p>
        <p key="p-0-2" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Greedy algorithms are one of the most important problem-solving techniques in Data Structures and Algorithms. They are frequently used in coding interviews, competitive programming, scheduling systems, optimization problems, networking, compression, and resource allocation.
        </p>
        <p key="p-0-4" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          In previous modules, you learned how to use data structures such as arrays, stacks, queues, heaps, hash maps, and trees to solve problems efficiently.
        </p>
        <p key="p-0-6" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          In this module, you will learn a different way of thinking: <strong className="text-white font-semibold">instead of exploring every possible solution, make the best available choice at each step and determine whether those choices lead to a globally optimal solution.</strong>
        </p>
        <p key="p-0-8" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          We will use Java implementations, dry runs, complexity analysis, and correctness proofs throughout the module.
        </p>
      </div>
    )
  },
  {
    id: 1,
    title: "1. Greedy Algorithm Fundamentals",
    category: "Core Principles",
    content: (
      <div className="space-y-4">
        <h3 key="h3-1-2" className="text-lg md:text-xl font-bold text-amber-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-amber-400"></span>
          1.1 What is a Greedy Algorithm?
        </h3>
        <p key="p-1-4" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          A greedy algorithm is an algorithmic strategy that builds a solution step by step by selecting the choice that appears to be the best at the current moment.
        </p>
        <p key="p-1-6" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          It makes a locally optimal choice with the hope that these choices produce a globally optimal solution.
        </p>
        <p key="p-1-8" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          The key idea is:
        </p>
        <p key="p-1-10" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <strong className="text-white font-semibold">Choose the best available option now without reconsidering previous decisions.</strong>
        </p>
        <p key="p-1-12" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          For example, suppose you have the following activities and want to attend as many as possible without attending overlapping activities.
        </p>
        <div key="table-1-21" className="my-5 overflow-x-auto rounded-xl border border-slate-800 shadow-md">
          <table className="w-full text-xs text-left border-collapse">
            <thead>
              <tr className="bg-slate-900 border-b border-slate-800 text-amber-400 font-mono">
                <th key="th-1-0" className="p-3 font-semibold">Activity</th>
                <th key="th-1-1" className="p-3 font-semibold">Start</th>
                <th key="th-1-2" className="p-3 font-semibold">Finish</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-850 bg-slate-950/60 font-sans">
              <tr key="tr-1-0" className="hover:bg-slate-900/40 transition-colors">
                <td key="td-1-0-0" className="p-3 text-slate-300 font-mono text-slate-200">A</td>
                <td key="td-1-0-1" className="p-3 text-slate-300 ">1</td>
                <td key="td-1-0-2" className="p-3 text-slate-300 ">3</td>
              </tr>
              <tr key="tr-1-1" className="hover:bg-slate-900/40 transition-colors">
                <td key="td-1-1-0" className="p-3 text-slate-300 font-mono text-slate-200">B</td>
                <td key="td-1-1-1" className="p-3 text-slate-300 ">2</td>
                <td key="td-1-1-2" className="p-3 text-slate-300 ">5</td>
              </tr>
              <tr key="tr-1-2" className="hover:bg-slate-900/40 transition-colors">
                <td key="td-1-2-0" className="p-3 text-slate-300 font-mono text-slate-200">C</td>
                <td key="td-1-2-1" className="p-3 text-slate-300 ">3</td>
                <td key="td-1-2-2" className="p-3 text-slate-300 ">4</td>
              </tr>
              <tr key="tr-1-3" className="hover:bg-slate-900/40 transition-colors">
                <td key="td-1-3-0" className="p-3 text-slate-300 font-mono text-slate-200">D</td>
                <td key="td-1-3-1" className="p-3 text-slate-300 ">4</td>
                <td key="td-1-3-2" className="p-3 text-slate-300 ">6</td>
              </tr>
              <tr key="tr-1-4" className="hover:bg-slate-900/40 transition-colors">
                <td key="td-1-4-0" className="p-3 text-slate-300 font-mono text-slate-200">E</td>
                <td key="td-1-4-1" className="p-3 text-slate-300 ">6</td>
                <td key="td-1-4-2" className="p-3 text-slate-300 ">8</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p key="p-1-22" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          You cannot attend two activities simultaneously.
        </p>
        <p key="p-1-24" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          One possible strategy is to select the activity that finishes earliest.
        </p>
        <p key="p-1-26" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Why?
        </p>
        <p key="p-1-28" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Because finishing early leaves more time available for the remaining activities.
        </p>
        <p key="p-1-30" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          The algorithm proceeds as follows:
        </p>
        <ol key="ol-1-37" className="my-3 space-y-2 pl-2">
          <li key="oli-1-0" className="flex items-start gap-2.5 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-5 h-5 rounded-full bg-slate-800 text-amber-400 font-mono text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5 border border-slate-700">
              1
            </span>
            <span>Select A: (1, 3).</span>
          </li>
          <li key="oli-1-1" className="flex items-start gap-2.5 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-5 h-5 rounded-full bg-slate-800 text-amber-400 font-mono text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5 border border-slate-700">
              2
            </span>
            <span>Skip B because it overlaps with A.</span>
          </li>
          <li key="oli-1-2" className="flex items-start gap-2.5 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-5 h-5 rounded-full bg-slate-800 text-amber-400 font-mono text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5 border border-slate-700">
              3
            </span>
            <span>Select C: (3, 4).</span>
          </li>
          <li key="oli-1-3" className="flex items-start gap-2.5 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-5 h-5 rounded-full bg-slate-800 text-amber-400 font-mono text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5 border border-slate-700">
              4
            </span>
            <span>Select D cannot be selected because it starts at 4, so actually it can be selected after C under the non-overlapping interval convention. Select D: (4, 6).</span>
          </li>
          <li key="oli-1-4" className="flex items-start gap-2.5 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-5 h-5 rounded-full bg-slate-800 text-amber-400 font-mono text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5 border border-slate-700">
              5
            </span>
            <span>Select E: (6, 8).</span>
          </li>
        </ol>
        <p key="p-1-38" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          The resulting selection is:
        </p>
        <p key="p-1-40" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <strong className="text-white font-semibold">Selected activities</strong>
        </p>
        <p key="p-1-42" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          A
        </p>
        <p key="p-1-44" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          1 — 3
        </p>
        <p key="p-1-46" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Selected
        </p>
        <p key="p-1-48" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          B
        </p>
        <p key="p-1-50" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          2 — 5
        </p>
        <p key="p-1-52" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Overlaps
        </p>
        <p key="p-1-54" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          C
        </p>
        <p key="p-1-56" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          3 — 4
        </p>
        <p key="p-1-58" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Selected
        </p>
        <p key="p-1-60" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          D
        </p>
        <p key="p-1-62" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          4 — 6
        </p>
        <p key="p-1-64" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Selected
        </p>
        <p key="p-1-66" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          E
        </p>
        <p key="p-1-68" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          6 — 8
        </p>
        <p key="p-1-70" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Selected
        </p>
        <p key="p-1-72" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          We can attend four activities: A, C, D, and E.
        </p>
        <p key="p-1-74" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          This is an example of a greedy algorithm.
        </p>
        <p key="p-1-76" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Notice that the algorithm does not examine every possible combination of activities. It follows a decision rule: select the activity that finishes earliest among the currently available activities.
        </p>
        <h4 key="h4-1-78" className="text-base font-semibold text-white mt-6 mb-2 flex items-center gap-2">
          <span className="text-amber-500 font-mono">▸</span>
          1.2 General Structure of a Greedy Algorithm
        </h4>
        <p key="p-1-80" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Most greedy algorithms follow these steps:
        </p>
        <ol key="ol-1-89" className="my-3 space-y-2 pl-2">
          <li key="oli-1-0" className="flex items-start gap-2.5 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-5 h-5 rounded-full bg-slate-800 text-amber-400 font-mono text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5 border border-slate-700">
              1
            </span>
            <span>Start with an empty solution.</span>
          </li>
          <li key="oli-1-1" className="flex items-start gap-2.5 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-5 h-5 rounded-full bg-slate-800 text-amber-400 font-mono text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5 border border-slate-700">
              2
            </span>
            <span>Identify all currently available choices.</span>
          </li>
          <li key="oli-1-2" className="flex items-start gap-2.5 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-5 h-5 rounded-full bg-slate-800 text-amber-400 font-mono text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5 border border-slate-700">
              3
            </span>
            <span>Select the choice that satisfies the greedy strategy.</span>
          </li>
          <li key="oli-1-3" className="flex items-start gap-2.5 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-5 h-5 rounded-full bg-slate-800 text-amber-400 font-mono text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5 border border-slate-700">
              4
            </span>
            <span>Check whether the selected choice is valid.</span>
          </li>
          <li key="oli-1-4" className="flex items-start gap-2.5 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-5 h-5 rounded-full bg-slate-800 text-amber-400 font-mono text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5 border border-slate-700">
              5
            </span>
            <span>Add it to the solution.</span>
          </li>
          <li key="oli-1-5" className="flex items-start gap-2.5 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-5 h-5 rounded-full bg-slate-800 text-amber-400 font-mono text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5 border border-slate-700">
              6
            </span>
            <span>Update the available choices.</span>
          </li>
          <li key="oli-1-6" className="flex items-start gap-2.5 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-5 h-5 rounded-full bg-slate-800 text-amber-400 font-mono text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5 border border-slate-700">
              7
            </span>
            <span>Repeat until the problem is solved.</span>
          </li>
        </ol>
        <p key="p-1-90" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          A general representation:
        </p>
        <div key="code-1-109" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-amber-500/30 border border-amber-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-slate-400 font-sans">Module 16 Greedy Algorithms</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`while (problemIsNotSolved) {

    // Find the best available choice
    Choice choice = selectBestChoice();

    // Check whether the choice is valid
    if (isValid(choice)) {

        // Include it in the solution
        addToSolution(choice);
    }

    // Update the remaining problem
    updateRemainingChoices();
}`}</code>
          </pre>
        </div>
        <p key="p-1-110" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          The most important part is <code className="font-mono text-amber-300 text-xs px-1.5 py-0.5 rounded bg-slate-900 border border-slate-800">selectBestChoice()</code>.
        </p>
        <p key="p-1-112" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Different greedy problems use different strategies:
        </p>
        <div key="table-1-123" className="my-5 overflow-x-auto rounded-xl border border-slate-800 shadow-md">
          <table className="w-full text-xs text-left border-collapse">
            <thead>
              <tr className="bg-slate-900 border-b border-slate-800 text-amber-400 font-mono">
                <th key="th-1-0" className="p-3 font-semibold">Problem</th>
                <th key="th-1-1" className="p-3 font-semibold">Greedy strategy</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-850 bg-slate-950/60 font-sans">
              <tr key="tr-1-0" className="hover:bg-slate-900/40 transition-colors">
                <td key="td-1-0-0" className="p-3 text-slate-300 font-mono text-slate-200">Activity selection</td>
                <td key="td-1-0-1" className="p-3 text-slate-300 ">Earliest finishing activity</td>
              </tr>
              <tr key="tr-1-1" className="hover:bg-slate-900/40 transition-colors">
                <td key="td-1-1-0" className="p-3 text-slate-300 font-mono text-slate-200">Fractional Knapsack</td>
                <td key="td-1-1-1" className="p-3 text-slate-300 ">Highest value-to-weight ratio</td>
              </tr>
              <tr key="tr-1-2" className="hover:bg-slate-900/40 transition-colors">
                <td key="td-1-2-0" className="p-3 text-slate-300 font-mono text-slate-200">Job sequencing</td>
                <td key="td-1-2-1" className="p-3 text-slate-300 ">Highest profit first</td>
              </tr>
              <tr key="tr-1-3" className="hover:bg-slate-900/40 transition-colors">
                <td key="td-1-3-0" className="p-3 text-slate-300 font-mono text-slate-200">Huffman coding</td>
                <td key="td-1-3-1" className="p-3 text-slate-300 ">Combine two lowest frequencies</td>
              </tr>
              <tr key="tr-1-4" className="hover:bg-slate-900/40 transition-colors">
                <td key="td-1-4-0" className="p-3 text-slate-300 font-mono text-slate-200">Jump Game</td>
                <td key="td-1-4-1" className="p-3 text-slate-300 ">Maintain farthest reachable position</td>
              </tr>
              <tr key="tr-1-5" className="hover:bg-slate-900/40 transition-colors">
                <td key="td-1-5-0" className="p-3 text-slate-300 font-mono text-slate-200">Gas Station</td>
                <td key="td-1-5-1" className="p-3 text-slate-300 ">Reset starting position after a failed journey</td>
              </tr>
              <tr key="tr-1-6" className="hover:bg-slate-900/40 transition-colors">
                <td key="td-1-6-0" className="p-3 text-slate-300 font-mono text-slate-200">Meeting Rooms</td>
                <td key="td-1-6-1" className="p-3 text-slate-300 ">Reuse the room that becomes free earliest</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p key="p-1-124" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <strong className="text-white font-semibold">Important:</strong> A greedy strategy must be mathematically justified. Choosing something that merely looks good does not guarantee an optimal answer.
        </p>
      </div>
    )
  },
  {
    id: 2,
    title: "2. Greedy Choice Property",
    category: "Core Principles",
    content: (
      <div className="space-y-4">
        <p key="p-2-2" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          The greedy choice property is one of the most important concepts in greedy algorithms.
        </p>
        <p key="p-2-4" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          It means that a globally optimal solution can be constructed by making a locally optimal choice first.
        </p>
        <p key="p-2-6" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          In simpler language:
        </p>
        <p key="p-2-8" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <strong className="text-white font-semibold">Making the best immediate decision should not prevent us from obtaining the best overall solution.</strong>
        </p>
        <p key="p-2-10" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Consider the activity selection problem.
        </p>
        <p key="p-2-12" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          You want to attend the maximum number of non-overlapping activities.
        </p>
        <p key="p-2-14" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Suppose the available activities are:
        </p>
        <div key="table-2-22" className="my-5 overflow-x-auto rounded-xl border border-slate-800 shadow-md">
          <table className="w-full text-xs text-left border-collapse">
            <thead>
              <tr className="bg-slate-900 border-b border-slate-800 text-amber-400 font-mono">
                <th key="th-2-0" className="p-3 font-semibold">Activity</th>
                <th key="th-2-1" className="p-3 font-semibold">Start</th>
                <th key="th-2-2" className="p-3 font-semibold">Finish</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-850 bg-slate-950/60 font-sans">
              <tr key="tr-2-0" className="hover:bg-slate-900/40 transition-colors">
                <td key="td-2-0-0" className="p-3 text-slate-300 font-mono text-slate-200">A</td>
                <td key="td-2-0-1" className="p-3 text-slate-300 ">1</td>
                <td key="td-2-0-2" className="p-3 text-slate-300 ">4</td>
              </tr>
              <tr key="tr-2-1" className="hover:bg-slate-900/40 transition-colors">
                <td key="td-2-1-0" className="p-3 text-slate-300 font-mono text-slate-200">B</td>
                <td key="td-2-1-1" className="p-3 text-slate-300 ">2</td>
                <td key="td-2-1-2" className="p-3 text-slate-300 ">3</td>
              </tr>
              <tr key="tr-2-2" className="hover:bg-slate-900/40 transition-colors">
                <td key="td-2-2-0" className="p-3 text-slate-300 font-mono text-slate-200">C</td>
                <td key="td-2-2-1" className="p-3 text-slate-300 ">3</td>
                <td key="td-2-2-2" className="p-3 text-slate-300 ">5</td>
              </tr>
              <tr key="tr-2-3" className="hover:bg-slate-900/40 transition-colors">
                <td key="td-2-3-0" className="p-3 text-slate-300 font-mono text-slate-200">D</td>
                <td key="td-2-3-1" className="p-3 text-slate-300 ">5</td>
                <td key="td-2-3-2" className="p-3 text-slate-300 ">7</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p key="p-2-23" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Which activity should you select first?
        </p>
        <p key="p-2-25" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Possible strategies:
        </p>
        <ul key="ul-2-30" className="my-3 space-y-1.5 pl-2">
          <li key="li-2-0" className="flex items-start gap-2 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 shrink-0"></span>
            <span>Select the activity that starts earliest.</span>
          </li>
          <li key="li-2-1" className="flex items-start gap-2 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 shrink-0"></span>
            <span>Select the shortest activity.</span>
          </li>
          <li key="li-2-2" className="flex items-start gap-2 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 shrink-0"></span>
            <span>Select the activity that finishes earliest.</span>
          </li>
        </ul>
        <p key="p-2-31" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          The earliest-finishing strategy is correct for maximizing the number of non-overlapping activities.
        </p>
        <p key="p-2-33" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Why?
        </p>
        <p key="p-2-35" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Because the earlier an activity finishes, the more time remains for other activities.
        </p>
        <p key="p-2-37" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Let&apos;s compare:
        </p>
        <p key="p-2-39" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <strong className="text-white font-semibold">Strategy 1: Select the earliest starting activity</strong>
        </p>
        <p key="p-2-41" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Activity A: (1, 4)
        </p>
        <p key="p-2-43" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          You may select C: (3, 5) only if the previous activity ends at or before the next activity starts. Here, C starts at 3, so it overlaps with A. You could then select D.
        </p>
        <p key="p-2-45" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Total: 2 activities.
        </p>
        <p key="p-2-47" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <strong className="text-white font-semibold">Strategy 2: Select the earliest finishing activity</strong>
        </p>
        <p key="p-2-49" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Select B: (2, 3).
        </p>
        <p key="p-2-51" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Then select C: (3, 5).
        </p>
        <p key="p-2-53" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Then select D: (5, 7).
        </p>
        <p key="p-2-55" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Total: 3 activities.
        </p>
        <p key="p-2-57" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          The second strategy gives the optimal solution for this example.
        </p>
        <h4 key="h4-2-59" className="text-base font-semibold text-white mt-6 mb-2 flex items-center gap-2">
          <span className="text-amber-500 font-mono">▸</span>
          Why does the greedy choice property matter?
        </h4>
        <p key="p-2-61" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          It helps us establish that a locally optimal decision can safely become part of the final solution.
        </p>
        <p key="p-2-63" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          However, the property does not apply to every optimization problem. We must prove that the particular greedy choice is safe.
        </p>
      </div>
    )
  },
  {
    id: 3,
    title: "3. Optimal Substructure",
    category: "Core Principles",
    content: (
      <div className="space-y-4">
        <p key="p-3-2" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Optimal substructure is another fundamental concept in algorithm design.
        </p>
        <p key="p-3-4" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          A problem has optimal substructure if an optimal solution to the complete problem contains optimal solutions to its smaller subproblems.
        </p>
        <p key="p-3-6" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Consider the activity selection problem.
        </p>
        <p key="p-3-8" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Suppose we select activity A, which ends at time 3.
        </p>
        <p key="p-3-10" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Now the remaining problem becomes:
        </p>
        <p key="p-3-12" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Find the maximum number of non-overlapping activities that start at or after time 3.
        </p>
        <p key="p-3-14" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          We have reduced the original problem into a smaller problem.
        </p>
        <p key="p-3-16" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          If our solution for the remaining activities is not optimal, then the complete solution cannot be optimal either.
        </p>
        <p key="p-3-18" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          This is the idea of optimal substructure.
        </p>
        <h4 key="h4-3-20" className="text-base font-semibold text-white mt-6 mb-2 flex items-center gap-2">
          <span className="text-amber-500 font-mono">▸</span>
          Example: Shortest Path
        </h4>
        <p key="p-3-22" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Suppose the shortest route from A to D is:
        </p>
        <p key="p-3-24" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          A → B → C → D
        </p>
        <p key="p-3-26" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          If this route is genuinely the shortest path, then the subpath:
        </p>
        <p key="p-3-28" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          A → B → C
        </p>
        <p key="p-3-30" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          must also be a shortest path from A to C under the same graph and weight assumptions.
        </p>
        <p key="p-3-32" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Otherwise, if a shorter A-to-C path existed, we could replace that part and obtain a shorter A-to-D route.
        </p>
        <h4 key="h4-3-34" className="text-base font-semibold text-white mt-6 mb-2 flex items-center gap-2">
          <span className="text-amber-500 font-mono">▸</span>
          Greedy Algorithms vs Optimal Substructure
        </h4>
        <p key="p-3-36" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Optimal substructure appears in many algorithmic techniques, including:
        </p>
        <ul key="ul-3-41" className="my-3 space-y-1.5 pl-2">
          <li key="li-3-0" className="flex items-start gap-2 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 shrink-0"></span>
            <span>Greedy algorithms</span>
          </li>
          <li key="li-3-1" className="flex items-start gap-2 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 shrink-0"></span>
            <span>Dynamic programming</span>
          </li>
          <li key="li-3-2" className="flex items-start gap-2 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 shrink-0"></span>
            <span>Divide and conquer</span>
          </li>
        </ul>
        <p key="p-3-42" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          But there is an important distinction.
        </p>
        <p key="p-3-44" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <strong className="text-white font-semibold">Optimal substructure alone does not guarantee that a greedy algorithm will work.</strong>
        </p>
        <p key="p-3-46" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          A problem may have optimal substructure and still require dynamic programming because an immediate greedy choice may eliminate the globally optimal solution.
        </p>
      </div>
    )
  },
  {
    id: 4,
    title: "4. Proof of Greedy Correctness (Exchange, Induction, Stays-Ahead)",
    category: "Theoretical Proofs",
    content: (
      <div className="space-y-4">
        <p key="p-4-2" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Writing a greedy algorithm is only part of solving a problem.
        </p>
        <p key="p-4-4" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          In technical interviews and advanced algorithm design, you should be able to explain why it is correct.
        </p>
        <p key="p-4-6" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          There are several important proof techniques.
        </p>
        <h3 key="h3-4-8" className="text-lg md:text-xl font-bold text-amber-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-amber-400"></span>
          4.1 Exchange Argument
        </h3>
        <p key="p-4-10" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          The exchange argument proves that a greedy choice can be included in some optimal solution without making that solution worse.
        </p>
        <p key="p-4-12" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Consider activity selection.
        </p>
        <p key="p-4-14" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          The greedy algorithm chooses the activity that finishes earliest.
        </p>
        <p key="p-4-16" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Let:
        </p>
        <ul key="ul-4-20" className="my-3 space-y-1.5 pl-2">
          <li key="li-4-0" className="flex items-start gap-2 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 shrink-0"></span>
            <span>G = the activity selected by the greedy algorithm.</span>
          </li>
          <li key="li-4-1" className="flex items-start gap-2 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 shrink-0"></span>
            <span>O = the first activity selected by an optimal solution.</span>
          </li>
        </ul>
        <p key="p-4-21" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Because G has the earliest finishing time:
        </p>
        <div key="eq-4-24" className="my-3 p-3 rounded-lg bg-slate-950 border border-slate-800 font-mono text-xs text-amber-300 text-center overflow-x-auto">
          {"finish(G) \\leq finish(O) \\"}
        </div>
        <p key="p-4-25" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Suppose the optimal solution starts with O.
        </p>
        <p key="p-4-27" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          We can replace O with G.
        </p>
        <p key="p-4-29" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Since G finishes no later than O, every activity that was compatible with O remains compatible with G.
        </p>
        <p key="p-4-31" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Therefore, replacing O with G does not reduce the number of activities.
        </p>
        <p key="p-4-33" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          This proves that there is an optimal solution containing the greedy choice.
        </p>
        <p key="p-4-35" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          We can then apply the same reasoning to the remaining activities.
        </p>
        <p key="p-4-37" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          That establishes the correctness of the strategy.
        </p>
        <h3 key="h3-4-39" className="text-lg md:text-xl font-bold text-amber-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-amber-400"></span>
          4.2 Inductive Proof
        </h3>
        <p key="p-4-41" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Induction can be used to prove that the greedy algorithm produces an optimal answer for problems of increasing size.
        </p>
        <p key="p-4-43" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          The structure is:
        </p>
        <p key="p-4-45" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <strong className="text-white font-semibold">Base case:</strong> Prove that the algorithm is correct for the smallest input.
        </p>
        <p key="p-4-47" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <strong className="text-white font-semibold">Inductive hypothesis:</strong> Assume the algorithm correctly solves smaller instances of the problem.
        </p>
        <p key="p-4-49" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <strong className="text-white font-semibold">Inductive step:</strong> Show that after making the greedy choice, the remaining problem is a smaller instance and that solving it optimally produces an optimal solution for the original problem.
        </p>
        <h3 key="h3-4-51" className="text-lg md:text-xl font-bold text-amber-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-amber-400"></span>
          4.3 Greedy Stays Ahead
        </h3>
        <p key="p-4-53" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          This technique compares the greedy algorithm with any competing solution after every step.
        </p>
        <p key="p-4-55" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          The idea is that greedy performs at least as well as the competing strategy at each stage according to some measurable quantity.
        </p>
        <p key="p-4-57" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          For activity selection, we can compare the finishing times of the selected activities.
        </p>
        <p key="p-4-59" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          If the greedy algorithm&apos;s first selected activity finishes no later than the first activity in an optimal solution, its second selected activity can also be chosen no later than the corresponding activity in the optimal solution, and so on.
        </p>
        <p key="p-4-61" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          This shows that greedy never falls behind.
        </p>
        <h3 key="h3-4-63" className="text-lg md:text-xl font-bold text-amber-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-amber-400"></span>
          4.4 When to Use These Proofs
        </h3>
        <div key="table-4-71" className="my-5 overflow-x-auto rounded-xl border border-slate-800 shadow-md">
          <table className="w-full text-xs text-left border-collapse">
            <thead>
              <tr className="bg-slate-900 border-b border-slate-800 text-amber-400 font-mono">
                <th key="th-4-0" className="p-3 font-semibold">Proof technique</th>
                <th key="th-4-1" className="p-3 font-semibold">Common use</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-850 bg-slate-950/60 font-sans">
              <tr key="tr-4-0" className="hover:bg-slate-900/40 transition-colors">
                <td key="td-4-0-0" className="p-3 text-slate-300 font-mono text-slate-200">Exchange argument</td>
                <td key="td-4-0-1" className="p-3 text-slate-300 ">Activity selection, fractional knapsack</td>
              </tr>
              <tr key="tr-4-1" className="hover:bg-slate-900/40 transition-colors">
                <td key="td-4-1-0" className="p-3 text-slate-300 font-mono text-slate-200">Induction</td>
                <td key="td-4-1-1" className="p-3 text-slate-300 ">Recursive greedy constructions</td>
              </tr>
              <tr key="tr-4-2" className="hover:bg-slate-900/40 transition-colors">
                <td key="td-4-2-0" className="p-3 text-slate-300 font-mono text-slate-200">Stays-ahead argument</td>
                <td key="td-4-2-1" className="p-3 text-slate-300 ">Scheduling and interval selection</td>
              </tr>
              <tr key="tr-4-3" className="hover:bg-slate-900/40 transition-colors">
                <td key="td-4-3-0" className="p-3 text-slate-300 font-mono text-slate-200">Cut-and-paste argument</td>
                <td key="td-4-3-1" className="p-3 text-slate-300 ">Optimization and graph algorithms</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p key="p-4-72" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <strong className="text-white font-semibold">Interview tip:</strong> Never say an algorithm is correct only because it works for your sample input. Explain why the greedy choice cannot make the final solution worse.
        </p>
      </div>
    )
  },
  {
    id: 5,
    title: "5. Activity Selection Problem",
    category: "Interval Problems",
    content: (
      <div className="space-y-4">
        <p key="p-5-2" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          The Activity Selection Problem is a classic greedy algorithm problem.
        </p>
        <h3 key="h3-5-4" className="text-lg md:text-xl font-bold text-amber-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-amber-400"></span>
          5.1 Problem Statement
        </h3>
        <p key="p-5-6" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          You are given N activities.
        </p>
        <p key="p-5-8" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Each activity has:
        </p>
        <ul key="ul-5-12" className="my-3 space-y-1.5 pl-2">
          <li key="li-5-0" className="flex items-start gap-2 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 shrink-0"></span>
            <span>A starting time.</span>
          </li>
          <li key="li-5-1" className="flex items-start gap-2 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 shrink-0"></span>
            <span>A finishing time.</span>
          </li>
        </ul>
        <p key="p-5-13" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Only one activity can be performed at a time.
        </p>
        <p key="p-5-15" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Your task is to select the maximum number of non-overlapping activities.
        </p>
        <h4 key="h4-5-17" className="text-base font-semibold text-white mt-6 mb-2 flex items-center gap-2">
          <span className="text-amber-500 font-mono">▸</span>
          Example
        </h4>
        <div key="code-5-29" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-amber-500/30 border border-amber-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-slate-400 font-sans">Module 16 Greedy Algorithms</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`Activities:

A = (1, 2)
B = (3, 4)
C = (0, 6)
D = (5, 7)
E = (8, 9)
F = (5, 9)`}</code>
          </pre>
        </div>
        <p key="p-5-30" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          We need to select as many compatible activities as possible.
        </p>
        <h4 key="h4-5-32" className="text-base font-semibold text-white mt-6 mb-2 flex items-center gap-2">
          <span className="text-amber-500 font-mono">▸</span>
          5.2 Greedy Strategy
        </h4>
        <p key="p-5-34" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          The correct strategy is:
        </p>
        <p key="p-5-36" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <strong className="text-white font-semibold">Always select the activity that finishes earliest among the remaining compatible activities.</strong>
        </p>
        <p key="p-5-38" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Why?
        </p>
        <p key="p-5-40" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          An activity that finishes early gives us more opportunities to select other activities.
        </p>
        <h4 key="h4-5-42" className="text-base font-semibold text-white mt-6 mb-2 flex items-center gap-2">
          <span className="text-amber-500 font-mono">▸</span>
          5.3 Algorithm
        </h4>
        <ol key="ol-5-50" className="my-3 space-y-2 pl-2">
          <li key="oli-5-0" className="flex items-start gap-2.5 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-5 h-5 rounded-full bg-slate-800 text-amber-400 font-mono text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5 border border-slate-700">
              1
            </span>
            <span>Sort all activities by finishing time.</span>
          </li>
          <li key="oli-5-1" className="flex items-start gap-2.5 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-5 h-5 rounded-full bg-slate-800 text-amber-400 font-mono text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5 border border-slate-700">
              2
            </span>
            <span>Select the first activity.</span>
          </li>
          <li key="oli-5-2" className="flex items-start gap-2.5 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-5 h-5 rounded-full bg-slate-800 text-amber-400 font-mono text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5 border border-slate-700">
              3
            </span>
            <span>Store its finishing time.</span>
          </li>
          <li key="oli-5-3" className="flex items-start gap-2.5 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-5 h-5 rounded-full bg-slate-800 text-amber-400 font-mono text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5 border border-slate-700">
              4
            </span>
            <span>Check the next activity.</span>
          </li>
          <li key="oli-5-4" className="flex items-start gap-2.5 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-5 h-5 rounded-full bg-slate-800 text-amber-400 font-mono text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5 border border-slate-700">
              5
            </span>
            <span>If its starting time is greater than or equal to the previous selected activity&apos;s finishing time, select it.</span>
          </li>
          <li key="oli-5-5" className="flex items-start gap-2.5 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-5 h-5 rounded-full bg-slate-800 text-amber-400 font-mono text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5 border border-slate-700">
              6
            </span>
            <span>Continue until all activities have been checked.</span>
          </li>
        </ol>
        <h4 key="h4-5-51" className="text-base font-semibold text-white mt-6 mb-2 flex items-center gap-2">
          <span className="text-amber-500 font-mono">▸</span>
          5.4 Java Implementation
        </h4>
        <div key="code-5-100" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-amber-500/30 border border-amber-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-slate-400 font-sans">Module 16 Greedy Algorithms</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`import java.util.*;

public class ActivitySelection {

    public static int maxActivities(int[][] activities) {

        // Sort activities by finishing time
        Arrays.sort(
            activities,
            Comparator.comparingInt(a -> a[1])
        );

        int count = 0;
        int lastFinish = Integer.MIN_VALUE;

        for (int[] activity : activities) {

            int start = activity[0];
            int finish = activity[1];

            // Select if it does not overlap
            if (start >= lastFinish) {

                count++;
                lastFinish = finish;
            }
        }

        return count;
    }

    public static void main(String[] args) {

        int[][] activities = {
            {1, 2},
            {3, 4},
            {0, 6},
            {5, 7},
            {8, 9},
            {5, 9}
        };

        System.out.println(maxActivities(activities));
    }
}`}</code>
          </pre>
        </div>
        <p key="p-5-101" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Output:
        </p>
        <div key="code-5-106" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-amber-500/30 border border-amber-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-slate-400 font-sans">Module 16 Greedy Algorithms</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`4`}</code>
          </pre>
        </div>
        <h4 key="h4-5-107" className="text-base font-semibold text-white mt-6 mb-2 flex items-center gap-2">
          <span className="text-amber-500 font-mono">▸</span>
          5.5 Dry Run
        </h4>
        <p key="p-5-109" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          After sorting by finishing time:
        </p>
        <div key="table-5-119" className="my-5 overflow-x-auto rounded-xl border border-slate-800 shadow-md">
          <table className="w-full text-xs text-left border-collapse">
            <thead>
              <tr className="bg-slate-900 border-b border-slate-800 text-amber-400 font-mono">
                <th key="th-5-0" className="p-3 font-semibold">Activity</th>
                <th key="th-5-1" className="p-3 font-semibold">Start</th>
                <th key="th-5-2" className="p-3 font-semibold">Finish</th>
                <th key="th-5-3" className="p-3 font-semibold">Decision</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-850 bg-slate-950/60 font-sans">
              <tr key="tr-5-0" className="hover:bg-slate-900/40 transition-colors">
                <td key="td-5-0-0" className="p-3 text-slate-300 font-mono text-slate-200">A</td>
                <td key="td-5-0-1" className="p-3 text-slate-300 ">1</td>
                <td key="td-5-0-2" className="p-3 text-slate-300 ">2</td>
                <td key="td-5-0-3" className="p-3 text-slate-300 ">Select</td>
              </tr>
              <tr key="tr-5-1" className="hover:bg-slate-900/40 transition-colors">
                <td key="td-5-1-0" className="p-3 text-slate-300 font-mono text-slate-200">B</td>
                <td key="td-5-1-1" className="p-3 text-slate-300 ">3</td>
                <td key="td-5-1-2" className="p-3 text-slate-300 ">4</td>
                <td key="td-5-1-3" className="p-3 text-slate-300 ">Select</td>
              </tr>
              <tr key="tr-5-2" className="hover:bg-slate-900/40 transition-colors">
                <td key="td-5-2-0" className="p-3 text-slate-300 font-mono text-slate-200">C</td>
                <td key="td-5-2-1" className="p-3 text-slate-300 ">0</td>
                <td key="td-5-2-2" className="p-3 text-slate-300 ">6</td>
                <td key="td-5-2-3" className="p-3 text-slate-300 ">Skip</td>
              </tr>
              <tr key="tr-5-3" className="hover:bg-slate-900/40 transition-colors">
                <td key="td-5-3-0" className="p-3 text-slate-300 font-mono text-slate-200">D</td>
                <td key="td-5-3-1" className="p-3 text-slate-300 ">5</td>
                <td key="td-5-3-2" className="p-3 text-slate-300 ">7</td>
                <td key="td-5-3-3" className="p-3 text-slate-300 ">Select</td>
              </tr>
              <tr key="tr-5-4" className="hover:bg-slate-900/40 transition-colors">
                <td key="td-5-4-0" className="p-3 text-slate-300 font-mono text-slate-200">E</td>
                <td key="td-5-4-1" className="p-3 text-slate-300 ">8</td>
                <td key="td-5-4-2" className="p-3 text-slate-300 ">9</td>
                <td key="td-5-4-3" className="p-3 text-slate-300 ">Select</td>
              </tr>
              <tr key="tr-5-5" className="hover:bg-slate-900/40 transition-colors">
                <td key="td-5-5-0" className="p-3 text-slate-300 font-mono text-slate-200">F</td>
                <td key="td-5-5-1" className="p-3 text-slate-300 ">5</td>
                <td key="td-5-5-2" className="p-3 text-slate-300 ">9</td>
                <td key="td-5-5-3" className="p-3 text-slate-300 ">Skip</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p key="p-5-120" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Selected activities:
        </p>
        <div key="code-5-125" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-amber-500/30 border border-amber-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-slate-400 font-sans">Module 16 Greedy Algorithms</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`A → B → D → E`}</code>
          </pre>
        </div>
        <p key="p-5-126" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Total activities:
        </p>
        <div key="code-5-131" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-amber-500/30 border border-amber-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-slate-400 font-sans">Module 16 Greedy Algorithms</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`4`}</code>
          </pre>
        </div>
        <h4 key="h4-5-132" className="text-base font-semibold text-white mt-6 mb-2 flex items-center gap-2">
          <span className="text-amber-500 font-mono">▸</span>
          5.6 Complexity Analysis
        </h4>
        <p key="p-5-134" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Let N represent the number of activities.
        </p>
        <div key="table-5-142" className="my-5 overflow-x-auto rounded-xl border border-slate-800 shadow-md">
          <table className="w-full text-xs text-left border-collapse">
            <thead>
              <tr className="bg-slate-900 border-b border-slate-800 text-amber-400 font-mono">
                <th key="th-5-0" className="p-3 font-semibold">Operation</th>
                <th key="th-5-1" className="p-3 font-semibold">Complexity</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-850 bg-slate-950/60 font-sans">
              <tr key="tr-5-0" className="hover:bg-slate-900/40 transition-colors">
                <td key="td-5-0-0" className="p-3 text-slate-300 font-mono text-slate-200">Sorting</td>
                <td key="td-5-0-1" className="p-3 text-slate-300 ">O(N log N)</td>
              </tr>
              <tr key="tr-5-1" className="hover:bg-slate-900/40 transition-colors">
                <td key="td-5-1-0" className="p-3 text-slate-300 font-mono text-slate-200">Traversal</td>
                <td key="td-5-1-1" className="p-3 text-slate-300 ">O(N)</td>
              </tr>
              <tr key="tr-5-2" className="hover:bg-slate-900/40 transition-colors">
                <td key="td-5-2-0" className="p-3 text-slate-300 font-mono text-slate-200">Total time</td>
                <td key="td-5-2-1" className="p-3 text-slate-300 ">O(N log N)</td>
              </tr>
              <tr key="tr-5-3" className="hover:bg-slate-900/40 transition-colors">
                <td key="td-5-3-0" className="p-3 text-slate-300 font-mono text-slate-200">Auxiliary space</td>
                <td key="td-5-3-1" className="p-3 text-slate-300 ">Depends on sorting implementation</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p key="p-5-143" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          The algorithm is efficient because it avoids checking all possible subsets of activities.
        </p>
      </div>
    )
  },
  {
    id: 6,
    title: "6. Interval Scheduling Paradigms",
    category: "Interval Problems",
    content: (
      <div className="space-y-4">
        <p key="p-6-2" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Interval scheduling is a broader problem category involving time intervals.
        </p>
        <p key="p-6-4" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          An interval is usually represented as:
        </p>
        <div key="eq-6-7" className="my-3 p-3 rounded-lg bg-slate-950 border border-slate-800 font-mono text-xs text-amber-300 text-center overflow-x-auto">
          {"[start, end] \\"}
        </div>
        <p key="p-6-8" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          For example:
        </p>
        <div key="code-6-15" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-amber-500/30 border border-amber-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-slate-400 font-sans">Module 16 Greedy Algorithms</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`[1, 4]
[2, 6]
[7, 9]`}</code>
          </pre>
        </div>
        <p key="p-6-16" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Interval problems appear in:
        </p>
        <ul key="ul-6-24" className="my-3 space-y-1.5 pl-2">
          <li key="li-6-0" className="flex items-start gap-2 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 shrink-0"></span>
            <span>Meeting scheduling</span>
          </li>
          <li key="li-6-1" className="flex items-start gap-2 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 shrink-0"></span>
            <span>CPU scheduling</span>
          </li>
          <li key="li-6-2" className="flex items-start gap-2 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 shrink-0"></span>
            <span>Booking systems</span>
          </li>
          <li key="li-6-3" className="flex items-start gap-2 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 shrink-0"></span>
            <span>Resource allocation</span>
          </li>
          <li key="li-6-4" className="flex items-start gap-2 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 shrink-0"></span>
            <span>Event management</span>
          </li>
          <li key="li-6-5" className="flex items-start gap-2 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 shrink-0"></span>
            <span>Operating systems</span>
          </li>
        </ul>
        <p key="p-6-25" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          The same interval data can represent different problems, and each problem may require a different greedy strategy.
        </p>
        <h3 key="h3-6-27" className="text-lg md:text-xl font-bold text-amber-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-amber-400"></span>
          6.1 Maximum Number of Non-Overlapping Intervals
        </h3>
        <p key="p-6-29" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          This is essentially the Activity Selection Problem.
        </p>
        <p key="p-6-31" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Strategy:
        </p>
        <ul key="ul-6-35" className="my-3 space-y-1.5 pl-2">
          <li key="li-6-0" className="flex items-start gap-2 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 shrink-0"></span>
            <span>Sort by finishing time.</span>
          </li>
          <li key="li-6-1" className="flex items-start gap-2 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 shrink-0"></span>
            <span>Select the earliest finishing compatible interval.</span>
          </li>
        </ul>
        <h3 key="h3-6-36" className="text-lg md:text-xl font-bold text-amber-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-amber-400"></span>
          6.2 Minimum Number of Resources for All Intervals
        </h3>
        <p key="p-6-38" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Suppose you have several meetings.
        </p>
        <p key="p-6-40" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          If two meetings overlap, they cannot use the same room.
        </p>
        <p key="p-6-42" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Your task is to determine the minimum number of rooms required to schedule every meeting.
        </p>
        <p key="p-6-44" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          This is different from activity selection.
        </p>
        <p key="p-6-46" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          In activity selection, we discard incompatible activities.
        </p>
        <p key="p-6-48" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          In room allocation, we must accommodate every meeting.
        </p>
        <p key="p-6-50" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          A common greedy strategy uses a minimum heap to track meeting end times.
        </p>
        <p key="p-6-52" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          We will study this in the Meeting Rooms section.
        </p>
      </div>
    )
  },
  {
    id: 7,
    title: "7. Interval Merging (LeetCode 56)",
    category: "Interval Problems",
    content: (
      <div className="space-y-4">
        <p key="p-7-2" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Interval merging is a very common interview problem.
        </p>
        <h3 key="h3-7-4" className="text-lg md:text-xl font-bold text-amber-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-amber-400"></span>
          7.1 Problem Statement
        </h3>
        <p key="p-7-6" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          You are given a collection of intervals.
        </p>
        <p key="p-7-8" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Some intervals overlap.
        </p>
        <p key="p-7-10" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Your task is to combine overlapping intervals into one interval.
        </p>
        <h4 key="h4-7-12" className="text-base font-semibold text-white mt-6 mb-2 flex items-center gap-2">
          <span className="text-amber-500 font-mono">▸</span>
          Example
        </h4>
        <p key="p-7-14" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Input:
        </p>
        <div key="code-7-23" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-amber-500/30 border border-amber-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-slate-400 font-sans">Module 16 Greedy Algorithms</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`[[1, 3],
 [2, 6],
 [8, 10],
 [9, 12],
 [15, 18]]`}</code>
          </pre>
        </div>
        <p key="p-7-24" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          The intervals [1, 3] and [2, 6] overlap.
        </p>
        <p key="p-7-26" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Their merged interval becomes:
        </p>
        <div key="code-7-31" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-amber-500/30 border border-amber-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-slate-400 font-sans">Module 16 Greedy Algorithms</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`[1, 6]`}</code>
          </pre>
        </div>
        <p key="p-7-32" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Similarly:
        </p>
        <div key="code-7-37" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-amber-500/30 border border-amber-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-slate-400 font-sans">Module 16 Greedy Algorithms</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`[8, 10] and [9, 12]`}</code>
          </pre>
        </div>
        <p key="p-7-38" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          become:
        </p>
        <div key="code-7-43" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-amber-500/30 border border-amber-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-slate-400 font-sans">Module 16 Greedy Algorithms</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`[8, 12]`}</code>
          </pre>
        </div>
        <p key="p-7-44" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Final output:
        </p>
        <div key="code-7-51" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-amber-500/30 border border-amber-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-slate-400 font-sans">Module 16 Greedy Algorithms</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`[[1, 6],
 [8, 12],
 [15, 18]]`}</code>
          </pre>
        </div>
        <p key="p-7-52" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <strong className="text-white font-semibold">Visual understanding</strong>
        </p>
        <p key="p-7-54" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Before merging
        </p>
        <p key="p-7-56" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          After merging
        </p>
        <h3 key="h3-7-58" className="text-lg md:text-xl font-bold text-amber-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-amber-400"></span>
          7.2 Greedy Strategy
        </h3>
        <p key="p-7-60" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          The strategy is:
        </p>
        <ol key="ol-7-67" className="my-3 space-y-2 pl-2">
          <li key="oli-7-0" className="flex items-start gap-2.5 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-5 h-5 rounded-full bg-slate-800 text-amber-400 font-mono text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5 border border-slate-700">
              1
            </span>
            <span>Sort intervals by starting time.</span>
          </li>
          <li key="oli-7-1" className="flex items-start gap-2.5 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-5 h-5 rounded-full bg-slate-800 text-amber-400 font-mono text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5 border border-slate-700">
              2
            </span>
            <span>Take the first interval.</span>
          </li>
          <li key="oli-7-2" className="flex items-start gap-2.5 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-5 h-5 rounded-full bg-slate-800 text-amber-400 font-mono text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5 border border-slate-700">
              3
            </span>
            <span>Compare the next interval with the current merged interval.</span>
          </li>
          <li key="oli-7-3" className="flex items-start gap-2.5 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-5 h-5 rounded-full bg-slate-800 text-amber-400 font-mono text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5 border border-slate-700">
              4
            </span>
            <span>If they overlap, extend the current interval&apos;s ending time.</span>
          </li>
          <li key="oli-7-4" className="flex items-start gap-2.5 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-5 h-5 rounded-full bg-slate-800 text-amber-400 font-mono text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5 border border-slate-700">
              5
            </span>
            <span>Otherwise, save the current interval and start a new one.</span>
          </li>
        </ol>
        <p key="p-7-68" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Two intervals overlap when:
        </p>
        <div key="eq-7-71" className="my-3 p-3 rounded-lg bg-slate-950 border border-slate-800 font-mono text-xs text-amber-300 text-center overflow-x-auto">
          {"nextStart \\leq currentEnd \\"}
        </div>
        <p key="p-7-72" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          For closed intervals, equality means that the intervals share an endpoint.
        </p>
        <h3 key="h3-7-74" className="text-lg md:text-xl font-bold text-amber-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-amber-400"></span>
          7.3 Java Implementation
        </h3>
        <div key="code-7-142" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-amber-500/30 border border-amber-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-slate-400 font-sans">Module 16 Greedy Algorithms</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`import java.util.*;

public class MergeIntervals {

    public static int[][] merge(int[][] intervals) {

        if (intervals == null || intervals.length == 0) {
            return new int[0][2];
        }

        // Sort by starting time
        Arrays.sort(
            intervals,
            Comparator.comparingInt(a -> a[0])
        );

        List<int[]> result = new ArrayList<>();

        int[] current = intervals[0];

        for (int i = 1; i < intervals.length; i++) {

            int[] next = intervals[i];

            if (next[0] <= current[1]) {

                // Overlapping: extend ending time
                current[1] = Math.max(
                    current[1],
                    next[1]
                );

            } else {

                // No overlap: save current interval
                result.add(current);
                current = next;
            }
        }

        result.add(current);

        return result.toArray(new int[result.size()][]);
    }

    public static void main(String[] args) {

        int[][] intervals = {
            {1, 3},
            {2, 6},
            {8, 10},
            {9, 12},
            {15, 18}
        };

        int[][] answer = merge(intervals);

        for (int[] interval : answer) {
            System.out.println(
                Arrays.toString(interval)
            );
        }
    }
}`}</code>
          </pre>
        </div>
        <p key="p-7-143" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Output:
        </p>
        <div key="code-7-150" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-amber-500/30 border border-amber-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-slate-400 font-sans">Module 16 Greedy Algorithms</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`[1, 6]
[8, 12]
[15, 18]`}</code>
          </pre>
        </div>
        <h3 key="h3-7-151" className="text-lg md:text-xl font-bold text-amber-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-amber-400"></span>
          7.4 Why Does This Work?
        </h3>
        <p key="p-7-153" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Sorting by starting time ensures that we process intervals from left to right.
        </p>
        <p key="p-7-155" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          If the next interval starts before or at the current ending time, it overlaps with the current merged interval.
        </p>
        <p key="p-7-157" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Because the intervals are sorted, we do not need to compare against every previous interval.
        </p>
        <p key="p-7-159" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          We only need to update the current merged interval.
        </p>
        <h4 key="h4-7-161" className="text-base font-semibold text-white mt-6 mb-2 flex items-center gap-2">
          <span className="text-amber-500 font-mono">▸</span>
          Complexity
        </h4>
        <ul key="ul-7-167" className="my-3 space-y-1.5 pl-2">
          <li key="li-7-0" className="flex items-start gap-2 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 shrink-0"></span>
            <span>Sorting: O(N log N)</span>
          </li>
          <li key="li-7-1" className="flex items-start gap-2 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 shrink-0"></span>
            <span>Traversal: O(N)</span>
          </li>
          <li key="li-7-2" className="flex items-start gap-2 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 shrink-0"></span>
            <span>Total: O(N log N)</span>
          </li>
          <li key="li-7-3" className="flex items-start gap-2 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 shrink-0"></span>
            <span>Result storage: O(N)</span>
          </li>
        </ul>
      </div>
    )
  },
  {
    id: 8,
    title: "8. Minimum Number of Platforms (Railway Sweep)",
    category: "Interval Problems",
    content: (
      <div className="space-y-4">
        <p key="p-8-2" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          This is a classic railway scheduling problem.
        </p>
        <h3 key="h3-8-4" className="text-lg md:text-xl font-bold text-amber-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-amber-400"></span>
          8.1 Problem Statement
        </h3>
        <p key="p-8-6" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          A railway station has multiple trains arriving and departing.
        </p>
        <p key="p-8-8" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          A platform can accommodate only one train at a time.
        </p>
        <p key="p-8-10" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          You are given:
        </p>
        <ul key="ul-8-14" className="my-3 space-y-1.5 pl-2">
          <li key="li-8-0" className="flex items-start gap-2 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 shrink-0"></span>
            <span>Arrival times.</span>
          </li>
          <li key="li-8-1" className="flex items-start gap-2 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 shrink-0"></span>
            <span>Departure times.</span>
          </li>
        </ul>
        <p key="p-8-15" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Find the minimum number of platforms required so that no train needs to wait for a platform.
        </p>
        <h4 key="h4-8-17" className="text-base font-semibold text-white mt-6 mb-2 flex items-center gap-2">
          <span className="text-amber-500 font-mono">▸</span>
          Example
        </h4>
        <div key="code-8-26" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-amber-500/30 border border-amber-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-slate-400 font-sans">Module 16 Greedy Algorithms</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`Arrival:
[900, 940, 950, 1100, 1500, 1800]

Departure:
[910, 1200, 1120, 1130, 1900, 2000]`}</code>
          </pre>
        </div>
        <p key="p-8-27" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          What is the minimum number of platforms required?
        </p>
        <p key="p-8-29" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          At 11:00, three trains may simultaneously occupy platforms:
        </p>
        <ul key="ul-8-34" className="my-3 space-y-1.5 pl-2">
          <li key="li-8-0" className="flex items-start gap-2 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 shrink-0"></span>
            <span>Train arriving at 9:40 and departing at 12:00.</span>
          </li>
          <li key="li-8-1" className="flex items-start gap-2 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 shrink-0"></span>
            <span>Train arriving at 9:50 and departing at 11:20.</span>
          </li>
          <li key="li-8-2" className="flex items-start gap-2 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 shrink-0"></span>
            <span>Train arriving at 11:00 and departing at 11:30.</span>
          </li>
        </ul>
        <p key="p-8-35" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Therefore, at least three platforms are required.
        </p>
        <h3 key="h3-8-37" className="text-lg md:text-xl font-bold text-amber-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-amber-400"></span>
          8.2 Greedy Strategy: Two Pointers
        </h3>
        <p key="p-8-39" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          We can solve this problem using two sorted arrays.
        </p>
        <ul key="ul-8-46" className="my-3 space-y-1.5 pl-2">
          <li key="li-8-0" className="flex items-start gap-2 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 shrink-0"></span>
            <span>Sort arrival times.</span>
          </li>
          <li key="li-8-1" className="flex items-start gap-2 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 shrink-0"></span>
            <span>Sort departure times.</span>
          </li>
          <li key="li-8-2" className="flex items-start gap-2 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 shrink-0"></span>
            <span>Use one pointer for arrivals.</span>
          </li>
          <li key="li-8-3" className="flex items-start gap-2 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 shrink-0"></span>
            <span>Use another pointer for departures.</span>
          </li>
          <li key="li-8-4" className="flex items-start gap-2 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 shrink-0"></span>
            <span>Track how many platforms are occupied.</span>
          </li>
        </ul>
        <p key="p-8-47" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          When a train arrives before or at the next departure time, a new platform is required.
        </p>
        <p key="p-8-49" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          When a train arrives after a departure, an existing platform can be reused.
        </p>
        <p key="p-8-51" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          For the common railway convention, if arrival and departure occur at the same time, we count the arrival first because the departing train has not yet released the platform.
        </p>
        <h3 key="h3-8-53" className="text-lg md:text-xl font-bold text-amber-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-amber-400"></span>
          8.3 Java Implementation
        </h3>
        <div key="code-8-118" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-amber-500/30 border border-amber-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-slate-400 font-sans">Module 16 Greedy Algorithms</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`import java.util.*;

public class MinimumPlatforms {

    public static int findPlatforms(
        int[] arrival,
        int[] departure
    ) {

        int n = arrival.length;

        if (n == 0) {
            return 0;
        }

        Arrays.sort(arrival);
        Arrays.sort(departure);

        int i = 0;
        int j = 0;

        int platforms = 0;
        int maxPlatforms = 0;

        while (i < n) {

            if (arrival[i] <= departure[j]) {

                platforms++;
                maxPlatforms = Math.max(
                    maxPlatforms,
                    platforms
                );

                i++;

            } else {

                platforms--;
                j++;
            }
        }

        return maxPlatforms;
    }

    public static void main(String[] args) {

        int[] arrival = {
            900, 940, 950, 1100, 1500, 1800
        };

        int[] departure = {
            910, 1200, 1120, 1130, 1900, 2000
        };

        System.out.println(
            findPlatforms(arrival, departure)
        );
    }
}`}</code>
          </pre>
        </div>
        <p key="p-8-119" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Output:
        </p>
        <div key="code-8-124" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-amber-500/30 border border-amber-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-slate-400 font-sans">Module 16 Greedy Algorithms</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`3`}</code>
          </pre>
        </div>
        <h4 key="h4-8-125" className="text-base font-semibold text-white mt-6 mb-2 flex items-center gap-2">
          <span className="text-amber-500 font-mono">▸</span>
          8.4 Complexity
        </h4>
        <div key="table-8-133" className="my-5 overflow-x-auto rounded-xl border border-slate-800 shadow-md">
          <table className="w-full text-xs text-left border-collapse">
            <thead>
              <tr className="bg-slate-900 border-b border-slate-800 text-amber-400 font-mono">
                <th key="th-8-0" className="p-3 font-semibold">Operation</th>
                <th key="th-8-1" className="p-3 font-semibold">Complexity</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-850 bg-slate-950/60 font-sans">
              <tr key="tr-8-0" className="hover:bg-slate-900/40 transition-colors">
                <td key="td-8-0-0" className="p-3 text-slate-300 font-mono text-slate-200">Sort arrivals</td>
                <td key="td-8-0-1" className="p-3 text-slate-300 ">O(N log N)</td>
              </tr>
              <tr key="tr-8-1" className="hover:bg-slate-900/40 transition-colors">
                <td key="td-8-1-0" className="p-3 text-slate-300 font-mono text-slate-200">Sort departures</td>
                <td key="td-8-1-1" className="p-3 text-slate-300 ">O(N log N)</td>
              </tr>
              <tr key="tr-8-2" className="hover:bg-slate-900/40 transition-colors">
                <td key="td-8-2-0" className="p-3 text-slate-300 font-mono text-slate-200">Two-pointer traversal</td>
                <td key="td-8-2-1" className="p-3 text-slate-300 ">O(N)</td>
              </tr>
              <tr key="tr-8-3" className="hover:bg-slate-900/40 transition-colors">
                <td key="td-8-3-0" className="p-3 text-slate-300 font-mono text-slate-200">Total</td>
                <td key="td-8-3-1" className="p-3 text-slate-300 ">O(N log N)</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p key="p-8-134" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          This technique is called a two-pointer or sweep-line approach.
        </p>
      </div>
    )
  },
  {
    id: 9,
    title: "9. Fractional Knapsack (Value/Weight Ratios)",
    category: "Greedy Optimization",
    content: (
      <div className="space-y-4">
        <p key="p-9-2" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Fractional Knapsack is one of the most important examples of a greedy algorithm.
        </p>
        <h3 key="h3-9-4" className="text-lg md:text-xl font-bold text-amber-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-amber-400"></span>
          9.1 Problem Statement
        </h3>
        <p key="p-9-6" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          You are given:
        </p>
        <ul key="ul-9-12" className="my-3 space-y-1.5 pl-2">
          <li key="li-9-0" className="flex items-start gap-2 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 shrink-0"></span>
            <span>N items.</span>
          </li>
          <li key="li-9-1" className="flex items-start gap-2 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 shrink-0"></span>
            <span>A weight for each item.</span>
          </li>
          <li key="li-9-2" className="flex items-start gap-2 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 shrink-0"></span>
            <span>A value for each item.</span>
          </li>
          <li key="li-9-3" className="flex items-start gap-2 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 shrink-0"></span>
            <span>A knapsack with a maximum capacity.</span>
          </li>
        </ul>
        <p key="p-9-13" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          You want to maximize the total value placed inside the knapsack.
        </p>
        <p key="p-9-15" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          The important detail is:
        </p>
        <p key="p-9-17" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <strong className="text-white font-semibold">You are allowed to take fractions of an item.</strong>
        </p>
        <h4 key="h4-9-19" className="text-base font-semibold text-white mt-6 mb-2 flex items-center gap-2">
          <span className="text-amber-500 font-mono">▸</span>
          Example
        </h4>
        <p key="p-9-21" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Knapsack capacity:
        </p>
        <div key="code-9-26" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-amber-500/30 border border-amber-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-slate-400 font-sans">Module 16 Greedy Algorithms</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`50 kg`}</code>
          </pre>
        </div>
        <p key="p-9-27" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Available items:
        </p>
        <div key="table-9-34" className="my-5 overflow-x-auto rounded-xl border border-slate-800 shadow-md">
          <table className="w-full text-xs text-left border-collapse">
            <thead>
              <tr className="bg-slate-900 border-b border-slate-800 text-amber-400 font-mono">
                <th key="th-9-0" className="p-3 font-semibold">Item</th>
                <th key="th-9-1" className="p-3 font-semibold">Weight</th>
                <th key="th-9-2" className="p-3 font-semibold">Value</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-850 bg-slate-950/60 font-sans">
              <tr key="tr-9-0" className="hover:bg-slate-900/40 transition-colors">
                <td key="td-9-0-0" className="p-3 text-slate-300 font-mono text-slate-200">A</td>
                <td key="td-9-0-1" className="p-3 text-slate-300 ">10</td>
                <td key="td-9-0-2" className="p-3 text-slate-300 ">60</td>
              </tr>
              <tr key="tr-9-1" className="hover:bg-slate-900/40 transition-colors">
                <td key="td-9-1-0" className="p-3 text-slate-300 font-mono text-slate-200">B</td>
                <td key="td-9-1-1" className="p-3 text-slate-300 ">20</td>
                <td key="td-9-1-2" className="p-3 text-slate-300 ">100</td>
              </tr>
              <tr key="tr-9-2" className="hover:bg-slate-900/40 transition-colors">
                <td key="td-9-2-0" className="p-3 text-slate-300 font-mono text-slate-200">C</td>
                <td key="td-9-2-1" className="p-3 text-slate-300 ">30</td>
                <td key="td-9-2-2" className="p-3 text-slate-300 ">120</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p key="p-9-35" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          We want to maximize the total value.
        </p>
        <h3 key="h3-9-37" className="text-lg md:text-xl font-bold text-amber-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-amber-400"></span>
          9.2 Greedy Strategy
        </h3>
        <p key="p-9-39" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Calculate the value-to-weight ratio:
        </p>
        <div key="eq-9-42" className="my-3 p-3 rounded-lg bg-slate-950 border border-slate-800 font-mono text-xs text-amber-300 text-center overflow-x-auto">
          {"Ratio = \\frac{Value}{Weight} \\"}
        </div>
        <div key="table-9-48" className="my-5 overflow-x-auto rounded-xl border border-slate-800 shadow-md">
          <table className="w-full text-xs text-left border-collapse">
            <thead>
              <tr className="bg-slate-900 border-b border-slate-800 text-amber-400 font-mono">
                <th key="th-9-0" className="p-3 font-semibold">Item</th>
                <th key="th-9-1" className="p-3 font-semibold">Weight</th>
                <th key="th-9-2" className="p-3 font-semibold">Value</th>
                <th key="th-9-3" className="p-3 font-semibold">Ratio</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-850 bg-slate-950/60 font-sans">
              <tr key="tr-9-0" className="hover:bg-slate-900/40 transition-colors">
                <td key="td-9-0-0" className="p-3 text-slate-300 font-mono text-slate-200">A</td>
                <td key="td-9-0-1" className="p-3 text-slate-300 ">10</td>
                <td key="td-9-0-2" className="p-3 text-slate-300 ">60</td>
                <td key="td-9-0-3" className="p-3 text-slate-300 ">6</td>
              </tr>
              <tr key="tr-9-1" className="hover:bg-slate-900/40 transition-colors">
                <td key="td-9-1-0" className="p-3 text-slate-300 font-mono text-slate-200">B</td>
                <td key="td-9-1-1" className="p-3 text-slate-300 ">20</td>
                <td key="td-9-1-2" className="p-3 text-slate-300 ">100</td>
                <td key="td-9-1-3" className="p-3 text-slate-300 ">5</td>
              </tr>
              <tr key="tr-9-2" className="hover:bg-slate-900/40 transition-colors">
                <td key="td-9-2-0" className="p-3 text-slate-300 font-mono text-slate-200">C</td>
                <td key="td-9-2-1" className="p-3 text-slate-300 ">30</td>
                <td key="td-9-2-2" className="p-3 text-slate-300 ">120</td>
                <td key="td-9-2-3" className="p-3 text-slate-300 ">4</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p key="p-9-49" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          The greedy strategy is:
        </p>
        <p key="p-9-51" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <strong className="text-white font-semibold">Select items in descending order of value-to-weight ratio.</strong>
        </p>
        <p key="p-9-53" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          We first take item A, then B, and finally a fraction of C.
        </p>
        <h4 key="h4-9-55" className="text-base font-semibold text-white mt-6 mb-2 flex items-center gap-2">
          <span className="text-amber-500 font-mono">▸</span>
          Dry Run
        </h4>
        <p key="p-9-57" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Capacity = 50 kg.
        </p>
        <p key="p-9-59" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Step 1:
        </p>
        <p key="p-9-61" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Take all of A.
        </p>
        <div key="code-9-68" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-amber-500/30 border border-amber-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-slate-400 font-sans">Module 16 Greedy Algorithms</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`Weight used = 10 kg
Value gained = 60
Remaining capacity = 40 kg`}</code>
          </pre>
        </div>
        <p key="p-9-69" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Step 2:
        </p>
        <p key="p-9-71" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Take all of B.
        </p>
        <div key="code-9-78" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-amber-500/30 border border-amber-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-slate-400 font-sans">Module 16 Greedy Algorithms</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`Weight used = 20 kg
Value gained = 100
Remaining capacity = 20 kg`}</code>
          </pre>
        </div>
        <p key="p-9-79" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Step 3:
        </p>
        <p key="p-9-81" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Only 20 kg of capacity remains.
        </p>
        <p key="p-9-83" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Take 20 kg out of the 30 kg item C.
        </p>
        <p key="p-9-85" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Its fraction is:
        </p>
        <div key="eq-9-88" className="my-3 p-3 rounded-lg bg-slate-950 border border-slate-800 font-mono text-xs text-amber-300 text-center overflow-x-auto">
          {"\\frac{20}{30}=\\frac{2}{3} \\"}
        </div>
        <p key="p-9-89" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Value gained:
        </p>
        <div key="eq-9-92" className="my-3 p-3 rounded-lg bg-slate-950 border border-slate-800 font-mono text-xs text-amber-300 text-center overflow-x-auto">
          {"120 \\times \\frac{2}{3}=80 \\"}
        </div>
        <p key="p-9-93" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Total value:
        </p>
        <div key="eq-9-96" className="my-3 p-3 rounded-lg bg-slate-950 border border-slate-800 font-mono text-xs text-amber-300 text-center overflow-x-auto">
          {"60+100+80=\\boxed{240} \\"}
        </div>
        <h3 key="h3-9-97" className="text-lg md:text-xl font-bold text-amber-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-amber-400"></span>
          9.3 Java Implementation
        </h3>
        <div key="code-9-173" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-amber-500/30 border border-amber-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-slate-400 font-sans">Module 16 Greedy Algorithms</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`import java.util.*;

class Item {

    int weight;
    int value;

    Item(int weight, int value) {
        this.weight = weight;
        this.value = value;
    }

    double ratio() {
        return (double) value / weight;
    }
}

public class FractionalKnapsack {

    public static double maximumValue(
        Item[] items,
        int capacity
    ) {

        Arrays.sort(
            items,
            (a, b) -> Double.compare(
                b.ratio(),
                a.ratio()
            )
        );

        double totalValue = 0;

        for (Item item : items) {

            if (capacity == 0) {
                break;
            }

            if (item.weight <= capacity) {

                capacity -= item.weight;
                totalValue += item.value;

            } else {

                double fraction =
                    (double) capacity / item.weight;

                totalValue += item.value * fraction;

                capacity = 0;
            }
        }

        return totalValue;
    }

    public static void main(String[] args) {

        Item[] items = {
            new Item(10, 60),
            new Item(20, 100),
            new Item(30, 120)
        };

        System.out.println(
            maximumValue(items, 50)
        );
    }
}`}</code>
          </pre>
        </div>
        <p key="p-9-174" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Output:
        </p>
        <div key="code-9-179" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-amber-500/30 border border-amber-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-slate-400 font-sans">Module 16 Greedy Algorithms</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`240.0`}</code>
          </pre>
        </div>
        <h3 key="h3-9-180" className="text-lg md:text-xl font-bold text-amber-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-amber-400"></span>
          9.4 Why Does Greedy Work Here?
        </h3>
        <p key="p-9-182" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Suppose you have one kilogram of available capacity.
        </p>
        <p key="p-9-184" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Taking the item with the highest value per kilogram gives the maximum possible value for that kilogram.
        </p>
        <p key="p-9-186" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          If you instead use the capacity on an item with a lower ratio, you could replace that portion with an item of a higher ratio and improve the result.
        </p>
        <p key="p-9-188" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          That is the exchange argument behind fractional knapsack.
        </p>
        <h3 key="h3-9-190" className="text-lg md:text-xl font-bold text-amber-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-amber-400"></span>
          9.5 Fractional Knapsack vs 0/1 Knapsack
        </h3>
        <p key="p-9-192" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          This is an important interview distinction.
        </p>
        <div key="table-9-200" className="my-5 overflow-x-auto rounded-xl border border-slate-800 shadow-md">
          <table className="w-full text-xs text-left border-collapse">
            <thead>
              <tr className="bg-slate-900 border-b border-slate-800 text-amber-400 font-mono">
                <th key="th-9-0" className="p-3 font-semibold">Feature</th>
                <th key="th-9-1" className="p-3 font-semibold">Fractional Knapsack</th>
                <th key="th-9-2" className="p-3 font-semibold">0/1 Knapsack</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-850 bg-slate-950/60 font-sans">
              <tr key="tr-9-0" className="hover:bg-slate-900/40 transition-colors">
                <td key="td-9-0-0" className="p-3 text-slate-300 font-mono text-slate-200">Fraction of items allowed</td>
                <td key="td-9-0-1" className="p-3 text-slate-300 ">Yes</td>
                <td key="td-9-0-2" className="p-3 text-slate-300 ">No</td>
              </tr>
              <tr key="tr-9-1" className="hover:bg-slate-900/40 transition-colors">
                <td key="td-9-1-0" className="p-3 text-slate-300 font-mono text-slate-200">Main technique</td>
                <td key="td-9-1-1" className="p-3 text-slate-300 ">Greedy</td>
                <td key="td-9-1-2" className="p-3 text-slate-300 ">Dynamic Programming (general solution)</td>
              </tr>
              <tr key="tr-9-2" className="hover:bg-slate-900/40 transition-colors">
                <td key="td-9-2-0" className="p-3 text-slate-300 font-mono text-slate-200">Typical strategy</td>
                <td key="td-9-2-1" className="p-3 text-slate-300 ">Highest value/weight ratio</td>
                <td key="td-9-2-2" className="p-3 text-slate-300 ">Consider taking or skipping each item</td>
              </tr>
              <tr key="tr-9-3" className="hover:bg-slate-900/40 transition-colors">
                <td key="td-9-3-0" className="p-3 text-slate-300 font-mono text-slate-200">Greedy always optimal?</td>
                <td key="td-9-3-1" className="p-3 text-slate-300 ">Yes</td>
                <td key="td-9-3-2" className="p-3 text-slate-300 ">No</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p key="p-9-201" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          For example, an item weighing 10 kg with a value of 60 may be split into smaller portions in fractional knapsack.
        </p>
        <p key="p-9-203" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          In 0/1 knapsack, you must take the complete item or reject it.
        </p>
      </div>
    )
  },
  {
    id: 10,
    title: "10. Job Sequencing with Deadlines (Disjoint Set Union)",
    category: "Scheduling & DSU",
    content: (
      <div className="space-y-4">
        <h3 key="h3-10-2" className="text-lg md:text-xl font-bold text-amber-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-amber-400"></span>
          10.1 Problem Statement
        </h3>
        <p key="p-10-4" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          You are given multiple jobs.
        </p>
        <p key="p-10-6" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Each job has:
        </p>
        <ul key="ul-10-11" className="my-3 space-y-1.5 pl-2">
          <li key="li-10-0" className="flex items-start gap-2 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 shrink-0"></span>
            <span>A job ID.</span>
          </li>
          <li key="li-10-1" className="flex items-start gap-2 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 shrink-0"></span>
            <span>A deadline.</span>
          </li>
          <li key="li-10-2" className="flex items-start gap-2 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 shrink-0"></span>
            <span>A profit.</span>
          </li>
        </ul>
        <p key="p-10-12" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Each job takes exactly one unit of time.
        </p>
        <p key="p-10-14" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          You can perform only one job in a time slot.
        </p>
        <p key="p-10-16" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Your goal is to maximize total profit while completing every selected job before or at its deadline.
        </p>
        <h4 key="h4-10-18" className="text-base font-semibold text-white mt-6 mb-2 flex items-center gap-2">
          <span className="text-amber-500 font-mono">▸</span>
          Example
        </h4>
        <div key="table-10-27" className="my-5 overflow-x-auto rounded-xl border border-slate-800 shadow-md">
          <table className="w-full text-xs text-left border-collapse">
            <thead>
              <tr className="bg-slate-900 border-b border-slate-800 text-amber-400 font-mono">
                <th key="th-10-0" className="p-3 font-semibold">Job</th>
                <th key="th-10-1" className="p-3 font-semibold">Deadline</th>
                <th key="th-10-2" className="p-3 font-semibold">Profit</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-850 bg-slate-950/60 font-sans">
              <tr key="tr-10-0" className="hover:bg-slate-900/40 transition-colors">
                <td key="td-10-0-0" className="p-3 text-slate-300 font-mono text-slate-200">A</td>
                <td key="td-10-0-1" className="p-3 text-slate-300 ">2</td>
                <td key="td-10-0-2" className="p-3 text-slate-300 ">100</td>
              </tr>
              <tr key="tr-10-1" className="hover:bg-slate-900/40 transition-colors">
                <td key="td-10-1-0" className="p-3 text-slate-300 font-mono text-slate-200">B</td>
                <td key="td-10-1-1" className="p-3 text-slate-300 ">1</td>
                <td key="td-10-1-2" className="p-3 text-slate-300 ">19</td>
              </tr>
              <tr key="tr-10-2" className="hover:bg-slate-900/40 transition-colors">
                <td key="td-10-2-0" className="p-3 text-slate-300 font-mono text-slate-200">C</td>
                <td key="td-10-2-1" className="p-3 text-slate-300 ">2</td>
                <td key="td-10-2-2" className="p-3 text-slate-300 ">27</td>
              </tr>
              <tr key="tr-10-3" className="hover:bg-slate-900/40 transition-colors">
                <td key="td-10-3-0" className="p-3 text-slate-300 font-mono text-slate-200">D</td>
                <td key="td-10-3-1" className="p-3 text-slate-300 ">1</td>
                <td key="td-10-3-2" className="p-3 text-slate-300 ">25</td>
              </tr>
              <tr key="tr-10-4" className="hover:bg-slate-900/40 transition-colors">
                <td key="td-10-4-0" className="p-3 text-slate-300 font-mono text-slate-200">E</td>
                <td key="td-10-4-1" className="p-3 text-slate-300 ">3</td>
                <td key="td-10-4-2" className="p-3 text-slate-300 ">15</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p key="p-10-28" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          We want to maximize profit.
        </p>
        <h3 key="h3-10-30" className="text-lg md:text-xl font-bold text-amber-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-amber-400"></span>
          10.2 Greedy Strategy
        </h3>
        <p key="p-10-32" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          The strategy is:
        </p>
        <ol key="ol-10-39" className="my-3 space-y-2 pl-2">
          <li key="oli-10-0" className="flex items-start gap-2.5 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-5 h-5 rounded-full bg-slate-800 text-amber-400 font-mono text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5 border border-slate-700">
              1
            </span>
            <span>Sort jobs by decreasing profit.</span>
          </li>
          <li key="oli-10-1" className="flex items-start gap-2.5 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-5 h-5 rounded-full bg-slate-800 text-amber-400 font-mono text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5 border border-slate-700">
              2
            </span>
            <span>Consider the highest-profit job first.</span>
          </li>
          <li key="oli-10-2" className="flex items-start gap-2.5 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-5 h-5 rounded-full bg-slate-800 text-amber-400 font-mono text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5 border border-slate-700">
              3
            </span>
            <span>Schedule it in the latest available time slot at or before its deadline.</span>
          </li>
          <li key="oli-10-3" className="flex items-start gap-2.5 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-5 h-5 rounded-full bg-slate-800 text-amber-400 font-mono text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5 border border-slate-700">
              4
            </span>
            <span>If no valid slot is available, skip it.</span>
          </li>
          <li key="oli-10-4" className="flex items-start gap-2.5 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-5 h-5 rounded-full bg-slate-800 text-amber-400 font-mono text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5 border border-slate-700">
              5
            </span>
            <span>Continue until all jobs are processed.</span>
          </li>
        </ol>
        <p key="p-10-40" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Why place the job in the latest available slot?
        </p>
        <p key="p-10-42" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Because an earlier slot may be needed by another job with a smaller deadline.
        </p>
        <p key="p-10-44" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Saving earlier slots gives us more scheduling flexibility.
        </p>
        <h4 key="h4-10-46" className="text-base font-semibold text-white mt-6 mb-2 flex items-center gap-2">
          <span className="text-amber-500 font-mono">▸</span>
          Dry Run
        </h4>
        <p key="p-10-48" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Sorted jobs:
        </p>
        <div key="code-10-57" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-amber-500/30 border border-amber-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-slate-400 font-sans">Module 16 Greedy Algorithms</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`A: deadline 2, profit 100
C: deadline 2, profit 27
D: deadline 1, profit 25
B: deadline 1, profit 19
E: deadline 3, profit 15`}</code>
          </pre>
        </div>
        <p key="p-10-58" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Available slots:
        </p>
        <div key="code-10-63" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-amber-500/30 border border-amber-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-slate-400 font-sans">Module 16 Greedy Algorithms</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`Slot 1 | Slot 2 | Slot 3`}</code>
          </pre>
        </div>
        <p key="p-10-64" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Schedule:
        </p>
        <div key="table-10-71" className="my-5 overflow-x-auto rounded-xl border border-slate-800 shadow-md">
          <table className="w-full text-xs text-left border-collapse">
            <thead>
              <tr className="bg-slate-900 border-b border-slate-800 text-amber-400 font-mono">
                <th key="th-10-0" className="p-3 font-semibold">Slot</th>
                <th key="th-10-1" className="p-3 font-semibold">Job</th>
                <th key="th-10-2" className="p-3 font-semibold">Profit</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-850 bg-slate-950/60 font-sans">
              <tr key="tr-10-0" className="hover:bg-slate-900/40 transition-colors">
                <td key="td-10-0-0" className="p-3 text-slate-300 font-mono text-slate-200">1</td>
                <td key="td-10-0-1" className="p-3 text-slate-300 ">C</td>
                <td key="td-10-0-2" className="p-3 text-slate-300 ">27</td>
              </tr>
              <tr key="tr-10-1" className="hover:bg-slate-900/40 transition-colors">
                <td key="td-10-1-0" className="p-3 text-slate-300 font-mono text-slate-200">2</td>
                <td key="td-10-1-1" className="p-3 text-slate-300 ">A</td>
                <td key="td-10-1-2" className="p-3 text-slate-300 ">100</td>
              </tr>
              <tr key="tr-10-2" className="hover:bg-slate-900/40 transition-colors">
                <td key="td-10-2-0" className="p-3 text-slate-300 font-mono text-slate-200">3</td>
                <td key="td-10-2-1" className="p-3 text-slate-300 ">E</td>
                <td key="td-10-2-2" className="p-3 text-slate-300 ">15</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p key="p-10-72" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Total profit:
        </p>
        <div key="eq-10-75" className="my-3 p-3 rounded-lg bg-slate-950 border border-slate-800 font-mono text-xs text-amber-300 text-center overflow-x-auto">
          {"27+100+15=\\boxed{142} \\"}
        </div>
        <p key="p-10-76" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Note that D and B cannot be placed because their only available slot is already occupied.
        </p>
        <h3 key="h3-10-78" className="text-lg md:text-xl font-bold text-amber-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-amber-400"></span>
          10.3 Java Implementation: Disjoint Set Union
        </h3>
        <p key="p-10-80" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          A straightforward solution checks slots one by one.
        </p>
        <p key="p-10-82" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          For larger inputs, we can use Disjoint Set Union (DSU), also called Union-Find, to efficiently find the latest free slot.
        </p>
        <div key="code-10-183" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-amber-500/30 border border-amber-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-slate-400 font-sans">Module 16 Greedy Algorithms</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`import java.util.*;

class Job {

    char id;
    int deadline;
    int profit;

    Job(char id, int deadline, int profit) {
        this.id = id;
        this.deadline = deadline;
        this.profit = profit;
    }
}

public class JobSequencing {

    static int find(int[] parent, int x) {

        if (parent[x] != x) {
            parent[x] = find(parent, parent[x]);
        }

        return parent[x];
    }

    public static void schedule(Job[] jobs) {

        Arrays.sort(
            jobs,
            (a, b) -> Integer.compare(
                b.profit,
                a.profit
            )
        );

        int maxDeadline = 0;

        for (Job job : jobs) {
            maxDeadline = Math.max(
                maxDeadline,
                job.deadline
            );
        }

        // parent[s] identifies the latest free slot
        int[] parent = new int[maxDeadline + 1];

        for (int i = 0; i <= maxDeadline; i++) {
            parent[i] = i;
        }

        int totalProfit = 0;
        int jobsDone = 0;

        for (Job job : jobs) {

            int availableSlot = find(
                parent,
                Math.min(job.deadline, maxDeadline)
            );

            if (availableSlot > 0) {

                totalProfit += job.profit;
                jobsDone++;

                // Mark this slot as occupied
                parent[availableSlot] = find(
                    parent,
                    availableSlot - 1
                );

                System.out.println(
                    "Scheduled: " + job.id
                    + " in slot " + availableSlot
                );
            }
        }

        System.out.println("Jobs completed: " + jobsDone);
        System.out.println("Total profit: " + totalProfit);
    }

    public static void main(String[] args) {

        Job[] jobs = {
            new Job('A', 2, 100),
            new Job('B', 1, 19),
            new Job('C', 2, 27),
            new Job('D', 1, 25),
            new Job('E', 3, 15)
        };

        schedule(jobs);
    }
}`}</code>
          </pre>
        </div>
        <p key="p-10-184" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Expected scheduled jobs:
        </p>
        <div key="code-10-193" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-amber-500/30 border border-amber-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-slate-400 font-sans">Module 16 Greedy Algorithms</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`Scheduled: A in slot 2
Scheduled: C in slot 1
Scheduled: E in slot 3
Jobs completed: 3
Total profit: 142`}</code>
          </pre>
        </div>
        <p key="p-10-194" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          The output order represents the order in which jobs were processed by profit, not necessarily chronological execution order.
        </p>
        <h4 key="h4-10-196" className="text-base font-semibold text-white mt-6 mb-2 flex items-center gap-2">
          <span className="text-amber-500 font-mono">▸</span>
          10.4 Complexity
        </h4>
        <p key="p-10-198" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Let N be the number of jobs and D the maximum deadline.
        </p>
        <ul key="ul-10-204" className="my-3 space-y-1.5 pl-2">
          <li key="li-10-0" className="flex items-start gap-2 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 shrink-0"></span>
            <span>Sorting: O(N log N)</span>
          </li>
          <li key="li-10-1" className="flex items-start gap-2 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 shrink-0"></span>
            <span>DSU operations: approximately O(α(D)) per operation, where α is the inverse Ackermann function.</span>
          </li>
          <li key="li-10-2" className="flex items-start gap-2 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 shrink-0"></span>
            <span>DSU initialization: O(D)</span>
          </li>
          <li key="li-10-3" className="flex items-start gap-2 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 shrink-0"></span>
            <span>Total: O(N log N + D + Nα(D))</span>
          </li>
        </ul>
        <p key="p-10-205" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Space: O(D) for the parent array.
        </p>
      </div>
    )
  },
  {
    id: 11,
    title: "11. Huffman Coding & Prefix Trees",
    category: "Compression & Trees",
    content: (
      <div className="space-y-4">
        <p key="p-11-2" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Huffman Coding is a greedy algorithm used for lossless data compression.
        </p>
        <p key="p-11-4" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Its goal is to represent frequently occurring characters with shorter binary codes and less frequent characters with longer binary codes.
        </p>
        <h3 key="h3-11-6" className="text-lg md:text-xl font-bold text-amber-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-amber-400"></span>
          11.1 Why Is Huffman Coding Needed?
        </h3>
        <p key="p-11-8" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Suppose a text contains:
        </p>
        <div key="code-11-13" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-amber-500/30 border border-amber-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-slate-400 font-sans">Module 16 Greedy Algorithms</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`AAAAABBBBCCCDDE`}</code>
          </pre>
        </div>
        <p key="p-11-14" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          A simple fixed-length encoding may assign the same number of bits to every character.
        </p>
        <p key="p-11-16" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          But characters do not occur equally often.
        </p>
        <p key="p-11-18" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          For example:
        </p>
        <div key="table-11-27" className="my-5 overflow-x-auto rounded-xl border border-slate-800 shadow-md">
          <table className="w-full text-xs text-left border-collapse">
            <thead>
              <tr className="bg-slate-900 border-b border-slate-800 text-amber-400 font-mono">
                <th key="th-11-0" className="p-3 font-semibold">Character</th>
                <th key="th-11-1" className="p-3 font-semibold">Frequency</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-850 bg-slate-950/60 font-sans">
              <tr key="tr-11-0" className="hover:bg-slate-900/40 transition-colors">
                <td key="td-11-0-0" className="p-3 text-slate-300 font-mono text-slate-200">A</td>
                <td key="td-11-0-1" className="p-3 text-slate-300 ">5</td>
              </tr>
              <tr key="tr-11-1" className="hover:bg-slate-900/40 transition-colors">
                <td key="td-11-1-0" className="p-3 text-slate-300 font-mono text-slate-200">B</td>
                <td key="td-11-1-1" className="p-3 text-slate-300 ">4</td>
              </tr>
              <tr key="tr-11-2" className="hover:bg-slate-900/40 transition-colors">
                <td key="td-11-2-0" className="p-3 text-slate-300 font-mono text-slate-200">C</td>
                <td key="td-11-2-1" className="p-3 text-slate-300 ">3</td>
              </tr>
              <tr key="tr-11-3" className="hover:bg-slate-900/40 transition-colors">
                <td key="td-11-3-0" className="p-3 text-slate-300 font-mono text-slate-200">D</td>
                <td key="td-11-3-1" className="p-3 text-slate-300 ">2</td>
              </tr>
              <tr key="tr-11-4" className="hover:bg-slate-900/40 transition-colors">
                <td key="td-11-4-0" className="p-3 text-slate-300 font-mono text-slate-200">E</td>
                <td key="td-11-4-1" className="p-3 text-slate-300 ">1</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p key="p-11-28" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Instead of assigning equal-length codes to all characters, we want shorter codes for frequent characters.
        </p>
        <p key="p-11-30" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Huffman coding constructs such a variable-length prefix code.
        </p>
        <h3 key="h3-11-32" className="text-lg md:text-xl font-bold text-amber-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-amber-400"></span>
          11.2 Prefix Codes
        </h3>
        <p key="p-11-34" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          A prefix code is a code in which no character&apos;s complete code is the prefix of another character&apos;s code.
        </p>
        <p key="p-11-36" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Why is this important?
        </p>
        <p key="p-11-38" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Suppose we assign:
        </p>
        <div key="code-11-44" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-amber-500/30 border border-amber-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-slate-400 font-sans">Module 16 Greedy Algorithms</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`A = 0
B = 01`}</code>
          </pre>
        </div>
        <p key="p-11-45" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          This creates ambiguity because the code for A is the prefix of the code for B.
        </p>
        <p key="p-11-47" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          A valid prefix code avoids this problem.
        </p>
        <p key="p-11-49" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          For example:
        </p>
        <div key="code-11-58" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-amber-500/30 border border-amber-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-slate-400 font-sans">Module 16 Greedy Algorithms</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`A = 0
B = 10
C = 110
D = 1110
E = 1111`}</code>
          </pre>
        </div>
        <p key="p-11-59" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Each character can be decoded without separators.
        </p>
        <h3 key="h3-11-61" className="text-lg md:text-xl font-bold text-amber-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-amber-400"></span>
          11.3 Greedy Strategy
        </h3>
        <p key="p-11-63" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Huffman coding repeatedly combines the two characters or nodes with the lowest frequencies.
        </p>
        <p key="p-11-65" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          The algorithm:
        </p>
        <ol key="ol-11-74" className="my-3 space-y-2 pl-2">
          <li key="oli-11-0" className="flex items-start gap-2.5 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-5 h-5 rounded-full bg-slate-800 text-amber-400 font-mono text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5 border border-slate-700">
              1
            </span>
            <span>Create a leaf node for every character.</span>
          </li>
          <li key="oli-11-1" className="flex items-start gap-2.5 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-5 h-5 rounded-full bg-slate-800 text-amber-400 font-mono text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5 border border-slate-700">
              2
            </span>
            <span>Insert all nodes into a minimum priority queue.</span>
          </li>
          <li key="oli-11-2" className="flex items-start gap-2.5 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-5 h-5 rounded-full bg-slate-800 text-amber-400 font-mono text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5 border border-slate-700">
              3
            </span>
            <span>Remove the two nodes with the lowest frequencies.</span>
          </li>
          <li key="oli-11-3" className="flex items-start gap-2.5 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-5 h-5 rounded-full bg-slate-800 text-amber-400 font-mono text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5 border border-slate-700">
              4
            </span>
            <span>Create a new parent node with their combined frequency.</span>
          </li>
          <li key="oli-11-4" className="flex items-start gap-2.5 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-5 h-5 rounded-full bg-slate-800 text-amber-400 font-mono text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5 border border-slate-700">
              5
            </span>
            <span>Insert the parent back into the priority queue.</span>
          </li>
          <li key="oli-11-5" className="flex items-start gap-2.5 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-5 h-5 rounded-full bg-slate-800 text-amber-400 font-mono text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5 border border-slate-700">
              6
            </span>
            <span>Repeat until only one node remains.</span>
          </li>
          <li key="oli-11-6" className="flex items-start gap-2.5 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-5 h-5 rounded-full bg-slate-800 text-amber-400 font-mono text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5 border border-slate-700">
              7
            </span>
            <span>Traverse the tree:</span>
          </li>
        </ol>
        <ul key="ul-11-76" className="my-3 space-y-1.5 pl-2">
          <li key="li-11-0" className="flex items-start gap-2 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 shrink-0"></span>
            <span>Left edge = 0.</span>
          </li>
          <li key="li-11-1" className="flex items-start gap-2 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 shrink-0"></span>
            <span>Right edge = 1.</span>
          </li>
        </ul>
        <ol key="ol-11-77" className="my-3 space-y-2 pl-2">
          <li key="oli-11-0" className="flex items-start gap-2.5 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-5 h-5 rounded-full bg-slate-800 text-amber-400 font-mono text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5 border border-slate-700">
              1
            </span>
            <span>The path from root to leaf gives the character&apos;s code.</span>
          </li>
        </ol>
        <h4 key="h4-11-78" className="text-base font-semibold text-white mt-6 mb-2 flex items-center gap-2">
          <span className="text-amber-500 font-mono">▸</span>
          Example
        </h4>
        <p key="p-11-80" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Initial frequencies:
        </p>
        <div key="code-11-89" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-amber-500/30 border border-amber-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-slate-400 font-sans">Module 16 Greedy Algorithms</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`A = 5
B = 4
C = 3
D = 2
E = 1`}</code>
          </pre>
        </div>
        <p key="p-11-90" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          First combine the two smallest:
        </p>
        <div key="code-11-95" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-amber-500/30 border border-amber-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-slate-400 font-sans">Module 16 Greedy Algorithms</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`E(1) + D(2) = 3`}</code>
          </pre>
        </div>
        <p key="p-11-96" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Remaining frequencies:
        </p>
        <div key="code-11-101" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-amber-500/30 border border-amber-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-slate-400 font-sans">Module 16 Greedy Algorithms</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`3, 3, 4, 5`}</code>
          </pre>
        </div>
        <p key="p-11-102" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Combine the two smallest:
        </p>
        <div key="code-11-107" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-amber-500/30 border border-amber-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-slate-400 font-sans">Module 16 Greedy Algorithms</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`C(3) + ED(3) = 6`}</code>
          </pre>
        </div>
        <p key="p-11-108" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Remaining:
        </p>
        <div key="code-11-113" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-amber-500/30 border border-amber-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-slate-400 font-sans">Module 16 Greedy Algorithms</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`4, 5, 6`}</code>
          </pre>
        </div>
        <p key="p-11-114" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Combine:
        </p>
        <div key="code-11-119" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-amber-500/30 border border-amber-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-slate-400 font-sans">Module 16 Greedy Algorithms</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`B(4) + A(5) = 9`}</code>
          </pre>
        </div>
        <p key="p-11-120" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Remaining:
        </p>
        <div key="code-11-125" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-amber-500/30 border border-amber-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-slate-400 font-sans">Module 16 Greedy Algorithms</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`6, 9`}</code>
          </pre>
        </div>
        <p key="p-11-126" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Final combination:
        </p>
        <div key="code-11-131" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-amber-500/30 border border-amber-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-slate-400 font-sans">Module 16 Greedy Algorithms</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`6 + 9 = 15`}</code>
          </pre>
        </div>
        <p key="p-11-132" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          The Huffman tree is now complete.
        </p>
        <h3 key="h3-11-134" className="text-lg md:text-xl font-bold text-amber-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-amber-400"></span>
          11.4 Java Implementation
        </h3>
        <div key="code-11-240" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-amber-500/30 border border-amber-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-slate-400 font-sans">Module 16 Greedy Algorithms</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`import java.util.*;

class HuffmanNode {

    char character;
    int frequency;

    HuffmanNode left;
    HuffmanNode right;

    HuffmanNode(char character, int frequency) {
        this.character = character;
        this.frequency = frequency;
    }
}

public class HuffmanCoding {

    public static void buildCodes(
        HuffmanNode root,
        String code
    ) {

        if (root == null) {
            return;
        }

        // Leaf node represents a character
        if (root.left == null && root.right == null) {

            // Single-character input gets a usable code
            System.out.println(
                root.character + " : "
                + (code.isEmpty() ? "0" : code)
            );

            return;
        }

        buildCodes(root.left, code + "0");
        buildCodes(root.right, code + "1");
    }

    public static void huffman(
        char[] characters,
        int[] frequencies
    ) {

        PriorityQueue<HuffmanNode> pq =
            new PriorityQueue<>(
                Comparator.comparingInt(
                    node -> node.frequency
                )
            );

        // Insert every character
        for (int i = 0; i < characters.length; i++) {

            pq.add(
                new HuffmanNode(
                    characters[i],
                    frequencies[i]
                )
            );
        }

        // Build the Huffman tree
        while (pq.size() > 1) {

            HuffmanNode left = pq.poll();
            HuffmanNode right = pq.poll();

            HuffmanNode parent = new HuffmanNode(
                '\0',
                left.frequency + right.frequency
            );

            parent.left = left;
            parent.right = right;

            pq.add(parent);
        }

        HuffmanNode root = pq.poll();

        // Generate the codes
        buildCodes(root, "");
    }

    public static void main(String[] args) {

        char[] characters = {
            'A', 'B', 'C', 'D', 'E'
        };

        int[] frequencies = {
            5, 4, 3, 2, 1
        };

        huffman(characters, frequencies);
    }
}`}</code>
          </pre>
        </div>
        <p key="p-11-241" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          The exact binary codes can differ when frequencies are tied, because multiple valid Huffman trees may exist. What matters is that the resulting prefix code has an optimal weighted encoding length.
        </p>
        <h4 key="h4-11-243" className="text-base font-semibold text-white mt-6 mb-2 flex items-center gap-2">
          <span className="text-amber-500 font-mono">▸</span>
          11.5 Complexity
        </h4>
        <p key="p-11-245" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Let N be the number of unique characters.
        </p>
        <ul key="ul-11-251" className="my-3 space-y-1.5 pl-2">
          <li key="li-11-0" className="flex items-start gap-2 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 shrink-0"></span>
            <span>Priority queue insertion: O(N log N) overall.</span>
          </li>
          <li key="li-11-1" className="flex items-start gap-2 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 shrink-0"></span>
            <span>Tree construction: O(N log N).</span>
          </li>
          <li key="li-11-2" className="flex items-start gap-2 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 shrink-0"></span>
            <span>Code generation: O(N) for a tree with N leaves, excluding the total output-string length.</span>
          </li>
          <li key="li-11-3" className="flex items-start gap-2 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 shrink-0"></span>
            <span>Total: O(N log N).</span>
          </li>
        </ul>
        <p key="p-11-252" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Huffman coding is used in compression systems and is an important example of greedy optimization with a priority queue.
        </p>
      </div>
    )
  },
  {
    id: 12,
    title: "12. Meeting Rooms I & II (Min-Heap / Overlaps)",
    category: "Interval Problems",
    content: (
      <div className="space-y-4">
        <p key="p-12-2" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Meeting Rooms problems are common interval-based interview questions.
        </p>
        <p key="p-12-4" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          There are two major variations.
        </p>
        <h3 key="h3-12-6" className="text-lg md:text-xl font-bold text-amber-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-amber-400"></span>
          12.1 Meeting Rooms I — Can One Person Attend All Meetings?
        </h3>
        <p key="p-12-8" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          You are given a list of meeting intervals.
        </p>
        <p key="p-12-10" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Determine whether a person can attend every meeting without conflicts.
        </p>
        <p key="p-12-12" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Example:
        </p>
        <div key="code-12-19" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-amber-500/30 border border-amber-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-slate-400 font-sans">Module 16 Greedy Algorithms</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`[[0, 30],
 [5, 10],
 [15, 20]]`}</code>
          </pre>
        </div>
        <p key="p-12-20" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          The answer is false because the first meeting overlaps with both other meetings.
        </p>
        <h4 key="h4-12-22" className="text-base font-semibold text-white mt-6 mb-2 flex items-center gap-2">
          <span className="text-amber-500 font-mono">▸</span>
          Greedy Strategy
        </h4>
        <ol key="ol-12-28" className="my-3 space-y-2 pl-2">
          <li key="oli-12-0" className="flex items-start gap-2.5 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-5 h-5 rounded-full bg-slate-800 text-amber-400 font-mono text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5 border border-slate-700">
              1
            </span>
            <span>Sort meetings by starting time.</span>
          </li>
          <li key="oli-12-1" className="flex items-start gap-2.5 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-5 h-5 rounded-full bg-slate-800 text-amber-400 font-mono text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5 border border-slate-700">
              2
            </span>
            <span>Compare each meeting with the previous meeting.</span>
          </li>
          <li key="oli-12-2" className="flex items-start gap-2.5 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-5 h-5 rounded-full bg-slate-800 text-amber-400 font-mono text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5 border border-slate-700">
              3
            </span>
            <span>If the current meeting starts before the previous meeting ends, an overlap exists.</span>
          </li>
          <li key="oli-12-3" className="flex items-start gap-2.5 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-5 h-5 rounded-full bg-slate-800 text-amber-400 font-mono text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5 border border-slate-700">
              4
            </span>
            <span>Otherwise, all meetings can be attended.</span>
          </li>
        </ol>
        <h4 key="h4-12-29" className="text-base font-semibold text-white mt-6 mb-2 flex items-center gap-2">
          <span className="text-amber-500 font-mono">▸</span>
          Java Implementation
        </h4>
        <div key="code-12-67" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-amber-500/30 border border-amber-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-slate-400 font-sans">Module 16 Greedy Algorithms</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`import java.util.*;

public class MeetingRoomsOne {

    public static boolean canAttend(int[][] meetings) {

        Arrays.sort(
            meetings,
            Comparator.comparingInt(a -> a[0])
        );

        for (int i = 1; i < meetings.length; i++) {

            if (meetings[i][0] < meetings[i - 1][1]) {
                return false;
            }
        }

        return true;
    }

    public static void main(String[] args) {

        int[][] meetings = {
            {0, 30},
            {5, 10},
            {15, 20}
        };

        System.out.println(
            canAttend(meetings)
        );
    }
}`}</code>
          </pre>
        </div>
        <p key="p-12-68" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Output:
        </p>
        <div key="code-12-73" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-amber-500/30 border border-amber-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-slate-400 font-sans">Module 16 Greedy Algorithms</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`false`}</code>
          </pre>
        </div>
        <p key="p-12-74" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          This uses half-open meeting intervals: if one meeting ends at 10 and the next begins at 10, they do not overlap.
        </p>
        <h3 key="h3-12-76" className="text-lg md:text-xl font-bold text-amber-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-amber-400"></span>
          12.2 Meeting Rooms II — Minimum Number of Rooms
        </h3>
        <p key="p-12-78" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Now suppose all meetings must take place.
        </p>
        <p key="p-12-80" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          You want to calculate the minimum number of meeting rooms required.
        </p>
        <p key="p-12-82" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Example:
        </p>
        <div key="code-12-89" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-amber-500/30 border border-amber-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-slate-400 font-sans">Module 16 Greedy Algorithms</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`[[0, 30],
 [5, 10],
 [15, 20]]`}</code>
          </pre>
        </div>
        <p key="p-12-90" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          We need three rooms? No.
        </p>
        <p key="p-12-92" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          At times 5–10, the first and second meetings overlap.
        </p>
        <p key="p-12-94" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          At times 15–20, the first and third meetings overlap.
        </p>
        <p key="p-12-96" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Therefore, two rooms are sufficient.
        </p>
        <h3 key="h3-12-98" className="text-lg md:text-xl font-bold text-amber-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-amber-400"></span>
          12.3 Greedy Strategy Using a Min Heap
        </h3>
        <p key="p-12-100" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          We use a minimum priority queue that stores the ending times of active meetings.
        </p>
        <p key="p-12-102" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          The smallest ending time is always at the top.
        </p>
        <p key="p-12-104" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Steps:
        </p>
        <ol key="ol-12-109" className="my-3 space-y-2 pl-2">
          <li key="oli-12-0" className="flex items-start gap-2.5 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-5 h-5 rounded-full bg-slate-800 text-amber-400 font-mono text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5 border border-slate-700">
              1
            </span>
            <span>Sort meetings by starting time.</span>
          </li>
          <li key="oli-12-1" className="flex items-start gap-2.5 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-5 h-5 rounded-full bg-slate-800 text-amber-400 font-mono text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5 border border-slate-700">
              2
            </span>
            <span>Insert the first meeting&apos;s ending time.</span>
          </li>
          <li key="oli-12-2" className="flex items-start gap-2.5 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-5 h-5 rounded-full bg-slate-800 text-amber-400 font-mono text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5 border border-slate-700">
              3
            </span>
            <span>For each remaining meeting:</span>
          </li>
        </ol>
        <ul key="ul-12-113" className="my-3 space-y-1.5 pl-2">
          <li key="li-12-0" className="flex items-start gap-2 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 shrink-0"></span>
            <span>Check the earliest ending meeting.</span>
          </li>
          <li key="li-12-1" className="flex items-start gap-2 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 shrink-0"></span>
            <span>If it finishes before or when the next meeting begins, reuse that room.</span>
          </li>
          <li key="li-12-2" className="flex items-start gap-2 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 shrink-0"></span>
            <span>Remove its previous ending time.</span>
          </li>
          <li key="li-12-3" className="flex items-start gap-2 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 shrink-0"></span>
            <span>Insert the current meeting&apos;s ending time.</span>
          </li>
        </ul>
        <ol key="ol-12-114" className="my-3 space-y-2 pl-2">
          <li key="oli-12-0" className="flex items-start gap-2.5 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-5 h-5 rounded-full bg-slate-800 text-amber-400 font-mono text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5 border border-slate-700">
              1
            </span>
            <span>The largest heap size encountered is the number of rooms required.</span>
          </li>
        </ol>
        <h4 key="h4-12-115" className="text-base font-semibold text-white mt-6 mb-2 flex items-center gap-2">
          <span className="text-amber-500 font-mono">▸</span>
          Java Implementation
        </h4>
        <div key="code-12-168" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-amber-500/30 border border-amber-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-slate-400 font-sans">Module 16 Greedy Algorithms</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`import java.util.*;

public class MeetingRoomsTwo {

    public static int minRooms(int[][] meetings) {

        if (meetings.length == 0) {
            return 0;
        }

        Arrays.sort(
            meetings,
            Comparator.comparingInt(a -> a[0])
        );

        PriorityQueue<Integer> minHeap =
            new PriorityQueue<>();

        for (int[] meeting : meetings) {

            int start = meeting[0];
            int end = meeting[1];

            // Reuse the room if it is free
            if (!minHeap.isEmpty()
                && minHeap.peek() <= start) {

                minHeap.poll();
            }

            minHeap.offer(end);
        }

        return minHeap.size();
    }

    public static void main(String[] args) {

        int[][] meetings = {
            {0, 30},
            {5, 10},
            {15, 20}
        };

        System.out.println(
            minRooms(meetings)
        );
    }
}`}</code>
          </pre>
        </div>
        <p key="p-12-169" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Output:
        </p>
        <div key="code-12-174" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-amber-500/30 border border-amber-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-slate-400 font-sans">Module 16 Greedy Algorithms</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`2`}</code>
          </pre>
        </div>
        <h4 key="h4-12-175" className="text-base font-semibold text-white mt-6 mb-2 flex items-center gap-2">
          <span className="text-amber-500 font-mono">▸</span>
          Complexity
        </h4>
        <ul key="ul-12-181" className="my-3 space-y-1.5 pl-2">
          <li key="li-12-0" className="flex items-start gap-2 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 shrink-0"></span>
            <span>Sorting: O(N log N)</span>
          </li>
          <li key="li-12-1" className="flex items-start gap-2 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 shrink-0"></span>
            <span>Heap operations: O(N log N)</span>
          </li>
          <li key="li-12-2" className="flex items-start gap-2 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 shrink-0"></span>
            <span>Total: O(N log N)</span>
          </li>
          <li key="li-12-3" className="flex items-start gap-2 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 shrink-0"></span>
            <span>Space: O(N)</span>
          </li>
        </ul>
        <p key="p-12-182" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <strong className="text-white font-semibold">Important difference:</strong> Meeting Rooms I asks whether a conflict exists. Meeting Rooms II asks for the minimum number of resources needed to accommodate all intervals.
        </p>
      </div>
    )
  },
  {
    id: 13,
    title: "13. Jump Game I & II (Reachability & Range Expansion)",
    category: "Greedy Reachability",
    content: (
      <div className="space-y-4">
        <p key="p-13-2" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Jump Game is an important greedy array problem.
        </p>
        <p key="p-13-4" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          It teaches you how to maintain a range of reachable positions.
        </p>
        <p key="p-13-6" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          There are two common variations.
        </p>
        <h3 key="h3-13-8" className="text-lg md:text-xl font-bold text-amber-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-amber-400"></span>
          13.1 Jump Game I — Can You Reach the Last Index?
        </h3>
        <p key="p-13-10" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          You are given an integer array.
        </p>
        <p key="p-13-12" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Each element represents the maximum number of steps you can jump forward from that position.
        </p>
        <p key="p-13-14" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Example:
        </p>
        <div key="code-13-19" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-amber-500/30 border border-amber-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-slate-400 font-sans">Module 16 Greedy Algorithms</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`nums = [2, 3, 1, 1, 4]`}</code>
          </pre>
        </div>
        <p key="p-13-20" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Starting at index 0, you can jump up to two positions.
        </p>
        <p key="p-13-22" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Can you reach the final index?
        </p>
        <p key="p-13-24" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Yes.
        </p>
        <p key="p-13-26" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          One possible path:
        </p>
        <div key="code-13-31" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-amber-500/30 border border-amber-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-slate-400 font-sans">Module 16 Greedy Algorithms</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`Index 0 → Index 1 → Index 4`}</code>
          </pre>
        </div>
        <h3 key="h3-13-32" className="text-lg md:text-xl font-bold text-amber-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-amber-400"></span>
          13.2 Greedy Strategy
        </h3>
        <p key="p-13-34" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Maintain the farthest position that can currently be reached.
        </p>
        <div key="eq-13-37" className="my-3 p-3 rounded-lg bg-slate-950 border border-slate-800 font-mono text-xs text-amber-300 text-center overflow-x-auto">
          {"farthest = \\max(farthest, i + nums[i]) \\"}
        </div>
        <p key="p-13-38" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          For each position:
        </p>
        <ol key="ol-13-44" className="my-3 space-y-2 pl-2">
          <li key="oli-13-0" className="flex items-start gap-2.5 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-5 h-5 rounded-full bg-slate-800 text-amber-400 font-mono text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5 border border-slate-700">
              1
            </span>
            <span>Check whether the current index is reachable.</span>
          </li>
          <li key="oli-13-1" className="flex items-start gap-2.5 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-5 h-5 rounded-full bg-slate-800 text-amber-400 font-mono text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5 border border-slate-700">
              2
            </span>
            <span>Update the farthest reachable index.</span>
          </li>
          <li key="oli-13-2" className="flex items-start gap-2.5 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-5 h-5 rounded-full bg-slate-800 text-amber-400 font-mono text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5 border border-slate-700">
              3
            </span>
            <span>If the farthest index reaches the final position, return true.</span>
          </li>
          <li key="oli-13-3" className="flex items-start gap-2.5 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-5 h-5 rounded-full bg-slate-800 text-amber-400 font-mono text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5 border border-slate-700">
              4
            </span>
            <span>If the current index goes beyond the farthest reachable position, return false.</span>
          </li>
        </ol>
        <h4 key="h4-13-45" className="text-base font-semibold text-white mt-6 mb-2 flex items-center gap-2">
          <span className="text-amber-500 font-mono">▸</span>
          Java Implementation
        </h4>
        <div key="code-13-83" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-amber-500/30 border border-amber-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-slate-400 font-sans">Module 16 Greedy Algorithms</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`public class JumpGame {

    public static boolean canReach(int[] nums) {

        int farthest = 0;

        for (int i = 0; i < nums.length; i++) {

            if (i > farthest) {
                return false;
            }

            farthest = Math.max(
                farthest,
                i + nums[i]
            );

            if (farthest >= nums.length - 1) {
                return true;
            }
        }

        return true;
    }

    public static void main(String[] args) {

        int[] nums = {2, 3, 1, 1, 4};

        System.out.println(
            canReach(nums)
        );
    }
}`}</code>
          </pre>
        </div>
        <p key="p-13-84" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Output:
        </p>
        <div key="code-13-89" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-amber-500/30 border border-amber-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-slate-400 font-sans">Module 16 Greedy Algorithms</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`true`}</code>
          </pre>
        </div>
        <p key="p-13-90" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Complexity:
        </p>
        <ul key="ul-13-94" className="my-3 space-y-1.5 pl-2">
          <li key="li-13-0" className="flex items-start gap-2 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 shrink-0"></span>
            <span>Time: O(N)</span>
          </li>
          <li key="li-13-1" className="flex items-start gap-2 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 shrink-0"></span>
            <span>Space: O(1)</span>
          </li>
        </ul>
        <h3 key="h3-13-95" className="text-lg md:text-xl font-bold text-amber-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-amber-400"></span>
          13.3 Jump Game II — Minimum Number of Jumps
        </h3>
        <p key="p-13-97" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Now the problem changes.
        </p>
        <p key="p-13-99" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          You must find the minimum number of jumps needed to reach the last index.
        </p>
        <p key="p-13-101" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Example:
        </p>
        <div key="code-13-106" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-amber-500/30 border border-amber-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-slate-400 font-sans">Module 16 Greedy Algorithms</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`nums = [2, 3, 1, 1, 4]`}</code>
          </pre>
        </div>
        <p key="p-13-107" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          One optimal path is:
        </p>
        <div key="code-13-112" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-amber-500/30 border border-amber-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-slate-400 font-sans">Module 16 Greedy Algorithms</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`Index 0 → Index 1 → Index 4`}</code>
          </pre>
        </div>
        <p key="p-13-113" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Minimum jumps:
        </p>
        <div key="code-13-118" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-amber-500/30 border border-amber-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-slate-400 font-sans">Module 16 Greedy Algorithms</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`2`}</code>
          </pre>
        </div>
        <h4 key="h4-13-119" className="text-base font-semibold text-white mt-6 mb-2 flex items-center gap-2">
          <span className="text-amber-500 font-mono">▸</span>
          Greedy Strategy: Range Expansion
        </h4>
        <p key="p-13-121" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Think of each jump as expanding the range of indices that you can reach.
        </p>
        <p key="p-13-123" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Maintain:
        </p>
        <ul key="ul-13-128" className="my-3 space-y-1.5 pl-2">
          <li key="li-13-0" className="flex items-start gap-2 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 shrink-0"></span>
            <span><code className="font-mono text-amber-300 text-xs px-1.5 py-0.5 rounded bg-slate-900 border border-slate-800">currentEnd</code>: End of the range reachable using the current number of jumps.</span>
          </li>
          <li key="li-13-1" className="flex items-start gap-2 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 shrink-0"></span>
            <span><code className="font-mono text-amber-300 text-xs px-1.5 py-0.5 rounded bg-slate-900 border border-slate-800">farthest</code>: Farthest position reachable from any index in the current range.</span>
          </li>
          <li key="li-13-2" className="flex items-start gap-2 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 shrink-0"></span>
            <span><code className="font-mono text-amber-300 text-xs px-1.5 py-0.5 rounded bg-slate-900 border border-slate-800">jumps</code>: Number of jumps used.</span>
          </li>
        </ul>
        <p key="p-13-129" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          When you reach <code className="font-mono text-amber-300 text-xs px-1.5 py-0.5 rounded bg-slate-900 border border-slate-800">currentEnd</code>, you must make another jump to continue.
        </p>
        <h4 key="h4-13-131" className="text-base font-semibold text-white mt-6 mb-2 flex items-center gap-2">
          <span className="text-amber-500 font-mono">▸</span>
          Java Implementation
        </h4>
        <div key="code-13-187" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-amber-500/30 border border-amber-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-slate-400 font-sans">Module 16 Greedy Algorithms</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`public class JumpGameTwo {

    public static int minJumps(int[] nums) {

        int n = nums.length;

        if (n <= 1) {
            return 0;
        }

        int jumps = 0;
        int currentEnd = 0;
        int farthest = 0;

        for (int i = 0; i < n - 1; i++) {

            if (i > farthest) {
                return -1;
            }

            farthest = Math.max(
                farthest,
                i + nums[i]
            );

            if (i == currentEnd) {

                if (farthest == currentEnd) {
                    return -1;
                }

                jumps++;
                currentEnd = farthest;

                if (currentEnd >= n - 1) {
                    return jumps;
                }
            }
        }

        return -1;
    }

    public static void main(String[] args) {

        int[] nums = {2, 3, 1, 1, 4};

        System.out.println(
            minJumps(nums)
        );
    }
}`}</code>
          </pre>
        </div>
        <p key="p-13-188" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Output:
        </p>
        <div key="code-13-193" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-amber-500/30 border border-amber-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-slate-400 font-sans">Module 16 Greedy Algorithms</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`2`}</code>
          </pre>
        </div>
        <h4 key="h4-13-194" className="text-base font-semibold text-white mt-6 mb-2 flex items-center gap-2">
          <span className="text-amber-500 font-mono">▸</span>
          Complexity
        </h4>
        <p key="p-13-196" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Both variations use:
        </p>
        <ul key="ul-13-200" className="my-3 space-y-1.5 pl-2">
          <li key="li-13-0" className="flex items-start gap-2 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 shrink-0"></span>
            <span>Time: O(N)</span>
          </li>
          <li key="li-13-1" className="flex items-start gap-2 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 shrink-0"></span>
            <span>Space: O(1)</span>
          </li>
        </ul>
        <p key="p-13-201" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <strong className="text-white font-semibold">Key learning:</strong> Greedy algorithms do not always need sorting. Sometimes the correct strategy is to maintain the farthest reachable boundary.
        </p>
      </div>
    )
  },
  {
    id: 14,
    title: "14. Gas Station Problem (Circular Deficit Sweep)",
    category: "Greedy Traversal",
    content: (
      <div className="space-y-4">
        <p key="p-14-2" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          This problem is a particularly useful example of greedy reasoning.
        </p>
        <h3 key="h3-14-4" className="text-lg md:text-xl font-bold text-amber-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-amber-400"></span>
          14.1 Problem Statement
        </h3>
        <p key="p-14-6" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          You are given:
        </p>
        <ul key="ul-14-10" className="my-3 space-y-1.5 pl-2">
          <li key="li-14-0" className="flex items-start gap-2 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 shrink-0"></span>
            <span>An array <code className="font-mono text-amber-300 text-xs px-1.5 py-0.5 rounded bg-slate-900 border border-slate-800">gas</code>, representing the amount of gas available at each station.</span>
          </li>
          <li key="li-14-1" className="flex items-start gap-2 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 shrink-0"></span>
            <span>An array <code className="font-mono text-amber-300 text-xs px-1.5 py-0.5 rounded bg-slate-900 border border-slate-800">cost</code>, representing the amount of gas needed to travel to the next station.</span>
          </li>
        </ul>
        <p key="p-14-11" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          You have a car with an initially empty tank.
        </p>
        <p key="p-14-13" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          You need to determine whether it is possible to complete the circular journey.
        </p>
        <p key="p-14-15" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Return the starting station&apos;s index, or -1 if no valid starting position exists.
        </p>
        <h4 key="h4-14-17" className="text-base font-semibold text-white mt-6 mb-2 flex items-center gap-2">
          <span className="text-amber-500 font-mono">▸</span>
          Example
        </h4>
        <div key="code-14-24" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-amber-500/30 border border-amber-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-slate-400 font-sans">Module 16 Greedy Algorithms</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`gas  = [1, 2, 3, 4, 5]

cost = [3, 4, 5, 1, 2]`}</code>
          </pre>
        </div>
        <p key="p-14-25" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          The correct starting position is index 3.
        </p>
        <p key="p-14-27" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          The journey:
        </p>
        <div key="code-14-35" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-amber-500/30 border border-amber-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-slate-400 font-sans">Module 16 Greedy Algorithms</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`Station 3:
Gas gained = 4
Cost       = 1
Remaining  = 3`}</code>
          </pre>
        </div>
        <div key="code-14-42" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-amber-500/30 border border-amber-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-slate-400 font-sans">Module 16 Greedy Algorithms</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`Station 4:
Gas gained = 5
Cost       = 2
Remaining  = 6`}</code>
          </pre>
        </div>
        <div key="code-14-49" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-amber-500/30 border border-amber-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-slate-400 font-sans">Module 16 Greedy Algorithms</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`Station 0:
Gas gained = 1
Cost       = 3
Remaining  = 4`}</code>
          </pre>
        </div>
        <div key="code-14-56" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-amber-500/30 border border-amber-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-slate-400 font-sans">Module 16 Greedy Algorithms</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`Station 1:
Gas gained = 2
Cost       = 4
Remaining  = 2`}</code>
          </pre>
        </div>
        <div key="code-14-63" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-amber-500/30 border border-amber-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-slate-400 font-sans">Module 16 Greedy Algorithms</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`Station 2:
Gas gained = 3
Cost       = 5
Remaining  = 0`}</code>
          </pre>
        </div>
        <p key="p-14-64" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          We complete the circular journey.
        </p>
        <h3 key="h3-14-66" className="text-lg md:text-xl font-bold text-amber-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-amber-400"></span>
          14.2 Greedy Strategy
        </h3>
        <p key="p-14-68" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Calculate:
        </p>
        <div key="eq-14-71" className="my-3 p-3 rounded-lg bg-slate-950 border border-slate-800 font-mono text-xs text-amber-300 text-center overflow-x-auto">
          {"difference[i] = gas[i] - cost[i] \\"}
        </div>
        <p key="p-14-72" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Maintain two values:
        </p>
        <ul key="ul-14-76" className="my-3 space-y-1.5 pl-2">
          <li key="li-14-0" className="flex items-start gap-2 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 shrink-0"></span>
            <span><code className="font-mono text-amber-300 text-xs px-1.5 py-0.5 rounded bg-slate-900 border border-slate-800">total</code>: Total gas minus total cost across all stations.</span>
          </li>
          <li key="li-14-1" className="flex items-start gap-2 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 shrink-0"></span>
            <span><code className="font-mono text-amber-300 text-xs px-1.5 py-0.5 rounded bg-slate-900 border border-slate-800">tank</code>: Current fuel remaining during the attempted journey.</span>
          </li>
        </ul>
        <p key="p-14-77" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          If total is negative, completing the circular journey is impossible.
        </p>
        <p key="p-14-79" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Why?
        </p>
        <p key="p-14-81" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Because the total fuel available is less than the total fuel required.
        </p>
        <p key="p-14-83" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          If the current tank becomes negative at station i, the current starting point cannot reach station i.
        </p>
        <p key="p-14-85" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Furthermore, none of the stations between the old starting point and i can be a valid starting point.
        </p>
        <p key="p-14-87" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          So we move the starting point to i + 1.
        </p>
        <h4 key="h4-14-89" className="text-base font-semibold text-white mt-6 mb-2 flex items-center gap-2">
          <span className="text-amber-500 font-mono">▸</span>
          Java Implementation
        </h4>
        <div key="code-14-131" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-amber-500/30 border border-amber-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-slate-400 font-sans">Module 16 Greedy Algorithms</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`public class GasStation {

    public static int findStart(
        int[] gas,
        int[] cost
    ) {

        int total = 0;
        int tank = 0;
        int start = 0;

        for (int i = 0; i < gas.length; i++) {

            int difference = gas[i] - cost[i];

            total += difference;
            tank += difference;

            if (tank < 0) {

                start = i + 1;
                tank = 0;
            }
        }

        return total >= 0 ? start : -1;
    }

    public static void main(String[] args) {

        int[] gas = {1, 2, 3, 4, 5};
        int[] cost = {3, 4, 5, 1, 2};

        System.out.println(
            findStart(gas, cost)
        );
    }
}`}</code>
          </pre>
        </div>
        <p key="p-14-132" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Output:
        </p>
        <div key="code-14-137" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-amber-500/30 border border-amber-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-slate-400 font-sans">Module 16 Greedy Algorithms</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`3`}</code>
          </pre>
        </div>
        <h4 key="h4-14-138" className="text-base font-semibold text-white mt-6 mb-2 flex items-center gap-2">
          <span className="text-amber-500 font-mono">▸</span>
          Complexity
        </h4>
        <ul key="ul-14-142" className="my-3 space-y-1.5 pl-2">
          <li key="li-14-0" className="flex items-start gap-2 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 shrink-0"></span>
            <span>Time: O(N)</span>
          </li>
          <li key="li-14-1" className="flex items-start gap-2 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 shrink-0"></span>
            <span>Space: O(1)</span>
          </li>
        </ul>
        <h4 key="h4-14-143" className="text-base font-semibold text-white mt-6 mb-2 flex items-center gap-2">
          <span className="text-amber-500 font-mono">▸</span>
          Important Proof Insight
        </h4>
        <p key="p-14-145" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          When <code className="font-mono text-amber-300 text-xs px-1.5 py-0.5 rounded bg-slate-900 border border-slate-800">tank</code> becomes negative at index i, the journey cannot start at the previous starting index.
        </p>
        <p key="p-14-147" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          It also cannot start at any intermediate station that was visited since that starting index.
        </p>
        <p key="p-14-149" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Those intermediate stations had already contributed to a nonnegative cumulative fuel amount before the failure, but they still could not provide enough gas to reach the failure point and overcome the deficit.
        </p>
        <p key="p-14-151" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Therefore, starting at i + 1 is the next valid candidate to examine.
        </p>
      </div>
    )
  },
  {
    id: 15,
    title: "15. Task Scheduling (CPU Task Scheduler with Cooldown)",
    category: "Scheduling",
    content: (
      <div className="space-y-4">
        <p key="p-15-2" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Task scheduling is a broad problem category. Greedy algorithms can solve several important variations.
        </p>
        <p key="p-15-4" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          One common interview problem is the CPU Task Scheduler with a cooldown period.
        </p>
        <h3 key="h3-15-6" className="text-lg md:text-xl font-bold text-amber-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-amber-400"></span>
          15.1 Task Scheduler with Cooldown
        </h3>
        <p key="p-15-8" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          You are given a list of tasks.
        </p>
        <p key="p-15-10" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Each task is represented by a character.
        </p>
        <p key="p-15-12" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          The CPU can execute one task at a time.
        </p>
        <p key="p-15-14" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          The same task must have at least <code className="font-mono text-amber-300 text-xs px-1.5 py-0.5 rounded bg-slate-900 border border-slate-800">n</code> intervals between two executions.
        </p>
        <p key="p-15-16" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          The CPU can either:
        </p>
        <ul key="ul-15-20" className="my-3 space-y-1.5 pl-2">
          <li key="li-15-0" className="flex items-start gap-2 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 shrink-0"></span>
            <span>Execute a task.</span>
          </li>
          <li key="li-15-1" className="flex items-start gap-2 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 shrink-0"></span>
            <span>Stay idle.</span>
          </li>
        </ul>
        <p key="p-15-21" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Find the minimum number of intervals required to complete all tasks.
        </p>
        <h4 key="h4-15-23" className="text-base font-semibold text-white mt-6 mb-2 flex items-center gap-2">
          <span className="text-amber-500 font-mono">▸</span>
          Example
        </h4>
        <div key="code-15-30" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-amber-500/30 border border-amber-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-slate-400 font-sans">Module 16 Greedy Algorithms</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`tasks = [A, A, A, B, B, B]

cooldown = 2`}</code>
          </pre>
        </div>
        <p key="p-15-31" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          The CPU cannot execute A immediately after A.
        </p>
        <p key="p-15-33" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          A valid schedule is:
        </p>
        <div key="code-15-38" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-amber-500/30 border border-amber-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-slate-400 font-sans">Module 16 Greedy Algorithms</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`A → B → Idle → A → B → Idle → A → B`}</code>
          </pre>
        </div>
        <p key="p-15-39" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Total intervals:
        </p>
        <div key="code-15-44" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-amber-500/30 border border-amber-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-slate-400 font-sans">Module 16 Greedy Algorithms</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`8`}</code>
          </pre>
        </div>
        <h3 key="h3-15-45" className="text-lg md:text-xl font-bold text-amber-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-amber-400"></span>
          15.2 Greedy Strategy
        </h3>
        <p key="p-15-47" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          The idea is to execute the most frequent remaining tasks first.
        </p>
        <p key="p-15-49" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Why?
        </p>
        <p key="p-15-51" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          A task with a high frequency creates the greatest scheduling restriction because it must be separated by cooldown intervals.
        </p>
        <p key="p-15-53" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          We want to distribute these frequent tasks as evenly as possible.
        </p>
        <p key="p-15-55" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          One way is to calculate the minimum required time mathematically.
        </p>
        <p key="p-15-57" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Let:
        </p>
        <ul key="ul-15-62" className="my-3 space-y-1.5 pl-2">
          <li key="li-15-0" className="flex items-start gap-2 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 shrink-0"></span>
            <span><code className="font-mono text-amber-300 text-xs px-1.5 py-0.5 rounded bg-slate-900 border border-slate-800">maxFreq</code> = maximum frequency of any task.</span>
          </li>
          <li key="li-15-1" className="flex items-start gap-2 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 shrink-0"></span>
            <span><code className="font-mono text-amber-300 text-xs px-1.5 py-0.5 rounded bg-slate-900 border border-slate-800">countMax</code> = number of task types that have this maximum frequency.</span>
          </li>
          <li key="li-15-2" className="flex items-start gap-2 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 shrink-0"></span>
            <span><code className="font-mono text-amber-300 text-xs px-1.5 py-0.5 rounded bg-slate-900 border border-slate-800">n</code> = cooldown period.</span>
          </li>
        </ul>
        <p key="p-15-63" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          The most frequent tasks create a structure:
        </p>
        <div key="eq-15-66" className="my-3 p-3 rounded-lg bg-slate-950 border border-slate-800 font-mono text-xs text-amber-300 text-center overflow-x-auto">
          {"(maxFreq - 1)(n + 1) + countMax \\"}
        </div>
        <p key="p-15-67" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          The first <code className="font-mono text-amber-300 text-xs px-1.5 py-0.5 rounded bg-slate-900 border border-slate-800">maxFreq - 1</code> groups each have:
        </p>
        <ul key="ul-15-71" className="my-3 space-y-1.5 pl-2">
          <li key="li-15-0" className="flex items-start gap-2 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 shrink-0"></span>
            <span>One most-frequent task.</span>
          </li>
          <li key="li-15-1" className="flex items-start gap-2 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 shrink-0"></span>
            <span><code className="font-mono text-amber-300 text-xs px-1.5 py-0.5 rounded bg-slate-900 border border-slate-800">n</code> separation positions.</span>
          </li>
        </ul>
        <p key="p-15-72" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          The final group contains all the task types with the maximum frequency.
        </p>
        <p key="p-15-74" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          However, if there are enough other tasks to fill the cooldown spaces, the schedule length is simply the number of tasks.
        </p>
        <p key="p-15-76" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Therefore:
        </p>
        <div key="eq-15-79" className="my-3 p-3 rounded-lg bg-slate-950 border border-slate-800 font-mono text-xs text-amber-300 text-center overflow-x-auto">
          {"Answer = \\max\\left( Tasks.length, (maxFreq-1)(n+1)+countMax \\right) \\"}
        </div>
        <h3 key="h3-15-80" className="text-lg md:text-xl font-bold text-amber-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-amber-400"></span>
          15.3 Java Implementation
        </h3>
        <div key="code-15-134" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-amber-500/30 border border-amber-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-slate-400 font-sans">Module 16 Greedy Algorithms</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`public class TaskScheduler {

    public static int leastIntervals(
        char[] tasks,
        int cooldown
    ) {

        int[] frequency = new int[26];

        for (char task : tasks) {
            frequency[task - 'A']++;
        }

        int maxFreq = 0;

        for (int count : frequency) {
            maxFreq = Math.max(maxFreq, count);
        }

        int countMax = 0;

        for (int count : frequency) {

            if (count == maxFreq) {
                countMax++;
            }
        }

        int requiredTime =
            (maxFreq - 1) * (cooldown + 1)
            + countMax;

        return Math.max(
            tasks.length,
            requiredTime
        );
    }

    public static void main(String[] args) {

        char[] tasks = {
            'A', 'A', 'A',
            'B', 'B', 'B'
        };

        System.out.println(
            leastIntervals(tasks, 2)
        );
    }
}`}</code>
          </pre>
        </div>
        <p key="p-15-135" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Output:
        </p>
        <div key="code-15-140" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-amber-500/30 border border-amber-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-slate-400 font-sans">Module 16 Greedy Algorithms</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`8`}</code>
          </pre>
        </div>
        <h4 key="h4-15-141" className="text-base font-semibold text-white mt-6 mb-2 flex items-center gap-2">
          <span className="text-amber-500 font-mono">▸</span>
          Complexity
        </h4>
        <ul key="ul-15-148" className="my-3 space-y-1.5 pl-2">
          <li key="li-15-0" className="flex items-start gap-2 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 shrink-0"></span>
            <span>Frequency counting: O(N)</span>
          </li>
          <li key="li-15-1" className="flex items-start gap-2 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 shrink-0"></span>
            <span>Finding maximum frequency: O(26)</span>
          </li>
          <li key="li-15-2" className="flex items-start gap-2 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 shrink-0"></span>
            <span>Finding the number of maximum-frequency tasks: O(26)</span>
          </li>
          <li key="li-15-3" className="flex items-start gap-2 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 shrink-0"></span>
            <span>Total time: O(N)</span>
          </li>
          <li key="li-15-4" className="flex items-start gap-2 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 shrink-0"></span>
            <span>Auxiliary space: O(1), because there are only 26 uppercase task types.</span>
          </li>
        </ul>
        <h4 key="h4-15-149" className="text-base font-semibold text-white mt-6 mb-2 flex items-center gap-2">
          <span className="text-amber-500 font-mono">▸</span>
          Another Important Scheduling Strategy
        </h4>
        <p key="p-15-151" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          For other scheduling problems, such as scheduling jobs by deadlines, sorting by deadlines or profits can be appropriate.
        </p>
        <p key="p-15-153" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          For example:
        </p>
        <ul key="ul-15-159" className="my-3 space-y-1.5 pl-2">
          <li key="li-15-0" className="flex items-start gap-2 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 shrink-0"></span>
            <span>Maximum number of jobs before deadlines: often use deadline-based scheduling.</span>
          </li>
          <li key="li-15-1" className="flex items-start gap-2 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 shrink-0"></span>
            <span>Maximum total profit with unit-duration jobs: use Job Sequencing with Deadlines.</span>
          </li>
          <li key="li-15-2" className="flex items-start gap-2 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 shrink-0"></span>
            <span>Minimum CPU intervals with cooldown: use frequency-based scheduling.</span>
          </li>
          <li key="li-15-3" className="flex items-start gap-2 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 shrink-0"></span>
            <span>Minimum resources for overlapping tasks: use an interval sweep or min heap.</span>
          </li>
        </ul>
        <p key="p-15-160" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          There is no single greedy rule that solves every task scheduling problem.
        </p>
      </div>
    )
  },
  {
    id: 16,
    title: "16. Greedy vs Dynamic Programming (Coin Change Dilemma)",
    category: "Comparative Analysis",
    content: (
      <div className="space-y-4">
        <p key="p-16-2" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          This is one of the most important comparisons in the entire module.
        </p>
        <p key="p-16-4" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Both greedy algorithms and dynamic programming solve optimization problems.
        </p>
        <p key="p-16-6" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          However, their approaches are different.
        </p>
        <h3 key="h3-16-8" className="text-lg md:text-xl font-bold text-amber-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-amber-400"></span>
          16.1 Greedy Approach
        </h3>
        <p key="p-16-10" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Greedy makes the best local decision and does not reconsider it.
        </p>
        <p key="p-16-12" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Example:
        </p>
        <p key="p-16-14" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Fractional Knapsack.
        </p>
        <p key="p-16-16" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          We sort items by value-to-weight ratio and take the highest ratio first.
        </p>
        <p key="p-16-18" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          We never need to explore every possible combination.
        </p>
        <h3 key="h3-16-20" className="text-lg md:text-xl font-bold text-amber-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-amber-400"></span>
          16.2 Dynamic Programming Approach
        </h3>
        <p key="p-16-22" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Dynamic programming breaks the problem into overlapping subproblems and stores their answers.
        </p>
        <p key="p-16-24" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          It often considers multiple possible decisions and compares their results.
        </p>
        <p key="p-16-26" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Example:
        </p>
        <p key="p-16-28" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          0/1 Knapsack.
        </p>
        <p key="p-16-30" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          For each item, we consider:
        </p>
        <ul key="ul-16-34" className="my-3 space-y-1.5 pl-2">
          <li key="li-16-0" className="flex items-start gap-2 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 shrink-0"></span>
            <span>Taking the item.</span>
          </li>
          <li key="li-16-1" className="flex items-start gap-2 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 shrink-0"></span>
            <span>Not taking the item.</span>
          </li>
        </ul>
        <p key="p-16-35" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          We choose the option that gives the maximum total value.
        </p>
        <h3 key="h3-16-37" className="text-lg md:text-xl font-bold text-amber-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-amber-400"></span>
          16.3 Comparison Table
        </h3>
        <div key="table-16-49" className="my-5 overflow-x-auto rounded-xl border border-slate-800 shadow-md">
          <table className="w-full text-xs text-left border-collapse">
            <thead>
              <tr className="bg-slate-900 border-b border-slate-800 text-amber-400 font-mono">
                <th key="th-16-0" className="p-3 font-semibold">Feature</th>
                <th key="th-16-1" className="p-3 font-semibold">Greedy</th>
                <th key="th-16-2" className="p-3 font-semibold">Dynamic Programming</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-850 bg-slate-950/60 font-sans">
              <tr key="tr-16-0" className="hover:bg-slate-900/40 transition-colors">
                <td key="td-16-0-0" className="p-3 text-slate-300 font-mono text-slate-200">Decision making</td>
                <td key="td-16-0-1" className="p-3 text-slate-300 ">Locally optimal choice</td>
                <td key="td-16-0-2" className="p-3 text-slate-300 ">Compares subproblem solutions</td>
              </tr>
              <tr key="tr-16-1" className="hover:bg-slate-900/40 transition-colors">
                <td key="td-16-1-0" className="p-3 text-slate-300 font-mono text-slate-200">Previous decisions</td>
                <td key="td-16-1-1" className="p-3 text-slate-300 ">Usually final</td>
                <td key="td-16-1-2" className="p-3 text-slate-300 ">Evaluates combinations of decisions</td>
              </tr>
              <tr key="tr-16-2" className="hover:bg-slate-900/40 transition-colors">
                <td key="td-16-2-0" className="p-3 text-slate-300 font-mono text-slate-200">Subproblems</td>
                <td key="td-16-2-1" className="p-3 text-slate-300 ">Not necessarily stored</td>
                <td key="td-16-2-2" className="p-3 text-slate-300 ">Usually stored</td>
              </tr>
              <tr key="tr-16-3" className="hover:bg-slate-900/40 transition-colors">
                <td key="td-16-3-0" className="p-3 text-slate-300 font-mono text-slate-200">Memoization</td>
                <td key="td-16-3-1" className="p-3 text-slate-300 ">Generally unnecessary</td>
                <td key="td-16-3-2" className="p-3 text-slate-300 ">Often used</td>
              </tr>
              <tr key="tr-16-4" className="hover:bg-slate-900/40 transition-colors">
                <td key="td-16-4-0" className="p-3 text-slate-300 font-mono text-slate-200">State tracking</td>
                <td key="td-16-4-1" className="p-3 text-slate-300 ">Usually limited</td>
                <td key="td-16-4-2" className="p-3 text-slate-300 ">Often essential</td>
              </tr>
              <tr key="tr-16-5" className="hover:bg-slate-900/40 transition-colors">
                <td key="td-16-5-0" className="p-3 text-slate-300 font-mono text-slate-200">Implementation</td>
                <td key="td-16-5-1" className="p-3 text-slate-300 ">Often simpler</td>
                <td key="td-16-5-2" className="p-3 text-slate-300 ">Can be more complex</td>
              </tr>
              <tr key="tr-16-6" className="hover:bg-slate-900/40 transition-colors">
                <td key="td-16-6-0" className="p-3 text-slate-300 font-mono text-slate-200">Performance</td>
                <td key="td-16-6-1" className="p-3 text-slate-300 ">Often faster</td>
                <td key="td-16-6-2" className="p-3 text-slate-300 ">Can require more time and memory</td>
              </tr>
              <tr key="tr-16-7" className="hover:bg-slate-900/40 transition-colors">
                <td key="td-16-7-0" className="p-3 text-slate-300 font-mono text-slate-200">Correctness</td>
                <td key="td-16-7-1" className="p-3 text-slate-300 ">Requires greedy-choice justification</td>
                <td key="td-16-7-2" className="p-3 text-slate-300 ">Requires correct recurrence and state</td>
              </tr>
            </tbody>
          </table>
        </div>
        <h3 key="h3-16-50" className="text-lg md:text-xl font-bold text-amber-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-amber-400"></span>
          16.4 Example: Coin Change
        </h3>
        <p key="p-16-52" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Suppose coin denominations are:
        </p>
        <div key="code-16-58" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-amber-500/30 border border-amber-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-slate-400 font-sans">Module 16 Greedy Algorithms</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`Coins = [1, 3, 4]
Amount = 6`}</code>
          </pre>
        </div>
        <p key="p-16-59" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          A greedy algorithm selects the largest coin first:
        </p>
        <div key="code-16-64" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-amber-500/30 border border-amber-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-slate-400 font-sans">Module 16 Greedy Algorithms</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`4 + 1 + 1`}</code>
          </pre>
        </div>
        <p key="p-16-65" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Total coins:
        </p>
        <div key="code-16-70" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-amber-500/30 border border-amber-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-slate-400 font-sans">Module 16 Greedy Algorithms</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`3`}</code>
          </pre>
        </div>
        <p key="p-16-71" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          But the optimal solution is:
        </p>
        <div key="code-16-76" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-amber-500/30 border border-amber-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-slate-400 font-sans">Module 16 Greedy Algorithms</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`3 + 3`}</code>
          </pre>
        </div>
        <p key="p-16-77" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Total coins:
        </p>
        <div key="code-16-82" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-amber-500/30 border border-amber-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-slate-400 font-sans">Module 16 Greedy Algorithms</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`2`}</code>
          </pre>
        </div>
        <p key="p-16-83" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Greedy fails.
        </p>
        <p key="p-16-85" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Dynamic programming can find the optimal answer because it compares the possible ways of forming the amount.
        </p>
        <h4 key="h4-16-87" className="text-base font-semibold text-white mt-6 mb-2 flex items-center gap-2">
          <span className="text-amber-500 font-mono">▸</span>
          Why Is This Important?
        </h4>
        <p key="p-16-89" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          A problem may look like a greedy problem but actually require dynamic programming.
        </p>
        <p key="p-16-91" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Before implementing greedy, ask:
        </p>
        <ol key="ol-16-97" className="my-3 space-y-2 pl-2">
          <li key="oli-16-0" className="flex items-start gap-2.5 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-5 h-5 rounded-full bg-slate-800 text-amber-400 font-mono text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5 border border-slate-700">
              1
            </span>
            <span>Can I identify a locally optimal choice?</span>
          </li>
          <li key="oli-16-1" className="flex items-start gap-2.5 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-5 h-5 rounded-full bg-slate-800 text-amber-400 font-mono text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5 border border-slate-700">
              2
            </span>
            <span>Can I prove it is safe to make that choice?</span>
          </li>
          <li key="oli-16-2" className="flex items-start gap-2.5 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-5 h-5 rounded-full bg-slate-800 text-amber-400 font-mono text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5 border border-slate-700">
              3
            </span>
            <span>Does the remaining problem have the same structure?</span>
          </li>
          <li key="oli-16-3" className="flex items-start gap-2.5 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-5 h-5 rounded-full bg-slate-800 text-amber-400 font-mono text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5 border border-slate-700">
              4
            </span>
            <span>Could a combination of smaller choices produce a better overall result?</span>
          </li>
        </ol>
        <p key="p-16-98" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          If you cannot establish the greedy-choice property, investigate dynamic programming or another approach.
        </p>
      </div>
    )
  },
  {
    id: 17,
    title: "17. Sorting-Based Greedy Strategies",
    category: "Strategy Toolkit",
    content: (
      <div className="space-y-4">
        <p key="p-17-2" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Sorting is one of the most frequently used techniques in greedy algorithms.
        </p>
        <p key="p-17-4" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Sorting helps us arrange input so that the best available choice is easy to identify.
        </p>
        <h3 key="h3-17-6" className="text-lg md:text-xl font-bold text-amber-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-amber-400"></span>
          17.1 Sort by Ending Time
        </h3>
        <p key="p-17-8" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Used in:
        </p>
        <ul key="ul-17-12" className="my-3 space-y-1.5 pl-2">
          <li key="li-17-0" className="flex items-start gap-2 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 shrink-0"></span>
            <span>Activity Selection</span>
          </li>
          <li key="li-17-1" className="flex items-start gap-2 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 shrink-0"></span>
            <span>Maximum non-overlapping intervals</span>
          </li>
        </ul>
        <div key="code-17-19" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-amber-500/30 border border-amber-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-slate-400 font-sans">Module 16 Greedy Algorithms</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`Arrays.sort(
    intervals,
    Comparator.comparingInt(a -> a[1])
);`}</code>
          </pre>
        </div>
        <h3 key="h3-17-20" className="text-lg md:text-xl font-bold text-amber-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-amber-400"></span>
          17.2 Sort by Starting Time
        </h3>
        <p key="p-17-22" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Used in:
        </p>
        <ul key="ul-17-27" className="my-3 space-y-1.5 pl-2">
          <li key="li-17-0" className="flex items-start gap-2 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 shrink-0"></span>
            <span>Interval Merging</span>
          </li>
          <li key="li-17-1" className="flex items-start gap-2 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 shrink-0"></span>
            <span>Meeting Rooms</span>
          </li>
          <li key="li-17-2" className="flex items-start gap-2 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 shrink-0"></span>
            <span>Overlap detection</span>
          </li>
        </ul>
        <div key="code-17-34" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-amber-500/30 border border-amber-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-slate-400 font-sans">Module 16 Greedy Algorithms</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`Arrays.sort(
    intervals,
    Comparator.comparingInt(a -> a[0])
);`}</code>
          </pre>
        </div>
        <h3 key="h3-17-35" className="text-lg md:text-xl font-bold text-amber-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-amber-400"></span>
          17.3 Sort by Highest Profit
        </h3>
        <p key="p-17-37" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Used in:
        </p>
        <ul key="ul-17-41" className="my-3 space-y-1.5 pl-2">
          <li key="li-17-0" className="flex items-start gap-2 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 shrink-0"></span>
            <span>Job Sequencing</span>
          </li>
          <li key="li-17-1" className="flex items-start gap-2 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 shrink-0"></span>
            <span>Profit-based scheduling</span>
          </li>
        </ul>
        <div key="code-17-51" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-amber-500/30 border border-amber-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-slate-400 font-sans">Module 16 Greedy Algorithms</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`Arrays.sort(
    jobs,
    (a, b) -> Integer.compare(
        b.profit,
        a.profit
    )
);`}</code>
          </pre>
        </div>
        <h3 key="h3-17-52" className="text-lg md:text-xl font-bold text-amber-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-amber-400"></span>
          17.4 Sort by Value-to-Weight Ratio
        </h3>
        <p key="p-17-54" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Used in:
        </p>
        <p key="p-17-56" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          \- Fractional Knapsack
        </p>
        <div key="code-17-67" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-amber-500/30 border border-amber-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-slate-400 font-sans">Module 16 Greedy Algorithms</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`Arrays.sort(
    items,
    (a, b) -> Double.compare(
        b.ratio(),
        a.ratio()
    )
);`}</code>
          </pre>
        </div>
        <h3 key="h3-17-68" className="text-lg md:text-xl font-bold text-amber-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-amber-400"></span>
          17.5 Sort by Ascending or Descending Cost
        </h3>
        <p key="p-17-70" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          In other problems, we may choose:
        </p>
        <ul key="ul-17-76" className="my-3 space-y-1.5 pl-2">
          <li key="li-17-0" className="flex items-start gap-2 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 shrink-0"></span>
            <span>Cheapest resource first.</span>
          </li>
          <li key="li-17-1" className="flex items-start gap-2 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 shrink-0"></span>
            <span>Lowest weight first.</span>
          </li>
          <li key="li-17-2" className="flex items-start gap-2 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 shrink-0"></span>
            <span>Highest benefit first.</span>
          </li>
          <li key="li-17-3" className="flex items-start gap-2 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 shrink-0"></span>
            <span>Earliest deadline first.</span>
          </li>
        </ul>
        <p key="p-17-77" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          The sorting criteria depend entirely on the objective.
        </p>
        <p key="p-17-79" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <strong className="text-white font-semibold">Important:</strong> Sorting is not itself a greedy algorithm. Sorting is often the preparation step that enables the greedy decision.
        </p>
      </div>
    )
  },
  {
    id: 18,
    title: "18. Common Greedy Algorithm Mistakes & Anti-Patterns",
    category: "Defensive Engineering",
    content: (
      <div className="space-y-4">
        <p key="p-18-2" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Even experienced developers can choose the wrong greedy strategy.
        </p>
        <p key="p-18-4" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Here are the mistakes you should learn to recognize.
        </p>
        <h4 key="h4-18-6" className="text-base font-semibold text-white mt-6 mb-2 flex items-center gap-2">
          <span className="text-amber-500 font-mono">▸</span>
          Mistake 1: Selecting the First Available Option
        </h4>
        <p key="p-18-8" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          The first available choice is not necessarily the best choice.
        </p>
        <p key="p-18-10" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          For example, selecting the earliest starting activity does not maximize the number of activities.
        </p>
        <p key="p-18-12" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Use the correct greedy criterion.
        </p>
        <h4 key="h4-18-14" className="text-base font-semibold text-white mt-6 mb-2 flex items-center gap-2">
          <span className="text-amber-500 font-mono">▸</span>
          Mistake 2: Confusing Fractional and 0/1 Knapsack
        </h4>
        <p key="p-18-16" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Greedy by value-to-weight ratio is optimal for Fractional Knapsack.
        </p>
        <p key="p-18-18" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          It is not generally optimal for 0/1 Knapsack.
        </p>
        <h4 key="h4-18-20" className="text-base font-semibold text-white mt-6 mb-2 flex items-center gap-2">
          <span className="text-amber-500 font-mono">▸</span>
          Mistake 3: Forgetting to Sort
        </h4>
        <p key="p-18-22" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Many interval problems require sorting first.
        </p>
        <p key="p-18-24" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Without sorting, a greedy traversal may make incorrect decisions.
        </p>
        <h4 key="h4-18-26" className="text-base font-semibold text-white mt-6 mb-2 flex items-center gap-2">
          <span className="text-amber-500 font-mono">▸</span>
          Mistake 4: Incorrect Interval Boundaries
        </h4>
        <p key="p-18-28" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Understand whether intervals are closed or half-open.
        </p>
        <p key="p-18-30" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          For half-open meeting intervals <code className="font-mono text-amber-300 text-xs px-1.5 py-0.5 rounded bg-slate-900 border border-slate-800">[start, end)</code>, a meeting ending at 10 does not overlap with another meeting starting at 10.
        </p>
        <p key="p-18-32" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          For closed intervals, a shared endpoint is an overlap.
        </p>
        <h4 key="h4-18-34" className="text-base font-semibold text-white mt-6 mb-2 flex items-center gap-2">
          <span className="text-amber-500 font-mono">▸</span>
          Mistake 5: Ignoring Equal Values
        </h4>
        <p key="p-18-36" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          When sorting by profit, ratios, or finishing times, there may be ties.
        </p>
        <p key="p-18-38" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Your algorithm should remain correct even when two choices have equal priority.
        </p>
        <h4 key="h4-18-40" className="text-base font-semibold text-white mt-6 mb-2 flex items-center gap-2">
          <span className="text-amber-500 font-mono">▸</span>
          Mistake 6: Assuming Every Optimization Problem Is Greedy
        </h4>
        <p key="p-18-42" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          A locally best option can eliminate a globally optimal answer.
        </p>
        <p key="p-18-44" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Always test the proposed greedy strategy against counterexamples and prove its correctness.
        </p>
      </div>
    )
  },
  {
    id: 19,
    title: "19. Greedy Algorithm Problem Recognition Guide",
    category: "Interview Patterns",
    content: (
      <div className="space-y-4">
        <p key="p-19-2" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          When solving a new coding problem, try to identify the following clues.
        </p>
        <div key="table-19-15" className="my-5 overflow-x-auto rounded-xl border border-slate-800 shadow-md">
          <table className="w-full text-xs text-left border-collapse">
            <thead>
              <tr className="bg-slate-900 border-b border-slate-800 text-amber-400 font-mono">
                <th key="th-19-0" className="p-3 font-semibold">Problem description</th>
                <th key="th-19-1" className="p-3 font-semibold">Possible technique</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-850 bg-slate-950/60 font-sans">
              <tr key="tr-19-0" className="hover:bg-slate-900/40 transition-colors">
                <td key="td-19-0-0" className="p-3 text-slate-300 font-mono text-slate-200">Maximize number of non-overlapping tasks</td>
                <td key="td-19-0-1" className="p-3 text-slate-300 ">Sort by ending time</td>
              </tr>
              <tr key="tr-19-1" className="hover:bg-slate-900/40 transition-colors">
                <td key="td-19-1-0" className="p-3 text-slate-300 font-mono text-slate-200">Combine overlapping ranges</td>
                <td key="td-19-1-1" className="p-3 text-slate-300 ">Sort by starting time</td>
              </tr>
              <tr key="tr-19-2" className="hover:bg-slate-900/40 transition-colors">
                <td key="td-19-2-0" className="p-3 text-slate-300 font-mono text-slate-200">Maximize value with divisible items</td>
                <td key="td-19-2-1" className="p-3 text-slate-300 ">Value/weight ratio</td>
              </tr>
              <tr key="tr-19-3" className="hover:bg-slate-900/40 transition-colors">
                <td key="td-19-3-0" className="p-3 text-slate-300 font-mono text-slate-200">Schedule jobs with deadlines and profit</td>
                <td key="td-19-3-1" className="p-3 text-slate-300 ">Profit sorting + slots</td>
              </tr>
              <tr key="tr-19-4" className="hover:bg-slate-900/40 transition-colors">
                <td key="td-19-4-0" className="p-3 text-slate-300 font-mono text-slate-200">Minimum number of overlapping resources</td>
                <td key="td-19-4-1" className="p-3 text-slate-300 ">Min heap / sweep line</td>
              </tr>
              <tr key="tr-19-5" className="hover:bg-slate-900/40 transition-colors">
                <td key="td-19-5-0" className="p-3 text-slate-300 font-mono text-slate-200">Build an optimal prefix code</td>
                <td key="td-19-5-1" className="p-3 text-slate-300 ">Huffman + priority queue</td>
              </tr>
              <tr key="tr-19-6" className="hover:bg-slate-900/40 transition-colors">
                <td key="td-19-6-0" className="p-3 text-slate-300 font-mono text-slate-200">Reach the end using maximum jumps</td>
                <td key="td-19-6-1" className="p-3 text-slate-300 ">Greedy reachability</td>
              </tr>
              <tr key="tr-19-7" className="hover:bg-slate-900/40 transition-colors">
                <td key="td-19-7-0" className="p-3 text-slate-300 font-mono text-slate-200">Complete circular fuel journey</td>
                <td key="td-19-7-1" className="p-3 text-slate-300 ">Greedy reset</td>
              </tr>
              <tr key="tr-19-8" className="hover:bg-slate-900/40 transition-colors">
                <td key="td-19-8-0" className="p-3 text-slate-300 font-mono text-slate-200">Distribute tasks around cooldown periods</td>
                <td key="td-19-8-1" className="p-3 text-slate-300 ">Frequency-based greedy</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p key="p-19-16" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          These patterns help you recognize greedy problems during interviews.
        </p>
      </div>
    )
  },
  {
    id: 20,
    title: "20. Important Complexity Summary Master Table",
    category: "Complexity Analysis",
    content: (
      <div className="space-y-4">
        <div key="table-20-17" className="my-5 overflow-x-auto rounded-xl border border-slate-800 shadow-md">
          <table className="w-full text-xs text-left border-collapse">
            <thead>
              <tr className="bg-slate-900 border-b border-slate-800 text-amber-400 font-mono">
                <th key="th-20-0" className="p-3 font-semibold">Problem</th>
                <th key="th-20-1" className="p-3 font-semibold">Main technique</th>
                <th key="th-20-2" className="p-3 font-semibold">Time complexity</th>
                <th key="th-20-3" className="p-3 font-semibold">Space complexity</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-850 bg-slate-950/60 font-sans">
              <tr key="tr-20-0" className="hover:bg-slate-900/40 transition-colors">
                <td key="td-20-0-0" className="p-3 text-slate-300 font-mono text-slate-200">Activity Selection</td>
                <td key="td-20-0-1" className="p-3 text-slate-300 ">Sorting + greedy</td>
                <td key="td-20-0-2" className="p-3 text-slate-300 ">O(N log N)</td>
                <td key="td-20-0-3" className="p-3 text-slate-300 ">O(1) auxiliary, excluding sorting</td>
              </tr>
              <tr key="tr-20-1" className="hover:bg-slate-900/40 transition-colors">
                <td key="td-20-1-0" className="p-3 text-slate-300 font-mono text-slate-200">Interval Scheduling</td>
                <td key="td-20-1-1" className="p-3 text-slate-300 ">Sorting + greedy</td>
                <td key="td-20-1-2" className="p-3 text-slate-300 ">O(N log N)</td>
                <td key="td-20-1-3" className="p-3 text-slate-300 ">Depends on output</td>
              </tr>
              <tr key="tr-20-2" className="hover:bg-slate-900/40 transition-colors">
                <td key="td-20-2-0" className="p-3 text-slate-300 font-mono text-slate-200">Interval Merging</td>
                <td key="td-20-2-1" className="p-3 text-slate-300 ">Sorting + traversal</td>
                <td key="td-20-2-2" className="p-3 text-slate-300 ">O(N log N)</td>
                <td key="td-20-2-3" className="p-3 text-slate-300 ">O(N) output</td>
              </tr>
              <tr key="tr-20-3" className="hover:bg-slate-900/40 transition-colors">
                <td key="td-20-3-0" className="p-3 text-slate-300 font-mono text-slate-200">Minimum Platforms</td>
                <td key="td-20-3-1" className="p-3 text-slate-300 ">Sorting + two pointers</td>
                <td key="td-20-3-2" className="p-3 text-slate-300 ">O(N log N)</td>
                <td key="td-20-3-3" className="p-3 text-slate-300 ">O(1) auxiliary, excluding sorting</td>
              </tr>
              <tr key="tr-20-4" className="hover:bg-slate-900/40 transition-colors">
                <td key="td-20-4-0" className="p-3 text-slate-300 font-mono text-slate-200">Fractional Knapsack</td>
                <td key="td-20-4-1" className="p-3 text-slate-300 ">Ratio sorting</td>
                <td key="td-20-4-2" className="p-3 text-slate-300 ">O(N log N)</td>
                <td key="td-20-4-3" className="p-3 text-slate-300 ">O(1) auxiliary, excluding sorting</td>
              </tr>
              <tr key="tr-20-5" className="hover:bg-slate-900/40 transition-colors">
                <td key="td-20-5-0" className="p-3 text-slate-300 font-mono text-slate-200">Job Sequencing</td>
                <td key="td-20-5-1" className="p-3 text-slate-300 ">Profit sorting + DSU</td>
                <td key="td-20-5-2" className="p-3 text-slate-300 ">O(N log N + D + Nα(D))</td>
                <td key="td-20-5-3" className="p-3 text-slate-300 ">O(D)</td>
              </tr>
              <tr key="tr-20-6" className="hover:bg-slate-900/40 transition-colors">
                <td key="td-20-6-0" className="p-3 text-slate-300 font-mono text-slate-200">Huffman Coding</td>
                <td key="td-20-6-1" className="p-3 text-slate-300 ">Minimum priority queue</td>
                <td key="td-20-6-2" className="p-3 text-slate-300 ">O(N log N)</td>
                <td key="td-20-6-3" className="p-3 text-slate-300 ">O(N)</td>
              </tr>
              <tr key="tr-20-7" className="hover:bg-slate-900/40 transition-colors">
                <td key="td-20-7-0" className="p-3 text-slate-300 font-mono text-slate-200">Meeting Rooms I</td>
                <td key="td-20-7-1" className="p-3 text-slate-300 ">Sorting + traversal</td>
                <td key="td-20-7-2" className="p-3 text-slate-300 ">O(N log N)</td>
                <td key="td-20-7-3" className="p-3 text-slate-300 ">O(1) auxiliary, excluding sorting</td>
              </tr>
              <tr key="tr-20-8" className="hover:bg-slate-900/40 transition-colors">
                <td key="td-20-8-0" className="p-3 text-slate-300 font-mono text-slate-200">Meeting Rooms II</td>
                <td key="td-20-8-1" className="p-3 text-slate-300 ">Sorting + min heap</td>
                <td key="td-20-8-2" className="p-3 text-slate-300 ">O(N log N)</td>
                <td key="td-20-8-3" className="p-3 text-slate-300 ">O(N)</td>
              </tr>
              <tr key="tr-20-9" className="hover:bg-slate-900/40 transition-colors">
                <td key="td-20-9-0" className="p-3 text-slate-300 font-mono text-slate-200">Jump Game I</td>
                <td key="td-20-9-1" className="p-3 text-slate-300 ">Reachability</td>
                <td key="td-20-9-2" className="p-3 text-slate-300 ">O(N)</td>
                <td key="td-20-9-3" className="p-3 text-slate-300 ">O(1)</td>
              </tr>
              <tr key="tr-20-10" className="hover:bg-slate-900/40 transition-colors">
                <td key="td-20-10-0" className="p-3 text-slate-300 font-mono text-slate-200">Jump Game II</td>
                <td key="td-20-10-1" className="p-3 text-slate-300 ">Range expansion</td>
                <td key="td-20-10-2" className="p-3 text-slate-300 ">O(N)</td>
                <td key="td-20-10-3" className="p-3 text-slate-300 ">O(1)</td>
              </tr>
              <tr key="tr-20-11" className="hover:bg-slate-900/40 transition-colors">
                <td key="td-20-11-0" className="p-3 text-slate-300 font-mono text-slate-200">Gas Station</td>
                <td key="td-20-11-1" className="p-3 text-slate-300 ">Greedy traversal</td>
                <td key="td-20-11-2" className="p-3 text-slate-300 ">O(N)</td>
                <td key="td-20-11-3" className="p-3 text-slate-300 ">O(1)</td>
              </tr>
              <tr key="tr-20-12" className="hover:bg-slate-900/40 transition-colors">
                <td key="td-20-12-0" className="p-3 text-slate-300 font-mono text-slate-200">Task Scheduler</td>
                <td key="td-20-12-1" className="p-3 text-slate-300 ">Frequency counting</td>
                <td key="td-20-12-2" className="p-3 text-slate-300 ">O(N)</td>
                <td key="td-20-12-3" className="p-3 text-slate-300 ">O(1) for 26 uppercase tasks</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p key="p-20-18" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Here, N represents the number of input elements, and D represents the maximum job deadline.
        </p>
      </div>
    )
  },
  {
    id: 21,
    title: "21. Interview and Practice Problems (Levels 1–4)",
    category: "Practice Roadmap",
    content: (
      <div className="space-y-4">
        <p key="p-21-2" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          These problems will help you understand when to use greedy algorithms rather than memorizing implementations.
        </p>
        <h3 key="h3-21-4" className="text-lg md:text-xl font-bold text-amber-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-amber-400"></span>
          Level 1 — Fundamentals
        </h3>
        <ol key="ol-21-12" className="my-3 space-y-2 pl-2">
          <li key="oli-21-0" className="flex items-start gap-2.5 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-5 h-5 rounded-full bg-slate-800 text-amber-400 font-mono text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5 border border-slate-700">
              1
            </span>
            <span>Assign Cookies</span>
          </li>
          <li key="oli-21-1" className="flex items-start gap-2.5 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-5 h-5 rounded-full bg-slate-800 text-amber-400 font-mono text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5 border border-slate-700">
              2
            </span>
            <span>Lemonade Change</span>
          </li>
          <li key="oli-21-2" className="flex items-start gap-2.5 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-5 h-5 rounded-full bg-slate-800 text-amber-400 font-mono text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5 border border-slate-700">
              3
            </span>
            <span>Best Time to Buy and Sell Stock II</span>
          </li>
          <li key="oli-21-3" className="flex items-start gap-2.5 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-5 h-5 rounded-full bg-slate-800 text-amber-400 font-mono text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5 border border-slate-700">
              4
            </span>
            <span>Maximum Units on a Truck</span>
          </li>
          <li key="oli-21-4" className="flex items-start gap-2.5 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-5 h-5 rounded-full bg-slate-800 text-amber-400 font-mono text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5 border border-slate-700">
              5
            </span>
            <span>Can Place Flowers</span>
          </li>
          <li key="oli-21-5" className="flex items-start gap-2.5 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-5 h-5 rounded-full bg-slate-800 text-amber-400 font-mono text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5 border border-slate-700">
              6
            </span>
            <span>Minimum Cost to Connect Sticks</span>
          </li>
        </ol>
        <h3 key="h3-21-13" className="text-lg md:text-xl font-bold text-amber-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-amber-400"></span>
          Level 2 — Intervals and Scheduling
        </h3>
        <ol key="ol-21-23" className="my-3 space-y-2 pl-2">
          <li key="oli-21-0" className="flex items-start gap-2.5 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-5 h-5 rounded-full bg-slate-800 text-amber-400 font-mono text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5 border border-slate-700">
              1
            </span>
            <span>Non-overlapping Intervals</span>
          </li>
          <li key="oli-21-1" className="flex items-start gap-2.5 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-5 h-5 rounded-full bg-slate-800 text-amber-400 font-mono text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5 border border-slate-700">
              2
            </span>
            <span>Minimum Number of Arrows to Burst Balloons</span>
          </li>
          <li key="oli-21-2" className="flex items-start gap-2.5 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-5 h-5 rounded-full bg-slate-800 text-amber-400 font-mono text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5 border border-slate-700">
              3
            </span>
            <span>Insert Interval</span>
          </li>
          <li key="oli-21-3" className="flex items-start gap-2.5 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-5 h-5 rounded-full bg-slate-800 text-amber-400 font-mono text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5 border border-slate-700">
              4
            </span>
            <span>Merge Intervals</span>
          </li>
          <li key="oli-21-4" className="flex items-start gap-2.5 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-5 h-5 rounded-full bg-slate-800 text-amber-400 font-mono text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5 border border-slate-700">
              5
            </span>
            <span>Meeting Rooms</span>
          </li>
          <li key="oli-21-5" className="flex items-start gap-2.5 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-5 h-5 rounded-full bg-slate-800 text-amber-400 font-mono text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5 border border-slate-700">
              6
            </span>
            <span>Meeting Rooms II</span>
          </li>
          <li key="oli-21-6" className="flex items-start gap-2.5 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-5 h-5 rounded-full bg-slate-800 text-amber-400 font-mono text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5 border border-slate-700">
              7
            </span>
            <span>Minimum Number of Platforms</span>
          </li>
          <li key="oli-21-7" className="flex items-start gap-2.5 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-5 h-5 rounded-full bg-slate-800 text-amber-400 font-mono text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5 border border-slate-700">
              8
            </span>
            <span>Job Sequencing with Deadlines</span>
          </li>
        </ol>
        <h3 key="h3-21-24" className="text-lg md:text-xl font-bold text-amber-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-amber-400"></span>
          Level 3 — Greedy Optimization
        </h3>
        <ol key="ol-21-36" className="my-3 space-y-2 pl-2">
          <li key="oli-21-0" className="flex items-start gap-2.5 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-5 h-5 rounded-full bg-slate-800 text-amber-400 font-mono text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5 border border-slate-700">
              1
            </span>
            <span>Fractional Knapsack</span>
          </li>
          <li key="oli-21-1" className="flex items-start gap-2.5 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-5 h-5 rounded-full bg-slate-800 text-amber-400 font-mono text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5 border border-slate-700">
              2
            </span>
            <span>Jump Game</span>
          </li>
          <li key="oli-21-2" className="flex items-start gap-2.5 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-5 h-5 rounded-full bg-slate-800 text-amber-400 font-mono text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5 border border-slate-700">
              3
            </span>
            <span>Jump Game II</span>
          </li>
          <li key="oli-21-3" className="flex items-start gap-2.5 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-5 h-5 rounded-full bg-slate-800 text-amber-400 font-mono text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5 border border-slate-700">
              4
            </span>
            <span>Gas Station</span>
          </li>
          <li key="oli-21-4" className="flex items-start gap-2.5 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-5 h-5 rounded-full bg-slate-800 text-amber-400 font-mono text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5 border border-slate-700">
              5
            </span>
            <span>Task Scheduler</span>
          </li>
          <li key="oli-21-5" className="flex items-start gap-2.5 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-5 h-5 rounded-full bg-slate-800 text-amber-400 font-mono text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5 border border-slate-700">
              6
            </span>
            <span>Partition Labels</span>
          </li>
          <li key="oli-21-6" className="flex items-start gap-2.5 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-5 h-5 rounded-full bg-slate-800 text-amber-400 font-mono text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5 border border-slate-700">
              7
            </span>
            <span>Hand of Straights</span>
          </li>
          <li key="oli-21-7" className="flex items-start gap-2.5 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-5 h-5 rounded-full bg-slate-800 text-amber-400 font-mono text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5 border border-slate-700">
              8
            </span>
            <span>Reorganize String</span>
          </li>
          <li key="oli-21-8" className="flex items-start gap-2.5 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-5 h-5 rounded-full bg-slate-800 text-amber-400 font-mono text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5 border border-slate-700">
              9
            </span>
            <span>Huffman Coding</span>
          </li>
          <li key="oli-21-9" className="flex items-start gap-2.5 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-5 h-5 rounded-full bg-slate-800 text-amber-400 font-mono text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5 border border-slate-700">
              10
            </span>
            <span>Candy Distribution</span>
          </li>
        </ol>
        <h3 key="h3-21-37" className="text-lg md:text-xl font-bold text-amber-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-amber-400"></span>
          Level 4 — Advanced Problem Solving
        </h3>
        <ol key="ol-21-47" className="my-3 space-y-2 pl-2">
          <li key="oli-21-0" className="flex items-start gap-2.5 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-5 h-5 rounded-full bg-slate-800 text-amber-400 font-mono text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5 border border-slate-700">
              1
            </span>
            <span>Minimum Refueling Stops</span>
          </li>
          <li key="oli-21-1" className="flex items-start gap-2.5 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-5 h-5 rounded-full bg-slate-800 text-amber-400 font-mono text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5 border border-slate-700">
              2
            </span>
            <span>IPO — Maximize Capital</span>
          </li>
          <li key="oli-21-2" className="flex items-start gap-2.5 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-5 h-5 rounded-full bg-slate-800 text-amber-400 font-mono text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5 border border-slate-700">
              3
            </span>
            <span>Course Schedule III</span>
          </li>
          <li key="oli-21-3" className="flex items-start gap-2.5 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-5 h-5 rounded-full bg-slate-800 text-amber-400 font-mono text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5 border border-slate-700">
              4
            </span>
            <span>Smallest Range Covering Elements from K Lists</span>
          </li>
          <li key="oli-21-4" className="flex items-start gap-2.5 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-5 h-5 rounded-full bg-slate-800 text-amber-400 font-mono text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5 border border-slate-700">
              5
            </span>
            <span>Maximum Performance of a Team</span>
          </li>
          <li key="oli-21-5" className="flex items-start gap-2.5 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-5 h-5 rounded-full bg-slate-800 text-amber-400 font-mono text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5 border border-slate-700">
              6
            </span>
            <span>Minimum Cost to Hire K Workers</span>
          </li>
          <li key="oli-21-6" className="flex items-start gap-2.5 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-5 h-5 rounded-full bg-slate-800 text-amber-400 font-mono text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5 border border-slate-700">
              7
            </span>
            <span>Create Maximum Number</span>
          </li>
          <li key="oli-21-7" className="flex items-start gap-2.5 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-5 h-5 rounded-full bg-slate-800 text-amber-400 font-mono text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5 border border-slate-700">
              8
            </span>
            <span>Remove K Digits</span>
          </li>
        </ol>
        <p key="p-21-48" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          These advanced problems combine greedy algorithms with heaps, sorting, priority queues, data structures, and sometimes binary search or dynamic programming.
        </p>
      </div>
    )
  },
  {
    id: 22,
    title: "22. Module 16 — Final Understanding & Mastery Checklist",
    category: "Mastery Review",
    content: (
      <div className="space-y-4">
        <p key="p-22-2" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Before moving forward, make sure you understand these concepts:
        </p>
        <p key="p-22-4" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <strong className="text-white font-semibold">Core concepts checklist</strong>
        </p>
        <p key="p-22-6" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          0 of 16 completed
        </p>
        <p key="p-22-8" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          0%
        </p>
        <p key="p-22-10" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Understand greedy algorithm fundamentals
        </p>
        <p key="p-22-12" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Understand the greedy-choice property
        </p>
        <p key="p-22-14" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Understand optimal substructure
        </p>
        <p key="p-22-16" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Know how to prove greedy correctness
        </p>
        <p key="p-22-18" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Implement Activity Selection
        </p>
        <p key="p-22-20" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Solve interval merging problems
        </p>
        <p key="p-22-22" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Understand Minimum Platforms using two pointers
        </p>
        <p key="p-22-24" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Implement Fractional Knapsack
        </p>
        <p key="p-22-26" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Understand Job Sequencing with DSU
        </p>
        <p key="p-22-28" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Build Huffman trees using PriorityQueue
        </p>
        <p key="p-22-30" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Solve Meeting Rooms I and II
        </p>
        <p key="p-22-32" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Solve Jump Game I and II
        </p>
        <p key="p-22-34" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Understand the Gas Station algorithm
        </p>
        <p key="p-22-36" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Solve the CPU Task Scheduler problem
        </p>
        <p key="p-22-38" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Understand Greedy vs Dynamic Programming
        </p>
        <p key="p-22-40" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Recognize sorting-based greedy strategies
        </p>
        <p key="p-22-42" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Reset checklist
        </p>
        <h3 key="h3-22-44" className="text-lg md:text-xl font-bold text-amber-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-amber-400"></span>
          The most important lessons
        </h3>
        <ol key="ol-22-52" className="my-3 space-y-2 pl-2">
          <li key="oli-22-0" className="flex items-start gap-2.5 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-5 h-5 rounded-full bg-slate-800 text-amber-400 font-mono text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5 border border-slate-700">
              1
            </span>
            <span>Greedy algorithms make locally optimal decisions.</span>
          </li>
          <li key="oli-22-1" className="flex items-start gap-2.5 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-5 h-5 rounded-full bg-slate-800 text-amber-400 font-mono text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5 border border-slate-700">
              2
            </span>
            <span>The greedy-choice property explains why a local decision can lead to a global optimum.</span>
          </li>
          <li key="oli-22-2" className="flex items-start gap-2.5 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-5 h-5 rounded-full bg-slate-800 text-amber-400 font-mono text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5 border border-slate-700">
              3
            </span>
            <span>Optimal substructure allows us to solve the remaining problem after making a decision.</span>
          </li>
          <li key="oli-22-3" className="flex items-start gap-2.5 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-5 h-5 rounded-full bg-slate-800 text-amber-400 font-mono text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5 border border-slate-700">
              4
            </span>
            <span>Exchange arguments and stays-ahead proofs help establish correctness.</span>
          </li>
          <li key="oli-22-4" className="flex items-start gap-2.5 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-5 h-5 rounded-full bg-slate-800 text-amber-400 font-mono text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5 border border-slate-700">
              5
            </span>
            <span>Sorting and priority queues are two of the most common tools used in greedy algorithms.</span>
          </li>
          <li key="oli-22-5" className="flex items-start gap-2.5 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-5 h-5 rounded-full bg-slate-800 text-amber-400 font-mono text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5 border border-slate-700">
              6
            </span>
            <span>Not every optimization problem can be solved greedily. Some require dynamic programming.</span>
          </li>
        </ol>
        <p key="p-22-53" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <strong className="text-white font-semibold">Your goal after completing this module:</strong> You should be able to look at an unfamiliar optimization problem, identify a potential greedy strategy, determine whether it is valid, prove its correctness, and implement it efficiently in Java.
        </p>
        <p key="p-22-55" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <strong className="text-white font-semibold">Next Module — Module 17: Binary Search &amp; Advanced Searching Techniques</strong>
        </p>
        <p key="p-22-57" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          This will cover binary search fundamentals, search space reduction, lower and upper bounds, first and last occurrence, rotated sorted arrays, binary search on answers, square root problems, peak elements, and advanced search-based optimization.
        </p>
      </div>
    )
  },
];
