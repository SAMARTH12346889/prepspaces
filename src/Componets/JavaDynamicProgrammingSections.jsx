import React from "react";

export const JAVA_DYNAMIC_PROGRAMMING_SECTIONS = [
  {
    id: 0,
    title: "Module 19 Overview & Central Idea",
    summary: "Curriculum roadmap: Subproblem memoization, bottom-up tabulation, state transitions, knapsack, subsequences, and interval DP.",
    content: (
      <div className="space-y-4">
        <p key="p-0-0" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          &lt;USER_REQUEST&gt;
        </p>
        <p key="p-0-1" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          # <strong className="font-bold text-white">Module 19 — Dynamic Programming Fundamentals</strong>
        </p>
        <p key="p-0-3" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Dynamic Programming (DP) is one of the most important and challenging topics in Data Structures and Algorithms. It is widely used in technical interviews, competitive programming, optimization problems, financial modeling, resource allocation, artificial intelligence, and software engineering.
        </p>
        <p key="p-0-5" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          In previous modules, you learned:
        </p>
        <ul key="ul-0-12" className="my-3 space-y-1.5 text-xs md:text-sm text-slate-300 list-disc list-inside">
          <li>Arrays, strings, and linked lists.</li>
          <li>Stacks, queues, and hash-based data structures.</li>
          <li>Trees and searching techniques.</li>
          <li>Greedy algorithms and graph algorithms.</li>
          <li>Recursion and different problem-solving techniques.</li>
      </ul>
        <p key="p-0-13" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Now you will learn how to solve problems in which the same smaller calculations are required repeatedly.
        </p>
        <p key="p-0-15" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Dynamic Programming helps us avoid performing those calculations again and again by storing their results and reusing them.
        </p>
        <p key="p-0-17" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <strong className="font-bold text-white">The central idea of DP is to break a complex problem into smaller subproblems, solve each necessary subproblem once, store its result, and use those results to construct the final answer.</strong>
        </p>
        <p key="p-0-19" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          This module will cover both theoretical foundations and practical Java implementations. We will start with Fibonacci and gradually progress toward knapsack, subsequence problems, edit distance, and matrix chain multiplication.
        </p>
      </div>
    )
  },
  {
    id: 1,
    title: "1. Dynamic Programming Introduction",
    summary: "The core philosophy of DP, avoiding redundant calculations by storing subproblem answers, and real-world applications.",
    content: (
      <div className="space-y-4">
        <h3 key="h3-1-2" className="text-lg md:text-xl font-bold text-indigo-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-indigo-400"></span>
          1.1 What Is Dynamic Programming?
        </h3>
        <p key="p-1-4" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Dynamic Programming is an algorithmic technique used to solve problems by dividing them into smaller, related subproblems.
        </p>
        <p key="p-1-6" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Instead of calculating the same subproblem repeatedly, DP stores its result so that it can be reused whenever required.
        </p>
        <p key="p-1-8" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Consider calculating the Fibonacci sequence.
        </p>
        <p key="p-1-10" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          The mathematical definition is:
        </p>
        <p key="p-1-12" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          \<span className="font-mono text-indigo-300 font-semibold"> F(n)=F(n-1)+F(n-2) \</span>
        </p>
        <p key="p-1-14" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          With base cases:
        </p>
        <p key="p-1-16" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          \<span className="font-mono text-indigo-300 font-semibold"> F(0)=0 \</span>
        </p>
        <p key="p-1-18" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          \<span className="font-mono text-indigo-300 font-semibold"> F(1)=1 \</span>
        </p>
        <p key="p-1-20" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          The sequence is:
        </p>
        <div key="code-1-25" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-indigo-500/30 border border-indigo-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-slate-400 font-sans">Module 19 Dynamic Programming Fundamentals</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...`}</code>
          </pre>
        </div>
        <p key="p-1-26" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Suppose you want to calculate:
        </p>
        <p key="p-1-28" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          \<span className="font-mono text-indigo-300 font-semibold"> F(6) \</span>
        </p>
        <p key="p-1-30" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Using recursion:
        </p>
        <p key="p-1-32" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          \<span className="font-mono text-indigo-300 font-semibold"> F(6)=F(5)+F(4) \</span>
        </p>
        <p key="p-1-34" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          But calculating F(5) requires F(4), and calculating F(4) requires F(3).
        </p>
        <p key="p-1-36" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          The same values get calculated repeatedly.
        </p>
        <p key="p-1-38" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          This is where Dynamic Programming becomes useful.
        </p>
        <p key="p-1-40" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Instead of repeatedly calculating F(4), we calculate it once and store its result.
        </p>
        <h3 key="h3-1-42" className="text-lg md:text-xl font-bold text-indigo-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-indigo-400"></span>
          1.2 Understanding the Difference
        </h3>
        <p key="p-1-44" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <strong className="font-bold text-white">Without Dynamic Programming</strong>
        </p>
        <p key="p-1-46" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Repeated recursive calculations
        </p>
        <p key="p-1-48" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          The same subproblems appear in multiple branches of the recursion tree.
        </p>
        <p key="p-1-50" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <strong className="font-bold text-white">With Dynamic Programming</strong>
        </p>
        <p key="p-1-52" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Calculate and store each result
        </p>
        <p key="p-1-54" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          F(0)
        </p>
        <h3 key="h3-1-56" className="text-lg md:text-xl font-bold text-indigo-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-indigo-400"></span>
          0
        </h3>
        <p key="p-1-58" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          F(1)
        </p>
        <h3 key="h3-1-60" className="text-lg md:text-xl font-bold text-indigo-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-indigo-400"></span>
          1
        </h3>
        <p key="p-1-62" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          F(2)
        </p>
        <h3 key="h3-1-64" className="text-lg md:text-xl font-bold text-indigo-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-indigo-400"></span>
          1
        </h3>
        <p key="p-1-66" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          F(3)
        </p>
        <h3 key="h3-1-68" className="text-lg md:text-xl font-bold text-indigo-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-indigo-400"></span>
          2
        </h3>
        <p key="p-1-70" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          F(4)
        </p>
        <h3 key="h3-1-72" className="text-lg md:text-xl font-bold text-indigo-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-indigo-400"></span>
          3
        </h3>
        <p key="p-1-74" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          F(5)
        </p>
        <h3 key="h3-1-76" className="text-lg md:text-xl font-bold text-indigo-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-indigo-400"></span>
          5
        </h3>
        <p key="p-1-78" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          F(6)
        </p>
        <h3 key="h3-1-80" className="text-lg md:text-xl font-bold text-indigo-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-indigo-400"></span>
          8
        </h3>
        <p key="p-1-82" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Each Fibonacci value is calculated once and reused.
        </p>
        <p key="p-1-84" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          The difference is that ordinary recursive Fibonacci repeats many calculations, whereas DP remembers previously calculated values.
        </p>
        <h3 key="h3-1-86" className="text-lg md:text-xl font-bold text-indigo-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-indigo-400"></span>
          1.3 Why Is Dynamic Programming Important?
        </h3>
        <p key="p-1-88" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Consider a software application that calculates:
        </p>
        <ul key="ul-1-95" className="my-3 space-y-1.5 text-xs md:text-sm text-slate-300 list-disc list-inside">
          <li>The minimum cost of completing a project.</li>
          <li>The best way to allocate resources.</li>
          <li>The shortest transformation between two strings.</li>
          <li>The maximum profit under a given budget.</li>
          <li>The best sequence of operations to perform.</li>
      </ul>
        <p key="p-1-96" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Many of these problems contain smaller calculations that are repeated.
        </p>
        <p key="p-1-98" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          DP helps optimize such solutions.
        </p>
        <h4 key="h4-1-100" className="text-base font-semibold text-emerald-400 mt-6 mb-2">
          Common Applications
        </h4>
        <div key="table-1-112" className="my-6 overflow-x-auto rounded-xl border border-slate-800 bg-slate-950/70 shadow-sm">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="bg-slate-900/90 border-b border-slate-800 text-slate-300 font-mono">
                <th className="p-3 font-semibold">Area</th>
                <th className="p-3 font-semibold">Application</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60 text-slate-300 font-sans">
              <tr className="hover:bg-slate-900/40 transition">
                  <td className="p-3">Finance</td>
                  <td className="p-3">Portfolio and investment optimization</td>
                </tr>
              <tr className="hover:bg-slate-900/40 transition">
                  <td className="p-3">Software engineering</td>
                  <td className="p-3">String comparison and edit distance</td>
                </tr>
              <tr className="hover:bg-slate-900/40 transition">
                  <td className="p-3">Artificial intelligence</td>
                  <td className="p-3">Planning and optimization</td>
                </tr>
              <tr className="hover:bg-slate-900/40 transition">
                  <td className="p-3">Bioinformatics</td>
                  <td className="p-3">DNA sequence alignment</td>
                </tr>
              <tr className="hover:bg-slate-900/40 transition">
                  <td className="p-3">Operating systems</td>
                  <td className="p-3">Resource allocation</td>
                </tr>
              <tr className="hover:bg-slate-900/40 transition">
                  <td className="p-3">Computer science</td>
                  <td className="p-3">Knapsack and scheduling problems</td>
                </tr>
              <tr className="hover:bg-slate-900/40 transition">
                  <td className="p-3">Natural language processing</td>
                  <td className="p-3">Sequence processing</td>
                </tr>
              <tr className="hover:bg-slate-900/40 transition">
                  <td className="p-3">Robotics</td>
                  <td className="p-3">Path and decision optimization</td>
                </tr>
            </tbody>
          </table>
        </div>
      </div>
    )
  },
  {
    id: 2,
    title: "2. Overlapping Subproblems",
    summary: "Understanding when a recursive call tree re-evaluates the same subproblems repeatedly, comparing Fibonacci with Merge Sort.",
    content: (
      <div className="space-y-4">
        <p key="p-2-2" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Overlapping subproblems are one of the two main properties that make Dynamic Programming applicable.
        </p>
        <h3 key="h3-2-4" className="text-lg md:text-xl font-bold text-indigo-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-indigo-400"></span>
          2.1 What Are Overlapping Subproblems?
        </h3>
        <p key="p-2-6" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          A problem has overlapping subproblems when solving it recursively requires calculating the same smaller problems multiple times.
        </p>
        <p key="p-2-8" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Let's consider:
        </p>
        <p key="p-2-10" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          \<span className="font-mono text-indigo-300 font-semibold"> F(5)=F(4)+F(3) \</span>
        </p>
        <p key="p-2-12" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Expanding the expression:
        </p>
        <p key="p-2-14" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          \<span className="font-mono text-indigo-300 font-semibold"> F(4)=F(3)+F(2) \</span>
        </p>
        <p key="p-2-16" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          \<span className="font-mono text-indigo-300 font-semibold"> F(3)=F(2)+F(1) \</span>
        </p>
        <p key="p-2-18" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Notice that F(3) and F(2) appear more than once.
        </p>
        <p key="p-2-20" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          When the input becomes larger, repeated calculations grow significantly.
        </p>
        <h4 key="h4-2-22" className="text-base font-semibold text-emerald-400 mt-6 mb-2">
          Recursive Fibonacci Tree
        </h4>
        <div key="code-2-33" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-indigo-500/30 border border-indigo-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-slate-400 font-sans">Module 19 Dynamic Programming Fundamentals</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`                F(5)
              /      \\
           F(4)       F(3)
          /   \\       /  \\
       F(3)  F(2)   F(2) F(1)
       / \\
     F(2) F(1)`}</code>
          </pre>
        </div>
        <p key="p-2-34" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Observe:
        </p>
        <ul key="ul-2-39" className="my-3 space-y-1.5 text-xs md:text-sm text-slate-300 list-disc list-inside">
          <li>F(3) is calculated repeatedly.</li>
          <li>F(2) is calculated repeatedly.</li>
          <li>F(1) is also reached through multiple branches.</li>
      </ul>
        <p key="p-2-40" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Instead of recalculating these values, DP stores them.
        </p>
        <h3 key="h3-2-42" className="text-lg md:text-xl font-bold text-indigo-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-indigo-400"></span>
          2.2 How DP Solves Overlapping Subproblems
        </h3>
        <p key="p-2-44" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Suppose we calculate F(5).
        </p>
        <p key="p-2-46" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          We can store the values:
        </p>
        <div key="table-2-56" className="my-6 overflow-x-auto rounded-xl border border-slate-800 bg-slate-950/70 shadow-sm">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="bg-slate-900/90 border-b border-slate-800 text-slate-300 font-mono">
                <th className="p-3 font-semibold">n</th>
                <th className="p-3 font-semibold">Fibonacci value</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60 text-slate-300 font-sans">
              <tr className="hover:bg-slate-900/40 transition">
                  <td className="p-3">0</td>
                  <td className="p-3">0</td>
                </tr>
              <tr className="hover:bg-slate-900/40 transition">
                  <td className="p-3">1</td>
                  <td className="p-3">1</td>
                </tr>
              <tr className="hover:bg-slate-900/40 transition">
                  <td className="p-3">2</td>
                  <td className="p-3">1</td>
                </tr>
              <tr className="hover:bg-slate-900/40 transition">
                  <td className="p-3">3</td>
                  <td className="p-3">2</td>
                </tr>
              <tr className="hover:bg-slate-900/40 transition">
                  <td className="p-3">4</td>
                  <td className="p-3">3</td>
                </tr>
              <tr className="hover:bg-slate-900/40 transition">
                  <td className="p-3">5</td>
                  <td className="p-3">5</td>
                </tr>
            </tbody>
          </table>
        </div>
        <p key="p-2-57" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Now whenever we need F(3), we retrieve 2 rather than calculating it again.
        </p>
        <p key="p-2-59" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          This technique is commonly called *memoization* when implemented with recursion.
        </p>
        <p key="p-2-61" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          We will study memoization in detail shortly.
        </p>
        <h3 key="h3-2-63" className="text-lg md:text-xl font-bold text-indigo-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-indigo-400"></span>
          2.3 Overlapping Subproblems vs Independent Subproblems
        </h3>
        <p key="p-2-65" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Not every recursive problem benefits from Dynamic Programming.
        </p>
        <p key="p-2-67" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          For example, in a divide-and-conquer algorithm such as Merge Sort, the two halves are independent subproblems.
        </p>
        <p key="p-2-69" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Sorting the left half does not require solving the exact same right-half subproblem again.
        </p>
        <p key="p-2-71" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          DP is especially useful when smaller subproblems overlap.
        </p>
        <p key="p-2-73" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <strong className="font-bold text-white">Key point:</strong> The presence of recursion alone does not mean that a problem requires DP.
        </p>
      </div>
    )
  },
  {
    id: 3,
    title: "3. Optimal Substructure",
    summary: "How globally optimal solutions are composed of optimal solutions to subproblems, and why both DP properties are required.",
    content: (
      <div className="space-y-4">
        <p key="p-3-2" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Optimal substructure is the second major property commonly associated with Dynamic Programming.
        </p>
        <h3 key="h3-3-4" className="text-lg md:text-xl font-bold text-indigo-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-indigo-400"></span>
          3.1 What Is Optimal Substructure?
        </h3>
        <p key="p-3-6" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          A problem has optimal substructure if an optimal solution to the complete problem can be constructed using optimal solutions to its smaller subproblems.
        </p>
        <p key="p-3-8" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Consider the 0/1 Knapsack problem.
        </p>
        <p key="p-3-10" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Suppose:
        </p>
        <ul key="ul-3-16" className="my-3 space-y-1.5 text-xs md:text-sm text-slate-300 list-disc list-inside">
          <li>You have several items.</li>
          <li>Every item has a weight and value.</li>
          <li>Your bag has a limited capacity.</li>
          <li>You can either take an item completely or leave it.</li>
      </ul>
        <p key="p-3-17" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          For each item, we consider two possibilities:
        </p>
        <ol key="ol-3-21" className="my-3 space-y-1.5 text-xs md:text-sm text-slate-300 list-decimal list-inside">
          <li>Include the item.</li>
          <li>Exclude the item.</li>
      </ol>
        <p key="p-3-22" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          If we include an item, the remaining problem has less capacity and fewer available items.
        </p>
        <p key="p-3-24" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          If the solution for that smaller remaining problem is not optimal, then our complete solution cannot be optimal either.
        </p>
        <p key="p-3-26" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          That is the idea of optimal substructure.
        </p>
        <h3 key="h3-3-28" className="text-lg md:text-xl font-bold text-indigo-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-indigo-400"></span>
          3.2 Example: Shortest Path
        </h3>
        <p key="p-3-30" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Suppose the shortest path from A to D is:
        </p>
        <div key="code-3-35" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-indigo-500/30 border border-indigo-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-slate-400 font-sans">Module 19 Dynamic Programming Fundamentals</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`A → B → C → D`}</code>
          </pre>
        </div>
        <p key="p-3-36" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          The subpath:
        </p>
        <div key="code-3-41" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-indigo-500/30 border border-indigo-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-slate-400 font-sans">Module 19 Dynamic Programming Fundamentals</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`A → B → C`}</code>
          </pre>
        </div>
        <p key="p-3-42" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          must also be a shortest path from A to C under the same path-cost assumptions.
        </p>
        <p key="p-3-44" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Otherwise, we could replace it with a shorter path and improve the complete route.
        </p>
        <p key="p-3-46" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          This illustrates optimal substructure.
        </p>
        <h3 key="h3-3-48" className="text-lg md:text-xl font-bold text-indigo-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-indigo-400"></span>
          3.3 Do Both Properties Matter?
        </h3>
        <p key="p-3-50" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          For the standard Dynamic Programming approach, we usually look for:
        </p>
        <p key="p-3-52" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Property 1
        </p>
        <p key="p-3-54" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <strong className="font-bold text-white">Overlapping subproblems</strong>
        </p>
        <p key="p-3-56" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          The same smaller problem appears repeatedly, so storing its result avoids duplicate calculations.
        </p>
        <p key="p-3-58" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Property 2
        </p>
        <p key="p-3-60" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <strong className="font-bold text-white">Optimal substructure</strong>
        </p>
        <p key="p-3-62" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          The optimal answer can be constructed from optimal answers to smaller problems.
        </p>
        <p key="p-3-64" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Remember that optimal substructure also appears in greedy algorithms. It does not mean that every such problem must be solved using DP.
        </p>
      </div>
    )
  },
  {
    id: 4,
    title: "4. Memoization",
    summary: "Top-down DP: caching recursive function results using arrays or HashMaps, on-demand evaluation, and recursion stack overhead.",
    content: (
      <div className="space-y-4">
        <p key="p-4-2" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Memoization is a Dynamic Programming technique that uses a top-down approach.
        </p>
        <p key="p-4-4" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          It starts with the original problem and recursively solves smaller subproblems.
        </p>
        <p key="p-4-6" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Whenever a subproblem is solved, its answer is stored.
        </p>
        <p key="p-4-8" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          When that same subproblem is needed again, the stored answer is returned.
        </p>
        <h3 key="h3-4-10" className="text-lg md:text-xl font-bold text-indigo-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-indigo-400"></span>
          4.1 How Memoization Works
        </h3>
        <p key="p-4-12" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Let's use Fibonacci again.
        </p>
        <p key="p-4-14" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Mathematical recurrence:
        </p>
        <p key="p-4-16" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          \<span className="font-mono text-indigo-300 font-semibold"> F(n)=F(n-1)+F(n-2) \</span>
        </p>
        <p key="p-4-18" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Base cases:
        </p>
        <p key="p-4-20" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          \<span className="font-mono text-indigo-300 font-semibold"> F(0)=0,\quad F(1)=1 \</span>
        </p>
        <p key="p-4-22" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          We create an array to store calculated values.
        </p>
        <p key="p-4-24" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Initially, entries are set to an uncomputed marker.
        </p>
        <p key="p-4-26" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          When we calculate F(4), we store the answer.
        </p>
        <p key="p-4-28" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          The next time F(4) is requested, we directly return the stored answer.
        </p>
        <h3 key="h3-4-30" className="text-lg md:text-xl font-bold text-indigo-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-indigo-400"></span>
          4.2 Java Implementation
        </h3>
        <div key="code-4-69" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-indigo-500/30 border border-indigo-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-slate-400 font-sans">Module 19 Dynamic Programming Fundamentals</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`import java.util.*;

public class FibonacciMemoization {

    static long[] dp;

    public static long fib(int n) {

        // Base cases
        if (n <= 1) {
            return n;
        }

        // Already calculated?
        if (dp[n] != -1) {
            return dp[n];
        }

        // Calculate and store
        dp[n] = fib(n - 1) + fib(n - 2);

        return dp[n];
    }

    public static void main(String[] args) {

        int n = 10;

        dp = new long[n + 1];

        Arrays.fill(dp, -1);

        System.out.println(fib(n));
    }
}`}</code>
          </pre>
        </div>
        <p key="p-4-70" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Output:
        </p>
        <div key="code-4-75" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-indigo-500/30 border border-indigo-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-slate-400 font-sans">Module 19 Dynamic Programming Fundamentals</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`55`}</code>
          </pre>
        </div>
        <h3 key="h3-4-76" className="text-lg md:text-xl font-bold text-indigo-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-indigo-400"></span>
          4.3 Step-by-Step Execution
        </h3>
        <p key="p-4-78" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Suppose we call:
        </p>
        <div key="code-4-83" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-indigo-500/30 border border-indigo-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-slate-400 font-sans">Module 19 Dynamic Programming Fundamentals</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`fib(5);`}</code>
          </pre>
        </div>
        <p key="p-4-84" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          The recursion starts by requesting:
        </p>
        <div key="code-4-95" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-indigo-500/30 border border-indigo-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-slate-400 font-sans">Module 19 Dynamic Programming Fundamentals</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`fib(5)
 ├── fib(4)
 │    ├── fib(3)
 │    │    ├── fib(2)
 │    │    └── fib(1)
 │    └── fib(2)
 └── fib(3)`}</code>
          </pre>
        </div>
        <p key="p-4-96" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          When F(3) is calculated for the second time, we return its stored result.
        </p>
        <p key="p-4-98" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          We avoid rebuilding that entire branch.
        </p>
        <h3 key="h3-4-100" className="text-lg md:text-xl font-bold text-indigo-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-indigo-400"></span>
          4.4 Memoization Advantages
        </h3>
        <ul key="ul-4-106" className="my-3 space-y-1.5 text-xs md:text-sm text-slate-300 list-disc list-inside">
          <li>Easy to convert from recursive solutions.</li>
          <li>Calculates only subproblems that are actually requested.</li>
          <li>Avoids repeated recursive calculations.</li>
          <li>Often simpler to formulate for complex recurrences.</li>
      </ul>
        <h3 key="h3-4-107" className="text-lg md:text-xl font-bold text-indigo-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-indigo-400"></span>
          4.5 Memoization Disadvantages
        </h3>
        <ul key="ul-4-113" className="my-3 space-y-1.5 text-xs md:text-sm text-slate-300 list-disc list-inside">
          <li>Uses recursion stack space.</li>
          <li>Deep recursion can cause <code className="px-1.5 py-0.5 rounded bg-slate-800 text-indigo-300 font-mono text-xs border border-slate-700/60">StackOverflowError</code>.</li>
          <li>Recursive function calls introduce overhead.</li>
          <li>Managing multidimensional states can require more careful implementation.</li>
      </ul>
        <h3 key="h3-4-114" className="text-lg md:text-xl font-bold text-indigo-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-indigo-400"></span>
          4.6 Complexity
        </h3>
        <div key="table-4-122" className="my-6 overflow-x-auto rounded-xl border border-slate-800 bg-slate-950/70 shadow-sm">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="bg-slate-900/90 border-b border-slate-800 text-slate-300 font-mono">
                <th className="p-3 font-semibold">Metric</th>
                <th className="p-3 font-semibold">Complexity</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60 text-slate-300 font-sans">
              <tr className="hover:bg-slate-900/40 transition">
                  <td className="p-3">Time</td>
                  <td className="p-3">O(N)</td>
                </tr>
              <tr className="hover:bg-slate-900/40 transition">
                  <td className="p-3">DP array</td>
                  <td className="p-3">O(N)</td>
                </tr>
              <tr className="hover:bg-slate-900/40 transition">
                  <td className="p-3">Recursion stack</td>
                  <td className="p-3">O(N)</td>
                </tr>
              <tr className="hover:bg-slate-900/40 transition">
                  <td className="p-3">Total auxiliary space</td>
                  <td className="p-3">O(N)</td>
                </tr>
            </tbody>
          </table>
        </div>
        <p key="p-4-123" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Without memoization, recursive Fibonacci takes exponential time.
        </p>
      </div>
    )
  },
  {
    id: 5,
    title: "5. Tabulation",
    summary: "Bottom-up DP: solving subproblems iteratively from smallest base cases to target state without recursion stack overhead.",
    content: (
      <div className="space-y-4">
        <p key="p-5-2" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Tabulation is another Dynamic Programming technique.
        </p>
        <p key="p-5-4" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          It uses a bottom-up approach.
        </p>
        <p key="p-5-6" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Instead of starting with the original problem and recursively breaking it down, we start with the smallest subproblems and build toward the final answer.
        </p>
        <h3 key="h3-5-8" className="text-lg md:text-xl font-bold text-indigo-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-indigo-400"></span>
          5.1 How Tabulation Works
        </h3>
        <p key="p-5-10" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          For Fibonacci:
        </p>
        <p key="p-5-12" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          \<span className="font-mono text-indigo-300 font-semibold"> F(n)=F(n-1)+F(n-2) \</span>
        </p>
        <p key="p-5-14" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          We know:
        </p>
        <p key="p-5-16" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          \<span className="font-mono text-indigo-300 font-semibold"> F(0)=0 \</span>
        </p>
        <p key="p-5-18" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          \<span className="font-mono text-indigo-300 font-semibold"> F(1)=1 \</span>
        </p>
        <p key="p-5-20" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          We can calculate the next values using a DP array.
        </p>
        <div key="table-5-31" className="my-6 overflow-x-auto rounded-xl border border-slate-800 bg-slate-950/70 shadow-sm">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="bg-slate-900/90 border-b border-slate-800 text-slate-300 font-mono">
                <th className="p-3 font-semibold">Index</th>
                <th className="p-3 font-semibold">Calculation</th>
                <th className="p-3 font-semibold">Result</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60 text-slate-300 font-sans">
              <tr className="hover:bg-slate-900/40 transition">
                  <td className="p-3">0</td>
                  <td className="p-3">Base case</td>
                  <td className="p-3">0</td>
                </tr>
              <tr className="hover:bg-slate-900/40 transition">
                  <td className="p-3">1</td>
                  <td className="p-3">Base case</td>
                  <td className="p-3">1</td>
                </tr>
              <tr className="hover:bg-slate-900/40 transition">
                  <td className="p-3">2</td>
                  <td className="p-3">0 + 1</td>
                  <td className="p-3">1</td>
                </tr>
              <tr className="hover:bg-slate-900/40 transition">
                  <td className="p-3">3</td>
                  <td className="p-3">1 + 1</td>
                  <td className="p-3">2</td>
                </tr>
              <tr className="hover:bg-slate-900/40 transition">
                  <td className="p-3">4</td>
                  <td className="p-3">1 + 2</td>
                  <td className="p-3">3</td>
                </tr>
              <tr className="hover:bg-slate-900/40 transition">
                  <td className="p-3">5</td>
                  <td className="p-3">2 + 3</td>
                  <td className="p-3">5</td>
                </tr>
              <tr className="hover:bg-slate-900/40 transition">
                  <td className="p-3">6</td>
                  <td className="p-3">3 + 5</td>
                  <td className="p-3">8</td>
                </tr>
            </tbody>
          </table>
        </div>
        <p key="p-5-32" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Each answer is constructed using previously calculated entries.
        </p>
        <h3 key="h3-5-34" className="text-lg md:text-xl font-bold text-indigo-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-indigo-400"></span>
          5.2 Java Implementation
        </h3>
        <div key="code-5-64" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-indigo-500/30 border border-indigo-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-slate-400 font-sans">Module 19 Dynamic Programming Fundamentals</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`public class FibonacciTabulation {

    public static long fib(int n) {

        if (n <= 1) {
            return n;
        }

        long[] dp = new long[n + 1];

        dp[0] = 0;
        dp[1] = 1;

        for (int i = 2; i <= n; i++) {

            dp[i] = dp[i - 1] + dp[i - 2];
        }

        return dp[n];
    }

    public static void main(String[] args) {

        System.out.println(fib(10));
    }
}`}</code>
          </pre>
        </div>
        <p key="p-5-65" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Output:
        </p>
        <div key="code-5-70" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-indigo-500/30 border border-indigo-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-slate-400 font-sans">Module 19 Dynamic Programming Fundamentals</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`55`}</code>
          </pre>
        </div>
        <h3 key="h3-5-71" className="text-lg md:text-xl font-bold text-indigo-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-indigo-400"></span>
          5.3 Memoization vs Tabulation
        </h3>
        <div key="table-5-82" className="my-6 overflow-x-auto rounded-xl border border-slate-800 bg-slate-950/70 shadow-sm">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="bg-slate-900/90 border-b border-slate-800 text-slate-300 font-mono">
                <th className="p-3 font-semibold">Feature</th>
                <th className="p-3 font-semibold">Memoization</th>
                <th className="p-3 font-semibold">Tabulation</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60 text-slate-300 font-sans">
              <tr className="hover:bg-slate-900/40 transition">
                  <td className="p-3">Approach</td>
                  <td className="p-3">Top-down</td>
                  <td className="p-3">Bottom-up</td>
                </tr>
              <tr className="hover:bg-slate-900/40 transition">
                  <td className="p-3">Technique</td>
                  <td className="p-3">Recursion</td>
                  <td className="p-3">Iteration</td>
                </tr>
              <tr className="hover:bg-slate-900/40 transition">
                  <td className="p-3">Starting point</td>
                  <td className="p-3">Original problem</td>
                  <td className="p-3">Base cases</td>
                </tr>
              <tr className="hover:bg-slate-900/40 transition">
                  <td className="p-3">Storage</td>
                  <td className="p-3">Cache</td>
                  <td className="p-3">DP table</td>
                </tr>
              <tr className="hover:bg-slate-900/40 transition">
                  <td className="p-3">Recursion stack</td>
                  <td className="p-3">Usually required</td>
                  <td className="p-3">Not required</td>
                </tr>
              <tr className="hover:bg-slate-900/40 transition">
                  <td className="p-3">Subproblems</td>
                  <td className="p-3">Computes demanded states</td>
                  <td className="p-3">Usually computes all states in the chosen table</td>
                </tr>
              <tr className="hover:bg-slate-900/40 transition">
                  <td className="p-3">Implementation</td>
                  <td className="p-3">Recursive</td>
                  <td className="p-3">Iterative</td>
                </tr>
            </tbody>
          </table>
        </div>
        <p key="p-5-83" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <strong className="font-bold text-white">Important:</strong> Both techniques are Dynamic Programming. One is not automatically better than the other. The choice depends on the state structure and problem constraints.
        </p>
      </div>
    )
  },
  {
    id: 6,
    title: "6. Recursion to DP Conversion",
    summary: "The 6-step mechanical recipe to transform any naive recursive algorithm into memoization and then iterative tabulation.",
    content: (
      <div className="space-y-4">
        <p key="p-6-2" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          One of the most important skills in DSA is knowing how to convert a recursive solution into an efficient DP solution.
        </p>
        <p key="p-6-4" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Let's understand the process step by step.
        </p>
        <h3 key="h3-6-6" className="text-lg md:text-xl font-bold text-indigo-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-indigo-400"></span>
          6.1 Step 1 — Write the Recursive Solution
        </h3>
        <p key="p-6-8" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Suppose you want to calculate Fibonacci.
        </p>
        <div key="code-6-20" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-indigo-500/30 border border-indigo-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-slate-400 font-sans">Module 19 Dynamic Programming Fundamentals</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`static int fib(int n) {

    if (n <= 1) {
        return n;
    }

    return fib(n - 1) + fib(n - 2);
}`}</code>
          </pre>
        </div>
        <p key="p-6-21" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          The function repeatedly solves the same smaller inputs.
        </p>
        <h3 key="h3-6-23" className="text-lg md:text-xl font-bold text-indigo-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-indigo-400"></span>
          6.2 Step 2 — Identify Repeated Subproblems
        </h3>
        <p key="p-6-25" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Look at the function calls:
        </p>
        <div key="code-6-36" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-indigo-500/30 border border-indigo-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-slate-400 font-sans">Module 19 Dynamic Programming Fundamentals</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`fib(5)
fib(4)
fib(3)
fib(2)
fib(3)
fib(2)
fib(1)`}</code>
          </pre>
        </div>
        <p key="p-6-37" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Some input values occur more than once.
        </p>
        <p key="p-6-39" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          The value of n uniquely determines the subproblem.
        </p>
        <p key="p-6-41" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          This means one-dimensional DP storage is sufficient.
        </p>
        <h3 key="h3-6-43" className="text-lg md:text-xl font-bold text-indigo-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-indigo-400"></span>
          6.3 Step 3 — Create the DP Storage
        </h3>
        <div key="code-6-48" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-indigo-500/30 border border-indigo-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-slate-400 font-sans">Module 19 Dynamic Programming Fundamentals</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`int[] dp = new int[n + 1];`}</code>
          </pre>
        </div>
        <p key="p-6-49" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Use an uncomputed marker:
        </p>
        <div key="code-6-54" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-indigo-500/30 border border-indigo-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-slate-400 font-sans">Module 19 Dynamic Programming Fundamentals</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`Arrays.fill(dp, -1);`}</code>
          </pre>
        </div>
        <h3 key="h3-6-55" className="text-lg md:text-xl font-bold text-indigo-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-indigo-400"></span>
          6.4 Step 4 — Add a Cache Check
        </h3>
        <p key="p-6-57" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Before performing recursive calculations:
        </p>
        <div key="code-6-64" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-indigo-500/30 border border-indigo-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-slate-400 font-sans">Module 19 Dynamic Programming Fundamentals</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`if (dp[n] != -1) {
    return dp[n];
}`}</code>
          </pre>
        </div>
        <h3 key="h3-6-65" className="text-lg md:text-xl font-bold text-indigo-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-indigo-400"></span>
          6.5 Step 5 — Store the Answer
        </h3>
        <div key="code-6-70" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-indigo-500/30 border border-indigo-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-slate-400 font-sans">Module 19 Dynamic Programming Fundamentals</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`dp[n] = fib(n - 1, dp) + fib(n - 2, dp);`}</code>
          </pre>
        </div>
        <h3 key="h3-6-71" className="text-lg md:text-xl font-bold text-indigo-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-indigo-400"></span>
          6.6 Step 6 — Convert to Tabulation
        </h3>
        <p key="p-6-73" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Once you understand the dependency structure, you can remove recursion.
        </p>
        <p key="p-6-75" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Initialize base cases and calculate states in dependency order.
        </p>
        <p key="p-6-77" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          This is the complete process:
        </p>
        <p key="p-6-79" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <strong className="font-bold text-white">Recursion to Dynamic Programming</strong>
        </p>
        <p key="p-6-81" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <strong className="font-bold text-white">1. Recursive solution</strong>
        </p>
        <p key="p-6-83" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Define the recurrence and base cases
        </p>
        <p key="p-6-85" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <strong className="font-bold text-white">2. Identify repeated states</strong>
        </p>
        <p key="p-6-87" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Find overlapping subproblems
        </p>
        <p key="p-6-89" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <strong className="font-bold text-white">3. Apply memoization</strong>
        </p>
        <p key="p-6-91" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Store results of recursive states
        </p>
        <p key="p-6-93" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <strong className="font-bold text-white">4. Build tabulation</strong>
        </p>
        <p key="p-6-95" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Calculate states iteratively in the right order
        </p>
        <p key="p-6-97" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <strong className="font-bold text-white">5. Optimize space</strong>
        </p>
        <p key="p-6-99" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Keep only the states needed for future calculations
        </p>
        <p key="p-6-101" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          This is a general problem-solving workflow, not a requirement that every DP problem must use all five implementations.
        </p>
      </div>
    )
  },
  {
    id: 7,
    title: "7. DP State Definition",
    summary: "The mathematical identity of a subproblem: choosing parameters (1D, 2D, 3D) that capture all necessary decision history.",
    content: (
      <div className="space-y-4">
        <p key="p-7-2" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          State definition is arguably the most important skill in Dynamic Programming.
        </p>
        <p key="p-7-4" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Many difficult DP problems become easier once you identify what information must be stored to describe a subproblem.
        </p>
        <h3 key="h3-7-6" className="text-lg md:text-xl font-bold text-indigo-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-indigo-400"></span>
          7.1 What Is a DP State?
        </h3>
        <p key="p-7-8" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          A DP state represents a specific subproblem.
        </p>
        <p key="p-7-10" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          It tells us what information is needed to calculate a smaller part of the original problem.
        </p>
        <p key="p-7-12" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          For Fibonacci:
        </p>
        <p key="p-7-14" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          \<span className="font-mono text-indigo-300 font-semibold"> dp[i]=F(i) \</span>
        </p>
        <p key="p-7-16" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          The state is simply the Fibonacci number at index i.
        </p>
        <p key="p-7-18" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          For 0/1 Knapsack:
        </p>
        <p key="p-7-20" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          \<span className="font-mono text-indigo-300 font-semibold"> dp[i][w] \</span>
        </p>
        <p key="p-7-22" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          can represent the maximum value obtainable using the first i items with capacity w.
        </p>
        <p key="p-7-24" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          For Longest Common Subsequence:
        </p>
        <p key="p-7-26" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          \<span className="font-mono text-indigo-300 font-semibold"> dp[i][j] \</span>
        </p>
        <p key="p-7-28" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          represents the LCS length of the first i characters of one string and the first j characters of another.
        </p>
        <p key="p-7-30" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          The state can contain one variable, two variables, or even more depending on the problem.
        </p>
        <h3 key="h3-7-32" className="text-lg md:text-xl font-bold text-indigo-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-indigo-400"></span>
          7.2 One-Dimensional DP
        </h3>
        <p key="p-7-34" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Example:
        </p>
        <p key="p-7-36" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Fibonacci.
        </p>
        <p key="p-7-38" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          \<span className="font-mono text-indigo-300 font-semibold"> dp[i]=dp[i-1]+dp[i-2] \</span>
        </p>
        <p key="p-7-40" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Only the index i determines the state.
        </p>
        <p key="p-7-42" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Array:
        </p>
        <div key="code-7-47" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-indigo-500/30 border border-indigo-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-slate-400 font-sans">Module 19 Dynamic Programming Fundamentals</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`int[] dp = new int[n + 1];`}</code>
          </pre>
        </div>
        <h3 key="h3-7-48" className="text-lg md:text-xl font-bold text-indigo-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-indigo-400"></span>
          7.3 Two-Dimensional DP
        </h3>
        <p key="p-7-50" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Example:
        </p>
        <p key="p-7-52" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Longest Common Subsequence.
        </p>
        <p key="p-7-54" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          \<span className="font-mono text-indigo-300 font-semibold"> dp[i][j] \</span>
        </p>
        <p key="p-7-56" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Two dimensions are required because we are considering prefixes of two separate strings.
        </p>
        <p key="p-7-58" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Storage:
        </p>
        <div key="code-7-63" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-indigo-500/30 border border-indigo-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-slate-400 font-sans">Module 19 Dynamic Programming Fundamentals</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`int[][] dp = new int[m + 1][n + 1];`}</code>
          </pre>
        </div>
        <h3 key="h3-7-64" className="text-lg md:text-xl font-bold text-indigo-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-indigo-400"></span>
          7.4 Three-Dimensional DP
        </h3>
        <p key="p-7-66" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Some problems require three variables to describe a state.
        </p>
        <p key="p-7-68" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          For example, imagine a knapsack variation with:
        </p>
        <ul key="ul-7-73" className="my-3 space-y-1.5 text-xs md:text-sm text-slate-300 list-disc list-inside">
          <li>Number of items considered.</li>
          <li>Remaining capacity.</li>
          <li>Remaining number of selections.</li>
      </ul>
        <p key="p-7-74" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          The state may become:
        </p>
        <p key="p-7-76" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          \<span className="font-mono text-indigo-300 font-semibold"> dp[i][w][k] \</span>
        </p>
        <p key="p-7-78" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          A three-dimensional table can store these results.
        </p>
        <p key="p-7-80" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Higher-dimensional DP is possible, but the memory requirement can grow rapidly.
        </p>
        <h3 key="h3-7-82" className="text-lg md:text-xl font-bold text-indigo-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-indigo-400"></span>
          7.5 How to Identify the State
        </h3>
        <p key="p-7-84" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Ask these questions:
        </p>
        <ol key="ol-7-91" className="my-3 space-y-1.5 text-xs md:text-sm text-slate-300 list-decimal list-inside">
          <li>What decisions are being made?</li>
          <li>Which variables change after every decision?</li>
          <li>What information is required to calculate the next decision?</li>
          <li>Which input prefix, position, capacity, or remaining resource describes the subproblem?</li>
          <li>Can two states be considered identical when these variables are identical?</li>
      </ol>
        <p key="p-7-92" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          A good state should contain enough information to solve the remaining problem without remembering the entire history of earlier decisions.
        </p>
      </div>
    )
  },
  {
    id: 8,
    title: "8. State Transitions",
    summary: "The recurrence relation and decision logic that connects a larger problem to its constituent smaller subproblems.",
    content: (
      <div className="space-y-4">
        <p key="p-8-2" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Once the state is identified, we need a rule for calculating it.
        </p>
        <p key="p-8-4" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          This rule is called a state transition or recurrence relation.
        </p>
        <h3 key="h3-8-6" className="text-lg md:text-xl font-bold text-indigo-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-indigo-400"></span>
          8.1 What Is a State Transition?
        </h3>
        <p key="p-8-8" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          A state transition describes how the current DP state depends on smaller states.
        </p>
        <p key="p-8-10" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Consider Fibonacci:
        </p>
        <p key="p-8-12" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          \<span className="font-mono text-indigo-300 font-semibold"> dp[i]=dp[i-1]+dp[i-2] \</span>
        </p>
        <p key="p-8-14" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          The current state depends on two previously computed states.
        </p>
        <p key="p-8-16" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          For Climbing Stairs:
        </p>
        <p key="p-8-18" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          \<span className="font-mono text-indigo-300 font-semibold"> dp[i]=dp[i-1]+dp[i-2] \</span>
        </p>
        <p key="p-8-20" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          For 0/1 Knapsack:
        </p>
        <p key="p-8-22" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          \<span className="font-mono text-indigo-300 font-semibold"> dp[i][w] = \max( dp[i-1][w], value_i+dp[i-1][w-weight_i] ) \</span>
        </p>
        <p key="p-8-24" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          provided the item fits.
        </p>
        <p key="p-8-26" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          For LCS, the transition depends on whether the last characters of the considered prefixes match.
        </p>
        <h3 key="h3-8-28" className="text-lg md:text-xl font-bold text-indigo-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-indigo-400"></span>
          8.2 Four Essential Parts of a DP Solution
        </h3>
        <p key="p-8-30" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Every DP solution should clearly identify:
        </p>
        <div key="table-8-38" className="my-6 overflow-x-auto rounded-xl border border-slate-800 bg-slate-950/70 shadow-sm">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="bg-slate-900/90 border-b border-slate-800 text-slate-300 font-mono">
                <th className="p-3 font-semibold">Part</th>
                <th className="p-3 font-semibold">Question</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60 text-slate-300 font-sans">
              <tr className="hover:bg-slate-900/40 transition">
                  <td className="p-3">State</td>
                  <td className="p-3">What does dp[i] or dp[i][j] represent?</td>
                </tr>
              <tr className="hover:bg-slate-900/40 transition">
                  <td className="p-3">Transition</td>
                  <td className="p-3">How do we calculate the current state?</td>
                </tr>
              <tr className="hover:bg-slate-900/40 transition">
                  <td className="p-3">Base cases</td>
                  <td className="p-3">What are the simplest known answers?</td>
                </tr>
              <tr className="hover:bg-slate-900/40 transition">
                  <td className="p-3">Computation order</td>
                  <td className="p-3">In what order must states be evaluated?</td>
                </tr>
            </tbody>
          </table>
        </div>
        <p key="p-8-39" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Then identify the answer location, such as <code className="px-1.5 py-0.5 rounded bg-slate-800 text-indigo-300 font-mono text-xs border border-slate-700/60">dp[n]</code>, <code className="px-1.5 py-0.5 rounded bg-slate-800 text-indigo-300 font-mono text-xs border border-slate-700/60">dp[m][n]</code>, or an optimized state variable.
        </p>
      </div>
    )
  },
  {
    id: 9,
    title: "9. Base Cases",
    summary: "The bedrock stopping conditions where answer is directly known without further subproblem decomposition.",
    content: (
      <div className="space-y-4">
        <p key="p-9-2" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Base cases define the smallest subproblems whose answers are already known.
        </p>
        <p key="p-9-4" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Without correct base cases, a DP solution may produce incorrect answers or access invalid indexes.
        </p>
        <h3 key="h3-9-6" className="text-lg md:text-xl font-bold text-indigo-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-indigo-400"></span>
          9.1 Fibonacci
        </h3>
        <p key="p-9-8" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          \<span className="font-mono text-indigo-300 font-semibold"> dp[0]=0 \</span>
        </p>
        <p key="p-9-10" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          \<span className="font-mono text-indigo-300 font-semibold"> dp[1]=1 \</span>
        </p>
        <h3 key="h3-9-12" className="text-lg md:text-xl font-bold text-indigo-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-indigo-400"></span>
          9.2 Climbing Stairs
        </h3>
        <p key="p-9-14" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          If we define <code className="px-1.5 py-0.5 rounded bg-slate-800 text-indigo-300 font-mono text-xs border border-slate-700/60">dp[i]</code> as the number of ways to reach step i:
        </p>
        <p key="p-9-16" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          \<span className="font-mono text-indigo-300 font-semibold"> dp[0]=1 \</span>
        </p>
        <p key="p-9-18" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          \<span className="font-mono text-indigo-300 font-semibold"> dp[1]=1 \</span>
        </p>
        <p key="p-9-20" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Why is <code className="px-1.5 py-0.5 rounded bg-slate-800 text-indigo-300 font-mono text-xs border border-slate-700/60">dp[0] = 1</code>?
        </p>
        <p key="p-9-22" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          There is exactly one way to reach the ground before taking any steps: do nothing.
        </p>
        <p key="p-9-24" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          This convention makes the recurrence work cleanly.
        </p>
        <h3 key="h3-9-26" className="text-lg md:text-xl font-bold text-indigo-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-indigo-400"></span>
          9.3 0/1 Knapsack
        </h3>
        <p key="p-9-28" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          If no items are available, the maximum possible value is zero.
        </p>
        <p key="p-9-30" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          If capacity is zero, no positive-weight item can be included.
        </p>
        <p key="p-9-32" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          \<span className="font-mono text-indigo-300 font-semibold"> dp[0][w]=0 \</span>
        </p>
        <p key="p-9-34" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          \<span className="font-mono text-indigo-300 font-semibold"> dp[i][0]=0 \</span>
        </p>
        <h3 key="h3-9-36" className="text-lg md:text-xl font-bold text-indigo-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-indigo-400"></span>
          9.4 LCS
        </h3>
        <p key="p-9-38" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          If one string is empty, the common subsequence length is zero.
        </p>
        <p key="p-9-40" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          \<span className="font-mono text-indigo-300 font-semibold"> dp[0][j]=0 \</span>
        </p>
        <p key="p-9-42" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          \<span className="font-mono text-indigo-300 font-semibold"> dp[i][0]=0 \</span>
        </p>
        <p key="p-9-44" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <strong className="font-bold text-white">Important:</strong> Base cases depend on the meaning of the state. Always define the state before defining the initial values.
        </p>
      </div>
    )
  },
  {
    id: 10,
    title: "10. DP Optimization",
    summary: "Space optimization techniques: sliding variables, 2-row rolling arrays, and in-place 1D updates.",
    content: (
      <div className="space-y-4">
        <p key="p-10-2" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          After implementing a correct DP solution, we can often improve its memory requirements.
        </p>
        <p key="p-10-4" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          This is called DP space optimization.
        </p>
        <h3 key="h3-10-6" className="text-lg md:text-xl font-bold text-indigo-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-indigo-400"></span>
          10.1 Basic Space Optimization
        </h3>
        <p key="p-10-8" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Suppose:
        </p>
        <p key="p-10-10" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          \<span className="font-mono text-indigo-300 font-semibold"> dp[i]=dp[i-1]+dp[i-2] \</span>
        </p>
        <p key="p-10-12" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          The current Fibonacci state does not need the entire previous DP array.
        </p>
        <p key="p-10-14" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          It only needs the previous two values.
        </p>
        <p key="p-10-16" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Therefore, we can use three variables instead of an array.
        </p>
        <div key="code-10-30" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-indigo-500/30 border border-indigo-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-slate-400 font-sans">Module 19 Dynamic Programming Fundamentals</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`long prev2 = 0;
long prev1 = 1;

for (int i = 2; i <= n; i++) {

    long current = prev1 + prev2;

    prev2 = prev1;
    prev1 = current;
}`}</code>
          </pre>
        </div>
        <p key="p-10-31" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          The space complexity changes from:
        </p>
        <p key="p-10-33" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          \<span className="font-mono text-indigo-300 font-semibold"> O(N) \</span>
        </p>
        <p key="p-10-35" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          to:
        </p>
        <p key="p-10-37" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          \<span className="font-mono text-indigo-300 font-semibold"> O(1) \</span>
        </p>
        <h3 key="h3-10-39" className="text-lg md:text-xl font-bold text-indigo-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-indigo-400"></span>
          10.2 Two-Array Optimization
        </h3>
        <p key="p-10-41" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          For some two-dimensional DP problems, each row depends only on the previous row.
        </p>
        <p key="p-10-43" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Instead of maintaining the complete table, we use:
        </p>
        <div key="code-10-49" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-indigo-500/30 border border-indigo-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-slate-400 font-sans">Module 19 Dynamic Programming Fundamentals</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`int[] previous = new int[n + 1];
int[] current = new int[n + 1];`}</code>
          </pre>
        </div>
        <p key="p-10-50" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          After computing a row:
        </p>
        <div key="code-10-55" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-indigo-500/30 border border-indigo-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-slate-400 font-sans">Module 19 Dynamic Programming Fundamentals</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`previous = current;`}</code>
          </pre>
        </div>
        <p key="p-10-56" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Care is required when reusing arrays: the new row must be initialized or overwritten correctly.
        </p>
        <h3 key="h3-10-58" className="text-lg md:text-xl font-bold text-indigo-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-indigo-400"></span>
          10.3 In-Place One-Dimensional DP
        </h3>
        <p key="p-10-60" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Knapsack and subset sum can often be optimized to a single array.
        </p>
        <p key="p-10-62" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          But loop direction matters.
        </p>
        <p key="p-10-64" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          For 0/1 Knapsack, iterate capacity downward.
        </p>
        <p key="p-10-66" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          For Unbounded Knapsack, iterate capacity upward.
        </p>
        <p key="p-10-68" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          This difference is essential and will be explained in the respective sections.
        </p>
        <h3 key="h3-10-70" className="text-lg md:text-xl font-bold text-indigo-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-indigo-400"></span>
          10.4 When Can We Optimize Space?
        </h3>
        <p key="p-10-72" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Ask:
        </p>
        <ul key="ul-10-78" className="my-3 space-y-1.5 text-xs md:text-sm text-slate-300 list-disc list-inside">
          <li>Does the current state depend only on the immediately previous state?</li>
          <li>Does it depend on the previous two states?</li>
          <li>Does it depend only on the previous DP row?</li>
          <li>Is the entire table required later for reconstruction?</li>
      </ul>
        <p key="p-10-79" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Remember: space optimization may make it harder to reconstruct the actual sequence or selected items. Sometimes we should retain a parent or decision table even if it uses more space.
        </p>
      </div>
    )
  },
  {
    id: 11,
    title: "11. Fibonacci Sequence",
    summary: "The classic benchmark comparing Recursion O(2^n), Memoization O(n), Tabulation O(n), and Space Optimization O(1).",
    content: (
      <div className="space-y-4">
        <p key="p-11-2" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Fibonacci is the simplest problem for understanding Dynamic Programming.
        </p>
        <h3 key="h3-11-4" className="text-lg md:text-xl font-bold text-indigo-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-indigo-400"></span>
          11.1 Problem Statement
        </h3>
        <p key="p-11-6" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Given an integer N, calculate the Nth Fibonacci number.
        </p>
        <p key="p-11-8" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          The sequence is:
        </p>
        <div key="code-11-22" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-indigo-500/30 border border-indigo-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-slate-400 font-sans">Module 19 Dynamic Programming Fundamentals</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`F(0) = 0
F(1) = 1
F(2) = 1
F(3) = 2
F(4) = 3
F(5) = 5
F(6) = 8
F(7) = 13
F(8) = 21
F(9) = 34`}</code>
          </pre>
        </div>
        <p key="p-11-23" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Mathematically:
        </p>
        <p key="p-11-25" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          \<span className="font-mono text-indigo-300 font-semibold"> F(n)=F(n-1)+F(n-2) \</span>
        </p>
        <h3 key="h3-11-27" className="text-lg md:text-xl font-bold text-indigo-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-indigo-400"></span>
          11.2 Approach 1 — Recursion
        </h3>
        <div key="code-11-47" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-indigo-500/30 border border-indigo-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-slate-400 font-sans">Module 19 Dynamic Programming Fundamentals</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`public class FibonacciRecursion {

    static long fib(int n) {

        if (n <= 1) {
            return n;
        }

        return fib(n - 1) + fib(n - 2);
    }

    public static void main(String[] args) {

        System.out.println(fib(10));
    }
}`}</code>
          </pre>
        </div>
        <p key="p-11-48" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Output:
        </p>
        <div key="code-11-53" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-indigo-500/30 border border-indigo-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-slate-400 font-sans">Module 19 Dynamic Programming Fundamentals</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`55`}</code>
          </pre>
        </div>
        <p key="p-11-54" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Complexity:
        </p>
        <ul key="ul-11-58" className="my-3 space-y-1.5 text-xs md:text-sm text-slate-300 list-disc list-inside">
          <li>Time: O(2^N), as an upper-bound description.</li>
          <li>Space: O(N) recursion depth.</li>
      </ul>
        <p key="p-11-59" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          The actual number of calls grows exponentially, approximately proportional to the Fibonacci sequence itself.
        </p>
        <h3 key="h3-11-61" className="text-lg md:text-xl font-bold text-indigo-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-indigo-400"></span>
          11.3 Approach 2 — Memoization
        </h3>
        <div key="code-11-97" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-indigo-500/30 border border-indigo-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-slate-400 font-sans">Module 19 Dynamic Programming Fundamentals</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`import java.util.*;

public class FibonacciMemo {

    static long[] dp;

    static long fib(int n) {

        if (n <= 1) {
            return n;
        }

        if (dp[n] != -1) {
            return dp[n];
        }

        dp[n] = fib(n - 1) + fib(n - 2);

        return dp[n];
    }

    public static void main(String[] args) {

        int n = 10;

        dp = new long[n + 1];

        Arrays.fill(dp, -1);

        System.out.println(fib(n));
    }
}`}</code>
          </pre>
        </div>
        <p key="p-11-98" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Complexity:
        </p>
        <ul key="ul-11-102" className="my-3 space-y-1.5 text-xs md:text-sm text-slate-300 list-disc list-inside">
          <li>Time: O(N).</li>
          <li>Space: O(N).</li>
      </ul>
        <h3 key="h3-11-103" className="text-lg md:text-xl font-bold text-indigo-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-indigo-400"></span>
          11.4 Approach 3 — Tabulation
        </h3>
        <div key="code-11-133" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-indigo-500/30 border border-indigo-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-slate-400 font-sans">Module 19 Dynamic Programming Fundamentals</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`public class FibonacciTabulation {

    static long fib(int n) {

        if (n <= 1) {
            return n;
        }

        long[] dp = new long[n + 1];

        dp[0] = 0;
        dp[1] = 1;

        for (int i = 2; i <= n; i++) {

            dp[i] = dp[i - 1] + dp[i - 2];
        }

        return dp[n];
    }

    public static void main(String[] args) {

        System.out.println(fib(10));
    }
}`}</code>
          </pre>
        </div>
        <p key="p-11-134" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Complexity:
        </p>
        <ul key="ul-11-138" className="my-3 space-y-1.5 text-xs md:text-sm text-slate-300 list-disc list-inside">
          <li>Time: O(N).</li>
          <li>Space: O(N).</li>
      </ul>
        <h3 key="h3-11-139" className="text-lg md:text-xl font-bold text-indigo-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-indigo-400"></span>
          11.5 Approach 4 — Space Optimized
        </h3>
        <p key="p-11-141" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          We only need the previous two Fibonacci values.
        </p>
        <div key="code-11-172" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-indigo-500/30 border border-indigo-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-slate-400 font-sans">Module 19 Dynamic Programming Fundamentals</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`public class FibonacciOptimized {

    static long fib(int n) {

        if (n <= 1) {
            return n;
        }

        long prev2 = 0;
        long prev1 = 1;

        for (int i = 2; i <= n; i++) {

            long current = prev1 + prev2;

            prev2 = prev1;
            prev1 = current;
        }

        return prev1;
    }

    public static void main(String[] args) {

        System.out.println(fib(10));
    }
}`}</code>
          </pre>
        </div>
        <p key="p-11-173" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <strong className="font-bold text-white">Fibonacci performance comparison</strong>
        </p>
        <div key="table-11-181" className="my-6 overflow-x-auto rounded-xl border border-slate-800 bg-slate-950/70 shadow-sm">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="bg-slate-900/90 border-b border-slate-800 text-slate-300 font-mono">
                <th className="p-3 font-semibold">Approach</th>
                <th className="p-3 font-semibold">Time</th>
                <th className="p-3 font-semibold">Space</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60 text-slate-300 font-sans">
              <tr className="hover:bg-slate-900/40 transition">
                  <td className="p-3">Recursion</td>
                  <td className="p-3">Exponential</td>
                  <td className="p-3">O(N)</td>
                </tr>
              <tr className="hover:bg-slate-900/40 transition">
                  <td className="p-3">Memoization</td>
                  <td className="p-3">O(N)</td>
                  <td className="p-3">O(N)</td>
                </tr>
              <tr className="hover:bg-slate-900/40 transition">
                  <td className="p-3">Tabulation</td>
                  <td className="p-3">O(N)</td>
                  <td className="p-3">O(N)</td>
                </tr>
              <tr className="hover:bg-slate-900/40 transition">
                  <td className="p-3">Optimized</td>
                  <td className="p-3">O(N)</td>
                  <td className="p-3">O(1)</td>
                </tr>
            </tbody>
          </table>
        </div>
        <p key="p-11-182" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          The optimized version is particularly useful when we only need the final Fibonacci number and not the entire sequence.
        </p>
        <p key="p-11-184" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <strong className="font-bold text-white">Important Java note:</strong> <code className="px-1.5 py-0.5 rounded bg-slate-800 text-indigo-300 font-mono text-xs border border-slate-700/60">long</code> can represent Fibonacci numbers only through F(92). F(93) exceeds the maximum signed <code className="px-1.5 py-0.5 rounded bg-slate-800 text-indigo-300 font-mono text-xs border border-slate-700/60">long</code> value. For larger values, use <code className="px-1.5 py-0.5 rounded bg-slate-800 text-indigo-300 font-mono text-xs border border-slate-700/60">BigInteger</code>.
        </p>
      </div>
    )
  },
  {
    id: 12,
    title: "12. Climbing Stairs",
    summary: "Counting distinct ways to reach top using 1 or 2 steps, relation to Fibonacci, and k-step variations.",
    content: (
      <div className="space-y-4">
        <p key="p-12-2" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          This is one of the most common beginner DP interview problems.
        </p>
        <h3 key="h3-12-4" className="text-lg md:text-xl font-bold text-indigo-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-indigo-400"></span>
          12.1 Problem Statement
        </h3>
        <p key="p-12-6" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          You are climbing a staircase containing N steps.
        </p>
        <p key="p-12-8" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          At each move, you can climb either:
        </p>
        <ul key="ul-12-12" className="my-3 space-y-1.5 text-xs md:text-sm text-slate-300 list-disc list-inside">
          <li>One step.</li>
          <li>Two steps.</li>
      </ul>
        <p key="p-12-13" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Find the total number of distinct ways to reach the top.
        </p>
        <h4 key="h4-12-15" className="text-base font-semibold text-emerald-400 mt-6 mb-2">
          Example
        </h4>
        <p key="p-12-17" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Suppose:
        </p>
        <div key="code-12-22" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-indigo-500/30 border border-indigo-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-slate-400 font-sans">Module 19 Dynamic Programming Fundamentals</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`N = 3`}</code>
          </pre>
        </div>
        <p key="p-12-23" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Possible ways:
        </p>
        <div key="code-12-32" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-indigo-500/30 border border-indigo-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-slate-400 font-sans">Module 19 Dynamic Programming Fundamentals</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`1 + 1 + 1

1 + 2

2 + 1`}</code>
          </pre>
        </div>
        <p key="p-12-33" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Total:
        </p>
        <div key="code-12-38" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-indigo-500/30 border border-indigo-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-slate-400 font-sans">Module 19 Dynamic Programming Fundamentals</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`3 ways`}</code>
          </pre>
        </div>
        <h3 key="h3-12-39" className="text-lg md:text-xl font-bold text-indigo-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-indigo-400"></span>
          12.2 Understanding the Recurrence
        </h3>
        <p key="p-12-41" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          To reach step N, your last move must have been:
        </p>
        <ul key="ul-12-45" className="my-3 space-y-1.5 text-xs md:text-sm text-slate-300 list-disc list-inside">
          <li>From step N - 1 using one step.</li>
          <li>From step N - 2 using two steps.</li>
      </ul>
        <p key="p-12-46" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Therefore:
        </p>
        <p key="p-12-48" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          \<span className="font-mono text-indigo-300 font-semibold"> dp[n]=dp[n-1]+dp[n-2] \</span>
        </p>
        <p key="p-12-50" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Base cases:
        </p>
        <p key="p-12-52" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          \<span className="font-mono text-indigo-300 font-semibold"> dp[0]=1 \</span>
        </p>
        <p key="p-12-54" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          \<span className="font-mono text-indigo-300 font-semibold"> dp[1]=1 \</span>
        </p>
        <p key="p-12-56" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          The recurrence is essentially Fibonacci, with a shifted interpretation.
        </p>
        <h3 key="h3-12-58" className="text-lg md:text-xl font-bold text-indigo-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-indigo-400"></span>
          12.3 Dry Run
        </h3>
        <p key="p-12-60" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Let N = 5.
        </p>
        <div key="table-12-70" className="my-6 overflow-x-auto rounded-xl border border-slate-800 bg-slate-950/70 shadow-sm">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="bg-slate-900/90 border-b border-slate-800 text-slate-300 font-mono">
                <th className="p-3 font-semibold">Step</th>
                <th className="p-3 font-semibold">Calculation</th>
                <th className="p-3 font-semibold">Number of ways</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60 text-slate-300 font-sans">
              <tr className="hover:bg-slate-900/40 transition">
                  <td className="p-3">0</td>
                  <td className="p-3">Base case</td>
                  <td className="p-3">1</td>
                </tr>
              <tr className="hover:bg-slate-900/40 transition">
                  <td className="p-3">1</td>
                  <td className="p-3">Base case</td>
                  <td className="p-3">1</td>
                </tr>
              <tr className="hover:bg-slate-900/40 transition">
                  <td className="p-3">2</td>
                  <td className="p-3">1 + 1</td>
                  <td className="p-3">2</td>
                </tr>
              <tr className="hover:bg-slate-900/40 transition">
                  <td className="p-3">3</td>
                  <td className="p-3">2 + 1</td>
                  <td className="p-3">3</td>
                </tr>
              <tr className="hover:bg-slate-900/40 transition">
                  <td className="p-3">4</td>
                  <td className="p-3">3 + 2</td>
                  <td className="p-3">5</td>
                </tr>
              <tr className="hover:bg-slate-900/40 transition">
                  <td className="p-3">5</td>
                  <td className="p-3">5 + 3</td>
                  <td className="p-3">8</td>
                </tr>
            </tbody>
          </table>
        </div>
        <p key="p-12-71" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Answer:
        </p>
        <p key="p-12-73" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          \<span className="font-mono text-indigo-300 font-semibold"> \boxed&#123;8&#125; \</span>
        </p>
        <h3 key="h3-12-75" className="text-lg md:text-xl font-bold text-indigo-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-indigo-400"></span>
          12.4 Java Implementation
        </h3>
        <div key="code-12-106" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-indigo-500/30 border border-indigo-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-slate-400 font-sans">Module 19 Dynamic Programming Fundamentals</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`public class ClimbingStairs {

    public static long climbStairs(int n) {

        if (n <= 1) {
            return 1;
        }

        long prev2 = 1;
        long prev1 = 1;

        for (int i = 2; i <= n; i++) {

            long current = prev1 + prev2;

            prev2 = prev1;
            prev1 = current;
        }

        return prev1;
    }

    public static void main(String[] args) {

        System.out.println(climbStairs(5));
    }
}`}</code>
          </pre>
        </div>
        <p key="p-12-107" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Output:
        </p>
        <div key="code-12-112" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-indigo-500/30 border border-indigo-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-slate-400 font-sans">Module 19 Dynamic Programming Fundamentals</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`8`}</code>
          </pre>
        </div>
        <p key="p-12-113" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Complexity:
        </p>
        <ul key="ul-12-117" className="my-3 space-y-1.5 text-xs md:text-sm text-slate-300 list-disc list-inside">
          <li>Time: O(N).</li>
          <li>Auxiliary space: O(1).</li>
      </ul>
        <h3 key="h3-12-118" className="text-lg md:text-xl font-bold text-indigo-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-indigo-400"></span>
          12.5 Important Variation
        </h3>
        <p key="p-12-120" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          What happens if you can climb 1, 2, or 3 steps at a time?
        </p>
        <p key="p-12-122" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          The recurrence becomes:
        </p>
        <p key="p-12-124" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          \<span className="font-mono text-indigo-300 font-semibold"> dp[n]=dp[n-1]+dp[n-2]+dp[n-3] \</span>
        </p>
        <p key="p-12-126" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          The base cases must be defined carefully according to the allowed jumps.
        </p>
        <p key="p-12-128" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          This demonstrates an important DP skill: when the possible decisions change, the state transition changes too.
        </p>
      </div>
    )
  },
  {
    id: 13,
    title: "13. Minimum Cost Climbing Stairs",
    summary: "Minimizing transition cost when climbing 1 or 2 steps, base cases, and O(1) rolling space optimization.",
    content: (
      <div className="space-y-4">
        <p key="p-13-2" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          This problem introduces optimization using DP.
        </p>
        <p key="p-13-4" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Unlike ordinary climbing stairs, we now care about minimizing the total cost.
        </p>
        <h3 key="h3-13-6" className="text-lg md:text-xl font-bold text-indigo-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-indigo-400"></span>
          13.1 Problem Statement
        </h3>
        <p key="p-13-8" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          You are given an array:
        </p>
        <div key="code-13-13" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-indigo-500/30 border border-indigo-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-slate-400 font-sans">Module 19 Dynamic Programming Fundamentals</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`cost = [10, 15, 20]`}</code>
          </pre>
        </div>
        <p key="p-13-14" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Each element represents the cost of stepping onto that stair.
        </p>
        <p key="p-13-16" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          You can climb either one or two steps.
        </p>
        <p key="p-13-18" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          You may start at index 0 or index 1.
        </p>
        <p key="p-13-20" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Find the minimum cost required to reach the top, which is just beyond the last index.
        </p>
        <h3 key="h3-13-22" className="text-lg md:text-xl font-bold text-indigo-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-indigo-400"></span>
          13.2 Understanding the Choices
        </h3>
        <p key="p-13-24" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          At every stair, you can:
        </p>
        <ul key="ul-13-28" className="my-3 space-y-1.5 text-xs md:text-sm text-slate-300 list-disc list-inside">
          <li>Arrive from the previous stair.</li>
          <li>Arrive from the stair before that.</li>
      </ul>
        <p key="p-13-29" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          To minimize cost, choose the cheaper total path.
        </p>
        <p key="p-13-31" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Let:
        </p>
        <p key="p-13-33" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          \<span className="font-mono text-indigo-300 font-semibold"> dp[i] \</span>
        </p>
        <p key="p-13-35" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          represent the minimum cost required to reach stair i.
        </p>
        <p key="p-13-37" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Then:
        </p>
        <p key="p-13-39" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          \<span className="font-mono text-indigo-300 font-semibold"> dp[i]=cost[i]+\min(dp[i-1],dp[i-2]) \</span>
        </p>
        <p key="p-13-41" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          We define:
        </p>
        <p key="p-13-43" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          \<span className="font-mono text-indigo-300 font-semibold"> dp[0]=cost[0] \</span>
        </p>
        <p key="p-13-45" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          \<span className="font-mono text-indigo-300 font-semibold"> dp[1]=cost[1] \</span>
        </p>
        <p key="p-13-47" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          The final answer is:
        </p>
        <p key="p-13-49" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          \<span className="font-mono text-indigo-300 font-semibold"> \min(dp[n-1],dp[n-2]) \</span>
        </p>
        <p key="p-13-51" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Why?
        </p>
        <p key="p-13-53" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Because the destination is beyond the final stair, and we can reach it from either of the final two positions.
        </p>
        <h3 key="h3-13-55" className="text-lg md:text-xl font-bold text-indigo-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-indigo-400"></span>
          13.3 Dry Run
        </h3>
        <p key="p-13-57" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Input:
        </p>
        <div key="code-13-62" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-indigo-500/30 border border-indigo-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-slate-400 font-sans">Module 19 Dynamic Programming Fundamentals</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`cost = [10, 15, 20]`}</code>
          </pre>
        </div>
        <p key="p-13-63" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Initial:
        </p>
        <div key="code-13-69" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-indigo-500/30 border border-indigo-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-slate-400 font-sans">Module 19 Dynamic Programming Fundamentals</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`dp[0] = 10
dp[1] = 15`}</code>
          </pre>
        </div>
        <p key="p-13-70" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Calculate:
        </p>
        <p key="p-13-72" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          \<span className="font-mono text-indigo-300 font-semibold"> dp[2]=20+\min(10,15)=30 \</span>
        </p>
        <p key="p-13-74" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Final answer:
        </p>
        <p key="p-13-76" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          \<span className="font-mono text-indigo-300 font-semibold"> \min(15,30)=15 \</span>
        </p>
        <p key="p-13-78" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          We can start at index 1, pay 15, then jump to the top.
        </p>
        <h3 key="h3-13-80" className="text-lg md:text-xl font-bold text-indigo-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-indigo-400"></span>
          13.4 Java Implementation
        </h3>
        <div key="code-13-116" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-indigo-500/30 border border-indigo-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-slate-400 font-sans">Module 19 Dynamic Programming Fundamentals</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`public class MinCostClimbingStairs {

    public static int minCost(int[] cost) {

        int n = cost.length;

        if (n <= 1) {
            return 0;
        }

        int prev2 = cost[0];
        int prev1 = cost[1];

        for (int i = 2; i < n; i++) {

            int current = cost[i]
                + Math.min(prev1, prev2);

            prev2 = prev1;
            prev1 = current;
        }

        return Math.min(prev1, prev2);
    }

    public static void main(String[] args) {

        int[] cost = {10, 15, 20};

        System.out.println(minCost(cost));
    }
}`}</code>
          </pre>
        </div>
        <p key="p-13-117" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Output:
        </p>
        <div key="code-13-122" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-indigo-500/30 border border-indigo-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-slate-400 font-sans">Module 19 Dynamic Programming Fundamentals</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`15`}</code>
          </pre>
        </div>
        <p key="p-13-123" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Complexity:
        </p>
        <ul key="ul-13-127" className="my-3 space-y-1.5 text-xs md:text-sm text-slate-300 list-disc list-inside">
          <li>Time: O(N).</li>
          <li>Space: O(1).</li>
      </ul>
        <h3 key="h3-13-128" className="text-lg md:text-xl font-bold text-indigo-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-indigo-400"></span>
          13.5 Key Learning
        </h3>
        <p key="p-13-130" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Notice the difference:
        </p>
        <p key="p-13-132" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Climbing Stairs:
        </p>
        <p key="p-13-134" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          \<span className="font-mono text-indigo-300 font-semibold"> dp[i]=dp[i-1]+dp[i-2] \</span>
        </p>
        <p key="p-13-136" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Minimum Cost Climbing Stairs:
        </p>
        <p key="p-13-138" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          \<span className="font-mono text-indigo-300 font-semibold"> dp[i]=cost[i]+\min(dp[i-1],dp[i-2]) \</span>
        </p>
        <p key="p-13-140" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          The first problem counts possible ways.
        </p>
        <p key="p-13-142" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          The second problem minimizes total cost.
        </p>
        <p key="p-13-144" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Always identify the objective before creating your recurrence.
        </p>
      </div>
    )
  },
  {
    id: 14,
    title: "14. House Robber",
    summary: "Maximizing non-adjacent loot, rob vs skip recurrence, dry run, and House Robber II circular neighborhood reduction.",
    content: (
      <div className="space-y-4">
        <p key="p-14-2" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          House Robber is a classic DP optimization problem.
        </p>
        <p key="p-14-4" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          It teaches you how to make decisions that depend on whether you select or skip the current element.
        </p>
        <h3 key="h3-14-6" className="text-lg md:text-xl font-bold text-indigo-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-indigo-400"></span>
          14.1 Problem Statement
        </h3>
        <p key="p-14-8" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          A robber wants to rob houses arranged in a row.
        </p>
        <p key="p-14-10" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Each house contains a certain amount of money.
        </p>
        <p key="p-14-12" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          However, adjacent houses have security systems connected to each other.
        </p>
        <p key="p-14-14" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Robbing two neighboring houses triggers an alarm.
        </p>
        <p key="p-14-16" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Your task is to maximize the total money without robbing adjacent houses.
        </p>
        <h4 key="h4-14-18" className="text-base font-semibold text-emerald-400 mt-6 mb-2">
          Example
        </h4>
        <div key="code-14-23" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-indigo-500/30 border border-indigo-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-slate-400 font-sans">Module 19 Dynamic Programming Fundamentals</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`nums = [2, 7, 9, 3, 1]`}</code>
          </pre>
        </div>
        <p key="p-14-24" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Possible choices:
        </p>
        <ul key="ul-14-29" className="my-3 space-y-1.5 text-xs md:text-sm text-slate-300 list-disc list-inside">
          <li>Rob house 0: 2.</li>
          <li>Rob house 2: 9.</li>
          <li>Rob house 4: 1.</li>
      </ul>
        <p key="p-14-30" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Total:
        </p>
        <p key="p-14-32" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          \<span className="font-mono text-indigo-300 font-semibold"> 2+9+1=12 \</span>
        </p>
        <p key="p-14-34" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Another combination:
        </p>
        <p key="p-14-36" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          \<span className="font-mono text-indigo-300 font-semibold"> 7+3=10 \</span>
        </p>
        <p key="p-14-38" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          The optimal answer is:
        </p>
        <p key="p-14-40" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          \<span className="font-mono text-indigo-300 font-semibold"> \boxed&#123;12&#125; \</span>
        </p>
        <h3 key="h3-14-42" className="text-lg md:text-xl font-bold text-indigo-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-indigo-400"></span>
          14.2 Greedy Does Not Work Reliably
        </h3>
        <p key="p-14-44" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Consider:
        </p>
        <div key="code-14-49" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-indigo-500/30 border border-indigo-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-slate-400 font-sans">Module 19 Dynamic Programming Fundamentals</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`[2, 7, 9, 3, 1]`}</code>
          </pre>
        </div>
        <p key="p-14-50" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Selecting the largest individual value first does not always guarantee the maximum total.
        </p>
        <p key="p-14-52" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          The problem requires evaluating combinations of decisions.
        </p>
        <p key="p-14-54" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          This is where DP is useful.
        </p>
        <h3 key="h3-14-56" className="text-lg md:text-xl font-bold text-indigo-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-indigo-400"></span>
          14.3 State Definition
        </h3>
        <p key="p-14-58" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Let:
        </p>
        <p key="p-14-60" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          \<span className="font-mono text-indigo-300 font-semibold"> dp[i] \</span>
        </p>
        <p key="p-14-62" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          represent the maximum money that can be collected from the first i houses.
        </p>
        <p key="p-14-64" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          At every house, we have two choices.
        </p>
        <p key="p-14-66" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <strong className="font-bold text-white">Choice 1: Rob the current house.</strong>
        </p>
        <p key="p-14-68" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          We cannot rob the previous house.
        </p>
        <p key="p-14-70" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          \<span className="font-mono text-indigo-300 font-semibold"> nums[i]+dp[i-2] \</span>
        </p>
        <p key="p-14-72" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <strong className="font-bold text-white">Choice 2: Skip the current house.</strong>
        </p>
        <p key="p-14-74" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          We retain the best answer from the previous house.
        </p>
        <p key="p-14-76" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          \<span className="font-mono text-indigo-300 font-semibold"> dp[i-1] \</span>
        </p>
        <p key="p-14-78" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Therefore:
        </p>
        <p key="p-14-80" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          \<span className="font-mono text-indigo-300 font-semibold"> dp[i]=\max(dp[i-1],nums[i]+dp[i-2]) \</span>
        </p>
        <h3 key="h3-14-82" className="text-lg md:text-xl font-bold text-indigo-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-indigo-400"></span>
          14.4 Java Implementation
        </h3>
        <div key="code-14-124" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-indigo-500/30 border border-indigo-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-slate-400 font-sans">Module 19 Dynamic Programming Fundamentals</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`public class HouseRobber {

    public static int rob(int[] nums) {

        int n = nums.length;

        if (n == 0) {
            return 0;
        }

        if (n == 1) {
            return nums[0];
        }

        int prev2 = 0;
        int prev1 = 0;

        for (int money : nums) {

            int current = Math.max(
                prev1,
                money + prev2
            );

            prev2 = prev1;
            prev1 = current;
        }

        return prev1;
    }

    public static void main(String[] args) {

        int[] nums = {2, 7, 9, 3, 1};

        System.out.println(rob(nums));
    }
}`}</code>
          </pre>
        </div>
        <p key="p-14-125" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Output:
        </p>
        <div key="code-14-130" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-indigo-500/30 border border-indigo-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-slate-400 font-sans">Module 19 Dynamic Programming Fundamentals</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`12`}</code>
          </pre>
        </div>
        <h3 key="h3-14-131" className="text-lg md:text-xl font-bold text-indigo-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-indigo-400"></span>
          14.5 Dry Run
        </h3>
        <div key="table-14-140" className="my-6 overflow-x-auto rounded-xl border border-slate-800 bg-slate-950/70 shadow-sm">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="bg-slate-900/90 border-b border-slate-800 text-slate-300 font-mono">
                <th className="p-3 font-semibold">House value</th>
                <th className="p-3 font-semibold">Previous best</th>
                <th className="p-3 font-semibold">Best two positions back</th>
                <th className="p-3 font-semibold">Current best</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60 text-slate-300 font-sans">
              <tr className="hover:bg-slate-900/40 transition">
                  <td className="p-3">2</td>
                  <td className="p-3">0</td>
                  <td className="p-3">0</td>
                  <td className="p-3">2</td>
                </tr>
              <tr className="hover:bg-slate-900/40 transition">
                  <td className="p-3">7</td>
                  <td className="p-3">2</td>
                  <td className="p-3">0</td>
                  <td className="p-3">7</td>
                </tr>
              <tr className="hover:bg-slate-900/40 transition">
                  <td className="p-3">9</td>
                  <td className="p-3">7</td>
                  <td className="p-3">2</td>
                  <td className="p-3">11</td>
                </tr>
              <tr className="hover:bg-slate-900/40 transition">
                  <td className="p-3">3</td>
                  <td className="p-3">11</td>
                  <td className="p-3">7</td>
                  <td className="p-3">11</td>
                </tr>
              <tr className="hover:bg-slate-900/40 transition">
                  <td className="p-3">1</td>
                  <td className="p-3">11</td>
                  <td className="p-3">11</td>
                  <td className="p-3">12</td>
                </tr>
            </tbody>
          </table>
        </div>
        <p key="p-14-141" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Answer:
        </p>
        <div key="code-14-146" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-indigo-500/30 border border-indigo-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-slate-400 font-sans">Module 19 Dynamic Programming Fundamentals</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`12`}</code>
          </pre>
        </div>
        <h3 key="h3-14-147" className="text-lg md:text-xl font-bold text-indigo-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-indigo-400"></span>
          14.6 Complexity
        </h3>
        <ul key="ul-14-151" className="my-3 space-y-1.5 text-xs md:text-sm text-slate-300 list-disc list-inside">
          <li>Time: O(N).</li>
          <li>Space: O(1).</li>
      </ul>
        <h3 key="h3-14-152" className="text-lg md:text-xl font-bold text-indigo-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-indigo-400"></span>
          14.7 House Robber II — Circular Variation
        </h3>
        <p key="p-14-154" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          An important interview variation is when the first and last houses are also considered adjacent.
        </p>
        <p key="p-14-156" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          In that case, we cannot rob both the first and last houses.
        </p>
        <p key="p-14-158" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          We can solve it by considering two cases:
        </p>
        <ol key="ol-14-162" className="my-3 space-y-1.5 text-xs md:text-sm text-slate-300 list-decimal list-inside">
          <li>Ignore the last house and solve the remaining linear problem.</li>
          <li>Ignore the first house and solve the remaining linear problem.</li>
      </ol>
        <p key="p-14-163" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          The answer is the maximum of both.
        </p>
        <div key="code-14-205" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-indigo-500/30 border border-indigo-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-slate-400 font-sans">Module 19 Dynamic Programming Fundamentals</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`public class HouseRobberCircular {

    static int robLinear(
        int[] nums,
        int start,
        int end
    ) {

        int prev2 = 0;
        int prev1 = 0;

        for (int i = start; i <= end; i++) {

            int current = Math.max(
                prev1,
                nums[i] + prev2
            );

            prev2 = prev1;
            prev1 = current;
        }

        return prev1;
    }

    public static int rob(int[] nums) {

        int n = nums.length;

        if (n == 0) return 0;
        if (n == 1) return nums[0];

        return Math.max(
            robLinear(nums, 0, n - 2),
            robLinear(nums, 1, n - 1)
        );
    }
}`}</code>
          </pre>
        </div>
        <p key="p-14-206" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          This is another example of breaking an optimization problem into smaller cases.
        </p>
      </div>
    )
  },
  {
    id: 15,
    title: "15. 0/1 Knapsack",
    summary: "The foundational DP problem: include vs exclude bounded items under weight capacity, 2D table, and reverse 1D array traversal.",
    content: (
      <div className="space-y-4">
        <p key="p-15-2" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          0/1 Knapsack is one of the most important foundational DP problems.
        </p>
        <p key="p-15-4" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          It is also a major example of a problem where greedy selection by value-to-weight ratio does not generally work.
        </p>
        <h3 key="h3-15-6" className="text-lg md:text-xl font-bold text-indigo-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-indigo-400"></span>
          15.1 Problem Statement
        </h3>
        <p key="p-15-8" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          You are given:
        </p>
        <ul key="ul-15-14" className="my-3 space-y-1.5 text-xs md:text-sm text-slate-300 list-disc list-inside">
          <li>N items.</li>
          <li>A weight for each item.</li>
          <li>A value for each item.</li>
          <li>A knapsack with maximum capacity W.</li>
      </ul>
        <p key="p-15-15" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          You must maximize the total value without exceeding the capacity.
        </p>
        <p key="p-15-17" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          The important rule:
        </p>
        <p key="p-15-19" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <strong className="font-bold text-white">Each item can either be selected completely once or not selected at all.</strong>
        </p>
        <p key="p-15-21" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          You cannot take a fraction of an item.
        </p>
        <h4 key="h4-15-23" className="text-base font-semibold text-emerald-400 mt-6 mb-2">
          Example
        </h4>
        <p key="p-15-25" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Capacity:
        </p>
        <div key="code-15-30" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-indigo-500/30 border border-indigo-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-slate-400 font-sans">Module 19 Dynamic Programming Fundamentals</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`W = 5`}</code>
          </pre>
        </div>
        <p key="p-15-31" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Items:
        </p>
        <div key="table-15-39" className="my-6 overflow-x-auto rounded-xl border border-slate-800 bg-slate-950/70 shadow-sm">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="bg-slate-900/90 border-b border-slate-800 text-slate-300 font-mono">
                <th className="p-3 font-semibold">Item</th>
                <th className="p-3 font-semibold">Weight</th>
                <th className="p-3 font-semibold">Value</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60 text-slate-300 font-sans">
              <tr className="hover:bg-slate-900/40 transition">
                  <td className="p-3">A</td>
                  <td className="p-3">2</td>
                  <td className="p-3">12</td>
                </tr>
              <tr className="hover:bg-slate-900/40 transition">
                  <td className="p-3">B</td>
                  <td className="p-3">1</td>
                  <td className="p-3">10</td>
                </tr>
              <tr className="hover:bg-slate-900/40 transition">
                  <td className="p-3">C</td>
                  <td className="p-3">3</td>
                  <td className="p-3">20</td>
                </tr>
              <tr className="hover:bg-slate-900/40 transition">
                  <td className="p-3">D</td>
                  <td className="p-3">2</td>
                  <td className="p-3">15</td>
                </tr>
            </tbody>
          </table>
        </div>
        <p key="p-15-40" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Possible selections:
        </p>
        <div key="table-15-49" className="my-6 overflow-x-auto rounded-xl border border-slate-800 bg-slate-950/70 shadow-sm">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="bg-slate-900/90 border-b border-slate-800 text-slate-300 font-mono">
                <th className="p-3 font-semibold">Selected items</th>
                <th className="p-3 font-semibold">Total weight</th>
                <th className="p-3 font-semibold">Total value</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60 text-slate-300 font-sans">
              <tr className="hover:bg-slate-900/40 transition">
                  <td className="p-3">A + B</td>
                  <td className="p-3">3</td>
                  <td className="p-3">22</td>
                </tr>
              <tr className="hover:bg-slate-900/40 transition">
                  <td className="p-3">A + C</td>
                  <td className="p-3">5</td>
                  <td className="p-3">32</td>
                </tr>
              <tr className="hover:bg-slate-900/40 transition">
                  <td className="p-3">B + C</td>
                  <td className="p-3">4</td>
                  <td className="p-3">30</td>
                </tr>
              <tr className="hover:bg-slate-900/40 transition">
                  <td className="p-3">B + D</td>
                  <td className="p-3">3</td>
                  <td className="p-3">25</td>
                </tr>
              <tr className="hover:bg-slate-900/40 transition">
                  <td className="p-3">A + D + B</td>
                  <td className="p-3">5</td>
                  <td className="p-3">37</td>
                </tr>
            </tbody>
          </table>
        </div>
        <p key="p-15-50" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Optimal answer:
        </p>
        <p key="p-15-52" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          \<span className="font-mono text-indigo-300 font-semibold"> \boxed&#123;37&#125; \</span>
        </p>
        <h3 key="h3-15-54" className="text-lg md:text-xl font-bold text-indigo-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-indigo-400"></span>
          15.2 State Definition
        </h3>
        <p key="p-15-56" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Let:
        </p>
        <p key="p-15-58" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          \<span className="font-mono text-indigo-300 font-semibold"> dp[i][w] \</span>
        </p>
        <p key="p-15-60" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          represent the maximum value obtainable using the first i items with a maximum capacity of w.
        </p>
        <p key="p-15-62" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          For every item, we have two choices.
        </p>
        <h4 key="h4-15-64" className="text-base font-semibold text-emerald-400 mt-6 mb-2">
          Choice 1: Do Not Take the Item
        </h4>
        <p key="p-15-66" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          The value remains:
        </p>
        <p key="p-15-68" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          \<span className="font-mono text-indigo-300 font-semibold"> dp[i-1][w] \</span>
        </p>
        <h4 key="h4-15-70" className="text-base font-semibold text-emerald-400 mt-6 mb-2">
          Choice 2: Take the Item
        </h4>
        <p key="p-15-72" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Only possible when:
        </p>
        <p key="p-15-74" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          \<span className="font-mono text-indigo-300 font-semibold"> weight_i \leq w \</span>
        </p>
        <p key="p-15-76" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          New value:
        </p>
        <p key="p-15-78" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          \<span className="font-mono text-indigo-300 font-semibold"> value_i+dp[i-1][w-weight_i] \</span>
        </p>
        <p key="p-15-80" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          We use the previous row because we are not allowed to take the same item more than once.
        </p>
        <p key="p-15-82" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Therefore:
        </p>
        <p key="p-15-84" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          \<span className="font-mono text-indigo-300 font-semibold"> dp[i][w]= \max \begin&#123;cases&#125; dp[i-1][w]\\\ value_i+dp[i-1][w-weight_i] \end&#123;cases&#125; \</span>
        </p>
        <p key="p-15-86" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          when the item fits.
        </p>
        <p key="p-15-88" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          If it does not fit:
        </p>
        <p key="p-15-90" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          \<span className="font-mono text-indigo-300 font-semibold"> dp[i][w]=dp[i-1][w] \</span>
        </p>
        <h3 key="h3-15-92" className="text-lg md:text-xl font-bold text-indigo-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-indigo-400"></span>
          15.3 Base Cases
        </h3>
        <p key="p-15-94" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          If no items are available:
        </p>
        <p key="p-15-96" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          \<span className="font-mono text-indigo-300 font-semibold"> dp[0][w]=0 \</span>
        </p>
        <p key="p-15-98" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          If the capacity is zero:
        </p>
        <p key="p-15-100" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          \<span className="font-mono text-indigo-300 font-semibold"> dp[i][0]=0 \</span>
        </p>
        <h3 key="h3-15-102" className="text-lg md:text-xl font-bold text-indigo-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-indigo-400"></span>
          15.4 Java Implementation — 2D DP
        </h3>
        <div key="code-15-156" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-indigo-500/30 border border-indigo-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-slate-400 font-sans">Module 19 Dynamic Programming Fundamentals</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`public class Knapsack01 {

    public static int knapsack(
        int[] weights,
        int[] values,
        int capacity
    ) {

        int n = weights.length;

        int[][] dp = new int[n + 1][capacity + 1];

        for (int i = 1; i <= n; i++) {

            int weight = weights[i - 1];

            int value = values[i - 1];

            for (int w = 0; w <= capacity; w++) {

                // Do not take item
                dp[i][w] = dp[i - 1][w];

                // Take item if it fits
                if (weight <= w) {

                    dp[i][w] = Math.max(
                        dp[i][w],
                        value + dp[i - 1][w - weight]
                    );
                }
            }
        }

        return dp[n][capacity];
    }

    public static void main(String[] args) {

        int[] weights = {2, 1, 3, 2};

        int[] values = {12, 10, 20, 15};

        int capacity = 5;

        System.out.println(
            knapsack(weights, values, capacity)
        );
    }
}`}</code>
          </pre>
        </div>
        <p key="p-15-157" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Output:
        </p>
        <div key="code-15-162" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-indigo-500/30 border border-indigo-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-slate-400 font-sans">Module 19 Dynamic Programming Fundamentals</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`37`}</code>
          </pre>
        </div>
        <h3 key="h3-15-163" className="text-lg md:text-xl font-bold text-indigo-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-indigo-400"></span>
          15.5 Understanding the DP Table
        </h3>
        <p key="p-15-165" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Each row represents the number of items considered.
        </p>
        <p key="p-15-167" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Each column represents a capacity.
        </p>
        <p key="p-15-169" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          For our example, the completed DP table is:
        </p>
        <p key="p-15-171" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <strong className="font-bold text-white">0/1 Knapsack DP table</strong>
        </p>
        <div key="table-15-180" className="my-6 overflow-x-auto rounded-xl border border-slate-800 bg-slate-950/70 shadow-sm">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="bg-slate-900/90 border-b border-slate-800 text-slate-300 font-mono">
                <th className="p-3 font-semibold"><strong className="font-bold text-white">Items / W</strong></th>
                <th className="p-3 font-semibold"><strong className="font-bold text-white">0</strong></th>
                <th className="p-3 font-semibold"><strong className="font-bold text-white">1</strong></th>
                <th className="p-3 font-semibold"><strong className="font-bold text-white">2</strong></th>
                <th className="p-3 font-semibold"><strong className="font-bold text-white">3</strong></th>
                <th className="p-3 font-semibold"><strong className="font-bold text-white">4</strong></th>
                <th className="p-3 font-semibold"><strong className="font-bold text-white">5</strong></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60 text-slate-300 font-sans">
              <tr className="hover:bg-slate-900/40 transition">
                  <td className="p-3"><strong className="font-bold text-white">0</strong></td>
                  <td className="p-3">0</td>
                  <td className="p-3">0</td>
                  <td className="p-3">0</td>
                  <td className="p-3">0</td>
                  <td className="p-3">0</td>
                  <td className="p-3">0</td>
                </tr>
              <tr className="hover:bg-slate-900/40 transition">
                  <td className="p-3"><strong className="font-bold text-white">1</strong></td>
                  <td className="p-3">0</td>
                  <td className="p-3">0</td>
                  <td className="p-3">12</td>
                  <td className="p-3">12</td>
                  <td className="p-3">12</td>
                  <td className="p-3">12</td>
                </tr>
              <tr className="hover:bg-slate-900/40 transition">
                  <td className="p-3"><strong className="font-bold text-white">2</strong></td>
                  <td className="p-3">0</td>
                  <td className="p-3">10</td>
                  <td className="p-3">12</td>
                  <td className="p-3">22</td>
                  <td className="p-3">22</td>
                  <td className="p-3">22</td>
                </tr>
              <tr className="hover:bg-slate-900/40 transition">
                  <td className="p-3"><strong className="font-bold text-white">3</strong></td>
                  <td className="p-3">0</td>
                  <td className="p-3">10</td>
                  <td className="p-3">12</td>
                  <td className="p-3">22</td>
                  <td className="p-3">30</td>
                  <td className="p-3">32</td>
                </tr>
              <tr className="hover:bg-slate-900/40 transition">
                  <td className="p-3"><strong className="font-bold text-white">4</strong></td>
                  <td className="p-3">0</td>
                  <td className="p-3">10</td>
                  <td className="p-3">15</td>
                  <td className="p-3">25</td>
                  <td className="p-3">30</td>
                  <td className="p-3"><strong className="font-bold text-white">37</strong></td>
                </tr>
            </tbody>
          </table>
        </div>
        <p key="p-15-181" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Rows represent items considered; columns represent knapsack capacities.
        </p>
        <p key="p-15-183" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          # <strong className="font-bold text-white">Optimal value = 37</strong>
        </p>
        <h3 key="h3-15-185" className="text-lg md:text-xl font-bold text-indigo-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-indigo-400"></span>
          15.6 Space Optimization — One-Dimensional DP
        </h3>
        <p key="p-15-187" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          The previous state only needs the previous row.
        </p>
        <p key="p-15-189" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Therefore, instead of a two-dimensional array, we can use:
        </p>
        <div key="code-15-194" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-indigo-500/30 border border-indigo-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-slate-400 font-sans">Module 19 Dynamic Programming Fundamentals</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`int[] dp = new int[capacity + 1];`}</code>
          </pre>
        </div>
        <p key="p-15-195" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          The important detail:
        </p>
        <p key="p-15-197" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <strong className="font-bold text-white">For 0/1 Knapsack, iterate capacity from right to left.</strong>
        </p>
        <div key="code-15-229" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-indigo-500/30 border border-indigo-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-slate-400 font-sans">Module 19 Dynamic Programming Fundamentals</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`public class Knapsack01Optimized {

    public static int knapsack(
        int[] weights,
        int[] values,
        int capacity
    ) {

        int[] dp = new int[capacity + 1];

        for (int i = 0; i < weights.length; i++) {

            for (
                int w = capacity;
                w >= weights[i];
                w--
            ) {

                dp[w] = Math.max(
                    dp[w],
                    values[i] + dp[w - weights[i]]
                );
            }
        }

        return dp[capacity];
    }
}`}</code>
          </pre>
        </div>
        <p key="p-15-230" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Why iterate backward?
        </p>
        <p key="p-15-232" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Because each item can only be used once.
        </p>
        <p key="p-15-234" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          A reverse iteration ensures that the current item does not reuse a state that was already updated using that same item.
        </p>
        <h3 key="h3-15-236" className="text-lg md:text-xl font-bold text-indigo-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-indigo-400"></span>
          15.7 Complexity
        </h3>
        <div key="table-15-242" className="my-6 overflow-x-auto rounded-xl border border-slate-800 bg-slate-950/70 shadow-sm">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="bg-slate-900/90 border-b border-slate-800 text-slate-300 font-mono">
                <th className="p-3 font-semibold">Implementation</th>
                <th className="p-3 font-semibold">Time</th>
                <th className="p-3 font-semibold">Space</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60 text-slate-300 font-sans">
              <tr className="hover:bg-slate-900/40 transition">
                  <td className="p-3">2D DP</td>
                  <td className="p-3">O(NW)</td>
                  <td className="p-3">O(NW)</td>
                </tr>
              <tr className="hover:bg-slate-900/40 transition">
                  <td className="p-3">1D optimized</td>
                  <td className="p-3">O(NW)</td>
                  <td className="p-3">O(W)</td>
                </tr>
            </tbody>
          </table>
        </div>
        <p key="p-15-243" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Here, N is the number of items and W is the capacity.
        </p>
        <p key="p-15-245" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          The complexity is pseudo-polynomial because it depends on the numerical capacity W, not simply the number of bits required to represent W.
        </p>
      </div>
    )
  },
  {
    id: 16,
    title: "16. Unbounded Knapsack",
    summary: "Infinite item supply knapsack, forward capacity propagation, and comparison with 0/1 Knapsack.",
    content: (
      <div className="space-y-4">
        <p key="p-16-2" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Unbounded Knapsack is closely related to 0/1 Knapsack.
        </p>
        <p key="p-16-4" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          The main difference is:
        </p>
        <p key="p-16-6" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <strong className="font-bold text-white">You can use each item an unlimited number of times.</strong>
        </p>
        <h3 key="h3-16-8" className="text-lg md:text-xl font-bold text-indigo-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-indigo-400"></span>
          16.1 Problem Statement
        </h3>
        <p key="p-16-10" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          You are given:
        </p>
        <ul key="ul-16-15" className="my-3 space-y-1.5 text-xs md:text-sm text-slate-300 list-disc list-inside">
          <li>Item weights.</li>
          <li>Item values.</li>
          <li>A knapsack capacity W.</li>
      </ul>
        <p key="p-16-16" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          You can select any item repeatedly.
        </p>
        <p key="p-16-18" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Your goal is to maximize the total value without exceeding the capacity.
        </p>
        <h4 key="h4-16-20" className="text-base font-semibold text-emerald-400 mt-6 mb-2">
          Example
        </h4>
        <div key="code-16-25" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-indigo-500/30 border border-indigo-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-slate-400 font-sans">Module 19 Dynamic Programming Fundamentals</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`Capacity = 8`}</code>
          </pre>
        </div>
        <p key="p-16-26" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Items:
        </p>
        <div key="table-16-33" className="my-6 overflow-x-auto rounded-xl border border-slate-800 bg-slate-950/70 shadow-sm">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="bg-slate-900/90 border-b border-slate-800 text-slate-300 font-mono">
                <th className="p-3 font-semibold">Item</th>
                <th className="p-3 font-semibold">Weight</th>
                <th className="p-3 font-semibold">Value</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60 text-slate-300 font-sans">
              <tr className="hover:bg-slate-900/40 transition">
                  <td className="p-3">A</td>
                  <td className="p-3">2</td>
                  <td className="p-3">10</td>
                </tr>
              <tr className="hover:bg-slate-900/40 transition">
                  <td className="p-3">B</td>
                  <td className="p-3">3</td>
                  <td className="p-3">15</td>
                </tr>
              <tr className="hover:bg-slate-900/40 transition">
                  <td className="p-3">C</td>
                  <td className="p-3">5</td>
                  <td className="p-3">25</td>
                </tr>
            </tbody>
          </table>
        </div>
        <p key="p-16-34" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Possible selections:
        </p>
        <ul key="ul-16-39" className="my-3 space-y-1.5 text-xs md:text-sm text-slate-300 list-disc list-inside">
          <li>A four times: weight 8, value 40.</li>
          <li>B twice plus A once: weight 8, value 40.</li>
          <li>C once plus A once: weight 7, value 35.</li>
      </ul>
        <p key="p-16-40" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Optimal value:
        </p>
        <p key="p-16-42" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          \<span className="font-mono text-indigo-300 font-semibold"> \boxed&#123;40&#125; \</span>
        </p>
        <h3 key="h3-16-44" className="text-lg md:text-xl font-bold text-indigo-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-indigo-400"></span>
          16.2 State Definition
        </h3>
        <p key="p-16-46" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Let:
        </p>
        <p key="p-16-48" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          \<span className="font-mono text-indigo-300 font-semibold"> dp[w] \</span>
        </p>
        <p key="p-16-50" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          represent the maximum value achievable with capacity at most w.
        </p>
        <p key="p-16-52" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          For every item:
        </p>
        <p key="p-16-54" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          \<span className="font-mono text-indigo-300 font-semibold"> dp[w]=\max(dp[w],value_i+dp[w-weight_i]) \</span>
        </p>
        <p key="p-16-56" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          The key difference is that the transition uses the same <code className="px-1.5 py-0.5 rounded bg-slate-800 text-indigo-300 font-mono text-xs border border-slate-700/60">dp</code> array.
        </p>
        <p key="p-16-58" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          This allows the current item to be used again.
        </p>
        <h3 key="h3-16-60" className="text-lg md:text-xl font-bold text-indigo-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-indigo-400"></span>
          16.3 Java Implementation
        </h3>
        <div key="code-16-103" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-indigo-500/30 border border-indigo-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-slate-400 font-sans">Module 19 Dynamic Programming Fundamentals</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`public class UnboundedKnapsack {

    public static int knapsack(
        int[] weights,
        int[] values,
        int capacity
    ) {

        int[] dp = new int[capacity + 1];

        for (int i = 0; i < weights.length; i++) {

            for (
                int w = weights[i];
                w <= capacity;
                w++
            ) {

                dp[w] = Math.max(
                    dp[w],
                    values[i] + dp[w - weights[i]]
                );
            }
        }

        return dp[capacity];
    }

    public static void main(String[] args) {

        int[] weights = {2, 3, 5};

        int[] values = {10, 15, 25};

        System.out.println(
            knapsack(weights, values, 8)
        );
    }
}`}</code>
          </pre>
        </div>
        <p key="p-16-104" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Output:
        </p>
        <div key="code-16-109" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-indigo-500/30 border border-indigo-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-slate-400 font-sans">Module 19 Dynamic Programming Fundamentals</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`40`}</code>
          </pre>
        </div>
        <h3 key="h3-16-110" className="text-lg md:text-xl font-bold text-indigo-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-indigo-400"></span>
          16.4 Why Iterate Forward?
        </h3>
        <p key="p-16-112" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          For unbounded knapsack, we want to allow the current item to be used multiple times.
        </p>
        <p key="p-16-114" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Forward iteration allows us to use a state that may already have been updated using the current item.
        </p>
        <p key="p-16-116" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          For example:
        </p>
        <div key="code-16-122" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-indigo-500/30 border border-indigo-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-slate-400 font-sans">Module 19 Dynamic Programming Fundamentals</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`Weight = 2
Value = 10`}</code>
          </pre>
        </div>
        <p key="p-16-123" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          When capacity reaches 4:
        </p>
        <div key="code-16-128" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-indigo-500/30 border border-indigo-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-slate-400 font-sans">Module 19 Dynamic Programming Fundamentals</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`dp[4] = 10 + dp[2]`}</code>
          </pre>
        </div>
        <p key="p-16-129" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          If <code className="px-1.5 py-0.5 rounded bg-slate-800 text-indigo-300 font-mono text-xs border border-slate-700/60">dp[2]</code> already contains 10 from the same item, then:
        </p>
        <div key="code-16-134" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-indigo-500/30 border border-indigo-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-slate-400 font-sans">Module 19 Dynamic Programming Fundamentals</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`dp[4] = 20`}</code>
          </pre>
        </div>
        <p key="p-16-135" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          The item has been used twice.
        </p>
        <h3 key="h3-16-137" className="text-lg md:text-xl font-bold text-indigo-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-indigo-400"></span>
          16.5 0/1 vs Unbounded Knapsack
        </h3>
        <p key="p-16-139" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          This is a very important interview distinction.
        </p>
        <div key="table-16-148" className="my-6 overflow-x-auto rounded-xl border border-slate-800 bg-slate-950/70 shadow-sm">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="bg-slate-900/90 border-b border-slate-800 text-slate-300 font-mono">
                <th className="p-3 font-semibold">Feature</th>
                <th className="p-3 font-semibold">0/1 Knapsack</th>
                <th className="p-3 font-semibold">Unbounded Knapsack</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60 text-slate-300 font-sans">
              <tr className="hover:bg-slate-900/40 transition">
                  <td className="p-3">Item usage</td>
                  <td className="p-3">At most once</td>
                  <td className="p-3">Unlimited</td>
                </tr>
              <tr className="hover:bg-slate-900/40 transition">
                  <td className="p-3">State transition</td>
                  <td className="p-3">Previous item row</td>
                  <td className="p-3">Current/reusable state</td>
                </tr>
              <tr className="hover:bg-slate-900/40 transition">
                  <td className="p-3">1D loop direction</td>
                  <td className="p-3">Backward</td>
                  <td className="p-3">Forward</td>
                </tr>
              <tr className="hover:bg-slate-900/40 transition">
                  <td className="p-3">Time</td>
                  <td className="p-3">O(NW)</td>
                  <td className="p-3">O(NW)</td>
                </tr>
              <tr className="hover:bg-slate-900/40 transition">
                  <td className="p-3">Space</td>
                  <td className="p-3">O(W) optimized</td>
                  <td className="p-3">O(W) optimized</td>
                </tr>
            </tbody>
          </table>
        </div>
        <p key="p-16-149" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <strong className="font-bold text-white">Memory trick:</strong>
        </p>
        <ul key="ul-16-153" className="my-3 space-y-1.5 text-xs md:text-sm text-slate-300 list-disc list-inside">
          <li>0/1 Knapsack → Right to left.</li>
          <li>Unbounded Knapsack → Left to right.</li>
      </ul>
        <p key="p-16-154" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          The loop direction controls whether an item can be reused in the same iteration.
        </p>
      </div>
    )
  },
  {
    id: 17,
    title: "17. Subset Sum Problem",
    summary: "Determining whether a subset sums to target: boolean DP state, include/exclude transition, and 1D reverse scan.",
    content: (
      <div className="space-y-4">
        <p key="p-17-2" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Subset Sum is another foundational DP problem.
        </p>
        <p key="p-17-4" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          It is closely related to 0/1 Knapsack.
        </p>
        <h3 key="h3-17-6" className="text-lg md:text-xl font-bold text-indigo-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-indigo-400"></span>
          17.1 Problem Statement
        </h3>
        <p key="p-17-8" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          You are given an array of positive integers and a target value.
        </p>
        <p key="p-17-10" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Determine whether there is a subset whose elements add up to the target.
        </p>
        <p key="p-17-12" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Each element can be selected at most once.
        </p>
        <h4 key="h4-17-14" className="text-base font-semibold text-emerald-400 mt-6 mb-2">
          Example
        </h4>
        <div key="code-17-21" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-indigo-500/30 border border-indigo-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-slate-400 font-sans">Module 19 Dynamic Programming Fundamentals</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`nums = [3, 4, 5, 2]

target = 9`}</code>
          </pre>
        </div>
        <p key="p-17-22" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          One valid subset is:
        </p>
        <div key="code-17-27" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-indigo-500/30 border border-indigo-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-slate-400 font-sans">Module 19 Dynamic Programming Fundamentals</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`4 + 5 = 9`}</code>
          </pre>
        </div>
        <p key="p-17-28" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Answer:
        </p>
        <div key="code-17-33" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-indigo-500/30 border border-indigo-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-slate-400 font-sans">Module 19 Dynamic Programming Fundamentals</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`true`}</code>
          </pre>
        </div>
        <h3 key="h3-17-34" className="text-lg md:text-xl font-bold text-indigo-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-indigo-400"></span>
          17.2 State Definition
        </h3>
        <p key="p-17-36" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Let:
        </p>
        <p key="p-17-38" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          \<span className="font-mono text-indigo-300 font-semibold"> dp[i][sum] \</span>
        </p>
        <p key="p-17-40" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          represent whether we can create the sum using the first i elements.
        </p>
        <p key="p-17-42" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          At every element, we have two choices.
        </p>
        <ol key="ol-17-46" className="my-3 space-y-1.5 text-xs md:text-sm text-slate-300 list-decimal list-inside">
          <li>Do not include the element.</li>
          <li>Include the element, if it does not exceed the target.</li>
      </ol>
        <p key="p-17-47" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          The transition:
        </p>
        <p key="p-17-49" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          \<span className="font-mono text-indigo-300 font-semibold"> dp[i][sum]=dp[i-1][sum] \</span>
        </p>
        <p key="p-17-51" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          or, when the value fits:
        </p>
        <p key="p-17-53" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          \<span className="font-mono text-indigo-300 font-semibold"> dp[i][sum] = dp[i-1][sum] \lor dp[i-1][sum-num_i] \</span>
        </p>
        <h3 key="h3-17-55" className="text-lg md:text-xl font-bold text-indigo-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-indigo-400"></span>
          17.3 Base Cases
        </h3>
        <p key="p-17-57" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          A sum of zero can always be created by choosing an empty subset.
        </p>
        <p key="p-17-59" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          \<span className="font-mono text-indigo-300 font-semibold"> dp[i][0]=true \</span>
        </p>
        <p key="p-17-61" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          With zero elements, a positive target cannot be created:
        </p>
        <p key="p-17-63" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          \<span className="font-mono text-indigo-300 font-semibold"> dp[0][sum]=false,\quad sum&gt;0 \</span>
        </p>
        <h3 key="h3-17-65" className="text-lg md:text-xl font-bold text-indigo-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-indigo-400"></span>
          17.4 Java Implementation
        </h3>
        <div key="code-17-116" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-indigo-500/30 border border-indigo-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-slate-400 font-sans">Module 19 Dynamic Programming Fundamentals</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`public class SubsetSum {

    public static boolean canMakeSum(
        int[] nums,
        int target
    ) {

        boolean[][] dp =
            new boolean[nums.length + 1][target + 1];

        // Sum zero is always possible
        for (int i = 0; i <= nums.length; i++) {

            dp[i][0] = true;
        }

        for (int i = 1; i <= nums.length; i++) {

            int num = nums[i - 1];

            for (int sum = 1; sum <= target; sum++) {

                // Exclude current element
                dp[i][sum] = dp[i - 1][sum];

                // Include current element if possible
                if (num <= sum) {

                    dp[i][sum] =
                        dp[i][sum]
                        || dp[i - 1][sum - num];
                }
            }
        }

        return dp[nums.length][target];
    }

    public static void main(String[] args) {

        int[] nums = {3, 4, 5, 2};

        System.out.println(
            canMakeSum(nums, 9)
        );
    }
}`}</code>
          </pre>
        </div>
        <p key="p-17-117" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Output:
        </p>
        <div key="code-17-122" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-indigo-500/30 border border-indigo-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-slate-400 font-sans">Module 19 Dynamic Programming Fundamentals</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`true`}</code>
          </pre>
        </div>
        <h3 key="h3-17-123" className="text-lg md:text-xl font-bold text-indigo-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-indigo-400"></span>
          17.5 Space Optimization
        </h3>
        <p key="p-17-125" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          We can reduce the two-dimensional table to one dimension.
        </p>
        <div key="code-17-152" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-indigo-500/30 border border-indigo-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-slate-400 font-sans">Module 19 Dynamic Programming Fundamentals</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`public class SubsetSumOptimized {

    public static boolean canMakeSum(
        int[] nums,
        int target
    ) {

        boolean[] dp = new boolean[target + 1];

        dp[0] = true;

        for (int num : nums) {

            for (int sum = target; sum >= num; sum--) {

                dp[sum] =
                    dp[sum] || dp[sum - num];
            }
        }

        return dp[target];
    }
}`}</code>
          </pre>
        </div>
        <p key="p-17-153" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Notice the backward iteration.
        </p>
        <p key="p-17-155" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          We are selecting each array element at most once, so we must use previous states rather than repeatedly using the same element.
        </p>
        <h3 key="h3-17-157" className="text-lg md:text-xl font-bold text-indigo-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-indigo-400"></span>
          17.6 Complexity
        </h3>
        <ul key="ul-17-161" className="my-3 space-y-1.5 text-xs md:text-sm text-slate-300 list-disc list-inside">
          <li>Time: O(N × Target).</li>
          <li>Space: O(Target) optimized.</li>
      </ul>
        <p key="p-17-162" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          This is pseudo-polynomial time because the target may be exponentially large relative to its binary input length.
        </p>
        <p key="p-17-164" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <strong className="font-bold text-white">Assumption:</strong> These implementations use nonnegative integers. Negative numbers require a different state representation or another algorithm.
        </p>
      </div>
    )
  },
  {
    id: 18,
    title: "18. Partition Equal Subset Sum",
    summary: "Dividing array into two subsets with equal sum: reduction to Subset Sum with target = totalSum / 2.",
    content: (
      <div className="space-y-4">
        <p key="p-18-2" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          This problem builds directly on Subset Sum.
        </p>
        <h3 key="h3-18-4" className="text-lg md:text-xl font-bold text-indigo-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-indigo-400"></span>
          18.1 Problem Statement
        </h3>
        <p key="p-18-6" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          You are given an array of positive integers.
        </p>
        <p key="p-18-8" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Determine whether it can be divided into two subsets such that both subsets have the same total sum.
        </p>
        <h4 key="h4-18-10" className="text-base font-semibold text-emerald-400 mt-6 mb-2">
          Example
        </h4>
        <div key="code-18-15" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-indigo-500/30 border border-indigo-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-slate-400 font-sans">Module 19 Dynamic Programming Fundamentals</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`nums = [1, 5, 11, 5]`}</code>
          </pre>
        </div>
        <p key="p-18-16" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Possible partition:
        </p>
        <div key="code-18-23" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-indigo-500/30 border border-indigo-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-slate-400 font-sans">Module 19 Dynamic Programming Fundamentals</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`Subset 1 = [1, 5, 5]

Subset 2 = [11]`}</code>
          </pre>
        </div>
        <p key="p-18-24" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Their sums:
        </p>
        <div key="code-18-29" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-indigo-500/30 border border-indigo-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-slate-400 font-sans">Module 19 Dynamic Programming Fundamentals</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`11 = 11`}</code>
          </pre>
        </div>
        <p key="p-18-30" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Answer:
        </p>
        <div key="code-18-35" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-indigo-500/30 border border-indigo-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-slate-400 font-sans">Module 19 Dynamic Programming Fundamentals</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`true`}</code>
          </pre>
        </div>
        <h3 key="h3-18-36" className="text-lg md:text-xl font-bold text-indigo-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-indigo-400"></span>
          18.2 The Key Observation
        </h3>
        <p key="p-18-38" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          First calculate the total sum.
        </p>
        <p key="p-18-40" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          \<span className="font-mono text-indigo-300 font-semibold"> total=\sum nums[i] \</span>
        </p>
        <p key="p-18-42" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          For two equal subsets, each subset must have:
        </p>
        <p key="p-18-44" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          \<span className="font-mono text-indigo-300 font-semibold"> target=\frac&#123;total&#125;&#123;2&#125; \</span>
        </p>
        <p key="p-18-46" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          If the total sum is odd, an equal partition is impossible.
        </p>
        <p key="p-18-48" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          If the total sum is even, the problem becomes:
        </p>
        <p key="p-18-50" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Can we find a subset whose sum is equal to <code className="px-1.5 py-0.5 rounded bg-slate-800 text-indigo-300 font-mono text-xs border border-slate-700/60">total / 2</code>?
        </p>
        <p key="p-18-52" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          This is exactly the Subset Sum problem.
        </p>
        <h3 key="h3-18-54" className="text-lg md:text-xl font-bold text-indigo-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-indigo-400"></span>
          18.3 Java Implementation
        </h3>
        <div key="code-18-106" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-indigo-500/30 border border-indigo-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-slate-400 font-sans">Module 19 Dynamic Programming Fundamentals</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`public class PartitionEqualSubsetSum {

    public static boolean canPartition(
        int[] nums
    ) {

        int total = 0;

        for (int num : nums) {

            total += num;
        }

        if (total % 2 != 0) {
            return false;
        }

        int target = total / 2;

        boolean[] dp = new boolean[target + 1];

        dp[0] = true;

        for (int num : nums) {

            for (
                int sum = target;
                sum >= num;
                sum--
            ) {

                dp[sum] =
                    dp[sum] || dp[sum - num];
            }
        }

        return dp[target];
    }

    public static void main(String[] args) {

        int[] nums = {1, 5, 11, 5};

        System.out.println(
            canPartition(nums)
        );
    }
}`}</code>
          </pre>
        </div>
        <p key="p-18-107" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Output:
        </p>
        <div key="code-18-112" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-indigo-500/30 border border-indigo-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-slate-400 font-sans">Module 19 Dynamic Programming Fundamentals</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`true`}</code>
          </pre>
        </div>
        <h3 key="h3-18-113" className="text-lg md:text-xl font-bold text-indigo-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-indigo-400"></span>
          18.4 Dry Run
        </h3>
        <p key="p-18-115" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Input:
        </p>
        <div key="code-18-120" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-indigo-500/30 border border-indigo-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-slate-400 font-sans">Module 19 Dynamic Programming Fundamentals</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`[1, 5, 11, 5]`}</code>
          </pre>
        </div>
        <p key="p-18-121" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Total:
        </p>
        <p key="p-18-123" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          \<span className="font-mono text-indigo-300 font-semibold"> 1+5+11+5=22 \</span>
        </p>
        <p key="p-18-125" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Target:
        </p>
        <p key="p-18-127" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          \<span className="font-mono text-indigo-300 font-semibold"> 22/2=11 \</span>
        </p>
        <p key="p-18-129" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          We check whether a subset can produce 11.
        </p>
        <p key="p-18-131" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          One possibility:
        </p>
        <p key="p-18-133" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          \<span className="font-mono text-indigo-300 font-semibold"> 1+5+5=11 \</span>
        </p>
        <p key="p-18-135" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Therefore:
        </p>
        <div key="code-18-140" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-indigo-500/30 border border-indigo-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-slate-400 font-sans">Module 19 Dynamic Programming Fundamentals</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`true`}</code>
          </pre>
        </div>
        <h3 key="h3-18-141" className="text-lg md:text-xl font-bold text-indigo-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-indigo-400"></span>
          18.5 Complexity
        </h3>
        <ul key="ul-18-145" className="my-3 space-y-1.5 text-xs md:text-sm text-slate-300 list-disc list-inside">
          <li>Time: O(N × Total / 2).</li>
          <li>Space: O(Total / 2).</li>
      </ul>
        <p key="p-18-146" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          This algorithm assumes nonnegative input values and uses their sum as a capacity bound.
        </p>
      </div>
    )
  },
  {
    id: 19,
    title: "19. Coin Change",
    summary: "Coin Change I (fewest coins to make amount) vs Coin Change II (total distinct combinations count).",
    content: (
      <div className="space-y-4">
        <p key="p-19-2" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Coin Change is an important DP problem because it introduces two different optimization objectives:
        </p>
        <ol key="ol-19-6" className="my-3 space-y-1.5 text-xs md:text-sm text-slate-300 list-decimal list-inside">
          <li>Find the minimum number of coins required to make an amount.</li>
          <li>Find the number of distinct combinations of coins that make an amount.</li>
      </ol>
        <p key="p-19-7" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          These are different problems and require different state transitions.
        </p>
        <h3 key="h3-19-9" className="text-lg md:text-xl font-bold text-indigo-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-indigo-400"></span>
          19.1 Coin Change I — Minimum Number of Coins
        </h3>
        <h4 key="h4-19-11" className="text-base font-semibold text-emerald-400 mt-6 mb-2">
          Problem Statement
        </h4>
        <p key="p-19-13" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          You are given:
        </p>
        <ul key="ul-19-17" className="my-3 space-y-1.5 text-xs md:text-sm text-slate-300 list-disc list-inside">
          <li>An array of coin denominations.</li>
          <li>A target amount.</li>
      </ul>
        <p key="p-19-18" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          You can use each denomination unlimited times.
        </p>
        <p key="p-19-20" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Find the minimum number of coins required to make the target amount.
        </p>
        <p key="p-19-22" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          If the amount cannot be formed, return -1.
        </p>
        <p key="p-19-24" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Example:
        </p>
        <div key="code-19-31" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-indigo-500/30 border border-indigo-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-slate-400 font-sans">Module 19 Dynamic Programming Fundamentals</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`coins = [1, 2, 5]

amount = 11`}</code>
          </pre>
        </div>
        <p key="p-19-32" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Possible solutions:
        </p>
        <div key="code-19-41" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-indigo-500/30 border border-indigo-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-slate-400 font-sans">Module 19 Dynamic Programming Fundamentals</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`5 + 5 + 1 = 11

5 + 2 + 2 + 2 = 11

2 + 2 + 2 + 2 + 2 + 1 = 11`}</code>
          </pre>
        </div>
        <p key="p-19-42" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          The minimum number of coins is:
        </p>
        <div key="code-19-47" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-indigo-500/30 border border-indigo-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-slate-400 font-sans">Module 19 Dynamic Programming Fundamentals</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`3`}</code>
          </pre>
        </div>
        <h4 key="h4-19-48" className="text-base font-semibold text-emerald-400 mt-6 mb-2">
          State Definition
        </h4>
        <p key="p-19-50" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Let:
        </p>
        <p key="p-19-52" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          \<span className="font-mono text-indigo-300 font-semibold"> dp[x] \</span>
        </p>
        <p key="p-19-54" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          represent the minimum number of coins required to make amount x.
        </p>
        <p key="p-19-56" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          For every denomination c, we can use it if:
        </p>
        <p key="p-19-58" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          \<span className="font-mono text-indigo-300 font-semibold"> c \leq x \</span>
        </p>
        <p key="p-19-60" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          The transition is:
        </p>
        <p key="p-19-62" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          \<span className="font-mono text-indigo-300 font-semibold"> dp[x]=\min(dp[x],1+dp[x-c]) \</span>
        </p>
        <p key="p-19-64" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          We start with:
        </p>
        <p key="p-19-66" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          \<span className="font-mono text-indigo-300 font-semibold"> dp[0]=0 \</span>
        </p>
        <p key="p-19-68" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          An amount that cannot yet be formed is initialized with a large sentinel value.
        </p>
        <h4 key="h4-19-70" className="text-base font-semibold text-emerald-400 mt-6 mb-2">
          Java Implementation
        </h4>
        <div key="code-19-120" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-indigo-500/30 border border-indigo-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-slate-400 font-sans">Module 19 Dynamic Programming Fundamentals</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`import java.util.*;

public class CoinChangeMinimum {

    public static int coinChange(
        int[] coins,
        int amount
    ) {

        int INF = amount + 1;

        int[] dp = new int[amount + 1];

        Arrays.fill(dp, INF);

        // Zero coins are needed for amount zero
        dp[0] = 0;

        for (int x = 1; x <= amount; x++) {

            for (int coin : coins) {

                if (coin <= x && dp[x - coin] != INF) {

                    dp[x] = Math.min(
                        dp[x],
                        1 + dp[x - coin]
                    );
                }
            }
        }

        return dp[amount] == INF
            ? -1
            : dp[amount];
    }

    public static void main(String[] args) {

        int[] coins = {1, 2, 5};

        System.out.println(
            coinChange(coins, 11)
        );
    }
}`}</code>
          </pre>
        </div>
        <p key="p-19-121" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Output:
        </p>
        <div key="code-19-126" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-indigo-500/30 border border-indigo-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-slate-400 font-sans">Module 19 Dynamic Programming Fundamentals</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`3`}</code>
          </pre>
        </div>
        <h4 key="h4-19-127" className="text-base font-semibold text-emerald-400 mt-6 mb-2">
          Complexity
        </h4>
        <p key="p-19-129" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Let N be the number of denominations and A be the target amount.
        </p>
        <ul key="ul-19-133" className="my-3 space-y-1.5 text-xs md:text-sm text-slate-300 list-disc list-inside">
          <li>Time: O(N × A).</li>
          <li>Space: O(A).</li>
      </ul>
        <p key="p-19-134" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          The algorithm uses unbounded coin usage because each amount can build on previously calculated amounts that may already contain the same denomination.
        </p>
        <h4 key="h4-19-136" className="text-base font-semibold text-emerald-400 mt-6 mb-2">
          Why Not Greedy?
        </h4>
        <p key="p-19-138" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Consider:
        </p>
        <div key="code-19-145" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-indigo-500/30 border border-indigo-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-slate-400 font-sans">Module 19 Dynamic Programming Fundamentals</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`coins = [1, 3, 4]

amount = 6`}</code>
          </pre>
        </div>
        <p key="p-19-146" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Greedy chooses the largest denomination first:
        </p>
        <div key="code-19-151" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-indigo-500/30 border border-indigo-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-slate-400 font-sans">Module 19 Dynamic Programming Fundamentals</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`4 + 1 + 1`}</code>
          </pre>
        </div>
        <p key="p-19-152" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          That uses three coins.
        </p>
        <p key="p-19-154" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          But the optimal answer is:
        </p>
        <div key="code-19-159" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-indigo-500/30 border border-indigo-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-slate-400 font-sans">Module 19 Dynamic Programming Fundamentals</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`3 + 3`}</code>
          </pre>
        </div>
        <p key="p-19-160" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          That uses only two coins.
        </p>
        <p key="p-19-162" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          This demonstrates why minimum coin change cannot always be solved with greedy selection.
        </p>
        <h3 key="h3-19-164" className="text-lg md:text-xl font-bold text-indigo-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-indigo-400"></span>
          19.2 Coin Change II — Number of Combinations
        </h3>
        <p key="p-19-166" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Now the objective changes.
        </p>
        <p key="p-19-168" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Instead of finding the minimum number of coins, we want to calculate how many distinct combinations can form the given amount.
        </p>
        <p key="p-19-170" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Example:
        </p>
        <div key="code-19-177" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-indigo-500/30 border border-indigo-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-slate-400 font-sans">Module 19 Dynamic Programming Fundamentals</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`coins = [1, 2, 5]

amount = 5`}</code>
          </pre>
        </div>
        <p key="p-19-178" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Valid combinations:
        </p>
        <div key="code-19-189" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-indigo-500/30 border border-indigo-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-slate-400 font-sans">Module 19 Dynamic Programming Fundamentals</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`1 + 1 + 1 + 1 + 1

1 + 1 + 1 + 2

1 + 2 + 2

5`}</code>
          </pre>
        </div>
        <p key="p-19-190" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Total:
        </p>
        <div key="code-19-195" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-indigo-500/30 border border-indigo-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-slate-400 font-sans">Module 19 Dynamic Programming Fundamentals</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`4 combinations`}</code>
          </pre>
        </div>
        <p key="p-19-196" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          The order of coins does not matter.
        </p>
        <p key="p-19-198" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          For example:
        </p>
        <div key="code-19-203" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-indigo-500/30 border border-indigo-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-slate-400 font-sans">Module 19 Dynamic Programming Fundamentals</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`1 + 2 + 2`}</code>
          </pre>
        </div>
        <p key="p-19-204" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          and:
        </p>
        <div key="code-19-209" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-indigo-500/30 border border-indigo-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-slate-400 font-sans">Module 19 Dynamic Programming Fundamentals</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`2 + 1 + 2`}</code>
          </pre>
        </div>
        <p key="p-19-210" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          represent the same combination.
        </p>
        <h4 key="h4-19-212" className="text-base font-semibold text-emerald-400 mt-6 mb-2">
          State Definition
        </h4>
        <p key="p-19-214" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Let:
        </p>
        <p key="p-19-216" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          \<span className="font-mono text-indigo-300 font-semibold"> dp[x] \</span>
        </p>
        <p key="p-19-218" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          represent the number of combinations that create amount x using the denominations processed so far.
        </p>
        <p key="p-19-220" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Initialize:
        </p>
        <p key="p-19-222" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          \<span className="font-mono text-indigo-300 font-semibold"> dp[0]=1 \</span>
        </p>
        <p key="p-19-224" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          There is one way to create zero: select no coins.
        </p>
        <p key="p-19-226" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          For every coin:
        </p>
        <p key="p-19-228" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          \<span className="font-mono text-indigo-300 font-semibold"> dp[x]=dp[x]+dp[x-coin] \</span>
        </p>
        <h4 key="h4-19-230" className="text-base font-semibold text-emerald-400 mt-6 mb-2">
          Java Implementation
        </h4>
        <div key="code-19-269" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-indigo-500/30 border border-indigo-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-slate-400 font-sans">Module 19 Dynamic Programming Fundamentals</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`public class CoinChangeCombinations {

    public static int change(
        int amount,
        int[] coins
    ) {

        int[] dp = new int[amount + 1];

        dp[0] = 1;

        for (int coin : coins) {

            for (
                int x = coin;
                x <= amount;
                x++
            ) {

                dp[x] += dp[x - coin];
            }
        }

        return dp[amount];
    }

    public static void main(String[] args) {

        int[] coins = {1, 2, 5};

        System.out.println(
            change(5, coins)
        );
    }
}`}</code>
          </pre>
        </div>
        <p key="p-19-270" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Output:
        </p>
        <div key="code-19-275" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-indigo-500/30 border border-indigo-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-slate-400 font-sans">Module 19 Dynamic Programming Fundamentals</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`4`}</code>
          </pre>
        </div>
        <h4 key="h4-19-276" className="text-base font-semibold text-emerald-400 mt-6 mb-2">
          Why Does Coin Change II Iterate Forward?
        </h4>
        <p key="p-19-278" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Because each coin denomination can be used unlimited times.
        </p>
        <p key="p-19-280" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          The forward loop allows a newly updated state to be reused with the same denomination.
        </p>
        <p key="p-19-282" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          But notice something important: the outer loop processes denominations one by one.
        </p>
        <p key="p-19-284" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          This prevents us from counting different orders of the same combination as separate answers.
        </p>
        <p key="p-19-286" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          If we reverse the loops, we generally count ordered sequences instead of unordered combinations.
        </p>
        <h4 key="h4-19-288" className="text-base font-semibold text-emerald-400 mt-6 mb-2">
          Minimum Coins vs Number of Combinations
        </h4>
        <div key="table-19-298" className="my-6 overflow-x-auto rounded-xl border border-slate-800 bg-slate-950/70 shadow-sm">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="bg-slate-900/90 border-b border-slate-800 text-slate-300 font-mono">
                <th className="p-3 font-semibold">Feature</th>
                <th className="p-3 font-semibold">Coin Change I</th>
                <th className="p-3 font-semibold">Coin Change II</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60 text-slate-300 font-sans">
              <tr className="hover:bg-slate-900/40 transition">
                  <td className="p-3">Objective</td>
                  <td className="p-3">Minimize coins</td>
                  <td className="p-3">Count combinations</td>
                </tr>
              <tr className="hover:bg-slate-900/40 transition">
                  <td className="p-3">DP operation</td>
                  <td className="p-3">Minimum</td>
                  <td className="p-3">Addition</td>
                </tr>
              <tr className="hover:bg-slate-900/40 transition">
                  <td className="p-3">Base case</td>
                  <td className="p-3">dp[0] = 0</td>
                  <td className="p-3">dp[0] = 1</td>
                </tr>
              <tr className="hover:bg-slate-900/40 transition">
                  <td className="p-3">Loop structure</td>
                  <td className="p-3">Amount and denominations</td>
                  <td className="p-3">Coins outer, amount inner</td>
                </tr>
              <tr className="hover:bg-slate-900/40 transition">
                  <td className="p-3">Repeated denominations</td>
                  <td className="p-3">Unlimited</td>
                  <td className="p-3">Unlimited</td>
                </tr>
              <tr className="hover:bg-slate-900/40 transition">
                  <td className="p-3">Result</td>
                  <td className="p-3">Minimum coin count</td>
                  <td className="p-3">Number of combinations</td>
                </tr>
            </tbody>
          </table>
        </div>
        <p key="p-19-299" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <strong className="font-bold text-white">Important:</strong> These examples use positive coin denominations. The number of combinations may exceed the <code className="px-1.5 py-0.5 rounded bg-slate-800 text-indigo-300 font-mono text-xs border border-slate-700/60">int</code> range in Java for large inputs, so use <code className="px-1.5 py-0.5 rounded bg-slate-800 text-indigo-300 font-mono text-xs border border-slate-700/60">long</code> or <code className="px-1.5 py-0.5 rounded bg-slate-800 text-indigo-300 font-mono text-xs border border-slate-700/60">BigInteger</code> when required by the constraints.
        </p>
      </div>
    )
  },
  {
    id: 20,
    title: "20. Longest Common Subsequence (LCS)",
    summary: "2D character matching DP, state transitions, table construction, and backtracking to reconstruct the LCS string.",
    content: (
      <div className="space-y-4">
        <p key="p-20-2" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Longest Common Subsequence is one of the most important string-based Dynamic Programming problems.
        </p>
        <p key="p-20-4" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          It is frequently asked in technical interviews and forms the foundation of several advanced problems.
        </p>
        <h3 key="h3-20-6" className="text-lg md:text-xl font-bold text-indigo-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-indigo-400"></span>
          20.1 What Is a Subsequence?
        </h3>
        <p key="p-20-8" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          A subsequence is a sequence that can be obtained by deleting zero or more characters without changing the relative order of the remaining characters.
        </p>
        <p key="p-20-10" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          For example:
        </p>
        <div key="code-20-15" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-indigo-500/30 border border-indigo-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-slate-400 font-sans">Module 19 Dynamic Programming Fundamentals</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`String = ABCDE`}</code>
          </pre>
        </div>
        <p key="p-20-16" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Some valid subsequences:
        </p>
        <div key="code-20-27" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-indigo-500/30 border border-indigo-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-slate-400 font-sans">Module 19 Dynamic Programming Fundamentals</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`ACE

BCD

ABDE

ABCDE`}</code>
          </pre>
        </div>
        <p key="p-20-28" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          But:
        </p>
        <div key="code-20-33" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-indigo-500/30 border border-indigo-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-slate-400 font-sans">Module 19 Dynamic Programming Fundamentals</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`EAC`}</code>
          </pre>
        </div>
        <p key="p-20-34" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          is not a valid subsequence because the relative order has changed.
        </p>
        <h3 key="h3-20-36" className="text-lg md:text-xl font-bold text-indigo-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-indigo-400"></span>
          20.2 Problem Statement
        </h3>
        <p key="p-20-38" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          You are given two strings.
        </p>
        <p key="p-20-40" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Find the length of their longest common subsequence.
        </p>
        <p key="p-20-42" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Example:
        </p>
        <div key="code-20-49" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-indigo-500/30 border border-indigo-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-slate-400 font-sans">Module 19 Dynamic Programming Fundamentals</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`text1 = ABCDGH

text2 = AEDFHR`}</code>
          </pre>
        </div>
        <p key="p-20-50" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          A common subsequence is:
        </p>
        <div key="code-20-55" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-indigo-500/30 border border-indigo-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-slate-400 font-sans">Module 19 Dynamic Programming Fundamentals</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`ADH`}</code>
          </pre>
        </div>
        <p key="p-20-56" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Its length is:
        </p>
        <div key="code-20-61" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-indigo-500/30 border border-indigo-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-slate-400 font-sans">Module 19 Dynamic Programming Fundamentals</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`3`}</code>
          </pre>
        </div>
        <p key="p-20-62" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Another example:
        </p>
        <div key="code-20-69" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-indigo-500/30 border border-indigo-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-slate-400 font-sans">Module 19 Dynamic Programming Fundamentals</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`text1 = ABCDE

text2 = ACE`}</code>
          </pre>
        </div>
        <p key="p-20-70" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          The LCS is:
        </p>
        <div key="code-20-75" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-indigo-500/30 border border-indigo-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-slate-400 font-sans">Module 19 Dynamic Programming Fundamentals</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`ACE`}</code>
          </pre>
        </div>
        <p key="p-20-76" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Length:
        </p>
        <div key="code-20-81" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-indigo-500/30 border border-indigo-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-slate-400 font-sans">Module 19 Dynamic Programming Fundamentals</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`3`}</code>
          </pre>
        </div>
        <h3 key="h3-20-82" className="text-lg md:text-xl font-bold text-indigo-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-indigo-400"></span>
          20.3 State Definition
        </h3>
        <p key="p-20-84" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Let:
        </p>
        <p key="p-20-86" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          \<span className="font-mono text-indigo-300 font-semibold"> dp[i][j] \</span>
        </p>
        <p key="p-20-88" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          represent the length of the longest common subsequence between:
        </p>
        <ul key="ul-20-92" className="my-3 space-y-1.5 text-xs md:text-sm text-slate-300 list-disc list-inside">
          <li>The first i characters of string A.</li>
          <li>The first j characters of string B.</li>
      </ul>
        <p key="p-20-93" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          We use a two-dimensional DP table because the answer depends on two string positions.
        </p>
        <h3 key="h3-20-95" className="text-lg md:text-xl font-bold text-indigo-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-indigo-400"></span>
          20.4 State Transition
        </h3>
        <p key="p-20-97" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          There are two cases.
        </p>
        <h4 key="h4-20-99" className="text-base font-semibold text-emerald-400 mt-6 mb-2">
          Case 1: Characters Match
        </h4>
        <p key="p-20-101" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          If:
        </p>
        <p key="p-20-103" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          \<span className="font-mono text-indigo-300 font-semibold"> A[i-1]=B[j-1] \</span>
        </p>
        <p key="p-20-105" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          then the common subsequence can be extended by one character.
        </p>
        <p key="p-20-107" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          \<span className="font-mono text-indigo-300 font-semibold"> dp[i][j]=1+dp[i-1][j-1] \</span>
        </p>
        <h4 key="h4-20-109" className="text-base font-semibold text-emerald-400 mt-6 mb-2">
          Case 2: Characters Do Not Match
        </h4>
        <p key="p-20-111" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          We have two possibilities:
        </p>
        <ul key="ul-20-115" className="my-3 space-y-1.5 text-xs md:text-sm text-slate-300 list-disc list-inside">
          <li>Ignore the current character from A.</li>
          <li>Ignore the current character from B.</li>
      </ul>
        <p key="p-20-116" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Take the better result:
        </p>
        <p key="p-20-118" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          \<span className="font-mono text-indigo-300 font-semibold"> dp[i][j]=\max(dp[i-1][j],dp[i][j-1]) \</span>
        </p>
        <h3 key="h3-20-120" className="text-lg md:text-xl font-bold text-indigo-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-indigo-400"></span>
          20.5 Base Cases
        </h3>
        <p key="p-20-122" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          If either string is empty:
        </p>
        <p key="p-20-124" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          \<span className="font-mono text-indigo-300 font-semibold"> dp[0][j]=0 \</span>
        </p>
        <p key="p-20-126" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          \<span className="font-mono text-indigo-300 font-semibold"> dp[i][0]=0 \</span>
        </p>
        <p key="p-20-128" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          There cannot be a non-empty common subsequence when one string is empty.
        </p>
        <h3 key="h3-20-130" className="text-lg md:text-xl font-bold text-indigo-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-indigo-400"></span>
          20.6 Java Implementation
        </h3>
        <div key="code-20-177" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-indigo-500/30 border border-indigo-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-slate-400 font-sans">Module 19 Dynamic Programming Fundamentals</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`public class LongestCommonSubsequence {

    public static int lcs(
        String a,
        String b
    ) {

        int m = a.length();
        int n = b.length();

        int[][] dp = new int[m + 1][n + 1];

        for (int i = 1; i <= m; i++) {

            for (int j = 1; j <= n; j++) {

                if (a.charAt(i - 1) == b.charAt(j - 1)) {

                    dp[i][j] =
                        1 + dp[i - 1][j - 1];

                } else {

                    dp[i][j] = Math.max(
                        dp[i - 1][j],
                        dp[i][j - 1]
                    );
                }
            }
        }

        return dp[m][n];
    }

    public static void main(String[] args) {

        String a = "ABCDE";

        String b = "ACE";

        System.out.println(lcs(a, b));
    }
}`}</code>
          </pre>
        </div>
        <p key="p-20-178" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Output:
        </p>
        <div key="code-20-183" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-indigo-500/30 border border-indigo-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-slate-400 font-sans">Module 19 Dynamic Programming Fundamentals</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`3`}</code>
          </pre>
        </div>
        <h3 key="h3-20-184" className="text-lg md:text-xl font-bold text-indigo-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-indigo-400"></span>
          20.7 Understanding the DP Table
        </h3>
        <p key="p-20-186" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Input:
        </p>
        <div key="code-20-192" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-indigo-500/30 border border-indigo-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-slate-400 font-sans">Module 19 Dynamic Programming Fundamentals</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`A = ABCDE
B = ACE`}</code>
          </pre>
        </div>
        <p key="p-20-193" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          The resulting table is:
        </p>
        <p key="p-20-195" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <strong className="font-bold text-white">LCS table</strong>
        </p>
        <div key="table-20-205" className="my-6 overflow-x-auto rounded-xl border border-slate-800 bg-slate-950/70 shadow-sm">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="bg-slate-900/90 border-b border-slate-800 text-slate-300 font-mono">
                <th className="p-3 font-semibold"><strong className="font-bold text-white">&amp;#x20;</strong></th>
                <th className="p-3 font-semibold"><strong className="font-bold text-white">∅</strong></th>
                <th className="p-3 font-semibold"><strong className="font-bold text-white">A</strong></th>
                <th className="p-3 font-semibold"><strong className="font-bold text-white">C</strong></th>
                <th className="p-3 font-semibold"><strong className="font-bold text-white">E</strong></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60 text-slate-300 font-sans">
              <tr className="hover:bg-slate-900/40 transition">
                  <td className="p-3"><strong className="font-bold text-white">∅</strong></td>
                  <td className="p-3">0</td>
                  <td className="p-3">0</td>
                  <td className="p-3">0</td>
                  <td className="p-3">0</td>
                </tr>
              <tr className="hover:bg-slate-900/40 transition">
                  <td className="p-3"><strong className="font-bold text-white">A</strong></td>
                  <td className="p-3">0</td>
                  <td className="p-3">1</td>
                  <td className="p-3">1</td>
                  <td className="p-3">1</td>
                </tr>
              <tr className="hover:bg-slate-900/40 transition">
                  <td className="p-3"><strong className="font-bold text-white">B</strong></td>
                  <td className="p-3">0</td>
                  <td className="p-3">1</td>
                  <td className="p-3">1</td>
                  <td className="p-3">1</td>
                </tr>
              <tr className="hover:bg-slate-900/40 transition">
                  <td className="p-3"><strong className="font-bold text-white">C</strong></td>
                  <td className="p-3">0</td>
                  <td className="p-3">1</td>
                  <td className="p-3">2</td>
                  <td className="p-3">2</td>
                </tr>
              <tr className="hover:bg-slate-900/40 transition">
                  <td className="p-3"><strong className="font-bold text-white">D</strong></td>
                  <td className="p-3">0</td>
                  <td className="p-3">1</td>
                  <td className="p-3">2</td>
                  <td className="p-3">2</td>
                </tr>
              <tr className="hover:bg-slate-900/40 transition">
                  <td className="p-3"><strong className="font-bold text-white">E</strong></td>
                  <td className="p-3">0</td>
                  <td className="p-3">1</td>
                  <td className="p-3">2</td>
                  <td className="p-3"><strong className="font-bold text-white">3</strong></td>
                </tr>
            </tbody>
          </table>
        </div>
        <p key="p-20-206" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          # <strong className="font-bold text-white">LCS length = 3</strong>
        </p>
        <p key="p-20-208" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          The final answer is stored at:
        </p>
        <div key="code-20-213" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-indigo-500/30 border border-indigo-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-slate-400 font-sans">Module 19 Dynamic Programming Fundamentals</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`dp[m][n]`}</code>
          </pre>
        </div>
        <h3 key="h3-20-214" className="text-lg md:text-xl font-bold text-indigo-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-indigo-400"></span>
          20.8 Recovering the Actual LCS String
        </h3>
        <p key="p-20-216" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Sometimes an interviewer asks for the subsequence itself, not just its length.
        </p>
        <p key="p-20-218" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          We can reconstruct it by walking backward through the DP table.
        </p>
        <ul key="ul-20-223" className="my-3 space-y-1.5 text-xs md:text-sm text-slate-300 list-disc list-inside">
          <li>If the characters match, include that character and move diagonally.</li>
          <li>If they do not match, move to the neighboring cell with the larger DP value.</li>
          <li>Continue until one index becomes zero.</li>
      </ul>
        <div key="code-20-293" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-indigo-500/30 border border-indigo-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-slate-400 font-sans">Module 19 Dynamic Programming Fundamentals</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`import java.util.*;

public class LCSString {

    public static String getLCS(
        String a,
        String b
    ) {

        int m = a.length();
        int n = b.length();

        int[][] dp = new int[m + 1][n + 1];

        for (int i = 1; i <= m; i++) {

            for (int j = 1; j <= n; j++) {

                if (a.charAt(i - 1) == b.charAt(j - 1)) {

                    dp[i][j] =
                        1 + dp[i - 1][j - 1];

                } else {

                    dp[i][j] = Math.max(
                        dp[i - 1][j],
                        dp[i][j - 1]
                    );
                }
            }
        }

        StringBuilder result = new StringBuilder();

        int i = m;
        int j = n;

        while (i > 0 && j > 0) {

            if (a.charAt(i - 1) == b.charAt(j - 1)) {

                result.append(a.charAt(i - 1));

                i--;
                j--;

            } else if (dp[i - 1][j] >= dp[i][j - 1]) {

                i--;

            } else {

                j--;
            }
        }

        return result.reverse().toString();
    }

    public static void main(String[] args) {

        System.out.println(
            getLCS("ABCDE", "ACE")
        );
    }
}`}</code>
          </pre>
        </div>
        <p key="p-20-294" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Output:
        </p>
        <div key="code-20-299" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-indigo-500/30 border border-indigo-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-slate-400 font-sans">Module 19 Dynamic Programming Fundamentals</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`ACE`}</code>
          </pre>
        </div>
        <h3 key="h3-20-300" className="text-lg md:text-xl font-bold text-indigo-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-indigo-400"></span>
          20.9 Complexity
        </h3>
        <p key="p-20-302" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Let M and N be the lengths of the strings.
        </p>
        <ul key="ul-20-306" className="my-3 space-y-1.5 text-xs md:text-sm text-slate-300 list-disc list-inside">
          <li>Time: O(M × N).</li>
          <li>Space: O(M × N).</li>
      </ul>
        <p key="p-20-307" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          With space optimization, LCS length can be calculated using O(min(M,N)) space by retaining only two DP rows. Reconstructing the actual subsequence usually requires additional storage or a more advanced approach.
        </p>
      </div>
    )
  },
  {
    id: 21,
    title: "21. Longest Increasing Subsequence (LIS)",
    summary: "O(n^2) DP approach vs O(n log n) Patience Sorting / Binary Search (Arrays.binarySearch) technique.",
    content: (
      <div className="space-y-4">
        <p key="p-21-2" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Longest Increasing Subsequence is an important sequence-based DP problem.
        </p>
        <p key="p-21-4" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          It differs from LCS because it works with the order of values in a single array.
        </p>
        <h3 key="h3-21-6" className="text-lg md:text-xl font-bold text-indigo-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-indigo-400"></span>
          21.1 What Is an Increasing Subsequence?
        </h3>
        <p key="p-21-8" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          A subsequence is increasing when every next selected element is strictly greater than the previous selected element.
        </p>
        <p key="p-21-10" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Example:
        </p>
        <div key="code-21-15" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-indigo-500/30 border border-indigo-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-slate-400 font-sans">Module 19 Dynamic Programming Fundamentals</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`nums = [10, 9, 2, 5, 3, 7, 101, 18]`}</code>
          </pre>
        </div>
        <p key="p-21-16" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          One longest increasing subsequence is:
        </p>
        <div key="code-21-21" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-indigo-500/30 border border-indigo-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-slate-400 font-sans">Module 19 Dynamic Programming Fundamentals</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`2 → 3 → 7 → 18`}</code>
          </pre>
        </div>
        <p key="p-21-22" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Its length is:
        </p>
        <div key="code-21-27" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-indigo-500/30 border border-indigo-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-slate-400 font-sans">Module 19 Dynamic Programming Fundamentals</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`4`}</code>
          </pre>
        </div>
        <p key="p-21-28" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Notice that the elements do not need to be adjacent.
        </p>
        <h3 key="h3-21-30" className="text-lg md:text-xl font-bold text-indigo-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-indigo-400"></span>
          21.2 Problem Statement
        </h3>
        <p key="p-21-32" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Given an integer array, find the length of its longest strictly increasing subsequence.
        </p>
        <h3 key="h3-21-34" className="text-lg md:text-xl font-bold text-indigo-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-indigo-400"></span>
          21.3 Approach 1 — O(N²) Dynamic Programming
        </h3>
        <h4 key="h4-21-36" className="text-base font-semibold text-emerald-400 mt-6 mb-2">
          State Definition
        </h4>
        <p key="p-21-38" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Let:
        </p>
        <p key="p-21-40" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          \<span className="font-mono text-indigo-300 font-semibold"> dp[i] \</span>
        </p>
        <p key="p-21-42" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          represent the length of the longest increasing subsequence that ends exactly at index i.
        </p>
        <p key="p-21-44" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Every element can form a subsequence of length 1 by itself.
        </p>
        <p key="p-21-46" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Therefore:
        </p>
        <p key="p-21-48" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          \<span className="font-mono text-indigo-300 font-semibold"> dp[i]=1 \</span>
        </p>
        <p key="p-21-50" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Initially.
        </p>
        <h4 key="h4-21-52" className="text-base font-semibold text-emerald-400 mt-6 mb-2">
          State Transition
        </h4>
        <p key="p-21-54" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          For every previous index j:
        </p>
        <p key="p-21-56" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          If:
        </p>
        <p key="p-21-58" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          \<span className="font-mono text-indigo-300 font-semibold"> nums[j]\&lt;nums[i] \</span>
        </p>
        <p key="p-21-60" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          we can extend an increasing subsequence ending at j.
        </p>
        <p key="p-21-62" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Therefore:
        </p>
        <p key="p-21-64" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          \<span className="font-mono text-indigo-300 font-semibold"> dp[i]=\max(dp[i],dp[j]+1) \</span>
        </p>
        <p key="p-21-66" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Finally:
        </p>
        <p key="p-21-68" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          \<span className="font-mono text-indigo-300 font-semibold"> Answer=\max(dp[i]) \</span>
        </p>
        <h4 key="h4-21-70" className="text-base font-semibold text-emerald-400 mt-6 mb-2">
          Java Implementation
        </h4>
        <div key="code-21-123" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-indigo-500/30 border border-indigo-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-slate-400 font-sans">Module 19 Dynamic Programming Fundamentals</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`import java.util.*;

public class LongestIncreasingSubsequence {

    public static int lis(int[] nums) {

        int n = nums.length;

        if (n == 0) {
            return 0;
        }

        int[] dp = new int[n];

        Arrays.fill(dp, 1);

        int answer = 1;

        for (int i = 0; i < n; i++) {

            for (int j = 0; j < i; j++) {

                if (nums[j] < nums[i]) {

                    dp[i] = Math.max(
                        dp[i],
                        dp[j] + 1
                    );
                }
            }

            answer = Math.max(
                answer,
                dp[i]
            );
        }

        return answer;
    }

    public static void main(String[] args) {

        int[] nums = {
            10, 9, 2, 5, 3, 7, 101, 18
        };

        System.out.println(lis(nums));
    }
}`}</code>
          </pre>
        </div>
        <p key="p-21-124" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Output:
        </p>
        <div key="code-21-129" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-indigo-500/30 border border-indigo-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-slate-400 font-sans">Module 19 Dynamic Programming Fundamentals</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`4`}</code>
          </pre>
        </div>
        <h4 key="h4-21-130" className="text-base font-semibold text-emerald-400 mt-6 mb-2">
          Complexity
        </h4>
        <ul key="ul-21-134" className="my-3 space-y-1.5 text-xs md:text-sm text-slate-300 list-disc list-inside">
          <li>Time: O(N²).</li>
          <li>Space: O(N).</li>
      </ul>
        <h3 key="h3-21-135" className="text-lg md:text-xl font-bold text-indigo-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-indigo-400"></span>
          21.4 Understanding the DP Array
        </h3>
        <p key="p-21-137" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Input:
        </p>
        <div key="code-21-142" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-indigo-500/30 border border-indigo-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-slate-400 font-sans">Module 19 Dynamic Programming Fundamentals</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`[10, 9, 2, 5, 3, 7, 101, 18]`}</code>
          </pre>
        </div>
        <p key="p-21-143" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          The LIS-ending-at-each-index lengths are:
        </p>
        <div key="code-21-148" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-indigo-500/30 border border-indigo-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-slate-400 font-sans">Module 19 Dynamic Programming Fundamentals</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`[1, 1, 1, 2, 2, 3, 4, 4]`}</code>
          </pre>
        </div>
        <p key="p-21-149" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          The maximum is:
        </p>
        <div key="code-21-154" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-indigo-500/30 border border-indigo-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-slate-400 font-sans">Module 19 Dynamic Programming Fundamentals</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`4`}</code>
          </pre>
        </div>
        <h3 key="h3-21-155" className="text-lg md:text-xl font-bold text-indigo-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-indigo-400"></span>
          21.5 Approach 2 — O(N log N)
        </h3>
        <p key="p-21-157" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          For larger inputs, we can solve LIS using a technique based on binary search.
        </p>
        <p key="p-21-159" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          We maintain an array called <code className="px-1.5 py-0.5 rounded bg-slate-800 text-indigo-300 font-mono text-xs border border-slate-700/60">tails</code>.
        </p>
        <p key="p-21-161" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          At each position, we track the smallest possible ending value for increasing subsequences of different lengths.
        </p>
        <p key="p-21-163" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          For example, if:
        </p>
        <div key="code-21-168" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-indigo-500/30 border border-indigo-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-slate-400 font-sans">Module 19 Dynamic Programming Fundamentals</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`nums = [10, 9, 2, 5, 3, 7, 101, 18]`}</code>
          </pre>
        </div>
        <p key="p-21-169" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          The final <code className="px-1.5 py-0.5 rounded bg-slate-800 text-indigo-300 font-mono text-xs border border-slate-700/60">tails</code> array is:
        </p>
        <div key="code-21-174" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-indigo-500/30 border border-indigo-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-slate-400 font-sans">Module 19 Dynamic Programming Fundamentals</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`[2, 3, 7, 18]`}</code>
          </pre>
        </div>
        <p key="p-21-175" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Its length is the LIS length.
        </p>
        <p key="p-21-177" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Important: <code className="px-1.5 py-0.5 rounded bg-slate-800 text-indigo-300 font-mono text-xs border border-slate-700/60">tails</code> is not necessarily the actual longest increasing subsequence. Its entries represent the smallest achievable tail values for different subsequence lengths.
        </p>
        <h4 key="h4-21-179" className="text-base font-semibold text-emerald-400 mt-6 mb-2">
          Java Implementation
        </h4>
        <div key="code-21-232" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-indigo-500/30 border border-indigo-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-slate-400 font-sans">Module 19 Dynamic Programming Fundamentals</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`import java.util.*;

public class LISOLogN {

    public static int lis(int[] nums) {

        int[] tails = new int[nums.length];

        int size = 0;

        for (int num : nums) {

            int left = 0;
            int right = size;

            // Find first position with value >= num
            while (left < right) {

                int mid = left + (right - left) / 2;

                if (tails[mid] < num) {

                    left = mid + 1;

                } else {

                    right = mid;
                }
            }

            tails[left] = num;

            if (left == size) {
                size++;
            }
        }

        return size;
    }

    public static void main(String[] args) {

        int[] nums = {
            10, 9, 2, 5, 3, 7, 101, 18
        };

        System.out.println(lis(nums));
    }
}`}</code>
          </pre>
        </div>
        <p key="p-21-233" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Output:
        </p>
        <div key="code-21-238" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-indigo-500/30 border border-indigo-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-slate-400 font-sans">Module 19 Dynamic Programming Fundamentals</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`4`}</code>
          </pre>
        </div>
        <h4 key="h4-21-239" className="text-base font-semibold text-emerald-400 mt-6 mb-2">
          Complexity
        </h4>
        <div key="table-21-245" className="my-6 overflow-x-auto rounded-xl border border-slate-800 bg-slate-950/70 shadow-sm">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="bg-slate-900/90 border-b border-slate-800 text-slate-300 font-mono">
                <th className="p-3 font-semibold">Approach</th>
                <th className="p-3 font-semibold">Time</th>
                <th className="p-3 font-semibold">Space</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60 text-slate-300 font-sans">
              <tr className="hover:bg-slate-900/40 transition">
                  <td className="p-3">DP</td>
                  <td className="p-3">O(N²)</td>
                  <td className="p-3">O(N)</td>
                </tr>
              <tr className="hover:bg-slate-900/40 transition">
                  <td className="p-3">Binary search</td>
                  <td className="p-3">O(N log N)</td>
                  <td className="p-3">O(N)</td>
                </tr>
            </tbody>
          </table>
        </div>
        <h4 key="h4-21-246" className="text-base font-semibold text-emerald-400 mt-6 mb-2">
          Important Interview Detail
        </h4>
        <p key="p-21-248" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          For strictly increasing LIS, we replace the first value greater than or equal to the current number.
        </p>
        <p key="p-21-250" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          For a non-decreasing subsequence, the binary-search condition changes to find the first value strictly greater than the current number.
        </p>
        <p key="p-21-252" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          This difference is important when duplicate values are present.
        </p>
      </div>
    )
  },
  {
    id: 22,
    title: "22. Edit Distance",
    summary: "Minimum insert, delete, and replace operations to convert word1 to word2, 2D grid DP, and Levenshtein distance.",
    content: (
      <div className="space-y-4">
        <p key="p-22-2" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Edit Distance is a classic DP problem used in string comparison.
        </p>
        <p key="p-22-4" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          It measures the minimum number of editing operations needed to transform one string into another.
        </p>
        <p key="p-22-6" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          It is also known as Levenshtein Distance when the permitted operations are insertion, deletion, and substitution, each with unit cost.
        </p>
        <h3 key="h3-22-8" className="text-lg md:text-xl font-bold text-indigo-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-indigo-400"></span>
          22.1 Problem Statement
        </h3>
        <p key="p-22-10" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          You are given two strings.
        </p>
        <p key="p-22-12" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          You can perform three operations:
        </p>
        <ol key="ol-22-17" className="my-3 space-y-1.5 text-xs md:text-sm text-slate-300 list-decimal list-inside">
          <li>Insert a character.</li>
          <li>Delete a character.</li>
          <li>Replace a character.</li>
      </ol>
        <p key="p-22-18" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Find the minimum number of operations required to transform the first string into the second.
        </p>
        <h4 key="h4-22-20" className="text-base font-semibold text-emerald-400 mt-6 mb-2">
          Example
        </h4>
        <div key="code-22-27" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-indigo-500/30 border border-indigo-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-slate-400 font-sans">Module 19 Dynamic Programming Fundamentals</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`word1 = "horse"

word2 = "ros"`}</code>
          </pre>
        </div>
        <p key="p-22-28" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          One possible transformation:
        </p>
        <div key="code-22-36" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-indigo-500/30 border border-indigo-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-slate-400 font-sans">Module 19 Dynamic Programming Fundamentals</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`horse
rorse    Replace h with r
rose     Delete r
ros      Delete e`}</code>
          </pre>
        </div>
        <p key="p-22-37" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Total:
        </p>
        <div key="code-22-42" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-indigo-500/30 border border-indigo-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-slate-400 font-sans">Module 19 Dynamic Programming Fundamentals</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`3 operations`}</code>
          </pre>
        </div>
        <h3 key="h3-22-43" className="text-lg md:text-xl font-bold text-indigo-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-indigo-400"></span>
          22.2 State Definition
        </h3>
        <p key="p-22-45" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Let:
        </p>
        <p key="p-22-47" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          \<span className="font-mono text-indigo-300 font-semibold"> dp[i][j] \</span>
        </p>
        <p key="p-22-49" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          represent the minimum edit distance between:
        </p>
        <ul key="ul-22-53" className="my-3 space-y-1.5 text-xs md:text-sm text-slate-300 list-disc list-inside">
          <li>The first i characters of word1.</li>
          <li>The first j characters of word2.</li>
      </ul>
        <h3 key="h3-22-54" className="text-lg md:text-xl font-bold text-indigo-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-indigo-400"></span>
          22.3 Base Cases
        </h3>
        <p key="p-22-56" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          If the first string is empty, we must insert all characters from the second string.
        </p>
        <p key="p-22-58" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          \<span className="font-mono text-indigo-300 font-semibold"> dp[0][j]=j \</span>
        </p>
        <p key="p-22-60" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          If the second string is empty, we must delete all characters from the first string.
        </p>
        <p key="p-22-62" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          \<span className="font-mono text-indigo-300 font-semibold"> dp[i][0]=i \</span>
        </p>
        <h3 key="h3-22-64" className="text-lg md:text-xl font-bold text-indigo-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-indigo-400"></span>
          22.4 State Transition
        </h3>
        <p key="p-22-66" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          If the current characters match:
        </p>
        <p key="p-22-68" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          \<span className="font-mono text-indigo-300 font-semibold"> word1[i-1]=word2[j-1] \</span>
        </p>
        <p key="p-22-70" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          No additional operation is required:
        </p>
        <p key="p-22-72" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          \<span className="font-mono text-indigo-300 font-semibold"> dp[i][j]=dp[i-1][j-1] \</span>
        </p>
        <p key="p-22-74" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          If the characters do not match, we consider three operations.
        </p>
        <p key="p-22-76" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <strong className="font-bold text-white">Insertion:</strong>
        </p>
        <p key="p-22-78" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          \<span className="font-mono text-indigo-300 font-semibold"> dp[i][j-1]+1 \</span>
        </p>
        <p key="p-22-80" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          We insert the required character into the first string.
        </p>
        <p key="p-22-82" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <strong className="font-bold text-white">Deletion:</strong>
        </p>
        <p key="p-22-84" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          \<span className="font-mono text-indigo-300 font-semibold"> dp[i-1][j]+1 \</span>
        </p>
        <p key="p-22-86" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          We delete the current character from the first string.
        </p>
        <p key="p-22-88" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <strong className="font-bold text-white">Replacement:</strong>
        </p>
        <p key="p-22-90" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          \<span className="font-mono text-indigo-300 font-semibold"> dp[i-1][j-1]+1 \</span>
        </p>
        <p key="p-22-92" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          We replace one character with another.
        </p>
        <p key="p-22-94" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Therefore:
        </p>
        <p key="p-22-96" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          \<span className="font-mono text-indigo-300 font-semibold"> dp[i][j] = 1+\min \begin&#123;cases&#125; dp[i-1][j]\\\ dp[i][j-1]\\\ dp[i-1][j-1] \end&#123;cases&#125; \</span>
        </p>
        <p key="p-22-98" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          when the characters are different.
        </p>
        <h3 key="h3-22-100" className="text-lg md:text-xl font-bold text-indigo-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-indigo-400"></span>
          22.5 Java Implementation
        </h3>
        <div key="code-22-164" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-indigo-500/30 border border-indigo-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-slate-400 font-sans">Module 19 Dynamic Programming Fundamentals</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`public class EditDistance {

    public static int minDistance(
        String word1,
        String word2
    ) {

        int m = word1.length();
        int n = word2.length();

        int[][] dp = new int[m + 1][n + 1];

        // Base cases
        for (int i = 0; i <= m; i++) {

            dp[i][0] = i;
        }

        for (int j = 0; j <= n; j++) {

            dp[0][j] = j;
        }

        for (int i = 1; i <= m; i++) {

            for (int j = 1; j <= n; j++) {

                if (
                    word1.charAt(i - 1)
                    == word2.charAt(j - 1)
                ) {

                    dp[i][j] = dp[i - 1][j - 1];

                } else {

                    int insert = dp[i][j - 1];

                    int delete = dp[i - 1][j];

                    int replace = dp[i - 1][j - 1];

                    dp[i][j] = 1 + Math.min(
                        insert,
                        Math.min(delete, replace)
                    );
                }
            }
        }

        return dp[m][n];
    }

    public static void main(String[] args) {

        System.out.println(
            minDistance("horse", "ros")
        );
    }
}`}</code>
          </pre>
        </div>
        <p key="p-22-165" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Output:
        </p>
        <div key="code-22-170" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-indigo-500/30 border border-indigo-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-slate-400 font-sans">Module 19 Dynamic Programming Fundamentals</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`3`}</code>
          </pre>
        </div>
        <h3 key="h3-22-171" className="text-lg md:text-xl font-bold text-indigo-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-indigo-400"></span>
          22.6 Understanding the Operations
        </h3>
        <div key="table-22-179" className="my-6 overflow-x-auto rounded-xl border border-slate-800 bg-slate-950/70 shadow-sm">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="bg-slate-900/90 border-b border-slate-800 text-slate-300 font-mono">
                <th className="p-3 font-semibold">Operation</th>
                <th className="p-3 font-semibold">Effect</th>
                <th className="p-3 font-semibold">DP dependency</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60 text-slate-300 font-sans">
              <tr className="hover:bg-slate-900/40 transition">
                  <td className="p-3">Insert</td>
                  <td className="p-3">Add a character</td>
                  <td className="p-3">Left cell</td>
                </tr>
              <tr className="hover:bg-slate-900/40 transition">
                  <td className="p-3">Delete</td>
                  <td className="p-3">Remove a character</td>
                  <td className="p-3">Upper cell</td>
                </tr>
              <tr className="hover:bg-slate-900/40 transition">
                  <td className="p-3">Replace</td>
                  <td className="p-3">Change a character</td>
                  <td className="p-3">Diagonal cell</td>
                </tr>
              <tr className="hover:bg-slate-900/40 transition">
                  <td className="p-3">Match</td>
                  <td className="p-3">No new operation</td>
                  <td className="p-3">Diagonal cell</td>
                </tr>
            </tbody>
          </table>
        </div>
        <p key="p-22-180" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          The final answer is stored at:
        </p>
        <div key="code-22-185" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-indigo-500/30 border border-indigo-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-slate-400 font-sans">Module 19 Dynamic Programming Fundamentals</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`dp[word1.length()][word2.length()]`}</code>
          </pre>
        </div>
        <h3 key="h3-22-186" className="text-lg md:text-xl font-bold text-indigo-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-indigo-400"></span>
          22.7 Complexity
        </h3>
        <p key="p-22-188" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Let M and N represent the two string lengths.
        </p>
        <ul key="ul-22-192" className="my-3 space-y-1.5 text-xs md:text-sm text-slate-300 list-disc list-inside">
          <li>Time: O(M × N).</li>
          <li>Space: O(M × N).</li>
      </ul>
        <p key="p-22-193" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Space can be reduced to O(min(M,N)) using two rows because each state depends only on the current row and previous row.
        </p>
        <p key="p-22-195" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          However, reconstructing the exact sequence of editing operations requires retaining additional information or recomputing decisions.
        </p>
        <h3 key="h3-22-197" className="text-lg md:text-xl font-bold text-indigo-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-indigo-400"></span>
          22.8 Real-World Applications
        </h3>
        <p key="p-22-199" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Edit distance is useful in:
        </p>
        <ul key="ul-22-208" className="my-3 space-y-1.5 text-xs md:text-sm text-slate-300 list-disc list-inside">
          <li>Spell checkers.</li>
          <li>Typographical error correction.</li>
          <li>Search suggestions.</li>
          <li>Text similarity.</li>
          <li>DNA sequence comparison.</li>
          <li>Fuzzy string matching.</li>
          <li>Natural language processing.</li>
      </ul>
        <p key="p-22-209" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          For example, when a search engine suggests a correction for a misspelled word, edit-distance-based techniques can help identify similar words.
        </p>
      </div>
    )
  },
  {
    id: 23,
    title: "23. Matrix Chain Multiplication",
    summary: "Interval DP: optimal parenthesization of matrix products, chain length iterations, split points k, and O(n^3) complexity.",
    content: (
      <div className="space-y-4">
        <p key="p-23-2" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Matrix Chain Multiplication is a classic advanced Dynamic Programming problem.
        </p>
        <p key="p-23-4" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          It introduces interval DP, where we calculate the best answer for every possible range of matrices.
        </p>
        <p key="p-23-6" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          The challenge is not multiplying matrices themselves.
        </p>
        <p key="p-23-8" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          The challenge is deciding the optimal order of multiplication.
        </p>
        <h3 key="h3-23-10" className="text-lg md:text-xl font-bold text-indigo-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-indigo-400"></span>
          23.1 Understanding Matrix Multiplication
        </h3>
        <p key="p-23-12" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Suppose we have two matrices:
        </p>
        <p key="p-23-14" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Matrix A:
        </p>
        <p key="p-23-16" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          \<span className="font-mono text-indigo-300 font-semibold"> m \times n \</span>
        </p>
        <p key="p-23-18" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Matrix B:
        </p>
        <p key="p-23-20" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          \<span className="font-mono text-indigo-300 font-semibold"> n \times p \</span>
        </p>
        <p key="p-23-22" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Their multiplication produces:
        </p>
        <p key="p-23-24" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          \<span className="font-mono text-indigo-300 font-semibold"> m \times p \</span>
        </p>
        <p key="p-23-26" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          The number of scalar multiplications required is:
        </p>
        <p key="p-23-28" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          \<span className="font-mono text-indigo-300 font-semibold"> m \times n \times p \</span>
        </p>
        <p key="p-23-30" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          For example:
        </p>
        <p key="p-23-32" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          A is 10 × 30.
        </p>
        <p key="p-23-34" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          B is 30 × 5.
        </p>
        <p key="p-23-36" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          The multiplication cost is:
        </p>
        <p key="p-23-38" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          \<span className="font-mono text-indigo-300 font-semibold"> 10 \times 30 \times 5=1500 \</span>
        </p>
        <p key="p-23-40" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          The resulting matrix has dimensions 10 × 5.
        </p>
        <h3 key="h3-23-42" className="text-lg md:text-xl font-bold text-indigo-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-indigo-400"></span>
          23.2 Problem Statement
        </h3>
        <p key="p-23-44" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Suppose we have multiple matrices:
        </p>
        <div key="code-23-49" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-indigo-500/30 border border-indigo-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-slate-400 font-sans">Module 19 Dynamic Programming Fundamentals</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`A1, A2, A3, ..., An`}</code>
          </pre>
        </div>
        <p key="p-23-50" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          We must multiply them in their original order.
        </p>
        <p key="p-23-52" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Matrix multiplication is associative:
        </p>
        <p key="p-23-54" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          \<span className="font-mono text-indigo-300 font-semibold"> (A_1A_2)A_3=A_1(A_2A_3) \</span>
        </p>
        <p key="p-23-56" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          However, different parenthesizations can require very different numbers of scalar multiplications.
        </p>
        <p key="p-23-58" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Our goal is to find the minimum cost.
        </p>
        <h3 key="h3-23-60" className="text-lg md:text-xl font-bold text-indigo-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-indigo-400"></span>
          23.3 Example
        </h3>
        <p key="p-23-62" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Consider three matrices:
        </p>
        <div key="table-23-69" className="my-6 overflow-x-auto rounded-xl border border-slate-800 bg-slate-950/70 shadow-sm">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="bg-slate-900/90 border-b border-slate-800 text-slate-300 font-mono">
                <th className="p-3 font-semibold">Matrix</th>
                <th className="p-3 font-semibold">Dimensions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60 text-slate-300 font-sans">
              <tr className="hover:bg-slate-900/40 transition">
                  <td className="p-3">A1</td>
                  <td className="p-3">10 × 30</td>
                </tr>
              <tr className="hover:bg-slate-900/40 transition">
                  <td className="p-3">A2</td>
                  <td className="p-3">30 × 5</td>
                </tr>
              <tr className="hover:bg-slate-900/40 transition">
                  <td className="p-3">A3</td>
                  <td className="p-3">5 × 60</td>
                </tr>
            </tbody>
          </table>
        </div>
        <p key="p-23-70" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          There are two possible parenthesizations.
        </p>
        <h4 key="h4-23-72" className="text-base font-semibold text-emerald-400 mt-6 mb-2">
          Option 1: (A1 × A2) × A3
        </h4>
        <p key="p-23-74" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          First:
        </p>
        <p key="p-23-76" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          \<span className="font-mono text-indigo-300 font-semibold"> 10 \times 30 \times 5=1500 \</span>
        </p>
        <p key="p-23-78" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          The result is a 10 × 5 matrix.
        </p>
        <p key="p-23-80" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Then:
        </p>
        <p key="p-23-82" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          \<span className="font-mono text-indigo-300 font-semibold"> 10 \times 5 \times 60=3000 \</span>
        </p>
        <p key="p-23-84" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Total:
        </p>
        <p key="p-23-86" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          \<span className="font-mono text-indigo-300 font-semibold"> 1500+3000=\boxed&#123;4500&#125; \</span>
        </p>
        <h4 key="h4-23-88" className="text-base font-semibold text-emerald-400 mt-6 mb-2">
          Option 2: A1 × (A2 × A3)
        </h4>
        <p key="p-23-90" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          First:
        </p>
        <p key="p-23-92" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          \<span className="font-mono text-indigo-300 font-semibold"> 30 \times 5 \times 60=9000 \</span>
        </p>
        <p key="p-23-94" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          The result is a 30 × 60 matrix.
        </p>
        <p key="p-23-96" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Then:
        </p>
        <p key="p-23-98" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          \<span className="font-mono text-indigo-300 font-semibold"> 10 \times 30 \times 60=18000 \</span>
        </p>
        <p key="p-23-100" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Total:
        </p>
        <p key="p-23-102" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          \<span className="font-mono text-indigo-300 font-semibold"> 9000+18000=\boxed&#123;27000&#125; \</span>
        </p>
        <p key="p-23-104" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <strong className="font-bold text-white">Compare multiplication orders</strong>
        </p>
        <p key="p-23-106" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <strong className="font-bold text-white">Option 1 — (A1 × A2) × A3</strong>
        </p>
        <p key="p-23-108" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          # <strong className="font-bold text-white">4,500</strong>
        </p>
        <p key="p-23-110" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Scalar multiplications
        </p>
        <p key="p-23-112" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Optimal
        </p>
        <p key="p-23-114" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <strong className="font-bold text-white">Option 2 — A1 × (A2 × A3)</strong>
        </p>
        <p key="p-23-116" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          # <strong className="font-bold text-white">27,000</strong>
        </p>
        <p key="p-23-118" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Scalar multiplications
        </p>
        <p key="p-23-120" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Six times the cost of the optimal order.
        </p>
        <h3 key="h3-23-122" className="text-lg md:text-xl font-bold text-indigo-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-indigo-400"></span>
          23.4 State Definition
        </h3>
        <p key="p-23-124" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Suppose we have N matrices and a dimension array:
        </p>
        <div key="code-23-129" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-indigo-500/30 border border-indigo-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-slate-400 font-sans">Module 19 Dynamic Programming Fundamentals</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`p = [10, 30, 5, 60]`}</code>
          </pre>
        </div>
        <p key="p-23-130" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          The matrices are:
        </p>
        <div key="code-23-139" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-indigo-500/30 border border-indigo-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-slate-400 font-sans">Module 19 Dynamic Programming Fundamentals</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`A1 = 10 × 30

A2 = 30 × 5

A3 = 5 × 60`}</code>
          </pre>
        </div>
        <p key="p-23-140" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Let:
        </p>
        <p key="p-23-142" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          \<span className="font-mono text-indigo-300 font-semibold"> dp[i][j] \</span>
        </p>
        <p key="p-23-144" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          represent the minimum number of scalar multiplications required to multiply matrices from Ai through Aj.
        </p>
        <p key="p-23-146" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          For a single matrix:
        </p>
        <p key="p-23-148" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          \<span className="font-mono text-indigo-300 font-semibold"> dp[i][i]=0 \</span>
        </p>
        <p key="p-23-150" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Why?
        </p>
        <p key="p-23-152" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Multiplying one matrix requires no matrix-to-matrix multiplication.
        </p>
        <h3 key="h3-23-154" className="text-lg md:text-xl font-bold text-indigo-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-indigo-400"></span>
          23.5 State Transition
        </h3>
        <p key="p-23-156" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Suppose we split the matrix chain between k and k + 1.
        </p>
        <p key="p-23-158" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          The chain becomes:
        </p>
        <div key="code-23-163" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-indigo-500/30 border border-indigo-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-slate-400 font-sans">Module 19 Dynamic Programming Fundamentals</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`(Ai ... Ak) × (A(k+1) ... Aj)`}</code>
          </pre>
        </div>
        <p key="p-23-164" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          The total cost consists of three parts:
        </p>
        <ol key="ol-23-169" className="my-3 space-y-1.5 text-xs md:text-sm text-slate-300 list-decimal list-inside">
          <li>Cost of multiplying the left chain.</li>
          <li>Cost of multiplying the right chain.</li>
          <li>Cost of multiplying the two resulting matrices.</li>
      </ol>
        <p key="p-23-170" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          The total cost is:
        </p>
        <p key="p-23-172" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          \<span className="font-mono text-indigo-300 font-semibold"> dp[i][k]+dp[k+1][j]+p[i-1]\times p[k]\times p[j] \</span>
        </p>
        <p key="p-23-174" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          We try every possible split point.
        </p>
        <p key="p-23-176" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Therefore:
        </p>
        <p key="p-23-178" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          \<span className="font-mono text-indigo-300 font-semibold"> dp[i][j] = \min\_&#123;i\leq k\&lt;j&#125; \left( dp[i][k]+dp[k+1][j] +p[i-1]p[k]p[j] \right) \</span>
        </p>
        <p key="p-23-180" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          This is the central recurrence of Matrix Chain Multiplication.
        </p>
        <h3 key="h3-23-182" className="text-lg md:text-xl font-bold text-indigo-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-indigo-400"></span>
          23.6 Why Is It Called Interval DP?
        </h3>
        <p key="p-23-184" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Because the state represents a continuous range:
        </p>
        <p key="p-23-186" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          \<span className="font-mono text-indigo-300 font-semibold"> [i,j] \</span>
        </p>
        <p key="p-23-188" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          We solve smaller ranges first and combine them to solve larger ranges.
        </p>
        <p key="p-23-190" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          For example:
        </p>
        <ul key="ul-23-196" className="my-3 space-y-1.5 text-xs md:text-sm text-slate-300 list-disc list-inside">
          <li>Single-matrix intervals.</li>
          <li>Two-matrix intervals.</li>
          <li>Three-matrix intervals.</li>
          <li>Complete matrix chain.</li>
      </ul>
        <p key="p-23-197" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          This is a common pattern in advanced DP problems.
        </p>
        <h3 key="h3-23-199" className="text-lg md:text-xl font-bold text-indigo-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-indigo-400"></span>
          23.7 Java Implementation
        </h3>
        <div key="code-23-255" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-indigo-500/30 border border-indigo-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-slate-400 font-sans">Module 19 Dynamic Programming Fundamentals</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`public class MatrixChainMultiplication {

    public static int matrixChain(int[] p) {

        int n = p.length - 1;

        // dp[i][j] = minimum cost for Ai through Aj
        int[][] dp = new int[n + 1][n + 1];

        // len = number of matrices in the interval
        for (int len = 2; len <= n; len++) {

            for (
                int i = 1;
                i <= n - len + 1;
                i++
            ) {

                int j = i + len - 1;

                dp[i][j] = Integer.MAX_VALUE;

                // Try every possible split
                for (int k = i; k < j; k++) {

                    int cost =
                        dp[i][k]
                        + dp[k + 1][j]
                        + p[i - 1] * p[k] * p[j];

                    dp[i][j] = Math.min(
                        dp[i][j],
                        cost
                    );
                }
            }
        }

        return dp[1][n];
    }

    public static void main(String[] args) {

        int[] dimensions = {
            10, 30, 5, 60
        };

        System.out.println(
            matrixChain(dimensions)
        );
    }
}`}</code>
          </pre>
        </div>
        <p key="p-23-256" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Output:
        </p>
        <div key="code-23-261" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-indigo-500/30 border border-indigo-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-slate-400 font-sans">Module 19 Dynamic Programming Fundamentals</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`4500`}</code>
          </pre>
        </div>
        <p key="p-23-262" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          This code uses <code className="px-1.5 py-0.5 rounded bg-slate-800 text-indigo-300 font-mono text-xs border border-slate-700/60">int</code> for a small example. For larger dimensions, intermediate multiplication costs can overflow. Use <code className="px-1.5 py-0.5 rounded bg-slate-800 text-indigo-300 font-mono text-xs border border-slate-700/60">long</code> for the DP table and multiplication expressions when constraints require it.
        </p>
        <h3 key="h3-23-264" className="text-lg md:text-xl font-bold text-indigo-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-indigo-400"></span>
          23.8 Dry Run
        </h3>
        <p key="p-23-266" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Input:
        </p>
        <div key="code-23-271" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-indigo-500/30 border border-indigo-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-slate-400 font-sans">Module 19 Dynamic Programming Fundamentals</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`p = [10, 30, 5, 60]`}</code>
          </pre>
        </div>
        <p key="p-23-272" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          There are three matrices.
        </p>
        <p key="p-23-274" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          First, all diagonal states are zero:
        </p>
        <div key="code-23-281" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-indigo-500/30 border border-indigo-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-slate-400 font-sans">Module 19 Dynamic Programming Fundamentals</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`dp[1][1] = 0
dp[2][2] = 0
dp[3][3] = 0`}</code>
          </pre>
        </div>
        <p key="p-23-282" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Calculate two-matrix intervals:
        </p>
        <p key="p-23-284" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          \<span className="font-mono text-indigo-300 font-semibold"> dp[1][2]=10\times30\times5=1500 \</span>
        </p>
        <p key="p-23-286" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          \<span className="font-mono text-indigo-300 font-semibold"> dp[2][3]=30\times5\times60=9000 \</span>
        </p>
        <p key="p-23-288" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Now calculate the three-matrix interval.
        </p>
        <p key="p-23-290" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          There are two possible split positions.
        </p>
        <p key="p-23-292" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Split at 1:
        </p>
        <p key="p-23-294" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          \<span className="font-mono text-indigo-300 font-semibold"> 0+9000+10\times30\times60 \</span>
        </p>
        <p key="p-23-296" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          \<span className="font-mono text-indigo-300 font-semibold"> =27000 \</span>
        </p>
        <p key="p-23-298" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Split at 2:
        </p>
        <p key="p-23-300" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          \<span className="font-mono text-indigo-300 font-semibold"> 1500+0+10\times5\times60 \</span>
        </p>
        <p key="p-23-302" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          \<span className="font-mono text-indigo-300 font-semibold"> =4500 \</span>
        </p>
        <p key="p-23-304" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Choose the minimum:
        </p>
        <p key="p-23-306" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          \<span className="font-mono text-indigo-300 font-semibold"> dp[1][3]=4500 \</span>
        </p>
        <h3 key="h3-23-308" className="text-lg md:text-xl font-bold text-indigo-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-indigo-400"></span>
          23.9 Complexity
        </h3>
        <p key="p-23-310" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          For N matrices:
        </p>
        <ul key="ul-23-314" className="my-3 space-y-1.5 text-xs md:text-sm text-slate-300 list-disc list-inside">
          <li>Time: O(N³).</li>
          <li>Space: O(N²).</li>
      </ul>
        <p key="p-23-315" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Three nested loops are used:
        </p>
        <ol key="ol-23-320" className="my-3 space-y-1.5 text-xs md:text-sm text-slate-300 list-decimal list-inside">
          <li>Interval length.</li>
          <li>Starting position.</li>
          <li>Split position.</li>
      </ol>
        <p key="p-23-321" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Matrix Chain Multiplication is an important example of interval DP and is frequently used to introduce more advanced DP techniques.
        </p>
      </div>
    )
  },
  {
    id: 24,
    title: "24. Major Dynamic Programming Patterns",
    summary: "Classification of 6 master DP patterns: 1D Linear, 2D Grid/Strings, Knapsack, Subsequences, Interval DP, and Tree/Bitmask DP.",
    content: (
      <div className="space-y-4">
        <p key="p-24-2" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Now that you have studied the individual problems, you should understand the larger patterns behind them.
        </p>
        <p key="p-24-4" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          This is important because coding interviews rarely give you a problem and explicitly tell you which DP algorithm to use.
        </p>
        <p key="p-24-6" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          You must recognize the pattern yourself.
        </p>
        <h3 key="h3-24-8" className="text-lg md:text-xl font-bold text-indigo-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-indigo-400"></span>
          24.1 One-Dimensional DP
        </h3>
        <p key="p-24-10" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Used when the answer depends on previous positions or smaller numerical states.
        </p>
        <p key="p-24-12" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Examples:
        </p>
        <ul key="ul-24-18" className="my-3 space-y-1.5 text-xs md:text-sm text-slate-300 list-disc list-inside">
          <li>Fibonacci.</li>
          <li>Climbing Stairs.</li>
          <li>House Robber.</li>
          <li>Minimum Cost Climbing Stairs.</li>
      </ul>
        <p key="p-24-19" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Typical state:
        </p>
        <p key="p-24-21" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          \<span className="font-mono text-indigo-300 font-semibold"> dp[i] \</span>
        </p>
        <h3 key="h3-24-23" className="text-lg md:text-xl font-bold text-indigo-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-indigo-400"></span>
          24.2 Two-Dimensional DP
        </h3>
        <p key="p-24-25" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Used when the answer depends on two changing variables.
        </p>
        <p key="p-24-27" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Examples:
        </p>
        <ul key="ul-24-33" className="my-3 space-y-1.5 text-xs md:text-sm text-slate-300 list-disc list-inside">
          <li>0/1 Knapsack.</li>
          <li>Longest Common Subsequence.</li>
          <li>Edit Distance.</li>
          <li>Grid paths.</li>
      </ul>
        <p key="p-24-34" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Typical state:
        </p>
        <p key="p-24-36" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          \<span className="font-mono text-indigo-300 font-semibold"> dp[i][j] \</span>
        </p>
        <h3 key="h3-24-38" className="text-lg md:text-xl font-bold text-indigo-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-indigo-400"></span>
          24.3 Knapsack DP
        </h3>
        <p key="p-24-40" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Used when you need to select items under a capacity or resource restriction.
        </p>
        <p key="p-24-42" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Examples:
        </p>
        <ul key="ul-24-49" className="my-3 space-y-1.5 text-xs md:text-sm text-slate-300 list-disc list-inside">
          <li>0/1 Knapsack.</li>
          <li>Unbounded Knapsack.</li>
          <li>Subset Sum.</li>
          <li>Partition Equal Subset Sum.</li>
          <li>Coin Change.</li>
      </ul>
        <p key="p-24-50" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          The common decision structure is:
        </p>
        <ul key="ul-24-54" className="my-3 space-y-1.5 text-xs md:text-sm text-slate-300 list-disc list-inside">
          <li>Take an item.</li>
          <li>Do not take an item.</li>
      </ul>
        <h3 key="h3-24-55" className="text-lg md:text-xl font-bold text-indigo-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-indigo-400"></span>
          24.4 Subsequences DP
        </h3>
        <p key="p-24-57" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Used when you need to find the best sequence while maintaining the original relative order.
        </p>
        <p key="p-24-59" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Examples:
        </p>
        <ul key="ul-24-65" className="my-3 space-y-1.5 text-xs md:text-sm text-slate-300 list-disc list-inside">
          <li>Longest Common Subsequence.</li>
          <li>Longest Increasing Subsequence.</li>
          <li>Longest Palindromic Subsequence.</li>
          <li>Minimum Insertions to Make a String Palindrome.</li>
      </ul>
        <h3 key="h3-24-66" className="text-lg md:text-xl font-bold text-indigo-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-indigo-400"></span>
          24.5 String DP
        </h3>
        <p key="p-24-68" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Used when comparing or transforming strings.
        </p>
        <p key="p-24-70" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Examples:
        </p>
        <ul key="ul-24-77" className="my-3 space-y-1.5 text-xs md:text-sm text-slate-300 list-disc list-inside">
          <li>LCS.</li>
          <li>Edit Distance.</li>
          <li>Distinct Subsequences.</li>
          <li>Wildcard Matching.</li>
          <li>Regular Expression Matching.</li>
      </ul>
        <h3 key="h3-24-78" className="text-lg md:text-xl font-bold text-indigo-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-indigo-400"></span>
          24.6 Interval DP
        </h3>
        <p key="p-24-80" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Used when the state represents a range of elements and we need to try different splitting positions.
        </p>
        <p key="p-24-82" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Examples:
        </p>
        <ul key="ul-24-88" className="my-3 space-y-1.5 text-xs md:text-sm text-slate-300 list-disc list-inside">
          <li>Matrix Chain Multiplication.</li>
          <li>Burst Balloons.</li>
          <li>Palindrome Partitioning.</li>
          <li>Optimal Binary Search Tree.</li>
      </ul>
        <p key="p-24-89" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Typical state:
        </p>
        <p key="p-24-91" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          \<span className="font-mono text-indigo-300 font-semibold"> dp[i][j] \</span>
        </p>
        <p key="p-24-93" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          where i and j represent the boundaries of an interval.
        </p>
        <h3 key="h3-24-95" className="text-lg md:text-xl font-bold text-indigo-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-indigo-400"></span>
          24.7 DP Pattern Recognition Table
        </h3>
        <div key="table-24-109" className="my-6 overflow-x-auto rounded-xl border border-slate-800 bg-slate-950/70 shadow-sm">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="bg-slate-900/90 border-b border-slate-800 text-slate-300 font-mono">
                <th className="p-3 font-semibold">Clue in problem</th>
                <th className="p-3 font-semibold">Possible DP pattern</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60 text-slate-300 font-sans">
              <tr className="hover:bg-slate-900/40 transition">
                  <td className="p-3">Minimum or maximum cost</td>
                  <td className="p-3">Optimization DP</td>
                </tr>
              <tr className="hover:bg-slate-900/40 transition">
                  <td className="p-3">Repeated choices at every index</td>
                  <td className="p-3">1D DP</td>
                </tr>
              <tr className="hover:bg-slate-900/40 transition">
                  <td className="p-3">Limited capacity or budget</td>
                  <td className="p-3">Knapsack DP</td>
                </tr>
              <tr className="hover:bg-slate-900/40 transition">
                  <td className="p-3">Select or skip an element</td>
                  <td className="p-3">0/1 DP</td>
                </tr>
              <tr className="hover:bg-slate-900/40 transition">
                  <td className="p-3">Unlimited use of items</td>
                  <td className="p-3">Unbounded DP</td>
                </tr>
              <tr className="hover:bg-slate-900/40 transition">
                  <td className="p-3">Two strings being compared</td>
                  <td className="p-3">String / 2D DP</td>
                </tr>
              <tr className="hover:bg-slate-900/40 transition">
                  <td className="p-3">Longest valid sequence</td>
                  <td className="p-3">Subsequences DP</td>
                </tr>
              <tr className="hover:bg-slate-900/40 transition">
                  <td className="p-3">Split an interval at different positions</td>
                  <td className="p-3">Interval DP</td>
                </tr>
              <tr className="hover:bg-slate-900/40 transition">
                  <td className="p-3">Count distinct ways</td>
                  <td className="p-3">Counting DP</td>
                </tr>
              <tr className="hover:bg-slate-900/40 transition">
                  <td className="p-3">Multiple changing variables</td>
                  <td className="p-3">Multidimensional DP</td>
                </tr>
            </tbody>
          </table>
        </div>
      </div>
    )
  },
  {
    id: 25,
    title: "25. Greedy vs Dynamic Programming",
    summary: "When local greedy choice suffices vs when overlapping optimal substructure demands exploring subproblems.",
    content: (
      <div className="space-y-4">
        <p key="p-25-2" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          This comparison is especially important because you studied Greedy Algorithms in Module 16.
        </p>
        <p key="p-25-4" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Both techniques can solve optimization problems, but they make decisions differently.
        </p>
        <h3 key="h3-25-6" className="text-lg md:text-xl font-bold text-indigo-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-indigo-400"></span>
          25.1 Greedy Approach
        </h3>
        <p key="p-25-8" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Greedy chooses the best immediate option.
        </p>
        <p key="p-25-10" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Once a choice is made, the algorithm generally does not reconsider it.
        </p>
        <p key="p-25-12" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Example: Fractional Knapsack.
        </p>
        <p key="p-25-14" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          We select items according to their value-to-weight ratio.
        </p>
        <h3 key="h3-25-16" className="text-lg md:text-xl font-bold text-indigo-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-indigo-400"></span>
          25.2 Dynamic Programming Approach
        </h3>
        <p key="p-25-18" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          DP evaluates smaller subproblems and combines their results.
        </p>
        <p key="p-25-20" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          It may consider several alternative decisions before identifying the best overall solution.
        </p>
        <p key="p-25-22" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Example: 0/1 Knapsack.
        </p>
        <p key="p-25-24" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          We consider taking or skipping each item.
        </p>
        <h3 key="h3-25-26" className="text-lg md:text-xl font-bold text-indigo-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-indigo-400"></span>
          25.3 Detailed Comparison
        </h3>
        <div key="table-25-37" className="my-6 overflow-x-auto rounded-xl border border-slate-800 bg-slate-950/70 shadow-sm">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="bg-slate-900/90 border-b border-slate-800 text-slate-300 font-mono">
                <th className="p-3 font-semibold">Feature</th>
                <th className="p-3 font-semibold">Greedy</th>
                <th className="p-3 font-semibold">Dynamic Programming</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60 text-slate-300 font-sans">
              <tr className="hover:bg-slate-900/40 transition">
                  <td className="p-3">Decision strategy</td>
                  <td className="p-3">Local optimum</td>
                  <td className="p-3">Combines subproblem solutions</td>
                </tr>
              <tr className="hover:bg-slate-900/40 transition">
                  <td className="p-3">Previous decisions</td>
                  <td className="p-3">Usually final</td>
                  <td className="p-3">Evaluated through states</td>
                </tr>
              <tr className="hover:bg-slate-900/40 transition">
                  <td className="p-3">Subproblem storage</td>
                  <td className="p-3">Usually not needed</td>
                  <td className="p-3">Usually required</td>
                </tr>
              <tr className="hover:bg-slate-900/40 transition">
                  <td className="p-3">Recursion</td>
                  <td className="p-3">Not necessary</td>
                  <td className="p-3">Often used in memoization</td>
                </tr>
              <tr className="hover:bg-slate-900/40 transition">
                  <td className="p-3">Tabulation</td>
                  <td className="p-3">Not typical</td>
                  <td className="p-3">Common</td>
                </tr>
              <tr className="hover:bg-slate-900/40 transition">
                  <td className="p-3">Space requirements</td>
                  <td className="p-3">Often low</td>
                  <td className="p-3">Often higher</td>
                </tr>
              <tr className="hover:bg-slate-900/40 transition">
                  <td className="p-3">Correctness</td>
                  <td className="p-3">Greedy choice must be justified</td>
                  <td className="p-3">Recurrence must correctly represent the optimum</td>
                </tr>
            </tbody>
          </table>
        </div>
        <h3 key="h3-25-38" className="text-lg md:text-xl font-bold text-indigo-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-indigo-400"></span>
          25.4 Example: Fractional vs 0/1 Knapsack
        </h3>
        <p key="p-25-40" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          For fractional knapsack, we can divide an item.
        </p>
        <p key="p-25-42" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Selecting the highest value-to-weight ratio first is optimal.
        </p>
        <p key="p-25-44" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          For 0/1 knapsack, we must select complete items.
        </p>
        <p key="p-25-46" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          A high-ratio item might prevent a better combination of other items.
        </p>
        <p key="p-25-48" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Therefore:
        </p>
        <ul key="ul-25-52" className="my-3 space-y-1.5 text-xs md:text-sm text-slate-300 list-disc list-inside">
          <li>Fractional Knapsack → Greedy.</li>
          <li>0/1 Knapsack → DP for the general problem.</li>
      </ul>
        <h3 key="h3-25-53" className="text-lg md:text-xl font-bold text-indigo-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-indigo-400"></span>
          25.5 Example: Coin Change
        </h3>
        <p key="p-25-55" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Consider:
        </p>
        <div key="code-25-62" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-indigo-500/30 border border-indigo-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-slate-400 font-sans">Module 19 Dynamic Programming Fundamentals</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`coins = [1, 3, 4]

amount = 6`}</code>
          </pre>
        </div>
        <p key="p-25-63" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Greedy:
        </p>
        <div key="code-25-68" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-indigo-500/30 border border-indigo-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-slate-400 font-sans">Module 19 Dynamic Programming Fundamentals</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`4 + 1 + 1`}</code>
          </pre>
        </div>
        <p key="p-25-69" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Three coins.
        </p>
        <p key="p-25-71" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Optimal DP solution:
        </p>
        <div key="code-25-76" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-indigo-500/30 border border-indigo-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-slate-400 font-sans">Module 19 Dynamic Programming Fundamentals</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`3 + 3`}</code>
          </pre>
        </div>
        <p key="p-25-77" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Two coins.
        </p>
        <p key="p-25-79" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          This illustrates why greedy decisions are not always globally optimal.
        </p>
        <p key="p-25-81" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <strong className="font-bold text-white">Interview lesson:</strong> Before using greedy, prove that the locally best decision is safe. Before using DP, identify the states, recurrence, and overlapping subproblems.
        </p>
      </div>
    )
  },
  {
    id: 26,
    title: "26. Important DP Implementation Mistakes",
    summary: "10 frequent interview bugs: uninitialized cache, 0 vs -1 sentinel, wrong loop direction, and integer overflow.",
    content: (
      <div className="space-y-4">
        <p key="p-26-2" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Dynamic Programming can become difficult when the state definition or transition is incorrect.
        </p>
        <p key="p-26-4" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          These are some of the most common mistakes.
        </p>
        <h3 key="h3-26-6" className="text-lg md:text-xl font-bold text-indigo-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-indigo-400"></span>
          Mistake 1: Incorrect State Definition
        </h3>
        <p key="p-26-8" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          If <code className="px-1.5 py-0.5 rounded bg-slate-800 text-indigo-300 font-mono text-xs border border-slate-700/60">dp[i]</code> does not clearly describe the subproblem, writing its transition becomes difficult.
        </p>
        <p key="p-26-10" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Always explain what each DP entry represents in one precise sentence.
        </p>
        <h3 key="h3-26-12" className="text-lg md:text-xl font-bold text-indigo-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-indigo-400"></span>
          Mistake 2: Incorrect Base Cases
        </h3>
        <p key="p-26-14" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          A wrong base case can make every later state incorrect.
        </p>
        <p key="p-26-16" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          For example, in climbing stairs, using:
        </p>
        <div key="code-26-21" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-indigo-500/30 border border-indigo-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-slate-400 font-sans">Module 19 Dynamic Programming Fundamentals</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`dp[0] = 0;`}</code>
          </pre>
        </div>
        <p key="p-26-22" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          with the usual ways-to-reach-step-i definition can produce incorrect results.
        </p>
        <p key="p-26-24" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          The correct initialization is:
        </p>
        <div key="code-26-29" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-indigo-500/30 border border-indigo-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-slate-400 font-sans">Module 19 Dynamic Programming Fundamentals</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`dp[0] = 1;`}</code>
          </pre>
        </div>
        <h3 key="h3-26-30" className="text-lg md:text-xl font-bold text-indigo-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-indigo-400"></span>
          Mistake 3: Wrong Loop Direction
        </h3>
        <p key="p-26-32" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          This is particularly important for knapsack problems.
        </p>
        <div key="table-26-40" className="my-6 overflow-x-auto rounded-xl border border-slate-800 bg-slate-950/70 shadow-sm">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="bg-slate-900/90 border-b border-slate-800 text-slate-300 font-mono">
                <th className="p-3 font-semibold">Problem</th>
                <th className="p-3 font-semibold">Loop direction</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60 text-slate-300 font-sans">
              <tr className="hover:bg-slate-900/40 transition">
                  <td className="p-3">0/1 Knapsack</td>
                  <td className="p-3">Backward</td>
                </tr>
              <tr className="hover:bg-slate-900/40 transition">
                  <td className="p-3">Subset Sum</td>
                  <td className="p-3">Backward</td>
                </tr>
              <tr className="hover:bg-slate-900/40 transition">
                  <td className="p-3">Unbounded Knapsack</td>
                  <td className="p-3">Forward</td>
                </tr>
              <tr className="hover:bg-slate-900/40 transition">
                  <td className="p-3">Coin Change combinations</td>
                  <td className="p-3">Forward for each coin</td>
                </tr>
            </tbody>
          </table>
        </div>
        <p key="p-26-41" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Incorrect direction can accidentally allow an item to be selected multiple times.
        </p>
        <h3 key="h3-26-43" className="text-lg md:text-xl font-bold text-indigo-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-indigo-400"></span>
          Mistake 4: Forgetting Impossible States
        </h3>
        <p key="p-26-45" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          In minimum-cost or minimum-count problems, initialize impossible states with a suitable large value.
        </p>
        <p key="p-26-47" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          For example:
        </p>
        <div key="code-26-52" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-indigo-500/30 border border-indigo-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-slate-400 font-sans">Module 19 Dynamic Programming Fundamentals</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`Arrays.fill(dp, INF);`}</code>
          </pre>
        </div>
        <p key="p-26-53" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Be careful when adding to INF because integer overflow can occur.
        </p>
        <h3 key="h3-26-55" className="text-lg md:text-xl font-bold text-indigo-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-indigo-400"></span>
          Mistake 5: Confusing Subsequence and Substring
        </h3>
        <p key="p-26-57" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          A subsequence allows gaps.
        </p>
        <p key="p-26-59" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          A substring must contain consecutive characters.
        </p>
        <p key="p-26-61" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          For example, in:
        </p>
        <div key="code-26-66" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-indigo-500/30 border border-indigo-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-slate-400 font-sans">Module 19 Dynamic Programming Fundamentals</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`ABCDE`}</code>
          </pre>
        </div>
        <p key="p-26-67" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <code className="px-1.5 py-0.5 rounded bg-slate-800 text-indigo-300 font-mono text-xs border border-slate-700/60">ACE</code> is a subsequence but not a substring.
        </p>
        <p key="p-26-69" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          LCS operates on subsequences, not necessarily contiguous substrings.
        </p>
        <h3 key="h3-26-71" className="text-lg md:text-xl font-bold text-indigo-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-indigo-400"></span>
          Mistake 6: Not Understanding the DP Table
        </h3>
        <p key="p-26-73" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Do not memorize a two-dimensional recurrence without understanding:
        </p>
        <ul key="ul-26-79" className="my-3 space-y-1.5 text-xs md:text-sm text-slate-300 list-disc list-inside">
          <li>What rows represent.</li>
          <li>What columns represent.</li>
          <li>Why the previous row is used.</li>
          <li>Why the upper, left, or diagonal cell is relevant.</li>
      </ul>
        <h3 key="h3-26-80" className="text-lg md:text-xl font-bold text-indigo-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-indigo-400"></span>
          Mistake 7: Using the Entire Table When It Is Not Necessary
        </h3>
        <p key="p-26-82" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          If a recurrence depends only on the previous two values, you may not need an entire array.
        </p>
        <p key="p-26-84" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Look for space optimization after obtaining a correct implementation.
        </p>
        <h3 key="h3-26-86" className="text-lg md:text-xl font-bold text-indigo-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-indigo-400"></span>
          Mistake 8: Overflow
        </h3>
        <p key="p-26-88" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Some DP problems involve very large answers.
        </p>
        <p key="p-26-90" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          For example:
        </p>
        <div key="code-26-95" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-indigo-500/30 border border-indigo-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-slate-400 font-sans">Module 19 Dynamic Programming Fundamentals</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`int[] dp;`}</code>
          </pre>
        </div>
        <p key="p-26-96" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          may not be sufficient for Fibonacci, path-counting, or combination-counting problems.
        </p>
        <p key="p-26-98" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Consider:
        </p>
        <div key="code-26-103" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-indigo-500/30 border border-indigo-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-slate-400 font-sans">Module 19 Dynamic Programming Fundamentals</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`long[] dp;`}</code>
          </pre>
        </div>
        <p key="p-26-104" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          or:
        </p>
        <div key="code-26-109" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-indigo-500/30 border border-indigo-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-slate-400 font-sans">Module 19 Dynamic Programming Fundamentals</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`BigInteger[] dp;`}</code>
          </pre>
        </div>
        <p key="p-26-110" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          when constraints require larger values.
        </p>
        <h3 key="h3-26-112" className="text-lg md:text-xl font-bold text-indigo-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-indigo-400"></span>
          Mistake 9: Ignoring Empty Inputs
        </h3>
        <p key="p-26-114" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Always think about:
        </p>
        <ul key="ul-26-122" className="my-3 space-y-1.5 text-xs md:text-sm text-slate-300 list-disc list-inside">
          <li>Empty arrays.</li>
          <li>Empty strings.</li>
          <li>Zero capacity.</li>
          <li>Zero target.</li>
          <li>One element.</li>
          <li>Impossible target.</li>
      </ul>
        <h3 key="h3-26-123" className="text-lg md:text-xl font-bold text-indigo-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-indigo-400"></span>
          Mistake 10: Optimizing Before Understanding
        </h3>
        <p key="p-26-125" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Do not immediately try to write the shortest O(1)-space solution.
        </p>
        <p key="p-26-127" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          First write a clear recursive or two-dimensional DP solution.
        </p>
        <p key="p-26-129" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Verify the recurrence.
        </p>
        <p key="p-26-131" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Then optimize it.
        </p>
      </div>
    )
  },
  {
    id: 27,
    title: "27. Complete Dynamic Programming Complexity Summary",
    summary: "Master reference table of time and space complexities across top-down, bottom-up, and space-optimized implementations.",
    content: (
      <div className="space-y-4">
        <p key="p-27-2" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          This table is particularly useful during interview revision.
        </p>
        <div key="table-27-20" className="my-6 overflow-x-auto rounded-xl border border-slate-800 bg-slate-950/70 shadow-sm">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="bg-slate-900/90 border-b border-slate-800 text-slate-300 font-mono">
                <th className="p-3 font-semibold">Problem</th>
                <th className="p-3 font-semibold">Main technique</th>
                <th className="p-3 font-semibold">Time</th>
                <th className="p-3 font-semibold">Space</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60 text-slate-300 font-sans">
              <tr className="hover:bg-slate-900/40 transition">
                  <td className="p-3">Fibonacci</td>
                  <td className="p-3">1D DP</td>
                  <td className="p-3">O(N)</td>
                  <td className="p-3">O(1) optimized</td>
                </tr>
              <tr className="hover:bg-slate-900/40 transition">
                  <td className="p-3">Climbing Stairs</td>
                  <td className="p-3">1D DP</td>
                  <td className="p-3">O(N)</td>
                  <td className="p-3">O(1)</td>
                </tr>
              <tr className="hover:bg-slate-900/40 transition">
                  <td className="p-3">Minimum Cost Climbing Stairs</td>
                  <td className="p-3">1D DP</td>
                  <td className="p-3">O(N)</td>
                  <td className="p-3">O(1)</td>
                </tr>
              <tr className="hover:bg-slate-900/40 transition">
                  <td className="p-3">House Robber</td>
                  <td className="p-3">1D DP</td>
                  <td className="p-3">O(N)</td>
                  <td className="p-3">O(1)</td>
                </tr>
              <tr className="hover:bg-slate-900/40 transition">
                  <td className="p-3">0/1 Knapsack</td>
                  <td className="p-3">Knapsack DP</td>
                  <td className="p-3">O(NW)</td>
                  <td className="p-3">O(W) optimized</td>
                </tr>
              <tr className="hover:bg-slate-900/40 transition">
                  <td className="p-3">Unbounded Knapsack</td>
                  <td className="p-3">Unbounded DP</td>
                  <td className="p-3">O(NW)</td>
                  <td className="p-3">O(W)</td>
                </tr>
              <tr className="hover:bg-slate-900/40 transition">
                  <td className="p-3">Subset Sum</td>
                  <td className="p-3">Boolean DP</td>
                  <td className="p-3">O(N × Target)</td>
                  <td className="p-3">O(Target)</td>
                </tr>
              <tr className="hover:bg-slate-900/40 transition">
                  <td className="p-3">Partition Equal Subset Sum</td>
                  <td className="p-3">Boolean Knapsack</td>
                  <td className="p-3">O(N × Total)</td>
                  <td className="p-3">O(Total)</td>
                </tr>
              <tr className="hover:bg-slate-900/40 transition">
                  <td className="p-3">Coin Change — Minimum</td>
                  <td className="p-3">Unbounded DP</td>
                  <td className="p-3">O(N × Amount)</td>
                  <td className="p-3">O(Amount)</td>
                </tr>
              <tr className="hover:bg-slate-900/40 transition">
                  <td className="p-3">Coin Change — Combinations</td>
                  <td className="p-3">Counting DP</td>
                  <td className="p-3">O(N × Amount)</td>
                  <td className="p-3">O(Amount)</td>
                </tr>
              <tr className="hover:bg-slate-900/40 transition">
                  <td className="p-3">LCS</td>
                  <td className="p-3">2D String DP</td>
                  <td className="p-3">O(M × N)</td>
                  <td className="p-3">O(M × N)</td>
                </tr>
              <tr className="hover:bg-slate-900/40 transition">
                  <td className="p-3">LIS</td>
                  <td className="p-3">Binary Search DP</td>
                  <td className="p-3">O(N log N)</td>
                  <td className="p-3">O(N)</td>
                </tr>
              <tr className="hover:bg-slate-900/40 transition">
                  <td className="p-3">Edit Distance</td>
                  <td className="p-3">2D String DP</td>
                  <td className="p-3">O(M × N)</td>
                  <td className="p-3">O(M × N)</td>
                </tr>
              <tr className="hover:bg-slate-900/40 transition">
                  <td className="p-3">Matrix Chain Multiplication</td>
                  <td className="p-3">Interval DP</td>
                  <td className="p-3">O(N³)</td>
                  <td className="p-3">O(N²)</td>
                </tr>
            </tbody>
          </table>
        </div>
        <p key="p-27-21" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Where:
        </p>
        <ul key="ul-27-28" className="my-3 space-y-1.5 text-xs md:text-sm text-slate-300 list-disc list-inside">
          <li>N = Number of items or array length.</li>
          <li>W = Knapsack capacity.</li>
          <li>M and N = String lengths, where applicable.</li>
          <li>Total = Sum of the input numbers.</li>
          <li>Amount = Target amount in Coin Change.</li>
      </ul>
        <p key="p-27-29" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          The space complexities shown use optimized storage where indicated.
        </p>
      </div>
    )
  },
  {
    id: 28,
    title: "28. Interview and Practice Problems",
    summary: "Curated 35-problem roadmap across 4 levels from fundamentals to advanced competitive programming.",
    content: (
      <div className="space-y-4">
        <p key="p-28-2" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Do not stop after understanding the examples.
        </p>
        <p key="p-28-4" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          You need to practice applying the same patterns to unfamiliar inputs.
        </p>
        <p key="p-28-6" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Here is a structured problem list.
        </p>
        <h3 key="h3-28-8" className="text-lg md:text-xl font-bold text-indigo-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-indigo-400"></span>
          Level 1 — DP Fundamentals
        </h3>
        <ol key="ol-28-20" className="my-3 space-y-1.5 text-xs md:text-sm text-slate-300 list-decimal list-inside">
          <li>Fibonacci Number.</li>
          <li>Climbing Stairs.</li>
          <li>Min Cost Climbing Stairs.</li>
          <li>Frog Jump.</li>
          <li>House Robber.</li>
          <li>House Robber II.</li>
          <li>Maximum Sum of Non-Adjacent Elements.</li>
          <li>N-th Tribonacci Number.</li>
          <li>Delete and Earn.</li>
          <li>Decode Ways.</li>
      </ol>
        <h3 key="h3-28-21" className="text-lg md:text-xl font-bold text-indigo-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-indigo-400"></span>
          Level 2 — Knapsack and Subset DP
        </h3>
        <ol key="ol-28-33" className="my-3 space-y-1.5 text-xs md:text-sm text-slate-300 list-decimal list-inside">
          <li>0/1 Knapsack.</li>
          <li>Unbounded Knapsack.</li>
          <li>Subset Sum.</li>
          <li>Partition Equal Subset Sum.</li>
          <li>Minimum Subset Sum Difference.</li>
          <li>Count Subsets with a Given Sum.</li>
          <li>Target Sum.</li>
          <li>Coin Change.</li>
          <li>Coin Change II.</li>
          <li>Rod Cutting.</li>
      </ol>
        <h3 key="h3-28-34" className="text-lg md:text-xl font-bold text-indigo-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-indigo-400"></span>
          Level 3 — String and Subsequence DP
        </h3>
        <ol key="ol-28-46" className="my-3 space-y-1.5 text-xs md:text-sm text-slate-300 list-decimal list-inside">
          <li>Longest Common Subsequence.</li>
          <li>Longest Common Substring.</li>
          <li>Longest Increasing Subsequence.</li>
          <li>Print Longest Increasing Subsequence.</li>
          <li>Edit Distance.</li>
          <li>Delete Operation for Two Strings.</li>
          <li>Shortest Common Supersequence.</li>
          <li>Distinct Subsequences.</li>
          <li>Longest Palindromic Subsequence.</li>
          <li>Minimum Insertions to Make a String Palindrome.</li>
      </ol>
        <h3 key="h3-28-47" className="text-lg md:text-xl font-bold text-indigo-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-indigo-400"></span>
          Level 4 — Advanced DP
        </h3>
        <ol key="ol-28-59" className="my-3 space-y-1.5 text-xs md:text-sm text-slate-300 list-decimal list-inside">
          <li>Matrix Chain Multiplication.</li>
          <li>Burst Balloons.</li>
          <li>Palindrome Partitioning II.</li>
          <li>Boolean Parenthesization.</li>
          <li>Minimum Cost to Cut a Stick.</li>
          <li>Egg Dropping Problem.</li>
          <li>Regular Expression Matching.</li>
          <li>Wildcard Matching.</li>
          <li>Maximum Profit in Job Scheduling.</li>
          <li>Super Egg Drop.</li>
      </ol>
        <p key="p-28-60" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          These advanced problems introduce additional techniques such as interval DP, partition DP, state optimization, and binary search combined with DP.
        </p>
      </div>
    )
  },
  {
    id: 29,
    title: "29. How to Solve Any New DP Problem",
    summary: "A step-by-step master checklist and thinking framework for tackling unseen dynamic programming problems in interviews.",
    content: (
      <div className="space-y-4">
        <p key="p-29-2" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          This is the most important section for your interview preparation.
        </p>
        <p key="p-29-4" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          When you encounter a DP problem, do not immediately start writing code.
        </p>
        <p key="p-29-6" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Follow this process.
        </p>
        <p key="p-29-8" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <strong className="font-bold text-white">A systematic DP problem-solving framework</strong>
        </p>
        <ol key="ol-29-11" className="my-3 space-y-1.5 text-xs md:text-sm text-slate-300 list-decimal list-inside">
          <li><strong className="font-bold text-white">Understand the problem</strong></li>
      </ol>
        <p key="p-29-12" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Identify the input, output, constraints, and whether you need to count, maximize, minimize, or determine possibility.
        </p>
        <ol key="ol-29-14" className="my-3 space-y-1.5 text-xs md:text-sm text-slate-300 list-decimal list-inside">
          <li><strong className="font-bold text-white">Find the decisions</strong></li>
      </ol>
        <p key="p-29-15" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Ask what choices can be made at each step. For example, take or skip an element.
        </p>
        <ol key="ol-29-17" className="my-3 space-y-1.5 text-xs md:text-sm text-slate-300 list-decimal list-inside">
          <li><strong className="font-bold text-white">Write the recursive solution</strong></li>
      </ol>
        <p key="p-29-18" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Express how the original problem can be reduced to smaller problems.
        </p>
        <ol key="ol-29-20" className="my-3 space-y-1.5 text-xs md:text-sm text-slate-300 list-decimal list-inside">
          <li><strong className="font-bold text-white">Identify overlapping subproblems</strong></li>
      </ol>
        <p key="p-29-21" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Check whether the same state can be reached multiple times.
        </p>
        <ol key="ol-29-23" className="my-3 space-y-1.5 text-xs md:text-sm text-slate-300 list-decimal list-inside">
          <li><strong className="font-bold text-white">Define the DP state</strong></li>
      </ol>
        <p key="p-29-24" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Clearly explain what <code className="px-1.5 py-0.5 rounded bg-slate-800 text-indigo-300 font-mono text-xs border border-slate-700/60">dp[i]</code>, <code className="px-1.5 py-0.5 rounded bg-slate-800 text-indigo-300 font-mono text-xs border border-slate-700/60">dp[i][j]</code>, or a higher-dimensional state represents.
        </p>
        <ol key="ol-29-26" className="my-3 space-y-1.5 text-xs md:text-sm text-slate-300 list-decimal list-inside">
          <li><strong className="font-bold text-white">Write the recurrence</strong></li>
      </ol>
        <p key="p-29-27" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Express the current state using previously solved states.
        </p>
        <ol key="ol-29-29" className="my-3 space-y-1.5 text-xs md:text-sm text-slate-300 list-decimal list-inside">
          <li><strong className="font-bold text-white">Establish base cases</strong></li>
      </ol>
        <p key="p-29-30" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Determine the smallest subproblems and their answers.
        </p>
        <ol key="ol-29-32" className="my-3 space-y-1.5 text-xs md:text-sm text-slate-300 list-decimal list-inside">
          <li><strong className="font-bold text-white">Choose memoization or tabulation</strong></li>
      </ol>
        <p key="p-29-33" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Select top-down or bottom-up computation.
        </p>
        <ol key="ol-29-35" className="my-3 space-y-1.5 text-xs md:text-sm text-slate-300 list-decimal list-inside">
          <li><strong className="font-bold text-white">Verify the solution</strong></li>
      </ol>
        <p key="p-29-36" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Dry-run small examples, boundary cases, and impossible cases.
        </p>
        <ol key="ol-29-38" className="my-3 space-y-1.5 text-xs md:text-sm text-slate-300 list-decimal list-inside">
          <li><strong className="font-bold text-white">Optimize complexity</strong></li>
      </ol>
        <p key="p-29-39" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Reduce time or memory only after the original solution is correct.
        </p>
        <h3 key="h3-29-41" className="text-lg md:text-xl font-bold text-indigo-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-indigo-400"></span>
          Example of Applying This Framework
        </h3>
        <p key="p-29-43" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Problem:
        </p>
        <p key="p-29-45" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Given an array, find the maximum sum of non-adjacent elements.
        </p>
        <p key="p-29-47" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Input:
        </p>
        <div key="code-29-52" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-indigo-500/30 border border-indigo-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-slate-400 font-sans">Module 19 Dynamic Programming Fundamentals</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`[2, 7, 9, 3, 1]`}</code>
          </pre>
        </div>
        <p key="p-29-53" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Step 1 — Objective:
        </p>
        <p key="p-29-55" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Maximize sum.
        </p>
        <p key="p-29-57" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Step 2 — Decisions:
        </p>
        <p key="p-29-59" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Take current element or skip it.
        </p>
        <p key="p-29-61" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Step 3 — State:
        </p>
        <p key="p-29-63" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          \<span className="font-mono text-indigo-300 font-semibold"> dp[i]=\text&#123;maximum sum using the first i elements&#125; \</span>
        </p>
        <p key="p-29-65" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Step 4 — Transition:
        </p>
        <p key="p-29-67" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          \<span className="font-mono text-indigo-300 font-semibold"> dp[i]=\max(dp[i-1],nums[i-1]+dp[i-2]) \</span>
        </p>
        <p key="p-29-69" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Step 5 — Base cases:
        </p>
        <p key="p-29-71" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          \<span className="font-mono text-indigo-300 font-semibold"> dp[0]=0 \</span>
        </p>
        <p key="p-29-73" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          \<span className="font-mono text-indigo-300 font-semibold"> dp[1]=\max(0,nums[0]) \</span>
        </p>
        <p key="p-29-75" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Step 6 — Answer:
        </p>
        <p key="p-29-77" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          The maximum sum is:
        </p>
        <div key="code-29-82" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-indigo-500/30 border border-indigo-500/50"></span>Java / Code Snippet</span>
            <span className="text-[10px] text-slate-400 font-sans">Module 19 Dynamic Programming Fundamentals</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{`12`}</code>
          </pre>
        </div>
        <p key="p-29-83" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          This framework can be applied to many different DP problems.
        </p>
      </div>
    )
  },
  {
    id: 30,
    title: "30. Module 19 — Final Understanding Checklist",
    summary: "20-point self-assessment diagnostic to verify comprehensive mastery of dynamic programming.",
    content: (
      <div className="space-y-4">
        <p key="p-30-2" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Use this tracker to measure your understanding of the entire module.
        </p>
        <p key="p-30-4" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <strong className="font-bold text-white">Dynamic Programming mastery tracker</strong>
        </p>
        <p key="p-30-6" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          0 / 26 completed
        </p>
        <h3 key="h3-30-8" className="text-lg md:text-xl font-bold text-indigo-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-indigo-400"></span>
          0%
        </h3>
        <p key="p-30-10" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Understand Dynamic Programming fundamentals
        </p>
        <p key="p-30-12" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Understand overlapping subproblems
        </p>
        <p key="p-30-14" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Understand optimal substructure
        </p>
        <p key="p-30-16" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Implement memoization
        </p>
        <p key="p-30-18" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Implement tabulation
        </p>
        <p key="p-30-20" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Convert recursion into DP
        </p>
        <p key="p-30-22" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Understand one-dimensional and multidimensional states
        </p>
        <p key="p-30-24" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Define state transitions correctly
        </p>
        <p key="p-30-26" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Identify base cases
        </p>
        <p key="p-30-28" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Understand space optimization
        </p>
        <p key="p-30-30" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Solve Fibonacci using four approaches
        </p>
        <p key="p-30-32" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Solve Climbing Stairs
        </p>
        <p key="p-30-34" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Solve Minimum Cost Climbing Stairs
        </p>
        <p key="p-30-36" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Solve House Robber
        </p>
        <p key="p-30-38" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Implement 0/1 Knapsack
        </p>
        <p key="p-30-40" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Implement Unbounded Knapsack
        </p>
        <p key="p-30-42" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Solve Subset Sum
        </p>
        <p key="p-30-44" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Solve Partition Equal Subset Sum
        </p>
        <p key="p-30-46" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Solve Coin Change minimum coins
        </p>
        <p key="p-30-48" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Solve Coin Change combinations
        </p>
        <p key="p-30-50" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Understand Longest Common Subsequence
        </p>
        <p key="p-30-52" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Understand Longest Increasing Subsequence
        </p>
        <p key="p-30-54" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Implement Edit Distance
        </p>
        <p key="p-30-56" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Implement Matrix Chain Multiplication
        </p>
        <p key="p-30-58" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Understand Greedy vs Dynamic Programming
        </p>
        <p key="p-30-60" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Analyze DP time and space complexity
        </p>
        <p key="p-30-62" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Reset progress
        </p>
      </div>
    )
  },
  {
    id: 31,
    title: "31. The 12 Most Important Lessons from Module 19",
    summary: "Core principles of DP engineering, memory vs computation tradeoffs, and preview of Module 20 (Advanced Graphs).",
    content: (
      <div className="space-y-4">
        <ol key="ol-31-14" className="my-3 space-y-1.5 text-xs md:text-sm text-slate-300 list-decimal list-inside">
          <li>Dynamic Programming avoids repeated calculations by storing results.</li>
          <li>Overlapping subproblems explain why memoization is useful.</li>
          <li>Optimal substructure allows us to build larger solutions from smaller optimal solutions.</li>
          <li>Memoization is top-down DP.</li>
          <li>Tabulation is bottom-up DP.</li>
          <li>State definition is the foundation of every DP solution.</li>
          <li>State transitions describe how smaller answers produce larger answers.</li>
          <li>Base cases determine the starting point of the recurrence.</li>
          <li>Space optimization removes unnecessary stored states.</li>
          <li>0/1 and Unbounded Knapsack differ in whether an item can be reused.</li>
          <li>LCS, LIS, and Edit Distance are important sequence and string DP patterns.</li>
          <li>Matrix Chain Multiplication introduces interval DP.</li>
      </ol>
        <h3 key="h3-31-15" className="text-lg md:text-xl font-bold text-indigo-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-indigo-400"></span>
          Your Expected Skill After This Module
        </h3>
        <p key="p-31-17" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <strong className="font-bold text-white">Module 19 learning outcome</strong>
        </p>
        <p key="p-31-19" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          After completing this module, you should be able to:
        </p>
        <ul key="ul-31-29" className="my-3 space-y-1.5 text-xs md:text-sm text-slate-300 list-disc list-inside">
          <li>Recognize when Dynamic Programming is appropriate.</li>
          <li>Convert recursive problems into memoized and tabulated solutions.</li>
          <li>Define states and derive recurrence relations independently.</li>
          <li>Implement 1D and 2D DP in Java.</li>
          <li>Solve knapsack, subset, coin change, and sequence problems.</li>
          <li>Optimize DP memory usage.</li>
          <li>Explain time and space complexity.</li>
          <li>Identify the correct DP pattern in unfamiliar interview problems.</li>
      </ul>
        <p key="p-31-30" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <strong className="font-bold text-white">My recommendation:</strong> Spend extra practice time on 0/1 Knapsack, Subset Sum, Coin Change, LCS, LIS, and Edit Distance. These problems teach patterns that appear repeatedly in more advanced DP questions. Do not just memorize their code; practice deriving the state and recurrence from the problem statement.
        </p>
        <p key="p-31-32" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          # <strong className="font-bold text-white">Next Module — Module 20: Advanced Dynamic Programming</strong>
        </p>
        <p key="p-31-34" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          The natural progression after this module is advanced DP, where we combine the foundations you have learned with more complex state transitions and optimization techniques.
        </p>
        <p key="p-31-36" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          Suggested topics:
        </p>
        <ul key="ul-31-56" className="my-3 space-y-1.5 text-xs md:text-sm text-slate-300 list-disc list-inside">
          <li>DP on Grids.</li>
          <li>Unique Paths and Minimum Path Sum.</li>
          <li>Triangle Minimum Path Sum.</li>
          <li>DP on Subsequences.</li>
          <li>Target Sum and Advanced Knapsack.</li>
          <li>Longest Palindromic Subsequence.</li>
          <li>Shortest Common Supersequence.</li>
          <li>DP on Strings.</li>
          <li>Partition DP.</li>
          <li>Interval DP.</li>
          <li>DP on Trees.</li>
          <li>DP on Graphs.</li>
          <li>Bitmask DP.</li>
          <li>State Compression.</li>
          <li>Space Optimization.</li>
          <li>Digit DP.</li>
          <li>DP with Binary Search.</li>
          <li>DP with Bit Manipulation.</li>
      </ul>
        <p key="p-31-57" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          <strong className="font-bold text-white">The biggest goal of Module 19 is not to memorize 15 different DP solutions. It is to develop the ability to derive a DP solution from scratch.</strong> Once you master states, transitions, and base cases, advanced Dynamic Programming becomes much easier to learn.
        </p>
        <p key="p-31-58" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          &lt;/USER_REQUEST&gt;
        </p>
        <p key="p-31-59" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          &lt;ADDITIONAL_METADATA&gt;
        </p>
        <p key="p-31-60" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          The current local time is: 2026-11-16T17:34:15+05:30.
        </p>
        <p key="p-31-61" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          &lt;/ADDITIONAL_METADATA&gt;
        </p>
      </div>
    )
  }
];
