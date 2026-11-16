import React from "react";
import { Sparkles, Terminal, Code2, BookOpen, Layers, CheckCircle2, AlertTriangle, ArrowRight, GitFork, Cpu } from "lucide-react";

export const JAVA_HEAPS_SECTIONS = [
  {
    id: 0,
    title: "Module 13: Heaps, Priority Queues & Advanced Trees Overview",
    category: "Course Roadmap · Objectives",
    anchor: "overview",
    content: (
      <div className="space-y-4">
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Java + DSA
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Advanced DSA
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Module 13
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            This module builds on Module 12 (Trees &amp; Binary Search Trees) and introduces more advanced tree-based data structures.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            You will learn how to efficiently find the smallest or largest elements, manage priorities, solve top-K problems, merge sorted collections, calculate running medians, and maintain balanced search trees.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            There are two major parts:
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Part A — Heaps and Priority Queues
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Min Heap and Max Heap.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Heap operations and Heap Sort.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Java PriorityQueue.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Advanced interview problems.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Part B — Advanced Balanced Trees
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            AVL Trees.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Four AVL rotations.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Red-Black Trees.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Comparison of balanced tree structures.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Part A — Heaps and Priority Queues
          </p>
      </div>
    ),
  },
  {
    id: 1,
    title: "1. Heap Fundamentals & Heap-Order Invariants",
    category: "Part A · Heaps & Priority Queues",
    anchor: "heap-fundamentals",
    content: (
      <div className="space-y-4">
          <h3 className="text-lg font-bold text-white mt-6 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>1.1 What is a Heap?</span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            A Heap is a specialized tree-based data structure that satisfies two important properties:
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            It is a complete binary tree.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            It follows a heap-order property.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            The heap-order property determines how parent nodes and child nodes are ordered.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            There are two major types:
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Min Heap.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Max Heap.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            A heap allows you to access the minimum or maximum element efficiently.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            For example, imagine a university examination system containing thousands of student scores.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            You want to repeatedly identify the student with the highest score.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Instead of sorting every score after every update, you can maintain a Max Heap.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            The highest score is always available at the root.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Similarly, a Min Heap gives you immediate access to the smallest element.
          </p>
          <h3 className="text-lg font-bold text-white mt-6 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>1.2 Why do we need heaps?</span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Consider the following array:
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            [40, 10, 70, 20, 90, 30]
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Suppose you repeatedly need the largest element.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Using an unsorted array, you must scan all elements to find the maximum.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Time complexity:
          </p>
          <div className="my-3 p-3 text-center bg-[#faf8f5] border border-slate-800 rounded-xl font-mono text-sm text-white shadow-2xs">
            <span className="block font-mono bg-slate-950 text-white px-3 py-1.5 my-2 rounded text-xs overflow-x-auto border border-slate-800"> O(n) </span>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            You could sort the entire array first, but sorting requires:
          </p>
          <div className="my-3 p-3 text-center bg-[#faf8f5] border border-slate-800 rounded-xl font-mono text-sm text-white shadow-2xs">
            <span className="block font-mono bg-slate-950 text-white px-3 py-1.5 my-2 rounded text-xs overflow-x-auto border border-slate-800"> O(n\log n) </span>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            A Max Heap provides:
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Maximum element: <code className="font-mono text-orange-400 bg-orange-500/15 px-1 py-0.5 rounded text-xs border border-orange-100">O(1)</code>.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Insert element: <code className="font-mono text-orange-400 bg-orange-500/15 px-1 py-0.5 rounded text-xs border border-orange-100">O(\log n)</code>.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Remove maximum: <code className="font-mono text-orange-400 bg-orange-500/15 px-1 py-0.5 rounded text-xs border border-orange-100">O(\log n)</code>.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            This is particularly useful when priorities change or elements arrive continuously.
          </p>
          <h3 className="text-lg font-bold text-white mt-6 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>1.3 Real-world applications</span>
          </h3>
          <div className="overflow-x-auto my-4 rounded-xl border border-slate-800 shadow-2xs">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-white border-b border-slate-800 font-semibold">
                <tr>
                  <th className="px-4 py-3">Application</th>
                  <th className="px-4 py-3">How heaps are used</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">Operating systems</td>
                  <td className="px-4 py-2.5 text-slate-300">Task scheduling and priority management</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">Networks</td>
                  <td className="px-4 py-2.5 text-slate-300">Packet scheduling</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">Search engines</td>
                  <td className="px-4 py-2.5 text-slate-300">Top-ranked search results</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">Artificial intelligence</td>
                  <td className="px-4 py-2.5 text-slate-300">Best-first search algorithms</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">Graph algorithms</td>
                  <td className="px-4 py-2.5 text-slate-300">Dijkstra&#39;s and Prim&#39;s algorithms</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">Data analytics</td>
                  <td className="px-4 py-2.5 text-slate-300">Top-K frequent values</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">Streaming systems</td>
                  <td className="px-4 py-2.5 text-slate-300">Running median</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">Event systems</td>
                  <td className="px-4 py-2.5 text-slate-300">Processing the next scheduled event</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">Load balancing</td>
                  <td className="px-4 py-2.5 text-slate-300">Selecting the least-loaded server</td>
                </tr>
              </tbody>
            </table>
          </div>
          <h3 className="text-lg font-bold text-white mt-6 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>1.4 Heap vs Binary Search Tree</span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            These are different data structures.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            A BST follows:
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Left subtree &lt; Root &lt; Right subtree
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            A heap follows only the parent-child priority condition.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            For a Min Heap:
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Parent &lt;= Children
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            A heap does not guarantee that the entire left subtree contains smaller values than the right subtree.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            For example:
          </p>
          <div className="p-4 rounded-xl bg-stone-900 text-orange-300 font-mono text-xs overflow-x-auto leading-tight border border-stone-800 my-4 shadow-inner">
            <div className="text-[10px] text-slate-400 uppercase tracking-widest font-bold pb-2 mb-2 border-b border-stone-800 font-sans">
              Heap & Balanced Tree Topology
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin] text-center sm:text-left">
              <code>{`10 / \\ 20 15 / \\ / \\ 40 30 50 25
This is a valid Min Heap.
But its elements are not fully sorted.
Feature
Heap
BST
Structure
Complete binary tree
Binary search tree
Main property
Parent-child priority
Left-root-right ordering
Root
Minimum or maximum
Depends on values
Access minimum/maximum
\\(O(1)\\) at appropriate root
\\(O(h)\\)
Search arbitrary value
\\(O(n)\\)
\\(O(h)\\)
Insert
\\(O(\\log n)\\)
\\(O(h)\\)
Delete root
\\(O(\\log n)\\)
Not a standard heap operation
Remember: A heap is designed for priority retrieval, not arbitrary searching.`}</code>
            </pre>
          </div>
      </div>
    ),
  },
  {
    id: 2,
    title: "2. Min Heap and Max Heap Mathematical Properties",
    category: "Part A · Heap Taxonomies",
    anchor: "min-max-heap",
    content: (
      <div className="space-y-4">
          <h3 className="text-lg font-bold text-white mt-6 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>2.1 Min Heap</span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            A Min Heap is a complete binary tree in which every parent node is smaller than or equal to its children.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Mathematically:
          </p>
          <div className="my-3 p-3 text-center bg-[#faf8f5] border border-slate-800 rounded-xl font-mono text-sm text-white shadow-2xs">
            <span className="block font-mono bg-slate-950 text-white px-3 py-1.5 my-2 rounded text-xs overflow-x-auto border border-slate-800"> Parent \leq LeftChild </span>
          </div>
          <div className="my-3 p-3 text-center bg-[#faf8f5] border border-slate-800 rounded-xl font-mono text-sm text-white shadow-2xs">
            <span className="block font-mono bg-slate-950 text-white px-3 py-1.5 my-2 rounded text-xs overflow-x-auto border border-slate-800"> Parent \leq RightChild </span>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Example:
          </p>
          <div className="p-4 rounded-xl bg-stone-900 text-orange-300 font-mono text-xs overflow-x-auto leading-tight border border-stone-800 my-4 shadow-inner">
            <div className="text-[10px] text-slate-400 uppercase tracking-widest font-bold pb-2 mb-2 border-b border-stone-800 font-sans">
              Heap & Balanced Tree Topology
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin] text-center sm:text-left">
              <code>{`10 / \\ 20 15 / \\ / \\ 40 30 50 25
The smallest element is always at the root.
Minimum = 10
The important property is local ordering, not complete sorting.
For example, 20 can be larger than 15 even though both are children of 10.`}</code>
            </pre>
          </div>
          <h3 className="text-lg font-bold text-white mt-6 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>2.2 Max Heap</span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            A Max Heap is a complete binary tree in which every parent node is greater than or equal to its children.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Mathematically:
          </p>
          <div className="my-3 p-3 text-center bg-[#faf8f5] border border-slate-800 rounded-xl font-mono text-sm text-white shadow-2xs">
            <span className="block font-mono bg-slate-950 text-white px-3 py-1.5 my-2 rounded text-xs overflow-x-auto border border-slate-800"> Parent \geq LeftChild </span>
          </div>
          <div className="my-3 p-3 text-center bg-[#faf8f5] border border-slate-800 rounded-xl font-mono text-sm text-white shadow-2xs">
            <span className="block font-mono bg-slate-950 text-white px-3 py-1.5 my-2 rounded text-xs overflow-x-auto border border-slate-800"> Parent \geq RightChild </span>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Example:
          </p>
          <div className="p-4 rounded-xl bg-stone-900 text-orange-300 font-mono text-xs overflow-x-auto leading-tight border border-stone-800 my-4 shadow-inner">
            <div className="text-[10px] text-slate-400 uppercase tracking-widest font-bold pb-2 mb-2 border-b border-stone-800 font-sans">
              Heap & Balanced Tree Topology
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin] text-center sm:text-left">
              <code>{`90 / \\ 70 80 / \\ / \\ 40 50 60 30
The largest element is always at the root.
Maximum = 90
[“HEAPS ,the cutest little data structure ever invented” | by Jay Kalia | Medium](https://images.openai.com/static-rsc-4/4R5F9rk2ZBGnM0uWjEB1RR-DtGu35N4MtemocXw8s_6qal4H1GdwjeUl8QmC5xQ4Nu4cbwNEPNGuBNxo6sPoJXHZ3pGMnuAYj06MNh7Na8b3ozXUK2oo2KVN6uo2likxXFp8UKRnS78TZZKf4tWvFt14TrV-qSJJZAGs5nuuxIc?purpose=inline)
[jaykalia07.medium.com](https://jaykalia07.medium.com/heaps-the-cutest-little-data-structure-ever-invented-a1d0010cca84?utm_source=chatgpt.com)`}</code>
            </pre>
          </div>
          <h3 className="text-lg font-bold text-white mt-6 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>2.3 Min Heap vs Max Heap</span>
          </h3>
          <div className="overflow-x-auto my-4 rounded-xl border border-slate-800 shadow-2xs">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-white border-b border-slate-800 font-semibold">
                <tr>
                  <th className="px-4 py-3">Feature</th>
                  <th className="px-4 py-3">Min Heap</th>
                  <th className="px-4 py-3">Max Heap</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">Root</td>
                  <td className="px-4 py-2.5 text-slate-300">Smallest element</td>
                  <td className="px-4 py-2.5 text-slate-300">Largest element</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">Parent relation</td>
                  <td className="px-4 py-2.5 text-slate-300">Parent ≤ children</td>
                  <td className="px-4 py-2.5 text-slate-300">Parent ≥ children</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">Useful for</td>
                  <td className="px-4 py-2.5 text-slate-300">Minimum retrieval</td>
                  <td className="px-4 py-2.5 text-slate-300">Maximum retrieval</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">Common application</td>
                  <td className="px-4 py-2.5 text-slate-300">Dijkstra&#39;s algorithm</td>
                  <td className="px-4 py-2.5 text-slate-300">Heap Sort</td>
                </tr>
              </tbody>
            </table>
          </div>
          <h3 className="text-lg font-bold text-white mt-6 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>2.4 Important observation</span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            A Min Heap does not necessarily have its maximum element at a particular leaf.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Similarly, a Max Heap does not necessarily have its minimum element at a particular leaf.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            To find an arbitrary minimum or maximum that is not at the appropriate root, you may need to inspect <code className="font-mono text-orange-400 bg-orange-500/15 px-1 py-0.5 rounded text-xs border border-orange-100">O(n)</code> elements.
          </p>
      </div>
    ),
  },
  {
    id: 3,
    title: "3. Complete Binary Tree Array Representation & Arithmetic",
    category: "Part A · Array Mechanics",
    anchor: "array-representation",
    content: (
      <div className="space-y-4">
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            A binary heap is usually represented using an array rather than individually allocated tree nodes.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            This is possible because a heap is always a complete binary tree.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Consider:
          </p>
          <div className="p-4 rounded-xl bg-stone-900 text-orange-300 font-mono text-xs overflow-x-auto leading-tight border border-stone-800 my-4 shadow-inner">
            <div className="text-[10px] text-slate-400 uppercase tracking-widest font-bold pb-2 mb-2 border-b border-stone-800 font-sans">
              Heap & Balanced Tree Topology
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin] text-center sm:text-left">
              <code>{`10 / \\ 20 15 / \\ / \\ 40 30 50 25
Array representation:
[10, 20, 15, 40, 30, 50, 25]
[Heap / Priority Queue - Astik Anand](https://images.openai.com/static-rsc-4/OXmZRFPXakaL5xj27zgPUcPaH6DRmpw637yAR7w0U8KWRuBd0bd4kICaW41xyv6ycZXmqL0UGQ1t-_NbAQWVuWpyV95ydyHk20FoeGh0fvTyohNh5nz5AoB9utOwLHv44jNWn2X3lcJ8FHfmDAhE7390r9JtXWY8KvNO5DEqYec?purpose=inline)
[astikanand.github.io](https://astikanand.github.io/techblogs/data-structures/heap?utm_source=chatgpt.com)`}</code>
            </pre>
          </div>
          <h3 className="text-lg font-bold text-white mt-6 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>3.1 Zero-based indexing</span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Java arrays start at index 0.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            For any node at index i:
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Left child:
          </p>
          <div className="my-3 p-3 text-center bg-[#faf8f5] border border-slate-800 rounded-xl font-mono text-sm text-white shadow-2xs">
            <span className="block font-mono bg-slate-950 text-white px-3 py-1.5 my-2 rounded text-xs overflow-x-auto border border-slate-800"> Left(i)=2i+1 </span>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Right child:
          </p>
          <div className="my-3 p-3 text-center bg-[#faf8f5] border border-slate-800 rounded-xl font-mono text-sm text-white shadow-2xs">
            <span className="block font-mono bg-slate-950 text-white px-3 py-1.5 my-2 rounded text-xs overflow-x-auto border border-slate-800"> Right(i)=2i+2 </span>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Parent:
          </p>
          <div className="my-3 p-3 text-center bg-[#faf8f5] border border-slate-800 rounded-xl font-mono text-sm text-white shadow-2xs">
            <span className="block font-mono bg-slate-950 text-white px-3 py-1.5 my-2 rounded text-xs overflow-x-auto border border-slate-800"> Parent(i)=\left\lfloor\frac&#123;i-1&#125;&#123;2&#125;\right\rfloor </span>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Example:
          </p>
          <div className="p-4 rounded-xl bg-stone-900 text-orange-300 font-mono text-xs overflow-x-auto leading-tight border border-stone-800 my-4 shadow-inner">
            <div className="text-[10px] text-slate-400 uppercase tracking-widest font-bold pb-2 mb-2 border-b border-stone-800 font-sans">
              Heap & Balanced Tree Topology
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin] text-center sm:text-left">
              <code>{`Index: 0 1 2 3 4 5 6 Value: 10 20 15 40 30 50 25
For node 20:
Index = 1
Left child:
\\[ 2(1)+1=3 \\]
Index 3 contains 40.
Right child:
\\[ 2(1)+2=4 \\]
Index 4 contains 30.
Parent:
\\[ \\left\\lfloor\\frac{1-1}{2}\\right\\rfloor=0 \\]
Index 0 contains 10.`}</code>
            </pre>
          </div>
          <h3 className="text-lg font-bold text-white mt-6 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>3.2 Java implementation</span>
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public class Main  {
  public static void main(String[] args)  {
    int[] heap =  {
      10, 20, 15, 40, 30, 50, 25
    };
    int i = 1;
    int left = 2 * i + 1;
    int right = 2 * i + 2;
    int parent = (i - 1) / 2;
    System.out.println("Node: " + heap[i]);
    System.out.println("Left: " + heap[left]);
    System.out.println("Right: " + heap[right]);
    System.out.println("Parent: " + heap[parent]);

  }

}`}</code>
            </pre>
          </div>
          <div className="p-3 my-2 rounded-lg bg-[#f4f2ed] border border-[#e2ded5] text-xs font-mono text-slate-200 flex items-start gap-2">
            <span className="text-orange-400 font-bold uppercase tracking-wider text-[10px]">Output:</span>
            <span></span>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Node: 20 Left: 40 Right: 30 Parent: 10
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            In general implementations, check that child indices are within the heap size before accessing them.
          </p>
          <h3 className="text-lg font-bold text-white mt-6 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>3.3 Finding leaf and internal nodes</span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            For an array representing a heap with <code className="font-mono text-orange-400 bg-orange-500/15 px-1 py-0.5 rounded text-xs border border-orange-100">n</code> elements:
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Last non-leaf node:
          </p>
          <div className="my-3 p-3 text-center bg-[#faf8f5] border border-slate-800 rounded-xl font-mono text-sm text-white shadow-2xs">
            <span className="block font-mono bg-slate-950 text-white px-3 py-1.5 my-2 rounded text-xs overflow-x-auto border border-slate-800"> \left\lfloor\frac&#123;n&#125;&#123;2&#125;\right\rfloor-1 </span>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Leaf nodes occupy:
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            n / 2 through n - 1
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            using integer division and zero-based indexing.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Why?
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Every leaf has no children, so there is no need to maintain a parent-child heap relationship below it.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            This property is especially useful for building a heap efficiently.
          </p>
          <h3 className="text-lg font-bold text-white mt-6 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>3.4 Height of a binary heap</span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            A heap is a complete binary tree.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Its height is:
          </p>
          <div className="my-3 p-3 text-center bg-[#faf8f5] border border-slate-800 rounded-xl font-mono text-sm text-white shadow-2xs">
            <span className="block font-mono bg-slate-950 text-white px-3 py-1.5 my-2 rounded text-xs overflow-x-auto border border-slate-800"> h=\lfloor\log_2 n\rfloor </span>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Therefore, moving from a leaf toward the root or from the root toward a leaf requires at most:
          </p>
          <div className="my-3 p-3 text-center bg-[#faf8f5] border border-slate-800 rounded-xl font-mono text-sm text-white shadow-2xs">
            <span className="block font-mono bg-slate-950 text-white px-3 py-1.5 my-2 rounded text-xs overflow-x-auto border border-slate-800"> O(\log n) </span>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            steps.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            This is the reason most fundamental heap operations take logarithmic time.
          </p>
      </div>
    ),
  },
  {
    id: 4,
    title: "4. Heap Insertion & Sift Up (Bubble / Percolate Up)",
    category: "Part A · Sift Up Operations",
    anchor: "heap-insertion",
    content: (
      <div className="space-y-4">
          <h3 className="text-lg font-bold text-white mt-6 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>4.1 What is heap insertion?</span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Heap insertion means adding a new element while maintaining:
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            The complete binary tree property.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            The heap-order property.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Let&#39;s consider a Min Heap.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Initial heap:
          </p>
          <div className="p-4 rounded-xl bg-stone-900 text-orange-300 font-mono text-xs overflow-x-auto leading-tight border border-stone-800 my-4 shadow-inner">
            <div className="text-[10px] text-slate-400 uppercase tracking-widest font-bold pb-2 mb-2 border-b border-stone-800 font-sans">
              Heap & Balanced Tree Topology
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin] text-center sm:text-left">
              <code>{`10 / \\ 20 15 / \\ 40 30
Array:
[10, 20, 15, 40, 30]
Insert:
5`}</code>
            </pre>
          </div>
          <h3 className="text-lg font-bold text-white mt-6 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>4.2 Step 1 — Insert at the last position</span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            The new element must initially be placed at the next available position to preserve the complete binary tree structure.
          </p>
          <div className="p-4 rounded-xl bg-stone-900 text-orange-300 font-mono text-xs overflow-x-auto leading-tight border border-stone-800 my-4 shadow-inner">
            <div className="text-[10px] text-slate-400 uppercase tracking-widest font-bold pb-2 mb-2 border-b border-stone-800 font-sans">
              Heap & Balanced Tree Topology
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin] text-center sm:text-left">
              <code>{`10 / \\ 20 15 / \\ / 40 30 5
Array:
[10, 20, 15, 40, 30, 5]
But the Min Heap property is violated because:`}</code>
            </pre>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            5 &lt; 15
          </p>
          <h3 className="text-lg font-bold text-white mt-6 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>4.3 Step 2 — Sift Up</span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Sift Up is the process of moving a newly inserted element upward until the heap property is restored.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Also called:
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Bubble Up.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Percolate Up.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Compare 5 with its parent 15.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Swap them:
          </p>
          <div className="p-4 rounded-xl bg-stone-900 text-orange-300 font-mono text-xs overflow-x-auto leading-tight border border-stone-800 my-4 shadow-inner">
            <div className="text-[10px] text-slate-400 uppercase tracking-widest font-bold pb-2 mb-2 border-b border-stone-800 font-sans">
              Heap & Balanced Tree Topology
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin] text-center sm:text-left">
              <code>{`10 / \\ 20 5 / \\ / 40 30 15
Compare 5 with its new parent 10.
Since:`}</code>
            </pre>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            5 &lt; 10
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Swap again:
          </p>
          <div className="p-4 rounded-xl bg-stone-900 text-orange-300 font-mono text-xs overflow-x-auto leading-tight border border-stone-800 my-4 shadow-inner">
            <div className="text-[10px] text-slate-400 uppercase tracking-widest font-bold pb-2 mb-2 border-b border-stone-800 font-sans">
              Heap & Balanced Tree Topology
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin] text-center sm:text-left">
              <code>{`5 / \\ 20 10 / \\ / 40 30 15
Final array:
[5, 20, 10, 40, 30, 15]
The heap property is restored.
[DSA Tutorial - Hans' blog](https://images.openai.com/static-rsc-4/FCdk4coUBdR2x5FOj9ZZxd55LXwRA-1IQTkEdXEU9IU2gfFzKOK5ciDgItmmRZi4E4AgdnBgcN3EwmO3Zw21_QkruHZp7zi7lwfmfMPQV5qSItQulnwHAk7DJ4KwVmP9NkbWgfr-xHOBlTGmxpap_8_mCSQKloPTx_Cp3S_D8iU?purpose=inline)
[hans-tsai.github.io](https://hans-tsai.github.io/hans_blog/coding_interview/geeks_for_geeks/dsa_tutorial/?utm_source=chatgpt.com)`}</code>
            </pre>
          </div>
          <h3 className="text-lg font-bold text-white mt-6 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>4.4 Java implementation — Min Heap insertion</span>
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`import java.util.ArrayList;
class MinHeap  {
  ArrayList<Integer> heap = new ArrayList<>();
  void insert(int value)  {
    heap.add(value);
    int index = heap.size() - 1;
    while (index > 0)  {
      int parent = (index - 1) / 2;
      if (heap.get(index) < heap.get(parent))  {
        int temp = heap.get(index);
        heap.set(index, heap.get(parent));
        heap.set(parent, temp);
        index = parent;

      }
      else  {
        break;

      }

    }

  }
  void display()  {
    System.out.println(heap);

  }

}`}</code>
            </pre>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Usage:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public class Main  {
  public static void main(String[] args)  {
    MinHeap heap = new MinHeap();
    heap.insert(10);
    heap.insert(20);
    heap.insert(15);
    heap.insert(5);
    heap.display();

  }

}`}</code>
            </pre>
          </div>
          <div className="p-3 my-2 rounded-lg bg-[#f4f2ed] border border-[#e2ded5] text-xs font-mono text-slate-200 flex items-start gap-2">
            <span className="text-orange-400 font-bold uppercase tracking-wider text-[10px]">Output:</span>
            <span></span>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            [5, 10, 15, 20]
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            The internal array represents a valid Min Heap.
          </p>
          <h3 className="text-lg font-bold text-white mt-6 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>4.5 Insertion complexity</span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            The newly inserted element may travel from the last level to the root.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Maximum height:
          </p>
          <div className="my-3 p-3 text-center bg-[#faf8f5] border border-slate-800 rounded-xl font-mono text-sm text-white shadow-2xs">
            <span className="block font-mono bg-slate-950 text-white px-3 py-1.5 my-2 rounded text-xs overflow-x-auto border border-slate-800"> O(\log n) </span>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Therefore:
          </p>
          <div className="overflow-x-auto my-4 rounded-xl border border-slate-800 shadow-2xs">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-white border-b border-slate-800 font-semibold">
                <tr>
                  <th className="px-4 py-3">Operation</th>
                  <th className="px-4 py-3">Complexity</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">Insert</td>
                  <td className="px-4 py-2.5 text-slate-300"><code className="font-mono text-orange-400 bg-orange-500/15 px-1 py-0.5 rounded text-xs border border-orange-100">O(\log n)</code></td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">Find minimum in Min Heap</td>
                  <td className="px-4 py-2.5 text-slate-300"><code className="font-mono text-orange-400 bg-orange-500/15 px-1 py-0.5 rounded text-xs border border-orange-100">O(1)</code></td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">Find maximum in Max Heap</td>
                  <td className="px-4 py-2.5 text-slate-300"><code className="font-mono text-orange-400 bg-orange-500/15 px-1 py-0.5 rounded text-xs border border-orange-100">O(1)</code></td>
                </tr>
              </tbody>
            </table>
          </div>
      </div>
    ),
  },
  {
    id: 5,
    title: "5. Heap Deletion & Sift Down (Extract Root)",
    category: "Part A · Sift Down Operations",
    anchor: "heap-deletion",
    content: (
      <div className="space-y-4">
          <h3 className="text-lg font-bold text-white mt-6 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>5.1 What is heap deletion?</span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            The common heap deletion operation removes the root element.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            For:
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Min Heap: Remove the minimum.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Max Heap: Remove the maximum.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Why remove the root?
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Because the root contains the highest-priority element according to the heap&#39;s ordering.
          </p>
          <h3 className="text-lg font-bold text-white mt-6 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>5.2 Example — Delete root from a Min Heap</span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Initial heap:
          </p>
          <div className="p-4 rounded-xl bg-stone-900 text-orange-300 font-mono text-xs overflow-x-auto leading-tight border border-stone-800 my-4 shadow-inner">
            <div className="text-[10px] text-slate-400 uppercase tracking-widest font-bold pb-2 mb-2 border-b border-stone-800 font-sans">
              Heap & Balanced Tree Topology
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin] text-center sm:text-left">
              <code>{`5 / \\ 10 15 / \\ / 20 30 40
Array:
[5, 10, 15, 20, 30, 40]
Remove root 5.
Step 1 — Replace root with the last element
Take 40 and place it at the root.`}</code>
            </pre>
          </div>
          <div className="p-4 rounded-xl bg-stone-900 text-orange-300 font-mono text-xs overflow-x-auto leading-tight border border-stone-800 my-4 shadow-inner">
            <div className="text-[10px] text-slate-400 uppercase tracking-widest font-bold pb-2 mb-2 border-b border-stone-800 font-sans">
              Heap & Balanced Tree Topology
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin] text-center sm:text-left">
              <code>{`40 / \\ 10 15 / \\ 20 30
New array:
[40, 10, 15, 20, 30]
The complete tree property remains valid, but the heap order is violated.
Step 2 — Sift Down
Compare 40 with its children.`}</code>
            </pre>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            10 and 15
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Choose the smaller child, 10.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Swap 40 and 10.
          </p>
          <div className="p-4 rounded-xl bg-stone-900 text-orange-300 font-mono text-xs overflow-x-auto leading-tight border border-stone-800 my-4 shadow-inner">
            <div className="text-[10px] text-slate-400 uppercase tracking-widest font-bold pb-2 mb-2 border-b border-stone-800 font-sans">
              Heap & Balanced Tree Topology
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin] text-center sm:text-left">
              <code>{`10 / \\ 40 15 / \\ 20 30
Now compare 40 with its children:`}</code>
            </pre>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            20 and 30
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Choose 20.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Swap again.
          </p>
          <div className="p-4 rounded-xl bg-stone-900 text-orange-300 font-mono text-xs overflow-x-auto leading-tight border border-stone-800 my-4 shadow-inner">
            <div className="text-[10px] text-slate-400 uppercase tracking-widest font-bold pb-2 mb-2 border-b border-stone-800 font-sans">
              Heap & Balanced Tree Topology
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin] text-center sm:text-left">
              <code>{`10 / \\ 20 15 / \\ 40 30
The heap property has been restored.
Final array:
[10, 20, 15, 40, 30]
[Introduction to Priority Queues using Binary Heaps | Techie Delight](https://images.openai.com/static-rsc-4/AJ4cMH9WcN4mHbvK-HXxiizpUYrcMTU1tsV8YXs1g_fQZauXXByPHPes3Fn2AaCybQdIMQBoLGKy70wNj_AX2US-Spu7DKknGNeLNH3yZL9hfAIWvKUKow_H8WI_Wt0aoKT0b9fptRZ9_E9LKe4vsQuV3dGVanWqxJ0Js_hNpsI?purpose=inline)
[techiedelight.com](https://www.techiedelight.com/introduction-priority-queues-using-binary-heaps/?utm_source=chatgpt.com)`}</code>
            </pre>
          </div>
          <h3 className="text-lg font-bold text-white mt-6 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>5.3 Java implementation — Extract minimum</span>
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`import java.util.*;
class MinHeap  {
  ArrayList<Integer> heap = new ArrayList<>();
  int extractMin()  {
    if (heap.isEmpty())  {
      throw new NoSuchElementException("Heap is empty");

    }
    int minimum = heap.get(0);
    int last = heap.remove(heap.size() - 1);
    if (!heap.isEmpty())  {
      heap.set(0, last);
      heapifyDown(0);

    }
    return minimum;

  }
  void heapifyDown(int index)  {
    int size = heap.size();
    while (true)  {
      int smallest = index;
      int left = 2 * index + 1;
      int right = 2 * index + 2;
      if (left < size && heap.get(left) < heap.get(smallest))  {
        smallest = left;

      }
      if (right < size && heap.get(right) < heap.get(smallest))  {
        smallest = right;

      }
      if (smallest == index)  {
        break;

      }
      int temp = heap.get(index);
      heap.set(index, heap.get(smallest));
      heap.set(smallest, temp);
      index = smallest;

    }

  }

}
This example focuses on deletion and assumes the heap was valid before extraction.`}</code>
            </pre>
          </div>
          <h3 className="text-lg font-bold text-white mt-6 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>5.4 Heap insertion vs deletion</span>
          </h3>
          <div className="overflow-x-auto my-4 rounded-xl border border-slate-800 shadow-2xs">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-white border-b border-slate-800 font-semibold">
                <tr>
                  <th className="px-4 py-3">Feature</th>
                  <th className="px-4 py-3">Insertion</th>
                  <th className="px-4 py-3">Root deletion</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">Initial position</td>
                  <td className="px-4 py-2.5 text-slate-300">Last available position</td>
                  <td className="px-4 py-2.5 text-slate-300">Root</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">First action</td>
                  <td className="px-4 py-2.5 text-slate-300">Append new element</td>
                  <td className="px-4 py-2.5 text-slate-300">Move last element to root</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">Restoration</td>
                  <td className="px-4 py-2.5 text-slate-300">Sift Up</td>
                  <td className="px-4 py-2.5 text-slate-300">Sift Down</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">Time</td>
                  <td className="px-4 py-2.5 text-slate-300"><code className="font-mono text-orange-400 bg-orange-500/15 px-1 py-0.5 rounded text-xs border border-orange-100">O(\log n)</code></td>
                  <td className="px-4 py-2.5 text-slate-300"><code className="font-mono text-orange-400 bg-orange-500/15 px-1 py-0.5 rounded text-xs border border-orange-100">O(\log n)</code></td>
                </tr>
              </tbody>
            </table>
          </div>
      </div>
    ),
  },
  {
    id: 6,
    title: "6. Heapify Algorithm & Subtree Heap Restoration",
    category: "Part A · Subtree Repair",
    anchor: "heapify",
    content: (
      <div className="space-y-4">
          <h3 className="text-lg font-bold text-white mt-6 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>6.1 What is Heapify?</span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Heapify is the process of restoring the heap property in a subtree.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            In a common bottom-up implementation, we use a sift-down operation to repair a node whose child subtrees are already heaps.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Consider a Max Heap candidate:
          </p>
          <div className="p-4 rounded-xl bg-stone-900 text-orange-300 font-mono text-xs overflow-x-auto leading-tight border border-stone-800 my-4 shadow-inner">
            <div className="text-[10px] text-slate-400 uppercase tracking-widest font-bold pb-2 mb-2 border-b border-stone-800 font-sans">
              Heap & Balanced Tree Topology
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin] text-center sm:text-left">
              <code>{`10 / \\ 30 20
The children satisfy their own conditions, but the root violates the Max Heap property.
We compare:
10, 30, 20
The largest element is 30.
Swap 10 and 30.
Result:`}</code>
            </pre>
          </div>
          <div className="p-4 rounded-xl bg-stone-900 text-orange-300 font-mono text-xs overflow-x-auto leading-tight border border-stone-800 my-4 shadow-inner">
            <div className="text-[10px] text-slate-400 uppercase tracking-widest font-bold pb-2 mb-2 border-b border-stone-800 font-sans">
              Heap & Balanced Tree Topology
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin] text-center sm:text-left">
              <code>{`30 / \\ 10 20
Now the heap property is restored.`}</code>
            </pre>
          </div>
          <h3 className="text-lg font-bold text-white mt-6 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>6.2 Heapify algorithm</span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            For a Max Heap:
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Find the left child.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Find the right child.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Identify the largest value among the parent and existing children.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            If a child is larger, swap.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Continue downward from the swapped position.
          </p>
          <h3 className="text-lg font-bold text-white mt-6 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>6.3 Java implementation — Max Heapify</span>
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`static void maxHeapify(int[] arr, int n, int i)  {
  int largest = i;
  int left = 2 * i + 1;
  int right = 2 * i + 2;
  if (left < n && arr[left] > arr[largest])  {
    largest = left;

  }
  if (right < n && arr[right] > arr[largest])  {
    largest = right;

  }
  if (largest != i)  {
    int temp = arr[i];
    arr[i] = arr[largest];
    arr[largest] = temp;
    maxHeapify(arr, n, largest);

  }

}`}</code>
            </pre>
          </div>
          <h3 className="text-lg font-bold text-white mt-6 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>6.4 Complexity</span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            A heapify operation may travel from a node to the bottom of the tree.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Therefore:
          </p>
          <div className="my-3 p-3 text-center bg-[#faf8f5] border border-slate-800 rounded-xl font-mono text-sm text-white shadow-2xs">
            <span className="block font-mono bg-slate-950 text-white px-3 py-1.5 my-2 rounded text-xs overflow-x-auto border border-slate-800"> O(\log n) </span>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            This is different from the complexity of building an entire heap, which is explained next.
          </p>
      </div>
    ),
  },
  {
    id: 7,
    title: "7. Build Heap: Bottom-Up Construction & Linear O(n) Proof",
    category: "Part A · Linear Construction",
    anchor: "build-heap",
    content: (
      <div className="space-y-4">
          <h3 className="text-lg font-bold text-white mt-6 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>7.1 What is Build Heap?</span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Build Heap means converting an ordinary unsorted array into a valid binary heap.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Suppose the input array is:
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            [4, 10, 3, 5, 1]
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            We want to construct a Max Heap.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Final valid heap array:
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            [10, 5, 3, 4, 1]
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Tree representation:
          </p>
          <div className="p-4 rounded-xl bg-stone-900 text-orange-300 font-mono text-xs overflow-x-auto leading-tight border border-stone-800 my-4 shadow-inner">
            <div className="text-[10px] text-slate-400 uppercase tracking-widest font-bold pb-2 mb-2 border-b border-stone-800 font-sans">
              Heap & Balanced Tree Topology
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin] text-center sm:text-left">
              <code>{`10 / \\ 5 3 / \\ 4 1`}</code>
            </pre>
          </div>
          <h3 className="text-lg font-bold text-white mt-6 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>7.2 Two ways to build a heap</span>
          </h3>
          <h4 className="text-base font-semibold text-slate-200 mt-4 mb-2 text-white flex items-center gap-2">
        <span className="text-xs px-2 py-0.5 rounded bg-amber-100 text-amber-800 font-mono">Method 1</span>
        <span>Repeated insertion</span>
      </h4>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Insert every array element one by one.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Each insertion can take:
          </p>
          <div className="my-3 p-3 text-center bg-[#faf8f5] border border-slate-800 rounded-xl font-mono text-sm text-white shadow-2xs">
            <span className="block font-mono bg-slate-950 text-white px-3 py-1.5 my-2 rounded text-xs overflow-x-auto border border-slate-800"> O(\log n) </span>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Total:
          </p>
          <div className="my-3 p-3 text-center bg-[#faf8f5] border border-slate-800 rounded-xl font-mono text-sm text-white shadow-2xs">
            <span className="block font-mono bg-slate-950 text-white px-3 py-1.5 my-2 rounded text-xs overflow-x-auto border border-slate-800"> O(n\log n) </span>
          </div>
          <h4 className="text-base font-semibold text-slate-200 mt-4 mb-2 text-white flex items-center gap-2">
        <span className="text-xs px-2 py-0.5 rounded bg-amber-100 text-amber-800 font-mono">Method 2</span>
        <span>Bottom-up heap construction</span>
      </h4>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Start from the last non-leaf node and call heapify on every node, moving toward the root.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Last non-leaf index:
          </p>
          <div className="my-3 p-3 text-center bg-[#faf8f5] border border-slate-800 rounded-xl font-mono text-sm text-white shadow-2xs">
            <span className="block font-mono bg-slate-950 text-white px-3 py-1.5 my-2 rounded text-xs overflow-x-auto border border-slate-800"> \left\lfloor\frac&#123;n&#125;&#123;2&#125;\right\rfloor-1 </span>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            This approach runs in:
          </p>
          <div className="my-3 p-3 text-center bg-[#faf8f5] border border-slate-800 rounded-xl font-mono text-sm text-white shadow-2xs">
            <span className="block font-mono bg-slate-950 text-white px-3 py-1.5 my-2 rounded text-xs overflow-x-auto border border-slate-800"> O(n) </span>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            It is more efficient.
          </p>
          <h3 className="text-lg font-bold text-white mt-6 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>7.3 Step-by-step construction</span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Input:
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            [4, 10, 3, 5, 1]
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Array indices:
          </p>
          <div className="p-4 rounded-xl bg-stone-900 text-orange-300 font-mono text-xs overflow-x-auto leading-tight border border-stone-800 my-4 shadow-inner">
            <div className="text-[10px] text-slate-400 uppercase tracking-widest font-bold pb-2 mb-2 border-b border-stone-800 font-sans">
              Heap & Balanced Tree Topology
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin] text-center sm:text-left">
              <code>{`Index: 0 1 2 3 4 Value: 4 10 3 5 1
Last non-leaf index:
\\[ \\lfloor5/2\\rfloor-1=1 \\]
Start from index 1.
Heapify index 1`}</code>
            </pre>
          </div>
          <div className="p-4 rounded-xl bg-stone-900 text-orange-300 font-mono text-xs overflow-x-auto leading-tight border border-stone-800 my-4 shadow-inner">
            <div className="text-[10px] text-slate-400 uppercase tracking-widest font-bold pb-2 mb-2 border-b border-stone-800 font-sans">
              Heap & Balanced Tree Topology
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin] text-center sm:text-left">
              <code>{`10 / \\ 5 1
No change is necessary because 10 is already larger than its children.
Heapify index 0
Current tree:`}</code>
            </pre>
          </div>
          <div className="p-4 rounded-xl bg-stone-900 text-orange-300 font-mono text-xs overflow-x-auto leading-tight border border-stone-800 my-4 shadow-inner">
            <div className="text-[10px] text-slate-400 uppercase tracking-widest font-bold pb-2 mb-2 border-b border-stone-800 font-sans">
              Heap & Balanced Tree Topology
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin] text-center sm:text-left">
              <code>{`4 / \\ 10 3 / \\ 5 1
The largest child is 10.
Swap:`}</code>
            </pre>
          </div>
          <div className="p-4 rounded-xl bg-stone-900 text-orange-300 font-mono text-xs overflow-x-auto leading-tight border border-stone-800 my-4 shadow-inner">
            <div className="text-[10px] text-slate-400 uppercase tracking-widest font-bold pb-2 mb-2 border-b border-stone-800 font-sans">
              Heap & Balanced Tree Topology
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin] text-center sm:text-left">
              <code>{`10 / \\ 4 3 / \\ 5 1
Now heapify the subtree rooted at 4.
Compare 4 with 5 and 1.
Swap 4 with 5.
Final:`}</code>
            </pre>
          </div>
          <div className="p-4 rounded-xl bg-stone-900 text-orange-300 font-mono text-xs overflow-x-auto leading-tight border border-stone-800 my-4 shadow-inner">
            <div className="text-[10px] text-slate-400 uppercase tracking-widest font-bold pb-2 mb-2 border-b border-stone-800 font-sans">
              Heap & Balanced Tree Topology
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin] text-center sm:text-left">
              <code>{`10 / \\ 5 3 / \\ 4 1
Array:
[10, 5, 3, 4, 1]`}</code>
            </pre>
          </div>
          <h3 className="text-lg font-bold text-white mt-6 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>7.4 Java implementation — Build Max Heap</span>
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`static void buildMaxHeap(int[] arr)  {
  int n = arr.length;
  for (int i = n / 2 - 1; i >= 0; i--)  {
    maxHeapify(arr, n, i);

  }

}`}</code>
            </pre>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Usage:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public class Main  {
  public static void main(String[] args)  {
    int[] arr =  {
      4, 10, 3, 5, 1
    };
    buildMaxHeap(arr);
    System.out.println(Arrays.toString(arr));

  }

}`}</code>
            </pre>
          </div>
          <div className="p-3 my-2 rounded-lg bg-[#f4f2ed] border border-[#e2ded5] text-xs font-mono text-slate-200 flex items-start gap-2">
            <span className="text-orange-400 font-bold uppercase tracking-wider text-[10px]">Output:</span>
            <span></span>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            [10, 5, 3, 4, 1]
          </p>
          <h3 className="text-lg font-bold text-white mt-6 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>7.5 Why is Build Heap O(n) instead of O(n log n)?</span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            This is an important interview question.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Although a single heapify can take <code className="font-mono text-orange-400 bg-orange-500/15 px-1 py-0.5 rounded text-xs border border-orange-100">O(\log n)</code>, most nodes are near the bottom of the tree and require very little work.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Approximately half the nodes are leaves and require no heapify work.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Approximately one-quarter are one level above the leaves.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Approximately one-eighth are two levels above the leaves.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Only a small number of nodes are near the root and can travel through many levels.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            The total work across all nodes is linear.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Therefore:
          </p>
          <div className="my-3 p-3 text-center bg-[#faf8f5] border border-slate-800 rounded-xl font-mono text-sm text-white shadow-2xs">
            <span className="block font-mono bg-slate-950 text-white px-3 py-1.5 my-2 rounded text-xs overflow-x-auto border border-slate-800"> BuildHeap=O(n) </span>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            The classical bottom-up heap construction analysis also establishes this linear bound.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            BPB US+1
          </p>
          <h3 className="text-lg font-bold text-white mt-6 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>7.6 Complexity comparison</span>
          </h3>
          <div className="overflow-x-auto my-4 rounded-xl border border-slate-800 shadow-2xs">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-white border-b border-slate-800 font-semibold">
                <tr>
                  <th className="px-4 py-3">Method</th>
                  <th className="px-4 py-3">Complexity</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">Repeated insertion</td>
                  <td className="px-4 py-2.5 text-slate-300"><code className="font-mono text-orange-400 bg-orange-500/15 px-1 py-0.5 rounded text-xs border border-orange-100">O(n\log n)</code></td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">Bottom-up Build Heap</td>
                  <td className="px-4 py-2.5 text-slate-300"><code className="font-mono text-orange-400 bg-orange-500/15 px-1 py-0.5 rounded text-xs border border-orange-100">O(n)</code></td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">Single Heapify</td>
                  <td className="px-4 py-2.5 text-slate-300"><code className="font-mono text-orange-400 bg-orange-500/15 px-1 py-0.5 rounded text-xs border border-orange-100">O(\log n)</code></td>
                </tr>
              </tbody>
            </table>
          </div>
      </div>
    ),
  },
  {
    id: 8,
    title: "8. Heap Sort: In-Place O(n log n) Comparison Sorting",
    category: "Part A · Sorting Algorithms",
    anchor: "heap-sort",
    content: (
      <div className="space-y-4">
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Important Sorting Algorithm
          </p>
          <h3 className="text-lg font-bold text-white mt-6 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>8.1 What is Heap Sort?</span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Heap Sort is a comparison-based sorting algorithm that uses a binary heap to arrange array elements in sorted order.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            It commonly uses a Max Heap to sort an array in ascending order.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            The main idea:
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Convert the array into a Max Heap.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            The largest element is now at index 0.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Swap the root with the last element.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Reduce the active heap size.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Heapify the root again.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Repeat until the array is sorted.
          </p>
          <h3 className="text-lg font-bold text-white mt-6 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>8.2 Example</span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Input:
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            [4, 10, 3, 5, 1]
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Build a Max Heap:
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            [10, 5, 3, 4, 1]
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Move the largest element 10 to the end.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            [1, 5, 3, 4, 10]
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Restore Max Heap in the first four positions:
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            [5, 4, 3, 1, 10]
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Move 5 to the next final position:
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            [1, 4, 3, 5, 10]
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Heapify:
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            [4, 1, 3, 5, 10]
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Move 4:
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            [3, 1, 4, 5, 10]
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Continue until:
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            [1, 3, 4, 5, 10]
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            The array is sorted in ascending order.
          </p>
          <h3 className="text-lg font-bold text-white mt-6 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>8.3 Java implementation</span>
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`import java.util.Arrays;
public class HeapSort  {
  static void heapify(int[] arr, int n, int i)  {
    int largest = i;
    int left = 2 * i + 1;
    int right = 2 * i + 2;
    if (left < n && arr[left] > arr[largest])  {
      largest = left;

    }
    if (right < n && arr[right] > arr[largest])  {
      largest = right;

    }
    if (largest != i)  {
      int temp = arr[i];
      arr[i] = arr[largest];
      arr[largest] = temp;
      heapify(arr, n, largest);

    }

  }
  static void heapSort(int[] arr)  {
    int n = arr.length;
    // Build max heap for (int i = n / 2 - 1; i >= 0; i--)  {
      heapify(arr, n, i);

    }
    // Extract maximum repeatedly for (int i = n - 1; i > 0; i--)  {
      int temp = arr[0];
      arr[0] = arr[i];
      arr[i] = temp;
      heapify(arr, i, 0);

    }

  }
  public static void main(String[] args)  {
    int[] arr =  {
      4, 10, 3, 5, 1
    };
    heapSort(arr);
    System.out.println(Arrays.toString(arr));

  }

}`}</code>
            </pre>
          </div>
          <div className="p-3 my-2 rounded-lg bg-[#f4f2ed] border border-[#e2ded5] text-xs font-mono text-slate-200 flex items-start gap-2">
            <span className="text-orange-400 font-bold uppercase tracking-wider text-[10px]">Output:</span>
            <span></span>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            [1, 3, 4, 5, 10]
          </p>
          <h3 className="text-lg font-bold text-white mt-6 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>8.4 Heap Sort complexity</span>
          </h3>
          <div className="overflow-x-auto my-4 rounded-xl border border-slate-800 shadow-2xs">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-white border-b border-slate-800 font-semibold">
                <tr>
                  <th className="px-4 py-3">Case</th>
                  <th className="px-4 py-3">Time</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">Best</td>
                  <td className="px-4 py-2.5 text-slate-300"><code className="font-mono text-orange-400 bg-orange-500/15 px-1 py-0.5 rounded text-xs border border-orange-100">O(n\log n)</code></td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">Average</td>
                  <td className="px-4 py-2.5 text-slate-300"><code className="font-mono text-orange-400 bg-orange-500/15 px-1 py-0.5 rounded text-xs border border-orange-100">O(n\log n)</code></td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">Worst</td>
                  <td className="px-4 py-2.5 text-slate-300"><code className="font-mono text-orange-400 bg-orange-500/15 px-1 py-0.5 rounded text-xs border border-orange-100">O(n\log n)</code></td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Auxiliary space
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            <code className="font-mono text-orange-400 bg-orange-500/15 px-1 py-0.5 rounded text-xs border border-orange-100">O(1)</code> for this iterative/in-place algorithm
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Heap Sort is:
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            In-place.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Comparison-based.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Not stable.
          </p>
          <h3 className="text-lg font-bold text-white mt-6 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>8.5 Heap Sort vs Quick Sort vs Merge Sort</span>
          </h3>
          <div className="overflow-x-auto my-4 rounded-xl border border-slate-800 shadow-2xs">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-white border-b border-slate-800 font-semibold">
                <tr>
                  <th className="px-4 py-3">Feature</th>
                  <th className="px-4 py-3">Heap Sort</th>
                  <th className="px-4 py-3">Quick Sort</th>
                  <th className="px-4 py-3">Merge Sort</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">Best time</td>
                  <td className="px-4 py-2.5 text-slate-300"><code className="font-mono text-orange-400 bg-orange-500/15 px-1 py-0.5 rounded text-xs border border-orange-100">O(n\log n)</code></td>
                  <td className="px-4 py-2.5 text-slate-300"><code className="font-mono text-orange-400 bg-orange-500/15 px-1 py-0.5 rounded text-xs border border-orange-100">O(n\log n)</code></td>
                  <td className="px-4 py-2.5 text-slate-300"><code className="font-mono text-orange-400 bg-orange-500/15 px-1 py-0.5 rounded text-xs border border-orange-100">O(n\log n)</code></td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">Average time</td>
                  <td className="px-4 py-2.5 text-slate-300"><code className="font-mono text-orange-400 bg-orange-500/15 px-1 py-0.5 rounded text-xs border border-orange-100">O(n\log n)</code></td>
                  <td className="px-4 py-2.5 text-slate-300"><code className="font-mono text-orange-400 bg-orange-500/15 px-1 py-0.5 rounded text-xs border border-orange-100">O(n\log n)</code></td>
                  <td className="px-4 py-2.5 text-slate-300"><code className="font-mono text-orange-400 bg-orange-500/15 px-1 py-0.5 rounded text-xs border border-orange-100">O(n\log n)</code></td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">Worst time</td>
                  <td className="px-4 py-2.5 text-slate-300"><code className="font-mono text-orange-400 bg-orange-500/15 px-1 py-0.5 rounded text-xs border border-orange-100">O(n\log n)</code></td>
                  <td className="px-4 py-2.5 text-slate-300"><code className="font-mono text-orange-400 bg-orange-500/15 px-1 py-0.5 rounded text-xs border border-orange-100">O(n^2)</code></td>
                  <td className="px-4 py-2.5 text-slate-300"><code className="font-mono text-orange-400 bg-orange-500/15 px-1 py-0.5 rounded text-xs border border-orange-100">O(n\log n)</code></td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">Extra space</td>
                  <td className="px-4 py-2.5 text-slate-300"><code className="font-mono text-orange-400 bg-orange-500/15 px-1 py-0.5 rounded text-xs border border-orange-100">O(1)</code> for standard array version</td>
                  <td className="px-4 py-2.5 text-slate-300">Typically <code className="font-mono text-orange-400 bg-orange-500/15 px-1 py-0.5 rounded text-xs border border-orange-100">O(\log n)</code> stack</td>
                  <td className="px-4 py-2.5 text-slate-300"><code className="font-mono text-orange-400 bg-orange-500/15 px-1 py-0.5 rounded text-xs border border-orange-100">O(n)</code></td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">Stable</td>
                  <td className="px-4 py-2.5 text-slate-300">No</td>
                  <td className="px-4 py-2.5 text-slate-300">No</td>
                  <td className="px-4 py-2.5 text-slate-300">Yes</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">Main technique</td>
                  <td className="px-4 py-2.5 text-slate-300">Heap</td>
                  <td className="px-4 py-2.5 text-slate-300">Partitioning</td>
                  <td className="px-4 py-2.5 text-slate-300">Divide and conquer</td>
                </tr>
              </tbody>
            </table>
          </div>
          <h3 className="text-lg font-bold text-white mt-6 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>8.6 Applications of Heap Sort</span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Sorting when guaranteed <code className="font-mono text-orange-400 bg-orange-500/15 px-1 py-0.5 rounded text-xs border border-orange-100">O(n\log n)</code> worst-case time is important.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            In-place sorting when auxiliary array memory is limited.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Understanding priority-based selection algorithms.
          </p>
      </div>
    ),
  },
  {
    id: 9,
    title: "9. Java PriorityQueue: API Internals, Comparators & Traps",
    category: "Part A · Java Collections",
    anchor: "java-priority-queue",
    content: (
      <div className="space-y-4">
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Very Important Java Topic
          </p>
          <h3 className="text-lg font-bold text-white mt-6 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>9.1 What is PriorityQueue?</span>
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`PriorityQueue is a Java collection that processes elements according to priority rather than normal insertion order. It is implemented using a priority heap. By default, the smallest element has the highest priority when natural ordering is used. In other words: Java PriorityQueue behaves as a Min Heap by default. The current Java API documentation specifies logarithmic insertion and removal, constant-time retrieval of the head, and no guaranteed ordering when iterating through the queue. Oracle Docs`}</code>
            </pre>
          </div>
          <h3 className="text-lg font-bold text-white mt-6 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>9.2 Creating a Min PriorityQueue</span>
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`import java.util.*;
public class Main  {
  public static void main(String[] args)  {
    PriorityQueue<Integer> pq = new PriorityQueue<>();
    pq.offer(40);
    pq.offer(10);
    pq.offer(30);
    pq.offer(20);
    System.out.println(pq.peek());

  }

}`}</code>
            </pre>
          </div>
          <div className="p-3 my-2 rounded-lg bg-[#f4f2ed] border border-[#e2ded5] text-xs font-mono text-slate-200 flex items-start gap-2">
            <span className="text-orange-400 font-bold uppercase tracking-wider text-[10px]">Output:</span>
            <span></span>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            10
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            The smallest element is at the head.
          </p>
          <h3 className="text-lg font-bold text-white mt-6 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>9.3 Important PriorityQueue methods</span>
          </h3>
          <div className="overflow-x-auto my-4 rounded-xl border border-slate-800 shadow-2xs">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-white border-b border-slate-800 font-semibold">
                <tr>
                  <th className="px-4 py-3">Method</th>
                  <th className="px-4 py-3">Meaning</th>
                  <th className="px-4 py-3">Typical complexity</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">offer()</td>
                  <td className="px-4 py-2.5 text-slate-300">Insert an element</td>
                  <td className="px-4 py-2.5 text-slate-300"><code className="font-mono text-orange-400 bg-orange-500/15 px-1 py-0.5 rounded text-xs border border-orange-100">O(\log n)</code></td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">add()</td>
                  <td className="px-4 py-2.5 text-slate-300">Insert an element</td>
                  <td className="px-4 py-2.5 text-slate-300"><code className="font-mono text-orange-400 bg-orange-500/15 px-1 py-0.5 rounded text-xs border border-orange-100">O(\log n)</code></td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">poll()</td>
                  <td className="px-4 py-2.5 text-slate-300">Remove head</td>
                  <td className="px-4 py-2.5 text-slate-300"><code className="font-mono text-orange-400 bg-orange-500/15 px-1 py-0.5 rounded text-xs border border-orange-100">O(\log n)</code></td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">peek()</td>
                  <td className="px-4 py-2.5 text-slate-300">View head</td>
                  <td className="px-4 py-2.5 text-slate-300"><code className="font-mono text-orange-400 bg-orange-500/15 px-1 py-0.5 rounded text-xs border border-orange-100">O(1)</code></td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">remove()</td>
                  <td className="px-4 py-2.5 text-slate-300">Remove head</td>
                  <td className="px-4 py-2.5 text-slate-300"><code className="font-mono text-orange-400 bg-orange-500/15 px-1 py-0.5 rounded text-xs border border-orange-100">O(\log n)</code></td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">contains()</td>
                  <td className="px-4 py-2.5 text-slate-300">Check an element</td>
                  <td className="px-4 py-2.5 text-slate-300"><code className="font-mono text-orange-400 bg-orange-500/15 px-1 py-0.5 rounded text-xs border border-orange-100">O(n)</code></td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">size()</td>
                  <td className="px-4 py-2.5 text-slate-300">Number of elements</td>
                  <td className="px-4 py-2.5 text-slate-300"><code className="font-mono text-orange-400 bg-orange-500/15 px-1 py-0.5 rounded text-xs border border-orange-100">O(1)</code></td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">isEmpty()</td>
                  <td className="px-4 py-2.5 text-slate-300">Check whether empty</td>
                  <td className="px-4 py-2.5 text-slate-300"><code className="font-mono text-orange-400 bg-orange-500/15 px-1 py-0.5 rounded text-xs border border-orange-100">O(1)</code></td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            These are the documented implementation costs for Java&#39;s PriorityQueue.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Oracle Docs+1
          </p>
          <h3 className="text-lg font-bold text-white mt-6 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>9.4 Min Heap vs Max Heap in Java</span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Min Heap:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`PriorityQueue<Integer> minHeap = new PriorityQueue<>();
Max Heap: PriorityQueue<Integer> maxHeap = new PriorityQueue<>( Comparator.reverseOrder() );`}</code>
            </pre>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Example:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public class Main  {
  public static void main(String[] args)  {
    PriorityQueue<Integer> maxHeap = new PriorityQueue<>( Comparator.reverseOrder() );
    maxHeap.offer(10);
    maxHeap.offer(50);
    maxHeap.offer(30);
    maxHeap.offer(20);
    System.out.println(maxHeap.peek());
    while (!maxHeap.isEmpty())  {
      System.out.println(maxHeap.poll());

    }

  }

}`}</code>
            </pre>
          </div>
          <div className="p-3 my-2 rounded-lg bg-[#f4f2ed] border border-[#e2ded5] text-xs font-mono text-slate-200 flex items-start gap-2">
            <span className="text-orange-400 font-bold uppercase tracking-wider text-[10px]">Output:</span>
            <span></span>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            50 50 30 20 10
          </p>
          <h3 className="text-lg font-bold text-white mt-6 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>9.5 Iterating through PriorityQueue</span>
          </h3>
          <div className="p-4 my-3 rounded-xl bg-orange-500/15/60 border border-orange-500/30/80 text-orange-950 text-xs sm:text-sm leading-relaxed flex items-start gap-3">
            <span className="text-orange-400 font-bold shrink-0 mt-0.5">âš </span>
            <div>Important mistake:</div>
          </div>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`for (int num : pq)  {
  System.out.println(num);

}
This does not guarantee sorted order. A PriorityQueue guarantees that its head is the highest-priority element according to its ordering, not that every iteration returns elements in priority order. To retrieve elements in priority order, repeatedly use: while (!pq.isEmpty())  {
  System.out.println(pq.poll());

}
This removes elements from the queue. The Oracle documentation explicitly warns that the iterator does not provide priority-ordered traversal. Oracle Docs`}</code>
            </pre>
          </div>
          <h3 className="text-lg font-bold text-white mt-6 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>9.6 PriorityQueue with custom objects</span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Consider students with different marks.
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`class Student  {
  String name;
  int marks;
  Student(String name, int marks)  {
    this.name = name;
    this.marks = marks;

  }

}
Create a PriorityQueue ordered by marks: PriorityQueue<Student> pq = new PriorityQueue<>( Comparator.comparingInt(s -> s.marks) );
Insert: pq.offer(new Student("Rahul", 85));
pq.offer(new Student("Priya", 95));
pq.offer(new Student("Aman", 70));
The student with the smallest marks will be removed first. For highest marks first: PriorityQueue<Student> pq = new PriorityQueue<>( Comparator.comparingInt( (Student s) -> s.marks ).reversed() );`}</code>
            </pre>
          </div>
          <h3 className="text-lg font-bold text-white mt-6 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>9.7 Important PriorityQueue characteristics</span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Allows duplicate elements.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Does not allow null elements.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Does not guarantee insertion order.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Uses natural ordering or a supplied Comparator.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Is not synchronized.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Does not guarantee that iteration is sorted.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            For concurrent priority-queue access where multiple threads modify the queue, Java also provides PriorityBlockingQueue.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Oracle Docs
          </p>
      </div>
    ),
  },
  {
    id: 10,
    title: "10. Kth Largest & Kth Smallest Elements (Optimal Sized Heaps)",
    category: "Part A · Interview Patterns",
    anchor: "kth-elements",
    content: (
      <div className="space-y-4">
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Important Interview Pattern
          </p>
          <h3 className="text-lg font-bold text-white mt-6 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>10.1 Finding the Kth largest element</span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Problem:
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Given an unsorted array, find the Kth largest element.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Example:
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Array = [3, 2, 1, 5, 6, 4] K = 2
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Sorted in descending order:
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            6, 5, 4, 3, 2, 1
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            The second-largest element is:
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            5
          </p>
          <h3 className="text-lg font-bold text-white mt-6 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>10.2 Approach 1 — Sorting</span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Sort the array in descending order.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Then return the element at index:
          </p>
          <div className="my-3 p-3 text-center bg-[#faf8f5] border border-slate-800 rounded-xl font-mono text-sm text-white shadow-2xs">
            <span className="block font-mono bg-slate-950 text-white px-3 py-1.5 my-2 rounded text-xs overflow-x-auto border border-slate-800"> k-1 </span>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Time complexity:
          </p>
          <div className="my-3 p-3 text-center bg-[#faf8f5] border border-slate-800 rounded-xl font-mono text-sm text-white shadow-2xs">
            <span className="block font-mono bg-slate-950 text-white px-3 py-1.5 my-2 rounded text-xs overflow-x-auto border border-slate-800"> O(n\log n) </span>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            This works, but it sorts the entire array even though we only need one element.
          </p>
          <h3 className="text-lg font-bold text-white mt-6 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>10.3 Approach 2 — Min Heap of size K</span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            This is an important interview optimization.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Use a Min Heap containing at most K elements.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Algorithm:
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Create an empty Min Heap.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Insert every array element.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Whenever its size exceeds K, remove the smallest element.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            After processing all elements, the root represents the Kth largest element.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Why does this work?
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            We continuously remove elements that cannot belong to the largest K elements.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            For:
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            [3, 2, 1, 5, 6, 4]
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Let:
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            K = 2
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Process:
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Inserted
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Heap after removing excess
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            3
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            [3]
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            2
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            [2, 3]
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            1
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            [2, 3]
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            5
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            [3, 5]
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            6
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            [5, 6]
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            4
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            [5, 6]
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Final Min Heap:
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            5 / 6
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            The root is 5.
          </p>
          <h3 className="text-lg font-bold text-white mt-6 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>10.4 Java implementation</span>
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`import java.util.*;
public class Main  {
  static int findKthLargest(int[] nums, int k)  {
    if (k < 1 || k > nums.length)  {
      throw new IllegalArgumentException("Invalid k");

    }
    PriorityQueue<Integer> minHeap = new PriorityQueue<>();
    for (int num : nums)  {
      minHeap.offer(num);
      if (minHeap.size() > k)  {
        minHeap.poll();

      }

    }
    return minHeap.peek();

  }
  public static void main(String[] args)  {
    int[] nums =  {
      3, 2, 1, 5, 6, 4
    };
    System.out.println(findKthLargest(nums, 2));

  }

}`}</code>
            </pre>
          </div>
          <div className="p-3 my-2 rounded-lg bg-[#f4f2ed] border border-[#e2ded5] text-xs font-mono text-slate-200 flex items-start gap-2">
            <span className="text-orange-400 font-bold uppercase tracking-wider text-[10px]">Output:</span>
            <span></span>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            5
          </p>
          <h3 className="text-lg font-bold text-white mt-6 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>10.5 Complexity</span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Each insertion or removal costs <code className="font-mono text-orange-400 bg-orange-500/15 px-1 py-0.5 rounded text-xs border border-orange-100">O(\log k)</code>, and the heap never contains more than K elements.
          </p>
          <div className="my-3 p-3 text-center bg-[#faf8f5] border border-slate-800 rounded-xl font-mono text-sm text-white shadow-2xs">
            <span className="block font-mono bg-slate-950 text-white px-3 py-1.5 my-2 rounded text-xs overflow-x-auto border border-slate-800"> Time=O(n\log k) </span>
          </div>
          <div className="my-3 p-3 text-center bg-[#faf8f5] border border-slate-800 rounded-xl font-mono text-sm text-white shadow-2xs">
            <span className="block font-mono bg-slate-950 text-white px-3 py-1.5 my-2 rounded text-xs overflow-x-auto border border-slate-800"> Space=O(k) </span>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            This is often more efficient than sorting when K is small compared with N.
          </p>
          <h3 className="text-lg font-bold text-white mt-6 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>10.6 Finding the Kth smallest element</span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            We can reverse the approach.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Use a Max Heap of size K.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            For each element:
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Insert it.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            If heap size exceeds K, remove the largest.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            At the end, the root is the Kth smallest element.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Java:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`static int findKthSmallest(int[] nums, int k)  {
  if (k < 1 || k > nums.length)  {
    throw new IllegalArgumentException("Invalid k");

  }
  PriorityQueue<Integer> maxHeap = new PriorityQueue<>(Comparator.reverseOrder());
  for (int num : nums)  {
    maxHeap.offer(num);
    if (maxHeap.size() > k)  {
      maxHeap.poll();

    }

  }
  return maxHeap.peek();

}`}</code>
            </pre>
          </div>
          <h3 className="text-lg font-bold text-white mt-6 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>10.7 Kth largest vs Kth smallest</span>
          </h3>
          <div className="overflow-x-auto my-4 rounded-xl border border-slate-800 shadow-2xs">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-white border-b border-slate-800 font-semibold">
                <tr>
                  <th className="px-4 py-3">Problem</th>
                  <th className="px-4 py-3">Heap type</th>
                  <th className="px-4 py-3">Heap size</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">Kth largest</td>
                  <td className="px-4 py-2.5 text-slate-300">Min Heap</td>
                  <td className="px-4 py-2.5 text-slate-300">K</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">Kth smallest</td>
                  <td className="px-4 py-2.5 text-slate-300">Max Heap</td>
                  <td className="px-4 py-2.5 text-slate-300">K</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">Largest K elements</td>
                  <td className="px-4 py-2.5 text-slate-300">Min Heap</td>
                  <td className="px-4 py-2.5 text-slate-300">K</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">Smallest K elements</td>
                  <td className="px-4 py-2.5 text-slate-300">Max Heap</td>
                  <td className="px-4 py-2.5 text-slate-300">K</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="p-4 my-3 rounded-xl bg-orange-500/15/60 border border-orange-500/30/80 text-orange-950 text-xs sm:text-sm leading-relaxed flex items-start gap-3">
            <span className="text-orange-400 font-bold shrink-0 mt-0.5">âš </span>
            <div>Interview trick: Use the opposite heap to remove unwanted elements.</div>
          </div>
      </div>
    ),
  },
  {
    id: 11,
    title: "11. Top K Frequent Elements (HashMap + Min Heap - LeetCode 347)",
    category: "Part A · Frequency Patterns",
    anchor: "top-k-frequent",
    content: (
      <div className="space-y-4">
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Popular Interview Problem — LeetCode 347
          </p>
          <h3 className="text-lg font-bold text-white mt-6 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>11.1 Problem statement</span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Given an integer array, return the K most frequent elements.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Input:
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            nums = [1, 1, 1, 2, 2, 3] k = 2
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Frequency:
          </p>
          <div className="overflow-x-auto my-4 rounded-xl border border-slate-800 shadow-2xs">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-white border-b border-slate-800 font-semibold">
                <tr>
                  <th className="px-4 py-3">Element</th>
                  <th className="px-4 py-3">Frequency</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">1</td>
                  <td className="px-4 py-2.5 text-slate-300">3</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">2</td>
                  <td className="px-4 py-2.5 text-slate-300">2</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">3</td>
                  <td className="px-4 py-2.5 text-slate-300">1</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="p-3 my-2 rounded-lg bg-[#f4f2ed] border border-[#e2ded5] text-xs font-mono text-slate-200 flex items-start gap-2">
            <span className="text-orange-400 font-bold uppercase tracking-wider text-[10px]">Output:</span>
            <span></span>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            [1, 2]
          </p>
          <h3 className="text-lg font-bold text-white mt-6 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>11.2 Approach</span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            This problem combines two data structures:
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            HashMap.
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`PriorityQueue. First, use HashMap to calculate frequencies. Then use a Min Heap to keep the K elements with the highest frequencies.`}</code>
            </pre>
          </div>
          <h3 className="text-lg font-bold text-white mt-6 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>11.3 Step-by-step example</span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Input:
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            [1, 1, 1, 2, 2, 3]
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Frequency map:
          </p>
          <div className="p-4 rounded-xl bg-stone-900 text-orange-300 font-mono text-xs overflow-x-auto leading-tight border border-stone-800 my-4 shadow-inner">
            <div className="text-[10px] text-slate-400 uppercase tracking-widest font-bold pb-2 mb-2 border-b border-stone-800 font-sans">
              Heap & Balanced Tree Topology
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin] text-center sm:text-left">
              <code>{`1 -> 3 2 -> 2 3 -> 1
Now maintain a heap of size 2.
Insert element 1:
1(3)
Insert element 2:
1(3), 2(2)
Insert element 3:
3(1), 2(2), 1(3)
The heap now contains three elements, but we need only two.
Remove the least frequent element:
3(1)
Remaining:
1(3), 2(2)
Final result:
[1, 2]`}</code>
            </pre>
          </div>
          <h3 className="text-lg font-bold text-white mt-6 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>11.4 Java implementation</span>
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`import java.util.*;
public class Main  {
  static int[] topKFrequent(int[] nums, int k)  {
    if (k < 1)  {
      throw new IllegalArgumentException("Invalid k");

    }
    HashMap<Integer, Integer> frequency = new HashMap<>();
    for (int num : nums)  {
      frequency.put( num, frequency.getOrDefault(num, 0) + 1 );

    }
    PriorityQueue<Integer> minHeap = new PriorityQueue<>( (a, b) -> Integer.compare( frequency.get(a), frequency.get(b) ) );
    for (int num : frequency.keySet())  {
      minHeap.offer(num);
      if (minHeap.size() > k)  {
        minHeap.poll();

      }

    }
    int[] result = new int[k];
    for (int i = 0; i < k; i++)  {
      result[i] = minHeap.poll();

    }
    return result;

  }

}
The problem assumes that K does not exceed the number of distinct elements. The resulting array is not guaranteed to be ordered from most frequent to least frequent.`}</code>
            </pre>
          </div>
          <h3 className="text-lg font-bold text-white mt-6 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>11.5 Complexity</span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Let:
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            N = total number of array elements.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            M = number of distinct elements.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            K = requested number of frequent elements.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Frequency counting:
          </p>
          <div className="my-3 p-3 text-center bg-[#faf8f5] border border-slate-800 rounded-xl font-mono text-sm text-white shadow-2xs">
            <span className="block font-mono bg-slate-950 text-white px-3 py-1.5 my-2 rounded text-xs overflow-x-auto border border-slate-800"> O(n) </span>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Heap processing:
          </p>
          <div className="my-3 p-3 text-center bg-[#faf8f5] border border-slate-800 rounded-xl font-mono text-sm text-white shadow-2xs">
            <span className="block font-mono bg-slate-950 text-white px-3 py-1.5 my-2 rounded text-xs overflow-x-auto border border-slate-800"> O(m\log k) </span>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Total:
          </p>
          <div className="my-3 p-3 text-center bg-[#faf8f5] border border-slate-800 rounded-xl font-mono text-sm text-white shadow-2xs">
            <span className="block font-mono bg-slate-950 text-white px-3 py-1.5 my-2 rounded text-xs overflow-x-auto border border-slate-800"> O(n+m\log k) </span>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Additional space:
          </p>
          <div className="my-3 p-3 text-center bg-[#faf8f5] border border-slate-800 rounded-xl font-mono text-sm text-white shadow-2xs">
            <span className="block font-mono bg-slate-950 text-white px-3 py-1.5 my-2 rounded text-xs overflow-x-auto border border-slate-800"> O(m+k) </span>
          </div>
          <h3 className="text-lg font-bold text-white mt-6 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>11.6 When is this pattern useful?</span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Use this pattern when the problem says:
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Find top K frequent elements.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Find the K most common words.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Find the K most popular products.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Find the most visited pages.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Find the K highest-scoring candidates.
          </p>
      </div>
    ),
  },
  {
    id: 12,
    title: "12. Merge K Sorted Lists (K-Way Merge Heap - LeetCode 23)",
    category: "Part A · Multi-Way Merge",
    anchor: "merge-k-sorted-lists",
    content: (
      <div className="space-y-4">
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Advanced — LeetCode 23
          </p>
          <h3 className="text-lg font-bold text-white mt-6 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>12.1 Problem statement</span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            You are given K sorted linked lists.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Merge them into one sorted linked list.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Example:
          </p>
          <div className="p-4 rounded-xl bg-stone-900 text-orange-300 font-mono text-xs overflow-x-auto leading-tight border border-stone-800 my-4 shadow-inner">
            <div className="text-[10px] text-slate-400 uppercase tracking-widest font-bold pb-2 mb-2 border-b border-stone-800 font-sans">
              Heap & Balanced Tree Topology
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin] text-center sm:text-left">
              <code>{`List 1: 1 -> 4 -> 5 List 2: 1 -> 3 -> 4 List 3: 2 -> 6
Expected output:`}</code>
            </pre>
          </div>
          <div className="p-4 rounded-xl bg-stone-900 text-orange-300 font-mono text-xs overflow-x-auto leading-tight border border-stone-800 my-4 shadow-inner">
            <div className="text-[10px] text-slate-400 uppercase tracking-widest font-bold pb-2 mb-2 border-b border-stone-800 font-sans">
              Heap & Balanced Tree Topology
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin] text-center sm:text-left">
              <code>{`1 -> 1 -> 2 -> 3 -> 4 -> 4 -> 5 -> 6`}</code>
            </pre>
          </div>
          <h3 className="text-lg font-bold text-white mt-6 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>12.2 Why is this difficult?</span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            We have K separately sorted lists.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            A simple approach is to combine all elements and sort them.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            But this wastes the ordering already present in the lists.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Instead, we can use a Min Heap.
          </p>
          <h3 className="text-lg font-bold text-white mt-6 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>12.3 Heap approach</span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            The key idea:
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            At any moment, we only need to compare the first unprocessed node of each list.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Why?
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Because every list is already sorted.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            The smallest remaining value must be one of those K head nodes.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Algorithm:
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Insert the first node from every non-empty list into a Min Heap.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Remove the smallest node.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Attach it to the result list.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Insert its next node, if one exists.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Repeat until the heap is empty.
          </p>
          <h3 className="text-lg font-bold text-white mt-6 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>12.4 Dry run</span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Initial lists:
          </p>
          <div className="p-4 rounded-xl bg-stone-900 text-orange-300 font-mono text-xs overflow-x-auto leading-tight border border-stone-800 my-4 shadow-inner">
            <div className="text-[10px] text-slate-400 uppercase tracking-widest font-bold pb-2 mb-2 border-b border-stone-800 font-sans">
              Heap & Balanced Tree Topology
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin] text-center sm:text-left">
              <code>{`1 -> 4 -> 5 1 -> 3 -> 4 2 -> 6
Initial heap:
[1, 1, 2]
Remove 1 from the first list.
Insert its next node 4.
Heap:
[1, 2, 4]
Remove 1 from the second list.
Insert its next node 3.
Heap:
[2, 3, 4]
Remove 2 from the third list.
Insert 6.
Heap:
[3, 4, 6]
Continue until every node has been processed.
Final list:`}</code>
            </pre>
          </div>
          <div className="p-4 rounded-xl bg-stone-900 text-orange-300 font-mono text-xs overflow-x-auto leading-tight border border-stone-800 my-4 shadow-inner">
            <div className="text-[10px] text-slate-400 uppercase tracking-widest font-bold pb-2 mb-2 border-b border-stone-800 font-sans">
              Heap & Balanced Tree Topology
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin] text-center sm:text-left">
              <code>{`1 -> 1 -> 2 -> 3 -> 4 -> 4 -> 5 -> 6`}</code>
            </pre>
          </div>
          <h3 className="text-lg font-bold text-white mt-6 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>12.5 Java implementation</span>
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`import java.util.*;
class ListNode  {
  int val;
  ListNode next;
  ListNode(int val)  {
    this.val = val;

  }

}
class Main  {
  static ListNode mergeKLists(ListNode[] lists)  {
    PriorityQueue<ListNode> minHeap = new PriorityQueue<>( Comparator.comparingInt(node -> node.val) );
    for (ListNode node : lists)  {
      if (node != null)  {
        minHeap.offer(node);

      }

    }
    ListNode dummy = new ListNode(0);
    ListNode current = dummy;
    while (!minHeap.isEmpty())  {
      ListNode smallest = minHeap.poll();
      current.next = smallest;
      current = current.next;
      if (smallest.next != null)  {
        minHeap.offer(smallest.next);

      }

    }
    return dummy.next;

  }

}`}</code>
            </pre>
          </div>
          <h3 className="text-lg font-bold text-white mt-6 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>12.6 Understanding the dummy node</span>
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`ListNode dummy = new ListNode(0);
This is a helper node used to make linked-list construction simpler. We attach every selected node after: current.next = smallest;
The actual result begins at: dummy.next`}</code>
            </pre>
          </div>
          <h3 className="text-lg font-bold text-white mt-6 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>12.7 Complexity</span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Let:
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            K = number of lists.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            N = total number of nodes across all lists.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Each node is inserted and removed from the heap once.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Heap size never exceeds K.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Therefore:
          </p>
          <div className="my-3 p-3 text-center bg-[#faf8f5] border border-slate-800 rounded-xl font-mono text-sm text-white shadow-2xs">
            <span className="block font-mono bg-slate-950 text-white px-3 py-1.5 my-2 rounded text-xs overflow-x-auto border border-slate-800"> Time=O(N\log K) </span>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Additional heap space:
          </p>
          <div className="my-3 p-3 text-center bg-[#faf8f5] border border-slate-800 rounded-xl font-mono text-sm text-white shadow-2xs">
            <span className="block font-mono bg-slate-950 text-white px-3 py-1.5 my-2 rounded text-xs overflow-x-auto border border-slate-800"> O(K) </span>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            The output reuses the original linked-list nodes, so no additional output-node allocation is required.
          </p>
          <h3 className="text-lg font-bold text-white mt-6 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>12.8 Real-world applications</span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Merging sorted database streams.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Combining log files.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Merging search results.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Merging sorted external files.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Processing distributed data.
          </p>
      </div>
    ),
  },
  {
    id: 13,
    title: "13. Find Median from Data Stream (Two Heaps Balancing - LeetCode 295)",
    category: "Part A · Dual Heap Streaming",
    anchor: "median-data-stream",
    content: (
      <div className="space-y-4">
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Advanced — LeetCode 295
          </p>
          <h3 className="text-lg font-bold text-white mt-6 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>13.1 Problem statement</span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Numbers arrive continuously in a data stream.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            After every insertion, we need to find the median of all values received so far.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Example:
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Insert: 5 Median: 5 Insert: 2 Median: 3.5 Insert: 10 Median: 5 Insert: 4 Median: 4.5
          </p>
          <h3 className="text-lg font-bold text-white mt-6 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>13.2 What is a median?</span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            The median is the middle value of a sorted collection.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            For an odd number of elements:
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            [1, 3, 5]
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Median:
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            3
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            For an even number of elements:
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            [1, 3, 5, 7]
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Median:
          </p>
          <div className="my-3 p-3 text-center bg-[#faf8f5] border border-slate-800 rounded-xl font-mono text-sm text-white shadow-2xs">
            <span className="block font-mono bg-slate-950 text-white px-3 py-1.5 my-2 rounded text-xs overflow-x-auto border border-slate-800"> \frac&#123;3+5&#125;&#123;2&#125;=4 </span>
          </div>
          <h3 className="text-lg font-bold text-white mt-6 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>13.3 Why not sort after every insertion?</span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Suppose 100,000 values arrive continuously.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Sorting the entire collection every time is expensive.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            We need a structure that keeps the middle values readily available.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            This is where two heaps are used.
          </p>
          <h3 className="text-lg font-bold text-white mt-6 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>13.4 Two-heap approach</span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Maintain:
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Lower half — Max Heap
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Contains the smaller half of the numbers.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Its root gives the largest value in the lower half.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Upper half — Min Heap
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Contains the larger half of the numbers.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Its root gives the smallest value in the upper half.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Example:
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Numbers:
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            [1, 2, 3, 4, 5]
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Lower half:
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            [1, 2]
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Upper half:
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            [3, 4, 5]
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Conceptually:
          </p>
          <div className="p-4 rounded-xl bg-stone-900 text-orange-300 font-mono text-xs overflow-x-auto leading-tight border border-stone-800 my-4 shadow-inner">
            <div className="text-[10px] text-slate-400 uppercase tracking-widest font-bold pb-2 mb-2 border-b border-stone-800 font-sans">
              Heap & Balanced Tree Topology
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin] text-center sm:text-left">
              <code>{`Max Heap: Min Heap: 2 3 / / \\ 1 4 5
The two middle boundary elements are:`}</code>
            </pre>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            2 and 3
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Since the total size is odd, the upper half contains one additional element.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Median:
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            3
          </p>
          <h3 className="text-lg font-bold text-white mt-6 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>13.5 Balancing rules</span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Maintain these two conditions:
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            The size difference between the heaps is never greater than one.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Every value in the lower half is less than or equal to every value in the upper half.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            We can choose either heap to contain the extra element. In the implementation below, the lower Max Heap contains the extra element when the total size is odd.
          </p>
          <h3 className="text-lg font-bold text-white mt-6 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>13.6 Median calculation</span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            If both heaps have the same size:
          </p>
          <div className="my-3 p-3 text-center bg-[#faf8f5] border border-slate-800 rounded-xl font-mono text-sm text-white shadow-2xs">
            <span className="block font-mono bg-slate-950 text-white px-3 py-1.5 my-2 rounded text-xs overflow-x-auto border border-slate-800"> Median=\frac&#123;lower.max+upper.min&#125;&#123;2&#125; </span>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            If the Max Heap contains one extra element:
          </p>
          <div className="my-3 p-3 text-center bg-[#faf8f5] border border-slate-800 rounded-xl font-mono text-sm text-white shadow-2xs">
            <span className="block font-mono bg-slate-950 text-white px-3 py-1.5 my-2 rounded text-xs overflow-x-auto border border-slate-800"> Median=lower.max </span>
          </div>
          <h3 className="text-lg font-bold text-white mt-6 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>13.7 Java implementation</span>
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`import java.util.*;
class MedianFinder  {
  PriorityQueue<Integer> lower;
  PriorityQueue<Integer> upper;
  MedianFinder()  {
    // Max Heap for smaller half lower = new PriorityQueue<>( Comparator.reverseOrder() );
    // Min Heap for larger half upper = new PriorityQueue<>();

  }
  void addNum(int num)  {
    lower.offer(num);
    // Move largest from lower to upper if (!upper.isEmpty() && lower.peek() > upper.peek())  {
      upper.offer(lower.poll());

    }
    // Keep lower equal in size or one larger if (lower.size() > upper.size() + 1)  {
      upper.offer(lower.poll());

    }
    else if (upper.size() > lower.size())  {
      lower.offer(upper.poll());

    }

  }
  double findMedian()  {
    if (lower.size() == upper.size())  {
      return ((double) lower.peek() + upper.peek()) / 2.0;

    }
    return lower.peek();

  }

}`}</code>
            </pre>
          </div>
          <h3 className="text-lg font-bold text-white mt-6 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>13.8 Usage</span>
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public class Main  {
  public static void main(String[] args)  {
    MedianFinder mf = new MedianFinder();
    mf.addNum(5);
    System.out.println(mf.findMedian());
    mf.addNum(2);
    System.out.println(mf.findMedian());
    mf.addNum(10);
    System.out.println(mf.findMedian());
    mf.addNum(4);
    System.out.println(mf.findMedian());

  }

}`}</code>
            </pre>
          </div>
          <div className="p-3 my-2 rounded-lg bg-[#f4f2ed] border border-[#e2ded5] text-xs font-mono text-slate-200 flex items-start gap-2">
            <span className="text-orange-400 font-bold uppercase tracking-wider text-[10px]">Output:</span>
            <span></span>
          </div>
          <h3 className="text-lg font-bold text-white mt-6 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>5.0 3.5 5.0 4.5</span>
          </h3>
          <h3 className="text-lg font-bold text-white mt-6 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>13.9 Complexity</span>
          </h3>
          <div className="overflow-x-auto my-4 rounded-xl border border-slate-800 shadow-2xs">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-white border-b border-slate-800 font-semibold">
                <tr>
                  <th className="px-4 py-3">Operation</th>
                  <th className="px-4 py-3">Complexity</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">Add number</td>
                  <td className="px-4 py-2.5 text-slate-300"><code className="font-mono text-orange-400 bg-orange-500/15 px-1 py-0.5 rounded text-xs border border-orange-100">O(\log n)</code></td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">Find median</td>
                  <td className="px-4 py-2.5 text-slate-300"><code className="font-mono text-orange-400 bg-orange-500/15 px-1 py-0.5 rounded text-xs border border-orange-100">O(1)</code></td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">Space</td>
                  <td className="px-4 py-2.5 text-slate-300"><code className="font-mono text-orange-400 bg-orange-500/15 px-1 py-0.5 rounded text-xs border border-orange-100">O(n)</code></td>
                </tr>
              </tbody>
            </table>
          </div>
          <h3 className="text-lg font-bold text-white mt-6 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>13.10 Real-world applications</span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Financial transaction monitoring.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Online statistical analysis.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Monitoring network latency.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Real-time analytics.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Streaming sensor data.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Measuring changing response times.
          </p>
          <div className="p-4 my-3 rounded-xl bg-orange-500/15/60 border border-orange-500/30/80 text-orange-950 text-xs sm:text-sm leading-relaxed flex items-start gap-3">
            <span className="text-orange-400 font-bold shrink-0 mt-0.5">âš </span>
            <div>Important interview lesson: Whenever a problem asks for the continuously changing median of incoming numbers, think about using two heaps.</div>
          </div>
      </div>
    ),
  },
  {
    id: 14,
    title: "14. Binary Heap Comprehensive Complexity Matrix",
    category: "Part A · Complexity Benchmark",
    anchor: "heap-complexity",
    content: (
      <div className="space-y-4">
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            This is an important revision table.
          </p>
          <div className="overflow-x-auto my-4 rounded-xl border border-slate-800 shadow-2xs">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-white border-b border-slate-800 font-semibold">
                <tr>
                  <th className="px-4 py-3">Operation</th>
                  <th className="px-4 py-3">Min Heap</th>
                  <th className="px-4 py-3">Max Heap</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">Access root</td>
                  <td className="px-4 py-2.5 text-slate-300"><code className="font-mono text-orange-400 bg-orange-500/15 px-1 py-0.5 rounded text-xs border border-orange-100">O(1)</code></td>
                  <td className="px-4 py-2.5 text-slate-300"><code className="font-mono text-orange-400 bg-orange-500/15 px-1 py-0.5 rounded text-xs border border-orange-100">O(1)</code></td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">Insert</td>
                  <td className="px-4 py-2.5 text-slate-300"><code className="font-mono text-orange-400 bg-orange-500/15 px-1 py-0.5 rounded text-xs border border-orange-100">O(\log n)</code></td>
                  <td className="px-4 py-2.5 text-slate-300"><code className="font-mono text-orange-400 bg-orange-500/15 px-1 py-0.5 rounded text-xs border border-orange-100">O(\log n)</code></td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">Remove root</td>
                  <td className="px-4 py-2.5 text-slate-300"><code className="font-mono text-orange-400 bg-orange-500/15 px-1 py-0.5 rounded text-xs border border-orange-100">O(\log n)</code></td>
                  <td className="px-4 py-2.5 text-slate-300"><code className="font-mono text-orange-400 bg-orange-500/15 px-1 py-0.5 rounded text-xs border border-orange-100">O(\log n)</code></td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">Heapify one node</td>
                  <td className="px-4 py-2.5 text-slate-300"><code className="font-mono text-orange-400 bg-orange-500/15 px-1 py-0.5 rounded text-xs border border-orange-100">O(\log n)</code></td>
                  <td className="px-4 py-2.5 text-slate-300"><code className="font-mono text-orange-400 bg-orange-500/15 px-1 py-0.5 rounded text-xs border border-orange-100">O(\log n)</code></td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">Build Heap</td>
                  <td className="px-4 py-2.5 text-slate-300"><code className="font-mono text-orange-400 bg-orange-500/15 px-1 py-0.5 rounded text-xs border border-orange-100">O(n)</code></td>
                  <td className="px-4 py-2.5 text-slate-300"><code className="font-mono text-orange-400 bg-orange-500/15 px-1 py-0.5 rounded text-xs border border-orange-100">O(n)</code></td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">Search arbitrary element</td>
                  <td className="px-4 py-2.5 text-slate-300"><code className="font-mono text-orange-400 bg-orange-500/15 px-1 py-0.5 rounded text-xs border border-orange-100">O(n)</code></td>
                  <td className="px-4 py-2.5 text-slate-300"><code className="font-mono text-orange-400 bg-orange-500/15 px-1 py-0.5 rounded text-xs border border-orange-100">O(n)</code></td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">Heap Sort</td>
                  <td className="px-4 py-2.5 text-slate-300"><code className="font-mono text-orange-400 bg-orange-500/15 px-1 py-0.5 rounded text-xs border border-orange-100">O(n\log n)</code></td>
                  <td className="px-4 py-2.5 text-slate-300"><code className="font-mono text-orange-400 bg-orange-500/15 px-1 py-0.5 rounded text-xs border border-orange-100">O(n\log n)</code></td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Space:
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Array representation: <code className="font-mono text-orange-400 bg-orange-500/15 px-1 py-0.5 rounded text-xs border border-orange-100">O(n)</code>.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Sift-up and sift-down iteratively: <code className="font-mono text-orange-400 bg-orange-500/15 px-1 py-0.5 rounded text-xs border border-orange-100">O(1)</code> auxiliary space.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Recursive heapify: up to <code className="font-mono text-orange-400 bg-orange-500/15 px-1 py-0.5 rounded text-xs border border-orange-100">O(\log n)</code> call-stack space.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Part B — Advanced Balanced Trees
          </p>
      </div>
    ),
  },
  {
    id: 15,
    title: "15. Why Do We Need Advanced Balanced Trees? Degeneracy & Height",
    category: "Part B · Self-Balancing Motivation",
    anchor: "why-balanced-trees",
    content: (
      <div className="space-y-4">
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            In Module 12, we studied Binary Search Trees.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            A normal BST follows:
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Left &lt; Root &lt; Right
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            It provides efficient search when the tree remains reasonably balanced.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            But there is a problem.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Suppose we insert:
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            10, 20, 30, 40, 50, 60
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            into an ordinary BST.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            The resulting tree may become:
          </p>
          <div className="p-4 rounded-xl bg-stone-900 text-orange-300 font-mono text-xs overflow-x-auto leading-tight border border-stone-800 my-4 shadow-inner">
            <div className="text-[10px] text-slate-400 uppercase tracking-widest font-bold pb-2 mb-2 border-b border-stone-800 font-sans">
              Heap & Balanced Tree Topology
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin] text-center sm:text-left">
              <code>{`10 \\ 20 \\ 30 \\ 40 \\ 50 \\ 60
This tree is skewed.
Its height becomes:
\\[ O(n) \\]
Searching can also become:
\\[ O(n) \\]
This defeats the main advantage of a BST.`}</code>
            </pre>
          </div>
          <h3 className="text-lg font-bold text-white mt-6 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>15.1 The solution: Self-balancing BSTs</span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            A self-balancing BST automatically adjusts its structure after insertion or deletion to prevent excessive height.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Two important examples:
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            AVL Tree.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Red-Black Tree.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Both preserve the BST ordering property.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Both provide logarithmic worst-case search, insertion, and deletion.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Their balancing rules are different.
          </p>
      </div>
    ),
  },
  {
    id: 16,
    title: "16. AVL Trees & Balance Factors (|BF| <= 1)",
    category: "Part B · AVL Foundations",
    anchor: "avl-trees",
    content: (
      <div className="space-y-4">
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Advanced Tree Concept
          </p>
          <h3 className="text-lg font-bold text-white mt-6 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>16.1 What is an AVL Tree?</span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            An AVL Tree is a self-balancing Binary Search Tree.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            It was introduced by Adelson-Velsky and Landis.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            The main rule:
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            For every node, the difference between the height of its left subtree and right subtree must be at most one.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Formally:
          </p>
          <div className="my-3 p-3 text-center bg-[#faf8f5] border border-slate-800 rounded-xl font-mono text-sm text-white shadow-2xs">
            <span className="block font-mono bg-slate-950 text-white px-3 py-1.5 my-2 rounded text-xs overflow-x-auto border border-slate-800"> |Height(left)-Height(right)|\leq1 </span>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            An AVL tree maintains this condition after insertions and deletions through rotations.
          </p>
          <h3 className="text-lg font-bold text-white mt-6 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>16.2 Balance Factor</span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            The Balance Factor measures the difference between the heights of the left and right subtrees.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            We use:
          </p>
          <div className="my-3 p-3 text-center bg-[#faf8f5] border border-slate-800 rounded-xl font-mono text-sm text-white shadow-2xs">
            <span className="block font-mono bg-slate-950 text-white px-3 py-1.5 my-2 rounded text-xs overflow-x-auto border border-slate-800"> BF=Height(left)-Height(right) </span>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            For a valid AVL tree:
          </p>
          <div className="my-3 p-3 text-center bg-[#faf8f5] border border-slate-800 rounded-xl font-mono text-sm text-white shadow-2xs">
            <span className="block font-mono bg-slate-950 text-white px-3 py-1.5 my-2 rounded text-xs overflow-x-auto border border-slate-800"> BF\in\&#123;-1,0,1\&#125; </span>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Interpretation:
          </p>
          <div className="overflow-x-auto my-4 rounded-xl border border-slate-800 shadow-2xs">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-white border-b border-slate-800 font-semibold">
                <tr>
                  <th className="px-4 py-3">Balance factor</th>
                  <th className="px-4 py-3">Meaning</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">-1</td>
                  <td className="px-4 py-2.5 text-slate-300">Right subtree is one level taller</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">0</td>
                  <td className="px-4 py-2.5 text-slate-300">Both subtree heights are equal</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">+1</td>
                  <td className="px-4 py-2.5 text-slate-300">Left subtree is one level taller</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">-2</td>
                  <td className="px-4 py-2.5 text-slate-300">Right-heavy imbalance</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">+2</td>
                  <td className="px-4 py-2.5 text-slate-300">Left-heavy imbalance</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            A balance factor of +2 or -2 indicates that rebalancing is required.
          </p>
          <h3 className="text-lg font-bold text-white mt-6 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>16.3 Example</span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Consider:
          </p>
          <div className="p-4 rounded-xl bg-stone-900 text-orange-300 font-mono text-xs overflow-x-auto leading-tight border border-stone-800 my-4 shadow-inner">
            <div className="text-[10px] text-slate-400 uppercase tracking-widest font-bold pb-2 mb-2 border-b border-stone-800 font-sans">
              Heap & Balanced Tree Topology
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin] text-center sm:text-left">
              <code>{`30 / \\ 20 40 / 10
For node 20:
Left height = 0 Right height = -1
So:
\\[ BF(20)=0-(-1)=1 \\]
For node 30:
Left height = 1 Right height = 0
Therefore:
\\[ BF(30)=1-0=1 \\]
Both nodes satisfy the AVL condition.
Now consider:`}</code>
            </pre>
          </div>
          <div className="p-4 rounded-xl bg-stone-900 text-orange-300 font-mono text-xs overflow-x-auto leading-tight border border-stone-800 my-4 shadow-inner">
            <div className="text-[10px] text-slate-400 uppercase tracking-widest font-bold pb-2 mb-2 border-b border-stone-800 font-sans">
              Heap & Balanced Tree Topology
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin] text-center sm:text-left">
              <code>{`30 / 20 / 10
For node 30:
Left height = 1 Right height = -1
Therefore:
\\[ BF(30)=2 \\]
This violates the AVL condition.
We must rotate the tree.`}</code>
            </pre>
          </div>
          <h3 className="text-lg font-bold text-white mt-6 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>16.4 Why AVL rotations are necessary</span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            A rotation rearranges a small portion of a tree while preserving the BST ordering property.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            It changes the shape of the tree without losing any values or violating their sorted order.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            The four major AVL cases are:
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            LL Rotation.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            RR Rotation.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            LR Rotation.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            RL Rotation.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            These are the core concepts of AVL balancing.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            CS201-OpenDSA Data Structures and Algorithms+1
          </p>
      </div>
    ),
  },
  {
    id: 17,
    title: "17. Four AVL Rotations: LL, RR, LR, and RL",
    category: "Part B · AVL Rotations",
    anchor: "avl-rotations",
    content: (
      <div className="space-y-4">
          <h3 className="text-lg font-bold text-white mt-6 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>17.1 Case 1 — LL Rotation (Left-Left)</span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            LL imbalance happens when a node becomes too heavy on the left because insertion occurred in the left subtree of its left child.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Example: Insert:
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            30, 20, 10
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Before balancing:
          </p>
          <div className="p-4 rounded-xl bg-stone-900 text-orange-300 font-mono text-xs overflow-x-auto leading-tight border border-stone-800 my-4 shadow-inner">
            <div className="text-[10px] text-slate-400 uppercase tracking-widest font-bold pb-2 mb-2 border-b border-stone-800 font-sans">
              Heap & Balanced Tree Topology
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin] text-center sm:text-left">
              <code>{`30 / 20 / 10
Node 30 becomes left-heavy.
Solution:
Perform a right rotation at node 30.
After rotation:`}</code>
            </pre>
          </div>
          <div className="p-4 rounded-xl bg-stone-900 text-orange-300 font-mono text-xs overflow-x-auto leading-tight border border-stone-800 my-4 shadow-inner">
            <div className="text-[10px] text-slate-400 uppercase tracking-widest font-bold pb-2 mb-2 border-b border-stone-800 font-sans">
              Heap & Balanced Tree Topology
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin] text-center sm:text-left">
              <code>{`20 / \\ 10 30
The tree becomes balanced.
[BSTLearner - Interactive Binary Search Tree Visualization | Prof. E. Kiss, HS KL](https://images.openai.com/static-rsc-4/CztU9PUQ9tfOnadTMmYSFh01zHD9ET9DT8osCNXyGleQdfYZATsiZ8swuqZ-i1I3WV3aXFbvlDhhQeDN-iGtrGt2r9CUhgY7sCummHDu4XpX8Wx5xVB3muo4ZJEChNFNwtn9PyeVxJTsK73FCAcEHdPL9Cw2XbkrtIDJxGTrIfU?purpose=inline)
[evamariakiss.de](https://www.evamariakiss.de/apps/bstlearner.php?utm_source=chatgpt.com)`}</code>
            </pre>
          </div>
          <h3 className="text-lg font-bold text-white mt-6 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>17.2 Java right rotation</span>
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`static Node rightRotate(Node y)  {
  Node x = y.left;
  Node T2 = x.right;
  // Rotate x.right = y;
  y.left = T2;
  // Update heights y.height = 1 + Math.max( height(y.left), height(y.right) );
  x.height = 1 + Math.max( height(x.left), height(x.right) );
  return x;

}`}</code>
            </pre>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Explanation:
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            x becomes the new subtree root.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            y becomes the right child of x.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            The middle subtree is reconnected.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Heights are updated.
          </p>
          <h3 className="text-lg font-bold text-white mt-6 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>17.3 Case 2 — RR Rotation (Right-Right)</span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            RR imbalance occurs when insertion happens in the right subtree of the right child.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Insert:
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            10, 20, 30
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Before balancing:
          </p>
          <div className="p-4 rounded-xl bg-stone-900 text-orange-300 font-mono text-xs overflow-x-auto leading-tight border border-stone-800 my-4 shadow-inner">
            <div className="text-[10px] text-slate-400 uppercase tracking-widest font-bold pb-2 mb-2 border-b border-stone-800 font-sans">
              Heap & Balanced Tree Topology
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin] text-center sm:text-left">
              <code>{`10 \\ 20 \\ 30
Perform a left rotation at node 10.
After rotation:`}</code>
            </pre>
          </div>
          <div className="p-4 rounded-xl bg-stone-900 text-orange-300 font-mono text-xs overflow-x-auto leading-tight border border-stone-800 my-4 shadow-inner">
            <div className="text-[10px] text-slate-400 uppercase tracking-widest font-bold pb-2 mb-2 border-b border-stone-800 font-sans">
              Heap & Balanced Tree Topology
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin] text-center sm:text-left">
              <code>{`20 / \\ 10 30
[PPT - AVL-Trees: Motivation PowerPoint Presentation, free download - ID:3807056](https://images.openai.com/static-rsc-4/3rPA56oHK7pwjNkTWY_O-8cXhRKGbWdRn6-1FN7-WBCHUXjyBXrznCuHwKsUr7NkYeciVZd-t4FEJ71fFMN7sWckywKqKCMvSvLqceA6-4rbDjFMAiRdstRt-mvGhvbDMIGJaTnhq4oZOiBNNCRip81VZ3tqUZk1_6i5N_nxGFk?purpose=inline)
[slideserve.com](https://www.slideserve.com/kacy/avl-trees-motivation-powerpoint-ppt-presentation?utm_source=chatgpt.com)
Java left rotation:`}</code>
            </pre>
          </div>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`static Node leftRotate(Node x)  {
  Node y = x.right;
  Node T2 = y.left;
  // Rotate y.left = x;
  x.right = T2;
  // Update heights x.height = 1 + Math.max( height(x.left), height(x.right) );
  y.height = 1 + Math.max( height(y.left), height(y.right) );
  return y;

}`}</code>
            </pre>
          </div>
          <h3 className="text-lg font-bold text-white mt-6 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>17.4 Case 3 — LR Rotation (Left-Right)</span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            This happens when insertion takes place in the right subtree of the left child.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Insert:
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            30, 10, 20
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Before balancing:
          </p>
          <div className="p-4 rounded-xl bg-stone-900 text-orange-300 font-mono text-xs overflow-x-auto leading-tight border border-stone-800 my-4 shadow-inner">
            <div className="text-[10px] text-slate-400 uppercase tracking-widest font-bold pb-2 mb-2 border-b border-stone-800 font-sans">
              Heap & Balanced Tree Topology
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin] text-center sm:text-left">
              <code>{`30 / 10 \\ 20
A single rotation is not enough.
We perform two operations:
Left rotation on node 10.
Right rotation on node 30.
First:`}</code>
            </pre>
          </div>
          <div className="p-4 rounded-xl bg-stone-900 text-orange-300 font-mono text-xs overflow-x-auto leading-tight border border-stone-800 my-4 shadow-inner">
            <div className="text-[10px] text-slate-400 uppercase tracking-widest font-bold pb-2 mb-2 border-b border-stone-800 font-sans">
              Heap & Balanced Tree Topology
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin] text-center sm:text-left">
              <code>{`30 / 20 / 10
Then:`}</code>
            </pre>
          </div>
          <div className="p-4 rounded-xl bg-stone-900 text-orange-300 font-mono text-xs overflow-x-auto leading-tight border border-stone-800 my-4 shadow-inner">
            <div className="text-[10px] text-slate-400 uppercase tracking-widest font-bold pb-2 mb-2 border-b border-stone-800 font-sans">
              Heap & Balanced Tree Topology
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin] text-center sm:text-left">
              <code>{`20 / \\ 10 30
[Data Structures and Algorithms: AVL Trees Explained](https://images.openai.com/static-rsc-4/W4K3ro2fYhms9Fzquhelg-YB7hAEKoMadxOvKWc-RUjhE97AQB7DlIY1gCZKtClNlTUk1X4z05cZO2CC-NIurLpSXT58e1dkRG4vyfNN6Aruj-d6qHDuISxWOKOJiPD_IgJDWrurmoyYflEx9aZQH2tXbr5ISdCApc0QEzI7G6E?purpose=inline)
[interviewkickstart.com](https://interviewkickstart.com/blogs/learn/data-structures-and-algorithms-avl-trees?utm_source=chatgpt.com)
Java:`}</code>
            </pre>
          </div>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`root.left = leftRotate(root.left);
return rightRotate(root);`}</code>
            </pre>
          </div>
          <h3 className="text-lg font-bold text-white mt-6 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>17.5 Case 4 — RL Rotation (Right-Left)</span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            This happens when insertion occurs in the left subtree of the right child.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Insert:
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            10, 30, 20
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Before:
          </p>
          <div className="p-4 rounded-xl bg-stone-900 text-orange-300 font-mono text-xs overflow-x-auto leading-tight border border-stone-800 my-4 shadow-inner">
            <div className="text-[10px] text-slate-400 uppercase tracking-widest font-bold pb-2 mb-2 border-b border-stone-800 font-sans">
              Heap & Balanced Tree Topology
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin] text-center sm:text-left">
              <code>{`10 \\ 30 / 20
Perform:
Right rotation on node 30.
Left rotation on node 10.
After the first rotation:`}</code>
            </pre>
          </div>
          <div className="p-4 rounded-xl bg-stone-900 text-orange-300 font-mono text-xs overflow-x-auto leading-tight border border-stone-800 my-4 shadow-inner">
            <div className="text-[10px] text-slate-400 uppercase tracking-widest font-bold pb-2 mb-2 border-b border-stone-800 font-sans">
              Heap & Balanced Tree Topology
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin] text-center sm:text-left">
              <code>{`10 \\ 20 \\ 30
After the second rotation:`}</code>
            </pre>
          </div>
          <div className="p-4 rounded-xl bg-stone-900 text-orange-300 font-mono text-xs overflow-x-auto leading-tight border border-stone-800 my-4 shadow-inner">
            <div className="text-[10px] text-slate-400 uppercase tracking-widest font-bold pb-2 mb-2 border-b border-stone-800 font-sans">
              Heap & Balanced Tree Topology
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin] text-center sm:text-left">
              <code>{`20 / \\ 10 30
[AVL Tree (+Code), Konsep Awal B-Tree, dan Red-Black Tree](https://images.openai.com/static-rsc-4/soLznDUpQeko4ySSWXnVi1c0PKqIXSg_v8xlmCFKMwPfvDBIjZklTk5LAPcjt8BCAeJT8thoNtRIbX0j-BwNYWvO-wp43aJNRWkzL7PrkBB-5qdhEqvLk9qtoYJ6ONXOvAbQdkJDjLCehQvCLLtYGIYUEhe3_da501DUd-ro70A?purpose=inline)
[michaelchristian22.blogspot.com](https://michaelchristian22.blogspot.com/2020/05/avl-tree-avl-tree-adalah-suatu-jenis.html?utm_source=chatgpt.com)
Java:`}</code>
            </pre>
          </div>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`root.right = rightRotate(root.right);
return leftRotate(root);`}</code>
            </pre>
          </div>
          <h3 className="text-lg font-bold text-white mt-6 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>17.6 Summary of AVL rotations</span>
          </h3>
          <div className="overflow-x-auto my-4 rounded-xl border border-slate-800 shadow-2xs">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-white border-b border-slate-800 font-semibold">
                <tr>
                  <th className="px-4 py-3">Case</th>
                  <th className="px-4 py-3">Imbalance path</th>
                  <th className="px-4 py-3">Correction</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">LL</td>
                  <td className="px-4 py-2.5 text-slate-300">Left → Left</td>
                  <td className="px-4 py-2.5 text-slate-300">Right rotation</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">RR</td>
                  <td className="px-4 py-2.5 text-slate-300">Right → Right</td>
                  <td className="px-4 py-2.5 text-slate-300">Left rotation</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">LR</td>
                  <td className="px-4 py-2.5 text-slate-300">Left → Right</td>
                  <td className="px-4 py-2.5 text-slate-300">Left rotation on child, then right rotation</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">RL</td>
                  <td className="px-4 py-2.5 text-slate-300">Right → Left</td>
                  <td className="px-4 py-2.5 text-slate-300">Right rotation on child, then left rotation</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="p-4 my-3 rounded-xl bg-orange-500/15/60 border border-orange-500/30/80 text-orange-950 text-xs sm:text-sm leading-relaxed flex items-start gap-3">
            <span className="text-orange-400 font-bold shrink-0 mt-0.5">âš </span>
            <div>Memory trick:</div>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            LL → Right rotation.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            RR → Left rotation.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            LR → Left, then Right.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            RL → Right, then Left.
          </p>
          <h3 className="text-lg font-bold text-white mt-6 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>17.7 Why are rotations useful?</span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Rotations:
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Restore AVL balance.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Preserve BST ordering.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Reduce tree height.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Keep future searches efficient.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Require only a constant number of pointer changes per rotation.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            The rotation itself takes <code className="font-mono text-orange-400 bg-orange-500/15 px-1 py-0.5 rounded text-xs border border-orange-100">O(1)</code> time, excluding any path traversal needed to locate the imbalance.
          </p>
      </div>
    ),
  },
  {
    id: 18,
    title: "18. Implementing AVL Insertion in Java from Scratch",
    category: "Part B · AVL Implementation",
    anchor: "avl-implementation",
    content: (
      <div className="space-y-4">
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Now let&#39;s combine everything into a working AVL insertion implementation.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            We will use:
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            A Node class.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Height calculation.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Balance factor calculation.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Left rotation.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Right rotation.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Insertion with four imbalance cases.
          </p>
          <h3 className="text-lg font-bold text-white mt-6 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>18.1 Node class</span>
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`class Node  {
  int key;
  int height;
  Node left;
  Node right;
  Node(int key)  {
    this.key = key;
    this.height = 1;

  }

}
Here: An empty subtree has height 0. A leaf node has height 1. This convention is different from the edge-based height convention used in earlier sections, but either convention works when used consistently.`}</code>
            </pre>
          </div>
          <h3 className="text-lg font-bold text-white mt-6 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>18.2 Height calculation</span>
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`static int height(Node node)  {
  if (node == null)  {
    return 0;

  }
  return node.height;

}`}</code>
            </pre>
          </div>
          <h3 className="text-lg font-bold text-white mt-6 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>18.3 Balance factor</span>
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`static int getBalance(Node node)  {
  if (node == null)  {
    return 0;

  }
  return height(node.left) - height(node.right);

}`}</code>
            </pre>
          </div>
          <h3 className="text-lg font-bold text-white mt-6 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>18.4 Left rotation</span>
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`static Node leftRotate(Node x)  {
  Node y = x.right;
  Node T2 = y.left;
  y.left = x;
  x.right = T2;
  x.height = 1 + Math.max( height(x.left), height(x.right) );
  y.height = 1 + Math.max( height(y.left), height(y.right) );
  return y;

}`}</code>
            </pre>
          </div>
          <h3 className="text-lg font-bold text-white mt-6 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>18.5 Right rotation</span>
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`static Node rightRotate(Node y)  {
  Node x = y.left;
  Node T2 = x.right;
  x.right = y;
  y.left = T2;
  y.height = 1 + Math.max( height(y.left), height(y.right) );
  x.height = 1 + Math.max( height(x.left), height(x.right) );
  return x;

}`}</code>
            </pre>
          </div>
          <h3 className="text-lg font-bold text-white mt-6 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>18.6 AVL insertion</span>
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`static Node insert(Node node, int key)  {
  // 1. Normal BST insertion if (node == null)  {
    return new Node(key);

  }
  if (key < node.key)  {
    node.left = insert(node.left, key);

  }
  else if (key > node.key)  {
    node.right = insert(node.right, key);

  }
  else  {
    return node;
    // Ignore duplicates
  }
  // 2. Update height node.height = 1 + Math.max( height(node.left), height(node.right) );
  // 3. Calculate balance factor int balance = getBalance(node);
  // 4. LL Case if (balance > 1 && key < node.left.key)  {
    return rightRotate(node);

  }
  // 5. RR Case if (balance < -1 && key > node.right.key)  {
    return leftRotate(node);

  }
  // 6. LR Case if (balance > 1 && key > node.left.key)  {
    node.left = leftRotate(node.left);
    return rightRotate(node);

  }
  // 7. RL Case if (balance < -1 && key < node.right.key)  {
    node.right = rightRotate(node.right);
    return leftRotate(node);

  }
  return node;

}`}</code>
            </pre>
          </div>
          <h3 className="text-lg font-bold text-white mt-6 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>18.7 Complete testing example</span>
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public class AVLTree  {
  static Node root;
  public static void main(String[] args)  {
    root = insert(root, 30);
    root = insert(root, 20);
    root = insert(root, 10);
    System.out.println("Root: " + root.key);
    System.out.println("Height: " + root.height);

  }

}`}</code>
            </pre>
          </div>
          <div className="p-3 my-2 rounded-lg bg-[#f4f2ed] border border-[#e2ded5] text-xs font-mono text-slate-200 flex items-start gap-2">
            <span className="text-orange-400 font-bold uppercase tracking-wider text-[10px]">Output:</span>
            <span></span>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Root: 20 Height: 2
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            The resulting tree is:
          </p>
          <div className="p-4 rounded-xl bg-stone-900 text-orange-300 font-mono text-xs overflow-x-auto leading-tight border border-stone-800 my-4 shadow-inner">
            <div className="text-[10px] text-slate-400 uppercase tracking-widest font-bold pb-2 mb-2 border-b border-stone-800 font-sans">
              Heap & Balanced Tree Topology
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin] text-center sm:text-left">
              <code>{`20 / \\ 10 30`}</code>
            </pre>
          </div>
          <h3 className="text-lg font-bold text-white mt-6 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>18.8 AVL insertion complexity</span>
          </h3>
          <div className="overflow-x-auto my-4 rounded-xl border border-slate-800 shadow-2xs">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-white border-b border-slate-800 font-semibold">
                <tr>
                  <th className="px-4 py-3">Operation</th>
                  <th className="px-4 py-3">Complexity</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">Search</td>
                  <td className="px-4 py-2.5 text-slate-300"><code className="font-mono text-orange-400 bg-orange-500/15 px-1 py-0.5 rounded text-xs border border-orange-100">O(\log n)</code></td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">Insert</td>
                  <td className="px-4 py-2.5 text-slate-300"><code className="font-mono text-orange-400 bg-orange-500/15 px-1 py-0.5 rounded text-xs border border-orange-100">O(\log n)</code></td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">Delete</td>
                  <td className="px-4 py-2.5 text-slate-300"><code className="font-mono text-orange-400 bg-orange-500/15 px-1 py-0.5 rounded text-xs border border-orange-100">O(\log n)</code></td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Find minimum
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            <code className="font-mono text-orange-400 bg-orange-500/15 px-1 py-0.5 rounded text-xs border border-orange-100">O(\log n)</code>
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Find maximum
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            <code className="font-mono text-orange-400 bg-orange-500/15 px-1 py-0.5 rounded text-xs border border-orange-100">O(\log n)</code>
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Inorder traversal
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            <code className="font-mono text-orange-400 bg-orange-500/15 px-1 py-0.5 rounded text-xs border border-orange-100">O(n)</code>
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            AVL trees maintain logarithmic height by enforcing their balance condition.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            CS201-OpenDSA Data Structures and Algorithms+1
          </p>
          <div className="p-4 my-3 rounded-xl bg-orange-500/15/60 border border-orange-500/30/80 text-orange-950 text-xs sm:text-sm leading-relaxed flex items-start gap-3">
            <span className="text-orange-400 font-bold shrink-0 mt-0.5">âš </span>
            <div>Note: This code implements AVL insertion and the rotation mechanisms. AVL deletion requires additional rebalancing while returning up the search path.</div>
          </div>
      </div>
    ),
  },
  {
    id: 19,
    title: "19. Red-Black Trees Fundamentals: 5 Invariant Rules & Recoloring",
    category: "Part B · Red-Black Foundations",
    anchor: "red-black-trees",
    content: (
      <div className="space-y-4">
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Advanced Balanced Tree
          </p>
          <h3 className="text-lg font-bold text-white mt-6 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>19.1 What is a Red-Black Tree?</span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            A Red-Black Tree is a self-balancing Binary Search Tree in which every node is assigned one of two colours:
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Red.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Black.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            The colours help maintain balance during insertion and deletion.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Unlike AVL Trees, Red-Black Trees do not require the heights of the left and right subtrees to differ by at most one.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Instead, they follow a set of colour-based rules.
          </p>
          <h3 className="text-lg font-bold text-white mt-6 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>19.2 Why do we need Red-Black Trees?</span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Consider a normal BST containing:
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            10, 20, 30, 40, 50
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            It may become:
          </p>
          <div className="p-4 rounded-xl bg-stone-900 text-orange-300 font-mono text-xs overflow-x-auto leading-tight border border-stone-800 my-4 shadow-inner">
            <div className="text-[10px] text-slate-400 uppercase tracking-widest font-bold pb-2 mb-2 border-b border-stone-800 font-sans">
              Heap & Balanced Tree Topology
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin] text-center sm:text-left">
              <code>{`10 \\ 20 \\ 30 \\ 40 \\ 50
The search time becomes \\(O(n)\\).
A Red-Black Tree automatically rearranges itself during insertion and deletion.
It keeps the tree's height logarithmic, ensuring efficient operations.`}</code>
            </pre>
          </div>
          <h3 className="text-lg font-bold text-white mt-6 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>19.3 Five important Red-Black Tree properties</span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            These five rules are fundamental.
          </p>
          <h4 className="text-base font-semibold text-slate-200 mt-4 mb-2 text-white flex items-center gap-2">
            <span className="text-xs px-2 py-0.5 rounded bg-red-100 text-red-800 font-mono">Rule 1</span>
            <span>Every node is red or black.</span>
          </h4>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Every node must have one of the two colours.
          </p>
          <h4 className="text-base font-semibold text-slate-200 mt-4 mb-2 text-white flex items-center gap-2">
            <span className="text-xs px-2 py-0.5 rounded bg-red-100 text-red-800 font-mono">Rule 2</span>
            <span>Root is always black.</span>
          </h4>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            The root of a Red-Black Tree must always be black after rebalancing.
          </p>
          <h4 className="text-base font-semibold text-slate-200 mt-4 mb-2 text-white flex items-center gap-2">
            <span className="text-xs px-2 py-0.5 rounded bg-red-100 text-red-800 font-mono">Rule 3</span>
            <span>All NIL leaves are black.</span>
          </h4>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Every missing child is conceptually represented by a black NIL sentinel node.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            These NIL nodes are not ordinary data nodes.
          </p>
          <h4 className="text-base font-semibold text-slate-200 mt-4 mb-2 text-white flex items-center gap-2">
            <span className="text-xs px-2 py-0.5 rounded bg-red-100 text-red-800 font-mono">Rule 4</span>
            <span>No two consecutive red nodes.</span>
          </h4>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            A red node cannot have a red parent or red child.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            In particular, if a node is red, its children must be black.
          </p>
          <h4 className="text-base font-semibold text-slate-200 mt-4 mb-2 text-white flex items-center gap-2">
            <span className="text-xs px-2 py-0.5 rounded bg-red-100 text-red-800 font-mono">Rule 5</span>
            <span>Equal black height.</span>
          </h4>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Every path from a node to any descendant NIL leaf must contain the same number of black nodes, counting the NIL leaf.
          </p>
          <h3 className="text-lg font-bold text-white mt-6 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>19.4 Understanding black height</span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Black height is the number of black nodes encountered along a path to a descendant NIL leaf, according to a consistent counting convention.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            The essential rule is that all paths from the same node must have equal black height.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            For example:
          </p>
          <div className="p-4 rounded-xl bg-stone-900 text-orange-300 font-mono text-xs overflow-x-auto leading-tight border border-stone-800 my-4 shadow-inner">
            <div className="text-[10px] text-slate-400 uppercase tracking-widest font-bold pb-2 mb-2 border-b border-stone-800 font-sans">
              Heap & Balanced Tree Topology
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin] text-center sm:text-left">
              <code>{`20(B) / \\ 10(R) 30(R)
This simple tree is valid.
Both paths have the same black height.`}</code>
            </pre>
          </div>
          <h3 className="text-lg font-bold text-white mt-6 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>19.5 Why does a Red-Black Tree stay balanced?</span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            The colour rules prevent a tree from becoming excessively skewed.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Because:
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Red nodes cannot occur consecutively.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Every path has equal black height.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            The longest path cannot be more than twice the shortest relevant path through black nodes.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            The height has the upper bound:
          </p>
          <div className="my-3 p-3 text-center bg-[#faf8f5] border border-slate-800 rounded-xl font-mono text-sm text-white shadow-2xs">
            <span className="block font-mono bg-slate-950 text-white px-3 py-1.5 my-2 rounded text-xs overflow-x-auto border border-slate-800"> h\leq2\log_2(n+1) </span>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Therefore:
          </p>
          <div className="overflow-x-auto my-4 rounded-xl border border-slate-800 shadow-2xs">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-white border-b border-slate-800 font-semibold">
                <tr>
                  <th className="px-4 py-3">Operation</th>
                  <th className="px-4 py-3">Worst-case complexity</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">Search</td>
                  <td className="px-4 py-2.5 text-slate-300"><code className="font-mono text-orange-400 bg-orange-500/15 px-1 py-0.5 rounded text-xs border border-orange-100">O(\log n)</code></td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">Insert</td>
                  <td className="px-4 py-2.5 text-slate-300"><code className="font-mono text-orange-400 bg-orange-500/15 px-1 py-0.5 rounded text-xs border border-orange-100">O(\log n)</code></td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">Delete</td>
                  <td className="px-4 py-2.5 text-slate-300"><code className="font-mono text-orange-400 bg-orange-500/15 px-1 py-0.5 rounded text-xs border border-orange-100">O(\log n)</code></td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">Minimum</td>
                  <td className="px-4 py-2.5 text-slate-300"><code className="font-mono text-orange-400 bg-orange-500/15 px-1 py-0.5 rounded text-xs border border-orange-100">O(\log n)</code></td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">Maximum</td>
                  <td className="px-4 py-2.5 text-slate-300"><code className="font-mono text-orange-400 bg-orange-500/15 px-1 py-0.5 rounded text-xs border border-orange-100">O(\log n)</code></td>
                </tr>
              </tbody>
            </table>
          </div>
          <h3 className="text-lg font-bold text-white mt-6 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>19.6 How does insertion work?</span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Insertion begins like ordinary BST insertion.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Suppose we insert a new value:
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            25
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            The process is:
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Find the correct BST insertion position.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Insert the new node as a red node.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Check whether any Red-Black Tree property is violated.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Rebalance using recoloring and rotations.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Ensure that the root is black.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Why insert it as red?
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Because adding a red node does not immediately increase the black height of paths passing through it.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            However, it may create two consecutive red nodes.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            We then fix that violation.
          </p>
          <h3 className="text-lg font-bold text-white mt-6 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>19.7 Recoloring</span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Recoloring means changing a node&#39;s color to restore the Red-Black properties.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            A common insertion situation:
          </p>
          <div className="p-4 rounded-xl bg-stone-900 text-orange-300 font-mono text-xs overflow-x-auto leading-tight border border-stone-800 my-4 shadow-inner">
            <div className="text-[10px] text-slate-400 uppercase tracking-widest font-bold pb-2 mb-2 border-b border-stone-800 font-sans">
              Heap & Balanced Tree Topology
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin] text-center sm:text-left">
              <code>{`30(B) / 20(R) / 10(R)
There are two consecutive red nodes.
Suppose the uncle of node 10 is red.
We can perform a recoloring operation:
30(R) / 20(B) / 10(R)
Then continue checking the parent and grandparent relationships.
The root, if red at the end of the process, is changed back to black.`}</code>
            </pre>
          </div>
          <h3 className="text-lg font-bold text-white mt-6 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>19.8 Rotations</span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Red-Black Trees use the same basic structural rotations as AVL Trees.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Left rotation:
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Promotes the right child.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Right rotation:
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Promotes the left child.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            They preserve the BST ordering property.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            However, Red-Black Trees also use recoloring to restore their balancing rules.
          </p>
          <h3 className="text-lg font-bold text-white mt-6 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>19.9 Insertion cases — Conceptual understanding</span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            When a newly inserted red node creates a red-red violation, consider its uncle.
          </p>
          <div className="overflow-x-auto my-4 rounded-xl border border-slate-800 shadow-2xs">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-white border-b border-slate-800 font-semibold">
                <tr>
                  <th className="px-4 py-3">Situation</th>
                  <th className="px-4 py-3">General correction</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">Parent red, uncle red</td>
                  <td className="px-4 py-2.5 text-slate-300">Recolor parent and uncle black; grandparent red, then continue upward</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">Parent red, uncle black, straight-line shape</td>
                  <td className="px-4 py-2.5 text-slate-300">Rotate at grandparent and recolor</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">Parent red, uncle black, triangle shape</td>
                  <td className="px-4 py-2.5 text-slate-300">Rotate at parent to convert into a straight-line case, then rotate at grandparent</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            The exact rotations depend on whether the nodes are on the left or right side.
          </p>
          <h3 className="text-lg font-bold text-white mt-6 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>19.10 Deletion fundamentals</span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Deletion is more complicated than basic BST deletion.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            First, the node is removed using BST deletion logic.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Then the Red-Black Tree properties must be restored.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Deleting a red leaf is usually simple.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Deleting a black node can cause a black-height violation, sometimes described as a double-black condition in common explanations.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            The correction may involve:
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Recoloring the sibling.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Recoloring the parent.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Rotating around the parent.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Moving the violation upward.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            You should understand the five Red-Black Tree properties first before studying every insertion and deletion case.
          </p>
          <h3 className="text-lg font-bold text-white mt-6 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>19.11 Java example: TreeMap uses Red-Black Trees</span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            You do not usually need to implement a complete Red-Black Tree from scratch when developing ordinary Java applications.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Java&#39;s TreeMap is an implementation of a navigable map based on a Red-Black Tree.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            It maintains sorted keys and provides guaranteed <code className="font-mono text-orange-400 bg-orange-500/15 px-1 py-0.5 rounded text-xs border border-orange-100">O(\log n)</code> time for key lookup, insertion, and deletion.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Oracle Docs
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Example:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`import java.util.*;
public class Main  {
  public static void main(String[] args)  {
    TreeMap<Integer, String> map = new TreeMap<>();
    map.put(50, "A");
    map.put(20, "B");
    map.put(70, "C");
    map.put(10, "D");
    map.put(30, "E");
    System.out.println(map);

  }

}`}</code>
            </pre>
          </div>
          <div className="p-3 my-2 rounded-lg bg-[#f4f2ed] border border-[#e2ded5] text-xs font-mono text-slate-200 flex items-start gap-2">
            <span className="text-orange-400 font-bold uppercase tracking-wider text-[10px]">Output:</span>
            <span></span>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            &#123;10=D, 20=B, 30=E, 50=A, 70=C&#125;
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            The map maintains sorted key order.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Its internal Red-Black Tree rebalances as keys are inserted and removed.
          </p>
          <h3 className="text-lg font-bold text-white mt-6 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>19.12 AVL vs Red-Black Tree</span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            This is a very important interview comparison.
          </p>
          <div className="overflow-x-auto my-4 rounded-xl border border-slate-800 shadow-2xs">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-white border-b border-slate-800 font-semibold">
                <tr>
                  <th className="px-4 py-3">Feature</th>
                  <th className="px-4 py-3">AVL Tree</th>
                  <th className="px-4 py-3">Red-Black Tree</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">Type</td>
                  <td className="px-4 py-2.5 text-slate-300">Self-balancing BST</td>
                  <td className="px-4 py-2.5 text-slate-300">Self-balancing BST</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">Balance mechanism</td>
                  <td className="px-4 py-2.5 text-slate-300">Height difference</td>
                  <td className="px-4 py-2.5 text-slate-300">Colour rules</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">Balance condition</td>
                  <td className="px-4 py-2.5 text-slate-300">BF between -1 and +1</td>
                  <td className="px-4 py-2.5 text-slate-300">Five Red-Black properties</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">Height</td>
                  <td className="px-4 py-2.5 text-slate-300">More strictly bounded</td>
                  <td className="px-4 py-2.5 text-slate-300">Less strictly bounded</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">Search</td>
                  <td className="px-4 py-2.5 text-slate-300">Usually fewer tree levels</td>
                  <td className="px-4 py-2.5 text-slate-300">Can have slightly greater height</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">Insertion</td>
                  <td className="px-4 py-2.5 text-slate-300"><code className="font-mono text-orange-400 bg-orange-500/15 px-1 py-0.5 rounded text-xs border border-orange-100">O(\log n)</code></td>
                  <td className="px-4 py-2.5 text-slate-300"><code className="font-mono text-orange-400 bg-orange-500/15 px-1 py-0.5 rounded text-xs border border-orange-100">O(\log n)</code></td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">Deletion</td>
                  <td className="px-4 py-2.5 text-slate-300"><code className="font-mono text-orange-400 bg-orange-500/15 px-1 py-0.5 rounded text-xs border border-orange-100">O(\log n)</code></td>
                  <td className="px-4 py-2.5 text-slate-300"><code className="font-mono text-orange-400 bg-orange-500/15 px-1 py-0.5 rounded text-xs border border-orange-100">O(\log n)</code></td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">Extra information</td>
                  <td className="px-4 py-2.5 text-slate-300">Height or balance factor</td>
                  <td className="px-4 py-2.5 text-slate-300">Colour</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">Rebalancing</td>
                  <td className="px-4 py-2.5 text-slate-300">Rotations</td>
                  <td className="px-4 py-2.5 text-slate-300">Rotations and recoloring</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">Best suited for</td>
                  <td className="px-4 py-2.5 text-slate-300">Search-heavy workloads</td>
                  <td className="px-4 py-2.5 text-slate-300">General-purpose ordered collections</td>
                </tr>
              </tbody>
            </table>
          </div>
          <h3 className="text-lg font-bold text-white mt-6 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>19.13 When should you use each?</span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            AVL Tree
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Choose AVL when:
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Searching happens much more frequently than updating.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            You want a more strictly balanced tree.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Fast lookup is particularly important.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Red-Black Tree
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Choose Red-Black when:
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Insertions and deletions are frequent.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            You want predictable logarithmic operations.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            You need a general-purpose ordered collection.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Neither is universally better. The workload determines which structure is appropriate.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            CS201-OpenDSA Data Structures and Algorithms+2
          </p>
      </div>
    ),
  },
  {
    id: 20,
    title: "20. Balanced Tree Comparison: BST vs AVL vs Red-Black vs Heap",
    category: "Part B · Comparative Architecture",
    anchor: "balanced-tree-comparison",
    content: (
      <div className="space-y-4">
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Let&#39;s compare the important structures from Modules 12 and 13.
          </p>
          <div className="overflow-x-auto my-4 rounded-xl border border-slate-800 shadow-2xs">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-white border-b border-slate-800 font-semibold">
                <tr>
                  <th className="px-4 py-3">Feature</th>
                  <th className="px-4 py-3">Normal BST</th>
                  <th className="px-4 py-3">AVL</th>
                  <th className="px-4 py-3">Red-Black</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">BST ordering</td>
                  <td className="px-4 py-2.5 text-slate-300">Yes</td>
                  <td className="px-4 py-2.5 text-slate-300">Yes</td>
                  <td className="px-4 py-2.5 text-slate-300">Yes</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">Self-balancing</td>
                  <td className="px-4 py-2.5 text-slate-300">No</td>
                  <td className="px-4 py-2.5 text-slate-300">Yes</td>
                  <td className="px-4 py-2.5 text-slate-300">Yes</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">Balance mechanism</td>
                  <td className="px-4 py-2.5 text-slate-300">None</td>
                  <td className="px-4 py-2.5 text-slate-300">Heights</td>
                  <td className="px-4 py-2.5 text-slate-300">Colours</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">Worst-case height</td>
                  <td className="px-4 py-2.5 text-slate-300"><code className="font-mono text-orange-400 bg-orange-500/15 px-1 py-0.5 rounded text-xs border border-orange-100">O(n)</code></td>
                  <td className="px-4 py-2.5 text-slate-300"><code className="font-mono text-orange-400 bg-orange-500/15 px-1 py-0.5 rounded text-xs border border-orange-100">O(\log n)</code></td>
                  <td className="px-4 py-2.5 text-slate-300"><code className="font-mono text-orange-400 bg-orange-500/15 px-1 py-0.5 rounded text-xs border border-orange-100">O(\log n)</code></td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">Search</td>
                  <td className="px-4 py-2.5 text-slate-300"><code className="font-mono text-orange-400 bg-orange-500/15 px-1 py-0.5 rounded text-xs border border-orange-100">O(n)</code></td>
                  <td className="px-4 py-2.5 text-slate-300"><code className="font-mono text-orange-400 bg-orange-500/15 px-1 py-0.5 rounded text-xs border border-orange-100">O(\log n)</code></td>
                  <td className="px-4 py-2.5 text-slate-300"><code className="font-mono text-orange-400 bg-orange-500/15 px-1 py-0.5 rounded text-xs border border-orange-100">O(\log n)</code></td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">Insert</td>
                  <td className="px-4 py-2.5 text-slate-300"><code className="font-mono text-orange-400 bg-orange-500/15 px-1 py-0.5 rounded text-xs border border-orange-100">O(n)</code></td>
                  <td className="px-4 py-2.5 text-slate-300"><code className="font-mono text-orange-400 bg-orange-500/15 px-1 py-0.5 rounded text-xs border border-orange-100">O(\log n)</code></td>
                  <td className="px-4 py-2.5 text-slate-300"><code className="font-mono text-orange-400 bg-orange-500/15 px-1 py-0.5 rounded text-xs border border-orange-100">O(\log n)</code></td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">Delete</td>
                  <td className="px-4 py-2.5 text-slate-300"><code className="font-mono text-orange-400 bg-orange-500/15 px-1 py-0.5 rounded text-xs border border-orange-100">O(n)</code></td>
                  <td className="px-4 py-2.5 text-slate-300"><code className="font-mono text-orange-400 bg-orange-500/15 px-1 py-0.5 rounded text-xs border border-orange-100">O(\log n)</code></td>
                  <td className="px-4 py-2.5 text-slate-300"><code className="font-mono text-orange-400 bg-orange-500/15 px-1 py-0.5 rounded text-xs border border-orange-100">O(\log n)</code></td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Now compare heaps with these structures.
          </p>
          <div className="overflow-x-auto my-4 rounded-xl border border-slate-800 shadow-2xs">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-white border-b border-slate-800 font-semibold">
                <tr>
                  <th className="px-4 py-3">Feature</th>
                  <th className="px-4 py-3">Binary Heap</th>
                  <th className="px-4 py-3">AVL</th>
                  <th className="px-4 py-3">Red-Black</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">Primary purpose</td>
                  <td className="px-4 py-2.5 text-slate-300">Priority retrieval</td>
                  <td className="px-4 py-2.5 text-slate-300">Ordered searching</td>
                  <td className="px-4 py-2.5 text-slate-300">Ordered searching</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">Root</td>
                  <td className="px-4 py-2.5 text-slate-300">Min/max</td>
                  <td className="px-4 py-2.5 text-slate-300">Any BST root</td>
                  <td className="px-4 py-2.5 text-slate-300">Any BST root</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">Insert</td>
                  <td className="px-4 py-2.5 text-slate-300"><code className="font-mono text-orange-400 bg-orange-500/15 px-1 py-0.5 rounded text-xs border border-orange-100">O(\log n)</code></td>
                  <td className="px-4 py-2.5 text-slate-300"><code className="font-mono text-orange-400 bg-orange-500/15 px-1 py-0.5 rounded text-xs border border-orange-100">O(\log n)</code></td>
                  <td className="px-4 py-2.5 text-slate-300"><code className="font-mono text-orange-400 bg-orange-500/15 px-1 py-0.5 rounded text-xs border border-orange-100">O(\log n)</code></td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">Access highest priority</td>
                  <td className="px-4 py-2.5 text-slate-300"><code className="font-mono text-orange-400 bg-orange-500/15 px-1 py-0.5 rounded text-xs border border-orange-100">O(1)</code> at root</td>
                  <td className="px-4 py-2.5 text-slate-300"><code className="font-mono text-orange-400 bg-orange-500/15 px-1 py-0.5 rounded text-xs border border-orange-100">O(\log n)</code> typically</td>
                  <td className="px-4 py-2.5 text-slate-300"><code className="font-mono text-orange-400 bg-orange-500/15 px-1 py-0.5 rounded text-xs border border-orange-100">O(\log n)</code> typically</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">Search arbitrary value</td>
                  <td className="px-4 py-2.5 text-slate-300"><code className="font-mono text-orange-400 bg-orange-500/15 px-1 py-0.5 rounded text-xs border border-orange-100">O(n)</code></td>
                  <td className="px-4 py-2.5 text-slate-300"><code className="font-mono text-orange-400 bg-orange-500/15 px-1 py-0.5 rounded text-xs border border-orange-100">O(\log n)</code></td>
                  <td className="px-4 py-2.5 text-slate-300"><code className="font-mono text-orange-400 bg-orange-500/15 px-1 py-0.5 rounded text-xs border border-orange-100">O(\log n)</code></td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">Sorted traversal</td>
                  <td className="px-4 py-2.5 text-slate-300">Not directly</td>
                  <td className="px-4 py-2.5 text-slate-300"><code className="font-mono text-orange-400 bg-orange-500/15 px-1 py-0.5 rounded text-xs border border-orange-100">O(n)</code></td>
                  <td className="px-4 py-2.5 text-slate-300"><code className="font-mono text-orange-400 bg-orange-500/15 px-1 py-0.5 rounded text-xs border border-orange-100">O(n)</code></td>
                </tr>
              </tbody>
            </table>
          </div>
          <h3 className="text-lg font-bold text-white mt-6 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>20.1 Which structure should you choose?</span>
          </h3>
          <div className="overflow-x-auto my-4 rounded-xl border border-slate-800 shadow-2xs">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-white border-b border-slate-800 font-semibold">
                <tr>
                  <th className="px-4 py-3">Requirement</th>
                  <th className="px-4 py-3">Recommended structure</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">Retrieve smallest repeatedly</td>
                  <td className="px-4 py-2.5 text-slate-300">Min Heap</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">Retrieve largest repeatedly</td>
                  <td className="px-4 py-2.5 text-slate-300">Max Heap</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">Find top K elements</td>
                  <td className="px-4 py-2.5 text-slate-300">Heap</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">Calculate streaming median</td>
                  <td className="px-4 py-2.5 text-slate-300">Two Heaps</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">Maintain sorted keys</td>
                  <td className="px-4 py-2.5 text-slate-300">TreeMap / Red-Black Tree</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">Search frequently in ordered data</td>
                  <td className="px-4 py-2.5 text-slate-300">AVL Tree</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">Maintain a priority queue</td>
                  <td className="px-4 py-2.5 text-slate-300">PriorityQueue</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">In-place <code className="font-mono text-orange-400 bg-orange-500/15 px-1 py-0.5 rounded text-xs border border-orange-100">O(n\log n)</code> sorting</td>
                  <td className="px-4 py-2.5 text-slate-300">Heap Sort</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="p-4 my-3 rounded-xl bg-orange-500/15/60 border border-orange-500/30/80 text-orange-950 text-xs sm:text-sm leading-relaxed flex items-start gap-3">
            <span className="text-orange-400 font-bold shrink-0 mt-0.5">âš </span>
            <div>Important distinction:</div>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            A heap is not a self-balancing BST.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            A heap maintains priority order between parents and children.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            AVL and Red-Black Trees maintain global BST ordering and balance constraints.
          </p>
      </div>
    ),
  },
  {
    id: 21,
    title: "21. Common Mistakes & Interview Traps",
    category: "Part B · Defensive Engineering",
    anchor: "common-mistakes",
    content: (
      <div className="space-y-4">
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Understanding these mistakes will help you avoid incorrect interview solutions.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Mistake 1 — Assuming a heap is completely sorted
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            A heap only guarantees the parent-child priority property.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            For example:
          </p>
          <div className="p-4 rounded-xl bg-stone-900 text-orange-300 font-mono text-xs overflow-x-auto leading-tight border border-stone-800 my-4 shadow-inner">
            <div className="text-[10px] text-slate-400 uppercase tracking-widest font-bold pb-2 mb-2 border-b border-stone-800 font-sans">
              Heap & Balanced Tree Topology
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin] text-center sm:text-left">
              <code>{`10 / \\ 20 15
This is a valid Min Heap even though the children are not sorted.
Mistake 2 — Confusing Min Heap and Max Heap
Min Heap: smallest element at the root.
Max Heap: largest element at the root.
Always check which one the problem requires.
Mistake 3 — Using the wrong heap for Kth largest
For Kth largest, use a Min Heap of size K.
For Kth smallest, use a Max Heap of size K.
Mistake 4 — Forgetting the complete binary tree property
When inserting into a heap, always append at the last available array position first.
Then perform sift-up.
Do not insert at an arbitrary position.
Mistake 5 — Forgetting to reduce heap size during Heap Sort
After moving the maximum element to its final position, exclude that position from the active heap.
Otherwise, the sorted portion can be modified again.
Mistake 6 — Assuming Build Heap is O(n log n)
Bottom-up Build Heap is \\(O(n)\\), not \\(O(n\\log n)\\).
Repeated insertion is a different approach and takes \\(O(n\\log n)\\) in the worst case.
Mistake 7 — Assuming PriorityQueue iteration is sorted
Only the head is guaranteed to have the highest priority.
Use repeated poll() calls for priority-ordered removal.
Mistake 8 — Using an incorrect Comparator
For a Min Heap:`}</code>
            </pre>
          </div>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`new PriorityQueue<>();
For a Max Heap: new PriorityQueue<>(Comparator.reverseOrder());
Be particularly careful with custom object comparisons and integer subtraction, which can overflow. Prefer Integer.compare() or Comparator.comparingInt(). Mistake 9 — Incorrectly balancing the two heaps in Median Finder Always maintain both: Heap sizes differ by at most one. Every element in the lower half is less than or equal to every element in the upper half. Mistake 10 — Confusing AVL rotation directions Remember: LL -> Right rotation RR -> Left rotation LR -> Left then Right RL -> Right then Left Mistake 11 — Forgetting height updates after AVL rotation After rearranging nodes, update the lower node's height first and then the new subtree root's height. Mistake 12 — Thinking Red-Black Trees and AVL Trees use the same balancing rules Both are self-balancing BSTs, but: AVL uses heights and balance factors. Red-Black uses colours and black-height constraints.`}</code>
            </pre>
          </div>
      </div>
    ),
  },
  {
    id: 22,
    title: "22. Important Theoretical Interview Questions (45 Questions)",
    category: "Part B · Technical Q&A",
    anchor: "interview-questions",
    content: (
      <div className="space-y-4">
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Prepare these questions after completing the module.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Heap fundamentals
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            What is a heap data structure?
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            What is the difference between a Min Heap and Max Heap?
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Why is a heap a complete binary tree?
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Why are heaps commonly represented using arrays?
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            What are the parent, left-child, and right-child index formulas?
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            What is the height of a binary heap containing N elements?
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            What is the difference between a heap and a BST?
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            What is heap insertion?
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            What are sift-up and sift-down?
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            What is heapify?
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            What is Build Heap?
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Why does bottom-up Build Heap take <code className="font-mono text-orange-400 bg-orange-500/15 px-1 py-0.5 rounded text-xs border border-orange-100">O(n)</code>?
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            What is Heap Sort?
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Why is Heap Sort not stable?
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            What is the complexity of heap insertion and deletion?
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Java PriorityQueue
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            What is a PriorityQueue?
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Why is Java PriorityQueue a Min Heap by default?
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            How do you implement a Max Heap using PriorityQueue?
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            What is the difference between poll() and peek()?
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Does PriorityQueue permit duplicate elements?
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Does PriorityQueue allow null elements?
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Is Java PriorityQueue thread-safe?
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Does PriorityQueue iteration guarantee sorted order?
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            How do you create a PriorityQueue for custom objects?
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            What is the time complexity of contains() in PriorityQueue?
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Heap interview problems
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            How do you find the Kth largest element?
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            How do you find the Kth smallest element?
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            How do you solve Top K Frequent Elements?
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            How do you merge K sorted linked lists?
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            How do you find the median of a continuous data stream?
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Why are two heaps used for median finding?
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            How do you find K closest points to the origin?
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            How do you maintain the K largest elements in a continuously arriving stream?
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            When should you use a Min Heap rather than sorting?
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            What is the difference between Heap Sort and PriorityQueue-based sorting?
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            AVL Trees
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            What is an AVL Tree?
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            What is a balance factor?
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Why are rotations necessary?
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Explain LL rotation.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Explain RR rotation.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Explain LR rotation.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Explain RL rotation.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            What is the difference between single and double rotation?
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            What happens when an AVL tree becomes unbalanced?
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            What is the time complexity of AVL searching, insertion, and deletion?
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Red-Black Trees
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            What is a Red-Black Tree?
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            What are the five Red-Black Tree properties?
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Why must the root be black?
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Why can a red node not have a red child?
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            What is black height?
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            How does recoloring work?
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Why are rotations needed in Red-Black Trees?
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            How does Red-Black Tree insertion work?
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            What is the double-black condition?
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Why does Java TreeMap use a Red-Black Tree?
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Advanced comparisons
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Compare AVL and Red-Black Trees.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Compare a normal BST with AVL.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Compare heaps and BSTs.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Why is AVL often preferred for search-heavy workloads?
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Why are Red-Black Trees useful in general-purpose ordered collections?
          </p>
      </div>
    ),
  },
  {
    id: 23,
    title: "23. Practical Coding Assignments (45 Problems)",
    category: "Part B · Hands-on Labs",
    anchor: "coding-assignments",
    content: (
      <div className="space-y-4">
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Complete these assignments using Java. Try to implement the data structures without depending entirely on built-in collections.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Hands-on Practice
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Assignment 1 — Beginner
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Heap fundamentals
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Implement a Min Heap using an array.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Implement a Max Heap using an array.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Insert elements into a Min Heap.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Insert elements into a Max Heap.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Delete the root of a Min Heap.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Delete the root of a Max Heap.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Implement sift-up.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Implement sift-down.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Implement Heapify.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Build a Max Heap from an unsorted array.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Build a Min Heap from an unsorted array.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Find the minimum element.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Find the maximum element.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Implement Heap Sort.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Compare repeated insertion with bottom-up Build Heap.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Assignment 2 — Intermediate
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`PriorityQueue and interview problems Find the Kth largest element. Find the Kth smallest element. Find the Top K frequent elements. Find the K closest points to the origin. Merge K sorted arrays. Merge K sorted linked lists. Find the median from a data stream. Find the K most frequent words. Find the smallest K elements in an array. Find the largest K elements in an array. Implement a task scheduler using PriorityQueue. Implement a custom comparator for Student objects. Find the Kth largest element in a continuous stream. Find the minimum cost to connect ropes. Solve Last Stone Weight using a Max Heap. Assignment 3 — Advanced Balanced trees Implement AVL Tree insertion. Implement AVL Tree search. Implement AVL Tree deletion. Implement all four AVL rotations. Validate the AVL balance property. Print the height and balance factor of every AVL node. Implement Red-Black Tree insertion. Implement Red-Black Tree recoloring. Implement Red-Black Tree left and right rotations. Validate the five Red-Black Tree properties. Compare insertion performance between normal BST and AVL Tree. Compare lookup behavior between AVL and Red-Black Trees. Implement a sorted map using a balanced BST. Implement a priority-based job scheduler. Design a real-time leaderboard using heaps and ordered maps.`}</code>
            </pre>
          </div>
      </div>
    ),
  },
  {
    id: 24,
    title: "24. Recommended LeetCode Practice Progression (15 Problems)",
    category: "Part B · LeetCode Track",
    anchor: "leetcode-track",
    content: (
      <div className="space-y-4">
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            These are the problems I recommend for mastering Module 13.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Problem numbers and difficulty labels refer to LeetCode.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Beginner — Heap fundamentals
          </p>
          <div className="overflow-x-auto my-4 rounded-xl border border-slate-800 shadow-2xs">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-white border-b border-slate-800 font-semibold">
                <tr>
                  <th className="px-4 py-3">Problem</th>
                  <th className="px-4 py-3">Difficulty</th>
                  <th className="px-4 py-3">Main concept</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">[703. Kth Largest Element in a Stream](https://leetcode.com/problems/kth-largest-element-in-a-stream/?utm_source=chatgpt.com)</td>
                  <td className="px-4 py-2.5 text-slate-300">Easy</td>
                  <td className="px-4 py-2.5 text-slate-300">Min Heap</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">[1046. Last Stone Weight](https://leetcode.com/problems/last-stone-weight/?utm_source=chatgpt.com)</td>
                  <td className="px-4 py-2.5 text-slate-300">Easy</td>
                  <td className="px-4 py-2.5 text-slate-300">Max Heap</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">[973. K Closest Points to Origin](https://leetcode.com/problems/k-closest-points-to-origin/?utm_source=chatgpt.com)</td>
                  <td className="px-4 py-2.5 text-slate-300">Medium</td>
                  <td className="px-4 py-2.5 text-slate-300">PriorityQueue</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">[215. Kth Largest Element in an Array](https://leetcode.com/problems/kth-largest-element-in-an-array/?utm_source=chatgpt.com)</td>
                  <td className="px-4 py-2.5 text-slate-300">Medium</td>
                  <td className="px-4 py-2.5 text-slate-300">Heap</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">[912. Sort an Array](https://leetcode.com/problems/sort-an-array/?utm_source=chatgpt.com)</td>
                  <td className="px-4 py-2.5 text-slate-300">Medium</td>
                  <td className="px-4 py-2.5 text-slate-300">Heap Sort / Sorting</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Intermediate — PriorityQueue patterns
          </p>
          <div className="overflow-x-auto my-4 rounded-xl border border-slate-800 shadow-2xs">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-white border-b border-slate-800 font-semibold">
                <tr>
                  <th className="px-4 py-3">Problem</th>
                  <th className="px-4 py-3">Difficulty</th>
                  <th className="px-4 py-3">Main concept</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">[347. Top K Frequent Elements](https://leetcode.com/problems/top-k-frequent-elements/?utm_source=chatgpt.com)</td>
                  <td className="px-4 py-2.5 text-slate-300">Medium</td>
                  <td className="px-4 py-2.5 text-slate-300">HashMap + Heap</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">[692. Top K Frequent Words](https://leetcode.com/problems/top-k-frequent-words/?utm_source=chatgpt.com)</td>
                  <td className="px-4 py-2.5 text-slate-300">Medium</td>
                  <td className="px-4 py-2.5 text-slate-300">Custom Comparator</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">[373. Find K Pairs with Smallest Sums](https://leetcode.com/problems/find-k-pairs-with-smallest-sums/?utm_source=chatgpt.com)</td>
                  <td className="px-4 py-2.5 text-slate-300">Medium</td>
                  <td className="px-4 py-2.5 text-slate-300">Min Heap</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">[621. Task Scheduler](https://leetcode.com/problems/task-scheduler/?utm_source=chatgpt.com)</td>
                  <td className="px-4 py-2.5 text-slate-300">Medium</td>
                  <td className="px-4 py-2.5 text-slate-300">PriorityQueue</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">[378. Kth Smallest Element in a Sorted Matrix](https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix/?utm_source=chatgpt.com)</td>
                  <td className="px-4 py-2.5 text-slate-300">Medium</td>
                  <td className="px-4 py-2.5 text-slate-300">Min Heap</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Advanced — Master heap algorithms
          </p>
          <div className="overflow-x-auto my-4 rounded-xl border border-slate-800 shadow-2xs">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-white border-b border-slate-800 font-semibold">
                <tr>
                  <th className="px-4 py-3">Problem</th>
                  <th className="px-4 py-3">Difficulty</th>
                  <th className="px-4 py-3">Main concept</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">[23. Merge K Sorted Lists](https://leetcode.com/problems/merge-k-sorted-lists/?utm_source=chatgpt.com)</td>
                  <td className="px-4 py-2.5 text-slate-300">Hard</td>
                  <td className="px-4 py-2.5 text-slate-300">Min Heap</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">[295. Find Median from Data Stream](https://leetcode.com/problems/find-median-from-data-stream/?utm_source=chatgpt.com)</td>
                  <td className="px-4 py-2.5 text-slate-300">Hard</td>
                  <td className="px-4 py-2.5 text-slate-300">Two Heaps</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">[239. Sliding Window Maximum](https://leetcode.com/problems/sliding-window-maximum/?utm_source=chatgpt.com)</td>
                  <td className="px-4 py-2.5 text-slate-300">Hard</td>
                  <td className="px-4 py-2.5 text-slate-300">Deque / Heap</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">[502. IPO](https://leetcode.com/problems/ipo/?utm_source=chatgpt.com)</td>
                  <td className="px-4 py-2.5 text-slate-300">Hard</td>
                  <td className="px-4 py-2.5 text-slate-300">Two PriorityQueues</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">[632. Smallest Range Covering Elements from K Lists](https://leetcode.com/problems/smallest-range-covering-elements-from-k-lists/?utm_source=chatgpt.com)</td>
                  <td className="px-4 py-2.5 text-slate-300">Hard</td>
                  <td className="px-4 py-2.5 text-slate-300">Min Heap</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            For balanced-tree implementation practice, focus on the AVL insertion and deletion assignments and understanding the Red-Black Tree invariants. Java&#39;s TreeMap is useful for practising ordered-map operations, but it does not expose its internal rotation logic.
          </p>
      </div>
    ),
  },
  {
    id: 25,
    title: "25. Knowledge Assessment & Quiz",
    category: "Part B · Knowledge Check",
    anchor: "knowledge-check",
    content: (
      <div className="space-y-4">
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Test yourself before moving to the next module.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Module 13 assessment
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            0/10 answered
          </p>
          <div className="flex items-start gap-2.5 my-1.5 text-xs sm:text-sm text-slate-300 leading-relaxed pl-2">
            <span className="text-orange-400 font-semibold font-mono text-xs shrink-0 mt-0.5">1.</span>
            <span>Which element is stored at the root of a Min Heap?</span>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Largest element
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Smallest element
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Middle element
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Random element
          </p>
          <div className="flex items-start gap-2.5 my-1.5 text-xs sm:text-sm text-slate-300 leading-relaxed pl-2">
            <span className="text-orange-400 font-semibold font-mono text-xs shrink-0 mt-0.5">2.</span>
            <span>What is the time complexity of inserting an element into a binary heap?</span>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            O(1)
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            O(n)
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            O(log n)
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            O(n log n)
          </p>
          <div className="flex items-start gap-2.5 my-1.5 text-xs sm:text-sm text-slate-300 leading-relaxed pl-2">
            <span className="text-orange-400 font-semibold font-mono text-xs shrink-0 mt-0.5">3.</span>
            <span>What is the complexity of bottom-up Build Heap?</span>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            O(n)
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            O(n log n)
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            O(log n)
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            O(n²)
          </p>
          <div className="flex items-start gap-2.5 my-1.5 text-xs sm:text-sm text-slate-300 leading-relaxed pl-2">
            <span className="text-orange-400 font-semibold font-mono text-xs shrink-0 mt-0.5">4.</span>
            <span>Which heap should be used to find the Kth largest element efficiently?</span>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Max Heap of size K
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Min Heap of size K
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            BST only
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Queue
          </p>
          <div className="flex items-start gap-2.5 my-1.5 text-xs sm:text-sm text-slate-300 leading-relaxed pl-2">
            <span className="text-orange-400 font-semibold font-mono text-xs shrink-0 mt-0.5">5.</span>
            <span>What is the default ordering of Java PriorityQueue&lt;Integer&gt;?</span>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Descending
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Insertion order
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Ascending natural order
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Random
          </p>
          <div className="flex items-start gap-2.5 my-1.5 text-xs sm:text-sm text-slate-300 leading-relaxed pl-2">
            <span className="text-orange-400 font-semibold font-mono text-xs shrink-0 mt-0.5">6.</span>
            <span>Which structure is used to calculate the median from a continuous stream efficiently?</span>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            One Stack
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Two Heaps
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            One HashSet
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            One BST without balancing
          </p>
          <div className="flex items-start gap-2.5 my-1.5 text-xs sm:text-sm text-slate-300 leading-relaxed pl-2">
            <span className="text-orange-400 font-semibold font-mono text-xs shrink-0 mt-0.5">7.</span>
            <span>Which rotation corrects an AVL Left-Left imbalance?</span>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Left rotation
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Right rotation
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Left-Right rotation
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Right-Left rotation
          </p>
          <div className="flex items-start gap-2.5 my-1.5 text-xs sm:text-sm text-slate-300 leading-relaxed pl-2">
            <span className="text-orange-400 font-semibold font-mono text-xs shrink-0 mt-0.5">8.</span>
            <span>What is the valid balance factor range for every AVL node?</span>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            -2 to +2
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            0 to 2
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            -1 to +1
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Only 0
          </p>
          <div className="flex items-start gap-2.5 my-1.5 text-xs sm:text-sm text-slate-300 leading-relaxed pl-2">
            <span className="text-orange-400 font-semibold font-mono text-xs shrink-0 mt-0.5">9.</span>
            <span>Which property is required in a Red-Black Tree?</span>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Every node must be red
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Every red node has black children
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            All leaves must contain data
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Every node has two children
          </p>
          <div className="flex items-start gap-2.5 my-1.5 text-xs sm:text-sm text-slate-300 leading-relaxed pl-2">
            <span className="text-orange-400 font-semibold font-mono text-xs shrink-0 mt-0.5">10.</span>
            <span>Which Java collection is implemented using a Red-Black Tree?</span>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            HashMap
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`PriorityQueue TreeMap ArrayList Submit answers`}</code>
            </pre>
          </div>
      </div>
    ),
  },
  {
    id: 26,
    title: "26. Learning Outcomes & Engineering Mastery",
    category: "Milestone · Advanced Tree Mastery",
    anchor: "learning-outcomes",
    content: (
      <div className="space-y-4">
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            By the end of this module, you should be able to:
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Heaps
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Explain complete binary trees and heap-order properties.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Differentiate Min Heap and Max Heap.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Represent heaps using Java arrays.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Implement insertion and deletion.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Implement Heapify and Build Heap.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Understand why Build Heap takes <code className="font-mono text-orange-400 bg-orange-500/15 px-1 py-0.5 rounded text-xs border border-orange-100">O(n)</code>.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Implement Heap Sort.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Use Java PriorityQueue with natural and custom ordering.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Interview problems
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Find Kth largest and Kth smallest elements.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Solve Top K Frequent Elements.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Merge K sorted linked lists.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Calculate the median from a data stream.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Recognize when a heap is better than sorting.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Advanced trees
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Explain AVL balance factors.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Implement all four AVL rotations.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Implement AVL insertion.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Understand Red-Black Tree invariants.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Explain recoloring and rotations.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Compare ordinary BST, AVL, Red-Black Trees, and heaps.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Understand why Java TreeMap uses Red-Black Trees.
          </p>
      </div>
    ),
  },
  {
    id: 27,
    title: "27. Recommended Study Sequence & Strategy",
    category: "Milestone · Study Roadmap",
    anchor: "study-sequence",
    content: (
      <div className="space-y-4">
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Follow this order for your practical preparation:
          </p>
          <div className="overflow-x-auto my-4 rounded-xl border border-slate-800 shadow-2xs">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-white border-b border-slate-800 font-semibold">
                <tr>
                  <th className="px-4 py-3">Stage</th>
                  <th className="px-4 py-3">Focus</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">1</td>
                  <td className="px-4 py-2.5 text-slate-300">Understand Min Heap and Max Heap</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">2</td>
                  <td className="px-4 py-2.5 text-slate-300">Master array representation</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">3</td>
                  <td className="px-4 py-2.5 text-slate-300">Implement insertion and deletion</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">4</td>
                  <td className="px-4 py-2.5 text-slate-300">Master Heapify and Build Heap</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">5</td>
                  <td className="px-4 py-2.5 text-slate-300">Implement Heap Sort</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">6</td>
                  <td className="px-4 py-2.5 text-slate-300">Practise Java PriorityQueue</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">7</td>
                  <td className="px-4 py-2.5 text-slate-300">Solve Kth largest and Top K Frequent</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">8</td>
                  <td className="px-4 py-2.5 text-slate-300">Solve Merge K Sorted Lists</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">9</td>
                  <td className="px-4 py-2.5 text-slate-300">Master Median from Data Stream</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">10</td>
                  <td className="px-4 py-2.5 text-slate-300">Understand AVL balance factors</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">11</td>
                  <td className="px-4 py-2.5 text-slate-300">Practise all four AVL rotations</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">12</td>
                  <td className="px-4 py-2.5 text-slate-300">Implement AVL insertion</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">13</td>
                  <td className="px-4 py-2.5 text-slate-300">Understand Red-Black Tree properties</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">14</td>
                  <td className="px-4 py-2.5 text-slate-300">Compare AVL and Red-Black Trees</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">15</td>
                  <td className="px-4 py-2.5 text-slate-300">Complete coding assignments and LeetCode</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="p-4 my-3 rounded-xl bg-orange-500/15/60 border border-orange-500/30/80 text-orange-950 text-xs sm:text-sm leading-relaxed flex items-start gap-3">
            <span className="text-orange-400 font-bold shrink-0 mt-0.5">âš </span>
            <div>Recommended priority: Spend the most coding practice time on heap operations, Java PriorityQueue, Kth largest, Top K Frequent Elements, Merge K Sorted Lists, and Median from Data Stream. For AVL and Red-Black Trees, understand the balancing mechanisms deeply and implement AVL rotations yourself.</div>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            The central lesson of Module 13: Heaps solve priority-based retrieval efficiently, while AVL and Red-Black Trees maintain efficient ordered searching. Learning when to use each structure is just as important as knowing how to implement it.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            The next step in DSA is to move toward graph-based algorithms, where you will apply queues, heaps, recursion, and traversal techniques to much larger interconnected structures.
          </p>
      </div>
    ),
  },
];
