import React from "react";

// MODULE 12: TREES & BINARY SEARCH TREES — COMPLETE CURRICULUM SECTIONS
// Automatically generated with 100% text fidelity to original curriculum text.

export const JAVA_TREES_SECTIONS = [
  {
    id: "overview",
    number: "0",
    title: "Module 12: Curriculum Overview & Tree Foundations",
    category: "Course Roadmap · Objectives",
    content: (
      <div className="space-y-4 text-slate-200 leading-relaxed font-sans">
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Java + DSA
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Intermediate to Advanced
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Module 12
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Trees are one of the most important data structures in computer science. They are used in databases, file systems, compilers, search engines, networking, artificial intelligence, and many other systems.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            In this module, we will move from the fundamentals of tree structures to recursive algorithms, Binary Search Trees (BSTs), and advanced interview problems.
          </p>
      </div>
    )
  },
  {
    id: "intro-trees",
    number: "1",
    title: "1. Introduction to Trees & Hierarchical Structures",
    category: "Part 1 · Tree Foundations",
    content: (
      <div className="space-y-4 text-slate-200 leading-relaxed font-sans">
          <h4 className="text-base sm:text-lg font-bold text-white mt-6 mb-2 tracking-tight flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
            <span>1.1 What is a Tree?</span>
          </h4>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            A tree is a non-linear hierarchical data structure consisting of nodes connected through edges.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Unlike arrays, linked lists, stacks, and queues, which are generally organized linearly, trees represent hierarchical relationships.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Consider an organizational structure:
          </p>
          <div className="p-4 rounded-xl bg-stone-900 text-orange-300 font-mono text-xs overflow-x-auto leading-tight border border-stone-800 my-4 shadow-inner">
            <div className="text-[10px] text-slate-400 uppercase tracking-widest font-bold pb-2 mb-2 border-b border-stone-800 font-sans">
              Tree Hierarchy Diagram
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin] text-center sm:text-left">
              <code>{`CEO | ----------------- | | Manager A Manager B | | -------- -------- | | | | Dev1 Dev2 Dev3 Dev4`}</code>
            </pre>
          </div>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            This is a hierarchical structure.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            The CEO is at the top, managers are below the CEO, and developers are below their respective managers.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            A computer science tree represents this type of relationship.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            <a href="https://images.openai.com/static-rsc-4/_64H_gkb-Bwx2z3N96X1udJBgQutNi1HCNjCOzyNRJFQAJjx_LVQSh0rx1Dy4KWATlH94g18n_7Xi813hdEkM6zmGYPmXT1UH7gCHFYvz1I4p0L9DkB1Eito9Sf0gtz8mUqPQ6mMbDgPaEtXKTnV5A10SRVnwaYXL2a9d72vMns?purpose=inline" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-300 font-medium underline inline-flex items-center gap-0.5">Tree Data Structures: Definitions, Types, Applications, &amp; Comprehensive Exploration</a>
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            <a href="https://www.examsmeta.com/tree-data-structures-in-depth-exploration/?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-300 font-medium underline inline-flex items-center gap-0.5">examsmeta.com</a>
          </p>
          <h4 className="text-base sm:text-lg font-bold text-white mt-6 mb-2 tracking-tight flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
            <span>1.2 Why do we need trees?</span>
          </h4>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Imagine storing thousands of employee records.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            With an ordinary array, finding a particular employee may require searching through many elements.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            With an appropriately organized tree, searching can be much faster.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Trees are useful because they support:
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Hierarchical data representation.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Efficient searching and sorting.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Ordered data storage.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Range queries.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Recursive problem solving.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Efficient database indexing.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Expression evaluation and parsing.
          </p>
          <h4 className="text-base sm:text-lg font-bold text-white mt-6 mb-2 tracking-tight flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
            <span>1.3 Real-world applications</span>
          </h4>
          <div className="overflow-x-auto my-4 rounded-xl border border-slate-800 shadow-2xs">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-white border-b border-slate-800 font-semibold">
                <tr>
                  <th className="px-4 py-3">Application</th>
                  <th className="px-4 py-3">How trees are used</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">File systems</td>
                  <td className="px-4 py-2.5 text-slate-300">Directories and subdirectories</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">Databases</td>
                  <td className="px-4 py-2.5 text-slate-300">B-Trees and B+ Trees</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">Web browsers</td>
                  <td className="px-4 py-2.5 text-slate-300">DOM tree</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">Compilers</td>
                  <td className="px-4 py-2.5 text-slate-300">Abstract Syntax Trees</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">Networking</td>
                  <td className="px-4 py-2.5 text-slate-300">Routing trees and decision structures</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">AI</td>
                  <td className="px-4 py-2.5 text-slate-300">Decision trees and game trees</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">Search engines</td>
                  <td className="px-4 py-2.5 text-slate-300">Indexing and hierarchical structures</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">Operating systems</td>
                  <td className="px-4 py-2.5 text-slate-300">Process and resource hierarchies</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">Data compression</td>
                  <td className="px-4 py-2.5 text-slate-300">Huffman trees</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">For example, a file system:</td>
                  <td className="px-4 py-2.5 text-slate-300">C:/ | ---------------- | | Users Program Files | | -------- --------- | | | | Sam Admin Chrome Java</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            A directory can contain files and other directories, creating a tree structure.
          </p>
      </div>
    )
  },
  {
    id: "tree-terminology",
    number: "2",
    title: "2. Tree Terminology (Root, Leaves, Edges, Subtrees)",
    category: "Part 2 · Terminology",
    content: (
      <div className="space-y-4 text-slate-200 leading-relaxed font-sans">
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Before implementing trees, you must understand their terminology.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Consider the following tree:
          </p>
          <div className="p-4 rounded-xl bg-stone-900 text-orange-300 font-mono text-xs overflow-x-auto leading-tight border border-stone-800 my-4 shadow-inner">
            <div className="text-[10px] text-slate-400 uppercase tracking-widest font-bold pb-2 mb-2 border-b border-stone-800 font-sans">
              Tree Hierarchy Diagram
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin] text-center sm:text-left">
              <code>{`A / \\ B C / \\ / \\ D E F G / H`}</code>
            </pre>
          </div>
          <h4 className="text-base sm:text-lg font-bold text-white mt-6 mb-2 tracking-tight flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
            <span>2.1 Root Node</span>
          </h4>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            The root is the topmost node of a tree.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            In this example:
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            A
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            is the root.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Every non-empty tree has exactly one root.
          </p>
          <h4 className="text-base sm:text-lg font-bold text-white mt-6 mb-2 tracking-tight flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
            <span>2.2 Parent Node</span>
          </h4>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            A parent is a node that has one or more children.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Examples:
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            A is the parent of B and C.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            B is the parent of D and E.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            E is the parent of H.
          </p>
          <h4 className="text-base sm:text-lg font-bold text-white mt-6 mb-2 tracking-tight flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
            <span>2.3 Child Node</span>
          </h4>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            A child is a node directly connected below another node.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Examples:
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            B and C are children of A.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            D and E are children of B.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            H is a child of E.
          </p>
          <h4 className="text-base sm:text-lg font-bold text-white mt-6 mb-2 tracking-tight flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
            <span>2.4 Leaf Node</span>
          </h4>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            A leaf node is a node that has no children.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            In the example:
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            D, F, G, H
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            are leaf nodes.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            A leaf node is also called a terminal node.
          </p>
          <h4 className="text-base sm:text-lg font-bold text-white mt-6 mb-2 tracking-tight flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
            <span>2.5 Internal Node</span>
          </h4>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            An internal node is a node that has at least one child.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            In our example:
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            A, B, C, E
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            are internal nodes.
          </p>
          <h4 className="text-base sm:text-lg font-bold text-white mt-6 mb-2 tracking-tight flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
            <span>2.6 Sibling Nodes</span>
          </h4>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Nodes sharing the same parent are called siblings.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Examples:
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            B and C are siblings.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            D and E are siblings.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            F and G are siblings.
          </p>
          <h4 className="text-base sm:text-lg font-bold text-white mt-6 mb-2 tracking-tight flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
            <span>2.7 Ancestor</span>
          </h4>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            An ancestor is any node that appears on the path from the root to a particular node.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            For H:
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            A -&gt; B -&gt; E -&gt; H
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Its ancestors are:
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            A, B, E
          </p>
          <h4 className="text-base sm:text-lg font-bold text-white mt-6 mb-2 tracking-tight flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
            <span>2.8 Descendant</span>
          </h4>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            A descendant is any node below a particular node.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            For B:
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            D, E, H
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            are descendants of B.
          </p>
          <h4 className="text-base sm:text-lg font-bold text-white mt-6 mb-2 tracking-tight flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
            <span>2.9 Edge</span>
          </h4>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            An edge is the connection between two nodes.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            For the tree:
          </p>
          <div className="p-4 rounded-xl bg-stone-900 text-orange-300 font-mono text-xs overflow-x-auto leading-tight border border-stone-800 my-4 shadow-inner">
            <div className="text-[10px] text-slate-400 uppercase tracking-widest font-bold pb-2 mb-2 border-b border-stone-800 font-sans">
              Tree Hierarchy Diagram
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin] text-center sm:text-left">
              <code>{`A / \\ B C`}</code>
            </pre>
          </div>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            There are two edges:
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            A to B.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            A to C.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            A tree containing \(n\) nodes always has:
          </p>
          <div className="my-4 p-4 rounded-xl bg-orange-500/15/60 border border-orange-500/30/60 text-center font-mono text-sm sm:text-base text-white shadow-2xs overflow-x-auto">
            <span className="text-orange-300 font-bold mr-2">EQUATION:</span>
            <code>Edges=n-1</code>
          </div>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            This property applies to non-empty trees.
          </p>
          <h4 className="text-base sm:text-lg font-bold text-white mt-6 mb-2 tracking-tight flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
            <span>2.10 Path</span>
          </h4>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            A path is a sequence of nodes connected by edges.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            For example:
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            A -&gt; B -&gt; E -&gt; H
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            This path contains:
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            4 nodes.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            3 edges.
          </p>
          <h4 className="text-base sm:text-lg font-bold text-white mt-6 mb-2 tracking-tight flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
            <span>2.11 Subtree</span>
          </h4>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            A subtree is a smaller tree formed from a node and all its descendants.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            For example:
          </p>
          <div className="p-4 rounded-xl bg-stone-900 text-orange-300 font-mono text-xs overflow-x-auto leading-tight border border-stone-800 my-4 shadow-inner">
            <div className="text-[10px] text-slate-400 uppercase tracking-widest font-bold pb-2 mb-2 border-b border-stone-800 font-sans">
              Tree Hierarchy Diagram
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin] text-center sm:text-left">
              <code>{`B / \\ D E / H`}</code>
            </pre>
          </div>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            This is the subtree rooted at B.
          </p>
          <h4 className="text-base sm:text-lg font-bold text-white mt-6 mb-2 tracking-tight flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
            <span>2.12 Quick terminology table</span>
          </h4>
          <div className="overflow-x-auto my-4 rounded-xl border border-slate-800 shadow-2xs">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-white border-b border-slate-800 font-semibold">
                <tr>
                  <th className="px-4 py-3">Term</th>
                  <th className="px-4 py-3">Meaning</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">Root</td>
                  <td className="px-4 py-2.5 text-slate-300">Topmost node</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">Parent</td>
                  <td className="px-4 py-2.5 text-slate-300">Node directly above another node</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">Child</td>
                  <td className="px-4 py-2.5 text-slate-300">Node directly below another node</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">Leaf</td>
                  <td className="px-4 py-2.5 text-slate-300">Node with no children</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">Internal node</td>
                  <td className="px-4 py-2.5 text-slate-300">Node having at least one child</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">Sibling</td>
                  <td className="px-4 py-2.5 text-slate-300">Nodes sharing the same parent</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">Ancestor</td>
                  <td className="px-4 py-2.5 text-slate-300">Node above another node in its path</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">Descendant</td>
                  <td className="px-4 py-2.5 text-slate-300">Node below another node</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">Edge</td>
                  <td className="px-4 py-2.5 text-slate-300">Connection between two nodes</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">Path</td>
                  <td className="px-4 py-2.5 text-slate-300">Sequence of connected nodes</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">Subtree</td>
                  <td className="px-4 py-2.5 text-slate-300">A node and its descendants</td>
                </tr>
              </tbody>
            </table>
          </div>
      </div>
    )
  },
  {
    id: "height-depth-level",
    number: "3",
    title: "3. Height, Depth, and Level Metrics",
    category: "Part 3 · Metrics",
    content: (
      <div className="space-y-4 text-slate-200 leading-relaxed font-sans">
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            These three terms are frequently confused in technical interviews.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Let's understand them carefully.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Consider:
          </p>
          <div className="p-4 rounded-xl bg-stone-900 text-orange-300 font-mono text-xs overflow-x-auto leading-tight border border-stone-800 my-4 shadow-inner">
            <div className="text-[10px] text-slate-400 uppercase tracking-widest font-bold pb-2 mb-2 border-b border-stone-800 font-sans">
              Tree Hierarchy Diagram
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin] text-center sm:text-left">
              <code>{`A / \\ B C / \\ D E / F`}</code>
            </pre>
          </div>
          <h4 className="text-base sm:text-lg font-bold text-white mt-6 mb-2 tracking-tight flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
            <span>3.1 Depth of a Node</span>
          </h4>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Depth is the number of edges from the root to a particular node.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            The root has depth 0.
          </p>
          <div className="overflow-x-auto my-4 rounded-xl border border-slate-800 shadow-2xs">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-white border-b border-slate-800 font-semibold">
                <tr>
                  <th className="px-4 py-3">Node</th>
                  <th className="px-4 py-3">Depth</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">A</td>
                  <td className="px-4 py-2.5 text-slate-300">0</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">B</td>
                  <td className="px-4 py-2.5 text-slate-300">1</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">C</td>
                  <td className="px-4 py-2.5 text-slate-300">1</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">D</td>
                  <td className="px-4 py-2.5 text-slate-300">2</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">E</td>
                  <td className="px-4 py-2.5 text-slate-300">2</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">F</td>
                  <td className="px-4 py-2.5 text-slate-300">3</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            For node F:
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            A -&gt; B -&gt; E -&gt; F
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            There are three edges.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Therefore:
          </p>
          <div className="my-4 p-4 rounded-xl bg-orange-500/15/60 border border-orange-500/30/60 text-center font-mono text-sm sm:text-base text-white shadow-2xs overflow-x-auto">
            <span className="text-orange-300 font-bold mr-2">EQUATION:</span>
            <code>Depth(F)=3</code>
          </div>
          <h4 className="text-base sm:text-lg font-bold text-white mt-6 mb-2 tracking-tight flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
            <span>3.2 Height of a Node</span>
          </h4>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Height is the number of edges on the longest downward path from that node to a leaf.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            For example:
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Height of D = 0.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Height of F = 0.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Height of E = 1.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Height of B = 2.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Height of A = 3.
          </p>
          <h4 className="text-base sm:text-lg font-bold text-white mt-6 mb-2 tracking-tight flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
            <span>3.3 Height of a Tree</span>
          </h4>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            The height of a tree is the height of its root.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            In our example:
          </p>
          <div className="my-4 p-4 rounded-xl bg-orange-500/15/60 border border-orange-500/30/60 text-center font-mono text-sm sm:text-base text-white shadow-2xs overflow-x-auto">
            <span className="text-orange-300 font-bold mr-2">EQUATION:</span>
            <code>Height(Tree)=3</code>
          </div>
          <h4 className="text-base sm:text-lg font-bold text-white mt-6 mb-2 tracking-tight flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
            <span>3.4 Level of a Node</span>
          </h4>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            In this module, we define level as:
          </p>
          <div className="my-4 p-4 rounded-xl bg-orange-500/15/60 border border-orange-500/30/60 text-center font-mono text-sm sm:text-base text-white shadow-2xs overflow-x-auto">
            <span className="text-orange-300 font-bold mr-2">EQUATION:</span>
            <code>Level=Depth+1</code>
          </div>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Therefore:
          </p>
          <div className="overflow-x-auto my-4 rounded-xl border border-slate-800 shadow-2xs">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-white border-b border-slate-800 font-semibold">
                <tr>
                  <th className="px-4 py-3">Node</th>
                  <th className="px-4 py-3">Depth</th>
                  <th className="px-4 py-3">Level</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">A</td>
                  <td className="px-4 py-2.5 text-slate-300">0</td>
                  <td className="px-4 py-2.5 text-slate-300">1</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">B</td>
                  <td className="px-4 py-2.5 text-slate-300">1</td>
                  <td className="px-4 py-2.5 text-slate-300">2</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">C</td>
                  <td className="px-4 py-2.5 text-slate-300">1</td>
                  <td className="px-4 py-2.5 text-slate-300">2</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">D</td>
                  <td className="px-4 py-2.5 text-slate-300">2</td>
                  <td className="px-4 py-2.5 text-slate-300">3</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">E</td>
                  <td className="px-4 py-2.5 text-slate-300">2</td>
                  <td className="px-4 py-2.5 text-slate-300">3</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">F</td>
                  <td className="px-4 py-2.5 text-slate-300">3</td>
                  <td className="px-4 py-2.5 text-slate-300">4</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Some textbooks define root level as 0. Always check the convention used in a problem.
          </p>
          <h4 className="text-base sm:text-lg font-bold text-white mt-6 mb-2 tracking-tight flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
            <span>3.5 Height vs Depth</span>
          </h4>
          <div className="overflow-x-auto my-4 rounded-xl border border-slate-800 shadow-2xs">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-white border-b border-slate-800 font-semibold">
                <tr>
                  <th className="px-4 py-3">Feature</th>
                  <th className="px-4 py-3">Height</th>
                  <th className="px-4 py-3">Depth</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">Direction</td>
                  <td className="px-4 py-2.5 text-slate-300">Downward</td>
                  <td className="px-4 py-2.5 text-slate-300">Upward from root</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">Measured from</td>
                  <td className="px-4 py-2.5 text-slate-300">Current node to deepest leaf</td>
                  <td className="px-4 py-2.5 text-slate-300">Root to current node</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">Root</td>
                  <td className="px-4 py-2.5 text-slate-300">Tree height</td>
                  <td className="px-4 py-2.5 text-slate-300">0</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">Leaf</td>
                  <td className="px-4 py-2.5 text-slate-300">0</td>
                  <td className="px-4 py-2.5 text-slate-300">Depends on position</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="p-4 rounded-xl border bg-orange-500/10 border-orange-500/30 text-orange-950 my-4 text-xs sm:text-sm leading-relaxed">
            <div className="font-bold flex items-center gap-1.5 mb-1 text-white">
              <span>ℹ️</span>
              <span>Remember</span>
            </div>
            <p className="text-slate-300"></p>
          </div>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Depth = Distance from root.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Height = Distance to deepest leaf.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            For this module, height is measured using edges. Thus, an empty tree has height -1 and a single-node tree has height 0. Some implementations instead count nodes, so their values differ by one.
          </p>
      </div>
    )
  },
  {
    id: "binary-trees",
    number: "4",
    title: "4. Binary Trees & Maximum Node Capacities",
    category: "Part 4 · Binary Trees",
    content: (
      <div className="space-y-4 text-slate-200 leading-relaxed font-sans">
          <h4 className="text-base sm:text-lg font-bold text-white mt-6 mb-2 tracking-tight flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
            <span>4.1 What is a Binary Tree?</span>
          </h4>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            A binary tree is a tree in which each node can have at most two children.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            These children are called:
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Left child.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Right child.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Example:
          </p>
          <div className="p-4 rounded-xl bg-stone-900 text-orange-300 font-mono text-xs overflow-x-auto leading-tight border border-stone-800 my-4 shadow-inner">
            <div className="text-[10px] text-slate-400 uppercase tracking-widest font-bold pb-2 mb-2 border-b border-stone-800 font-sans">
              Tree Hierarchy Diagram
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin] text-center sm:text-left">
              <code>{`10 / \\ 20 30 / \\ \\ 40 50 60`}</code>
            </pre>
          </div>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Each node can have:
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Zero children.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            One child.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Two children.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            It cannot have more than two children.
          </p>
          <div className="p-4 rounded-xl bg-stone-900 text-orange-300 font-mono text-xs overflow-x-auto leading-tight border border-stone-800 my-4 shadow-inner">
            <div className="text-[10px] text-slate-400 uppercase tracking-widest font-bold pb-2 mb-2 border-b border-stone-800 font-sans">
              Tree Hierarchy Diagram
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin] text-center sm:text-left">
              <code>{`[대표적인 자료구조: 트리 - 파이썬과 컴퓨터 사이언스(자료구조) | 잔재미코딩](https://images.openai.com/static-rsc-4/8G2IkAlTILHhb5j-_hpIWTaXI9Qm0ShuTZjvST-jllA4OARSvKqoENkNZp6inBQTqRKcqkLrCcy3XgjmCvmIrwr9FOpBJXCOahhb-7vfN_s7XyLUYUnclRhjcvc8gtJCm7FMXEvosKmV0PJht3zjjTeGhlLQheBomE4JA00IzLc?purpose=inline)`}</code>
            </pre>
          </div>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            <a href="https://www.fun-coding.org/post/Chapter10-tree.html?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-300 font-medium underline inline-flex items-center gap-0.5">fun-coding.org</a>
          </p>
          <h4 className="text-base sm:text-lg font-bold text-white mt-6 mb-2 tracking-tight flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
            <span>4.2 Why are binary trees important?</span>
          </h4>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Binary trees form the foundation for several advanced data structures:
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Binary Search Trees.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            AVL Trees.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Red-Black Trees.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Heaps.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Expression Trees.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Segment Trees.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Decision Trees.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Many important DSA problems are solved using binary tree recursion.
          </p>
          <h4 className="text-base sm:text-lg font-bold text-white mt-6 mb-2 tracking-tight flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
            <span>4.3 Maximum number of nodes</span>
          </h4>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            At depth \(d\), a binary tree can have at most:
          </p>
          <div className="my-4 p-4 rounded-xl bg-orange-500/15/60 border border-orange-500/30/60 text-center font-mono text-sm sm:text-base text-white shadow-2xs overflow-x-auto">
            <span className="text-orange-300 font-bold mr-2">EQUATION:</span>
            <code>2^d</code>
          </div>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            nodes.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            For example:
          </p>
          <div className="overflow-x-auto my-4 rounded-xl border border-slate-800 shadow-2xs">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-white border-b border-slate-800 font-semibold">
                <tr>
                  <th className="px-4 py-3">Depth</th>
                  <th className="px-4 py-3">Maximum nodes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">0</td>
                  <td className="px-4 py-2.5 text-slate-300">1</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">1</td>
                  <td className="px-4 py-2.5 text-slate-300">2</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">2</td>
                  <td className="px-4 py-2.5 text-slate-300">4</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">3</td>
                  <td className="px-4 py-2.5 text-slate-300">8</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">4</td>
                  <td className="px-4 py-2.5 text-slate-300">16</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            For a binary tree with height \(h\), the maximum number of nodes is:
          </p>
          <div className="my-4 p-4 rounded-xl bg-orange-500/15/60 border border-orange-500/30/60 text-center font-mono text-sm sm:text-base text-white shadow-2xs overflow-x-auto">
            <span className="text-orange-300 font-bold mr-2">EQUATION:</span>
            <code>N=2^&#123;h+1&#125;-1</code>
          </div>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            For example, height = 2:
          </p>
          <div className="my-4 p-4 rounded-xl bg-orange-500/15/60 border border-orange-500/30/60 text-center font-mono text-sm sm:text-base text-white shadow-2xs overflow-x-auto">
            <span className="text-orange-300 font-bold mr-2">EQUATION:</span>
            <code>N=2^3-1=7</code>
          </div>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            A perfect binary tree of height 2 contains seven nodes.
          </p>
      </div>
    )
  },
  {
    id: "types-binary-trees",
    number: "5",
    title: "5. Types of Binary Trees (Full, Complete, Perfect, Balanced, Skewed)",
    category: "Part 5 · Tree Taxonomies",
    content: (
      <div className="space-y-4 text-slate-200 leading-relaxed font-sans">
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            There are several important types of binary trees.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Understanding the differences is essential because interview questions often ask you to identify a particular tree structure.
          </p>
          <h4 className="text-base sm:text-lg font-bold text-white mt-6 mb-2 tracking-tight flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
            <span>5.1 Full Binary Tree</span>
          </h4>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            A full binary tree is a binary tree in which every node has either:
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Zero children.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Exactly two children.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            A node cannot have only one child.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Example:
          </p>
          <div className="p-4 rounded-xl bg-stone-900 text-orange-300 font-mono text-xs overflow-x-auto leading-tight border border-stone-800 my-4 shadow-inner">
            <div className="text-[10px] text-slate-400 uppercase tracking-widest font-bold pb-2 mb-2 border-b border-stone-800 font-sans">
              Tree Hierarchy Diagram
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin] text-center sm:text-left">
              <code>{`1 / \\ 2 3 / \\ / \\ 4 5 6 7`}</code>
            </pre>
          </div>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            This is a full binary tree.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Another valid example:
          </p>
          <div className="p-4 rounded-xl bg-stone-900 text-orange-300 font-mono text-xs overflow-x-auto leading-tight border border-stone-800 my-4 shadow-inner">
            <div className="text-[10px] text-slate-400 uppercase tracking-widest font-bold pb-2 mb-2 border-b border-stone-800 font-sans">
              Tree Hierarchy Diagram
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin] text-center sm:text-left">
              <code>{`1 / \\ 2 3 / \\ 4 5`}</code>
            </pre>
          </div>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Here:
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Node 1 has two children.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Node 2 has two children.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Nodes 3, 4, and 5 are leaves.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            All nodes have either zero or two children.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Invalid full binary tree:
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            1 / 2
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Node 1 has only one child.
          </p>
          <h4 className="text-base sm:text-lg font-bold text-white mt-6 mb-2 tracking-tight flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
            <span>5.2 Complete Binary Tree</span>
          </h4>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            A complete binary tree follows two rules:
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Every level except possibly the last must be completely filled.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Nodes in the last level must be filled from left to right without gaps.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Example:
          </p>
          <div className="p-4 rounded-xl bg-stone-900 text-orange-300 font-mono text-xs overflow-x-auto leading-tight border border-stone-800 my-4 shadow-inner">
            <div className="text-[10px] text-slate-400 uppercase tracking-widest font-bold pb-2 mb-2 border-b border-stone-800 font-sans">
              Tree Hierarchy Diagram
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin] text-center sm:text-left">
              <code>{`1 / \\ 2 3 / \\ / 4 5 6`}</code>
            </pre>
          </div>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            This is complete.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            But this is not:
          </p>
          <div className="p-4 rounded-xl bg-stone-900 text-orange-300 font-mono text-xs overflow-x-auto leading-tight border border-stone-800 my-4 shadow-inner">
            <div className="text-[10px] text-slate-400 uppercase tracking-widest font-bold pb-2 mb-2 border-b border-stone-800 font-sans">
              Tree Hierarchy Diagram
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin] text-center sm:text-left">
              <code>{`1 / \\ 2 3 \\ / 5 6`}</code>
            </pre>
          </div>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            There is a gap before the last-level nodes.
          </p>
          <div className="p-4 rounded-xl bg-stone-900 text-orange-300 font-mono text-xs overflow-x-auto leading-tight border border-stone-800 my-4 shadow-inner">
            <div className="text-[10px] text-slate-400 uppercase tracking-widest font-bold pb-2 mb-2 border-b border-stone-800 font-sans">
              Tree Hierarchy Diagram
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin] text-center sm:text-left">
              <code>{`[A Visual Intro to Complete Binary Tree, Heaps, and Heap Sort (with source code - Python) | by Surya Verma | Medium](https://images.openai.com/static-rsc-4/OhyuirQp6cazKYtqmi61JwIGJ-uP0rbZb9PfqkIvLWEuDWHRAnB7tbizu58J7dpaCW6Ha2EMQBNVTFuaEL2NYFplHuzg6s-gkHLztFmAzs_JlO6P2qOXNN0SePezhS4eRN6QRxqPl6t1IJ9C7Q2SB0TDDSO2Rob8bdqyOsjwfvI?purpose=inline)`}</code>
            </pre>
          </div>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            <a href="https://medium.com/%40surya09verma/a-visual-intro-to-complete-binary-tree-heaps-and-heap-sort-with-source-code-python-a72a638cbe3e?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-300 font-medium underline inline-flex items-center gap-0.5">medium.com</a>
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Where is it used?
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Complete binary trees are important in implementing binary heaps.
          </p>
          <h4 className="text-base sm:text-lg font-bold text-white mt-6 mb-2 tracking-tight flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
            <span>5.3 Perfect Binary Tree</span>
          </h4>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            A perfect binary tree is a binary tree where:
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Every internal node has exactly two children.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            All leaf nodes are at the same depth.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Example:
          </p>
          <div className="p-4 rounded-xl bg-stone-900 text-orange-300 font-mono text-xs overflow-x-auto leading-tight border border-stone-800 my-4 shadow-inner">
            <div className="text-[10px] text-slate-400 uppercase tracking-widest font-bold pb-2 mb-2 border-b border-stone-800 font-sans">
              Tree Hierarchy Diagram
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin] text-center sm:text-left">
              <code>{`1 / \\ 2 3 / \\ / \\ 4 5 6 7`}</code>
            </pre>
          </div>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            This is a perfect binary tree.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            For a perfect binary tree with height \(h\):
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Total nodes:
          </p>
          <div className="my-4 p-4 rounded-xl bg-orange-500/15/60 border border-orange-500/30/60 text-center font-mono text-sm sm:text-base text-white shadow-2xs overflow-x-auto">
            <span className="text-orange-300 font-bold mr-2">EQUATION:</span>
            <code>N=2^&#123;h+1&#125;-1</code>
          </div>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Leaf nodes:
          </p>
          <div className="my-4 p-4 rounded-xl bg-orange-500/15/60 border border-orange-500/30/60 text-center font-mono text-sm sm:text-base text-white shadow-2xs overflow-x-auto">
            <span className="text-orange-300 font-bold mr-2">EQUATION:</span>
            <code>L=2^h</code>
          </div>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            For height 3:
          </p>
          <div className="my-4 p-4 rounded-xl bg-orange-500/15/60 border border-orange-500/30/60 text-center font-mono text-sm sm:text-base text-white shadow-2xs overflow-x-auto">
            <span className="text-orange-300 font-bold mr-2">EQUATION:</span>
            <code>N=2^4-1=15</code>
          </div>
          <div className="my-4 p-4 rounded-xl bg-orange-500/15/60 border border-orange-500/30/60 text-center font-mono text-sm sm:text-base text-white shadow-2xs overflow-x-auto">
            <span className="text-orange-300 font-bold mr-2">EQUATION:</span>
            <code>L=2^3=8</code>
          </div>
          <h4 className="text-base sm:text-lg font-bold text-white mt-6 mb-2 tracking-tight flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
            <span>5.4 Balanced Binary Tree</span>
          </h4>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            A height-balanced binary tree is a binary tree in which the heights of the left and right subtrees differ by at most one at every node.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Formally:
          </p>
          <div className="my-4 p-4 rounded-xl bg-orange-500/15/60 border border-orange-500/30/60 text-center font-mono text-sm sm:text-base text-white shadow-2xs overflow-x-auto">
            <span className="text-orange-300 font-bold mr-2">EQUATION:</span>
            <code>|Height(left)-Height(right)|\leq1</code>
          </div>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Example:
          </p>
          <div className="p-4 rounded-xl bg-stone-900 text-orange-300 font-mono text-xs overflow-x-auto leading-tight border border-stone-800 my-4 shadow-inner">
            <div className="text-[10px] text-slate-400 uppercase tracking-widest font-bold pb-2 mb-2 border-b border-stone-800 font-sans">
              Tree Hierarchy Diagram
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin] text-center sm:text-left">
              <code>{`10 / \\ 5 15 / \\ / 2 7 12`}</code>
            </pre>
          </div>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            This is height-balanced.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Example of an unbalanced binary tree:
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            10 / 8 / 6 / 4
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            The tree is heavily skewed.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Balanced structures are important because they keep operations efficient.
          </p>
          <h4 className="text-base sm:text-lg font-bold text-white mt-6 mb-2 tracking-tight flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
            <span>5.5 Skewed Binary Tree</span>
          </h4>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            A skewed binary tree is a tree in which each internal node has only one child.
          </p>
          <div className="p-4 rounded-xl bg-stone-900 text-orange-300 font-mono text-xs overflow-x-auto leading-tight border border-stone-800 my-4 shadow-inner">
            <div className="text-[10px] text-slate-400 uppercase tracking-widest font-bold pb-2 mb-2 border-b border-stone-800 font-sans">
              Tree Hierarchy Diagram
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin] text-center sm:text-left">
              <code>{`Left-skewed:`}</code>
            </pre>
          </div>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            1 / 2 / 3 / 4
          </p>
          <div className="p-4 rounded-xl bg-stone-900 text-orange-300 font-mono text-xs overflow-x-auto leading-tight border border-stone-800 my-4 shadow-inner">
            <div className="text-[10px] text-slate-400 uppercase tracking-widest font-bold pb-2 mb-2 border-b border-stone-800 font-sans">
              Tree Hierarchy Diagram
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin] text-center sm:text-left">
              <code>{`Right-skewed:`}</code>
            </pre>
          </div>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            1 \ 2 \ 3 \ 4
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            A skewed tree resembles a linked list.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Its height can become:
          </p>
          <div className="my-4 p-4 rounded-xl bg-orange-500/15/60 border border-orange-500/30/60 text-center font-mono text-sm sm:text-base text-white shadow-2xs overflow-x-auto">
            <span className="text-orange-300 font-bold mr-2">EQUATION:</span>
            <code>O(n)</code>
          </div>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            This can make search operations inefficient.
          </p>
          <h4 className="text-base sm:text-lg font-bold text-white mt-6 mb-2 tracking-tight flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
            <span>5.6 Comparison of binary tree types</span>
          </h4>
          <div className="overflow-x-auto my-4 rounded-xl border border-slate-800 shadow-2xs">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-white border-b border-slate-800 font-semibold">
                <tr>
                  <th className="px-4 py-3">Type</th>
                  <th className="px-4 py-3">Main condition</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">Full</td>
                  <td className="px-4 py-2.5 text-slate-300">Every node has 0 or 2 children</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">Complete</td>
                  <td className="px-4 py-2.5 text-slate-300">Last level filled from left to right</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">Perfect</td>
                  <td className="px-4 py-2.5 text-slate-300">All internal nodes have 2 children and leaves share a level</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">Balanced</td>
                  <td className="px-4 py-2.5 text-slate-300">Left and right subtree heights differ by at most 1</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">Skewed</td>
                  <td className="px-4 py-2.5 text-slate-300">Each internal node has only one child</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="p-4 rounded-xl border bg-orange-500/10 border-orange-500/30 text-orange-950 my-4 text-xs sm:text-sm leading-relaxed">
            <div className="font-bold flex items-center gap-1.5 mb-1 text-white">
              <span>💡</span>
              <span>Important</span>
            </div>
            <p className="text-slate-300">A full tree is not necessarily complete. A complete tree is not necessarily full. A perfect tree is both full and complete.</p>
          </div>
      </div>
    )
  },
  {
    id: "tree-representation",
    number: "6",
    title: "6. Tree Representation in Java (References vs Arrays)",
    category: "Part 6 · Representation",
    content: (
      <div className="space-y-4 text-slate-200 leading-relaxed font-sans">
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Now let's implement our first binary tree.
          </p>
          <h4 className="text-base sm:text-lg font-bold text-white mt-6 mb-2 tracking-tight flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
            <span>6.1 Node structure</span>
          </h4>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Every binary tree node contains three important fields:
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Data.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Reference to the left child.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Reference to the right child.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Java implementation:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`class TreeNode  {
  int val;
  TreeNode left;
  TreeNode right;
  TreeNode(int val)  {
    this.val = val;
    this.left = null;
    this.right = null;

  }

}`}</code>
            </pre>
          </div>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Explanation:
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            int val;
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Stores the value of the node.
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`TreeNode left;`}</code>
            </pre>
          </div>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Stores the reference to the left child.
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`TreeNode right;`}</code>
            </pre>
          </div>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Stores the reference to the right child.
          </p>
          <h4 className="text-base sm:text-lg font-bold text-white mt-6 mb-2 tracking-tight flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
            <span>6.2 Creating a binary tree manually</span>
          </h4>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Let's construct:
          </p>
          <div className="p-4 rounded-xl bg-stone-900 text-orange-300 font-mono text-xs overflow-x-auto leading-tight border border-stone-800 my-4 shadow-inner">
            <div className="text-[10px] text-slate-400 uppercase tracking-widest font-bold pb-2 mb-2 border-b border-stone-800 font-sans">
              Tree Hierarchy Diagram
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin] text-center sm:text-left">
              <code>{`10 / \\ 20 30 / \\ 40 50`}</code>
            </pre>
          </div>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Java:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public class Main  {
  public static void main(String[] args)  {
    TreeNode root = new TreeNode(10);
    root.left = new TreeNode(20);
    root.right = new TreeNode(30);
    root.left.left = new TreeNode(40);
    root.left.right = new TreeNode(50);

  }

}`}</code>
            </pre>
          </div>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Let's understand the references:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`TreeNode root = new TreeNode(10);`}</code>
            </pre>
          </div>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Creates the root node.
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`root.left = new TreeNode(20);`}</code>
            </pre>
          </div>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Connects 20 to the left of 10.
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`root.right = new TreeNode(30);`}</code>
            </pre>
          </div>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Connects 30 to the right of 10.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            root.left.left = new TreeNode(40);
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Connects 40 to the left of 20.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            root.left.right = new TreeNode(50);
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Connects 50 to the right of 20.
          </p>
          <h4 className="text-base sm:text-lg font-bold text-white mt-6 mb-2 tracking-tight flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
            <span>6.3 Visual representation</span>
          </h4>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            <a href="https://images.openai.com/static-rsc-4/omfwkOXj_G65ikufPnPDEcpxBT3x4iKzuAAfOx_o__gxoYK9g_m9qSTrT-gXJIgpwnQVS_XtU87hkFBrV59cV3udqyGHxTM7rxjOt0_53zPdNEBuVP-QfJFPXbBZzlJfQFQdmrIVGp51OvqxyR55tpvk3u24ZK2BQoFhM-Gn5Jo?purpose=inline" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-300 font-medium underline inline-flex items-center gap-0.5">Binary Tree Representation in Java - Tutorial</a>
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            <a href="https://takeuforward.org/binary-tree/binary-tree-representation-in-java?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-300 font-medium underline inline-flex items-center gap-0.5">takeuforward.org</a>
          </p>
          <h4 className="text-base sm:text-lg font-bold text-white mt-6 mb-2 tracking-tight flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
            <span>6.4 Complete Java class</span>
          </h4>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            For the remainder of the module, use this node structure unless a problem specifically requires something different.
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`class TreeNode  {
  int val;
  TreeNode left;
  TreeNode right;
  TreeNode(int val)  {
    this.val = val;

  }

}`}</code>
            </pre>
          </div>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            You can construct any binary tree by creating nodes and connecting their references.
          </p>
          <h4 className="text-base sm:text-lg font-bold text-white mt-6 mb-2 tracking-tight flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
            <span>6.5 Array representation of a binary tree</span>
          </h4>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            A binary tree can also be represented using an array.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Consider:
          </p>
          <div className="p-4 rounded-xl bg-stone-900 text-orange-300 font-mono text-xs overflow-x-auto leading-tight border border-stone-800 my-4 shadow-inner">
            <div className="text-[10px] text-slate-400 uppercase tracking-widest font-bold pb-2 mb-2 border-b border-stone-800 font-sans">
              Tree Hierarchy Diagram
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin] text-center sm:text-left">
              <code>{`10 / \\ 20 30 / \\ / \\ 40 50 60 70`}</code>
            </pre>
          </div>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Array:
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            [10, 20, 30, 40, 50, 60, 70]
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Using zero-based indexing:
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            For a node at index \(i\):
          </p>
          <div className="my-4 p-4 rounded-xl bg-orange-500/15/60 border border-orange-500/30/60 text-center font-mono text-sm sm:text-base text-white shadow-2xs overflow-x-auto">
            <span className="text-orange-300 font-bold mr-2">EQUATION:</span>
            <code>LeftChild=2i+1</code>
          </div>
          <div className="my-4 p-4 rounded-xl bg-orange-500/15/60 border border-orange-500/30/60 text-center font-mono text-sm sm:text-base text-white shadow-2xs overflow-x-auto">
            <span className="text-orange-300 font-bold mr-2">EQUATION:</span>
            <code>RightChild=2i+2</code>
          </div>
          <div className="my-4 p-4 rounded-xl bg-orange-500/15/60 border border-orange-500/30/60 text-center font-mono text-sm sm:text-base text-white shadow-2xs overflow-x-auto">
            <span className="text-orange-300 font-bold mr-2">EQUATION:</span>
            <code>Parent=\left\lfloor\frac&#123;i-1&#125;&#123;2&#125;\right\rfloor</code>
          </div>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Example:
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Node 20 is at index 1.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Left child:
          </p>
          <div className="my-4 p-4 rounded-xl bg-orange-500/15/60 border border-orange-500/30/60 text-center font-mono text-sm sm:text-base text-white shadow-2xs overflow-x-auto">
            <span className="text-orange-300 font-bold mr-2">EQUATION:</span>
            <code>2(1)+1=3</code>
          </div>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Index 3 contains 40.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Right child:
          </p>
          <div className="my-4 p-4 rounded-xl bg-orange-500/15/60 border border-orange-500/30/60 text-center font-mono text-sm sm:text-base text-white shadow-2xs overflow-x-auto">
            <span className="text-orange-300 font-bold mr-2">EQUATION:</span>
            <code>2(1)+2=4</code>
          </div>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Index 4 contains 50.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            When should you use each representation?
          </p>
          <div className="overflow-x-auto my-4 rounded-xl border border-slate-800 shadow-2xs">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-white border-b border-slate-800 font-semibold">
                <tr>
                  <th className="px-4 py-3">Representation</th>
                  <th className="px-4 py-3">Suitable use</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">Node references</td>
                  <td className="px-4 py-2.5 text-slate-300">General binary trees and BSTs</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">Arrays</td>
                  <td className="px-4 py-2.5 text-slate-300">Complete binary trees and heaps</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Array representation can waste considerable space when the tree is sparse or heavily skewed.
          </p>
      </div>
    )
  },
  {
    id: "recursive-traversal",
    number: "7",
    title: "7. Recursive Tree Traversal & Call Stack Dynamics",
    category: "Part 7 · Traversal Mechanics",
    content: (
      <div className="space-y-4 text-slate-200 leading-relaxed font-sans">
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Extremely Important for Interviews
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Traversal means visiting every node in a tree according to a particular order.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Suppose we have:
          </p>
          <div className="p-4 rounded-xl bg-stone-900 text-orange-300 font-mono text-xs overflow-x-auto leading-tight border border-stone-800 my-4 shadow-inner">
            <div className="text-[10px] text-slate-400 uppercase tracking-widest font-bold pb-2 mb-2 border-b border-stone-800 font-sans">
              Tree Hierarchy Diagram
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin] text-center sm:text-left">
              <code>{`1 / \\ 2 3 / \\ / \\ 4 5 6 7`}</code>
            </pre>
          </div>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            There are four fundamental traversal techniques:
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Preorder.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Inorder.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Postorder.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Level-order.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            The first three are commonly implemented using recursion. Level-order is usually implemented using a queue.
          </p>
          <h4 className="text-base sm:text-lg font-bold text-white mt-6 mb-2 tracking-tight flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
            <span>7.1 Understanding recursion in trees</span>
          </h4>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Before implementing traversal, understand this idea:
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Every node has its own smaller left subtree and right subtree.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Therefore, a tree traversal can be expressed recursively.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            A general recursive pattern is:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`void traverse(TreeNode root)  {
  if (root == null)  {
    return;

  }
  // Process current node traverse(root.left);
  traverse(root.right);

}`}</code>
            </pre>
          </div>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            The base condition:
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            if (root == null)
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            prevents recursion from continuing beyond a missing child.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            This is called the base case.
          </p>
          <h4 className="text-base sm:text-lg font-bold text-white mt-6 mb-2 tracking-tight flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
            <span>7.2 Recursive call stack</span>
          </h4>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Suppose we traverse:
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            1 / 2 / 3
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            The recursive calls can go:
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            traverse(1) | traverse(2) | traverse(3) | traverse(null)
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            When the base case is reached, the calls return.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Understanding this call-and-return behavior is essential for solving tree problems.
          </p>
      </div>
    )
  },
  {
    id: "preorder-traversal",
    number: "8",
    title: "8. Preorder Traversal (Root → Left → Right)",
    category: "Part 8 · Preorder DFS",
    content: (
      <div className="space-y-4 text-slate-200 leading-relaxed font-sans">
          <h4 className="text-base sm:text-lg font-bold text-white mt-6 mb-2 tracking-tight flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
            <span>8.1 What is preorder traversal?</span>
          </h4>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Preorder follows this order:
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Root.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Left subtree.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Right subtree.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Formula:
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Root -&gt; Left -&gt; Right
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            For the tree:
          </p>
          <div className="p-4 rounded-xl bg-stone-900 text-orange-300 font-mono text-xs overflow-x-auto leading-tight border border-stone-800 my-4 shadow-inner">
            <div className="text-[10px] text-slate-400 uppercase tracking-widest font-bold pb-2 mb-2 border-b border-stone-800 font-sans">
              Tree Hierarchy Diagram
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin] text-center sm:text-left">
              <code>{`1 / \\ 2 3 / \\ / \\ 4 5 6 7`}</code>
            </pre>
          </div>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Traversal:
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            1, 2, 4, 5, 3, 6, 7
          </p>
          <h4 className="text-base sm:text-lg font-bold text-white mt-6 mb-2 tracking-tight flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
            <span>8.2 Step-by-step explanation</span>
          </h4>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Start at node 1.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Visit 1.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Move to the left subtree.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Visit 2.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Visit 4.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Return to 2.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Visit 5.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Return to 1.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Move to the right subtree.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Visit 3.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Visit 6.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Visit 7.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Final answer:
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            1 2 4 5 3 6 7
          </p>
          <h4 className="text-base sm:text-lg font-bold text-white mt-6 mb-2 tracking-tight flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
            <span>8.3 Java implementation</span>
          </h4>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`static void preorder(TreeNode root)  {
  if (root == null)  {
    return;

  }
  System.out.print(root.val + " ");
  preorder(root.left);
  preorder(root.right);

}`}</code>
            </pre>
          </div>
          <h4 className="text-base sm:text-lg font-bold text-white mt-6 mb-2 tracking-tight flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
            <span>8.4 Dry run</span>
          </h4>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Consider:
          </p>
          <div className="p-4 rounded-xl bg-stone-900 text-orange-300 font-mono text-xs overflow-x-auto leading-tight border border-stone-800 my-4 shadow-inner">
            <div className="text-[10px] text-slate-400 uppercase tracking-widest font-bold pb-2 mb-2 border-b border-stone-800 font-sans">
              Tree Hierarchy Diagram
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin] text-center sm:text-left">
              <code>{`10 / \\ 20 30`}</code>
            </pre>
          </div>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Execution:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`preorder(10) print 10 preorder(20) print 20 preorder(null) preorder(null) preorder(30) print 30 preorder(null) preorder(null)`}</code>
            </pre>
          </div>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Output:
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            10 20 30
          </p>
          <h4 className="text-base sm:text-lg font-bold text-white mt-6 mb-2 tracking-tight flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
            <span>8.5 Applications</span>
          </h4>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Preorder traversal is useful for:
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Copying a tree.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Serializing a tree when null markers are included.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Prefix expression generation.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Constructing a tree from preorder information.
          </p>
      </div>
    )
  },
  {
    id: "inorder-traversal",
    number: "9",
    title: "9. Inorder Traversal (Left → Root → Right)",
    category: "Part 9 · Inorder DFS",
    content: (
      <div className="space-y-4 text-slate-200 leading-relaxed font-sans">
          <h4 className="text-base sm:text-lg font-bold text-white mt-6 mb-2 tracking-tight flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
            <span>9.1 What is inorder traversal?</span>
          </h4>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Inorder follows:
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Left subtree.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Root.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Right subtree.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Formula:
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Left -&gt; Root -&gt; Right
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            For our tree:
          </p>
          <div className="p-4 rounded-xl bg-stone-900 text-orange-300 font-mono text-xs overflow-x-auto leading-tight border border-stone-800 my-4 shadow-inner">
            <div className="text-[10px] text-slate-400 uppercase tracking-widest font-bold pb-2 mb-2 border-b border-stone-800 font-sans">
              Tree Hierarchy Diagram
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin] text-center sm:text-left">
              <code>{`1 / \\ 2 3 / \\ / \\ 4 5 6 7`}</code>
            </pre>
          </div>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Output:
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            4, 2, 5, 1, 6, 3, 7
          </p>
          <h4 className="text-base sm:text-lg font-bold text-white mt-6 mb-2 tracking-tight flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
            <span>9.2 Step-by-step explanation</span>
          </h4>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Start at node 1.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Go to its left subtree.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Visit 4 first.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Return and visit 2.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Visit 5.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Return and visit 1.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Go right.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Visit 6.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Visit 3.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Visit 7.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Output:
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            4 2 5 1 6 3 7
          </p>
          <h4 className="text-base sm:text-lg font-bold text-white mt-6 mb-2 tracking-tight flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
            <span>9.3 Java implementation</span>
          </h4>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`static void inorder(TreeNode root)  {
  if (root == null)  {
    return;

  }
  inorder(root.left);
  System.out.print(root.val + " ");
  inorder(root.right);

}`}</code>
            </pre>
          </div>
          <h4 className="text-base sm:text-lg font-bold text-white mt-6 mb-2 tracking-tight flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
            <span>9.4 Why is inorder important?</span>
          </h4>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Inorder traversal has an especially important property:
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Inorder traversal of a Binary Search Tree produces values in sorted ascending order, assuming the BST follows the usual strict ordering convention.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Example BST:
          </p>
          <div className="p-4 rounded-xl bg-stone-900 text-orange-300 font-mono text-xs overflow-x-auto leading-tight border border-stone-800 my-4 shadow-inner">
            <div className="text-[10px] text-slate-400 uppercase tracking-widest font-bold pb-2 mb-2 border-b border-stone-800 font-sans">
              Tree Hierarchy Diagram
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin] text-center sm:text-left">
              <code>{`8 / \\ 4 12 / \\ / \\ 2 6 10 14`}</code>
            </pre>
          </div>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Inorder:
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            2, 4, 6, 8, 10, 12, 14
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            This property is used in many interview problems.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Applications:
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Getting sorted BST values.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Finding the kth smallest BST element.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Validating a BST.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Producing infix expressions.
          </p>
      </div>
    )
  },
  {
    id: "postorder-traversal",
    number: "10",
    title: "10. Postorder Traversal (Left → Right → Root)",
    category: "Part 10 · Postorder DFS",
    content: (
      <div className="space-y-4 text-slate-200 leading-relaxed font-sans">
          <h4 className="text-base sm:text-lg font-bold text-white mt-6 mb-2 tracking-tight flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
            <span>10.1 What is postorder traversal?</span>
          </h4>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Postorder follows:
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Left subtree.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Right subtree.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Root.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Formula:
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Left -&gt; Right -&gt; Root
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            For our tree:
          </p>
          <div className="p-4 rounded-xl bg-stone-900 text-orange-300 font-mono text-xs overflow-x-auto leading-tight border border-stone-800 my-4 shadow-inner">
            <div className="text-[10px] text-slate-400 uppercase tracking-widest font-bold pb-2 mb-2 border-b border-stone-800 font-sans">
              Tree Hierarchy Diagram
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin] text-center sm:text-left">
              <code>{`1 / \\ 2 3 / \\ / \\ 4 5 6 7`}</code>
            </pre>
          </div>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Output:
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            4, 5, 2, 6, 7, 3, 1
          </p>
          <h4 className="text-base sm:text-lg font-bold text-white mt-6 mb-2 tracking-tight flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
            <span>10.2 Step-by-step explanation</span>
          </h4>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Start at node 1.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Traverse the left subtree.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Visit 4.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Visit 5.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Visit 2.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Traverse the right subtree.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Visit 6.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Visit 7.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Visit 3.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Visit 1 last.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Final output:
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            4 5 2 6 7 3 1
          </p>
          <h4 className="text-base sm:text-lg font-bold text-white mt-6 mb-2 tracking-tight flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
            <span>10.3 Java implementation</span>
          </h4>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`static void postorder(TreeNode root)  {
  if (root == null)  {
    return;

  }
  postorder(root.left);
  postorder(root.right);
  System.out.print(root.val + " ");

}`}</code>
            </pre>
          </div>
          <h4 className="text-base sm:text-lg font-bold text-white mt-6 mb-2 tracking-tight flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
            <span>10.4 Applications</span>
          </h4>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Postorder traversal is useful for:
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Deleting a tree.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Evaluating expression trees.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Processing child nodes before their parent.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Calculating values that depend on both subtrees.
          </p>
      </div>
    )
  },
  {
    id: "comparison-traversals",
    number: "11",
    title: "11. Comparison of Recursive Traversals",
    category: "Part 11 · Traversal Benchmarks",
    content: (
      <div className="space-y-4 text-slate-200 leading-relaxed font-sans">
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            For the same tree:
          </p>
          <div className="p-4 rounded-xl bg-stone-900 text-orange-300 font-mono text-xs overflow-x-auto leading-tight border border-stone-800 my-4 shadow-inner">
            <div className="text-[10px] text-slate-400 uppercase tracking-widest font-bold pb-2 mb-2 border-b border-stone-800 font-sans">
              Tree Hierarchy Diagram
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin] text-center sm:text-left">
              <code>{`1 / \\ 2 3 / \\ / \\ 4 5 6 7`}</code>
            </pre>
          </div>
          <div className="overflow-x-auto my-4 rounded-xl border border-slate-800 shadow-2xs">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-white border-b border-slate-800 font-semibold">
                <tr>
                  <th className="px-4 py-3">Traversal</th>
                  <th className="px-4 py-3">Order</th>
                  <th className="px-4 py-3">Output</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">Preorder</td>
                  <td className="px-4 py-2.5 text-slate-300">Root, Left, Right</td>
                  <td className="px-4 py-2.5 text-slate-300">1 2 4 5 3 6 7</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">Inorder</td>
                  <td className="px-4 py-2.5 text-slate-300">Left, Root, Right</td>
                  <td className="px-4 py-2.5 text-slate-300">4 2 5 1 6 3 7</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">Postorder</td>
                  <td className="px-4 py-2.5 text-slate-300">Left, Right, Root</td>
                  <td className="px-4 py-2.5 text-slate-300">4 5 2 6 7 3 1</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Easy memory trick
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Preorder: Root comes first.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Inorder: Root comes in the middle.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Postorder: Root comes last.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Only the position of the root changes.
          </p>
          <h4 className="text-base sm:text-lg font-bold text-white mt-6 mb-2 tracking-tight flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
            <span>11.1 One Java program for all three traversals</span>
          </h4>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public class Main  {
  static void preorder(TreeNode root)  {
    if (root == null) return;
    System.out.print(root.val + " ");
    preorder(root.left);
    preorder(root.right);

  }
  static void inorder(TreeNode root)  {
    if (root == null) return;
    inorder(root.left);
    System.out.print(root.val + " ");
    inorder(root.right);

  }
  static void postorder(TreeNode root)  {
    if (root == null) return;
    postorder(root.left);
    postorder(root.right);
    System.out.print(root.val + " ");

  }
  public static void main(String[] args)  {
    TreeNode root = new TreeNode(1);
    root.left = new TreeNode(2);
    root.right = new TreeNode(3);
    root.left.left = new TreeNode(4);
    root.left.right = new TreeNode(5);
    root.right.left = new TreeNode(6);
    root.right.right = new TreeNode(7);
    System.out.print("Preorder: ");
    preorder(root);
    System.out.print("\\nInorder: ");
    inorder(root);
    System.out.print("\\nPostorder: ");
    postorder(root);

  }

}`}</code>
            </pre>
          </div>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Output:
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Preorder: 1 2 4 5 3 6 7 Inorder: 4 2 5 1 6 3 7 Postorder: 4 5 2 6 7 3 1
          </p>
          <h4 className="text-base sm:text-lg font-bold text-white mt-6 mb-2 tracking-tight flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
            <span>11.2 Time and space complexity</span>
          </h4>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            All three traversals visit each node exactly once.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            For \(n\) nodes:
          </p>
          <div className="my-4 p-4 rounded-xl bg-orange-500/15/60 border border-orange-500/30/60 text-center font-mono text-sm sm:text-base text-white shadow-2xs overflow-x-auto">
            <span className="text-orange-300 font-bold mr-2">EQUATION:</span>
            <code>Time=O(n)</code>
          </div>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Auxiliary space is the recursion stack:
          </p>
          <div className="my-4 p-4 rounded-xl bg-orange-500/15/60 border border-orange-500/30/60 text-center font-mono text-sm sm:text-base text-white shadow-2xs overflow-x-auto">
            <span className="text-orange-300 font-bold mr-2">EQUATION:</span>
            <code>Space=O(h)</code>
          </div>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Where \(h\) is the tree height.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Balanced tree: \(O(\log n)\) stack space.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Skewed tree: \(O(n)\) stack space.
          </p>
      </div>
    )
  },
  {
    id: "level-order-traversal",
    number: "12",
    title: "12. Level-Order Traversal & Breadth-First Search (BFS)",
    category: "Part 12 · BFS Level-Order",
    content: (
      <div className="space-y-4 text-slate-200 leading-relaxed font-sans">
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Important — BFS
          </p>
          <h4 className="text-base sm:text-lg font-bold text-white mt-6 mb-2 tracking-tight flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
            <span>12.1 What is level-order traversal?</span>
          </h4>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Level-order traversal visits nodes level by level, starting from the root and moving from left to right.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            It is also called Breadth-First Search (BFS).
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Consider:
          </p>
          <div className="p-4 rounded-xl bg-stone-900 text-orange-300 font-mono text-xs overflow-x-auto leading-tight border border-stone-800 my-4 shadow-inner">
            <div className="text-[10px] text-slate-400 uppercase tracking-widest font-bold pb-2 mb-2 border-b border-stone-800 font-sans">
              Tree Hierarchy Diagram
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin] text-center sm:text-left">
              <code>{`1 / \\ 2 3 / \\ / \\ 4 5 6 7`}</code>
            </pre>
          </div>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Level-order output:
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            1, 2, 3, 4, 5, 6, 7
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Unlike preorder, inorder, and postorder, level-order traversal uses a queue rather than recursive DFS.
          </p>
          <h4 className="text-base sm:text-lg font-bold text-white mt-6 mb-2 tracking-tight flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
            <span>12.2 What is a Queue?</span>
          </h4>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            A queue follows FIFO:
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            First In, First Out.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            The first element inserted is the first element removed.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Important queue operations:
          </p>
          <div className="overflow-x-auto my-4 rounded-xl border border-slate-800 shadow-2xs">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-white border-b border-slate-800 font-semibold">
                <tr>
                  <th className="px-4 py-3">Operation</th>
                  <th className="px-4 py-3">Meaning</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">offer()</td>
                  <td className="px-4 py-2.5 text-slate-300">Insert element</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">poll()</td>
                  <td className="px-4 py-2.5 text-slate-300">Remove and return front element</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">peek()</td>
                  <td className="px-4 py-2.5 text-slate-300">View front element</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">isEmpty()</td>
                  <td className="px-4 py-2.5 text-slate-300">Check whether queue is empty</td>
                </tr>
              </tbody>
            </table>
          </div>
          <h4 className="text-base sm:text-lg font-bold text-white mt-6 mb-2 tracking-tight flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
            <span>12.3 How does level-order traversal work?</span>
          </h4>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Algorithm:
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Create an empty queue.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Insert the root.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            While the queue is not empty:
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Remove the front node.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Visit its value.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Insert its left child, if present.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Insert its right child, if present.
          </p>
          <h4 className="text-base sm:text-lg font-bold text-white mt-6 mb-2 tracking-tight flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
            <span>12.4 Dry run</span>
          </h4>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Tree:
          </p>
          <div className="p-4 rounded-xl bg-stone-900 text-orange-300 font-mono text-xs overflow-x-auto leading-tight border border-stone-800 my-4 shadow-inner">
            <div className="text-[10px] text-slate-400 uppercase tracking-widest font-bold pb-2 mb-2 border-b border-stone-800 font-sans">
              Tree Hierarchy Diagram
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin] text-center sm:text-left">
              <code>{`1 / \\ 2 3 / \\ 4 5`}</code>
            </pre>
          </div>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Initial queue:
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            [1]
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Remove 1 and insert 2, 3:
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            [2, 3]
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Remove 2 and insert 4, 5:
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            [3, 4, 5]
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Remove 3:
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            [4, 5]
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Remove 4:
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            [5]
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Remove 5:
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            []
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Output:
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            1 2 3 4 5
          </p>
          <div className="p-4 rounded-xl bg-stone-900 text-orange-300 font-mono text-xs overflow-x-auto leading-tight border border-stone-800 my-4 shadow-inner">
            <div className="text-[10px] text-slate-400 uppercase tracking-widest font-bold pb-2 mb-2 border-b border-stone-800 font-sans">
              Tree Hierarchy Diagram
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin] text-center sm:text-left">
              <code>{`[Breadth First Search | Complete Guide to Breadth First Search Strategy](https://images.openai.com/static-rsc-4/Or-hMT78t-9rPFfX0IZTMZsEwVZqsu5bS2a-ru2bP5kRTlxgU7tKQG9jv5N9P_gsgC0z5Vj2qspqw9GhAE45vfasQlU7us2IIKITdT6JQo2ZgUsIHfuCtDvduaj8t-D_4925Yiqx_R9EF3FwYpjbJ32YKeCfd6EH2oKKjVLz3WI?purpose=inline)`}</code>
            </pre>
          </div>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            <a href="https://www.educba.com/breadth-first-search/?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-300 font-medium underline inline-flex items-center gap-0.5">educba.com</a>
          </p>
          <h4 className="text-base sm:text-lg font-bold text-white mt-6 mb-2 tracking-tight flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
            <span>12.5 Java implementation</span>
          </h4>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`import java.util.*;
static void levelOrder(TreeNode root)  {
  if (root == null)  {
    return;

  }
  Queue<TreeNode> queue = new LinkedList<>();
  queue.offer(root);
  while (!queue.isEmpty())  {
    TreeNode current = queue.poll();
    System.out.print(current.val + " ");
    if (current.left != null)  {
      queue.offer(current.left);

    }
    if (current.right != null)  {
      queue.offer(current.right);

    }

  }

}`}</code>
            </pre>
          </div>
          <h4 className="text-base sm:text-lg font-bold text-white mt-6 mb-2 tracking-tight flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
            <span>12.6 Level-order traversal separated by levels</span>
          </h4>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Sometimes interviewers ask for the output as a list of lists.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Input:
          </p>
          <div className="p-4 rounded-xl bg-stone-900 text-orange-300 font-mono text-xs overflow-x-auto leading-tight border border-stone-800 my-4 shadow-inner">
            <div className="text-[10px] text-slate-400 uppercase tracking-widest font-bold pb-2 mb-2 border-b border-stone-800 font-sans">
              Tree Hierarchy Diagram
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin] text-center sm:text-left">
              <code>{`1 / \\ 2 3 / \\ / \\ 4 5 6 7`}</code>
            </pre>
          </div>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Expected output:
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            [ [1], [2, 3], [4, 5, 6, 7] ]
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            We can solve this by recording the number of nodes at the beginning of each level.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Java implementation:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`import java.util.*;
public class Main  {
  static List<List<Integer>> levelOrder(TreeNode root)  {
    List<List<Integer>> result = new ArrayList<>();
    if (root == null)  {
      return result;

    }
    Queue<TreeNode> queue = new LinkedList<>();
    queue.offer(root);
    while (!queue.isEmpty())  {
      int size = queue.size();
      List<Integer> level = new ArrayList<>();
      for (int i = 0; i < size; i++)  {
        TreeNode current = queue.poll();
        level.add(current.val);
        if (current.left != null)  {
          queue.offer(current.left);

        }
        if (current.right != null)  {
          queue.offer(current.right);

        }

      }
      result.add(level);

    }
    return result;

  }

}`}</code>
            </pre>
          </div>
          <h4 className="text-base sm:text-lg font-bold text-white mt-6 mb-2 tracking-tight flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
            <span>12.7 Complexity</span>
          </h4>
          <div className="overflow-x-auto my-4 rounded-xl border border-slate-800 shadow-2xs">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-white border-b border-slate-800 font-semibold">
                <tr>
                  <th className="px-4 py-3">Complexity</th>
                  <th className="px-4 py-3">Value</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">Time</td>
                  <td className="px-4 py-2.5 text-slate-300">\(O(n)\)</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">Queue space</td>
                  <td className="px-4 py-2.5 text-slate-300">\(O(w)\)</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">Maximum auxiliary space</td>
                  <td className="px-4 py-2.5 text-slate-300">\(O(n)\)</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Here, \(w\) is the maximum number of nodes at any one level.
          </p>
          <h4 className="text-base sm:text-lg font-bold text-white mt-6 mb-2 tracking-tight flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
            <span>12.8 DFS vs BFS</span>
          </h4>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            DFS means Depth-First Search.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Preorder, inorder, and postorder are DFS traversals.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            BFS means Breadth-First Search.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Level-order traversal is BFS.
          </p>
          <div className="overflow-x-auto my-4 rounded-xl border border-slate-800 shadow-2xs">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-white border-b border-slate-800 font-semibold">
                <tr>
                  <th className="px-4 py-3">Feature</th>
                  <th className="px-4 py-3">DFS</th>
                  <th className="px-4 py-3">BFS</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">Traversal</td>
                  <td className="px-4 py-2.5 text-slate-300">Deep before moving to another branch</td>
                  <td className="px-4 py-2.5 text-slate-300">Level by level</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">Common implementation</td>
                  <td className="px-4 py-2.5 text-slate-300">Recursion or stack</td>
                  <td className="px-4 py-2.5 text-slate-300">Queue</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">Tree examples</td>
                  <td className="px-4 py-2.5 text-slate-300">Preorder, inorder, postorder</td>
                  <td className="px-4 py-2.5 text-slate-300">Level-order</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">Typical application</td>
                  <td className="px-4 py-2.5 text-slate-300">Path problems</td>
                  <td className="px-4 py-2.5 text-slate-300">Shortest path in an unweighted graph</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300"></td>
                  <td className="px-4 py-2.5 text-slate-300"></td>
                  <td className="px-4 py-2.5 text-slate-300"></td>
                </tr>
              </tbody>
            </table>
          </div>
      </div>
    )
  },
  {
    id: "bst-fundamentals",
    number: "13",
    title: "13. Binary Search Trees (BST) Fundamentals & Invariants",
    category: "Part 13 · BST Architecture",
    content: (
      <div className="space-y-4 text-slate-200 leading-relaxed font-sans">
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Core Topic of Module 12
          </p>
          <h4 className="text-base sm:text-lg font-bold text-white mt-6 mb-2 tracking-tight flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
            <span>13.1 What is a Binary Search Tree?</span>
          </h4>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            A Binary Search Tree is a special type of binary tree that follows an ordering property.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            For every node:
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            All values in its left subtree are smaller than the node's value.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            All values in its right subtree are greater than the node's value.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            This property must hold for every node, not only the root.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Example:
          </p>
          <div className="p-4 rounded-xl bg-stone-900 text-orange-300 font-mono text-xs overflow-x-auto leading-tight border border-stone-800 my-4 shadow-inner">
            <div className="text-[10px] text-slate-400 uppercase tracking-widest font-bold pb-2 mb-2 border-b border-stone-800 font-sans">
              Tree Hierarchy Diagram
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin] text-center sm:text-left">
              <code>{`50 / \\ 30 70 / \\ / \\ 20 40 60 80`}</code>
            </pre>
          </div>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            For root 50:
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Left subtree: 20, 30, 40 Right subtree: 60, 70, 80
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            All left values are smaller than 50.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            All right values are greater than 50.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            This is a valid BST.
          </p>
          <div className="p-4 rounded-xl bg-stone-900 text-orange-300 font-mono text-xs overflow-x-auto leading-tight border border-stone-800 my-4 shadow-inner">
            <div className="text-[10px] text-slate-400 uppercase tracking-widest font-bold pb-2 mb-2 border-b border-stone-800 font-sans">
              Tree Hierarchy Diagram
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin] text-center sm:text-left">
              <code>{`[DSA Part 10: BST & Balanced Trees - AVL & Red-Black | Wasil Zafar](https://images.openai.com/static-rsc-4/o-wQl1IOz7yxr66jyGDl1rAx-qA3vxw6Jf8OfyBgOSYmQoYgqbRPFYYfxgRF-WVFEUtikXQqBJGwvZ4WcDbroPpTbCYDto1Cta1_14DSV7KSFNvyyhxTc0h6sW5bdbLttCYrUsKzyWwjdVvhIOOO-5emomYuT_3BlFa9_h0vlG4?purpose=inline)`}</code>
            </pre>
          </div>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            <a href="https://www.wasilzafar.com/pages/series/data-structures/dsa-bst-avl-redblack.html?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-300 font-medium underline inline-flex items-center gap-0.5">wasilzafar.com</a>
          </p>
          <h4 className="text-base sm:text-lg font-bold text-white mt-6 mb-2 tracking-tight flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
            <span>13.2 BST ordering rule</span>
          </h4>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            The standard strict BST property is:
          </p>
          <div className="my-4 p-4 rounded-xl bg-orange-500/15/60 border border-orange-500/30/60 text-center font-mono text-sm sm:text-base text-white shadow-2xs overflow-x-auto">
            <span className="text-orange-300 font-bold mr-2">EQUATION:</span>
            <code>LeftSubtree&lt;Root&lt;RightSubtree</code>
          </div>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            A more complete mathematical definition is:
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            For every node with value \(x\):
          </p>
          <div className="my-4 p-4 rounded-xl bg-orange-500/15/60 border border-orange-500/30/60 text-center font-mono text-sm sm:text-base text-white shadow-2xs overflow-x-auto">
            <span className="text-orange-300 font-bold mr-2">EQUATION:</span>
            <code>\forall v\in LeftSubtree,\quad v&lt;x</code>
          </div>
          <div className="my-4 p-4 rounded-xl bg-orange-500/15/60 border border-orange-500/30/60 text-center font-mono text-sm sm:text-base text-white shadow-2xs overflow-x-auto">
            <span className="text-orange-300 font-bold mr-2">EQUATION:</span>
            <code>\forall v\in RightSubtree,\quad v&gt;x</code>
          </div>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            This is important because duplicate values require a separate policy. In this module, we will not insert duplicate values.
          </p>
          <h4 className="text-base sm:text-lg font-bold text-white mt-6 mb-2 tracking-tight flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
            <span>13.3 Why do we need BSTs?</span>
          </h4>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Suppose we have 100,000 numbers stored in an unsorted array.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Searching for a value may require:
          </p>
          <div className="my-4 p-4 rounded-xl bg-orange-500/15/60 border border-orange-500/30/60 text-center font-mono text-sm sm:text-base text-white shadow-2xs overflow-x-auto">
            <span className="text-orange-300 font-bold mr-2">EQUATION:</span>
            <code>O(n)</code>
          </div>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            comparisons.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            A reasonably balanced BST can search in:
          </p>
          <div className="my-4 p-4 rounded-xl bg-orange-500/15/60 border border-orange-500/30/60 text-center font-mono text-sm sm:text-base text-white shadow-2xs overflow-x-auto">
            <span className="text-orange-300 font-bold mr-2">EQUATION:</span>
            <code>O(\log n)</code>
          </div>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            time.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            For example:
          </p>
          <div className="p-4 rounded-xl bg-stone-900 text-orange-300 font-mono text-xs overflow-x-auto leading-tight border border-stone-800 my-4 shadow-inner">
            <div className="text-[10px] text-slate-400 uppercase tracking-widest font-bold pb-2 mb-2 border-b border-stone-800 font-sans">
              Tree Hierarchy Diagram
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin] text-center sm:text-left">
              <code>{`50 / \\ 30 70 / \\ / \\ 20 40 60 80`}</code>
            </pre>
          </div>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            To search for 60:
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Compare 60 with 50.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            60 is greater, move right.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Compare 60 with 70.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            60 is smaller, move left.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Find 60.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            We did not need to inspect every node.
          </p>
          <h4 className="text-base sm:text-lg font-bold text-white mt-6 mb-2 tracking-tight flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
            <span>13.4 BST vs Binary Tree</span>
          </h4>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Every BST is a binary tree, but every binary tree is not a BST.
          </p>
          <div className="overflow-x-auto my-4 rounded-xl border border-slate-800 shadow-2xs">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-white border-b border-slate-800 font-semibold">
                <tr>
                  <th className="px-4 py-3">Feature</th>
                  <th className="px-4 py-3">Binary Tree</th>
                  <th className="px-4 py-3">BST</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">Maximum children</td>
                  <td className="px-4 py-2.5 text-slate-300">2</td>
                  <td className="px-4 py-2.5 text-slate-300">2</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">Ordering rule</td>
                  <td className="px-4 py-2.5 text-slate-300">Not required</td>
                  <td className="px-4 py-2.5 text-slate-300">Left &lt; Root &lt; Right</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">Searching</td>
                  <td className="px-4 py-2.5 text-slate-300">Often \(O(n)\)</td>
                  <td className="px-4 py-2.5 text-slate-300">Average \(O(\log n)\)</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">Inorder output</td>
                  <td className="px-4 py-2.5 text-slate-300">Not necessarily sorted</td>
                  <td className="px-4 py-2.5 text-slate-300">Sorted ascending</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">Insertion</td>
                  <td className="px-4 py-2.5 text-slate-300">Depends on design</td>
                  <td className="px-4 py-2.5 text-slate-300">Follows ordering property</td>
                </tr>
              </tbody>
            </table>
          </div>
      </div>
    )
  },
  {
    id: "search-bst",
    number: "14",
    title: "14. Search in a BST (Recursive & Iterative)",
    category: "Part 14 · BST Search",
    content: (
      <div className="space-y-4 text-slate-200 leading-relaxed font-sans">
          <h4 className="text-base sm:text-lg font-bold text-white mt-6 mb-2 tracking-tight flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
            <span>14.1 Problem</span>
          </h4>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Given the root of a BST and a target value, determine whether the target exists.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Example:
          </p>
          <div className="p-4 rounded-xl bg-stone-900 text-orange-300 font-mono text-xs overflow-x-auto leading-tight border border-stone-800 my-4 shadow-inner">
            <div className="text-[10px] text-slate-400 uppercase tracking-widest font-bold pb-2 mb-2 border-b border-stone-800 font-sans">
              Tree Hierarchy Diagram
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin] text-center sm:text-left">
              <code>{`50 / \\ 30 70 / \\ / \\ 20 40 60 80`}</code>
            </pre>
          </div>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Search for:
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            60
          </p>
          <h4 className="text-base sm:text-lg font-bold text-white mt-6 mb-2 tracking-tight flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
            <span>14.2 Search logic</span>
          </h4>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            At every node:
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Case 1: Target equals the current node.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Return the node.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Case 2: Target is smaller.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Move to the left subtree.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Case 3: Target is greater.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Move to the right subtree.
          </p>
          <h4 className="text-base sm:text-lg font-bold text-white mt-6 mb-2 tracking-tight flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
            <span>14.3 Dry run</span>
          </h4>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Search for 60:
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Current = 50 60 &gt; 50 Move right Current = 70 60 &lt; 70 Move left Current = 60 Found
          </p>
          <h4 className="text-base sm:text-lg font-bold text-white mt-6 mb-2 tracking-tight flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
            <span>14.4 Recursive Java implementation</span>
          </h4>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`static TreeNode searchBST(TreeNode root, int target)  {
  if (root == null || root.val == target)  {
    return root;

  }
  if (target < root.val)  {
    return searchBST(root.left, target);

  }
  return searchBST(root.right, target);

}`}</code>
            </pre>
          </div>
          <h4 className="text-base sm:text-lg font-bold text-white mt-6 mb-2 tracking-tight flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
            <span>14.5 Iterative Java implementation</span>
          </h4>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`static TreeNode searchBST(TreeNode root, int target)  {
  TreeNode current = root;
  while (current != null)  {
    if (target == current.val)  {
      return current;

    }
    if (target < current.val)  {
      current = current.left;

    }
    else  {
      current = current.right;

    }

  }
  return null;

}`}</code>
            </pre>
          </div>
          <h4 className="text-base sm:text-lg font-bold text-white mt-6 mb-2 tracking-tight flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
            <span>14.6 Complexity</span>
          </h4>
          <div className="overflow-x-auto my-4 rounded-xl border border-slate-800 shadow-2xs">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-white border-b border-slate-800 font-semibold">
                <tr>
                  <th className="px-4 py-3">Tree condition</th>
                  <th className="px-4 py-3">Time</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">Balanced BST</td>
                  <td className="px-4 py-2.5 text-slate-300">\(O(\log n)\)</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">Average under suitable insertion assumptions</td>
                  <td className="px-4 py-2.5 text-slate-300">\(O(\log n)\)</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">Skewed BST</td>
                  <td className="px-4 py-2.5 text-slate-300">\(O(n)\)</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Auxiliary space:
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Recursive: \(O(h)\).
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Iterative: \(O(1)\).
          </p>
      </div>
    )
  },
  {
    id: "insert-bst",
    number: "15",
    title: "15. BST Insertion & Reference Re-linking",
    category: "Part 15 · BST Insertion",
    content: (
      <div className="space-y-4 text-slate-200 leading-relaxed font-sans">
          <h4 className="text-base sm:text-lg font-bold text-white mt-6 mb-2 tracking-tight flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
            <span>15.1 What is BST insertion?</span>
          </h4>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            BST insertion means adding a new value while maintaining the BST ordering property.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Consider:
          </p>
          <div className="p-4 rounded-xl bg-stone-900 text-orange-300 font-mono text-xs overflow-x-auto leading-tight border border-stone-800 my-4 shadow-inner">
            <div className="text-[10px] text-slate-400 uppercase tracking-widest font-bold pb-2 mb-2 border-b border-stone-800 font-sans">
              Tree Hierarchy Diagram
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin] text-center sm:text-left">
              <code>{`50 / \\ 30 70 / \\ 20 40`}</code>
            </pre>
          </div>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Insert:
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            60
          </p>
          <h4 className="text-base sm:text-lg font-bold text-white mt-6 mb-2 tracking-tight flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
            <span>15.2 Insertion logic</span>
          </h4>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            If the tree is empty, create a new root.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Compare the value with the current node.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            If smaller, move left.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            If greater, move right.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Continue until an empty child position is found.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Insert the new node there.
          </p>
          <h4 className="text-base sm:text-lg font-bold text-white mt-6 mb-2 tracking-tight flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
            <span>15.3 Dry run</span>
          </h4>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Insert 60.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            60 &gt; 50 Move right 60 &lt; 70 Move left Left child of 70 is null Insert 60
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Result:
          </p>
          <div className="p-4 rounded-xl bg-stone-900 text-orange-300 font-mono text-xs overflow-x-auto leading-tight border border-stone-800 my-4 shadow-inner">
            <div className="text-[10px] text-slate-400 uppercase tracking-widest font-bold pb-2 mb-2 border-b border-stone-800 font-sans">
              Tree Hierarchy Diagram
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin] text-center sm:text-left">
              <code>{`50 / \\ 30 70 / \\ / 20 40 60`}</code>
            </pre>
          </div>
          <h4 className="text-base sm:text-lg font-bold text-white mt-6 mb-2 tracking-tight flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
            <span>15.4 Recursive Java implementation</span>
          </h4>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`static TreeNode insertBST(TreeNode root, int value)  {
  if (root == null)  {
    return new TreeNode(value);

  }
  if (value < root.val)  {
    root.left = insertBST(root.left, value);

  }
  else if (value > root.val)  {
    root.right = insertBST(root.right, value);

  }
  return root;

}`}</code>
            </pre>
          </div>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Notice:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`root.left = insertBST(root.left, value);`}</code>
            </pre>
          </div>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            We reconnect the returned subtree to the current node.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            The same applies to the right subtree.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            The implementation ignores duplicates because neither comparison succeeds when the value is equal.
          </p>
          <h4 className="text-base sm:text-lg font-bold text-white mt-6 mb-2 tracking-tight flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
            <span>15.5 Iterative insertion</span>
          </h4>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`static TreeNode insertBST(TreeNode root, int value)  {
  TreeNode newNode = new TreeNode(value);
  if (root == null)  {
    return newNode;

  }
  TreeNode current = root;
  while (true)  {
    if (value < current.val)  {
      if (current.left == null)  {
        current.left = newNode;
        break;

      }
      current = current.left;

    }
    else if (value > current.val)  {
      if (current.right == null)  {
        current.right = newNode;
        break;

      }
      current = current.right;

    }
    else  {
      break;

    }

  }
  return root;

}`}</code>
            </pre>
          </div>
          <h4 className="text-base sm:text-lg font-bold text-white mt-6 mb-2 tracking-tight flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
            <span>15.6 Complexity</span>
          </h4>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Condition
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Time
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Balanced BST
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            \(O(\log n)\)
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Skewed BST
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            \(O(n)\)
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Recursive auxiliary space: \(O(h)\).
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Iterative auxiliary space: \(O(1)\).
          </p>
      </div>
    )
  },
  {
    id: "min-max-bst",
    number: "16",
    title: "16. BST Minimum and Maximum Extremes",
    category: "Part 16 · BST Extremes",
    content: (
      <div className="space-y-4 text-slate-200 leading-relaxed font-sans">
          <h4 className="text-base sm:text-lg font-bold text-white mt-6 mb-2 tracking-tight flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
            <span>16.1 Finding the minimum node</span>
          </h4>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            In a BST, the smallest value is always located at the leftmost node.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Example:
          </p>
          <div className="p-4 rounded-xl bg-stone-900 text-orange-300 font-mono text-xs overflow-x-auto leading-tight border border-stone-800 my-4 shadow-inner">
            <div className="text-[10px] text-slate-400 uppercase tracking-widest font-bold pb-2 mb-2 border-b border-stone-800 font-sans">
              Tree Hierarchy Diagram
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin] text-center sm:text-left">
              <code>{`50 / \\ 30 70 / \\ / \\ 20 40 60 80 / 10`}</code>
            </pre>
          </div>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Minimum value:
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            10
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Why?
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Because every move to the left leads to a smaller value.
          </p>
          <h4 className="text-base sm:text-lg font-bold text-white mt-6 mb-2 tracking-tight flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
            <span>16.2 Java implementation</span>
          </h4>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`static TreeNode findMin(TreeNode root)  {
  if (root == null)  {
    return null;

  }
  while (root.left != null)  {
    root = root.left;

  }
  return root;

}`}</code>
            </pre>
          </div>
          <h4 className="text-base sm:text-lg font-bold text-white mt-6 mb-2 tracking-tight flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
            <span>16.3 Finding the maximum node</span>
          </h4>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            The largest value is at the rightmost node.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Java:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`static TreeNode findMax(TreeNode root)  {
  if (root == null)  {
    return null;

  }
  while (root.right != null)  {
    root = root.right;

  }
  return root;

}`}</code>
            </pre>
          </div>
          <h4 className="text-base sm:text-lg font-bold text-white mt-6 mb-2 tracking-tight flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
            <span>16.4 Complexity</span>
          </h4>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Both operations take:
          </p>
          <div className="my-4 p-4 rounded-xl bg-orange-500/15/60 border border-orange-500/30/60 text-center font-mono text-sm sm:text-base text-white shadow-2xs overflow-x-auto">
            <span className="text-orange-300 font-bold mr-2">EQUATION:</span>
            <code>O(h)</code>
          </div>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            For a balanced tree:
          </p>
          <div className="my-4 p-4 rounded-xl bg-orange-500/15/60 border border-orange-500/30/60 text-center font-mono text-sm sm:text-base text-white shadow-2xs overflow-x-auto">
            <span className="text-orange-300 font-bold mr-2">EQUATION:</span>
            <code>O(\log n)</code>
          </div>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            For a skewed tree:
          </p>
          <div className="my-4 p-4 rounded-xl bg-orange-500/15/60 border border-orange-500/30/60 text-center font-mono text-sm sm:text-base text-white shadow-2xs overflow-x-auto">
            <span className="text-orange-300 font-bold mr-2">EQUATION:</span>
            <code>O(n)</code>
          </div>
          <div className="p-4 rounded-xl border bg-orange-500/10 border-orange-500/30 text-orange-950 my-4 text-xs sm:text-sm leading-relaxed">
            <div className="font-bold flex items-center gap-1.5 mb-1 text-white">
              <span>💡</span>
              <span>Interview question</span>
            </div>
            <p className="text-slate-300">Why do we not need to traverse the entire BST to find the minimum?</p>
          </div>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Because the BST ordering property guarantees that the smallest element must be on the leftmost path.
          </p>
      </div>
    )
  },
  {
    id: "delete-bst",
    number: "17",
    title: "17. BST Deletion (Leaf, One Child & Two Children Successor)",
    category: "Part 17 · BST Deletion",
    content: (
      <div className="space-y-4 text-slate-200 leading-relaxed font-sans">
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Very Important — Interview Topic
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Deletion is one of the most important BST operations because it involves multiple structural cases.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            The objective is to remove a node while maintaining the BST property.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            There are three main cases.
          </p>
          <h4 className="text-base sm:text-lg font-bold text-white mt-6 mb-2 tracking-tight flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
            <span>17.1 Case 1 — Deleting a leaf node</span>
          </h4>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            A leaf node has no children.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Example:
          </p>
          <div className="p-4 rounded-xl bg-stone-900 text-orange-300 font-mono text-xs overflow-x-auto leading-tight border border-stone-800 my-4 shadow-inner">
            <div className="text-[10px] text-slate-400 uppercase tracking-widest font-bold pb-2 mb-2 border-b border-stone-800 font-sans">
              Tree Hierarchy Diagram
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin] text-center sm:text-left">
              <code>{`50 / \\ 30 70 / \\ / \\ 20 40 60 80`}</code>
            </pre>
          </div>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Delete:
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            20
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Since 20 has no children, remove it directly.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Result:
          </p>
          <div className="p-4 rounded-xl bg-stone-900 text-orange-300 font-mono text-xs overflow-x-auto leading-tight border border-stone-800 my-4 shadow-inner">
            <div className="text-[10px] text-slate-400 uppercase tracking-widest font-bold pb-2 mb-2 border-b border-stone-800 font-sans">
              Tree Hierarchy Diagram
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin] text-center sm:text-left">
              <code>{`50 / \\ 30 70 \\ / \\ 40 60 80`}</code>
            </pre>
          </div>
          <h4 className="text-base sm:text-lg font-bold text-white mt-6 mb-2 tracking-tight flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
            <span>17.2 Case 2 — Deleting a node with one child</span>
          </h4>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Consider:
          </p>
          <div className="p-4 rounded-xl bg-stone-900 text-orange-300 font-mono text-xs overflow-x-auto leading-tight border border-stone-800 my-4 shadow-inner">
            <div className="text-[10px] text-slate-400 uppercase tracking-widest font-bold pb-2 mb-2 border-b border-stone-800 font-sans">
              Tree Hierarchy Diagram
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin] text-center sm:text-left">
              <code>{`50 / \\ 30 70 / 60`}</code>
            </pre>
          </div>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Delete:
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            70
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Node 70 has one child: 60.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            We connect its parent directly to its child.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Result:
          </p>
          <div className="p-4 rounded-xl bg-stone-900 text-orange-300 font-mono text-xs overflow-x-auto leading-tight border border-stone-800 my-4 shadow-inner">
            <div className="text-[10px] text-slate-400 uppercase tracking-widest font-bold pb-2 mb-2 border-b border-stone-800 font-sans">
              Tree Hierarchy Diagram
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin] text-center sm:text-left">
              <code>{`50 / \\ 30 60`}</code>
            </pre>
          </div>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            The child replaces the deleted node.
          </p>
          <h4 className="text-base sm:text-lg font-bold text-white mt-6 mb-2 tracking-tight flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
            <span>17.3 Case 3 — Deleting a node with two children</span>
          </h4>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            This is the most interesting case.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Consider:
          </p>
          <div className="p-4 rounded-xl bg-stone-900 text-orange-300 font-mono text-xs overflow-x-auto leading-tight border border-stone-800 my-4 shadow-inner">
            <div className="text-[10px] text-slate-400 uppercase tracking-widest font-bold pb-2 mb-2 border-b border-stone-800 font-sans">
              Tree Hierarchy Diagram
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin] text-center sm:text-left">
              <code>{`50 / \\ 30 70 / \\ / \\ 20 40 60 80`}</code>
            </pre>
          </div>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Delete:
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            50
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Node 50 has two children.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            We cannot simply remove it because both subtrees must remain connected and the BST property must be preserved.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            There are two common strategies:
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Replace it with its inorder successor.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Replace it with its inorder predecessor.
          </p>
          <h4 className="text-base sm:text-lg font-bold text-white mt-6 mb-2 tracking-tight flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
            <span>17.4 Inorder successor</span>
          </h4>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            The inorder successor is the smallest value greater than the current node.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            In a BST:
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Inorder successor = Minimum value in the right subtree.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            For node 50:
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Right subtree:
          </p>
          <div className="p-4 rounded-xl bg-stone-900 text-orange-300 font-mono text-xs overflow-x-auto leading-tight border border-stone-800 my-4 shadow-inner">
            <div className="text-[10px] text-slate-400 uppercase tracking-widest font-bold pb-2 mb-2 border-b border-stone-800 font-sans">
              Tree Hierarchy Diagram
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin] text-center sm:text-left">
              <code>{`70 / \\ 60 80`}</code>
            </pre>
          </div>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Minimum value = 60.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Replace 50 with 60.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Then delete the original 60 node from the right subtree.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Result:
          </p>
          <div className="p-4 rounded-xl bg-stone-900 text-orange-300 font-mono text-xs overflow-x-auto leading-tight border border-stone-800 my-4 shadow-inner">
            <div className="text-[10px] text-slate-400 uppercase tracking-widest font-bold pb-2 mb-2 border-b border-stone-800 font-sans">
              Tree Hierarchy Diagram
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin] text-center sm:text-left">
              <code>{`60 / \\ 30 70 / \\ \\ 20 40 80`}</code>
            </pre>
          </div>
          <h4 className="text-base sm:text-lg font-bold text-white mt-6 mb-2 tracking-tight flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
            <span>17.5 Inorder predecessor</span>
          </h4>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            The inorder predecessor is the largest value smaller than the current node.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            In a BST:
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Inorder predecessor = Maximum value in the left subtree.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            For node 50:
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Left subtree:
          </p>
          <div className="p-4 rounded-xl bg-stone-900 text-orange-300 font-mono text-xs overflow-x-auto leading-tight border border-stone-800 my-4 shadow-inner">
            <div className="text-[10px] text-slate-400 uppercase tracking-widest font-bold pb-2 mb-2 border-b border-stone-800 font-sans">
              Tree Hierarchy Diagram
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin] text-center sm:text-left">
              <code>{`30 / \\ 20 40`}</code>
            </pre>
          </div>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Maximum value = 40.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            You can replace 50 with 40 and remove the original 40 node.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Both successor and predecessor methods are correct when implemented properly.
          </p>
          <h4 className="text-base sm:text-lg font-bold text-white mt-6 mb-2 tracking-tight flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
            <span>17.6 Java implementation of BST deletion</span>
          </h4>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`static TreeNode deleteBST(TreeNode root, int key)  {
  if (root == null)  {
    return null;

  }
  if (key < root.val)  {
    root.left = deleteBST(root.left, key);

  }
  else if (key > root.val)  {
    root.right = deleteBST(root.right, key);

  }
  else  {
    // Case 1 and Case 2: // No left child if (root.left == null)  {
      return root.right;

    }
    // No right child if (root.right == null)  {
      return root.left;

    }
    // Case 3: // Two children TreeNode successor = findMin(root.right);
    root.val = successor.val;
    root.right = deleteBST( root.right, successor.val );

  }
  return root;

}`}</code>
            </pre>
          </div>
          <h4 className="text-base sm:text-lg font-bold text-white mt-6 mb-2 tracking-tight flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
            <span>17.7 Understanding the code</span>
          </h4>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            First, we locate the node:
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            if (key &lt; root.val)
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Search left.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            else if (key &gt; root.val)
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Search right.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            When the node is found:
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            No left child:
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            if (root.left == null) &#123; return root.right; &#125;
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            This handles both leaf nodes and nodes with only a right child.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            No right child:
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            if (root.right == null) &#123; return root.left; &#125;
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            This handles nodes with only a left child.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Two children:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`TreeNode successor = findMin(root.right);`}</code>
            </pre>
          </div>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Find the inorder successor.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            root.val = successor.val;
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Replace the current value.
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`root.right = deleteBST(root.right, successor.val);`}</code>
            </pre>
          </div>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Remove the original successor node.
          </p>
          <h4 className="text-base sm:text-lg font-bold text-white mt-6 mb-2 tracking-tight flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
            <span>17.8 Complexity</span>
          </h4>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Deletion requires searching for the node and may also require locating its inorder successor.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Both operations follow paths within the tree.
          </p>
          <div className="my-4 p-4 rounded-xl bg-orange-500/15/60 border border-orange-500/30/60 text-center font-mono text-sm sm:text-base text-white shadow-2xs overflow-x-auto">
            <span className="text-orange-300 font-bold mr-2">EQUATION:</span>
            <code>Time=O(h)</code>
          </div>
          <div className="overflow-x-auto my-4 rounded-xl border border-slate-800 shadow-2xs">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-white border-b border-slate-800 font-semibold">
                <tr>
                  <th className="px-4 py-3">Tree condition</th>
                  <th className="px-4 py-3">Complexity</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">Balanced</td>
                  <td className="px-4 py-2.5 text-slate-300">\(O(\log n)\)</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">Skewed</td>
                  <td className="px-4 py-2.5 text-slate-300">\(O(n)\)</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Recursive auxiliary space:
          </p>
          <div className="my-4 p-4 rounded-xl bg-orange-500/15/60 border border-orange-500/30/60 text-center font-mono text-sm sm:text-base text-white shadow-2xs overflow-x-auto">
            <span className="text-orange-300 font-bold mr-2">EQUATION:</span>
            <code>O(h)</code>
          </div>
      </div>
    )
  },
  {
    id: "tree-height",
    number: "18",
    title: "18. Calculating Tree Height (Bottom-Up Recursion)",
    category: "Part 18 · Tree Height",
    content: (
      <div className="space-y-4 text-slate-200 leading-relaxed font-sans">
          <h4 className="text-base sm:text-lg font-bold text-white mt-6 mb-2 tracking-tight flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
            <span>18.1 What is the height of a binary tree?</span>
          </h4>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            The height of a binary tree is the number of edges in the longest path from the root to a leaf.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Example:
          </p>
          <div className="p-4 rounded-xl bg-stone-900 text-orange-300 font-mono text-xs overflow-x-auto leading-tight border border-stone-800 my-4 shadow-inner">
            <div className="text-[10px] text-slate-400 uppercase tracking-widest font-bold pb-2 mb-2 border-b border-stone-800 font-sans">
              Tree Hierarchy Diagram
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin] text-center sm:text-left">
              <code>{`1 / \\ 2 3 / 4 / 5`}</code>
            </pre>
          </div>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            The longest path is:
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            1 -&gt; 2 -&gt; 4 -&gt; 5
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            It contains three edges.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Therefore:
          </p>
          <div className="my-4 p-4 rounded-xl bg-orange-500/15/60 border border-orange-500/30/60 text-center font-mono text-sm sm:text-base text-white shadow-2xs overflow-x-auto">
            <span className="text-orange-300 font-bold mr-2">EQUATION:</span>
            <code>Height=3</code>
          </div>
          <h4 className="text-base sm:text-lg font-bold text-white mt-6 mb-2 tracking-tight flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
            <span>18.2 Recursive approach</span>
          </h4>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            The height of a tree is:
          </p>
          <div className="my-4 p-4 rounded-xl bg-orange-500/15/60 border border-orange-500/30/60 text-center font-mono text-sm sm:text-base text-white shadow-2xs overflow-x-auto">
            <span className="text-orange-300 font-bold mr-2">EQUATION:</span>
            <code>Height(root)=1+\max(Height(left),Height(right))</code>
          </div>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Using our edge convention:
          </p>
          <div className="my-4 p-4 rounded-xl bg-orange-500/15/60 border border-orange-500/30/60 text-center font-mono text-sm sm:text-base text-white shadow-2xs overflow-x-auto">
            <span className="text-orange-300 font-bold mr-2">EQUATION:</span>
            <code>Height(null)=-1</code>
          </div>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            For a leaf:
          </p>
          <div className="my-4 p-4 rounded-xl bg-orange-500/15/60 border border-orange-500/30/60 text-center font-mono text-sm sm:text-base text-white shadow-2xs overflow-x-auto">
            <span className="text-orange-300 font-bold mr-2">EQUATION:</span>
            <code>Height(leaf)=1+\max(-1,-1)=0</code>
          </div>
          <h4 className="text-base sm:text-lg font-bold text-white mt-6 mb-2 tracking-tight flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
            <span>18.3 Java implementation</span>
          </h4>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`static int height(TreeNode root)  {
  if (root == null)  {
    return -1;

  }
  int leftHeight = height(root.left);
  int rightHeight = height(root.right);
  return 1 + Math.max(leftHeight, rightHeight);

}`}</code>
            </pre>
          </div>
          <h4 className="text-base sm:text-lg font-bold text-white mt-6 mb-2 tracking-tight flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
            <span>18.4 Dry run</span>
          </h4>
          <div className="p-4 rounded-xl bg-stone-900 text-orange-300 font-mono text-xs overflow-x-auto leading-tight border border-stone-800 my-4 shadow-inner">
            <div className="text-[10px] text-slate-400 uppercase tracking-widest font-bold pb-2 mb-2 border-b border-stone-800 font-sans">
              Tree Hierarchy Diagram
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin] text-center sm:text-left">
              <code>{`1 / \\ 2 3 / 4`}</code>
            </pre>
          </div>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Height of node 3 = 0.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Height of node 4 = 0.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Height of node 2 = 1.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Height of node 1 = 2.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Output:
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            2
          </p>
          <h4 className="text-base sm:text-lg font-bold text-white mt-6 mb-2 tracking-tight flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
            <span>18.5 Complexity</span>
          </h4>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Every node is visited once:
          </p>
          <div className="my-4 p-4 rounded-xl bg-orange-500/15/60 border border-orange-500/30/60 text-center font-mono text-sm sm:text-base text-white shadow-2xs overflow-x-auto">
            <span className="text-orange-300 font-bold mr-2">EQUATION:</span>
            <code>Time=O(n)</code>
          </div>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Recursion stack:
          </p>
          <div className="my-4 p-4 rounded-xl bg-orange-500/15/60 border border-orange-500/30/60 text-center font-mono text-sm sm:text-base text-white shadow-2xs overflow-x-auto">
            <span className="text-orange-300 font-bold mr-2">EQUATION:</span>
            <code>Space=O(h)</code>
          </div>
      </div>
    )
  },
  {
    id: "tree-diameter",
    number: "19",
    title: "19. Diameter of a Binary Tree (LeetCode 543)",
    category: "Part 19 · Tree Diameter",
    content: (
      <div className="space-y-4 text-slate-200 leading-relaxed font-sans">
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Popular Interview Problem — LeetCode 543
          </p>
          <h4 className="text-base sm:text-lg font-bold text-white mt-6 mb-2 tracking-tight flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
            <span>19.1 What is the diameter of a binary tree?</span>
          </h4>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            The diameter of a binary tree is the length of the longest path between any two nodes.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            The path does not necessarily have to pass through the root.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            In this module, we measure diameter using edges.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Example:
          </p>
          <div className="p-4 rounded-xl bg-stone-900 text-orange-300 font-mono text-xs overflow-x-auto leading-tight border border-stone-800 my-4 shadow-inner">
            <div className="text-[10px] text-slate-400 uppercase tracking-widest font-bold pb-2 mb-2 border-b border-stone-800 font-sans">
              Tree Hierarchy Diagram
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin] text-center sm:text-left">
              <code>{`1 / \\ 2 3 / \\ 4 5 / 6`}</code>
            </pre>
          </div>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            The longest path is:
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            6 -&gt; 4 -&gt; 2 -&gt; 1 -&gt; 3
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            It contains four edges.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Therefore:
          </p>
          <div className="my-4 p-4 rounded-xl bg-orange-500/15/60 border border-orange-500/30/60 text-center font-mono text-sm sm:text-base text-white shadow-2xs overflow-x-auto">
            <span className="text-orange-300 font-bold mr-2">EQUATION:</span>
            <code>Diameter=4</code>
          </div>
          <h4 className="text-base sm:text-lg font-bold text-white mt-6 mb-2 tracking-tight flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
            <span>19.2 Important observation</span>
          </h4>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            At any node, a path passing through that node can be formed by combining:
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            The longest path downward in the left subtree.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            The longest path downward in the right subtree.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Therefore:
          </p>
          <div className="my-4 p-4 rounded-xl bg-orange-500/15/60 border border-orange-500/30/60 text-center font-mono text-sm sm:text-base text-white shadow-2xs overflow-x-auto">
            <span className="text-orange-300 font-bold mr-2">EQUATION:</span>
            <code>DiameterThroughNode= LeftHeight+RightHeight+2</code>
          </div>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            The maximum such value across all nodes is the diameter.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            But remember: the longest path may also be completely inside one subtree.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            That is why we must inspect every node.
          </p>
          <h4 className="text-base sm:text-lg font-bold text-white mt-6 mb-2 tracking-tight flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
            <span>19.3 Approach 1 — Repeated height calculation</span>
          </h4>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            A simple solution calculates the height of each subtree separately.
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`static int diameter(TreeNode root)  {
  if (root == null)  {
    return 0;

  }
  int leftHeight = height(root.left);
  int rightHeight = height(root.right);
  int throughRoot = leftHeight + rightHeight + 2;
  int leftDiameter = diameter(root.left);
  int rightDiameter = diameter(root.right);
  return Math.max( throughRoot, Math.max(leftDiameter, rightDiameter) );

}`}</code>
            </pre>
          </div>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            This approach can take:
          </p>
          <div className="my-4 p-4 rounded-xl bg-orange-500/15/60 border border-orange-500/30/60 text-center font-mono text-sm sm:text-base text-white shadow-2xs overflow-x-auto">
            <span className="text-orange-300 font-bold mr-2">EQUATION:</span>
            <code>O(n^2)</code>
          </div>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            in the worst case because height calculation is repeated.
          </p>
          <h4 className="text-base sm:text-lg font-bold text-white mt-6 mb-2 tracking-tight flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
            <span>19.4 Approach 2 — Optimized recursive solution</span>
          </h4>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            We can calculate the height and update the diameter in one traversal.
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`static int diameter = 0;
static int heightForDiameter(TreeNode root)  {
  if (root == null)  {
    return -1;

  }
  int leftHeight = heightForDiameter(root.left);
  int rightHeight = heightForDiameter(root.right);
  int currentDiameter = leftHeight + rightHeight + 2;
  diameter = Math.max(diameter, currentDiameter);
  return 1 + Math.max(leftHeight, rightHeight);

}`}</code>
            </pre>
          </div>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Usage:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`diameter = 0;
heightForDiameter(root);
System.out.println(diameter);`}</code>
            </pre>
          </div>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Time complexity:
          </p>
          <div className="my-4 p-4 rounded-xl bg-orange-500/15/60 border border-orange-500/30/60 text-center font-mono text-sm sm:text-base text-white shadow-2xs overflow-x-auto">
            <span className="text-orange-300 font-bold mr-2">EQUATION:</span>
            <code>O(n)</code>
          </div>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Space complexity:
          </p>
          <div className="my-4 p-4 rounded-xl bg-orange-500/15/60 border border-orange-500/30/60 text-center font-mono text-sm sm:text-base text-white shadow-2xs overflow-x-auto">
            <span className="text-orange-300 font-bold mr-2">EQUATION:</span>
            <code>O(h)</code>
          </div>
          <div className="p-4 rounded-xl border bg-orange-500/10 border-orange-500/30 text-orange-950 my-4 text-xs sm:text-sm leading-relaxed">
            <div className="font-bold flex items-center gap-1.5 mb-1 text-white">
              <span>💡</span>
              <span>Important</span>
            </div>
            <p className="text-slate-300">Reset the diameter variable before processing a new tree.</p>
          </div>
          <h4 className="text-base sm:text-lg font-bold text-white mt-6 mb-2 tracking-tight flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
            <span>19.5 Another implementation without global state</span>
          </h4>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            For reusable production-style code, a helper object can avoid shared static state.
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`class DiameterCalculator  {
  private int diameter;
  public int diameterOfBinaryTree(TreeNode root)  {
    diameter = 0;
    height(root);
    return diameter;

  }
  private int height(TreeNode root)  {
    if (root == null)  {
      return -1;

    }
    int left = height(root.left);
    int right = height(root.right);
    diameter = Math.max( diameter, left + right + 2 );
    return 1 + Math.max(left, right);

  }

}`}</code>
            </pre>
          </div>
      </div>
    )
  },
  {
    id: "balanced-trees",
    number: "20",
    title: "20. Balanced Binary Trees & AVL Rotations",
    category: "Part 20 · Height Balance",
    content: (
      <div className="space-y-4 text-slate-200 leading-relaxed font-sans">
          <h4 className="text-base sm:text-lg font-bold text-white mt-6 mb-2 tracking-tight flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
            <span>20.1 What is a balanced binary tree?</span>
          </h4>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            A height-balanced binary tree is one in which, for every node:
          </p>
          <div className="my-4 p-4 rounded-xl bg-orange-500/15/60 border border-orange-500/30/60 text-center font-mono text-sm sm:text-base text-white shadow-2xs overflow-x-auto">
            <span className="text-orange-300 font-bold mr-2">EQUATION:</span>
            <code>|Height(left)-Height(right)|\leq1</code>
          </div>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Example:
          </p>
          <div className="p-4 rounded-xl bg-stone-900 text-orange-300 font-mono text-xs overflow-x-auto leading-tight border border-stone-800 my-4 shadow-inner">
            <div className="text-[10px] text-slate-400 uppercase tracking-widest font-bold pb-2 mb-2 border-b border-stone-800 font-sans">
              Tree Hierarchy Diagram
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin] text-center sm:text-left">
              <code>{`10 / \\ 5 15 / \\ / 2 7 12`}</code>
            </pre>
          </div>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            The tree is balanced.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            An unbalanced example:
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            10 / 8 / 6 / 4
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            The difference between left and right subtree heights becomes greater than one at some nodes.
          </p>
          <h4 className="text-base sm:text-lg font-bold text-white mt-6 mb-2 tracking-tight flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
            <span>20.2 Why is balancing important?</span>
          </h4>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Consider searching in a BST containing:
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            10, 20, 30, 40, 50
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            If inserted in this order into an ordinary BST:
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            10 \ 20 \ 30 \ 40 \ 50
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            It becomes a skewed tree.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Search complexity may become:
          </p>
          <div className="my-4 p-4 rounded-xl bg-orange-500/15/60 border border-orange-500/30/60 text-center font-mono text-sm sm:text-base text-white shadow-2xs overflow-x-auto">
            <span className="text-orange-300 font-bold mr-2">EQUATION:</span>
            <code>O(n)</code>
          </div>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            A balanced arrangement:
          </p>
          <div className="p-4 rounded-xl bg-stone-900 text-orange-300 font-mono text-xs overflow-x-auto leading-tight border border-stone-800 my-4 shadow-inner">
            <div className="text-[10px] text-slate-400 uppercase tracking-widest font-bold pb-2 mb-2 border-b border-stone-800 font-sans">
              Tree Hierarchy Diagram
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin] text-center sm:text-left">
              <code>{`30 / \\ 20 40 / \\ 10 50`}</code>
            </pre>
          </div>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            has a much smaller height.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Search can be approximately:
          </p>
          <div className="my-4 p-4 rounded-xl bg-orange-500/15/60 border border-orange-500/30/60 text-center font-mono text-sm sm:text-base text-white shadow-2xs overflow-x-auto">
            <span className="text-orange-300 font-bold mr-2">EQUATION:</span>
            <code>O(\log n)</code>
          </div>
          <h4 className="text-base sm:text-lg font-bold text-white mt-6 mb-2 tracking-tight flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
            <span>20.3 AVL Trees</span>
          </h4>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            AVL Trees are a type of self-balancing Binary Search Tree.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            They maintain a balance condition through rotations.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Balance factor:
          </p>
          <div className="my-4 p-4 rounded-xl bg-orange-500/15/60 border border-orange-500/30/60 text-center font-mono text-sm sm:text-base text-white shadow-2xs overflow-x-auto">
            <span className="text-orange-300 font-bold mr-2">EQUATION:</span>
            <code>BF=Height(left)-Height(right)</code>
          </div>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            For an AVL tree, every node must have balance factor:
          </p>
          <div className="my-4 p-4 rounded-xl bg-orange-500/15/60 border border-orange-500/30/60 text-center font-mono text-sm sm:text-base text-white shadow-2xs overflow-x-auto">
            <span className="text-orange-300 font-bold mr-2">EQUATION:</span>
            <code>BF\in\&#123;-1,0,1\&#125;</code>
          </div>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            The four major rotation cases are:
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            LL — Left Left.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            RR — Right Right.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            LR — Left Right.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            RL — Right Left.
          </p>
          <div className="p-4 rounded-xl bg-stone-900 text-orange-300 font-mono text-xs overflow-x-auto leading-tight border border-stone-800 my-4 shadow-inner">
            <div className="text-[10px] text-slate-400 uppercase tracking-widest font-bold pb-2 mb-2 border-b border-stone-800 font-sans">
              Tree Hierarchy Diagram
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin] text-center sm:text-left">
              <code>{`[DSA Part 10: BST & Balanced Trees - AVL & Red-Black | Wasil Zafar](https://images.openai.com/static-rsc-4/dwlL5RBi6ctHP3HWdcy2KVmZsvJoGsKV5wvcPOVxw8f5moIMFke7MreCacvr5TJ-VrdwA9pBU-vlDmUP6TGVS5NgZ-ZXsJsBfKeUbonuFZKTHsCUsT3hOElPgFU3lp-uFSzxn3rSoKPMownA3jD25j2IU7rhiww-1FsXq03Ltpc?purpose=inline)`}</code>
            </pre>
          </div>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            <a href="https://www.wasilzafar.com/pages/series/data-structures/dsa-bst-avl-redblack.html?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-300 font-medium underline inline-flex items-center gap-0.5">wasilzafar.com</a>
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            We will explore AVL trees and balancing rotations in more depth in a dedicated advanced tree module.
          </p>
          <h4 className="text-base sm:text-lg font-bold text-white mt-6 mb-2 tracking-tight flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
            <span>20.4 Checking whether a binary tree is balanced</span>
          </h4>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            We need to check whether every node satisfies the balance condition.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            A naive solution could repeatedly calculate subtree heights.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            That can require \(O(n^2)\) time.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Instead, we can calculate heights while checking balance.
          </p>
          <h4 className="text-base sm:text-lg font-bold text-white mt-6 mb-2 tracking-tight flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
            <span>20.5 Optimized Java implementation</span>
          </h4>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Here we use node height measured in nodes for convenience:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`static int checkHeight(TreeNode root)  {
  if (root == null)  {
    return 0;

  }
  int leftHeight = checkHeight(root.left);
  if (leftHeight == -1)  {
    return -1;

  }
  int rightHeight = checkHeight(root.right);
  if (rightHeight == -1)  {
    return -1;

  }
  if (Math.abs(leftHeight - rightHeight) > 1)  {
    return -1;

  }
  return 1 + Math.max(leftHeight, rightHeight);

}
static boolean isBalanced(TreeNode root)  {
  return checkHeight(root) != -1;

}`}</code>
            </pre>
          </div>
          <h4 className="text-base sm:text-lg font-bold text-white mt-6 mb-2 tracking-tight flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
            <span>20.6 Understanding the implementation</span>
          </h4>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            We use:
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            -1
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            as a signal indicating that the subtree is unbalanced.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            If the left subtree is unbalanced, we immediately return -1.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            The same applies to the right subtree.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Otherwise, we compare their heights.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            If the height difference exceeds 1, return -1.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            If everything is valid, return the actual height.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Complexity:
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
                  <td className="px-4 py-2.5 text-slate-300">Time</td>
                  <td className="px-4 py-2.5 text-slate-300">\(O(n)\)</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">Auxiliary space</td>
                  <td className="px-4 py-2.5 text-slate-300">\(O(h)\)</td>
                </tr>
              </tbody>
            </table>
          </div>
      </div>
    )
  },
  {
    id: "lowest-common-ancestor",
    number: "21",
    title: "21. Lowest Common Ancestor (Binary Tree vs BST)",
    category: "Part 21 · LCA Algorithms",
    content: (
      <div className="space-y-4 text-slate-200 leading-relaxed font-sans">
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Popular Interview Topic
          </p>
          <h4 className="text-base sm:text-lg font-bold text-white mt-6 mb-2 tracking-tight flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
            <span>21.1 What is the Lowest Common Ancestor?</span>
          </h4>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            The Lowest Common Ancestor of two nodes is the deepest node that is an ancestor of both nodes.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Consider:
          </p>
          <div className="p-4 rounded-xl bg-stone-900 text-orange-300 font-mono text-xs overflow-x-auto leading-tight border border-stone-800 my-4 shadow-inner">
            <div className="text-[10px] text-slate-400 uppercase tracking-widest font-bold pb-2 mb-2 border-b border-stone-800 font-sans">
              Tree Hierarchy Diagram
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin] text-center sm:text-left">
              <code>{`3 / \\ 5 1 / \\ / \\ 6 2 0 8 / \\ 7 4`}</code>
            </pre>
          </div>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Find the LCA of:
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            7 and 4
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Both nodes are descendants of node 2.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Therefore:
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            LCA(7, 4) = 2
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Find the LCA of:
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            5 and 1
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Their lowest common ancestor is 3.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Therefore:
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            LCA(5, 1) = 3
          </p>
          <h4 className="text-base sm:text-lg font-bold text-white mt-6 mb-2 tracking-tight flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
            <span>21.2 Why is LCA important?</span>
          </h4>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            LCA is used in:
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Organizational hierarchy queries.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            File system navigation.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Version-control ancestry.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Network routing.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Tree-based query processing.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Competitive programming.
          </p>
          <h4 className="text-base sm:text-lg font-bold text-white mt-6 mb-2 tracking-tight flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
            <span>21.3 Approach for a general binary tree</span>
          </h4>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            This is not necessarily a BST.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            We cannot use the smaller/greater comparison because a general binary tree has no ordering property.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Instead:
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            If the current node is null, return null.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            If the current node is either target, return it.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Search the left subtree.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Search the right subtree.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            If both sides return non-null nodes, the current node is the LCA.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Otherwise, return whichever side contains a target.
          </p>
          <h4 className="text-base sm:text-lg font-bold text-white mt-6 mb-2 tracking-tight flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
            <span>21.4 Java implementation</span>
          </h4>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`static TreeNode lowestCommonAncestor( TreeNode root, TreeNode p, TreeNode q)  {
  if (root == null || root == p || root == q)  {
    return root;

  }
  TreeNode left = lowestCommonAncestor( root.left, p, q );
  TreeNode right = lowestCommonAncestor( root.right, p, q );
  if (left != null && right != null)  {
    return root;

  }
  return left != null ? left : right;

}`}</code>
            </pre>
          </div>
          <h4 className="text-base sm:text-lg font-bold text-white mt-6 mb-2 tracking-tight flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
            <span>21.5 Dry run</span>
          </h4>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Find LCA of 7 and 4.
          </p>
          <div className="p-4 rounded-xl bg-stone-900 text-orange-300 font-mono text-xs overflow-x-auto leading-tight border border-stone-800 my-4 shadow-inner">
            <div className="text-[10px] text-slate-400 uppercase tracking-widest font-bold pb-2 mb-2 border-b border-stone-800 font-sans">
              Tree Hierarchy Diagram
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin] text-center sm:text-left">
              <code>{`3 / 5 \\ 2 / \\ 7 4`}</code>
            </pre>
          </div>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            At node 7:
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            The function returns node 7.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            At node 4:
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            The function returns node 4.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            At node 2:
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Left result = 7.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Right result = 4.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Both are non-null.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Therefore:
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            LCA = 2
          </p>
          <h4 className="text-base sm:text-lg font-bold text-white mt-6 mb-2 tracking-tight flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
            <span>21.6 Complexity</span>
          </h4>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Time:
          </p>
          <div className="my-4 p-4 rounded-xl bg-orange-500/15/60 border border-orange-500/30/60 text-center font-mono text-sm sm:text-base text-white shadow-2xs overflow-x-auto">
            <span className="text-orange-300 font-bold mr-2">EQUATION:</span>
            <code>O(n)</code>
          </div>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Auxiliary space:
          </p>
          <div className="my-4 p-4 rounded-xl bg-orange-500/15/60 border border-orange-500/30/60 text-center font-mono text-sm sm:text-base text-white shadow-2xs overflow-x-auto">
            <span className="text-orange-300 font-bold mr-2">EQUATION:</span>
            <code>O(h)</code>
          </div>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            The above implementation assumes both target node references exist in the tree. If the problem does not guarantee that, you must additionally verify that both nodes were found.
          </p>
          <h4 className="text-base sm:text-lg font-bold text-white mt-6 mb-2 tracking-tight flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
            <span>21.7 LCA in a BST</span>
          </h4>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            A BST allows a simpler approach.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Consider:
          </p>
          <div className="p-4 rounded-xl bg-stone-900 text-orange-300 font-mono text-xs overflow-x-auto leading-tight border border-stone-800 my-4 shadow-inner">
            <div className="text-[10px] text-slate-400 uppercase tracking-widest font-bold pb-2 mb-2 border-b border-stone-800 font-sans">
              Tree Hierarchy Diagram
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin] text-center sm:text-left">
              <code>{`20 / \\ 10 30 / \\ / \\ 5 15 25 35`}</code>
            </pre>
          </div>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Find LCA of:
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            5 and 15
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            At node 20:
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Both values are smaller.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Move left.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            At node 10:
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            One value is smaller and one is greater.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Therefore, 10 is the LCA.
          </p>
          <h4 className="text-base sm:text-lg font-bold text-white mt-6 mb-2 tracking-tight flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
            <span>21.8 Java implementation for BST</span>
          </h4>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`static TreeNode lowestCommonAncestorBST( TreeNode root, TreeNode p, TreeNode q)  {
  while (root != null)  {
    if (p.val < root.val && q.val < root.val)  {
      root = root.left;

    }
    else if (p.val > root.val && q.val > root.val)  {
      root = root.right;

    }
    else  {
      return root;

    }

  }
  return null;

}`}</code>
            </pre>
          </div>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Complexity:
          </p>
          <div className="my-4 p-4 rounded-xl bg-orange-500/15/60 border border-orange-500/30/60 text-center font-mono text-sm sm:text-base text-white shadow-2xs overflow-x-auto">
            <span className="text-orange-300 font-bold mr-2">EQUATION:</span>
            <code>O(h)</code>
          </div>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Balanced BST: \(O(\log n)\).
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Skewed BST: \(O(n)\).
          </p>
          <div className="p-4 rounded-xl border bg-orange-500/10 border-orange-500/30 text-orange-950 my-4 text-xs sm:text-sm leading-relaxed">
            <div className="font-bold flex items-center gap-1.5 mb-1 text-white">
              <span>💡</span>
              <span>Important</span>
            </div>
            <p className="text-slate-300">General binary tree LCA and BST LCA are two different approaches. Learn both.</p>
          </div>
      </div>
    )
  },
  {
    id: "validate-bst",
    number: "22",
    title: "22. Validate Binary Search Tree (LeetCode 98)",
    category: "Part 22 · BST Validation",
    content: (
      <div className="space-y-4 text-slate-200 leading-relaxed font-sans">
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Important — LeetCode 98
          </p>
          <h4 className="text-base sm:text-lg font-bold text-white mt-6 mb-2 tracking-tight flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
            <span>22.1 Problem statement</span>
          </h4>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Given a binary tree, determine whether it satisfies the BST property.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Example 1:
          </p>
          <div className="p-4 rounded-xl bg-stone-900 text-orange-300 font-mono text-xs overflow-x-auto leading-tight border border-stone-800 my-4 shadow-inner">
            <div className="text-[10px] text-slate-400 uppercase tracking-widest font-bold pb-2 mb-2 border-b border-stone-800 font-sans">
              Tree Hierarchy Diagram
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin] text-center sm:text-left">
              <code>{`10 / \\ 5 15 / \\ 12 20`}</code>
            </pre>
          </div>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Output:
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            true
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Example 2:
          </p>
          <div className="p-4 rounded-xl bg-stone-900 text-orange-300 font-mono text-xs overflow-x-auto leading-tight border border-stone-800 my-4 shadow-inner">
            <div className="text-[10px] text-slate-400 uppercase tracking-widest font-bold pb-2 mb-2 border-b border-stone-800 font-sans">
              Tree Hierarchy Diagram
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin] text-center sm:text-left">
              <code>{`10 / \\ 5 15 / \\ 6 20`}</code>
            </pre>
          </div>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Output:
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            false
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Why is the second tree invalid?
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Node 6 is in the right subtree of 10.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Therefore, it must be greater than 10.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            But:
          </p>
          <div className="my-4 p-4 rounded-xl bg-orange-500/15/60 border border-orange-500/30/60 text-center font-mono text-sm sm:text-base text-white shadow-2xs overflow-x-auto">
            <span className="text-orange-300 font-bold mr-2">EQUATION:</span>
            <code>6&lt;10</code>
          </div>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            The BST property is violated.
          </p>
          <h4 className="text-base sm:text-lg font-bold text-white mt-6 mb-2 tracking-tight flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
            <span>22.2 Common incorrect approach</span>
          </h4>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            A common mistake is checking only the immediate children.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            root.left.val &lt; root.val root.right.val &gt; root.val
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            This is not sufficient.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Consider:
          </p>
          <div className="p-4 rounded-xl bg-stone-900 text-orange-300 font-mono text-xs overflow-x-auto leading-tight border border-stone-800 my-4 shadow-inner">
            <div className="text-[10px] text-slate-400 uppercase tracking-widest font-bold pb-2 mb-2 border-b border-stone-800 font-sans">
              Tree Hierarchy Diagram
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin] text-center sm:text-left">
              <code>{`10 / \\ 5 15 / \\ 6 20`}</code>
            </pre>
          </div>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Node 6 is smaller than 15, so its local relationship appears valid.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            But it must also be greater than 10 because it belongs to the right subtree of 10.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            We need to check the valid range for every node.
          </p>
          <h4 className="text-base sm:text-lg font-bold text-white mt-6 mb-2 tracking-tight flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
            <span>22.3 Correct approach: Range validation</span>
          </h4>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Every node must lie within an allowed range.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            For the root:
          </p>
          <div className="my-4 p-4 rounded-xl bg-orange-500/15/60 border border-orange-500/30/60 text-center font-mono text-sm sm:text-base text-white shadow-2xs overflow-x-auto">
            <span className="text-orange-300 font-bold mr-2">EQUATION:</span>
            <code>-\infty &lt; root &lt; +\infty</code>
          </div>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            For the left child:
          </p>
          <div className="my-4 p-4 rounded-xl bg-orange-500/15/60 border border-orange-500/30/60 text-center font-mono text-sm sm:text-base text-white shadow-2xs overflow-x-auto">
            <span className="text-orange-300 font-bold mr-2">EQUATION:</span>
            <code>minimum &lt; left &lt; root</code>
          </div>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            For the right child:
          </p>
          <div className="my-4 p-4 rounded-xl bg-orange-500/15/60 border border-orange-500/30/60 text-center font-mono text-sm sm:text-base text-white shadow-2xs overflow-x-auto">
            <span className="text-orange-300 font-bold mr-2">EQUATION:</span>
            <code>root &lt; right &lt; maximum</code>
          </div>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Each recursive call receives updated lower and upper bounds.
          </p>
          <h4 className="text-base sm:text-lg font-bold text-white mt-6 mb-2 tracking-tight flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
            <span>22.4 Java implementation</span>
          </h4>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`static boolean isValidBST(TreeNode root)  {
  return validate( root, Long.MIN_VALUE, Long.MAX_VALUE );

}
static boolean validate( TreeNode root, long min, long max)  {
  if (root == null)  {
    return true;

  }
  if (root.val <= min || root.val >= max)  {
    return false;

  }
  return validate(root.left, min, root.val) && validate(root.right, root.val, max);

}`}</code>
            </pre>
          </div>
          <h4 className="text-base sm:text-lg font-bold text-white mt-6 mb-2 tracking-tight flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
            <span>22.5 Why use long instead of int?</span>
          </h4>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Java integer boundaries are:
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Integer.MIN_VALUE Integer.MAX_VALUE
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Suppose a valid tree contains:
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Integer.MIN_VALUE Integer.MAX_VALUE
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Using integer bounds can create boundary problems when determining strict inequality.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Using:
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Long.MIN_VALUE Long.MAX_VALUE
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            provides a safe range for all possible Java integer node values.
          </p>
          <h4 className="text-base sm:text-lg font-bold text-white mt-6 mb-2 tracking-tight flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
            <span>22.6 Alternative approach: Inorder traversal</span>
          </h4>
          <div className="p-4 rounded-xl border bg-orange-500/10 border-orange-500/30 text-orange-950 my-4 text-xs sm:text-sm leading-relaxed">
            <div className="font-bold flex items-center gap-1.5 mb-1 text-white">
              <span>ℹ️</span>
              <span>Remember</span>
            </div>
            <p className="text-slate-300"></p>
          </div>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Inorder traversal of a valid BST produces strictly increasing values when duplicates are not allowed.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Therefore, another solution is:
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Perform inorder traversal.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Compare each value with the previous value.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            If the current value is not greater than the previous value, return false.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            The range-validation approach is usually the most direct and robust solution.
          </p>
          <h4 className="text-base sm:text-lg font-bold text-white mt-6 mb-2 tracking-tight flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
            <span>22.7 Complexity</span>
          </h4>
          <div className="overflow-x-auto my-4 rounded-xl border border-slate-800 shadow-2xs">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-white border-b border-slate-800 font-semibold">
                <tr>
                  <th className="px-4 py-3">Complexity</th>
                  <th className="px-4 py-3">Value</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">Time</td>
                  <td className="px-4 py-2.5 text-slate-300">\(O(n)\)</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">Auxiliary space</td>
                  <td className="px-4 py-2.5 text-slate-300">\(O(h)\)</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300"></td>
                  <td className="px-4 py-2.5 text-slate-300"></td>
                </tr>
              </tbody>
            </table>
          </div>
      </div>
    )
  },
  {
    id: "serialize-tree",
    number: "23",
    title: "23. Serialize & Deserialize Binary Trees (LeetCode 297)",
    category: "Part 23 · Serialization",
    content: (
      <div className="space-y-4 text-slate-200 leading-relaxed font-sans">
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Advanced Interview Problem — LeetCode 297
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            This is one of the most important advanced binary tree problems.
          </p>
          <h4 className="text-base sm:text-lg font-bold text-white mt-6 mb-2 tracking-tight flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
            <span>23.1 What is serialization?</span>
          </h4>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Serialization is the process of converting a data structure into a format that can be stored or transmitted.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            For a binary tree, serialization converts the tree into a string or another sequence of data.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Example tree:
          </p>
          <div className="p-4 rounded-xl bg-stone-900 text-orange-300 font-mono text-xs overflow-x-auto leading-tight border border-stone-800 my-4 shadow-inner">
            <div className="text-[10px] text-slate-400 uppercase tracking-widest font-bold pb-2 mb-2 border-b border-stone-800 font-sans">
              Tree Hierarchy Diagram
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin] text-center sm:text-left">
              <code>{`1 / \\ 2 3 / \\ 4 5`}</code>
            </pre>
          </div>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            One possible serialized representation using preorder traversal is:
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            1,2,#,#,3,4,#,#,5,#,#
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Here:
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Numbers represent node values.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            # represents a null child.
          </p>
          <h4 className="text-base sm:text-lg font-bold text-white mt-6 mb-2 tracking-tight flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
            <span>23.2 What is deserialization?</span>
          </h4>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Deserialization is the reverse process.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            It converts the serialized information back into the original tree structure.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            For example:
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            1,2,#,#,3,4,#,#,5,#,#
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            is reconstructed as:
          </p>
          <div className="p-4 rounded-xl bg-stone-900 text-orange-300 font-mono text-xs overflow-x-auto leading-tight border border-stone-800 my-4 shadow-inner">
            <div className="text-[10px] text-slate-400 uppercase tracking-widest font-bold pb-2 mb-2 border-b border-stone-800 font-sans">
              Tree Hierarchy Diagram
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin] text-center sm:text-left">
              <code>{`1 / \\ 2 3 / \\ 4 5`}</code>
            </pre>
          </div>
          <h4 className="text-base sm:text-lg font-bold text-white mt-6 mb-2 tracking-tight flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
            <span>23.3 Why do we need null markers?</span>
          </h4>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Consider these two trees:
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Tree A:
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            1 / 2
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Tree B:
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            1 / 2 \ 3
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            If we only store preorder node values without null markers, we may not have enough information to identify the exact structure.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Null markers preserve the missing-child information.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            This makes the reconstruction unambiguous.
          </p>
          <div className="p-4 rounded-xl bg-stone-900 text-orange-300 font-mono text-xs overflow-x-auto leading-tight border border-stone-800 my-4 shadow-inner">
            <div className="text-[10px] text-slate-400 uppercase tracking-widest font-bold pb-2 mb-2 border-b border-stone-800 font-sans">
              Tree Hierarchy Diagram
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin] text-center sm:text-left">
              <code>{`[\\[LeetCode\\] 297. Serialize and Deserialize Binary Tree — Tree — Hard | by LuLu | Medium](https://images.openai.com/static-rsc-4/jj8McRvVm19aezG1yND8xAx_IHcgBOi3nHQvhSOv2WARzQOrRxxz3AvJhHn7lBzvTDmyfNUZXXiK239CscyJSABn2QdwNXzMzl-41wDf7tfKjP694XTdC7MTU9vJw7juSmbS996u57jP1vyXbIpJPlEHOCHM5RCw_qRA0QE7ZBI?purpose=inline)`}</code>
            </pre>
          </div>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            <a href="https://medium.com/%40lukuoyu/leetcode-297-serialize-and-deserialize-binary-tree-tree-hard-23e158914772?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-300 font-medium underline inline-flex items-center gap-0.5">medium.com</a>
          </p>
          <h4 className="text-base sm:text-lg font-bold text-white mt-6 mb-2 tracking-tight flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
            <span>23.4 Serialization using preorder</span>
          </h4>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            We follow:
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Root -&gt; Left -&gt; Right
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            For every null node, append #.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Algorithm:
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            If the current node is null, append #.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Otherwise, append its value.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Serialize the left subtree.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Serialize the right subtree.
          </p>
          <h4 className="text-base sm:text-lg font-bold text-white mt-6 mb-2 tracking-tight flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
            <span>23.5 Java implementation — Serialization</span>
          </h4>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`import java.util.*;
class Codec  {
  public String serialize(TreeNode root)  {
    List<String> result = new ArrayList<>();
    preorder(root, result);
    return String.join(",", result);

  }
  private void preorder( TreeNode root, List<String> result)  {
    if (root == null)  {
      result.add("#");
      return;

    }
    result.add(String.valueOf(root.val));
    preorder(root.left, result);
    preorder(root.right, result);

  }

}`}</code>
            </pre>
          </div>
          <h4 className="text-base sm:text-lg font-bold text-white mt-6 mb-2 tracking-tight flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
            <span>23.6 Understanding serialization</span>
          </h4>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            For:
          </p>
          <div className="p-4 rounded-xl bg-stone-900 text-orange-300 font-mono text-xs overflow-x-auto leading-tight border border-stone-800 my-4 shadow-inner">
            <div className="text-[10px] text-slate-400 uppercase tracking-widest font-bold pb-2 mb-2 border-b border-stone-800 font-sans">
              Tree Hierarchy Diagram
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin] text-center sm:text-left">
              <code>{`1 / \\ 2 3`}</code>
            </pre>
          </div>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Preorder visits:
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            1 -&gt; 2 -&gt; null -&gt; null -&gt; 3 -&gt; null -&gt; null
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Serialized result:
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            1,2,#,#,3,#,#
          </p>
          <h4 className="text-base sm:text-lg font-bold text-white mt-6 mb-2 tracking-tight flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
            <span>23.7 Deserialization algorithm</span>
          </h4>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Now we reverse the process.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Given:
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            1,2,#,#,3,#,#
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            We rebuild the tree using the same preorder order.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Steps:
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Read the next token.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            If the token is #, return null.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Otherwise, create a node.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Recursively construct its left child.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Recursively construct its right child.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Return the node.
          </p>
          <h4 className="text-base sm:text-lg font-bold text-white mt-6 mb-2 tracking-tight flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
            <span>23.8 Java implementation — Deserialization</span>
          </h4>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Add this method inside the same Codec class:
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            public TreeNode deserialize(String data) &#123; if (data == null || data.isEmpty()) &#123; return null; &#125; String[] tokens = data.split(","); int[] index = &#123;0&#125;; TreeNode root = build(tokens, index); if (index[0] != tokens.length) &#123; throw new IllegalArgumentException( "Invalid serialized tree" ); &#125; return root; &#125; private TreeNode build(String[] tokens, int[] index) &#123; if (index[0] &gt;= tokens.length) &#123; throw new IllegalArgumentException( "Incomplete serialized tree" ); &#125; String value = tokens[index[0]++]; if (value.equals("#")) &#123; return null; &#125; TreeNode root = new TreeNode( Integer.parseInt(value) ); root.left = build(tokens, index); root.right = build(tokens, index); return root; &#125;
          </p>
          <h4 className="text-base sm:text-lg font-bold text-white mt-6 mb-2 tracking-tight flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
            <span>23.9 Complete Codec class</span>
          </h4>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`import java.util.*;
class Codec  {
  public String serialize(TreeNode root)  {
    List<String> result = new ArrayList<>();
    preorder(root, result);
    return String.join(",", result);

  }
  private void preorder( TreeNode root, List<String> result)  {
    if (root == null)  {
      result.add("#");
      return;

    }
    result.add(String.valueOf(root.val));
    preorder(root.left, result);
    preorder(root.right, result);

  }
  public TreeNode deserialize(String data)  {
    if (data == null || data.isEmpty())  {
      return null;

    }
    String[] tokens = data.split(",");
    int[] index =  {
      0
    };
    TreeNode root = build(tokens, index);
    if (index[0] != tokens.length)  {
      throw new IllegalArgumentException( "Invalid serialized tree" );

    }
    return root;

  }
  private TreeNode build(String[] tokens, int[] index)  {
    if (index[0] >= tokens.length)  {
      throw new IllegalArgumentException( "Incomplete serialized tree" );

    }
    String value = tokens[index[0]++];
    if (value.equals("#"))  {
      return null;

    }
    TreeNode root = new TreeNode( Integer.parseInt(value) );
    root.left = build(tokens, index);
    root.right = build(tokens, index);
    return root;

  }

}`}</code>
            </pre>
          </div>
          <h4 className="text-base sm:text-lg font-bold text-white mt-6 mb-2 tracking-tight flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
            <span>23.10 Testing the implementation</span>
          </h4>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public class Main  {
  public static void main(String[] args)  {
    TreeNode root = new TreeNode(1);
    root.left = new TreeNode(2);
    root.right = new TreeNode(3);
    root.right.left = new TreeNode(4);
    root.right.right = new TreeNode(5);
    Codec codec = new Codec();
    String serialized = codec.serialize(root);
    System.out.println(serialized);
    TreeNode reconstructed = codec.deserialize(serialized);
    System.out.println("Reconstructed tree:");
    preorder(reconstructed);

  }
  static void preorder(TreeNode root)  {
    if (root == null)  {
      return;

    }
    System.out.print(root.val + " ");
    preorder(root.left);
    preorder(root.right);

  }

}`}</code>
            </pre>
          </div>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Output:
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            1,2,#,#,3,4,#,#,5,#,# Reconstructed tree: 1 2 3 4 5
          </p>
          <h4 className="text-base sm:text-lg font-bold text-white mt-6 mb-2 tracking-tight flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
            <span>23.11 Complexity analysis</span>
          </h4>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            For a tree containing \(n\) nodes:
          </p>
          <div className="overflow-x-auto my-4 rounded-xl border border-slate-800 shadow-2xs">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-white border-b border-slate-800 font-semibold">
                <tr>
                  <th className="px-4 py-3">Operation</th>
                  <th className="px-4 py-3">Time</th>
                  <th className="px-4 py-3">Space</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">Serialization</td>
                  <td className="px-4 py-2.5 text-slate-300">\(O(n)\)</td>
                  <td className="px-4 py-2.5 text-slate-300">\(O(n)\) output</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">Deserialization</td>
                  <td className="px-4 py-2.5 text-slate-300">\(O(n)\)</td>
                  <td className="px-4 py-2.5 text-slate-300">\(O(n)\)</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            The recursive stack requires \(O(h)\) auxiliary space.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            The serialized representation also includes null markers, so it contains \(2n+1\) tokens for a binary tree with \(n\) nodes.
          </p>
          <h4 className="text-base sm:text-lg font-bold text-white mt-6 mb-2 tracking-tight flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
            <span>23.12 Practical applications</span>
          </h4>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Serialization and deserialization are useful for:
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Saving tree structures.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Transmitting trees through APIs.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Storing configuration hierarchies.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Caching structured objects.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Sharing tree data between systems.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Reconstructing abstract syntax trees.
          </p>
      </div>
    )
  },
  {
    id: "tree-patterns",
    number: "24",
    title: "24. Core Binary Tree Patterns for Interviews",
    category: "Part 24 · Algorithmic Patterns",
    content: (
      <div className="space-y-4 text-slate-200 leading-relaxed font-sans">
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Understanding individual algorithms is not enough. You should also learn to recognize common problem-solving patterns.
          </p>
          <h4 className="text-base sm:text-lg font-bold text-white mt-6 mb-2 tracking-tight flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
            <span>24.1 Pattern 1 — DFS recursion</span>
          </h4>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Use DFS when you need to explore a tree's branches recursively.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Typical problems:
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Preorder traversal.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Inorder traversal.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Postorder traversal.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Maximum depth.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Height of a tree.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Path sum.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Tree diameter.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            General template:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`static void dfs(TreeNode root)  {
  if (root == null)  {
    return;

  }
  // Process current node dfs(root.left);
  dfs(root.right);

}`}</code>
            </pre>
          </div>
          <h4 className="text-base sm:text-lg font-bold text-white mt-6 mb-2 tracking-tight flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
            <span>24.2 Pattern 2 — BFS using Queue</span>
          </h4>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Use BFS when the problem requires level-by-level processing.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Typical problems:
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Level-order traversal.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Minimum depth.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Right side view.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Average of levels.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Zigzag traversal.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Level-based tree processing.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            General template:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`static void bfs(TreeNode root)  {
  if (root == null)  {
    return;

  }
  Queue<TreeNode> queue = new LinkedList<>();
  queue.offer(root);
  while (!queue.isEmpty())  {
    TreeNode current = queue.poll();
    // Process current node if (current.left != null)  {
      queue.offer(current.left);

    }
    if (current.right != null)  {
      queue.offer(current.right);

    }

  }

}`}</code>
            </pre>
          </div>
          <h4 className="text-base sm:text-lg font-bold text-white mt-6 mb-2 tracking-tight flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
            <span>24.3 Pattern 3 — Bottom-up recursion</span>
          </h4>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Sometimes a parent needs information calculated from its children.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Examples:
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Tree height.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Tree diameter.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Balanced binary tree.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Maximum path sum.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            In these problems:
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Solve the left subtree.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Solve the right subtree.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Combine their results.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Return information to the parent.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            This is often called a postorder or bottom-up approach.
          </p>
          <h4 className="text-base sm:text-lg font-bold text-white mt-6 mb-2 tracking-tight flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
            <span>24.4 Pattern 4 — BST property exploitation</span>
          </h4>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            When a problem gives you a BST, use its ordering property instead of searching the entire tree.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Examples:
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Search in BST.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Insert into BST.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Delete from BST.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Find minimum or maximum.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Validate BST.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Find kth smallest.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Find LCA in BST.
          </p>
          <h4 className="text-base sm:text-lg font-bold text-white mt-6 mb-2 tracking-tight flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
            <span>24.5 Pattern 5 — Range validation</span>
          </h4>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Use minimum and maximum boundaries when a problem requires every node to satisfy a global constraint.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Example:
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Validate Binary Search Tree
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            General idea:
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            validate(node, minimum, maximum)
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            The valid range changes as you move down the tree.
          </p>
          <h4 className="text-base sm:text-lg font-bold text-white mt-6 mb-2 tracking-tight flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
            <span>24.6 Pattern 6 — Tree serialization</span>
          </h4>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Use traversal plus null markers when you need to preserve the entire tree structure.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Examples:
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Serialize and deserialize.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Clone binary trees.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Store tree structures.
          </p>
          <h4 className="text-base sm:text-lg font-bold text-white mt-6 mb-2 tracking-tight flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
            <span>24.7 Pattern summary</span>
          </h4>
          <div className="overflow-x-auto my-4 rounded-xl border border-slate-800 shadow-2xs">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-white border-b border-slate-800 font-semibold">
                <tr>
                  <th className="px-4 py-3">Pattern</th>
                  <th className="px-4 py-3">Common technique</th>
                  <th className="px-4 py-3">Example</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">DFS</td>
                  <td className="px-4 py-2.5 text-slate-300">Recursion / Stack</td>
                  <td className="px-4 py-2.5 text-slate-300">Tree traversals</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">BFS</td>
                  <td className="px-4 py-2.5 text-slate-300">Queue</td>
                  <td className="px-4 py-2.5 text-slate-300">Level-order</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">Bottom-up</td>
                  <td className="px-4 py-2.5 text-slate-300">Recursive return values</td>
                  <td className="px-4 py-2.5 text-slate-300">Diameter</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">BST exploitation</td>
                  <td className="px-4 py-2.5 text-slate-300">Comparisons</td>
                  <td className="px-4 py-2.5 text-slate-300">Search BST</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">Range validation</td>
                  <td className="px-4 py-2.5 text-slate-300">Min/max bounds</td>
                  <td className="px-4 py-2.5 text-slate-300">Validate BST</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">Serialization</td>
                  <td className="px-4 py-2.5 text-slate-300">Traversal + null markers</td>
                  <td className="px-4 py-2.5 text-slate-300">Codec</td>
                </tr>
              </tbody>
            </table>
          </div>
      </div>
    )
  },
  {
    id: "complexity-matrix",
    number: "25",
    title: "25. Complete Complexity Cheat Sheet",
    category: "Part 25 · Complexity Matrix",
    content: (
      <div className="space-y-4 text-slate-200 leading-relaxed font-sans">
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            This table is important for interviews.
          </p>
          <div className="overflow-x-auto my-4 rounded-xl border border-slate-800 shadow-2xs">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-white border-b border-slate-800 font-semibold">
                <tr>
                  <th className="px-4 py-3">Operation</th>
                  <th className="px-4 py-3">Time complexity</th>
                  <th className="px-4 py-3">Auxiliary space</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">Preorder traversal</td>
                  <td className="px-4 py-2.5 text-slate-300">\(O(n)\)</td>
                  <td className="px-4 py-2.5 text-slate-300">\(O(h)\)</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">Inorder traversal</td>
                  <td className="px-4 py-2.5 text-slate-300">\(O(n)\)</td>
                  <td className="px-4 py-2.5 text-slate-300">\(O(h)\)</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">Postorder traversal</td>
                  <td className="px-4 py-2.5 text-slate-300">\(O(n)\)</td>
                  <td className="px-4 py-2.5 text-slate-300">\(O(h)\)</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">Level-order traversal</td>
                  <td className="px-4 py-2.5 text-slate-300">\(O(n)\)</td>
                  <td className="px-4 py-2.5 text-slate-300">\(O(w)\)</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">Find tree height</td>
                  <td className="px-4 py-2.5 text-slate-300">\(O(n)\)</td>
                  <td className="px-4 py-2.5 text-slate-300">\(O(h)\)</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">Tree diameter, optimized</td>
                  <td className="px-4 py-2.5 text-slate-300">\(O(n)\)</td>
                  <td className="px-4 py-2.5 text-slate-300">\(O(h)\)</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">Check balanced tree</td>
                  <td className="px-4 py-2.5 text-slate-300">\(O(n)\)</td>
                  <td className="px-4 py-2.5 text-slate-300">\(O(h)\)</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">LCA in a general binary tree</td>
                  <td className="px-4 py-2.5 text-slate-300">\(O(n)\)</td>
                  <td className="px-4 py-2.5 text-slate-300">\(O(h)\)</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">Validate BST</td>
                  <td className="px-4 py-2.5 text-slate-300">\(O(n)\)</td>
                  <td className="px-4 py-2.5 text-slate-300">\(O(h)\)</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">Serialize tree</td>
                  <td className="px-4 py-2.5 text-slate-300">\(O(n)\)</td>
                  <td className="px-4 py-2.5 text-slate-300">\(O(n)\) output</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">Deserialize tree</td>
                  <td className="px-4 py-2.5 text-slate-300">\(O(n)\)</td>
                  <td className="px-4 py-2.5 text-slate-300">\(O(n)\) output and structure</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">Search in balanced BST</td>
                  <td className="px-4 py-2.5 text-slate-300">\(O(\log n)\)</td>
                  <td className="px-4 py-2.5 text-slate-300">\(O(1)\) iterative</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">Insert in balanced BST</td>
                  <td className="px-4 py-2.5 text-slate-300">\(O(\log n)\)</td>
                  <td className="px-4 py-2.5 text-slate-300">\(O(1)\) iterative</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">Delete in balanced BST</td>
                  <td className="px-4 py-2.5 text-slate-300">\(O(\log n)\)</td>
                  <td className="px-4 py-2.5 text-slate-300">\(O(h)\) recursive</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">Search in skewed BST</td>
                  <td className="px-4 py-2.5 text-slate-300">\(O(n)\)</td>
                  <td className="px-4 py-2.5 text-slate-300">\(O(1)\) iterative</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">Insert in skewed BST</td>
                  <td className="px-4 py-2.5 text-slate-300">\(O(n)\)</td>
                  <td className="px-4 py-2.5 text-slate-300">\(O(1)\) iterative</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">Delete in skewed BST</td>
                  <td className="px-4 py-2.5 text-slate-300">\(O(n)\)</td>
                  <td className="px-4 py-2.5 text-slate-300">\(O(n)\) recursive</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Where:
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            \(n\) = number of nodes.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            \(h\) = tree height.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            \(w\) = maximum width of the tree.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Remember that ordinary BSTs are not automatically balanced. Their efficiency depends on their shape.
          </p>
      </div>
    )
  },
  {
    id: "common-mistakes",
    number: "26",
    title: "26. Common Mistakes & Interview Traps",
    category: "Part 26 · Defensive Coding",
    content: (
      <div className="space-y-4 text-slate-200 leading-relaxed font-sans">
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            These are mistakes that frequently cause incorrect interview solutions.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Mistake 1 — Confusing height and depth
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Depth measures distance from the root.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Height measures distance to the deepest leaf.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Always check which convention the problem uses and whether it counts edges or nodes.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Mistake 2 — Forgetting the null base case
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Incorrect recursive implementations can cause NullPointerException or infinite recursion.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Always consider:
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            if (root == null) &#123; return; &#125;
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            The return value may differ according to the problem.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Mistake 3 — Confusing binary tree and BST
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            A binary tree does not require sorted values.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            A BST does.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Never use BST comparisons on an arbitrary binary tree.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Mistake 4 — Checking only immediate BST children
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            This is insufficient:
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            root.left.val &lt; root.val root.right.val &gt; root.val
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            The entire left subtree must be smaller than the current node, and the entire right subtree must be larger.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Use range validation.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Mistake 5 — Forgetting to reconnect recursive subtrees
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            In insertion and deletion, this is important:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`root.left = insertBST(root.left, value);`}</code>
            </pre>
          </div>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            and:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`root.right = deleteBST(root.right, key);`}</code>
            </pre>
          </div>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            The returned subtree must be attached to its parent.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Mistake 6 — Calculating diameter incorrectly
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Do not assume that the longest path always passes through the root.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Calculate the diameter contribution at every node.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Mistake 7 — Treating BFS and DFS as the same
          </p>
          <div className="p-4 rounded-xl border bg-orange-500/10 border-orange-500/30 text-orange-950 my-4 text-xs sm:text-sm leading-relaxed">
            <div className="font-bold flex items-center gap-1.5 mb-1 text-white">
              <span>ℹ️</span>
              <span>Remember</span>
            </div>
            <p className="text-slate-300"></p>
          </div>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            BFS uses a queue.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            DFS commonly uses recursion or a stack.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Mistake 8 — Ignoring tree shape
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            A normal BST can become skewed.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Never claim that its operations always take \(O(\log n)\).
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Mistake 9 — Forgetting duplicate handling
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            A BST implementation needs a defined duplicate policy.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Our implementation ignores duplicates and uses strict ordering.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Other implementations may consistently place duplicates on one side, but then validation rules must match that policy.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Mistake 10 — Not considering recursion depth
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            A highly skewed tree can produce recursion depth of \(O(n)\).
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            For very deep trees, iterative algorithms may be safer because Java does not guarantee unlimited call-stack depth.
          </p>
      </div>
    )
  },
  {
    id: "interview-questions",
    number: "27",
    title: "27. Important Theoretical Interview Questions",
    category: "Part 27 · Technical Q&A",
    content: (
      <div className="space-y-4 text-slate-200 leading-relaxed font-sans">
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            You should be able to explain these without looking at notes.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Tree fundamentals
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            What is a tree data structure?
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            What is the difference between a tree and a graph?
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            What is a root node?
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            What is a leaf node?
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            What is an internal node?
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            What is the difference between depth and height?
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            How many edges does a tree with \(n\) nodes have?
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            What is a subtree?
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            What is the difference between a full and complete binary tree?
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            What is a perfect binary tree?
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Binary trees and traversal
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            What is a binary tree?
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            What is the maximum number of nodes at depth \(d\)?
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            What is the maximum number of nodes in a binary tree of height \(h\)?
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Explain preorder traversal.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Explain inorder traversal.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Explain postorder traversal.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Explain level-order traversal.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            What is the difference between BFS and DFS?
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Why is a queue used in level-order traversal?
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            What is the time complexity of tree traversal?
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Binary Search Trees
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            What is a Binary Search Tree?
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            How is searching performed in a BST?
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            How does insertion work?
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Explain the three cases of BST deletion.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            What is the inorder successor?
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            What is the inorder predecessor?
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            How do you find the minimum node?
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            How do you find the maximum node?
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Why can a BST become skewed?
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            What is the difference between a balanced and unbalanced BST?
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Advanced problems
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            How do you calculate the height of a binary tree?
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            What is the diameter of a binary tree?
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            How do you check whether a binary tree is balanced?
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            What is an AVL tree?
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Explain Lowest Common Ancestor.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            How do you find LCA in a general binary tree?
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            How does LCA in a BST differ?
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            How do you validate a BST?
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Why is inorder traversal useful for validating a BST?
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            What is serialization?
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            What is deserialization?
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Why are null markers needed during serialization?
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            What is the difference between recursive and iterative traversal?
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            What can cause a stack overflow in recursive tree algorithms?
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Why does a balanced BST generally offer better performance?
          </p>
      </div>
    )
  },
  {
    id: "coding-assignments",
    number: "28",
    title: "28. Practical Coding Assignments (45 Problems)",
    category: "Part 28 · Hands-on Labs",
    content: (
      <div className="space-y-4 text-slate-200 leading-relaxed font-sans">
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Complete these assignments using Java. Write the code yourself before checking solutions.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Hands-on Practice
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Assignment 1 — Beginner
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Tree fundamentals and traversal
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Create a binary tree manually.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Count the total number of nodes.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Count the number of leaf nodes.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Count the number of internal nodes.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Calculate the height of a binary tree.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Implement preorder traversal.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Implement inorder traversal.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Implement postorder traversal.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Implement level-order traversal.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Find the sum of all node values.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Find the maximum value in a binary tree.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Find the minimum value in a binary tree.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Count nodes at a given depth.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Print all root-to-leaf paths.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Invert a binary tree.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Assignment 2 — Intermediate
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Binary Search Trees
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Search for an element in a BST.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Insert an element into a BST.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Delete an element from a BST.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Find the minimum and maximum nodes.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Find the inorder successor.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Find the inorder predecessor.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Validate a BST.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Find the kth smallest element in a BST.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Find the kth largest element in a BST.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Find the Lowest Common Ancestor in a BST.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Convert a sorted array into a balanced BST.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Check whether two trees are identical.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Check whether two trees are mirrors.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Find the minimum depth of a binary tree.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Find the right-side view of a binary tree.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Assignment 3 — Advanced
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Advanced tree algorithms
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Find the diameter of a binary tree.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Check whether a binary tree is height-balanced.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Find LCA in a general binary tree.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Serialize and deserialize a binary tree.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Find maximum path sum.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Find all root-to-leaf paths with a target sum.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Construct a binary tree from preorder and inorder traversals.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Construct a binary tree from inorder and postorder traversals.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Perform zigzag level-order traversal.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Find the vertical order traversal.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Find the top view of a binary tree.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Find the bottom view of a binary tree.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Find the boundary traversal.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Find the maximum width of a binary tree.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Recover a BST where two nodes have been swapped.
          </p>
      </div>
    )
  },
  {
    id: "leetcode-track",
    number: "29",
    title: "29. Curated LeetCode Practice Progression (24 Problems)",
    category: "Part 29 · LeetCode Track",
    content: (
      <div className="space-y-4 text-slate-200 leading-relaxed font-sans">
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            These problems provide a progression from basic traversal to advanced tree algorithms.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Problem numbers and difficulty labels refer to LeetCode.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Beginner — Master the foundations
          </p>
          <div className="overflow-x-auto my-4 rounded-xl border border-slate-800 shadow-2xs">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-white border-b border-slate-800 font-semibold">
                <tr>
                  <th className="px-4 py-3">Problem</th>
                  <th className="px-4 py-3">Difficulty</th>
                  <th className="px-4 py-3">Concept</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300"><a href="https://leetcode.com/problems/binary-tree-preorder-traversal/?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-300 font-medium underline inline-flex items-center gap-0.5">144. Binary Tree Preorder Traversal</a></td>
                  <td className="px-4 py-2.5 text-slate-300">Easy</td>
                  <td className="px-4 py-2.5 text-slate-300">DFS</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300"><a href="https://leetcode.com/problems/binary-tree-inorder-traversal/?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-300 font-medium underline inline-flex items-center gap-0.5">94. Binary Tree Inorder Traversal</a></td>
                  <td className="px-4 py-2.5 text-slate-300">Easy</td>
                  <td className="px-4 py-2.5 text-slate-300">DFS</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300"><a href="https://leetcode.com/problems/binary-tree-postorder-traversal/?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-300 font-medium underline inline-flex items-center gap-0.5">145. Binary Tree Postorder Traversal</a></td>
                  <td className="px-4 py-2.5 text-slate-300">Easy</td>
                  <td className="px-4 py-2.5 text-slate-300">DFS</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300"><a href="https://leetcode.com/problems/binary-tree-level-order-traversal/?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-300 font-medium underline inline-flex items-center gap-0.5">102. Binary Tree Level Order Traversal</a></td>
                  <td className="px-4 py-2.5 text-slate-300">Medium</td>
                  <td className="px-4 py-2.5 text-slate-300">BFS</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300"><a href="https://leetcode.com/problems/maximum-depth-of-binary-tree/?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-300 font-medium underline inline-flex items-center gap-0.5">104. Maximum Depth of Binary Tree</a></td>
                  <td className="px-4 py-2.5 text-slate-300">Easy</td>
                  <td className="px-4 py-2.5 text-slate-300">Recursion</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300"><a href="https://leetcode.com/problems/invert-binary-tree/?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-300 font-medium underline inline-flex items-center gap-0.5">226. Invert Binary Tree</a></td>
                  <td className="px-4 py-2.5 text-slate-300">Easy</td>
                  <td className="px-4 py-2.5 text-slate-300">Recursion</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300"><a href="https://leetcode.com/problems/same-tree/?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-300 font-medium underline inline-flex items-center gap-0.5">100. Same Tree</a></td>
                  <td className="px-4 py-2.5 text-slate-300">Easy</td>
                  <td className="px-4 py-2.5 text-slate-300">DFS</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300"><a href="https://leetcode.com/problems/symmetric-tree/?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-300 font-medium underline inline-flex items-center gap-0.5">101. Symmetric Tree</a></td>
                  <td className="px-4 py-2.5 text-slate-300">Easy</td>
                  <td className="px-4 py-2.5 text-slate-300">Recursion</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Intermediate — Master BST and tree properties
          </p>
          <div className="overflow-x-auto my-4 rounded-xl border border-slate-800 shadow-2xs">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-white border-b border-slate-800 font-semibold">
                <tr>
                  <th className="px-4 py-3">Problem</th>
                  <th className="px-4 py-3">Difficulty</th>
                  <th className="px-4 py-3">Concept</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300"><a href="https://leetcode.com/problems/search-in-a-binary-search-tree/?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-300 font-medium underline inline-flex items-center gap-0.5">700. Search in a BST</a></td>
                  <td className="px-4 py-2.5 text-slate-300">Easy</td>
                  <td className="px-4 py-2.5 text-slate-300">BST Search</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300"><a href="https://leetcode.com/problems/insert-into-a-binary-search-tree/?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-300 font-medium underline inline-flex items-center gap-0.5">701. Insert into a BST</a></td>
                  <td className="px-4 py-2.5 text-slate-300">Medium</td>
                  <td className="px-4 py-2.5 text-slate-300">BST Insertion</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300"><a href="https://leetcode.com/problems/delete-node-in-a-bst/?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-300 font-medium underline inline-flex items-center gap-0.5">450. Delete Node in a BST</a></td>
                  <td className="px-4 py-2.5 text-slate-300">Medium</td>
                  <td className="px-4 py-2.5 text-slate-300">BST Deletion</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300"><a href="https://leetcode.com/problems/validate-binary-search-tree/?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-300 font-medium underline inline-flex items-center gap-0.5">98. Validate BST</a></td>
                  <td className="px-4 py-2.5 text-slate-300">Medium</td>
                  <td className="px-4 py-2.5 text-slate-300">Range Validation</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300"><a href="https://leetcode.com/problems/kth-smallest-element-in-a-bst/?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-300 font-medium underline inline-flex items-center gap-0.5">230. Kth Smallest Element in a BST</a></td>
                  <td className="px-4 py-2.5 text-slate-300">Medium</td>
                  <td className="px-4 py-2.5 text-slate-300">Inorder</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300"><a href="https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-300 font-medium underline inline-flex items-center gap-0.5">235. LCA of a BST</a></td>
                  <td className="px-4 py-2.5 text-slate-300">Medium</td>
                  <td className="px-4 py-2.5 text-slate-300">BST</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300"><a href="https://leetcode.com/problems/balanced-binary-tree/?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-300 font-medium underline inline-flex items-center gap-0.5">110. Balanced Binary Tree</a></td>
                  <td className="px-4 py-2.5 text-slate-300">Easy</td>
                  <td className="px-4 py-2.5 text-slate-300">Height</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300"><a href="https://leetcode.com/problems/diameter-of-binary-tree/?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-300 font-medium underline inline-flex items-center gap-0.5">543. Diameter of Binary Tree</a></td>
                  <td className="px-4 py-2.5 text-slate-300">Easy</td>
                  <td className="px-4 py-2.5 text-slate-300">Bottom-up DFS</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Advanced — Interview-level mastery
          </p>
          <div className="overflow-x-auto my-4 rounded-xl border border-slate-800 shadow-2xs">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-white border-b border-slate-800 font-semibold">
                <tr>
                  <th className="px-4 py-3">Problem</th>
                  <th className="px-4 py-3">Difficulty</th>
                  <th className="px-4 py-3">Concept</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300"><a href="https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-300 font-medium underline inline-flex items-center gap-0.5">236. LCA of a Binary Tree</a></td>
                  <td className="px-4 py-2.5 text-slate-300">Medium</td>
                  <td className="px-4 py-2.5 text-slate-300">DFS</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300"><a href="https://leetcode.com/problems/binary-tree-maximum-path-sum/?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-300 font-medium underline inline-flex items-center gap-0.5">124. Binary Tree Maximum Path Sum</a></td>
                  <td className="px-4 py-2.5 text-slate-300">Hard</td>
                  <td className="px-4 py-2.5 text-slate-300">DFS + Recursion</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300"><a href="https://leetcode.com/problems/serialize-and-deserialize-binary-tree/?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-300 font-medium underline inline-flex items-center gap-0.5">297. Serialize and Deserialize Binary Tree</a></td>
                  <td className="px-4 py-2.5 text-slate-300">Hard</td>
                  <td className="px-4 py-2.5 text-slate-300">Serialization</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300"><a href="https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-300 font-medium underline inline-flex items-center gap-0.5">105. Construct Tree from Preorder and Inorder</a></td>
                  <td className="px-4 py-2.5 text-slate-300">Medium</td>
                  <td className="px-4 py-2.5 text-slate-300">Tree Construction</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300"><a href="https://leetcode.com/problems/binary-tree-right-side-view/?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-300 font-medium underline inline-flex items-center gap-0.5">199. Binary Tree Right Side View</a></td>
                  <td className="px-4 py-2.5 text-slate-300">Medium</td>
                  <td className="px-4 py-2.5 text-slate-300">BFS</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300"><a href="https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-300 font-medium underline inline-flex items-center gap-0.5">103. Binary Tree Zigzag Level Order Traversal</a></td>
                  <td className="px-4 py-2.5 text-slate-300">Medium</td>
                  <td className="px-4 py-2.5 text-slate-300">BFS</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300"><a href="https://leetcode.com/problems/maximum-width-of-binary-tree/?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-300 font-medium underline inline-flex items-center gap-0.5">662. Maximum Width of Binary Tree</a></td>
                  <td className="px-4 py-2.5 text-slate-300">Medium</td>
                  <td className="px-4 py-2.5 text-slate-300">BFS + Indexing</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300"><a href="https://leetcode.com/problems/recover-binary-search-tree/?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-300 font-medium underline inline-flex items-center gap-0.5">99. Recover Binary Search Tree</a></td>
                  <td className="px-4 py-2.5 text-slate-300">Hard</td>
                  <td className="px-4 py-2.5 text-slate-300">Inorder + BST</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Recommended order: Complete the beginner problems first, then BST operations, followed by diameter, balance checking, LCA, validation, and serialization.
          </p>
      </div>
    )
  },
  {
    id: "knowledge-check",
    number: "30",
    title: "30. Knowledge Assessment & Quiz",
    category: "Part 30 · Knowledge Check",
    content: (
      <div className="space-y-4 text-slate-200 leading-relaxed font-sans">
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Test your understanding before moving forward.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Module 12 assessment
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            0/8 answered
          </p>
          <h3 className="text-xl sm:text-2xl font-bold text-white mt-8 mb-3 tracking-tight border-b border-slate-800 pb-2">
            1. Which traversal visits Root → Left → Right?
          </h3>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Inorder
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Postorder
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Preorder
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Level-order
          </p>
          <h3 className="text-xl sm:text-2xl font-bold text-white mt-8 mb-3 tracking-tight border-b border-slate-800 pb-2">
            2. Which data structure is used for level-order traversal?
          </h3>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Stack
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Queue
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            HashMap
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            TreeSet
          </p>
          <h3 className="text-xl sm:text-2xl font-bold text-white mt-8 mb-3 tracking-tight border-b border-slate-800 pb-2">
            3. What is the maximum number of nodes in a binary tree of height 3?
          </h3>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            7
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            8
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            15
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            16
          </p>
          <h3 className="text-xl sm:text-2xl font-bold text-white mt-8 mb-3 tracking-tight border-b border-slate-800 pb-2">
            4. Where is the minimum element in a BST?
          </h3>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Root node
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Rightmost node
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Leftmost node
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Any leaf
          </p>
          <h3 className="text-xl sm:text-2xl font-bold text-white mt-8 mb-3 tracking-tight border-b border-slate-800 pb-2">
            5. Which node replaces a deleted BST node when using the inorder successor method?
          </h3>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Maximum in left subtree
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Minimum in right subtree
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Root node
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Any leaf
          </p>
          <h3 className="text-xl sm:text-2xl font-bold text-white mt-8 mb-3 tracking-tight border-b border-slate-800 pb-2">
            6. What is the time complexity of optimized binary tree diameter calculation?
          </h3>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            O(log n)
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            O(n log n)
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            O(n)
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            O(n²)
          </p>
          <h3 className="text-xl sm:text-2xl font-bold text-white mt-8 mb-3 tracking-tight border-b border-slate-800 pb-2">
            7. Which technique is most appropriate for validating the global BST ordering property?
          </h3>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Checking immediate children only
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Using minimum and maximum bounds
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Level-order traversal only
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Sorting the tree
          </p>
          <h3 className="text-xl sm:text-2xl font-bold text-white mt-8 mb-3 tracking-tight border-b border-slate-800 pb-2">
            8. Why are null markers used in tree serialization?
          </h3>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            To sort nodes
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            To reduce tree height
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            To preserve missing-child structure
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            To remove duplicate values
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Submit answers
          </p>
      </div>
    )
  },
  {
    id: "learning-outcomes",
    number: "31",
    title: "31. Learning Outcomes & Mastery Roadmap",
    category: "Milestone · Tree Mastery",
    content: (
      <div className="space-y-4 text-slate-200 leading-relaxed font-sans">
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            By the end of this module, you should be able to:
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Understand tree terminology and hierarchical relationships.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Differentiate full, complete, perfect, balanced, and skewed binary trees.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Implement binary trees using Java node references.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Implement preorder, inorder, postorder, and level-order traversal.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Implement BST searching, insertion, and deletion.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Find minimum, maximum, height, and diameter.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Check whether a binary tree is height-balanced.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Solve Lowest Common Ancestor problems.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Validate the BST ordering property using range validation.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Serialize and deserialize binary trees.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Recommended learning sequence
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-2.5">
            Do not try to memorize all tree algorithms at once. Follow this progression:
          </p>
          <div className="overflow-x-auto my-4 rounded-xl border border-slate-800 shadow-2xs">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-white border-b border-slate-800 font-semibold">
                <tr>
                  <th className="px-4 py-3">Stage</th>
                  <th className="px-4 py-3">What to master</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">1</td>
                  <td className="px-4 py-2.5 text-slate-300">Terminology, tree types, and Java representation</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">2</td>
                  <td className="px-4 py-2.5 text-slate-300">Recursive calls and the three DFS traversals</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">3</td>
                  <td className="px-4 py-2.5 text-slate-300">BFS and level-order traversal</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">4</td>
                  <td className="px-4 py-2.5 text-slate-300">BST search, insertion, and deletion</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">5</td>
                  <td className="px-4 py-2.5 text-slate-300">Minimum, maximum, height, and diameter</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">6</td>
                  <td className="px-4 py-2.5 text-slate-300">Balanced trees and LCA</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">7</td>
                  <td className="px-4 py-2.5 text-slate-300">BST validation</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">8</td>
                  <td className="px-4 py-2.5 text-slate-300">Serialization and deserialization</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">9</td>
                  <td className="px-4 py-2.5 text-slate-300">LeetCode practice and interview questions</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="p-4 rounded-xl border bg-orange-500/10 border-orange-500/30 text-orange-950 my-4 text-xs sm:text-sm leading-relaxed">
            <div className="font-bold flex items-center gap-1.5 mb-1 text-white">
              <span>💡</span>
              <span>My recommendation</span>
            </div>
            <p className="text-slate-300">Spend extra time understanding recursion and the recursive call stack. Once you understand how information moves from child nodes back to parent nodes, problems like tree height, diameter, balanced trees, and LCA become much easier.</p>
          </div>
          <div className="p-4 rounded-xl border bg-orange-500/10 border-orange-500/30 text-orange-950 my-4 text-xs sm:text-sm leading-relaxed">
            <div className="font-bold flex items-center gap-1.5 mb-1 text-white">
              <span>💡</span>
              <span>The central lesson of Module 12</span>
            </div>
            <p className="text-slate-300">Binary trees teach you how to solve hierarchical problems recursively, while Binary Search Trees teach you how to use ordering to make searching, insertion, and deletion more efficient. These concepts form the foundation for advanced trees, including AVL Trees, Red-Black Trees, Heaps, Segment Trees, and B-Trees.</p>
          </div>
      </div>
    )
  }
];

export default JAVA_TREES_SECTIONS;
